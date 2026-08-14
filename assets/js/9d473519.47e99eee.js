"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1881],{

/***/ 96305
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_09_deep_learning_pytorch_02_pytorch_tensors_md_9d4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-09-deep-learning-pytorch-02-pytorch-tensors-md-9d4.json
const site_docs_courses_ai_engineering_placement_09_deep_learning_pytorch_02_pytorch_tensors_md_9d4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/deep-learning-pytorch/02-pytorch-tensors","title":"PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/09-deep-learning-pytorch/02-pytorch-tensors.md","sourceDirName":"courses/ai-engineering-placement/09-deep-learning-pytorch","slug":"/ai-engineering-placement/09-deep-learning-pytorch/02-pytorch-tensors","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/02-pytorch-tensors","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":124,"frontMatter":{"id":"02-pytorch-tensors","slug":"/ai-engineering-placement/09-deep-learning-pytorch/02-pytorch-tensors","title":"PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting","sidebar_label":"PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting","sidebar_position":124},"sidebar":"placementSidebar","previous":{"title":"Neural Networks Basics — Perceptron, Activation Functions, Backpropagation","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/01-neural-networks-basics"},"next":{"title":"PyTorch nn.Module — nn.Module, nn.Sequential, Custom Layers, Weight Init","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/03-pytorch-nn-module"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/09-deep-learning-pytorch/02-pytorch-tensors.md


