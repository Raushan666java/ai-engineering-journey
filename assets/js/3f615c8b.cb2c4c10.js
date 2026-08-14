"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[96353],{

/***/ 53283
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_14_fine_tuning_peft_06_instruction_tuning_md_3f6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-14-fine-tuning-peft-06-instruction-tuning-md-3f6.json
const site_docs_courses_ai_engineering_placement_14_fine_tuning_peft_06_instruction_tuning_md_3f6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/fine-tuning-peft/06-instruction-tuning","title":"Instruction Tuning","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/14-fine-tuning-peft/06-instruction-tuning.md","sourceDirName":"courses/ai-engineering-placement/14-fine-tuning-peft","slug":"/ai-engineering-placement/14-fine-tuning-peft/06-instruction-tuning","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/06-instruction-tuning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":179,"frontMatter":{"id":"06-instruction-tuning","slug":"/ai-engineering-placement/14-fine-tuning-peft/06-instruction-tuning","title":"Instruction Tuning","sidebar_label":"Instruction Tuning","sidebar_position":179},"sidebar":"placementSidebar","previous":{"title":"QLoRA & Quantization","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/05-qlora-and-quantization"},"next":{"title":"DPO & Preference Tuning","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/07-dpo-and-preference-tuning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/14-fine-tuning-peft/06-instruction-tuning.md


