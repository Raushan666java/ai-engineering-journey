"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[9303],{

/***/ 40494
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_09_deep_learning_pytorch_09_model_deployment_md_fc1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-09-deep-learning-pytorch-09-model-deployment-md-fc1.json
const site_docs_courses_ai_engineering_placement_09_deep_learning_pytorch_09_model_deployment_md_fc1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/deep-learning-pytorch/09-model-deployment","title":"Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/09-deep-learning-pytorch/09-model-deployment.md","sourceDirName":"courses/ai-engineering-placement/09-deep-learning-pytorch","slug":"/ai-engineering-placement/09-deep-learning-pytorch/09-model-deployment","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/09-model-deployment","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":134,"frontMatter":{"id":"09-model-deployment","slug":"/ai-engineering-placement/09-deep-learning-pytorch/09-model-deployment","title":"Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning","sidebar_label":"Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning","sidebar_position":134},"sidebar":"placementSidebar","previous":{"title":"Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/08-training-pipelines"},"next":{"title":"Deployment Best Practices — A/B Testing, Monitoring, Model Versioning, Rollback","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/10-deployment-best-practices"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/09-deep-learning-pytorch/09-model-deployment.md


const frontMatter = {
	id: '09-model-deployment',
	slug: '/ai-engineering-placement/09-deep-learning-pytorch/09-model-deployment',
	title: 'Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning',
	sidebar_label: 'Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning',
	sidebar_position: 134
};
const contentTitle = 'Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning';

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
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "9.1 TorchScript",
  "id": "91-torchscript",
  "level": 2
}, {
  "value": "9.2 ONNX Export",
  "id": "92-onnx-export",
  "level": 2
}, {
  "value": "9.3 TorchServe",
  "id": "93-torchserve",
  "level": 2
}, {
  "value": "9.4 Quantization",
  "id": "94-quantization",
  "level": 2
}, {
  "value": "9.5 Pruning",
  "id": "95-pruning",
  "level": 2
}, {
  "value": "9.6 Mobile Deployment",
  "id": "96-mobile-deployment",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
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
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
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
    blockquote: "blockquote",
    button: "button",
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
        id: "model-deployment--torchscript-onnx-torchserve-quantization-pruning",
        children: "Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning"
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
            children: "Export PyTorch models using TorchScript tracing and scripting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Export models to ONNX format for cross-platform deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serve models with TorchServe for production inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply dynamic, static, and quantization-aware training (QAT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement model pruning for size and speed optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy models on mobile devices with PyTorch Mobile"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deep learning powers modern AI breakthroughs. PyTorch is the framework of choice for researchers and production engineers alike. This module covers neural networks, CNNs, RNNs, and deployment best practices."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding model deployment is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how model deployment works in practice."
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
            children: "9.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TorchScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracing, scripting, serialization, JIT compilation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ONNX Export"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "torch.onnx.export, opset, dynamic axes, validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TorchServe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model archiving, REST API, inference handlers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic, static, QAT, int8 inference, calibration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pruning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured/unstructured, magnitude pruning, L1, L2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PyTorch Mobile, Android/iOS integration, model optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    A[Trained PyTorch Model] --> B{Deployment Target?}\r\n    B -->|Python / No GPU| C[TorchScript Trace]\r\n    B -->|Cross-Platform| D[ONNX Export]\r\n    B -->|REST API| E[TorchServe]\r\n    B -->|Mobile / Edge| F[Quantization + Pruning]\r\n    C --> G[JIT Script Module]\r\n    D --> H[.onnx file]\r\n    D --> I[ONNX Runtime]\r\n    E --> J[Model Archive .mar]\r\n    E --> K[REST Endpoint]\r\n    F --> L[Quantized Model]\r\n    F --> M[Pruned Model]\r\n    L --> N[PyTorch Mobile]\r\n    M --> N\r\n    G & H & K & N --> O[Production Inference]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "91-torchscript",
      children: "9.1 TorchScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TorchScript bridges the gap between research (eager mode) and production (graph mode). It serializes models for deployment without Python dependencies."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\r\nimport torch.nn as nn\r\nimport torch.nn.utils.prune as prune\r\nimport numpy as np\r\nfrom pathlib import Path\r\nfrom typing import Optional, Tuple, Dict, List\r\n\r\nclass SimpleModel(nn.Module):\r\n    def __init__(self):\r\n        super().__init__()\r\n        self.conv = nn.Conv2d(3, 16, 3, padding=1)\r\n        self.bn = nn.BatchNorm2d(16)\r\n        self.relu = nn.ReLU()\r\n        self.pool = nn.AdaptiveAvgPool2d(1)\r\n        self.fc = nn.Linear(16, 10)\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        x = self.conv(x)\r\n        x = self.bn(x)\r\n        x = self.relu(x)\r\n        x = self.pool(x)\r\n        x = x.view(x.size(0), -1)\r\n        return self.fc(x)\r\n\r\nclass TorchScriptExporter:\r\n    @staticmethod\r\n    def trace(model: nn.Module, example_input: torch.Tensor,\r\n              filename: str = \"model_traced.pt\") -> torch.jit.ScriptModule:\r\n        model.eval()\r\n        traced = torch.jit.trace(model, example_input)\r\n        traced.save(filename)\r\n        print(f\"Traced model saved to {filename}\")\r\n        return traced\r\n\r\n    @staticmethod\r\n    def script(model: nn.Module, filename: str = \"model_scripted.pt\"\r\n               ) -> torch.jit.ScriptModule:\r\n        model.eval()\r\n        scripted = torch.jit.script(model)\r\n        scripted.save(filename)\r\n        print(f\"Scripted model saved to {filename}\")\r\n        return scripted\r\n\r\n    @staticmethod\r\n    def trace_with_control_flow(model: nn.Module, example_input: torch.Tensor,\r\n                                filename: str = \"model_traced.pt\"):\r\n        model.eval()\r\n        try:\r\n            traced = torch.jit.trace(model, example_input)\r\n            traced.save(filename)\r\n            return traced\r\n        except RuntimeError as e:\r\n            print(f\"Tracing failed (control flow detected): {e}\")\r\n            print(\"Falling back to scripting...\")\r\n            return TorchScriptExporter.script(model, filename)\r\n\r\n    @staticmethod\r\n    def optimize_for_inference(script_module: torch.jit.ScriptModule,\r\n                               filename: str = \"model_optimized.pt\"\r\n                               ) -> torch.jit.ScriptModule:\r\n        optimized = torch.jit.optimize_for_inference(script_module)\r\n        optimized.save(filename)\r\n        return optimized\r\n\r\nclass ModelWithControlFlow(nn.Module):\r\n    def __init__(self, num_classes: int = 10, use_dropout: bool = True):\r\n        super().__init__()\r\n        self.use_dropout = use_dropout\r\n        self.fc1 = nn.Linear(100, 50)\r\n        self.dropout = nn.Dropout(0.5)\r\n        self.fc2 = nn.Linear(50, num_classes)\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        x = torch.relu(self.fc1(x))\r\n        if self.use_dropout and self.training:\r\n            x = self.dropout(x)\r\n        return self.fc2(x)\r\n\r\nmodel = SimpleModel()\r\nexample = torch.randn(1, 3, 32, 32)\r\n\r\n## Tracing works for models without control flow\r\ntraced = TorchScriptExporter.trace(model, example, \"model_traced.pt\")\r\nscripted = TorchScriptExporter.script(model, \"model_scripted.pt\")\r\n\r\n## Compare outputs\r\nwith torch.no_grad():\r\n    original_out = model(example)\r\n    traced_out = traced(example)\r\n    scripted_out = scripted(example)\r\n\r\nprint(f\"Tracing speed: original={torch.no_grad().__class__.__name__}\")\r\nprint(f\"Outputs match: {torch.allclose(original_out, traced_out)}\")\r\n\r\n## Tracing fails for control flow models — use scripting instead\r\nmodel_cf = ModelWithControlFlow()\r\nscripted_cf = TorchScriptExporter.script(model_cf, \"model_cf_scripted.pt\")\r\nprint(f\"Control flow model scripted successfully\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JIT compilation benefits"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class JITBenchmark:\r\n    @staticmethod\r\n    def benchmark_inference(model: nn.Module, jit_model: torch.jit.ScriptModule,\r\n                            input_tensor: torch.Tensor, iterations: int = 1000\r\n                            ) -> Dict[str, float]:\r\n        results = {}\r\n        model.eval()\r\n        jit_model.eval()\r\n\r\n        # Warmup\r\n        for _ in range(100):\r\n            model(input_tensor)\r\n            jit_model(input_tensor)\r\n\r\n        # Eager mode\r\n        start = torch.cuda.Event(enable_timing=True)\r\n        end = torch.cuda.Event(enable_timing=True)\r\n        if torch.cuda.is_available():\r\n            start.record()\r\n            for _ in range(iterations):\r\n                model(input_tensor)\r\n            end.record()\r\n            torch.cuda.synchronize()\r\n            results[\"eager_ms\"] = start.elapsed_time(end) / iterations\r\n        else:\r\n            import time\r\n            t0 = time.perf_counter()\r\n            for _ in range(iterations):\r\n                model(input_tensor)\r\n            results[\"eager_ms\"] = (time.perf_counter() - t0) * 1000 / iterations\r\n\r\n        # JIT mode\r\n        if torch.cuda.is_available():\r\n            start.record()\r\n            for _ in range(iterations):\r\n                jit_model(input_tensor)\r\n            end.record()\r\n            torch.cuda.synchronize()\r\n            results[\"jit_ms\"] = start.elapsed_time(end) / iterations\r\n        else:\r\n            t0 = time.perf_counter()\r\n            for _ in range(iterations):\r\n                jit_model(input_tensor)\r\n            results[\"jit_ms\"] = (time.perf_counter() - t0) * 1000 / iterations\r\n\r\n        results[\"speedup\"] = results[\"eager_ms\"] / results[\"jit_ms\"]\r\n        return results\r\n\r\njit_bench = JITBenchmark()\r\nx_gpu = torch.randn(1, 3, 32, 32)\r\nprint(\"JIT benchmarking requires CUDA for accurate GPU timing\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "92-onnx-export",
      children: "9.2 ONNX Export"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ONNX (Open Neural Network Exchange) enables model portability between frameworks."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ONNXExporter:\r\n    def __init__(self, model: nn.Module, example_input: torch.Tensor,\r\n                 output_path: str = \"model.onnx\"):\r\n        self.model = model.eval()\r\n        self.example_input = example_input\r\n        self.output_path = output_path\r\n\r\n    def export(self, opset_version: int = 17, dynamic_batch: bool = True,\r\n               input_names: list = None, output_names: list = None):\r\n        if input_names is None:\r\n            input_names = [\"input\"]\r\n        if output_names is None:\r\n            output_names = [\"output\"]\r\n        dynamic_axes = {}\r\n        if dynamic_batch:\r\n            dynamic_axes = {\r\n                \"input\": {0: \"batch_size\"},\r\n                \"output\": {0: \"batch_size\"},\r\n            }\r\n        torch.onnx.export(\r\n            self.model,\r\n            self.example_input,\r\n            self.output_path,\r\n            export_params=True,\r\n            opset_version=opset_version,\r\n            do_constant_folding=True,\r\n            input_names=input_names,\r\n            output_names=output_names,\r\n            dynamic_axes=dynamic_axes,\r\n        )\r\n        print(f\"ONNX model exported to {self.output_path}\")\r\n\r\n    @staticmethod\r\n    def validate_onnx(model_path: str):\r\n        import onnx\r\n        onnx_model = onnx.load(model_path)\r\n        onnx.checker.check_model(onnx_model)\r\n        graph = onnx_model.graph\r\n        return {\r\n            \"inputs\": [(i.name, i.type.tensor_type.shape) for i in graph.input],\r\n            \"outputs\": [(o.name, o.type.tensor_type.shape) for o in graph.output],\r\n            \"nodes\": len(graph.node),\r\n            \"params\": len(graph.initializer),\r\n        }\r\n\r\n    @staticmethod\r\n    def optimize_onnx(model_path: str, output_path: str = None):\r\n        import onnxruntime as ort\r\n        if output_path is None:\r\n            output_path = model_path.replace(\".onnx\", \"_optimized.onnx\")\r\n        sess_options = ort.SessionOptions()\r\n        sess_options.graph_optimization_level = ort.GraphOptimizationLevel.ORT_ENABLE_ALL\r\n        sess_options.optimized_model_filepath = output_path\r\n        _ = ort.InferenceSession(model_path, sess_options)\r\n        print(f\"Optimized ONNX saved to {output_path}\")\r\n\r\n    def run_onnx_inference(self, input_data: np.ndarray) -> np.ndarray:\r\n        import onnxruntime as ort\r\n        session = ort.InferenceSession(self.output_path)\r\n        input_name = session.get_inputs()[0].name\r\n        return session.run(None, {input_name: input_data.astype(np.float32)})\r\n\r\nclass ONNXWithCustomOps(nn.Module):\r\n    def __init__(self):\r\n        super().__init__()\r\n        self.conv = nn.Conv2d(3, 16, 3)\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        x = self.conv(x)\r\n        x = torch.gelu(x)  # Custom op — may not export\r\n        return x\r\n\r\nmodel_simple = SimpleModel()\r\nexample_input = torch.randn(1, 3, 32, 32)\r\nexporter = ONNXExporter(model_simple, example_input, \"model.onnx\")\r\nexporter.export(opset_version=17, dynamic_batch=True)\r\n\r\n## Validate\r\ninfo = ONNXExporter.validate_onnx(\"model.onnx\")\r\nprint(f\"ONNX model: {info['nodes']} nodes, {info['params']} params\")\r\nfor name, shape in info[\"inputs\"]:\r\n    print(f\"  Input '{name}': {shape}\")\r\nfor name, shape in info[\"outputs\"]:\r\n    print(f\"  Output '{name}': {shape}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ONNX Runtime inference"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ONNXRuntimeSession:\r\n    def __init__(self, model_path: str, providers: list = None):\r\n        import onnxruntime as ort\r\n        if providers is None:\r\n            providers = (\r\n                [\"CUDAExecutionProvider\", \"CPUExecutionProvider\"]\r\n                if ort.get_device() == \"GPU\" else [\"CPUExecutionProvider\"]\r\n            )\r\n        self.session = ort.InferenceSession(model_path, providers=providers)\r\n        self.input_name = self.session.get_inputs()[0].name\r\n        self.output_name = self.session.get_outputs()[0].name\r\n\r\n    def predict(self, x: np.ndarray) -> np.ndarray:\r\n        return self.session.run([self.output_name], {self.input_name: x})[0]\r\n\r\n    def benchmark(self, shape: Tuple[int, ...], iterations: int = 1000\r\n                  ) -> float:\r\n        import time\r\n        x = np.random.randn(*shape).astype(np.float32)\r\n        for _ in range(100):\r\n            self.predict(x)\r\n        t0 = time.perf_counter()\r\n        for _ in range(iterations):\r\n            self.predict(x)\r\n        return (time.perf_counter() - t0) * 1000 / iterations\r\n\r\nort_session = ONNXRuntimeSession(\"model.onnx\")\r\nlatency = ort_session.benchmark((1, 3, 32, 32), iterations=500)\r\nprint(f\"ONNX Runtime avg latency: {latency:.2f}ms per inference\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "93-torchserve",
      children: "9.3 TorchServe"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TorchServe is a production-ready model serving framework for PyTorch."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TorchServeHandler:\r\n    def __init__(self, model_path: str):\r\n        self.model = torch.jit.load(model_path)\r\n        self.model.eval()\r\n        self.initialized = False\r\n\r\n    def initialize(self, context: dict):\r\n        self.initialized = True\r\n        self.device = torch.device(\"cuda\" if torch.cuda.is_available() else \"cpu\")\r\n        self.model = self.model.to(self.device)\r\n        self.manifest = context.get(\"manifest\", {})\r\n\r\n    def preprocess(self, data: list) -> torch.Tensor:\r\n        import io\r\n        from PIL import Image\r\n        from torchvision import transforms as T\r\n        images = []\r\n        transform = T.Compose([\r\n            T.Resize(256),\r\n            T.CenterCrop(224),\r\n            T.ToTensor(),\r\n            T.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),\r\n        ])\r\n        for row in data:\r\n            image = Image.open(io.BytesIO(row[\"data\"]))\r\n            images.append(transform(image))\r\n        return torch.stack(images)\r\n\r\n    def inference(self, input_tensor: torch.Tensor) -> torch.Tensor:\r\n        with torch.no_grad():\r\n            output = self.model(input_tensor.to(self.device))\r\n            return torch.softmax(output, dim=1)\r\n\r\n    def postprocess(self, output: torch.Tensor) -> list:\r\n        probabilities, indices = torch.topk(output, k=5)\r\n        results = []\r\n        for batch_idx in range(output.size(0)):\r\n            batch_results = [\r\n                {\"class\": int(indices[batch_idx][i]),\r\n                 \"probability\": float(probabilities[batch_idx][i])}\r\n                for i in range(5)\r\n            ]\r\n            results.append(batch_results)\r\n        return results\r\n\r\nclass TorchServeConfig:\r\n    @staticmethod\r\n    def generate_model_archive(model_name: str = \"my_model\", version: str = \"1.0\",\r\n                               serialized_file: str = \"model.pt\",\r\n                               handler_file: str = \"handler.py\",\r\n                               extra_files: list = None):\r\n        config = {\r\n            \"model_name\": model_name,\r\n            \"version\": version,\r\n            \"serialized_file\": serialized_file,\r\n            \"handler\": handler_file,\r\n            \"requirements\": [\"torch>=2.0\", \"torchvision>=0.15\", \"Pillow>=9.0\"],\r\n            \"batch_size\": 4,\r\n            \"max_batch_delay\": 100,\r\n            \"device\": \"gpu\" if torch.cuda.is_available() else \"cpu\",\r\n        }\r\n        if extra_files:\r\n            config[\"extra_files\"] = \",\".join(extra_files)\r\n        return config\r\n\r\n    @staticmethod\r\n    def config_endpoint(\r\n        model_name: str = \"my_model\",\r\n        min_workers: int = 1, max_workers: int = 4,\r\n        batch_size: int = 4, max_batch_delay: int = 100,\r\n        response_timeout: int = 120,\r\n    ) -> str:\r\n        return f\"\"\"\r\n{{\"model_name\": \"{model_name}\",\r\n \"minWorkers\": {min_workers},\r\n \"maxWorkers\": {max_workers},\r\n \"batchSize\": {batch_size},\r\n \"maxBatchDelay\": {max_batch_delay},\r\n \"responseTimeout\": {response_timeout},\r\n \"deviceType\": \"gpu\" if cuda else \"cpu\",\r\n \"parallelType\": \"tp\",\r\n \"parallelLevel\": 1}}\r\n\"\"\"\r\n\r\nhandler = TorchServeHandler(\"model_traced.pt\")\r\nhandler.initialize({\"manifest\": {}})\r\nprint(f\"TorchServe handler initialized on {handler.device}\")\r\n\r\nconfig = TorchServeConfig.generate_model_archive(\r\n    model_name=\"resnet_cifar10\", version=\"1.0\",\r\n    serialized_file=\"model_traced.pt\", handler_file=\"resnet_handler.py\"\r\n)\r\nprint(f\"TorchServe model archive config generated for {config['model_name']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Creating a MAR file (Model Archive)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ModelArchiveBuilder:\r\n    @staticmethod\r\n    def archive_command(model_name: str, serialized_file: str,\r\n                        handler_file: str, output_path: str = None):\r\n        if output_path is None:\r\n            output_path = f\"{model_name}.mar\"\r\n        cmd = (\r\n            f\"torch-model-archiver --model-name {model_name} \"\r\n            f\"--version 1.0 --serialized-file {serialized_file} \"\r\n            f\"--handler {handler_file} --export-path . \"\r\n            f\"-r requirements.txt --force\"\r\n        )\r\n        return cmd\r\n\r\n    @staticmethod\r\n    def start_serve_command(model_name: str, n_gpu: int = 1):\r\n        return (\r\n            f\"torchserve --start --model-store . \"\r\n            f\"--models {model_name}={model_name}.mar \"\r\n            f\"--ncs --ts-config config.properties \"\r\n            f\"--disable-token-auth\"\r\n        )\r\n\r\n    @staticmethod\r\n    def inference_request(data_url: str):\r\n        import json\r\n        return {\r\n            \"method\": \"POST\",\r\n            \"url\": f\"http://localhost:8080/predictions/{data_url.split('/')[-1]}\",\r\n            \"headers\": {\"Content-Type\": \"application/octet-stream\"},\r\n        }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "94-quantization",
      children: "9.4 Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quantization reduces model size and speeds up inference by using lower precision (int8) instead of FP32."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class QuantizationDemo:\r\n    def __init__(self, model: nn.Module):\r\n        self.model = model.eval()\r\n        self.model_fp32 = model\r\n\r\n    def dynamic_quantization(self, qconfig_spec: dict = None\r\n                             ) -> torch.quantization.QuantizedModel:\r\n        if qconfig_spec is None:\r\n            qconfig_spec = {nn.Linear, nn.LSTM, nn.GRU}\r\n        quantized = torch.quantization.quantize_dynamic(\r\n            self.model, qconfig_spec, dtype=torch.qint8\r\n        )\r\n        return quantized\r\n\r\n    def static_quantization(self, calibration_loader: DataLoader\r\n                            ) -> nn.Module:\r\n        self.model.qconfig = torch.quantization.get_default_qconfig(\"fbgemm\")\r\n        torch.quantization.prepare(self.model, inplace=True)\r\n        self._calibrate(calibration_loader)\r\n        torch.quantization.convert(self.model, inplace=True)\r\n        return self.model\r\n\r\n    def _calibrate(self, loader: DataLoader, num_batches: int = 100):\r\n        self.model.eval()\r\n        with torch.no_grad():\r\n            for i, (x, _) in enumerate(loader):\r\n                if i >= num_batches:\r\n                    break\r\n                self.model(x)\r\n\r\n    @staticmethod\r\n    def compare_size(model_fp32: nn.Module, model_quantized: nn.Module) -> dict:\r\n        import os\r\n        torch.save(model_fp32.state_dict(), \"temp_fp32.pt\")\r\n        torch.save(model_quantized.state_dict(), \"temp_quantized.pt\")\r\n        fp32_size = os.path.getsize(\"temp_fp32.pt\") / 1024\r\n        int8_size = os.path.getsize(\"temp_quantized.pt\") / 1024\r\n        os.remove(\"temp_fp32.pt\")\r\n        os.remove(\"temp_quantized.pt\")\r\n        return {\r\n            \"fp32_kb\": fp32_size,\r\n            \"int8_kb\": int8_size,\r\n            \"reduction_pct\": (1 - int8_size / fp32_size) * 100,\r\n        }\r\n\r\nclass QuantizationAwareTraining:\r\n    def __init__(self, model: nn.Module):\r\n        self.model = model\r\n        self.model.qconfig = torch.quantization.get_default_qat_qconfig(\"fbgemm\")\r\n        torch.quantization.prepare_qat(self.model, inplace=True)\r\n\r\n    def train_one_epoch(self, loader: DataLoader, optimizer: optim.Optimizer,\r\n                        criterion: nn.Module, device: str = \"cuda\"):\r\n        self.model.train()\r\n        for x, y in loader:\r\n            x, y = x.to(device), y.to(device)\r\n            optimizer.zero_grad()\r\n            output = self.model(x)\r\n            loss = criterion(output, y)\r\n            loss.backward()\r\n            optimizer.step()\r\n\r\n    def convert(self) -> nn.Module:\r\n        self.model.eval()\r\n        torch.quantization.convert(self.model, inplace=True)\r\n        return self.model\r\n\r\nclass QuantizationConfig:\r\n    @staticmethod\r\n    def get_default_qconfig(backend: str = \"fbgemm\") -> torch.quantization.QConfig:\r\n        return torch.quantization.get_default_qconfig(backend)\r\n\r\n    @staticmethod\r\n    def custom_qconfig(activation_bit: int = 8, weight_bit: int = 8\r\n                       ) -> torch.quantization.QConfig:\r\n        return torch.quantization.QConfig(\r\n            activation=torch.quantization.MinMaxObserver.with_args(\r\n                dtype=torch.quint8, qscheme=torch.per_tensor_affine\r\n            ),\r\n            weight=torch.quantization.default_weight_observer.with_args(\r\n                dtype=torch.qint8, qscheme=torch.per_channel_symmetric\r\n            ),\r\n        )\r\n\r\n    @staticmethod\r\n    def available_backends() -> list:\r\n        return [\"fbgemm\", \"qnnpack\", \"onednn\", \"x86\"]\r\n\r\n## Dynamic quantization demo\r\nquant_model = nn.Sequential(\r\n    nn.Linear(100, 50),\r\n    nn.ReLU(),\r\n    nn.Linear(50, 10),\r\n)\r\nqdemo = QuantizationDemo(quant_model)\r\ndynamic_q = qdemo.dynamic_quantization()\r\nsize_comparison = QuantizationDemo.compare_size(quant_model, dynamic_q)\r\nprint(f\"Dynamic Q: FP32={size_comparison['fp32_kb']:.1f}KB, \"\r\n      f\"Int8={size_comparison['int8_kb']:.1f}KB \"\r\n      f\"({size_comparison['reduction_pct']:.0f}% reduction)\")\r\n\r\n## Compare inference speed\r\nx = torch.randn(100, 100)\r\nwith torch.no_grad():\r\n    fp32_time = torch.cuda.Event(enable_timing=True) if torch.cuda.is_available() else None\r\n\r\nprint(f\"Dynamic quantization reduces model size by ~75% with minimal accuracy loss\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "95-pruning",
      children: "9.5 Pruning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pruning removes redundant weights to reduce model size and computation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PruningDemo:\r\n    @staticmethod\r\n    def magnitude_pruning(model: nn.Module, amount: float = 0.3) -> nn.Module:\r\n        for name, module in model.named_modules():\r\n            if isinstance(module, (nn.Linear, nn.Conv2d)):\r\n                prune.l1_unstructured(module, name=\"weight\", amount=amount)\r\n                prune.remove(module, \"weight\")  # Make pruning permanent\r\n        return model\r\n\r\n    @staticmethod\r\n    def structured_pruning(model: nn.Module, amount: float = 0.3) -> nn.Module:\r\n        for name, module in model.named_modules():\r\n            if isinstance(module, nn.Linear):\r\n                prune.ln_structured(module, name=\"weight\", amount=amount,\r\n                                    n=2, dim=0)\r\n                prune.remove(module, \"weight\")\r\n        return model\r\n\r\n    @staticmethod\r\n    def global_pruning(model: nn.Module, amount: float = 0.3) -> nn.Module:\r\n        parameters_to_prune = []\r\n        for name, module in model.named_modules():\r\n            if isinstance(module, (nn.Linear, nn.Conv2d)):\r\n                parameters_to_prune.append((module, \"weight\"))\r\n        prune.global_unstructured(\r\n            parameters_to_prune,\r\n            pruning_method=prune.L1Unstructured,\r\n            amount=amount,\r\n        )\r\n        for module, name in parameters_to_prune:\r\n            prune.remove(module, name)\r\n        return model\r\n\r\n    @staticmethod\r\n    def iterative_pruning(model: nn.Module, total_amount: float = 0.5,\r\n                          steps: int = 5) -> nn.Module:\r\n        per_step = 1 - (1 - total_amount) ** (1 / steps)\r\n        for step in range(steps):\r\n            model = PruningDemo.magnitude_pruning(model, amount=per_step)\r\n            # Fine-tune step would go here\r\n            print(f\"Pruning step {step + 1}/{steps} applied\")\r\n        return model\r\n\r\n    @staticmethod\r\n    def analyze_sparsity(model: nn.Module) -> dict:\r\n        total_params = 0\r\n        zero_params = 0\r\n        for name, param in model.state_dict().items():\r\n            if \"weight\" in name:\r\n                total_params += param.numel()\r\n                zero_params += (param == 0).sum().item()\r\n        return {\r\n            \"total_params\": total_params,\r\n            \"zero_params\": zero_params,\r\n            \"sparsity_pct\": (zero_params / total_params) * 100 if total_params > 0 else 0,\r\n        }\r\n\r\nclass PruningScheduler:\r\n    def __init__(self, model: nn.Module, final_sparsity: float = 0.5,\r\n                 steps: int = 10):\r\n        self.model = model\r\n        self.final_sparsity = final_sparsity\r\n        self.steps = steps\r\n        self.current_step = 0\r\n        self.masks = {}\r\n\r\n    def step(self) -> float:\r\n        self.current_step += 1\r\n        target_sparsity = self.final_sparsity * (self.current_step / self.steps)\r\n        if self.current_step > 1:\r\n            for name, module in self.model.named_modules():\r\n                if hasattr(module, \"weight_mask\"):\r\n                    prune.remove(module, \"weight\")\r\n        for name, module in self.model.named_modules():\r\n            if isinstance(module, (nn.Linear, nn.Conv2d)):\r\n                prune.l1_unstructured(module, name=\"weight\",\r\n                                      amount=target_sparsity)\r\n        return target_sparsity\r\n\r\nprune_model = nn.Sequential(\r\n    nn.Linear(100, 200),\r\n    nn.ReLU(),\r\n    nn.Linear(200, 50),\r\n    nn.ReLU(),\r\n    nn.Linear(50, 10),\r\n)\r\noriginal_params = sum(p.numel() for p in prune_model.parameters())\r\n\r\npruned = PruningDemo.magnitude_pruning(prune_model, amount=0.4)\r\nsparsity = PruningDemo.analyze_sparsity(pruned)\r\nprint(f\"Pruning: {sparsity['sparsity_pct']:.1f}% weights zeroed \"\r\n      f\"({sparsity['zero_params']}/{sparsity['total_params']})\")\r\nprint(f\"Original params: {original_params}, after pruning: \"\r\n      f\"{original_params - sparsity['zero_params']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "96-mobile-deployment",
      children: "9.6 Mobile Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PyTorch Mobile enables on-device inference for Android and iOS."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PyTorchMobileExporter:\r\n    def __init__(self, model: nn.Module, input_size: tuple,\r\n                 model_name: str = \"model_mobile\"):\r\n        self.model = model.eval()\r\n        self.input_size = input_size\r\n        self.model_name = model_name\r\n\r\n    def export_for_mobile(self, example_input: torch.Tensor = None):\r\n        if example_input is None:\r\n            example_input = torch.randn(1, *self.input_size)\r\n        traced = torch.jit.trace(self.model, example_input)\r\n        optimized = torch.jit.optimize_for_inference(traced)\r\n        mobile_scripted = self._optimize_for_mobile(optimized)\r\n        mobile_scripted.save(f\"{self.model_name}_mobile.pt\")\r\n        print(f\"Mobile model saved to {self.model_name}_mobile.pt\")\r\n        return mobile_scripted\r\n\r\n    def _optimize_for_mobile(self, script_module: torch.jit.ScriptModule\r\n                             ) -> torch.jit.ScriptModule:\r\n        return torch.utils.mobile_optimizer.optimize_for_mobile(\r\n            script_module,\r\n            optimization_blocklist=set(),\r\n        )\r\n\r\n    @staticmethod\r\n    def quantize_for_mobile(script_module: torch.jit.ScriptModule\r\n                            ) -> torch.jit.ScriptModule:\r\n        return torch.jit.quantize.quantize_script(\r\n            script_module, torch.jit.quantize.default_quantization_mapping\r\n        )\r\n\r\n    @staticmethod\r\n    def benchmark_mobile(script_module: torch.jit.ScriptModule,\r\n                         input_tensor: torch.Tensor,\r\n                         iterations: int = 100) -> Dict[str, float]:\r\n        import time\r\n        script_module.eval()\r\n        for _ in range(30):\r\n            script_module(input_tensor)\r\n        t0 = time.perf_counter()\r\n        for _ in range(iterations):\r\n            script_module(input_tensor)\r\n        avg_ms = (time.perf_counter() - t0) * 1000 / iterations\r\n        return {\"latency_ms\": avg_ms, \"iterations\": iterations}\r\n\r\n    @staticmethod\r\n    def android_integration(model_file: str, app_assets: str):\r\n        import shutil\r\n        dest = Path(app_assets) / model_file\r\n        shutil.copy2(model_file, dest)\r\n        java_code = f\"\"\"\r\n// Load model in Android\r\nModule model = Module.load(assetFilePath(getContext(), \"{model_file}\"));\r\nfloat[] input = new float[3 * 224 * 224];\r\nTensor inputTensor = Tensor.fromBlob(input, new long[]{{1, 3, 224, 224}});\r\nTensor outputTensor = model.forward(IValue.from(inputTensor)).toTensor();\r\nfloat[] scores = outputTensor.getDataAsFloatArray();\r\n\"\"\"\r\n        print(f\"Model copied to {dest}\")\r\n        return java_code\r\n\r\n## Mobile export demo\r\nmobile_model = SimpleModel()\r\nmobile_exporter = PyTorchMobileExporter(mobile_model, (3, 32, 32), \"simple_model\")\r\nmobile_script = mobile_exporter.export_for_mobile()\r\n\r\n## Quantize for mobile\r\nquantized_mobile = PyTorchMobileExporter.quantize_for_mobile(mobile_script)\r\nx_demo = torch.randn(1, 3, 32, 32)\r\nbench = PyTorchMobileExporter.benchmark_mobile(quantized_mobile, x_demo, 200)\r\nprint(f\"Mobile model latency: {bench['latency_ms']:.2f}ms per inference\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "End-to-end deployment pipeline"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DeploymentPipeline:\r\n    def __init__(self, model: nn.Module, example_input: torch.Tensor):\r\n        self.model = model\r\n        self.example_input = example_input\r\n\r\n    def full_pipeline(self) -> Dict[str, str]:\r\n        artifacts = {}\r\n        # Step 1: TorchScript\r\n        traced = torch.jit.trace(self.model, self.example_input)\r\n        traced.save(\"prod_traced.pt\")\r\n        artifacts[\"torchscript\"] = \"prod_traced.pt\"\r\n\r\n        # Step 2: ONNX\r\n        torch.onnx.export(self.model, self.example_input, \"prod.onnx\",\r\n                          opset_version=17)\r\n        artifacts[\"onnx\"] = \"prod.onnx\"\r\n\r\n        # Step 3: Quantize\r\n        dynamic_q = torch.quantization.quantize_dynamic(\r\n            self.model, {nn.Linear}, dtype=torch.qint8\r\n        )\r\n        torch.jit.trace(dynamic_q, self.example_input).save(\"prod_quantized.pt\")\r\n        artifacts[\"quantized\"] = \"prod_quantized.pt\"\r\n\r\n        # Step 4: Prune + Quantize\r\n        for module in self.model.modules():\r\n            if isinstance(module, nn.Linear):\r\n                prune.l1_unstructured(module, name=\"weight\", amount=0.2)\r\n                prune.remove(module, \"weight\")\r\n        pruned_q = torch.quantization.quantize_dynamic(\r\n            self.model, {nn.Linear}, dtype=torch.qint8\r\n        )\r\n        torch.jit.trace(pruned_q, self.example_input).save(\"prod_pruned_q.pt\")\r\n        artifacts[\"pruned_quantized\"] = \"prod_pruned_q.pt\"\r\n\r\n        return artifacts\r\n\r\n    @staticmethod\r\n    def size_report(artifacts: Dict[str, str]) -> List[dict]:\r\n        import os\r\n        report = []\r\n        for name, path in artifacts.items():\r\n            size_kb = os.path.getsize(path) / 1024\r\n            report.append({\"artifact\": name, \"file\": path, \"size_kb\": size_kb})\r\n        return sorted(report, key=lambda x: x[\"size_kb\"])\r\n\r\npipeline = DeploymentPipeline(SimpleModel(), torch.randn(1, 3, 32, 32))\r\nartifacts = pipeline.full_pipeline()\r\nreport = DeploymentPipeline.size_report(artifacts)\r\nfor r in report:\r\n    print(f\"{r['artifact']:20s}: {r['size_kb']:8.1f} KB\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model deployment transforms trained PyTorch models into production-ready inference services. TorchScript provides a serializable representation that runs independently of Python, supporting both tracing and.\r\nscripting modes. ONNX export enables cross-framework deployment to TensorRT, ONNX Runtime, and other inference engines. TorchServe offers a production-grade serving infrastructure with batching,.\r\nmetrics, and model versioning. Quantization reduces model size and latency by using lower-precision arithmetic, with dynamic, static, and quantization-aware training approaches. Pruning removes redundant connections to create smaller,.\r\nfaster models for edge and mobile deployment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size Reduction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speedup"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Accuracy Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TorchScript trace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5-3x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python-free inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ONNX + ORT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5-4x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-3x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 0.5% loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU inference, NLP models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-4x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 1% loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed input sizes, CNNs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-4x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 0.2% loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum accuracy retention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pruning (90% sparse)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-5x (sparse hardware)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5% loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile, edge devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pruning + Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "95%+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-6x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5% loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extreme size constraints"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-q1",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: What is the difference between TorchScript tracing and scripting?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tracing"
          }), " (torch.jit.trace): runs the model with an example input and records all tensor operations into a computational graph. It's simple and fast, but can't capture control flow (if-statements, loops) because those are determined at trace time and frozen. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Scripting"
          }), " (torch.jit.script): directly compiles the model's Python source code by analyzing the AST. It captures all control flow and dynamic behavior but requires the model to use Python language constructs that torch.jit supports. When to use: trace for simple CNNs/models without control flow; script for models with conditional logic, loops, or dynamic shapes. You can also mix both: use tracing for submodules and scripting for the outer control flow. Tracing with control flow produces wrong results for non-traced paths."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-q2",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: What is ONNX and why would you use it?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ONNX (Open Neural Network Exchange) is an open standard for representing machine learning models as a computation graph. Benefits: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Interoperability"
          }), ": train in PyTorch, deploy in TensorRT, CoreML, or any ONNX-compatible runtime. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Hardware optimization"
          }), ": ONNX Runtime automatically selects the best execution provider (CUDA, TensorRT, OpenVINO, DirectML) for the target hardware. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Graph optimizations"
          }), ": constant folding, operator fusion, dead code elimination. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Quantization"
          }), ": ONNX Runtime supports int8 quantization natively. The export process walks the PyTorch graph and maps each operation to an ONNX operator. Dynamic axes (e.g., variable batch size) are specified during export. Opset version controls which operator set is used."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-q3",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: Explain the difference between dynamic, static, and quantization-aware training (QAT)."]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic quantization"
          }), ": converts weights to int8 at runtime, but activations are computed in FP32 and quantized on-the-fly for matrix operations. Simplest, requires no calibration data. Best for models where most compute is in weight-dominated ops (e.g., LSTM, Transformer). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Static quantization"
          }), ": pre-calibrates the quantization ranges for both weights AND activations using representative data. Requires a calibration step. Produces faster inference because all ops are int8. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "QAT"
          }), ": simulates quantization during training by inserting fake quantization nodes (FakeQuantize) in the forward pass. The model learns to compensate for quantization error. QAT produces the best accuracy but requires retraining. Accuracy order: QAT > Static > Dynamic > No quantization."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-q4",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: How do you serve a PyTorch model in production with TorchServe?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["TorchServe workflow: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Export model to TorchScript (traced or scripted). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Write a custom handler class that extends base_handler with preprocess(), inference(), and postprocess() methods. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Package the model into a .mar (Model ARchive) file using torch-model-archiver: torch-model-archiver --model-name resnet --version 1.0 --serialized-file model.pt --handler handler.py. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " Start TorchServe: torchserve --start --model-store . --models resnet=resnet.mar. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5)"
          }), " Send inference requests to the REST endpoint at localhost:8080/predictions/resnet. TorchServe provides: batching (accumulate requests before inference), metrics (CPU/GPU utilization, latency, throughput), model versioning, and A/B testing configurations. Multi-model serving and ensembling are supported via custom handlers."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-q5",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: What is pruning and how does it reduce model size?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pruning removes redundant weights from a neural network. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Unstructured pruning"
          }), ": sets individual weight values to zero (e.g., magnitude pruning zeros the smallest weights). The model becomes sparse but still stores all parameters in the same format — the sparsity provides speedup only on hardware with sparse tensor support. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Structured pruning"
          }), ": removes entire neurons, channels, or filters (e.g., prune entire rows of a weight matrix). This produces a smaller dense model that runs on standard hardware. PyTorch's torch.nn.utils.prune applies pruning masks without permanently modifying the module — prune.remove() makes it permanent. Common amounts: 30-50% for moderate pruning (negligible accuracy loss), 80-90% for aggressive pruning (requires retraining). Iterative pruning (prune a little, retrain, repeat) produces better results than one-shot pruning."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-q6",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: How do you deploy PyTorch models on mobile devices?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["PyTorch Mobile supports Android and iOS deployment. Steps: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Export model to TorchScript with torch.jit.trace or torch.jit.script. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Optimize for mobile: torch.utils.mobile_optimizer.optimize_for_mobile() — applies conv-bn fusion, dropout removal, and other mobile-specific optimizations. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Optionally quantize to int8 to reduce size by 75%. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " For Android: add org.pytorch:pytorch_android_lite dependency, load with Module.load(assetPath), run with module.forward(IValue.from(tensor)).toTensor(). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5)"
          }), " For iOS: add Pod 'LibTorch-Lite', use torch::jit::load() in C++ or the Obj-C API. The lite interpreter (torch.jit._recursive.concrete_type_copy) reduces runtime size by skipping the JIT compilation. Mobile-specific models should be small (ResNet-18 or MobileNet, not ResNet-152)."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-q7",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: What is the calibration step in static quantization?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Calibration determines the min/max range for activations by running the model on representative data. For each activation tensor, the observer records the observed min and max values. Steps: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Insert observers at quantization points (after activations). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Run 100-500 batches of representative training/validation data through the model. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " The observers collect activation statistics (min, max, histogram). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " Compute quantization parameters (scale and zero_point) from the collected ranges. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5)"
          }), " Convert (fuse modules, replace ops with quantized versions). Important: calibration data must be representative of actual inference data distribution. Using too few batches or unrepresentative data causes poor quantization scaling, degrading accuracy. The calibration set doesn't need labels — just input samples."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-q8",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: How does TorchScript handle dynamic input shapes?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-command",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tracing produces a graph with fixed shapes based on the example input. For dynamic shapes: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Use scripting instead of tracing — scripting preserves shape inference (each tensor has its shape as part of the type). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " If using tracing with dynamic shapes, mark dimensions as dynamic: torch.jit.trace(model, example_inputs, check_trace=False, strict=False). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Use TensorRT ONNX export with dynamic axes for variable batch sizes and spatial dimensions. In scripting, you can use @torch.jit.script decorator on functions and annotate types: def forward(self, x: Tensor, lengths: List[int]) -> Tensor. The JIT compiler handles shape propagation through operations. For production, it's often simpler to pad/resize to fixed sizes to avoid shape complexity."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-q9",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: What is the impact of quantization on model accuracy?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Quantization introduces approximation error by mapping FP32 values to lower-precision representations. Impact varies: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Dynamic quantization: typically < 0.5% accuracy loss for most models. NLP models (BERT, LSTM) are very robust to dynamic quantization (often < 0.1% loss). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Static quantization: 0.5-2% accuracy loss for CNNs, depending on calibration quality. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " QAT: < 0.2% loss — nearly identical to FP32. Models with batch normalization are more robust to quantization because BN normalizes activations to a known range. Small models (MobileNet) are more sensitive to quantization than large models (ResNet-50). If accuracy drops > 2%, use QAT instead of post-training quantization. Sensitive layers can be kept in FP32 (selective quantization via qconfig overrides)."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-q10",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: How do you choose between ONNX Runtime and TorchServe for deployment?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Choose ONNX Runtime when: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " You need to deploy on diverse hardware (CPU, GPU, TensorRT, OpenVINO, DirectML). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " You want maximum inference speed with graph optimizations and kernel fusion. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " You're deploying in a microservice or edge environment with minimal dependencies. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " Your model needs to be portable across frameworks (e.g., trained in PyTorch, deployed in .NET via ML.NET). Choose TorchServe when: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " You need a full serving infrastructure with REST/gRPC APIs, metrics, logging, and model versioning. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " You want built-in batching and request queuing. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Your team is already in the PyTorch ecosystem. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " You need dynamic batching and ensemble inference. In practice, many production systems use both: TorchServe for the API layer with ONNX Runtime as the backend execution provider internally."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": Which TorchScript approach is best for a model with if-statements and loops?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Tracing\r\nb) Scripting\r\nc) ONNX export\r\nd) Both work equally"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Scripting"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Scripting directly compiles the Python source code and preserves control flow, unlike tracing which freezes the execution path."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What is the typical size reduction from dynamic quantization (FP32 to int8)?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 25%\r\nb) 50%\r\nc) 75%\r\nd) 90%"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) 75%"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Converting from 32-bit floats to 8-bit integers reduces memory by 4x (75% reduction)."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What does the calibration step in static quantization require?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Labeled training data\r\nb) Representative unlabeled data\r\nc) A validation script\r\nd) GPU for computation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Representative unlabeled data"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Calibration only needs input samples representative of inference data to determine activation ranges. Labels are not required."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which quantization method provides the highest accuracy?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Dynamic quantization\r\nb) Static quantization\r\nc) Quantization-aware training (QAT)\r\nd) All provide the same accuracy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Quantization-aware training (QAT)"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "QAT simulates quantization noise during training, allowing the model to adapt and minimize accuracy loss."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What is the file extension for a TorchServe model archive?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) .pt\r\nb) .pth\r\nc) .mar\r\nd) .onnx"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl13-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) .mar"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "TorchServe uses the .mar (Model ARchive) format, created by torch-model-archiver."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Not practicing enough problems to build pattern recognition", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy"
        }), " — Export a simple 3-layer MLP to TorchScript using both tracing and scripting. Compare the serialized model sizes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Apply dynamic quantization to a pretrained BERT model and measure the size reduction and inference speedup."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Export a ResNet-18 to ONNX with dynamic batch size. Validate the ONNX model and run inference using ONNX Runtime."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Train a simple CNN, apply QAT, and compare the quantized model's accuracy with static and dynamic quantization."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a complete deployment pipeline: train ResNet-18 on CIFAR-10 → prune (50%) → QAT → export to TorchScript + ONNX → serve with TorchServe. Report accuracy, size, and latency at each stage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/08-training-pipelines",
          children: "08-training-pipelines.md"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next"
        }), ": [10-deployment-best-practices.md](10-deployment-best-prac"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
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
            children: "Explain the core idea of Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter — TorchScript, ONNX, TorchServe, Quantization, Pruning."
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
            children: "Describe a production bug caused by misunderstanding this technique — TorchScript, ONNX, TorchServe, Quantization, Pruning. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — TorchScript, ONNX, TorchServe, Quantization, Pruning from 10 users to 10 million?"
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
            children: "Compare Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this — TorchScript, ONNX, TorchServe, Quantization, Pruning."
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
            children: "How does Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique — TorchScript, ONNX, TorchServe, Quantization, Pruning run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — TorchScript, ONNX, TorchServe, Quantization, Pruning that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning in production today?"
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
        }), " Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 09 Model Deployment is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 09 Model Deployment is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — TorchScript, ONNX, TorchServe, Quantization, Pruning is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — TorchScript, ONNX, TorchServe, Quantization, Pruning on an empty input?"
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
            children: "Complete Medium exercises, explain Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning to someone else"
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
        children: "Always write a one-line example of Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "GitHub repositories of production implementations Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 09 — builds the foundation for 09 Model Deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 09 Model Deployment with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 09 Model Deployment fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 09 Model Deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 09 Model Deployment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 09 Model Deployment?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 09 Model Deployment?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 09 Model Deployment asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 09 Model Deployment?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning."
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
        children: "Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning changes quickly; focus on fundamentals that remain stable."
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
            children: "09 Model Deployment is like a GPS navigation system"
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
          }), " — this chapter contributes the Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-09modeldeployment-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which TorchScript approach is best for a model with if-statements and loops?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Scripting"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-09modeldeployment-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the typical size reduction from dynamic quantization (FP32 to int8)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) 75%"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-09modeldeployment-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does the calibration step in static quantization require?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Representative unlabeled data"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-09modeldeployment-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which quantization method provides the highest accuracy?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) Quantization-aware training (QAT)"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-09modeldeployment-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the file extension for a TorchServe model archive?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) .mar"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning in production at scale"
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
        children: "cProfile / py-spy for performance profiling Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning"
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
        }), ": Add structured logging at each stage of the 09 Model Deployment pipeline to identify exactly where the failure occurs."]
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
        children: "Explain Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning."
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
        children: "Tell me about a time you debugged a Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_09_model_deployment(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 09 Model Deployment.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 09 Model Deployment here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/10-deployment-best-practices",
        children: "Deployment Best Practices — A/B Testing, Monitoring, Model Versioning, Rollback"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Model Deployment — TorchScript, ONNX, TorchServe, Quantization, Pruning depends on input size and distribution — always benchmark for your own data."
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