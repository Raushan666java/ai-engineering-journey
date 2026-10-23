"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8179],{

/***/ 57555
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_04_tool_use_and_function_calling_md_553_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-13-ai-agents-langgraph-04-tool-use-and-function-calling-md-553.json
const site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_04_tool_use_and_function_calling_md_553_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-agents-langgraph/04-tool-use-and-function-calling","title":"Tool Use and Function Calling","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/13-ai-agents-langgraph/04-tool-use-and-function-calling.md","sourceDirName":"courses/ai-engineering-placement/13-ai-agents-langgraph","slug":"/ai-engineering-placement/13-ai-agents-langgraph/04-tool-use-and-function-calling","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/04-tool-use-and-function-calling","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":179,"frontMatter":{"id":"04-tool-use-and-function-calling","slug":"/ai-engineering-placement/13-ai-agents-langgraph/04-tool-use-and-function-calling","title":"Tool Use and Function Calling","sidebar_label":"Tool Use and Function Calling","sidebar_position":179},"sidebar":"placementSidebar","previous":{"title":"LangGraph Basics","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/03-langgraph-basics"},"next":{"title":"Memory and State","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/13-ai-agents-langgraph/04-tool-use-and-function-calling.md


const frontMatter = {
	id: '04-tool-use-and-function-calling',
	slug: '/ai-engineering-placement/13-ai-agents-langgraph/04-tool-use-and-function-calling',
	title: 'Tool Use and Function Calling',
	sidebar_label: 'Tool Use and Function Calling',
	sidebar_position: 179
};
const contentTitle = 'Tool Use and Function Calling';

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
  "value": "4.1 Function Calling API",
  "id": "41-function-calling-api",
  "level": 2
}, {
  "value": "4.1.1 OpenAI Function Calling",
  "id": "411-openai-function-calling",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "4.1.2 OpenAI Function Calling Flow",
  "id": "412-openai-function-calling-flow",
  "level": 3
}, {
  "value": "4.1.3 Anthropic Tool Use",
  "id": "413-anthropic-tool-use",
  "level": 3
}, {
  "value": "4.2 Tool Schema Design",
  "id": "42-tool-schema-design",
  "level": 2
}, {
  "value": "4.2.1 JSON Schema Builder",
  "id": "421-json-schema-builder",
  "level": 3
}, {
  "value": "4.2.2 Type-Safe Tool Definition",
  "id": "422-type-safe-tool-definition",
  "level": 3
}, {
  "value": "4.3 Tool Execution",
  "id": "43-tool-execution",
  "level": 2
}, {
  "value": "4.3.1 Argument Validation",
  "id": "431-argument-validation",
  "level": 3
}, {
  "value": "4.3.2 Execution with Retry",
  "id": "432-execution-with-retry",
  "level": 3
}, {
  "value": "4.3.3 Error Recovery",
  "id": "433-error-recovery",
  "level": 3
}, {
  "value": "4.4 Tool Registry",
  "id": "44-tool-registry",
  "level": 2
}, {
  "value": "4.4.1 Dynamic Registry",
  "id": "441-dynamic-registry",
  "level": 3
}, {
  "value": "4.4.2 Tool Discovery",
  "id": "442-tool-discovery",
  "level": 3
}, {
  "value": "4.4.3 Tool Versioning",
  "id": "443-tool-versioning",
  "level": 3
}, {
  "value": "4.5 Tool Selection",
  "id": "45-tool-selection",
  "level": 2
}, {
  "value": "4.5.1 LLM-Based Selection",
  "id": "451-llm-based-selection",
  "level": 3
}, {
  "value": "4.5.2 Rule-Based Selection",
  "id": "452-rule-based-selection",
  "level": 3
}, {
  "value": "4.6 Parallel Tools",
  "id": "46-parallel-tools",
  "level": 2
}, {
  "value": "4.6.1 Parallel Execution",
  "id": "461-parallel-execution",
  "level": 3
}, {
  "value": "4.6.2 Batched Tool Calls",
  "id": "462-batched-tool-calls",
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
        id: "tool-use-and-function-calling",
        children: "Tool Use and Function Calling"
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
            children: "Understand function calling APIs from OpenAI, Anthropic, and open-source models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design tool schemas with typed parameters and descriptions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement tool execution with error handling and retry logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build dynamic tool registries with automatic discovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage tool selection and parallel tool execution"
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
      children: "Understanding tool use and function calling is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how tool use and function calling works in practice."
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
            children: "4.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function Calling API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAI, Anthropic, and open-source conventions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool Schema Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON Schema for parameters, descriptions, types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Argument parsing, execution, error handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool Registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic registration, discovery, versioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM chooses tools, constrained selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executing multiple tools simultaneously"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[LLM Response] --> B{Has Tool Call?}\r\n    B -->|No| C[Return Text]\r\n    B -->|Yes| D[Parse Arguments]\r\n    D --> E[Execute Tool]\r\n    E --> F{Success?}\r\n    F -->|Yes| G[Return Result]\r\n    F -->|No| H[Error Handler]\r\n    H --> I[Retry/Fallback]\r\n    I --> E"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-function-calling-api",
      children: "4.1 Function Calling API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "411-openai-function-calling",
      children: "4.1.1 OpenAI Function Calling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenAI's API allows defining tools as JSON Schema objects. The model can request tool calls in its response."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import List, Dict, Callable, Any, Optional\r\nimport json\r\n\r\nclass OpenAITool:\r\n    def __init__(self, name: str, description: str, parameters: Dict, fn: Callable):\r\n        self.name = name\r\n        self.description = description\r\n        self.parameters = parameters\r\n        self.fn = fn\r\n\r\n    def to_openai_schema(self) -> Dict:\r\n        return {\r\n            \"type\": \"function\",\r\n            \"function\": {\r\n                \"name\": self.name,\r\n                \"description\": self.description,\r\n                \"parameters\": {\r\n                    \"type\": \"object\",\r\n                    \"properties\": self.parameters,\r\n                    \"required\": [k for k, v in self.parameters.items() if v.get(\"required\", False)],\r\n                },\r\n            },\r\n        }\r\n\r\n    def execute(self, arguments: Dict) -> str:\r\n        try:\r\n            result = self.fn(**arguments)\r\n            return str(result)\r\n        except Exception as e:\r\n            return f\"Error executing {self.name}: {e}\"\r\n\r\n## Example tool definitions\r\nsearch_tool_schema = OpenAITool(\r\n    name=\"web_search\",\r\n    description=\"Search the web for information\",\r\n    parameters={\r\n        \"query\": {\"type\": \"string\", \"description\": \"The search query\", \"required\": True},\r\n        \"num_results\": {\"type\": \"integer\", \"description\": \"Number of results\", \"default\": 5},\r\n    },\r\n    fn=lambda query, num_results=5: f\"Search results for '{query}' (top {num_results})\",\r\n)\r\n\r\ncalculator_schema = OpenAITool(\r\n    name=\"calculator\",\r\n    description=\"Evaluate mathematical expressions\",\r\n    parameters={\r\n        \"expression\": {\"type\": \"string\", \"description\": \"Math expression to evaluate\", \"required\": True},\r\n    },\r\n    fn=lambda expression: str(eval(expression)),\r\n)\r\n\r\nprint(search_tool_schema.to_openai_schema())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "412-openai-function-calling-flow",
      children: "4.1.2 OpenAI Function Calling Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class OpenAIFunctionCallingAgent:\r\n    def __init__(self, model: str, tools: List[OpenAITool], client=None):\r\n        self.model = model\r\n        self.tools = {t.name: t for t in tools}\r\n        self.tool_schemas = [t.to_openai_schema() for t in tools]\r\n        self.client = client\r\n\r\n    def invoke(self, messages: List[Dict]) -> str:\r\n        response = self._call_llm(messages)\r\n\r\n        if response.get(\"tool_calls\"):\r\n            for tool_call in response[\"tool_calls\"]:\r\n                tool_name = tool_call[\"function\"][\"name\"]\r\n                arguments = json.loads(tool_call[\"function\"][\"arguments\"])\r\n                tool = self.tools.get(tool_name)\r\n\r\n                if tool:\r\n                    result = tool.execute(arguments)\r\n                    messages.append({\"role\": \"tool\", \"tool_call_id\": tool_call[\"id\"], \"content\": result})\r\n\r\n            # Get final response after tool execution\r\n            final = self._call_llm(messages)\r\n            return final.get(\"content\", \"\")\r\n\r\n        return response.get(\"content\", \"\")\r\n\r\n    def _call_llm(self, messages: List[Dict]) -> Dict:\r\n        # Mock LLM response for demonstration\r\n        import random\r\n        if random.random() < 0.5:\r\n            return {\r\n                \"tool_calls\": [{\r\n                    \"id\": \"call_1\",\r\n                    \"function\": {\"name\": \"web_search\", \"arguments\": '{\"query\": \"AI news\"}'},\r\n                }]\r\n            }\r\n        return {\"content\": \"Final answer based on tool results.\"}\r\n\r\nagent = OpenAIFunctionCallingAgent(\"gpt-4o-mini\", [search_tool_schema, calculator_schema])\r\nresult = agent.invoke([{\"role\": \"user\", \"content\": \"Search for AI news and calculate 2+2\"}])\r\nprint(f\"Agent result: {result[:100]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "413-anthropic-tool-use",
      children: "4.1.3 Anthropic Tool Use"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AnthropicToolFormat:\r\n    @staticmethod\r\n    def to_anthropic_schema(tool: OpenAITool) -> Dict:\r\n        return {\r\n            \"name\": tool.name,\r\n            \"description\": tool.description,\r\n            \"input_schema\": {\r\n                \"type\": \"object\",\r\n                \"properties\": tool.parameters,\r\n                \"required\": [k for k, v in tool.parameters.items() if v.get(\"required\", False)],\r\n            },\r\n        }\r\n\r\n    @staticmethod\r\n    def parse_tool_use(response: Dict) -> List[Dict]:\r\n        tool_calls = []\r\n        for content in response.get(\"content\", []):\r\n            if content.get(\"type\") == \"tool_use\":\r\n                tool_calls.append({\r\n                    \"id\": content[\"id\"],\r\n                    \"name\": content[\"name\"],\r\n                    \"input\": content[\"input\"],\r\n                })\r\n        return tool_calls\r\n\r\nanthropic_tool = AnthropicToolFormat.to_anthropic_schema(search_tool_schema)\r\nprint(f\"Anthropic schema: {anthropic_tool}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-tool-schema-design",
      children: "4.2 Tool Schema Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "421-json-schema-builder",
      children: "4.2.1 JSON Schema Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class JSONSchemaBuilder:\r\n    def __init__(self):\r\n        self.properties = {}\r\n        self.required = []\r\n\r\n    def add_string(self, name: str, description: str, required: bool = False, enum: List[str] = None):\r\n        prop = {\"type\": \"string\", \"description\": description}\r\n        if enum:\r\n            prop[\"enum\"] = enum\r\n        self.properties[name] = prop\r\n        if required:\r\n            self.required.append(name)\r\n        return self\r\n\r\n    def add_integer(self, name: str, description: str, required: bool = False, minimum: int = None, maximum: int = None):\r\n        prop = {\"type\": \"integer\", \"description\": description}\r\n        if minimum is not None:\r\n            prop[\"minimum\"] = minimum\r\n        if maximum is not None:\r\n            prop[\"maximum\"] = maximum\r\n        self.properties[name] = prop\r\n        if required:\r\n            self.required.append(name)\r\n        return self\r\n\r\n    def add_number(self, name: str, description: str, required: bool = False):\r\n        self.properties[name] = {\"type\": \"number\", \"description\": description}\r\n        if required:\r\n            self.required.append(name)\r\n        return self\r\n\r\n    def add_boolean(self, name: str, description: str, required: bool = False):\r\n        self.properties[name] = {\"type\": \"boolean\", \"description\": description}\r\n        if required:\r\n            self.required.append(name)\r\n        return self\r\n\r\n    def add_array(self, name: str, description: str, items_type: str, required: bool = False):\r\n        self.properties[name] = {\"type\": \"array\", \"items\": {\"type\": items_type}, \"description\": description}\r\n        if required:\r\n            self.required.append(name)\r\n        return self\r\n\r\n    def add_object(self, name: str, description: str, properties: Dict, required: bool = False):\r\n        self.properties[name] = {\"type\": \"object\", \"properties\": properties, \"description\": description}\r\n        if required:\r\n            self.required.append(name)\r\n        return self\r\n\r\n    def build(self) -> Dict:\r\n        return {\"type\": \"object\", \"properties\": self.properties, \"required\": self.required}\r\n\r\nschema_builder = JSONSchemaBuilder()\r\nschema = (schema_builder\r\n    .add_string(\"query\", \"Search query\", required=True)\r\n    .add_integer(\"limit\", \"Max results\", minimum=1, maximum=100)\r\n    .add_string(\"sort\", \"Sort order\", enum=[\"relevance\", \"date\"])\r\n    .add_boolean(\"include_summaries\", \"Include document summaries\")\r\n    .build())\r\nprint(json.dumps(schema, indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "422-type-safe-tool-definition",
      children: "4.2.2 Type-Safe Tool Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nfrom typing import get_type_hints, get_origin, get_args\r\n\r\n@dataclass\r\nclass TypeSafeTool:\r\n    name: str\r\n    description: str\r\n    fn: Callable\r\n\r\n    def generate_schema(self) -> Dict:\r\n        hints = get_type_hints(self.fn)\r\n        import inspect\r\n        sig = inspect.signature(self.fn)\r\n        properties = {}\r\n        required = []\r\n\r\n        for param_name, param in sig.parameters.items():\r\n            param_type = hints.get(param_name, str)\r\n            properties[param_name] = self._type_to_schema(param_type, param_name)\r\n\r\n            if param.default is inspect.Parameter.empty:\r\n                required.append(param_name)\r\n\r\n        return {\r\n            \"type\": \"object\",\r\n            \"properties\": properties,\r\n            \"required\": required,\r\n        }\r\n\r\n    def _type_to_schema(self, typ, name: str) -> Dict:\r\n        origin = get_origin(typ)\r\n        if origin is list:\r\n            args = get_args(typ)\r\n            return {\"type\": \"array\", \"items\": {\"type\": self._primitive_type(args[0])}}\r\n        elif origin is dict:\r\n            return {\"type\": \"object\"}\r\n        elif origin is Optional:\r\n            args = get_args(typ)\r\n            return {\"type\": self._primitive_type(args[0]) if args else \"string\"}\r\n        else:\r\n            return {\"type\": self._primitive_type(typ)}\r\n\r\n    def _primitive_type(self, typ) -> str:\r\n        if typ == str:\r\n            return \"string\"\r\n        elif typ == int:\r\n            return \"integer\"\r\n        elif typ == float:\r\n            return \"number\"\r\n        elif typ == bool:\r\n            return \"boolean\"\r\n        return \"string\"\r\n\r\n    def execute(self, **kwargs) -> str:\r\n        return str(self.fn(**kwargs))\r\n\r\n@TypeSafeTool\r\ndef search_database(query: str, limit: int = 10, include_metadata: bool = False) -> str:\r\n    \"\"\"Search the database for matching records.\"\"\"\r\n    return f\"Found {limit} results for '{query}' (metadata={include_metadata})\"\r\n\r\nprint(f\"Generated schema: {json.dumps(search_database.generate_schema(), indent=2)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-tool-execution",
      children: "4.3 Tool Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "431-argument-validation",
      children: "4.3.1 Argument Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ArgumentValidator:\r\n    def __init__(self, schema: Dict):\r\n        self.schema = schema\r\n\r\n    def validate(self, arguments: Dict) -> List[str]:\r\n        errors = []\r\n        required = self.schema.get(\"required\", [])\r\n        properties = self.schema.get(\"properties\", {})\r\n\r\n        for field in required:\r\n            if field not in arguments:\r\n                errors.append(f\"Missing required field: {field}\")\r\n\r\n        for field, value in arguments.items():\r\n            prop = properties.get(field)\r\n            if not prop:\r\n                errors.append(f\"Unknown field: {field}\")\r\n                continue\r\n\r\n            expected_type = prop.get(\"type\")\r\n            if expected_type == \"string\" and not isinstance(value, str):\r\n                errors.append(f\"{field}: expected string, got {type(value).__name__}\")\r\n            elif expected_type == \"integer\" and not isinstance(value, int):\r\n                errors.append(f\"{field}: expected integer, got {type(value).__name__}\")\r\n            elif expected_type == \"number\" and not isinstance(value, (int, float)):\r\n                errors.append(f\"{field}: expected number, got {type(value).__name__}\")\r\n\r\n            if \"enum\" in prop and value not in prop[\"enum\"]:\r\n                errors.append(f\"{field}: must be one of {prop['enum']}\")\r\n\r\n        return errors\r\n\r\nvalidator = ArgumentValidator(schema)\r\nprint(validator.validate({\"query\": \"AI\", \"limit\": 5}))  # Valid\r\nprint(validator.validate({\"query\": 123}))  # Invalid\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "432-execution-with-retry",
      children: "4.3.2 Execution with Retry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\nfrom functools import wraps\r\n\r\nclass ToolExecutor:\r\n    def __init__(self, max_retries: int = 3, retry_delay: float = 1.0):\r\n        self.max_retries = max_retries\r\n        self.retry_delay = retry_delay\r\n\r\n    def execute(self, tool: OpenAITool, arguments: Dict) -> str:\r\n        last_error = None\r\n\r\n        for attempt in range(self.max_retries):\r\n            try:\r\n                result = tool.execute(arguments)\r\n                return result\r\n            except Exception as e:\r\n                last_error = str(e)\r\n                if attempt < self.max_retries - 1:\r\n                    time.sleep(self.retry_delay * (attempt + 1))\r\n\r\n        return f\"Failed after {self.max_retries} attempts: {last_error}\"\r\n\r\n    def execute_with_timeout(self, tool: OpenAITool, arguments: Dict, timeout: float = 5.0) -> str:\r\n        import threading\r\n\r\n        result = [None]\r\n        error = [None]\r\n\r\n        def target():\r\n            try:\r\n                result[0] = tool.execute(arguments)\r\n            except Exception as e:\r\n                error[0] = str(e)\r\n\r\n        thread = threading.Thread(target=target)\r\n        thread.start()\r\n        thread.join(timeout)\r\n\r\n        if thread.is_alive():\r\n            return \"Tool execution timed out\"\r\n\r\n        if error[0]:\r\n            return f\"Error: {error[0]}\"\r\n\r\n        return result[0]\r\n\r\nexecutor = ToolExecutor(max_retries=3)\r\nresult = executor.execute(search_tool_schema, {\"query\": \"AI\", \"num_results\": 5})\r\nprint(f\"Execution result: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "433-error-recovery",
      children: "4.3.3 Error Recovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ToolErrorHandler:\r\n    def __init__(self):\r\n        self.recovery_strategies = {}\r\n\r\n    def register_strategy(self, error_type: type, strategy_fn: Callable):\r\n        self.recovery_strategies[error_type] = strategy_fn\r\n\r\n    def handle(self, tool_name: str, error: Exception, arguments: Dict) -> str:\r\n        for error_type, strategy in self.recovery_strategies.items():\r\n            if isinstance(error, error_type):\r\n                return strategy(tool_name, arguments)\r\n        return f\"Tool {tool_name} failed: {error}\"\r\n\r\ndef handle_timeout(tool_name: str, arguments: Dict) -> str:\r\n    return f\"{tool_name} timed out. Try with smaller input.\"\r\n\r\ndef handle_validation(tool_name: str, arguments: Dict) -> str:\r\n    return f\"Invalid arguments for {tool_name}: {arguments}\"\r\n\r\nhandler = ToolErrorHandler()\r\nhandler.register_strategy(TimeoutError, handle_timeout)\r\nhandler.register_strategy(ValueError, handle_validation)\r\nprint(handler.handle(\"search\", ValueError(\"bad input\"), {\"query\": \"test\"}))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-tool-registry",
      children: "4.4 Tool Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "441-dynamic-registry",
      children: "4.4.1 Dynamic Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DynamicToolRegistry:\r\n    def __init__(self):\r\n        self.tools: Dict[str, OpenAITool] = {}\r\n        self.categories: Dict[str, List[str]] = defaultdict(list)\r\n\r\n    def register(self, tool: OpenAITool, category: str = \"general\"):\r\n        self.tools[tool.name] = tool\r\n        self.categories[category].append(tool.name)\r\n\r\n    def unregister(self, name: str):\r\n        if name in self.tools:\r\n            del self.tools[name]\r\n            for cat in self.categories.values():\r\n                if name in cat:\r\n                    cat.remove(name)\r\n\r\n    def get_by_category(self, category: str) -> List[OpenAITool]:\r\n        return [self.tools[name] for name in self.categories.get(category, [])]\r\n\r\n    def get_openai_schemas(self) -> List[Dict]:\r\n        return [t.to_openai_schema() for t in self.tools.values()]\r\n\r\n    def search_tools(self, query: str) -> List[OpenAITool]:\r\n        query_lower = query.lower()\r\n        return [\r\n            t for t in self.tools.values()\r\n            if query_lower in t.name.lower() or query_lower in t.description.lower()\r\n        ]\r\n\r\n    def list_all(self) -> List[Dict]:\r\n        return [{\"name\": t.name, \"description\": t.description} for t in self.tools.values()]\r\n\r\nregistry = DynamicToolRegistry()\r\nregistry.register(search_tool_schema, \"search\")\r\nregistry.register(calculator_schema, \"math\")\r\nprint(f\"Search tools: {[t.name for t in registry.get_by_category('search')]}\")\r\nprint(f\"Search 'calc': {[t.name for t in registry.search_tools('calc')]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "442-tool-discovery",
      children: "4.4.2 Tool Discovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import inspect\r\n\r\nclass AutoToolDiscovery:\r\n    def __init__(self):\r\n        self.registry = DynamicToolRegistry()\r\n\r\n    def discover_from_module(self, module):\r\n        for name, obj in inspect.getmembers(module):\r\n            if inspect.isfunction(obj) and hasattr(obj, \"_tool_schema\"):\r\n                tool = OpenAITool(\r\n                    name=name,\r\n                    description=obj.__doc__ or \"No description\",\r\n                    parameters=obj._tool_schema,\r\n                    fn=obj,\r\n                )\r\n                self.registry.register(tool)\r\n\r\n    def discover_from_class(self, cls):\r\n        for name, method in inspect.getmembers(cls, predicate=inspect.isfunction):\r\n            if not name.startswith(\"_\"):\r\n                sig = inspect.signature(method)\r\n                params = {}\r\n                for p_name, p in sig.parameters.items():\r\n                    if p_name != \"self\":\r\n                        params[p_name] = {\"type\": \"string\", \"description\": p_name}\r\n                tool = OpenAITool(name=name, description=method.__doc__ or \"\", parameters=params, fn=method)\r\n                self.registry.register(tool)\r\n\r\nclass DataTools:\r\n    def query_data(self, sql: str) -> str:\r\n        \"\"\"Execute a SQL query.\"\"\"\r\n        return f\"Executed: {sql}\"\r\n\r\n    def export_report(self, format: str) -> str:\r\n        \"\"\"Export data report.\"\"\"\r\n        return f\"Exported as {format}\"\r\n\r\ndiscovery = AutoToolDiscovery()\r\ndiscovery.discover_from_class(DataTools)\r\nprint(f\"Discovered tools: {[t['name'] for t in discovery.registry.list_all()]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "443-tool-versioning",
      children: "4.4.3 Tool Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class VersionedTool:\r\n    def __init__(self, tool: OpenAITool, version: str):\r\n        self.tool = tool\r\n        self.version = version\r\n        self.changelog: List[str] = []\r\n\r\n    def to_openai_schema(self) -> Dict:\r\n        schema = self.tool.to_openai_schema()\r\n        schema[\"function\"][\"version\"] = self.version\r\n        return schema\r\n\r\nclass VersionedRegistry:\r\n    def __init__(self):\r\n        self.versions: Dict[str, List[VersionedTool]] = defaultdict(list)\r\n\r\n    def add_tool(self, tool: OpenAITool, version: str):\r\n        self.versions[tool.name].append(VersionedTool(tool, version))\r\n\r\n    def get_latest(self, name: str) -> Optional[OpenAITool]:\r\n        versions = self.versions.get(name, [])\r\n        if versions:\r\n            return versions[-1].tool\r\n        return None\r\n\r\n    def get_version(self, name: str, version: str) -> Optional[OpenAITool]:\r\n        for vt in self.versions.get(name, []):\r\n            if vt.version == version:\r\n                return vt.tool\r\n        return None\r\n\r\n    def rollback(self, name: str) -> Optional[OpenAITool]:\r\n        versions = self.versions.get(name, [])\r\n        if len(versions) >= 2:\r\n            versions.pop()\r\n            return versions[-1].tool\r\n        return None\r\n\r\nvreg = VersionedRegistry()\r\nvreg.add_tool(search_tool_schema, \"1.0.0\")\r\nvreg.add_tool(search_tool_schema, \"2.0.0\")\r\nlatest = vreg.get_latest(\"web_search\")\r\nprint(f\"Latest version tool: {latest.name if latest else 'None'}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-tool-selection",
      children: "4.5 Tool Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "451-llm-based-selection",
      children: "4.5.1 LLM-Based Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ToolSelector:\r\n    def __init__(self, registry: DynamicToolRegistry, llm_fn: Callable):\r\n        self.registry = registry\r\n        self.llm = llm_fn\r\n\r\n    def select(self, task: str, top_k: int = 3) -> List[OpenAITool]:\r\n        tools_info = self.registry.list_all()\r\n        prompt = f\"\"\"Given this task, select the most relevant tools.\r\n\r\nTask: {task}\r\n\r\nAvailable tools:\r\n{chr(10).join(f'- {t[\"name\"]}: {t[\"description\"]}' for t in tools_info)}\r\n\r\nReturn the names of the top {top_k} most relevant tools, comma-separated.\"\"\"\r\n        response = self.llm(prompt)\r\n        selected_names = [name.strip() for name in response.split(\",\")[:top_k]]\r\n        return [self.registry.tools.get(name) for name in selected_names if name in self.registry.tools]\r\n\r\ndef mock_selector_llm(prompt: str) -> str:\r\n    return \"web_search, calculator\"\r\n\r\nselector = ToolSelector(registry, mock_selector_llm)\r\nselected = selector.select(\"Search for AI news and compute stats\")\r\nprint(f\"Selected tools: {[t.name for t in selected if t]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "452-rule-based-selection",
      children: "4.5.2 Rule-Based Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RuleBasedSelector:\r\n    def __init__(self, registry: DynamicToolRegistry):\r\n        self.registry = registry\r\n        self.rules = []\r\n\r\n    def add_rule(self, keywords: List[str], tool_name: str):\r\n        self.rules.append((keywords, tool_name))\r\n\r\n    def select(self, task: str) -> List[OpenAITool]:\r\n        selected = set()\r\n        task_lower = task.lower()\r\n        for keywords, tool_name in self.rules:\r\n            if any(kw in task_lower for kw in keywords):\r\n                tool = self.registry.tools.get(tool_name)\r\n                if tool:\r\n                    selected.add(tool)\r\n        return list(selected)\r\n\r\nrule_selector = RuleBasedSelector(registry)\r\nrule_selector.add_rule([\"search\", \"find\", \"lookup\"], \"web_search\")\r\nrule_selector.add_rule([\"calculate\", \"compute\", \"sum\", \"math\"], \"calculator\")\r\nselected = rule_selector.select(\"Find information and calculate the total\")\r\nprint(f\"Rule-based selected: {[t.name for t in selected]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "46-parallel-tools",
      children: "4.6 Parallel Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "461-parallel-execution",
      children: "4.6.1 Parallel Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from concurrent.futures import ThreadPoolExecutor, as_completed\r\n\r\nclass ParallelToolExecutor:\r\n    def __init__(self, max_workers: int = 5):\r\n        self.executor = ThreadPoolExecutor(max_workers=max_workers)\r\n\r\n    def execute_all(self, tool_calls: List[Dict], tools: Dict[str, OpenAITool]) -> Dict[str, str]:\r\n        futures = {}\r\n        results = {}\r\n\r\n        for call in tool_calls:\r\n            tool = tools.get(call[\"name\"])\r\n            if tool:\r\n                future = self.executor.submit(tool.execute, call[\"arguments\"])\r\n                futures[future] = call[\"name\"]\r\n\r\n        for future in as_completed(futures):\r\n            name = futures[future]\r\n            try:\r\n                results[name] = future.result()\r\n            except Exception as e:\r\n                results[name] = f\"Error: {e}\"\r\n\r\n        return results\r\n\r\nparallel = ParallelToolExecutor()\r\ncalls = [\r\n    {\"name\": \"web_search\", \"arguments\": {\"query\": \"AI news\", \"num_results\": 3}},\r\n    {\"name\": \"calculator\", \"arguments\": {\"expression\": \"2+2\"}},\r\n]\r\ntools_dict = {\"web_search\": search_tool_schema, \"calculator\": calculator_schema}\r\nresults = parallel.execute_all(calls, tools_dict)\r\nprint(f\"Parallel results: {results}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "462-batched-tool-calls",
      children: "4.6.2 Batched Tool Calls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BatchedToolCalls:\r\n    def __init__(self):\r\n        self.batch_queue: List[Dict] = []\r\n\r\n    def add(self, tool_name: str, arguments: Dict, batch_key: str = \"default\"):\r\n        self.batch_queue.append({\"tool\": tool_name, \"arguments\": arguments, \"key\": batch_key})\r\n\r\n    def execute_batch(self, tools: Dict[str, OpenAITool], batch_size: int = 10) -> List[Dict]:\r\n        results = []\r\n        batches = [self.batch_queue[i:i+batch_size] for i in range(0, len(self.batch_queue), batch_size)]\r\n\r\n        for batch in batches:\r\n            with ThreadPoolExecutor(max_workers=len(batch)) as executor:\r\n                futures = {}\r\n                for call in batch:\r\n                    tool = tools.get(call[\"tool\"])\r\n                    if tool:\r\n                        future = executor.submit(tool.execute, call[\"arguments\"])\r\n                        futures[future] = call\r\n\r\n                for future in as_completed(futures):\r\n                    call = futures[future]\r\n                    try:\r\n                        result = future.result()\r\n                        results.append({\"tool\": call[\"tool\"], \"input\": call[\"arguments\"], \"output\": result})\r\n                    except Exception as e:\r\n                        results.append({\"tool\": call[\"tool\"], \"error\": str(e)})\r\n\r\n        self.batch_queue.clear()\r\n        return results\r\n\r\nbatcher = BatchedToolCalls()\r\nbatcher.add(\"web_search\", {\"query\": \"AI\"})\r\nbatcher.add(\"calculator\", {\"expression\": \"10*5\"})\r\nr = batcher.execute_batch(tools_dict)\r\nprint(f\"Batch results: {[x['tool'] for x in r]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tool use and function calling are fundamental capabilities that enable LLM agents to interact with external systems. OpenAI's function calling API uses JSON Schema for.\r\ntool definitions, with the model deciding when to call tools and what arguments to pass. Anthropic's tool use follows a similar pattern. Well-designed tool schemas include clear descriptions,.\r\nproper typing, and validation rules. Tool execution requires argument validation, error handling with retry logic, and recovery strategies. Dynamic tool registries enable automatic discovery and.\r\nversion management. Tool selection can be LLM-driven or rule-based, and multiple tools can be executed in parallel for efficiency."
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
            children: "Write clear tool descriptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The LLM uses descriptions to choose tools — invest in documentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validate arguments server-side"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never trust LLM-generated arguments without validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement retry with backoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network and API failures are common — retry with exponential backoff"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use parallel execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute independent tools simultaneously to reduce latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version your tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema changes break agents — version and maintain backward compatibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Register dynamically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-discovery of tools reduces maintenance burden"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ag04-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How does OpenAI's function calling API work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["OpenAI's function calling API lets you define tools as JSON Schema objects passed in the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tools"
          }), " parameter of a chat completion request. Each tool has a name,.\ndescription, and parameters schema. When the model determines that a tool should be called, it returns a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tool_calls"
          }), " response containing the tool name and.\na JSON string of arguments — it does not execute the tool itself. Your code must parse this response, execute the function with the provided arguments,.\nand send the result back as a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tool"
          }), " role message. The model then uses the tool result to generate its final response. This pattern supports parallel tool calls (multiple tools in one response) and.\nworks with both GPT-4 and GPT-3.5 models. The descriptions and parameter schemas significantly influence how accurately the model selects and populates tools."]
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
      "data-qid": "ag04-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: What is JSON Schema for tool definitions?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["JSON Schema is the standard format used by OpenAI and Anthropic to define tool parameters. A schema declares each parameter's type (string,.\ninteger, number, boolean, array, object), description, whether it's required, and constraints like enum values or min/max. For example, a search tool might define ", (0,jsx_runtime.jsx)(_components.code, {
            children: "query"
          }), " as a required string and.\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "limit"
          }), " as an optional integer with minimum 1 and maximum 100. The schema is crucial because: (1) the LLM reads descriptions to understand.\nwhat each parameter means; (2) type constraints help the LLM generate valid arguments; and (3) your code should validate received arguments against the schema before executing the tool. Well-designed schemas with clear descriptions significantly improve tool call accuracy. Build parameter schemas programmatically using builder classes for.\ntype safety and reusability."]
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
      "data-qid": "ag04-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you validate tool arguments?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tool argument validation checks that the arguments generated by the LLM match the expected schema before executing the tool. A validator.\nchecks: required fields are present, types match (string, integer, number, boolean), enum values are valid, and constraints like min/max are satisfied. If validation fails,.\nthe error is returned as an observation to the LLM, which can then correct its arguments and retry. This prevents runtime errors from malformed inputs. Implementation typically compares received arguments against the JSON Schema properties,.\niterating through each field and checking its type and constraints. Server-side validation is essential because LLMs can hallucinate parameter names, omit required fields,.\nor provide values of the wrong type — you should never trust LLM-generated arguments without validation."
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
      "data-qid": "ag04-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: What is a tool registry and why use one?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A tool registry is a centralized repository that manages tool definitions and their execution. It stores tools by name, provides methods for.\nregistration, lookup, and execution, and can organize tools by category. Using a registry provides: (1) a single source of truth for.\nall available tools; (2) consistent schema generation for different LLM providers (OpenAI, Anthropic); (3) automatic discovery of tools from modules or.\nclasses; (4) search and filtering by category or keyword; and (5) versioning support for backward-compatible updates. The registry's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "get_descriptions()"
          }), " method produces the formatted tool list for.\nthe LLM prompt. A dynamic registry with auto-discovery reduces maintenance burden when adding new tools — just create the function and.\nthe registry finds it."]
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
      "data-qid": "ag04-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you implement retry logic for tool execution?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tool execution retry logic wraps tool calls with automatic retry on failure, using exponential backoff to avoid overwhelming the failing service. Key parameters: max_retries (typically 3),.\ninitial delay (1 second), and backoff multiplier (2x). Each retry attempt waits ", (0,jsx_runtime.jsx)(_components.code, {
            children: "delay * multiplier^attempt"
          }), " seconds. After exhausting all retries, the executor.\nreturns a descriptive error message. Timeout support is also important — a tool that hangs for 30 seconds should be interrupted rather than blocking the entire agent. Implementation uses a thread with a timeout: if the thread doesn't complete within the timeout,.\nit's considered failed. Retry + timeout together handle most transient failures (network blips, rate limits, temporary service outages) without crashing the agent."]
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
      "data-qid": "ag04-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How does Anthropic's tool use format differ from OpenAI's?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Anthropic's tool use API follows a similar pattern but with different naming conventions. Instead of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tools"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "function"
          }), " wrapper, Anthropic uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tools"
          }), " directly with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "name"
          }), ",.\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "description"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "input_schema"
          }), " (equivalent to OpenAI's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "parameters"
          }), "). When the model wants to use a tool, it returns ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tool_use"
          }), " content blocks with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "name"
          }), " and.\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "input"
          }), " fields. The main differences are: Anthropic places tool results in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tool_result"
          }), " content blocks rather than separate messages, and the response format is content-block-based rather than function-call-based. The conversion between formats is straightforward — a transformer class can bridge the two,.\nallowing the same tool registry to work with both providers."]
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
      "data-qid": "ag04-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is parallel tool execution and when should you use it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Parallel tool execution runs multiple independent tool calls simultaneously using a thread pool, reducing total latency from the sum of all tool latencies to the maximum single tool latency. Use it when tools are independent (no tool's output is needed by another) and.\nthe system has capacity for concurrent execution. For example, searching the web, checking the weather, and looking up a database record can all run in parallel. Implementation uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ThreadPoolExecutor"
          }), " to submit all tool calls at once,.\nthen collects results via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "as_completed()"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "gather()"
          }), ". Batch execution extends this by grouping tool calls into batches of a configurable size. Parallel execution is most impactful when tools have high latency (>500ms) — for.\nfast tools, the overhead of thread management may outweigh the benefit."]
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
      "data-qid": "ag04-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you design type-safe tool definitions?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Type-safe tool definitions use Python type hints and dataclasses to automatically generate JSON Schema from function signatures. A decorator or base class introspects the function's parameter types using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "typing.get_type_hints()"
          }), " and.\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "inspect.signature()"
          }), ", then maps Python types to JSON Schema types: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "str → string"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int → integer"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "float → number"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bool → boolean"
          }), ",.\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "List[str] → array"
          }), ". Parameters without defaults become required fields. The generated schema is cached for performance. This approach eliminates manual schema writing — you just annotate your Python function with types and.\na docstring, and the schema is derived automatically. Type-safe tools reduce bugs from schema mismatches and make the codebase more maintainable as tool schemas stay in sync with their implementations."]
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
      "data-qid": "ag04-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is a versioned tool registry?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A versioned tool registry extends the basic registry to support multiple versions of the same tool, enabling backward-compatible updates and rollbacks. Each tool registration includes a version string (e.g.,.\n\"1.0.0\", \"2.0.0\"). The registry stores all versions and provides methods to get the latest version, a specific version, or rollback to a previous version. This is important because updating a tool's schema can break agents that were built expecting the old schema — with versioning,.\nyou can keep old versions running for existing clients while developing new versions. A changelog tracks what changed between versions. In production,.\nyou might route 10% of traffic to a new tool version (canary) and 90% to the stable version, monitoring for issues before a full rollout."
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
      "data-qid": "ag04-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How does LLM-based tool selection work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "LLM-based tool selection uses the language model itself to decide which tools are relevant for a given task. The approach feeds the task description and.\na list of all available tools (with names and descriptions) to the LLM, asking it to select the top-k most relevant tools. The LLM analyzes the task semantics and.\nmatches them to tool descriptions — for example, given \"search for AI news and compute statistics\", it selects \"web_search\" and \"calculator\". This is more flexible than rule-based selection (keyword matching) because it understands context and.\nsynonyms. Alternative approaches include rule-based selection (faster, deterministic) and hybrid approaches that combine both. LLM-based selection adds one extra LLM call per task but.\nenables the agent to dynamically adapt its toolset to each query."
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
      "data-qid": "agent-s4-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What format does OpenAI use for defining tool parameters?"]
      }), "\nA. XML Schema\nB. JSON Schema\nC. YAML Schema\nD. Protocol Buffers\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s4-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " Why should tool descriptions be detailed?"]
      }), "\nA. They determine execution speed\nB. The LLM uses them to decide when to call each tool\nC. They control tool access permissions\nD. They define return value types\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s4-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What is the purpose of argument validation before tool execution?"]
      }), "\nA. To improve LLM performance\nB. To catch malformed arguments that could cause errors\nC. To reduce token usage\nD. To log tool usage\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s4-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " How does parallel tool execution improve agent performance?"]
      }), "\nA. Reduces total latency for independent tool calls\nB. Improves accuracy\nC. Reduces token usage\nD. Prevents tool conflicts\nAnswer: A\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "agent-s4-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " What should a tool registry support for production use?"]
      }), "\nA. Only registration\nB. Registration, discovery, versioning, and search\nC. Only execution\nD. Only validation\nAnswer: B\n"]
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
          children: "Not practicing enough problems to build pattern recognition1. Implement a function-calling agent with 3 tools (search, calculator, database query). Show the full flow: LLM response, tool call, execution, and final answer. Test with a multi-tool query."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a JSON Schema builder for a weather API tool with parameters: city (string, required), units (enum: metric/imperial), forecast_days (integer, 1-7). Generate the schema and validate correct and incorrect inputs."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a dynamic tool registry with auto-discovery from a class. Register at least 5 tools belonging to 3 categories. Demonstrate search, filtering by category, and versioning."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a parallel tool executor that runs 4 independent tool calls simultaneously. Measure the total time vs sequential execution and report the speedup."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a tool error handler with retry (3 attempts), timeout (5 seconds), and fallback responses. Simulate a failing tool and show the recov"
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
            children: "How does Tool Use and Function Calling behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Tool Use and Function Calling\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Tool Use and Function Calling to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Tool Use and Function Calling (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Tool Use and Function Calling and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Tool Use and Function Calling-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Tool Use and Function Calling in production today?"
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
        }), " Tool Use and Function Calling builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Tool Use and Function Calling before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Tool Use and Function Calling is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Tool Use and Function Calling in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The chapter that covers Tool Use and Function Calling is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 04 Tool Use And Function Calling is ___. — Answer: O(V+E) for BFS/DFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 04 Tool Use And Function Calling is ___. — Answer: disconnected graph, cycles, negative weights"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Tool Use and Function Calling issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Tool Use and Function Calling in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Tool Use and Function Calling that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
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
          }), " A new hire asks you to explain Tool Use and Function Calling in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Tool Use and Function Calling and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
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
            children: "Complete Medium exercises, explain Tool Use and Function Calling to someone else"
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
        children: "Always write a one-line example of Tool Use and Function Calling from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Tool Use and Function Calling when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Tool Use and Function Calling twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Tool Use and Function Calling snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Tool Use and Function Calling listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Tool Use and Function Calling to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Tool Use and Function Calling by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Tool Use and Function Calling to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "'Building LLM Powered Applications' by Valentina Alto (Packt) Use and Function Calling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 13 — builds the foundation for 04 Tool Use And Function Calling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 04 Tool Use And Function Calling with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 04 Tool Use And Function Calling fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 04 Tool Use And Function Calling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 04 Tool Use And Function Calling"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 04 Tool Use And Function Calling?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 04 Tool Use And Function Calling?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 04 Tool Use And Function Calling asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 04 Tool Use And Function Calling?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tool Use and Function Calling is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Tool Use and Function Calling."
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
        children: "Tool Use and Function Calling emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Tool Use and Function Calling today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Tool Use and Function Calling — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Tool Use and Function Calling changes quickly; focus on fundamentals that remain stable."
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
            children: "04 Tool Use And Function Calling is like a GPS navigation system"
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
          }), " — this chapter contributes the Tool Use and Function Calling skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-04tooluseandfunctioncalling-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Tool Use and Function Calling in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "An AI agent is an autonomous system that uses an LLM as its reasoning engine to perceive inputs, decide actions, call tools, observe results, and iterate until a task is complete."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-04tooluseandfunctioncalling-flash2",
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
      "data-qid": "13aiagentslanggraph-04tooluseandfunctioncalling-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Tool Use and Function Calling approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agent complexity: O(k * t) where k=steps taken, t=average tool latency. Each LLM call is O(n^2) attention over context. Total cost grows linearly with steps."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-04tooluseandfunctioncalling-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Tool Use and Function Calling NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agents are NOT the right choice when: (1) a single LLM call suffices, (2) deterministic pipelines are required, (3) latency < 500ms is needed, (4) the task has no external tool requirements."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "13aiagentslanggraph-04tooluseandfunctioncalling-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Tool Use and Function Calling applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Tool Use and Function Calling (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Tool Use and Function Calling (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Tool Use and Function Calling-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Tool Use and Function Calling in production at scale"
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
        }), " — Claude's native function calling interface Use and Function Calling"]
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
        }), ": Add structured logging at each stage of the 04 Tool Use And Function Calling pipeline to identify exactly where the failure occurs."]
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
        children: "Write a minimal working example of Tool Use and Function Calling."
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
        children: "Tell me about a time you debugged a Tool Use and Function Calling problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Tool Use and Function Calling is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_04_tool_use_and_function_calling(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 04 Tool Use And Function Calling.\r\n\r\n    Key concepts: vertices, edges, BFS, DFS, shortest path\r\n    Complexity: O(V+E) for BFS/DFS\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 04 Tool Use And Function Calling here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Tool Use and Function Calling without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state",
        children: "Memory and State"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tool Use and Function Calling, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Tool Use and Function Calling depends on input size and distribution — always benchmark for your own data."
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