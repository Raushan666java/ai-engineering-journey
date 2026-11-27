"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["94193"], {
5226(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_08_agentic_rag_md_fd6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-08-agentic-rag-md-fd6.json
var site_docs_courses_ai_agent_engineer_agentic_ai_book_08_agentic_rag_md_fd6_namespaceObject = JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/08-agentic-rag","title":"Agentic RAG","description":"Naive RAG (what most tutorials teach, and likely what your current ChromaDB setup does): always retrieve top-K chunks for every query, stuff them into the","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/08-agentic-rag.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/08-agentic-rag","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/08-agentic-rag","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/ai-agent-engineer/agentic-ai-book/08-agentic-rag.md","tags":[],"version":"current","lastUpdatedAt":1795166609000,"sidebarPosition":9,"frontMatter":{"id":"08-agentic-rag","slug":"/ai-agent-engineer/agentic-ai-book/08-agentic-rag","title":"Agentic RAG","sidebar_label":"Agentic RAG","sidebar_position":9,"description":"Naive RAG (what most tutorials teach, and likely what your current ChromaDB setup does): always retrieve top-K chunks for every query, stuff them into the"},"sidebar":"course-ai-agent-engineer","previous":{"title":"LangGraph Deep Dive","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/07-langgraph-deep-dive"},"next":{"title":"Multi-Agent Systems","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/09-multi-agent-systems"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/ai-agent-engineer/agentic-ai-book/08-agentic-rag.md


const frontMatter = {
	id: '08-agentic-rag',
	slug: '/ai-agent-engineer/agentic-ai-book/08-agentic-rag',
	title: 'Agentic RAG',
	sidebar_label: 'Agentic RAG',
	sidebar_position: 9,
	description: 'Naive RAG (what most tutorials teach, and likely what your current ChromaDB setup does): always retrieve top-K chunks for every query, stuff them into the'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "8.1 Naive RAG vs. Agentic RAG",
  "id": "81-naive-rag-vs-agentic-rag",
  "level": 2
}, {
  "value": "8.2 Retrieval as a Tool, Not a Pipeline Step",
  "id": "82-retrieval-as-a-tool-not-a-pipeline-step",
  "level": 2
}, {
  "value": "8.3 Query Rewriting",
  "id": "83-query-rewriting",
  "level": 2
}, {
  "value": "8.4 Self-Correction Loop (Grade the Retrieval)",
  "id": "84-self-correction-loop-grade-the-retrieval",
  "level": 2
}, {
  "value": "8.5 Multi-Source Retrieval",
  "id": "85-multi-source-retrieval",
  "level": 2
}, {
  "value": "8.6 Milestone Project for This Chapter",
  "id": "86-milestone-project-for-this-chapter",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "81-naive-rag-vs-agentic-rag",
      children: "8.1 Naive RAG vs. Agentic RAG"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Naive RAG"
      }), " (what most tutorials teach, and likely what your current ChromaDB setup does): always retrieve top-K chunks for every query, stuff them into the prompt, generate an answer. Fixed pipeline, no decision-making."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agentic RAG"
      }), ": the model decides ", (0,jsx_runtime.jsx)(_components.em, {
        children: "whether"
      }), " to retrieve at all, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "what"
      }), " to search for (possibly rewriting the query), ", (0,jsx_runtime.jsx)(_components.em, {
        children: "evaluates"
      }), " whether what came back is actually useful, and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "iterates"
      }), " if not — all as tool-calling decisions inside the ReAct loop from Chapter 5."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-retrieval-as-a-tool-not-a-pipeline-step",
      children: "8.2 Retrieval as a Tool, Not a Pipeline Step"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "tools = [\n    {\n        \"name\": \"search_knowledge_base\",\n        \"description\": \"Semantic search over product documentation and past support tickets. Use only when the user's question requires specific factual/product knowledge you don't already have — not for small talk or general reasoning.\",\n        \"input_schema\": {\n            \"type\": \"object\",\n            \"properties\": {\"query\": {\"type\": \"string\"}},\n            \"required\": [\"query\"]\n        }\n    }\n]\n\ndef search_knowledge_base(query):\n    results = chroma_collection.query(query_texts=[query], n_results=5)\n    return results[\"documents\"][0]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Because it's a tool, the model can skip it entirely for questions that don't need it (\"hi, how are you\") — something a fixed always-retrieve pipeline can't do without extra hardcoded logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-query-rewriting",
      children: "8.3 Query Rewriting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Users' raw questions are often bad search queries. An agentic pattern: have the model rewrite the query ", (0,jsx_runtime.jsx)(_components.em, {
        children: "before"
      }), " searching, as an explicit reasoning step:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User asks: \"why did my thing break after the update\"\nRewritten query for search: \"product malfunction after software update troubleshooting\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can do this with a lightweight, cheap LLM call, or just prompt the main agent to always reformulate before calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "search_knowledge_base"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-self-correction-loop-grade-the-retrieval",
      children: "8.4 Self-Correction Loop (Grade the Retrieval)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The real power of agentic RAG: the agent evaluates whether the retrieved chunks actually answer the question, and re-searches if not."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "grading_prompt = \"\"\"\nQuestion: {question}\nRetrieved passages: {passages}\n\nDo these passages contain enough information to answer the question?\nRespond with only \"YES\" or \"NO\".\n\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wire this as an explicit step in your LangGraph graph: a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "grade_documents"
      }), " node after retrieval, with a conditional edge — if \"NO,\" route back to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rewrite_query"
      }), " node and search again (capped at 2-3 attempts before falling back to \"I don't have enough information\")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def grade_documents(state):\n    grade = client.messages.create(\n        model=\"claude-sonnet-4-6\", max_tokens=10,\n        messages=[{\"role\": \"user\", \"content\": grading_prompt.format(\n            question=state[\"question\"], passages=state[\"retrieved_docs\"])}]\n    )\n    return {\"retrieval_ok\": \"YES\" in grade.content[0].text}\n\ndef route_after_grading(state):\n    if state[\"retrieval_ok\"] or state[\"retry_count\"] >= 3:\n        return \"generate_answer\"\n    return \"rewrite_query\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-multi-source-retrieval",
      children: "8.5 Multi-Source Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real systems rarely have just one knowledge source. Give the agent multiple retrieval tools and let it choose:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "tools = [\n    {\"name\": \"search_product_docs\", \"description\": \"Search product documentation. Use for how-to and feature questions.\"},\n    {\"name\": \"search_past_tickets\", \"description\": \"Search resolved support tickets. Use for troubleshooting/error questions.\"},\n    {\"name\": \"query_order_database\", \"description\": \"Query the Laravel order database directly. Use for order status/billing questions — NOT a document search.\"},\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is exactly the shape of an ApexERP support agent: it must pick the right ", (0,jsx_runtime.jsx)(_components.em, {
        children: "kind"
      }), " of lookup, not just search one blob of text."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-milestone-project-for-this-chapter",
      children: "8.6 Milestone Project for This Chapter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Upgrade your existing ChromaDB/FastAPI memory server: add a grading step and a rewrite-and-retry loop (max 3 attempts) as a small LangGraph graph. Test it with a deliberately vague/bad query and confirm the agent rewrites and retries rather than returning a weak answer immediately."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
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

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
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

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);