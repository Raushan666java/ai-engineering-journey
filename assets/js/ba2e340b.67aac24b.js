"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6988],{

/***/ 3305
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_modern_ai_engineering_08_ai_agents_and_tool_use_md_ba2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-modern-ai-engineering-08-ai-agents-and-tool-use-md-ba2.json
const site_docs_courses_modern_ai_engineering_08_ai_agents_and_tool_use_md_ba2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/modern-ai-engineering/08-ai-agents-and-tool-use","title":"Chapter 8: AI Agents and Tool Use","description":"Learning Objectives","source":"@site/docs/courses/modern-ai-engineering/08-ai-agents-and-tool-use.md","sourceDirName":"courses/modern-ai-engineering","slug":"/modern-ai-engineering/08-ai-agents-and-tool-use","permalink":"/ai-engineering-journey/modern-ai-engineering/08-ai-agents-and-tool-use","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-ai-agents-and-tool-use","slug":"/modern-ai-engineering/08-ai-agents-and-tool-use","title":"Chapter 8: AI Agents and Tool Use","sidebar_label":"Chapter 8: AI Agents and Tool Use","sidebar_position":8},"sidebar":"course-modern-ai-engineering","previous":{"title":"Chapter 7: Fine-Tuning","permalink":"/ai-engineering-journey/modern-ai-engineering/07-fine-tuning"},"next":{"title":"Chapter 9: Safety, Alignment, and Guardrails","permalink":"/ai-engineering-journey/modern-ai-engineering/09-safety-alignment-guardrails"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/modern-ai-engineering/08-ai-agents-and-tool-use.md


