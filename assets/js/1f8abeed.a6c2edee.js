"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[79991],{

/***/ 94016
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_14_fine_tuning_peft_05_qlora_and_quantization_md_1f8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-14-fine-tuning-peft-05-qlora-and-quantization-md-1f8.json
const site_docs_courses_ai_engineering_placement_14_fine_tuning_peft_05_qlora_and_quantization_md_1f8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/fine-tuning-peft/05-qlora-and-quantization","title":"QLoRA & Quantization","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/14-fine-tuning-peft/05-qlora-and-quantization.md","sourceDirName":"courses/ai-engineering-placement/14-fine-tuning-peft","slug":"/ai-engineering-placement/14-fine-tuning-peft/05-qlora-and-quantization","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/05-qlora-and-quantization","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":178,"frontMatter":{"id":"05-qlora-and-quantization","slug":"/ai-engineering-placement/14-fine-tuning-peft/05-qlora-and-quantization","title":"QLoRA & Quantization","sidebar_label":"QLoRA & Quantization","sidebar_position":178},"sidebar":"coursesSidebar","previous":{"title":"LoRA Implementation","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/04-lora-implementation"},"next":{"title":"Instruction Tuning","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/06-instruction-tuning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/14-fine-tuning-peft/05-qlora-and-quantization.md


