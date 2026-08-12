"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[75046],{

/***/ 87372
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_11_llms_prompt_engineering_02_llm_apis_md_79d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-11-llms-prompt-engineering-02-llm-apis-md-79d.json
const site_docs_courses_ai_engineering_placement_11_llms_prompt_engineering_02_llm_apis_md_79d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/llms-prompt-engineering/02-llm-apis","title":"LLM APIs","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/11-llms-prompt-engineering/02-llm-apis.md","sourceDirName":"courses/ai-engineering-placement/11-llms-prompt-engineering","slug":"/ai-engineering-placement/11-llms-prompt-engineering/02-llm-apis","permalink":"/ai-engineering-journey/ai-engineering-placement/11-llms-prompt-engineering/02-llm-apis","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":138,"frontMatter":{"id":"02-llm-apis","slug":"/ai-engineering-placement/11-llms-prompt-engineering/02-llm-apis","title":"LLM APIs","sidebar_label":"LLM APIs","sidebar_position":138},"sidebar":"coursesSidebar","previous":{"title":"Foundation Models Overview","permalink":"/ai-engineering-journey/ai-engineering-placement/11-llms-prompt-engineering/01-foundation-models-overview"},"next":{"title":"Zero-Shot & Few-Shot Prompting","permalink":"/ai-engineering-journey/ai-engineering-placement/11-llms-prompt-engineering/03-zero-shot-and-few-shot"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/11-llms-prompt-engineering/02-llm-apis.md


