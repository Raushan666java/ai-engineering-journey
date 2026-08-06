"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[56362],{

/***/ 16990
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_03_langgraph_basics_md_b1c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-13-ai-agents-langgraph-03-langgraph-basics-md-b1c.json
const site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_03_langgraph_basics_md_b1c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-agents-langgraph/03-langgraph-basics","title":"LangGraph Basics","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/13-ai-agents-langgraph/03-langgraph-basics.md","sourceDirName":"courses/ai-engineering-placement/13-ai-agents-langgraph","slug":"/ai-engineering-placement/13-ai-agents-langgraph/03-langgraph-basics","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/03-langgraph-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":164,"frontMatter":{"id":"03-langgraph-basics","slug":"/ai-engineering-placement/13-ai-agents-langgraph/03-langgraph-basics","title":"LangGraph Basics","sidebar_label":"LangGraph Basics","sidebar_position":164},"sidebar":"coursesSidebar","previous":{"title":"Agent Architectures","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/02-agent-architectures"},"next":{"title":"Tool Use and Function Calling","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/04-tool-use-and-function-calling"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/13-ai-agents-langgraph/03-langgraph-basics.md


const frontMatter = {
	id: '03-langgraph-basics',
	slug: '/ai-engineering-placement/13-ai-agents-langgraph/03-langgraph-basics',
	title: 'LangGraph Basics',
	sidebar_label: 'LangGraph Basics',
	sidebar_position: 164
};
const contentTitle = 'LangGraph Basics';

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
  "value": "3.1 LangGraph Concepts",
  "id": "31-langgraph-concepts",
  "level": 2
}, {
  "value": "Core Concepts",
  "id": "core-concepts",
  "level": 3
}, {
  "value": "3.2 Building a Graph",
  "id": "32-building-a-graph",
  "level": 2
}, {
  "value": "3.2.1 Simple StateGraph",
  "id": "321-simple-stategraph",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "3.2.2 LangChain-Style Interface",
  "id": "322-langchain-style-interface",
  "level": 3
}, {
  "value": "3.3 Conditional Routing",
  "id": "33-conditional-routing",
  "level": 2
}, {
  "value": "3.3.1 Router Node",
  "id": "331-router-node",
  "level": 3
}, {
  "value": "3.3.2 Dynamic Routing",
  "id": "332-dynamic-routing",
  "level": 3
}, {
  "value": "3.4 State Management",
  "id": "34-state-management",
  "level": 2
}, {
  "value": "3.4.1 Typed State with Reducers",
  "id": "341-typed-state-with-reducers",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-1",
  "level": 2
}, {
  "value": "3.4.2 State Schema",
  "id": "342-state-schema",
  "level": 3
}, {
  "value": "3.5 Checkpointing",
  "id": "35-checkpointing",
  "level": 2
}, {
  "value": "3.5.1 In-Memory Checkpointer",
  "id": "351-in-memory-checkpointer",
  "level": 3
}, {
  "value": "3.5.2 Conversation Persistence",
  "id": "352-conversation-persistence",
  "level": 3
}, {
  "value": "3.6 Human-in-the-Loop",
  "id": "36-human-in-the-loop",
  "level": 2
}, {
  "value": "3.6.1 Interrupt/Resume",
  "id": "361-interruptresume",
  "level": 3
}, {
  "value": "3.6.2 Approval Workflow",
  "id": "362-approval-workflow",
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
        id: "langgraph-basics",
        children: "LangGraph Basics"
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
            children: "Understand LangGraph's graph-based approach to agent orchestration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define StateGraph with nodes, edges, and state management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement conditional routing and branching in agent workflows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build persistent agent conversations with checkpointing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design human-in-the-loop workflows with interrupt/resume"
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
      children: "Understanding langgraph basics is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how langgraph basics works in practice."
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
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LangGraph Concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StateGraph, nodes, edges, state schema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building a Graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define state, add nodes, connect edges, compile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional Routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision nodes, branching, conditional edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typed state, reducers, state updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkpointing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistence, conversation history, interrupts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-in-the-Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupts, approval steps, manual input"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph LangGraph\n        N1[Node: LLM] --> C{Conditional Edge}\n        C -->|Tool| N2[Node: Tool]\n        C -->|End| N3[Node: Output]\n        N2 --> N1\n    end\n    S[State] --> N1\n    N1 --> S\n    N2 --> S\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-langgraph-concepts",
      children: "3.1 LangGraph Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LangGraph is a framework for building stateful, multi-actor agent applications. It models agent workflows as graphs where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nodes"
        }), " represent computation steps (LLM calls, tool executions, human input)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edges"
        }), " define control flow between nodes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State"
        }), " is a shared, typed data structure that persists across nodes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graph"
        }), " is the complete workflow definition that can be compiled and executed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-concepts",
      children: "Core Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\nfrom typing import List, Dict, Any, Callable, Optional, TypedDict, Literal\nfrom enum import Enum\nimport json\n\nclass NodeType(Enum):\n    LLM = \"llm\"\n    TOOL = \"tool\"\n    CONDITION = \"condition\"\n    INPUT = \"input\"\n    OUTPUT = \"output\"\n\n@dataclass\nclass GraphNode:\n    name: str\n    node_type: NodeType\n    fn: Callable\n    config: Dict = field(default_factory=dict)\n\n@dataclass\nclass GraphEdge:\n    source: str\n    target: str\n    condition: Optional[Callable] = None\n\n## Typed state definition (similar to TypedDict in LangGraph)\nclass AgentState(TypedDict):\n    messages: List[Dict[str, str]]\n    step_count: int\n    tool_results: Dict[str, str]\n    final_answer: Optional[str]\n\nprint(\"LangGraph core concepts defined\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-building-a-graph",
      children: "3.2 Building a Graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "321-simple-stategraph",
      children: "3.2.1 Simple StateGraph"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class StateGraph:\n    def __init__(self, state_schema: type):\n        self.state_schema = state_schema\n        self.nodes: Dict[str, GraphNode] = {}\n        self.edges: List[GraphEdge] = []\n        self.entry_point: Optional[str] = None\n        self.conditional_edges: Dict[str, List[tuple]] = {}\n\n    def add_node(self, name: str, fn: Callable, node_type: NodeType = NodeType.LLM, config: Dict = None):\n        self.nodes[name] = GraphNode(name=name, node_type=node_type, fn=fn, config=config or {})\n\n    def add_edge(self, source: str, target: str):\n        self.edges.append(GraphEdge(source=source, target=target))\n\n    def add_conditional_edges(self, source: str, condition_fn: Callable, mapping: Dict[str, str]):\n        self.conditional_edges[source] = (condition_fn, mapping)\n\n    def set_entry_point(self, node_name: str):\n        self.entry_point = node_name\n\n    def compile(self) -> 'CompiledGraph':\n        return CompiledGraph(self)\n\nclass CompiledGraph:\n    def __init__(self, graph: StateGraph):\n        self.graph = graph\n\n    def invoke(self, initial_state: Dict) -> Dict:\n        state = dict(initial_state)\n        current = self.graph.entry_point\n\n        if not current:\n            raise ValueError(\"No entry point set\")\n\n        while current is not None:\n            node = self.graph.nodes.get(current)\n            if not node:\n                break\n\n            state = node.fn(state)\n\n            # Check conditional edges\n            if current in self.graph.conditional_edges:\n                condition_fn, mapping = self.graph.conditional_edges[current]\n                result = condition_fn(state)\n                current = mapping.get(result)\n                if current is None:\n                    current = mapping.get(\"__default__\")\n            else:\n                # Follow normal edge\n                next_edges = [e for e in self.graph.edges if e.source == current]\n                current = next_edges[0].target if next_edges else None\n\n        return state\n\n## Define nodes\ndef llm_node(state: Dict) -> Dict:\n    messages = state.get(\"messages\", [])\n    messages.append({\"role\": \"assistant\", \"content\": f\"Processing step {state.get('step_count', 0) + 1}\"})\n    return {**state, \"messages\": messages, \"step_count\": state.get(\"step_count\", 0) + 1}\n\ndef tool_node(state: Dict) -> Dict:\n    return {**state, \"tool_results\": {\"search\": \"Found relevant information\"}}\n\ndef output_node(state: Dict) -> Dict:\n    return {**state, \"final_answer\": \"Task completed successfully.\"}\n\n## Build graph\ngraph = StateGraph(state_schema=AgentState)\ngraph.add_node(\"llm\", llm_node, NodeType.LLM)\ngraph.add_node(\"tool\", tool_node, NodeType.TOOL)\ngraph.add_node(\"output\", output_node, NodeType.OUTPUT)\n\ngraph.add_edge(\"llm\", \"tool\")\ngraph.add_edge(\"tool\", \"output\")\ngraph.set_entry_point(\"llm\")\n\ncompiled = graph.compile()\nresult = compiled.invoke({\"messages\": [], \"step_count\": 0, \"tool_results\": {}, \"final_answer\": None})\nprint(f\"Result: {result['final_answer']}\")\nprint(f\"Steps: {result['step_count']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "322-langchain-style-interface",
      children: "3.2.2 LangChain-Style Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LangGraphInterface:\n    def __init__(self):\n        self.graph = StateGraph(state_schema=AgentState)\n\n    def add_llm_node(self, name: str, model_name: str = \"gpt-4o-mini\"):\n        def llm_fn(state: Dict) -> Dict:\n            messages = state.get(\"messages\", [])\n            messages.append({\"role\": \"assistant\", \"content\": f\"LLM ({model_name}) response\"})\n            return {**state, \"messages\": messages}\n        self.graph.add_node(name, llm_fn, NodeType.LLM, {\"model\": model_name})\n\n    def add_tool_node(self, name: str, tool_fn: Callable):\n        def wrapped_tool(state: Dict) -> Dict:\n            result = tool_fn(state.get(\"current_input\", \"\"))\n            tool_results = state.get(\"tool_results\", {})\n            tool_results[name] = result\n            return {**state, \"tool_results\": tool_results}\n        self.graph.add_node(name, wrapped_tool, NodeType.TOOL)\n        return wrapped_tool\n\nlang = LangGraphInterface()\nlang.add_llm_node(\"reason\", \"gpt-4o-mini\")\nlang.add_tool_node(\"search\", lambda x: f\"Found: {x}\")\nprint(\"LangGraph interface configured\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-conditional-routing",
      children: "3.3 Conditional Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "331-router-node",
      children: "3.3.1 Router Node"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RouterNode:\n    def __init__(self, routes: Dict[str, str], default_route: str = None):\n        self.routes = routes\n        self.default = default_route\n\n    def __call__(self, state: Dict) -> str:\n        last_message = state.get(\"messages\", [{}])[-1].get(\"content\", \"\").lower()\n\n        for keyword, route in self.routes.items():\n            if keyword in last_message:\n                return route\n\n        return self.default or list(self.routes.values())[0]\n\ndef build_agent_with_routing():\n    graph = StateGraph(state_schema=AgentState)\n\n    def agent_node(state: Dict) -> Dict:\n        messages = state.get(\"messages\", [])\n        response = \"I need to decide what to do next.\"\n        messages.append({\"role\": \"assistant\", \"content\": response})\n        return {**state, \"messages\": messages}\n\n    def search_tool(state: Dict) -> Dict:\n        return {**state, \"tool_results\": {\"search\": \"Search completed\"}}\n\n    def calculator_tool(state: Dict) -> Dict:\n        return {**state, \"tool_results\": {\"calculate\": \"Calculation done\"}}\n\n    def final_answer(state: Dict) -> Dict:\n        return {**state, \"final_answer\": \"Here is the answer.\"}\n\n    graph.add_node(\"agent\", agent_node)\n    graph.add_node(\"search\", search_tool)\n    graph.add_node(\"calculate\", calculator_tool)\n    graph.add_node(\"final\", final_answer)\n\n    router = RouterNode({\"search\": \"search\", \"calculate\": \"calculate\", \"final\": \"final\"}, default_route=\"final\")\n    graph.add_conditional_edges(\"agent\", router, {\"search\": \"search\", \"calculate\": \"calculate\", \"final\": \"final\"})\n    graph.add_edge(\"search\", \"agent\")\n    graph.add_edge(\"calculate\", \"agent\")\n    graph.set_entry_point(\"agent\")\n\n    return graph.compile()\n\nrouting_agent = build_agent_with_routing()\nstate = routing_agent.invoke({\"messages\": [{\"role\": \"user\", \"content\": \"search for AI news\"}], \"step_count\": 0, \"tool_results\": {}, \"final_answer\": None})\nprint(f\"Routing agent result: {state.get('final_answer', 'n/a')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "332-dynamic-routing",
      children: "3.3.2 Dynamic Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DynamicRouter:\n    def __init__(self, num_tools: int):\n        self.num_tools = num_tools\n\n    def __call__(self, state: Dict) -> str:\n        step = state.get(\"step_count\", 0)\n        if step >= self.num_tools * 2:\n            return \"final\"\n        if step % 2 == 0:\n            return \"tool\"\n        return \"agent\"\n\ndef build_dynamic_agent():\n    graph = StateGraph(state_schema=AgentState)\n\n    graph.add_node(\"agent\", lambda s: {**s, \"step_count\": s.get(\"step_count\", 0) + 1})\n    graph.add_node(\"tool\", lambda s: {**s, \"tool_results\": {**s.get(\"tool_results\", {}), f\"step_{s['step_count']}\": \"done\"}})\n    graph.add_node(\"final\", lambda s: {**s, \"final_answer\": \"Dynamic routing complete.\"})\n\n    graph.add_conditional_edges(\"agent\", DynamicRouter(3), {\"tool\": \"tool\", \"final\": \"final\"})\n    graph.add_conditional_edges(\"tool\", DynamicRouter(3), {\"agent\": \"agent\", \"final\": \"final\"})\n    graph.set_entry_point(\"agent\")\n\n    return graph.compile()\n\ndynamic = build_dynamic_agent()\nresult = dynamic.invoke({\"messages\": [], \"step_count\": 0, \"tool_results\": {}, \"final_answer\": None})\nprint(f\"Dynamic routing: {result['final_answer']}, steps: {result['step_count']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-state-management",
      children: "3.4 State Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "341-typed-state-with-reducers",
      children: "3.4.1 Typed State with Reducers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Dict, Any, Optional, Annotated\nimport operator\n\n## Define state with reducers (conceptual — LangGraph uses TypedDict)\nclass ReducibleState:\n    def __init__(self):\n        self.messages: List[Dict] = []\n        self.counters: Dict[str, int] = {}\n        self.data: Dict[str, Any] = {}\n\n    def add_message(self, message: Dict):\n        # Reducer: append to list\n        self.messages.append(message)\n\n    def increment_counter(self, key: str, value: int = 1):\n        # Reducer: add to existing value\n        self.counters[key] = self.counters.get(key, 0) + value\n\n    def merge_data(self, updates: Dict):\n        # Reducer: merge dict\n        self.data.update(updates)\n\nclass StateManager:\n    def __init__(self, initial_state: Optional[Dict] = None):\n        self.state = initial_state or {}\n\n    def update(self, updates: Dict, reducer: str = \"replace\") -> Dict:\n        if reducer == \"replace\":\n            self.state.update(updates)\n        elif reducer == \"append\":\n            for key, value in updates.items():\n                if key not in self.state:\n                    self.state[key] = []\n                if isinstance(value, list):\n                    self.state[key].extend(value)\n                else:\n                    self.state[key].append(value)\n        elif reducer == \"merge\":\n            for key, value in updates.items():\n                if key not in self.state:\n                    self.state[key] = {}\n                if isinstance(value, dict):\n                    self.state[key].update(value)\n        return self.state\n\nsm = StateManager({\"messages\": []})\nsm.update({\"messages\": [{\"role\": \"user\", \"content\": \"hello\"}]}, \"append\")\nsm.update({\"messages\": [{\"role\": \"assistant\", \"content\": \"hi\"}]}, \"append\")\nprint(f\"Messages: {len(sm.state['messages'])}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-1",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "342-state-schema",
      children: "3.4.2 State Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class StateSchema:\n    def __init__(self):\n        self.fields: Dict[str, Dict] = {}\n\n    def add_field(self, name: str, field_type: type, default=None, reducer: str = \"replace\"):\n        self.fields[name] = {\"type\": field_type, \"default\": default, \"reducer\": reducer}\n\n    def create_initial_state(self) -> Dict:\n        return {name: info[\"default\"] for name, info in self.fields.items()}\n\n    def apply_reducer(self, state: Dict, key: str, new_value: Any) -> Dict:\n        field = self.fields.get(key)\n        if not field:\n            state[key] = new_value\n            return state\n\n        reducer = field[\"reducer\"]\n        if reducer == \"replace\":\n            state[key] = new_value\n        elif reducer == \"append\":\n            if key not in state:\n                state[key] = []\n            if isinstance(new_value, list):\n                state[key].extend(new_value)\n            else:\n                state[key].append(new_value)\n        elif reducer == \"merge\":\n            if key not in state:\n                state[key] = {}\n            if isinstance(new_value, dict):\n                state[key].update(new_value)\n\n        return state\n\nschema = StateSchema()\nschema.add_field(\"messages\", list, default=[], reducer=\"append\")\nschema.add_field(\"count\", int, default=0, reducer=\"replace\")\nschema.add_field(\"metadata\", dict, default={}, reducer=\"merge\")\n\nstate = schema.create_initial_state()\nstate = schema.apply_reducer(state, \"messages\", [{\"role\": \"user\", \"content\": \"test\"}])\nstate = schema.apply_reducer(state, \"count\", 1)\nprint(f\"State: messages={len(state['messages'])}, count={state['count']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-checkpointing",
      children: "3.5 Checkpointing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Checkpointing enables saving and resuming graph execution state."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "351-in-memory-checkpointer",
      children: "3.5.1 In-Memory Checkpointer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pickle\nfrom datetime import datetime\n\nclass Checkpointer:\n    def __init__(self):\n        self.checkpoints: Dict[str, bytes] = {}\n\n    def save(self, thread_id: str, state: Dict) -> str:\n        checkpoint_id = f\"{thread_id}-{datetime.now().timestamp()}\"\n        self.checkpoints[checkpoint_id] = pickle.dumps(state)\n        return checkpoint_id\n\n    def load(self, checkpoint_id: str) -> Optional[Dict]:\n        data = self.checkpoints.get(checkpoint_id)\n        if data:\n            return pickle.loads(data)\n        return None\n\n    def list_checkpoints(self, thread_id: str) -> List[str]:\n        return [k for k in self.checkpoints.keys() if k.startswith(thread_id)]\n\nclass CheckpointedGraph(CompiledGraph):\n    def __init__(self, graph: StateGraph, checkpointer: Checkpointer):\n        super().__init__(graph)\n        self.checkpointer = checkpointer\n        self.current_thread: Optional[str] = None\n\n    def invoke(self, initial_state: Dict, thread_id: str = None) -> Dict:\n        thread_id = thread_id or f\"thread-{datetime.now().timestamp()}\"\n        self.current_thread = thread_id\n\n        state = dict(initial_state)\n        current = self.graph.entry_point\n        step = 0\n\n        while current is not None and step < 20:\n            node = self.graph.nodes.get(current)\n            if not node:\n                break\n\n            # Save checkpoint before node execution\n            checkpoint_id = self.checkpointer.save(thread_id, {**state, \"_current_node\": current})\n            state = node.fn(state)\n            step += 1\n\n            # Route to next node\n            if current in self.graph.conditional_edges:\n                condition_fn, mapping = self.graph.conditional_edges[current]\n                result = condition_fn(state)\n                current = mapping.get(result)\n            else:\n                next_edges = [e for e in self.graph.edges if e.source == current]\n                current = next_edges[0].target if next_edges else None\n\n        return state\n\ncheckpointer = Checkpointer()\ngraph = StateGraph(state_schema=AgentState)\ngraph.add_node(\"start\", lambda s: {**s, \"step_count\": s.get(\"step_count\", 0) + 1})\ngraph.add_node(\"end\", lambda s: {**s, \"final_answer\": \"Done\"})\ngraph.add_edge(\"start\", \"end\")\ngraph.set_entry_point(\"start\")\n\ncg = CheckpointedGraph(graph, checkpointer)\nresult = cg.invoke({\"messages\": [], \"step_count\": 0, \"tool_results\": {}, \"final_answer\": None}, thread_id=\"test-thread\")\nprint(f\"Checkpoints saved: {len(checkpointer.checkpoints)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "352-conversation-persistence",
      children: "3.5.2 Conversation Persistence"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PersistentConversation:\n    def __init__(self, checkpointer: Checkpointer):\n        self.checkpointer = checkpointer\n\n    def process_message(self, thread_id: str, message: str, graph_fn: Callable) -> str:\n        # Load previous state\n        checkpoints = self.checkpointer.list_checkpoints(thread_id)\n        if checkpoints:\n            state = self.checkpointer.load(checkpoints[-1])\n        else:\n            state = {\"messages\": [], \"step_count\": 0, \"tool_results\": {}, \"final_answer\": None}\n\n        # Add new message\n        state[\"messages\"].append({\"role\": \"user\", \"content\": message})\n\n        # Process through graph\n        result = graph_fn(state, thread_id=thread_id)\n\n        # Return last assistant message\n        messages = result.get(\"messages\", [])\n        for msg in reversed(messages):\n            if msg[\"role\"] == \"assistant\":\n                return msg[\"content\"]\n        return \"No response\"\n\ndef mock_graph(state: Dict, thread_id: str) -> Dict:\n    state[\"messages\"].append({\"role\": \"assistant\", \"content\": f\"Response to your message\"})\n    return state\n\nconv = PersistentConversation(checkpointer)\nresponse = conv.process_message(\"thread-1\", \"Hello!\", mock_graph)\nprint(f\"Response: {response}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-human-in-the-loop",
      children: "3.6 Human-in-the-Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "361-interruptresume",
      children: "3.6.1 Interrupt/Resume"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class InterruptNode:\n    def __init__(self, interrupt_fn: Callable):\n        self.interrupt_fn = interrupt_fn\n\n    def __call__(self, state: Dict) -> Dict:\n        user_input = self.interrupt_fn(state)\n        return {**state, \"user_input\": user_input, \"interrupted\": True}\n\nclass HumanInTheLoopGraph:\n    def __init__(self, graph: StateGraph, interrupt_node_name: str):\n        self.graph = graph.compile()\n        self.interrupt_node = interrupt_node_name\n        self.paused_states: Dict[str, Dict] = {}\n\n    def invoke(self, initial_state: Dict, thread_id: str = None) -> Dict:\n        tid = thread_id or f\"thread-{id(initial_state)}\"\n        state = dict(initial_state)\n        current = self.graph.graph.entry_point\n\n        while current:\n            node = self.graph.graph.nodes.get(current)\n            if not node:\n                break\n\n            if current == self.interrupt_node:\n                # Pause and store state\n                self.paused_states[tid] = {\"state\": state, \"next_node\": current}\n                return {\"interrupted\": True, \"thread_id\": tid, \"state\": state}\n\n            state = node.fn(state)\n            current = self._get_next_node(current, state)\n\n        return state\n\n    def resume(self, thread_id: str, user_input: str) -> Dict:\n        paused = self.paused_states.get(thread_id)\n        if not paused:\n            return {\"error\": \"No paused state found\"}\n\n        state = paused[\"state\"]\n        state[\"user_input\"] = user_input\n        state[\"interrupted\"] = False\n        current = paused[\"next_node\"]\n\n        while current:\n            node = self.graph.graph.nodes.get(current)\n            if not node:\n                break\n\n            if current == self.interrupt_node:\n                del self.paused_states[thread_id]\n                return {\"error\": \"Re-interrupted\"}\n\n            state = node.fn(state)\n            current = self._get_next_node(current, state)\n\n        return state\n\n    def _get_next_node(self, current: str, state: Dict) -> Optional[str]:\n        if current in self.graph.graph.conditional_edges:\n            cond_fn, mapping = self.graph.graph.conditional_edges[current]\n            result = cond_fn(state)\n            return mapping.get(result)\n        edges = [e for e in self.graph.graph.edges if e.source == current]\n        return edges[0].target if edges else None\n\ndef ask_human(state: Dict) -> Dict:\n    print(f\"\\n--- Human Input Needed ---\")\n    print(f\"Context: {state.get('messages', [])[-1:]}\")\n    user_input = input(\"Your input: \")\n    return {**state, \"user_input\": user_input}\n\ngraph_w_hitl = StateGraph(state_schema=AgentState)\ngraph_w_hitl.add_node(\"agent\", lambda s: s)\ngraph_w_hitl.add_node(\"human\", InterruptNode(ask_human))\ngraph_w_hitl.add_node(\"process\", lambda s: {**s, \"final_answer\": f\"Processed: {s.get('user_input', '')}\"})\ngraph_w_hitl.add_edge(\"agent\", \"human\")\ngraph_w_hitl.add_edge(\"human\", \"process\")\ngraph_w_hitl.set_entry_point(\"agent\")\n\nhitl = HumanInTheLoopGraph(graph_w_hitl, \"human\")\nprint(\"Human-in-the-loop graph ready (requires user input)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "362-approval-workflow",
      children: "3.6.2 Approval Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ApprovalWorkflow:\n    def __init__(self):\n        self.pending_approvals: Dict[str, Dict] = {}\n\n    def request_approval(self, action: str, details: Dict, thread_id: str) -> str:\n        approval_id = f\"approval-{thread_id}\"\n        self.pending_approvals[approval_id] = {\n            \"action\": action,\n            \"details\": details,\n            \"status\": \"pending\",\n        }\n        return approval_id\n\n    def approve(self, approval_id: str) -> bool:\n        if approval_id in self.pending_approvals:\n            self.pending_approvals[approval_id][\"status\"] = \"approved\"\n            return True\n        return False\n\n    def reject(self, approval_id: str) -> bool:\n        if approval_id in self.pending_approvals:\n            self.pending_approvals[approval_id][\"status\"] = \"rejected\"\n            return True\n        return False\n\n    def check_status(self, approval_id: str) -> str:\n        approval = self.pending_approvals.get(approval_id)\n        return approval[\"status\"] if approval else \"not_found\"\n\napproval = ApprovalWorkflow()\napproval_id = approval.request_approval(\"send_email\", {\"to\": \"user@example.com\", \"subject\": \"Test\"}, \"thread-1\")\nprint(f\"Approval status: {approval.check_status(approval_id)}\")\napproval.approve(approval_id)\nprint(f\"After approve: {approval.check_status(approval_id)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LangGraph provides a graph-based framework for building stateful, multi-actor agent applications. A StateGraph consists of nodes (computation steps) connected by edges (control flow). Conditional edges enable dynamic routing based on state. State management uses typed schemas with reducers for.\ndeterministic updates. Checkpointing enables conversation persistence, resumability, and debugging. Human-in-the-loop patterns (interrupts, approval workflows) allow agents to pause execution for human input before continuing. LangGraph's structured approach makes complex agent workflows manageable,.\ntestable, and observable."
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
            children: "Define state first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear state schema is essential for predictable graph execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use conditional edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic routing based on LLM output enables flexible agent behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add checkpointing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables debugging, resumption, and conversation history"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plan for interrupts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-in-the-loop is simpler with graph-based pause/resume"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test incrementally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile and test each node/edge before adding complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag03-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What are the core concepts of LangGraph?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "LangGraph models agent workflows as directed graphs with four core concepts: Nodes represent computation steps (LLM calls, tool executions, human input);.\nEdges define the control flow between nodes; State is a shared typed data structure that persists across nodes and gets updated by each node;.\nand the Graph is the complete workflow definition that can be compiled and executed. A StateGraph requires a state schema (like a TypedDict),.\nat least one node, an entry point, and edges. Conditional edges enable dynamic routing where the next node depends on the current state. This graph-based approach makes complex multi-step agent workflows explicit,.\ntestable, and observable compared to implicit loop-based implementations."
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
      "data-qid": "ag03-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How do you build a StateGraph in LangGraph?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To build a StateGraph: (1) define a state schema (a TypedDict or dataclass with fields like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "messages: List[Dict]"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "step_count: int"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "final_answer: Optional[str]"
          }), ");.\n(2) create node functions that take state and return updated state; (3) add nodes to the graph with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "graph.add_node(\"name\", fn)"
          }), "; (4) add edges between nodes with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "graph.add_edge(\"source\",.\n\"target\")"
          }), " or conditional edges with a router function; (5) set the entry point with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "graph.set_entry_point(\"node_name\")"
          }), "; and (6) compile with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "graph.compile()"
          }), ". The compiled graph accepts initial state via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "invoke()"
          }), " and.\nreturns the final state after traversing the graph. This pattern separates workflow topology from business logic."]
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
      "data-qid": "ag03-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is conditional routing in LangGraph?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Conditional routing lets the graph decide which node to execute next based on the current state. Instead of a fixed edge ", (0,jsx_runtime.jsx)(_components.code, {
            children: "A → B"
          }), ",.\nyou add a router function that examines the state and returns the name of the next node. For example, after an LLM node,.\na router might check if the LLM output contains a tool call: if yes, route to the tool execution node; if no,.\nroute to the output node. The router function is registered with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "graph.add_conditional_edges(source, router, mapping)"
          }), " where ", (0,jsx_runtime.jsx)(_components.code, {
            children: "mapping"
          }), " is a dict of return-value → target-node. This enables ReAct-style loops where the graph cycles between LLM and.\ntool nodes until a final answer is produced. Conditional edges are the key enabler for non-linear, decision-based workflows."]
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
      "data-qid": "ag03-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does state management work in LangGraph?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "State in LangGraph is a shared typed data structure that flows through the graph. Each node receives the current state and.\nreturns an updated state. State updates are controlled by reducers — functions that determine how to combine existing state with new values. The most common reducers are: \"replace\" (overwrite the field),.\n\"append\" (add to a list, used for message history), and \"merge\" (merge dicts). For example, a messages field uses \"append\" reducer so each new message is added to the list rather than replacing it. Reducers ensure deterministic,.\npredictable state updates regardless of node execution order. State schemas also define default values and type constraints, catching errors at graph compilation time rather than during execution."
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
      "data-qid": "ag03-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is checkpointing and why is it important?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Checkpointing saves the graph's state at each step, enabling persistence, resumption, debugging, and rollback. After each node execution, the current state (including which node executed last) is serialized and.\nstored with a unique checkpoint ID. If execution is interrupted — whether by a crash, a timeout, or a human-in-the-loop pause — the graph can resume from the last checkpoint by loading the saved state and.\ncontinuing from the saved node. During development, checkpoints allow replaying execution from any step to debug issues. Production agent systems use checkpointing to handle server restarts,.\nlong-running workflows, and multi-session conversations. Common storage backends include SQLite, Postgres, and Redis."
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
      "data-qid": "ag03-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you implement human-in-the-loop with LangGraph?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Human-in-the-loop (HITL) in LangGraph is implemented via interrupt nodes. An interrupt node is a special node that pauses graph execution, saves the current state to a checkpoint,.\nand returns control to the caller with the paused state. The human reviews the state (e.g., an agent's proposed action), provides input (approve,.\nreject, or modify), and calls ", (0,jsx_runtime.jsx)(_components.code, {
            children: "resume()"
          }), " on the graph with the human's input. The graph then continues from the interrupt node,.\nincorporating the human's input into the state. The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "HumanInTheLoopGraph"
          }), " wrapper manages paused states by thread ID, supporting multiple concurrent paused workflows. This pattern is essential for.\nhigh-risk actions where you need human approval before proceeding."]
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
      "data-qid": "ag03-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What are reducers in LangGraph state?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Reducers in LangGraph define how state fields are updated when multiple nodes modify the same field. Without reducers, each node would replace the field value. With reducers,.\nyou can specify merge strategies: \"append\" for lists (each new message is added, not replacing previous ones), \"merge\" for dicts (nested updates),.\nor custom reducer functions. For example, a messages list with \"append\" reducer accumulates conversation history across all nodes. Reducers are specified in the state schema definition alongside field types and.\ndefaults. This pattern is inspired by Redux and ensures state updates are predictable and composable. Custom reducers can implement complex logic like deduplication or.\npriority-based merging."
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
      "data-qid": "ag03-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How does a checkpointed graph work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A checkpointed graph wraps the standard compiled graph with a checkpointer that saves state before each node execution. When ", (0,jsx_runtime.jsx)(_components.code, {
            children: "invoke()"
          }), " is called,.\nthe graph proceeds normally but at each step the current state is serialized and stored with a unique checkpoint ID (typically combining thread ID and.\ntimestamp). If execution is interrupted or needs to be resumed, the checkpointer loads the most recent checkpoint and restores the state,.\nthen continues from the saved node. Checkpoints can also be used for debugging — you can replay execution from any checkpoint,.\ninspect intermediate states, or branch off from a specific point. The pattern enables long-running agent workflows that may span minutes, hours,.\nor even days if waiting for human input."]
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
      "data-qid": "ag03-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is an approval workflow in LangGraph?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "An approval workflow in LangGraph pauses execution at a point where human judgment is required before proceeding with a potentially costly or.\nirreversible action. The pattern adds an interrupt node after the agent proposes an action but before it executes. The interrupt presents the proposed action to a human (e.g.,.\nvia a dashboard notification or email), along with context. The human can approve (execution continues), reject (agent must find an alternative),.\nor modify the action. The approval workflow manager tracks pending approvals by ID, supports timeouts (auto-reject if no response within N minutes),.\nand can require multiple approvers for high-risk actions. This pattern is essential for production agents that send emails, delete data, or.\nmake financial transactions."
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
      "data-qid": "ag03-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How does a compiled graph execute?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A compiled graph executes by starting at the entry point node and following edges until reaching a node with no outgoing edges (terminal state). At each step: (1) the current node's function is called with the current state;.\n(2) the function returns updated state; (3) the graph checks for conditional edges from the current node — if found, the router function determines the next node;.\n(4) if no conditional edges, the graph follows the first unconditional edge; (5) if no edges at all, execution stops and.\nthe final state is returned. The execution loop handles cycles (edges that go back to previous nodes), which is how agent loops work — the graph cycles between LLM and.\ntool nodes until the LLM produces a final answer. Compilation does validation too, ensuring all nodes referenced in edges actually exist."
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
      "data-qid": "agent-s3-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What are the two main elements of a LangGraph graph?"]
      }), "\nA. Prompts and responses\nB. Nodes and edges\nC. Agents and tools\nD. Inputs and outputs\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s3-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What is the purpose of a conditional edge in LangGraph?"]
      }), "\nA. To join two graphs\nB. To route execution based on state\nC. To import external data\nD. To define node behavior\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s3-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What does checkpointing enable in LangGraph?"]
      }), "\nA. Faster execution\nB. Saving and resuming graph state\nC. Better prompt engineering\nD. Tool integration\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s3-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " How does human-in-the-loop work in LangGraph?"]
      }), "\nA. Humans replace the LLM\nB. The graph pauses at an interrupt node, waits for input, then resumes\nC. Humans write all the prompts\nD. The graph ignores human input\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s3-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " What reducer operation is commonly used for message lists in LangGraph state?"]
      }), "\nA. Replace\nB. Append\nC. Multiply\nD. Subtract\nAnswer: B\n"]
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
          children: "Not practicing enough problems to build pattern recognition1. Build a StateGraph with 3 nodes (input, process, output) and a conditional edge that routes based on whether the input contains a question. Test with both question and statement inputs."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a conversation agent with LangGraph that maintains message history using the append reducer. Run a 3-turn conversation and show the accumulated state."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add checkpointing to a simple graph and demonstrate saving state, stopping execution, and resuming from the checkpoint. Print the state before and after resumption."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a human-in-the-loop approval workflow where an agent proposes an action, pauses for human approval, and continues only if approved. Simulate both approval and rejection paths."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a dynamic routing graph that cycles between agent and tool nodes until the LLM decides to stop. Set a max iteration limit and show both normal completion and for"
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
            children: "Explain the core idea of LangGraph Basics in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates LangGraph Basics."
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
            children: "Describe a production bug caused by misunderstanding LangGraph Basics. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on LangGraph Basics from 10 users to 10 million?"
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
            children: "Compare LangGraph Basics with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on LangGraph Basics."
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
            children: "How does LangGraph Basics behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of LangGraph Basics run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of LangGraph Basics that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name LangGraph Basics explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using LangGraph Basics\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies LangGraph Basics to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside LangGraph Basics (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of LangGraph Basics and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a LangGraph Basics-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic LangGraph Basics interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply LangGraph Basics in production today?"
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
        }), " LangGraph Basics builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for LangGraph Basics before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for LangGraph Basics is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for LangGraph Basics in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the LangGraph Basics chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers LangGraph Basics is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to LangGraph Basics is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing LangGraph Basics is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug LangGraph Basics issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to LangGraph Basics in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving LangGraph Basics that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of LangGraph Basics is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain LangGraph Basics in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for LangGraph Basics and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of LangGraph Basics on an empty input?"
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
            children: "Complete Medium exercises, explain LangGraph Basics to someone else"
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
        children: "Always write a one-line example of LangGraph Basics from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered LangGraph Basics when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining LangGraph Basics twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own LangGraph Basics snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of LangGraph Basics listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link LangGraph Basics to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of LangGraph Basics by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain LangGraph Basics to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of LangGraph Basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on LangGraph Basics (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real LangGraph Basics problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements LangGraph Basics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for LangGraph Basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on LangGraph Basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how LangGraph Basics fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how LangGraph Basics is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where LangGraph Basics is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of LangGraph Basics, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is LangGraph Basics asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LangGraph Basics is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with LangGraph Basics."
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
        children: "LangGraph Basics emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for LangGraph Basics today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about LangGraph Basics — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around LangGraph Basics changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing LangGraph Basics."
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
        children: "LangGraph Basics appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding LangGraph Basics helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the LangGraph Basics concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, LangGraph Basics skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply LangGraph Basics to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangGraph Basics is like a recipe"
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
        }), " — this chapter contributes the LangGraph Basics skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-03langgraphbasics-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of LangGraph Basics in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-03langgraphbasics-flash2",
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
      "data-qid": "13aiagentslanggraph-03langgraphbasics-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard LangGraph Basics approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-03langgraphbasics-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is LangGraph Basics NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-03langgraphbasics-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is LangGraph Basics applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for LangGraph Basics (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing LangGraph Basics (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for LangGraph Basics-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running LangGraph Basics in production at scale"
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
        children: "Testing: pytest for unit tests of LangGraph Basics code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on LangGraph Basics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in LangGraph Basics code."]
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
        }), " or your IDE's debugger to step through the LangGraph Basics example code."]
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
        children: "Explain LangGraph Basics in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of LangGraph Basics."
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
        children: "Tell me about a time you debugged a LangGraph Basics problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where LangGraph Basics is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for LangGraph Basics."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core LangGraph Basics logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain LangGraph Basics without notes"
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
        }), ": a small team uses LangGraph Basics daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": LangGraph Basics patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": LangGraph Basics principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": LangGraph Basics shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect LangGraph Basics to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/04-tool-use-and-function-calling",
        children: "Tool Use and Function Calling"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LangGraph Basics, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of LangGraph Basics depends on input size and distribution — always benchmark for your own data."
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