const frontMatter = {
	id: '08-ai-agents-and-tool-use',
	slug: '/modern-ai-engineering/08-ai-agents-and-tool-use',
	title: 'Chapter 8: AI Agents and Tool Use',
	sidebar_label: 'Chapter 8: AI Agents and Tool Use',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: AI Agents and Tool Use';

const assets = {

};



const toc = [{
  "value": "8.1 What Makes an AI Agent",
  "id": "81-what-makes-an-ai-agent",
  "level": 2
}, {
  "value": "8.2 The ReAct Pattern",
  "id": "82-the-react-pattern",
  "level": 2
}, {
  "value": "8.3 Tool Calling",
  "id": "83-tool-calling",
  "level": 2
}, {
  "value": "8.4 Planning Strategies",
  "id": "84-planning-strategies",
  "level": 2
}, {
  "value": "8.5 Agent Memory",
  "id": "85-agent-memory",
  "level": 2
}, {
  "value": "8.6 Multi-Step Reasoning",
  "id": "86-multi-step-reasoning",
  "level": 2
}, {
  "value": "8.7 Common Failure Modes",
  "id": "87-common-failure-modes",
  "level": 2
}, {
  "value": "8.8 Agent Evaluation",
  "id": "88-agent-evaluation",
  "level": 2
}, {
  "value": "8.9 Multi-Agent Patterns",
  "id": "89-multi-agent-patterns",
  "level": 2
}, {
  "value": "TypeScript: AgentExecutor",
  "id": "typescript-agentexecutor",
  "level": 2
}, {
  "value": "TypeScript: ToolRegistry",
  "id": "typescript-toolregistry",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-8-ai-agents-and-tool-use",
        children: "Chapter 8: AI Agents and Tool Use"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Learning Objectives"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "By the end of this chapter, you will be able to:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Define the core components of an AI agent: planning, memory, tool use, and self-reflection"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Implement the ReAct reasoning-acting loop with observation feedback"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Design tool definitions using JSON Schema and a tool registry"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Compare planning strategies: ReAct, Plan-and-Solve, Tree-of-Thought"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Manage agent memory across short-term and long-term storage"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Diagnose and mitigate common agent failure modes"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Evaluate agent performance on task completion, efficiency, and robustness"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-what-makes-an-ai-agent",
      children: "8.1 What Makes an AI Agent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An AI agent is an autonomous system that perceives its environment, reasons about goals, takes actions via tools, and reflects on outcomes to improve future behavior. Unlike a simple LLM call, an agent operates in a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loop"
      }), ": it receives a task, formulates a plan, executes actions, observes results, and iterates until the task is complete or a termination condition is reached."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The five core components of an AI agent are:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Planning"
        }), ": Decomposing a complex task into sub-steps, selecting actions, and ordering operations. Planning can be single-step (the model generates one action at a time) or multi-step (the model produces a full plan upfront)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory"
        }), ": Retaining information across interactions. Short-term memory is the context window; long-term memory uses external storage (vector databases, key-value stores). Episodic memory stores past experiences."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tool Use"
        }), ": Interfacing with external systems — APIs, databases, search engines, file systems, calculators, code interpreters. Tools extend the agent's capabilities beyond text generation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-Reflection"
        }), ": Evaluating the quality of generated actions and outcomes. The agent can critique its own reasoning, detect errors, and adjust its approach."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Autonomy"
        }), ": The agent operates without continuous human intervention, deciding when to ask for help and when to proceed independently."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph agent[\"AI Agent\"]\r\n        planner[\"Planner\"]\r\n        memory[\"Memory\"]\r\n        tools[\"Tool Registry\"]\r\n        llm[\"LLM Core\"]\r\n        reflector[\"Reflector\"]\r\n    end\r\n    env[\"Environment\"]\r\n\r\n    llm --> planner\r\n    llm --> memory\r\n    llm --> tools\r\n    llm --> reflector\r\n    planner --> llm\r\n    memory --> llm\r\n    tools --> env\r\n    env --> llm\r\n    reflector --> llm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Agents fall on a spectrum from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "simple reactive agents"
      }), " (one-shot tool callers) to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "autonomous long-horizon agents"
      }), " that can operate for hours across dozens of tool calls and multiple reasoning steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-the-react-pattern",
      children: "8.2 The ReAct Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ReAct (Reasoning + Acting) is the most widely adopted agent architecture. It interleaves reasoning traces (\"thoughts\") with actions and observations, enabling the model to dynamically adjust its plan based on intermediate results."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The ReAct loop"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thought"
        }), ": The model analyzes the current state, identifies what information is needed, and decides what to do next."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action"
        }), ": The model invokes a tool with specific parameters. The action is formatted as a structured command (e.g., JSON function call)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Observation"
        }), ": The tool returns a result, which is appended to the context."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The loop repeats: the model reads the observation, generates a new thought, and decides whether to take another action or produce the final answer."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Task Input] --> B[Thought: Analyze State]\r\n    B --> C{Need More Info?}\r\n    C -->|Yes| D[Action: Call Tool]\r\n    D --> E[Observation: Tool Result]\r\n    E --> B\r\n    C -->|No| F[Action: Produce Final Answer]\r\n    F --> G[Output]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key insight of ReAct is that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reasoning traces improve action quality"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "action outcomes improve reasoning"
      }), ". By externalizing the reasoning process, ReAct also provides interpretability — developers can read the model's chain of thought to understand why it took a particular action."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation in practice"
      }), ": ReAct prompts typically include:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A system message describing available tools and their signatures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A few-shot example showing the thought-action-observation pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A stop condition: produce a final answer when sufficient information is gathered"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Pseudocode for a ReAct loop\r\nasync function reactLoop(task: string, maxSteps: number): Promise<string> {\r\n  let context = `Task: ${task}\\n`;\r\n  for (let step = 0; step < maxSteps; step++) {\r\n    const response = await llm.generate(context + \"Thought:\");\r\n    context += response + \"\\n\";\r\n    if (response.includes(\"Final Answer:\")) {\r\n      return response;\r\n    }\r\n    const action = parseAction(response);\r\n    const observation = await executeTool(action);\r\n    context += `Observation: ${observation}\\n`;\r\n  }\r\n  return \"Max steps exceeded.\";\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-tool-calling",
      children: "8.3 Tool Calling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tool calling (also called function calling) is the mechanism by which an agent invokes external capabilities. Modern LLMs support structured tool calling natively through chat completion APIs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Function calling APIs"
      }), ": In the OpenAI API, tools are defined alongside the messages array. The model can respond with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tool_calls"
      }), " field containing the function name and arguments. Providers like Anthropic (Claude), Google (Gemini), and open-source models (via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tool_use"
      }), " formats) offer similar interfaces."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool definition with JSON Schema"
      }), ": Each tool is defined by:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ": A unique identifier"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "description"
        }), ": What the tool does (helps the model choose correctly)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "parameters"
        }), ": A JSON Schema object describing expected arguments"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[LLM generates response] --> B{Has tool_calls?}\r\n    B -->|No| C[Return text response]\r\n    B -->|Yes| D[Parse tool name + args]\r\n    D --> E[Look up in ToolRegistry]\r\n    E --> F{Registry has tool?}\r\n    F -->|No| G[Return error observation]\r\n    F -->|Yes| H[Validate args against JSON Schema]\r\n    H --> I{Args valid?}\r\n    I -->|No| J[Return validation error]\r\n    I -->|Yes| K[Execute tool function]\r\n    K --> L[Format result as observation]\r\n    L --> M[Append to message history]\r\n    M --> A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool registry"
      }), ": A centralized registry manages tool definitions, dispatches calls, and handles errors. The registry is responsible for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Storing tool definitions (name, description, schema, implementation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validating arguments against the defined schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Executing the tool function with proper error boundaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formatting results and errors into observation strings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error handling"
      }), ": Tool calls can fail for many reasons — network errors, invalid arguments, rate limits, timeouts. The agent must handle these gracefully:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Catch all errors and return meaningful error observations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement retry logic with exponential backoff for transient failures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set per-tool timeouts to prevent agent loops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log all tool failures for debugging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-planning-strategies",
      children: "8.4 Planning Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Different tasks require different planning approaches. The choice depends on task complexity, available compute, and the cost of intermediate steps."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Single-step (Direct)"
      }), ": The model generates a final answer directly without intermediate steps. Used for simple, well-defined queries. Fast but unreliable for complex multi-step tasks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ReAct"
      }), ": Interleaves reasoning and acting dynamically. The model decides each next step based on observations. Best for tasks where the plan depends on intermediate results (web search, data analysis)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Plan-and-Solve"
      }), ": The model generates a complete plan upfront, then executes each step sequentially. Reduces the reasoning burden during execution but cannot adapt to unexpected observations. Good for deterministic workflows."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree-of-Thought (ToT)"
      }), ": Maintains multiple reasoning paths simultaneously. At each step, the model generates several candidate \"thoughts,\" evaluates them, and prunes weak branches. Uses BFS or DFS to explore the reasoning tree. Highest quality but also highest cost (5–20× more tokens)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LLM Compiler"
      }), ": Frames task execution as a program. The model generates a \"program\" of hierarchical steps with dependencies. A separate executor runs the program, parallelizing independent steps. Good for complex, decomposable tasks with clear dependencies."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Steps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single-Step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple Q&A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ReAct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search, analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plan-and-Solve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tree-of-Thought"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creative, math, reasoning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLM Compiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In practice, the majority of production agents use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ReAct"
      }), " as their default strategy, falling back to Plan-and-Solve for well-understood tasks and occasionally using ToT for high-stakes reasoning problems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-agent-memory",
      children: "8.5 Agent Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Memory is what distinguishes a stateful agent from a stateless LLM call. Agents need memory to maintain context across multiple turns, recall past decisions, and learn from experience."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Short-term memory (Context window)"
      }), ": The model's immediate context. Includes the task description, conversation history, and recent observations. Limited by the model's maximum context length (4K–200K tokens). Managed by sliding window or summarization when approaching the limit."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Long-term memory (Retrieval)"
      }), ": External storage accessed via retrieval. Common implementations:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vector databases"
        }), " (Chroma, Pinecone, Qdrant): Store embeddings of past interactions. Retrieved by semantic similarity when the agent needs relevant history."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key-value stores"
        }), " (Redis): Store structured facts. Retrieved by exact key match."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SQL databases"
        }), ": Store structured logs of past actions and outcomes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Episodic memory"
      }), ": Stores specific past episodes — what task was attempted, what plan was used, what went wrong. The agent can query episodic memory to avoid repeating mistakes. Implemented as a vector store with episode-level granularity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Working memory"
      }), ": A scratchpad where the agent writes intermediate reasoning, partial calculations, and in-progress plans. Cleared when the task completes. Often implemented as a simple string buffer within the context."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory summarization"
      }), ": As context grows, the agent can summarize old interactions to preserve key information while reducing token count. Common summarization triggers:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context exceeds N% of the limit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A natural breakpoint is reached (task sub-step completed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The agent identifies redundant or irrelevant content"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-multi-step-reasoning",
      children: "8.6 Multi-Step Reasoning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-step reasoning enables agents to solve complex problems that require chaining multiple operations, verifying intermediate results, and correcting course."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chain-of-Thought (CoT)"
      }), ": The model generates intermediate reasoning steps before producing the final answer. CoT significantly improves performance on math, logic, and multi-hop QA tasks. Zero-shot CoT uses the simple prompt \"Let's think step by step.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reflection"
      }), ": After generating an answer, the model critiques its own output. Reflection prompts like \"Check your answer for errors\" can catch mistakes before final output. The agent can generate multiple candidate answers, reflect on each, and select the best."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Self-critique"
      }), ": The model acts as both generator and critic. It generates a solution, then evaluates it against criteria (correctness, completeness, efficiency). If the critique identifies issues, the model revises the solution. This loop repeats until the critique is satisfied."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification loops"
      }), ": The agent explicitly verifies intermediate results before proceeding. For example, after a web search, the agent might ask \"Did the search result answer my question?\" before moving to the next step. Verification reduces error propagation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The interplay of planning, acting, and verification creates a robust reasoning cycle:"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Task] --> B[Plan Next Step]\r\n    B --> C[Execute Action]\r\n    C --> D[Observe Result]\r\n    D --> E{Verify Result}\r\n    E -->|Pass| F{Task Complete?}\r\n    E -->|Fail| G[Reflect & Revise]\r\n    G --> B\r\n    F -->|No| B\r\n    F -->|Yes| H[Generate Final Answer]"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "87-common-failure-modes",
      children: "8.7 Common Failure Modes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI agents are powerful but prone to several failure modes that must be anticipated and mitigated."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Loops"
      }), ": The agent repeats the same action without progress. For example, calling a search API with the same query, getting the same result, and searching again. Mitigations include step limits, repetition detection, and action diversity checking."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hallucination propagation"
      }), ": The agent generates a false intermediate fact, then builds further reasoning on that false premise. Each step compounds the error. Mitigation: verify facts against trusted sources before using them in subsequent reasoning."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool misuse"
      }), ": The agent calls a tool with incorrect parameters, misinterprets the tool's purpose, or uses the wrong tool entirely. Mitigations: clear tool descriptions, input validation, and output formatting guidelines."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context overflow"
      }), ": Long agent sessions exceed the model's context window, causing the oldest information (often the original task and early observations) to be truncated. Mitigations: context compression, summarization, sliding windows."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cascading errors"
      }), ": An early small error leads to increasingly large failures downstream. Mitigations: verification checkpoints, rollback capability, human-in-the-loop approval for critical actions."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Failure Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeatedly searching the same query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step limit, diversity check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucination Propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using a fake company name in a calculation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fact-checking, grounding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool Misuse"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Calling ", (0,jsx_runtime.jsx)(_components.code, {
              children: "send_email"
            }), " when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "search_contacts"
            }), " was needed"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better descriptions, validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context Overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Losing the original task after 20 steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summarization, checkpointing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cascading Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong address → wrong route → missed deadline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification at each step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost Explosion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100+ tool calls for a simple task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Budget limits, cost tracking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "88-agent-evaluation",
      children: "8.8 Agent Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Evaluating agents is more complex than evaluating single LLM calls because agents produce long, multi-step traces with intermediate states."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task completion rate (TCR)"
      }), ": The percentage of tasks the agent completes successfully. The simplest and most important metric. Success criteria must be clearly defined per task (exact match, LLM-judged correctness, human evaluation)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Efficiency"
      }), ": Measured as steps per task, tokens per task, or wall-clock time. A high-completion-rate agent that uses 50 steps per task may be impractical compared to one that uses 10 steps with similar quality."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Robustness"
      }), ": How the agent handles unexpected situations — tool failures, ambiguous instructions, missing information. Measured by injecting perturbations into the evaluation set (missing parameters, API timeouts, irrelevant context)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost per task"
      }), ": Combines LLM inference cost (per-token pricing) and tool execution cost (API calls, compute). A cheaper agent that completes 85% of tasks may be preferable to an expensive one at 95%, depending on the use case."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Human preference"
      }), ": For subjective tasks (customer support, creative assistance), human evaluators compare agent traces. Side-by-side A/B testing with human raters provides the most reliable quality signal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation frameworks"
      }), ": LangSmith, Weights & Biases, and Arize AI provide agent tracing and evaluation. Open-source tools like Agenta and Phoenix also support agent evaluation workflows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "89-multi-agent-patterns",
      children: "8.9 Multi-Agent Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complex tasks often benefit from multiple specialized agents collaborating. Each agent has a specific role, and they communicate through structured messages."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Supervisor pattern"
      }), ": A supervisor agent delegates tasks to worker agents and aggregates results. The supervisor decides the plan, assigns work, and validates output. Workers are specialized (search agent, code agent, analysis agent)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Delegation pattern"
      }), ": Any agent can delegate sub-tasks to other agents. Agents register their capabilities, and delegators select peers based on capability matching. Decentralized but requires capability discovery."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Debate pattern"
      }), ": Two or more agents independently work on the same task and then debate their answers. A judge agent (or the user) selects the best answer after considering the debate. Produces higher quality but is expensive."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hierarchical pattern"
      }), ": Multiple layers of agents. Top-level agents break tasks into sub-goals, mid-level agents coordinate, and leaf agents execute. Reduces the context burden on any single agent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    S[Supervisor Agent] --> A[Search Agent]\r\n    S --> B[Code Agent]\r\n    S --> C[Analysis Agent]\r\n\r\n    A --> A1[Web Search]\r\n    A --> A2[Document Retrieval]\r\n\r\n    B --> B1[Python Executor]\r\n    B --> B2[Code Reviewer]\r\n\r\n    C --> C1[Data Analyzer]\r\n    C --> C2[Report Generator]\r\n\r\n    S --> D[Judge Agent]\r\n    D --> E[Final Output]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-agent patterns introduce coordination overhead. Message passing between agents must be structured, asynchronous, and logged. Error handling across agents requires distributed tracing. In practice, most production systems use the supervisor pattern because it is the most controllable and debuggable."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-agentexecutor",
      children: "TypeScript: AgentExecutor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ToolDefinition {\r\n  name: string;\r\n  description: string;\r\n  parameters: Record<string, unknown>;\r\n  handler: (args: Record<string, unknown>) => Promise<string>;\r\n}\r\n\r\ninterface AgentMessage {\r\n  role: 'system' | 'user' | 'assistant' | 'tool';\r\n  content: string;\r\n  toolCallId?: string;\r\n  toolName?: string;\r\n}\r\n\r\ninterface AgentOptions {\r\n  modelName: string;\r\n  systemPrompt: string;\r\n  maxSteps: number;\r\n  maxTokens: number;\r\n  temperature: number;\r\n  timeoutMs: number;\r\n}\r\n\r\nclass AgentExecutor {\r\n  private tools: Map<string, ToolDefinition> = new Map();\r\n  private messages: AgentMessage[] = [];\r\n  private memory: Map<string, string> = new Map();\r\n  private options: AgentOptions;\r\n  private stepCount: number = 0;\r\n  private totalTokens: number = 0;\r\n\r\n  constructor(options: Partial<AgentOptions> = {}) {\r\n    this.options = {\r\n      modelName: options.modelName ?? 'gpt-4o',\r\n      systemPrompt: options.systemPrompt ?? 'You are a helpful AI agent.',\r\n      maxSteps: options.maxSteps ?? 25,\r\n      maxTokens: options.maxTokens ?? 4096,\r\n      temperature: options.temperature ?? 0.7,\r\n      timeoutMs: options.timeoutMs ?? 30000,\r\n    };\r\n    this.messages.push({ role: 'system', content: this.options.systemPrompt });\r\n  }\r\n\r\n  registerTool(tool: ToolDefinition): void {\r\n    if (this.tools.has(tool.name)) {\r\n      throw new Error(`Tool \"${tool.name}\" already registered`);\r\n    }\r\n    this.tools.set(tool.name, tool);\r\n  }\r\n\r\n  getToolDefinitions(): Array<{ name: string; description: string; parameters: Record<string, unknown> }> {\r\n    return Array.from(this.tools.values()).map(t => ({\r\n      name: t.name,\r\n      description: t.description,\r\n      parameters: t.parameters,\r\n    }));\r\n  }\r\n\r\n  async execute(task: string): Promise<string> {\r\n    this.messages.push({ role: 'user', content: task });\r\n    this.stepCount = 0;\r\n\r\n    while (this.stepCount < this.options.maxSteps) {\r\n      this.stepCount++;\r\n      const response = await this.callLLM();\r\n\r\n      const toolCalls = this.parseToolCalls(response);\r\n      if (toolCalls.length === 0) {\r\n        return response;\r\n      }\r\n\r\n      for (const call of toolCalls) {\r\n        this.messages.push({\r\n          role: 'assistant',\r\n          content: '',\r\n          toolCallId: call.id,\r\n          toolName: call.name,\r\n        });\r\n\r\n        try {\r\n          const tool = this.tools.get(call.name);\r\n          if (!tool) {\r\n            throw new Error(`Unknown tool: \"${call.name}\"`);\r\n          }\r\n          const validated = this.validateArgs(tool, call.args);\r\n          const result = await this.executeWithTimeout(tool, validated);\r\n          this.messages.push({\r\n            role: 'tool',\r\n            content: result,\r\n            toolCallId: call.id,\r\n            toolName: call.name,\r\n          });\r\n          this.storeToMemory(call.name, JSON.stringify(call.args), result);\r\n        } catch (err) {\r\n          const errorMsg = err instanceof Error ? err.message : String(err);\r\n          this.messages.push({\r\n            role: 'tool',\r\n            content: `Error: ${errorMsg}`,\r\n            toolCallId: call.id,\r\n            toolName: call.name,\r\n          });\r\n        }\r\n      }\r\n\r\n      if (this.getContextLength() > this.options.maxTokens * 4) {\r\n        this.summarizeHistory();\r\n      }\r\n    }\r\n\r\n    return 'Max steps exceeded without completing the task.';\r\n  }\r\n\r\n  private async callLLM(): Promise<string> {\r\n    const tools = this.getToolDefinitions();\r\n    const response = await this.simulateLLMCall(tools);\r\n    this.totalTokens += response.length / 4;\r\n    return response;\r\n  }\r\n\r\n  private async simulateLLMCall(tools: Array<Record<string, unknown>>): Promise<string> {\r\n    const lastMsg = this.messages[this.messages.length - 1];\r\n    if (lastMsg.role === 'user' && lastMsg.content.includes('weather')) {\r\n      return JSON.stringify([{\r\n        id: 'call_1',\r\n        type: 'function',\r\n        function: { name: 'get_weather', arguments: '{\"location\":\"New York\"}' },\r\n      }]);\r\n    }\r\n    return 'Final answer: Task completed successfully.';\r\n  }\r\n\r\n  private parseToolCalls(response: string): Array<{ id: string; name: string; args: Record<string, unknown> }> {\r\n    try {\r\n      const parsed = JSON.parse(response);\r\n      if (Array.isArray(parsed)) {\r\n        return parsed.map((call: Record<string, unknown>) => ({\r\n          id: (call.id as string) ?? `call_${this.stepCount}`,\r\n          name: (call.function as Record<string, unknown>)?.name as string ?? '',\r\n          args: JSON.parse((call.function as Record<string, unknown>)?.arguments as string ?? '{}') as Record<string, unknown>,\r\n        }));\r\n      }\r\n    } catch {\r\n      // Not a tool call response\r\n    }\r\n    return [];\r\n  }\r\n\r\n  private validateArgs(tool: ToolDefinition, args: Record<string, unknown>): Record<string, unknown> {\r\n    const schema = tool.parameters as Record<string, unknown>;\r\n    const required = (schema as Record<string, unknown>).required as string[] ?? [];\r\n    for (const field of required) {\r\n      if (args[field] === undefined || args[field] === null) {\r\n        throw new Error(`Missing required argument \"${field}\" for tool \"${tool.name}\"`);\r\n      }\r\n    }\r\n    return args;\r\n  }\r\n\r\n  private async executeWithTimeout(tool: ToolDefinition, args: Record<string, unknown>): Promise<string> {\r\n    const timeoutPromise = new Promise<string>((_, reject) =>\r\n      setTimeout(() => reject(new Error(`Tool \"${tool.name}\" timed out`)), this.options.timeoutMs)\r\n    );\r\n    const resultPromise = tool.handler(args);\r\n    return Promise.race([resultPromise, timeoutPromise]);\r\n  }\r\n\r\n  private storeToMemory(toolName: string, args: string, result: string): void {\r\n    const key = `tool:${toolName}:${Date.now()}`;\r\n    this.memory.set(key, JSON.stringify({ args, result, timestamp: Date.now() }));\r\n    if (this.memory.size > 1000) {\r\n      const oldest = this.memory.keys().next().value;\r\n      if (oldest) this.memory.delete(oldest);\r\n    }\r\n  }\r\n\r\n  private summarizeHistory(): void {\r\n    const sysIdx = this.messages.findIndex(m => m.role === 'system');\r\n    const toSummarize = this.messages.slice(sysIdx + 1, -10);\r\n    if (toSummarize.length < 5) return;\r\n    const summary = `[Summarized ${toSummarize.length} messages: agent completed ${this.stepCount} steps, called ${this.tools.size} tools]`;\r\n    this.messages = [\r\n      this.messages[sysIdx],\r\n      { role: 'system', content: `Previous context summary: ${summary}` },\r\n      ...this.messages.slice(-10),\r\n    ];\r\n  }\r\n\r\n  private getContextLength(): number {\r\n    return this.messages.reduce((sum, m) => sum + m.content.length, 0);\r\n  }\r\n\r\n  getMetrics(): { steps: number; totalTokens: number; memorySize: number } {\r\n    return {\r\n      steps: this.stepCount,\r\n      totalTokens: this.totalTokens,\r\n      memorySize: this.memory.size,\r\n    };\r\n  }\r\n\r\n  getHistory(): AgentMessage[] {\r\n    return [...this.messages];\r\n  }\r\n\r\n  reset(): void {\r\n    this.messages = [this.messages[0]];\r\n    this.stepCount = 0;\r\n    this.totalTokens = 0;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-toolregistry",
      children: "TypeScript: ToolRegistry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ToolRegistry {\r\n  private tools: Map<string, ToolDefinition> = new Map();\r\n  private executionHistory: Array<{ toolName: string; args: Record<string, unknown>; result: string; duration: number; error?: string }> = [];\r\n  private maxHistory: number;\r\n\r\n  constructor(maxHistory: number = 1000) {\r\n    this.maxHistory = maxHistory;\r\n  }\r\n\r\n  register(tool: ToolDefinition): void {\r\n    if (!tool.name || typeof tool.name !== 'string') {\r\n      throw new Error('Tool must have a string name');\r\n    }\r\n    if (!tool.handler || typeof tool.handler !== 'function') {\r\n      throw new Error(`Tool \"${tool.name}\" must have a handler function`);\r\n    }\r\n    if (this.tools.has(tool.name)) {\r\n      throw new Error(`Tool \"${tool.name}\" is already registered`);\r\n    }\r\n    this.tools.set(tool.name, {\r\n      ...tool,\r\n      parameters: this.validateSchema(tool.parameters),\r\n    });\r\n  }\r\n\r\n  unregister(name: string): boolean {\r\n    return this.tools.delete(name);\r\n  }\r\n\r\n  get(name: string): ToolDefinition | undefined {\r\n    return this.tools.get(name);\r\n  }\r\n\r\n  list(): ToolDefinition[] {\r\n    return Array.from(this.tools.values());\r\n  }\r\n\r\n  listByNames(): string[] {\r\n    return Array.from(this.tools.keys());\r\n  }\r\n\r\n  async execute(name: string, args: Record<string, unknown>): Promise<string> {\r\n    const tool = this.tools.get(name);\r\n    if (!tool) {\r\n      throw new Error(`Tool \"${name}\" not found in registry`);\r\n    }\r\n\r\n    const start = Date.now();\r\n    try {\r\n      const validatedArgs = this.validateArgs(tool, args);\r\n      const result = await tool.handler(validatedArgs);\r\n      const duration = Date.now() - start;\r\n      this.recordExecution(name, validatedArgs, result, duration);\r\n      return result;\r\n    } catch (err) {\r\n      const duration = Date.now() - start;\r\n      const errorMsg = err instanceof Error ? err.message : String(err);\r\n      this.recordExecution(name, args, '', duration, errorMsg);\r\n      throw err;\r\n    }\r\n  }\r\n\r\n  private validateSchema(schema: Record<string, unknown>): Record<string, unknown> {\r\n    if (!schema.type) {\r\n      return { type: 'object', properties: {}, ...schema };\r\n    }\r\n    return schema;\r\n  }\r\n\r\n  private validateArgs(tool: ToolDefinition, args: Record<string, unknown>): Record<string, unknown> {\r\n    const schema = tool.parameters as Record<string, unknown>;\r\n    const props = (schema.properties ?? {}) as Record<string, unknown>;\r\n    const required = (schema.required ?? []) as string[];\r\n\r\n    const validated: Record<string, unknown> = {};\r\n    for (const [key, value] of Object.entries(args)) {\r\n      const propSchema = props[key] as Record<string, unknown> | undefined;\r\n      if (propSchema && value !== undefined && value !== null) {\r\n        const expectedType = propSchema.type as string;\r\n        if (expectedType && typeof value !== expectedType) {\r\n          throw new Error(`Argument \"${key}\" expected type \"${expectedType}\", got \"${typeof value}\"`);\r\n        }\r\n      }\r\n      validated[key] = value;\r\n    }\r\n\r\n    for (const field of required) {\r\n      if (!(field in validated) || validated[field] === undefined || validated[field] === null) {\r\n        throw new Error(`Missing required argument \"${field}\" for tool \"${tool.name}\"`);\r\n      }\r\n    }\r\n\r\n    return validated;\r\n  }\r\n\r\n  private recordExecution(toolName: string, args: Record<string, unknown>, result: string, duration: number, error?: string): void {\r\n    this.executionHistory.push({ toolName, args, result, duration, error });\r\n    if (this.executionHistory.length > this.maxHistory) {\r\n      this.executionHistory.shift();\r\n    }\r\n  }\r\n\r\n  getHistory(filters?: { toolName?: string; hasError?: boolean }): Array<typeof this.executionHistory[number]> {\r\n    let filtered = this.executionHistory;\r\n    if (filters?.toolName) {\r\n      filtered = filtered.filter(e => e.toolName === filters.toolName);\r\n    }\r\n    if (filters?.hasError !== undefined) {\r\n      filtered = filtered.filter(e => filters.hasError ? !!e.error : !e.error);\r\n    }\r\n    return filtered;\r\n  }\r\n\r\n  getStats(): Record<string, { callCount: number; avgDuration: number; errorRate: number }> {\r\n    const stats: Record<string, number[]> = {};\r\n    for (const entry of this.executionHistory) {\r\n      if (!stats[entry.toolName]) stats[entry.toolName] = [];\r\n      stats[entry.toolName].push(entry.duration);\r\n    }\r\n    const result: Record<string, { callCount: number; avgDuration: number; errorRate: number }> = {};\r\n    for (const [name, durations] of Object.entries(stats)) {\r\n      const errors = this.executionHistory.filter(e => e.toolName === name && e.error).length;\r\n      result[name] = {\r\n        callCount: durations.length,\r\n        avgDuration: durations.reduce((a, b) => a + b, 0) / durations.length,\r\n        errorRate: errors / durations.length,\r\n      };\r\n    }\r\n    return result;\r\n  }\r\n\r\n  clearHistory(): void {\r\n    this.executionHistory = [];\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI agents combine planning, memory, tool use, and self-reflection to autonomously solve complex tasks. The ReAct pattern — interleaving reasoning traces with tool actions and observations — is the dominant architecture. Tools are defined using JSON Schema and managed through a centralized registry. Agents employ various planning strategies (ReAct, Plan-and-Solve, Tree-of-Thought) depending on task complexity. Memory management across short-term and long-term storage is critical for maintaining context over long sessions. Multi-agent patterns (supervisor, delegation, debate) enable specialization and collaboration. Evaluation must consider completion rate, efficiency, robustness, and cost. Common failure modes like loops, hallucination propagation, and context overflow require proactive mitigation."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start simple"
        }), ": Use a single ReAct agent before introducing multi-agent patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design tools carefully"
        }), ": Clear descriptions and strict validation prevent tool misuse."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always set limits"
        }), ": Maximum steps, timeouts, and cost budgets prevent runaway agents."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement memory summarization"
        }), ": It prevents context overflow in long sessions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add verification loops"
        }), ": Check intermediate results before building on them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitor and log everything"
        }), ": Agent traces are essential for debugging and improvement."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evaluate multi-dimensionally"
        }), ": Task completion, efficiency, cost, and robustness all matter."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What comes after the \"Action\" step in the ReAct loop?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thought"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Observation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reflection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which planning strategy maintains multiple reasoning paths simultaneously?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ReAct"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan-and-Solve"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tree-of-Thought"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single-step"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What is a primary mitigation for agent loops?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increasing max tokens"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Setting a step limit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding more tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increasing temperature"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": In the supervisor multi-agent pattern, what is the supervisor's role?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute all tools directly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delegate tasks and aggregate results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle only web search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate final answers only"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What is the purpose of long-term memory in an AI agent?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store the current task description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retrieve relevant past interactions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache API responses temporarily"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hold model weights"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer Key"
      }), ": Q1: 2, Q2: 3, Q3: 2, Q4: 2, Q5: 2"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 1"
      }), ": Design a ReAct prompt template for an agent with three tools: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "search_web"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "calculate"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "send_email"
      }), ". Write the system message, including tool descriptions and the thought-action-observation format."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "You are an AI assistant with access to the following tools:\r\n\r\n1. search_web(query: string): Search the web for current information.\r\n2. calculate(expression: string): Evaluate a mathematical expression.\r\n3. send_email(to: string, subject: string, body: string): Send an email.\r\n\r\nUse the following format:\r\n\r\nThought: What do I need to do next?\r\nAction: {\"name\": \"tool_name\", \"args\": {...}}\r\nObservation: The result of the action.\r\n\r\n...repeat until you have the answer...\r\n\r\nThought: I have all the information needed.\r\nFinal Answer: Your response here.\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 2"
      }), ": Implement a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "retryWithBackoff"
      }), " function that retries a tool call up to 3 times with exponential backoff (1s, 2s, 4s delays) on failure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "async function retryWithBackoff<T>(fn: () => Promise<T>, maxRetries: number = 3): Promise<T> {\r\n  for (let attempt = 0; attempt <= maxRetries; attempt++) {\r\n    try {\r\n      return await fn();\r\n    } catch (err) {\r\n      if (attempt === maxRetries) throw err;\r\n      const delay = Math.pow(2, attempt) * 1000;\r\n      await new Promise(resolve => setTimeout(resolve, delay));\r\n    }\r\n  }\r\n  throw new Error('Unreachable');\r\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 3"
      }), ": An agent searching for \"latest AI news\" gets stuck calling the same search endpoint with the same query. Propose three detection mechanisms and two mitigations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Detection: (1) Track the set of past actions — if the same (tool, args) pair repeats, flag it. (2) Monitor the observation content — if observations are identical across steps, the agent is looping. (3) Count consecutive tool calls without a final answer — alert after N steps with no progress."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Mitigations: (1) Force the agent to try a different query or tool after a repeated call. (2) Inject a prompt that says \"You have already searched X. Use the existing result or try a different approach.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 4"
      }), ": Write a TypeScript function that takes a list of agent messages and returns a compressed summary, reducing token count by at least 50%."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "function compressMessages(messages: AgentMessage[]): AgentMessage[] {\r\n  const system = messages.filter(m => m.role === 'system');\r\n  const nonSystem = messages.filter(m => m.role !== 'system');\r\n  if (nonSystem.length < 4) return messages;\r\n\r\n  const summary = nonSystem.slice(-nonSystem.length + 2);\r\n  const summaryText = summary.map(m => `[${m.role}]: ${m.content.slice(0, 100)}`).join('\\n');\r\n  return [\r\n    ...system,\r\n    { role: 'system', content: `[Compressed history: ${nonSystem.length} messages summarized]\\n${summaryText}` },\r\n    ...nonSystem.slice(-2),\r\n  ];\r\n}\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 5"
      }), ": Design an evaluation framework for a customer support agent. Define at least 5 metrics and specify how each would be measured."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Resolution Rate"
          }), ": Percentage of support tickets resolved without human escalation. Measured by automated ticket status tracking."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Average Handling Time"
          }), ": Time from first message to resolution. Measured by timestamp logging."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Customer Satisfaction (CSAT)"
          }), ": Post-interaction rating (1-5 scale). Measured via survey."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "First Response Accuracy"
          }), ": Percentage of correct answers on first reply. Measured by LLM-as-judge or human review."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tool Error Rate"
          }), ": Percentage of tool calls that fail. Measured by registry error logging."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cost Per Ticket"
          }), ": Total LLM and tool costs divided by number of tickets handled."]
        }), "\n"]
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



/***/ }

}]);