const frontMatter = {
	id: '02-pytorch-tensors',
	slug: '/ai-engineering-placement/09-deep-learning-pytorch/02-pytorch-tensors',
	title: 'PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting',
	sidebar_label: 'PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting',
	sidebar_position: 124
};
const contentTitle = 'PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting';

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
  "value": "2.1 Tensor Basics",
  "id": "21-tensor-basics",
  "level": 2
}, {
  "value": "2.2 Indexing &amp; Slicing",
  "id": "22-indexing--slicing",
  "level": 2
}, {
  "value": "2.3 Reshaping &amp; Broadcasting",
  "id": "23-reshaping--broadcasting",
  "level": 2
}, {
  "value": "2.4 Autograd",
  "id": "24-autograd",
  "level": 2
}, {
  "value": "2.5 Device Management",
  "id": "25-device-management",
  "level": 2
}, {
  "value": "2.6 Advanced Operations",
  "id": "26-advanced-operations",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
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
        id: "pytorch-tensors--tensors-autograd-device-management-broadcasting",
        children: "PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting"
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
            children: "Create and manipulate PyTorch tensors with various data types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand tensor operations: indexing, slicing, reshaping, broadcasting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement automatic differentiation using autograd"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage devices: CPU, CUDA (GPU), MPS, data transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply tensor operations for neural network computations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand in-place operations, views, and memory management"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deep learning powers modern AI breakthroughs. PyTorch is the framework of choice for researchers and production engineers alike. This module covers neural networks, CNNs, RNNs, and deployment best practices."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding pytorch tensors is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how pytorch tensors works in practice."
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
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tensor Basics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creation, data types, shape, device, requires_grad"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexing & Slicing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced indexing, boolean masks, gather/scatter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reshaping & Broadcasting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "view, reshape, transpose, expand, broadcasting rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autograd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "requires_grad, backward, grad, no_grad, detach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU transfer, multi-GPU, mixed precision, pinned memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "einsum, matrix multiply, convolution, FFT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Tensor Creation] --> B[Data Type & Device]\n    B --> C[Operations]\n    C --> D[Reshape / Broadcast]\n    D --> E[Autograd Graph]\n    E --> F[.backward()]\n    F --> G[.grad]\n    G --> H[Optimizer Step]\n    H --> I[.zero_grad()]\n    I --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-tensor-basics",
      children: "2.1 Tensor Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tensors are multi-dimensional arrays, the fundamental data structure in PyTorch."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport numpy as np\nfrom typing import List, Tuple\n\nclass TensorBasics:\n    @staticmethod\n    def creation_methods():\n        # From Python list\n        a = torch.tensor([[1, 2], [3, 4]])\n        print(f\"From list: {a.shape}, dtype={a.dtype}\")\n\n        # From NumPy\n        b = torch.from_numpy(np.array([1.0, 2.0, 3.0]))\n        print(f\"From numpy: {b}, dtype={b.dtype}\")\n\n        # Pre-allocated\n        zeros = torch.zeros(2, 3)\n        ones = torch.ones(2, 3)\n        rand = torch.randn(2, 3)  # Standard normal\n        eye = torch.eye(3)        # Identity\n        arange = torch.arange(0, 10, 2)  # [0, 2, 4, 6, 8]\n        linspace = torch.linspace(0, 1, 5)  # [0, 0.25, 0.5, 0.75, 1]\n\n        print(f\"zeros: {zeros.shape}, ones: {ones.shape}\")\n        print(f\"arange: {arange}, linspace: {linspace}\")\n\n    @staticmethod\n    def data_types():\n        types = {\n            \"float32\": torch.float32,\n            \"float64\": torch.float64,\n            \"int32\": torch.int32,\n            \"int64\": torch.int64,\n            \"bool\": torch.bool,\n            \"bfloat16\": torch.bfloat16,\n        }\n        for name, dtype in types.items():\n            try:\n                t = torch.tensor([1, 2, 3], dtype=dtype)\n                print(f\"{name:12s}: {t.dtype}, element_size={t.element_size()} bytes\")\n            except Exception as e:\n                print(f\"{name:12s}: not supported on this device\")\n\ntb = TensorBasics()\ntb.creation_methods()\ntb.data_types()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tensor attributes"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shape"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dtype"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "device"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "requires_grad"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "grad"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "grad_fn"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-indexing--slicing",
      children: "2.2 Indexing & Slicing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PyTorch supports NumPy-style indexing with additional advanced features."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TensorIndexing:\n    @staticmethod\n    def basic_indexing():\n        x = torch.arange(12).reshape(3, 4)\n        print(f\"x:\\n{x}\")\n        print(f\"x[0]: {x[0]}\")           # First row\n        print(f\"x[:, 1]: {x[:, 1]}\")     # Second column\n        print(f\"x[1:, :2]:\\n{x[1:, :2]}\")  # Submatrix\n\n    @staticmethod\n    def advanced_indexing():\n        x = torch.arange(12).reshape(3, 4)\n        rows = torch.tensor([0, 2])\n        cols = torch.tensor([1, 3])\n        print(f\"x[rows, cols]: {x[rows, cols]}\")  # Advanced indexing\n\n        # Boolean masking\n        mask = x > 5\n        print(f\"x > 5: {x[mask]}\")\n\n        # where\n        result = torch.where(x > 5, x * 2, x)\n        print(f\"where(x > 5, x*2, x):\\n{result}\")\n\n    @staticmethod\n    def gather_scatter():\n        # Gather: collect values at specified indices\n        x = torch.arange(12).reshape(3, 4)\n        indices = torch.tensor([[0, 1], [2, 3], [1, 0]])\n        gathered = torch.gather(x, dim=1, index=indices)\n        print(f\"Gather: {gathered}\")\n\n        # Scatter: assign values to specified indices\n        output = torch.zeros(3, 4)\n        src = torch.tensor([[100], [200], [300]])\n        indices = torch.tensor([[1], [2], [0]])\n        output.scatter_(dim=1, index=indices, src=src)\n        print(f\"Scatter: {output}\")\n\nti = TensorIndexing()\nti.basic_indexing()\nti.advanced_indexing()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-reshaping--broadcasting",
      children: "2.3 Reshaping & Broadcasting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TensorReshaping:\n    @staticmethod\n    def reshape_methods():\n        x = torch.arange(12)\n        print(f\"Original: {x.shape}\")\n\n        # view — must be contiguous\n        v = x.view(3, 4)\n        print(f\"view(3,4): {v.shape}\")\n\n        # reshape — works on non-contiguous tensors\n        r = x.reshape(2, 6)\n        print(f\"reshape(2,6): {r.shape}\")\n\n        # transpose\n        t = v.transpose(0, 1)\n        print(f\"transpose: {t.shape}\")\n\n        # permute — general transposition\n        x3d = torch.arange(24).reshape(2, 3, 4)\n        p = x3d.permute(2, 0, 1)\n        print(f\"permute(2,0,1): {p.shape}\")\n\n        # unsqueeze / squeeze\n        print(f\"unsqueeze(0): {x.unsqueeze(0).shape}\")\n        print(f\"squeeze(): {torch.randn(1, 3, 1, 4).squeeze().shape}\")\n\n        # expand / repeat\n        a = torch.tensor([[1], [2], [3]])\n        print(f\"expand: {a.expand(3, 4).shape}\")\n        print(f\"repeat: {a.repeat(1, 3).shape}\")\n\n    @staticmethod\n    def broadcasting_rules():\n        \"\"\"Broadcasting: PyTorch aligns trailing dimensions, expands size-1 dims\"\"\"\n        a = torch.tensor([[1, 2, 3]])      # shape (1, 3)\n        b = torch.tensor([[4], [5], [6]])  # shape (3, 1)\n        c = a + b                          # broadcasts to (3, 3)\n        print(f\"Broadcast result:\\n{c}\")\n\n        # Rules:\n        # 1. Align trailing dimensions\n        # 2. Size-1 dimensions are stretched to match\n        # 3. If dimensions don't match and neither is 1, error\n\n        try:\n            x = torch.ones(3, 2)\n            y = torch.ones(2, 3)\n            z = x + y  # Error: incompatible shapes\n        except RuntimeError as e:\n            print(f\"Broadcasting error: {e}\")\n\ntr = TensorReshaping()\ntr.reshape_methods()\ntr.broadcasting_rules()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Broadcasting rules"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Align shapes from the right: (3,1,2) + (2,) → (3,1,2) + (1,1,2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stretch any dimension of size 1 to match"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error if dimensions differ and neither is 1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-autograd",
      children: "2.4 Autograd"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Autograd enables automatic gradient computation for backpropagation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AutogradDemo:\n    @staticmethod\n    def basic_autograd():\n        x = torch.tensor(3.0, requires_grad=True)\n        w = torch.tensor(2.0, requires_grad=True)\n        b = torch.tensor(1.0, requires_grad=True)\n\n        y = w * x + b\n        loss = (y - 10) ** 2\n        loss.backward()\n\n        print(f\"dy/dx = {x.grad.item():.2f}\")\n        print(f\"dy/dw = {w.grad.item():.2f}\")\n        print(f\"dy/db = {b.grad.item():.2f}\")\n\n        # Gradients accumulate — must zero\n        loss.backward()\n        print(f\"After second backward (accumulated): w.grad = {w.grad.item():.2f}\")\n\n    @staticmethod\n    def autograd_features():\n        x = torch.randn(3, requires_grad=True)\n\n        # no_grad — disable gradient tracking\n        with torch.no_grad():\n            y = x * 2\n            print(f\"no_grad: requires_grad = {y.requires_grad}\")\n\n        # detach — create a tensor that doesn't require grad\n        z = x.detach()\n        print(f\"detach: requires_grad = {z.requires_grad}\")\n\n        # retain_graph — keep graph after backward\n        a = torch.tensor(2.0, requires_grad=True)\n        b = a ** 2\n        b.backward(retain_graph=True)\n        print(f\"retain_graph: a.grad = {a.grad}\")\n        b.backward()  # Would error without retain_graph=True above\n        print(f\"second backward: a.grad = {a.grad} (accumulated)\")\n\n    @staticmethod\n    def custom_autograd():\n        class CustomSquare(torch.autograd.Function):\n            @staticmethod\n            def forward(ctx, x):\n                ctx.save_for_backward(x)\n                return x ** 2\n\n            @staticmethod\n            def backward(ctx, grad_output):\n                x, = ctx.saved_tensors\n                return grad_output * 2 * x\n\n        x = torch.tensor(3.0, requires_grad=True)\n        custom_fn = CustomSquare.apply\n        y = custom_fn(x)\n        y.backward()\n        print(f\"Custom autograd: dy/dx = {x.grad}\")\n\nad = AutogradDemo()\nad.basic_autograd()\nad.custom_autograd()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Autograd essentials"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "requires_grad=True"
        }), " enables gradient tracking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "backward()"
        }), " computes gradients"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "grad"
        }), " accumulates gradients (zero manually)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "torch.no_grad()"
        }), " disables tracking for inference"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".detach()"
        }), " creates a tensor outside the graph"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-device-management",
      children: "2.5 Device Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DeviceManagement:\n    @staticmethod\n    def device_operations():\n        # Check available devices\n        print(f\"CUDA available: {torch.cuda.is_available()}\")\n        if torch.cuda.is_available():\n            print(f\"CUDA device count: {torch.cuda.device_count()}\")\n            print(f\"CUDA device name: {torch.cuda.get_device_name(0)}\")\n\n        device = torch.device(\"cuda\" if torch.cuda.is_available() else \"cpu\")\n\n        # Create tensor on device\n        x = torch.randn(3, 3, device=device)\n        print(f\"Tensor device: {x.device}\")\n\n        # Move tensor between devices\n        cpu_tensor = x.cpu()\n        if torch.cuda.is_available():\n            gpu_tensor = cpu_tensor.cuda()\n            print(f\"Moved to GPU: {gpu_tensor.device}\")\n\n        # to() method\n        y = torch.randn(3, 3)\n        y = y.to(device)\n        print(f\"to(device): {y.device}\")\n\n    @staticmethod\n    def mixed_precision():\n        if not torch.cuda.is_available():\n            print(\"Mixed precision requires CUDA\")\n            return\n\n        from torch.cuda.amp import autocast, GradScaler\n        scaler = GradScaler()\n        model = torch.nn.Linear(10, 2).cuda()\n        data = torch.randn(32, 10).cuda()\n        target = torch.randn(32, 2).cuda()\n        optimizer = torch.optim.SGD(model.parameters(), lr=0.01)\n\n        with autocast():\n            output = model(data)\n            loss = torch.nn.functional.mse_loss(output, target)\n\n        scaler.scale(loss).backward()\n        scaler.step(optimizer)\n        scaler.update()\n        print(\"Mixed precision step completed\")\n\n    @staticmethod\n    def pin_memory():\n        \"\"\"Pinned memory for faster CPU->GPU transfer\"\"\"\n        x = torch.randn(1000, 1000)\n        pinned = x.pin_memory()\n        print(f\"Pinned memory: {pinned.is_pinned()}\")\n\ndm = DeviceManagement()\ndm.device_operations()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-advanced-operations",
      children: "2.6 Advanced Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AdvancedTensorOps:\n    @staticmethod\n    def matrix_operations():\n        x = torch.randn(3, 4)\n        y = torch.randn(4, 5)\n\n        # Matrix multiplication\n        mm = x @ y\n        matmul = torch.mm(x, y)\n        print(f\"matmul shape: {mm.shape}\")\n\n        # Batched matmul\n        batch = torch.randn(10, 3, 4)\n        batch_y = torch.randn(10, 4, 5)\n        bmm = torch.bmm(batch, batch_y)\n        print(f\"batched matmul: {bmm.shape}\")\n\n        # Einsum — Einstein summation\n        a = torch.randn(2, 3, 4)\n        b = torch.randn(2, 4, 5)\n        result = torch.einsum(\"ijk,ikl->ijl\", a, b)\n        print(f\"einsum shape: {result.shape}\")\n\n    @staticmethod\n    def convolution_ops():\n        batch, channels, height, width = 1, 3, 32, 32\n        x = torch.randn(batch, channels, height, width)\n\n        conv = torch.nn.Conv2d(in_channels=3, out_channels=16, kernel_size=3, padding=1)\n        output = conv(x)\n        print(f\"Conv2d output shape: {output.shape}\")\n\n        # Manual convolution via unfold\n        patches = torch.nn.functional.unfold(x, kernel_size=3, padding=1)\n        print(f\"Unfolded patches shape: {patches.shape}\")\n\n    @staticmethod\n    def fft_ops():\n        if not torch.cuda.is_available():\n            # 1D FFT\n            x = torch.randn(100)\n            X = torch.fft.fft(x)\n            magnitude = torch.abs(X)\n            phase = torch.angle(X)\n            reconstructed = torch.fft.ifft(X)\n            print(f\"FFT: input={x.shape}, output={X.shape}\")\n            print(f\"Max reconstruction error: {torch.max(torch.abs(x - reconstructed.real)):.6f}\")\n\n            # 2D FFT\n            img = torch.randn(32, 32)\n            img_fft = torch.fft.fft2(img)\n            img_shifted = torch.fft.fftshift(img_fft)\n            print(f\"2D FFT: {img_fft.shape}, shifted: {img_shifted.shape}\")\n\nato = AdvancedTensorOps()\nato.matrix_operations()\nato.convolution_ops()\nato.fft_ops()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// PyTorch-like tensor operations in TypeScript (conceptual)\nclass TensorTS {\n  data: number[][];\n  shape: number[];\n  requiresGrad: boolean;\n  grad: number[][] | null = null;\n\n  constructor(data: number[][], requiresGrad = false) {\n    this.data = data;\n    this.shape = [data.length, data[0].length];\n    this.requiresGrad = requiresGrad;\n  }\n\n  static zeros(rows: number, cols: number): TensorTS {\n    return new TensorTS(Array.from({ length: rows }, () => new Array(cols).fill(0)));\n  }\n\n  static randn(rows: number, cols: number): TensorTS {\n    const data = Array.from({ length: rows }, () =>\n      Array.from({ length: cols }, () => {\n        let u = 0, v = 0;\n        while (u === 0) u = Math.random();\n        while (v === 0) v = Math.random();\n        return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);\n      })\n    );\n    return new TensorTS(data);\n  }\n\n  matmul(other: TensorTS): TensorTS {\n    const result = Array.from({ length: this.data.length }, (_, i) =>\n      Array.from({ length: other.data[0].length }, (_, j) =>\n        this.data[i].reduce((sum, val, k) => sum + val * other.data[k][j], 0)\n      )\n    );\n    return new TensorTS(result);\n  }\n}\n\nconst aTS = TensorTS.randn(3, 4);\nconst bTS = TensorTS.randn(4, 5);\nconst cTS = aTS.matmul(bTS);\nconsole.log(`Tensor matmul shape: [${cTS.shape}]`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tensors are multi-dimensional arrays with shape, dtype, device, and gradient tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tensor creation: from list, numpy, or pre-allocated (zeros, ones, randn, arange)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indexing: basic (x[0]), advanced (x[rows, cols]), boolean (x[mask]), gather/scatter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reshaping: view (contiguous), reshape (any), transpose, permute, unsqueeze, squeeze"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broadcasting aligns trailing dimensions and stretches size-1 dimensions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Autograd builds a dynamic computation graph; backward() computes gradients"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Device management: .to(device), .cuda(), .cpu(), mixed precision (amp)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common operations: matmul (@), bmm, einsum, conv2d, unfold, fft"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gradients accumulate — zero them with optimizer.zero_grad() or .grad.zero_()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pin memory for faster CPU->GPU transfer; use no_grad() for inference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create tensor from data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "torch.tensor(data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "np.array → torch.from_numpy (shares memory)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reshape any tensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".reshape() over .view()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".view() on non-contiguous tensors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disable gradients"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "torch.no_grad()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".detach() for large blocks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPU memory management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".to(device) at batch level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moving tensors repeatedly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "torch.cuda.amp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full float32 for everything"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q1",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: What is the difference between view() and reshape() in PyTorch?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "view() returns a new view (shares memory) but requires the tensor to be contiguous in memory. reshape() returns a view if possible, otherwise creates a copy (works on non-contiguous tensors). Always prefer reshape() over view() for safety. Use .contiguous() before view() if you need to ensure contiguous memory. Transposed tensors are typically non-contiguous."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q2",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: How does broadcasting work in PyTorch?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "PyTorch broadcasting aligns shapes from the rightmost dimension. Any dimension of size 1 is stretched to match the corresponding dimension. If dimensions differ and neither is 1, an error occurs. Example: (3,1,2) + (2,) → (3,1,2) + (1,1,2) → both broadcast to (3,1,2). Broadcasting avoids explicit expansion, saving memory. Use it instead of .expand() when possible."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q3",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: What is the purpose of detach() and when would you use it?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["detach() creates a new tensor that shares data with the original but doesn't require gradients and is removed from the computation graph. Use detach() when: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " You want to log/visualize intermediate values without storing the graph. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " You need a tensor's value as a NumPy array (requires detach + cpu). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " You want to stop gradient flow through a path. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " Implementing GANs (detach discriminator from generator)."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q4",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: How does PyTorch's autograd differ from TensorFlow's?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["PyTorch uses ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "dynamic"
          }), " computation graphs (built on-the-fly each forward pass). TensorFlow (2.x with eager mode) is similar, but TF 1.x used ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "static"
          }), " graphs (build once, execute many). Dynamic graphs: more flexible for variable-length inputs, easier debugging, Pythonic control flow. Static graphs: better optimization, easier deployment, faster execution. PyTorch 2.0 adds torch.compile for graph optimization."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q5",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: What is the difference between torch.no_grad() and model.eval()?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "torch.no_grad(): disables gradient tracking entirely — reduces memory usage and speeds computation. Used for inference. model.eval(): sets the model to evaluation mode — affects dropout, batch norm, etc. (disables dropout, uses running stats for BN). Use both during inference: model.eval() + torch.no_grad(). model.train(): re-enables training behavior."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q6",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: How do you handle GPU out-of-memory errors?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Strategies: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Reduce batch size. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Use gradient accumulation (simulate larger batches). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Use mixed precision training (amp — cuts memory by ~2x). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " Free memory: del, torch.cuda.empty_cache(). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5)"
          }), " Use checkpointing (trade compute for memory). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6)"
          }), " Reduce model size (fewer layers/units). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7)"
          }), " Use in-place operations where safe. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "8)"
          }), " Monitor with nvidia-smi."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q7",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: What is the difference between torch.cat and torch.stack?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Both concatenate tensors. torch.cat joins existing dimensions: (3,4) + (3,4) → (6,4) (dim=0) or (3,8) (dim=1). torch.stack adds a new dimension: (3,4) + (3,4) → (2,3,4). stack requires all tensors to have the same shape. cat requires same shape in all dimensions except the joining dimension."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q8",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: What is the memory format of PyTorch tensors (channels-first vs channels-last)?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "PyTorch uses channels-first (NCHW) by default: batch, channels, height, width. This is optimized for GPU convolution operations. TensorFlow uses channels-last (NHWC). PyTorch supports channels-last via to(memory_format=torch.channels_last), which can improve performance for some models. The memory format affects how data is laid out in memory but not the logical shape."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q9",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: How do you create a custom autograd Function?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-argument",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Subclass torch.autograd.Function and implement static forward() and backward() methods. forward(): compute output, optionally save tensors for backward via ctx.save_for_backward(). backward(): receive grad_output, compute and return gradients w.r.t. inputs. Use ctx.needs_input_grad to check which gradients are needed. Custom functions enable operations not covered by standard PyTorch ops."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q10",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: What is torch.einsum and when would you use it?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "torch.einsum (Einstein summation) expresses tensor operations using index notation. Example: einsum(\"ij,jk->ik\", A, B) = matrix multiply. einsum(\"bchw,co->bowh\", x, w) = convolution. Advantages: concise, general (supports any tensor operation), automatically handles broadcasting. Disadvantage: slower than specialized ops (mm, bmm, conv2d). Use einsum for prototyping, switch to specialized ops for production."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": Which method is safest for reshaping non-contiguous tensors?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) view()\nb) reshape()\nc) transpose()\nd) flatten()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) reshape()"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "reshape() works on both contiguous and non-contiguous tensors."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does backward() compute?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Forward pass values\nb) Gradients of loss w.r.t. all requires_grad tensors\nc) Model predictions\nd) Loss value only"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Gradients of loss w.r.t. all requires_grad tensors"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "backward() traverses the computation graph and accumulates gradients in .grad."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What happens when you add tensors of shapes (3,1,2) and (2,)?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Error\nb) Result shape (3,1,2)\nc) Result shape (3,2,2)\nd) Result shape (3,1,1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Result shape (3,1,2)"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "(2,) broadcasts to (1,1,2) to match (3,1,2)."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which is NOT a valid way to move a tensor to GPU?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) tensor.cuda()\nb) tensor.to(\"cuda\")\nc) tensor.gpu()\nd) tensor.to(device)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) tensor.gpu()"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The correct method is .cuda(), not .gpu()."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What does torch.no_grad() do?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Stops training\nb) Disables gradient computation temporarily\nc) Removes all gradients\nd) Freezes model parameters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Disables gradient computation temporarily"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Used for inference to reduce memory and speed computation."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Create a 5x5 tensor of random values. Extract the middle 3x3 block using slicing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Given tensors of shape (3,4) and (4,5), compute their matrix product using @, torch.mm, and torch.matmul."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement a custom autograd function for the Swish activation (x * sigmoid(x)). Verify gradients match PyTorch's autograd."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a small CNN training loop with mixed precision (amp) and measure speed/memory improvement over float32."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement batched matrix multiplication manually using einsum and broadcasting. Compare performance with torch.bmm."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
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
            children: "Explain the core idea of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting."
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
            children: "Describe a production bug caused by misunderstanding PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting from 10 users to 10 million?"
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
            children: "Compare PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting."
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
            children: "How does PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting in production today?"
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
        }), " PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting on an empty input?"
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
            children: "Complete Medium exercises, explain PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting to someone else"
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
        children: "Always write a one-line example of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting."
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
        children: "PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting."
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
        children: "PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is like a recipe"
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
        }), " — this chapter contributes the PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-02pytorchtensors-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which method is safest for reshaping non-contiguous tensors?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) reshape()"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-02pytorchtensors-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does backward() compute?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Gradients of loss w.r.t. all requires_grad tensors"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-02pytorchtensors-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What happens when you add tensors of shapes (3,1,2) and (2,)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Result shape (3,1,2)"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-02pytorchtensors-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which is NOT a valid way to move a tensor to GPU?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) tensor.gpu()"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-02pytorchtensors-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does torch.no_grad() do?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Disables gradient computation temporarily"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting in production at scale"
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
        children: "Testing: pytest for unit tests of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting code."]
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
        }), " or your IDE's debugger to step through the PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting example code."]
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
        children: "Explain PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting."
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
        children: "Tell me about a time you debugged a PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting without notes"
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
        }), ": a small team uses PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/03-pytorch-nn-module",
        children: "PyTorch nn.Module — nn.Module, nn.Sequential, Custom Layers, Weight Init"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting depends on input size and distribution — always benchmark for your own data."
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