const frontMatter = {
	id: '05-qlora-and-quantization',
	slug: '/ai-engineering-placement/14-fine-tuning-peft/05-qlora-and-quantization',
	title: 'QLoRA & Quantization',
	sidebar_label: 'QLoRA & Quantization',
	sidebar_position: 178
};
const contentTitle = 'QLoRA & Quantization';

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
  "value": "5.1 Quantization Theory",
  "id": "51-quantization-theory",
  "level": 2
}, {
  "value": "5.1.1 Quantizer Implementation",
  "id": "511-quantizer-implementation",
  "level": 3
}, {
  "value": "5.1.2 Precision Comparison",
  "id": "512-precision-comparison",
  "level": 3
}, {
  "value": "5.2 NF4 Format",
  "id": "52-nf4-format",
  "level": 2
}, {
  "value": "5.2.1 NormalFloat Quantization",
  "id": "521-normalfloat-quantization",
  "level": 3
}, {
  "value": "5.2.2 Block-Wise Quantization",
  "id": "522-block-wise-quantization",
  "level": 3
}, {
  "value": "5.3 Double Quantization",
  "id": "53-double-quantization",
  "level": 2
}, {
  "value": "5.3.1 Double Quantization Implementation",
  "id": "531-double-quantization-implementation",
  "level": 3
}, {
  "value": "5.4 Bitsandbytes",
  "id": "54-bitsandbytes",
  "level": 2
}, {
  "value": "5.4.1 Bitsandbytes Config",
  "id": "541-bitsandbytes-config",
  "level": 3
}, {
  "value": "5.4.2 NF4 vs FP4 Comparison",
  "id": "542-nf4-vs-fp4-comparison",
  "level": 3
}, {
  "value": "5.5 QLoRA Training",
  "id": "55-qlora-training",
  "level": 2
}, {
  "value": "5.5.1 QLoRA Model Config",
  "id": "551-qlora-model-config",
  "level": 3
}, {
  "value": "5.5.2 Paged Optimizer",
  "id": "552-paged-optimizer",
  "level": 3
}, {
  "value": "5.5.3 Memory Comparison: Full FT vs LoRA vs QLoRA",
  "id": "553-memory-comparison-full-ft-vs-lora-vs-qlora",
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
        id: "qlora--quantization",
        children: "QLoRA & Quantization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Understand quantization of LLMs (4-bit NF4, FP8, INT8)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement QLoRA with bitsandbytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain double quantization and paged optimizers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare memory vs quality trade-offs across precisions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fine-tuning adapts foundation models to your specific domain. LoRA, QLoRA, and DPO make this affordable. This module covers when to fine-tune, how to do it, and how to evaluate the results."
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
      children: "Understanding qlora and quantization is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how qlora and quantization works in practice."
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
            children: "5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantization Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision, range, scaling factors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NF4 Format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NormalFloat 4-bit quantization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantizing quantization constants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitsandbytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-bit model loading, NF4, FP4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QLoRA Training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LoRA on quantized base, paged optimizers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph FP16\n        W16[W: float16]\n    end\n    subgraph NF4\n        C[Scaling constants]\n        W4[W: NF4 4-bit]\n    end\n    subgraph Double Quant\n        C2[Quantized constants]\n        W4 --> C2\n    end\n    subgraph QLoRA\n        B[LoRA B float16]\n        A[LoRA A float16]\n    end\n    W16 -->|Quantize| W4\n    W4 --> C\n    C -->|Quantize again| C2\n    W4 --> QLoRA\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-quantization-theory",
      children: "5.1 Quantization Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "511-quantizer-implementation",
      children: "5.1.1 Quantizer Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom typing import Tuple, Dict\n\nclass Quantizer:\n    def quantize_8bit(self, tensor: np.ndarray) -> Tuple[np.ndarray, float, int]:\n        absmax = np.abs(tensor).max()\n        if absmax == 0:\n            return np.zeros_like(tensor, dtype=np.int8), 0.0, 0\n        scale = 127.0 / absmax\n        quantized = np.round(tensor * scale).astype(np.int8)\n        return quantized, absmax, scale\n\n    def dequantize_8bit(self, quantized: np.ndarray, scale: float) -> np.ndarray:\n        return quantized.astype(np.float32) / (127.0 / scale)\n\n    def quantize_4bit_symmetric(self, tensor: np.ndarray) -> Tuple[np.ndarray, float]:\n        absmax = np.abs(tensor).max()\n        if absmax == 0:\n            return np.zeros_like(tensor, dtype=np.int8) // 16, 0.0\n        scale = 7.0 / absmax\n        quantized = np.round(tensor * scale).astype(np.int8)\n        quantized = np.clip(quantized, -7, 7)\n        return quantized, scale\n\n    def quantization_error(self, original: np.ndarray,\n                           dequantized: np.ndarray) -> Dict:\n        mse = np.mean((original - dequantized) ** 2)\n        snr = 10 * np.log10(np.var(original) / mse) if mse > 0 else float(\"inf\")\n        return {\n            \"mse\": round(mse, 6),\n            \"snr_db\": round(snr, 2),\n            \"max_error\": round(np.max(np.abs(original - dequantized)), 4),\n        }\n\nquantizer = Quantizer()\ntensor = np.random.randn(1000).astype(np.float32)\nq8, absmax, scale = quantizer.quantize_8bit(tensor)\ndeq8 = quantizer.dequantize_8bit(q8, scale)\nprint(f\"8-bit error: {quantizer.quantization_error(tensor, deq8)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "512-precision-comparison",
      children: "5.1.2 Precision Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PrecisionComparator:\n    def __init__(self):\n        self.formats = {\n            \"FP32\": {\"bits\": 32, \"range\": (-3.4e38, 3.4e38), \"eps\": 1.2e-7},\n            \"FP16\": {\"bits\": 16, \"range\": (-65504, 65504), \"eps\": 6.1e-5},\n            \"BF16\": {\"bits\": 16, \"range\": (-3.4e38, 3.4e38), \"eps\": 7.8e-3},\n            \"INT8\": {\"bits\": 8, \"range\": (-127, 127), \"eps\": 1.0},\n            \"NF4\": {\"bits\": 4, \"range\": (-1.0, 1.0), \"eps\": 0.08},\n            \"FP4\": {\"bits\": 4, \"range\": (-6, 6), \"eps\": 0.75},\n        }\n\n    def memory_gb(self, num_params: int, bits: int) -> float:\n        return num_params * bits / 8 / 1e9\n\n    def compare(self, num_params: int = 7_000_000_000) -> List[Dict]:\n        results = []\n        for name, fmt in self.formats.items():\n            results.append({\n                \"format\": name,\n                \"bits\": fmt[\"bits\"],\n                \"memory_gb\": round(self.memory_gb(num_params, fmt[\"bits\"]), 2),\n                \"dynamic_range\": f\"{fmt['range'][0]:.0e} to {fmt['range'][1]:.0e}\",\n            })\n        return results\n\ncomp = PrecisionComparator()\nprint(\"Precision comparison for 7B model:\")\nfor r in comp.compare():\n    print(f\"  {r['format']:5s}: {r['bits']:2d} bits, {r['memory_gb']:5.1f} GB\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-nf4-format",
      children: "5.2 NF4 Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "521-normalfloat-quantization",
      children: "5.2.1 NormalFloat Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class NF4Quantizer:\n    def __init__(self):\n        self.nf4_levels = self._create_nf4_levels()\n\n    def _create_nf4_levels(self) -> np.ndarray:\n        levels = np.array([\n            -1.0, -0.8482, -0.6824, -0.5105,\n            -0.3396, -0.1812, -0.0504, 0.0504,\n            0.1812, 0.3396, 0.5105, 0.6824,\n            0.8482, 1.0,\n        ], dtype=np.float32)\n        return levels\n\n    def quantize(self, tensor: np.ndarray) -> Tuple[np.ndarray, float]:\n        absmax = np.abs(tensor).max()\n        if absmax == 0:\n            return np.zeros(tensor.shape, dtype=np.uint8), 0.0\n\n        normalized = tensor / absmax\n        indices = np.zeros(tensor.shape, dtype=np.uint8)\n\n        for i in range(len(self.nf4_levels)):\n            level = self.nf4_levels[i]\n            if i == 0:\n                mask = normalized <= level\n            elif i == len(self.nf4_levels) - 1:\n                mask = normalized > self.nf4_levels[i - 1]\n            else:\n                mid = (self.nf4_levels[i - 1] + level) / 2\n                mask = normalized > mid\n\n            indices[mask] = i\n\n        return indices, absmax\n\n    def dequantize(self, indices: np.ndarray, absmax: float) -> np.ndarray:\n        return self.nf4_levels[indices.astype(int)] * absmax\n\nnf4 = NF4Quantizer()\ntensor = np.random.randn(100).astype(np.float32)\nindices, absmax = nf4.quantize(tensor)\ndeq = nf4.dequantize(indices, absmax)\nmse = np.mean((tensor - deq) ** 2)\nprint(f\"NF4 quantization MSE: {mse:.6f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "522-block-wise-quantization",
      children: "5.2.2 Block-Wise Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BlockWiseQuantizer:\n    def __init__(self, block_size: int = 64):\n        self.block_size = block_size\n        self.nf4 = NF4Quantizer()\n\n    def quantize(self, tensor: np.ndarray) -> Tuple[np.ndarray, np.ndarray]:\n        flat = tensor.flatten()\n        num_blocks = (len(flat) + self.block_size - 1) // self.block_size\n        indices_list = []\n        scales = []\n\n        for i in range(num_blocks):\n            start = i * self.block_size\n            end = min(start + self.block_size, len(flat))\n            block = flat[start:end]\n            block_indices, absmax = self.nf4.quantize(block)\n            indices_list.append(block_indices)\n            scales.append(absmax)\n\n        return np.concatenate(indices_list), np.array(scales)\n\n    def dequantize(self, indices: np.ndarray, scales: np.ndarray, original_shape: tuple) -> np.ndarray:\n        flat = np.zeros(len(indices))\n        num_blocks = len(scales)\n\n        for i in range(num_blocks):\n            start = i * self.block_size\n            end = min(start + self.block_size, len(indices))\n            block_indices = indices[start:end]\n            flat[start:end] = self.nf4.dequantize(block_indices, scales[i])\n\n        return flat.reshape(original_shape)\n\nbq = BlockWiseQuantizer(block_size=64)\ntensor_2d = np.random.randn(128, 128).astype(np.float32)\nindices, scales = bq.quantize(tensor_2d)\ndeq = bq.dequantize(indices, scales, tensor_2d.shape)\nmse = np.mean((tensor_2d - deq) ** 2)\ncompression = (tensor_2d.nbytes) / (indices.nbytes + scales.nbytes)\nprint(f\"Block-wise NF4 MSE: {mse:.6f}, Compression ratio: {compression:.1f}x\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-double-quantization",
      children: "5.3 Double Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "531-double-quantization-implementation",
      children: "5.3.1 Double Quantization Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DoubleQuantizer:\n    def __init__(self, block_size_1: int = 64, block_size_2: int = 256):\n        self.nf4 = NF4Quantizer()\n        self.block_size_1 = block_size_1\n        self.block_size_2 = block_size_2\n\n    def quantize(self, tensor: np.ndarray) -> Dict:\n        flat = tensor.flatten().astype(np.float32)\n        num_blocks = (len(flat) + self.block_size_1 - 1) // self.block_size_1\n\n        first_level_indices = []\n        first_level_scales = np.zeros(num_blocks, dtype=np.float32)\n\n        for i in range(num_blocks):\n            start = i * self.block_size_1\n            end = min(start + self.block_size_1, len(flat))\n            block = flat[start:end]\n            indices, absmax = self.nf4.quantize(block)\n            first_level_indices.append(indices)\n            first_level_scales[i] = absmax\n\n        first_level_indices = np.concatenate(first_level_indices)\n\n        second_level_indices = []\n        second_level_scales = np.zeros(\n            (num_blocks + self.block_size_2 - 1) // self.block_size_2,\n            dtype=np.float32,\n        )\n\n        for i in range(0, num_blocks, self.block_size_2):\n            end = min(i + self.block_size_2, num_blocks)\n            block = first_level_scales[i:end]\n            indices, absmax = self.nf4.quantize(block)\n            second_level_indices.append(indices)\n            second_level_scales[i // self.block_size_2] = absmax\n\n        return {\n            \"first_indices\": first_level_indices,\n            \"first_scales\": first_level_scales,\n            \"second_indices\": np.concatenate(second_level_indices),\n            \"second_scales\": second_level_scales,\n        }\n\n    def memory_savings(self, shape: tuple, dtype_nbytes: int = 4) -> Dict:\n        total_elements = np.prod(shape)\n        original_bytes = total_elements * dtype_nbytes\n\n        single_quant_bytes = total_elements * 0.5  # NF4 = 0.5 bytes\n        num_scales = (total_elements + self.block_size_1 - 1) // self.block_size_1\n        single_quant_bytes += num_scales * 4  # FP32 scales\n\n        double_quant_bytes = total_elements * 0.5\n        num_scales_2 = (num_scales + self.block_size_2 - 1) // self.block_size_2\n        double_quant_bytes += num_scales_2 * 4  # quantized second-level scales\n\n        return {\n            \"original_bytes\": original_bytes,\n            \"single_quant_bytes\": single_quant_bytes,\n            \"double_quant_bytes\": double_quant_bytes,\n            \"single_savings_pct\": round((1 - single_quant_bytes / original_bytes) * 100, 1),\n            \"double_savings_pct\": round((1 - double_quant_bytes / original_bytes) * 100, 1),\n            \"extra_savings_vs_single\": round((single_quant_bytes - double_quant_bytes) / single_quant_bytes * 100, 1),\n        }\n\ndq = DoubleQuantizer()\ntensor_test = np.random.randn(4096, 4096).astype(np.float32)\nsavings = dq.memory_savings(tensor_test.shape)\nprint(f\"Double quant memory savings: {savings}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-bitsandbytes",
      children: "5.4 Bitsandbytes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "541-bitsandbytes-config",
      children: "5.4.1 Bitsandbytes Config"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\nclass BitsAndBytesConfig:\n    load_in_4bit: bool = True\n    bnb_4bit_compute_dtype: str = \"float16\"\n    bnb_4bit_quant_type: str = \"nf4\"\n    bnb_4bit_use_double_quant: bool = True\n    bnb_4bit_quant_storage: str = \"uint8\"\n    llm_int8_threshold: float = 6.0\n    llm_int8_skip_modules: Optional[List[str]] = None\n    llm_int8_enable_fp32_cpu_offload: bool = False\n\n    def memory_estimate(self, model_size_b: float) -> Dict:\n        base = model_size_b * 1e9\n\n        if self.load_in_4bit:\n            model_mem = base * 0.5  # 4-bit = 0.5 bytes/param\n            if self.bnb_4bit_use_double_quant:\n                model_mem *= 0.98  # ~2% extra from double quant\n        else:\n            model_mem = base * 1.0  # 8-bit\n\n        return {\n            \"model_size_b\": model_size_b,\n            \"quantization\": \"4-bit NF4\" if self.load_in_4bit else \"8-bit\",\n            \"double_quant\": self.bnb_4bit_use_double_quant,\n            \"estimated_memory_gb\": round(model_mem / 1e9, 1),\n            \"vs_fp16_savings\": round((1 - model_mem / (base * 2)) * 100, 1),\n        }\n\n    def validate(self) -> List[str]:\n        warnings = []\n        valid_types = [\"nf4\", \"fp4\"]\n        if self.bnb_4bit_quant_type not in valid_types:\n            warnings.append(f\"quant_type must be one of {valid_types}\")\n        valid_dtypes = [\"float16\", \"bfloat16\", \"float32\"]\n        if self.bnb_4bit_compute_dtype not in valid_dtypes:\n            warnings.append(f\"compute_dtype must be one of {valid_dtypes}\")\n        return warnings\n\nbnb_config = BitsAndBytesConfig()\nprint(bnb_config.memory_estimate(7.0))\nprint(f\"Config valid: {bnb_config.validate()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "542-nf4-vs-fp4-comparison",
      children: "5.4.2 NF4 vs FP4 Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class NF4vsFP4:\n    def __init__(self):\n        self.nf4_levels = np.array([\n            -1.0, -0.8482, -0.6824, -0.5105,\n            -0.3396, -0.1812, -0.0504, 0.0504,\n            0.1812, 0.3396, 0.5105, 0.6824,\n            0.8482, 1.0,\n        ])\n        self.fp4_levels = np.array([\n            -6.0, -4.0, -2.0, -1.0,\n            0.0, 1.0, 2.0, 4.0,\n        ])\n\n    def simulate_distribution_error(self, distribution: str = \"normal\") -> Dict:\n        if distribution == \"normal\":\n            data = np.random.randn(100000)\n        elif distribution == \"uniform\":\n            data = np.random.uniform(-3, 3, 100000)\n        else:\n            data = np.random.laplace(0, 1, 100000)\n\n        nf4_error = self._quantization_error(data, self.nf4_levels)\n        fp4_error = self._quantization_error(data, self.fp4_levels)\n\n        return {\n            \"distribution\": distribution,\n            \"nf4_mse\": round(nf4_error, 6),\n            \"fp4_mse\": round(fp4_error, 6),\n            \"nf4_better\": nf4_error < fp4_error,\n        }\n\n    def _quantization_error(self, data: np.ndarray, levels: np.ndarray) -> float:\n        absmax = np.abs(data).max()\n        normalized = data / absmax\n        quantized = np.zeros_like(data)\n        for i in range(len(levels)):\n            if i == 0:\n                mask = normalized <= levels[i]\n            else:\n                mid = (levels[i - 1] + levels[i]) / 2\n                mask = np.logical_and(normalized > (levels[i - 1] if i > 0 else -np.inf),\n                                       normalized <= mid if normalized.ndim > 0 else True)\n            # simplified\n        return np.mean((data - normalized * absmax) ** 2)\n\ncomparison = NF4vsFP4()\nprint(f\"NF4 vs FP4 for normal: {comparison.simulate_distribution_error('normal')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-qlora-training",
      children: "5.5 QLoRA Training"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "551-qlora-model-config",
      children: "5.5.1 QLoRA Model Config"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class QLoRAConfig:\n    def __init__(self):\n        self.bnb_config = BitsAndBytesConfig(\n            load_in_4bit=True,\n            bnb_4bit_quant_type=\"nf4\",\n            bnb_4bit_use_double_quant=True,\n            bnb_4bit_compute_dtype=\"float16\",\n        )\n        self.lora_config = LoraConfig(\n            r=16,\n            lora_alpha=32,\n            target_modules=[\"q_proj\", \"v_proj\", \"k_proj\", \"o_proj\"],\n            lora_dropout=0.05,\n        )\n        self.use_gradient_checkpointing: bool = True\n        self.optimizer: str = \"paged_adamw_8bit\"\n        self.gradient_accumulation_steps: int = 4\n\n    def memory_breakdown(self, model_size_b: float) -> Dict:\n        base_mem = self.bnb_config.memory_estimate(model_size_b)\n\n        lora_params = 4 * 2 * 4096 * 16 * 32  # rough: 4 modules, 2 matrices, d=4096, r=16, 32 layers\n        lora_mem = lora_params * 2 / 1e9  # FP16\n\n        optimizer_mem = lora_params * 2 * 2 / 1e9  # Adam states for LoRA params\n\n        return {\n            \"quantized_base_gb\": base_mem[\"estimated_memory_gb\"],\n            \"lora_params_gb\": round(lora_mem, 2),\n            \"optimizer_gb\": round(optimizer_mem, 2),\n            \"estimated_total_gb\": round(base_mem[\"estimated_memory_gb\"] + lora_mem + optimizer_mem, 1),\n        }\n\n    def validate(self) -> List[str]:\n        warnings = []\n        warnings.extend(self.bnb_config.validate())\n        warnings.extend(self.lora_config.validate())\n        return warnings\n\nqlora = QLoRAConfig()\nmem = qlora.memory_breakdown(7.0)\nprint(f\"QLoRA memory breakdown: {mem}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "552-paged-optimizer",
      children: "5.5.2 Paged Optimizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PagedOptimizer:\n    def __init__(self, lr: float = 3e-4, page_size_mb: int = 4096):\n        self.lr = lr\n        self.page_size = page_size_mb * 1024 * 1024\n        self.memory_pages: List[np.ndarray] = []\n        self.current_page = 0\n\n    def allocate(self, param_size: int) -> np.ndarray:\n        if self.current_page >= len(self.memory_pages):\n            page_size = max(self.page_size, param_size)\n            new_page = np.zeros(page_size, dtype=np.float32)\n            self.memory_pages.append(new_page)\n\n        page = self.memory_pages[self.current_page]\n        self.current_page += 1\n        return page[:param_size]\n\n    def offload_to_cpu(self, grad: np.ndarray) -> np.ndarray:\n        cpu_buffer = np.zeros_like(grad)\n        cpu_buffer[:] = grad\n        grad[:] = 0\n        return cpu_buffer\n\n    def step(self, params: List[np.ndarray], grads: List[np.ndarray]):\n        for param, grad in zip(params, grads):\n            cpu_grad = self.offload_to_cpu(grad)\n            param -= self.lr * cpu_grad\n            del cpu_grad\n\n    def reset(self):\n        self.memory_pages = []\n        self.current_page = 0\n\noptimizer = PagedOptimizer(lr=3e-4, page_size_mb=4096)\nparams = [np.random.randn(4096, 4096).astype(np.float32) for _ in range(3)]\ngrads = [np.random.randn(4096, 4096).astype(np.float32) for _ in range(3)]\noptimizer.step(params, grads)\nprint(f\"Paged optimizer step complete (allocated {len(optimizer.memory_pages)} pages)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "553-memory-comparison-full-ft-vs-lora-vs-qlora",
      children: "5.5.3 Memory Comparison: Full FT vs LoRA vs QLoRA"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MemoryComparison13:\n    def compare(self, model_size_b: float = 7.0) -> List[Dict]:\n        scenarios = [\n            {\n                \"technique\": \"Full FT (FP32)\",\n                \"model_mem\": model_size_b * 4,\n                \"optimizer_mem\": model_size_b * 8,\n                \"grad_mem\": model_size_b * 4,\n                \"activations_gb\": 8.0,\n            },\n            {\n                \"technique\": \"Full FT (FP16)\",\n                \"model_mem\": model_size_b * 2,\n                \"optimizer_mem\": model_size_b * 4,\n                \"grad_mem\": model_size_b * 2,\n                \"activations_gb\": 4.0,\n            },\n            {\n                \"technique\": \"LoRA (FP16)\",\n                \"model_mem\": model_size_b * 2,\n                \"optimizer_mem\": 0.3,\n                \"grad_mem\": 0.3,\n                \"activations_gb\": 4.0,\n            },\n            {\n                \"technique\": \"QLoRA (NF4 + DQ)\",\n                \"model_mem\": model_size_b * 0.5,\n                \"optimizer_mem\": 0.3,\n                \"grad_mem\": 0.3,\n                \"activations_gb\": 2.0,\n            },\n        ]\n\n        results = []\n        for s in scenarios:\n            total_gb = (s[\"model_mem\"] + s[\"optimizer_mem\"] + s[\"grad_mem\"]) + s[\"activations_gb\"]\n            results.append({\n                \"technique\": s[\"technique\"],\n                \"model_mem_gb\": round(s[\"model_mem\"], 1),\n                \"optimizer_gb\": round(s[\"optimizer_mem\"], 1),\n                \"grad_gb\": round(s[\"grad_mem\"], 1),\n                \"activations_gb\": s[\"activations_gb\"],\n                \"total_gb\": round(total_gb, 1),\n            })\n        return results\n\nmem_comp = MemoryComparison13()\nfor r in mem_comp.compare():\n    print(f\"{r['technique']:25s}: {r['total_gb']:5.1f} GB total\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QLoRA combines 4-bit NormalFloat (NF4) quantization of the base model with LoRA adapters trained in FP16. This reduces the base model memory from 56 GB (FP16 7B) to ~3.5 GB (4-bit NF4) — a 16— reduction. Double quantization further saves ~0.5 GB by quantizing the quantization constants themselves (e.g.,.\nquantizing FP32 scales with FP8). Block-wise quantization (e.g., blocks of 64 weights per scale) maintains quality by adapting quantization granularity. Paged optimizers use CPU RAM to store optimizer states when GPU memory is exhausted,.\nswapping pages as needed. QLoRA enables fine-tuning 65B models on a single 48GB GPU, or 7B models on a 6GB GPU. The quality gap between QLoRA and.\nfull fine-tuning is typically <1% on standard benchmarks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use NF4 over FP4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NF4 matches the normal distribution of weights better"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enable double quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces memory by ~2% with no quality loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use paged optimizers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatically offloads optimizer states to CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block size matters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller blocks = better quality, more memory (default 64)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QLoRA quality is close to full FT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typically <1% accuracy gap on most benchmarks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ft05-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is model quantization and why is it used?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Model quantization reduces the precision of model weights and activations from 32-bit floating point (fp32) or 16-bit (fp16/bf16) to lower precision formats like 8-bit (INT8),.\n4-bit (NF4, INT4), or even 2-bit. This reduces memory usage and can accelerate inference. For a 7B parameter model: fp32 = 28GB,.\nfp16 = 14GB, 8-bit = 7GB, 4-bit = 3.5GB. Quantization works by mapping the range of original values to a smaller set of discrete levels. The trade-off is reduced precision — some information is lost,.\nwhich may slightly degrade model quality. However, modern quantization methods (NF4, GPTQ, AWQ) minimize quality loss by using non-uniform quantization that allocates more levels to the value ranges where most weights fall (near zero for.\nneural networks). Quantization is essential for deploying large models on limited hardware — a 70B model requires 140GB in fp16 but.\nonly 35GB in 4-bit, fitting on a single A100-80GB. QLoRA combines 4-bit quantization of the base model with LoRA adapters in higher precision,.\nenabling fine-tuning of large models on consumer GPUs."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ft05-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: What is NF4 (NormalFloat4) quantization and how does it work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NF4 (NormalFloat4) is a 4-bit quantization data type optimized for neural network weights, introduced in the QLoRA paper. It uses the fact that pre-trained neural network weights follow a zero-centered normal distribution. NF4 creates quantization levels that are unevenly spaced.\n— more levels near zero (where most weights are concentrated) and.\nfewer at the extremes. This non-uniform allocation provides better precision for the most common weight values compared to uniform 4-bit quantization. The process: (1) normalize weights to the range [-1,.\n1] using the absolute maximum value; (2) map each weight to the nearest of 16 quantization levels (2^4 = 16 levels) that follow the normal distribution's quantiles;.\n(3) store the 4-bit index for each weight; (4) during dequantization, look up the corresponding float value for each index. Compared to INT4 (uniform 4-bit),.\nNF4 preserves more information for normally distributed weights. In practice, NF4 achieves near-lossless quantization for LLMs — models in NF4 retain >99% of the original fp16 quality while using 4x less memory."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ft05-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you implement QLoRA with bitsandbytes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["QLoRA (Quantized LoRA) combines 4-bit quantization of the base model with LoRA adapters. Implementation with bitsandbytes: (1) load the base model in 4-bit — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AutoModelForCausalLM.from_pretrained(model_id,.\nload_in_4bit=True, bnb_4bit_compute_dtype=torch.bfloat16, bnb_4bit_quant_type=\"nf4\", bnb_4bit_use_double_quant=True, device_map=\"auto\")"
          }), "; (2) the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bnb_4bit_quant_type=\"nf4\""
          }), " uses NormalFloat4; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bnb_4bit_use_double_quant=True"
          }), " enables double quantization (quantizes the quantization constants themselves for additional savings);.\n(3) apply LoRA — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "model = get_peft_model(model, lora_config)"
          }), " — the LoRA adapters are added in bf16/fp32 precision while the base model stays in 4-bit;.\n(4) forward pass — during training, input tensors go through the 4-bit base model (dequantized on-the-fly to the compute dtype for.\nmatrix multiplication) and the bf16 LoRA adapter; (5) backward pass — gradients flow through the LoRA adapter (bf16) and are passed through the 4-bit base model (the 4-bit weights themselves are not updated,.\nonly the LoRA parameters). QLoRA reduces memory by 4x for the base model (14GB → 3.5GB for 7B model), enabling fine-tuning of 7B models on a single RTX 3090 (24GB) and.\n33B models on a single A100 (80GB)."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ft05-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: What is double quantization and why is it useful?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Double quantization (DQ) quantizes the quantization constants themselves, saving additional memory. In standard 4-bit quantization, each block of weights (typically 64 or.\n128 weights) has a quantization constant (fp32, 4 bytes). For a 7B model with block size 64: 7B/64 — 4 bytes ≈ 438MB of constants. Double quantization reduces this by quantizing the constants to 8-bit: 7B/64 — 1 byte ≈ 109MB,.\nsaving ~329MB. The process: (1) quantize weights to 4-bit using per-block quantization constants; (2) collect all quantization constants; (3) quantize the constants themselves to 8-bit using a second-level quantization constant (per 256 constants). Dequantization: restore the 8-bit constants to fp32,.\nthen use them to dequantize the 4-bit weights. The additional quality loss from double quantization is negligible (<0.1% perplexity increase) because the quantization constants vary slowly and.\ncan be stored at lower precision. QLoRA enables DQ with the flag ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bnb_4bit_use_double_quant=True"
          }), ". Combined with NF4, DQ reduces the total memory for.\nbase model weights by ~3MB per 1B parameters, which is modest but free — no quality cost for the memory savings."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ft05-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is a paged optimizer and how does it prevent OOM?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A paged optimizer (introduced in QLoRA) uses CPU RAM as swap space for GPU optimizer states when GPU memory is full,.\npreventing out-of-memory (OOM) errors during training. The optimizer states (momentum, variance) for AdamW require 2— the model size in fp32 — for.\na 7B model: 7B — 4 bytes — 2 = 56GB, far exceeding GPU memory. With LoRA, only LoRA parameters need optimizer states (~8M — 4 — 2 = 64MB for.\nr=8 on Q+V), so paging isn't needed for LoRA alone. However, for full fine-tuning or when using large gradient accumulation, the paged optimizer moves infrequently accessed optimizer state pages to CPU RAM,.\nfreeing GPU memory for activations and gradients. Implementation: bitsandbytes provides ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bnb.optim.Adam8bit"
          }), " (8-bit optimizer states) and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bnb.optim.AdamW"
          }), " with page-based memory management. Paged optimizers trade GPU memory for.\nsome performance overhead (CPU↔GPU transfer latency). They're most useful when training close to GPU memory limits — the optimizer pages out state during forward/backward and.\npages it back during the optimizer step."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ft05-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you choose between quantization precisions?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Precision selection depends on the trade-off between memory and quality: (1) fp32 (32-bit) — highest quality, rarely used for inference due to 2x memory vs fp16. Used internally for.\noptimizer states during training; (2) fp16/bf16 (16-bit) — standard for training and inference. Bf16 is preferred over fp16 because it has the same exponent range as fp32 (no overflow/underflow issues). Memory: 2 bytes per parameter;.\n(3) INT8 (8-bit) — 2x memory reduction vs fp16. ~0.5-1% quality loss for most models. Good for deployment on limited hardware still requiring high quality;.\n(4) NF4 (4-bit) — 4x memory reduction vs fp16. <1% quality loss for most models. Best memory-quality trade-off for LLMs. Enables fitting 70B models on a single A100;.\n(5) INT4/FP4 (4-bit uniform) — similar memory savings as NF4 but with ~2-3% more quality loss for normally distributed weights; (6) 2-bit (2-bit) — 8x memory reduction vs fp16. Significant quality loss (~5-10%),.\nexperimental. Selection rule: use NF4 for deployment when GPU memory is constrained, bf16 when memory is sufficient, and reserve fp32 only for.\noptimizer states. For fine-tuning, use QLoRA (4-bit base + bf16 adapters) when GPU memory is limited, standard LoRA (bf16 base) otherwise."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ft05-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you set up QLoRA training step by step?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Setting up QLoRA training: (1) Install — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pip install bitsandbytes peft transformers accelerate datasets"
          }), ". Ensure CUDA toolkit matches the bitsandbytes version;.\n(2) Load 4-bit model — use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AutoModelForCausalLM.from_pretrained"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "load_in_4bit=True"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bnb_4bit_quant_type=\"nf4\""
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bnb_4bit_use_double_quant=True"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bnb_4bit_compute_dtype=torch.bfloat16"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "device_map=\"auto\""
          }), ". The compute dtype determines the precision of matrix multiplications during the forward pass;.\n(3) Configure LoRA — standard ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LoraConfig"
          }), " with r=8-16, target_modules, lora_dropout; (4) Apply LoRA — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "get_peft_model(model, config)"
          }), " — LoRA adapters are in bf16 while base model stays in 4-bit;.\n(5) Configure training — use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TrainingArguments"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fp16=True"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bf16=True"
          }), ". Higher learning rate is often needed for QLoRA (2e-4 to 5e-4 vs 1e-4 for.\nfull LoRA) because the base model is lower precision; (6) Train — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "trainer.train()"
          }), ". Memory usage: ~5-6GB base model (7B in 4-bit) + ~2-4GB LoRA activations + ~2GB optimizer states for.\nLoRA parameters = ~10-12GB total, fitting comfortably on a 24GB RTX 3090. QLoRA achieves ~95% of full LoRA quality while using 3-4x less GPU memory for.\nthe base model."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ft05-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: What is the quality trade-off between different quantization methods?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Quality trade-offs across quantization methods vary by model and task. Empirical comparisons: (1) Perplexity on Wikipedia — bf16 baseline (perplexity 5.0),.\nNF4 (5.02, +0.4%), INT8 (5.03, +0.6%), GPTQ 4-bit (5.04, +0.8%), AWQ 4-bit (5.03, +0.6%), INT4 uniform (5.15, +3%); (2) Downstream task accuracy (MMLU average) — bf16 (68.5%),.\nNF4 (68.2%, -0.3%), INT8 (67.9%, -0.6%), GPTQ 4-bit (67.8%, -0.7%), INT4 (66.5%, -2%); (3) Generation quality (human eval) — NF4 and.\nINT8 are indistinguishable from bf16 for most use cases, GPTQ and AWQ show occasional artifacts (rare with optimal calibration), INT4 uniform shows more frequent quality degradation. Key factors affecting quality loss: model size (larger models quantize better — a 70B model loses less than a 7B model),.\ncalibration data quality for GPTQ/AWQ (better calibration = less quality loss), and task complexity (simple tasks like classification are less affected than complex generation). In practice,.\nNF4 with double quantization is the recommended default for deployment — it provides the best memory-quality trade-off and requires no calibration data."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ft05-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you serve a QLoRA-quantized model in production?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Serving a QLoRA-quantized model in production: (1) Merge and dequantize — after fine-tuning with QLoRA, merge the LoRA adapter into the base model (", (0,jsx_runtime.jsx)(_components.code, {
            children: "model.merge_and_unload()"
          }), "),.\nthen save the merged model. The merged model can be re-quantized to 4-bit using GPTQ or AWQ for inference (these methods provide faster inference than bitsandbytes 4-bit);.\n(2) Use vLLM — vLLM supports AWQ and GPTQ quantization formats for efficient serving. Convert the model to AWQ format (", (0,jsx_runtime.jsx)(_components.code, {
            children: "autoawq"
          }), " library): ", (0,jsx_runtime.jsx)(_components.code, {
            children: "from awq import AutoAWQForCausalLM;.\nmodel = AutoAWQForCausalLM.from_pretrained(merged_model_path); model.quantize(tokenizer, quant_config={ \"zero_point\": True, \"q_group_size\": 128, \"w_bit\": 4, \"version\": \"GEMM\" }); model.save_quantized(\"awq-model\")"
          }), "; (3) Deploy with vLLM — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "vllm serve awq-model --quantization awq --dtype auto --max-model-len 4096"
          }), ";.\n(4) For TGI (Text Generation Inference) — convert to GPTQ format using AutoGPTQ, then deploy with TGI's GPTQ support. Production serving of 4-bit models achieves similar throughput to fp16 models (the dequantization overhead is small compared to attention compute) while.\nusing 4x less memory — meaning you can serve 4x more models on the same GPU."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ft05-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you handle gradient computation with quantized models?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Gradient computation with quantized models uses the Straight-Through Estimator (STE) — during the backward pass, gradients are computed as if the quantization function was the identity function. This is necessary because quantization is non-differentiable (the rounding operation has zero gradient everywhere). The STE approximation: in the forward pass,.\nweights are quantized (e.g., fp16 → NF4), and the result is dequantized back to the compute dtype. In the backward pass,.\ngradients flow through the dequantized weights as if they were the original unquantized weights. For QLoRA specifically: (1) the base model is stored in 4-bit (NF4) and.\nfrozen — no gradients flow to base model weights; (2) during the forward pass, 4-bit weights are dequantized to the compute dtype (bf16) for.\nmatrix multiplication; (3) gradients only flow through the LoRA adapter parameters (which are in bf16), not through the base model weights;.\n(4) the 4-bit base weights remain unchanged during training. This means QLoRA training memory depends primarily on LoRA parameter count and.\nbatch size, not on the base model size. The key insight: because gradients don't need to be stored for the base model (it's frozen),.\nquantization doesn't affect gradient computation at all — the 4-bit base model is just a very compact storage format."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s5-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What is the memory reduction of 4-bit NF4 vs FP16?"]
      }), "\nA. 2—\nB. 4—\nC. 8—\nD. 16—\nAnswer: B (4-bit is 0.5 bytes vs FP16's 2 bytes per param = 4—)\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s5-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What does double quantization quantize?"]
      }), "\nA. The model weights\nB. The quantization scaling constants\nC. The LoRA adapters\nD. The optimizer states\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s5-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " Why is NF4 better than FP4 for LLMs?"]
      }), "\nA. It supports more bits\nB. It's designed to match the normal distribution of weights\nC. It's faster\nD. It requires less memory\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s5-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What is the purpose of paged optimizers?"]
      }), "\nA. To speed up training\nB. To offload optimizer states to CPU when GPU memory is full\nC. To reduce quantization error\nD. To increase batch size\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s5-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " What model size can QLoRA fine-tune on a 48GB GPU?"]
      }), "\nA. 1B\nB. 7B\nC. 65B\nD. 180B\nAnswer: C\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not understanding the fundamental concepts before applying them"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Skipping edge cases in implementation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not analyzing time/space complexity"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Forgetting to handle null/empty inputs"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not practicing enough problems to build pattern recognition1. Implement a 4-bit NF4 quantizer with block size 64. Quantize a 4096—4096 weight matrix and measure MSE and compression ratio."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a double quantization system: first quantize weights in blocks of 64 with NF4, then quantize the FP32 scale factors in blocks of 256. Report memory savings."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare NF4 vs FP4: generate weights from normal, uniform, and laplace distributions. Quantize with both formats and report MSE for each distribution."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a paged optimizer that allocates pages of 4GB, offloads gradients to CPU when page is full, and swaps them back during optimization."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a memory comparison table for 7B and 70B models across FP32, FP16, 8-bit, 4-bit NF4, and QLoRA. Recommend the optimal setup for a"
        }), "\n"]
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
            children: "Explain the core idea of QLoRA & Quantization in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates QLoRA & Quantization."
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
            children: "Describe a production bug caused by misunderstanding QLoRA & Quantization. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on QLoRA & Quantization from 10 users to 10 million?"
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
            children: "Compare QLoRA & Quantization with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on QLoRA & Quantization."
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
            children: "How does QLoRA & Quantization behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of QLoRA & Quantization run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of QLoRA & Quantization that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name QLoRA & Quantization explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using QLoRA & Quantization\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies QLoRA & Quantization to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside QLoRA & Quantization (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of QLoRA & Quantization and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a QLoRA & Quantization-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic QLoRA & Quantization interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply QLoRA & Quantization in production today?"
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
        }), " QLoRA & Quantization builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for QLoRA & Quantization before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for QLoRA & Quantization is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for QLoRA & Quantization in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the QLoRA & Quantization chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers QLoRA & Quantization is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to QLoRA & Quantization is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing QLoRA & Quantization is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug QLoRA & Quantization issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to QLoRA & Quantization in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving QLoRA & Quantization that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of QLoRA & Quantization is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain QLoRA & Quantization in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for QLoRA & Quantization and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of QLoRA & Quantization on an empty input?"
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
            children: "Complete Medium exercises, explain QLoRA & Quantization to someone else"
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
        children: "Always write a one-line example of QLoRA & Quantization from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered QLoRA & Quantization when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining QLoRA & Quantization twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own QLoRA & Quantization snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of QLoRA & Quantization listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link QLoRA & Quantization to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of QLoRA & Quantization by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain QLoRA & Quantization to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of QLoRA & Quantization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on QLoRA & Quantization (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real QLoRA & Quantization problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements QLoRA & Quantization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for QLoRA & Quantization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on QLoRA & Quantization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how QLoRA & Quantization fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how QLoRA & Quantization is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where QLoRA & Quantization is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of QLoRA & Quantization, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is QLoRA & Quantization asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "QLoRA & Quantization is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with QLoRA & Quantization."
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
        children: "QLoRA & Quantization emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for QLoRA & Quantization today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about QLoRA & Quantization — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around QLoRA & Quantization changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing QLoRA & Quantization."
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
        children: "QLoRA & Quantization appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding QLoRA & Quantization helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the QLoRA & Quantization concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, QLoRA & Quantization skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply QLoRA & Quantization to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "QLoRA & Quantization is like a recipe"
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
        }), " — this chapter contributes the QLoRA & Quantization skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-05qloraandquantization-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of QLoRA & Quantization in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-05qloraandquantization-flash2",
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
      "data-qid": "14finetuningpeft-05qloraandquantization-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard QLoRA & Quantization approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-05qloraandquantization-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is QLoRA & Quantization NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-05qloraandquantization-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is QLoRA & Quantization applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for QLoRA & Quantization (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing QLoRA & Quantization (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for QLoRA & Quantization-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running QLoRA & Quantization in production at scale"
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
        children: "Testing: pytest for unit tests of QLoRA & Quantization code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on QLoRA & Quantization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in QLoRA & Quantization code."]
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
        }), " or your IDE's debugger to step through the QLoRA & Quantization example code."]
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
        children: "Explain QLoRA & Quantization in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of QLoRA & Quantization."
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
        children: "Tell me about a time you debugged a QLoRA & Quantization problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where QLoRA & Quantization is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for QLoRA & Quantization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core QLoRA & Quantization logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain QLoRA & Quantization without notes"
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
        }), ": a small team uses QLoRA & Quantization daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": QLoRA & Quantization patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": QLoRA & Quantization principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": QLoRA & Quantization shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect QLoRA & Quantization to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/06-instruction-tuning",
        children: "Instruction Tuning"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "QLoRA & Quantization, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of QLoRA & Quantization depends on input size and distribution — always benchmark for your own data."
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