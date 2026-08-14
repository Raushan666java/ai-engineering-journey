"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[13543],{

/***/ 94419
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_11_ai_testing_evaluation_md_afb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-11-ai-testing-evaluation-md-afb.json
const site_docs_courses_ai_agent_engineer_11_ai_testing_evaluation_md_afb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/11-ai-testing-evaluation","title":"Chapter 11 — AI Testing, Evaluation & Quality","description":"Duration: 1.5 weeks, ~18 hours","source":"@site/docs/courses/ai-agent-engineer/11-ai-testing-evaluation.md","sourceDirName":"courses/ai-agent-engineer","slug":"/ai-agent-engineer/11-ai-testing-evaluation","permalink":"/ai-engineering-journey/ai-agent-engineer/11-ai-testing-evaluation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"11-ai-testing-evaluation","slug":"/ai-agent-engineer/11-ai-testing-evaluation","title":"Chapter 11 — AI Testing, Evaluation & Quality","sidebar_label":"Chapter 11 — AI Testing, Evaluation & Quality","sidebar_position":12},"sidebar":"course-ai-agent-engineer","previous":{"title":"Chapter 10 — Prompt Engineering Mastery","permalink":"/ai-engineering-journey/ai-agent-engineer/10-prompt-engineering-mastery"},"next":{"title":"Chapter 12 — AI Observability & Debugging","permalink":"/ai-engineering-journey/ai-agent-engineer/12-ai-observability-debugging"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/11-ai-testing-evaluation.md


const frontMatter = {
	id: '11-ai-testing-evaluation',
	slug: '/ai-agent-engineer/11-ai-testing-evaluation',
	title: 'Chapter 11 — AI Testing, Evaluation & Quality',
	sidebar_label: 'Chapter 11 — AI Testing, Evaluation & Quality',
	sidebar_position: 12
};
const contentTitle = 'Chapter 11 — AI Testing, Evaluation & Quality';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Topic Table",
  "id": "topic-table",
  "level": 2
}, {
  "value": "11.1 Unit Testing for Agent Logic",
  "id": "111-unit-testing-for-agent-logic",
  "level": 2
}, {
  "value": "Testing Tool Selection",
  "id": "testing-tool-selection",
  "level": 3
}, {
  "value": "Testing State Transitions (LangGraph)",
  "id": "testing-state-transitions-langgraph",
  "level": 3
}, {
  "value": "11.2 Integration Testing for RAG Pipelines",
  "id": "112-integration-testing-for-rag-pipelines",
  "level": 2
}, {
  "value": "11.3 LLM-as-Judge Evaluation",
  "id": "113-llm-as-judge-evaluation",
  "level": 2
}, {
  "value": "11.4 Trajectory Evaluation for Agents",
  "id": "114-trajectory-evaluation-for-agents",
  "level": 2
}, {
  "value": "11.5 Hallucination Detection",
  "id": "115-hallucination-detection",
  "level": 2
}, {
  "value": "11.6 Evaluation Datasets",
  "id": "116-evaluation-datasets",
  "level": 2
}, {
  "value": "Creating Ground-Truth Data",
  "id": "creating-ground-truth-data",
  "level": 3
}, {
  "value": "11.7 Automated Eval in CI/CD",
  "id": "117-automated-eval-in-cicd",
  "level": 2
}, {
  "value": "Python CI Eval Runner",
  "id": "python-ci-eval-runner",
  "level": 3
}, {
  "value": "11.8 Quality Metrics &amp; Dashboards",
  "id": "118-quality-metrics--dashboards",
  "level": 2
}, {
  "value": "11.9 A/B Testing for Model Selection",
  "id": "119-ab-testing-for-model-selection",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
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
        id: "chapter-11--ai-testing-evaluation--quality",
        children: "Chapter 11 — AI Testing, Evaluation & Quality"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " 1.5 weeks, ~18 hours\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Build a systematic testing and evaluation framework for AI agents and RAG pipelines. Move from \"it works on my machine\" to quantitative quality gates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "lesson-visuals",
      "aria-label": "Visual learning resources",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.header, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          children: "VISUAL LEARNING"
        }), (0,jsx_runtime.jsx)(_components.h2, {
          children: "See it. Review it. Remember it."
        })]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/11-ai-testing-evaluation/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/11-ai-testing-evaluation/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/11-ai-testing-evaluation/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/11-ai-testing-evaluation/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/ai-agent-engineer/11-ai-testing-evaluation/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/ai-agent-engineer/11-ai-testing-evaluation/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Unit testing for agent logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write unit tests for tool selection, state transitions, edge cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration testing for RAG pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write integration tests that verify chunking, retrieval, and generation end-to-end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM-as-judge evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a judge agent that scores outputs on correctness, faithfulness, relevance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trajectory evaluation for agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate an agent's reasoning path, not just its final answer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hallucination detection & measurement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement factual consistency checking with a dedicated hallucination detector"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regression testing for prompts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a prompt regression suite that catches degradations before deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation datasets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create and curate ground-truth datasets for your RAG system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A/B testing for model selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design an A/B test comparing 2 models on the same task"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated eval in CI/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate evaluation into GitHub Actions so every PR gets scored"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quality metrics & dashboards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track faithfulness, answer relevance, context precision over time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "111-unit-testing-for-agent-logic",
      children: "11.1 Unit Testing for Agent Logic"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testing-tool-selection",
      children: "Testing Tool Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pytest\r\nfrom unittest.mock import AsyncMock, patch\r\nfrom pydantic import BaseModel\r\n\r\n# Agent under test\r\nclass SimpleAgent:\r\n    def __init__(self, tools: dict):\r\n        self.tools = tools\r\n\r\n    def select_tool(self, user_intent: str) -> str | None:\r\n        \"\"\"Select the best tool based on user intent.\"\"\"\r\n        intent_lower = user_intent.lower()\r\n\r\n        if \"search\" in intent_lower or \"find\" in intent_lower or \"look up\" in intent_lower:\r\n            return \"search_web\"\r\n        elif \"calculate\" in intent_lower or \"compute\" in intent_lower:\r\n            return \"calculator\"\r\n        elif \"summarize\" in intent_lower or \"summarise\" in intent_lower:\r\n            return \"summarizer\"\r\n        elif \"translate\" in intent_lower:\r\n            return \"translator\"\r\n        elif \"email\" in intent_lower or \"send\" in intent_lower:\r\n            return \"send_email\"\r\n        return None\r\n\r\n# Unit tests\r\nclass TestAgentToolSelection:\r\n    def setup_method(self):\r\n        self.agent = SimpleAgent(tools={})\r\n\r\n    def test_select_search_tool(self):\r\n        assert self.agent.select_tool(\"search for python tutorials\") == \"search_web\"\r\n        assert self.agent.select_tool(\"find the latest research papers\") == \"search_web\"\r\n        assert self.agent.select_tool(\"look up company address\") == \"search_web\"\r\n\r\n    def test_select_calculator_tool(self):\r\n        assert self.agent.select_tool(\"calculate 15% tip on 45 dollars\") == \"calculator\"\r\n        assert self.agent.select_tool(\"compute the average of these numbers\") == \"calculator\"\r\n\r\n    def test_select_summarizer_tool(self):\r\n        assert self.agent.select_tool(\"summarize this article\") == \"summarizer\"\r\n\r\n    def test_select_translator_tool(self):\r\n        assert self.agent.select_tool(\"translate hello to spanish\") == \"translator\"\r\n\r\n    def test_select_email_tool(self):\r\n        assert self.agent.select_tool(\"send email to john\") == \"send_email\"\r\n        assert self.agent.select_tool(\"compose an email about the meeting\") == \"send_email\"\r\n\r\n    def test_no_tool_match(self):\r\n        assert self.agent.select_tool(\"hello, how are you?\") is None\r\n\r\n    def test_edge_cases(self):\r\n        assert self.agent.select_tool(\"\") is None\r\n        assert self.agent.select_tool(\"   \") is None\r\n        assert self.agent.select_tool(\"SEND EMAIL NOW\") == \"send_email\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testing-state-transitions-langgraph",
      children: "Testing State Transitions (LangGraph)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pytest\r\nfrom typing import TypedDict, Annotated, Literal\r\nfrom langgraph.graph import StateGraph, END\r\n\r\n# State definition\r\nclass AgentState(TypedDict):\r\n    input: str\r\n    intent: str | None\r\n    tool_result: str | None\r\n    response: str | None\r\n    errors: list[str]\r\n\r\n# Graph nodes\r\ndef classify_intent(state: AgentState) -> dict:\r\n    \"\"\"Determine user intent.\"\"\"\r\n    text = state[\"input\"].lower()\r\n    if \"search\" in text or \"find\" in text:\r\n        return {\"intent\": \"search\"}\r\n    elif \"calculate\" in text:\r\n        return {\"intent\": \"calculate\"}\r\n    elif \"summarize\" in text:\r\n        return {\"intent\": \"summarize\"}\r\n    return {\"intent\": \"unknown\"}\r\n\r\ndef execute_tool(state: AgentState) -> dict:\r\n    \"\"\"Execute the selected tool.\"\"\"\r\n    if state[\"intent\"] == \"search\":\r\n        return {\"tool_result\": f\"Search results for: {state['input']}\"}\r\n    elif state[\"intent\"] == \"calculate\":\r\n        return {\"tool_result\": \"42\"}\r\n    return {\"tool_result\": \"I don't know how to do that yet.\"}\r\n\r\ndef generate_response(state: AgentState) -> dict:\r\n    \"\"\"Generate final response.\"\"\"\r\n    return {\"response\": f\"Based on my analysis: {state.get('tool_result', 'No result')}\"}\r\n\r\ndef error_handler(state: AgentState) -> dict:\r\n    \"\"\"Handle errors gracefully.\"\"\"\r\n    return {\"response\": \"I encountered an error processing your request.\", \"errors\": [\"Unknown intent\"]}\r\n\r\n# Conditional edge\r\ndef route_after_intent(state: AgentState) -> Literal[\"execute_tool\", \"error_handler\", END]:\r\n    if state[\"intent\"] == \"unknown\":\r\n        return \"error_handler\"\r\n    return \"execute_tool\"\r\n\r\n# Build graph\r\ndef build_agent_graph() -> StateGraph:\r\n    builder = StateGraph(AgentState)\r\n    builder.add_node(\"classify_intent\", classify_intent)\r\n    builder.add_node(\"execute_tool\", execute_tool)\r\n    builder.add_node(\"generate_response\", generate_response)\r\n    builder.add_node(\"error_handler\", error_handler)\r\n    builder.set_entry_point(\"classify_intent\")\r\n    builder.add_conditional_edges(\"classify_intent\", route_after_intent)\r\n    builder.add_edge(\"execute_tool\", \"generate_response\")\r\n    builder.add_edge(\"generate_response\", END)\r\n    builder.add_edge(\"error_handler\", END)\r\n    return builder.compile()\r\n\r\n# Tests\r\nclass TestLangGraphAgent:\r\n    def setup_method(self):\r\n        self.agent = build_agent_graph()\r\n\r\n    def test_search_intent(self):\r\n        result = self.agent.invoke({\"input\": \"search for quantum computing\"})\r\n        assert result[\"intent\"] == \"search\"\r\n        assert \"Search results\" in result[\"tool_result\"]\r\n        assert \"Based on my analysis\" in result[\"response\"]\r\n\r\n    def test_calculate_intent(self):\r\n        result = self.agent.invoke({\"input\": \"calculate 2+2\"})\r\n        assert result[\"intent\"] == \"calculate\"\r\n        assert \"42\" in result[\"tool_result\"]\r\n\r\n    def test_unknown_intent(self):\r\n        result = self.agent.invoke({\"input\": \"hello there\"})\r\n        assert \"encountered an error\" in result[\"response\"]\r\n        assert \"Unknown intent\" in result[\"errors\"]\r\n\r\n    def test_empty_input(self):\r\n        result = self.agent.invoke({\"input\": \"\"})\r\n        assert result[\"intent\"] == \"unknown\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "112-integration-testing-for-rag-pipelines",
      children: "11.2 Integration Testing for RAG Pipelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pytest\r\nfrom typing import Generator\r\n\r\nclass RAGPipeline:\r\n    \"\"\"RAG pipeline under test.\"\"\"\r\n\r\n    def chunk_document(self, text: str, chunk_size: int = 500) -> list[str]:\r\n        chunks = []\r\n        start = 0\r\n        while start < len(text):\r\n            end = min(start + chunk_size, len(text))\r\n            chunks.append(text[start:end])\r\n            start = end\r\n        return chunks\r\n\r\n    def retrieve(self, query: str, top_k: int = 3) -> list[str]:\r\n        q_vec = client.embeddings.create(input=query, model=\"text-embedding-3-small\").data[0].embedding\r\n        results = chroma_collection.query(query_embeddings=[q_vec], n_results=top_k)\r\n        return results[\"documents\"][0]\r\n\r\n    def generate(self, query: str, context: str) -> str:\r\n        response = client.chat.completions.create(\r\n            model=\"gpt-4o-mini\",\r\n            messages=[\r\n                {\"role\": \"system\", \"content\": \"Answer using only the context. If unsure, say so.\"},\r\n                {\"role\": \"user\", \"content\": f\"Context:\\n{context}\\n\\nQuery: {query}\"}\r\n            ]\r\n        )\r\n        return response.choices[0].message.content\r\n\r\n# Integration tests\r\n@pytest.mark.integration\r\nclass TestRAGIntegration:\r\n    \"\"\"Tests that hit real API endpoints and vector DB.\"\"\"\r\n\r\n    def setup_method(self):\r\n        self.pipeline = RAGPipeline()\r\n        # Seed test data\r\n        self.test_docs = [\r\n            \"Lease terms in Dubai Marina typically range from 12 to 36 months.\",\r\n            \"Annual rent is paid in 1 to 6 cheques depending on the landlord.\",\r\n            \"Security deposit is usually 5% of annual rent for furnished units.\",\r\n            \"Agency fee is 5% of annual rent, split equally between tenant and landlord.\",\r\n            \"Ejari registration is mandatory for all tenancy contracts in Dubai.\",\r\n        ]\r\n        for doc in self.test_docs:\r\n            embedding = client.embeddings.create(input=doc, model=\"text-embedding-3-small\").data[0].embedding\r\n            chroma_collection.add(documents=[doc], embeddings=[embedding])\r\n\r\n    def test_chunking_basic(self):\r\n        text = \"A\" * 1200\r\n        chunks = self.pipeline.chunk_document(text, chunk_size=500)\r\n        assert len(chunks) == 3\r\n        assert all(len(c) <= 500 for c in chunks)\r\n\r\n    def test_chunking_exact_boundary(self):\r\n        text = \"Hello. \" * 200\r\n        chunks = self.pipeline.chunk_document(text, chunk_size=500)\r\n        assert len(chunks) >= 1\r\n        assert sum(len(c) for c in chunks) == len(text)\r\n\r\n    def test_retrieval_relevant_results(self):\r\n        results = self.pipeline.retrieve(\"How long are lease terms in Dubai?\")\r\n        assert len(results) == 3\r\n        assert any(\"12 to 36 months\" in r for r in results)\r\n\r\n    def test_retrieval_no_query_match(self):\r\n        results = self.pipeline.retrieve(\"quantum physics theory\")\r\n        assert len(results) == 3\r\n\r\n    def test_generation_with_context(self):\r\n        context = \"Dubai lease terms are typically 12 months.\"\r\n        response = self.pipeline.generate(\"What is the standard lease term?\", context)\r\n        assert \"12\" in response\r\n        assert len(response) > 10\r\n\r\n    def test_generation_without_context(self):\r\n        response = self.pipeline.generate(\"What is the meaning of life?\", \"No relevant context found.\")\r\n        assert \"I cannot\" in response.lower() or \"unsure\" in response.lower() or \"no information\" in response.lower()\r\n\r\n    def test_end_to_end(self):\r\n        response = self.pipeline.generate(\"What is the agency fee in Dubai?\", \r\n            \"Agency fee is 5% of annual rent. Agency fee is 5% of annual rent.\")\r\n        assert \"5%\" in response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "113-llm-as-judge-evaluation",
      children: "11.3 LLM-as-Judge Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pydantic import BaseModel, Field\r\nfrom enum import Enum\r\n\r\nclass ScoreDimension(str, Enum):\r\n    CORRECTNESS = \"correctness\"\r\n    FAITHFULNESS = \"faithfulness\"\r\n    RELEVANCE = \"relevance\"\r\n    COMPLETENESS = \"completeness\"\r\n    CONCISENESS = \"conciseness\"\r\n\r\nclass JudgeScore(BaseModel):\r\n    dimension: ScoreDimension\r\n    score: int = Field(ge=1, le=5, description=\"Score 1-5\")\r\n    reasoning: str\r\n    improvement_suggestion: str | None = None\r\n\r\nclass JudgeVerdict(BaseModel):\r\n    scores: list[JudgeScore]\r\n    overall_score: float = Field(ge=1, le=5)\r\n    verdict: Literal[\"pass\", \"conditional_pass\", \"fail\"]\r\n    critical_issues: list[str] = Field(default_factory=list)\r\n\r\nclass LLMJudge:\r\n    \"\"\"Judge agent that evaluates LLM outputs across multiple dimensions.\"\"\"\r\n\r\n    RUBRICS = {\r\n        ScoreDimension.CORRECTNESS: \"Does the output contain factual errors? Score 1 (many errors) to 5 (completely correct).\",\r\n        ScoreDimension.FAITHFULNESS: \"Does the output only use information from the provided context? Score 1 (hallucinates freely) to 5 (strictly grounded in context).\",\r\n        ScoreDimension.RELEVANCE: \"Does the output directly address the user's query? Score 1 (completely off-topic) to 5 (perfectly targeted).\",\r\n        ScoreDimension.COMPLETENESS: \"Does the output cover all aspects of the query? Score 1 (misses major points) to 5 (comprehensive).\",\r\n        ScoreDimension.CONCISENESS: \"Is the output appropriately concise? Score 1 (verbose/rambling) to 5 (perfect length).\",\r\n    }\r\n\r\n    def evaluate(\r\n        self,\r\n        query: str,\r\n        output: str,\r\n        context: str | None = None,\r\n        expected: str | None = None,\r\n        dimensions: list[ScoreDimension] | None = None,\r\n    ) -> JudgeVerdict:\r\n        \"\"\"Evaluate an LLM output against specified dimensions.\"\"\"\r\n        if dimensions is None:\r\n            dimensions = list(ScoreDimension)\r\n\r\n        scores = []\r\n        for dim in dimensions:\r\n            judge_prompt = self._build_judge_prompt(dim, query, output, context, expected)\r\n            completion = client.beta.chat.completions.parse(\r\n                model=\"gpt-4o-mini\",\r\n                messages=[\r\n                    {\"role\": \"system\", \"content\": \"You are a strict but fair evaluator of AI outputs. Score precisely and provide specific reasoning.\"},\r\n                    {\"role\": \"user\", \"content\": judge_prompt}\r\n                ],\r\n                response_format=JudgeScore\r\n            )\r\n            scores.append(completion.choices[0].message.parsed)\r\n\r\n        overall = sum(s.score for s in scores) / len(scores)\r\n        critical = [s.reasoning for s in scores if s.score <= 2]\r\n\r\n        if overall >= 4.0:\r\n            verdict = \"pass\"\r\n        elif overall >= 3.0:\r\n            verdict = \"conditional_pass\"\r\n        else:\r\n            verdict = \"fail\"\r\n\r\n        return JudgeVerdict(\r\n            scores=scores,\r\n            overall_score=round(overall, 2),\r\n            verdict=verdict,\r\n            critical_issues=critical\r\n        )\r\n\r\n    def _build_judge_prompt(\r\n        self,\r\n        dimension: ScoreDimension,\r\n        query: str,\r\n        output: str,\r\n        context: str | None,\r\n        expected: str | None,\r\n    ) -> str:\r\n        rubric = self.RUBRICS[dimension]\r\n        parts = [f\"Dimension: {dimension.value}\", f\"Rubric: {rubric}\", f\"Query: {query}\", f\"Output: {output}\"]\r\n        if context:\r\n            parts.append(f\"Context: {context}\")\r\n        if expected:\r\n            parts.append(f\"Expected output: {expected}\")\r\n        return \"\\n\\n\".join(parts)\r\n\r\n# Usage\r\njudge = LLMJudge()\r\nresult = judge.evaluate(\r\n    query=\"What is the standard lease term in Dubai?\",\r\n    output=\"The standard lease term in Dubai is 12 months, typically paid in 1-4 cheques.\",\r\n    context=\"Lease terms in Dubai typically range from 12 to 36 months. Rent payment can be made in 1 to 6 cheques.\",\r\n    expected=\"12 months, 1-6 cheques\"\r\n)\r\nprint(f\"Verdict: {result.verdict}\")\r\nprint(f\"Overall: {result.overall_score}\")\r\nfor s in result.scores:\r\n    print(f\"  {s.dimension.value}: {s.score}/5 — {s.reasoning}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "114-trajectory-evaluation-for-agents",
      children: "11.4 Trajectory Evaluation for Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pydantic import BaseModel\r\n\r\nclass AgentStep(BaseModel):\r\n    thought: str\r\n    action: str | None\r\n    action_input: dict | None\r\n    observation: str | None\r\n    step_number: int\r\n\r\nclass AgentTrajectory(BaseModel):\r\n    steps: list[AgentStep]\r\n    final_answer: str\r\n    total_steps: int\r\n    tools_used: list[str]\r\n\r\nclass TrajectoryEvaluation(BaseModel):\r\n    correctness: dict  # Did the agent arrive at the right answer?\r\n    efficiency: dict   # Did it use too many steps or unnecessary tools?\r\n    tool_usage: dict   # Did it use tools correctly and appropriately?\r\n    reasoning: dict    # Was the reasoning path logical?\r\n    overall: dict\r\n\r\nclass TrajectoryEvaluator:\r\n    \"\"\"Evaluate an agent's reasoning trajectory, not just its final answer.\"\"\"\r\n\r\n    def evaluate(self, trajectory: AgentTrajectory, ground_truth: str | None = None) -> TrajectoryEvaluation:\r\n        evaluation = TrajectoryEvaluation(\r\n            correctness={\"score\": 0, \"reasoning\": \"\"},\r\n            efficiency={\"score\": 0, \"reasoning\": \"\", \"unnecessary_steps\": []},\r\n            tool_usage={\"score\": 0, \"reasoning\": \"\", \"misused_tools\": []},\r\n            reasoning={\"score\": 0, \"reasoning\": \"\", \"logic_gaps\": []},\r\n            overall={\"score\": 0, \"recommendation\": \"\"}\r\n        )\r\n\r\n        # Evaluate correctness\r\n        if ground_truth:\r\n            eval_resp = client.beta.chat.completions.parse(\r\n                model=\"gpt-4o-mini\",\r\n                messages=[\r\n                    {\"role\": \"system\", \"content\": \"Compare the agent's final answer to the ground truth. Score 1-10.\"},\r\n                    {\"role\": \"user\", \"content\": f\"Agent answer: {trajectory.final_answer}\\nGround truth: {ground_truth}\"}\r\n                ],\r\n                response_format=type(\"Correctness\", (BaseModel,), {\"score\": int, \"reasoning\": str})\r\n            )\r\n            evaluation.correctness = eval_resp.choices[0].message.parsed.model_dump()\r\n\r\n        # Evaluate efficiency\r\n        unnecessary = []\r\n        for i, step in enumerate(trajectory.steps):\r\n            if step.action and \"error\" in (step.observation or \"\").lower():\r\n                unnecessary.append(f\"Step {i+1}: {step.action} failed — could have been avoided\")\r\n        evaluation.efficiency = {\r\n            \"score\": max(1, 10 - len(unnecessary) * 2),\r\n            \"reasoning\": f\"{len(trajectory.steps)} total steps, {len(unnecessary)} unnecessary\",\r\n            \"unnecessary_steps\": unnecessary\r\n        }\r\n\r\n        # Evaluate tool usage\r\n        tool_counts = {}\r\n        for step in trajectory.steps:\r\n            if step.action:\r\n                tool_counts[step.action] = tool_counts.get(step.action, 0) + 1\r\n\r\n        evaluation.tool_usage = {\r\n            \"score\": 8 if len(trajectory.tools_used) <= 5 else 5,\r\n            \"reasoning\": f\"Used {len(trajectory.tools_used)} different tools: {', '.join(trajectory.tools_used)}\",\r\n            \"misused_tools\": []\r\n        }\r\n\r\n        # Overall\r\n        scores = [evaluation.correctness.get(\"score\", 5), evaluation.efficiency[\"score\"],\r\n                  evaluation.tool_usage[\"score\"], evaluation.reasoning[\"score\"]]\r\n        avg = sum(scores) / len(scores)\r\n        evaluation.overall = {\r\n            \"score\": round(avg, 1),\r\n            \"recommendation\": \"pass\" if avg >= 7 else \"review\" if avg >= 5 else \"fail\"\r\n        }\r\n\r\n        return evaluation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "115-hallucination-detection",
      children: "11.5 Hallucination Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pydantic import BaseModel, Field\r\n\r\nclass ClaimVerification(BaseModel):\r\n    claim: str\r\n    supported: bool\r\n    evidence: str | None\r\n    confidence: float = Field(ge=0, le=1)\r\n\r\nclass HallucinationReport(BaseModel):\r\n    total_claims: int\r\n    supported_claims: int\r\n    hallucinated_claims: int\r\n    hallucination_rate: float\r\n    details: list[ClaimVerification]\r\n\r\nclass HallucinationDetector:\r\n    \"\"\"Detect unsupported claims in LLM output against a given context.\"\"\"\r\n\r\n    def extract_claims(self, text: str) -> list[str]:\r\n        \"\"\"Split text into atomic claims.\"\"\"\r\n        response = client.chat.completions.create(\r\n            model=\"gpt-4o-mini\",\r\n            messages=[\r\n                {\"role\": \"system\", \"content\": \"Break the following text into atomic factual claims. Each claim must be a single verifiable fact. Return one claim per line, numbered.\"},\r\n                {\"role\": \"user\", \"content\": text}\r\n            ],\r\n            max_tokens=500\r\n        )\r\n        lines = response.choices[0].message.content.strip().split(\"\\n\")\r\n        claims = []\r\n        for line in lines:\r\n            line = line.strip()\r\n            if line and (line[0].isdigit() or line.startswith(\"-\")):\r\n                claim = line.split(\". \", 1)[-1] if \". \" in line else line.lstrip(\"- \")\r\n                claims.append(claim)\r\n        return claims\r\n\r\n    def verify_claim(self, claim: str, context: str) -> ClaimVerification:\r\n        \"\"\"Check if a claim is supported by the context.\"\"\"\r\n        response = client.beta.chat.completions.parse(\r\n            model=\"gpt-4o-mini\",\r\n            messages=[\r\n                {\"role\": \"system\", \"content\": \"Determine if the claim is supported by the context. Return supported=true only if the context explicitly contains the information.\"},\r\n                {\"role\": \"user\", \"content\": f\"Claim: {claim}\\n\\nContext: {context}\"}\r\n            ],\r\n            response_format=ClaimVerification\r\n        )\r\n        return response.choices[0].message.parsed\r\n\r\n    def analyze(self, output: str, context: str) -> HallucinationReport:\r\n        \"\"\"Full hallucination analysis of an LLM output.\"\"\"\r\n        claims = self.extract_claims(output)\r\n        if not claims:\r\n            return HallucinationReport(\r\n                total_claims=0, supported_claims=0, hallucinated_claims=0,\r\n                hallucination_rate=0.0, details=[]\r\n            )\r\n\r\n        results = [self.verify_claim(c, context) for c in claims]\r\n        supported = sum(1 for r in results if r.supported)\r\n        hallucinated = len(results) - supported\r\n\r\n        return HallucinationReport(\r\n            total_claims=len(results),\r\n            supported_claims=supported,\r\n            hallucinated_claims=hallucinated,\r\n            hallucination_rate=round(hallucinated / len(results), 3),\r\n            details=results\r\n        )\r\n\r\n# Usage\r\ndetector = HallucinationDetector()\r\nreport = detector.analyze(\r\n    output=\"The standard lease term in Dubai is 12 months. Most tenants pay in 4 cheques. The agency fee is 5% of annual rent. Ejari registration costs 500 AED.\",\r\n    context=\"Lease terms in Dubai typically range from 12 to 36 months. Agency fee is 5% of annual rent. Ejari registration is mandatory.\"\r\n)\r\nprint(f\"Hallucination rate: {report.hallucination_rate:.1%}\")\r\nprint(f\"Hallucinated claims: {report.hallucinated_claims}/{report.total_claims}\")\r\nfor detail in report.details:\r\n    if not detail.supported:\r\n        print(f\"  UNSUPPORTED: {detail.claim[:60]}...\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "116-evaluation-datasets",
      children: "11.6 Evaluation Datasets"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-ground-truth-data",
      children: "Creating Ground-Truth Data"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\nimport json\r\nimport random\r\n\r\n@dataclass\r\nclass EvalExample:\r\n    query: str\r\n    expected_response: str\r\n    context: str\r\n    difficulty: str  # easy, medium, hard\r\n    category: str    # factual, reasoning, multi-hop, comparative\r\n    id: str = \"\"\r\n\r\nclass EvalDataset:\r\n    \"\"\"Curated evaluation dataset for RAG systems.\"\"\"\r\n\r\n    def __init__(self, name: str):\r\n        self.name = name\r\n        self.examples: list[EvalExample] = []\r\n\r\n    def add(self, example: EvalExample):\r\n        example.id = f\"{self.name}_{len(self.examples)}\"\r\n        self.examples.append(example)\r\n\r\n    def filter(self, difficulty: str | None = None, category: str | None = None, n: int | None = None) -> list[EvalExample]:\r\n        results = self.examples\r\n        if difficulty:\r\n            results = [e for e in results if e.difficulty == difficulty]\r\n        if category:\r\n            results = [e for e in results if e.category == category]\r\n        if n:\r\n            results = random.sample(results, min(n, len(results)))\r\n        return results\r\n\r\n    def save(self, path: str):\r\n        data = [{\"id\": e.id, \"query\": e.query, \"expected_response\": e.expected_response,\r\n                 \"context\": e.context, \"difficulty\": e.difficulty, \"category\": e.category}\r\n                for e in self.examples]\r\n        with open(path, \"w\") as f:\r\n            json.dump({\"name\": self.name, \"examples\": data}, f, indent=2)\r\n\r\n    @classmethod\r\n    def load(cls, path: str) -> \"EvalDataset\":\r\n        with open(path) as f:\r\n            data = json.load(f)\r\n        ds = cls(data[\"name\"])\r\n        for ex in data[\"examples\"]:\r\n            ds.add(EvalExample(**ex))\r\n        return ds\r\n\r\n# Build a sample dataset\r\ndataset = EvalDataset(\"dubai_rental_rag\")\r\n\r\ndataset.add(EvalExample(\r\n    query=\"What is the standard lease term in Dubai?\",\r\n    expected_response=\"12 months\",\r\n    context=\"Lease terms in Dubai typically range from 12 to 36 months.\",\r\n    difficulty=\"easy\", category=\"factual\"\r\n))\r\ndataset.add(EvalExample(\r\n    query=\"Compare payment options between furnished and unfurnished units.\",\r\n    expected_response=\"Furnished units typically require 1-4 cheques, unfurnished 1-6 cheques. Furnished units have higher rent but lower upfront cost.\",\r\n    context=\"Furnished units: rent is 10-20% higher. Payment: 1-4 cheques for furnished, 1-6 cheques for unfurnished.\",\r\n    difficulty=\"hard\", category=\"comparative\"\r\n))\r\ndataset.add(EvalExample(\r\n    query=\"Total cost breakdown for renting a 2BR apartment in Dubai Marina.\",\r\n    expected_response=\"Total estimated upfront: annual rent + 5% security deposit + 5% agency fee + Ejari fee + DEWA deposit.\",\r\n    context=\"Security deposit: 5% of annual rent. Agency fee: 5%. Ejari: 220 AED. DEWA deposit: 2000 AED.\",\r\n    difficulty=\"medium\", category=\"reasoning\"\r\n))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "117-automated-eval-in-cicd",
      children: "11.7 Automated Eval in CI/CD"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/eval.yml\r\nname: AI Agent Evaluation\r\non:\r\n  pull_request:\r\n    paths:\r\n      - 'prompts/**'\r\n      - 'agents/**'\r\n      - 'rag/**'\r\n\r\njobs:\r\n  evaluate:\r\n    runs-on: ubuntu-latest\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - uses: actions/setup-python@v5\r\n        with:\r\n          python-version: '3.12'\r\n\r\n      - name: Install dependencies\r\n        run: pip install -r requirements.txt\r\n\r\n      - name: Run prompt regression suite\r\n        run: python -m pytest tests/prompt_regression/ -v --junitxml=report.xml\r\n        env:\r\n          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}\r\n\r\n      - name: Run RAG integration tests\r\n        run: python -m pytest tests/integration/ -v --run-integration\r\n        env:\r\n          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}\r\n          CHROMA_HOST: ${{ secrets.CHROMA_HOST }}\r\n\r\n      - name: Run LLM-as-judge evaluation\r\n        run: python -m eval_suite.run --dataset eval_data.json --min-score 7.0\r\n\r\n      - name: Check quality gate\r\n        run: |\r\n          SCORE=$(python -m eval_suite.get_score report.xml)\r\n          if (( $(echo \"$SCORE < 7.0\" | bc -l) )); then\r\n            echo \"Quality gate FAILED: score $SCORE < 7.0\"\r\n            exit 1\r\n          fi\r\n          echo \"Quality gate PASSED: score $SCORE\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-ci-eval-runner",
      children: "Python CI Eval Runner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sys\r\nimport json\r\nfrom pathlib import Path\r\n\r\nclass QualityGate:\r\n    \"\"\"Enforce quality thresholds in CI.\"\"\"\r\n\r\n    def __init__(self, min_overall_score: float = 7.0, max_hallucination_rate: float = 0.15):\r\n        self.min_score = min_overall_score\r\n        self.max_hallucination_rate = max_hallucination_rate\r\n\r\n    def run_and_report(self, eval_dataset: EvalDataset, pipeline: \"RAGPipeline\") -> dict:\r\n        judge = LLMJudge()\r\n        detector = HallucinationDetector()\r\n\r\n        results = []\r\n        for example in eval_dataset.examples:\r\n            response = pipeline.generate(example.query, example.context)\r\n            judge_result = judge.evaluate(example.query, response, example.context, example.expected_response)\r\n            hallu_report = detector.analyze(response, example.context)\r\n\r\n            results.append({\r\n                \"id\": example.id,\r\n                \"query\": example.query,\r\n                \"judge_score\": judge_result.overall_score,\r\n                \"hallucination_rate\": hallu_report.hallucination_rate,\r\n                \"verdict\": judge_result.verdict,\r\n                \"hallu_claims\": hallu_report.hallucinated_claims,\r\n            })\r\n\r\n        avg_score = sum(r[\"judge_score\"] for r in results) / len(results)\r\n        avg_hallu = sum(r[\"hallucination_rate\"] for r in results) / len(results)\r\n\r\n        passed = avg_score >= self.min_score and avg_hallu <= self.max_hallucination_rate\r\n\r\n        report = {\r\n            \"passed\": passed,\r\n            \"avg_judge_score\": round(avg_score, 2),\r\n            \"avg_hallucination_rate\": round(avg_hallu, 3),\r\n            \"thresholds\": {\"min_score\": self.min_score, \"max_hallucination\": self.max_hallucination_rate},\r\n            \"results\": results,\r\n        }\r\n\r\n        print(json.dumps(report, indent=2))\r\n\r\n        if not passed:\r\n            print(f\"FAILED: avg score {avg_score:.1f} (need {self.min_score}) or hallucination {avg_hallu:.1%} (max {self.max_hallucination_rate:.1%})\")\r\n            sys.exit(1)\r\n\r\n        return report\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "118-quality-metrics--dashboards",
      children: "11.8 Quality Metrics & Dashboards"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\r\nfrom datetime import datetime, timedelta\r\nimport statistics\r\n\r\nclass QualityTracker:\r\n    \"\"\"Track quality metrics over time with time-series storage.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.metrics: defaultdict[str, list[dict]] = defaultdict(list)\r\n\r\n    def record(self, metric_name: str, value: float, metadata: dict | None = None):\r\n        self.metrics[metric_name].append({\r\n            \"value\": value,\r\n            \"timestamp\": datetime.now().isoformat(),\r\n            \"metadata\": metadata or {}\r\n        })\r\n\r\n    def get_trend(self, metric_name: str, hours: int = 24) -> dict:\r\n        \"\"\"Get metric values over a time window.\"\"\"\r\n        cutoff = datetime.now() - timedelta(hours=hours)\r\n        entries = [e for e in self.metrics[metric_name]\r\n                   if datetime.fromisoformat(e[\"timestamp\"]) > cutoff]\r\n        values = [e[\"value\"] for e in entries]\r\n\r\n        if not values:\r\n            return {\"metric\": metric_name, \"count\": 0, \"status\": \"no_data\"}\r\n\r\n        return {\r\n            \"metric\": metric_name,\r\n            \"count\": len(values),\r\n            \"current\": values[-1],\r\n            \"mean\": round(statistics.mean(values), 3),\r\n            \"min\": min(values),\r\n            \"max\": max(values),\r\n            \"stdev\": round(statistics.stdev(values), 3) if len(values) > 1 else 0,\r\n            \"trend\": \"up\" if len(values) > 1 and values[-1] > values[0] else \"down\",\r\n            \"status\": \"healthy\" if values[-1] >= 0.8 else \"degraded\" if values[-1] >= 0.5 else \"critical\"\r\n        }\r\n\r\n    def dashboard(self) -> dict:\r\n        \"\"\"Generate a summary dashboard of all metrics.\"\"\"\r\n        return {\r\n            name: self.get_trend(name) for name in self.metrics\r\n        }\r\n\r\n# Define key quality metrics\r\nMETRICS = {\r\n    \"faithfulness\": \"What fraction of claims are supported by context\",\r\n    \"answer_relevance\": \"How relevant is the answer to the query (LLM-as-judge 1-10)\",\r\n    \"context_precision\": \"What fraction of retrieved chunks are actually used\",\r\n    \"context_recall\": \"What fraction of relevant chunks are retrieved\",\r\n    \"latency_p50\": \"Median end-to-end latency in ms\",\r\n    \"latency_p95\": \"95th percentile latency in ms\",\r\n    \"cost_per_query\": \"Average cost per query in USD\",\r\n    \"cache_hit_rate\": \"Fraction of queries served from cache\",\r\n    \"user_satisfaction\": \"User feedback score (thumbs up/down ratio)\",\r\n}\r\n\r\n# Usage\r\ntracker = QualityTracker()\r\ntracker.record(\"faithfulness\", 0.92, {\"model\": \"gpt-4o-mini\", \"dataset\": \"eval_v2\"})\r\ntracker.record(\"answer_relevance\", 8.5, {\"query_length\": 45})\r\ntracker.record(\"latency_p50\", 1200, {\"query\": \"complex_rag\"})\r\ntracker.record(\"cost_per_query\", 0.0032, {\"model\": \"gpt-4o-mini\"})\r\ntracker.record(\"cache_hit_rate\", 1.0, {\"model\": \"gpt-4o-mini\", \"cache_type\": \"semantic\"})\r\n\r\nprint(json.dumps(tracker.dashboard(), indent=2))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "119-ab-testing-for-model-selection",
      children: "11.9 A/B Testing for Model Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import uuid\r\nfrom datetime import datetime\r\n\r\nclass ModelABTest:\r\n    \"\"\"Compare two models on the same task with statistical rigor.\"\"\"\r\n\r\n    def __init__(self, model_a: str, model_b: str, task: str):\r\n        self.model_a = model_a\r\n        self.model_b = model_b\r\n        self.task = task\r\n        self.test_id = str(uuid.uuid4())[:8]\r\n        self.results: list[dict] = []\r\n        self.start_time = datetime.now()\r\n\r\n    def run_test(self, test_queries: list[str], eval_criteria: list[str], n_repeats: int = 1) -> dict:\r\n        \"\"\"Run A/B test comparing both models on the same queries.\"\"\"\r\n        judge = LLMJudge()\r\n\r\n        for query in test_queries:\r\n            for repeat in range(n_repeats):\r\n                # Model A\r\n                response_a = client.chat.completions.create(\r\n                    model=self.model_a,\r\n                    messages=[{\"role\": \"user\", \"content\": query}]\r\n                ).choices[0].message.content\r\n\r\n                score_a = judge.evaluate(query, response_a, dimensions=[\r\n                    ScoreDimension.CORRECTNESS, ScoreDimension.RELEVANCE\r\n                ])\r\n\r\n                # Model B\r\n                response_b = client.chat.completions.create(\r\n                    model=self.model_b,\r\n                    messages=[{\"role\": \"user\", \"content\": query}]\r\n                ).choices[0].message.content\r\n\r\n                score_b = judge.evaluate(query, response_b, dimensions=[\r\n                    ScoreDimension.CORRECTNESS, ScoreDimension.RELEVANCE\r\n                ])\r\n\r\n                self.results.append({\r\n                    \"query\": query[:50],\r\n                    \"repeat\": repeat,\r\n                    \"model_a_score\": score_a.overall_score,\r\n                    \"model_b_score\": score_b.overall_score,\r\n                    \"model_a_wins\": score_a.overall_score > score_b.overall_score,\r\n                    \"model_b_wins\": score_b.overall_score > score_a.overall_score,\r\n                    \"tie\": score_a.overall_score == score_b.overall_score,\r\n                })\r\n\r\n        return self.analyze()\r\n\r\n    def analyze(self) -> dict:\r\n        \"\"\"Statistical analysis of results.\"\"\"\r\n        a_wins = sum(1 for r in self.results if r[\"model_a_wins\"])\r\n        b_wins = sum(1 for r in self.results if r[\"model_b_wins\"])\r\n        ties = sum(1 for r in self.results if r[\"tie\"])\r\n\r\n        a_scores = [r[\"model_a_score\"] for r in self.results]\r\n        b_scores = [r[\"model_b_score\"] for r in self.results]\r\n\r\n        return {\r\n            \"test_id\": self.test_id,\r\n            \"task\": self.task,\r\n            \"model_a\": self.model_a,\r\n            \"model_b\": self.model_b,\r\n            \"samples\": len(self.results),\r\n            \"model_a_avg\": round(statistics.mean(a_scores), 2),\r\n            \"model_b_avg\": round(statistics.mean(b_scores), 2),\r\n            \"model_a_wins\": a_wins,\r\n            \"model_b_wins\": b_wins,\r\n            \"ties\": ties,\r\n            \"win_rate_a\": round(a_wins / len(self.results) * 100, 1),\r\n            \"win_rate_b\": round(b_wins / len(self.results) * 100, 1),\r\n            \"recommendation\": self.model_a if a_wins > b_wins else self.model_b,\r\n        }\r\n\r\n# Usage\r\nab_test = ModelABTest(\"gpt-4o-mini\", \"gpt-4o\", \"RAG answer generation\")\r\nqueries = [\r\n    \"What are the lease terms for commercial properties in Dubai Marina?\",\r\n    \"Compare cost of living between Abu Dhabi and Dubai for a family of 4.\",\r\n    \"What documents are required for a UAE residence visa?\",\r\n]\r\nreport = ab_test.run_test(queries, [\"correctness\", \"relevance\"], n_repeats=2)\r\nprint(f\"Model A ({report['model_a']}): {report['model_a_avg']} avg score\")\r\nprint(f\"Model B ({report['model_b']}): {report['model_b_avg']} avg score\")\r\nprint(f\"Winner: {report['recommendation']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ProjectScaffold { name: string; files: Array&lt;{path:string;content:string}&gt; }\r\nclass ProjectGenerator {\r\n  generateAIDemo(name: string): ProjectScaffold {\r\n    return {name,files:[\r\n      {path:\"src/index.ts\",content:`import {Agent} from \"./agent\"\\nconst agent = new Agent({model:\"gpt-4\",maxTokens:1024,temperature:0.7})\\nagent.run()`},\r\n      {path:\"src/agent.ts\",content:`export class Agent { constructor(private config: {model:string;maxTokens:number;temperature:number}) {}\\n  async run(): Promise<void> { console.log(\"Agent running with\",this.config) } }`},\r\n      {path:\"tsconfig.json\",content:JSON.stringify({compilerOptions:{target:\"ES2022\",module:\"NodeNext\",strict:true},include:[\"src\"]},null,2)},\r\n      {path:\"package.json\",content:JSON.stringify({name,dependencies:{openai:\"^4.0\"}},null,2)},\r\n      {path:\".env.example\",content:\"OPENAI_API_KEY=sk-...\"}\r\n    ]}\r\n  }\r\n  generateRAGDemo(name: string): ProjectScaffold {\r\n    return {name,files:[\r\n      {path:\"src/index.ts\",content:`import {RAGPipeline} from \"./rag\"\\nconst rag = new RAGPipeline()\\nrag.query(\"What is AI?\")`},\r\n      {path:\"src/rag.ts\",content:`export class RAGPipeline { async query(q:string): Promise<string> { return \"Result\" } }`}\r\n    ]}\r\n  }\r\n}\r\nexport { ProjectGenerator, ProjectScaffold }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Unit test suite:"
          }), " Write unit tests for your LangGraph agent covering: correct tool selection, state transitions, error states, and edge cases (empty input, missing state keys)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Integration test:"
          }), " Write 3 integration tests for your RAG pipeline: chunking boundary test, retrieval relevance test, generation faithfulness test."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LLM-as-judge:"
          }), " Build a judge agent and evaluate 5 RAG outputs on correctness, faithfulness, and relevance. Report scores and improvement suggestions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hallucination audit:"
          }), " Run the HallucinationDetector on 10 RAG outputs from your pipeline. Calculate the hallucination rate and identify patterns."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CI/CD eval:"
          }), " Create a GitHub Actions workflow that runs your eval suite on every PR. Set a quality gate of 7.0/10 minimum score."]
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