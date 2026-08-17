"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[82557],{

/***/ 72070
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_38_interview_general_md_ffa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-38-interview-general-md-ffa.json
const site_docs_courses_laravel_38_interview_general_md_ffa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/38-interview-general","title":"Chapter 38: Laravel General Interview Q&A","description":"Previous Healthcare Interview Q&A","source":"@site/docs/courses/laravel/38-interview-general.md","sourceDirName":"courses/laravel","slug":"/laravel/38-interview-general","permalink":"/ai-engineering-journey/laravel/38-interview-general","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":38,"frontMatter":{"id":"38-interview-general","slug":"/laravel/38-interview-general","title":"Chapter 38: Laravel General Interview Q&A","sidebar_label":"Chapter 38: Laravel General Interview Q&A","sidebar_position":38},"sidebar":"course-laravel","previous":{"title":"Chapter 37: Enterprise Capstone → Multi-Agent Platform","permalink":"/ai-engineering-journey/laravel/37-enterprise-capstone"},"next":{"title":"Chapter 39: Healthcare Interview Q&A","permalink":"/ai-engineering-journey/laravel/39-interview-healthcare"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/38-interview-general.md


const frontMatter = {
	id: '38-interview-general',
	slug: '/laravel/38-interview-general',
	title: 'Chapter 38: Laravel General Interview Q&A',
	sidebar_label: 'Chapter 38: Laravel General Interview Q&A',
	sidebar_position: 38
};
const contentTitle = 'Chapter 38: Laravel General Interview Q&A';

const assets = {

};