const frontMatter = {
	id: '02-llm-apis',
	slug: '/ai-engineering-placement/11-llms-prompt-engineering/02-llm-apis',
	title: 'LLM APIs',
	sidebar_label: 'LLM APIs',
	sidebar_position: 138
};
const contentTitle = 'LLM APIs';

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
  "value": "2.1 API Basics",
  "id": "21-api-basics",
  "level": 2
}, {
  "value": "2.2 OpenAI API",
  "id": "22-openai-api",
  "level": 2
}, {
  "value": "2.3 Anthropic API",
  "id": "23-anthropic-api",
  "level": 2
}, {
  "value": "2.4 Google Gemini API",
  "id": "24-google-gemini-api",
  "level": 2
}, {
  "value": "2.5 Streaming",
  "id": "25-streaming",
  "level": 2
}, {
  "value": "2.6 Error Handling &amp; Retries",
  "id": "26-error-handling--retries",
  "level": 2
}, {
  "value": "2.7 Unified API Wrapper",
  "id": "27-unified-api-wrapper",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
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
        id: "llm-apis",
        children: "LLM APIs"
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
            children: "Integrate with OpenAI, Anthropic, and Google Gemini APIs using Python"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement streaming responses for real-time user experiences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle rate limits, retries, and API errors gracefully"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage API keys securely using environment variables and secret managers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build cost-tracked API wrappers with logging and monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare API design patterns across providers and abstract them into a unified interface"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Large language models are transforming every industry. Understanding how to prompt, evaluate, and optimize LLMs is a critical skill for AI engineers. This module covers the full LLM lifecycle from API calls to cost optimization."
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
      children: "Understanding llm apis is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how llm apis works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API Basics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication, endpoints, request/response structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenAI API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chat completions, messages, parameters, token usage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anthropic API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Messages format, system prompts, thinking mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Gemini API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content generation, safety settings, model tuning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-Sent Events, real-time token delivery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error Handling & Retries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limits, backoff, circuit breakers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified API Wrapper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract interface across providers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[API Key Management] --> B[Provider Selection]\n    B --> C[OpenAI API]\n    B --> D[Anthropic API]\n    B --> E[Gemini API]\n    C --> F[Request Construction]\n    D --> F\n    E --> F\n    F --> G[Streaming / Non-Streaming]\n    G --> H[Response Parsing]\n    H --> I[Error Handling]\n    I --> J[Retry Logic]\n    J --> K[Cost Tracking & Logging]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-api-basics",
      children: "2.1 API Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLM APIs follow a consistent pattern: authenticate with an API key, send a request with messages and parameters, receive a response with generated text and usage metadata."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Authentication"
      }), ": API keys are passed via HTTP headers:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import os\nfrom openai import OpenAI\n\n## Never hardcode keys — use environment variables\napi_key = os.environ.get(\"OPENAI_API_KEY\")\nif not api_key:\n    raise ValueError(\"OPENAI_API_KEY not set\")\n\nclient = OpenAI(api_key=api_key)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Request structure"
      }), " includes model selection, messages, and parameters:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "response = client.chat.completions.create(\n    model=\"gpt-4o\",           # Model identifier\n    messages=[                 # Conversation history\n        {\"role\": \"system\", \"content\": \"You are a helpful assistant.\"},\n        {\"role\": \"user\", \"content\": \"What is the capital of France?\"}\n    ],\n    temperature=0.7,           # Randomness (0-2)\n    max_tokens=500,            # Maximum output length\n    top_p=0.9,                 # Nucleus sampling\n    frequency_penalty=0,       # Reduce repetition\n    presence_penalty=0         # Encourage new topics\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Response structure"
      }), " includes the generated message and usage:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "message = response.choices[0].message\nprint(f\"Response: {message.content}\")\nprint(f\"Role: {message.role}\")\n\n## Token usage tracking\nusage = response.usage\nprint(f\"Prompt tokens: {usage.prompt_tokens}\")\nprint(f\"Completion tokens: {usage.completion_tokens}\")\nprint(f\"Total tokens: {usage.total_tokens}\")\n\n## Common pricing (per 1K tokens)\nOPENAI_PRICING = {\n    \"gpt-4o\":       {\"input\": 0.0025, \"output\": 0.01},\n    \"gpt-4o-mini\":  {\"input\": 0.00015, \"output\": 0.0006},\n    \"gpt-4-turbo\":  {\"input\": 0.01, \"output\": 0.03},\n}\n\ndef calculate_cost(model, prompt_tokens, completion_tokens):\n    pricing = OPENAI_PRICING.get(model)\n    if not pricing:\n        return 0\n    cost = (prompt_tokens / 1000) * pricing[\"input\"]\n    cost += (completion_tokens / 1000) * pricing[\"output\"]\n    return cost\n\ncost = calculate_cost(\"gpt-4o\", response.usage.prompt_tokens, response.usage.completion_tokens)\nprint(f\"Request cost: ${cost:.6f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Secure key management"
      }), " using environment files:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## .env file (never commit to git)\n\n## OPENAI_API_KEY=sk-...\n\n## ANTHROPIC_API_KEY=sk-ant-...\n\n## GEMINI_API_KEY=AIza...\n\n## .gitignore\n\n## .env\n\n## Load securely\nfrom dotenv import load_dotenv\nload_dotenv()\n\n## Or use Python's built-in approach\nimport os\nassert os.environ.get(\"OPENAI_API_KEY\"), \"Missing API key\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Application] -->|API Key + Request| B[LLM API Gateway]\n    B --> C{Authentication}\n    C -->|Invalid Key| D[401 Unauthorized]\n    C -->|Valid Key| E[Rate Limit Check]\n    E -->|Exceeded| F[429 Too Many Requests]\n    E -->|OK| G[Model Inference]\n    G --> H[Response + Usage Stats]\n    H --> A\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-openai-api",
      children: "2.2 OpenAI API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The OpenAI Python SDK provides the most widely-used interface for LLM APIs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chat completions"
      }), " with message history:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from openai import OpenAI\n\nclient = OpenAI()\n\ndef chat_with_history(messages, model=\"gpt-4o\"):\n    \"\"\"Send a conversation with history to OpenAI.\"\"\"\n    response = client.chat.completions.create(\n        model=model,\n        messages=messages,\n        temperature=0.7,\n        max_tokens=1024\n    )\n    return response\n\n## Multi-turn conversation\nconversation = [\n    {\"role\": \"system\", \"content\": \"You are a Python tutor. Be concise and provide code examples.\"},\n    {\"role\": \"user\", \"content\": \"What is a decorator?\"},\n]\n\nresp1 = chat_with_history(conversation)\nconversation.append({\"role\": \"assistant\", \"content\": resp1.choices[0].message.content})\nconversation.append({\"role\": \"user\", \"content\": \"Show me a practical example with @timer\"})\n\nresp2 = chat_with_history(conversation)\nprint(resp2.choices[0].message.content)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JSON mode"
      }), " for structured output:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "response = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[\n        {\"role\": \"system\", \"content\": \"Extract the information as JSON with fields: name, age, city, occupation.\"},\n        {\"role\": \"user\", \"content\": \"John is a 32-year-old software engineer from San Francisco.\"}\n    ],\n    response_format={\"type\": \"json_object\"},\n    temperature=0\n)\n\nimport json\ndata = json.loads(response.choices[0].message.content)\nprint(data)\n\n## {'name': 'John', 'age': 32, 'city': 'San Francisco', 'occupation': 'software engineer'}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Function calling"
      }), " for tool integration:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def get_weather(city: str) -> str:\n    \"\"\"Mock weather function.\"\"\"\n    weather_data = {\n        \"Tokyo\": \"22°C, partly cloudy\",\n        \"London\": \"15°C, light rain\",\n        \"New York\": \"28°C, sunny\"\n    }\n    return weather_data.get(city, \"Weather data not available\")\n\ntools = [\n    {\n        \"type\": \"function\",\n        \"function\": {\n            \"name\": \"get_weather\",\n            \"description\": \"Get current weather for a city\",\n            \"parameters\": {\n                \"type\": \"object\",\n                \"properties\": {\n                    \"city\": {\"type\": \"string\", \"description\": \"City name\"}\n                },\n                \"required\": [\"city\"]\n            }\n        }\n    }\n]\n\nresponse = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[{\"role\": \"user\", \"content\": \"What's the weather in Tokyo?\"}],\n    tools=tools,\n    tool_choice=\"auto\"\n)\n\n## Execute function call\ntool_call = response.choices[0].message.tool_calls[0]\nif tool_call.function.name == \"get_weather\":\n    args = json.loads(tool_call.function.arguments)\n    result = get_weather(**args)\n    print(f\"Weather in {args['city']}: {result}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Token counting"
      }), " before sending:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import tiktoken\n\ndef count_tokens(text: str, model: str = \"gpt-4o\") -> int:\n    \"\"\"Count tokens in a text string for a given model.\"\"\"\n    encoding = tiktoken.encoding_for_model(model)\n    tokens = encoding.encode(text)\n    return len(tokens)\n\ndef estimate_cost(messages, model=\"gpt-4o\"):\n    \"\"\"Estimate cost before sending a request.\"\"\"\n    total_input = 0\n    for msg in messages:\n        total_input += count_tokens(msg[\"content\"], model)\n\n    pricing = OPENAI_PRICING[model]\n    input_cost = (total_input / 1000) * pricing[\"input\"]\n    # Estimate output (typically ~2x input for chat)\n    estimated_output = total_input * 2\n    output_cost = (estimated_output / 1000) * pricing[\"output\"]\n\n    return {\n        \"input_tokens\": total_input,\n        \"estimated_output\": estimated_output,\n        \"estimated_cost\": input_cost + output_cost\n    }\n\nmessages = [\n    {\"role\": \"system\", \"content\": \"You are a helpful assistant.\"},\n    {\"role\": \"user\", \"content\": \"Write a detailed explanation of quantum computing.\"}\n]\nestimate = estimate_cost(messages)\nprint(f\"Estimated cost: ${estimate['estimated_cost']:.6f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[User Input] --> B[Tokenize with tiktoken]\n    B --> C[Build Messages Array]\n    C --> D[Select Model & Parameters]\n    D --> E[POST /v1/chat/completions]\n    E --> F{API Response}\n    F -->|200 OK| G[Parse Response]\n    F -->|Error| H[Handle Error]\n    G --> I[Extract Message]\n    G --> J[Extract Usage]\n    J --> K[Track Cost]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-anthropic-api",
      children: "2.3 Anthropic API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Anthropic's API uses a different message format with dedicated system prompt support."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic usage"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from anthropic import Anthropic\n\nclient = Anthropic()\n\nresponse = client.messages.create(\n    model=\"claude-3-sonnet-20241022\",\n    max_tokens=1024,\n    system=\"You are an expert AI engineer. Provide detailed technical answers.\",\n    messages=[\n        {\"role\": \"user\", \"content\": \"Explain the difference between TCP and UDP.\"}\n    ]\n)\n\nprint(response.content[0].text)\nprint(f\"Input tokens: {response.usage.input_tokens}\")\nprint(f\"Output tokens: {response.usage.output_tokens}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-turn conversations"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def claude_conversation(messages, system_prompt=\"You are helpful.\"):\n    \"\"\"Wrapper for Claude API calls.\"\"\"\n    response = client.messages.create(\n        model=\"claude-3-sonnet-20241022\",\n        max_tokens=1024,\n        system=system_prompt,\n        messages=messages\n    )\n    return response\n\n## Building a conversation\nhistory = [\n    {\"role\": \"user\", \"content\": \"What is the capital of Japan?\"},\n    {\"role\": \"assistant\", \"content\": \"The capital of Japan is Tokyo.\"},\n    {\"role\": \"user\", \"content\": \"What is its population?\"},\n]\n\nresp = claude_conversation(history)\nprint(resp.content[0].text)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Claude's extended thinking"
      }), " for complex reasoning:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from anthropic.types import ThinkingConfigEnabled\n\nresponse = client.messages.create(\n    model=\"claude-3-sonnet-20241022\",\n    max_tokens=4096,\n    thinking=ThinkingConfigEnabled(\n        type=\"enabled\",\n        budget_tokens=2048\n    ),\n    messages=[\n        {\"role\": \"user\", \"content\": \"Solve this step by step: A farmer has 17 cows. All but 9 die. How many cows does the farmer have left?\"}\n    ]\n)\n\n## Extended thinking block\nfor block in response.content:\n    if block.type == \"thinking\":\n        print(\"Thinking:\", block.thinking)\n    elif block.type == \"text\":\n        print(\"Answer:\", block.text)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Image understanding"
      }), " with Claude:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import base64\n\nwith open(\"diagram.png\", \"rb\") as f:\n    image_data = base64.b64encode(f.read()).decode()\n\nresponse = client.messages.create(\n    model=\"claude-3-sonnet-20241022\",\n    max_tokens=500,\n    messages=[\n        {\n            \"role\": \"user\",\n            \"content\": [\n                {\"type\": \"text\", \"text\": \"Explain this system architecture diagram.\"},\n                {\n                    \"type\": \"image\",\n                    \"source\": {\n                        \"type\": \"base64\",\n                        \"media_type\": \"image/png\",\n                        \"data\": image_data\n                    }\n                }\n            ]\n        }\n    ]\n)\n\nprint(response.content[0].text)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Anthropic SDK] --> B{Message Type}\n    B -->|Text| C[Text Content Block]\n    B -->|Image| D[Image Content Block]\n    B -->|Thinking| E[Thinking Config]\n    C --> F[Messages API]\n    D --> F\n    E --> F\n    F --> G[Response]\n    G --> H[Content Blocks List]\n    H --> I[Extract Text / Thinking]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-google-gemini-api",
      children: "2.4 Google Gemini API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gemini uses a different paradigm with content-based generation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic usage"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import google.generativeai as genai\n\ngenai.configure(api_key=os.environ[\"GEMINI_API_KEY\"])\n\nmodel = genai.GenerativeModel(\"gemini-1.5-pro\")\nresponse = model.generate_content(\n    \"Explain the concept of attention in transformers.\",\n    generation_config={\n        \"temperature\": 0.7,\n        \"max_output_tokens\": 500,\n        \"top_p\": 0.95,\n        \"top_k\": 40\n    }\n)\n\nprint(response.text)\n\n## Safety ratings\nfor rating in response.prompt_feedback.safety_ratings:\n    print(f\"{rating.category}: {rating.probability}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chat sessions"
      }), " for multi-turn:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "chat = model.start_chat(history=[])\n\nresponse = chat.send_message(\"What is Python?\")\nprint(response.text)\n\nresponse = chat.send_message(\"What are its main use cases?\")\nprint(response.text)\n\n## Access full history\nfor entry in chat.history:\n    print(f\"{entry.role}: {entry.parts[0].text[:50]}...\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multimodal input"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import PIL.Image\n\nimage = PIL.Image.open(\"architecture.png\")\nprompt = \"Describe this architecture diagram in detail.\"\n\nresponse = model.generate_content([prompt, image])\nprint(response.text)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Safety settings"
      }), " customization:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from google.generativeai.types import HarmCategory, HarmBlockThreshold\n\nmodel = genai.GenerativeModel(\n    \"gemini-1.5-pro\",\n    safety_settings={\n        HarmCategory.HARM_CATEGORY_HATE_SPEECH: HarmBlockThreshold.BLOCK_ONLY_HIGH,\n        HarmCategory.HARM_CATEGORY_HARASSMENT: HarmBlockThreshold.BLOCK_ONLY_HIGH,\n        HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT: HarmBlockThreshold.BLOCK_ONLY_HIGH,\n    }\n)\n\nresponse = model.generate_content(\"Tell me about historical warfare tactics.\")\nprint(response.text)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Gemini SDK] --> B[GenerativeModel]\n    B --> C{Generation Mode}\n    C -->|Single| D[generate_content]\n    C -->|Multi-turn| E[start_chat]\n    C -->|Stream| F[generate_content_async]\n    D --> G[GenerateContentResponse]\n    E --> H[ChatSession]\n    H --> I[send_message]\n    G --> J[Extract Text]\n    G --> K[Safety Feedback]\n    G --> L[Usage Metadata]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-streaming",
      children: "2.5 Streaming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Streaming delivers tokens one at a time via Server-Sent Events (SSE), enabling real-time display."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OpenAI streaming"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from openai import OpenAI\n\nclient = OpenAI()\n\nstream = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[{\"role\": \"user\", \"content\": \"Write a poem about AI.\"}],\n    stream=True\n)\n\nfor chunk in stream:\n    if chunk.choices[0].delta.content is not None:\n        print(chunk.choices[0].delta.content, end=\"\", flush=True)\n    # Last chunk has usage info\n    if chunk.choices[0].finish_reason == \"stop\":\n        print(f\"\\n\\nReason: {chunk.choices[0].finish_reason}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anthropic streaming"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from anthropic import Anthropic\n\nclient = Anthropic()\n\nwith client.messages.stream(\n    model=\"claude-3-sonnet-20241022\",\n    max_tokens=1024,\n    messages=[{\"role\": \"user\", \"content\": \"Explain quantum computing in simple terms.\"}]\n) as stream:\n    for text in stream.text_stream:\n        print(text, end=\"\", flush=True)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gemini streaming"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "model = genai.GenerativeModel(\"gemini-1.5-pro\")\nresponse = model.generate_content(\n    \"Tell me a story about a robot learning to paint.\",\n    stream=True\n)\n\nfor chunk in response:\n    print(chunk.text, end=\"\", flush=True)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Building a streaming proxy"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI\nfrom fastapi.responses import StreamingResponse\nfrom openai import OpenAI\nimport asyncio\n\napp = FastAPI()\nclient = OpenAI()\n\nasync def stream_llm_response(messages):\n    \"\"\"Async generator for streaming LLM response.\"\"\"\n    stream = client.chat.completions.create(\n        model=\"gpt-4o\",\n        messages=messages,\n        stream=True\n    )\n\n    for chunk in stream:\n        if chunk.choices[0].delta.content:\n            yield f\"data: {chunk.choices[0].delta.content}\\n\\n\"\n        await asyncio.sleep(0)\n\n@app.post(\"/chat/stream\")\nasync def chat_stream(messages: list):\n    return StreamingResponse(\n        stream_llm_response(messages),\n        media_type=\"text/event-stream\"\n    )\n\n## Client-side\n\n## fetch('/chat/stream', { method: 'POST', body: JSON.stringify(messages) })\n\n##   .then(response => {\n\n##     const reader = response.body.getReader();\n\n##     // Read chunks incrementally\n\n##   })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Client] -->|POST /chat/stream| B[FastAPI Proxy]\n    B --> C[OpenAI Streaming API]\n    C -->|Token 1| B\n    C -->|Token 2| B\n    C -->|Token N| B\n    B -->|SSE: data: token\\n\\n| A\n    A -->[Update UI Incrementally]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-error-handling--retries",
      children: "2.6 Error Handling & Retries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robust production code must handle API errors gracefully."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common error types"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from openai import (\n    APIConnectionError,\n    RateLimitError,\n    APITimeoutError,\n    BadRequestError,\n    AuthenticationError\n)\nimport time\n\ndef safe_api_call(client, messages, model=\"gpt-4o\", max_retries=3):\n    \"\"\"Robust API call with exponential backoff.\"\"\"\n    last_error = None\n\n    for attempt in range(max_retries):\n        try:\n            response = client.chat.completions.create(\n                model=model,\n                messages=messages,\n                timeout=30\n            )\n            return response\n\n        except RateLimitError as e:\n            wait = min(2 ** attempt * 5, 60)\n            print(f\"Rate limited. Waiting {wait}s (attempt {attempt + 1})\")\n            time.sleep(wait)\n            last_error = e\n\n        except APITimeoutError as e:\n            wait = 2 ** attempt\n            print(f\"Timeout. Retrying in {wait}s (attempt {attempt + 1})\")\n            time.sleep(wait)\n            last_error = e\n\n        except APIConnectionError as e:\n            wait = 5 * (attempt + 1)\n            print(f\"Connection error. Retrying in {wait}s\")\n            time.sleep(wait)\n            last_error = e\n\n        except BadRequestError as e:\n            print(f\"Bad request (likely too many tokens): {e}\")\n            raise  # Don't retry client errors\n\n        except AuthenticationError as e:\n            print(f\"Authentication failed: {e}\")\n            raise  # Don't retry auth errors\n\n    raise Exception(f\"All {max_retries} attempts failed. Last error: {last_error}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Circuit breaker pattern"
      }), " for preventing cascading failures:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import datetime\n\nclass CircuitBreaker:\n    \"\"\"Circuit breaker for API calls.\"\"\"\n\n    def __init__(self, failure_threshold=5, recovery_timeout=60):\n        self.failure_threshold = failure_threshold\n        self.recovery_timeout = recovery_timeout\n        self.failure_count = 0\n        self.last_failure_time = None\n        self.state = \"CLOSED\"  # CLOSED, OPEN, HALF_OPEN\n\n    def call(self, func, *args, **kwargs):\n        if self.state == \"OPEN\":\n            if (datetime.datetime.now() - self.last_failure_time).seconds > self.recovery_timeout:\n                self.state = \"HALF_OPEN\"\n                print(\"Circuit half-open — trying request\")\n            else:\n                raise Exception(\"Circuit breaker OPEN — request blocked\")\n\n        try:\n            result = func(*args, **kwargs)\n            if self.state == \"HALF_OPEN\":\n                self.state = \"CLOSED\"\n                self.failure_count = 0\n                print(\"Circuit closed — recovery successful\")\n            return result\n\n        except Exception as e:\n            self.failure_count += 1\n            self.last_failure_time = datetime.datetime.now()\n            if self.failure_count >= self.failure_threshold:\n                self.state = \"OPEN\"\n                print(f\"Circuit OPEN — {self.failure_count} failures\")\n            raise e\n\nbreaker = CircuitBreaker(failure_threshold=3, recovery_timeout=30)\n\ndef make_request():\n    return safe_api_call(client, [{\"role\": \"user\", \"content\": \"Hello\"}])\n\n## for i in range(10):\n\n##     try:\n\n##         result = breaker.call(make_request)\n\n##     except Exception as e:\n\n##         print(f\"Request {i} failed: {e}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rate limit handling with token bucket"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nfrom collections import deque\n\nclass TokenBucket:\n    \"\"\"Token bucket rate limiter.\"\"\"\n\n    def __init__(self, tokens_per_minute=5000, max_burst=500):\n        self.rate = tokens_per_minute / 60.0  # tokens per second\n        self.max_burst = max_burst\n        self.tokens = max_burst\n        self.last_refill = time.time()\n\n    def consume(self, tokens=1):\n        \"\"\"Wait until tokens are available, then consume them.\"\"\"\n        while True:\n            self._refill()\n            if self.tokens >= tokens:\n                self.tokens -= tokens\n                return\n            sleep_time = (tokens - self.tokens) / self.rate\n            time.sleep(min(sleep_time, 0.1))\n\n    def _refill(self):\n        now = time.time()\n        elapsed = now - self.last_refill\n        self.tokens = min(self.max_burst, self.tokens + elapsed * self.rate)\n        self.last_refill = now\n\n## Usage\nrate_limiter = TokenBucket(tokens_per_minute=5000, max_burst=500)\n\ndef rate_limited_api_call(client, messages):\n    rate_limiter.consume(1)  # Consume 1 token per request\n    return safe_api_call(client, messages)\n\n## for i in range(100):\n\n##     response = rate_limited_api_call(client, messages)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[API Request] --> B{Circuit Breaker State}\n    B -->|OPEN| C[Block Request]\n    B -->|CLOSED| D{Token Bucket}\n    B -->|HALF_OPEN| D\n    D -->|Has Tokens| E[Send Request]\n    D -->|No Tokens| F[Wait for Refill]\n    E --> G{Response}\n    G -->|200 OK| H[Return Response]\n    G -->|429| I[Backoff & Retry]\n    G -->|5xx| J[Check Retry Count]\n    J -->|Retries Left| I\n    J -->|Exhausted| K[Raise Error]\n    I --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-unified-api-wrapper",
      children: "2.7 Unified API Wrapper"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Abstracting across providers enables switching without code changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from abc import ABC, abstractmethod\nfrom dataclasses import dataclass\nfrom typing import Optional\n\n@dataclass\nclass LLMResponse:\n    content: str\n    input_tokens: int\n    output_tokens: int\n    model: str\n    provider: str\n    latency_ms: float\n\nclass LLMProvider(ABC):\n    @abstractmethod\n    def generate(\n        self,\n        messages: list,\n        temperature: float = 0.7,\n        max_tokens: int = 1024,\n        stream: bool = False\n    ) -> LLMResponse:\n        pass\n\n    @abstractmethod\n    def count_tokens(self, text: str) -> int:\n        pass\n\nclass OpenAIProvider(LLMProvider):\n    def __init__(self, model=\"gpt-4o\"):\n        self.client = OpenAI()\n        self.model = model\n        import tiktoken\n        self.encoding = tiktoken.encoding_for_model(model)\n\n    def generate(self, messages, temperature=0.7, max_tokens=1024, stream=False):\n        import time\n        start = time.time()\n        response = self.client.chat.completions.create(\n            model=self.model,\n            messages=messages,\n            temperature=temperature,\n            max_tokens=max_tokens,\n            stream=stream\n        )\n        latency = (time.time() - start) * 1000\n\n        if stream:\n            content = \"\"\n            for chunk in response:\n                if chunk.choices[0].delta.content:\n                    content += chunk.choices[0].delta.content\n            return LLMResponse(\n                content=content,\n                input_tokens=0,  # Streaming doesn't return usage\n                output_tokens=0,\n                model=self.model,\n                provider=\"openai\",\n                latency_ms=latency\n            )\n\n        return LLMResponse(\n            content=response.choices[0].message.content,\n            input_tokens=response.usage.prompt_tokens,\n            output_tokens=response.usage.completion_tokens,\n            model=self.model,\n            provider=\"openai\",\n            latency_ms=latency\n        )\n\n    def count_tokens(self, text):\n        return len(self.encoding.encode(text))\n\nclass AnthropicProvider(LLMProvider):\n    def __init__(self, model=\"claude-3-sonnet-20241022\"):\n        self.client = Anthropic()\n        self.model = model\n\n    def generate(self, messages, temperature=0.7, max_tokens=1024, stream=False):\n        import time\n        start = time.time()\n\n        # Separate system prompt if present\n        system = \"\"\n        filtered_messages = []\n        for msg in messages:\n            if msg[\"role\"] == \"system\":\n                system += msg[\"content\"] + \"\\n\"\n            else:\n                filtered_messages.append(msg)\n\n        response = self.client.messages.create(\n            model=self.model,\n            max_tokens=max_tokens,\n            system=system.strip(),\n            messages=filtered_messages\n        )\n        latency = (time.time() - start) * 1000\n\n        return LLMResponse(\n            content=response.content[0].text,\n            input_tokens=response.usage.input_tokens,\n            output_tokens=response.usage.output_tokens,\n            model=self.model,\n            provider=\"anthropic\",\n            latency_ms=latency\n        )\n\n    def count_tokens(self, text):\n        # Anthropic doesn't provide a public tokenizer\n        # Estimate: ~4 chars per token\n        return len(text) // 4\n\nclass LLMRouter:\n    \"\"\"Route requests to optimal provider based on task.\"\"\"\n\n    def __init__(self):\n        self.providers = {\n            \"openai\": OpenAIProvider(\"gpt-4o\"),\n            \"openai-cheap\": OpenAIProvider(\"gpt-4o-mini\"),\n            \"anthropic\": AnthropicProvider(\"claude-3-sonnet-20241022\"),\n        }\n\n    def route(self, messages, preferred_provider=\"openai\", temperature=0.7):\n        provider = self.providers.get(preferred_provider, self.providers[\"openai\"])\n        return provider.generate(messages, temperature=temperature)\n\n    def generate_all(self, messages):\n        \"\"\"Get responses from all providers for comparison.\"\"\"\n        results = {}\n        for name, provider in self.providers.items():\n            try:\n                results[name] = provider.generate(messages)\n            except Exception as e:\n                results[name] = f\"Error: {e}\"\n        return results\n\nrouter = LLMRouter()\nmessages = [{\"role\": \"user\", \"content\": \"What is the fastest bird?\"}]\nresponse = router.route(messages, \"openai\")\nprint(f\"[{response.provider}] {response.content[:100]}...\")\nprint(f\"Cost: ${calculate_cost('gpt-4o', response.input_tokens, response.output_tokens):.6f}\")\nprint(f\"Latency: {response.latency_ms:.0f}ms\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Application Code] --> B[LLMRouter]\n    B --> C{Provider Selection}\n    C -->|Cost-optimized| D[OpenAIProvider]\n    C -->|Reasoning| E[AnthropicProvider]\n    C -->|Multimodal| F[GeminiProvider]\n    D --> G[Unified LLMResponse]\n    E --> G\n    F --> G\n    G --> H[Content + Usage + Latency]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript LLM API wrappers leverage type safety and async/await:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface LLMConfig {\n  provider: \"openai\" | \"anthropic\" | \"gemini\";\n  apiKey: string;\n  model: string;\n}\n\ninterface LLMMessage {\n  role: \"system\" | \"user\" | \"assistant\";\n  content: string;\n}\n\nasync function callLLM(\n  config: LLMConfig,\n  messages: LLMMessage[],\n  options?: { temperature?: number; maxTokens?: number }\n): Promise<string> {\n  const headers = { Authorization: `Bearer ${config.apiKey}`, \"Content-Type\": \"application/json\" };\n  const body = {\n    model: config.model,\n    messages,\n    temperature: options?.temperature ?? 0.7,\n    max_tokens: options?.maxTokens ?? 1024,\n  };\n  const res = await fetch(`https://api.openai.com/v1/chat/completions`, {\n    method: \"POST\", headers, body: JSON.stringify(body),\n  });\n  const data = await res.json();\n  return data.choices[0].message.content;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenAI API uses a messages array with system/user/assistant roles and returns usage statistics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anthropic API separates system prompts and supports extended thinking for complex reasoning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gemini API uses a content-based generation model with built-in safety settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Streaming delivers tokens incrementally via SSE for real-time user experiences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate limits require exponential backoff with jitter for robust retry logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Circuit breaker patterns prevent cascading failures from API outages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Token bucket algorithms smooth out request rates to stay within API limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unified abstract providers allow switching LLM backends without application changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cost tracking per request enables budget management and model selection optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secure key management via environment variables or secret managers is essential"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Production API calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement retry with exponential backoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrying immediately on rate limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use streaming with Server-Sent Events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Waiting for full response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build abstract LLMProvider interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoding provider SDK calls everywhere"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track tokens per request and log costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using expensive models for simple tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement token bucket rate limiter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sending requests as fast as possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate retryable from non-retryable errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrying 400 BadRequest errors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "llm-s02-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How do you handle rate limiting when calling LLM APIs in production?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Rate limiting is handled through multiple strategies:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Token bucket algorithm"
            }), ": Maintains a bucket of tokens that refills at a fixed rate. Each request consumes tokens. If tokens are depleted, requests wait."]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Exponential backoff with jitter"
            }), ": On 429 responses, wait 2^attempt * base_delay seconds + random jitter"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Queue-based processing"
            }), ": Use a message queue (Redis, SQS) to buffer and throttle requests"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Circuit breaker"
            }), ": After N consecutive failures, stop sending requests for a recovery period"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most providers also return Retry-After headers. Always respect these headers over client-side calculations."
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
      "data-qid": "llm-s02-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: What is the difference between streaming and non-streaming API calls?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Non-streaming"
          }), ": The API returns the complete response after generation finishes. The client waits for the entire response before displaying anything. Time to first token is higher, but the response includes full usage metadata."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Streaming"
          }), ": The API returns tokens as they're generated via Server-Sent Events. The client can display tokens incrementally, providing a better user experience. However, usage metadata typically comes only in the final chunk."]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use streaming for chat interfaces and real-time applications. Use non-streaming when you need accurate token counts immediately or when processing responses programmatically."
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
      "data-qid": "llm-s02-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you securely manage LLM API keys in production?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "API key security follows these best practices:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Never hardcode"
            }), " keys in source code or commit them to version control"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Environment variables"
            }), " for local development (.env files that are .gitignored)"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Secret manager services"
            }), " in production (AWS Secrets Manager, GCP Secret Manager, HashiCorp Vault)"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Key rotation"
            }), " — rotate keys regularly and use separate keys for development and production"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Usage quotas"
            }), " — set spending limits in provider dashboards to prevent runaway costs"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Restrict by IP/domain"
            }), " when possible in provider settings"]
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
      "data-qid": "llm-s02-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: Explain the difference between OpenAI's function calling and Anthropic's tool use.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Both achieve similar goals but with different API design:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "OpenAI function calling"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Define tools with JSON Schema in the request"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Model responds with tool_calls containing function name and arguments"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "You execute the function and return the result in a \"tool\" role message"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "tool_choice = \"auto\" lets the model decide; \"required\" forces a call"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Anthropic tool use"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Similar concept but uses \"tool_use\" content blocks in the response"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tools can be defined inline in the request"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "User provides tool_result content blocks for the next turn"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "No separate \"required\" mode — uses auto by default"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The core pattern (model decides to call tool → you execute → feed back) is identical."
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
      "data-qid": "llm-s02-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is the purpose of the system message in LLM APIs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The system message sets the behavior and persona of the assistant. It's typically placed at the start of the conversation and persists throughout all turns:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Defines the assistant's role, tone, and constraints"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sets formatting preferences (e.g., \"Respond in JSON\")"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Establishes safety guardrails and content policies"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provides context about the task or domain"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "In OpenAI API, system messages are part of the messages array. In Anthropic API, system prompts are a separate parameter. System messages are more influential than user messages and should be used to shape model behavior consistently."
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
      "data-qid": "llm-s02-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you track and optimize LLM API costs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cost tracking involves multiple layers:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Per-request tracking"
            }), ": Log prompt_tokens, completion_tokens, model, and calculate cost from provider pricing"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregated dashboards"
            }), ": Use tools like LangSmith, Weights & Biases, or custom Grafana dashboards"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Model routing"
            }), ": Route simple tasks to cheaper models (e.g., GPT-4o-mini for translation)"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Prompt optimization"
            }), ": Shorter prompts = fewer tokens = lower cost"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Caching"
            }), ": Cache identical requests (Redis, in-memory) to avoid redundant API calls"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Budget alerts"
            }), ": Set provider-level spending limits and monitor with alerts"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Typical cost ratio: GPT-4o is ~40x more expensive than GPT-4o-mini for output tokens."
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
      "data-qid": "llm-s02-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is the JSON mode in OpenAI API and when would you use it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["JSON mode ensures the model always returns valid JSON. Enabled by setting ", (0,jsx_runtime.jsx)(_components.code, {
            children: "response_format={\"type\": \"json_object\"}"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "response = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[\n        {\"role\": \"system\", \"content\": \"Extract data as JSON with fields: name, age.\"},\n        {\"role\": \"user\", \"content\": \"Alice is 30 years old.\"}\n    ],\n    response_format={\"type\": \"json_object\"}\n)"
          })
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "When to use"
          }), ": Extracting structured data, API response formatting, database inserts, function call arguments parsing. The system message must explicitly request JSON output — the model will error if not instructed to return JSON."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Limitation"
          }), ": The model may still return strings that don't match your expected schema even if they're valid JSON. Always validate with Pydantic or Zod after receiving."]
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
      "data-qid": "llm-s02-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How does Anthropic's extended thinking mode work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Extended thinking (or \"thinking mode\") allows Claude to reason step-by-step before generating a final answer. When enabled:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Claude outputs a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "thinking"
            }), " content block with its internal reasoning"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["This is followed by a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "text"
            }), " content block with the final answer"]
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "You can set a budget for thinking tokens (e.g., budget_tokens=2048)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Extended thinking improves performance on math, logic, and multi-step reasoning"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The thinking content is not visible to the end user by default (it's used internally or for debugging). This is similar to OpenAI's chain-of-thought but integrated at the API level rather than through prompting."
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
      "data-qid": "llm-s02-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is tiktoken and why is it important for LLM API usage?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "tiktoken is OpenAI's fast tokenizer library. It's important because:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost estimation"
            }), ": Count tokens before sending to estimate API costs"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Context window management"
            }), ": Ensure prompts fit within model limits (e.g., 128K for GPT-4o)"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Truncation logic"
            }), ": Precisely truncate messages when approaching token limits"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Accurate counting"
            }), ": Different models use different tokenizers (cl100k_base for GPT-4, p50k_base for GPT-3)"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "len(tiktoken.encoding_for_model(\"gpt-4o\").encode(\"Hello world\"))"
          }), " returns 2 tokens. A 1000-word document is roughly 1330 tokens."]
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
      "data-qid": "llm-s02-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How would you design a multi-provider LLM abstraction layer?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "A clean abstraction layer would include:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Abstract base class"
            }), ": Define an LLMProvider interface with methods like generate(), count_tokens(), and stream()"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Concrete implementations"
            }), ": One class per provider (OpenAIProvider, AnthropicProvider, GeminiProvider)"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Unified response type"
            }), ": Standard data class containing content, token counts, model name, latency, and any errors"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Provider routing"
            }), ": Strategy pattern to select provider based on task complexity, cost budget, or availability"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Fallback chain"
            }), ": Try primary provider, fall back to secondary if unavailable"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Middleware stack"
            }), ": Retry logic, rate limiting, logging, cost tracking as composable middleware"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This design enables switching providers without application code changes and makes it easy to add new providers."
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": Which HTTP status code indicates a rate limit has been exceeded?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 401 Unauthorized\nb) 403 Forbidden\nc) 429 Too Many Requests\nd) 500 Internal Server Error"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "llm-s02-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) 429 Too Many Requests"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "When you exceed API rate limits, the provider returns HTTP 429. This is a retryable error that should trigger exponential backoff."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does SSE stand for in streaming APIs?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Secure Socket Extension\nb) Server-Sent Events\nc) Stream Socket Engine\nd) Simple Serial Encoding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "llm-s02-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Server-Sent Events"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "SSE is a standard for servers to push data to clients over HTTP, used by LLM APIs to stream tokens incrementally."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which of these is NOT a recommended practice for API key management?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Using environment variables\nb) Hardcoding keys in source code\nc) Using a secret manager in production\nd) Rotating keys regularly"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "llm-s02-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Hardcoding keys in source code"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Hardcoding API keys in source code is dangerous because keys can be exposed through version control, leaks, or code reviews."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": In OpenAI's API, what does the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tool_choice: \"auto\""
      }), " parameter do?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Forces the model to always call a tool\nb) Prevents the model from calling any tool\nc) Lets the model decide whether to call a tool\nd) Automatically executes the tool on the server"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "llm-s02-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Lets the model decide whether to call a tool"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "tool_choice=\"auto\" lets the model decide when to use tools. \"required\" forces a tool call, and \"none\" prevents tool calls."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": Which tiktoken encoding is used by GPT-4o?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) r50k_base\nb) p50k_base\nc) cl100k_base\nd) o200k_base"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "llm-s02-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) cl100k_base"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "GPT-4, GPT-4o, GPT-4-turbo, and GPT-3.5-turbo all use the cl100k_base encoding. The o200k_base encoding is used by newer models like o1."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Write a Python script that calls the OpenAI API to summarize a news article. Print the response and the total token usage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Extend the script to support streaming: display tokens as they arrive from the API."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UnifiedLLMClient"
      }), " class that supports OpenAI and Anthropic through a common interface. Implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "generate()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "count_tokens()"
      }), " for both providers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement a circuit breaker decorator for API calls that trips after 3 failures and recovers after 30 seconds. Test it by temporarily using an invalid API key."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a rate-limited proxy server using FastAPI that forwards requests to OpenAI with a token bucket limiter (100 requests per minute). Include request logging and cost tracking."]
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
            children: "Explain the core idea of LLM APIs in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates LLM APIs."
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
            children: "Describe a production bug caused by misunderstanding LLM APIs. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on LLM APIs from 10 users to 10 million?"
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
            children: "Compare LLM APIs with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on LLM APIs."
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
            children: "How does LLM APIs behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of LLM APIs run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of LLM APIs that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name LLM APIs explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using LLM APIs\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies LLM APIs to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside LLM APIs (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of LLM APIs and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a LLM APIs-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic LLM APIs interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply LLM APIs in production today?"
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
        }), " LLM APIs builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for LLM APIs before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for LLM APIs is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for LLM APIs in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the LLM APIs chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers LLM APIs is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to LLM APIs is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing LLM APIs is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug LLM APIs issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to LLM APIs in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving LLM APIs that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of LLM APIs is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain LLM APIs in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for LLM APIs and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of LLM APIs on an empty input?"
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
            children: "Complete Medium exercises, explain LLM APIs to someone else"
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
        children: "Always write a one-line example of LLM APIs from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered LLM APIs when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining LLM APIs twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own LLM APIs snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of LLM APIs listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link LLM APIs to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of LLM APIs by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain LLM APIs to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of LLM APIs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on LLM APIs (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real LLM APIs problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements LLM APIs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for LLM APIs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on LLM APIs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how LLM APIs fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how LLM APIs is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where LLM APIs is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of LLM APIs, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is LLM APIs asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLM APIs is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with LLM APIs."
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
        children: "LLM APIs emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for LLM APIs today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about LLM APIs — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around LLM APIs changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing LLM APIs."
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
        children: "LLM APIs appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding LLM APIs helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the LLM APIs concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, LLM APIs skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply LLM APIs to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LLM APIs is like a recipe"
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
        }), " — this chapter contributes the LLM APIs skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-02llmapis-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which HTTP status code indicates a rate limit has been exceeded?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) 429 Too Many Requests"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-02llmapis-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does SSE stand for in streaming APIs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Server-Sent Events"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-02llmapis-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which of these is NOT a recommended practice for API key management?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Hardcoding keys in source code"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-02llmapis-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    In OpenAI's API, what does the tool_choice: \"auto\" parameter do?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) Lets the model decide whether to call a tool"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "11llmspromptengineering-02llmapis-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which tiktoken encoding is used by GPT-4o?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) cl100k_base"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for LLM APIs (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing LLM APIs (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for LLM APIs-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running LLM APIs in production at scale"
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
        children: "Testing: pytest for unit tests of LLM APIs code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on LLM APIs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in LLM APIs code."]
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
        }), " or your IDE's debugger to step through the LLM APIs example code."]
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
        children: "Explain LLM APIs in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of LLM APIs."
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
        children: "Tell me about a time you debugged a LLM APIs problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where LLM APIs is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for LLM APIs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core LLM APIs logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain LLM APIs without notes"
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
        }), ": a small team uses LLM APIs daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": LLM APIs patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": LLM APIs principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": LLM APIs shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect LLM APIs to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/11-llms-prompt-engineering/03-zero-shot-and-few-shot",
        children: "Zero-Shot & Few-Shot Prompting"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLM APIs, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of LLM APIs depends on input size and distribution — always benchmark for your own data."
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