const frontMatter = {
	id: '06-instruction-tuning',
	slug: '/ai-engineering-placement/14-fine-tuning-peft/06-instruction-tuning',
	title: 'Instruction Tuning',
	sidebar_label: 'Instruction Tuning',
	sidebar_position: 179
};
const contentTitle = 'Instruction Tuning';

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
  "value": "6.1 Dataset Formats",
  "id": "61-dataset-formats",
  "level": 2
}, {
  "value": "6.1.1 Format Registry",
  "id": "611-format-registry",
  "level": 3
}, {
  "value": "6.1.2 Dataset Loader",
  "id": "612-dataset-loader",
  "level": 3
}, {
  "value": "6.2 Chat Templates",
  "id": "62-chat-templates",
  "level": 2
}, {
  "value": "6.2.1 Template Engine",
  "id": "621-template-engine",
  "level": 3
}, {
  "value": "6.2.2 Multi-Turn Formatter",
  "id": "622-multi-turn-formatter",
  "level": 3
}, {
  "value": "6.3 Multi-Turn Conversations",
  "id": "63-multi-turn-conversations",
  "level": 2
}, {
  "value": "6.3.1 Conversation Manager",
  "id": "631-conversation-manager",
  "level": 3
}, {
  "value": "6.3.2 Context Window Management",
  "id": "632-context-window-management",
  "level": 3
}, {
  "value": "6.4 System Prompts",
  "id": "64-system-prompts",
  "level": 2
}, {
  "value": "6.4.1 System Prompt Designer",
  "id": "641-system-prompt-designer",
  "level": 3
}, {
  "value": "6.4.2 System Prompt Evaluation",
  "id": "642-system-prompt-evaluation",
  "level": 3
}, {
  "value": "6.5 Quality",
  "id": "65-quality",
  "level": 2
}, {
  "value": "6.5.1 Dataset Quality Filters",
  "id": "651-dataset-quality-filters",
  "level": 3
}, {
  "value": "6.5.2 Class Balancing",
  "id": "652-class-balancing",
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
        id: "instruction-tuning",
        children: "Instruction Tuning"
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
            children: "Understand instruction tuning dataset formats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement chat templates and multi-turn conversations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design effective system prompts and instruction formats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate instruction-tuned model quality"
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
      children: "Understanding instruction tuning is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how instruction tuning works in practice."
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
            children: "6.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dataset Formats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alpaca, ShareGPT, Dolly formats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chat Templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System, user, assistant roles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Turn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conversation history, context retention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System Prompts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavior control, persona setting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dataset deduplication, filtering, balancing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Dataset\n        R[Raw Instructions]\n        F[Format Converter]\n    end\n    subgraph Template\n        S[System Prompt]\n        U[User Message]\n        A[Assistant Response]\n        H[History]\n    end\n    subgraph Training\n        T[Tokenize]\n        L[Train with SFT]\n        E[Evaluate]\n    end\n    R --> F --> S & U & A\n    H --> U\n    S & U & A & H --> T --> L --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-dataset-formats",
      children: "6.1 Dataset Formats"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "611-format-registry",
      children: "6.1.1 Format Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\nfrom typing import List, Dict, Optional, Any\nimport json\n\n@dataclass\nclass InstructionExample:\n    instruction: str\n    input: Optional[str] = None\n    output: str = \"\"\n    system: Optional[str] = None\n    history: List[Dict[str, str]] = field(default_factory=list)\n\nclass FormatConverter:\n    def __init__(self):\n        self.formats = {\n            \"alpaca\": self._to_alpaca,\n            \"sharegpt\": self._to_sharegpt,\n            \"dolly\": self._to_dolly,\n            \"oasst\": self._to_oasst,\n            \"custom\": self._to_custom,\n        }\n\n    def convert(self, example: InstructionExample, target_format: str) -> str:\n        converter = self.formats.get(target_format)\n        if not converter:\n            raise ValueError(f\"Unknown format: {target_format}\")\n        return converter(example)\n\n    def _to_alpaca(self, ex: InstructionExample) -> str:\n        if ex.input:\n            return f\"Below is an instruction that describes a task.\\n\\n### Instruction:\\n{ex.instruction}\\n\\n### Input:\\n{ex.input}\\n\\n### Response:\\n{ex.output}\"\n        return f\"Below is an instruction that describes a task.\\n\\n### Instruction:\\n{ex.instruction}\\n\\n### Response:\\n{ex.output}\"\n\n    def _to_sharegpt(self, ex: InstructionExample) -> str:\n        turns = []\n        if ex.system:\n            turns.append({\"from\": \"system\", \"value\": ex.system})\n\n        history = ex.history or []\n        for turn in history:\n            turns.append({\"from\": turn.get(\"role\", \"user\"), \"value\": turn.get(\"content\", \"\")})\n\n        turns.append({\"from\": \"human\", \"value\": ex.instruction})\n        if ex.input:\n            turns[-1][\"value\"] += f\"\\n{ex.input}\"\n        turns.append({\"from\": \"gpt\", \"value\": ex.output})\n\n        return json.dumps({\"conversations\": turns})\n\n    def _to_dolly(self, ex: InstructionExample) -> str:\n        return json.dumps({\n            \"instruction\": ex.instruction,\n            \"context\": ex.input or \"\",\n            \"response\": ex.output,\n            \"category\": \"instruction_following\",\n        })\n\n    def _to_oasst(self, ex: InstructionExample) -> str:\n        messages = []\n        messages.append({\"role\": \"user\", \"content\": ex.instruction})\n        if ex.input:\n            messages[-1][\"content\"] += f\"\\n{ex.input}\"\n        messages.append({\"role\": \"assistant\", \"content\": ex.output})\n        return json.dumps(messages)\n\n    def _to_custom(self, ex: InstructionExample) -> str:\n        template = ex.system or \"\"\n        template += f\"\\nUser: {ex.instruction}\"\n        if ex.input:\n            template += f\"\\nContext: {ex.input}\"\n        template += f\"\\nAssistant: {ex.output}\"\n        return template\n\nconverter = FormatConverter()\nex = InstructionExample(\n    instruction=\"Explain what machine learning is\",\n    input=\"Keep it simple\",\n    output=\"Machine learning is teaching computers to learn from data...\",\n    system=\"You are a helpful tutor.\",\n)\nfor fmt in [\"alpaca\", \"dolly\", \"custom\"]:\n    print(f\"\\n--- {fmt} ---\")\n    print(converter.convert(ex, fmt)[:100] + \"...\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "612-dataset-loader",
      children: "6.1.2 Dataset Loader"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class InstructionDataset:\n    def __init__(self, format: str = \"alpaca\"):\n        self.format = format\n        self.examples: List[InstructionExample] = []\n\n    def add(self, ex: InstructionExample):\n        self.examples.append(ex)\n\n    def add_batch(self, examples: List[InstructionExample]):\n        self.examples.extend(examples)\n\n    def to_training_format(self, converter: FormatConverter) -> List[str]:\n        return [converter.convert(ex, self.format) for ex in self.examples]\n\n    def statistics(self) -> Dict:\n        if not self.examples:\n            return {\"count\": 0}\n\n        avg_instr_len = sum(len(e.instruction.split()) for e in self.examples) / len(self.examples)\n        avg_output_len = sum(len(e.output.split()) for e in self.examples) / len(self.examples)\n        has_input = sum(1 for e in self.examples if e.input)\n        has_system = sum(1 for e in self.examples if e.system)\n        has_history = sum(1 for e in self.examples if e.history)\n\n        return {\n            \"count\": len(self.examples),\n            \"avg_instruction_words\": round(avg_instr_len, 1),\n            \"avg_output_words\": round(avg_output_len, 1),\n            \"with_input\": has_input,\n            \"with_system\": has_system,\n            \"with_history\": has_history,\n        }\n\nds = InstructionDataset()\nds.add_batch([InstructionExample(instruction=f\"Task {i}\", output=f\"Answer {i}\") for i in range(10)])\nprint(f\"Dataset stats: {ds.statistics()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-chat-templates",
      children: "6.2 Chat Templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "621-template-engine",
      children: "6.2.1 Template Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ChatTemplate:\n    def __init__(self, template_name: str = \"llama\"):\n        self.templates = {\n            \"llama\": {\n                \"system\": \"<s>[INST] <<SYS>>\\n{system}\\n<</SYS>>\\n\\n{instruction} [/INST]\",\n                \"user\": \"<s>[INST] {message} [/INST]\",\n                \"assistant\": \"{response}</s>\",\n                \"bos\": \"<s>\",\n                \"eos\": \"</s>\",\n            },\n            \"chatml\": {\n                \"system\": \"<|im_start|>system\\n{system}<|im_end|>\\n\",\n                \"user\": \"<|im_start|>user\\n{message}<|im_end|>\\n\",\n                \"assistant\": \"<|im_start|>assistant\\n{response}<|im_end|>\\n\",\n                \"bos\": \"\",\n                \"eos\": \"<|im_end|>\",\n            },\n            \"mistral\": {\n                \"system\": \"[INST] {instruction} [/INST]\",\n                \"user\": \"[INST] {message} [/INST]\",\n                \"assistant\": \"{response}\",\n                \"bos\": \"<s>\",\n                \"eos\": \"</s>\",\n            },\n            \"gemma\": {\n                \"system\": \"<bos>{instruction}\",\n                \"user\": \"<start_of_turn>user\\n{message}<end_of_turn>\\n\",\n                \"assistant\": \"<start_of_turn>model\\n{response}<end_of_turn>\\n\",\n                \"bos\": \"<bos>\",\n                \"eos\": \"<eos>\",\n            },\n        }\n\n    def format(self, messages: List[Dict[str, str]],\n               template_name: str = \"llama\") -> str:\n        template = self.templates.get(template_name)\n        if not template:\n            raise ValueError(f\"Unknown template: {template_name}\")\n\n        result = \"\"\n        for msg in messages:\n            role = msg.get(\"role\", \"user\")\n            content = msg.get(\"content\", \"\")\n\n            if role == \"system\":\n                result += template[\"system\"].format(system=content, instruction=\"\")\n            elif role == \"user\":\n                result += template[\"user\"].format(message=content)\n            elif role == \"assistant\":\n                result += template[\"assistant\"].format(response=content)\n\n        return result\n\n    def list_templates(self) -> List[str]:\n        return list(self.templates.keys())\n\ntpl = ChatTemplate()\nmessages = [\n    {\"role\": \"system\", \"content\": \"You are a coding assistant.\"},\n    {\"role\": \"user\", \"content\": \"Write a Python function\"},\n    {\"role\": \"assistant\", \"content\": \"Here's a function...\"},\n]\nprint(\"ChatML:\", tpl.format(messages, \"chatml\")[:80] + \"...\")\nprint(\"Llama:\", tpl.format(messages, \"llama\")[:80] + \"...\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "622-multi-turn-formatter",
      children: "6.2.2 Multi-Turn Formatter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiTurnFormatter:\n    def __init__(self, template: ChatTemplate, template_name: str = \"chatml\"):\n        self.template = template\n        self.name = template_name\n\n    def format_conversation(self, turns: List[Dict]) -> str:\n        return self.template.format(turns, self.name)\n\n    def extract_last_turn(self, conversation: str) -> str:\n        if self.name == \"chatml\":\n            parts = conversation.split(\"<|im_start|>assistant\\n\")\n            if len(parts) > 1:\n                last = parts[-1].split(\"<|im_end|>\")[0]\n                return last\n        elif self.name == \"llama\":\n            parts = conversation.split(\"[/INST]\")\n            if len(parts) > 1:\n                return parts[-1].strip()\n        return \"\"\n\n    def build_training_example(self, turns: List[Dict]) -> str:\n        formatted = self.format_conversation(turns[:-1])\n        target = turns[-1].get(\"content\", \"\")\n        return formatted + target\n\nformatter = MultiTurnFormatter(tpl, \"chatml\")\nconversation = [\n    {\"role\": \"user\", \"content\": \"What is Python?\"},\n    {\"role\": \"assistant\", \"content\": \"Python is a programming language.\"},\n    {\"role\": \"user\", \"content\": \"Give an example\"},\n    {\"role\": \"assistant\", \"content\": \"print('Hello')\"},\n]\ntraining_ex = formatter.build_training_example(conversation)\nprint(f\"Training example length: {len(training_ex)} chars\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-multi-turn-conversations",
      children: "6.3 Multi-Turn Conversations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "631-conversation-manager",
      children: "6.3.1 Conversation Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ConversationManager:\n    def __init__(self, max_history: int = 10, max_tokens: int = 2048):\n        self.max_history = max_history\n        self.max_tokens = max_tokens\n        self.history: List[Dict] = []\n\n    def add_turn(self, role: str, content: str):\n        self.history.append({\"role\": role, \"content\": content})\n        if len(self.history) > self.max_history * 2:\n            self.history = self.history[-(self.max_history * 2):]\n\n    def get_context(self, tokenizer_fn: Callable = None) -> str:\n        total_tokens = 0\n        context = []\n\n        for turn in reversed(self.history):\n            tokens = len(turn[\"content\"].split()) * 1.3\n            if total_tokens + tokens > self.max_tokens:\n                break\n            context.insert(0, turn)\n            total_tokens += tokens\n\n        return context\n\n    def clear(self):\n        self.history = []\n\n    def export(self) -> List[Dict]:\n        return self.history.copy()\n\ncm = ConversationManager(max_history=5)\ncm.add_turn(\"user\", \"What is RAG?\")\ncm.add_turn(\"assistant\", \"RAG stands for Retrieval-Augmented Generation.\")\ncm.add_turn(\"user\", \"How does it work?\")\ncm.add_turn(\"assistant\", \"It retrieves relevant documents and feeds them to the LLM.\")\ncontext = cm.get_context()\nprint(f\"Context length: {len(context)} turns\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "632-context-window-management",
      children: "6.3.2 Context Window Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ContextWindowManager:\n    def __init__(self, max_tokens: int = 4096, token_buffer: int = 512):\n        self.max_tokens = max_tokens\n        self.buffer = token_buffer\n\n    def fit_in_window(self, turns: List[Dict],\n                      token_estimator: Callable) -> List[Dict]:\n        available = self.max_tokens - self.buffer\n        fitted = []\n\n        for turn in reversed(turns):\n            tokens = token_estimator(turn.get(\"content\", \"\"))\n            if available - tokens < 0:\n                break\n            fitted.insert(0, turn)\n            available -= tokens\n\n        return fitted\n\n    def needs_summarization(self, turns: List[Dict],\n                            token_estimator: Callable) -> bool:\n        total = sum(token_estimator(t.get(\"content\", \"\")) for t in turns)\n        return total > self.max_tokens * 0.8\n\n    def create_summary_prompt(self, turns: List[Dict]) -> str:\n        return f\"Summarize the conversation so far:\\n{turns[-1].get('content', '')}\"\n\ncwm = ContextWindowManager(max_tokens=4096)\nturns = [{\"role\": \"user\", \"content\": f\"Message {i}\" * 50} for i in range(20)]\nestimator = lambda s: len(s.split()) * 1.3\nprint(f\"Needs summarization: {cwm.needs_summarization(turns, estimator)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-system-prompts",
      children: "6.4 System Prompts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "641-system-prompt-designer",
      children: "6.4.1 System Prompt Designer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SystemPromptDesigner:\n    def __init__(self):\n        self.patterns = {\n            \"persona\": \"You are {persona}. {behavior}\",\n            \"format\": \"Respond in {format}. {constraints}\",\n            \"constraint\": \"Rules: {rules}\",\n            \"style\": \"Use a {tone} tone. {audience}\",\n        }\n\n    def create(self, persona: str = \"\", behavior: str = \"\",\n               format: str = \"\", rules: List[str] = None,\n               tone: str = \"\", audience: str = \"\") -> str:\n        parts = []\n\n        if persona:\n            parts.append(self.patterns[\"persona\"].format(persona=persona, behavior=behavior))\n\n        if format:\n            parts.append(self.patterns[\"format\"].format(format=format, constraints=\"\"))\n\n        if rules:\n            rules_text = \"\\n\".join(f\"- {r}\" for r in rules)\n            parts.append(self.patterns[\"constraint\"].format(rules=rules_text))\n\n        if tone:\n            parts.append(self.patterns[\"style\"].format(tone=tone, audience=audience))\n\n        return \"\\n\\n\".join(parts)\n\n    def examples(self) -> Dict[str, str]:\n        return {\n            \"coding_assistant\": self.create(\n                persona=\"an expert software engineer\",\n                behavior=\"help users write clean, efficient code.\",\n                format=\"markdown code blocks\",\n                rules=[\"Explain your reasoning\", \"Provide examples\", \"Handle edge cases\"],\n                tone=\"professional\",\n            ),\n            \"tutor\": self.create(\n                persona=\"a patient teacher\",\n                behavior=\"explain concepts clearly and thoroughly.\",\n                format=\"simple language with examples\",\n                rules=[\"Check for understanding\", \"Adjust to user's level\"],\n                tone=\"encouraging\",\n            ),\n        }\n\ndesigner = SystemPromptDesigner()\nfor name, prompt in designer.examples().items():\n    print(f\"\\n=== {name} ===\")\n    print(prompt[:200] + \"...\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "642-system-prompt-evaluation",
      children: "6.4.2 System Prompt Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SystemPromptEvaluator:\n    def __init__(self):\n        self.criteria = [\"clarity\", \"specificity\", \"constraints\", \"persona\"]\n\n    def evaluate(self, prompt: str) -> Dict:\n        scores = {}\n        for criterion in self.criteria:\n            if criterion == \"clarity\":\n                words = len(prompt.split())\n                scores[criterion] = min(words / 20, 1.0) if words >= 10 else words / 10\n            elif criterion == \"specificity\":\n                has_format = any(w in prompt.lower() for w in [\"format\", \"style\", \"json\", \"markdown\"])\n                scores[criterion] = 0.8 if has_format else 0.3\n            elif criterion == \"constraints\":\n                has_rules = \"rule\" in prompt.lower() or \"don't\" in prompt.lower() or \"must\" in prompt.lower()\n                scores[criterion] = 0.9 if has_rules else 0.2\n            elif criterion == \"persona\":\n                has_persona = any(w in prompt.lower() for w in [\"you are\", \"act as\", \"role\"])\n                scores[criterion] = 0.9 if has_persona else 0.1\n\n        scores[\"overall\"] = sum(scores.values()) / len(scores)\n        scores[\"needs_improvement\"] = scores[\"overall\"] < 0.5\n        return scores\n\nevaluator = SystemPromptEvaluator()\nprompt = \"You are an expert. Answer questions about Python.\"\nprint(f\"Prompt evaluation: {evaluator.evaluate(prompt)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-quality",
      children: "6.5 Quality"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "651-dataset-quality-filters",
      children: "6.5.1 Dataset Quality Filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DatasetQualityFilter:\n    def __init__(self):\n        self.filters = [\n            (\"short_output\", self._filter_short_output),\n            (\"duplicate_instruction\", self._filter_duplicates),\n            (\"low_quality\", self._filter_low_quality),\n        ]\n\n    def filter(self, dataset: List[InstructionExample]) -> List[InstructionExample]:\n        filtered = dataset[:]\n        for name, filter_fn in self.filters:\n            before = len(filtered)\n            filtered = filter_fn(filtered)\n            after = len(filtered)\n            print(f\"  {name}: removed {before - after} examples\")\n        return filtered\n\n    def _filter_short_output(self, examples: List[InstructionExample]) -> List[InstructionExample]:\n        return [e for e in examples if len(e.output.split()) >= 5]\n\n    def _filter_duplicates(self, examples: List[InstructionExample]) -> List[InstructionExample]:\n        seen = set()\n        unique = []\n        for e in examples:\n            key = e.instruction.lower().strip()\n            if key not in seen:\n                seen.add(key)\n                unique.append(e)\n        return unique\n\n    def _filter_low_quality(self, examples: List[InstructionExample]) -> List[InstructionExample]:\n        filtered = []\n        for e in examples:\n            score = self._quality_score(e)\n            if score >= 0.5:\n                filtered.append(e)\n        return filtered\n\n    def _quality_score(self, example: InstructionExample) -> float:\n        score = 0.0\n        if len(example.instruction) > 10:\n            score += 0.3\n        if len(example.output) > 20:\n            score += 0.3\n        if example.output.strip().endswith((\".\", \"!\", \"?\")):\n            score += 0.2\n        if not any(w in example.output.lower() for w in [\"error\", \"undefined\", \"nan\"]):\n            score += 0.2\n        return score\n\nraw = [\n    InstructionExample(instruction=\"Hi\", output=\"Hello\"),\n    InstructionExample(instruction=\"Explain AI\", output=\"AI is artificial intelligence.\"),\n    InstructionExample(instruction=\"Explain AI\", output=\"Full explanation...\"),\n    InstructionExample(instruction=\"Code\", output=\"x\"),\n]\nfilter_obj = DatasetQualityFilter()\nclean = filter_obj.filter(raw)\nprint(f\"Clean dataset: {len(clean)} examples\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "652-class-balancing",
      children: "6.5.2 Class Balancing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DatasetBalancer:\n    def __init__(self, categories: Dict[str, int] = None):\n        self.categories = categories or {}\n\n    def analyze(self, dataset: List[InstructionExample]) -> Dict[str, int]:\n        distribution = {}\n        for ex in dataset:\n            cat = self._categorize(ex)\n            distribution[cat] = distribution.get(cat, 0) + 1\n        return distribution\n\n    def balance(self, dataset: List[InstructionExample],\n                target_per_category: int = 1000) -> List[InstructionExample]:\n        balanced = {}\n        for ex in dataset:\n            cat = self._categorize(ex)\n            if cat not in balanced:\n                balanced[cat] = []\n            if len(balanced[cat]) < target_per_category:\n                balanced[cat].append(ex)\n\n        result = []\n        for cat, examples in balanced.items():\n            result.extend(examples)\n\n        return result\n\n    def _categorize(self, example: InstructionExample) -> str:\n        instruction = example.instruction.lower()\n        if any(w in instruction for w in [\"write\", \"code\", \"implement\", \"function\"]):\n            return \"coding\"\n        elif any(w in instruction for w in [\"explain\", \"what\", \"describe\", \"define\"]):\n            return \"knowledge\"\n        elif any(w in instruction for w in [\"summarize\", \"summarise\", \"extract\"]):\n            return \"summarization\"\n        elif any(w in instruction for w in [\"translate\", \"convert\"]):\n            return \"translation\"\n        else:\n            return \"general\"\n\nbalancer = DatasetBalancer()\nexamples = [InstructionExample(instruction=\"Write a function\", output=\"def f(): pass\") for _ in range(50)]\nexamples += [InstructionExample(instruction=\"Explain gravity\", output=\"Gravity is...\") for _ in range(200)]\ndist = balancer.analyze(examples)\nprint(f\"Distribution: {dist}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instruction tuning transforms a base LLM into a chat/assistant model by training on formatted instruction-output pairs. Common dataset formats include Alpaca (instruction/input/output),.\nShareGPT (conversation turns), Dolly (instruction/context/response), and OASST (role-based messages). Chat templates (Llama, ChatML, Mistral, Gemma) define how system, user, and assistant messages are structured with bos/eos tokens. Multi-turn conversations require context window management — truncating older turns when exceeding token limits. System prompts control model behavior.\nthrough persona, format instructions, constraints, and tone. Dataset quality is improved through deduplication, filtering short/low-quality examples, and balancing across categories (coding,.\nknowledge, summarization, translation, general)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Choose a template early"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent formatting is critical for training quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deduplicate instructions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicates bias training toward repeated patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Balance categories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents the model from over-specializing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design system prompts carefully"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "They control the model's behavior during training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manage context window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-turn training requires sliding window or summarization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filter low-quality examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short or incomplete outputs degrade model quality"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ft06-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is instruction tuning and why is it important?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Instruction tuning is a fine-tuning technique where a language model is trained on (instruction, response) pairs to improve its ability to follow diverse instructions. It transforms a base pre-trained LLM (which predicts next tokens but.\ndoesn't follow instructions) into a helpful assistant that can understand and execute user requests. Instruction tuning is important because: (1) it aligns the model with human intent — the model learns to produce responses that satisfy the user's explicit request rather than just continuing the text;.\n(2) it improves generalization to unseen instructions — models trained on diverse instructions can generalize to new tasks they weren't explicitly trained on;.\n(3) it enables zero-shot task performance — after instruction tuning, the model can perform tasks from natural language descriptions without examples. The process uses a dataset of (instruction,.\nresponse) pairs — typically 10K-100K examples covering diverse tasks (writing, coding, analysis, creative, Q&A). FLAN (Finetuned Language Net) demonstrated that instruction tuning on a broad range of tasks improves both task-specific performance and.\ngeneralization to held-out tasks."
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
      "data-qid": "ft06-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: What are the common instruction tuning dataset formats?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Common instruction tuning dataset formats: (1) (instruction, output) — the simplest format: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "{\"instruction\": \"Write a poem about AI\", \"output\": \"Here is a poem...\"}"
          }), ". Used by Alpaca,.\nDolly, and ShareGPT datasets; (2) (instruction, input, output) — includes optional input context: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "{\"instruction\": \"Summarize this text\", \"input\": \"Long article text...\",.\n\"output\": \"Summary...\"}"
          }), ". The input field provides context while the instruction specifies the task. Used by the FLAN dataset; (3) Multi-turn conversation — list of messages with roles: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[{\"role\": \"system\",.\n\"content\": \"You are a helpful assistant.\"}, {\"role\": \"user\", \"content\": \"Hello\"}, {\"role\": \"assistant\", \"content\": \"Hi! How can I help?\"}]"
          }), ". Used by OpenAssistant,.\nLMSYS-Chat-1M; (4) ShareGPT format — JSON array of conversation turns from real ChatGPT interactions. Each example has an \"id\" and \"conversations\" array with \"from\" (human/gpt) and.\n\"value\" fields. The format must match the model's chat template — for Llama-chat models, use the standard huggingface chat template format. Consistency is critical: all examples in the dataset should use the same format. The chosen format is applied via.\na formatting function during data loading that converts raw examples into tokenized sequences."]
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
      "data-qid": "ft06-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you implement chat templates and multi-turn conversations?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Chat templates define how conversation turns are formatted into a single tokenizable string. HuggingFace's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "apply_chat_template()"
          }), " method handles this: (1) each model has a predefined chat template in its tokenizer configuration (", (0,jsx_runtime.jsx)(_components.code, {
            children: "tokenizer.chat_template"
          }), ") — for.\nLlama-3, it uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "\"<|begin_of_text|><|start_header_id|>system<|end_header_id|>\\n\\n{system_message}<|eot_id|><|start_header_id|>user<|end_header_id|>\\n\\n{user_message}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\\n\\n{assistant_message}<|eot_id|>\""
          }), "; (2) for training, format each conversation: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tokenizer.apply_chat_template(conversation, tokenize=False, add_generation_prompt=False)"
          }), " produces the full string including all turns; (3) tokenize the full string and.\ncreate labels where only assistant tokens contribute to loss — user and system tokens have labels = -100 (ignored in loss). Implementation: a formatting function applies the chat template,.\nthen the data collator creates proper labels by masking non-assistant tokens. Multi-turn conversations help the model learn to maintain context and.\nconsistency across multiple exchanges. The quality of the chat template implementation directly affects training quality — a mismatch between training and.\ninference format degrades performance."]
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
      "data-qid": "ft06-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you design effective system prompts for instruction tuning?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Designing effective system prompts for instruction tuning: (1) Role definition — clearly define the model's persona: \"You are a helpful, harmless,.\nand honest AI assistant.\" More specific roles improve task performance: \"You are an expert Python programmer who writes clean, well-documented code.\";.\n(2) Behavior guidelines — specify desired behaviors: response style (concise vs. detailed), formatting preferences (use markdown, bullet points), safety guidelines (refuse harmful requests politely);.\n(3) Capability boundaries — state what the model can and cannot do: \"You can use tools to search the web but.\ncannot access real-time data.\" Good system prompts improve instruction following by providing consistent context across all training examples. During dataset creation,.\nthe system prompt is prepended to every training example (as the first message in the conversation). Some datasets use a single system prompt for.\nall examples, while others vary the system prompt per example to improve generalization. Recommended: use a single consistent system prompt aligned with the target deployment persona,.\nwith 10-20% of training examples having slightly varied prompts for robustness."
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
      "data-qid": "ft06-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you create loss masking for instruction tuning?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Loss masking in instruction tuning ensures the model only learns to predict assistant responses, not the system prompt or user instructions. Implementation: (1) after tokenizing the full conversation (system + user + assistant messages),.\ncreate a labels tensor identical to input_ids; (2) identify token positions corresponding to the system prompt and user messages — these are typically determined by the chat template structure (e.g.,.\ntokens between <|start_header_id|>user<|end_header_id|> and <|start_header_id|>assistant<|end_header_id|> are user tokens); (3) set labels to -100 for all non-assistant token positions — PyTorch's cross-entropy loss ignores positions with label = -100;.\n(4) assistant tokens keep their original labels (the next-token prediction target). A helper function processes each tokenized conversation: iterate through the token IDs,.\nfind the assistant turn boundaries (based on the chat template's special tokens), and create the mask. Some datasets pre-tokenize with labels already set. Correct loss masking is critical — without it,.\nthe model would learn to predict user messages and system prompts, wasting model capacity and potentially learning to repeat user inputs. Masking ensures the model only learns the desired assistant behavior."
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
      "data-qid": "ft06-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you evaluate instruction-tuned model quality?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Evaluating instruction-tuned models requires multiple approaches: (1) Automated benchmarks — MT-Bench (multi-turn conversation quality judged by GPT-4), AlpacaEval (single-turn instruction following),.\nChatbot Arena (human preference rankings from real conversations), MMLU (knowledge and reasoning), HumanEval (code generation). These provide standardized comparison scores; (2) Task-specific evaluation — create a test set of held-out instructions representative of the target use case. Use LLM-as-judge (GPT-4 evaluating responses) or.\nhuman evaluation to score responses on helpfulness, correctness, and format compliance; (3) Side-by-side comparison — present the same instruction to the base model and.\nthe instruction-tuned model, comparing response quality. A/B testing with real users provides the most reliable quality signal; (4) Safety evaluation — test with adversarial inputs (jailbreak attempts,.\nharmful requests) to ensure the model refuses appropriately; (5) Regression testing — evaluate on general benchmarks before and after instruction tuning to detect catastrophic forgetting of general capabilities. For.\nproduction, create an automated evaluation pipeline that runs after each training run and compares against the previous version's scores."
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
      "data-qid": "ft06-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you construct a diverse instruction tuning dataset?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Constructing a diverse instruction tuning dataset: (1) Task categories — include diverse task types: brainstorming (30%), creative writing (20%), information extraction (15%),.\nreasoning/analysis (15%), coding (10%), Q&A (10%). Each category has subcategories (brainstorming: ideas, solutions, names, strategies); (2) Difficulty levels — mix simple instructions (\"What is 2+2?\"),.\nmedium (\"Explain how transformers work\"), and hard (\"Write a distributed consensus algorithm\"). Aim for 40% easy, 40% medium, 20% hard; (3) Instruction styles — vary verb phrasing (\"Write\",.\n\"Create\", \"Generate\", \"Explain\", \"Analyze\", \"Compare\", \"Summarize\", \"List\", \"Describe\", \"Draft\"), length (short vs. detailed instructions), and specificity (open-ended vs. constrained); (4) Input variations — for.\ntasks with input context, vary input length (short phrase, paragraph, multi-page) and complexity; (5) Sources — use public datasets (Dolly, OpenAssistant,.\nShareGPT, FLAN), synthetic data from stronger models (GPT-4 generated instructions), and real user data from production logs. A dataset quality checker validates: no duplicates,.\nbalanced category distribution, minimum instruction length (10 chars), and consistent formatting. Quality > quantity — 10K carefully curated examples outperform 100K noisy ones."
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
      "data-qid": "ft06-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: What training hyperparameters work best for instruction tuning?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Recommended hyperparameters for instruction tuning with LoRA: (1) Learning rate — 2e-4 to 5e-4 for LoRA (higher than full fine-tuning because only 0.1-1% of parameters are trainable). Use cosine scheduler with 10% warmup steps. Larger models (33B+) need lower LR (1e-4);.\n(2) Batch size — effective batch size of 64-128 (micro_batch_size — gradient_accumulation_steps). Larger batch sizes give more stable gradients; (3) Epochs — 1-3 epochs. Instruction tuning datasets don't need many epochs — the model should learn general patterns,.\nnot memorize examples. Monitor validation loss to detect overfitting; (4) LoRA rank — r=16 for Q+V projections. Higher rank (r=32-64) may help for.\ncomplex multi-turn datasets; (5) Max sequence length — 2048-4096 tokens, matching the target deployment context length. Longer sequences capture more context but.\nuse more memory; (6) Weight decay — 0.01 (AdamW default); (7) Warmup ratio — 0.1 (10% of total steps for learning rate warmup). For.\nQLoRA (4-bit base): use slightly higher LR (3e-4 to 5e-4) and consider adding 0.1 LoRA dropout for regularization. Monitor loss curves — training loss should decrease steadily and.\nplateau without spiking."
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
      "data-qid": "ft06-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you handle system prompts in instruction tuning datasets?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "System prompts set the context and behavior guidelines for the model. In instruction tuning, handling system prompts correctly is important for.\nconsistency between training and inference. Approaches: (1) Single system prompt — use one fixed system prompt for all training examples (e.g.,.\n\"You are a helpful AI assistant.\"). This is simplest and ensures the model learns to follow instructions given that specific system prompt. During inference,.\nuse the same system prompt; (2) Variable system prompts — vary the system prompt per example (different roles, different behavior guidelines). This improves robustness — the model learns to adapt to different system prompts. Include 10-20 different system prompts in the dataset;.\n(3) No system prompt — some datasets omit system prompts entirely and only use user/assistant turns. The model learns to infer the task from the user message alone. The chosen system prompt must be applied consistently during the chat template.\nformatting — it becomes the first message in the conversation. During training,.\nthe system prompt tokens are part of the prompt (loss-masked), not the target. The system prompt's content influences the model's behavior.\n— include the exact system prompt that will be used in production for the most consistent results."
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
      "data-qid": "ft06-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you prevent overfitting in instruction tuning?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Preventing overfitting in instruction tuning: (1) Dataset quality — ensure diversity and remove near-duplicates. If 90% of examples ask \"write a poem,\" the model will overfit to poetry generation. Use deduplication (embedding-based similarity to remove examples with >0.85 cosine similarity);.\n(2) Early stopping — monitor validation loss on a held-out set (10% of data). Stop training when validation loss stops improving,.\ntypically after 1-3 epochs. Use a patience parameter (stop after 3 epochs of no improvement); (3) Regularization — LoRA dropout (0.05-0.1),.\nweight decay (0.01), and LoRA's inherent low rank (r=8-16) naturally limits memorization capacity; (4) Data augmentation — paraphrase instructions, vary formatting,.\nand add noise to reduce memorization; (5) General capability evaluation — evaluate on unrelated benchmarks (MMLU, GSM8K) before and after training. If MMLU score drops by >3%,.\noverfitting is occurring — reduce epochs or increase regularization. Overfitting symptoms: training loss near 0 but validation loss increases, model generates outputs that copy training examples,.\nmodel fails on novel instructions of similar types. The most effective prevention is high-quality diverse data + early stopping + LoRA's inherent regularization."
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
      "data-qid": "ft-s6-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What does the Alpaca format use to separate sections?"]
      }), "\nA. XML tags\nB. ### headers\nC. JSON\nD. Markdown\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s6-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What is the purpose of a chat template?"]
      }), "\nA. To make responses look pretty\nB. To structure system/user/assistant messages with correct bos/eos tokens\nC. To compress conversations\nD. To validate JSON output\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s6-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " Why deduplicate instructions in a dataset?"]
      }), "\nA. To reduce file size\nB. To prevent bias toward repeated patterns\nC. To speed up training\nD. To improve formatting\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s6-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What should happen when a conversation exceeds the context window?"]
      }), "\nA. Crash\nB. Truncate older turns or summarize\nC. Ignore the limit\nD. Reduce response length\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s6-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " Why balance categories in instruction tuning data?"]
      }), "\nA. To reduce storage\nB. To prevent the model from over-specializing on one task type\nC. To make training faster\nD. To improve formatting\nAnswer: B\n"]
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
          children: "Not practicing enough problems to build pattern recognition1. Implement a format converter that converts between Alpaca, ShareGPT, and ChatML formats. Take 10 examples in Alpaca format, convert to ShareGPT, and verify correctness."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a chat template engine supporting Llama, ChatML, Mistral, and Gemma formats. Format a 3-turn conversation with each template."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a multi-turn conversation manager with context window management. Test with conversations that exceed the token limit and implement truncation."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design 5 system prompts for different personas: coding assistant, tutor, translator, creative writer, and therapist. Evaluate each with a scoring rubric."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a dataset quality pipeline: load 100 instruction examples, deduplicate, filter low-quality (output < 10 words), balance across 5 categories, and report before/after st"
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
            children: "Explain the core idea of Instruction Tuning in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Instruction Tuning."
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
            children: "Describe a production bug caused by misunderstanding Instruction Tuning. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Instruction Tuning from 10 users to 10 million?"
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
            children: "Compare Instruction Tuning with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Instruction Tuning."
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
            children: "How does Instruction Tuning behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Instruction Tuning run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Instruction Tuning that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Instruction Tuning explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Instruction Tuning\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Instruction Tuning to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Instruction Tuning (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Instruction Tuning and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Instruction Tuning-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Instruction Tuning interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Instruction Tuning in production today?"
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
        }), " Instruction Tuning builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Instruction Tuning before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Instruction Tuning is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Instruction Tuning in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Instruction Tuning chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Instruction Tuning is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Instruction Tuning is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Instruction Tuning is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Instruction Tuning issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Instruction Tuning in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Instruction Tuning that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Instruction Tuning is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Instruction Tuning in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Instruction Tuning and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Instruction Tuning on an empty input?"
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
            children: "Complete Medium exercises, explain Instruction Tuning to someone else"
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
        children: "Always write a one-line example of Instruction Tuning from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Instruction Tuning when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Instruction Tuning twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Instruction Tuning snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Instruction Tuning listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Instruction Tuning to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Instruction Tuning by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Instruction Tuning to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Instruction Tuning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Instruction Tuning (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Instruction Tuning problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Instruction Tuning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Instruction Tuning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Instruction Tuning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Instruction Tuning fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Instruction Tuning is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Instruction Tuning is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Instruction Tuning, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Instruction Tuning asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Instruction Tuning is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Instruction Tuning."
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
        children: "Instruction Tuning emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Instruction Tuning today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Instruction Tuning — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Instruction Tuning changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Instruction Tuning."
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
        children: "Instruction Tuning appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Instruction Tuning helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Instruction Tuning concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Instruction Tuning skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Instruction Tuning to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instruction Tuning is like a recipe"
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
        }), " — this chapter contributes the Instruction Tuning skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-06instructiontuning-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Instruction Tuning in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-06instructiontuning-flash2",
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
      "data-qid": "14finetuningpeft-06instructiontuning-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Instruction Tuning approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-06instructiontuning-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Instruction Tuning NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-06instructiontuning-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Instruction Tuning applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Instruction Tuning (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Instruction Tuning (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Instruction Tuning-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Instruction Tuning in production at scale"
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
        children: "Testing: pytest for unit tests of Instruction Tuning code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Instruction Tuning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Instruction Tuning code."]
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
        }), " or your IDE's debugger to step through the Instruction Tuning example code."]
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
        children: "Explain Instruction Tuning in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Instruction Tuning."
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
        children: "Tell me about a time you debugged a Instruction Tuning problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Instruction Tuning is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Instruction Tuning."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Instruction Tuning logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Instruction Tuning without notes"
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
        }), ": a small team uses Instruction Tuning daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Instruction Tuning patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Instruction Tuning principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Instruction Tuning shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Instruction Tuning to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/07-dpo-and-preference-tuning",
        children: "DPO & Preference Tuning"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Instruction Tuning, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Instruction Tuning depends on input size and distribution — always benchmark for your own data."
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