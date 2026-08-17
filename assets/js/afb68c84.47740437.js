"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[92869],{

/***/ 81250
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_04_phase_3_agents_langgraph_mcp_md_afb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-04-phase-3-agents-langgraph-mcp-md-afb.json
const site_docs_courses_ai_agent_engineer_04_phase_3_agents_langgraph_mcp_md_afb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/04-phase3-agents-langgraph-mcp","title":"Phase 3 — AI Agents: LangGraph, CrewAI, MCP","description":"Duration: Weeks 6-8, ~35 hours","source":"@site/docs/courses/ai-agent-engineer/04-phase3-agents-langgraph-mcp.md","sourceDirName":"courses/ai-agent-engineer","slug":"/ai-agent-engineer/04-phase3-agents-langgraph-mcp","permalink":"/ai-engineering-journey/ai-agent-engineer/04-phase3-agents-langgraph-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"04-phase3-agents-langgraph-mcp","slug":"/ai-agent-engineer/04-phase3-agents-langgraph-mcp","title":"Phase 3 — AI Agents: LangGraph, CrewAI, MCP","sidebar_label":"Phase 3 — AI Agents: LangGraph, CrewAI, MCP","sidebar_position":5},"sidebar":"course-ai-agent-engineer","previous":{"title":"Phase 2 — LLM Fundamentals + RAG Theory","permalink":"/ai-engineering-journey/ai-agent-engineer/03-phase2-llm-rag-theory"},"next":{"title":"Phase 4 — Production Hardening","permalink":"/ai-engineering-journey/ai-agent-engineer/05-phase4-production-hardening"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/04-phase3-agents-langgraph-mcp.md


const frontMatter = {
	id: '04-phase3-agents-langgraph-mcp',
	slug: '/ai-agent-engineer/04-phase3-agents-langgraph-mcp',
	title: 'Phase 3 — AI Agents: LangGraph, CrewAI, MCP',
	sidebar_label: 'Phase 3 — AI Agents: LangGraph, CrewAI, MCP',
	sidebar_position: 5
};
const contentTitle = 'Phase 3 — AI Agents: LangGraph, CrewAI, MCP';

const assets = {

};



const toc = [{
  "value": "Topic Table",
  "id": "topic-table",
  "level": 2
}, {
  "value": "3.1 The ReAct Pattern",
  "id": "31-the-react-pattern",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise",
  "level": 3
}, {
  "value": "3.2 Tool Calling Deep-Dive",
  "id": "32-tool-calling-deep-dive",
  "level": 2
}, {
  "value": "Nested parameter schemas",
  "id": "nested-parameter-schemas",
  "level": 3
}, {
  "value": "How the model decides which tool to call",
  "id": "how-the-model-decides-which-tool-to-call",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-1",
  "level": 3
}, {
  "value": "3.3 LangGraph: StateGraph, Nodes, Edges",
  "id": "33-langgraph-stategraph-nodes-edges",
  "level": 2
}, {
  "value": "State definition",
  "id": "state-definition",
  "level": 3
}, {
  "value": "Node implementation",
  "id": "node-implementation",
  "level": 3
}, {
  "value": "Graph construction",
  "id": "graph-construction",
  "level": 3
}, {
  "value": "Running the graph",
  "id": "running-the-graph",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-2",
  "level": 3
}, {
  "value": "3.4 Conditional Edges",
  "id": "34-conditional-edges",
  "level": 2
}, {
  "value": "Routing based on output quality",
  "id": "routing-based-on-output-quality",
  "level": 3
}, {
  "value": "Why conditional edges matter for your portfolio",
  "id": "why-conditional-edges-matter-for-your-portfolio",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-3",
  "level": 3
}, {
  "value": "3.5 LangGraph Persistence (Checkpointer)",
  "id": "35-langgraph-persistence-checkpointer",
  "level": 2
}, {
  "value": "Why this matters for media pipelines",
  "id": "why-this-matters-for-media-pipelines",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-4",
  "level": 3
}, {
  "value": "3.6 Human-in-the-Loop (Interrupt/Resume)",
  "id": "36-human-in-the-loop-interruptresume",
  "level": 2
}, {
  "value": "Exercise",
  "id": "exercise-5",
  "level": 3
}, {
  "value": "3.7 CrewAI: Agents, Tasks, Crews",
  "id": "37-crewai-agents-tasks-crews",
  "level": 2
}, {
  "value": "Core concepts",
  "id": "core-concepts",
  "level": 3
}, {
  "value": "Tasks",
  "id": "tasks",
  "level": 3
}, {
  "value": "Crew execution",
  "id": "crew-execution",
  "level": 3
}, {
  "value": "Sequential vs Hierarchical",
  "id": "sequential-vs-hierarchical",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-6",
  "level": 3
}, {
  "value": "3.8 MCP Protocol Spec",
  "id": "38-mcp-protocol-spec",
  "level": 2
}, {
  "value": "The 3 Primitives",
  "id": "the-3-primitives",
  "level": 3
}, {
  "value": "Message types",
  "id": "message-types",
  "level": 3
}, {
  "value": "Your existing MCP server (<code>apex_memory_mcp.py</code>)",
  "id": "your-existing-mcp-server-apex_memory_mcppy",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-7",
  "level": 3
}, {
  "value": "3.9 Building an MCP Client",
  "id": "39-building-an-mcp-client",
  "level": 2
}, {
  "value": "Integration: MCP client as a LangGraph tool",
  "id": "integration-mcp-client-as-a-langgraph-tool",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-8",
  "level": 3
}, {
  "value": "3.10 Agent Memory Patterns",
  "id": "310-agent-memory-patterns",
  "level": 2
}, {
  "value": "Short-term memory (conversation buffer)",
  "id": "short-term-memory-conversation-buffer",
  "level": 3
}, {
  "value": "Long-term memory (vector store)",
  "id": "long-term-memory-vector-store",
  "level": 3
}, {
  "value": "What your system is missing",
  "id": "what-your-system-is-missing",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-9",
  "level": 3
}, {
  "value": "3.11 Multi-Agent Orchestration Patterns",
  "id": "311-multi-agent-orchestration-patterns",
  "level": 2
}, {
  "value": "Supervisor/Worker",
  "id": "supervisorworker",
  "level": 3
}, {
  "value": "Peer-to-Peer",
  "id": "peer-to-peer",
  "level": 3
}, {
  "value": "Applied to a CRM assistant",
  "id": "applied-to-a-crm-assistant",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-10",
  "level": 3
}, {
  "value": "3.12 Agent Evaluation",
  "id": "312-agent-evaluation",
  "level": 2
}, {
  "value": "Evaluation method 1: Checklist assertions",
  "id": "evaluation-method-1-checklist-assertions",
  "level": 3
}, {
  "value": "Evaluation method 2: Expected trajectory",
  "id": "evaluation-method-2-expected-trajectory",
  "level": 3
}, {
  "value": "Evaluation method 3: LLM-as-judge",
  "id": "evaluation-method-3-llm-as-judge",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-11",
  "level": 3
}, {
  "value": "3.13 Cost and Latency in Multi-Step Agent Chains",
  "id": "313-cost-and-latency-in-multi-step-agent-chains",
  "level": 2
}, {
  "value": "Why costs add up fast",
  "id": "why-costs-add-up-fast",
  "level": 3
}, {
  "value": "Optimization strategies",
  "id": "optimization-strategies",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-12",
  "level": 3
}, {
  "value": "Phase 3 Project: LangGraph Purvanchal Flow Studio",
  "id": "phase-3-project-langgraph-purvanchal-flow-studio",
  "level": 2
}, {
  "value": "What you&#39;re building",
  "id": "what-youre-building",
  "level": 3
}, {
  "value": "State graph design",
  "id": "state-graph-design",
  "level": 3
}, {
  "value": "Node implementations",
  "id": "node-implementations",
  "level": 3
}, {
  "value": "Project structure",
  "id": "project-structure",
  "level": 3
}, {
  "value": "n8n vs LangGraph comparison write-up",
  "id": "n8n-vs-langgraph-comparison-write-up",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-13",
  "level": 3
}, {
  "value": "3.14 OpenAI Agents SDK",
  "id": "314-openai-agents-sdk",
  "level": 2
}, {
  "value": "Key concepts",
  "id": "key-concepts",
  "level": 3
}, {
  "value": "Basic agent",
  "id": "basic-agent",
  "level": 3
}, {
  "value": "Multi-agent with handoffs",
  "id": "multi-agent-with-handoffs",
  "level": 3
}, {
  "value": "Comparison to LangGraph",
  "id": "comparison-to-langgraph",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-14",
  "level": 3
}, {
  "value": "3.15 Advanced MCP Server Development",
  "id": "315-advanced-mcp-server-development",
  "level": 2
}, {
  "value": "MCP recap: 3 primitives",
  "id": "mcp-recap-3-primitives",
  "level": 3
}, {
  "value": "Adding resources",
  "id": "adding-resources",
  "level": 3
}, {
  "value": "Adding prompt templates",
  "id": "adding-prompt-templates",
  "level": 3
}, {
  "value": "Dynamic resources with URI templates",
  "id": "dynamic-resources-with-uri-templates",
  "level": 3
}, {
  "value": "Testing your server",
  "id": "testing-your-server",
  "level": 3
}, {
  "value": "Exercise",
  "id": "exercise-15",
  "level": 3
}, {
  "value": "Phase 3 Done Checkpoint",
  "id": "phase-3-done-checkpoint",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "phase-3--ai-agents-langgraph-crewai-mcp",
        children: "Phase 3 — AI Agents: LangGraph, CrewAI, MCP"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " Weeks 6-8, ~35 hours\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Build agent state machines with LangGraph, multi-agent crews with CrewAI, and MCP clients that connect LLMs to tools. Rebuild your Purvanchal Flow Studio orchestration layer from n8n to LangGraph."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "topic-table",
      children: "Topic Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subtopic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hours"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Done checkpoint"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReAct pattern (think ? act ? observe ? repeat)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain agent loop vs single LLM call in one sentence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool calling deep-dive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write a tool schema with nested object parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LangGraph: StateGraph, nodes, edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a 3-node linear graph from scratch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional edges and routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write a conditional edge based on a custom state field"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LangGraph persistence (checkpointer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kill a graph mid-execution and resume it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-in-the-loop patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Describe a real use case for interrupt/resume"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CrewAI: agents, tasks, crews, processes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a 2-agent crew (researcher + writer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MCP protocol spec — 3 primitives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map tools/resources/prompts to your existing MCP server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building an MCP client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write a client that connects to your memory server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent memory patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguish short-term vs long-term memory in your system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-agent orchestration patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sketch a CRM assistant with 3 agents, justify the pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Describe 2 concrete ways to test an agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost/latency in multi-step agent chains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimate per-run cost of a 4-step agent chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAI Agents SDK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build an agent using OpenAI Agents SDK with built-in tools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced MCP server development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add resources + prompts to your MCP server, not just tools"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-the-react-pattern",
      children: "3.1 The ReAct Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The key insight:"
      }), " A single LLM call returns text. An agent loops: think ? act ? observe ? repeat."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User: \"Book a meeting with John tomorrow at 2pm\"\r\n\r\nAgent loop iteration 1:\r\n  Think: \"I need to check John's calendar first\"\r\n  Act: [calls check_calendar(\"John\", \"2026-06-25\")]\r\n  Observe: \"John is free at 2pm\"\r\n\r\nAgent loop iteration 2:\r\n  Think: \"John is free, I should book the slot\"\r\n  Act: [calls create_event(\"John\", \"2026-06-25\", \"14:00\")]\r\n  Observe: \"Event created successfully\"\r\n\r\nAgent loop iteration 3:\r\n  Think: \"The event is booked. I should tell the user.\"\r\n  Act: [returns response to user]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Minimal ReAct loop implementation\r\ndef react_loop(tools: dict[str, callable], user_input: str, max_iterations: int = 5) -> str:\r\n    messages = [{\"role\": \"user\", \"content\": user_input}]\r\n\r\n    for i in range(max_iterations):\r\n        response = client.chat.completions.create(\r\n            model=\"gpt-4\",\r\n            messages=messages,\r\n            tools=[t[\"spec\"] for t in tools.values()],\r\n        )\r\n        msg = response.choices[0].message\r\n\r\n        if msg.content and not msg.tool_calls:\r\n            return msg.content  # Final answer\r\n\r\n        messages.append(msg)\r\n        for tc in msg.tool_calls:\r\n            result = tools[tc.function.name][\"fn\"](**json.loads(tc.function.arguments))\r\n            messages.append({\r\n                \"role\": \"tool\",\r\n                \"tool_call_id\": tc.id,\r\n                \"content\": str(result),\r\n            })\r\n\r\n    return \"Max iterations reached\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explain the difference between a single LLM call and an agent loop in one sentence that a non-technical client would understand. Example: \"A single call answers your question. An agent checks, tries, fails, retries, and then answers — like a person researching instead of guessing.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-tool-calling-deep-dive",
      children: "3.2 Tool Calling Deep-Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nested-parameter-schemas",
      children: "Nested parameter schemas"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Tool that creates a booking — nested address object\r\ncreate_booking_schema = {\r\n    \"type\": \"function\",\r\n    \"function\": {\r\n        \"name\": \"create_booking\",\r\n        \"description\": \"Create a booking with customer details\",\r\n        \"parameters\": {\r\n            \"type\": \"object\",\r\n            \"properties\": {\r\n                \"customer\": {\r\n                    \"type\": \"object\",\r\n                    \"properties\": {\r\n                        \"name\": {\"type\": \"string\"},\r\n                        \"phone\": {\"type\": \"string\"},\r\n                        \"email\": {\"type\": \"string\", \"format\": \"email\"},\r\n                    },\r\n                    \"required\": [\"name\", \"phone\"],\r\n                },\r\n                \"booking\": {\r\n                    \"type\": \"object\",\r\n                    \"properties\": {\r\n                        \"property_id\": {\"type\": \"integer\"},\r\n                        \"amount\": {\"type\": \"number\"},\r\n                        \"payment_method\": {\r\n                            \"type\": \"string\",\r\n                            \"enum\": [\"upi\", \"cash\", \"card\", \"cheque\"],\r\n                        },\r\n                    },\r\n                    \"required\": [\"property_id\", \"amount\"],\r\n                },\r\n            },\r\n            \"required\": [\"customer\", \"booking\"],\r\n        },\r\n    },\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-the-model-decides-which-tool-to-call",
      children: "How the model decides which tool to call"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The model reads the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "description"
      }), " field and the parameter names/types to decide. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Clear descriptions are critical"
      }), " — the function name and parameter descriptions are what the model sees, not your code comments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Bad — model won't understand when to call this\r\ntool_spec = {\r\n    \"name\": \"process\",\r\n    \"parameters\": {\"type\": \"object\", \"properties\": {\"a\": {\"type\": \"string\"}, \"b\": {\"type\": \"integer\"}}},\r\n}\r\n\r\n# Good — model can route correctly\r\ntool_spec = {\r\n    \"name\": \"search_knowledge_base\",\r\n    \"description\": \"Search the vector database for relevant documents\",\r\n    \"parameters\": {\r\n        \"type\": \"object\",\r\n        \"properties\": {\r\n            \"query\": {\"description\": \"The search query\"},\r\n            \"top_k\": {\"description\": \"Number of results to return\"},\r\n        },\r\n    },\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a tool schema with 3 levels of nesting (e.g., a booking tool where each booking has an array of payment installments, each with date and amount). Hand-write it, don't generate it."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-langgraph-stategraph-nodes-edges",
      children: "3.3 LangGraph: StateGraph, Nodes, Edges"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "state-definition",
      children: "State definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import TypedDict, Optional, Annotated\r\nfrom langgraph.graph import StateGraph, END\r\nfrom langgraph.checkpoint.memory import MemorySaver\r\n\r\nclass PipelineState(TypedDict):\r\n    topic: str\r\n    lyrics: Optional[str]\r\n    audio_path: Optional[str]\r\n    vocal_path: Optional[str]\r\n    video_clips: list[str]\r\n    final_video_path: Optional[str]\r\n    error: Optional[str]\r\n    retry_count: int\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "node-implementation",
      children: "Node implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each node is a function that takes state and returns a partial state update:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def generate_lyrics_node(state: PipelineState) -> dict:\r\n    \"\"\"Generate Bhojpuri lyrics from the topic.\"\"\"\r\n    response = call_llm(\r\n        f\"Write Bhojpuri song lyrics about {state['topic']}. \"\r\n        f\"2 verses, 1 chorus, Bhojpuri language.\"\r\n    )\r\n    return {\"lyrics\": response}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "graph-construction",
      children: "Graph construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "graph = StateGraph(PipelineState)\r\n\r\n# Add nodes\r\ngraph.add_node(\"generate_lyrics\", generate_lyrics_node)\r\ngraph.add_node(\"generate_music\", ace_step_node)\r\ngraph.add_node(\"generate_vocals\", coqui_xtts_node)\r\ngraph.add_node(\"source_clips\", moneyprinterturbo_node)\r\ngraph.add_node(\"compose_video\", ffmpeg_compose_node)\r\ngraph.add_node(\"handle_failure\", failure_recovery_node)\r\n\r\n# Set entry point\r\ngraph.set_entry_point(\"generate_lyrics\")\r\n\r\n# Add edges\r\ngraph.add_edge(\"generate_lyrics\", \"generate_music\")\r\ngraph.add_edge(\"generate_music\", \"generate_vocals\")\r\ngraph.add_edge(\"generate_vocals\", \"source_clips\")\r\ngraph.add_edge(\"source_clips\", \"compose_video\")\r\n\r\n# Conditional edge — the part n8n can't express cleanly\r\ndef should_retry(state: PipelineState) -> str:\r\n    if state.get(\"error\") and state[\"retry_count\"] < 3:\r\n        return \"retry\"\r\n    return \"done\"\r\n\r\ngraph.add_conditional_edges(\r\n    \"compose_video\",\r\n    should_retry,\r\n    {\"retry\": \"handle_failure\", \"done\": END},\r\n)\r\ngraph.add_edge(\"handle_failure\", \"generate_music\")  # Retry from music stage\r\n\r\n# Compile\r\ncheckpointer = MemorySaver()\r\napp = graph.compile(checkpointer=checkpointer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "running-the-graph",
      children: "Running the graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Initial state\r\ninitial = {\r\n    \"topic\": \"Bhojpuri village life\",\r\n    \"lyrics\": None,\r\n    \"audio_path\": None,\r\n    \"vocal_path\": None,\r\n    \"video_clips\": [],\r\n    \"final_video_path\": None,\r\n    \"error\": None,\r\n    \"retry_count\": 0,\r\n}\r\n\r\n# Run with a thread_id for checkpointing\r\nresult = app.invoke(initial, config={\"configurable\": {\"thread_id\": \"purvanchal-001\"}})\r\nprint(result[\"final_video_path\"])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a throwaway 3-node linear graph — no external calls, just print statements that simulate work. Confirm the graph runs in order. Then add a conditional edge. Then break a node and confirm the retry mechanism triggers. Do this before touching the real Purvanchal pipeline."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-conditional-edges",
      children: "3.4 Conditional Edges"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Conditional edges are where LangGraph separates from visual orchestrators. n8n has \"IF\" nodes. LangGraph has ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "functions"
      }), " that inspect state and return the next node name."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "routing-based-on-output-quality",
      children: "Routing based on output quality"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def route_by_quality(state: PipelineState) -> str:\r\n    \"\"\"Route based on whether lyrics meet quality threshold.\"\"\"\r\n    lyrics = state.get(\"lyrics\", \"\")\r\n    if len(lyrics) < 100:  # Too short, regenerate\r\n        return \"regenerate\"\r\n    if \"error\" in lyrics.lower():\r\n        return \"handle_failure\"\r\n    return \"proceed\"\r\n\r\n# In graph construction:\r\ngraph.add_conditional_edges(\r\n    \"generate_lyrics\",\r\n    route_by_quality,\r\n    {\"regenerate\": \"generate_lyrics\", \"proceed\": \"generate_music\", \"handle_failure\": \"handle_failure\"},\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-conditional-edges-matter-for-your-portfolio",
      children: "Why conditional edges matter for your portfolio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Visual examples: generic tutorials show ", (0,jsx_runtime.jsx)(_components.code, {
        children: "router.add_conditional_edges(\"classify\", ...)"
      }), ". Your pipeline shows ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "real business logic"
      }), " — retry based on output length, quality checks, failure recovery. That's the difference between \"I read the docs\" and \"I built in production.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a conditional edge function that routes based on a custom state field (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "output_quality_score > 0.7"
      }), "). Wire it into a 2-node graph where one path is \"retry\" and the other is \"done.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-langgraph-persistence-checkpointer",
      children: "3.5 LangGraph Persistence (Checkpointer)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-this-matters-for-media-pipelines",
      children: "Why this matters for media pipelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your Purvanchal pipeline generates music files that take 2-5 minutes each. If the server crashes at \"compose_video,\" n8n restarts from the beginning. With LangGraph's checkpointer, it resumes from \"compose_video\" — 4 nodes of work saved."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from langgraph.checkpoint.memory import MemorySaver\r\nfrom langgraph.checkpoint.sqlite import SqliteSaver\r\n\r\n# In-memory (for prototyping)\r\ncheckpointer = MemorySaver()\r\n\r\n# SQLite (for production — survives server restart)\r\ncheckpointer = SqliteSaver.from_conn_string(\"checkpoints.db\")\r\n\r\napp = graph.compile(checkpointer=checkpointer)\r\n\r\n# Resume a crashed pipeline\r\nprevious_state = app.get_state(config={\"configurable\": {\"thread_id\": \"purvanchal-001\"}})\r\nprint(f\"Pipeline was at node: {previous_state.next}\")\r\nresult = app.invoke(None, config={\"configurable\": {\"thread_id\": \"purvanchal-001\"}})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start a graph run, kill it mid-execution (Ctrl+C), then resume it using the same thread_id. Confirm the state survives and the graph continues from where it stopped."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-human-in-the-loop-interruptresume",
      children: "3.6 Human-in-the-Loop (Interrupt/Resume)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some pipeline stages need approval before proceeding — spending money on API calls, publishing content, approving generated lyrics."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from langgraph.constants import interrupt\r\n\r\ndef generate_lyrics_node(state: PipelineState) -> dict:\r\n    lyrics = call_llm(...)\r\n    # Pause and ask for human approval\r\n    approved = interrupt({\"lyrics\": lyrics, \"action\": \"approve_lyrics\"})\r\n    if not approved:\r\n        return {\"error\": \"Human rejected lyrics\", \"retry_count\": state[\"retry_count\"] + 1}\r\n    return {\"lyrics\": lyrics}\r\n\r\n# Human approves later:\r\napp.invoke(\r\n    None,\r\n    config={\r\n        \"configurable\": {\"thread_id\": \"purvanchal-002\"},\r\n        \"interrupt_after\": [\"generate_lyrics\"],\r\n    },\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Describe one real use case from your own work where this pattern would prevent a costly automated mistake. Write it down — it's an interview talking point."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "37-crewai-agents-tasks-crews",
      children: "3.7 CrewAI: Agents, Tasks, Crews"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-concepts",
      children: "Core concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from crewai import Agent, Task, Crew, Process\r\n\r\nresearcher = Agent(\r\n    role=\"Research Analyst\",\r\n    goal=\"Find relevant information about the given topic\",\r\n    backstory=\"Expert researcher who finds accurate, relevant information.\",\r\n    tools=[search_tool, fetch_webpage_tool],\r\n    verbose=True,\r\n)\r\n\r\nlyricist = Agent(\r\n    role=\"Bhojpuri Lyricist\",\r\n    goal=\"Write authentic Bhojpuri lyrics based on research\",\r\n    backstory=\"You are a poet specializing in Bhojpuri folk music.\",\r\n    tools=[],\r\n    verbose=True,\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tasks",
      children: "Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "research_task = Task(\r\n    description=\"Research the topic '{topic}' and provide key themes and vocabulary.\",\r\n    expected_output=\"3-5 key themes with relevant Bhojpuri phrases\",\r\n    agent=researcher,\r\n)\r\n\r\nlyrics_task = Task(\r\n    description=\"Write 2 verses and 1 chorus in Bhojpuri based on the research.\",\r\n    expected_output=\"Complete lyrics with verse-chorus structure\",\r\n    agent=lyricist,\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "crew-execution",
      children: "Crew execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "crew = Crew(\r\n    agents=[researcher, lyricist],\r\n    tasks=[research_task, lyrics_task],\r\n    process=Process.sequential,  # or Process.hierarchical\r\n    verbose=True,\r\n)\r\n\r\nresult = crew.kickoff(inputs={\"topic\": \"Bhojpuri village life\"})\r\nprint(result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sequential-vs-hierarchical",
      children: "Sequential vs Hierarchical"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sequential"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple pipelines, clear dependency order (research ? write ? publish)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hierarchical"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex tasks where a manager agent decomposes work and delegates"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a 2-agent throwaway crew (researcher + writer) without looking at docs. Run it on a topic of your choice. This is the CrewAI equivalent of the \"3-node linear graph\" exercise from LangGraph."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "38-mcp-protocol-spec",
      children: "3.8 MCP Protocol Spec"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-3-primitives",
      children: "The 3 Primitives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Primitive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it does"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tools"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actions the LLM can invoke (function calling)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like an API endpoint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data the LLM can read (files, DB records)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like a GET endpoint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prompts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-built prompt templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like a route with a view"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "message-types",
      children: "Message types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client ? Server:\r\n  - initialize (handshake)\r\n  - tools/list\r\n  - tools/call\r\n  - resources/list\r\n  - resources/read\r\n  - prompts/list\r\n  - prompts/get\r\n\r\nServer ? Client:\r\n  - initialize.result\r\n  - tools.list.result\r\n  - tools.call.result\r\n  - resources.list.result\r\n  - resources.read.result\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "your-existing-mcp-server-apex_memory_mcppy",
      children: ["Your existing MCP server (", (0,jsx_runtime.jsx)(_components.code, {
        children: "apex_memory_mcp.py"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# You already have something like this:\r\nfrom mcp import Server\r\n\r\nserver = Server(\"memory-server\")\r\n\r\n@server.tool(\"remember\")\r\nasync def remember(key: str, value: str):\r\n    await chroma_client.add(key, value)\r\n\r\n@server.tool(\"recall\")\r\nasync def recall(query: str) -> str:\r\n    results = await chroma_client.search(query)\r\n    return results[0][\"text\"] if results else \"No memory found\"\r\n\r\n@server.resource(\"memory://stats\")\r\nasync def memory_stats(uri: str) -> str:\r\n    return json.dumps({\"count\": await chroma_client.count()})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map your existing MCP server against the 3 primitives. Which tools does it expose? Which resources? Which prompts? Write this mapping down — you'll use it when discussing MCP in interviews."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "39-building-an-mcp-client",
      children: "3.9 Building an MCP Client"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You've built an MCP ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "server"
      }), " (your memory server). Now build a client that connects to it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from mcp import ClientSession\r\nfrom mcp.client.stdio import stdio_client\r\n\r\nasync def main():\r\n    async with stdio_client([\"python\", \"apex_memory_mcp.py\"]) as (read, write):\r\n        async with ClientSession(read, write) as session:\r\n            # List tools\r\n            tools = await session.list_tools()\r\n            for tool in tools.tools:\r\n                print(f\"Tool: {tool.name} — {tool.description}\")\r\n\r\n            # Call a tool\r\n            result = await session.call_tool(\r\n                \"recall\",\r\n                {\"query\": \"What did I work on yesterday?\"}\r\n            )\r\n            print(f\"Result: {result.content[0].text}\")\r\n\r\nasyncio.run(main())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-mcp-client-as-a-langgraph-tool",
      children: "Integration: MCP client as a LangGraph tool"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from langgraph.prebuilt import ToolNode\r\n\r\nasync def recall_memory(query: str) -> str:\r\n    async with stdio_client([\"python\", \"apex_memory_mcp.py\"]) as (read, write):\r\n        async with ClientSession(read, write) as session:\r\n            result = await session.call_tool(\"recall\", {\"query\": query})\r\n            return result.content[0].text\r\n\r\n# Use in LangGraph\r\nmemory_tool = ToolNode([recall_memory])\r\ngraph.add_node(\"query_memory\", memory_tool)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a minimal MCP client that connects to your existing memory server and calls one tool (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "recall"
      }), "). Confirm it returns data from your ChromaDB. This single integration demonstrates MCP client + LangGraph + your existing infra in one artifact."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "310-agent-memory-patterns",
      children: "3.10 Agent Memory Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "short-term-memory-conversation-buffer",
      children: "Short-term memory (conversation buffer)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stays in the context window. Automatically managed by the LLM API:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "messages = [\r\n    {\"role\": \"system\", \"content\": system_prompt},\r\n    {\"role\": \"assistant\", \"content\": \"I found the membership fee is ?12,000/year.\"},\r\n    {\"role\": \"user\", \"content\": \"What about the joining fee?\"},\r\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "long-term-memory-vector-store",
      children: "Long-term memory (vector store)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your ChromaDB server. Explicit retrieval needed:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def agent_with_memory(user_query: str, user_id: str):\r\n    # Check long-term memory\r\n    relevant_memories = recall_from_chroma(user_id, user_query)\r\n    system_prompt = f\"\"\"Previous context:\r\n    {relevant_memories}\r\n    Answer the user's question based on context and conversation.\"\"\"\r\n    \r\n    # Short-term memory in messages\r\n    messages = [\r\n        {\"role\": \"system\", \"content\": system_prompt},\r\n        {\"role\": \"user\", \"content\": user_query},\r\n    ]\r\n    return call_llm(messages)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-your-system-is-missing",
      children: "What your system is missing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You have long-term memory (ChromaDB server). You're likely missing:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conversation summaries"
        }), " — after N turns, summarize and store in memory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Entity extraction"
        }), " — extract key entities (project names, dates, decisions) and store them as structured memory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Identify what short-term memory your current agent pipelines are missing. Add a simple conversation summary step: after every 5 turns, tell the LLM \"summarize this conversation\" and store the summary in ChromaDB."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "311-multi-agent-orchestration-patterns",
      children: "3.11 Multi-Agent Orchestration Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "supervisorworker",
      children: "Supervisor/Worker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Supervisor agent --? Sales agent\r\n                 --? Follow-up agent\r\n                 --? Report agent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Supervisor delegates tasks. Workers report back. Supervisor decides next action."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best for:"
      }), " Complex workflows where a central coordinator maintains context."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "peer-to-peer",
      children: "Peer-to-Peer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sales agent ?--? Follow-up agent\r\n     ¦\r\nFollow-up agent ?--? Report agent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agents communicate directly. No central coordinator."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best for:"
      }), " Independent agents that share information but don't need tight coordination."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applied-to-a-crm-assistant",
      children: "Applied to a CRM assistant"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Supervisor\r\n  +-- Sales Agent: handles inquiries, booking requests\r\n  +-- Follow-up Agent: sends reminders, follow-ups\r\n  +-- Report Agent: generates daily/weekly reports\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why supervisor/worker fits here:"
      }), " The Supervisor maintains customer context. Sales doesn't need to know about reports. Report doesn't need to know about active sales."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sketch a 3-agent multi-agent system for one of your own projects (ApexERP, Purvanchal, or the CRM example). Draw the agents, the communication flow, and justify the pattern choice."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "312-agent-evaluation",
      children: "3.12 Agent Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Non-deterministic output makes testing hard. Traditional assertions don't work for agent behavior."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "evaluation-method-1-checklist-assertions",
      children: "Evaluation method 1: Checklist assertions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def test_lyrics_generation():\r\n    topic = \"village life\"\r\n    result = generate_lyrics(topic)\r\n    \r\n    assert \"Bhojpuri\" in result[\"language\"] or len(result[\"verses\"]) > 0\r\n    \r\n# LangSmith equivalent: define evaluator per step\r\nfrom langsmith import traceable\r\n\r\n@traceable\r\ndef evaluate_lyrics(output: dict) -> int:\r\n    \"\"\"Score 1-5 based on output criteria.\"\"\"\r\n    score = 5\r\n    if len(output.get(\"lyrics\", \"\")) < 100:\r\n        score -= 2\r\n    if \"error\" in output.get(\"lyrics\", \"\").lower():\r\n        score -= 3\r\n    return score\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "evaluation-method-2-expected-trajectory",
      children: "Evaluation method 2: Expected trajectory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compare the agent's actual tool-call sequence against an expected sequence:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "expected_sequence = [\"search_kb\", \"generate_answer\"]\r\nactual_sequence = [call[\"name\"] for call in trace.calls]\r\n\r\nassert actual_sequence[:2] == expected_sequence\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "evaluation-method-3-llm-as-judge",
      children: "Evaluation method 3: LLM-as-judge"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def evaluate_answer(question: str, answer: str, context: str) -> dict:\r\n    prompt = f\"\"\"\r\n    Question: {question}\r\n    Context: {context}\r\n    Answer: {answer}\r\n    \r\n    Rate the answer on:\r\n    1. Accuracy (1-5): Is it factually correct based on the context?\r\n    2. Completeness (1-5): Does it fully answer the question?\r\n    3. Grounding (1-5): Does it cite sources appropriately?\r\n    \"\"\"\r\n    return call_llm_as_judge(prompt)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-11",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write 2 concrete evaluation checks for one of your agents. Don't just run it and say \"looks right.\" Write an assertion, a trajectory check, or an LLM-as-judge prompt."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "313-cost-and-latency-in-multi-step-agent-chains",
      children: "3.13 Cost and Latency in Multi-Step Agent Chains"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-costs-add-up-fast",
      children: "Why costs add up fast"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input tokens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output tokens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generate lyrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPT-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.009 + $0.012 = $0.021"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generate music API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACE-Step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.005 (API call)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPT-4-mini"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0.00075 + $0.0003 = $0.001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total per pipeline run"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$0.03"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At 100 pipeline runs/day: $3/day, $90/month. At 1000 runs/day: $30/day, $900/month."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optimization-strategies",
      children: "Optimization strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# 1. Use cheaper models for intermediate steps\r\ndef evaluate_lyrics(lyrics: str) -> bool:\r\n    response = openai.chat.completions.create(\r\n        model=\"gpt-4o-mini\",  # Cheaper than gpt-4\r\n        messages=[{\"role\": \"user\", \"content\": f\"Rate these lyrics: {lyrics}\"}],\r\n        max_tokens=50,\r\n    )\r\n    return \"good\" in response.choices[0].message.content.lower()\r\n\r\n# 2. Cache repeating operations\r\ncache = {}\r\n\r\ndef get_embedding(text: str) -> list[float]:\r\n    if text in cache:\r\n        return cache[text]\r\n    embedding = openai.embeddings.create(input=text, model=\"text-embedding-3-small\")\r\n    cache[text] = embedding.data[0].embedding\r\n    return cache[text]\r\n\r\n# 3. Batch small LLM calls\r\n# Instead of 3 separate calls, combine into one\r\nprompt = \"\"\"Analyze these 3 items and return JSON:\r\nItem 1: {item1}\r\nItem 2: {item2}\r\nItem 3: {item3}\r\nReturn: {{\"analysis\": [item1_score, item2_score, item3_score]}}\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-12",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Estimate the per-run cost of a 4-step agent chain using your actual models and typical token counts. Write down: per-step cost, per-run cost, daily cost at 50 runs. This calculation is a direct interview question."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-3-project-langgraph-purvanchal-flow-studio",
      children: "Phase 3 Project: LangGraph Purvanchal Flow Studio"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-youre-building",
      children: "What you're building"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Replace the n8n orchestration of your Bhojpuri content pipeline with a LangGraph state machine."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "state-graph-design",
      children: "State graph design"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "generate_lyrics --? generate_music --? generate_vocals --? source_clips --? compose_video\r\n                                                                                ¦\r\n                                                                          +-----------+\r\n                                                                          ¦           ¦\r\n                                                                      success       failure\r\n                                                                          ¦       (retry < 3)\r\n                                                                          ¦           ¦\r\n                                                                         END    handle_failure --? generate_music (retry)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "node-implementations",
      children: "Node implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each node wraps an existing external tool call:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def ace_step_node(state: PipelineState) -> dict:\r\n    \"\"\"Generate instrumental music from lyrics using ACE-Step API.\"\"\"\r\n    try:\r\n        response = requests.post(\r\n            ACE_STEP_URL,\r\n            json={\"lyrics\": state[\"lyrics\"], \"style\": \"bhojpuri-folk\"},\r\n            headers={\"Authorization\": f\"Bearer {settings.ace_step_key}\"},\r\n            timeout=300,  # 5 minute timeout for music generation\r\n        )\r\n        response.raise_for_status()\r\n        audio_path = save_audio(response.content)\r\n        return {\"audio_path\": audio_path, \"error\": None}\r\n    except Exception as e:\r\n        return {\r\n            \"error\": f\"ACE-Step failed: {e}\",\r\n            \"retry_count\": state[\"retry_count\"] + 1,\r\n        }\r\n\r\ndef coqui_xtts_node(state: PipelineState) -> dict:\r\n    \"\"\"Generate vocal track from lyrics + instrumental.\"\"\"\r\n    # Uses Coqui XTTS or similar TTS API\r\n    ...\r\n\r\ndef moneyprinterturbo_node(state: PipelineState) -> dict:\r\n    \"\"\"Source video clips based on lyrics content.\"\"\"\r\n    ...\r\n\r\ndef ffmpeg_compose_node(state: PipelineState) -> dict:\r\n    \"\"\"Combine audio and video into final output.\"\"\"\r\n    ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-structure",
      children: "Project structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "purvanchal-flow-studio/\r\n+-- pipeline/\r\n¦   +-- state.py           # PipelineState TypedDict\r\n¦   +-- graph.py           # StateGraph construction\r\n¦   +-- nodes/\r\n¦   ¦   +-- __init__.py\r\n¦   ¦   +-- lyrics.py      # generate_lyrics_node\r\n¦   ¦   +-- music.py       # ace_step_node\r\n¦   ¦   +-- vocals.py      # coqui_xtts_node\r\n¦   ¦   +-- clips.py       # moneyprinterturbo_node\r\n¦   ¦   +-- compose.py     # ffmpeg_compose_node\r\n¦   ¦   +-- failure.py     # failure_recovery_node\r\n¦   +-- config.py          # Settings via pydantic-settings\r\n+-- api/\r\n¦   +-- main.py            # FastAPI app with pipeline endpoints\r\n¦   +-- schemas.py         # Request/response models\r\n+-- .env.example           # API keys with placeholders\r\n+-- Dockerfile\r\n+-- docker-compose.yml\r\n+-- README.md              # Architecture diagram, setup, demo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "n8n-vs-langgraph-comparison-write-up",
      children: "n8n vs LangGraph comparison write-up"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/n8n-vs-langgraph.md"
      }), " covering:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n8n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LangGraph"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prototyping speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast — drag, connect, done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower — code, debug, compile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conditional logic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visual IF nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrary Python functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State persistence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (no checkpointer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in checkpointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Crash recovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full restart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resume from failed node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Testability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit tests on node functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Version control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON export"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git-friendly Python"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-technical maintenance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossible"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use n8n:"
      }), " Rapid prototyping, stakeholder-visible workflows, simple linear pipelines."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use LangGraph:"
      }), " Complex conditional routing, long-running pipelines, production reliability requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-13",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run both pipelines on the same input topic. Measure: total execution time, number of API calls, manual interventions needed, recovery from a simulated crash. Document the differences."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "314-openai-agents-sdk",
      children: "3.14 OpenAI Agents SDK"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenAI released the Agents SDK as a lightweight alternative to LangGraph for simpler agent patterns. It's worth knowing because (a) clients ask about it and (b) it's genuinely faster for linear tool-use chains."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-concepts",
      children: "Key concepts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LangGraph"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OpenAI Agents SDK"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StateGraph + nodes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Agent"
            }), " class with instructions + tools"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool calling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ToolNode + bind_tools"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Decorator-based ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@function_tool"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handoffs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional edges"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "handoffs"
            }), " param"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Guardrails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom node"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "input_guardrails"
            }), " param"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checkpointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in, no config"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-agent",
      children: "Basic agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from agents import Agent, Runner, function_tool\r\n\r\n@function_tool\r\ndef get_weather(location: str) -> str:\r\n    \"\"\"Get the current weather for a location.\"\"\"\r\n    return f\"The weather in {location} is 72°F and sunny.\"\r\n\r\nagent = Agent(\r\n    name=\"Weather agent\",\r\n    instructions=\"You are a helpful weather assistant.\",\r\n    tools=[get_weather],\r\n)\r\n\r\nresult = Runner.run_sync(agent, \"What's the weather in Dubai?\")\r\nprint(result.final_output)\r\n# The weather in Dubai is 72°F and sunny.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-agent-with-handoffs",
      children: "Multi-agent with handoffs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from agents import Agent, Runner\r\n\r\n# Specialist agents\r\nspanish_agent = Agent(\r\n    name=\"Spanish agent\",\r\n    instructions=\"You translate English to Spanish.\",\r\n)\r\n\r\nenglish_agent = Agent(\r\n    name=\"English agent\",\r\n    instructions=\"You translate Spanish to English.\",\r\n)\r\n\r\n# Triage agent\r\ntriage_agent = Agent(\r\n    name=\"Triage agent\",\r\n    instructions=\"Route the user to the right translation agent.\",\r\n    handoffs=[spanish_agent, english_agent],\r\n)\r\n\r\nresult = Runner.run_sync(triage_agent, \"Hola, ¿cómo estás?\")\r\nprint(result.final_output)\r\n# \"Hello, how are you?\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-to-langgraph",
      children: "Comparison to LangGraph"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OpenAI Agents SDK"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LangGraph"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Setup time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30 minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complex routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrary Python"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tracing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires LangSmith"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires wrapper"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-14",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build an agent with OpenAI Agents SDK that has 2 tools: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "search_web"
      }), " (mock) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "summarize_text"
      }), ". Run it with 3 different queries. Then compare the code length against the equivalent LangGraph graph. When would you use one over the other?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "315-advanced-mcp-server-development",
      children: "3.15 Advanced MCP Server Development"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Your existing MCP memory server exposes tools. MCP also supports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "resources"
      }), " (readable data) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prompts"
      }), " (templated prompts). Adding these makes your server more capable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mcp-recap-3-primitives",
      children: "MCP recap: 3 primitives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Primitive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tools"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action the LLM can invoke"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "create_memory"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "search_memories"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data the LLM can read"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "file:///logs"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "memory:///recent"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prompts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-built prompt templates"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "summarize-memories"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "extract-insights"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adding-resources",
      children: "Adding resources"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from mcp.server.fastmcp import FastMCP\r\n\r\nmcp = FastMCP(\"Advanced Memory Server\")\r\n\r\n# Tool — action\r\n@mcp.tool()\r\ndef search_memories(query: str) -> list[dict]:\r\n    return memory_store.search(query, top_k=5)\r\n\r\n# Resource — readable data\r\n@mcp.resource(\"memory://recent/{count}\")\r\ndef recent_memories(count: int = 10) -> str:\r\n    memories = memory_store.get_recent(count)\r\n    return \"\\n---\\n\".join(\r\n        f\"[{m['id']}] {m['text']} (score: {m['score']})\"\r\n        for m in memories\r\n    )\r\n\r\n# Resource — static file\r\n@mcp.resource(\"config://prompts/analyze\")\r\ndef analyze_prompt() -> str:\r\n    return \"\"\"Analyze the following information and provide:\r\n1. Key themes\r\n2. Open questions\r\n3. Recommended actions\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adding-prompt-templates",
      children: "Adding prompt templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@mcp.prompt()\r\ndef summarize_memories(topic: str) -> str:\r\n    \"\"\"Generate a prompt to summarize all memories about a topic.\"\"\"\r\n    return f\"\"\"\r\nPlease review all memories related to \"{topic}\" and provide:\r\n- A 3-sentence summary of what we know\r\n- Any contradictions in the information\r\n- Suggested next research questions\r\n\r\nMemories to analyze:\r\n{topic}\r\n\"\"\"\r\n\r\n@mcp.prompt()\r\ndef extract_action_items(text: str) -> str:\r\n    return f\"\"\"\r\nExtract action items from this text. Format as a table with:\r\n| Action | Owner | Deadline | Priority |\r\n|--------|-------|----------|----------|\r\n\r\nText: {text}\r\n\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dynamic-resources-with-uri-templates",
      children: "Dynamic resources with URI templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Access patterns like memory:///search/acme or memory:///search/ranch\r\nfrom mcp.server import ResourceTemplate\r\n\r\n@mcp.resource(\"memory:///search/{query}\")\r\nasync def search_resource(query: str) -> str:\r\n    results = memory_store.search(query, top_k=3)\r\n    if not results:\r\n        return f\"No memories found for '{query}'\"\r\n    return \"\\n\".join(f\"- {r['text']} (confidence: {r['score']:.2f})\" for r in results)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testing-your-server",
      children: "Testing your server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# With MCP Inspector\r\nnpx @anthropic-ai/mcp-inspector http://localhost:8000/mcp\r\n\r\n# Or with a client\r\npython -c \"\r\nfrom mcp import ClientSession, StdioServerParameters\r\nimport asyncio\r\n\r\nasync def test():\r\n    params = StdioServerParameters(\r\n        command='python', args=['memory_server.py']\r\n    )\r\n    async with ClientSession(params) as session:\r\n        result = await session.list_resources()\r\n        print('Resources:', result.resources)\r\n        result = await session.list_prompts()\r\n        print('Prompts:', result.prompts)\r\n\r\nasyncio.run(test())\r\n\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-15",
      children: "Exercise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add at least 1 resource and 1 prompt template to your MCP memory server. Test with MCP Inspector that both are discoverable. Then connect Claude Desktop to your server and verify the resource appears in the \"Attach from MCP\" menu."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PromptTemplate { name: string; template: string; variables: string[]; version: string }\r\nclass PromptEngine {\r\n  private templates: Map&lt;string,PromptTemplate&gt; = new Map()\r\n  register(t: PromptTemplate): void { this.templates.set(t.name, t) }\r\n  render(name: string, vars: Record&lt;string,string&gt;): string {\r\n    const t = this.templates.get(name); if(!t) throw new Error(`Template ${name} not found`)\r\n    let result = t.template\r\n    for(const v of t.variables) { if(vars[v] === undefined) throw new Error(`Variable ${v} not provided`); result = result.replace(`{{${v}}}`, vars[v]) }\r\n    return result\r\n  }\r\n  listVersions(): string[] { return Array.from(this.templates.values()).map(t => `${t.name}@${t.version}`) }\r\n  diff(t1: string, t2: string): string { const a = t1.split(\"\\n\"), b = t2.split(\"\\n\")\r\n    const changes: string[] = []; const max = Math.max(a.length,b.length)\r\n    for(let i=0;i&lt;max;i++) if(a[i] !== b[i]) changes.push(`L${i+1}: ${a[i]??\"\"} | ${b[i]??\"\"}`)\r\n    return changes.join(\"\\n\")\r\n  }\r\n}\r\nclass ChatComposer {\r\n  private system = \"\"; private examples: Array&lt;{input:string;output:string}&gt; = []\r\n  setSystem(s: string): this { this.system = s; return this }\r\n  addExample(input: string, output: string): this { this.examples.push({input,output}); return this }\r\n  compose(userInput: string): Array&lt;{role:string;content:string}&gt; {\r\n    const msgs: Array&lt;{role:string;content:string}&gt; = [{role:\"system\",content:this.system}]\r\n    for(const ex of this.examples) { msgs.push({role:\"user\",content:ex.input}); msgs.push({role:\"assistant\",content:ex.output}) }\r\n    msgs.push({role:\"user\",content:userInput}); return msgs\r\n  }\r\n}\r\nexport { PromptTemplate, PromptEngine, ChatComposer }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-3-done-checkpoint",
      children: "Phase 3 Done Checkpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before moving to Phase 4, you should be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Explain ReAct loop vs single LLM call in one sentence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Build a 3-node LangGraph graph from scratch without copy-pasting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Write a conditional edge function based on a custom state field"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Kill a running graph and resume it from the checkpoint"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Build a 2-agent CrewAI crew (researcher + writer)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Write an MCP client that connects to your existing server and calls a tool"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Estimate per-run cost of a 4-step agent chain"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Argue when to use n8n vs LangGraph for a given workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " LangGraph Purvanchal pipeline produces output from end to end"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Build an agent with OpenAI Agents SDK and compare code to LangGraph"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Add resources + prompts to your MCP server, verify via MCP Inspector"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated time to checkpoint:"
      }), " 35-40 hours over 3 weeks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-agent-engineer/05-phase4-production-hardening",
        children: "Next: Phase 4 — Production Hardening"
      })
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