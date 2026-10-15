"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6362],{

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
const site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_03_langgraph_basics_md_b1c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-agents-langgraph/03-langgraph-basics","title":"LangGraph Basics","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/13-ai-agents-langgraph/03-langgraph-basics.md","sourceDirName":"courses/ai-engineering-placement/13-ai-agents-langgraph","slug":"/ai-engineering-placement/13-ai-agents-langgraph/03-langgraph-basics","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/03-langgraph-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":178,"frontMatter":{"id":"03-langgraph-basics","slug":"/ai-engineering-placement/13-ai-agents-langgraph/03-langgraph-basics","title":"LangGraph Basics","sidebar_label":"LangGraph Basics","sidebar_position":178},"sidebar":"placementSidebar","previous":{"title":"Agent Architectures","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/02-agent-architectures"},"next":{"title":"Tool Use and Function Calling","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/04-tool-use-and-function-calling"}}');
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
	sidebar_position: 178
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
      id: "key-terminology",
      children: "Key Terminology"
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
        children: "flowchart LR\r\n    subgraph LangGraph\r\n        N1[Node: LLM] --> C{Conditional Edge}\r\n        C -->|Tool| N2[Node: Tool]\r\n        C -->|End| N3[Node: Output]\r\n        N2 --> N1\r\n    end\r\n    S[State] --> N1\r\n    N1 --> S\r\n    N2 --> S\n"
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
        children: "from dataclasses import dataclass, field\r\nfrom typing import List, Dict, Any, Callable, Optional, TypedDict, Literal\r\nfrom enum import Enum\r\nimport json\r\n\r\nclass NodeType(Enum):\r\n    LLM = \"llm\"\r\n    TOOL = \"tool\"\r\n    CONDITION = \"condition\"\r\n    INPUT = \"input\"\r\n    OUTPUT = \"output\"\r\n\r\n@dataclass\r\nclass GraphNode:\r\n    name: str\r\n    node_type: NodeType\r\n    fn: Callable\r\n    config: Dict = field(default_factory=dict)\r\n\r\n@dataclass\r\nclass GraphEdge:\r\n    source: str\r\n    target: str\r\n    condition: Optional[Callable] = None\r\n\r\n## Typed state definition (similar to TypedDict in LangGraph)\r\nclass AgentState(TypedDict):\r\n    messages: List[Dict[str, str]]\r\n    step_count: int\r\n    tool_results: Dict[str, str]\r\n    final_answer: Optional[str]\r\n\r\nprint(\"LangGraph core concepts defined\")\n"
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
        children: "class StateGraph:\r\n    def __init__(self, state_schema: type):\r\n        self.state_schema = state_schema\r\n        self.nodes: Dict[str, GraphNode] = {}\r\n        self.edges: List[GraphEdge] = []\r\n        self.entry_point: Optional[str] = None\r\n        self.conditional_edges: Dict[str, List[tuple]] = {}\r\n\r\n    def add_node(self, name: str, fn: Callable, node_type: NodeType = NodeType.LLM, config: Dict = None):\r\n        self.nodes[name] = GraphNode(name=name, node_type=node_type, fn=fn, config=config or {})\r\n\r\n    def add_edge(self, source: str, target: str):\r\n        self.edges.append(GraphEdge(source=source, target=target))\r\n\r\n    def add_conditional_edges(self, source: str, condition_fn: Callable, mapping: Dict[str, str]):\r\n        self.conditional_edges[source] = (condition_fn, mapping)\r\n\r\n    def set_entry_point(self, node_name: str):\r\n        self.entry_point = node_name\r\n\r\n    def compile(self) -> 'CompiledGraph':\r\n        return CompiledGraph(self)\r\n\r\nclass CompiledGraph:\r\n    def __init__(self, graph: StateGraph):\r\n        self.graph = graph\r\n\r\n    def invoke(self, initial_state: Dict) -> Dict:\r\n        state = dict(initial_state)\r\n        current = self.graph.entry_point\r\n\r\n        if not current:\r\n            raise ValueError(\"No entry point set\")\r\n\r\n        while current is not None:\r\n            node = self.graph.nodes.get(current)\r\n            if not node:\r\n                break\r\n\r\n            state = node.fn(state)\r\n\r\n            # Check conditional edges\r\n            if current in self.graph.conditional_edges:\r\n                condition_fn, mapping = self.graph.conditional_edges[current]\r\n                result = condition_fn(state)\r\n                current = mapping.get(result)\r\n                if current is None:\r\n                    current = mapping.get(\"__default__\")\r\n            else:\r\n                # Follow normal edge\r\n                next_edges = [e for e in self.graph.edges if e.source == current]\r\n                current = next_edges[0].target if next_edges else None\r\n\r\n        return state\r\n\r\n## Define nodes\r\ndef llm_node(state: Dict) -> Dict:\r\n    messages = state.get(\"messages\", [])\r\n    messages.append({\"role\": \"assistant\", \"content\": f\"Processing step {state.get('step_count', 0) + 1}\"})\r\n    return {**state, \"messages\": messages, \"step_count\": state.get(\"step_count\", 0) + 1}\r\n\r\ndef tool_node(state: Dict) -> Dict:\r\n    return {**state, \"tool_results\": {\"search\": \"Found relevant information\"}}\r\n\r\ndef output_node(state: Dict) -> Dict:\r\n    return {**state, \"final_answer\": \"Task completed successfully.\"}\r\n\r\n## Build graph\r\ngraph = StateGraph(state_schema=AgentState)\r\ngraph.add_node(\"llm\", llm_node, NodeType.LLM)\r\ngraph.add_node(\"tool\", tool_node, NodeType.TOOL)\r\ngraph.add_node(\"output\", output_node, NodeType.OUTPUT)\r\n\r\ngraph.add_edge(\"llm\", \"tool\")\r\ngraph.add_edge(\"tool\", \"output\")\r\ngraph.set_entry_point(\"llm\")\r\n\r\ncompiled = graph.compile()\r\nresult = compiled.invoke({\"messages\": [], \"step_count\": 0, \"tool_results\": {}, \"final_answer\": None})\r\nprint(f\"Result: {result['final_answer']}\")\r\nprint(f\"Steps: {result['step_count']}\")\n"
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
        children: "class LangGraphInterface:\r\n    def __init__(self):\r\n        self.graph = StateGraph(state_schema=AgentState)\r\n\r\n    def add_llm_node(self, name: str, model_name: str = \"gpt-4o-mini\"):\r\n        def llm_fn(state: Dict) -> Dict:\r\n            messages = state.get(\"messages\", [])\r\n            messages.append({\"role\": \"assistant\", \"content\": f\"LLM ({model_name}) response\"})\r\n            return {**state, \"messages\": messages}\r\n        self.graph.add_node(name, llm_fn, NodeType.LLM, {\"model\": model_name})\r\n\r\n    def add_tool_node(self, name: str, tool_fn: Callable):\r\n        def wrapped_tool(state: Dict) -> Dict:\r\n            result = tool_fn(state.get(\"current_input\", \"\"))\r\n            tool_results = state.get(\"tool_results\", {})\r\n            tool_results[name] = result\r\n            return {**state, \"tool_results\": tool_results}\r\n        self.graph.add_node(name, wrapped_tool, NodeType.TOOL)\r\n        return wrapped_tool\r\n\r\nlang = LangGraphInterface()\r\nlang.add_llm_node(\"reason\", \"gpt-4o-mini\")\r\nlang.add_tool_node(\"search\", lambda x: f\"Found: {x}\")\r\nprint(\"LangGraph interface configured\")\n"
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
        children: "class RouterNode:\r\n    def __init__(self, routes: Dict[str, str], default_route: str = None):\r\n        self.routes = routes\r\n        self.default = default_route\r\n\r\n    def __call__(self, state: Dict) -> str:\r\n        last_message = state.get(\"messages\", [{}])[-1].get(\"content\", \"\").lower()\r\n\r\n        for keyword, route in self.routes.items():\r\n            if keyword in last_message:\r\n                return route\r\n\r\n        return self.default or list(self.routes.values())[0]\r\n\r\ndef build_agent_with_routing():\r\n    graph = StateGraph(state_schema=AgentState)\r\n\r\n    def agent_node(state: Dict) -> Dict:\r\n        messages = state.get(\"messages\", [])\r\n        response = \"I need to decide what to do next.\"\r\n        messages.append({\"role\": \"assistant\", \"content\": response})\r\n        return {**state, \"messages\": messages}\r\n\r\n    def search_tool(state: Dict) -> Dict:\r\n        return {**state, \"tool_results\": {\"search\": \"Search completed\"}}\r\n\r\n    def calculator_tool(state: Dict) -> Dict:\r\n        return {**state, \"tool_results\": {\"calculate\": \"Calculation done\"}}\r\n\r\n    def final_answer(state: Dict) -> Dict:\r\n        return {**state, \"final_answer\": \"Here is the answer.\"}\r\n\r\n    graph.add_node(\"agent\", agent_node)\r\n    graph.add_node(\"search\", search_tool)\r\n    graph.add_node(\"calculate\", calculator_tool)\r\n    graph.add_node(\"final\", final_answer)\r\n\r\n    router = RouterNode({\"search\": \"search\", \"calculate\": \"calculate\", \"final\": \"final\"}, default_route=\"final\")\r\n    graph.add_conditional_edges(\"agent\", router, {\"search\": \"search\", \"calculate\": \"calculate\", \"final\": \"final\"})\r\n    graph.add_edge(\"search\", \"agent\")\r\n    graph.add_edge(\"calculate\", \"agent\")\r\n    graph.set_entry_point(\"agent\")\r\n\r\n    return graph.compile()\r\n\r\nrouting_agent = build_agent_with_routing()\r\nstate = routing_agent.invoke({\"messages\": [{\"role\": \"user\", \"content\": \"search for AI news\"}], \"step_count\": 0, \"tool_results\": {}, \"final_answer\": None})\r\nprint(f\"Routing agent result: {state.get('final_answer', 'n/a')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "332-dynamic-routing",
      children: "3.3.2 Dynamic Routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DynamicRouter:\r\n    def __init__(self, num_tools: int):\r\n        self.num_tools = num_tools\r\n\r\n    def __call__(self, state: Dict) -> str:\r\n        step = state.get(\"step_count\", 0)\r\n        if step >= self.num_tools * 2:\r\n            return \"final\"\r\n        if step % 2 == 0:\r\n            return \"tool\"\r\n        return \"agent\"\r\n\r\ndef build_dynamic_agent():\r\n    graph = StateGraph(state_schema=AgentState)\r\n\r\n    graph.add_node(\"agent\", lambda s: {**s, \"step_count\": s.get(\"step_count\", 0) + 1})\r\n    graph.add_node(\"tool\", lambda s: {**s, \"tool_results\": {**s.get(\"tool_results\", {}), f\"step_{s['step_count']}\": \"done\"}})\r\n    graph.add_node(\"final\", lambda s: {**s, \"final_answer\": \"Dynamic routing complete.\"})\r\n\r\n    graph.add_conditional_edges(\"agent\", DynamicRouter(3), {\"tool\": \"tool\", \"final\": \"final\"})\r\n    graph.add_conditional_edges(\"tool\", DynamicRouter(3), {\"agent\": \"agent\", \"final\": \"final\"})\r\n    graph.set_entry_point(\"agent\")\r\n\r\n    return graph.compile()\r\n\r\ndynamic = build_dynamic_agent()\r\nresult = dynamic.invoke({\"messages\": [], \"step_count\": 0, \"tool_results\": {}, \"final_answer\": None})\r\nprint(f\"Dynamic routing: {result['final_answer']}, steps: {result['step_count']}\")\n"
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
        children: "from typing import List, Dict, Any, Optional, Annotated\r\nimport operator\r\n\r\n## Define state with reducers (conceptual — LangGraph uses TypedDict)\r\nclass ReducibleState:\r\n    def __init__(self):\r\n        self.messages: List[Dict] = []\r\n        self.counters: Dict[str, int] = {}\r\n        self.data: Dict[str, Any] = {}\r\n\r\n    def add_message(self, message: Dict):\r\n        # Reducer: append to list\r\n        self.messages.append(message)\r\n\r\n    def increment_counter(self, key: str, value: int = 1):\r\n        # Reducer: add to existing value\r\n        self.counters[key] = self.counters.get(key, 0) + value\r\n\r\n    def merge_data(self, updates: Dict):\r\n        # Reducer: merge dict\r\n        self.data.update(updates)\r\n\r\nclass StateManager:\r\n    def __init__(self, initial_state: Optional[Dict] = None):\r\n        self.state = initial_state or {}\r\n\r\n    def update(self, updates: Dict, reducer: str = \"replace\") -> Dict:\r\n        if reducer == \"replace\":\r\n            self.state.update(updates)\r\n        elif reducer == \"append\":\r\n            for key, value in updates.items():\r\n                if key not in self.state:\r\n                    self.state[key] = []\r\n                if isinstance(value, list):\r\n                    self.state[key].extend(value)\r\n                else:\r\n                    self.state[key].append(value)\r\n        elif reducer == \"merge\":\r\n            for key, value in updates.items():\r\n                if key not in self.state:\r\n                    self.state[key] = {}\r\n                if isinstance(value, dict):\r\n                    self.state[key].update(value)\r\n        return self.state\r\n\r\nsm = StateManager({\"messages\": []})\r\nsm.update({\"messages\": [{\"role\": \"user\", \"content\": \"hello\"}]}, \"append\")\r\nsm.update({\"messages\": [{\"role\": \"assistant\", \"content\": \"hi\"}]}, \"append\")\r\nprint(f\"Messages: {len(sm.state['messages'])}\")\n"
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
        children: "class StateSchema:\r\n    def __init__(self):\r\n        self.fields: Dict[str, Dict] = {}\r\n\r\n    def add_field(self, name: str, field_type: type, default=None, reducer: str = \"replace\"):\r\n        self.fields[name] = {\"type\": field_type, \"default\": default, \"reducer\": reducer}\r\n\r\n    def create_initial_state(self) -> Dict:\r\n        return {name: info[\"default\"] for name, info in self.fields.items()}\r\n\r\n    def apply_reducer(self, state: Dict, key: str, new_value: Any) -> Dict:\r\n        field = self.fields.get(key)\r\n        if not field:\r\n            state[key] = new_value\r\n            return state\r\n\r\n        reducer = field[\"reducer\"]\r\n        if reducer == \"replace\":\r\n            state[key] = new_value\r\n        elif reducer == \"append\":\r\n            if key not in state:\r\n                state[key] = []\r\n            if isinstance(new_value, list):\r\n                state[key].extend(new_value)\r\n            else:\r\n                state[key].append(new_value)\r\n        elif reducer == \"merge\":\r\n            if key not in state:\r\n                state[key] = {}\r\n            if isinstance(new_value, dict):\r\n                state[key].update(new_value)\r\n\r\n        return state\r\n\r\nschema = StateSchema()\r\nschema.add_field(\"messages\", list, default=[], reducer=\"append\")\r\nschema.add_field(\"count\", int, default=0, reducer=\"replace\")\r\nschema.add_field(\"metadata\", dict, default={}, reducer=\"merge\")\r\n\r\nstate = schema.create_initial_state()\r\nstate = schema.apply_reducer(state, \"messages\", [{\"role\": \"user\", \"content\": \"test\"}])\r\nstate = schema.apply_reducer(state, \"count\", 1)\r\nprint(f\"State: messages={len(state['messages'])}, count={state['count']}\")\n"
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
        children: "import pickle\r\nfrom datetime import datetime\r\n\r\nclass Checkpointer:\r\n    def __init__(self):\r\n        self.checkpoints: Dict[str, bytes] = {}\r\n\r\n    def save(self, thread_id: str, state: Dict) -> str:\r\n        checkpoint_id = f\"{thread_id}-{datetime.now().timestamp()}\"\r\n        self.checkpoints[checkpoint_id] = pickle.dumps(state)\r\n        return checkpoint_id\r\n\r\n    def load(self, checkpoint_id: str) -> Optional[Dict]:\r\n        data = self.checkpoints.get(checkpoint_id)\r\n        if data:\r\n            return pickle.loads(data)\r\n        return None\r\n\r\n    def list_checkpoints(self, thread_id: str) -> List[str]:\r\n        return [k for k in self.checkpoints.keys() if k.startswith(thread_id)]\r\n\r\nclass CheckpointedGraph(CompiledGraph):\r\n    def __init__(self, graph: StateGraph, checkpointer: Checkpointer):\r\n        super().__init__(graph)\r\n        self.checkpointer = checkpointer\r\n        self.current_thread: Optional[str] = None\r\n\r\n    def invoke(self, initial_state: Dict, thread_id: str = None) -> Dict:\r\n        thread_id = thread_id or f\"thread-{datetime.now().timestamp()}\"\r\n        self.current_thread = thread_id\r\n\r\n        state = dict(initial_state)\r\n        current = self.graph.entry_point\r\n        step = 0\r\n\r\n        while current is not None and step < 20:\r\n            node = self.graph.nodes.get(current)\r\n            if not node:\r\n                break\r\n\r\n            # Save checkpoint before node execution\r\n            checkpoint_id = self.checkpointer.save(thread_id, {**state, \"_current_node\": current})\r\n            state = node.fn(state)\r\n            step += 1\r\n\r\n            # Route to next node\r\n            if current in self.graph.conditional_edges:\r\n                condition_fn, mapping = self.graph.conditional_edges[current]\r\n                result = condition_fn(state)\r\n                current = mapping.get(result)\r\n            else:\r\n                next_edges = [e for e in self.graph.edges if e.source == current]\r\n                current = next_edges[0].target if next_edges else None\r\n\r\n        return state\r\n\r\ncheckpointer = Checkpointer()\r\ngraph = StateGraph(state_schema=AgentState)\r\ngraph.add_node(\"start\", lambda s: {**s, \"step_count\": s.get(\"step_count\", 0) + 1})\r\ngraph.add_node(\"end\", lambda s: {**s, \"final_answer\": \"Done\"})\r\ngraph.add_edge(\"start\", \"end\")\r\ngraph.set_entry_point(\"start\")\r\n\r\ncg = CheckpointedGraph(graph, checkpointer)\r\nresult = cg.invoke({\"messages\": [], \"step_count\": 0, \"tool_results\": {}, \"final_answer\": None}, thread_id=\"test-thread\")\r\nprint(f\"Checkpoints saved: {len(checkpointer.checkpoints)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "352-conversation-persistence",
      children: "3.5.2 Conversation Persistence"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PersistentConversation:\r\n    def __init__(self, checkpointer: Checkpointer):\r\n        self.checkpointer = checkpointer\r\n\r\n    def process_message(self, thread_id: str, message: str, graph_fn: Callable) -> str:\r\n        # Load previous state\r\n        checkpoints = self.checkpointer.list_checkpoints(thread_id)\r\n        if checkpoints:\r\n            state = self.checkpointer.load(checkpoints[-1])\r\n        else:\r\n            state = {\"messages\": [], \"step_count\": 0, \"tool_results\": {}, \"final_answer\": None}\r\n\r\n        # Add new message\r\n        state[\"messages\"].append({\"role\": \"user\", \"content\": message})\r\n\r\n        # Process through graph\r\n        result = graph_fn(state, thread_id=thread_id)\r\n\r\n        # Return last assistant message\r\n        messages = result.get(\"messages\", [])\r\n        for msg in reversed(messages):\r\n            if msg[\"role\"] == \"assistant\":\r\n                return msg[\"content\"]\r\n        return \"No response\"\r\n\r\ndef mock_graph(state: Dict, thread_id: str) -> Dict:\r\n    state[\"messages\"].append({\"role\": \"assistant\", \"content\": f\"Response to your message\"})\r\n    return state\r\n\r\nconv = PersistentConversation(checkpointer)\r\nresponse = conv.process_message(\"thread-1\", \"Hello!\", mock_graph)\r\nprint(f\"Response: {response}\")\n"
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
        children: "class InterruptNode:\r\n    def __init__(self, interrupt_fn: Callable):\r\n        self.interrupt_fn = interrupt_fn\r\n\r\n    def __call__(self, state: Dict) -> Dict:\r\n        user_input = self.interrupt_fn(state)\r\n        return {**state, \"user_input\": user_input, \"interrupted\": True}\r\n\r\nclass HumanInTheLoopGraph:\r\n    def __init__(self, graph: StateGraph, interrupt_node_name: str):\r\n        self.graph = graph.compile()\r\n        self.interrupt_node = interrupt_node_name\r\n        self.paused_states: Dict[str, Dict] = {}\r\n\r\n    def invoke(self, initial_state: Dict, thread_id: str = None) -> Dict:\r\n        tid = thread_id or f\"thread-{id(initial_state)}\"\r\n        state = dict(initial_state)\r\n        current = self.graph.graph.entry_point\r\n\r\n        while current:\r\n            node = self.graph.graph.nodes.get(current)\r\n            if not node:\r\n                break\r\n\r\n            if current == self.interrupt_node:\r\n                # Pause and store state\r\n                self.paused_states[tid] = {\"state\": state, \"next_node\": current}\r\n                return {\"interrupted\": True, \"thread_id\": tid, \"state\": state}\r\n\r\n            state = node.fn(state)\r\n            current = self._get_next_node(current, state)\r\n\r\n        return state\r\n\r\n    def resume(self, thread_id: str, user_input: str) -> Dict:\r\n        paused = self.paused_states.get(thread_id)\r\n        if not paused:\r\n            return {\"error\": \"No paused state found\"}\r\n\r\n        state = paused[\"state\"]\r\n        state[\"user_input\"] = user_input\r\n        state[\"interrupted\"] = False\r\n        current = paused[\"next_node\"]\r\n\r\n        while current:\r\n            node = self.graph.graph.nodes.get(current)\r\n            if not node:\r\n                break\r\n\r\n            if current == self.interrupt_node:\r\n                del self.paused_states[thread_id]\r\n                return {\"error\": \"Re-interrupted\"}\r\n\r\n            state = node.fn(state)\r\n            current = self._get_next_node(current, state)\r\n\r\n        return state\r\n\r\n    def _get_next_node(self, current: str, state: Dict) -> Optional[str]:\r\n        if current in self.graph.graph.conditional_edges:\r\n            cond_fn, mapping = self.graph.graph.conditional_edges[current]\r\n            result = cond_fn(state)\r\n            return mapping.get(result)\r\n        edges = [e for e in self.graph.graph.edges if e.source == current]\r\n        return edges[0].target if edges else None\r\n\r\ndef ask_human(state: Dict) -> Dict:\r\n    print(f\"\\n--- Human Input Needed ---\")\r\n    print(f\"Context: {state.get('messages', [])[-1:]}\")\r\n    user_input = input(\"Your input: \")\r\n    return {**state, \"user_input\": user_input}\r\n\r\ngraph_w_hitl = StateGraph(state_schema=AgentState)\r\ngraph_w_hitl.add_node(\"agent\", lambda s: s)\r\ngraph_w_hitl.add_node(\"human\", InterruptNode(ask_human))\r\ngraph_w_hitl.add_node(\"process\", lambda s: {**s, \"final_answer\": f\"Processed: {s.get('user_input', '')}\"})\r\ngraph_w_hitl.add_edge(\"agent\", \"human\")\r\ngraph_w_hitl.add_edge(\"human\", \"process\")\r\ngraph_w_hitl.set_entry_point(\"agent\")\r\n\r\nhitl = HumanInTheLoopGraph(graph_w_hitl, \"human\")\r\nprint(\"Human-in-the-loop graph ready (requires user input)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "362-approval-workflow",
      children: "3.6.2 Approval Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ApprovalWorkflow:\r\n    def __init__(self):\r\n        self.pending_approvals: Dict[str, Dict] = {}\r\n\r\n    def request_approval(self, action: str, details: Dict, thread_id: str) -> str:\r\n        approval_id = f\"approval-{thread_id}\"\r\n        self.pending_approvals[approval_id] = {\r\n            \"action\": action,\r\n            \"details\": details,\r\n            \"status\": \"pending\",\r\n        }\r\n        return approval_id\r\n\r\n    def approve(self, approval_id: str) -> bool:\r\n        if approval_id in self.pending_approvals:\r\n            self.pending_approvals[approval_id][\"status\"] = \"approved\"\r\n            return True\r\n        return False\r\n\r\n    def reject(self, approval_id: str) -> bool:\r\n        if approval_id in self.pending_approvals:\r\n            self.pending_approvals[approval_id][\"status\"] = \"rejected\"\r\n            return True\r\n        return False\r\n\r\n    def check_status(self, approval_id: str) -> str:\r\n        approval = self.pending_approvals.get(approval_id)\r\n        return approval[\"status\"] if approval else \"not_found\"\r\n\r\napproval = ApprovalWorkflow()\r\napproval_id = approval.request_approval(\"send_email\", {\"to\": \"user@example.com\", \"subject\": \"Test\"}, \"thread-1\")\r\nprint(f\"Approval status: {approval.check_status(approval_id)}\")\r\napproval.approve(approval_id)\r\nprint(f\"After approve: {approval.check_status(approval_id)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LangGraph provides a graph-based framework for building stateful, multi-actor agent applications. A StateGraph consists of nodes (computation steps) connected by edges (control flow). Conditional edges enable dynamic routing based on state. State management uses typed schemas with reducers for.\r\ndeterministic updates. Checkpointing enables conversation persistence, resumability, and debugging. Human-in-the-loop patterns (interrupts, approval workflows) allow agents to pause execution for human input before continuing. LangGraph's structured approach makes complex agent workflows manageable,.\r\ntestable, and observable."
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
            children: "How does LangGraph Basics behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using LangGraph Basics\")."
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
        children: "Review complexity and edge cases for the classic problem in this chapter."
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
        }), " You should memorize this chapter's content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The time complexity of the standard approach to 03 Langgraph Basics is ___. — Answer: O(V+E) for BFS/DFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 03 Langgraph Basics is ___. — Answer: disconnected graph, cycles, negative weights"
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
          }), " Your implementation of this technique is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
        children: "Yao et al. (2022) 'ReAct: Synergizing Reasoning and Acting in Language Models' — the foundational ReAct paper"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shinn et al. (2023) 'Reflexion: Language Agents with Verbal Reinforcement Learning'"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LangGraph documentation: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://langchain-ai.github.io/langgraph",
          children: "https://langchain-ai.github.io/langgraph"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OpenAI function calling guide: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://platform.openai.com/docs/guides/function-calling",
          children: "https://platform.openai.com/docs/guides/function-calling"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Building LLM Powered Applications' by Valentina Alto (Packt) Basics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 13 — builds the foundation for 03 Langgraph Basics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 03 Langgraph Basics with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 03 Langgraph Basics fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 03 Langgraph Basics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 03 Langgraph Basics"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 03 Langgraph Basics?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 03 Langgraph Basics?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 03 Langgraph Basics asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 03 Langgraph Basics?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
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
        children: "Validate all tool inputs with JSON Schema before execution — LLMs can generate malformed arguments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement tool-level permissions — agents should not have access to destructive operations (DELETE, DROP TABLE) without human approval"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log every tool call with inputs and outputs for audit trails"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use sandboxed execution environments for code-running agents (Docker containers, E2B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement prompt injection defenses — malicious tool outputs can hijack agent behavior"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The agent loop is a form of test-time compute scaling — more steps = more reasoning capacity at inference time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tool selection is a classification problem: the LLM assigns probability to each tool given the current context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory compression (summarizing old steps) is analogous to attention truncation in transformers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent success rate improves with better system prompts — treat the system prompt as a hyperparameter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-agent systems parallelize reasoning the same way distributed computing parallelizes computation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "03 Langgraph Basics is like a GPS navigation system"
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
          }), " — this chapter contributes the LangGraph Basics skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
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
          children: "An AI agent is an autonomous system that uses an LLM as its reasoning engine to perceive inputs, decide actions, call tools, observe results, and iterate until a task is complete."
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
          children: "Most common agent mistake: no max_steps limit causes infinite loops. Always set max_steps=10-20 and handle the timeout case explicitly with a fallback response."
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
          children: "Agent complexity: O(k * t) where k=steps taken, t=average tool latency. Each LLM call is O(n^2) attention over context. Total cost grows linearly with steps."
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
          children: "Agents are NOT the right choice when: (1) a single LLM call suffices, (2) deterministic pipelines are required, (3) latency < 500ms is needed, (4) the task has no external tool requirements."
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
          children: "Production agent stack: LangGraph for stateful workflows, OpenAI function calling or Anthropic tool use for structured tool invocation, LangSmith for tracing and debugging."
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangGraph"
        }), " — stateful multi-step agent framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangChain AgentExecutor"
        }), " — ReAct agent implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OpenAI Assistants API"
        }), " — managed agent with code interpreter and file search"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangSmith"
        }), " — agent tracing, debugging, and evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anthropic tool use"
        }), " — Claude's native function calling interface Basics"]
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
        }), ": Add structured logging at each stage of the 03 Langgraph Basics pipeline to identify exactly where the failure occurs."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_03_langgraph_basics(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 03 Langgraph Basics.\r\n\r\n    Key concepts: vertices, edges, BFS, DFS, shortest path\r\n    Complexity: O(V+E) for BFS/DFS\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 03 Langgraph Basics here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
          children: "Devin"
        }), " (Cognition AI) uses a coding agent that writes, runs, and debugs code autonomously"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cursor"
        }), " uses agents to refactor entire codebases based on natural language instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Salesforce Einstein"
        }), " uses agents to autonomously update CRM records and draft emails"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Harvey AI"
        }), " uses legal agents that research case law, draft contracts, and flag risks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": always mention the ReAct loop (Thought → Action → Observation) and explain how you'd add observability with LangSmith traces"]
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