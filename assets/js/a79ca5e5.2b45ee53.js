"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3],{

/***/ 77709
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_10_prompt_engineering_mastery_md_a79_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-10-prompt-engineering-mastery-md-a79.json
const site_docs_courses_ai_agent_engineer_10_prompt_engineering_mastery_md_a79_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/10-prompt-engineering-mastery","title":"Chapter 10 — Prompt Engineering Mastery","description":"Duration: 2 weeks, ~20 hours","source":"@site/docs/courses/ai-agent-engineer/10-prompt-engineering-mastery.md","sourceDirName":"courses/ai-agent-engineer","slug":"/ai-agent-engineer/10-prompt-engineering-mastery","permalink":"/ai-engineering-journey/ai-agent-engineer/10-prompt-engineering-mastery","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"10-prompt-engineering-mastery","slug":"/ai-agent-engineer/10-prompt-engineering-mastery","title":"Chapter 10 — Prompt Engineering Mastery","sidebar_label":"Chapter 10 — Prompt Engineering Mastery","sidebar_position":11},"sidebar":"course-ai-agent-engineer","previous":{"title":"Chapter 9 — AI System Design & Architecture","permalink":"/ai-engineering-journey/ai-agent-engineer/09-ai-system-design"},"next":{"title":"Chapter 11 — AI Testing, Evaluation & Quality","permalink":"/ai-engineering-journey/ai-agent-engineer/11-ai-testing-evaluation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/10-prompt-engineering-mastery.md


const frontMatter = {
	id: '10-prompt-engineering-mastery',
	slug: '/ai-agent-engineer/10-prompt-engineering-mastery',
	title: 'Chapter 10 — Prompt Engineering Mastery',
	sidebar_label: 'Chapter 10 — Prompt Engineering Mastery',
	sidebar_position: 11
};
const contentTitle = 'Chapter 10 — Prompt Engineering Mastery';

const assets = {

};



const toc = [{
  "value": "Topic Table",
  "id": "topic-table",
  "level": 2
}, {
  "value": "10.1 Advanced Prompt Patterns",
  "id": "101-advanced-prompt-patterns",
  "level": 2
}, {
  "value": "Chain-of-Thought (CoT)",
  "id": "chain-of-thought-cot",
  "level": 3
}, {
  "value": "CoT with Self-Consistency",
  "id": "cot-with-self-consistency",
  "level": 3
}, {
  "value": "Tree-of-Thoughts (ToT)",
  "id": "tree-of-thoughts-tot",
  "level": 3
}, {
  "value": "10.2 Structured Output Design",
  "id": "102-structured-output-design",
  "level": 2
}, {
  "value": "JSON Mode (OpenAI)",
  "id": "json-mode-openai",
  "level": 3
}, {
  "value": "Tool Calling for Structured Output",
  "id": "tool-calling-for-structured-output",
  "level": 3
}, {
  "value": "Constrained Decoding Patterns",
  "id": "constrained-decoding-patterns",
  "level": 3
}, {
  "value": "10.3 Prompt Management &amp; Versioning",
  "id": "103-prompt-management--versioning",
  "level": 2
}, {
  "value": "Prompt Template System",
  "id": "prompt-template-system",
  "level": 3
}, {
  "value": "10.4 Few-Shot Optimization",
  "id": "104-few-shot-optimization",
  "level": 2
}, {
  "value": "Example Selection Strategies",
  "id": "example-selection-strategies",
  "level": 3
}, {
  "value": "Label Balance in Few-Shot",
  "id": "label-balance-in-few-shot",
  "level": 3
}, {
  "value": "10.5 System Prompt Design Patterns",
  "id": "105-system-prompt-design-patterns",
  "level": 2
}, {
  "value": "Persona + Constraints + Format",
  "id": "persona--constraints--format",
  "level": 3
}, {
  "value": "Dynamic Persona Injection",
  "id": "dynamic-persona-injection",
  "level": 3
}, {
  "value": "10.6 Multi-Turn Conversation Design",
  "id": "106-multi-turn-conversation-design",
  "level": 2
}, {
  "value": "Conversation State Machine",
  "id": "conversation-state-machine",
  "level": 3
}, {
  "value": "10.7 Prompt Compression Techniques",
  "id": "107-prompt-compression-techniques",
  "level": 2
}, {
  "value": "10.8 Prompt Evaluation Frameworks",
  "id": "108-prompt-evaluation-frameworks",
  "level": 2
}, {
  "value": "LLM-as-Judge Evaluation",
  "id": "llm-as-judge-evaluation",
  "level": 3
}, {
  "value": "Automated Prompt Regression",
  "id": "automated-prompt-regression",
  "level": 3
}, {
  "value": "10.9 A/B Testing Prompts",
  "id": "109-ab-testing-prompts",
  "level": 2
}, {
  "value": "10.10 Prompt Injection Defense",
  "id": "1010-prompt-injection-defense",
  "level": 2
}, {
  "value": "Multi-Layer Defense",
  "id": "multi-layer-defense",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-10--prompt-engineering-mastery",
        children: "Chapter 10 — Prompt Engineering Mastery"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " 2 weeks, ~20 hours\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Master advanced prompt patterns, structured output design, prompt management at scale, and injection defense. Move beyond copying prompts to designing prompt systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "topic-table",
      children: "Topic Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Advanced prompt patterns (CoT, ToT, self-consistency)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can choose the right pattern for a given task and explain why"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured output design (JSON mode, tool calling, constrained decoding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design a structured output schema for a complex multi-step task"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt management & versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up a prompt versioning system with templates and test suite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Few-shot optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select examples, order them, and measure quality improvement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System prompt design patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write a system prompt that enforces persona, constraints, and output format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-turn conversation design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design a conversation flow that maintains context across 10+ turns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt compression techniques"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compress a 4K-token prompt to 1K tokens without quality loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt evaluation frameworks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build an automated prompt eval suite with LLM-as-judge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A/B testing prompts in production"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design and run an A/B test comparing 2 prompt variants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt injection defense"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement input sanitization, output validation, and injection detection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "101-advanced-prompt-patterns",
      children: "10.1 Advanced Prompt Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chain-of-thought-cot",
      children: "Chain-of-Thought (CoT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most impactful prompt pattern. Elicits step-by-step reasoning before the answer."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Zero-shot CoT — simply add \"think step by step\"\r\ndef zero_shot_cot(question: str) -> str:\r\n    response = client.chat.completions.create(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": \"You are a helpful assistant.\"},\r\n            {\"role\": \"user\", \"content\": f\"{question}\\n\\nThink step by step, then provide the final answer.\"}\r\n        ]\r\n    )\r\n    return response.choices[0].message.content\r\n\r\n# Few-shot CoT — provide examples of reasoning chains\r\ndef few_shot_cot(question: str) -> str:\r\n    response = client.chat.completions.create(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": \"Solve problems step by step.\"},\r\n            {\"role\": \"user\", \"content\": \"\"\"Q: A store has 120 apples. It sells 1/3 of them in the morning and 1/4 of the remaining in the afternoon. How many apples are left?\r\nA: \r\n1. Start with 120 apples\r\n2. Morning: sold 1/3 ? 120 * 1/3 = 40 sold, 80 remaining\r\n3. Afternoon: sold 1/4 of remaining ? 80 * 1/4 = 20 sold, 60 remaining\r\n4. Final answer: 60 apples left\r\n\r\nQ: A class has 40 students. 60% are girls and the rest are boys. If 25% of girls and 50% of boys wear glasses, how many students wear glasses?\r\nA:\r\n1. Start with 40 students\r\n2. Girls: 60% of 40 = 24 girls\r\n3. Boys: 40 - 24 = 16 boys\r\n4. Girls with glasses: 25% of 24 = 6\r\n5. Boys with glasses: 50% of 16 = 8\r\n6. Total with glasses: 6 + 8 = 14\r\n7. Final answer: 14 students wear glasses\r\n\r\nQ: A train travels 240 km at 60 km/h, then 120 km at 40 km/h. What is the average speed for the entire journey?\r\nA:\r\n1. Time for first segment: 240/60 = 4 hours\r\n2. Time for second segment: 120/40 = 3 hours\r\n3. Total distance: 240 + 120 = 360 km\r\n4. Total time: 4 + 3 = 7 hours\r\n5. Average speed: 360/7 ˜ 51.4 km/h\r\n6. Final answer: approximately 51.4 km/h\r\n\r\nQ: \"\"\" + question}\r\n        ]\r\n    )\r\n    return response.choices[0].message.content\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cot-with-self-consistency",
      children: "CoT with Self-Consistency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run CoT multiple times and take the majority answer. Improves accuracy on mathematical and logical tasks by 5-15%."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\r\nfrom collections import Counter\r\n\r\ndef self_consistency_cot(question: str, n_attempts: int = 5) -> tuple[str, str]:\r\n    \"\"\"Run CoT multiple times and return majority answer.\"\"\"\r\n    responses = []\r\n\r\n    for _ in range(n_attempts):\r\n        resp = client.chat.completions.create(\r\n            model=\"gpt-4o-mini\",\r\n            messages=[\r\n                {\"role\": \"system\", \"content\": \"Solve step by step. End with 'Final answer: X'.\"},\r\n                {\"role\": \"user\", \"content\": question}\r\n            ],\r\n            temperature=0.7  # Higher temperature for diverse reasoning paths\r\n        )\r\n        responses.append(resp.choices[0].message.content)\r\n\r\n    # Extract final answers\r\n    answers = []\r\n    for resp in responses:\r\n        match = re.search(r\"Final answer:\\s*(.+?)$\", resp, re.MULTILINE)\r\n        if match:\r\n            answers.append(match.group(1).strip())\r\n\r\n    if not answers:\r\n        return responses[0], \"No answers found\"\r\n\r\n    # Majority vote\r\n    counter = Counter(answers)\r\n    most_common = counter.most_common(1)[0][0]\r\n    return most_common, responses[0]  # Return majority + first attempt for reference\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tree-of-thoughts-tot",
      children: "Tree-of-Thoughts (ToT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explore multiple reasoning branches simultaneously, then evaluate and select the best path."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pydantic import BaseModel\r\n\r\nclass ThoughtBranch(BaseModel):\r\n    reasoning: str\r\n    evaluation: str  # promising / unlikely / needs_exploration\r\n    next_steps: list[str]\r\n\r\nclass TreeOfThought(BaseModel):\r\n    branches: list[ThoughtBranch]\r\n    best_path: str\r\n\r\ndef tree_of_thoughts(problem: str, n_branches: int = 3) -> str:\r\n    \"\"\"Generate multiple reasoning paths, evaluate, and commit to the best.\"\"\"\r\n    # Step 1: Generate n_branches initial reasoning approaches\r\n    completion = client.beta.chat.completions.parse(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": f\"Generate {n_branches} distinct approaches to solve the problem. Evaluate each approach as 'promising', 'unlikely', or 'needs_exploration'.\"},\r\n            {\"role\": \"user\", \"content\": problem}\r\n        ],\r\n        response_format=TreeOfThought\r\n    )\r\n    tree = completion.choices[0].message.parsed\r\n\r\n    # Step 2: Explore the best path in depth\r\n    best_branch = max(tree.branches, key=lambda b: b.evaluation == \"promising\")\r\n\r\n    completion2 = client.chat.completions.create(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": \"Follow the chosen reasoning path and provide a complete solution.\"},\r\n            {\"role\": \"user\", \"content\": f\"Problem: {problem}\\n\\nChosen approach: {best_branch.reasoning}\\n\\nNext steps: {', '.join(best_branch.next_steps)}\"}\r\n        ]\r\n    )\r\n\r\n    return completion2.choices[0].message.content\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "102-structured-output-design",
      children: "10.2 Structured Output Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "json-mode-openai",
      children: "JSON Mode (OpenAI)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pydantic import BaseModel, Field\r\nfrom typing import Optional\r\nfrom enum import Enum\r\n\r\nclass Intent(str, Enum):\r\n    QUESTION = \"question\"\r\n    COMMAND = \"command\"\r\n    COMPLAINT = \"complaint\"\r\n    GREETING = \"greeting\"\r\n    FAREWELL = \"farewell\"\r\n\r\nclass Sentiment(str, Enum):\r\n    POSITIVE = \"positive\"\r\n    NEUTRAL = \"neutral\"\r\n    NEGATIVE = \"negative\"\r\n\r\nclass CustomerMessageAnalysis(BaseModel):\r\n    intent: Intent\r\n    sentiment: Sentiment\r\n    urgency: int = Field(ge=1, le=10, description=\"Urgency level from 1 (low) to 10 (critical)\")\r\n    requires_human: bool\r\n    suggested_response: str = Field(max_length=200)\r\n    extracted_entities: dict[str, str] = Field(default_factory=dict)\r\n    confidence: float = Field(ge=0.0, le=1.0)\r\n\r\ndef analyze_message(message: str) -> CustomerMessageAnalysis:\r\n    \"\"\"Parse any customer message into structured fields.\"\"\"\r\n    completion = client.beta.chat.completions.parse(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": \"Analyze the customer message and return structured data.\"},\r\n            {\"role\": \"user\", \"content\": message}\r\n        ],\r\n        response_format=CustomerMessageAnalysis\r\n    )\r\n    return completion.choices[0].message.parsed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tool-calling-for-structured-output",
      children: "Tool Calling for Structured Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def extract_invoice_data(text: str) -> dict:\r\n    \"\"\"Use function calling to extract structured invoice data from unstructured text.\"\"\"\r\n    response = client.chat.completions.create(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"user\", \"content\": f\"Extract invoice information from this text:\\n\\n{text}\"}\r\n        ],\r\n        tools=[{\r\n            \"type\": \"function\",\r\n            \"function\": {\r\n                \"name\": \"record_invoice\",\r\n                \"description\": \"Extract structured invoice data\",\r\n                \"parameters\": {\r\n                    \"type\": \"object\",\r\n                    \"properties\": {\r\n                        \"invoice_number\": {\"type\": \"string\"},\r\n                        \"date\": {\"type\": \"string\", \"format\": \"date\"},\r\n                        \"vendor\": {\"type\": \"string\"},\r\n                        \"total_amount\": {\"type\": \"number\"},\r\n                        \"currency\": {\"type\": \"string\"},\r\n                        \"line_items\": {\r\n                            \"type\": \"array\",\r\n                            \"items\": {\r\n                                \"type\": \"object\",\r\n                                \"properties\": {\r\n                                    \"description\": {\"type\": \"string\"},\r\n                                    \"quantity\": {\"type\": \"integer\"},\r\n                                    \"unit_price\": {\"type\": \"number\"},\r\n                                    \"total\": {\"type\": \"number\"}\r\n                                },\r\n                                \"required\": [\"description\", \"quantity\", \"unit_price\", \"total\"]\r\n                            }\r\n                        },\r\n                        \"tax_amount\": {\"type\": \"number\"},\r\n                        \"due_date\": {\"type\": \"string\", \"format\": \"date\"}\r\n                    },\r\n                    \"required\": [\"invoice_number\", \"date\", \"vendor\", \"total_amount\", \"currency\"]\r\n                }\r\n            }\r\n        }],\r\n        tool_choice={\"type\": \"function\", \"function\": {\"name\": \"record_invoice\"}}\r\n    )\r\n\r\n    tool_calls = response.choices[0].message.tool_calls\r\n    if tool_calls:\r\n        return json.loads(tool_calls[0].function.arguments)\r\n    return {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constrained-decoding-patterns",
      children: "Constrained Decoding Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pydantic import BaseModel, Field\r\nfrom typing import Literal, Optional\r\n\r\nclass CodeGenerationTask(BaseModel):\r\n    task: str\r\n    language: Literal[\"python\", \"typescript\", \"rust\", \"go\", \"java\"]\r\n    framework: Optional[str] = None\r\n    constraints: list[str] = Field(default_factory=list)\r\n\r\nclass GeneratedCode(BaseModel):\r\n    code: str\r\n    explanation: str\r\n    complexity_analysis: str\r\n    test_cases: list[dict] = Field(description=\"List of test cases with input and expected output\")\r\n    potential_issues: list[str] = Field(default_factory=list)\r\n\r\ndef generate_code_with_validation(task: CodeGenerationTask) -> GeneratedCode:\r\n    \"\"\"Generate code that must match the exact schema.\"\"\"\r\n    completion = client.beta.chat.completions.parse(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": f\"Generate {task.language} code for the given task. Include tests and complexity analysis.\"},\r\n            {\"role\": \"user\", \"content\": f\"Task: {task.task}\\nFramework: {task.framework or 'none'}\\nConstraints: {', '.join(task.constraints)}\"}\r\n        ],\r\n        response_format=GeneratedCode\r\n    )\r\n    return completion.choices[0].message.parsed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "103-prompt-management--versioning",
      children: "10.3 Prompt Management & Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prompt-template-system",
      children: "Prompt Template System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from string import Template\r\nfrom datetime import datetime\r\nimport hashlib\r\nimport yaml\r\n\r\nclass PromptTemplate:\r\n    \"\"\"Versioned prompt template with metadata and test suite.\"\"\"\r\n\r\n    def __init__(self, name: str, version: str, template: str, metadata: dict | None = None):\r\n        self.name = name\r\n        self.version = version\r\n        self._template = Template(template)\r\n        self.metadata = metadata or {}\r\n        self.created_at = datetime.now()\r\n\r\n    def render(self, **kwargs) -> str:\r\n        return self._template.safe_substitute(**kwargs)\r\n\r\n    def fingerprint(self) -> str:\r\n        return hashlib.sha256(self._template.template.encode()).hexdigest()[:12]\r\n\r\nclass PromptRegistry:\r\n    \"\"\"Manage prompt templates with versioning.\"\"\"\r\n\r\n    def __init__(self, storage_path: str = \"prompts/\"):\r\n        self.templates: dict[str, list[PromptTemplate]] = {}\r\n        self.storage_path = storage_path\r\n\r\n    def register(self, template: PromptTemplate):\r\n        if template.name not in self.templates:\r\n            self.templates[template.name] = []\r\n        self.templates[template.name].append(template)\r\n\r\n    def get(self, name: str, version: str | None = None) -> PromptTemplate | None:\r\n        if name not in self.templates:\r\n            return None\r\n        if version is None:\r\n            return self.templates[name][-1]  # Latest version\r\n        for t in self.templates[name]:\r\n            if t.version == version:\r\n                return t\r\n        return None\r\n\r\n    def list_versions(self, name: str) -> list[str]:\r\n        if name not in self.templates:\r\n            return []\r\n        return [t.version for t in self.templates[name]]\r\n\r\n# Define prompt templates\r\nrag_system_prompt = PromptTemplate(\r\n    name=\"rag_system\",\r\n    version=\"1.0.0\",\r\n    template=(\r\n        \"You are a helpful assistant that answers questions using the provided context.\\n\\n\"\r\n        \"Rules:\\n\"\r\n        \"- Answer ONLY using the information in the context below.\\n\"\r\n        \"- If the context does not contain enough information, say \\\"I cannot find enough information in the provided documents.\\\"\\n\"\r\n        \"- Cite your sources using brackets [1], [2], etc.\\n\"\r\n        \"- Keep answers concise (under ${max_tokens} tokens).\\n\"\r\n        \"- Do not make up information or speculate.\\n\\n\"\r\n        \"Context:\\n$context\\n\\n\"\r\n        \"User query: $query\"\r\n    ),\r\n    metadata={\"purpose\": \"RAG system prompt\", \"author\": \"course\"}\r\n)\r\n\r\nagent_system_prompt = PromptTemplate(\r\n    name=\"agent_system\",\r\n    version=\"2.1.0\",\r\n    template=(\r\n        \"You are ${agent_name}, an AI agent specialized in ${specialization}.\\n\\n\"\r\n        \"Your capabilities:\\n\"\r\n        \"$capabilities\\n\\n\"\r\n        \"Available tools:\\n\"\r\n        \"$tool_descriptions\\n\\n\"\r\n        \"Instructions:\\n\"\r\n        \"- Think step by step before using any tool.\\n\"\r\n        \"- If a tool fails, try an alternative approach.\\n\"\r\n        \"- When you have enough information, provide a final answer.\\n\"\r\n        \"- Never make up tool responses.\"\r\n    ),\r\n    metadata={\"purpose\": \"Agent system prompt\", \"author\": \"course\"}\r\n)\r\n\r\n# Usage\r\nregistry = PromptRegistry()\r\nregistry.register(rag_system_prompt)\r\nregistry.register(agent_system_prompt)\r\n\r\n# Render a template\r\nprompt = registry.get(\"rag_system\", \"1.0.0\")\r\nrendered = prompt.render(\r\n    context=\"Documents about lease terms...\",\r\n    query=\"What are the lease terms?\",\r\n    max_tokens=\"200\"\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "104-few-shot-optimization",
      children: "10.4 Few-Shot Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-selection-strategies",
      children: "Example Selection Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nfrom sklearn.metrics.pairwise import cosine_similarity\r\n\r\nclass FewShotOptimizer:\r\n    \"\"\"\r\n    Select optimal few-shot examples for a given query using\r\n    semantic similarity and diversity sampling.\r\n    \"\"\"\r\n\r\n    def __init__(self, examples: list[dict], embedding_model: str = \"text-embedding-3-small\"):\r\n        self.examples = examples\r\n        self.embedding_model = embedding_model\r\n        self._embed_examples()\r\n\r\n    def _embed_examples(self):\r\n        \"\"\"Pre-compute embeddings for all examples.\"\"\"\r\n        texts = [e[\"query\"] for e in self.examples]\r\n        response = client.embeddings.create(input=texts, model=self.embedding_model)\r\n        self.example_vectors = np.array([d.embedding for d in response.data])\r\n\r\n    def select_by_similarity(self, query: str, k: int = 3) -> list[dict]:\r\n        \"\"\"Select k most similar examples to the query.\"\"\"\r\n        q_vec = client.embeddings.create(input=query, model=self.embedding_model).data[0].embedding\r\n        q_vec = np.array(q_vec).reshape(1, -1)\r\n\r\n        similarities = cosine_similarity(q_vec, self.example_vectors)[0]\r\n        top_k_indices = np.argsort(similarities)[-k:][::-1]\r\n        return [self.examples[i] for i in top_k_indices]\r\n\r\n    def select_diverse(self, query: str, k: int = 3) -> list[dict]:\r\n        \"\"\"Select k examples that are both relevant and diverse.\"\"\"\r\n        q_vec = client.embeddings.create(input=query, model=self.embedding_model).data[0].embedding\r\n        q_vec = np.array(q_vec).reshape(1, -1)\r\n\r\n        similarities = cosine_similarity(q_vec, self.example_vectors)[0]\r\n        candidates = np.argsort(similarities)[-k * 3:][::-1]\r\n\r\n        # Greedy diversity selection\r\n        selected = [candidates[0]]\r\n        remaining = list(candidates[1:])\r\n\r\n        while len(selected) < k and remaining:\r\n            # Pick example most different from already selected ones\r\n            sel_vectors = self.example_vectors[selected]\r\n            rem_vectors = self.example_vectors[remaining]\r\n            diversity_scores = np.min(\r\n                cosine_similarity(rem_vectors, sel_vectors), axis=1\r\n            )\r\n            best_rem = remaining[np.argmin(diversity_scores)]\r\n            selected.append(best_rem)\r\n            remaining.remove(best_rem)\r\n\r\n        return [self.examples[i] for i in selected]\r\n\r\n# Example bank\r\nexample_bank = [\r\n    {\"query\": \"How do I reset my password?\", \"response\": \"Go to Settings > Security > Reset Password. Enter your email and check for the reset link.\"},\r\n    {\"query\": \"What is the refund policy?\", \"response\": \"Full refund within 30 days of purchase. Partial refund after 30 days based on usage.\"},\r\n    {\"query\": \"How do I cancel my subscription?\", \"response\": \"Log into your account, go to Billing > Subscription and click 'Cancel'. Your access continues until the end of the billing period.\"},\r\n    {\"query\": \"Can I export my data?\", \"response\": \"Yes. Go to Settings > Data > Export. You'll receive a CSV download link via email within 24 hours.\"},\r\n    {\"query\": \"How do I invite team members?\", \"response\": \"In the workspace settings, click 'Invite Members'. Enter their email addresses and assign roles.\"},\r\n]\r\n\r\noptimizer = FewShotOptimizer(example_bank)\r\nuser_query = \"I forgot my login credentials\"\r\n\r\n# Get best examples\r\nexamples = optimizer.select_by_similarity(user_query, k=2)\r\nfor ex in examples:\r\n    print(f\"Q: {ex['query']}\\nA: {ex['response']}\\n\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "label-balance-in-few-shot",
      children: "Label Balance in Few-Shot"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def balanced_few_shot(\r\n    query: str,\r\n    examples_by_class: dict[str, list[dict]],\r\n    k_per_class: int = 1,\r\n) -> list[dict]:\r\n    \"\"\"Select k examples from each class for balanced few-shot prompts.\"\"\"\r\n    selected = []\r\n    for cls, examples in examples_by_class.items():\r\n        optimizer = FewShotOptimizer(examples)\r\n        best = optimizer.select_by_similarity(query, k=k_per_class)\r\n        selected.extend(best)\r\n    return selected\r\n\r\n# Usage for sentiment classification\r\nsentiment_examples = {\r\n    \"positive\": [\r\n        {\"query\": \"Great service, very happy!\", \"response\": \"positive\"},\r\n        {\"query\": \"Excellent product, highly recommend.\", \"response\": \"positive\"},\r\n        {\"query\": \"Love the new features!\", \"response\": \"positive\"},\r\n    ],\r\n    \"negative\": [\r\n        {\"query\": \"Terrible experience, very disappointed.\", \"response\": \"negative\"},\r\n        {\"query\": \"This is the worst app ever.\", \"response\": \"negative\"},\r\n        {\"query\": \"Keeps crashing, unusable.\", \"response\": \"negative\"},\r\n    ],\r\n    \"neutral\": [\r\n        {\"query\": \"How do I update my profile?\", \"response\": \"neutral\"},\r\n        {\"query\": \"What time does support open?\", \"response\": \"neutral\"},\r\n        {\"query\": \"Can you send me the documentation?\", \"response\": \"neutral\"},\r\n    ]\r\n}\r\n\r\nbalanced = balanced_few_shot(\"This app is amazing!\", sentiment_examples)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "105-system-prompt-design-patterns",
      children: "10.5 System Prompt Design Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "persona--constraints--format",
      children: "Persona + Constraints + Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def build_system_prompt(\r\n    persona: str,\r\n    constraints: list[str],\r\n    output_format: str,\r\n    examples: list[tuple[str, str]] | None = None,\r\n) -> str:\r\n    \"\"\"Build a structured system prompt from components.\"\"\"\r\n    parts = [f\"You are {persona}.\\n\"]\r\n\r\n    if constraints:\r\n        parts.append(\"Constraints:\")\r\n        for c in constraints:\r\n            parts.append(f\"- {c}\")\r\n        parts.append(\"\")\r\n\r\n    if examples:\r\n        parts.append(\"Examples:\")\r\n        for q, a in examples:\r\n            parts.append(f\"User: {q}\")\r\n            parts.append(f\"You: {a}\")\r\n        parts.append(\"\")\r\n\r\n    parts.append(f\"Output format:\\n{output_format}\")\r\n    return \"\\n\".join(parts)\r\n\r\n# Example: Code reviewer persona\r\ncode_review_prompt = build_system_prompt(\r\n    persona=\"an expert Python code reviewer. You review code for correctness, performance, maintainability, and security.\",\r\n    constraints=[\r\n        \"Focus on logic errors first, then style.\",\r\n        \"Provide specific fix suggestions, not general advice.\",\r\n        \"If you find a security vulnerability, mark it CRITICAL.\",\r\n        \"Be concise — max 5 bullet points per review.\"\r\n    ],\r\n    output_format=\"Markdown with sections: Issues Found, Suggestions, Positive Notes.\",\r\n    examples=[\r\n        (\"def add(a, b): return a + b\", \"Looks correct. Consider type hints: `def add(a: int, b: int) -> int:`\"),\r\n        (\"password = request.args.get('pass')\", \"CRITICAL: Never pass passwords as URL query parameters. Use POST body instead.\"),\r\n    ]\r\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dynamic-persona-injection",
      children: "Dynamic Persona Injection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DynamicPersona:\r\n    \"\"\"Inject domain-specific persona context at runtime.\"\"\"\r\n\r\n    DOMAINS = {\r\n        \"legal\": {\r\n            \"persona\": \"a legal document reviewer. Be precise and cite specific clauses.\",\r\n            \"constraints\": [\"Quote exact language from documents.\", \"Flag ambiguous phrasing.\", \"Never give legal advice — only document analysis.\"]\r\n        },\r\n        \"medical\": {\r\n            \"persona\": \"a medical information assistant. Be cautious and evidence-based.\",\r\n            \"constraints\": [\"Cite sources for all medical claims.\", \"Flag uncertainty explicitly.\", \"Include disclaimer to consult a doctor.\"]\r\n        },\r\n        \"technical\": {\r\n            \"persona\": \"a senior software engineer explaining complex concepts clearly.\",\r\n            \"constraints\": [\"Start with the simplest explanation.\", \"Include a code example.\", \"Note tradeoffs and alternatives.\"]\r\n        },\r\n        \"customer_support\": {\r\n            \"persona\": \"a helpful customer support agent. Be empathetic and solution-oriented.\",\r\n            \"constraints\": [\"Acknowledge the customer's frustration.\", \"Provide steps to resolve.\", \"Offer to escalate if needed.\"]\r\n        }\r\n    }\r\n\r\n    @classmethod\r\n    def get_prompt(cls, domain: str, additional_context: str = \"\") -> str:\r\n        config = cls.DOMAINS.get(domain, cls.DOMAINS[\"technical\"])\r\n        constraints = \"\\n\".join(f\"- {c}\" for c in config[\"constraints\"])\r\n        return f\"You are {config['persona']}\\n\\nRules:\\n{constraints}\\n\\n{additional_context}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "106-multi-turn-conversation-design",
      children: "10.6 Multi-Turn Conversation Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conversation-state-machine",
      children: "Conversation State Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from enum import Enum\r\nfrom pydantic import BaseModel\r\nfrom typing import Optional\r\n\r\nclass ConversationState(str, Enum):\r\n    GREETING = \"greeting\"\r\n    GATHERING_INFO = \"gathering_info\"\r\n    PROCESSING = \"processing\"\r\n    CLARIFYING = \"clarifying\"\r\n    RESOLVING = \"resolving\"\r\n    CLOSING = \"closing\"\r\n\r\nclass ConversationContext(BaseModel):\r\n    state: ConversationState = ConversationState.GREETING\r\n    customer_name: Optional[str] = None\r\n    issue_type: Optional[str] = None\r\n    collected_info: dict = {}\r\n    turn_count: int = 0\r\n    sentiment: str = \"neutral\"\r\n\r\nclass ConversationManager:\r\n    \"\"\"Manage multi-turn conversation with state tracking.\"\"\"\r\n\r\n    def __init__(self, system_prompt: str):\r\n        self.system_prompt = system_prompt\r\n        self.history: list[dict] = []\r\n\r\n    def process_turn(self, user_input: str, context: ConversationContext) -> tuple[str, ConversationContext]:\r\n        \"\"\"Process one turn and return response + updated context.\"\"\"\r\n        context.turn_count += 1\r\n\r\n        # Build messages with full history\r\n        messages = [{\"role\": \"system\", \"content\": self._build_state_prompt(context)}]\r\n        messages.extend(self.history[-10:])  # Keep last 10 turns\r\n        messages.append({\"role\": \"user\", \"content\": user_input})\r\n\r\n        response = client.chat.completions.create(\r\n            model=\"gpt-4o-mini\",\r\n            messages=messages\r\n        )\r\n\r\n        reply = response.choices[0].message.content\r\n        self.history.append({\"role\": \"user\", \"content\": user_input})\r\n        self.history.append({\"role\": \"assistant\", \"content\": reply})\r\n\r\n        # Update state based on conversation progress\r\n        context = self._update_state(user_input, reply, context)\r\n\r\n        return reply, context\r\n\r\n    def _build_state_prompt(self, context: ConversationContext) -> str:\r\n        return f\"\"\"{self.system_prompt}\r\n\r\nCurrent state: {context.state.value}\r\nCustomer: {context.customer_name or 'Unknown'}\r\nIssue type: {context.issue_type or 'Not yet identified'}\r\nTurns so far: {context.turn_count}\r\n\r\nBased on the current state:\r\n- GREETING: Introduce yourself, ask how you can help\r\n- GATHERING_INFO: Ask targeted questions to understand the issue\r\n- CLARIFYING: Ask follow-up questions about unclear details\r\n- PROCESSING: Indicate you're working on the solution\r\n- RESOLVING: Provide the solution step by step\r\n- CLOSING: Confirm resolution, ask if anything else needed\"\"\"\r\n\r\n    def _update_state(self, user_input: str, reply: str, context: ConversationContext) -> ConversationContext:\r\n        \"\"\"Determine next state based on conversation progress.\"\"\"\r\n        if context.state == ConversationState.GREETING:\r\n            context.state = ConversationState.GATHERING_INFO\r\n        elif context.state == ConversationState.GATHERING_INFO and context.turn_count > 3:\r\n            context.state = ConversationState.PROCESSING\r\n        elif context.state == ConversationState.PROCESSING and \"unclear\" in user_input.lower():\r\n            context.state = ConversationState.CLARIFYING\r\n        elif context.state == ConversationState.CLARIFYING:\r\n            context.state = ConversationState.RESOLVING\r\n        elif \"thank\" in user_input.lower() or \"that's all\" in user_input.lower():\r\n            context.state = ConversationState.CLOSING\r\n        return context\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "107-prompt-compression-techniques",
      children: "10.7 Prompt Compression Techniques"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PromptCompressor:\r\n    \"\"\"Compress prompts by removing redundancy and condensing context.\"\"\"\r\n\r\n    @staticmethod\r\n    def compress_conversation_history(messages: list[dict], max_tokens: int = 2000) -> list[dict]:\r\n        \"\"\"Summarize older turns to reduce token usage.\"\"\"\r\n        if len(messages) < 4:\r\n            return messages\r\n\r\n        # Keep first system prompt, summarize middle, keep recent\r\n        system = [m for m in messages if m[\"role\"] == \"system\"]\r\n        turns = [m for m in messages if m[\"role\"] != \"system\"]\r\n\r\n        if len(turns) <= 6:\r\n            return messages\r\n\r\n        # Summarize everything except last 4 turns\r\n        early_turns = turns[:-4]\r\n        recent_turns = turns[-4:]\r\n\r\n        early_text = \"\\n\".join(f\"{t['role']}: {t['content'][:200]}\" for t in early_turns)\r\n        summary = client.chat.completions.create(\r\n            model=\"gpt-4o-mini\",\r\n            messages=[\r\n                {\"role\": \"system\", \"content\": \"Summarize this conversation history concisely, preserving key facts, decisions, and user preferences.\"},\r\n                {\"role\": \"user\", \"content\": early_text}\r\n            ],\r\n            max_tokens=300\r\n        ).choices[0].message.content\r\n\r\n        return system + [{\"role\": \"system\", \"content\": f\"Previous conversation summary: {summary}\"}] + recent_turns\r\n\r\n    @staticmethod\r\n    def compress_context(context: str, max_chunks: int = 5) -> str:\r\n        \"\"\"Keep only the most relevant chunks from a large context.\"\"\"\r\n        chunks = context.split(\"\\n\\n\")\r\n        if len(chunks) <= max_chunks:\r\n            return context\r\n\r\n        # Keep first chunk (usually intro/summary) and last max_chunks-1\r\n        # This assumes relevance decreases with distance\r\n        return \"\\n\\n\".join([chunks[0]] + chunks[-(max_chunks - 1):])\r\n\r\n    @staticmethod\r\n    def extractive_summarize(text: str, max_sentences: int = 10) -> str:\r\n        \"\"\"Extract the most important sentences from a long text.\"\"\"\r\n        sentences = text.replace(\"\\n\", \" \").split(\". \")\r\n        if len(sentences) <= max_sentences:\r\n            return text\r\n\r\n        # Keep first and last few sentences (intro + conclusion)\r\n        kept = sentences[:3] + sentences[-(max_sentences - 3):]\r\n        return \". \".join(kept)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "108-prompt-evaluation-frameworks",
      children: "10.8 Prompt Evaluation Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "llm-as-judge-evaluation",
      children: "LLM-as-Judge Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pydantic import BaseModel, Field\r\n\r\nclass PromptEvaluation(BaseModel):\r\n    overall_score: float = Field(ge=1, le=10)\r\n    criteria_scores: dict[str, float]\r\n    strengths: list[str]\r\n    weaknesses: list[str]\r\n    suggested_improvements: list[str]\r\n\r\ndef evaluate_prompt_output(\r\n    prompt_template: str,\r\n    test_cases: list[dict],\r\n    criteria: list[str],\r\n) -> PromptEvaluation:\r\n    \"\"\"Evaluate a prompt against test cases using LLM-as-judge.\"\"\"\r\n    scores = {c: [] for c in criteria}\r\n\r\n    for test in test_cases:\r\n        # Generate output\r\n        rendered = prompt_template.render(**test[\"variables\"])\r\n        output = client.chat.completions.create(\r\n            model=\"gpt-4o-mini\",\r\n            messages=[\r\n                {\"role\": \"system\", \"content\": rendered},\r\n                {\"role\": \"user\", \"content\": test[\"input\"]}\r\n            ]\r\n        ).choices[0].message.content\r\n\r\n        # Evaluate against each criterion\r\n        for criterion in criteria:\r\n            eval_resp = client.beta.chat.completions.parse(\r\n                model=\"gpt-4o-mini\",\r\n                messages=[\r\n                    {\"role\": \"system\", \"content\": f\"Rate the output on '{criterion}' from 1-10. Consider: {test.get('criterion_definition', '')}\"},\r\n                    {\"role\": \"user\", \"content\": f\"Expected: {test['expected']}\\n\\nActual: {output}\"}\r\n                ],\r\n                response_format=type(\"Score\", (BaseModel,), {\"score\": float, \"reasoning\": str})\r\n            )\r\n            scores[criterion].append(eval_resp.choices[0].message.parsed.score)\r\n\r\n    # Aggregate scores\r\n    avg_scores = {c: sum(v)/len(v) for c, v in scores.items()}\r\n    overall = sum(avg_scores.values()) / len(avg_scores)\r\n\r\n    return PromptEvaluation(\r\n        overall_score=round(overall, 1),\r\n        criteria_scores={c: round(s, 1) for c, s in avg_scores.items()},\r\n        strengths=[],\r\n        weaknesses=[],\r\n        suggested_improvements=[]\r\n    )\r\n\r\n# Usage\r\ntest_suite = [\r\n    {\"variables\": {\"context\": \"Lease terms are 12 months.\", \"query\": \"What is the lease term?\", \"max_tokens\": \"100\"}, \"input\": \"What is the lease term?\", \"expected\": \"12 months\"},\r\n    {\"variables\": {\"context\": \"The refund policy allows full refund within 30 days.\", \"query\": \"Can I get a refund after 60 days?\", \"max_tokens\": \"100\"}, \"input\": \"Can I get a refund after 60 days?\", \"expected\": \"No, refunds only within 30 days.\"},\r\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-prompt-regression",
      children: "Automated Prompt Regression"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PromptRegressionSuite:\r\n    \"\"\"Track prompt quality over time to catch regressions.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.test_cases: list[dict] = []\r\n        self.results: dict[str, list[float]] = {}  # prompt_version -> scores\r\n\r\n    def add_test_case(self, name: str, prompt_vars: dict, input: str, expected: str, eval_criteria: list[str]):\r\n        self.test_cases.append({\r\n            \"name\": name,\r\n            \"prompt_vars\": prompt_vars,\r\n            \"input\": input,\r\n            \"expected\": expected,\r\n            \"eval_criteria\": eval_criteria\r\n        })\r\n\r\n    def run_suite(self, prompt_template, version: str) -> dict:\r\n        \"\"\"Run all test cases and return pass/fail results.\"\"\"\r\n        case_results = []\r\n        passed = 0\r\n\r\n        for case in self.test_cases:\r\n            rendered = prompt_template.render(**case[\"prompt_vars\"])\r\n            output = client.chat.completions.create(\r\n                model=\"gpt-4o-mini\",\r\n                messages=[\r\n                    {\"role\": \"system\", \"content\": rendered},\r\n                    {\"role\": \"user\", \"content\": case[\"input\"]}\r\n                ]\r\n            ).choices[0].message.content.lower()\r\n\r\n            # Check if expected content is in output\r\n            expected_lower = case[\"expected\"].lower()\r\n            is_pass = expected_lower in output\r\n            if is_pass:\r\n                passed += 1\r\n\r\n            case_results.append({\r\n                \"name\": case[\"name\"],\r\n                \"pass\": is_pass,\r\n                \"expected\": case[\"expected\"],\r\n                \"actual\": output\r\n            })\r\n\r\n        score = passed / len(self.test_cases) * 100\r\n        self.results[version] = [score]\r\n\r\n        return {\r\n            \"version\": version,\r\n            \"pass_rate\": f\"{score:.0f}%\",\r\n            \"passed\": passed,\r\n            \"total\": len(self.test_cases),\r\n            \"details\": case_results\r\n        }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "109-ab-testing-prompts",
      children: "10.9 A/B Testing Prompts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\r\nimport statistics\r\n\r\nclass PromptABTest:\r\n    \"\"\"Compare two prompt variants in production with statistical analysis.\"\"\"\r\n\r\n    def __init__(self, variant_a: str, variant_b: str, metric: str = \"user_satisfaction\"):\r\n        self.variant_a = variant_a\r\n        self.variant_b = variant_b\r\n        self.metric = metric\r\n        self.results_a: list[float] = []\r\n        self.results_b: list[float] = []\r\n\r\n    def serve(self, user_id: str, query: str) -> tuple[str, str]:\r\n        \"\"\"Route to variant A or B based on user ID hash.\"\"\"\r\n        use_a = hash(user_id + \"salt\") % 2 == 0\r\n        variant = self.variant_a if use_a else self.variant_b\r\n\r\n        response = client.chat.completions.create(\r\n            model=\"gpt-4o-mini\",\r\n            messages=[\r\n                {\"role\": \"system\", \"content\": variant},\r\n                {\"role\": \"user\", \"content\": query}\r\n            ]\r\n        ).choices[0].message.content\r\n\r\n        return response, \"A\" if use_a else \"B\"\r\n\r\n    def record_result(self, variant: str, score: float):\r\n        if variant == \"A\":\r\n            self.results_a.append(score)\r\n        else:\r\n            self.results_b.append(score)\r\n\r\n    def analyze(self, min_samples: int = 100) -> dict:\r\n        \"\"\"Statistical analysis of A/B test results.\"\"\"\r\n        if len(self.results_a) < min_samples or len(self.results_b) < min_samples:\r\n            return {\"status\": \"insufficient_data\", \"samples_a\": len(self.results_a), \"samples_b\": len(self.results_b)}\r\n\r\n        mean_a = statistics.mean(self.results_a)\r\n        mean_b = statistics.mean(self.results_b)\r\n        stdev_a = statistics.stdev(self.results_a)\r\n        stdev_b = statistics.stdev(self.results_b)\r\n\r\n        # Simple z-test approximation\r\n        import math\r\n        z_score = (mean_a - mean_b) / math.sqrt((stdev_a**2/len(self.results_a)) + (stdev_b**2/len(self.results_b)))\r\n\r\n        return {\r\n            \"status\": \"complete\",\r\n            \"samples_a\": len(self.results_a),\r\n            \"samples_b\": len(self.results_b),\r\n            \"mean_a\": round(mean_a, 3),\r\n            \"mean_b\": round(mean_b, 3),\r\n            \"z_score\": round(z_score, 3),\r\n            \"winner\": \"A\" if mean_a > mean_b else \"B\",\r\n            \"significant\": abs(z_score) > 1.96  # 95% confidence\r\n        }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1010-prompt-injection-defense",
      children: "10.10 Prompt Injection Defense"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-layer-defense",
      children: "Multi-Layer Defense"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\r\n\r\nclass PromptInjectionDefense:\r\n    \"\"\"Multi-layer defense against prompt injection attacks.\"\"\"\r\n\r\n    @staticmethod\r\n    def detect_injection(text: str) -> float:\r\n        \"\"\"\r\n        Score text for injection likelihood (0.0 = safe, 1.0 = definite injection).\r\n        Uses pattern matching and heuristic scoring.\r\n        \"\"\"\r\n        score = 0.0\r\n\r\n        injection_patterns = [\r\n            (r\"(?i)(ignore|disregard|forget|override)\\s+(all\\s+)?(previous|above|system|instructions)\", 0.8),\r\n            (r\"(?i)you\\s+(are\\s+)?(now|must)\\s+(act|pretend|behave)\", 0.6),\r\n            (r\"(?i)new\\s+(instructions|prompt|system)\", 0.5),\r\n            (r\"(?i)say\\s+\\\".*\\\"\\s+and\\s+(then|after)\", 0.4),\r\n            (r\"(?i)your\\s+(true|real|secret)\\s+(instructions|prompt|objective)\", 0.7),\r\n            (r\"(?i)rollback|reset|restart|fresh\\s+start\", 0.5),\r\n            (r\"(?i)system\\s*(prompt|message|instructions?)\\s*:\", 0.6),\r\n            (r\"(?i)forget\\s+(everything|all|context)\", 0.7),\r\n            (r\"(?i)you\\s+are\\s+(not|aren't)\\s+(bound|limited|constrained)\", 0.6),\r\n            (r\"(?i)output\\s+the\\s+(above|following|text|instructions)\", 0.4),\r\n            (r\"(?i)ignore\\s+(the\\s+)?(above|previous|system)\", 0.8),\r\n            (r\"(?i)reveal\\s+(your|the|any)\\s+(secret|hidden|system)\", 0.7),\r\n            (r\"(?i)print\\s+(everything|the\\s+entire|your\\s+full)\\s+(prompt|instructions|system)\", 0.8),\r\n            (r\"(?i)separated\\s+by\\s+\\\"\\|\", 0.3),\r\n            (r\"(?i)i\\s+have\\s+(full|complete|unlimited|sudo)\\s+permissions\", 0.5),\r\n        ]\r\n\r\n        for pattern, weight in injection_patterns:\r\n            if re.search(pattern, text):\r\n                score = min(1.0, score + weight)\r\n\r\n        # Check for encoded/obfuscated content\r\n        if len(text) > 500 and text.count(\" \") < len(text) * 0.1:\r\n            score = min(1.0, score + 0.3)  # Could be base64 or encoded payload\r\n\r\n        # Check for excessive newlines/formatting (markdown injection)\r\n        if text.count(\"\\n\") > 20 and len(text) < 1000:\r\n            score = min(1.0, score + 0.3)\r\n\r\n        return score\r\n\r\n    @classmethod\r\n    def sanitize_input(cls, text: str) -> str:\r\n        \"\"\"Remove or neutralize dangerous patterns.\"\"\"\r\n        # Strip known injection phrases\r\n        text = re.sub(r\"(?i)(ignore|disregard|override)\\s+(all\\s+)?(previous|above).*\", \"\", text)\r\n        text = re.sub(r\"(?i)system\\s*(prompt|message).*?[::]\\s*\", \"\", text)\r\n        text = re.sub(r\"(?i)new\\s+(instructions|prompt|system).*[::]\\s*\", \"\", text)\r\n        return text.strip()\r\n\r\n    @classmethod\r\n    def output_guardrail(cls, output: str) -> str:\r\n        \"\"\"Check output for leaked system prompts or sensitive content.\"\"\"\r\n        leak_patterns = [\r\n            r\"(?i)(you\\s+are|you're)\\s+(an?\\s+)?(AI|assistant|helpful)\",\r\n            r\"(?i)(system|user|assistant)\\s*(message|prompt|instruction)\",\r\n            r\"(?i)as\\s+(an?\\s+)?(AI|language\\s+model)\",\r\n            r\"(?i)I\\s+(don't|cannot|am\\s+not\\s+able\\s+to)\\s+(have\\s+)?(access|opinion|feelings)\",\r\n        ]\r\n        for pattern in leak_patterns:\r\n            if re.search(pattern, output[:200]):  # Check only the beginning\r\n                return \"[Response blocked by output guardrail]\"\r\n        return output\r\n\r\n# Full defense pipeline\r\ndef safe_completion(user_input: str, system_prompt: str) -> str:\r\n    \"\"\"End-to-end safe completion with injection defense.\"\"\"\r\n    # 1. Input detection\r\n    injection_score = PromptInjectionDefense.detect_injection(user_input)\r\n    if injection_score > 0.7:\r\n        return \"I cannot process this request. Please rephrase.\"\r\n\r\n    # 2. Input sanitization\r\n    sanitized = PromptInjectionDefense.sanitize_input(user_input)\r\n\r\n    # 3. Generate response\r\n    response = client.chat.completions.create(\r\n        model=\"gpt-4o-mini\",\r\n        messages=[\r\n            {\"role\": \"system\", \"content\": system_prompt},\r\n            {\"role\": \"user\", \"content\": sanitized}\r\n        ]\r\n    ).choices[0].message.content\r\n\r\n    # 4. Output guardrail\r\n    safe_output = PromptInjectionDefense.output_guardrail(response)\r\n\r\n    return safe_output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TestResult { name: string; passed: boolean; score: number; details: string }\r\nclass AIEvaluator {\r\n  constructor(private llm: (prompt:string)=>Promise&lt;string&gt;) {}\r\n  async evaluate(output: string, criteria: string[]): Promise&lt;TestResult[]&gt; {\r\n    const results: TestResult[] = []\r\n    for(const c of criteria) {\r\n      const prompt = `Rate the following output on \"${c}\" from 0-1:\\n${output}\\nScore:`\r\n      const response = await this.llm(prompt); const score = parseFloat(response)||0\r\n      results.push({name:c,passed:score>=0.7,score,details:`Score:${score}`})\r\n    }\r\n    return results\r\n  }\r\n}\r\nclass TestSuite {\r\n  private tests: Array&lt;{name:string;fn:()=&gt;Promise&lt;{passed:boolean;details:string}&gt;>} = []\r\n  add(name: string, fn: ()=>Promise&lt;{passed:boolean;details:string}&gt;): void { this.tests.push({name,fn}) }\r\n  async run(): Promise&lt;{total:number;passed:number;failed:number;results:string[]}&gt; {\r\n    let passed=0; const results:string[] = []\r\n    for(const t of this.tests) try { const r = await t.fn()\r\n      if(r.passed){passed++;results.push(`PASS ${t.name}`)} else results.push(`FAIL ${t.name}: ${r.details}`)\r\n    } catch(e) { results.push(`FAIL ${t.name}: ${(e as Error).message}`) }\r\n    return {total:this.tests.length,passed,failed:this.tests.length-passed,results}\r\n  }\r\n}\r\nexport { AIEvaluator, TestSuite }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prompt pattern comparison:"
          }), " Pick a problem (e.g., \"Explain the difference between supervised and unsupervised learning\"). Write prompts using zero-shot, few-shot CoT, and self-consistency CoT. Compare output quality."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Structured output schema:"
          }), " Design a Pydantic model for extracting job posting data (title, company, salary range, required skills, remote policy). Test it on 5 real job postings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prompt registry:"
          }), " Build a PromptTemplate registry for your RAG agent. Version a prompt and run a regression suite comparing v1 and v2."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Injection defense:"
          }), " Write 10 prompt injection attempts targeting your system prompt. Test your defense pipeline against them and report the detection rate."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "A/B test:"
          }), " Design a prompt A/B test comparing two versions of your RAG system prompt. Define the metric, run for 50 samples per variant, and analyze the results."]
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