const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "1. Laravel Fundamentals &amp; Architecture",
  "id": "1-laravel-fundamentals--architecture",
  "level": 2
}, {
  "value": "Q1: Explain the Laravel request lifecycle.",
  "id": "q1-explain-the-laravel-request-lifecycle",
  "level": 3
}, {
  "value": "Q2: What is the service container and how does dependency injection work?",
  "id": "q2-what-is-the-service-container-and-how-does-dependency-injection-work",
  "level": 3
}, {
  "value": "Q3: What is the difference between bind, singleton, and instance in the container?",
  "id": "q3-what-is-the-difference-between-bind-singleton-and-instance-in-the-container",
  "level": 3
}, {
  "value": "Q4: Explain middleware in Laravel → how to create and register it.",
  "id": "q4-explain-middleware-in-laravel--how-to-create-and-register-it",
  "level": 3
}, {
  "value": "Q5: What are service providers and what is their role?",
  "id": "q5-what-are-service-providers-and-what-is-their-role",
  "level": 3
}, {
  "value": "Q6: Explain named routes, route groups, and route model binding.",
  "id": "q6-explain-named-routes-route-groups-and-route-model-binding",
  "level": 3
}, {
  "value": "Q7: How does Eloquent&#39;s N+1 problem occur and how do you fix it?",
  "id": "q7-how-does-eloquents-n1-problem-occur-and-how-do-you-fix-it",
  "level": 3
}, {
  "value": "Q8: Explain all Eloquent relationship types with examples.",
  "id": "q8-explain-all-eloquent-relationship-types-with-examples",
  "level": 3
}, {
  "value": "Q9: What are accessors, mutators, and casts?",
  "id": "q9-what-are-accessors-mutators-and-casts",
  "level": 3
}, {
  "value": "Q10: How do you handle authentication and authorization in Laravel?",
  "id": "q10-how-do-you-handle-authentication-and-authorization-in-laravel",
  "level": 3
}, {
  "value": "Q11: Explain the differences between Sanctum and Passport.",
  "id": "q11-explain-the-differences-between-sanctum-and-passport",
  "level": 3
}, {
  "value": "Q12: What are gates and policies?",
  "id": "q12-what-are-gates-and-policies",
  "level": 3
}, {
  "value": "Q13: How does Blade work → sections, layouts, components?",
  "id": "q13-how-does-blade-work--sections-layouts-components",
  "level": 3
}, {
  "value": "Q14: Explain Laravel queues, jobs, and the queue worker lifecycle.",
  "id": "q14-explain-laravel-queues-jobs-and-the-queue-worker-lifecycle",
  "level": 3
}, {
  "value": "Q15: How do you handle failed jobs and retries?",
  "id": "q15-how-do-you-handle-failed-jobs-and-retries",
  "level": 3
}, {
  "value": "2. Advanced Laravel",
  "id": "2-advanced-laravel",
  "level": 2
}, {
  "value": "Q16: How do you build and version a RESTful API in Laravel?",
  "id": "q16-how-do-you-build-and-version-a-restful-api-in-laravel",
  "level": 3
}, {
  "value": "Q17: Explain API resources and collections.",
  "id": "q17-explain-api-resources-and-collections",
  "level": 3
}, {
  "value": "Q18: How does Laravel Reverb work for WebSockets?",
  "id": "q18-how-does-laravel-reverb-work-for-websockets",
  "level": 3
}, {
  "value": "Q19: How do you develop and distribute a Laravel package?",
  "id": "q19-how-do-you-develop-and-distribute-a-laravel-package",
  "level": 3
}, {
  "value": "Q20: Explain PHPUnit/PEST testing patterns in Laravel.",
  "id": "q20-explain-phpunitpest-testing-patterns-in-laravel",
  "level": 3
}, {
  "value": "Q21: How do you write HTTP tests and database tests?",
  "id": "q21-how-do-you-write-http-tests-and-database-tests",
  "level": 3
}, {
  "value": "Q22: What is Laravel Octane and how does it improve performance?",
  "id": "q22-what-is-laravel-octane-and-how-does-it-improve-performance",
  "level": 3
}, {
  "value": "Q23: Explain caching strategies in Laravel (drivers, tags, atomic locks).",
  "id": "q23-explain-caching-strategies-in-laravel-drivers-tags-atomic-locks",
  "level": 3
}, {
  "value": "Q24: How does Laravel Horizon help manage queues?",
  "id": "q24-how-does-laravel-horizon-help-manage-queues",
  "level": 3
}, {
  "value": "Q25: Explain Laravel Telescope and Pulse → what do they monitor?",
  "id": "q25-explain-laravel-telescope-and-pulse--what-do-they-monitor",
  "level": 3
}, {
  "value": "3. AI SDK",
  "id": "3-ai-sdk",
  "level": 2
}, {
  "value": "Q26: What is the Laravel AI SDK and what providers does it support?",
  "id": "q26-what-is-the-laravel-ai-sdk-and-what-providers-does-it-support",
  "level": 3
}, {
  "value": "Q27: How do you create an agent using php artisan make?",
  "id": "q27-how-do-you-create-an-agent-using-php-artisan-make",
  "level": 3
}, {
  "value": "Q28: Explain the difference between agents and tools.",
  "id": "q28-explain-the-difference-between-agents-and-tools",
  "level": 3
}, {
  "value": "Q29: How do you handle structured output from AI agents using JsonSchema?",
  "id": "q29-how-do-you-handle-structured-output-from-ai-agents-using-jsonschema",
  "level": 3
}, {
  "value": "Q30: What is the RemembersConversations trait and how does it work?",
  "id": "q30-what-is-the-remembersconversations-trait-and-how-does-it-work",
  "level": 3
}, {
  "value": "Q31: How do you stream responses from an AI agent?",
  "id": "q31-how-do-you-stream-responses-from-an-ai-agent",
  "level": 3
}, {
  "value": "Q32: How do you queue an agent for background execution?",
  "id": "q32-how-do-you-queue-an-agent-for-background-execution",
  "level": 3
}, {
  "value": "Q33: Explain how to create a custom tool with the AI SDK.",
  "id": "q33-explain-how-to-create-a-custom-tool-with-the-ai-sdk",
  "level": 3
}, {
  "value": "Q34: How do you integrate MCP tools with the AI SDK?",
  "id": "q34-how-do-you-integrate-mcp-tools-with-the-ai-sdk",
  "level": 3
}, {
  "value": "Q35: How does image generation work with the AI SDK?",
  "id": "q35-how-does-image-generation-work-with-the-ai-sdk",
  "level": 3
}, {
  "value": "Q36: How do you generate and query embeddings?",
  "id": "q36-how-do-you-generate-and-query-embeddings",
  "level": 3
}, {
  "value": "Q37: Explain how to build a RAG pipeline using the AI SDK.",
  "id": "q37-explain-how-to-build-a-rag-pipeline-using-the-ai-sdk",
  "level": 3
}, {
  "value": "Q38: How do you use the Reranking feature?",
  "id": "q38-how-do-you-use-the-reranking-feature",
  "level": 3
}, {
  "value": "Q39: How do you handle AI provider failover?",
  "id": "q39-how-do-you-handle-ai-provider-failover",
  "level": 3
}, {
  "value": "Q40: How do you test AI features in Laravel?",
  "id": "q40-how-do-you-test-ai-features-in-laravel",
  "level": 3
}, {
  "value": "4. MCP",
  "id": "4-mcp",
  "level": 2
}, {
  "value": "Q41: What is the Model Context Protocol and why was it created?",
  "id": "q41-what-is-the-model-context-protocol-and-why-was-it-created",
  "level": 3
}, {
  "value": "Q42: How do you create an MCP server in Laravel?",
  "id": "q42-how-do-you-create-an-mcp-server-in-laravel",
  "level": 3
}, {
  "value": "Q43: What is the difference between web servers and local servers in MCP?",
  "id": "q43-what-is-the-difference-between-web-servers-and-local-servers-in-mcp",
  "level": 3
}, {
  "value": "Q44: How do you create MCP tools with input/output schemas?",
  "id": "q44-how-do-you-create-mcp-tools-with-inputoutput-schemas",
  "level": 3
}, {
  "value": "Q45: What are MCP resources and prompts?",
  "id": "q45-what-are-mcp-resources-and-prompts",
  "level": 3
}, {
  "value": "Q46: How does MCP authentication work with OAuth and Sanctum?",
  "id": "q46-how-does-mcp-authentication-work-with-oauth-and-sanctum",
  "level": 3
}, {
  "value": "Q47: How do you build an MCP client in Laravel?",
  "id": "q47-how-do-you-build-an-mcp-client-in-laravel",
  "level": 3
}, {
  "value": "Q48: How do you test MCP servers?",
  "id": "q48-how-do-you-test-mcp-servers",
  "level": 3
}, {
  "value": "Q49: How does Boost integrate with MCP?",
  "id": "q49-how-does-boost-integrate-with-mcp",
  "level": 3
}, {
  "value": "Q50: What are MCP apps and how do they differ from tools?",
  "id": "q50-what-are-mcp-apps-and-how-do-they-differ-from-tools",
  "level": 3
}, {
  "value": "5. Search &amp; RAG",
  "id": "5-search--rag",
  "level": 2
}, {
  "value": "Q51: How do you implement full-text search in Laravel?",
  "id": "q51-how-do-you-implement-full-text-search-in-laravel",
  "level": 3
}, {
  "value": "Q52: What is pgvector and how do you use it in Laravel?",
  "id": "q52-what-is-pgvector-and-how-do-you-use-it-in-laravel",
  "level": 3
}, {
  "value": "Q53: How do you create HNSW indexes for vector search?",
  "id": "q53-how-do-you-create-hnsw-indexes-for-vector-search",
  "level": 3
}, {
  "value": "Q54: Explain how to use whereVectorSimilarTo for similarity queries.",
  "id": "q54-explain-how-to-use-wherevectorsimilarto-for-similarity-queries",
  "level": 3
}, {
  "value": "Q55: What is Laravel Scout and what engines does it support?",
  "id": "q55-what-is-laravel-scout-and-what-engines-does-it-support",
  "level": 3
}, {
  "value": "Q56: How do you build a complete RAG pipeline in Laravel?",
  "id": "q56-how-do-you-build-a-complete-rag-pipeline-in-laravel",
  "level": 3
}, {
  "value": "Q57: How do you combine keyword search with vector search?",
  "id": "q57-how-do-you-combine-keyword-search-with-vector-search",
  "level": 3
}, {
  "value": "Q58: How do you cache embeddings for performance?",
  "id": "q58-how-do-you-cache-embeddings-for-performance",
  "level": 3
}, {
  "value": "6. Boost &amp; Automation",
  "id": "6-boost--automation",
  "level": 2
}, {
  "value": "Q59: What is Laravel Boost and what does it provide?",
  "id": "q59-what-is-laravel-boost-and-what-does-it-provide",
  "level": 3
}, {
  "value": "Q60: How do you create custom AI guidelines with Boost?",
  "id": "q60-how-do-you-create-custom-ai-guidelines-with-boost",
  "level": 3
}, {
  "value": "Q61: How does Boost integrate with Cursor and Claude Code?",
  "id": "q61-how-does-boost-integrate-with-cursor-and-claude-code",
  "level": 3
}, {
  "value": "Q62: Explain event-driven automation patterns in Laravel.",
  "id": "q62-explain-event-driven-automation-patterns-in-laravel",
  "level": 3
}, {
  "value": "Q63: How do you build webhook-driven automation?",
  "id": "q63-how-do-you-build-webhook-driven-automation",
  "level": 3
}, {
  "value": "Q64: What is human-in-the-loop and how do you implement it?",
  "id": "q64-what-is-human-in-the-loop-and-how-do-you-implement-it",
  "level": 3
}, {
  "value": "7. System Design",
  "id": "7-system-design",
  "level": 2
}, {
  "value": "Q65: How do you scale Laravel to 1M+ users?",
  "id": "q65-how-do-you-scale-laravel-to-1m-users",
  "level": 3
}, {
  "value": "Q66: Explain multi-tenancy strategies in Laravel.",
  "id": "q66-explain-multi-tenancy-strategies-in-laravel",
  "level": 3
}, {
  "value": "Q67: What is CQRS and how do you implement it in Laravel?",
  "id": "q67-what-is-cqrs-and-how-do-you-implement-it-in-laravel",
  "level": 3
}, {
  "value": "Q68: Explain the service layer and repository patterns in Laravel.",
  "id": "q68-explain-the-service-layer-and-repository-patterns-in-laravel",
  "level": 3
}, {
  "value": "Q69: How do you design a multi-region Laravel deployment?",
  "id": "q69-how-do-you-design-a-multi-region-laravel-deployment",
  "level": 3
}, {
  "value": "Q70: How do you handle database sharding in Laravel?",
  "id": "q70-how-do-you-handle-database-sharding-in-laravel",
  "level": 3
}, {
  "value": "Q71: Explain caching cascade strategies for read-heavy workloads.",
  "id": "q71-explain-caching-cascade-strategies-for-read-heavy-workloads",
  "level": 3
}, {
  "value": "Q72: What are SLI, SLO, and SLA in the context of Laravel apps?",
  "id": "q72-what-are-sli-slo-and-sla-in-the-context-of-laravel-apps",
  "level": 3
}, {
  "value": "Q73: How do you implement disaster recovery for a Laravel app?",
  "id": "q73-how-do-you-implement-disaster-recovery-for-a-laravel-app",
  "level": 3
}, {
  "value": "Q74: Explain the Strangler Fig pattern for migrating from monolith to services.",
  "id": "q74-explain-the-strangler-fig-pattern-for-migrating-from-monolith-to-services",
  "level": 3
}, {
  "value": "8. Multi-Agent Systems",
  "id": "8-multi-agent-systems",
  "level": 2
}, {
  "value": "Q75: What is the supervisor/worker pattern for multi-agent systems?",
  "id": "q75-what-is-the-supervisorworker-pattern-for-multi-agent-systems",
  "level": 3
}, {
  "value": "Q76: How do you implement agent handoff in Laravel?",
  "id": "q76-how-do-you-implement-agent-handoff-in-laravel",
  "level": 3
}, {
  "value": "Q77: How do you run multiple agents in parallel using queues?",
  "id": "q77-how-do-you-run-multiple-agents-in-parallel-using-queues",
  "level": 3
}, {
  "value": "Q78: How do you manage shared state across agents?",
  "id": "q78-how-do-you-manage-shared-state-across-agents",
  "level": 3
}, {
  "value": "Q79: What are circuit breakers and how do you apply them to agents?",
  "id": "q79-what-are-circuit-breakers-and-how-do-you-apply-them-to-agents",
  "level": 3
}, {
  "value": "Q80: How do you handle agent orchestration with Laravel&#39;s Bus::chain?",
  "id": "q80-how-do-you-handle-agent-orchestration-with-laravels-buschain",
  "level": 3
}, {
  "value": "Q81: How do you implement agent observability (monitoring and logging)?",
  "id": "q81-how-do-you-implement-agent-observability-monitoring-and-logging",
  "level": 3
}, {
  "value": "Q82: How do you test multi-agent systems in Laravel?",
  "id": "q82-how-do-you-test-multi-agent-systems-in-laravel",
  "level": 3
}, {
  "value": "9. Business Automation",
  "id": "9-business-automation",
  "level": 2
}, {
  "value": "Q83: What is a business automation agent and how is it built?",
  "id": "q83-what-is-a-business-automation-agent-and-how-is-it-built",
  "level": 3
}, {
  "value": "Q84: How do you implement approval workflows with human-in-the-loop?",
  "id": "q84-how-do-you-implement-approval-workflows-with-human-in-the-loop",
  "level": 3
}, {
  "value": "Q85: How do you log and audit automated agent decisions?",
  "id": "q85-how-do-you-log-and-audit-automated-agent-decisions",
  "level": 3
}, {
  "value": "Q86: How do you build a scheduled report generation agent?",
  "id": "q86-how-do-you-build-a-scheduled-report-generation-agent",
  "level": 3
}, {
  "value": "Q87: How do you integrate external APIs with business automation agents?",
  "id": "q87-how-do-you-integrate-external-apis-with-business-automation-agents",
  "level": 3
}, {
  "value": "Q88: What are common failure modes for automated agents and how do you handle them?",
  "id": "q88-what-are-common-failure-modes-for-automated-agents-and-how-do-you-handle-them",
  "level": 3
}, {
  "value": "Q89: How do you handle agent timeout and retry policies?",
  "id": "q89-how-do-you-handle-agent-timeout-and-retry-policies",
  "level": 3
}, {
  "value": "Appendix: Additional Questions",
  "id": "appendix-additional-questions",
  "level": 2
}, {
  "value": "Q90: How does Laravel&#39;s pipeline pattern work?",
  "id": "q90-how-does-laravels-pipeline-pattern-work",
  "level": 3
}, {
  "value": "Q91: What is Laravel Prompts and when would you use it?",
  "id": "q91-what-is-laravel-prompts-and-when-would-you-use-it",
  "level": 3
}, {
  "value": "Q92: How do you handle media uploads and file storage in Laravel?",
  "id": "q92-how-do-you-handle-media-uploads-and-file-storage-in-laravel",
  "level": 3
}, {
  "value": "Q93: What is Laravel Pennant and how do you use feature flags?",
  "id": "q93-what-is-laravel-pennant-and-how-do-you-use-feature-flags",
  "level": 3
}, {
  "value": "Q94: How do you use Laravel PreCognition for proactive validation?",
  "id": "q94-how-do-you-use-laravel-precognition-for-proactive-validation",
  "level": 3
}, {
  "value": "Q95: What is Laravel Folio and how does it work?",
  "id": "q95-what-is-laravel-folio-and-how-does-it-work",
  "level": 3
}, {
  "value": "Q96: How do you use context in AI SDK agents for dynamic behavior?",
  "id": "q96-how-do-you-use-context-in-ai-sdk-agents-for-dynamic-behavior",
  "level": 3
}, {
  "value": "Q97: How do you build a custom Artisan command for AI operations?",
  "id": "q97-how-do-you-build-a-custom-artisan-command-for-ai-operations",
  "level": 3
}, {
  "value": "Q98: How does Laravel&#39;s deferred service providers work?",
  "id": "q98-how-does-laravels-deferred-service-providers-work",
  "level": 3
}, {
  "value": "Q99: What is the difference between events, listeners, and subscribers?",
  "id": "q99-what-is-the-difference-between-events-listeners-and-subscribers",
  "level": 3
}, {
  "value": "Q100: How do you implement rate limiting for AI agent calls?",
  "id": "q100-how-do-you-implement-rate-limiting-for-ai-agent-calls",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
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
        id: "chapter-38-laravel-general-interview-qa",
        children: "Chapter 38: Laravel General Interview Q&A"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/37-enterprise-capstone",
          children: "Enterprise Capstone — Multi-Agent Platform"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/39-interview-healthcare",
          children: "Healthcare Interview Q&A"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General Laravel interview questions across fundamentals, architecture, database, testing, and deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request lifecycle, service container, Eloquent ORM, queues, testing, Security, performance optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q&A format with practical code examples and explanations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP, Laravel, Eloquent, REST APIs, testing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Core Concepts]\n    B[Interview Questions]\n    C[Code Examples]\n    D[Best Practices]\n    E[Common Pitfalls]\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-laravel-fundamentals--architecture",
      children: "1. Laravel Fundamentals & Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/38-interview-general.png",
        alt: "Laravel General Interview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-the-laravel-request-lifecycle",
      children: "Q1: Explain the Laravel request lifecycle."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Every HTTP request enters via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "public/index.php"
      }), ", which loads Composer's autoloader and bootstraps the application. The HTTP kernel is resolved from the container and the request passes through global middleware. Service providers are registered and booted. The router matches the URI/method to a route. The request traverses the route middleware pipeline, then reaches the controller. The controller returns a Response, which travels back through middleware in reverse and is sent to the browser. Finally, terminable middleware runs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// public/index.php\n$kernel = $app->make(Illuminate\\Contracts\\Http\\Kernel::class);\n$response = $kernel->handle($request = Request::capture())->send();\n$kernel->terminate($request, $response);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-the-service-container-and-how-does-dependency-injection-work",
      children: "Q2: What is the service container and how does dependency injection work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The service container (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Illuminate\\Foundation\\Application"
      }), ") is Laravel's dependency injection container. It automatically resolves class dependencies by inspecting constructor type-hints. You register bindings with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bind()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "singleton()"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "instance()"
      }), ", and the container recursively resolves them. It can inject primitives using contextual binding and resolves interfaces to concrete implementations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "app()->bind(PaymentGateway::class, StripeGateway::class);\napp()->when(ReportController::class)->needs('$perPage')->give(25);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-difference-between-bind-singleton-and-instance-in-the-container",
      children: "Q3: What is the difference between bind, singleton, and instance in the container?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bind()"
      }), " registers a class or interface binding that resolves to a new instance every time. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "singleton()"
      }), " resolves to the same shared instance for the entire request lifecycle. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "instance()"
      }), " places an already-constructed object into the container, effectively replacing any future resolutions with that exact object."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "app()->bind(CartService::class);               // new each time\napp()->singleton(Logger::class, fn() => new FileLogger(storage_path('logs/laravel.log')));\napp()->instance(Request::class, $request);     // pre-built object\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-explain-middleware-in-laravel--how-to-create-and-register-it",
      children: "Q4: Explain middleware in Laravel → how to create and register it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Middleware filters HTTP requests entering and responses leaving the application. Create with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan make:middleware"
      }), ". Register globally in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$middleware"
      }), " property of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App\\Http\\Kernel"
      }), ", assign to route groups via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$middlewareGroups"
      }), ", or use named middleware via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$routeMiddleware"
      }), ". A middleware class implements ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle($request, Closure $next)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "public function handle(Request $request, Closure $next): Response\n{\n    if ($request->header('X-API-Key') !== config('app.api_key')) {\n        return response()->json(['error' => 'Unauthorized'], 401);\n    }\n    return $next($request);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-are-service-providers-and-what-is-their-role",
      children: "Q5: What are service providers and what is their role?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Service providers are the central bootstrapping mechanism. Every Laravel startup runs through providers listed in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/app.php"
      }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "register()"
      }), " method binds services into the container. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "boot()"
      }), " method runs after all providers have registered, so it can safely depend on other container bindings. Providers orchestrate everything → route loading, event registration, queue configuration, and AI SDK setup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class AppServiceProvider extends ServiceProvider\n{\n    public function register(): void\n    {\n        $this->app->singleton(SearchService::class);\n    }\n\n    public function boot(): void\n    {\n        Gate::define('view-reports', fn(User $user) => $user->is_admin);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-explain-named-routes-route-groups-and-route-model-binding",
      children: "Q6: Explain named routes, route groups, and route model binding."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Named routes assign a name for URL generation with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "route()"
      }), ". Route groups share attributes (prefix, middleware, controller namespace). Route model binding automatically injects Eloquent models into controller methods → implicit binding uses a type-hinted ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{model}"
      }), " parameter, explicit binding customizes the resolution via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Route::model()"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getRouteKeyName()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Route::get('/invoices/{invoice}', [InvoiceController::class, 'show'])\n    ->name('invoices.show');\n\nRoute::middleware('auth')->prefix('admin')->group(function () {\n    Route::resource('users', UserController::class);\n});\n\n// Implicit binding → Invoice model injected automatically\npublic function show(Invoice $invoice) { return $invoice; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-does-eloquents-n1-problem-occur-and-how-do-you-fix-it",
      children: "Q7: How does Eloquent's N+1 problem occur and how do you fix it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The N+1 problem happens when you loop over a collection and access a relationship within the loop, triggering a separate query per iteration. Fix it with eager loading using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "with()"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "load()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Problem: 1 query for posts + N queries for each post's author\nforeach (Post::all() as $post) { echo $post->author->name; }\n\n// Fix: 2 queries total using eager loading\n$posts = Post::with('author')->get();\nforeach ($posts as $post) { echo $post->author->name; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-explain-all-eloquent-relationship-types-with-examples",
      children: "Q8: Explain all Eloquent relationship types with examples."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hasOne"
      }), " (one-to-one), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hasMany"
      }), " (one-to-many), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "belongsTo"
      }), " (inverse), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "belongsToMany"
      }), " (many-to-many with pivot), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hasManyThrough"
      }), " (nested relationship through an intermediate model), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "morphOne"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "morphMany"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "morphToMany"
      }), " (polymorphic relationships where multiple models share a relation). Each returns a relationship instance that can be chained."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class User extends Model\n{\n    public function profile(): HasOne          { return $this->hasOne(Profile::class); }\n    public function posts(): HasMany           { return $this->hasMany(Post::class); }\n    public function roles(): BelongsToMany     { return $this->belongsToMany(Role::class); }\n    public function comments(): MorphMany      { return $this->morphMany(Comment::class, 'commentable'); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-are-accessors-mutators-and-casts",
      children: "Q9: What are accessors, mutators, and casts?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Accessors format attribute values when retrieved, mutators format them when set, and casts automate type conversion on Eloquent models. In Laravel 13, accessors/mutators use the new ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Attribute"
      }), " return type."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Accessor → modifies value on read\nprotected function fullName(): Attribute\n{\n    return Attribute::make(get: fn() => \"{$this->first_name} {$this->last_name}\");\n}\n\n// Mutator → modifies value on write\nprotected function password(): Attribute\n{\n    return Attribute::make(set: fn(string $value) => bcrypt($value));\n}\n\n// Cast → automatic type conversion\nprotected $casts = [\n    'is_admin' => 'boolean',\n    'metadata' => 'array',\n    'expires_at' => 'datetime',\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-how-do-you-handle-authentication-and-authorization-in-laravel",
      children: "Q10: How do you handle authentication and authorization in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Authentication verifies identity. Laravel provides starter kits (Breeze, Jetstream) that scaffold login, registration, and password reset. Under the hood, authentication uses guards (session for web, token/Sanctum for API) and providers (Eloquent, database). Authorization determines what an authenticated user can do. Laravel provides Gates (Closure-based) and Policies (class-based) for authorization logic, plus Blade directives (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@can"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@cannot"
      }), ") and middleware (", (0,jsx_runtime.jsx)(_components.code, {
        children: "can:"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Gate\nGate::define('edit-post', fn(User $user, Post $post) => $user->id === $post->user_id);\n\n// Policy method\npublic function update(User $user, Post $post): bool\n{\n    return $user->id === $post->user_id;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-explain-the-differences-between-sanctum-and-passport",
      children: "Q11: Explain the differences between Sanctum and Passport."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Sanctum is a lightweight API token authentication system supporting token-based auth for SPAs and simple API tokens for mobile apps. It pairs well with cookie-based session auth for first-party frontends. Passport implements OAuth2 → it provides client credentials, authorization codes, and personal access tokens. Sanctum is simpler and preferred for most Laravel applications; Passport is needed when you need a full OAuth2 server for third-party clients."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Sanctum → issue a token\n$token = $user->createToken('api-token')->plainTextToken;\n\n// Passport → via OAuth2 flow\n$response = $client->post('oauth/token', [\n    'grant_type' => 'client_credentials',\n    'client_id' => $clientId,\n    'client_secret' => $secret,\n]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-what-are-gates-and-policies",
      children: "Q12: What are gates and policies?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Gates are Closure-based authorization checks defined in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App\\Providers\\AuthServiceProvider"
      }), ". Policies are class-based authorization organized around a model. Both support ", (0,jsx_runtime.jsx)(_components.code, {
        children: "before()"
      }), " hooks that run before all other checks (useful for super-admins). Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Gate::allows()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$user->can()"
      }), ", or middleware."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Policy\nclass PostPolicy\n{\n    public function update(User $user, Post $post): bool\n    {\n        return $user->id === $post->user_id;\n    }\n}\n\n// In controller\npublic function update(Request $request, Post $post)\n{\n    $this->authorize('update', $post);\n    // or: Gate::authorize('update', $post);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-how-does-blade-work--sections-layouts-components",
      children: "Q13: How does Blade work → sections, layouts, components?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Blade provides three approaches for reusable templates. Sections with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@extends"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@section"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "@yield"
      }), " define a parent layout and child fills sections. Components use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@component"
      }), " (legacy) or class-based components with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan make:component"
      }), ". Anonymous components use ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".blade.php"
      }), " files in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "resources/views/components/"
      }), ". X-components are auto-registered and rendered via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<x-alert type=\"error\" />"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "{{-- layouts/app.blade.php --}}\n<html><body>@yield('content')</body></html>\n\n{{-- child.blade.php --}}\n@extends('layouts.app')\n@section('content') <h1>Hello</h1> @endsection\n\n{{-- Component --}}\n// resources/views/components/alert.blade.php\n<div class=\"alert alert-{{ $type }}\">{{ $slot }}</div>\n// Usage: <x-alert type=\"error\">Something went wrong</x-alert>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-explain-laravel-queues-jobs-and-the-queue-worker-lifecycle",
      children: "Q14: Explain Laravel queues, jobs, and the queue worker lifecycle."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Queues defer time-consuming tasks (email, report generation) to run asynchronously. Jobs are classes that implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ShouldQueue"
      }), " and contain a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle()"
      }), " method. Dispatch via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dispatch()"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dispatch()->onQueue()"
      }), ". The queue worker (", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan queue:work"
      }), ") polls the queue connection (database, Redis, SQS) for new jobs, processes them, then sleeps briefly before polling again. Failed jobs are stored in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "failed_jobs"
      }), " table for retry or inspection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ProcessPodcast implements ShouldQueue\n{\n    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;\n\n    public function handle(): void\n    {\n        // Time-consuming work here → runs in the queue worker\n    }\n}\n\n// Dispatch\nProcessPodcast::dispatch($podcast)->onQueue('high');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-how-do-you-handle-failed-jobs-and-retries",
      children: "Q15: How do you handle failed jobs and retries?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Jobs that throw an exception are automatically released back onto the queue for retry. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$tries"
      }), " property or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "retryUntil()"
      }), " method control retry count. Failed jobs are stored in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "failed_jobs"
      }), " table. Inspect with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan queue:failed"
      }), ", retry with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "queue:retry"
      }), ", and prune with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "queue:prune-failed"
      }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "failed()"
      }), " method on the job for custom cleanup. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "attempts()"
      }), " method checks retry count."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ProcessPodcast implements ShouldQueue\n{\n    public $tries = 3;\n\n    public function backoff(): array\n    {\n        return [2, 10, 30]; // seconds between retries\n    }\n\n    public function failed(Throwable $e): void\n    {\n        Log::error('Podcast processing failed', ['podcast' => $this->podcast->id]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-advanced-laravel",
      children: "2. Advanced Laravel"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-how-do-you-build-and-version-a-restful-api-in-laravel",
      children: "Q16: How do you build and version a RESTful API in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan make:controller Api/V1/PostController --api"
      }), " for resource controllers without create/edit views. Define routes in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "routes/api.php"
      }), " grouped by version prefix. Apply API middleware (", (0,jsx_runtime.jsx)(_components.code, {
        children: "throttle:api"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auth:sanctum"
      }), "). Version via URI path (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/api/v1/posts"
      }), ") or request header (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Accept: application/vnd.app.v1+json"
      }), "). Use API resources for response transformation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// routes/api.php\nRoute::prefix('v1')->group(function () {\n    Route::apiResource('posts', V1\\PostController::class)->middleware('auth:sanctum');\n});\n\nRoute::prefix('v2')->group(function () {\n    Route::apiResource('posts', V2\\PostController::class);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-explain-api-resources-and-collections",
      children: "Q17: Explain API resources and collections."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " API resources transform Eloquent models into JSON responses. Generate with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan make:resource"
      }), ". Single models use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserResource::make($user)"
      }), ", collections use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserResource::collection($users)"
      }), ". Conditional attributes (", (0,jsx_runtime.jsx)(_components.code, {
        children: "when"
      }), "), relationship inclusion (", (0,jsx_runtime.jsx)(_components.code, {
        children: "whenLoaded"
      }), "), and sparse fieldsets are supported. In Laravel 13, the JSON:API resource format is the default, following the JSON:API specification with type/id/data structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class UserResource extends JsonResource\n{\n    public function toArray(Request $request): array\n    {\n        return [\n            'id' => $this->id,\n            'name' => $this->name,\n            'email' => $this->when($request->user()->is_admin, $this->email),\n            'posts' => PostResource::collection($this->whenLoaded('posts')),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-how-does-laravel-reverb-work-for-websockets",
      children: "Q18: How does Laravel Reverb work for WebSockets?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Laravel Reverb is a first-party, Laravel-native WebSocket server written in PHP. It replaces Pusher for self-hosted real-time broadcasting. Install via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan install:reverb"
      }), ", configure the ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), " settings for apps and ports, then run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan reverb:start"
      }), ". Laravel events broadcast via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ShouldBroadcast"
      }), " and the Echo client receives them. Reverb supports presence channels (user-aware websocket rooms) and private channels with authentication callbacks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class OrderShipped implements ShouldBroadcast\n{\n    public function broadcastOn(): Channel\n    {\n        return new PrivateChannel('orders.'.$this->order->user_id);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-how-do-you-develop-and-distribute-a-laravel-package",
      children: "Q19: How do you develop and distribute a Laravel package?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Create a package structure under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/"
      }), " during development with a service provider, config, migrations, and routes. Register it in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.json"
      }), "'s ", (0,jsx_runtime.jsx)(_components.code, {
        children: "autoload.psr-4"
      }), ". For distribution, publish to Packagist with proper ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.json"
      }), " metadata including ", (0,jsx_runtime.jsx)(_components.code, {
        children: "require"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "autoload"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extra.laravel.providers"
      }), " for automatic discovery. Packages use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan vendor:publish"
      }), " to expose config and migration files."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Service provider\nclass AnalyticsServiceProvider extends ServiceProvider\n{\n    public function register(): void\n    {\n        $this->mergeConfigFrom(__DIR__.'/../config/analytics.php', 'analytics');\n    }\n\n    public function boot(): void\n    {\n        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');\n        $this->publishes([__DIR__.'/../config/analytics.php' => config_path('analytics.php')]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-explain-phpunitpest-testing-patterns-in-laravel",
      children: "Q20: Explain PHPUnit/PEST testing patterns in Laravel."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Laravel supports both PHPUnit (traditional) and PEST (fluent, function-based). PEST provides higher-level helpers like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "post()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assertDatabaseHas()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assertStatus()"
      }), ". Tests live in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tests/Feature"
      }), " (integration) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tests/Unit"
      }), " (isolated). Factories generate test data. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RefreshDatabase"
      }), " resets state between runs. Pest uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "it()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "test()"
      }), " functions with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expect()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->toBe()"
      }), " matchers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// PEST test\nit('creates a new post', function () {\n    $user = User::factory()->create();\n\n    $response = $this->actingAs($user)->post('/posts', [\n        'title' => 'My Post',\n        'body' => 'Content here',\n    ]);\n\n    $response->assertStatus(201);\n    $this->assertDatabaseHas('posts', ['title' => 'My Post']);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q21-how-do-you-write-http-tests-and-database-tests",
      children: "Q21: How do you write HTTP tests and database tests?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " HTTP tests use methods like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "post()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "put()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "delete()"
      }), " with assertions for status, JSON structure, session, and headers. Database tests use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assertDatabaseHas()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assertDatabaseMissing()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assertDatabaseCount()"
      }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RefreshDatabase"
      }), " trait wraps each test in a database transaction. Factories create models with sensible defaults. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withoutMiddleware()"
      }), " to skip middleware for isolated controller tests."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "it('updates user profile', function () {\n    $user = User::factory()->create();\n\n    $response = $this->actingAs($user)->put('/profile', [\n        'name' => 'Updated Name',\n        'email' => 'new@example.com',\n    ]);\n\n    $response->assertSessionHas('status', 'profile-updated');\n    $this->assertDatabaseHas('users', [\n        'id' => $user->id,\n        'name' => 'Updated Name',\n    ]);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q22-what-is-laravel-octane-and-how-does-it-improve-performance",
      children: "Q22: What is Laravel Octane and how does it improve performance?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Laravel Octane boots the application once into memory using Swoole or RoadRunner, then serves multiple requests from the same booted instance. This eliminates bootstrapping overhead (config loading, service provider registration) on every request. Octane provides a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WebSocket"
      }), " server, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Concurrency"
      }), " facade for parallel execution, and automatic ticker support. Deploy with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan octane:start --server=swoole --host=0.0.0.0 --port=8080"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Concurrency → run tasks in parallel\nuse Laravel\\Octane\\Facades\\Concurrency;\n\n[$users, $orders] = Concurrency::run([\n    fn() => User::count(),\n    fn() => Order::sum('total'),\n]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-explain-caching-strategies-in-laravel-drivers-tags-atomic-locks",
      children: "Q23: Explain caching strategies in Laravel (drivers, tags, atomic locks)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Laravel supports file, database, Redis, DynamoDB, and array cache drivers. Cache tags group related cache items (Redis/Memcached only) for mass invalidation. Atomic locks provide distributed locking via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Cache::lock('key')->get()"
      }), " → use them for critical sections (deployments, payment processing). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Cache::touch()"
      }), " in Laravel 13 extends TTL automatically on access for frequently used keys."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Tagged cache\nCache::tags(['posts', 'users'])->put('stats', $data, 3600);\nCache::tags(['posts'])->flush(); // invalidate only posts tag\n\n// Atomic lock\n$lock = Cache::lock('processing-order-'.$order->id, 10);\nif ($lock->get()) {\n    // Process order...\n    $lock->release();\n}\n\n// TTL extension on access (Laravel 13)\nCache::put('popular-posts', $posts, 60, touch: true);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-how-does-laravel-horizon-help-manage-queues",
      children: "Q24: How does Laravel Horizon help manage queues?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Horizon provides a dashboard and configuration for Redis-backed queues. It shows job status (running, completed, failed, recent), queue metrics (throughput, wait time), and per-worker monitoring. Configuration in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/horizon.php"
      }), " defines worker pools (balanced across queues) and deployment-specific environments. Run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan horizon"
      }), " to start workers and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/horizon"
      }), " route for the dashboard."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/horizon.php → worker pool\n'environments' => [\n    'production' => [\n        'supervisor-1' => [\n            'connection' => 'redis',\n            'queue' => ['high', 'default', 'low'],\n            'balance' => 'auto',\n            'minProcesses' => 1,\n            'maxProcesses' => 10,\n            'tries' => 3,\n        ],\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-explain-laravel-telescope-and-pulse--what-do-they-monitor",
      children: "Q25: Explain Laravel Telescope and Pulse → what do they monitor?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Telescope is a debug assistant that monitors incoming requests, commands, scheduled tasks, dumped data, queries (with bindings), mail, notifications, cache operations, jobs, logs, events, and exceptions. Run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan telescope:install"
      }), " and visit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/telescope"
      }), ". Pulse provides real-time application health dashboards with system metrics (CPU, memory), slow queries, cache hits/misses, queue throughput, usage tracking, and custom cards. Pulse is production-safe and uses a Redis stream for minimal overhead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Telescope → record custom entry\nTelescope::record(new CustomEntry('ai-agent', ['prompt' => $prompt, 'tokens' => $tokens]));\n\n// Pulse → custom card registration in config/pulse.php\n'recorders' => [\n    \\Laravel\\Pulse\\Recorders\\SlowJobs::class => ['threshold' => 1000],\n    \\Laravel\\Pulse\\Recorders\\SlowQueries::class => ['threshold' => 100],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-ai-sdk",
      children: "3. AI SDK"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q26-what-is-the-laravel-ai-sdk-and-what-providers-does-it-support",
      children: "Q26: What is the Laravel AI SDK and what providers does it support?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "laravel/ai"
      }), " package is a unified, provider-agnostic PHP SDK for interacting with AI services. It abstracts text generation, embeddings, image generation, audio, and transcription behind a single fluent API. Install via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer require laravel/ai"
      }), ". It supports over fourteen providers: Anthropic, OpenAI, Google Gemini, Amazon Bedrock, Azure OpenAI, Groq, xAI, DeepSeek, Mistral, Ollama, OpenRouter, Cohere, Jina, VoyageAI, and ElevenLabs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Provider-agnostic text generation\n$response = Ai::text('Explain quantum computing in one sentence');\n// Swap providers by changing env → no code changes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q27-how-do-you-create-an-agent-using-php-artisan-make",
      children: "Q27: How do you create an agent using php artisan make:agent?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan make:agent"
      }), " command scaffolds an AI agent class in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app/Ai/Agents/"
      }), ". The generated class implements the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Agent"
      }), " contract and uses the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Promptable"
      }), " trait. You define the agent's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "instructions()"
      }), " method to set its system prompt. Agents are invoked via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Agent::chat()"
      }), " which handles tool execution, conversation context, and structured output automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// php artisan make:agent SupportAgent\nclass SupportAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): Stringable|string\n    {\n        return 'You are a support agent that answers customer questions about our SaaS platform. Be concise and helpful.';\n    }\n}\n\n// Usage\n$response = Agent::chat(new SupportAgent)->send('How do I reset my password?');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q28-explain-the-difference-between-agents-and-tools",
      children: "Q28: Explain the difference between agents and tools."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Agents are AI-powered classes that process user prompts, maintain conversational context, and decide which tools to invoke. They contain system instructions and can choose to use zero or more tools to fulfill a request. Tools are discrete, stateless functions that an agent can call → they perform a specific action (look up a user, send an email, query the database). An agent orchestrates; a tool executes. Agents use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Promptable"
      }), "; tools implement the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tool"
      }), " contract with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle()"
      }), " method."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Agent → orchestrates, makes decisions\nclass ResearchAgent implements Agent { use Promptable; }\n\n// Tool → executes a specific action\nclass LookupUserTool implements Tool\n{\n    public function handle(ToolInput $input): mixed\n    {\n        return User::find($input->get('user_id'));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q29-how-do-you-handle-structured-output-from-ai-agents-using-jsonschema",
      children: "Q29: How do you handle structured output from AI agents using JsonSchema?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Structured output forces the AI to return data in a defined JSON schema using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JsonSchema"
      }), " builder. The agent's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "output()"
      }), " method or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->output()"
      }), " on the chat chain defines the expected shape with typed properties, nested objects, arrays, enums, and descriptions. The SDK validates the response against the schema and returns hydrated PHP objects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class InvoiceExtractor implements Agent\n{\n    use Promptable;\n\n    public function output(): JsonSchema\n    {\n        return JsonSchema::object()\n            ->property('invoice_number', JsonSchema::string()->description('The invoice reference'))\n            ->property('total', JsonSchema::float()->description('Total amount in USD'))\n            ->property('line_items', JsonSchema::array(\n                JsonSchema::object()\n                    ->property('description', JsonSchema::string())\n                    ->property('amount', JsonSchema::float())\n            ));\n    }\n}\n\n$result = Agent::chat(new InvoiceExtractor)->send('Extract from this PDF...');\necho $result->total; // typed float\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q30-what-is-the-remembersconversations-trait-and-how-does-it-work",
      children: "Q30: What is the RemembersConversations trait and how does it work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RemembersConversations"
      }), " trait persists multi-turn conversations to the database using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "agent_conversations"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "agent_conversation_messages"
      }), " tables. Each agent instance gets a conversation ID that carries message history across requests. The trait passes the full conversation history to the AI on every call, enabling coherent multi-turn dialogue. History is automatically pruned to fit within the model's context window."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ChatbotAgent implements Agent\n{\n    use Promptable, RemembersConversations;\n}\n\n// First turn → conversation created\n$response1 = Agent::chat(new ChatbotAgent)->send('Hi, my name is Alice');\n// Second turn → same conversation continues\n$response2 = Agent::chat(new ChatbotAgent)->conversation($conversationId)->send('What is my name?');\n// The agent remembers \"Alice\" from the persisted history\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q31-how-do-you-stream-responses-from-an-ai-agent",
      children: "Q31: How do you stream responses from an AI agent?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->stream()"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->send()"
      }), " to receive a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReadableStream"
      }), " of text chunks. Each chunk is yielded as it arrives from the provider. This powers real-time UIs with streaming text. For broadcasting, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->broadcast()"
      }), " to send streamed chunks to a Reverb channel, enabling server-sent streaming to frontend clients over WebSockets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Direct streaming\n$stream = Agent::chat(new WriterAgent)->stream('Write a story about a robot');\n\nforeach ($stream->chunks() as $chunk) {\n    echo $chunk->text; // yield progressively\n}\n\n// Broadcasting via Reverb\nAgent::chat(new WriterAgent)->broadcast()->stream('Write a story...');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q32-how-do-you-queue-an-agent-for-background-execution",
      children: "Q32: How do you queue an agent for background execution?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->queue()"
      }), " on the agent chat chain to dispatch execution to Laravel's queue worker. The agent processes asynchronously and the result can be polled or delivered via notification. Queueing is useful for long-running agent tasks like document analysis, report generation, or batch processing. The job is serialized and runs within a queue worker process."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Dispatch agent to queue\nAgent::chat(new DocumentAnalyzer)\n    ->queue()\n    ->onQueue('ai')\n    ->send('Analyze this 100-page document...');\n\n// The agent processes in background → use events or polling to get the result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q33-explain-how-to-create-a-custom-tool-with-the-ai-sdk",
      children: "Q33: Explain how to create a custom tool with the AI SDK."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Generate a tool with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan make:tool"
      }), ". The class implements the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tool"
      }), " contract with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "description()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inputSchema()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle()"
      }), " methods. The input schema defines parameters the AI can pass, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle()"
      }), " receives the parsed input and returns a value back to the agent. Tools can be bound to an agent or provided globally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// php artisan make:tool WeatherTool\nclass WeatherTool implements Tool\n{\n    public function name(): string { return 'get_weather'; }\n    public function description(): string { return 'Get current weather for a city'; }\n    public function inputSchema(): array\n    {\n        return ['city' => ['type' => 'string', 'description' => 'City name']];\n    }\n    public function handle(ToolInput $input): mixed\n    {\n        return Http::get(\"https://api.weather.com/current/{$input->get('city')}\")->json();\n    }\n}\n\n$response = Agent::chat(new TravelAgent)->tools([new WeatherTool])->send('Should I bring an umbrella to London?');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q34-how-do-you-integrate-mcp-tools-with-the-ai-sdk",
      children: "Q34: How do you integrate MCP tools with the AI SDK?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The AI SDK can import tools from MCP servers using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Ai::fetchTools('mcp-server-name')"
      }), " or the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FetchesTools"
      }), " trait on an agent. This discovers all tools exposed by the MCP server and makes them available to the agent without writing local tool classes. Tools are fetched by name and merged into the agent's tool set."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// In an agent using the FetchesTools trait\nclass DashboardAgent implements Agent\n{\n    use Promptable, FetchesTools;\n\n    public function fetchTools(): array\n    {\n        return [\n            Ai::fetchTools('sales-analytics'),    // MCP server tools\n            Ai::fetchTools('inventory-manager'),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q35-how-does-image-generation-work-with-the-ai-sdk",
      children: "Q35: How does image generation work with the AI SDK?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The SDK provides a fluent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Image"
      }), " facade for image generation. Configure the provider (OpenAI DALL-E, Bedrock, etc.) in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/ai.php"
      }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Image::of()->generate()"
      }), " with a description. The result contains the image URL or base64 data. Options include size, quality, and style parameters depending on the provider."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$image = Image::of()\n    ->description('A serene mountain landscape at sunset with a small cabin')\n    ->size('1024x1024')\n    ->generate();\n\necho $image->url; // https://...generated-image.png\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q36-how-do-you-generate-and-query-embeddings",
      children: "Q36: How do you generate and query embeddings?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Embeddings convert text to high-dimensional vectors. Generate them with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Str::toEmbeddings('text')"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Embeddings::for('text')"
      }), ". Store the vector in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vector"
      }), " column (pgvector) or Redis. Query using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "whereVectorSimilarTo()"
      }), " on an Eloquent model with a trained column. The SDK supports multiple embedding providers and models."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Generate embeddings\n$vector = Str::toEmbeddings('What is Laravel?');\n\n// Store with model\n$doc = Document::create([\n    'content' => 'Laravel is a PHP framework...',\n    'embedding' => $vector,\n]);\n\n// Query similar\n$results = Document::query()\n    ->whereVectorSimilarTo('embedding', Str::toEmbeddings('PHP frameworks'))\n    ->limit(5)\n    ->get();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q37-explain-how-to-build-a-rag-pipeline-using-the-ai-sdk",
      children: "Q37: Explain how to build a RAG pipeline using the AI SDK."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A RAG (Retrieval-Augmented Generation) pipeline retrieves relevant context from a vector store and injects it into the prompt. Steps: (1) Chunk documents, (2) Generate embeddings per chunk, (3) Store in pgvector, (4) On user query, embed the query and find similar chunks, (5) Pass chunks as context to the AI agent. The AI SDK's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SimilaritySearchTool"
      }), " automates steps 4-5."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class RagAgent implements Agent\n{\n    use Promptable;\n\n    public function tools(): array\n    {\n        return [\n            new SimilaritySearchTool(Document::class, 'embedding', numResults: 3),\n        ];\n    }\n\n    public function instructions(): Stringable|string\n    {\n        return 'You answer questions about company policies. Use the similarity_search tool to find relevant documents before answering.';\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q38-how-do-you-use-the-reranking-feature",
      children: "Q38: How do you use the Reranking feature?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Reranking improves search relevance by reordering initial results using a cross-encoder model. The AI SDK provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Reranking::of()"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collection::rerank()"
      }), " to apply reranking to a result set. Reranking considers query-document pair similarity more accurately than embedding cosine similarity alone. It works with any result set and supports limiting the final count."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Using Reranking facade\n$results = Document::query()\n    ->whereVectorSimilarTo('embedding', Str::toEmbeddings('company vacation policy'))\n    ->limit(20)\n    ->get();\n\n$reranked = Reranking::of($results, 'How many vacation days do I get?')\n    ->limit(5)\n    ->rerank();\n\n// Using Eloquent collection\n$reranked = $results->rerank('How many vacation days do I get?')->take(5);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q39-how-do-you-handle-ai-provider-failover",
      children: "Q39: How do you handle AI provider failover?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The SDK supports failover providers via configuration. If the primary provider returns an error or times out, the SDK automatically tries the next configured provider. Failover is configured in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/ai.php"
      }), " using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fallback"
      }), " key with a list of alternative provider/model pairs. This ensures high availability for AI-dependent features."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/ai.php\n'defaults' => [\n    'text' => [\n        'provider' => env('AI_TEXT_PROVIDER', 'anthropic'),\n        'model' => env('AI_TEXT_MODEL', 'claude-sonnet-4-20250514'),\n        'fallback' => [\n            ['provider' => 'openai', 'model' => 'gpt-4o'],\n            ['provider' => 'groq', 'model' => 'llama-3.3-70b'],\n        ],\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q40-how-do-you-test-ai-features-in-laravel",
      children: "Q40: How do you test AI features in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The AI SDK provides testing helpers via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Ai::fake()"
      }), " that prevent real API calls during tests. Pass an array of fake responses keyed by prompt. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assertAgentSent()"
      }), " to verify the agent was called with expected prompts. Tools can be mocked like any other class. For integration tests, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withHeaders()"
      }), " to simulate AI-specific request data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "it('generates a summary', function () {\n    Ai::fake([\n        'Please summarize this document' => 'This is the fake summary.',\n    ]);\n\n    $response = Agent::chat(new SummaryAgent)->send('Please summarize this document');\n\n    expect($response->text)->toBe('This is the fake summary.');\n    Ai::assertAgentSent(SummaryAgent::class, 1);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-mcp",
      children: "4. MCP"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q41-what-is-the-model-context-protocol-and-why-was-it-created",
      children: "Q41: What is the Model Context Protocol and why was it created?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Model Context Protocol (MCP) is an open standard created by Anthropic for connecting AI applications with external tools, data sources, and services. It defines a JSON-RPC-based protocol where an MCP server exposes tools, resources, and prompts to an MCP client (the AI host). It was created to solve the fragmentation problem → every AI framework had its own tool integration. MCP provides a single, standardized protocol that any MCP-compatible client can use to interact with any MCP server."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q42-how-do-you-create-an-mcp-server-in-laravel",
      children: "Q42: How do you create an MCP server in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Install the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "laravel/mcp"
      }), " package, then use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan make:mcp-server ServerName"
      }), ". The generated class extends the MCP server base and defines available tools, resources, and authentication. Run the server via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan mcp:serve"
      }), " for local development or deploy as a web endpoint. Servers automatically register with Laravel's service container."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// php artisan make:mcp-server SalesAnalytics\nclass SalesAnalytics extends McpServer\n{\n    protected string $name = 'sales-analytics';\n\n    protected function tools(): array\n    {\n        return [\n            new GetRevenueTool(),\n            new TopProductsTool(),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q43-what-is-the-difference-between-web-servers-and-local-servers-in-mcp",
      children: "Q43: What is the difference between web servers and local servers in MCP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "local server"
      }), " runs as a subprocess (via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan mcp:serve"
      }), ") and communicates over STDIO. It is used for development, CLI tools, and local AI assistants like Claude Code or Cursor → it sends JSON-RPC messages over standard input/output. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "web server"
      }), " runs as an HTTP endpoint exposed via routes and communicates over HTTP/SSE. Web servers support authentication (OAuth, Sanctum), are deployed to production, and can be used by remote clients. Both expose the same server interface."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Local server → STDIO transport\n// Run: php artisan mcp:serve sales-analytics\n\n// Web server → HTTP transport\n// Register in routes/mcp.php\nMcp::server('sales-analytics', SalesAnalytics::class);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q44-how-do-you-create-mcp-tools-with-inputoutput-schemas",
      children: "Q44: How do you create MCP tools with input/output schemas?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan make:mcp-tool ToolName"
      }), ". The tool class defines ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "description()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inputSchema()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "outputSchema()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle()"
      }), ". Schemas use JSON Schema format to describe parameters and return values. The AI host uses the schema to determine what arguments to pass."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class GetRevenueTool implements McpTool\n{\n    public function name(): string { return 'get_revenue'; }\n    public function description(): string { return 'Get revenue for a date range'; }\n    public function inputSchema(): array\n    {\n        return [\n            'type' => 'object',\n            'properties' => [\n                'start' => ['type' => 'string', 'format' => 'date'],\n                'end' => ['type' => 'string', 'format' => 'date'],\n            ],\n            'required' => ['start', 'end'],\n        ];\n    }\n    public function handle(array $input): array\n    {\n        $revenue = Order::whereBetween('created_at', [$input['start'], $input['end']])->sum('total');\n        return ['total' => $revenue, 'currency' => 'USD'];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q45-what-are-mcp-resources-and-prompts",
      children: "Q45: What are MCP resources and prompts?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resources"
      }), " expose data to the AI host in a URI-addressable way → like files in a virtual filesystem. Each resource has a URI scheme and content type. The AI reads resources for context. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompts"
      }), " are reusable message templates that the host can present to the user. They define structured interactions with parameterized inputs. Both are defined alongside tools in an MCP server."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Resource → exposes data by URI\nprotected function resources(): array\n{\n    return [\n        Resource::make('company://policies/vacation')\n            ->name('Vacation Policy')\n            ->mimeType('text/markdown')\n            ->handler(fn() => file_get_contents(storage_path('policies/vacation.md'))),\n    ];\n}\n\n// Prompt → reusable template\nprotected function prompts(): array\n{\n    return [\n        Prompt::make('summarize-order')\n            ->description('Summarize an order for customer support')\n            ->arguments(['order_id' => ['type' => 'integer']])\n            ->handler(fn(array $args) => OrderSummary::fromId($args['order_id'])->toPrompt()),\n    ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q46-how-does-mcp-authentication-work-with-oauth-and-sanctum",
      children: "Q46: How does MCP authentication work with OAuth and Sanctum?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " MCP web servers support OAuth 2.0 (authorization code flow) and Sanctum token authentication. The server advertises its auth capabilities in the initialization handshake. For OAuth, the client redirects the user to the authorization endpoint, receives a token, and includes it in subsequent requests. Sanctum authentication validates API tokens from the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Authorization: Bearer"
      }), " header just like REST routes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// config/mcp.php → authentication\n'servers' => [\n    'sales-analytics' => [\n        'auth' => 'sanctum',\n        'middleware' => ['auth:sanctum', 'throttle:api'],\n    ],\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q47-how-do-you-build-an-mcp-client-in-laravel",
      children: "Q47: How do you build an MCP client in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Laravel's MCP system includes a client class that connects to remote MCP servers (Laravel or third-party). Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Mcp::client('server-name')"
      }), " to establish a connection. The client lists available tools, calls them, and retrieves resources. The client handles the JSON-RPC transport and protocol negotiation automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$client = Mcp::client('https://analytics.example.com/mcp')\n    ->withToken($apiKey)\n    ->connect();\n\n// List available tools\n$tools = $client->tools();\n\n// Call a tool\n$revenue = $client->call('get_revenue', [\n    'start' => '2025-01-01',\n    'end' => '2025-12-31',\n]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q48-how-do-you-test-mcp-servers",
      children: "Q48: How do you test MCP servers?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Mcp::fake()"
      }), " method to simulate MCP server responses during testing. For integration tests, spawn a test server instance and make real JSON-RPC calls against it. Assert tools were called, responses match expected schemas, and authentication is enforced."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "it('returns revenue from MCP server', function () {\n    Mcp::fake([\n        'get_revenue' => ['total' => 150000, 'currency' => 'USD'],\n    ]);\n\n    $client = Mcp::client('sales-analytics')->connect();\n    $result = $client->call('get_revenue', ['start' => '2025-01-01', 'end' => '2025-12-31']);\n\n    expect($result['total'])->toBe(150000);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q49-how-does-boost-integrate-with-mcp",
      children: "Q49: How does Boost integrate with MCP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Laravel Boost automatically generates MCP servers for your application based on its models, routes, and AI guidelines. Running ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan boost:mcp"
      }), " scans your codebase and creates MCP tools for all Eloquent models (CRUD operations) and registered routes. These servers are immediately consumable by Cursor, Claude Code, and other MCP hosts. Boost also creates MCP resources from your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-guidelines"
      }), " directory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate MCP servers from application code\nphp artisan boost:mcp\n\n# Boost creates tools like:\n# - get_users, create_user, update_user, delete_user\n# - get_orders, search_products\n# - query_documents (from AI guidelines)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q50-what-are-mcp-apps-and-how-do-they-differ-from-tools",
      children: "Q50: What are MCP apps and how do they differ from tools?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " MCP ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "apps"
      }), " are higher-level compositions that bundle multiple tools, resources, and prompts into a cohesive capability. An app might be \"Customer Support Assistant\" that includes lookup tools, ticket creation, knowledge base search, and escalation prompts. Apps differ from tools in their scope → tools are single operations while apps are feature bundles. Apps can be shared and installed via MCP registries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// An MCP app → bundles multiple capabilities\nMcpApp::make('customer-support')\n    ->displayName('Customer Support Assistant')\n    ->tools([new LookupOrderTool(), new CreateTicketTool(), new EscalateTool()])\n    ->resources([Resource::make('kb://faq')])\n    ->prompts([Prompt::make('handle-complaint')])\n    ->register();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-search--rag",
      children: "5. Search & RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q51-how-do-you-implement-full-text-search-in-laravel",
      children: "Q51: How do you implement full-text search in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Laravel's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "whereFullText()"
      }), " method provides database-native full-text search using FULLTEXT indexes on MySQL/MariaDB or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tsvector"
      }), " on PostgreSQL. Define the FULLTEXT index in a migration, then query with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->whereFullText(['title', 'body'], $searchTerm)"
      }), ". PostgreSQL supports ranking by relevance and tsquery operators. MariaDB/MySQL support natural language mode and Boolean mode."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Migration\nSchema::table('posts', function (Blueprint $table) {\n    $table->fullText(['title', 'body']);\n});\n\n// Query\n$posts = Post::whereFullText(['title', 'body'], 'laravel ai sdk')\n    ->orderByRaw('MATCH(title, body) AGAINST(? IN NATURAL LANGUAGE MODE) DESC', ['laravel ai sdk'])\n    ->get();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q52-what-is-pgvector-and-how-do-you-use-it-in-laravel",
      children: "Q52: What is pgvector and how do you use it in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " pgvector is a PostgreSQL extension that adds vector similarity search capabilities. Install via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE EXTENSION vector;"
      }), ". In Laravel, add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vector"
      }), " column type in migrations, generate embeddings via the AI SDK, and store them alongside your data. Query using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "whereVectorSimilarTo()"
      }), " with cosine distance or other distance operators."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Migration\nSchema::table('documents', function (Blueprint $table) {\n    $table->vector('embedding', 1536); // 1536 dimensions for text-embedding-3-small\n});\n\n// Store\n$doc = Document::create([\n    'content' => 'Laravel is a PHP framework...',\n    'embedding' => Str::toEmbeddings('Laravel is a PHP framework...'),\n]);\n\n// Query\n$query = Str::toEmbeddings('PHP frameworks');\n$results = Document::query()\n    ->whereVectorSimilarTo('embedding', $query)\n    ->limit(10)\n    ->get();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q53-how-do-you-create-hnsw-indexes-for-vector-search",
      children: "Q53: How do you create HNSW indexes for vector search?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " HNSW (Hierarchical Navigable Small World) indexes dramatically speed up vector similarity queries on large datasets. Create the index in a migration after populating the vector column. Use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hnsw"
      }), " access method with the appropriate distance function. HNSW indexes trade build time for query speed → ideal for read-heavy workloads."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Migration → create index after data is loaded\nDB::statement('CREATE INDEX documents_embedding_idx ON documents USING hnsw (embedding vector_cosine_ops)');\n\n// The index is automatically used by whereVectorSimilarTo queries\n$results = Document::query()\n    ->whereVectorSimilarTo('embedding', $query)\n    ->limit(10)\n    ->get(); // Uses HNSW index automatically\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q54-explain-how-to-use-wherevectorsimilarto-for-similarity-queries",
      children: "Q54: Explain how to use whereVectorSimilarTo for similarity queries."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "whereVectorSimilarTo()"
      }), " is an Eloquent scope on models with a vector column. It takes the column name and the embedding vector, applies the correct distance operator (cosine by default), orders by similarity, and limits results. Internally it generates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ORDER BY embedding <=> ? LIMIT ?"
      }), " with the query vector bound as a parameter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$queryEmbedding = Str::toEmbeddings('machine learning tutorials');\n\n$results = Document::query()\n    ->select('id', 'content', 'title')\n    ->selectRaw('embedding <=> ? as distance', [$queryEmbedding])\n    ->whereVectorSimilarTo('embedding', $queryEmbedding)\n    ->limit(20)\n    ->get();\n\n// Results ordered by cosine distance → lower is more similar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q55-what-is-laravel-scout-and-what-engines-does-it-support",
      children: "Q55: What is Laravel Scout and what engines does it support?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Laravel Scout is a search abstraction layer for Eloquent models. It provides a consistent API for full-text search across different engines. In Laravel 13, Scout ships with a first-party ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "database engine"
      }), " that leverages MySQL/PostgreSQL full-text indexes (no external service required). Third-party engines include Algolia, Meilisearch, and Typesense. Scout automatically synchronizes model changes to the search index."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class Post extends Model\n{\n    use Searchable;\n\n    public function toSearchableArray(): array\n    {\n        return [\n            'id' => $this->id,\n            'title' => $this->title,\n            'body' => $this->body,\n        ];\n    }\n}\n\n// Search across all posts\n$posts = Post::search('laravel ai')->where('published', true)->paginate(20);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q56-how-do-you-build-a-complete-rag-pipeline-in-laravel",
      children: "Q56: How do you build a complete RAG pipeline in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A complete RAG pipeline has four stages: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ingestion"
      }), " → chunk documents, generate embeddings, store in pgvector; (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Retrieval"
      }), " → embed user query, search nearest neighbors in pgvector; (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Augmentation"
      }), " → inject retrieved chunks into the AI agent prompt; (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generation"
      }), " → the AI produces an answer grounded in the retrieved context. The AI SDK's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SimilaritySearchTool"
      }), " automates retrieval and augmentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// 1. Ingestion pipeline\n$chunks = TextChunker::chunk($document->content, maxLength: 500);\nforeach ($chunks as $chunk) {\n    DocumentChunk::create([\n        'document_id' => $document->id,\n        'content' => $chunk,\n        'embedding' => Str::toEmbeddings($chunk),\n    ]);\n}\n\n// 2-4. Agent with retrieval\nclass QaAgent implements Agent\n{\n    use Promptable;\n\n    public function tools(): array\n    {\n        return [\n            new SimilaritySearchTool(DocumentChunk::class, 'embedding', numResults: 5),\n        ];\n    }\n\n    public function instructions(): string\n    {\n        return 'Answer based on retrieved context. Cite sources.';\n    }\n}\n\n$answer = Agent::chat(new QaAgent)->send('What is the refund policy?');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q57-how-do-you-combine-keyword-search-with-vector-search",
      children: "Q57: How do you combine keyword search with vector search?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The hybrid approach combines ", (0,jsx_runtime.jsx)(_components.code, {
        children: "whereFullText()"
      }), " for keyword matching and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "whereVectorSimilarTo()"
      }), " for semantic matching. Results are merged and deduplicated using Laravel's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collection"
      }), " methods. Weighting determines the balance between exact and semantic matching → typically 30% keyword + 70% vector for general content, adjusted per use case. Reranking can further improve final ordering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "function hybridSearch(string $query, int $limit = 10): Collection\n{\n    $vector = Str::toEmbeddings($query);\n\n    $keywordResults = Document::whereFullText(['title', 'body'], $query)\n        ->select('id', 'title', 'body')\n        ->limit($limit)\n        ->get()\n        ->keyBy('id');\n\n    $vectorResults = Document::whereVectorSimilarTo('embedding', $vector)\n        ->select('id', 'title', 'body')\n        ->limit($limit)\n        ->get()\n        ->keyBy('id');\n\n    // Merge and deduplicate\n    return $keywordResults->union($vectorResults)->values()->take($limit);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q58-how-do-you-cache-embeddings-for-performance",
      children: "Q58: How do you cache embeddings for performance?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Cache embeddings using Laravel's cache system to avoid regenerating vectors for the same text. The AI SDK provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "remember()"
      }), " helpers and configurable cache store for embeddings. For static content, store embeddings in the database alongside the content. For dynamic or user-generated content, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Cache::remember()"
      }), " with a key based on the text hash."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Cache individual embeddings\n$embedding = Cache::remember('embedding:'.md5($text), 3600, function () use ($text) {\n    return Str::toEmbeddings($text);\n});\n\n// AI SDK cached embedding option\n$embedding = Str::toEmbeddings($text, cache: true);\n\n// Bulk: cache all document embeddings during ingestion\nforeach ($chunks as $chunk) {\n    $embedding = Cache::rememberForever('embedding:'.md5($chunk), fn() => Str::toEmbeddings($chunk));\n    DocumentChunk::create(['content' => $chunk, 'embedding' => $embedding]);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-boost--automation",
      children: "6. Boost & Automation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q59-what-is-laravel-boost-and-what-does-it-provide",
      children: "Q59: What is Laravel Boost and what does it provide?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Laravel Boost is an AI-assisted development tool by the Laravel core team. It provides over 15 specialized AI tools, a vectorized knowledge base of 17,000+ Laravel documentation pieces, and custom AI guidelines for consistent code generation. Boost integrates with Cursor, Claude Code, and OpenCode to provide context-aware Laravel assistance directly in the IDE, including real-time linting, code generation, and project-aware autocomplete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "composer require laravel/boost --dev\nphp artisan boost:install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q60-how-do-you-create-custom-ai-guidelines-with-boost",
      children: "Q60: How do you create custom AI guidelines with Boost?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".ai/guidelines"
      }), " directory in your project root. Add markdown files that document your conventions, architecture decisions, naming standards, and any patterns Boost should follow when generating code. Boost reads these files and includes them as context in AI prompts. Guidelines are automatically vectorized and retrieved when relevant."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# .ai/guidelines/database-conventions.md\n- Use `ulid` columns instead of auto-incrementing integers for all primary keys\n- All timestamps must use `timestampTz()` for timezone awareness\n- Soft delete all user-related models using `SoftDeletes`\n- Index every foreign key column explicitly\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q61-how-does-boost-integrate-with-cursor-and-claude-code",
      children: "Q61: How does Boost integrate with Cursor and Claude Code?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Boost generates MCP servers and configuration files that Cursor and Claude Code consume automatically. When Boost is installed, it creates ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursor/rules/"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CLAUDE.md"
      }), " entries that reference your AI guidelines. In Cursor, Boost's tools appear as composer commands. In Claude Code, Boost generates an MCP server that provides project-aware context, database schema knowledge, and route information."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Boost auto-configures MCP for the IDE\nphp artisan boost:ide\n\n# This creates:\n# - .cursor/rules/laravel-boost.mdc\n# - CLAUDE.md with Laravel AI rules\n# - MCP server for project awareness\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q62-explain-event-driven-automation-patterns-in-laravel",
      children: "Q62: Explain event-driven automation patterns in Laravel."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Event-driven automation uses Laravel's event system to trigger actions when domain events occur. Define event classes, listen via listeners or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Event::listen()"
      }), " closures, and dispatch with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "event()"
      }), ". Events can trigger AI agents, queue jobs, send notifications, update caches, or call webhooks. This pattern decouples the event source from the reaction logic and supports multiple listeners per event."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Event\nclass OrderShipped\n{\n    public function __construct(public Order $order) {}\n}\n\n// Listener → runs agent automatically\nclass SendShippingNotification\n{\n    public function handle(OrderShipped $event): void\n    {\n        Agent::chat(new ShippingAgent)\n            ->queue()\n            ->send(\"Notify customer about order {$event->order->id}\");\n    }\n}\n\n// Registered in EventServiceProvider\nprotected $listen = [\n    OrderShipped::class => [SendShippingNotification::class],\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q63-how-do-you-build-webhook-driven-automation",
      children: "Q63: How do you build webhook-driven automation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Webhooks trigger Laravel actions from external services. Use a route that receives the webhook payload, validates the signature for security, and dispatches a job or event. Expose webhook routes via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "post('/webhooks/{provider}', ...)"
      }), " without CSRF (add to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "except"
      }), " array). Use signed URLs or secret validation for authenticity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// routes/api.php → webhooks bypass CSRF\nRoute::post('/webhooks/stripe', [StripeWebhookController::class, 'handle']);\n\n// Controller\nclass StripeWebhookController extends Controller\n{\n    public function handle(Request $request): Response\n    {\n        $payload = $request->getContent();\n        $sig = $request->header('Stripe-Signature');\n\n        // Verify signature\n        $event = \\Stripe\\Webhook::constructEvent($payload, $sig, config('services.stripe.webhook_secret'));\n\n        // Dispatch automation\n        ProcessStripeEvent::dispatch($event->type, $event->data->object);\n\n        return response('ok');\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q64-what-is-human-in-the-loop-and-how-do-you-implement-it",
      children: "Q64: What is human-in-the-loop and how do you implement it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Human-in-the-loop (HITL) pauses automation for human approval before executing a critical action. In Laravel, implement by dispatching a job that creates an approval request, sends a notification, and awaits a response via a dedicated route or Artisan command. The job retries or continues based on the human response. This is critical for financial operations, content publishing, and sensitive data access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ApproveRefundJob implements ShouldQueue\n{\n    public function handle(): void\n    {\n        // Create approval request\n        $approval = ApprovalRequest::create([\n            'type' => 'refund',\n            'payload' => ['order_id' => $this->order->id, 'amount' => $this->order->total],\n            'status' => 'pending',\n        ]);\n\n        // Notify admin\n        Notification::route('slack', config('services.slack.admin_channel'))\n            ->notify(new ApprovalNeeded($approval));\n\n        // Job retries with backoff until approved or expired\n        if ($approval->status !== 'approved' && $this->attempts() < 10) {\n            $this->release(60); // retry in 60 seconds\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-system-design",
      children: "7. System Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q65-how-do-you-scale-laravel-to-1m-users",
      children: "Q65: How do you scale Laravel to 1M+ users?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Scale horizontally by adding more application servers behind a load balancer. Use Redis for sessions, cache, and queues. Implement read replicas for database reads and distribute writes to the primary. Use Octane (Swoole/RoadRunner) for persistent application memory. Offload static assets to a CDN. Use Laravel Vapor or Cloud for serverless auto-scaling. Profile bottlenecks with Telescope and Pulse."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Load Balancer → App Servers (Ã—N behind ALB)\n    ├── Redis Cluster (sessions, cache, queues, locks)\n    ├── PostgreSQL Primary + Read Replicas\n    ├── CDN (assets, media)\n    ├── Horizon (queue workers Ã—M)\n    └── Reverb (WebSocket cluster)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q66-explain-multi-tenancy-strategies-in-laravel",
      children: "Q66: Explain multi-tenancy strategies in Laravel."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Three main strategies: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Single database with tenant_id column"
      }), " → simplest, all tenants share tables. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Separate database per tenant"
      }), " → full isolation, each tenant has its own DB. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Separate schema per tenant"
      }), " (PostgreSQL) → shared connection, isolated schemas. Laravel's multi-tenancy packages (Stancl Tenancy, Laravel Multi-tenancy) use middleware to scope queries automatically via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tenancy()->initialize()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Single DB with tenant_id → scoped globally\nclass TenantScopedModel extends Model\n{\n    protected static function booted(): void\n    {\n        static::addGlobalScope('tenant', fn(Builder $q) => $q->where('tenant_id', tenant()->id));\n    }\n}\n\n// Separate database → switch connection per tenant\ntenancy()->initialize($tenant);\nConfig::set('database.connections.tenant.database', \"tenant_{$tenant->id}\");\nDB::purge('tenant');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q67-what-is-cqrs-and-how-do-you-implement-it-in-laravel",
      children: "Q67: What is CQRS and how do you implement it in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Command Query Responsibility Segregation separates read models from write models. Commands handle writes (mutations), queries handle reads. This allows optimizing each side independently → use denormalized read tables for fast queries, normalized writes for data integrity. In Laravel, implement CQRS with separate Action classes for commands and separate ReadModel classes for queries. Queue writes for eventual consistency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Command → writes\nclass PlaceOrderCommand\n{\n    public function handle(CreateOrderRequest $request): void\n    {\n        DB::transaction(function () use ($request) {\n            $order = Order::create(/* ... */);\n            Inventory::decrement($request->product_id, $request->quantity);\n            OrderPlaced::dispatch($order); // eventual consistency\n        });\n    }\n}\n\n// Query → reads from denormalized view\nclass OrderSummaryQuery\n{\n    public function get(string $userId): Collection\n    {\n        return DB::table('order_summaries')\n            ->where('user_id', $userId)\n            ->orderByDesc('placed_at')\n            ->get();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q68-explain-the-service-layer-and-repository-patterns-in-laravel",
      children: "Q68: Explain the service layer and repository patterns in Laravel."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "service layer"
      }), " encapsulates business logic in dedicated classes (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentService"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InvoiceService"
      }), "), keeping controllers thin. Services are injected via the container. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "repository pattern"
      }), " abstracts data access behind an interface, allowing you to swap implementations (Eloquent, cache, external API) without changing business code. In practice, most Laravel applications use the service layer directly with Eloquent rather than full repositories, since Eloquent already provides an abstraction over the database."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Service layer\nclass OrderService\n{\n    public function __construct(\n        private PaymentService $payment,\n        private InventoryService $inventory,\n    ) {}\n\n    public function checkout(Cart $cart, User $user): Order\n    {\n        $this->inventory->reserve($cart->items);\n        $charge = $this->payment->charge($user, $cart->total);\n        return Order::create(['user_id' => $user->id, 'charge_id' => $charge->id]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q69-how-do-you-design-a-multi-region-laravel-deployment",
      children: "Q69: How do you design a multi-region Laravel deployment?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Deploy Laravel application servers in each region behind a regional load balancer. Use a global DNS service (Route53, Cloudflare) for latency-based routing. Database writes go to a primary region, with cross-region read replicas. Use Redis Global Datastore or CRDT-based replication for distributed caching. Queue workers run per-region, processing region-specific queues. Stateless application design ensures any region can handle any request."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌── US-East ──┐     ┌── EU-West ──┐\n│ App Ã—N       │     │ App Ã—N       │\n│ Redis Replica│     │ Redis Replica│\n│ Queue Workers│     │ Queue Workers│\n└──────┬───────┘     └──────┬───────┘\n       │                    │\n       └──────────┬─────────┘\n                  │\n        ┌─────────▼─────────┐\n        │  PostgreSQL       │\n        │  Primary (US)     │\n        │  Replica (EU)     │\n        └───────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q70-how-do-you-handle-database-sharding-in-laravel",
      children: "Q70: How do you handle database sharding in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Sharding splits data across multiple databases based on a shard key (user ID, region, tenant). In Laravel, use a database connection resolver that selects the correct shard at runtime. Define shard connections in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/database.php"
      }), " and resolve via middleware that sets the connection. For Eloquent, use a trait that overrides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getConnectionName()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Dynamic shard connection\nclass ShardManager\n{\n    public function connection(int $shardKey): string\n    {\n        $shard = ($shardKey % 4) + 1;\n        return \"shard_{$shard}\";\n    }\n}\n\n// Model → auto-route to correct shard\nclass User extends Model\n{\n    public function getConnectionName(): string\n    {\n        return app(ShardManager::class)->connection($this->id ?? 0);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q71-explain-caching-cascade-strategies-for-read-heavy-workloads",
      children: "Q71: Explain caching cascade strategies for read-heavy workloads."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A caching cascade places multiple layers of cache before the database. Typical three-tier cascade: L1 (in-memory/Octane memory cache, ~10ns), L2 (Redis, ~1ms), L3 (database, ~10ms). Check L1 first on miss, promote from L2 to L1. On L2 miss, query DB and populate both layers. Stale-while-revalidate patterns serve stale data while refreshing in the background."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "function getPopularPosts(): Collection\n{\n    // L1: Application memory (Octane)\n    // L2: Redis\n    // L3: Database\n    return Cache::flexible('popular-posts', [60, 120], function () {\n        return Post::withCount('views')->orderByDesc('views_count')->limit(10)->get();\n    });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q72-what-are-sli-slo-and-sla-in-the-context-of-laravel-apps",
      children: "Q72: What are SLI, SLO, and SLA in the context of Laravel apps?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SLI"
      }), " (Service Level Indicator) is the measured metric → e.g., p99 response time, error rate, uptime percentage. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SLO"
      }), " (Service Level Objective) is the target → e.g., \"p99 response time < 200ms\" or \"99.9% uptime\". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SLA"
      }), " (Service Level Agreement) is the contractual commitment to customers based on SLOs. In Laravel, use Pulse to track SLIs (request duration, error rates), define SLOs in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/pulse.php"
      }), ", and expose SLI data via a metrics endpoint for monitoring."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Pulse captures these SLIs automatically:\n// - Request throughput and latency (p50, p95, p99)\n// - Error rate (4xx, 5xx)\n// - Queue throughput and wait times\n// - Cache hit/miss ratio\n// - Database query performance\n\n// Custom SLI tracking\nPulse::record('api_response_time', $duration)->avg();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q73-how-do-you-implement-disaster-recovery-for-a-laravel-app",
      children: "Q73: How do you implement disaster recovery for a Laravel app?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Implement a multi-region active-passive or active-active architecture. Use RDS cross-region replicas for database DR. Store assets in S3 with cross-region replication. Use Route53 health checks that failover to the standby region. Run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan backup:run"
      }), " for scheduled database and file backups. Define a runbook with RPO (Recovery Point Objective) and RTO (Recovery Time Objective). Test DR quarterly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Config/environment-driven DR switch\nclass DatabaseConfigProvider\n{\n    public function getConnection(): string\n    {\n        if (app()->environment('production')) {\n            return HealthCheck::isPrimaryHealthy()\n                ? 'primary'\n                : 'dr-standby'; // failover\n        }\n        return 'primary';\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q74-explain-the-strangler-fig-pattern-for-migrating-from-monolith-to-services",
      children: "Q74: Explain the Strangler Fig pattern for migrating from monolith to services."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Strangler Fig pattern gradually replaces monolith functionality with microservices without a big-bang rewrite. Create a new Laravel service for a specific feature, route traffic to it via a proxy or feature flag, then remove the old code once the new service handles all traffic. Repeat until the monolith is fully replaced. Laravel's routing and middleware make this straightforward → use a reverse proxy (Nginx, Envoy) to route by URI prefix."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Step 1: Route certain paths to the new service\nRoute::prefix('api/v2/checkout')->group(function () {\n    // Proxy to new checkout microservice\n    Route::get('/{order}', fn(Request $r) => Http::get(config('services.checkout.url').'/api/orders/'.$r->order));\n});\n\n// Step 2: Migrate users incrementally via feature flag\nif (Feature::active('new-checkout')) {\n    return app(NewCheckoutService::class)->process($request);\n} else {\n    return app(LegacyCheckoutService::class)->process($request);\n}\n\n// Step 3: Remove old code once all traffic is migrated\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-multi-agent-systems",
      children: "8. Multi-Agent Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q75-what-is-the-supervisorworker-pattern-for-multi-agent-systems",
      children: "Q75: What is the supervisor/worker pattern for multi-agent systems?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The supervisor agent receives a high-level goal, decomposes it into sub-tasks, and dispatches each to a specialized worker agent. The supervisor does not do the work → it plans, delegates, and synthesizes results. Workers are narrowly focused agents with specific tool sets (search, analysis, writing, translation). The pattern enables complex workflows without overloading any single agent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SupervisorAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): string\n    {\n        return 'Decompose the user request into sub-tasks and dispatch to the correct worker tool.';\n    }\n\n    public function tools(): array\n    {\n        return [\n            new DelegateToWorkerTool('researcher', new ResearchAgent()),\n            new DelegateToWorkerTool('writer', new WriterAgent()),\n            new DelegateToWorkerTool('editor', new EditorAgent()),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q76-how-do-you-implement-agent-handoff-in-laravel",
      children: "Q76: How do you implement agent handoff in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Agent handoff transfers a conversation from one agent to another, preserving context. Implement via a tool that returns a structured handoff payload with the receiving agent's identity and the conversation history. The router agent decides which agent should handle based on the current state. Handoff is explicit → the source agent voluntarily passes control."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class HandoffToAgentTool implements Tool\n{\n    public function handle(ToolInput $input): mixed\n    {\n        return [\n            'action' => 'handoff',\n            'target_agent' => $input->get('agent'),\n            'context' => $input->get('conversation_summary'),\n        ];\n    }\n}\n\n// Router agent\nclass RouterAgent implements Agent\n{\n    public function instructions(): string\n    {\n        return 'Classify the query. If it is about billing, handoff to BillingAgent. If about support, handoff to SupportAgent.';\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q77-how-do-you-run-multiple-agents-in-parallel-using-queues",
      children: "Q77: How do you run multiple agents in parallel using queues?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Dispatch each agent as a separate queued job using Laravel's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Bus::batch()"
      }), " for fan-out/fan-in. Each agent runs independently on a queue worker. Collect results when all complete. This is the fan-out/fan-in pattern → split work, process in parallel, merge results. Horizon monitors all parallel agents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Bus\\Batch;\nuse Illuminate\\Support\\Facades\\Bus;\n\n$batch = Bus::batch([\n    new ProcessAgentJob(new ResearchAgent(), $query),\n    new ProcessAgentJob(new AnalysisAgent(), $query),\n    new ProcessAgentJob(new SummarizerAgent(), $query),\n])->then(function (Batch $batch) {\n    // Merge results from all three agents\n    $results = $batch->fresh()->included;\n    $finalReport = Agent::chat(new MergerAgent)->send(json_encode($results));\n})->dispatch();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q78-how-do-you-manage-shared-state-across-agents",
      children: "Q78: How do you manage shared state across agents?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Shared state is stored in Redis or the database, keyed by a session or workflow ID. Agents read and write to the shared store via tools. Use atomic locks for write conflicts. The AI SDK's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RemembersConversations"
      }), " persists per-agent conversation history. For cross-agent state, use a dedicated state store with JSON documents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SharedStateStore\n{\n    public function __construct(private CacheManager $cache) {}\n\n    public function get(string $workflowId, string $key): mixed\n    {\n        return $this->cache->get(\"workflow:$workflowId:$key\");\n    }\n\n    public function set(string $workflowId, string $key, mixed $value): void\n    {\n        $this->cache->put(\"workflow:$workflowId:$key\", $value);\n    }\n\n    public function lock(string $workflowId): Lock\n    {\n        return $this->cache->lock(\"workflow:$workflowId:lock\", 30);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q79-what-are-circuit-breakers-and-how-do-you-apply-them-to-agents",
      children: "Q79: What are circuit breakers and how do you apply them to agents?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A circuit breaker prevents repeated calls to a failing service. Three states: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Closed"
      }), " (normal operation), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Open"
      }), " (calls fail immediately), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Half-Open"
      }), " (test call to check recovery). For AI agents, circuit breakers prevent cascading failures when an AI provider is down or returning errors. Laravel's cache provides atomic locks that can implement circuit breaker state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class AgentCircuitBreaker\n{\n    public function isAvailable(string $agentName): bool\n    {\n        $state = Cache::get(\"circuit:$agentName\", 'closed');\n\n        if ($state === 'open') {\n            $resetAt = Cache::get(\"circuit:$agentName:reset_at\");\n            if (now()->isAfter($resetAt)) {\n                Cache::put(\"circuit:$agentName\", 'half-open');\n                return true; // test the agent\n            }\n            return false;\n        }\n        return true;\n    }\n\n    public function recordFailure(string $agentName): void\n    {\n        $failures = Cache::increment(\"circuit:$agentName:failures\");\n        if ($failures >= 5) {\n            Cache::put(\"circuit:$agentName\", 'open', 30);\n            Cache::put(\"circuit:$agentName:reset_at\", now()->addSeconds(30));\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q80-how-do-you-handle-agent-orchestration-with-laravels-buschain",
      children: "Q80: How do you handle agent orchestration with Laravel's Bus::chain?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Bus::chain()"
      }), " runs jobs sequentially → each job receives the previous job's result. For agents, this creates a pipeline where the output of one agent feeds the next. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "then()"
      }), " for success handling and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "catch()"
      }), " for failure. Combined with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Bus::batch()"
      }), " you can model DAG workflows (parallel + sequential steps)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Bus::chain([\n    new ProcessAgentJob(new ResearchAgent(), $query),\n    new ProcessAgentJob(new AnalysisAgent()),    // receives ResearchAgent output\n    new ProcessAgentJob(new WriterAgent()),       // receives AnalysisAgent output\n    new ProcessAgentJob(new EditorAgent()),        // receives WriterAgent output\n])->then(function () {\n    // All agents completed successfully\n})->catch(function (Throwable $e) {\n    Log::error('Agent pipeline failed', ['error' => $e->getMessage()]);\n})->dispatch();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q81-how-do-you-implement-agent-observability-monitoring-and-logging",
      children: "Q81: How do you implement agent observability (monitoring and logging)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use Laravel Telescope to record every agent invocation, prompt, and response. Create a custom Telescope watcher for AI events. Use Pulse for real-time agent metrics → request count, latency, token usage, error rate. Log all agent interactions to the database for audit trails. Track tool usage per agent to analyze behavior patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Custom Telescope watcher for agents\nclass AiAgentWatcher extends Watcher\n{\n    public function registerWatches(Client $client): void\n    {\n        $client->listen(AiAgentStarted::class, function ($event) {\n            Telescope::record(new IncomingEntry([\n                'agent' => $event->agent::class,\n                'prompt' => $event->prompt,\n                'tools' => $event->tools,\n            ]));\n        });\n    }\n}\n\n// PULSE custom card for agent metrics\nPulse::record('agent_invocations', 1)->count();\nPulse::record('agent_tokens', $tokenCount)->avg();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q82-how-do-you-test-multi-agent-systems-in-laravel",
      children: "Q82: How do you test multi-agent systems in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Test agents in isolation by mocking their tools and asserting they receive expected inputs. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Ai::fake()"
      }), " to prevent real API calls. Test workflows by dispatching the chain or batch and asserting state changes. Use PEST's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expect()->toBe()"
      }), " for output assertions. For integration tests, use real database and Redis but fake AI responses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "it('routes billing queries to BillingAgent', function () {\n    Ai::fake([\n        'I want a refund' => 'This is a billing query.',\n    ]);\n\n    $response = Agent::chat(new RouterAgent)->send('I want a refund');\n\n    Ai::assertToolCalled('handoff_to_agent', 1);\n    Ai::assertAgentSent(RouterAgent::class, 1);\n});\n\nit('completes full supervisor pipeline', function () {\n    Bus::fake();\n\n    Bus::chain([\n        new ProcessAgentJob(new ResearchAgent(), 'Laravel trends'),\n        new ProcessAgentJob(new WriterAgent()),\n    ])->dispatch();\n\n    Bus::assertChained([\n        ProcessAgentJob::class,\n        ProcessAgentJob::class,\n    ]);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-business-automation",
      children: "9. Business Automation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q83-what-is-a-business-automation-agent-and-how-is-it-built",
      children: "Q83: What is a business automation agent and how is it built?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A business automation agent executes recurring business tasks autonomously → generating reports, processing invoices, monitoring metrics, onboarding users. It combines scheduled execution (Laravel's scheduler), AI decision-making (AI SDK agent), and tool-based integrations (email, Slack, CRM). Build by creating a command or job that instantiates the agent with relevant tools and runs on a schedule."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Scheduled business automation agent\n// app/Console/Kernel.php\nprotected function schedule(Schedule $schedule): void\n{\n    $schedule->call(function () {\n        Agent::chat(new DailyReportAgent)\n            ->tools([new FetchSalesTool(), new SendEmailTool(), new PostToSlackTool()])\n            ->queue()\n            ->send('Generate and send the daily sales report to the management team.');\n    })->dailyAt('08:00');\n}\n\n// The agent decides what tools to use based on its instructions\nclass DailyReportAgent implements Agent\n{\n    use Promptable;\n\n    public function instructions(): string\n    {\n        return 'You generate a daily sales report. Fetch sales data, summarize it, then email it and post a summary to Slack.';\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q84-how-do-you-implement-approval-workflows-with-human-in-the-loop",
      children: "Q84: How do you implement approval workflows with human-in-the-loop?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Define states (pending, approved, rejected) and transitions. When a condition requires approval, create an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApprovalRequest"
      }), " record, notify the approver via email/Slack, and pause execution. The approval endpoint updates the status → continue if approved, rollback if rejected. Use Laravel notifications for the approval request and signed routes for the approve/reject actions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ApprovalWorkflow\n{\n    public function requestApproval(string $type, array $data, string $notifiableType, int $notifiableId): ApprovalRequest\n    {\n        $approval = ApprovalRequest::create([\n            'type' => $type,\n            'data' => $data,\n            'status' => 'pending',\n            'notifiable_type' => $notifiableType,\n            'notifiable_id' => $notifiableId,\n        ]);\n\n        $approver = (new $notifiableType)->find($notifiableId);\n        $approver->notify(new ApprovalRequestedNotification($approval));\n\n        return $approval;\n    }\n\n    public function approve(ApprovalRequest $approval): void\n    {\n        $approval->update(['status' => 'approved', 'resolved_at' => now()]);\n        // Resume the queued automation\n        ProcessAutomation::dispatch($approval->data);\n    }\n\n    public function reject(ApprovalRequest $approval, string $reason): void\n    {\n        $approval->update(['status' => 'rejected', 'notes' => $reason, 'resolved_at' => now()]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q85-how-do-you-log-and-audit-automated-agent-decisions",
      children: "Q85: How do you log and audit automated agent decisions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Create an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "agent_audit_logs"
      }), " table recording agent name, input prompt, output response, tools invoked, timestamps, and the user or system that triggered it. Use Eloquent events or middleware to capture every agent interaction. For compliance, log each decision with a unique ID, store the full context, and provide a dashboard for audit review. Implement retention policies for log data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Migration\nSchema::create('agent_audit_logs', function (Blueprint $table) {\n    $table->id();\n    $table->string('agent_class');\n    $table->foreignId('user_id')->nullable();\n    $table->text('input_prompt');\n    $table->longText('output_response');\n    $table->json('tools_invoked');\n    $table->integer('token_count');\n    $table->float('duration_ms');\n    $table->string('status'); // success, failed, partial\n    $table->timestamps();\n});\n\n// Middleware-style logging for all agent calls\nclass AuditLogAgentMiddleware implements AgentMiddleware\n{\n    public function handle(Agent $agent, callable $next): mixed\n    {\n        $start = microtime(true);\n        $result = $next($agent);\n\n        AgentAuditLog::create([\n            'agent_class' => $agent::class,\n            'input_prompt' => $agent->getLastPrompt(),\n            'output_response' => $result->text,\n            'tools_invoked' => $agent->getCalledTools(),\n            'duration_ms' => (microtime(true) - $start) * 1000,\n            'status' => $result->successful ? 'success' : 'failed',\n        ]);\n\n        return $result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q86-how-do-you-build-a-scheduled-report-generation-agent",
      children: "Q86: How do you build a scheduled report generation agent?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Create a Laravel command that instantiates an AI agent with tools for data fetching, formatting, and distribution. Schedule it via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$schedule->command()"
      }), " in the kernel. The agent fetches raw data via tools, analyzes it, generates a formatted report, and sends it via email, Slack, or a dashboard endpoint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Command\nclass GenerateWeeklyReport extends Command\n{\n    protected $signature = 'report:weekly';\n    protected $description = 'Generate and distribute weekly analytics report';\n\n    public function handle(): void\n    {\n        Agent::chat(new WeeklyReportAgent)\n            ->tools([\n                new FetchAnalyticsTool(),\n                new GenerateChartTool(),\n                new SendEmailTool(),\n            ])\n            ->send('Generate this week\\'s report and email it to the management team.');\n    }\n}\n\n// Kernel schedule\n$schedule->command('report:weekly')->mondays()->at('09:00');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q87-how-do-you-integrate-external-apis-with-business-automation-agents",
      children: "Q87: How do you integrate external APIs with business automation agents?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Build tools that wrap external API calls. Each tool has a clear name, description, and input/output schema so the AI knows when and how to use it. The tool's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle()"
      }), " method makes the HTTP call, handles errors, and returns structured data. For rate-limited APIs, implement queuing and retry logic within the tool."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SalesforceSyncTool implements Tool\n{\n    public function name(): string { return 'sync_to_salesforce'; }\n    public function description(): string { return 'Sync a contact record to Salesforce CRM'; }\n    public function inputSchema(): array\n    {\n        return [\n            'email' => ['type' => 'string', 'description' => 'Contact email'],\n            'name' => ['type' => 'string', 'description' => 'Full name'],\n            'company' => ['type' => 'string', 'description' => 'Company name'],\n        ];\n    }\n\n    public function handle(ToolInput $input): mixed\n    {\n        return Http::withToken(config('services.salesforce.token'))\n            ->post('https://your-instance.salesforce.com/services/data/v60.0/sobjects/Contact', [\n                'Email' => $input->get('email'),\n                'LastName' => $input->get('name'),\n                'Account_Name__c' => $input->get('company'),\n            ])->json();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q88-what-are-common-failure-modes-for-automated-agents-and-how-do-you-handle-them",
      children: "Q88: What are common failure modes for automated agents and how do you handle them?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Common failures: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool errors"
      }), " → API timeout, rate limit, bad input. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hallucination"
      }), " → agent invents data or makes incorrect assertions. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Runaway loops"
      }), " → agent keeps calling tools without making progress. (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Context overflow"
      }), " → agent exceeds token limit. Mitigate with: try/catch in tools with graceful error messages, structured output validation, max tool call limits per agent, circuit breakers for external services, and human-in-the-loop approval for high-stakes actions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SafeAgentTool implements Tool\n{\n    public function handle(ToolInput $input): mixed\n    {\n        try {\n            $response = Http::timeout(10)->get($input->get('url'));\n            if ($response->failed()) {\n                return ['error' => 'Service temporarily unavailable', 'retryable' => true];\n            }\n            return $response->json();\n        } catch (ConnectionException $e) {\n            return ['error' => 'Could not connect', 'retryable' => true];\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q89-how-do-you-handle-agent-timeout-and-retry-policies",
      children: "Q89: How do you handle agent timeout and retry policies?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Configure timeouts at multiple levels: HTTP client timeout (seconds), queue job retry (max attempts + backoff), and agent-level max execution time. Use Laravel's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "retry()"
      }), " helper for transient failures. For long-running agents, break work into chunks and use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Bus::chain()"
      }), " to limit per-job duration. Alert when agents exceed thresholds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// HTTP level\nHttp::timeout(30)->retry(3, 100);\n\n// Queue job level\nclass AgentJob implements ShouldQueue\n{\n    public $tries = 5;\n    public $backoff = [5, 15, 30, 60, 120];\n\n    public function retryUntil(): DateTime\n    {\n        return now()->addMinutes(10); // total timeout\n    }\n}\n\n// Agent level → use structured output with fallback\npublic function instructions(): string\n{\n    return 'If you cannot complete the task in 5 tool calls, summarize what you have so far.';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-additional-questions",
      children: "Appendix: Additional Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q90-how-does-laravels-pipeline-pattern-work",
      children: "Q90: How does Laravel's pipeline pattern work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Illuminate\\Pipeline\\Pipeline"
      }), " sends an object through a series of pipes (callables or invokable classes), where each pipe can inspect, modify, or reject it. This powers middleware and is available for custom use. Each pipe receives the object and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$next"
      }), " closure, calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$next($object)"
      }), " to pass control."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$result = app(Pipeline::class)\n    ->send($request)\n    ->through([\n        ValidateInput::class,\n        SanitizeHtml::class,\n        LogRequest::class,\n    ])\n    ->then(fn($request) => $controller->handle($request));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q91-what-is-laravel-prompts-and-when-would-you-use-it",
      children: "Q91: What is Laravel Prompts and when would you use it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Laravel Prompts is a package for building beautiful CLI forms with autocomplete, text input, select menus, multi-select, confirmations, and progress bars. Use it in Artisan commands to gather user input interactively. It supports validation, fallback, and theming."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$name = text('What is your name?', required: true);\n$role = select('Select role', ['admin' => 'Admin', 'editor' => 'Editor']);\n$confirm = confirm('Deploy to production?', default: false);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q92-how-do-you-handle-media-uploads-and-file-storage-in-laravel",
      children: "Q92: How do you handle media uploads and file storage in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Laravel's Filesystem abstraction supports local, S3, and GCS drivers via a unified API. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Storage::put()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Storage::url()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Storage::delete()"
      }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Intervention"
      }), " library is the standard for image manipulation. For user uploads, use form requests with validation rules (", (0,jsx_runtime.jsx)(_components.code, {
        children: "image"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mimes:jpg,png"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max:2048"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Store uploaded file\n$path = $request->file('avatar')->store('avatars', 's3');\n$url = Storage::disk('s3')->url($path);\n\n// With Intervention\nImage::make($request->file('avatar'))\n    ->fit(300, 300)\n    ->save(storage_path('app/public/avatars/'.$filename));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q93-what-is-laravel-pennant-and-how-do-you-use-feature-flags",
      children: "Q93: What is Laravel Pennant and how do you use feature flags?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Pennant is Laravel's first-party feature flag package. It supports simple boolean flags, percentage-based rollouts, and custom feature resolvers. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Feature::active()"
      }), " in controllers, Blade (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@feature"
      }), "), and middleware. Manage via the Pennant UI or API."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Define a feature\nFeature::define('new-checkout', fn(User $user) => $user->created_at->isAfter('2025-01-01'));\n\n// Check in code\nif (Feature::active('new-checkout')) {\n    return app(NewCheckoutController::class);\n}\n\n// Percentage rollout\nFeature::define('beta-feature', Feature::percentage(25));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q94-how-do-you-use-laravel-precognition-for-proactive-validation",
      children: "Q94: How do you use Laravel PreCognition for proactive validation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PreCognition validates forms before submission by making validation requests as the user types. It returns the same validation rules applied server-side. Use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "usePrecognition()"
      }), " trait in your form request and add the Alpine.js or Vue plugin on the frontend. This provides instant feedback without waiting for full form submission."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Form request\nclass StorePostRequest extends FormRequest\n{\n    use Precognitive;\n\n    public function rules(): array\n    {\n        return [\n            'title' => 'required|string|max:255',\n            'body' => 'required|string',\n        ];\n    }\n}\n\n// Frontend → Alpine.js automatically validates on input\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q95-what-is-laravel-folio-and-how-does-it-work",
      children: "Q95: What is Laravel Folio and how does it work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Folio provides file-based routing for pages. Create a Blade files in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "resources/views/pages/"
      }), " and the URL path matches: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pages/users/index.blade.php"
      }), " maps to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/users"
      }), ". Supports route parameters via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[User]"
      }), " file naming, middleware via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "middleware"
      }), " files, and nested layouts. It reduces route file boilerplate for simple page-based applications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// resources/views/pages/users/[User].blade.php\n<?php\nuse function Laravel\\Folio\\{name, middleware};\nname('users.show');\nmiddleware('auth');\n?>\n\n<x-layout>\n    <h1>{{ $user->name }}</h1>\n</x-layout>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q96-how-do-you-use-context-in-ai-sdk-agents-for-dynamic-behavior",
      children: "Q96: How do you use context in AI SDK agents for dynamic behavior?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context()"
      }), " method passes additional data to an agent that is injected into the system prompt at runtime. Context can be user data, session state, or environmental information. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ContextLoader"
      }), " classes for complex context building. Context is rendered into the prompt before sending to the AI."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "Agent::chat(new SupportAgent)\n    ->context([\n        'user_name' => $user->name,\n        'plan' => $user->plan->name,\n        'ticket_count' => $user->tickets()->thisMonth()->count(),\n    ])\n    ->send('I need help with billing');\n\n// In agent instructions:\npublic function instructions(): string\n{\n    return 'You are supporting {{ $user_name }} on the {{ $plan }} plan. They have {{ $ticket_count }} tickets this month.';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q97-how-do-you-build-a-custom-artisan-command-for-ai-operations",
      children: "Q97: How do you build a custom Artisan command for AI operations?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Generate with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan make:command"
      }), ". Define ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$signature"
      }), " (with arguments and options) and implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle()"
      }), ". For AI operations, the command instantiates an agent, runs it, and outputs the result. Commands can be scheduled or triggered manually."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ModerateContent extends Command\n{\n    protected $signature = 'ai:moderate {post-id} {--dry-run : Log but do not take action}';\n\n    public function handle(): int\n    {\n        $post = Post::findOrFail($this->argument('post-id'));\n\n        $response = Agent::chat(new ContentModerator)->send($post->body);\n\n        if ($response->flagged && !$this->option('dry-run')) {\n            $post->update(['status' => 'flagged']);\n            $this->info('Post flagged for review.');\n        }\n\n        return self::SUCCESS;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q98-how-does-laravels-deferred-service-providers-work",
      children: "Q98: How does Laravel's deferred service providers work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Deferred providers delay service registration until a binding or event from that provider is actually requested. Implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DeferrableProvider"
      }), " on the provider and define ", (0,jsx_runtime.jsx)(_components.code, {
        children: "provides()"
      }), " to list the bindings it registers. This reduces application boot time by not loading providers that aren't used on the current request."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class AnalyticsServiceProvider extends ServiceProvider implements DeferrableProvider\n{\n    public function register(): void\n    {\n        $this->app->singleton(Analytics::class);\n    }\n\n    public function provides(): array\n    {\n        return [Analytics::class];\n    }\n}\n// The provider is only resolved when Analytics is actually requested from the container\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q99-what-is-the-difference-between-events-listeners-and-subscribers",
      children: "Q99: What is the difference between events, listeners, and subscribers?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Events"
      }), " are simple data classes that describe what happened. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listeners"
      }), " handle events → each listener has a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle()"
      }), " method and is registered for one or more events. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subscribers"
      }), " are classes that subscribe to multiple events internally using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "subscribe()"
      }), " → they organize related event handling in one class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Event\nclass UserRegistered { public function __construct(public User $user) {} }\n\n// Listener\nclass SendWelcomeEmail { public function handle(UserRegistered $event): void { /* ... */ } }\n\n// Subscriber\nclass UserEventSubscriber\n{\n    public function subscribe(Dispatcher $events): void\n    {\n        $events->listen(UserRegistered::class, [self::class, 'onRegistered']);\n        $events->listen(UserDeleted::class, [self::class, 'onDeleted']);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q100-how-do-you-implement-rate-limiting-for-ai-agent-calls",
      children: "Q100: How do you implement rate limiting for AI agent calls?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use Laravel's built-in rate limiter with Redis. Define named rate limiters for different agent types or cost tiers. Apply in middleware for HTTP requests, or check in the agent execution path. For queued agents, adjust ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$backoff"
      }), " based on available rate limit capacity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// AppServiceProvider\nRateLimiter::for('ai-agents', fn() => Limit::perMinute(30)->by(auth()->id()));\n\n// In agent middleware or controller\n$executed = RateLimiter::attempt('ai-agents:'.auth()->id(), 30, function () {\n    return Agent::chat(new ExpensiveAgent)->send($query);\n}, 60);\n\nif (!$executed) {\n    return response()->json(['error' => 'Rate limit exceeded. Try again in 60 seconds.'], 429);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/39-interview-healthcare",
          children: "Chapter 39: Healthcare Interview Q&A"
        }), " → Industry-specific interview questions for Laravel roles in healthcare and health-tech."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Compare key Laravel concepts for interview preparation."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency injection and resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic resolution via type-hints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Providers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bootstrap application services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register bindings, events, middleware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eloquent ORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active Record implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent query builder + relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defer time-intensive tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple driver support (Redis, DB, SQS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Middleware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter HTTP requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before/after request processing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick reference for Laravel interview topics."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Request Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "index.php -> Kernel -> Service Providers -> Router -> Middleware -> Controller"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolves dependencies via constructor type-hints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eloquent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active Record ORM with relationships, accessors, mutators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defer tasks with worker processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHPUnit, Feature tests, Browser tests (Laravel Dusk)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-resolution vs explicit binding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eloquent ORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database interaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convenience vs performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async task processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responsiveness vs complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Middleware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility vs overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code quality assurance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coverage vs maintenance cost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Test your Laravel interview knowledge."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the entry point of every Laravel request?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) routes/web.php"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) public/index.php"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) app/Http/Kernel.php"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) artisan serve"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>B) public/index.php</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " How does the service container resolve dependencies?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Manual instantiation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Automatic resolution via constructor type-hints"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Factory pattern"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Service locator pattern"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>B) Automatic resolution via constructor type-hints</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " What type of ORM does Eloquent implement?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) Data Mapper"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) Active Record"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) Repository"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) Table Gateway"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>B) Active Record</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q4:"
                  }), " Which middleware runs before a request reaches the controller?"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "A) Terminable middleware"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "B) Route middleware"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "C) After middleware"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "D) Response middleware"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                  children: (0,jsx_runtime.jsx)(_components.summary, {
                    children: "Answer</summary>B) Route middleware</details>\n"
                  })
                })]
              })
            })]
          })
        })]
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