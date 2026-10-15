"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3861],{

/***/ 48970
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_21_interview_preparation_07_ai_agents_interview_md_c68_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-21-interview-preparation-07-ai-agents-interview-md-c68.json
const site_docs_courses_ai_engineering_placement_21_interview_preparation_07_ai_agents_interview_md_c68_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/interview-preparation/07-ai-agents-interview","title":"AI Agents Interview","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/21-interview-preparation/07-ai-agents-interview.md","sourceDirName":"courses/ai-engineering-placement/21-interview-preparation","slug":"/ai-engineering-placement/21-interview-preparation/07-ai-agents-interview","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/07-ai-agents-interview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":257,"frontMatter":{"id":"07-ai-agents-interview","slug":"/ai-engineering-placement/21-interview-preparation/07-ai-agents-interview","title":"AI Agents Interview","sidebar_label":"AI Agents Interview","sidebar_position":257},"sidebar":"placementSidebar","previous":{"title":"LLM & RAG Interview","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/06-llm-and-rag-interview"},"next":{"title":"System Design Interview","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/08-system-design-interview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/21-interview-preparation/07-ai-agents-interview.md


const frontMatter = {
	id: '07-ai-agents-interview',
	slug: '/ai-engineering-placement/21-interview-preparation/07-ai-agents-interview',
	title: 'AI Agents Interview',
	sidebar_label: 'AI Agents Interview',
	sidebar_position: 257
};
const contentTitle = 'AI Agents Interview';

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
  "value": "7.1 Agent Architecture",
  "id": "71-agent-architecture",
  "level": 2
}, {
  "value": "7.2 Tool-Using Agents",
  "id": "72-tool-using-agents",
  "level": 2
}, {
  "value": "7.3 Agent Memory",
  "id": "73-agent-memory",
  "level": 2
}, {
  "value": "7.4 Planning &amp; Reasoning",
  "id": "74-planning--reasoning",
  "level": 2
}, {
  "value": "7.5 Multi-Agent Systems",
  "id": "75-multi-agent-systems",
  "level": 2
}, {
  "value": "7.6 LangGraph",
  "id": "76-langgraph",
  "level": 2
}, {
  "value": "7.7 MCP (Model Context Protocol)",
  "id": "77-mcp-model-context-protocol",
  "level": 2
}, {
  "value": "7.8 Production Agents",
  "id": "78-production-agents",
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
  "value": "Good",
  "id": "good",
  "level": 2
}, {
  "value": "User: &quot;Schedule a 1-hour meeting with Alice and Bob next Tuesday afternoon&quot;",
  "id": "user-schedule-a-1-hour-meeting-with-alice-and-bob-next-tuesday-afternoon",
  "level": 2
}, {
  "value": "Step 2: Resolve participants",
  "id": "step-2-resolve-participants",
  "level": 2
}, {
  "value": "→ [{&quot;name&quot;: &quot;Alice&quot;, &quot;email&quot;: &quot;alice@co.com&quot;}, {&quot;name&quot;: &quot;Bob&quot;, &quot;email&quot;: &quot;bob@co.com&quot;}]",
  "id": "-name-alice-email-alicecocom-name-bob-email-bobcocom",
  "level": 2
}, {
  "value": "Step 3: Check availability",
  "id": "step-3-check-availability",
  "level": 2
}, {
  "value": "→ [{&quot;start&quot;: &quot;14:00&quot;, &quot;end&quot;: &quot;15:00&quot;, &quot;all_available&quot;: True}]",
  "id": "-start-1400-end-1500-all_available-true",
  "level": 2
}, {
  "value": "Step 4: Propose time to user",
  "id": "step-4-propose-time-to-user",
  "level": 2
}, {
  "value": "Agent: &quot;Next Tuesday at 2-3 PM works for everyone. Shall I book it?&quot;",
  "id": "agent-next-tuesday-at-2-3-pm-works-for-everyone-shall-i-book-it",
  "level": 2
}, {
  "value": "Step 5: Create event (after user confirmation)",
  "id": "step-5-create-event-after-user-confirmation",
  "level": 2
}, {
  "value": "Step 6: Confirm",
  "id": "step-6-confirm",
  "level": 2
}, {
  "value": "Agent: &quot;Meeting booked for Tuesday at 2:00 PM. Invitations sent.&quot;</code></pre>",
  "id": "agent-meeting-booked-for-tuesday-at-200-pm-invitations-sent",
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
        id: "ai-agents-interview",
        children: "AI Agents Interview"
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
            children: "Understand agent architecture: perceive, reason, act, learn loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build agents with tool use, memory, and planning capabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement multi-agent systems with orchestration and communication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use LangGraph for stateful, controllable agent workflows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply the Model Context Protocol (MCP) for standardized tool integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design production-ready agent systems with safety, observability, and error handling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interviews test both technical skill and communication. DSA patterns, system design, behavioral questions, and mock interviews prepare you for the full interview loop. This module is your final prep before offers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding ai agents interview is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how ai agents interview works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "7.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perception, reasoning, action, memory, learning loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool-Using Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool definitions, execution, error handling, rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-term, long-term, episodic, procedural memory stores"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planning & Reasoning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task decomposition, ReAct, Plan-and-Execute, reflection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Agent Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orchestrator-worker, peer-to-peer, debate, pipeline patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LangGraph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State graphs, nodes, edges, conditional routing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MCP (Model Context Protocol)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standardized tool/resources, server/client architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observability, safety, error recovery, cost optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Agent Architecture] --> B[Tool-Using Agents]\r\n    B --> C[Agent Memory]\r\n    C --> D[Planning & Reasoning]\r\n    D --> E[Multi-Agent Systems]\r\n    E --> F[LangGraph]\r\n    F --> G[MCP]\r\n    G --> H[Production Agents]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-agent-architecture",
      children: "7.1 Agent Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An AI agent is an autonomous system that perceives its environment, reasons about goals, takes actions, and learns from outcomes. The core loop:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Perceive → Reason → Act → Observe → Learn"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Components"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LLM Core"
        }), ": The reasoning engine. Decides what to do next based on current state, goals, and memory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tools"
        }), ": Functions the agent can call (APIs, databases, calculators, search engines)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory"
        }), ": Stores past interactions, learned information, and execution context."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Planning module"
        }), ": Decomposes complex goals into sub-tasks, creates execution plans."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety guardrails"
        }), ": Constraints on actions, input/output filtering, human-in-the-loop checks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import Any, Callable\r\nimport json\r\n\r\n@dataclass\r\nclass AgentState:\r\n    messages: list[dict] = field(default_factory=list)\r\n    memory: dict[str, Any] = field(default_factory=dict)\r\n    tools: dict[str, Callable] = field(default_factory=dict)\r\n    max_steps: int = 20\r\n    current_step: int = 0\r\n\r\nclass Agent:\r\n    def __init__(self, llm, tools: dict[str, Callable], system_prompt: str):\r\n        self.llm = llm\r\n        self.tools = tools\r\n        self.system_prompt = system_prompt\r\n        self.state = AgentState(tools=tools)\r\n\r\n    async def run(self, user_input: str) -> str:\r\n        self.state.messages.append({\"role\": \"user\", \"content\": user_input})\r\n        self.state.current_step = 0\r\n\r\n        while self.state.current_step < self.state.max_steps:\r\n            self.state.current_step += 1\r\n\r\n            response = await self.llm.generate(\r\n                system=self.system_prompt,\r\n                messages=self.state.messages,\r\n                tools=self.state.tools,\r\n            )\r\n\r\n            if response.finish_reason == \"stop\":\r\n                final = response.content\r\n                self.state.messages.append({\"role\": \"assistant\", \"content\": final})\r\n                return final\r\n\r\n            if response.finish_reason == \"tool_calls\":\r\n                self.state.messages.append({\r\n                    \"role\": \"assistant\",\r\n                    \"content\": response.content,\r\n                    \"tool_calls\": response.tool_calls,\r\n                })\r\n\r\n                for tool_call in response.tool_calls:\r\n                    result = await self.execute_tool(tool_call)\r\n                    self.state.messages.append({\r\n                        \"role\": \"tool\",\r\n                        \"tool_call_id\": tool_call.id,\r\n                        \"content\": str(result),\r\n                    })\r\n\r\n        return \"Max steps reached. Partial result: \" + self.state.messages[-1][\"content\"]\r\n\r\n    async def execute_tool(self, tool_call) -> Any:\r\n        func_name = tool_call.function.name\r\n        args = json.loads(tool_call.function.arguments)\r\n        if func_name not in self.tools:\r\n            return f\"Error: Unknown tool '{func_name}'\"\r\n        try:\r\n            result = await self.tools[func_name](**args)\r\n            return result\r\n        except Exception as e:\r\n            return f\"Error executing {func_name}: {e}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent types"
      }), ": Simple reflex (pre-programmed responses), model-based (maintains internal state), goal-based (works toward targets), utility-based (maximizes a score function), learning agents (improves through experience)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-tool-using-agents",
      children: "7.2 Tool-Using Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tools are the agent's interface to the external world. Well-designed tool definitions are critical for agent success."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool definition format"
      }), ": Name, description, parameter schema (JSON Schema). The description is most important — it's how the LLM knows when to use the tool. Be verbose and specific."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Execution patterns"
      }), ": Sequential (one tool call at a time), parallel (multiple independent tool calls), iterative (tool calls in a loop), conditional (tool choice depends on previous results)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Tool definitions with Pydantic\r\nfrom pydantic import BaseModel, Field\r\nfrom typing import Optional\r\n\r\nclass WeatherToolParams(BaseModel):\r\n    location: str = Field(description=\"City name, optionally with country code\")\r\n    units: Optional[str] = Field(\"celsius\", description=\"Temperature units: celsius or fahrenheit\")\r\n\r\nclass DatabaseQueryParams(BaseModel):\r\n    sql: str = Field(description=\"The SQL query to execute\")\r\n    params: Optional[list] = Field(None, description=\"Query parameters\")\r\n\r\nclass SendEmailParams(BaseModel):\r\n    to: str = Field(description=\"Recipient email address\")\r\n    subject: str = Field(description=\"Email subject line\")\r\n    body: str = Field(description=\"Email body content\")\r\n\r\n## Tool implementations\r\nimport httpx\r\n\r\nasync def get_weather(location: str, units: str = \"celsius\") -> dict:\r\n    async with httpx.AsyncClient() as client:\r\n        response = await client.get(\r\n            f\"https://api.weather.com/v1/current\",\r\n            params={\"location\": location, \"units\": units}\r\n        )\r\n        return response.json()\r\n\r\nasync def query_database(sql: str, params: Optional[list] = None) -> list[dict]:\r\n    # Execute query (simplified)\r\n    return [{\"result\": \"sample\"}]\r\n\r\nasync def send_email(to: str, subject: str, body: str) -> dict:\r\n    # Send email via SMTP/API\r\n    return {\"status\": \"sent\", \"to\": to, \"subject\": subject}\r\n\r\n## Register tools with descriptions\r\ntools = {\r\n    \"get_weather\": {\r\n        \"fn\": get_weather,\r\n        \"spec\": {\r\n            \"name\": \"get_weather\",\r\n            \"description\": \"Get current weather conditions for a location. Use this when the user asks about weather, temperature, or forecast.\",\r\n            \"parameters\": {\r\n                \"type\": \"object\",\r\n                \"properties\": {\r\n                    \"location\": {\"type\": \"string\", \"description\": \"City name\"},\r\n                    \"units\": {\"type\": \"string\", \"enum\": [\"celsius\", \"fahrenheit\"]},\r\n                },\r\n                \"required\": [\"location\"],\r\n            },\r\n        },\r\n    },\r\n    \"query_database\": {\r\n        \"fn\": query_database,\r\n        \"spec\": {\r\n            \"name\": \"query_database\",\r\n            \"description\": \"Execute a SQL query on the company database. Returns rows as JSON. Only use for SELECT queries.\",\r\n            \"parameters\": {\r\n                \"type\": \"object\",\r\n                \"properties\": {\r\n                    \"sql\": {\"type\": \"string\", \"description\": \"SELECT SQL query\"},\r\n                },\r\n                \"required\": [\"sql\"],\r\n            },\r\n        },\r\n    },\r\n    \"send_email\": {\r\n        \"fn\": send_email,\r\n        \"spec\": {\r\n            \"name\": \"send_email\",\r\n            \"description\": \"Send an email to a recipient. Use when the user wants to compose and send an email.\",\r\n            \"parameters\": {\r\n                \"type\": \"object\",\r\n                \"properties\": {\r\n                    \"to\": {\"type\": \"string\", \"description\": \"Recipient email\"},\r\n                    \"subject\": {\"type\": \"string\", \"description\": \"Email subject\"},\r\n                    \"body\": {\"type\": \"string\", \"description\": \"Email body\"},\r\n                },\r\n                \"required\": [\"to\", \"subject\", \"body\"],\r\n            },\r\n        },\r\n    },\r\n}\r\n\r\n## Tool execution with error handling and retry\r\nasync def safe_execute_tool(tool_call, tools: dict, max_retries: int = 2) -> str:\r\n    func_name = tool_call.function.name\r\n    args = json.loads(tool_call.function.arguments)\r\n    tool = tools.get(func_name)\r\n    if not tool:\r\n        return f\"Error: Unknown tool '{func_name}'. Available tools: {list(tools.keys())}\"\r\n\r\n    for attempt in range(max_retries):\r\n        try:\r\n            result = await tool[\"fn\"](**args)\r\n            return json.dumps(result, default=str)[:2000]  # truncate for context\r\n        except httpx.TimeoutException:\r\n            if attempt == max_retries - 1:\r\n                return f\"Error: {func_name} timed out after {max_retries} attempts\"\r\n            continue\r\n        except Exception as e:\r\n            return f\"Error: {func_name} failed with: {str(e)}\"\r\n    return f\"Error: {func_name} failed\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool design principles"
      }), ": One tool per action (don't combine unrelated operations). Return structured data (JSON). Handle errors gracefully and return meaningful error messages. Implement timeouts. Rate-limit tool calls to prevent abuse."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-agent-memory",
      children: "7.3 Agent Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Memory enables agents to maintain context across interactions and learn from experience."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Short-term memory"
      }), ": The current context window (conversation history, current task state). Managed via sliding window or summarization."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Long-term memory"
      }), ": Persistent storage of facts, user preferences, and past interactions. Stored in a vector database or structured database. Retrieved on-demand."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Episodic memory"
      }), ": Records of specific past episodes (what happened, what the agent did, what the outcome was). Used for learning from past mistakes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Procedural memory"
      }), ": Knowledge of how to perform tasks (plans, workflows, standard operating procedures). Can be learned or pre-programmed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\r\nimport sqlite3\r\nfrom datetime import datetime\r\nfrom typing import Optional\r\n\r\nclass LongTermMemory:\r\n    def __init__(self, db_path: str = \"agent_memory.db\"):\r\n        self.conn = sqlite3.connect(db_path)\r\n        self.conn.execute(\"\"\"\r\n            CREATE TABLE IF NOT EXISTS episodic_memory (\r\n                id INTEGER PRIMARY KEY AUTOINCREMENT,\r\n                user_id TEXT,\r\n                timestamp TEXT,\r\n                summary TEXT,\r\n                embedding TEXT,\r\n                details TEXT\r\n            )\r\n        \"\"\")\r\n        self.conn.execute(\"\"\"\r\n            CREATE TABLE IF NOT EXISTS factual_memory (\r\n                id INTEGER PRIMARY KEY AUTOINCREMENT,\r\n                user_id TEXT,\r\n                fact TEXT,\r\n                category TEXT,\r\n                confidence REAL DEFAULT 1.0,\r\n                created_at TEXT,\r\n                updated_at TEXT\r\n            )\r\n        \"\"\")\r\n        self.conn.commit()\r\n\r\n    def store_episode(self, user_id: str, summary: str, details: dict) -> int:\r\n        cursor = self.conn.execute(\r\n            \"INSERT INTO episodic_memory (user_id, timestamp, summary, details) VALUES (?, ?, ?, ?)\",\r\n            (user_id, datetime.now().isoformat(), summary, json.dumps(details))\r\n        )\r\n        self.conn.commit()\r\n        return cursor.lastrowid\r\n\r\n    def retrieve_relevant_episodes(self, user_id: str, query: str, limit: int = 5) -> list[dict]:\r\n        # Simple keyword matching (replace with embedding similarity in production)\r\n        cursor = self.conn.execute(\r\n            \"SELECT * FROM episodic_memory WHERE user_id = ? AND summary LIKE ? ORDER BY id DESC LIMIT ?\",\r\n            (user_id, f\"%{query}%\", limit)\r\n        )\r\n        return [dict(row) for row in cursor.fetchall()]\r\n\r\n    def store_fact(self, user_id: str, fact: str, category: str, confidence: float = 1.0) -> int:\r\n        cursor = self.conn.execute(\r\n            \"\"\"INSERT INTO factual_memory (user_id, fact, category, confidence, created_at, updated_at)\r\n               VALUES (?, ?, ?, ?, ?, ?)\"\"\",\r\n            (user_id, fact, category, confidence, datetime.now().isoformat(), datetime.now().isoformat())\r\n        )\r\n        self.conn.commit()\r\n        return cursor.lastrowid\r\n\r\n    def get_user_preferences(self, user_id: str) -> list[str]:\r\n        cursor = self.conn.execute(\r\n            \"SELECT fact FROM factual_memory WHERE user_id = ? AND category = 'preference' ORDER BY updated_at DESC\",\r\n            (user_id,)\r\n        )\r\n        return [row[0] for row in cursor.fetchall()]\r\n\r\n## Working memory for current task\r\nclass WorkingMemory:\r\n    def __init__(self, max_tokens: int = 4000):\r\n        self.context: list[dict] = []\r\n        self.max_tokens = max_tokens\r\n        self.task_state: dict = {}\r\n        self.subtask_stack: list[str] = []\r\n\r\n    def add_message(self, role: str, content: str, metadata: Optional[dict] = None) -> None:\r\n        self.context.append({\"role\": role, \"content\": content, **(metadata or {})})\r\n        self._trim_context()\r\n\r\n    def _trim_context(self) -> None:\r\n        # Estimate token count and trim oldest messages\r\n        total = sum(len(m[\"content\"]) // 4 for m in self.context)\r\n        while total > self.max_tokens and len(self.context) > 2:\r\n            self.context.pop(0)\r\n            total = sum(len(m[\"content\"]) // 4 for m in self.context)\r\n\r\n    def get_context(self) -> list[dict]:\r\n        return self.context\r\n\r\n    def update_task_state(self, key: str, value: Any) -> None:\r\n        self.task_state[key] = value\r\n\r\n    def push_subtask(self, task: str) -> None:\r\n        self.subtask_stack.append(task)\r\n\r\n    def pop_subtask(self) -> Optional[str]:\r\n        return self.subtask_stack.pop() if self.subtask_stack else None\r\n\r\n    def clear(self) -> None:\r\n        self.context = []\r\n        self.task_state = {}\r\n        self.subtask_stack = []\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-planning--reasoning",
      children: "7.4 Planning & Reasoning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Planning decomposes complex tasks into manageable steps. Reasoning ensures each step is grounded and correct."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ReAct (Reasoning + Acting)"
      }), ": Interleave reasoning traces (\"Thought: ...\") with actions (\"Action: ...\"). The thought process makes the agent's decisions transparent."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Plan-and-Execute"
      }), ": Generate a complete plan upfront, then execute steps sequentially. May re-plan when steps fail."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree-of-Thoughts"
      }), ": Explore multiple reasoning branches simultaneously. Maintain several candidate plans, evaluate progress, prune unpromising branches."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reflection"
      }), ": After completing a task, the agent analyzes what went well or wrong and updates its memory. This is how agents learn from experience."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Literal\r\n\r\nclass PlanningAgent:\r\n    def __init__(self, llm, tools):\r\n        self.llm = llm\r\n        self.tools = tools\r\n\r\n    async def plan_and_execute(self, task: str) -> str:\r\n        # Step 1: Generate plan\r\n        plan = await self._generate_plan(task)\r\n        print(f\"Plan: {plan}\")\r\n\r\n        # Step 2: Execute plan step by step\r\n        results = []\r\n        for step in plan[\"steps\"]:\r\n            result = await self._execute_step(step)\r\n            results.append(result)\r\n\r\n            # Step 3: Check if re-planning is needed\r\n            if result.get(\"failed\"):\r\n                new_plan = await self._replan(task, results)\r\n                return await self.plan_and_execute(f\"{task}\\nContext: {results}\")\r\n\r\n        # Step 4: Synthesize final answer\r\n        final = await self._synthesize(task, plan, results)\r\n        return final\r\n\r\n    async def _generate_plan(self, task: str) -> dict:\r\n        prompt = f\"\"\"Create a step-by-step plan for the following task.\r\nFor each step, specify:\r\n- Which tool to use (or \"no tool\" for reasoning)\r\n- What input to provide\r\n- What the expected output should be\r\n\r\nTask: {task}\r\n\r\nOutput as JSON with a \"steps\" array.\"\"\"\r\n        response = await self.llm.generate(prompt, temperature=0)\r\n        return json.loads(response)\r\n\r\n    async def _execute_step(self, step: dict) -> dict:\r\n        if step.get(\"tool\") == \"no_tool\":\r\n            return {\"result\": \"reasoning step completed\", \"failed\": False}\r\n\r\n        tool = self.tools.get(step[\"tool\"])\r\n        if not tool:\r\n            return {\"result\": f\"Unknown tool: {step['tool']}\", \"failed\": True}\r\n\r\n        try:\r\n            result = await tool[\"fn\"](**step.get(\"input\", {}))\r\n            return {\"result\": result, \"failed\": False}\r\n        except Exception as e:\r\n            return {\"result\": str(e), \"failed\": True}\r\n\r\n    async def _replan(self, task: str, results: list) -> dict:\r\n        prompt = f\"\"\"The following plan step failed. Create a revised plan.\r\n\r\nTask: {task}\r\nCompleted steps: {results}\r\n\r\nRevised plan (JSON format with 'steps' array):\"\"\"\r\n        response = await self.llm.generate(prompt, temperature=0)\r\n        return json.loads(response)\r\n\r\n    async def _synthesize(self, task: str, plan: dict, results: list) -> str:\r\n        prompt = f\"\"\"Based on the following plan and results, provide a final answer to the user.\r\n\r\nTask: {task}\r\nPlan: {plan['steps']}\r\nResults: {results}\r\n\r\nFinal answer:\"\"\"\r\n        return await self.llm.generate(prompt, temperature=0)\r\n\r\n## Reflection agent\r\nasync def reflection_loop(agent, task: str, max_iterations: int = 3) -> str:\r\n    context = {\"attempts\": []}\r\n\r\n    for i in range(max_iterations):\r\n        result = await agent.run(task)\r\n        context[\"attempts\"].append({\"iteration\": i, \"result\": result})\r\n\r\n        # Self-reflection\r\n        reflection_prompt = f\"\"\"Task: {task}\r\nMy response: {result}\r\nEvaluate your response. Identify any issues, missing information, or errors.\r\nIf the response is satisfactory, say \"SATISFACTORY\". Otherwise, explain what needs improvement.\"\"\"\r\n        evaluation = await agent.llm.generate(reflection_prompt, temperature=0)\r\n\r\n        if \"SATISFACTORY\" in evaluation:\r\n            return result\r\n\r\n        # Improve based on reflection\r\n        task = f\"{task}\\n\\nPrevious attempt failed. Feedback: {evaluation}\"\r\n\r\n    return context[\"attempts\"][-1][\"result\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-multi-agent-systems",
      children: "7.5 Multi-Agent Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiple agents collaborate to solve complex tasks. Each agent has a specialized role."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Architectures"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Orchestrator-Worker"
        }), ": A coordinator agent decomposes tasks and delegates to specialist agents."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Peer-to-Peer"
        }), ": Agents communicate directly, each with specific expertise."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Debate"
        }), ": Agents argue different positions to arrive at a consensus."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pipeline"
        }), ": Agents process sequentially — output of one is input to the next."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Supervisor"
        }), ": An oversight agent monitors and coordinates the work of sub-agents."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\r\n\r\nclass AgentRole(Enum):\r\n    RESEARCHER = \"researcher\"      # Gathers information\r\n    ANALYST = \"analyst\"           # Analyzes data, finds patterns\r\n    WRITER = \"writer\"             # Produces final content\r\n    CRITIC = \"critic\"             # Reviews and provides feedback\r\n    COORDINATOR = \"coordinator\"   # Manages workflow\r\n\r\n@dataclass\r\nclass SpecializedAgent:\r\n    role: AgentRole\r\n    llm: Any\r\n    tools: dict\r\n    instructions: str\r\n\r\nclass Orchestrator:\r\n    def __init__(self, coordinator: SpecializedAgent, workers: list[SpecializedAgent]):\r\n        self.coordinator = coordinator\r\n        self.workers = {w.role: w for w in workers}\r\n\r\n    async def run(self, task: str) -> str:\r\n        # Decompose task\r\n        plan = await self._create_plan(task)\r\n        print(f\"Plan: {plan}\")\r\n\r\n        results = {}\r\n        for step in plan[\"steps\"]:\r\n            role = AgentRole(step[\"assigned_to\"])\r\n            agent = self.workers.get(role)\r\n            if not agent:\r\n                continue\r\n\r\n            result = await self._run_agent(agent, step[\"instruction\"])\r\n            results[role.value] = result\r\n\r\n        # Synthesize results\r\n        final = await self._synthesize(task, results)\r\n        return final\r\n\r\n    async def _create_plan(self, task: str) -> dict:\r\n        prompt = f\"\"\"As the coordinator, create a plan to complete this task.\r\nAssign each step to one of: researcher, analyst, writer, critic.\r\n\r\nTask: {task}\r\n\r\nOutput JSON with \"steps\" array, each with \"assigned_to\" and \"instruction\".\"\"\"\r\n        response = await self.coordinator.llm.generate(prompt)\r\n        return json.loads(response)\r\n\r\n    async def _run_agent(self, agent: SpecializedAgent, instruction: str) -> str:\r\n        agent_instance = Agent(\r\n            llm=agent.llm,\r\n            tools=agent.tools,\r\n            system_prompt=f\"You are a {agent.role.value}. {agent.instructions}\"\r\n        )\r\n        return await agent_instance.run(instruction)\r\n\r\n    async def _synthesize(self, task: str, results: dict) -> str:\r\n        prompt = f\"\"\"Task: {task}\r\n\r\nResults from specialists:\r\n{json.dumps(results, indent=2)}\r\n\r\nSynthesize these results into a final, coherent answer.\"\"\"\r\n        return await self.coordinator.llm.generate(prompt)\r\n\r\n## Debate pattern: two agents argue different positions\r\nasync def debate(agent_a: SpecializedAgent, agent_b: SpecializedAgent, topic: str, rounds: int = 3) -> str:\r\n    a_position = await agent_a.llm.generate(\r\n        f\"Argue FOR: {topic}. Provide three key points.\"\r\n    )\r\n    b_position = await agent_b.llm.generate(\r\n        f\"Argue AGAINST: {topic}. Provide three key points.\"\r\n    )\r\n    transcript = [\r\n        f\"{agent_a.role.value}: {a_position}\",\r\n        f\"{agent_b.role.value}: {b_position}\",\r\n    ]\r\n\r\n    for i in range(rounds):\r\n        a_response = await agent_a.llm.generate(\r\n            f\"Previous arguments:\\n{transcript[-2]}\\n\\nYou said: {transcript[-1]}\\n\\nRebuttal:\"\r\n        )\r\n        transcript.append(f\"{agent_a.role.value} (round {i+1}): {a_response}\")\r\n\r\n        b_response = await agent_b.llm.generate(\r\n            f\"Previous arguments:\\n{transcript[-2]}\\n\\nYou said: {transcript[-1]}\\n\\nRebuttal:\"\r\n        )\r\n        transcript.append(f\"{agent_b.role.value} (round {i+1}): {b_response}\")\r\n\r\n    # Judge\r\n    judge_prompt = f\"Given this debate on '{topic}', synthesize the best answer:\\n\\n\" + \"\\n\".join(transcript)\r\n    return await agent_a.llm.generate(judge_prompt)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Communication patterns"
      }), ": Agents communicate via messages (structured JSON), shared memory (a common workspace), or events (pub/sub). Message schemas should include: sender, receiver, message type, payload, timestamp, and conversation_id."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-langgraph",
      children: "7.6 LangGraph"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LangGraph enables building stateful, controllable agent workflows as directed graphs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Core concepts"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State"
        }), ": Shared data structure passed between nodes. Contains messages, agent state, and any custom fields."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nodes"
        }), ": Python functions that process the state. Each node typically calls an LLM or executes a tool."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edges"
        }), ": Define the flow between nodes. Can be conditional (function determines the next node)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cycles"
        }), ": LangGraph supports loops (agents loop until a condition is met)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import TypedDict, Annotated, Sequence\r\nfrom langgraph.graph import StateGraph, END\r\nfrom langgraph.prebuilt import ToolExecutor, ToolInvocation\r\nfrom langchain_core.messages import BaseMessage, HumanMessage, AIMessage, FunctionMessage\r\nimport operator\r\n\r\n## Define agent state\r\nclass AgentState(TypedDict):\r\n    messages: Annotated[Sequence[BaseMessage], operator.add]\r\n    task: str\r\n    steps_remaining: int\r\n\r\n## Define nodes\r\nasync def call_model(state: AgentState, llm, tools):\r\n    messages = state[\"messages\"]\r\n    response = await llm.ainvoke(messages, tools=tools)\r\n    return {\"messages\": [response]}\r\n\r\nasync def execute_tools(state: AgentState, tool_executor):\r\n    last_message = state[\"messages\"][-1]\r\n    if not last_message.tool_calls:\r\n        return {\"messages\": []}\r\n\r\n    results = []\r\n    for tool_call in last_message.tool_calls:\r\n        action = ToolInvocation(\r\n            tool=tool_call[\"name\"],\r\n            tool_input=tool_call[\"args\"],\r\n        )\r\n        response = await tool_executor.ainvoke(action)\r\n        results.append(FunctionMessage(\r\n            content=str(response),\r\n            name=tool_call[\"name\"],\r\n        ))\r\n    return {\"messages\": results}\r\n\r\n## Conditional routing\r\ndef should_continue(state: AgentState) -> str:\r\n    messages = state[\"messages\"]\r\n    last_message = messages[-1]\r\n    if last_message.tool_calls:\r\n        return \"continue\"\r\n    return \"end\"\r\n\r\n## Build the graph\r\ndef create_agent_graph(llm, tools):\r\n    tool_executor = ToolExecutor(tools)\r\n\r\n    workflow = StateGraph(AgentState)\r\n\r\n    workflow.add_node(\"agent\", lambda state: call_model(state, llm, tools))\r\n    workflow.add_node(\"action\", lambda state: execute_tools(state, tool_executor))\r\n\r\n    workflow.set_entry_point(\"agent\")\r\n\r\n    workflow.add_conditional_edges(\r\n        \"agent\",\r\n        should_continue,\r\n        {\"continue\": \"action\", \"end\": END},\r\n    )\r\n\r\n    workflow.add_edge(\"action\", \"agent\")\r\n\r\n    return workflow.compile()\r\n\r\n## Example with human-in-the-loop\r\nfrom langgraph.checkpoint import MemorySaver\r\n\r\ndef create_human_review_graph(llm, tools):\r\n    tool_executor = ToolExecutor(tools)\r\n    memory = MemorySaver()\r\n\r\n    workflow = StateGraph(AgentState)\r\n\r\n    async def call_model(state):\r\n        messages = state[\"messages\"]\r\n        response = await llm.ainvoke(messages, tools=tools)\r\n        return {\"messages\": [response]}\r\n\r\n    async def human_review(state):\r\n        last_message = state[\"messages\"][-1]\r\n        print(f\"Actions requested: {last_message.tool_calls}\")\r\n        approval = input(\"Approve? (y/n): \")\r\n        if approval.lower() == \"y\":\r\n            return {\"messages\": []}  # proceed\r\n        raise Exception(\"Human cancelled\")\r\n\r\n    async def execute_tools_node(state):\r\n        last_message = state[\"messages\"][-1]\r\n        results = []\r\n        for tool_call in last_message.tool_calls:\r\n            action = ToolInvocation(\r\n                tool=tool_call[\"name\"],\r\n                tool_input=tool_call[\"args\"],\r\n            )\r\n            response = await tool_executor.ainvoke(action)\r\n            results.append(FunctionMessage(content=str(response), name=tool_call[\"name\"]))\r\n        return {\"messages\": results}\r\n\r\n    workflow.add_node(\"agent\", call_model)\r\n    workflow.add_node(\"human_review\", human_review)\r\n    workflow.add_node(\"action\", execute_tools_node)\r\n\r\n    workflow.set_entry_point(\"agent\")\r\n\r\n    workflow.add_conditional_edges(\r\n        \"agent\",\r\n        should_continue,\r\n        {\"continue\": \"human_review\", \"end\": END},\r\n    )\r\n\r\n    workflow.add_edge(\"human_review\", \"action\")\r\n    workflow.add_edge(\"action\", \"agent\")\r\n\r\n    return workflow.compile(checkpointer=memory)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LangGraph advantages over chains"
      }), ": Stateful (maintains complex state across steps), controllable (conditional routing, loops), human-in-the-loop (pauses for approval), persistence (checkpoints for recovery), streaming (stream state updates in real-time)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "77-mcp-model-context-protocol",
      children: "7.7 MCP (Model Context Protocol)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MCP standardizes how agents discover and interact with external tools, resources, and prompts. It's like USB-C for AI agents — a universal protocol for connecting LLMs with tools and data sources."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MCP Server"
        }), ": Provides tools, resources, and prompt templates. Each server exposes a set of capabilities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MCP Client"
        }), ": Connects to servers, discovers capabilities, and invokes tools. Built into the agent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transport"
        }), ": JSON-RPC over stdin/stdout (local) or HTTP+SSE (remote)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## MCP Server implementation\r\nfrom mcp.server import Server, NotificationOptions\r\nfrom mcp.server.models import InitializationOptions\r\nimport mcp.server.stdio\r\nimport mcp.types as types\r\n\r\nclass DatabaseMCPServer:\r\n    def __init__(self, db_connection):\r\n        self.db = db_connection\r\n        self.server = Server(\"database-mcp\")\r\n\r\n        # Register tools\r\n        @self.server.list_tools()\r\n        async def handle_list_tools() -> list[types.Tool]:\r\n            return [\r\n                types.Tool(\r\n                    name=\"query\",\r\n                    description=\"Execute a SQL query on the database\",\r\n                    inputSchema={\r\n                        \"type\": \"object\",\r\n                        \"properties\": {\r\n                            \"sql\": {\"type\": \"string\", \"description\": \"SQL query\"},\r\n                        },\r\n                        \"required\": [\"sql\"],\r\n                    },\r\n                ),\r\n                types.Tool(\r\n                    name=\"get_schema\",\r\n                    description=\"Get the database schema\",\r\n                    inputSchema={\r\n                        \"type\": \"object\",\r\n                        \"properties\": {},\r\n                    },\r\n                ),\r\n            ]\r\n\r\n        @self.server.call_tool()\r\n        async def handle_call_tool(name: str, arguments: dict) -> list[types.TextContent]:\r\n            if name == \"query\":\r\n                result = self.db.execute(arguments[\"sql\"])\r\n                return [types.TextContent(type=\"text\", text=str(result))]\r\n            if name == \"get_schema\":\r\n                schema = self.db.get_schema()\r\n                return [types.TextContent(type=\"text\", text=str(schema))]\r\n            raise ValueError(f\"Unknown tool: {name}\")\r\n\r\n        # Register resources (data sources)\r\n        @self.server.list_resources()\r\n        async def handle_list_resources() -> list[types.Resource]:\r\n            return [\r\n                types.Resource(\r\n                    uri=\"database://tables\",\r\n                    name=\"Database Tables\",\r\n                    description=\"List of all database tables\",\r\n                    mimeType=\"application/json\",\r\n                ),\r\n            ]\r\n\r\n        @self.server.read_resource()\r\n        async def handle_read_resource(uri: str) -> str:\r\n            if uri == \"database://tables\":\r\n                tables = self.db.get_table_names()\r\n                return json.dumps(tables)\r\n            raise ValueError(f\"Unknown resource: {uri}\")\r\n\r\n    async def run(self):\r\n        async with mcp.server.stdio.stdio_server() as (read_stream, write_stream):\r\n            await self.server.run(\r\n                read_stream,\r\n                write_stream,\r\n                InitializationOptions(\r\n                    server_name=\"database-mcp\",\r\n                    server_version=\"1.0.0\",\r\n                ),\r\n            )\r\n\r\n## MCP Client (in the agent)\r\nclass MCPClient:\r\n    def __init__(self):\r\n        self.servers: dict[str, ServerSession] = {}\r\n        self.tools: list[types.Tool] = []\r\n\r\n    async def connect_server(self, name: str, command: str):\r\n        # Spawn MCP server process\r\n        process = await asyncio.create_subprocess_exec(\r\n            *command.split(),\r\n            stdin=asyncio.subprocess.PIPE,\r\n            stdout=asyncio.subprocess.PIPE,\r\n            stderr=asyncio.subprocess.PIPE,\r\n        )\r\n        read, write = process.stdout, process.stdin\r\n        session = await self._create_session(read, write)\r\n        self.servers[name] = session\r\n\r\n        # Discover tools\r\n        result = await session.list_tools()\r\n        self.tools.extend(result.tools)\r\n\r\n    async def execute_tool(self, tool_name: str, arguments: dict) -> Any:\r\n        for server_name, session in self.servers.items():\r\n            result = await session.call_tool(tool_name, arguments)\r\n            if result is not None:\r\n                return result.content\r\n        raise ValueError(f\"Tool {tool_name} not found on any connected server\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits of MCP"
      }), ": Standardized integration (no custom adapters for each tool), dynamic discovery (new tools auto-available), security boundaries (server controls access), composability (combine multiple MCP servers)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "78-production-agents",
      children: "7.8 Production Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Building production-ready agent systems requires addressing reliability, safety, observability, and cost."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observability"
      }), ": Log every step (thought, tool call, result, errors). Track token usage, latency, and cost per agent run. Use distributed tracing (LangSmith, OpenTelemetry) to follow agent execution across tool calls."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error recovery"
      }), ": Implement retry with exponential backoff for transient failures. Use circuit breakers for external APIs. Have fallback strategies when primary tools fail. Save agent state periodically for recovery."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Safety"
      }), ": Rate-limit tool calls (per user, per session). Set max steps, max tokens, and timeout for agent runs. Implement human-in-the-loop for high-risk actions (database writes, payments, account changes). Validate all tool inputs and outputs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nfrom typing import Optional\r\nfrom dataclasses import dataclass\r\n\r\n@dataclass\r\nclass AgentRunConfig:\r\n    max_steps: int = 25\r\n    max_tokens: int = 16000\r\n    timeout_seconds: int = 120\r\n    max_tool_calls_per_minute: int = 30\r\n    require_human_approval_for: set = None\r\n\r\nclass ProductionAgent:\r\n    def __init__(self, llm, tools, config: AgentRunConfig, tracer=None):\r\n        self.llm = llm\r\n        self.tools = tools\r\n        self.config = config\r\n        self.tracer = tracer\r\n        self.tool_call_times: list[float] = []\r\n        self.state = AgentState()\r\n\r\n    async def run(self, user_input: str) -> str:\r\n        start_time = time.time()\r\n        self.state = AgentState()\r\n        self.state.messages.append({\"role\": \"user\", \"content\": user_input})\r\n\r\n        total_tokens = 0\r\n        with self.tracer.start_span(\"agent_run\") if self.tracer else nullcontext():\r\n            while self.state.current_step < self.config.max_steps:\r\n                # Check timeout\r\n                if time.time() - start_time > self.config.timeout_seconds:\r\n                    return \"Agent timed out. Partial result: \" + self._get_last_output()\r\n\r\n                # Check rate limit\r\n                self._clean_old_tool_calls()\r\n                if len(self.tool_call_times) >= self.config.max_tool_calls_per_minute:\r\n                    await asyncio.sleep(60 - (time.time() - self.tool_call_times[0]))\r\n\r\n                # Generate next action\r\n                response = await self.llm.generate(\r\n                    system=self._get_system_prompt(),\r\n                    messages=self.state.messages,\r\n                    tools=list(self.tools.values()),\r\n                    max_tokens=self.config.max_tokens - total_tokens,\r\n                )\r\n                total_tokens += response.usage.total_tokens\r\n\r\n                if total_tokens > self.config.max_tokens:\r\n                    return \"Token limit reached.\"\r\n\r\n                if response.finish_reason == \"stop\":\r\n                    final = response.content\r\n                    self._log_run(user_input, final, start_time, total_tokens)\r\n                    return final\r\n\r\n                if response.finish_reason == \"tool_calls\":\r\n                    self.state.current_step += 1\r\n                    for tool_call in response.tool_calls:\r\n                        # Human approval check\r\n                        if self._needs_approval(tool_call):\r\n                            approved = await self._request_human_approval(tool_call)\r\n                            if not approved:\r\n                                continue\r\n\r\n                        result = await self._execute_with_monitoring(tool_call)\r\n                        self.state.messages.append({\r\n                            \"role\": \"tool\",\r\n                            \"tool_call_id\": tool_call.id,\r\n                            \"content\": result,\r\n                        })\r\n\r\n        return \"Max steps reached.\"\r\n\r\n    def _needs_approval(self, tool_call) -> bool:\r\n        if not self.config.require_human_approval_for:\r\n            return False\r\n        return tool_call.function.name in self.config.require_human_approval_for\r\n\r\n    async def _execute_with_monitoring(self, tool_call) -> str:\r\n        self.tool_call_times.append(time.time())\r\n        with self.tracer.start_span(f\"tool_{tool_call.function.name}\") as span:\r\n            span.set_attribute(\"tool\", tool_call.function.name)\r\n            span.set_attribute(\"args\", tool_call.function.arguments)\r\n            result = await safe_execute_tool(tool_call, self.tools)\r\n            span.set_attribute(\"result_length\", len(result))\r\n            return result\r\n\r\n    def _log_run(self, input: str, output: str, start: float, tokens: int):\r\n        duration = time.time() - start\r\n        print(f\"Agent run: {duration:.2f}s, {tokens} tokens, {len(self.tool_call_times)} tool calls\")\r\n\r\n    def _get_last_output(self) -> str:\r\n        for msg in reversed(self.state.messages):\r\n            if msg[\"role\"] == \"assistant\":\r\n                return msg[\"content\"]\r\n        return \"\"\r\n\r\n    def _clean_old_tool_calls(self) -> None:\r\n        now = time.time()\r\n        self.tool_call_times = [t for t in self.tool_call_times if now - t < 60]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost optimization"
      }), ": Use cheaper models for simple steps (classification, intent detection). Batch independent tool calls. Cache repeated tool results. Use semantic caching for similar queries. Set per-user spending limits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent architecture: perceive → reason → act → observe → learn; the LLM is the reasoning core"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tools are the agent's interface to the world; clear descriptions are critical for correct usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory types: short-term (context), long-term (persistent storage), episodic (past experiences), procedural (how-to knowledge)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Planning: ReAct (interleaved reasoning + actions), Plan-and-Execute (generate then execute), Tree-of-Thoughts (multiple branches)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-agent patterns: orchestrator-worker (centralized), peer-to-peer (decentralized), debate (adversarial), pipeline (sequential)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LangGraph: stateful graphs with nodes, edges, conditional routing, and human-in-the-loop support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MCP: standardized protocol for connecting agents to tools and data sources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production agents need observability, safety guardrails, error recovery, cost management, and rate limiting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Agent not using tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improve tool descriptions (be verbose and specific)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding more tools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool calls failing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement retry + error handling in tool execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Letting errors surface to the user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max steps limit + timeout + cycle detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowing infinite loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-agent coordination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear message schema + role definitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agents talking past each other"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Production deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observability + rate limiting + human-in-the-loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploying without monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache tool results + use cheaper models for simple steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calling expensive LLM for every decision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input/output filtering + human approval for critical actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Giving agents unrestricted tool access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ip-s07-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the difference between an agent and a chain?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chain"
          }), ": A predefined sequence of LLM calls and tool executions. The flow is hardcoded — step A → step B → step C. No branching, no dynamic decisions. Deterministic and predictable. Good for well-understood, stable workflows."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Agent"
          }), ": An LLM-driven system that dynamically decides which actions to take. The agent observes the result of each action and decides the next step based on the current state and goal. Autonomous, flexible, and adaptive. Good for open-ended tasks where the optimal path isn't known in advance."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key differences"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.table, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Aspect"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Chain"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Agent"
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Flow"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Fixed, predefined"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Dynamic, LLM-decided"
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Predictability"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "High"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Lower (emergent behavior)"
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Flexibility"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Low"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "High"
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Error handling"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Scripted fallbacks"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Self-correction"
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Best for"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Stable workflows"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Open-ended tasks"
              })]
            }), "\n    "]
          })]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "In practice, many systems combine both: chains for known steps and agents for decision points within those steps."
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
      "data-qid": "ip-s07-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How do you prevent an agent from getting stuck in a loop?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prevention strategies"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Maximum step limit"
            }), ": Set a hard limit (e.g., 25 steps). Return partial result when exceeded."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Timeout"
            }), ": Abort the agent run after a time threshold (e.g., 120 seconds)."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Cycle detection"
            }), ": Track the sequence of tool calls. If the same sequence repeats 2-3 times, break the loop and force a different path."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Novelty requirement"
            }), ": Instruct the agent that repeating the same action is not allowed."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Increasing error penalty"
            }), ": Each retry of the same action costs a larger penalty or reduces available steps."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "State differencing"
            }), ": Compare state before/after each action. If no change, force a different action."]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: ["class LoopDetector:\n    def __init__(self, max_repetitions: int = 3):\n        self.action_history: list[str] = []\n        self.max_reps = max_repetitions\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "def record_action(self, action: str) -&gt; bool:\r\n    self.action_history.append(action)\r\n    if len(self.action_history) &lt; self.max_reps:\r\n        return False\r\n\r\n    # Check for repeating pattern\r\n    for pattern_length in range(1, self.max_reps):\r\n        if len(self.action_history) &gt;= pattern_length * 2:\r\n            recent = self.action_history[-pattern_length:]\r\n            previous = self.action_history[-2*pattern_length:-pattern_length]\r\n            if recent == previous:\r\n                return True  # loop detected\r\n    return False</code></pre>\n"
              })
            }), "\n  "]
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.code, {
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      })]
    }), (0,jsx_runtime.jsxs)(_components.code, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "ip-s07-q3",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q3: Compare ReAct and Plan-and-Execute agent patterns.\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ReAct"
            }), " (Reasoning + Acting): Interleaves thinking and doing. Each step is \"Thought: ... Action: ... Observation: ...\". The agent decides the next action after seeing the result of the previous one."]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Pros: Highly adaptive, can change strategy mid-course based on observations, natural for simple tasks"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Cons: No long-term planning horizon, can get stuck in local optima, doesn't consider future steps"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Best for: Simple tasks (2-5 steps), question answering, single-goal scenarios"
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Plan-and-Execute"
            }), ": First generate a complete plan with all steps, then execute each step sequentially."]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Pros: Clear roadmap, easier to verify and validate, better for multi-step complex tasks, supports re-planning when steps fail"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Cons: Rigid — may miss opportunities discovered during execution, planning overhead for simple tasks"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Best for: Complex multi-step tasks, research projects, software development"
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Hybrid"
            }), ": Generate a high-level plan upfront, then use ReAct within each step. This combines the structure of plan-and-execute with the flexibility of ReAct."]
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
        "data-qid": "ip-s07-q4",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q4: How do you design a tool description for optimal LLM usage?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "Tool descriptions are how the LLM knows when and how to use a tool. Well-crafted descriptions dramatically improve agent performance."
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Best practices"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Be specific about use cases"
              }), ": \"Use for X when Y\" instead of \"Performs X\""]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Mention when NOT to use"
              }), ": Helps the LLM avoid inappropriate tool calls"]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Describe output format"
              }), ": So the LLM knows what to expect and how to interpret results"]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Include parameter details"
              }), ": Valid values, format expectations, defaults"]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Mention side effects"
              }), ": Does this tool modify state? Send emails? Charge money?"]
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
            children: [(0,jsx_runtime.jsxs)(_components.code, {
              children: ["# Bad\n{\"name\": \"search\", \"description\": \"Search the database\"}\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "good",
                children: "Good"
              }), "\n"]
            }), (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\"name\": \"search_employees\",\r\n\"description\": \"Search for employee information by name, email, or department.\r\nUse this when the user asks about an employee's role, contact info, or team.\r\nDo NOT use this for salary information (use get_salary instead).\r\nReturns: list of matching employees with name, email, department, and title.\",\r\n\"parameters\": {...}}"
              })
            })]
          }), "\r\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Rule of thumb"
            }), ": Write the description as if you're explaining the tool to a smart but inexperienced colleague who needs to know exactly when to use it and what to expect."]
          }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "ip-s07-q5",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q5: Explain the Model Context Protocol (MCP) architecture.\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "MCP is a standardized protocol for connecting LLM agents with external tools, data sources, and prompts. It follows a client-server architecture:"
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MCP Server"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Exposes capabilities: tools (functions the agent can call), resources (data the agent can read), prompts (templates the agent can use)"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Communicates via JSON-RPC over stdin/stdout (local) or HTTP+SSE (remote)"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Implements security at the server level (authentication, authorization, rate limiting)"
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MCP Client"
            }), " (in the agent):"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Connects to servers via transport layer"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Discovers available tools, resources, and prompts on connect"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Invokes tools by sending JSON-RPC requests with parameters"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Receives results and error messages"
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Benefits"
            }), ": Standardized integration (any MCP-compliant client works with any MCP server), dynamic discovery (no hardcoded tool lists), composability (connect to multiple servers), security isolation (server controls what it exposes)."]
          }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "MCP is analogous to how USB-C standardizes device connections — once adopted, any \"MCP-compatible\" tool can connect to any \"MCP-compatible\" agent without custom adapters."
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
        "data-qid": "ip-s07-q6",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q6: How do you evaluate an agent's performance?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "Agent evaluation is more complex than model evaluation because agents are multi-step and the path matters, not just the final answer."
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Metrics"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Task success rate"
              }), ": Percentage of tasks completed successfully (binary or graded)"]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Steps to completion"
              }), ": Efficiency — fewer steps is better for the same result"]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Tool call accuracy"
              }), ": Percentage of tool calls that were appropriate for the task"]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Error recovery rate"
              }), ": How often the agent recovers from tool failures vs getting stuck"]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Cost per task"
              }), ": Token usage + API costs"]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Latency"
              }), ": Total time from request to completion"]
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Evaluation approaches"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Golden trajectories"
              }), ": Create reference solutions (the optimal sequence of steps). Compare the agent's path to the golden path using edit distance or similar metrics."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Outcome-based"
              }), ": Only evaluate the final result. Pass/fail based on correctness."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Process-based"
              }), ": Evaluate each intermediate step. Was the right tool chosen? Was the input correct?"]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Adversarial evaluation"
              }), ": Test edge cases — ambiguous inputs, failed tool calls, conflicting instructions."]
            }), "\n    "]
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
        "data-qid": "ip-s07-q7",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q7: When would you use a multi-agent system vs a single agent?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Single agent is better when"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "The task is well-scoped and doesn't require diverse expertise"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Task complexity is low to moderate (5-10 steps)"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Simplicity and maintainability are priorities"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Debugging and testing ease is important"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Latency matters (single agent is faster)"
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-agent is better when"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "The task requires diverse expertise (research + analysis + writing)"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Tasks are complex and benefit from decomposition"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "You need specialization (each agent has unique tools/knowledge)"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "You want review/critique built into the workflow"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Tasks can be parallelized across agents"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "You need role-based safety (e.g., read-only vs write agents)"
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Guideline"
            }), ": Start with a single agent. Add more agents only when you can clearly define distinct roles that would benefit from separate system prompts, tools, or models."]
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
        "data-qid": "ip-s07-q8",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q8: How does LangGraph enable agent control flow?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "LangGraph represents agent workflows as directed graphs where:"
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Nodes"
              }), " are Python functions that process and update the state. Each node typically calls an LLM or executes a tool."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Edges"
              }), " define the graph connectivity. Can be fixed (\"always go from A to B\") or conditional (\"if the last message contains tool calls, go to tool_executor; otherwise, end\")."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "State"
              }), " is a shared TypedDict that passes through all nodes. The agent's messages, task info, and configuration live here."]
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Control flow features"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Cycles"
              }), ": Unlike linear chains, LangGraph supports loops. The agent can call tools, observe results, and loop back to the LLM for the next decision."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Conditional routing"
              }), ": Functions determine which node to go to next based on the current state. This is how agents make decisions."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Human-in-the-loop"
              }), ": The graph can pause execution at specific nodes, request human approval, and resume. State checkpoints enable this."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Persistence"
              }), ": State can be saved to a database, enabling agent runs to survive process restarts."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Streaming"
              }), ": State updates can be streamed in real-time, enabling live UI updates during agent execution."]
            }), "\n    "]
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
        "data-qid": "ip-s07-q9",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q9: What safety measures would you implement for a code-writing agent?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "A code-writing agent that can read/write files, execute commands, and access the internet presents significant risk. Essential safety measures:"
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Sandboxed execution"
              }), ": Run all generated code in an isolated container (Docker) with no network access, read-only file system, and limited resources."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Human approval for destructive operations"
              }), ": Require confirmation for file deletions, database writes, package installations, and deployment commands."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Scope limitation"
              }), ": Restrict file access to a specific project directory. Block access to system files, environment variables, and credentials."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Command blocklist"
              }), ": Block dangerous commands (rm -rf, sudo, chmod, curl to unknown destinations, eval-based execution)."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Output review"
              }), ": Review generated code for security issues before execution — check for SQL injection, command injection, hardcoded secrets."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Rate limiting"
              }), ": Limit file writes and command executions per minute to prevent rapid destructive changes."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Session isolation"
              }), ": Each agent session runs in its own environment. No cross-session contamination."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Audit logging"
              }), ": Log every file read/write, command execution, and tool call with full context for review."]
            }), "\n    "]
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
        "data-qid": "ip-s07-q10",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q10: How do you handle conflicting information from different sources in an agent?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "Agents often encounter conflicting information from different tools or sources. Here's how to handle it:"
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Source priority"
              }), ": Define a hierarchy of trust. \"Primary database > cache > web search\". Instruct the agent to prefer higher-priority sources."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Timestamp-based recency"
              }), ": Prefer the most recent data. Include timestamps in tool outputs."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Confidence scoring"
              }), ": Each source can return a confidence score. The agent weighs higher-confidence sources more heavily."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Triangulation"
              }), ": When sources conflict, the agent is instructed to acknowledge the conflict and present both perspectives rather than picking arbitrarily."]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Ask for clarification"
              }), ": If the conflict can't be resolved, the agent should ask the user for guidance."]
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsxs)(_components.code, {
              children: ["def resolve_conflict(sources: list[dict]) -> str:\n    priority = {\"database\": 3, \"api\": 2, \"web_search\": 1}\n    sorted_sources = sorted(sources, key=lambda s: priority.get(s[\"source\"], 0), reverse=True)\n    best = sorted_sources[0]\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "if len(sources) &gt; 1 and any(s[\"value\"] != best[\"value\"] for s in sources):\r\n    return (\r\n        f\"According to {best['source']}: {best['value']} \"\r\n        f\"(Note: other sources report conflicting information. \"\r\n        f\"Using {best['source']} as the most authoritative source.)\"\r\n    )\r\nreturn best[\"value\"]</code></pre>\n"
                })
              }), "\n  "]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.code, {
          children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-mark-btn",
            children: "✅ Mark Reviewed"
          }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-bookmark-btn",
            children: "🔖 Bookmark"
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(_components.code, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
          className: "tp-qa-card",
          "data-qid": "ip-s07-q11",
          children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
            className: "tp-qa-question",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
              className: "tp-qa-status"
            }), "\n    Q11: Design an agent that can book a meeting with multiple participants.\n  "]
          }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
            className: "tp-qa-answer",
            children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Tools needed"
              }), ": Calendar API (check availability, create event), Email/Slack (send invitations), Contacts directory (resolve names to emails)."]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Agent workflow"
              }), ":"]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
              children: [(0,jsx_runtime.jsxs)(_components.code, {
                children: ["# Step 1: Parse the request\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "user-schedule-a-1-hour-meeting-with-alice-and-bob-next-tuesday-afternoon",
                  children: "User: \"Schedule a 1-hour meeting with Alice and Bob next Tuesday afternoon\""
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "step-2-resolve-participants",
                  children: "Step 2: Resolve participants"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "participants = resolve_contacts([\"Alice\", \"Bob\"])"
                }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
                  id: "-name-alice-email-alicecocom-name-bob-email-bobcocom",
                  children: ["→ [{\"name\": \"Alice\", \"email\": \"", (0,jsx_runtime.jsx)(_components.a, {
                    href: "mailto:alice@co.com",
                    children: "alice@co.com"
                  }), "\"}, {\"name\": \"Bob\", \"email\": \"", (0,jsx_runtime.jsx)(_components.a, {
                    href: "mailto:bob@co.com",
                    children: "bob@co.com"
                  }), "\"}]"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "step-3-check-availability",
                  children: "Step 3: Check availability"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["slots = check_availability(\r\nparticipants=[\"", (0,jsx_runtime.jsx)(_components.a, {
                    href: "mailto:alice@co.com",
                    children: "alice@co.com"
                  }), "\", \"", (0,jsx_runtime.jsx)(_components.a, {
                    href: "mailto:bob@co.com",
                    children: "bob@co.com"
                  }), "\", \"", (0,jsx_runtime.jsx)(_components.a, {
                    href: "mailto:current_user@co.com",
                    children: "current_user@co.com"
                  }), "\"],\r\ndate=\"next Tuesday\",\r\nduration_minutes=60,\r\ntime_range=\"13:00-17:00\",\r\n)"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "-start-1400-end-1500-all_available-true",
                  children: "→ [{\"start\": \"14:00\", \"end\": \"15:00\", \"all_available\": True}]"
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "step-4-propose-time-to-user",
                  children: "Step 4: Propose time to user"
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "agent-next-tuesday-at-2-3-pm-works-for-everyone-shall-i-book-it",
                  children: "Agent: \"Next Tuesday at 2-3 PM works for everyone. Shall I book it?\""
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "step-5-create-event-after-user-confirmation",
                  children: "Step 5: Create event (after user confirmation)"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["event = create_calendar_event(\r\ntitle=\"Meeting: Project Discussion\",\r\nstart=\"2024-06-18T14:00:00\",\r\nend=\"2024-06-18T15:00:00\",\r\nparticipants=[\"", (0,jsx_runtime.jsx)(_components.a, {
                    href: "mailto:alice@co.com",
                    children: "alice@co.com"
                  }), "\", \"", (0,jsx_runtime.jsx)(_components.a, {
                    href: "mailto:bob@co.com",
                    children: "bob@co.com"
                  }), "\"],\r\n)\r\nsend_invitations(event[\"id\"])"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "step-6-confirm",
                  children: "Step 6: Confirm"
                }), "\n"]
              }), (0,jsx_runtime.jsx)(_components.h2, {
                id: "agent-meeting-booked-for-tuesday-at-200-pm-invitations-sent",
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Agent: \"Meeting booked for Tuesday at 2:00 PM. Invitations sent.\""
                })
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "<p><strong>Edge cases</strong>: No common slot found (suggest alternatives), participant declines (re-schedule), timezone differences (auto-convert), recurring meetings (handle separately).</p>\n"
              })
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
          "data-qid": "ip-s07-q12",
          children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
            className: "tp-qa-question",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
              className: "tp-qa-status"
            }), "\n    Q12: What is the difference between tool use and function calling?\n  "]
          }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
            className: "tp-qa-answer",
            children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Function calling"
              }), " (OpenAI terminology, also called \"tool use\" in Anthropic): The LLM outputs structured JSON specifying a function name and arguments. The API returns a special response with `finish_reason: \"tool_calls\"` and the function call details. The application is responsible for executing the function and returning the result."]
            }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
              children: "This is a capability of the LLM API — the model is trained to output structured function calls."
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Broader tool use"
              }), " encompasses the full system: defining tool schemas, deciding when to call which tool, executing the tool, handling results, and looping back to the LLM. Tool use includes function calling as a component but also covers:"]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Tool discovery (via MCP or static registration)"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Orchestration (single vs parallel calls)"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Error handling (retries, fallbacks)"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Result integration (how tool outputs are presented to the LLM)"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Rate limiting and safety checks"
              }), "\n    "]
            }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
              children: "In everyday usage, \"function calling\" and \"tool use\" are often used interchangeably to mean \"the LLM can request external actions.\" The distinction matters mainly when discussing architecture."
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
          "data-qid": "ip-s07-q13",
          children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
            className: "tp-qa-question",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
              className: "tp-qa-status"
            }), "\n    Q13: How do you optimize agent response time?\n  "]
          }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
            className: "tp-qa-answer",
            children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "LLM optimization"
              }), ":"]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Use faster models for simple decisions (classification, intent detection) and reserve powerful models for complex reasoning"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Reduce context size by trimming or summarizing history"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Use speculative decoding to reduce per-token latency"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Batch independent tool calls instead of sequential"
              }), "\n    "]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Tool optimization"
              }), ":"]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Cache results of frequently-used, slow-changing tools"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Use connection pooling for database and API access"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Implement tool result prefetching (predict what tools might be needed)"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Set aggressive timeouts on tool calls"
              }), "\n    "]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Architecture optimization"
              }), ":"]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Stream token output so users see partial results while the agent continues working"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Use parallel tool execution for independent operations"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Consider a hybrid architecture where a fast classifier routes to specialized handlers"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Use agent run pooling for common operations (pre-computed responses to frequent queries)"
              }), "\n    "]
            }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "# Parallel tool execution\nasync def execute_tools_parallel(tool_calls: list, tools: dict) -> list:\n    tasks = []\n    for tc in tool_calls:\n        tasks.append(safe_execute_tool(tc, tools))\n    return await asyncio.gather(*tasks)"
              })
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
          "data-qid": "ip-s07-q14",
          children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
            className: "tp-qa-question",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
              className: "tp-qa-status"
            }), "\n    Q14: How would you build an agent that can browse the web?\n  "]
          }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
            className: "tp-qa-answer",
            children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Approach 1 — Read-only browser tools"
              }), ":"]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Provide tools: `browse_url(url)`, `search_web(query)`, `extract_text(html)`, `click_element(selector)`, `scroll_page(direction)`"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Use a headless browser (Playwright, Puppeteer) behind the tools"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "The agent issues commands to navigate and extract information"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Limit to read-only operations for safety"
              }), "\n    "]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Approach 2 — Screenshot + vision model"
              }), ":"]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Take screenshots of the page and use a vision-capable LLM (GPT-4V) to understand the content"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Agent decides: \"click the login button at coordinates (400, 600)\""
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "More natural interaction but higher latency and cost"
              }), "\n    "]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Key challenges"
              }), ":"]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Authentication: Agents can't handle login flows without credentials — require pre-authenticated sessions"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "JavaScript-heavy sites: Many modern sites require JS rendering — use a full browser engine"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "CAPTCHAs: The agent will get stuck on CAPTCHAs — design workflows that avoid triggering them"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Session management: Maintain cookies and local storage across requests"
              }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                children: "Safety: Prevent the agent from performing destructive actions (form submission, account deletion)"
              }), "\n    "]
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
          "data-qid": "ip-s07-q15",
          children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
            className: "tp-qa-question",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
              className: "tp-qa-status"
            }), "\n    Q15: Design a multi-agent system for automated code review.\n  "]
          }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
            className: "tp-qa-answer",
            children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Architecture"
              }), ":"]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Orchestrator Agent"
                }), ": Receives the PR diff, breaks it into files/components, assigns reviewers"]
              }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Static Analysis Agent"
                }), ": Analyzes code quality, style issues, potential bugs (wraps linters: ruff, mypy, eslint)"]
              }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Security Agent"
                }), ": Checks for OWASP Top 10 vulnerabilities, hardcoded secrets, injection risks"]
              }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Logic Review Agent"
                }), ": Reviews algorithm correctness, edge case coverage, potential race conditions"]
              }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Documentation Agent"
                }), ": Checks if code changes are documented, verifies docstring accuracy"]
              }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Synthesis Agent"
                }), ": Collects all reviews, resolves conflicts, and produces the final review summary"]
              }), "\n    "]
            }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsxs)(_components.code, {
                children: ["class CodeReviewOrchestrator:\n    def __init__(self):\n        self.agents = {\n            \"static\": StaticAnalysisAgent(),\n            \"security\": SecurityReviewAgent(),\n            \"logic\": LogicReviewAgent(),\n            \"docs\": DocumentationAgent(),\n        }\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "async def review_pr(self, pr_diff: str, repo_context: dict) -&gt; ReviewReport:\r\n    # Distribute code files to agents\r\n    files = self._parse_diff(pr_diff)\r\n    reviews = {}\r\n\r\n    # Run analysis agents in parallel\r\n    tasks = {}\r\n    for agent_name, agent in self.agents.items():\r\n        tasks[agent_name] = agent.review(files, repo_context)\r\n    results = await asyncio.gather(*tasks.values())\r\n\r\n    for agent_name, result in zip(self.agents.keys(), results):\r\n        reviews[agent_name] = result\r\n\r\n    # Synthesis agent produces final report\r\n    synthesis = SynthesisAgent()\r\n    final_report = await synthesis.synthesize(reviews)\r\n    return final_report</code></pre>\r\n<p><strong>Review criteria</strong>: Issues are categorized as blocker/critical/warning/suggestion. The orchestrator deduplicates overlapping findings. The final review is posted as a PR comment with per-file annotations.</p>\n"
                  })
                }), "\n  "]
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.code, {
            children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-mark-btn",
              children: "✅ Mark Reviewed"
            }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-bookmark-btn",
              children: "🔖 Bookmark"
            }), "\n"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.code, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "chapter-quiz",
            children: "Chapter Quiz"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q1"
            }), ": What is the core reasoning engine of an AI agent?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) Vector database\r\nb) Tool executor\r\nc) LLM\r\nd) Memory store"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "ip-s07-quiz1",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: c) LLM"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "The LLM serves as the reasoning core, deciding which actions to take based on the current state and goals. Tools and memory support this reasoning."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q2"
            }), ": Which LangGraph feature enables agent loops?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) Conditional edges\r\nb) State checkpoints\r\nc) Cycles (directed cycles in the graph)\r\nd) Node timeouts"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "ip-s07-quiz2",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: c) Cycles (directed cycles in the graph)"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "LangGraph supports cycles — the agent can loop from a tool node back to the LLM node, enabling multi-step decision-making."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q3"
            }), ": What does MCP standardize?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) Model training pipelines\r\nb) Connections between LLMs and external tools/data\r\nc) Prompt template formats\r\nd) Embedding model evaluation"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "ip-s07-quiz3",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: b) Connections between LLMs and external tools/data"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "The Model Context Protocol standardizes how agents discover and interact with tools, resources, and prompts across different providers."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q4"
            }), ": Which memory type stores records of past agent experiences for learning?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) Short-term memory\r\nb) Procedural memory\r\nc) Episodic memory\r\nd) Working memory"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "ip-s07-quiz4",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: c) Episodic memory"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "Episodic memory records specific past episodes (actions taken, outcomes observed), enabling the agent to learn from past experiences."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q5"
            }), ": What is the most important part of a tool definition for LLM understanding?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) The function name\r\nb) The parameter JSON schema\r\nc) The description\r\nd) The return type"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "ip-s07-quiz5",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: c) The description"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "The description tells the LLM when and why to use the tool. A well-written description is more important than parameter schemas for correct tool selection."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "exercises",
            children: "Exercises"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Easy"
            }), " — Build a simple ReAct agent that can answer questions using a calculator tool and a weather API tool. Implement the Thought/Action/Observation loop manually (without frameworks)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Easy"
            }), " — Create three LangGraph nodes: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "llm_call"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tool_executor"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "output_formatter"
            }), ". Connect them with conditional routing: if the LLM calls a tool, go to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tool_executor"
            }), ", otherwise go to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "output_formatter"
            }), " then end."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Medium"
            }), " — Implement a multi-agent system with a researcher agent and a writer agent. The researcher gathers information from a mock API, and the writer produces a formatted report. Use message-based communication between agents."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Medium"
            }), " — Build an MCP server that exposes two tools: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "search_documents"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "get_document"
            }), ". Connect it to an MCP client in an agent. The agent should discover the tools automatically on connection."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Hard"
            }), " — Design and implement a production-grade code review agent. It should analyze a pull request diff, check for style issues, security vulnerabilities, and logical errors. Output a structured review with severity levels and line-specific comments. Add human-in-the-loop before posting the review."]
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
                  children: "How does AI Agents Interview behave differently at scale — memory, throughput, or precision-wise?"
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
              children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using AI Agents Interview\")."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Add a bullet describing a project that applies AI Agents Interview to real data, with numbers."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Mention the tools and libraries you used alongside AI Agents Interview (linters, test frameworks, profiling tools)."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Keep resume bullets under 15 words and start each with an action verb."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "interview-day-checklist",
            children: "Interview Day Checklist"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Rehearse a 60-second explanation of AI Agents Interview and one real-world analogy."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Prepare one STAR story about debugging a AI Agents Interview-related production issue."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Review complexity and edge cases for the classic problem in this chapter."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Have questions ready: how does the team apply AI Agents Interview in production today?"
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
              }), " AI Agents Interview builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "True."
              }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "True or False:"
              }), " You should write at least one code example for AI Agents Interview before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "True."
              }), " Active recall with hands-on code beats passive reading for retention."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "True or False:"
              }), " The complexity analysis for AI Agents Interview is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "False."
              }), " Complexity grows with input size; always state best, average, and worst case."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "True or False:"
              }), " Edge cases (empty input, invalid input, boundary values) matter for AI Agents Interview in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
              children: "The chapter that covers AI Agents Interview is Chapter ___ of this module. — Answer: check the module's table of contents."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The time complexity of the standard approach to 07 Ai Agents Interview is ___. — Answer: O(k) per tool call where k=tool latency"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The main edge case to handle when implementing 07 Ai Agents Interview is ___. — Answer: infinite loops, tool failures, context overflow"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The tools commonly used to debug AI Agents Interview issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The related topic that connects to AI Agents Interview in the next chapter is ___. — Answer: see the Next Topic section."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "scenario-questions",
            children: "Scenario Questions"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Scenario:"
                }), " A teammate ships a change involving AI Agents Interview that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
                }), " A new hire asks you to explain AI Agents Interview in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Scenario:"
                }), " Your team's codebase has three different patterns for AI Agents Interview and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
                  children: "Complete Medium exercises, explain AI Agents Interview to someone else"
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
              children: "Always write a one-line example of AI Agents Interview from memory before opening the chapter — active recall first."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Use the chapter's Revision Notes as a checklist: you have mastered AI Agents Interview when you can explain each bullet."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "For interviews, practice explaining AI Agents Interview twice: once with a technical audience, once with a non-technical audience."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Keep a personal examples file where you collect your own AI Agents Interview snippets; interviewers love original examples."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "memory-tricks",
            children: "Memory Tricks"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Acronym"
              }), ": build a mnemonic from the 5 key concepts of AI Agents Interview listed in the Chapter at a Glance table."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Story"
              }), ": link AI Agents Interview to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Number anchor"
              }), ": remember the complexity of AI Agents Interview by connecting it to a known algorithm of the same class."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Color code"
              }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Teach-back"
              }), ": explain AI Agents Interview to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
              children: "'Building LLM Powered Applications' by Valentina Alto (Packt) Agents Interview"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "related-topics",
            children: "Related Topics"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Previous chapter"
              }), " in Module 21 — builds the foundation for 07 Ai Agents Interview"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Next chapter"
              }), " — extends 07 Ai Agents Interview with advanced techniques"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Module 07 System Design"
              }), " — how 07 Ai Agents Interview fits into scalable production architectures"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Module 21 Interview Preparation"
              }), " — FAANG-style questions on 07 Ai Agents Interview"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Module 19 Capstone Projects"
              }), " — end-to-end application of 07 Ai Agents Interview"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "faqs",
            children: "FAQs"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Do I need to memorize all of 07 Ai Agents Interview?"
              }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What if I get stuck on an exercise?"
              }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "How much time should I spend on 07 Ai Agents Interview?"
              }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Is 07 Ai Agents Interview asked in FAANG interviews?"
              }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What's the fastest way to master 07 Ai Agents Interview?"
              }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "important-notes",
            children: "Important Notes"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "AI Agents Interview is a core requirement for the rest of this module — do not skip the examples."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Always analyze complexity (time and space) when working with AI Agents Interview."
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
              children: "AI Agents Interview emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The tools used for AI Agents Interview today evolved from simpler versions; the chapter covers the modern, recommended approach."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Interviewers value knowing one historical fact about AI Agents Interview — it shows genuine interest, not just cramming."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The library/tooling ecosystem around AI Agents Interview changes quickly; focus on fundamentals that remain stable."
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
                  children: "07 Ai Agents Interview is like a GPS navigation system"
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
                }), " — this chapter contributes the AI Agents Interview skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "flashcards",
            children: "Flashcards"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "21interviewpreparation-07aiagentsinterview-flash1",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    What is the core reasoning engine of an AI agent?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "c) LLM"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "21interviewpreparation-07aiagentsinterview-flash2",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    Which LangGraph feature enables agent loops?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "c) Cycles (directed cycles in the graph)"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "21interviewpreparation-07aiagentsinterview-flash3",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    What does MCP standardize?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "b) Connections between LLMs and external tools/data"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "21interviewpreparation-07aiagentsinterview-flash4",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    Which memory type stores records of past agent experiences for learning?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "c) Episodic memory"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "21interviewpreparation-07aiagentsinterview-flash5",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    What is the most important part of a tool definition for LLM understanding?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "c) The description"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "research-references",
            children: "Research References"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Official documentation of the primary library for AI Agents Interview (linked in Further Reading)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The classic paper or textbook chapter introducing AI Agents Interview (see References below)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The standard library reference for AI Agents Interview-related functions"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Engineering blog posts from companies running AI Agents Interview in production at scale"
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
              }), " — Claude's native function calling interface Agents Interview"]
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
              }), ": Add structured logging at each stage of the 07 Ai Agents Interview pipeline to identify exactly where the failure occurs."]
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
              children: "Write a minimal working example of AI Agents Interview."
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
              children: "Tell me about a time you debugged a AI Agents Interview problem in a project."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "How would you design a system where AI Agents Interview is used at scale?"
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
              children: "from typing import Any, Optional\r\n\r\ndef demonstrate_07_ai_agents_interview(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 07 Ai Agents Interview.\r\n\r\n    Key concepts: tools, memory, planning, execution, observation\r\n    Complexity: O(k) per tool call where k=tool latency\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 07 Ai Agents Interview here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
                  children: "Explain AI Agents Interview without notes"
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
              href: "/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/08-system-design-interview",
              children: "System Design Interview"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "limitations",
            children: "Limitations"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "AI Agents Interview, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Performance of AI Agents Interview depends on input size and distribution — always benchmark for your own data."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
            }), "\n"]
          }), "\n"]
        })]
      })]
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