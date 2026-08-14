"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[59258],{

/***/ 97231
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_00_core_computer_science_05_oop_design_patterns_md_7fa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-00-core-computer-science-05-oop-design-patterns-md-7fa.json
const site_docs_courses_ai_engineering_placement_00_core_computer_science_05_oop_design_patterns_md_7fa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/core-computer-science/05-oop-design-patterns","title":"OOP and Design Patterns for AI Engineers","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/00-core-computer-science/05-oop-design-patterns.md","sourceDirName":"courses/ai-engineering-placement/00-core-computer-science","slug":"/ai-engineering-placement/00-core-computer-science/05-oop-design-patterns","permalink":"/ai-engineering-journey/ai-engineering-placement/00-core-computer-science/05-oop-design-patterns","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"05-oop-design-patterns","slug":"/ai-engineering-placement/00-core-computer-science/05-oop-design-patterns","title":"OOP and Design Patterns for AI Engineers","sidebar_label":"OOP and Design Patterns for AI Engineers","sidebar_position":6},"sidebar":"placementSidebar","previous":{"title":"Computer Architecture for AI Engineers","permalink":"/ai-engineering-journey/ai-engineering-placement/00-core-computer-science/04-computer-architecture"},"next":{"title":"Ethical Hacking & Security Case Studies (India & Global)","permalink":"/ai-engineering-journey/ai-engineering-placement/00-core-computer-science/06-ethical-hacking"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/00-core-computer-science/05-oop-design-patterns.md


const frontMatter = {
	id: '05-oop-design-patterns',
	slug: '/ai-engineering-placement/00-core-computer-science/05-oop-design-patterns',
	title: 'OOP and Design Patterns for AI Engineers',
	sidebar_label: 'OOP and Design Patterns for AI Engineers',
	sidebar_position: 6
};
const contentTitle = 'OOP and Design Patterns for AI Engineers';

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
  "value": "Encapsulation, Inheritance, Polymorphism, Composition",
  "id": "encapsulation-inheritance-polymorphism-composition",
  "level": 3
}, {
  "value": "SOLID Principles",
  "id": "solid-principles",
  "level": 3
}, {
  "value": "GoF Patterns for AI Engineering",
  "id": "gof-patterns-for-ai-engineering",
  "level": 3
}, {
  "value": "Clean Architecture",
  "id": "clean-architecture",
  "level": 3
}, {
  "value": "Functional vs OOP",
  "id": "functional-vs-oop",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Strategy Pattern: Multiple LLM Providers",
  "id": "strategy-pattern-multiple-llm-providers",
  "level": 3
}, {
  "value": "Decorator Pattern: Caching, Rate Limiting, Logging",
  "id": "decorator-pattern-caching-rate-limiting-logging",
  "level": 3
}, {
  "value": "Adapter Pattern: Unified LLM Interface",
  "id": "adapter-pattern-unified-llm-interface",
  "level": 3
}, {
  "value": "Factory and Template Method",
  "id": "factory-and-template-method",
  "level": 3
}, {
  "value": "SOLID Refactoring Example",
  "id": "solid-refactoring-example",
  "level": 3
}, {
  "value": "Observer Pattern for ML Pipeline Monitoring",
  "id": "observer-pattern-for-ml-pipeline-monitoring",
  "level": 3
}, {
  "value": "Command Pattern for Inference Queuing",
  "id": "command-pattern-for-inference-queuing",
  "level": 3
}, {
  "value": "Clean Architecture for RAG Systems",
  "id": "clean-architecture-for-rag-systems",
  "level": 3
}, {
  "value": "Testing with Mocks",
  "id": "testing-with-mocks",
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
    blockquote: "blockquote",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    summary: "summary",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "oop-and-design-patterns-for-ai-engineers",
        children: "OOP and Design Patterns for AI Engineers"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After this chapter you will be able to apply SOLID principles to build extensible ML pipelines, select the right GoF pattern for.\ncommon AI engineering problems (multiple LLM providers, caching, rate limiting), design clean interfaces that decouple model serving from business logic, distinguish between composition and.\ninheritance, and refactor monolithic code into maintainable, testable modules."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Computer science fundamentals are the bedrock of every AI system. Understanding networks, operating systems, databases, and architecture helps you build reliable, scalable AI services. This module covers what interviewers expect you to know cold."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "encapsulation-inheritance-polymorphism-composition",
      children: "Encapsulation, Inheritance, Polymorphism, Composition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Encapsulation hides internal state behind a public interface. Inheritance defines an is-a relationship — a Dog is an Animal. Polymorphism allows different types to satisfy the same interface. Composition defines a has-a relationship — a Car has an Engine."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The classic advice: prefer composition over inheritance. Inheritance creates tight coupling and deep hierarchies that are hard to refactor. Composition allows swapping implementations at runtime."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "solid-principles",
      children: "SOLID Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Single Responsibility: A class should have one reason to change. An LLMService should not also handle caching, rate limiting, and logging."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Open/Closed: Open for extension, closed for modification. Add new model providers without changing existing code — use an interface and inject new implementations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Liskov Substitution: Subtypes must be substitutable for their base types. If a function accepts LLMProvider, it should work with OpenAIProvider, AnthropicProvider, and LocalProvider without knowing which is which."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interface Segregation: Clients should not depend on interfaces they do not use. A ModelInference interface should not include a train() method."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dependency Inversion: Depend on abstractions, not concretions. High-level orchestration code should depend on LLMProvider interface, not OpenAIClient directly."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gof-patterns-for-ai-engineering",
      children: "GoF Patterns for AI Engineering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strategy Pattern: Define a family of algorithms, encapsulate each, and make them interchangeable. In AI this means swapping inference backends (OpenAI, Anthropic, local), vector stores (Pinecone, Chroma, Qdrant), or embedding models."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "classDiagram\n    class InferenceStrategy {\n        <<interface>>\n        +generate(prompt): string\n    }\n    class OpenAIStrategy {\n        +generate(prompt): string\n    }\n    class AnthropicStrategy {\n        +generate(prompt): string\n    }\n    class LocalStrategy {\n        +generate(prompt): string\n    }\n    class InferenceClient {\n        -strategy: InferenceStrategy\n        +setStrategy(s: InferenceStrategy)\n        +generate(prompt): string\n    }\n    InferenceStrategy <|.. OpenAIStrategy\n    InferenceStrategy <|.. AnthropicStrategy\n    InferenceStrategy <|.. LocalStrategy\n    InferenceClient --> InferenceStrategy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Observer Pattern: One-to-many dependency where changes in one object notify all dependents. Useful for ML pipeline monitoring — data loading progress, training metrics, log streaming."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Factory Pattern: Creates objects without specifying the exact class. A ModelFactory creates the right model type (GPT-4, Claude 3, Llama 3) from configuration."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Singleton Pattern: Ensures only one instance exists. Used for configuration, model registries, and connection pools. Use with caution — singletons make testing difficult."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Decorator Pattern: Wraps an object to add behavior without changing its interface. Perfect for cross-cutting concerns in AI services: caching, rate limiting, logging, retry logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "classDiagram\n    class LLMService {\n        <<interface>>\n        +generate(prompt): string\n    }\n    class BasicLLMService {\n        +generate(prompt): string\n    }\n    class CachingDecorator {\n        -wrapped: LLMService\n        -cache: Map\n        +generate(prompt): string\n    }\n    class RateLimitDecorator {\n        -wrapped: LLMService\n        -bucket: TokenBucket\n        +generate(prompt): string\n    }\n    class LoggingDecorator {\n        -wrapped: LLMService\n        -cache: Map\n        +generate(prompt): string\n    }\n    LLMService <|.. BasicLLMService\n    LLMService <|.. CachingDecorator\n    LLMService <|.. RateLimitDecorator\n    LLMService <|.. LoggingDecorator\n    CachingDecorator --> LLMService\n    RateLimitDecorator --> LLMService\n    LoggingDecorator --> LLMService\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adapter Pattern: Converts one interface to another. Wrap OpenAI SDK, Anthropic SDK, and HuggingFace pipelines behind a common LLMProvider interface."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Command Pattern: Encapsulates a request as an object. Queue inference requests for retry, logging, or async processing."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Template Method: Defines the skeleton of an algorithm, letting subclasses override specific steps. A TrainingPipeline defines preprocess, train, evaluate, save — subclasses implement each step."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clean-architecture",
      children: "Clean Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dependency rule: source code dependencies point inwards. Outer layers (frameworks, databases, APIs) depend on inner layers (business logic, entities). Inner layers never depend on outer layers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For AI systems: entities are Model, Dataset, Evaluation. Use cases are InferenceUseCase (prompt -> response), TrainingUseCase (data -> trained model). Interface adapters wrap external dependencies (APIs, databases, file systems)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional-vs-oop",
      children: "Functional vs OOP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Functional programming favors pure functions, immutability, and composition of small operations. OOP favors objects with identity, state changes, and polymorphism via inheritance."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For AI engineering: use OOP for the architecture (interfaces, dependency injection, strategy pattern) and functional style within components (pure data transformations, stateless functions). This hybrid approach is common in production ML code."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strategy-pattern-multiple-llm-providers",
      children: "Strategy Pattern: Multiple LLM Providers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface LLMProvider {\n    generate(prompt: string, options?: Record<string, unknown>): Promise<string>\n}\n\nclass OpenAIProvider implements LLMProvider {\n    async generate(prompt: string, options?: Record<string, unknown>): Promise<string> {\n        return OpenAI response to: ...\n    }\n}\n\nclass AnthropicProvider implements LLMProvider {\n    async generate(prompt: string, options?: Record<string, unknown>): Promise<string> {\n        return Anthropic response to: ...\n    }\n}\n\nclass LocalProvider implements LLMProvider {\n    async generate(prompt: string, options?: Record<string, unknown>): Promise<string> {\n        return Local model response to: ...\n    }\n}\n\nclass InferenceClient {\n    private provider: LLMProvider\n\n    constructor(provider: LLMProvider) {\n        this.provider = provider\n    }\n\n    setProvider(provider: LLMProvider): void {\n        this.provider = provider\n    }\n\n    async generate(prompt: string): Promise<string> {\n        return this.provider.generate(prompt)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decorator-pattern-caching-rate-limiting-logging",
      children: "Decorator Pattern: Caching, Rate Limiting, Logging"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BasicLLMService implements LLMProvider {\n    async generate(prompt: string): Promise<string> {\n        return Generated response for:\n    }\n}\n\nclass CachingDecorator implements LLMProvider {\n    private wrapped: LLMProvider\n    private cache: Map<string, { response: string; expiresAt: number }> = new Map()\n    private ttlMs: number\n\n    constructor(wrapped: LLMProvider, ttlMs: number = 300000) {\n        this.wrapped = wrapped\n        this.ttlMs = ttlMs\n    }\n\n    async generate(prompt: string): Promise<string> {\n        const cached = this.cache.get(prompt)\n        if (cached && cached.expiresAt > Date.now()) {\n            return cached.response\n        }\n        const response = await this.wrapped.generate(prompt)\n        this.cache.set(prompt, { response, expiresAt: Date.now() + this.ttlMs })\n        return response\n    }\n}\n\nclass RateLimitDecorator implements LLMProvider {\n    private wrapped: LLMProvider\n    private requestsPerMinute: number\n    private timestamps: number[] = []\n\n    constructor(wrapped: LLMProvider, rpm: number = 60) {\n        this.wrapped = wrapped\n        this.requestsPerMinute = rpm\n    }\n\n    async generate(prompt: string): Promise<string> {\n        const now = Date.now()\n        this.timestamps = this.timestamps.filter((t) => now - t < 60000)\n        if (this.timestamps.length >= this.requestsPerMinute) {\n            const waitMs = this.timestamps[0] + 60000 - now\n            await new Promise((r) => setTimeout(r, Math.max(waitMs, 0)))\n        }\n        this.timestamps.push(Date.now())\n        return this.wrapped.generate(prompt)\n    }\n}\n\nclass LoggingDecorator implements LLMProvider {\n    private wrapped: LLMProvider\n\n    constructor(wrapped: LLMProvider) {\n        this.wrapped = wrapped\n    }\n\n    async generate(prompt: string): Promise<string> {\n        const start = Date.now()\n        console.log(generate() called with prompt length )\n        try {\n            const response = await this.wrapped.generate(prompt)\n            console.log(generate() succeeded in ms)\n            return response\n        } catch (error) {\n            console.error(generate() failed after ms)\n            throw error\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adapter-pattern-unified-llm-interface",
      children: "Adapter Pattern: Unified LLM Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ILLMProvider {\n    complete(messages: { role: string; content: string }[]): Promise<string>\n    embedding(text: string): Promise<number[]>\n}\n\nclass OpenAIClientAdapter implements ILLMProvider {\n    private apiKey: string\n\n    constructor(apiKey: string) {\n        this.apiKey = apiKey\n    }\n\n    async complete(messages: { role: string; content: string }[]): Promise<string> {\n        return OpenAI completion for  messages\n    }\n\n    async embedding(text: string): Promise<number[]> {\n        return new Array(1536).fill(0).map(() => Math.random())\n    }\n}\n\nclass AnthropicClientAdapter implements ILLMProvider {\n    private apiKey: string\n\n    constructor(apiKey: string) {\n        this.apiKey = apiKey\n    }\n\n    async complete(messages: { role: string; content: string }[]): Promise<string> {\n        return Anthropic completion for  messages\n    }\n\n    async embedding(text: string): Promise<number[]> {\n        return new Array(1024).fill(0).map(() => Math.random())\n    }\n}\n\nclass HuggingFaceAdapter implements ILLMProvider {\n    private modelPath: string\n\n    constructor(modelPath: string) {\n        this.modelPath = modelPath\n    }\n\n    async complete(messages: { role: string; content: string }[]): Promise<string> {\n        return HuggingFace completion for  messages\n    }\n\n    async embedding(text: string): Promise<number[]> {\n        return new Array(768).fill(0).map(() => Math.random())\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "factory-and-template-method",
      children: "Factory and Template Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "abstract class TrainingPipeline {\n    async run(data: unknown[]): Promise<void> {\n        const prepared = this.preprocess(data)\n        const model = this.createModel()\n        const trained = await this.train(model, prepared)\n        const metrics = this.evaluate(trained, prepared)\n        this.save(trained, metrics)\n    }\n\n    protected abstract preprocess(data: unknown[]): unknown[]\n    protected abstract createModel(): unknown\n    protected abstract train(model: unknown, data: unknown[]): Promise<unknown>\n    protected abstract evaluate(model: unknown, data: unknown[]): Record<string, number>\n    protected abstract save(model: unknown, metrics: Record<string, number>): void\n}\n\nclass ClassificationPipeline extends TrainingPipeline {\n    protected preprocess(data: unknown[]): unknown[] {\n        return data\n    }\n\n    protected createModel(): unknown {\n        return { type: \"classifier\", layers: 3 }\n    }\n\n    protected async train(model: unknown, data: unknown[]): Promise<unknown> {\n        return { ...model as object, trained: true, accuracy: 0.95 }\n    }\n\n    protected evaluate(model: unknown, data: unknown[]): Record<string, number> {\n        return { accuracy: 0.95, f1: 0.94 }\n    }\n\n    protected save(model: unknown, metrics: Record<string, number>): void {\n        console.log(\"Model saved with metrics:\", metrics)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "solid-refactoring-example",
      children: "SOLID Refactoring Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Violation of Single Responsibility and Dependency Inversion:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class MonolithicService {\n    private openaiKey: string\n\n    constructor() {\n        this.openaiKey = process.env.OPENAI_KEY || \"\"\n    }\n\n    async handlePrompt(prompt: string): Promise<string> {\n        const cached = this.getFromCache(prompt)\n        if (cached) return cached\n        const response = await this.callOpenAI(prompt)\n        this.logRequest(prompt, response)\n        this.addToCache(prompt, response)\n        return response\n    }\n\n    private async callOpenAI(prompt: string): Promise<string> {\n        return \nesponse to\n    }\n\n    private getFromCache(key: string): string | null {\n        return null\n    }\n\n    private addToCache(key: string, value: string): void {\n    }\n\n    private logRequest(prompt: string, response: string): void {\n        console.log(prompt, response)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After refactoring with Dependency Inversion and composition:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Cache {\n    get(key: string): string | null\n    set(key: string, value: string, ttlMs: number): void\n}\n\ninterface Logger {\n    log(message: string): void\n}\n\nclass RefactoredService {\n    private provider: LLMProvider\n    private cache: Cache\n    private logger: Logger\n\n    constructor(provider: LLMProvider, cache: Cache, logger: Logger) {\n        this.provider = provider\n        this.cache = cache\n        this.logger = logger\n    }\n\n    async handlePrompt(prompt: string): Promise<string> {\n        const cached = this.cache.get(prompt)\n        if (cached) {\n            this.logger.log(\"Cache hit\")\n            return cached\n        }\n        const response = await this.provider.generate(prompt)\n        this.cache.set(prompt, response, 300000)\n        this.logger.log(\"Cache miss - generated new response\")\n        return response\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observer-pattern-for-ml-pipeline-monitoring",
      children: "Observer Pattern for ML Pipeline Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The observer pattern defines a one-to-many dependency. When the subject changes state, all observers are notified. In AI pipelines:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Training loop publishes epoch metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Observers include console logger, TensorBoard writer, Slack notifier, metrics database"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding a new observer does not modify the training code"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Observer {\n    update(event: string, data: Record<string, unknown>): void\n}\n\nclass TrainingSubject {\n    private observers: Observer[] = []\n\n    attach(observer: Observer): void {\n        this.observers.push(observer)\n    }\n\n    detach(observer: Observer): void {\n        this.observers = this.observers.filter((o) => o !== observer)\n    }\n\n    notify(event: string, data: Record<string, unknown>): void {\n        for (const observer of this.observers) {\n            observer.update(event, data)\n        }\n    }\n}\n\nclass ConsoleLoggerObserver implements Observer {\n    update(event: string, data: Record<string, unknown>): void {\n        console.log(\"[\" + event + \"]\", JSON.stringify(data))\n    }\n}\n\nclass SlackNotifierObserver implements Observer {\n    private webhookUrl: string\n\n    constructor(webhookUrl: string) {\n        this.webhookUrl = webhookUrl\n    }\n\n    async update(event: string, data: Record<string, unknown>): Promise<void> {\n        if (event === \"training_complete\") {\n            await fetch(this.webhookUrl, {\n                method: \"POST\",\n                body: JSON.stringify({ text: \"Training complete: \" + JSON.stringify(data) }),\n            })\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "command-pattern-for-inference-queuing",
      children: "Command Pattern for Inference Queuing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The command pattern encapsulates a request as an object. Useful for queuing, retrying, and logging inference requests."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Command {\n    execute(): Promise<unknown>\n    undo?(): Promise<unknown>\n}\n\nclass InferenceCommand implements Command {\n    private provider: LLMProvider\n    private prompt: string\n    private retries: number = 0\n    private maxRetries: number\n\n    constructor(provider: LLMProvider, prompt: string, maxRetries: number = 3) {\n        this.provider = provider\n        this.prompt = prompt\n        this.maxRetries = maxRetries\n    }\n\n    async execute(): Promise<unknown> {\n        while (this.retries < this.maxRetries) {\n            try {\n                return await this.provider.generate(this.prompt)\n            } catch (error) {\n                this.retries++\n                if (this.retries >= this.maxRetries) throw error\n                await new Promise((r) => setTimeout(r, 1000 * this.retries))\n            }\n        }\n    }\n}\n\nclass CommandQueue {\n    private queue: Command[] = []\n    private processing: boolean = false\n\n    enqueue(command: Command): void {\n        this.queue.push(command)\n        this.processNext()\n    }\n\n    private async processNext(): Promise<void> {\n        if (this.processing || this.queue.length === 0) return\n        this.processing = true\n        const command = this.queue.shift()!\n        try {\n            await command.execute()\n        } catch (error) {\n            console.error(\"Command failed:\", error)\n        }\n        this.processing = false\n        this.processNext()\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clean-architecture-for-rag-systems",
      children: "Clean Architecture for RAG Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A clean architecture RAG system has concentric layers:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Entities (innermost): Document, Chunk, Embedding, Query, RelevanceScore"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use cases: IngestDocument (chunks documents, generates embeddings, stores), AnswerQuery (retrieves chunks, constructs prompt, generates answer)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interface adapters: VectorStoreGateway (PineconeAdapter, ChromaAdapter), LLMGateway (OpenAIAdapter, AnthropicAdapter), DocumentStoreGateway (S3Adapter, LocalAdapter)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Frameworks (outermost): Express routes, CLI commands, test harnesses"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dependency rule ensures that changes to Pinecone API do not affect the AnswerQuery use case — only the VectorStoreGateway adapter changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testing-with-mocks",
      children: "Testing with Mocks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class MockLLMProvider implements LLMProvider {\n    private responses: Map<string, string> = new Map()\n\n    setResponse(prompt: string, response: string): void {\n        this.responses.set(prompt, response)\n    }\n\n    async generate(prompt: string): Promise<string> {\n        const response = this.responses.get(prompt)\n        if (!response) throw new Error(\"No mock response for: \" + prompt)\n        return response\n    }\n}\n\n// Usage in tests\nconst mock = new MockLLMProvider()\nmock.setResponse(\"Hello\", \"Hi there!\")\nconst client = new InferenceClient(mock)\nconst result = await client.generate(\"Hello\")\n// result === \"Hi there!\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SOLID principles and design patterns are battle-tested approaches to writing maintainable, extensible AI systems. The strategy pattern lets you swap model providers at configuration time. The decorator.\npattern composes cross-cutting concerns (caching, rate limiting, logging) without tangling them with business logic. The adapter pattern unifies different LLM SDKs behind a common interface. Clean architecture keeps framework dependencies at the edges,.\nmaking your core logic testable. The rule is simple: depend on abstractions, inject dependencies, compose behavior, and test in isolation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always code to an interface, not an implementation. An LLMProvider interface lets you switch providers in one line"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the decorator pattern for all cross-cutting concerns — never mix caching/billing/logging into business logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A strategy + factory combination handles 90% of model provider switching needs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefer composition over inheritance in ML pipelines — deep class hierarchies are brittle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clean architecture prevents framework lock-in. Keep ML logic framework-agnostic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with mock providers using the same interface — swap OpenAI with a mock that returns canned responses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design patterns should simplify, not complicate. If a pattern adds more code than it removes, don't use it"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m00-s05-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: Explain the five SOLID principles with an example from an ML service.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Single Responsibility: a class has one reason to change — an LLMService should not also handle caching and rate limiting. Open/Closed: open for extension, closed for modification — add new providers behind an interface instead of editing existing code. Liskov Substitution: subtypes are substitutable — code accepting ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LLMProvider"
          }), " must work with OpenAI, Anthropic, and local implementations interchangeably. Interface Segregation: clients do not depend on unused methods — a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ModelInference"
          }), " interface should not include ", (0,jsx_runtime.jsx)(_components.code, {
            children: "train()"
          }), ". Dependency Inversion: depend on abstractions, not concretions — orchestration code depends on the provider interface, not on an SDK client."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The chapter's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MonolithicService"
          }), " violates Single Responsibility and Dependency Inversion; the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RefactoredService"
          }), " injects ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LLMProvider"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Cache"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Logger"
          }), " interfaces instead."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": Which principle is violated when a mock provider cannot be substituted in tests?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m00-s05-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does the Strategy pattern let you swap LLM providers at runtime?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Strategy defines a family of algorithms, encapsulates each, and makes them interchangeable. An ", (0,jsx_runtime.jsx)(_components.code, {
            children: "InferenceStrategy"
          }), " interface declares ", (0,jsx_runtime.jsx)(_components.code, {
            children: "generate(prompt)"
          }), "; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OpenAIStrategy"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AnthropicStrategy"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LocalStrategy"
          }), " implement it; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "InferenceClient"
          }), " holds a strategy and swaps it via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "setStrategy()"
          }), " — callers never know which provider is active."]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "In AI systems this pattern also covers vector stores (Pinecone, Chroma, Qdrant) and embedding models. Combined with a Factory that reads config and constructs the right strategy, it handles most provider-switching needs in one place."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How would you add a fallback provider chain on top of the Strategy pattern?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m00-s05-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: Why is the Decorator pattern ideal for caching, rate limiting, and logging around LLM calls?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Decorator wraps an object to add behavior without changing its interface. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CachingDecorator"
          }), " checks a TTL cache before calling the wrapped provider; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RateLimitDecorator"
          }), " enforces requests-per-minute; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LoggingDecorator"
          }), " times calls and logs failures. Each implements the same ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LLMProvider"
          }), " interface, so decorators nest in any order: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "new LoggingDecorator(new RateLimitDecorator(new CachingDecorator(new BasicLLMService())))"
          }), "."]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cross-cutting concerns stay out of business logic, every decorator is independently testable, and adding a new concern never touches the core service. This is the standard production shape for LLM gateways."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": What order would you apply cache, rate limit, and retry decorators and why?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m00-s05-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: What problem does the Adapter pattern solve when integrating multiple model SDKs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Each SDK has a different interface — OpenAI, Anthropic, and Hugging Face pipelines all expose different method names, message formats, and embedding dimensions. The Adapter pattern wraps each SDK behind one common interface: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "complete(messages)"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "embedding(text)"
          }), ". The chapter's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OpenAIClientAdapter"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AnthropicClientAdapter"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "HuggingFaceAdapter"
          }), " each implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ILLMProvider"
          }), ", so the application code never changes when a provider is swapped."]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Note embedding dimensions differ per provider (1536 vs 1024 vs 768), so the abstraction must normalize embeddings or the vector store must be versioned by model. The adapter is also where mapping to a canonical message schema belongs."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": Where would you normalize different embedding dimensions across providers?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m00-s05-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: Why prefer composition over inheritance in ML pipelines?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Inheritance creates an is-a relationship with tight coupling and deep hierarchies that are brittle to change — swapping the model backend means touching the class tree. Composition defines has-a relationships: a service owns an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LLMProvider"
          }), ", a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Cache"
          }), ", and a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Logger"
          }), ", injected at construction time. Implementations swap at runtime and are mocked trivially in tests."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The chapter's refactoring example shows the same ", (0,jsx_runtime.jsx)(_components.code, {
            children: "handlePrompt"
          }), " behavior implemented with composition: the provider, cache, and logger are injectable collaborators, so a test uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MockLLMProvider"
          }), " with canned responses. This is also why the Strategy and Decorator patterns are composable while inheritance hierarchies are not."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": Give an example where inheritance is genuinely the right call."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m00-s05-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: Explain the dependency rule in Clean Architecture using a RAG system.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Source code dependencies point inwards. Entities (Document, Chunk, Embedding, Query) are innermost; use cases (IngestDocument, AnswerQuery) orchestrate entities; interface adapters (VectorStoreGateway, LLMGateway, DocumentStoreGateway) wrap external dependencies; frameworks (Express routes, CLI) are outermost. Inner layers never depend on outer layers."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Consequence: if Pinecone changes its API, only the Pinecone adapter changes — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AnswerQuery"
          }), " is untouched. Tests exercise use cases with mock adapters. For a RAG system, the LLM gateway, vector store adapter, and document store are all swappable behind interfaces."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": Where would you put prompt templating — entity, use case, or adapter?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which SOLID principle is violated when a class handles both model inference and request logging?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Liskov Substitution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Interface Segregation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Single Responsibility"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Dependency Inversion\n// correct: C"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The decorator pattern is best suited for:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Creating families of related objects"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Adding behavior to an object without changing its interface"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Defining a one-to-many dependency"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Wrapping multiple interfaces into one\n// correct: B"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the primary benefit of the adapter pattern for LLM integrations?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Improved inference speed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Unified interface across different provider SDKs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Automatic retry on failures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Built-in caching\n// correct: B"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Dependency Inversion means:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Depend on concretions, not abstractions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Depend on abstractions, not concretions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Invert method call order"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Use inheritance for code reuse\n// correct: B"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why prefer composition over inheritance?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Composition is faster at runtime"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Inheritance creates tight coupling and deep hierarchies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Composition uses less memory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Inheritance is deprecated in TypeScript\n// correct: B"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a CircuitBreakerDecorator that wraps an LLMProvider and trips after N consecutive failures, with a configurable reset timeout."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a ProviderFactory that reads a config file and returns the correct LLMProvider implementation with all decorators applied."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refactor a monolithic RAG pipeline into clean architecture layers: entities (Document, Chunk, Query), use cases (IngestUseCase, QueryUseCase), and interface adapters (VectorStoreAdapter, LLMAdapter)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the observer pattern for a training pipeline that notifies multiple listeners (console logger, metrics dashboard, Slack notifier) on epoch completion."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using inheritance when composition would be simpler and more flexible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creating God classes that handle multiple responsibilities (inference + caching + logging)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tight coupling to specific LLM provider SDKs instead of coding to interfaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not applying the dependency inversion principle — high-level modules depending on low-level modules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Over-engineering with patterns when simple functions would suffice"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strategy Pattern"
        }), ": Define a family of algorithms (LLM providers, vector stores) and make them interchangeable at runtime"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decorator Pattern"
        }), ": Add cross-cutting concerns (caching, rate limiting, logging) without modifying the core class"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adapter Pattern"
        }), ": Unify different SDK interfaces behind a common interface for swappable implementations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clean Architecture"
        }), ": Source code dependencies point inwards — entities → use cases → adapters → frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SOLID Principles"
        }), ": Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Composition vs Inheritance"
        }), ": Prefer composition (has-a) over inheritance (is-a) for flexible, testable code"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing with Mocks"
        }), ": Use interface-based mocks to test without real API calls"]
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a model serving system that supports switching between OpenAI, Anthropic, and local models without code changes. Which patterns would you use?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You have a monolithic ML pipeline that handles data loading, training, evaluation, and deployment. How would you refactor it using clean architecture principles?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you had to refactor a tightly coupled system. How did you apply design patterns to improve it?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you explain the Strategy pattern to a non-technical product manager?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you implement a plugin architecture for LLM providers that allows third-party extensions?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the trade-offs between using Singleton pattern vs dependency injection for configuration management?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you apply the Decorator pattern to add GPU memory monitoring to an inference service?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a pipeline pattern for multi-stage GPU-accelerated data processing."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you build a model provider abstraction that lets you switch from OpenAI to a cheaper provider with minimal code changes?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What's the simplest architecture for a startup to support multiple LLM backends?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical Skills"
        }), ": List \"Design Patterns\", \"SOLID Principles\", \"Clean Architecture\", \"TypeScript\" under relevant skills"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Description"
        }), ": \"Applied Strategy and Decorator patterns to build a multi-provider LLM service, enabling provider switching in 1 line of code\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keywords"
        }), ": Include \"design patterns\", \"SOLID\", \"clean architecture\", \"dependency injection\" for ATS optimization"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Review SOLID principles with real-world AI examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Practice implementing Strategy, Decorator, and Adapter patterns from scratch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Prepare 2 examples of refactoring monolithic code using design patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Know when to use composition vs inheritance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Have questions ready about the company's architecture and design patterns used"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " OOP and Design Patterns for AI Engineers builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for OOP and Design Patterns for AI Engineers before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for OOP and Design Patterns for AI Engineers is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for OOP and Design Patterns for AI Engineers in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the OOP and Design Patterns for AI Engineers chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers OOP and Design Patterns for AI Engineers is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to OOP and Design Patterns for AI Engineers is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing OOP and Design Patterns for AI Engineers is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug OOP and Design Patterns for AI Engineers issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to OOP and Design Patterns for AI Engineers in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving OOP and Design Patterns for AI Engineers that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of OOP and Design Patterns for AI Engineers is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain OOP and Design Patterns for AI Engineers in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for OOP and Design Patterns for AI Engineers and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of OOP and Design Patterns for AI Engineers on an empty input?"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Level"
      }), ": Intermediate\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Study Time"
      }), ": 45-60 minutes\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisites"
      }), ": Complete understanding of previous modules recommended"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Start with the basics — understand the fundamental concepts before moving to advanced topics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Practice actively — don't just read, implement the code examples yourself."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Connect to prior knowledge — relate new concepts to what you learned in previous modules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pro Tip"
      }), ": Focus on understanding, not memorizing — understand why things work, not just how."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pro Tip"
      }), ": Review regularly — revisit key concepts after a few days to reinforce learning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym Method"
        }), ": Create acronyms for lists of concepts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visualization"
        }), ": Draw diagrams to visualize abstract concepts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach someone else"
        }), ": Explaining concepts to others reinforces your understanding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect to real-world"
        }), ": Relate technical concepts to everyday experiences"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chunking"
        }), ": Break complex topics into smaller, manageable pieces"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation and language specifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Designing Data-Intensive Applications\" by Martin Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"System Design Interview\" by Alex Xu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"AI Engineering\" by Chip Huyen"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research papers and blog posts from leading AI labs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How this connects to Core Computer Science fundamentals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prerequisites for advanced topics in this module"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world applications in AI engineering systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview questions that test deep understanding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: How long does it take to master oop design patterns?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: Do I need to memorize all the details?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Focus on understanding the core principles. Details can be looked up, but understanding cannot."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: What's the best way to practice?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Implement the code examples, then modify them to solve different problems. Build small projects."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: How often should I review this material?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Review after 1 day, 3 days, 1 week, and 1 month for long-term retention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Understanding the fundamentals is more important than memorizing syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Don't skip the exercises — they reinforce critical concepts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": This topic frequently appears in technical interviews at top companies."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": In real systems, these concepts are used daily by AI engineers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Evolution of this technology reflects decades of research and practical engineering experience."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding the evolution of oop design patterns helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input Validation"
        }), ": Always validate and sanitize inputs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error Handling"
        }), ": Don't expose internal details in error messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource Limits"
        }), ": Set appropriate limits to prevent denial of service"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authentication"
        }), ": Ensure proper authentication and authorization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Protection"
        }), ": Handle sensitive data according to security best practices"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For AI engineering, understanding oop design patterns at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of oop design patterns like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Project"
      }), ": Apply oop design patterns concepts in a mini-project\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal"
      }), ": Build a small application that demonstrates understanding of core principles\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration"
      }), ": 2-4 hours\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome"
      }), ": Working implementation with documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 1"
      }), ": What is the core concept of oop design patterns?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": The fundamental principle that enables efficient and scalable systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 2"
      }), ": When would you apply oop design patterns in real systems?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": When building production AI systems that require reliability, scalability, and maintainability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 3"
      }), ": What are the common pitfalls to avoid?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Over-engineering, ignoring edge cases, and not considering production requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Academic papers and conference proceedings (NeurIPS, ICML, ICLR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Industry whitepapers from leading AI companies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical blogs from Google, Meta, OpenAI, Anthropic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open-source implementations and documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangChain"
        }), ": Framework for building LLM-powered applications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LlamaIndex"
        }), ": Data framework for connecting LLMs with external data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hugging Face Transformers"
        }), ": State-of-the-art ML models and datasets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weights & Biases"
        }), ": Experiment tracking and model evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MLflow"
        }), ": Open-source platform for ML lifecycle management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prometheus + Grafana"
        }), ": Monitoring and observability stack"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Issues"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check input validation and data types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify API keys and authentication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor resource usage (CPU, memory, GPU)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review error logs for stack traces"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Debugging Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the issue with minimal input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add logging at key points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check external dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify configuration settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with known-good inputs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Quick Fire Questions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the core concept of Core Computer Science?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you use this in production?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the trade-offs?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does this scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are common pitfalls?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up Questions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you optimize this for 10x scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What monitoring would you add?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you test this in production?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for OOP and Design Patterns for AI Engineers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core OOP and Design Patterns for AI Engineers logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model Evaluation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accuracy, Precision, Recall, F1-Score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BLEU, ROUGE for text generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Latency, Throughput, Cost per inference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System Evaluation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "End-to-end latency (p50, p95, p99)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error rate and availability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resource utilization (CPU, memory, GPU)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Industry Applications"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google: Search ranking, translation, autocomplete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Amazon: Product recommendations, Alexa, fraud detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Netflix: Content recommendations, personalization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tesla: Autonomous driving, computer vision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenAI: ChatGPT, DALL-E, Codex"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After mastering Core Computer Science, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique."
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