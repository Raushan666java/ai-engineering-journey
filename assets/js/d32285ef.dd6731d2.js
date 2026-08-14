"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[59004],{

/***/ 15882
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_01_introduction_to_ai_agents_md_d32_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-13-ai-agents-langgraph-01-introduction-to-ai-agents-md-d32.json
const site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_01_introduction_to_ai_agents_md_d32_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-agents-langgraph/01-introduction-to-ai-agents","title":"Introduction to AI Agents","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/13-ai-agents-langgraph/01-introduction-to-ai-agents.md","sourceDirName":"courses/ai-engineering-placement/13-ai-agents-langgraph","slug":"/ai-engineering-placement/13-ai-agents-langgraph/01-introduction-to-ai-agents","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/01-introduction-to-ai-agents","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":163,"frontMatter":{"id":"01-introduction-to-ai-agents","slug":"/ai-engineering-placement/13-ai-agents-langgraph/01-introduction-to-ai-agents","title":"Introduction to AI Agents","sidebar_label":"Introduction to AI Agents","sidebar_position":163},"sidebar":"placementSidebar","previous":{"title":"13 — AI Agents & LangGraph","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph"},"next":{"title":"Agent Architectures","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/02-agent-architectures"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/13-ai-agents-langgraph/01-introduction-to-ai-agents.md


