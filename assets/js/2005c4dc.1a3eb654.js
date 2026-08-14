"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[55186],{

/***/ 53758
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_05_memory_and_state_md_200_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-13-ai-agents-langgraph-05-memory-and-state-md-200.json
const site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_05_memory_and_state_md_200_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-agents-langgraph/05-memory-and-state","title":"Memory and State","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state.md","sourceDirName":"courses/ai-engineering-placement/13-ai-agents-langgraph","slug":"/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":167,"frontMatter":{"id":"05-memory-and-state","slug":"/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state","title":"Memory and State","sidebar_label":"Memory and State","sidebar_position":167},"sidebar":"placementSidebar","previous":{"title":"Tool Use and Function Calling","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/04-tool-use-and-function-calling"},"next":{"title":"Multi-Agent Systems","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/06-multi-agent-systems"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state.md


const frontMatter = {
	id: '05-memory-and-state',
	slug: '/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state',
	title: 'Memory and State',
	sidebar_label: 'Memory and State',
	sidebar_position: 167
};
const contentTitle = 'Memory and State';

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
  "value": "5.1 Memory Types",
  "id": "51-memory-types",
  "level": 2
}, {
  "value": "Memory Classification",
  "id": "memory-classification",
  "level": 3
}, {
  "value": "5.2 Conversation Memory",
  "id": "52-conversation-memory",
  "level": 2
}, {
  "value": "5.2.1 Sliding Window Memory",
  "id": "521-sliding-window-memory",
  "level": 3
}, {
  "value": "5.2.2 Summarizing Memory",
  "id": "522-summarizing-memory",
  "level": 3
}, {
  "value": "5.2.3 Hybrid Memory",
  "id": "523-hybrid-memory",
  "level": 3
}, {
  "value": "5.3 External Memory",
  "id": "53-external-memory",
  "level": 2
}, {
  "value": "5.3.1 Vector Memory Store",
  "id": "531-vector-memory-store",
  "level": 3
}, {
  "value": "5.3.2 Key-Value Fact Memory",
  "id": "532-key-value-fact-memory",
  "level": 3
}, {
  "value": "5.3.3 Episodic Memory",
  "id": "533-episodic-memory",
  "level": 3
}, {
  "value": "5.4 State Management",
  "id": "54-state-management",
  "level": 2
}, {
  "value": "5.4.1 State Machine Pattern",
  "id": "541-state-machine-pattern",
  "level": 3
}, {
  "value": "5.4.2 Shared State Between Agents",
  "id": "542-shared-state-between-agents",
  "level": 3
}, {
  "value": "5.5 Save and Restore",
  "id": "55-save-and-restore",
  "level": 2
}, {
  "value": "5.5.1 State Serialization",
  "id": "551-state-serialization",
  "level": 3
}, {
  "value": "5.5.2 Checkpoint Manager",
  "id": "552-checkpoint-manager",
  "level": 3
}, {
  "value": "5.5.3 Session Persistence",
  "id": "553-session-persistence",
  "level": 3
}, {
  "value": "5.6 Memory Optimization",
  "id": "56-memory-optimization",
  "level": 2
}, {
  "value": "5.6.1 Importance-Based Retention",
  "id": "561-importance-based-retention",
  "level": 3
}, {
  "value": "5.6.2 Forgetting Curve",
  "id": "562-forgetting-curve",
  "level": 3
}, {
  "value": "5.6.3 Memory Compression",
  "id": "563-memory-compression",
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
        id: "memory-and-state",
        children: "Memory and State"
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
            children: "Understand types of agent memory — short-term, long-term, episodic, semantic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement conversation history management with token budgeting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build external memory stores using vector databases and key-value stores"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design state management patterns for complex agent workflows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement persistent agent state with save/restore mechanisms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI agents autonomously use tools to complete tasks. LangGraph builds stateful, multi-step agent workflows. This module covers agent architectures, tool use, memory, and production deployment."
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
      children: "Understanding memory and state is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how memory and state works in practice."
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
            children: "5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-term, long-term, episodic, semantic, procedural"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conversation Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "History management, token budgeting, summarization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector stores for semantic memory, KV stores for facts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared state patterns, state machines, persistence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save and Restore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkpointing, serialization, reloading agent state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compression, forgetting strategies, relevance scoring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Memory Types\n        ST[Short-Term\\nCurrent Conversation]\n        LT[Long-Term\\nAcross Sessions]\n        EP[Episodic\\nPast Experiences]\n        SM[Semantic\\nFacts & Knowledge]\n    end\n    ST --> |Summarize| LT\n    LT --> |Store| DB[(Vector/Persistent Store)]\n    EP --> DB\n    SM --> DB\n    DB --> |Retrieve| AG[Agent Context]\n    AG --> ST\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-memory-types",
      children: "5.1 Memory Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agents need different types of memory to be effective across short and long timescales."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory-classification",
      children: "Memory Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\nfrom typing import List, Dict, Any, Optional, Callable\nfrom enum import Enum\nimport json\nimport time\n\nclass MemoryType(Enum):\n    SHORT_TERM = \"short_term\"  # Current conversation, limited window\n    LONG_TERM = \"long_term\"  # Across sessions, persistent\n    EPISODIC = \"episodic\"  # Past experiences and outcomes\n    SEMANTIC = \"semantic\"  # Facts, knowledge, procedures\n    WORKING = \"working\"  # Current task state\n\n@dataclass\nclass MemoryEntry:\n    content: str\n    memory_type: MemoryType\n    timestamp: float = field(default_factory=time.time)\n    metadata: Dict = field(default_factory=dict)\n    importance: float = 0.5  # 0.0 to 1.0\n    access_count: int = 0\n\nclass MemoryStore:\n    def __init__(self):\n        self.entries: List[MemoryEntry] = []\n\n    def add(self, content: str, memory_type: MemoryType, metadata: Dict = None, importance: float = 0.5):\n        self.entries.append(MemoryEntry(\n            content=content,\n            memory_type=memory_type,\n            metadata=metadata or {},\n            importance=importance,\n        ))\n\n    def get_by_type(self, memory_type: MemoryType) -> List[MemoryEntry]:\n        return [e for e in self.entries if e.memory_type == memory_type]\n\n    def get_recent(self, n: int = 5) -> List[MemoryEntry]:\n        sorted_entries = sorted(self.entries, key=lambda e: e.timestamp, reverse=True)\n        return sorted_entries[:n]\n\n    def search(self, query: str) -> List[MemoryEntry]:\n        query_lower = query.lower()\n        results = []\n        for entry in self.entries:\n            if query_lower in entry.content.lower():\n                results.append(entry)\n        return results\n\n    def forget(self, before_timestamp: float):\n        self.entries = [e for e in self.entries if e.timestamp >= before_timestamp]\n\n    def consolidate(self):\n        \"\"\"Merge similar entries to save space.\"\"\"\n        pass\n\nmemory = MemoryStore()\nmemory.add(\"User prefers Python programming\", MemoryType.SEMANTIC, importance=0.8)\nmemory.add(\"Searched for AI agents, found useful results\", MemoryType.EPISODIC, importance=0.6)\nprint(f\"Semantic memories: {len(memory.get_by_type(MemoryType.SEMANTIC))}\")\nprint(f\"Search 'Python': {len(memory.search('Python'))}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-conversation-memory",
      children: "5.2 Conversation Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "521-sliding-window-memory",
      children: "5.2.1 Sliding Window Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SlidingWindowMemory:\n    def __init__(self, max_messages: int = 10, max_tokens: int = 4000):\n        self.messages: List[Dict] = []\n        self.max_messages = max_messages\n        self.max_tokens = max_tokens\n\n    def add_message(self, role: str, content: str):\n        self.messages.append({\"role\": role, \"content\": content})\n        self._trim()\n\n    def _trim(self):\n        while len(self.messages) > self.max_messages:\n            self.messages.pop(0)\n\n        total_tokens = sum(len(m[\"content\"]) // 4 for m in self.messages)\n        while total_tokens > self.max_tokens and len(self.messages) > 2:\n            removed = self.messages.pop(0)\n            total_tokens -= len(removed[\"content\"]) // 4\n\n    def get_context(self) -> List[Dict]:\n        return list(self.messages)\n\n    def get_summary_prompt(self) -> str:\n        history = \"\\n\".join([f\"{m['role']}: {m['content'][:200]}\" for m in self.messages])\n        return f\"Previous conversation:\\n{history}\"\n\nwindow = SlidingWindowMemory(max_messages=5, max_tokens=1000)\nfor i in range(10):\n    window.add_message(\"user\", f\"Message {i}\" * 10)\n    window.add_message(\"assistant\", f\"Response {i}\" * 10)\nprint(f\"Window size: {len(window.messages)} messages (trimmed from 10)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "522-summarizing-memory",
      children: "5.2.2 Summarizing Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SummarizingMemory:\n    def __init__(self, llm_fn: Callable, summary_threshold: int = 5):\n        self.llm = llm_fn\n        self.summary_threshold = summary_threshold\n        self.messages: List[Dict] = []\n        self.summary: Optional[str] = None\n\n    def add_message(self, role: str, content: str):\n        self.messages.append({\"role\": role, \"content\": content})\n\n        if len(self.messages) >= self.summary_threshold:\n            self._generate_summary()\n\n    def _generate_summary(self):\n        full_text = \"\\n\".join([f\"{m['role']}: {m['content']}\" for m in self.messages])\n        summary_prompt = f\"\"\"Summarize this conversation briefly:\n\n{full_text}\n\nSummary:\"\"\"\n        self.summary = self.llm(summary_prompt)\n        self.messages = self.messages[-2:]  # Keep last 2 messages for recent context\n\n    def get_context(self) -> str:\n        parts = []\n        if self.summary:\n            parts.append(f\"Previous conversation summary: {self.summary}\")\n        if self.messages:\n            parts.append(\"Recent messages:\")\n            parts.extend([f\"{m['role']}: {m['content'][:200]}\" for m in self.messages])\n        return \"\\n\".join(parts)\n\nsum_mem = SummarizingMemory(lambda p: \"Conversation summary: User asked about AI agents.\")\nfor i in range(6):\n    sum_mem.add_message(\"user\", f\"Question {i}\")\n    sum_mem.add_message(\"assistant\", f\"Answer {i}\")\nprint(f\"Summary generated: {sum_mem.summary is not None}\")\nprint(f\"Remaining messages: {len(sum_mem.messages)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "523-hybrid-memory",
      children: "5.2.3 Hybrid Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HybridMemory:\n    def __init__(self, max_recent: int = 5, llm_fn: Callable = None):\n        self.recent: List[Dict] = []\n        self.summary: Optional[str] = None\n        self.max_recent = max_recent\n        self.llm = llm_fn\n        self.total_messages = 0\n\n    def add(self, role: str, content: str):\n        self.recent.append({\"role\": role, \"content\": content})\n        self.total_messages += 1\n\n        if len(self.recent) >= self.max_recent * 2:\n            self._summarize_old()\n\n    def _summarize_old(self):\n        old_messages = self.recent[:-self.max_recent]\n        if not old_messages:\n            return\n\n        text = \"\\n\".join([f\"{m['role']}: {m['content'][:200]}\" for m in old_messages])\n        new_summary = self.llm(f\"Summarize: {text}\") if self.llm else f\"Summary of {len(old_messages)} messages.\"\n\n        if self.summary:\n            self.summary = self.llm(f\"Combine summaries:\\n1. {self.summary}\\n2. {new_summary}\") if self.llm else f\"{self.summary}\\n{new_summary}\"\n        else:\n            self.summary = new_summary\n\n        self.recent = self.recent[-self.max_recent:]\n\n    def get_full_context(self) -> str:\n        parts = []\n        if self.summary:\n            parts.append(f\"Summary: {self.summary}\")\n        parts.extend([f\"{m['role']}: {m['content'][:200]}\" for m in self.recent])\n        return \"\\n\".join(parts)\n\n    def stats(self) -> Dict:\n        return {\n            \"total_messages\": self.total_messages,\n            \"recent_messages\": len(self.recent),\n            \"has_summary\": self.summary is not None,\n        }\n\nhybrid = HybridMemory(max_recent=3, llm_fn=lambda p: \"Merged summary of conversation.\")\nfor i in range(10):\n    hybrid.add(\"user\", f\"Query {i}\")\n    hybrid.add(\"assistant\", f\"Response {i}\")\nprint(f\"Hybrid memory stats: {hybrid.stats()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-external-memory",
      children: "5.3 External Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "531-vector-memory-store",
      children: "5.3.1 Vector Memory Store"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class VectorMemoryStore:\n    def __init__(self, dimension: int = 384):\n        self.dimension = dimension\n        self.memories: List[Dict] = []\n        self.embeddings: List[np.ndarray] = []\n\n    def add_memory(self, content: str, metadata: Dict = None, importance: float = 0.5):\n        embedding = mock_embedder(content)\n        self.memories.append({\n            \"content\": content,\n            \"metadata\": metadata or {},\n            \"importance\": importance,\n            \"timestamp\": time.time(),\n        })\n        self.embeddings.append(embedding)\n\n    def search(self, query: str, top_k: int = 5) -> List[Dict]:\n        query_emb = mock_embedder(query)\n        similarities = []\n        for i, mem_emb in enumerate(self.embeddings):\n            sim = float(np.dot(query_emb, mem_emb))\n            similarities.append((i, sim))\n\n        similarities.sort(key=lambda x: x[1], reverse=True)\n        results = []\n        for idx, sim in similarities[:top_k]:\n            mem = self.memories[idx]\n            results.append({**mem, \"relevance\": round(sim, 4)})\n        return results\n\n    def get_recent(self, n: int = 5) -> List[Dict]:\n        sorted_memories = sorted(self.memories, key=lambda m: m[\"timestamp\"], reverse=True)\n        return sorted_memories[:n]\n\nvmem = VectorMemoryStore()\nvmem.add_memory(\"User likes Python programming\", {\"source\": \"conversation\"}, 0.8)\nvmem.add_memory(\"Completed project on AI agents\", {\"source\": \"project\"}, 0.9)\nresults = vmem.search(\"programming preferences\")\nprint(f\"Vector search results: {len(results)}\")\nfor r in results:\n    print(f\"  {r['content']} (relevance: {r['relevance']})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "532-key-value-fact-memory",
      children: "5.3.2 Key-Value Fact Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FactMemory:\n    def __init__(self):\n        self.facts: Dict[str, List[Dict]] = {}\n        self.confidence: Dict[str, float] = {}\n\n    def remember(self, key: str, value: str, source: str = \"user\", confidence: float = 0.8):\n        if key not in self.facts:\n            self.facts[key] = []\n        self.facts[key].append({\n            \"value\": value,\n            \"source\": source,\n            \"confidence\": confidence,\n            \"timestamp\": time.time(),\n        })\n        self.confidence[key] = max(\n            confidence,\n            self.confidence.get(key, 0)\n        )\n\n    def recall(self, key: str, min_confidence: float = 0.5) -> Optional[str]:\n        entries = self.facts.get(key, [])\n        if not entries:\n            return None\n        # Return most confident recent entry\n        best = max(entries, key=lambda e: e[\"confidence\"] * (1 if e[\"confidence\"] >= min_confidence else 0))\n        return best[\"value\"] if best[\"confidence\"] >= min_confidence else None\n\n    def update_confidence(self, key: str, new_confidence: float):\n        if key in self.confidence:\n            self.confidence[key] = (self.confidence[key] + new_confidence) / 2\n\n    def forget(self, key: str):\n        self.facts.pop(key, None)\n        self.confidence.pop(key, None)\n\n    def get_all_facts(self) -> List[Dict]:\n        facts = []\n        for key, entries in self.facts.items():\n            for entry in entries:\n                facts.append({\"key\": key, **entry})\n        return facts\n\nfacts = FactMemory()\nfacts.remember(\"user_name\", \"Alice\", \"conversation\")\nfacts.remember(\"preferred_language\", \"Python\", \"conversation\")\nprint(f\"Recalled name: {facts.recall('user_name')}\")\nprint(f\"Recalled unknown: {facts.recall('favorite_color')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "533-episodic-memory",
      children: "5.3.3 Episodic Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class EpisodicMemory:\n    def __init__(self):\n        self.episodes: List[Dict] = []\n\n    def record(self, action: str, outcome: str, context: Dict, success: bool):\n        self.episodes.append({\n            \"action\": action,\n            \"outcome\": outcome,\n            \"context\": context,\n            \"success\": success,\n            \"timestamp\": time.time(),\n        })\n\n    def get_similar_experiences(self, action: str, top_k: int = 3) -> List[Dict]:\n        action_lower = action.lower()\n        relevant = [e for e in self.episodes if action_lower in e[\"action\"].lower()]\n        relevant.sort(key=lambda e: e[\"timestamp\"], reverse=True)\n        return relevant[:top_k]\n\n    def get_success_rate(self, action: str) -> float:\n        episodes = [e for e in self.episodes if action.lower() in e[\"action\"].lower()]\n        if not episodes:\n            return 0.0\n        successes = sum(1 for e in episodes if e[\"success\"])\n        return successes / len(episodes)\n\n    def get_best_approach(self, goal: str) -> Optional[str]:\n        \"\"\"Find the most successful approach for a given goal.\"\"\"\n        relevant = [e for e in self.episodes if e[\"success\"] and goal.lower() in str(e[\"context\"]).lower()]\n        if relevant:\n            return max(relevant, key=lambda e: e[\"timestamp\"])[\"action\"]\n        return None\n\nepisodes = EpisodicMemory()\nepisodes.record(\"web_search\", \"Found relevant papers\", {\"query\": \"AI agents\"}, True)\nepisodes.record(\"database_query\", \"No results\", {\"query\": \"AI agents\"}, False)\nprint(f\"Success rate for 'search': {episodes.get_success_rate('search'):.0%}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-state-management",
      children: "5.4 State Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "541-state-machine-pattern",
      children: "5.4.1 State Machine Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AgentState:\n    def __init__(self):\n        self.memory = MemoryStore()\n        self.conversation = SummarizingMemory(lambda p: \"summary\")\n        self.facts = FactMemory()\n        self.episodes = EpisodicMemory()\n        self.current_task: Optional[str] = None\n        self.step_count: int = 0\n        self.max_steps: int = 20\n\n    def reset(self):\n        self.current_task = None\n        self.step_count = 0\n\n    def start_task(self, task: str):\n        self.current_task = task\n        self.step_count = 0\n\n    def increment_step(self):\n        self.step_count += 1\n        return self.step_count <= self.max_steps\n\n    def snapshot(self) -> Dict:\n        return {\n            \"current_task\": self.current_task,\n            \"step_count\": self.step_count,\n            \"fact_count\": len(self.facts.get_all_facts()),\n            \"episode_count\": len(self.episodes.episodes),\n        }\n\nstate = AgentState()\nstate.start_task(\"Research AI agents\")\nstate.increment_step()\nstate.facts.remember(\"research_topic\", \"AI agents\", \"system\")\nprint(f\"State snapshot: {state.snapshot()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "542-shared-state-between-agents",
      children: "5.4.2 Shared State Between Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SharedState:\n    def __init__(self):\n        self.data: Dict[str, Any] = {}\n        self.locks: Dict[str, bool] = {}\n\n    def get(self, key: str, default=None):\n        return self.data.get(key, default)\n\n    def set(self, key: str, value: Any):\n        self.data[key] = value\n\n    def update(self, key: str, update_fn: Callable):\n        if key in self.data:\n            self.data[key] = update_fn(self.data[key])\n\n    def acquire_lock(self, key: str) -> bool:\n        if self.locks.get(key, False):\n            return False\n        self.locks[key] = True\n        return True\n\n    def release_lock(self, key: str):\n        self.locks[key] = False\n\n    def clear(self):\n        self.data.clear()\n        self.locks.clear()\n\nshared = SharedState()\nshared.set(\"research_results\", [])\nshared.update(\"research_results\", lambda x: x + [\"Found paper on AI agents\"])\nprint(f\"Shared data: {shared.get('research_results')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-save-and-restore",
      children: "5.5 Save and Restore"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "551-state-serialization",
      children: "5.5.1 State Serialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pickle\nimport json\nfrom datetime import datetime\n\nclass StateSerializer:\n    @staticmethod\n    def to_dict(state: AgentState) -> Dict:\n        return {\n            \"current_task\": state.current_task,\n            \"step_count\": state.step_count,\n            \"max_steps\": state.max_steps,\n            \"facts\": state.facts.get_all_facts(),\n            \"episodes\": state.episodes.episodes,\n            \"saved_at\": datetime.now().isoformat(),\n        }\n\n    @staticmethod\n    def from_dict(data: Dict) -> AgentState:\n        state = AgentState()\n        state.current_task = data.get(\"current_task\")\n        state.step_count = data.get(\"step_count\", 0)\n        state.max_steps = data.get(\"max_steps\", 20)\n\n        for fact in data.get(\"facts\", []):\n            state.facts.remember(fact[\"key\"], fact[\"value\"], fact.get(\"source\", \"restore\"), fact.get(\"confidence\", 0.5))\n\n        for episode in data.get(\"episodes\", []):\n            state.episodes.record(episode[\"action\"], episode[\"outcome\"], episode.get(\"context\", {}), episode.get(\"success\", False))\n\n        return state\n\n    @staticmethod\n    def save_to_file(state: AgentState, filepath: str):\n        data = StateSerializer.to_dict(state)\n        with open(filepath, \"w\") as f:\n            json.dump(data, f, indent=2)\n\n    @staticmethod\n    def load_from_file(filepath: str) -> AgentState:\n        with open(filepath, \"r\") as f:\n            data = json.load(f)\n        return StateSerializer.from_dict(data)\n\noriginal = AgentState()\noriginal.start_task(\"Memory research\")\noriginal.facts.remember(\"topic\", \"agent memory\", \"system\")\noriginal.episodes.record(\"search\", \"found papers\", {\"query\": \"memory\"}, True)\n\nserialized = StateSerializer.to_dict(original)\nrestored = StateSerializer.from_dict(serialized)\nprint(f\"Original task: {original.current_task}\")\nprint(f\"Restored task: {restored.current_task}\")\nprint(f\"Facts match: {original.facts.recall('topic') == restored.facts.recall('topic')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "552-checkpoint-manager",
      children: "5.5.2 Checkpoint Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CheckpointManager:\n    def __init__(self, storage_dir: str = \"./checkpoints\"):\n        self.storage_dir = storage_dir\n        self.checkpoints: Dict[str, str] = {}\n\n    def save(self, agent_id: str, state: AgentState, tag: str = \"latest\"):\n        from pathlib import Path\n        Path(self.storage_dir).mkdir(parents=True, exist_ok=True)\n        timestamp = datetime.now().strftime(\"%Y%m%d_%H%M%S\")\n        filename = f\"{self.storage_dir}/{agent_id}_{tag}_{timestamp}.json\"\n        StateSerializer.save_to_file(state, filename)\n        self.checkpoints[f\"{agent_id}:{tag}\"] = filename\n        return filename\n\n    def load(self, agent_id: str, tag: str = \"latest\") -> Optional[AgentState]:\n        key = f\"{agent_id}:{tag}\"\n        filename = self.checkpoints.get(key)\n        if filename:\n            return StateSerializer.load_from_file(filename)\n        return None\n\n    def list_checkpoints(self, agent_id: str) -> List[str]:\n        return [k for k in self.checkpoints.keys() if k.startswith(agent_id)]\n\n    def rollback(self, agent_id: str, steps_back: int = 1) -> Optional[AgentState]:\n        checkpoints = self.list_checkpoints(agent_id)\n        if len(checkpoints) > steps_back:\n            target = checkpoints[-steps_back - 1]\n            tag = target.split(\":\")[1]\n            return self.load(agent_id, tag)\n        return None\n\ncm = CheckpointManager(\"./checkpoints\")\ncm.save(\"agent-1\", original, \"v1\")\nprint(f\"Saved checkpoint: {cm.list_checkpoints('agent-1')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "553-session-persistence",
      children: "5.5.3 Session Persistence"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SessionManager:\n    def __init__(self):\n        self.sessions: Dict[str, AgentState] = {}\n\n    def create_session(self, session_id: str) -> AgentState:\n        state = AgentState()\n        self.sessions[session_id] = state\n        return state\n\n    def get_session(self, session_id: str) -> Optional[AgentState]:\n        return self.sessions.get(session_id)\n\n    def delete_session(self, session_id: str):\n        self.sessions.pop(session_id, None)\n\n    def cleanup_old_sessions(self, max_age_seconds: int = 3600):\n        now = time.time()\n        expired = []\n        for sid, state in self.sessions.items():\n            if hasattr(state, \"_created_at\"):\n                if now - state._created_at > max_age_seconds:\n                    expired.append(sid)\n        for sid in expired:\n            self.delete_session(sid)\n\n    def stats(self) -> Dict:\n        return {\n            \"active_sessions\": len(self.sessions),\n            \"total_sessions\": len(self.sessions),\n        }\n\nsm = SessionManager()\nstate_a = sm.create_session(\"session-1\")\nstate_b = sm.create_session(\"session-2\")\nstate_a.facts.remember(\"session\", \"one\", \"system\")\nstate_b.facts.remember(\"session\", \"two\", \"system\")\nprint(f\"Session 1 fact: {sm.get_session('session-1').facts.recall('session')}\")\nprint(f\"Active sessions: {sm.stats()['active_sessions']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-memory-optimization",
      children: "5.6 Memory Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "561-importance-based-retention",
      children: "5.6.1 Importance-Based Retention"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ImportanceBasedMemory:\n    def __init__(self, max_entries: int = 100, importance_threshold: float = 0.3):\n        self.entries: List[MemoryEntry] = []\n        self.max_entries = max_entries\n        self.threshold = importance_threshold\n\n    def add(self, content: str, importance: float, metadata: Dict = None):\n        if importance < self.threshold:\n            return\n\n        self.entries.append(MemoryEntry(\n            content=content,\n            memory_type=MemoryType.SEMANTIC,\n            importance=importance,\n            metadata=metadata or {},\n        ))\n\n        self._prune()\n\n    def _prune(self):\n        if len(self.entries) > self.max_entries:\n            self.entries.sort(key=lambda e: (e.importance, e.timestamp), reverse=True)\n            self.entries = self.entries[:self.max_entries]\n\n    def get_important(self, min_importance: float = 0.7) -> List[MemoryEntry]:\n        return [e for e in self.entries if e.importance >= min_importance]\n\nimportance_mem = ImportanceBasedMemory(max_entries=10, importance_threshold=0.3)\nimportance_mem.add(\"Critical user preference\", 0.9)\nimportance_mem.add(\"Minor observation\", 0.2)\nprint(f\"Important entries: {len(importance_mem.get_important(0.7))}\")\nprint(f\"Total entries: {len(importance_mem.entries)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "562-forgetting-curve",
      children: "5.6.2 Forgetting Curve"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ForgettingCurve:\n    def __init__(self, decay_rate: float = 0.1):\n        self.decay_rate = decay_rate\n\n    def recall_probability(self, entry: MemoryEntry, current_time: float = None) -> float:\n        if current_time is None:\n            current_time = time.time()\n        age = current_time - entry.timestamp\n        hours = age / 3600\n        probability = entry.importance * (2.718 ** (-self.decay_rate * hours))\n        return max(0.0, min(1.0, probability))\n\n    def should_forget(self, entry: MemoryEntry, threshold: float = 0.1) -> bool:\n        return self.recall_probability(entry) < threshold\n\ncurve = ForgettingCurve(decay_rate=0.05)\nold_entry = MemoryEntry(content=\"old info\", memory_type=MemoryType.SEMANTIC, timestamp=time.time() - 86400, importance=0.5)\nnew_entry = MemoryEntry(content=\"new info\", memory_type=MemoryType.SEMANTIC, timestamp=time.time(), importance=0.8)\nprint(f\"Old recall prob: {curve.recall_probability(old_entry):.3f}\")\nprint(f\"New recall prob: {curve.recall_probability(new_entry):.3f}\")\nprint(f\"Forget old: {curve.should_forget(old_entry, 0.2)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "563-memory-compression",
      children: "5.6.3 Memory Compression"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MemoryCompressor:\n    def __init__(self, llm_fn: Callable):\n        self.llm = llm_fn\n\n    def compress(self, entries: List[MemoryEntry]) -> str:\n        text = \"\\n\".join([e.content for e in entries])\n        compression_prompt = f\"\"\"Compress these memories into a concise summary.\nKeep all important facts and preferences.\n\nMemories:\n{text}\n\nCompressed:\"\"\"\n        return self.llm(compression_prompt)\n\n    def batch_summarize(self, entries: List[MemoryEntry], batch_size: int = 5) -> List[str]:\n        summaries = []\n        for i in range(0, len(entries), batch_size):\n            batch = entries[i:i + batch_size]\n            summary = self.compress(batch)\n            summaries.append(summary)\n        return summaries\n\ncompressor = MemoryCompressor(lambda p: \"Compressed summary of agent memories.\")\nentries = [\n    MemoryEntry(\"User prefers Python for data science\", MemoryType.SEMANTIC),\n    MemoryEntry(\"User is working on an AI agent project\", MemoryType.SEMANTIC),\n]\nsummary = compressor.compress(entries)\nprint(f\"Compressed: {summary}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Memory and state management are critical for building capable AI agents. Short-term memory maintains the current conversation context with sliding windows and.\nsummarization. Long-term memory persists facts, preferences, and knowledge across sessions using vector stores and key-value stores. Episodic memory records past actions and.\noutcomes for experience-based learning. State management patterns include state machines with shared state for multi-agent systems. Save/restore mechanisms with checkpointing enable persistence,.\nrollback, and session management. Memory optimization techniques include importance-based retention, forgetting curves, and compression."
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
            children: "Separate memory types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use different stores for short-term, long-term, and episodic memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement forgetting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not all information is equally important — prune aggressively"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use vector memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic search over past interactions enables relevant recall"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checkpoint regularly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save state at each step for debugging and recovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compress conversation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summarize old turns to fit within context window limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Share state carefully"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use locks for concurrent agent access to shared state"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag05-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What types of memory do AI agents use?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AI agents use three types of memory. Short-term memory holds the current conversation context (recent messages, current task state) and is limited by the LLM's context window. Long-term memory persists information across sessions using external storage (databases,.\nvector stores, files). Episodic memory stores specific past events and experiences that can be retrieved and replayed. Additionally, procedural memory stores how to perform tasks (tool usage patterns,.\nworkflows). Each memory type serves a different purpose: short-term for immediate coherence, long-term for user preferences and facts, episodic for learning from past mistakes,.\nand procedural for efficient task execution. Production agents typically combine all four types, with size limits and eviction policies for each."
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
      "data-qid": "ag05-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does vector search work for long-term memory?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Vector search for memory works by converting text into embeddings (fixed-size numerical vectors using models like text-embedding-ada-002) and storing them in a vector.\ndatabase. When a new query arrives, it's embedded with the same model, and the database finds the most similar stored vectors using cosine similarity or.\ndot product. The retrieved memories are then added to the LLM prompt as context. Key parameters: top-K (how many memories to retrieve),.\nsimilarity threshold (minimum score to include), and recency boost (multiply score by a recency factor). Vector search is preferred over keyword search because it captures semantic meaning — \"how do I book a flight?\" matches \"travel reservation process\" even though they share no keywords. Popular vector.\ndatabases include Pinecone, Qdrant, Milvus, and pgvector."
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
      "data-qid": "ag05-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is a memory manager in an agent system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A memory manager is a centralized service that orchestrates all memory operations across an agent system. It handles: (1) storing new memories (converting text to embeddings,.\ninserting into vector store with metadata like timestamp, session ID, importance score); (2) retrieving relevant memories (embedding queries, searching vector store,.\nranking and filtering results); (3) memory consolidation (merging duplicate memories, pruning outdated ones, updating importance scores based on access frequency); (4) memory decay (reducing importance of unused memories over time until they're archived);.\nand (5) session management (associating memories with sessions and users). The memory manager provides a clean API for the agent to access memory without knowing the underlying storage details. It also enforces memory limits and.\nimplements eviction policies (remove least recently used memories when the store exceeds capacity)."
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
      "data-qid": "ag05-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you manage context window limits?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Managing context window limits requires strategies to fit the most relevant information within the LLM's token budget. Common approaches: (1) message pruning — remove oldest or.\nleast relevant messages while keeping recent ones; (2) message summarization — compress multiple messages into a summary, trading detail for space;.\n(3) sliding window — keep only the last N messages, archiving older ones to long-term memory; (4) importance scoring — rank messages by relevance and.\ndrop low-scoring ones first; (5) token counting — track usage and trigger pruning when approaching the limit. Each strategy has tradeoffs: pruning is simple but.\nmay lose context, summarization preserves semantic content but loses verbatim details, sliding window works well for recent context but loses early conversation. Most production agents use a combination,.\nwith summarization for older context and a sliding window for recent messages."
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
      "data-qid": "ag05-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What strategies exist for memory consolidation?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Memory consolidation strategies reorganize and optimize stored memories for better retrieval and efficiency. Key strategies: (1) deduplication — detect and merge memories with near-identical content using similarity thresholds;.\n(2) abstraction — generalize specific memories into broader patterns (e.g., multiple \"user liked sci-fi movies\" entries become \"user's top genre: sci-fi\");.\n(3) forgetting — reduce importance scores for memories that haven't been accessed recently; (4) hierarchical storage — keep high-level summaries in fast storage and.\ndetailed memories in slower storage; (5) temporal clustering — group memories by time periods for more efficient retrieval of recent context. Consolidation typically runs as a background process triggered by memory count thresholds or.\ntime intervals. The goal is to maintain a manageable, high-signal memory store that provides the most useful context without exceeding storage or.\nretrieval latency limits."
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
      "data-qid": "ag05-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How does state persistence work in LangGraph?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["State persistence in LangGraph saves the graph's state at each execution step using checkpointers. A checkpointer serializes the current state (all message history,.\nnode results, and execution metadata) to a storage backend after each node executes. The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "StateGraph"
          }), " is compiled with a checkpointer instance,.\nand each invocation uses a thread ID to identify the conversation session. On subsequent invocations with the same thread ID, the graph loads the last checkpoint and.\ncontinues from that point rather than starting fresh. Persistence backends include: in-memory (for testing), SQLite (single-process, file-based), Postgres (production, multi-process), and.\nRedis (high-performance, caching). State persistence enables conversation continuity — the agent remembers past interactions even across server restarts — and is essential for.\nany multi-turn agent application."]
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
      "data-qid": "ag05-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is semantic memory and how does it differ from episodic memory?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Semantic memory stores factual knowledge independent of specific experiences — like \"Paris is the capital of France\" or \"user prefers email over Slack for.\nnotifications\". Episodic memory stores specific events with temporal context — like \"last time user asked about pricing, they chose the enterprise plan on March 15th\". The key difference is that semantic memory stores generalizable facts extracted from experiences,.\nwhile episodic memory stores the raw experiences themselves. For agents, semantic memory grows more useful over time as patterns emerge from many interactions. Episodic memory is better for.\ndebugging (\"what exactly happened in that last session?\") and for learning from specific past mistakes. Both are typically stored in vector.\ndatabases but with different indexing strategies — semantic memories are clustered by topic, episodic memories by time."
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
      "data-qid": "ag05-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you implement message pruning?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Message pruning removes selected messages from the conversation history to stay within context limits. Implementation tracks message metadata (timestamp, token count,.\nrole, importance score) and applies a pruning policy when total tokens exceed a threshold. The simplest policy removes oldest messages first,.\nbut better policies consider: message role (user messages may be more important than system messages), importance score (tagged by the agent during execution),.\nand whether a message has been referenced in later responses. A summarization-based approach replaces a block of pruned messages with a generated summary. Implementation uses a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MessageManager"
          }), " class with a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "prune(max_tokens)"
          }), " method that calculates current usage,.\nidentifies candidates for removal, and reconstructs the message array. Production systems log all pruned messages for debugging and audit trails."]
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
      "data-qid": "ag05-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is a sliding window buffer and how does it work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A sliding window buffer keeps only the N most recent messages in the LLM context, discarding older ones. It works by maintaining a list of messages with a fixed maximum size — when a new message arrives and.\nthe buffer is full, the oldest message is removed before adding the new one. The window size is typically set below the LLM's context limit (e.g.,.\n7000 tokens for an 8000-token model) to leave room for system prompts and tool results. Variants include: (1) token-based window (count tokens,.\nnot messages); (2) time-based window (keep messages from the last N minutes); (3) importance-aware window (evict lowest-importance message). The sliding window is simple and.\nefficient, but can drop important early context. Production agents often combine it with summarization — the removed older messages are summarized and.\nkept as a single condensed message at the start of the window."
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
      "data-qid": "ag05-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you implement a summary-based memory system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A summary-based memory system maintains a running summary of the conversation that's updated after each exchange. Implementation: (1) initialize with a placeholder summary;.\n(2) after each user/assistant turn, pass the current summary and new messages to an LLM to generate an updated summary; (3) always include the summary in the prompt alongside recent messages (within the sliding window). The summary is stored in.\nlong-term memory keyed by session ID. This preserves the gist of early conversation even when those messages are pruned from the context window. The system also stores important facts extracted from the conversation (semantic memory) and.\nrecent detailed history (episodic memory). When constructing the prompt, the agent includes: the running summary, recent messages from the sliding window,.\nrelevant semantic memories from vector search, and any relevant episodic memories. This layered approach maximizes relevant context within the token budget."
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
      "data-qid": "agent-s5-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " Which memory type stores facts and knowledge about the user?"]
      }), "\nA. Short-term memory\nB. Episodic memory\nC. Semantic memory\nD. Working memory\nAnswer: C\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s5-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What is the primary challenge with short-term conversation memory?"]
      }), "\nA. Storage cost\nB. Context window token limits\nC. Encryption requirements\nD. Network latency\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s5-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " How does a summarizing memory reduce token usage?"]
      }), "\nA. By deleting all old messages\nB. By compressing old conversation turns into a summary\nC. By using shorter words\nD. By storing messages in binary format\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s5-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What is the purpose of importance-based retention?"]
      }), "\nA. To store all memories equally\nB. To keep high-value information while discarding low-value information\nC. To encrypt important memories\nD. To share memories between agents\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s5-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " What does checkpointing enable in agent systems?"]
      }), "\nA. Faster execution\nB. State persistence, recovery, and rollback\nC. Better tool selection\nD. Improved prompt engineering\nAnswer: B\n"]
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
          children: "Not practicing enough problems to build pattern recognition1. Implement a hybrid memory system with sliding window (last 5 messages) and summarization (LLM-generated summary of older messages). Test with 15 messages and print the context."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a vector memory store that stores agent experiences as embeddings. Implement search with 10 test memories and demonstrate that semantically similar queries retrieve relevant results."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a persistent session manager that saves agent state to JSON files and restores it on subsequent interactions. Run a 3-turn conversation, save, restart, and verify state continuity."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement an importance-based forgetting system where memories with importance < 0.3 are discarded and low-access-count memories are pruned. Test with 20 entries of varying importance."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a shared state system for multi-agent collaboration with read/write locks. Simulate 3 agents reading and updating shared state concurrently without da"
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
            children: "Explain the core idea of Memory and State in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Memory and State."
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
            children: "Describe a production bug caused by misunderstanding Memory and State. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Memory and State from 10 users to 10 million?"
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
            children: "Compare Memory and State with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Memory and State."
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
            children: "How does Memory and State behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Memory and State run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Memory and State that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Memory and State explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Memory and State\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Memory and State to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Memory and State (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Memory and State and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Memory and State-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Memory and State interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Memory and State in production today?"
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
        }), " Memory and State builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Memory and State before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Memory and State is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Memory and State in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Memory and State chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Memory and State is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Memory and State is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Memory and State is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Memory and State issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Memory and State in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Memory and State that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Memory and State is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Memory and State in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Memory and State and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Memory and State on an empty input?"
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
            children: "Complete Medium exercises, explain Memory and State to someone else"
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
        children: "Always write a one-line example of Memory and State from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Memory and State when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Memory and State twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Memory and State snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Memory and State listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Memory and State to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Memory and State by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Memory and State to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Memory and State"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Memory and State (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Memory and State problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Memory and State"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Memory and State"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Memory and State"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Memory and State fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Memory and State is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Memory and State is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Memory and State, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Memory and State asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory and State is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Memory and State."
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
        children: "Memory and State emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Memory and State today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Memory and State — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Memory and State changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Memory and State."
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
        children: "Memory and State appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Memory and State helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Memory and State concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Memory and State skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Memory and State to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory and State is like a recipe"
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
        }), " — this chapter contributes the Memory and State skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-05memoryandstate-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Memory and State in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-05memoryandstate-flash2",
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
      "data-qid": "13aiagentslanggraph-05memoryandstate-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Memory and State approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-05memoryandstate-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Memory and State NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-05memoryandstate-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Memory and State applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Memory and State (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Memory and State (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Memory and State-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Memory and State in production at scale"
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
        children: "Testing: pytest for unit tests of Memory and State code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Memory and State"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Memory and State code."]
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
        }), " or your IDE's debugger to step through the Memory and State example code."]
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
        children: "Explain Memory and State in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Memory and State."
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
        children: "Tell me about a time you debugged a Memory and State problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Memory and State is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Memory and State."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Memory and State logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Memory and State without notes"
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
        }), ": a small team uses Memory and State daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Memory and State patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Memory and State principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Memory and State shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Memory and State to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/06-multi-agent-systems",
        children: "Multi-Agent Systems"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory and State, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Memory and State depends on input size and distribution — always benchmark for your own data."
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