const frontMatter = {
	id: '01-introduction-to-ai-agents',
	slug: '/ai-engineering-placement/13-ai-agents-langgraph/01-introduction-to-ai-agents',
	title: 'Introduction to AI Agents',
	sidebar_label: 'Introduction to AI Agents',
	sidebar_position: 163
};
const contentTitle = 'Introduction to AI Agents';

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
  "value": "1.1 What is an AI Agent?",
  "id": "11-what-is-an-ai-agent",
  "level": 2
}, {
  "value": "1.2 Core Components",
  "id": "12-core-components",
  "level": 2
}, {
  "value": "1.2.1 LLM Brain",
  "id": "121-llm-brain",
  "level": 3
}, {
  "value": "1.2.2 Tools",
  "id": "122-tools",
  "level": 3
}, {
  "value": "1.2.3 Memory",
  "id": "123-memory",
  "level": 3
}, {
  "value": "1.2.4 Orchestration Loop",
  "id": "124-orchestration-loop",
  "level": 3
}, {
  "value": "1.3 Agent Paradigms",
  "id": "13-agent-paradigms",
  "level": 2
}, {
  "value": "1.3.1 ReAct (Reasoning + Acting)",
  "id": "131-react-reasoning--acting",
  "level": 3
}, {
  "value": "1.3.2 Plan-and-Execute",
  "id": "132-plan-and-execute",
  "level": 3
}, {
  "value": "1.3.3 Reflexion",
  "id": "133-reflexion",
  "level": 3
}, {
  "value": "1.4 ReAct in Depth",
  "id": "14-react-in-depth",
  "level": 2
}, {
  "value": "1.4.1 Structured ReAct",
  "id": "141-structured-react",
  "level": 3
}, {
  "value": "1.5 Basic Agent Implementation",
  "id": "15-basic-agent-implementation",
  "level": 2
}, {
  "value": "Complete Working Agent",
  "id": "complete-working-agent",
  "level": 3
}, {
  "value": "1.6 Agent Evaluation",
  "id": "16-agent-evaluation",
  "level": 2
}, {
  "value": "1.6.1 Success Rate",
  "id": "161-success-rate",
  "level": 3
}, {
  "value": "1.6.2 Efficiency Metrics",
  "id": "162-efficiency-metrics",
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
  "value": "True/False",
  "id": "truefalse",
  "level": 3
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 3
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 3
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 3
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
  "id": "truefalse-1",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank-1",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions-1",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions-1",
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
        id: "introduction-to-ai-agents",
        children: "Introduction to AI Agents"
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
            children: "Understand what AI agents are and how they differ from simple LLM calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify the core components of an agent (perception, reasoning, action, memory)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare agent paradigms — ReAct, Plan-and-Execute, Reflexion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement a basic tool-using agent with reasoning loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate agent performance using task completion metrics"
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
      children: "Understanding introduction to ai agents is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how introduction to ai agents works in practice."
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
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is an AI Agent?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autonomous systems that perceive, reason, act"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core Components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM brain, tools, memory, orchestration loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Paradigms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReAct, Plan-and-Execute, Reflexion, Toolformer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReAct in Depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reasoning and Acting interleaved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic Agent Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool registry, reasoning loop, action execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success rate, steps, cost, robustness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[User Input] --> B[LLM Reasoner]\n    B --> C{Action Needed?}\n    C -->|Yes| D[Select Tool]\n    D --> E[Execute Tool]\n    E --> F[Observe Result]\n    F --> B\n    C -->|No| G[Final Answer]\n    G --> H[Return to User]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-what-is-an-ai-agent",
      children: "1.1 What is an AI Agent?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An AI agent is an autonomous system that uses an LLM as its reasoning engine to perceive its environment, make decisions, and take actions to accomplish goals. Unlike a simple LLM call that generates text in one pass, an agent can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Observe"
        }), ": Process user input, tool outputs, and environmental state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reason"
        }), ": Plan steps, decide which actions to take, analyze results"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Act"
        }), ": Call external tools, APIs, databases, or generate responses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Learn"
        }), ": Adapt behavior based on feedback and accumulated experience"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\nfrom typing import List, Dict, Optional, Callable, Any\nimport json\n\n@dataclass\nclass AgentStep:\n    thought: str\n    action: Optional[str] = None\n    action_input: Optional[Dict] = None\n    observation: Optional[str] = None\n\nclass SimpleAgent:\n    def __init__(self, llm_fn: Callable, tools: Dict[str, Callable]):\n        self.llm = llm_fn\n        self.tools = tools\n        self.steps: List[AgentStep] = []\n\n    def run(self, task: str, max_steps: int = 10) -> str:\n        prompt = self._build_prompt(task)\n\n        for step_num in range(max_steps):\n            response = self.llm(prompt)\n            action, action_input = self._parse_action(response)\n\n            step = AgentStep(thought=response, action=action, action_input=action_input)\n            self.steps.append(step)\n\n            if action == \"final_answer\":\n                return action_input.get(\"answer\", response)\n\n            if action and action in self.tools:\n                observation = self.tools[action](**action_input)\n                step.observation = observation\n                prompt += f\"\\nObservation: {observation}\"\n            else:\n                prompt += f\"\\nObservation: Unknown action: {action}\"\n\n        return \"Max steps reached\"\n\n    def _build_prompt(self, task: str) -> str:\n        tool_descriptions = \"\\n\".join([f\"- {name}: {fn.__doc__ or 'No description'}\" for name, fn in self.tools.items()])\n        return f\"\"\"You are an AI assistant with tools.\n\nTools:\n{tool_descriptions}\n\nTask: {task}\n\nThink step by step. You can use tools or give a final answer.\n\nRespond with JSON: {{\"action\": \"tool_name\", \"action_input\": {{...}}}}\nOr: {{\"action\": \"final_answer\", \"action_input\": {{\"answer\": \"...\"}}}}\n\nThought:\"\"\"\n\n    def _parse_action(self, response: str) -> tuple:\n        try:\n            parsed = json.loads(response)\n            return parsed.get(\"action\"), parsed.get(\"action_input\", {})\n        except json.JSONDecodeError:\n            return \"final_answer\", {\"answer\": response}\n\ndef search_tool(query: str) -> str:\n    \"\"\"Search the knowledge base for information.\"\"\"\n    return f\"Search results for: {query}\"\n\ndef calculator_tool(expression: str) -> str:\n    \"\"\"Evaluate a mathematical expression.\"\"\"\n    try:\n        return str(eval(expression))\n    except:\n        return \"Error evaluating expression\"\n\nagent = SimpleAgent(\n    llm_fn=lambda p: '{\"action\": \"final_answer\", \"action_input\": {\"answer\": \"I am an AI agent.\"}}',\n    tools={\"search\": search_tool, \"calculate\": calculator_tool},\n)\nresult = agent.run(\"What is 2+2?\")\nprint(f\"Agent result: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-core-components",
      children: "1.2 Core Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-llm-brain",
      children: "1.2.1 LLM Brain"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The LLM serves as the reasoning engine. It decides which actions to take, parses tool outputs, and generates final responses."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LLMBrain:\n    def __init__(self, model_fn: Callable, system_prompt: str = None):\n        self.model_fn = model_fn\n        self.system_prompt = system_prompt or \"You are a helpful AI assistant.\"\n\n    def think(self, context: str) -> str:\n        prompt = f\"{self.system_prompt}\\n\\n{context}\"\n        return self.model_fn(prompt)\n\n    def decide_action(self, thought: str, available_tools: List[str]) -> str:\n        decision_prompt = f\"\"\"Based on this reasoning: {thought}\n\nAvailable tools: {', '.join(available_tools)}\n\nWhich tool should be used next? If done, say FINAL.\"\"\"\n        return self.model_fn(decision_prompt)\n\nbrain = LLMBrain(lambda p: \"I think I should search for information.\")\nprint(brain.think(\"What is the weather?\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-tools",
      children: "1.2.2 Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tools are functions the agent can call to interact with the external world."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Tool:\n    def __init__(self, name: str, description: str, fn: Callable, parameters: Dict = None):\n        self.name = name\n        self.description = description\n        self.fn = fn\n        self.parameters = parameters or {}\n\n    def execute(self, **kwargs) -> str:\n        try:\n            result = self.fn(**kwargs)\n            return str(result)\n        except Exception as e:\n            return f\"Error: {e}\"\n\n    def to_openai_format(self) -> Dict:\n        return {\n            \"type\": \"function\",\n            \"function\": {\n                \"name\": self.name,\n                \"description\": self.description,\n                \"parameters\": self.parameters,\n            },\n        }\n\nclass ToolRegistry:\n    def __init__(self):\n        self.tools: Dict[str, Tool] = {}\n\n    def register(self, tool: Tool):\n        self.tools[tool.name] = tool\n\n    def get_descriptions(self) -> str:\n        return \"\\n\".join([f\"- {t.name}: {t.description}\" for t in self.tools.values()])\n\n    def get_openai_tools(self) -> List[Dict]:\n        return [t.to_openai_format() for t in self.tools.values()]\n\n    def execute(self, name: str, **kwargs) -> str:\n        tool = self.tools.get(name)\n        if not tool:\n            return f\"Tool '{name}' not found\"\n        return tool.execute(**kwargs)\n\nregistry = ToolRegistry()\nregistry.register(Tool(\"search\", \"Search for information\", lambda q: f\"Results for {q}\", {\"q\": {\"type\": \"string\"}}))\nregistry.register(Tool(\"calculate\", \"Do math\", lambda expr: eval(expr), {\"expr\": {\"type\": \"string\"}}))\nprint(registry.get_descriptions())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-memory",
      children: "1.2.3 Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Memory allows the agent to retain information across steps and conversations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AgentMemory:\n    def __init__(self, max_entries: int = 100):\n        self.short_term: List[Dict] = []\n        self.long_term: Dict[str, Any] = {}\n        self.max_entries = max_entries\n\n    def add_step(self, step: AgentStep):\n        self.short_term.append({\n            \"thought\": step.thought,\n            \"action\": step.action,\n            \"observation\": step.observation,\n        })\n        if len(self.short_term) > self.max_entries:\n            self.short_term.pop(0)\n\n    def get_context(self) -> str:\n        return \"\\n\".join([\n            f\"Step {i}: Thought: {s['thought'][:100]} -> Action: {s['action']}\"\n            for i, s in enumerate(self.short_term, 1)\n        ])\n\n    def remember(self, key: str, value: Any):\n        self.long_term[key] = value\n\n    def recall(self, key: str, default=None):\n        return self.long_term.get(key, default)\n\n    def clear(self):\n        self.short_term.clear()\n\nmemory = AgentMemory()\nmemory.add_step(AgentStep(thought=\"I need to search\", action=\"search\", observation=\"Found results\"))\nprint(memory.get_context())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-orchestration-loop",
      children: "1.2.4 Orchestration Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The orchestration loop ties everything together, managing the cycle of reasoning, action, and observation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AgentOrchestrator:\n    def __init__(self, brain: LLMBrain, tools: ToolRegistry, memory: AgentMemory):\n        self.brain = brain\n        self.tools = tools\n        self.memory = memory\n        self.max_steps = 10\n\n    def run(self, task: str) -> str:\n        context = f\"Task: {task}\"\n        self.memory.clear()\n\n        for step_num in range(self.max_steps):\n            thought = self.brain.think(context)\n            action = self.brain.decide_action(thought, list(self.tools.tools.keys()))\n\n            if action == \"FINAL\":\n                return thought\n\n            result = self.tools.execute(action, q=thought) if action == \"search\" else self.tools.execute(action, expr=thought)\n            self.memory.add_step(AgentStep(thought=thought, action=action, observation=result))\n            context = f\"Task: {task}\\n\\nPrevious steps:\\n{self.memory.get_context()}\"\n\n        return f\"Completed in {self.max_steps} steps\"\n\norch = AgentOrchestrator(brain, registry, memory)\nprint(\"Agent orchestrator ready\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-agent-paradigms",
      children: "1.3 Agent Paradigms"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-react-reasoning--acting",
      children: "1.3.1 ReAct (Reasoning + Acting)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ReAct interleaves reasoning traces with actions, enabling the model to think before acting."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ReActAgent:\n    def __init__(self, llm_fn, tools):\n        self.llm = llm_fn\n        self.tools = tools\n\n    def run(self, task: str) -> str:\n        prompt = self._initial_prompt(task)\n\n        for i in range(10):\n            response = self.llm(prompt)\n            step = self._parse_step(response)\n\n            if step[\"type\"] == \"final\":\n                return step[\"content\"]\n\n            tool_result = self._execute_tool(step)\n            prompt += f\"\\nObservation: {tool_result}\\nThought:\"\n\n        return \"Max steps\"\n\n    def _initial_prompt(self, task: str) -> str:\n        return f\"\"\"Solve the task by reasoning and using tools.\n\nTask: {task}\n\nAvailable: {self.tools.get_descriptions()}\n\nFormat:\nThought: <reasoning>\nAction: <tool_name>\nAction Input: <input>\nObservation: <result>\n... (repeat)\nThought: I have the answer\nFinal Answer: <answer>\n\nThought:\"\"\"\n\n    def _parse_step(self, response: str) -> Dict:\n        if \"Final Answer:\" in response:\n            return {\"type\": \"final\", \"content\": response.split(\"Final Answer:\")[-1].strip()}\n\n        action = \"\"\n        action_input = \"\"\n        for line in response.split(\"\\n\"):\n            if line.startswith(\"Action:\"):\n                action = line.replace(\"Action:\", \"\").strip()\n            elif line.startswith(\"Action Input:\"):\n                action_input = line.replace(\"Action Input:\", \"\").strip()\n\n        return {\"type\": \"action\", \"action\": action, \"input\": action_input}\n\n    def _execute_tool(self, step: Dict) -> str:\n        tool = self.tools.tools.get(step[\"action\"])\n        if tool:\n            return tool.execute(q=step[\"input\"])\n        return f\"Unknown tool: {step['action']}\"\n\nreact = ReActAgent(lambda p: \"Thought: I know the answer.\\nFinal Answer: The answer is 42.\", registry)\nprint(react.run(\"What is the meaning of life?\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-plan-and-execute",
      children: "1.3.2 Plan-and-Execute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Separates planning from execution. Creates a plan first, then executes step by step."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PlanAndExecuteAgent:\n    def __init__(self, llm_fn, tools):\n        self.llm = llm_fn\n        self.tools = tools\n\n    def plan(self, task: str) -> List[str]:\n        plan_prompt = f\"\"\"Create a step-by-step plan to accomplish this task.\n\nTask: {task}\nAvailable tools: {self.tools.get_descriptions()}\n\nPlan:\"\"\"\n        response = self.llm(plan_prompt)\n        steps = [line.strip() for line in response.split(\"\\n\") if line.strip() and (line[0].isdigit() or line.startswith(\"-\"))]\n        return steps\n\n    def execute_step(self, step: str, context: str) -> str:\n        prompt = f\"\"\"Execute this step: {step}\n\nContext: {context}\"\"\"\n        return self.llm(prompt)\n\n    def run(self, task: str) -> str:\n        plan_steps = self.plan(task)\n        context = f\"Task: {task}\\n\\nPlan:\\n\" + \"\\n\".join(plan_steps)\n\n        for step in plan_steps:\n            result = self.execute_step(step, context)\n            context += f\"\\nStep result: {result}\"\n\n        final_prompt = f\"\"\"Based on all results, provide the final answer.\n\n{context}\n\nFinal answer:\"\"\"\n        return self.llm(final_prompt)\n\npe = PlanAndExecuteAgent(lambda p: \"1. Search for information\\n2. Analyze results\\n3. Provide answer\", registry)\nprint(f\"Plan: {pe.plan('Research AI agents')}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-reflexion",
      children: "1.3.3 Reflexion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reflexion adds self-evaluation. The agent evaluates its own outputs and retries if needed."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ReflexionAgent:\n    def __init__(self, llm_fn, tools, max_reflections: int = 3):\n        self.llm = llm_fn\n        self.tools = tools\n        self.max_reflections = max_reflections\n\n    def run(self, task: str) -> str:\n        best_answer = None\n        best_score = -1\n\n        for attempt in range(self.max_reflections):\n            answer = self._execute(task)\n            score = self._evaluate(task, answer)\n\n            if score > best_score:\n                best_score = score\n                best_answer = answer\n\n            if score > 0.8:\n                break\n\n        return best_answer\n\n    def _execute(self, task: str) -> str:\n        return f\"Answer for: {task} (attempt)\"\n\n    def _evaluate(self, task: str, answer: str) -> float:\n        eval_prompt = f\"\"\"Evaluate this answer for the task on a scale of 0 to 1.\n\nTask: {task}\nAnswer: {answer}\n\nScore (0-1):\"\"\"\n        response = self.llm(eval_prompt)\n        try:\n            return float(response.strip())\n        except ValueError:\n            return 0.5\n\nreflexion = ReflexionAgent(lambda p: \"0.95\", registry)\nresult = reflexion.run(\"Solve the math problem\")\nprint(f\"Reflexion result: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-react-in-depth",
      children: "1.4 ReAct in Depth"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "141-structured-react",
      children: "1.4.1 Structured ReAct"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class StructuredReActAgent:\n    def __init__(self, llm_fn, tools):\n        self.llm = llm_fn\n        self.tools = tools\n\n    def run(self, task: str) -> Dict:\n        steps = []\n\n        for i in range(10):\n            response = self.llm(self._format_prompt(task, steps))\n            step = self._parse_structured(response)\n\n            if step[\"type\"] == \"final\":\n                return {\"steps\": steps, \"answer\": step[\"answer\"], \"num_steps\": len(steps)}\n\n            tool_result = self.tools.execute(step.get(\"action\", \"\"), **(step.get(\"arguments\", {})))\n            steps.append({\"thought\": step.get(\"thought\", \"\"), \"action\": step[\"action\"], \"result\": tool_result})\n\n        return {\"steps\": steps, \"answer\": \"Max steps reached\", \"num_steps\": len(steps)}\n\n    def _format_prompt(self, task: str, steps: List[Dict]) -> str:\n        history = \"\"\n        for s in steps:\n            history += f\"Thought: {s['thought']}\\nAction: {s['action']}\\nObservation: {s['result']}\\n\\n\"\n        return f\"\"\"Task: {task}\n\n{history}\nRespond with JSON:\n{{\"thought\": \"...\", \"action\": \"tool_name\", \"arguments\": {{...}}}}\nOr final: {{\"type\": \"final\", \"answer\": \"...\"}}\"\"\"\n\n    def _parse_structured(self, response: str) -> Dict:\n        try:\n            return json.loads(response)\n        except json.JSONDecodeError:\n            return {\"type\": \"final\", \"answer\": response}\n\nsreact = StructuredReActAgent(lambda p: '{\"type\": \"final\", \"answer\": \"Completed.\"}', registry)\nresult = sreact.run(\"Complex task\")\nprint(f\"Completed in {result['num_steps']} steps\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-basic-agent-implementation",
      children: "1.5 Basic Agent Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-working-agent",
      children: "Complete Working Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class WorkingAgent:\n    def __init__(self, tools: ToolRegistry):\n        self.tools = tools\n        self.memory = AgentMemory()\n        self.history: List[Dict] = []\n\n    def run(self, task: str, llm_fn: Callable, max_steps: int = 10) -> str:\n        system_prompt = f\"\"\"You are an AI agent with access to tools.\n\nTools:\n{self.tools.get_descriptions()}\n\nWhen you need to use a tool, respond with:\nACTION: tool_name\nINPUT: input data\n\nWhen you have the answer, respond with:\nFINAL: your answer\n\nThink step by step.\"\"\"\n\n        messages = [{\"role\": \"system\", \"content\": system_prompt}, {\"role\": \"user\", \"content\": task}]\n\n        for step in range(max_steps):\n            response = llm_fn(messages)\n\n            if response.startswith(\"FINAL:\"):\n                answer = response.replace(\"FINAL:\", \"\").strip()\n                self.history.append({\"step\": step, \"type\": \"final\", \"response\": answer})\n                return answer\n\n            if response.startswith(\"ACTION:\"):\n                lines = response.split(\"\\n\")\n                action = lines[0].replace(\"ACTION:\", \"\").strip()\n                input_text = \"\\n\".join(lines[1:]).replace(\"INPUT:\", \"\").strip() if len(lines) > 1 else \"\"\n\n                result = self.tools.execute(action, query=input_text)\n\n                self.history.append({\"step\": step, \"action\": action, \"input\": input_text, \"result\": result})\n                messages.append({\"role\": \"assistant\", \"content\": response})\n                messages.append({\"role\": \"system\", \"content\": f\"Observation: {result}\"})\n\n        return \"Max steps reached\"\n\ndef mock_llm(messages: list) -> str:\n    last = messages[-1][\"content\"]\n    if \"task\" in last.lower():\n        return \"ACTION: search\\nINPUT: information\"\n    return \"FINAL: Task complete.\"\n\nagent_tools = ToolRegistry()\nagent_tools.register(Tool(\"search\", \"Search for information\", lambda query: f\"Found: {query}\"))\n\nwa = WorkingAgent(agent_tools)\nresult = wa.run(\"Find information about AI agents.\", mock_llm)\nprint(f\"Agent result: {result}\")\nprint(f\"Steps taken: {len(wa.history)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-agent-evaluation",
      children: "1.6 Agent Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "161-success-rate",
      children: "1.6.1 Success Rate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def evaluate_agent(agent, test_tasks: List[Dict], llm_fn: Callable) -> Dict:\n    successes = 0\n    total_steps = 0\n    total_cost = 0.0\n\n    for task in test_tasks:\n        result = agent.run(task[\"input\"], llm_fn, max_steps=10)\n        is_success = task[\"expected\"] in result if \"expected\" in task else len(result) > 0\n\n        if is_success:\n            successes += 1\n        total_steps += len(agent.history)\n\n    return {\n        \"success_rate\": round(successes / len(test_tasks) * 100, 1),\n        \"avg_steps\": round(total_steps / len(test_tasks), 1),\n        \"num_tasks\": len(test_tasks),\n    }\n\ntest_tasks = [\n    {\"input\": \"What is AI?\", \"expected\": \"AI\"},\n    {\"input\": \"Search for Python\", \"expected\": \"Python\"},\n]\neval_result = evaluate_agent(wa, test_tasks, mock_llm)\nprint(f\"Agent evaluation: {eval_result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "162-efficiency-metrics",
      children: "1.6.2 Efficiency Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def agent_efficiency(agent, llm_fn, task: str) -> Dict:\n    import time\n    start = time.time()\n    result = agent.run(task, llm_fn)\n    elapsed = time.time() - start\n\n    return {\n        \"task\": task[:50],\n        \"success\": len(result) > 0,\n        \"steps\": len(agent.history),\n        \"latency_ms\": round(elapsed * 1000, 1),\n        \"response_length\": len(result),\n    }\n\nprint(agent_efficiency(wa, mock_llm, \"Quick test\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI agents are autonomous systems that combine LLM reasoning with tool use to accomplish complex tasks. Core components include the LLM brain (reasoning engine),.\ntools (external capabilities), memory (short-term and long-term), and an orchestration loop. Key agent paradigms include ReAct (interleaved reasoning and acting), Plan-and-Execute (separate planning and.\nexecution), and Reflexion (self-evaluation and retry). A basic ReAct agent can be implemented with a tool registry, structured action parsing, and.\na reasoning loop. Agent evaluation measures success rate, average steps, latency, and cost per task."
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
            children: "Start with ReAct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The simplest effective pattern — interleave reasoning and action"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design tools carefully"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear descriptions help the LLM choose correctly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Limit steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always set max steps to prevent infinite loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add safety checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate tool inputs, catch errors, limit resource access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate rigorously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Success rate and average steps are the two most important metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use memory sparingly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too much context confuses the model; keep only recent steps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag01-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the difference between a simple LLM call and an AI agent?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A simple LLM call generates a single response from a prompt without iteration or tool use. An AI agent, by contrast,.\noperates in a loop: it reasons, calls tools, observes results, and repeats until the task is complete. For example, an LLM call returns ", (0,jsx_runtime.jsx)(_components.code, {
            children: "\"The weather in Tokyo is 22°C\""
          }), " if it knows the answer,.\nbut an agent can call a weather API tool, parse the JSON response, and answer even if the knowledge wasn't in its training data. Agents also maintain state across steps,.\nenabling multi-step workflows like researching a topic and writing a report."]
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
      "data-qid": "ag01-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Explain the ReAct paradigm with a concrete example.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ReAct (Reasoning + Acting) interleaves chain-of-thought reasoning with tool-use actions. For a task like \"What is the population density of France?\",.\na ReAct agent might produce: Thought: I need to find France's population and area. Action: search(query=\"France population 2025\"). Observation: 68 million. Action: search(query=\"France area km2\"). Observation: 551,695 km2. Thought: Density = 68M / 551,695 ≈ 123.3 per km2. Final Answer:.\n123.3 people per km2. The key insight is that each reasoning step informs the next action,.\nand each observation feeds back into reasoning, mirroring how humans solve problems."
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
      "data-qid": "ag01-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What are the core components of an AI agent?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The four core components are: (1) LLM Brain — the reasoning engine that decides what to do next based on context;.\n(2) Tools — external functions like web search, calculators, or database queries that the agent can invoke; (3) Memory — short-term (conversation context),.\nlong-term (facts and preferences), and episodic (past experiences) storage; and (4) Orchestration Loop — the control flow that cycles through thought → action → observation until a stopping condition is met. A simple implementation would combine an LLM call within a while-loop that parses structured actions from the LLM output,.\nexecutes corresponding tools, and appends observations back into the prompt."
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
      "data-qid": "ag01-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How does Plan-and-Execute differ from ReAct?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Plan-and-Execute separates planning from execution as two distinct phases. First, the agent creates a complete step-by-step plan without executing any actions. Then it executes each step sequentially. ReAct,.\nin contrast, interleaves reasoning and acting — it might revise its plan after each observation. Plan-and-Execute is better for tasks with clear,.\nwell-understood steps (e.g., \"Generate a report: search, analyze, write, format\") where the plan rarely changes. ReAct is better for exploratory tasks where the next step depends on the previous result. The trade-off is that Plan-and-Execute can waste steps if the initial plan is wrong,.\nwhile ReAct is more flexible but can produce longer reasoning chains."
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
      "data-qid": "ag01-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is the Reflexion paradigm and when should you use it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Reflexion adds a self-evaluation step where the agent critiques its own output and retries if the quality is insufficient. The cycle is: execute → evaluate → reflect → retry (up to N times). Use it when output quality is critical and.\nyou can define an evaluation function — for example, code generation where the agent writes code, runs tests, detects failures, and.\nfixes bugs. A Reflexion agent might achieve 90%+ success on coding tasks where a single-pass agent achieves 60-70%. The cost is 2-5x more LLM calls per task,.\nso it's not suitable for latency-sensitive applications. Implementation typically uses a boolean evaluator (pass/fail) or a numeric scorer (0-1) with a threshold."
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
      "data-qid": "ag01-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you implement a tool registry for an agent?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A tool registry is a dictionary mapping tool names to their implementations and metadata. Each tool entry typically includes: name, description (used by the LLM to decide when to call it),.\nparameters schema (JSON Schema format), and the callable function. The registry provides methods like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "register(tool)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "get_descriptions()"
          }), " (returns formatted list for the LLM prompt),.\nand ", (0,jsx_runtime.jsx)(_components.code, {
            children: "execute(name, **kwargs)"
          }), " with error handling. For production, add categories, versioning, and auto-discovery from Python modules. The descriptions are critical — the LLM reads them to choose tools,.\nso invest in clear, specific documentation of what each tool does and when to use it."]
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
      "data-qid": "ag01-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What metrics are important for evaluating agent performance?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The three most important agent metrics are: (1) Success rate — the percentage of tasks completed correctly on a held-out test set;.\nthis is the primary metric that determines whether the agent works at all. (2) Average steps per task — measures efficiency;.\nan agent that takes 15 steps when 3 would suffice is wasting tokens and time. (3) Cost per task — tracks total LLM tokens consumed plus tool API costs. Secondary metrics include latency (end-to-end time),.\nrobustness (performance across varied inputs), and hallucination rate (how often the agent fabricates tool outputs). A good evaluation harness runs at least 50-100 test cases and.\nreports all metrics with confidence intervals."
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
      "data-qid": "ag01-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How does memory work in an AI agent system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agent memory is divided into types: short-term memory stores the current conversation turns (typically a sliding window of the last 5-10 messages to fit context limits). Long-term memory persists facts across sessions using key-value stores (e.g.,.\n\"user prefers Python\") or vector databases for semantic search. Episodic memory records past actions and outcomes so the agent can learn from experience (e.g.,.\n\"last time I searched that API, it returned 404\"). Working memory holds the current task state. Implementation usually combines a message list with a summarization mechanism — when the window exceeds N messages,.\nolder turns are compressed into a summary that replaces them in the prompt."
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
      "data-qid": "ag01-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is the orchestrator loop in an agent system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The orchestrator loop is the control flow that manages the agent's reasoning cycle. It typically: (1) sends the current context (task + history) to the LLM;.\n(2) parses the LLM response to extract the intended action and arguments; (3) executes the corresponding tool or function; (4) appends the observation back into the context;.\nand (5) repeats until the LLM outputs a final answer or the step limit is reached. Key implementation details include: setting a maximum step count (e.g.,.\n10-20) to prevent infinite loops, handling JSON parsing failures gracefully, and managing the growing context length. The loop is what distinguishes an agent from a simple LLM call — it enables iterative problem-solving."
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
      "data-qid": "ag01-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you handle errors in tool execution within an agent?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tool execution errors should be caught and reported back to the LLM as observations, not crash the agent. The pattern is: wrap each tool call in try/except,.\nand if it fails, return an observation like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "\"Error: tool 'web_search' failed with: Connection timeout\""
          }), ". The LLM can then decide to retry,.\nuse an alternative tool, or adjust its approach. For production systems, add retry logic with exponential backoff (e.g., 3 retries with 1s,.\n2s, 4s delays), timeout limits per tool call, and circuit breakers for persistently failing services. Argument validation before execution catches malformed LLM-generated arguments — use JSON Schema validation to reject invalid inputs before the tool runs,.\nreturning a clear error message to the LLM."]
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
      "data-qid": "agent-s1-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What is the primary role of the LLM in an AI agent?"]
      }), "\nA. Storing long-term memory\nB. Reasoning engine that decides actions\nC. Executing tools\nD. Providing user interface\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s1-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " In the ReAct paradigm, what follows an action?"]
      }), "\nA. Another action\nB. An observation\nC. The final answer\nD. A new plan\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s1-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What distinguishes Plan-and-Execute from ReAct?"]
      }), "\nA. ReAct is simpler\nB. Plan-and-Execute creates a complete plan before any execution\nC. Plan-and-Execute doesn't use tools\nD. ReAct requires no LLM\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s1-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What does the Reflexion paradigm add to basic agents?"]
      }), "\nA. More tools\nB. Self-evaluation and retry capability\nC. Faster execution\nD. Better memory\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s1-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " What is the most important metric for evaluating agent performance?"]
      }), "\nA. Response length\nB. Success rate on test tasks\nC. Number of tools available\nD. Memory size\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 1"
      }), ": This topic is fundamental to AI engineering.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Understanding ai agents langgraph is essential for building production AI systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 2"
      }), ": The concepts in this chapter are only used in interviews.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": False — These concepts are used daily in real-world AI engineering work."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 3"
      }), ": Time/space complexity analysis applies to ai agents langgraph.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Every algorithm and system has performance characteristics to analyze."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 4"
      }), ": ai agents langgraph concepts are independent of each other.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": False — Most concepts build on each other and are interconnected."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 5"
      }), ": Real-world applications often combine multiple concepts from this chapter.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Production systems use combinations of these fundamental concepts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FIB 1"
      }), ": The key concept in this chapter is ________.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Review the chapter's Learning Objectives for the specific answer]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FIB 2"
      }), ": In ai agents langgraph, the time complexity of the basic operation is ________.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Depends on the specific operation — check the Theory section]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 1"
      }), ": How would you apply the concepts from this chapter in a real AI engineering project?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Think about how the specific topic applies to: data processing pipelines, model training infrastructure, production systems, or interview scenarios]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output 1"
      }), ": What is the time complexity of the main algorithm discussed in this chapter?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Check the Theory section for the specific complexity analysis]"]
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
          children: "Not practicing enough problems to build pattern recognition1. Implement a ReAct agent with three tools: web search (mock), calculator, and database query (mock). Test with 5 tasks that require at least 2 steps each."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a Plan-and-Execute agent for a multi-step research task like \"Research the history of AI and summarize key milestones.\" Compare the number of steps vs a ReAct agent."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a Reflexion agent that solves coding problems. The agent should generate code, test it, detect errors, and retry. Demonstrate with a simple buggy function."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement an evaluation harness that runs an agent on 10 test tasks and reports success rate, average steps, average latency, and cost. Vary the LLM temperature from 0 to 1 and observe the effect on success rate."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a custom tool for an agent that can query a RAG system. Show the agent using the RAG tool to answer questions that require retrieving specific d"
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
            children: "Explain the core idea of Introduction to AI Agents in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Introduction to AI Agents."
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
            children: "Describe a production bug caused by misunderstanding Introduction to AI Agents. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Introduction to AI Agents from 10 users to 10 million?"
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
            children: "Compare Introduction to AI Agents with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Introduction to AI Agents."
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
            children: "How does Introduction to AI Agents behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Introduction to AI Agents run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Introduction to AI Agents that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Introduction to AI Agents explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Introduction to AI Agents\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Introduction to AI Agents to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Introduction to AI Agents (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Introduction to AI Agents and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Introduction to AI Agents-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Introduction to AI Agents interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Introduction to AI Agents in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse-1",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Introduction to AI Agents builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Introduction to AI Agents before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Introduction to AI Agents is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Introduction to AI Agents in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Introduction to AI Agents chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank-1",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Introduction to AI Agents is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Introduction to AI Agents is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Introduction to AI Agents is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Introduction to AI Agents issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Introduction to AI Agents in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions-1",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Introduction to AI Agents that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Introduction to AI Agents is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Introduction to AI Agents in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Introduction to AI Agents and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions-1",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Introduction to AI Agents on an empty input?"
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
            children: "Complete Medium exercises, explain Introduction to AI Agents to someone else"
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
        children: "Always write a one-line example of Introduction to AI Agents from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Introduction to AI Agents when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Introduction to AI Agents twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Introduction to AI Agents snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Introduction to AI Agents listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Introduction to AI Agents to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Introduction to AI Agents by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Introduction to AI Agents to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Introduction to AI Agents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Introduction to AI Agents (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Introduction to AI Agents problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Introduction to AI Agents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Introduction to AI Agents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Introduction to AI Agents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Introduction to AI Agents fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Introduction to AI Agents is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Introduction to AI Agents is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Introduction to AI Agents, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Introduction to AI Agents asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Introduction to AI Agents is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Introduction to AI Agents."
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
        children: "Introduction to AI Agents emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Introduction to AI Agents today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Introduction to AI Agents — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Introduction to AI Agents changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Introduction to AI Agents."
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
        children: "Introduction to AI Agents appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Introduction to AI Agents helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Introduction to AI Agents concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Introduction to AI Agents skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Introduction to AI Agents to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Introduction to AI Agents is like a recipe"
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
        }), " — this chapter contributes the Introduction to AI Agents skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-01introductiontoaiagents-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Introduction to AI Agents in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-01introductiontoaiagents-flash2",
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
      "data-qid": "13aiagentslanggraph-01introductiontoaiagents-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Introduction to AI Agents approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-01introductiontoaiagents-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Introduction to AI Agents NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-01introductiontoaiagents-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Introduction to AI Agents applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Introduction to AI Agents (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Introduction to AI Agents (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Introduction to AI Agents-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Introduction to AI Agents in production at scale"
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
        children: "Testing: pytest for unit tests of Introduction to AI Agents code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Introduction to AI Agents"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Introduction to AI Agents code."]
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
        }), " or your IDE's debugger to step through the Introduction to AI Agents example code."]
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
        children: "Explain Introduction to AI Agents in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Introduction to AI Agents."
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
        children: "Tell me about a time you debugged a Introduction to AI Agents problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Introduction to AI Agents is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Introduction to AI Agents."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Introduction to AI Agents logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Introduction to AI Agents without notes"
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
        }), ": a small team uses Introduction to AI Agents daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Introduction to AI Agents patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Introduction to AI Agents principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Introduction to AI Agents shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Introduction to AI Agents to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/02-agent-architectures",
        children: "Agent Architectures"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Introduction to AI Agents, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Introduction to AI Agents depends on input size and distribution — always benchmark for your own data."
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