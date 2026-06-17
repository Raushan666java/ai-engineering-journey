# Laravel 13 with AI & Automation â€” Complete University Textbook

## Course Description

![Laravel Course Overview](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/laravel/index.png)


This comprehensive textbook covers **Laravel 13**, PHP's premier full-stack web framework, through the lens of modern AI-powered development. Students will master the entire Laravel ecosystemâ€”from foundational concepts like routing, Eloquent ORM, and Blade templating through advanced topics including the **Laravel AI SDK**, **Model Context Protocol (MCP)**, **semantic vector search**, **Laravel Boost**, and **enterprise-scale system design**.

The curriculum is designed for a single purpose: to prepare you to build, deploy, and scale **production-grade Laravel applications with AI capabilities woven in at every layer**. Each chapter builds on the previous, following the university textbook template: Learning Objectives, Theory with code examples, Summary, and Exercises (Review Questions, Application Problems, Challenge Problems). The course culminates in a capstone project that integrates everything into a complete AI-powered SaaS platform.

Part 0 provides foundational knowledge for students who need a refresher on PHP, MySQL, HTML, CSS, JavaScript, and AI/ML concepts before diving into Laravel.

## Course Structure

The course is organized into ten parts, each building on the last.

| Part | Chapters | Focus |
|------|----------|-------|
| 0 | P1â€“P6 | Foundations â€” PHP, MySQL, HTML, CSS, JavaScript, AI/ML fundamentals |
| I | 1â€“6 | Laravel Fundamentals â€” from zero to working application |
| II | 7â€“11 | Advanced Laravel â€” APIs, real-time, packages, testing, performance |
| III | 12â€“18 | AI & Automation â€” AI SDK, MCP, vector search, Boost, automation patterns |
| IV | 19â€“21 | System Design â€” architecture patterns, scaling, enterprise design |
| V | 22â€“24 | Case Studies & Capstone â€” real-world applications end-to-end |
| VI | 25â€“26 | Multi-Agent Systems & Business Automation â€” agent orchestration, workflows |
| VII | 27â€“36 | Industry Verticals â€” AI/automation per sector (healthcare, finance, education, logistics, HR, marketing, customer service, real estate, legal, manufacturing) |
| VIII | 37 | Enterprise Capstone â€” multi-agent platform integrating all patterns |
| IX | 38â€“48 | Interview Preparation â€” general Laravel + 10 industry-specific interview Q&A chapters |
| X | 49â€“54 | Foundations Interview Preparation â€” PHP, MySQL, HTML, CSS, JS, AI/ML interview Q&A |

## Chapter Listing

### Part 0: Foundations for Laravel

| # | Chapter | Topics |
|---|---------|--------|
| P1 | [PHP Foundations for Laravel](php-basics.md) | PHP syntax, variables, arrays, functions, OOP (classes, inheritance, interfaces, traits, namespaces), error handling, Composer, autoloading, PHP 8.3 features (readonly classes, enums, typed properties), design patterns for Laravel devs |
| P2 | [MySQL & Database Design](mysql-database.md) | Relational database concepts, SQL queries (SELECT, JOIN, GROUP BY, subqueries), indexing strategies, normalization & denormalization, transactions & locking, database design patterns, migration concepts |
| P3 | [HTML Fundamentals](html-basics.md) | HTML document structure, semantic HTML5 elements, forms & input types, accessibility (ARIA, semantic landmarks), SEO basics, HTML APIs (Canvas, Drag & Drop, Storage, History) |
| P4 | [CSS Fundamentals](css-basics.md) | CSS selectors & specificity, box model, flexbox & grid, responsive design (media queries, mobile-first), CSS custom properties, animations & transitions, Tailwind CSS overview |
| P5 | [JavaScript Fundamentals](javascript-basics.md) | JS syntax, DOM manipulation, ES6+ (arrow functions, promises, async/await, destructuring, modules), AJAX & Fetch API, event handling, basic Vue.js/React concepts, JavaScript for Laravel devs (Alpine.js focus) |
| P6 | [AI/ML Fundamentals & Laravel Integration](ai-ml-fundamentals.md) | Classical ML concepts (regression, classification, clustering, NLP), PHP-ML & Rubix ML libraries, training & deploying models, Laravel AI SDK integration with ML pipelines, feature engineering, model evaluation, MLOps basics, combining classical ML with LLM agents |

### Part I: Laravel Fundamentals

| # | Chapter | Topics |
|---|---------|--------|
| 01 | [Introduction to Laravel 13](01-introduction.md) | PHP 8.3 features, Laravel philosophy, installation (Herd, Sail, installer), directory structure, environment config, artisan CLI, Laravel & AI-assisted development, Hello World application |
| 02 | [Architecture, Routing, Middleware & Controllers](02-architecture-routing.md) | Request lifecycle, service container basics, routing (web, api, parameters, named routes), route groups & middleware, controller organization, dependency injection in controllers, route model binding, request & response objects |
| 03 | [Blade Templating, Components & Frontend](03-blade-frontend.md) | Blade syntax (echo, conditionals, loops, layouts), template inheritance, components & slots, anonymous components, Blade with Vite & asset compilation, Alpine.js integration, Livewire overview, Inertia overview, forms & CSRF |
| 04 | [Eloquent ORM, Database & Migrations](04-eloquent-database.md) | Migration architecture & design, schema builder, seeders & factories, Eloquent models & conventions, relationships (one-to-many, many-to-many, polymorphic, has-many-through), eager loading & N+1 problem, accessors, mutators, casts, Eloquent collections, scopes, events & observers |
| 05 | [Authentication, Authorization & Security](05-auth-security.md) | Authentication scaffolding (Laravel Breeze, Jetstream, starter kits), session-based auth, API auth with Sanctum, authorization gates & policies, Blade authorization directives, CSRF protection, XSS prevention, SQL injection via Eloquent, rate limiting, input validation (Form Requests, rules) |
| 06 | [Queues, Jobs, Notifications & Mail](06-queues-notifications.md) | Queue drivers (sync, database, Redis, SQS), job classes & dispatch, job middleware & serialization, queue workers & Horizon, notification channels (mail, database, broadcast, SMS), mailables & mail drivers, Markdown mail templates, events & listeners, event subscribers |

### Part II: Advanced Laravel

| # | Chapter | Topics |
|---|---------|--------|
| 07 | [API Development & Integration](07-api-development.md) | RESTful API design in Laravel, resource controllers, API resources & collections, JSON:API resources (new in Laravel 13), Sanctum token-based API auth, API versioning strategies, rate limiting for APIs, response formatting & error handling, pagination, GraphQL with Lighthouse |
| 08 | [Broadcasting, Events & Real-Time Features](08-broadcasting-realtime.md) | Event system deep dive, Laravel Reverb (WebSocket server), broadcasting with Pusher/Reverb, presence channels, Echo client library, notification events & real-time alerts, server-sent events, queue event processing |
| 09 | [Service Container, Facades & Package Development](09-container-packages.md) | Service container (bind, singleton, instance, tag, extend), service providers (register, boot, deferrable), facades & real-time facades, package discovery, developing & distributing packages, custom Artisan commands, scheduled tasks |
| 10 | [Testing, Debugging & Observability](10-testing-observability.md) | PHPUnit & PEST configuration, HTTP tests (requests, responses, JSON), database tests (factories, refresh, assertions), feature vs unit tests, mocking, browser tests (Dusk), Laravel Telescope (request monitoring, queries, mail, notifications, cache, scheduled tasks), Laravel Pulse (application health, slow queries, usage), Laravel Nightwatch |
| 11 | [Caching, Performance & Octane](11-caching-performance.md) | Cache drivers (file, database, Redis, DynamoDB), cache tags & atomic locks, Cache::touch() TTL extension (Laravel 13), query caching & eager loading, Redis optimization strategies, database indexing strategies, Laravel Octane (Swoole/RR), roadmap for 1M requests/day |

### Part III: Laravel AI & Automation

| # | Chapter | Topics |
|---|---------|--------|
| 12 | [AI SDK: Agents, Prompting & Structured Output](12-ai-sdk-agents.md) | AI SDK installation, provider configuration (Anthropic, OpenAI, Gemini, 14+ providers), creating agents with make:agent, system prompts & instructions, prompting agents, conversation context & RemembersConversations trait, structured output with JSON Schema, nested objects & arrays, streaming (SSE, Vercel AI SDK protocol), broadcasting agent responses, queueing agents |
| 13 | [AI SDK: Tools, MCP Tools & Provider Tools](13-ai-sdk-tools.md) | Creating custom tools (make:tool), tool schemas, tool descriptions, Similarity Search tool for RAG, fetching MCP tools from AI SDK, provider tools (WebSearch, WebFetch, FileSearch), anonymous agents, agent middleware, agent configuration & provider options |
| 14 | [AI SDK: Images, Audio, Transcriptions & Embeddings](14-ai-sdk-media.md) | Image generation (Image::of()->generate()), audio/text-to-speech (Audio::of()->generate()), transcription/STT (Transcript::of()->fromFile()), embeddings generation (Str::toEmbeddings(), Embeddings::for()), querying embeddings, caching embeddings, reranking results, file uploads, vector stores, failover strategies, testing AI features, events |
| 15 | [Laravel MCP â€” Model Context Protocol](15-mcp.md) | MCP protocol overview & specification, installing Laravel MCP, creating servers (make:mcp-server), web servers & local servers, creating tools (make:mcp-tool), tool input & output schemas, tool annotations, conditional tool registration, streaming & structured responses, prompts & resources, apps & Boost integration, authentication (OAuth, Sanctum), MCP client connections, testing servers |
| 16 | [Semantic Search, Vector Search & RAG with pgvector](16-search-rag.md) | Full-text search (whereFullText, MariaDB/MySQL/PostgreSQL), vector embeddings with pgvector, generating & storing embeddings (ensureVectorExtensionExists), HNSW indexing, similarity queries (whereVectorSimilarTo), reranking (Reranking::of, Collection::rerank), Laravel Scout database engine, Scout third-party engines (Algolia, Meilisearch, Typesense), combining full-text + reranking for RAG |
| 17 | [Laravel Boost â€” AI-Assisted Development](17-boost.md) | Installing Laravel Boost, 15+ specialized tools, over 17,000 vectorized documentation pieces, custom AI guidelines (.ai/guidelines), IDE integration (Cursor, Claude Code, OpenCode), agentic development practices, AI guidelines for Laravel conventions |
| 18 | [Automation Patterns & Workflows](18-automation-patterns.md) | Event-driven automation, queue-based pipeline patterns, AI agent automation with tools, scheduled task automation, webhook-driven automation, CI/CD integration, deployment automation (Forge, Vapor, Envoyer), monitoring alerts automation, business process automation with Laravel Workflow |

### Part IV: System Design for Laravel

| # | Chapter | Topics |
|---|---------|--------|
| 19 | [Laravel Application Architecture Patterns](19-architecture-patterns.md) | Service layer pattern, repository pattern, action classes & single-responsibility commands, DTOs & data transfer objects, domain-driven design in Laravel, hexagonal architecture, event sourcing & CQRS with event store, multi-tenancy patterns, modular monolith vs microservices |
| 20 | [Scaling Laravel](20-scaling-laravel.md) | Horizontal scaling strategies, Laravel Vapor (serverless), Laravel Cloud (LAN-connected services), Octane performance tuning, Redis cluster scaling, database read replicas, queue scaling, CDN integration, session management at scale, stateless application design |
| 21 | [System Design: Laravel at Enterprise Scale](21-system-design-scale.md) | Design for 10M+ users, multi-region deployment, global database sharding, read-heavy optimization (cascade caching: in-memory â†’ Redis â†’ DB), write-heavy optimization (queue-backed writes, CQRS), API rate limiting at scale, SLA/SLO/SLI definitions, disaster recovery, capacity planning, cost optimization, migration from monolith to services |

### Part V: Case Studies & Capstone

| # | Chapter | Topics |
|---|---------|--------|
| 22 | [Case Study: SaaS E-Commerce Platform](22-case-study-ecommerce.md) | Requirements (multi-tenant, 100K products, 1M users), data model (tenantâ†’storeâ†’productâ†’order), checkout pipeline (cart service, payment processing with Cashier, inventory management, order confirmation queue), search architecture (Scout + Meilisearch), multi-tenant caching strategy, full system design with capacity estimation |
| 23 | [Case Study: AI-Powered Content Platform](23-case-study-ai-content.md) | Requirements (1M documents, semantic search, AI-generated content), architecture (Laravel backend + AI SDK agents), RAG pipeline (document ingestion â†’ embedding â†’ pgvector â†’ similarity search â†’ LLM augmentation), agent design (content writer, editor, researcher agents), vector store strategy, MCP tool exposure, content moderation with AI |
| 24 | [Capstone Project: AI-Powered SaaS Platform](24-capstone.md) | Full specification: team collaboration SaaS with AI features, system architecture diagram, data model, AI agent layer (document analysis agent, meeting summarizer, code reviewer), MCP server for external tool access, search & RAG pipeline, deployment architecture (Vapor/Cloud), testing strategy, performance budget, monitoring setup |

### Part VI: Multi-Agent Systems & Business Automation

| # | Chapter | Topics |
|---|---------|--------|
| 25 | [Multi-Agent Systems & Orchestration](25-multi-agent-systems.md) | Supervisor/worker pattern, agent teams & handoffs, router agents, parallel agent execution, state management across agents, memory sharing, queue-backed orchestration, agent observability, multi-agent failure modes, testing multi-agent systems |
| 26 | [Business Automation Agents](26-business-automation-agents.md) | Scheduled agents for recurring tasks, event-triggered agents, webhook-driven automation, approval workflows with agents, human-in-the-loop patterns, agent-based data pipelines, notification & escalation agents, audit logging for automated decisions |

### Part VII: Industry Verticals â€” AI & Automation per Sector

| # | Chapter | Topics |
|---|---------|--------|
| 27 | [Healthcare](27-healthcare.md) | Patient management agents, clinical decision support, HIPAA compliance, appointment scheduling AI, medical record RAG, diagnostic assistance agents, claims processing automation, medication management, healthcare data models |
| 28 | [Finance & FinTech](28-finance.md) | Fraud detection agents, transaction monitoring, KYC/AML verification, credit scoring pipelines, trading signal automation, portfolio management agents, regulatory reporting, payment processing automation, financial forecasting |
| 29 | [Education & EdTech](29-education.md) | Personalized learning path agents, assessment & grading automation, content generation for courses, adaptive quiz engines, student progress tracking, enrollment workflow automation, recommendation systems for curricula |
| 30 | [Logistics & Supply Chain](30-logistics.md) | Inventory prediction agents, route optimization, shipment tracking automation, supplier management, warehouse automation, demand forecasting, fleet management, procurement agents, supply chain visibility dashboards |
| 31 | [HR & Recruitment](31-hr-recruitment.md) | Resume screening & ranking agents, interview scheduling automation, candidate matching, onboarding workflow agents, performance review analysis, employee sentiment monitoring, training recommendation, compliance tracking |
| 32 | [Marketing & Advertising](32-marketing.md) | Campaign optimization agents, audience segmentation & targeting, content generation pipelines, A/B testing automation, SEO analysis agents, social media scheduling, lead scoring & nurturing, marketing analytics dashboards |
| 33 | [Customer Service & Support](33-customer-service.md) | Ticket triage & routing agents, sentiment analysis, knowledge base RAG, escalation automation, multi-channel support agents, customer satisfaction tracking, self-service portal agents, SLA monitoring |
| 34 | [Real Estate & Property](34-real-estate.md) | Property listing agents, valuation prediction, tour scheduling automation, document processing, lead qualification agents, market analysis, rental management, CRM automation for agents |
| 35 | [Legal & Compliance](35-legal.md) | Contract review & analysis agents, document discovery automation, compliance monitoring, case management workflows, legal research agents, e-discovery pipelines, automated report generation |
| 36 | [Manufacturing & Industrial](36-manufacturing.md) | Predictive maintenance agents, quality control automation, IoT data ingestion & processing, supply chain optimization, production scheduling, safety compliance monitoring, inventory automation, equipment lifecycle management |

### Part VIII: Enterprise Capstone

| # | Chapter | Topics |
|---|---------|--------|
| 37 | [Capstone: Enterprise Multi-Agent Platform](37-enterprise-capstone.md) | Full specification: cross-industry multi-agent platform, centralized agent registry, shared memory & knowledge base, agent communication bus, monitoring & observability, multi-tenant isolation, integration with MCP servers, deployment architecture, testing strategy, performance budget |

### Part IX: Interview Preparation

| # | Chapter | Focus |
|---|---------|-------|
| 38 | [Laravel General Interview Q&A](38-interview-general.md) | Top 100+ interview questions covering fundamentals, advanced Laravel, AI SDK, MCP, system design, multi-agent systems, and automation patterns |
| 39 | [Healthcare Interview Q&A](39-interview-healthcare.md) | Common interview questions for Laravel developer roles in healthcare and health-tech companies |
| 40 | [Finance Interview Q&A](40-interview-finance.md) | Common interview questions for Laravel developer roles in fintech and financial services |
| 41 | [Education Interview Q&A](41-interview-education.md) | Common interview questions for Laravel developer roles in edtech and educational institutions |
| 42 | [Logistics Interview Q&A](42-interview-logistics.md) | Common interview questions for Laravel developer roles in logistics and supply chain |
| 43 | [HR & Recruitment Interview Q&A](43-interview-hr.md) | Common interview questions for Laravel developer roles in HR technology |
| 44 | [Marketing Interview Q&A](44-interview-marketing.md) | Common interview questions for Laravel developer roles in marketing and adtech |
| 45 | [Customer Service Interview Q&A](45-interview-customer-service.md) | Common interview questions for Laravel developer roles in customer support platforms |
| 46 | [Real Estate Interview Q&A](46-interview-real-estate.md) | Common interview questions for Laravel developer roles in real estate and property technology |
| 47 | [Legal Interview Q&A](47-interview-legal.md) | Common interview questions for Laravel developer roles in legal technology |
| 48 | [Manufacturing Interview Q&A](48-interview-manufacturing.md) | Common interview questions for Laravel developer roles in manufacturing and industrial technology |

### Part X: Foundations Interview Preparation

| # | Chapter | Focus |
|---|---------|-------|
| 49 | [PHP Interview Q&A](49-interview-php.md) | 100+ interview questions on PHP fundamentals, OOP, design patterns, Composer, PHP 8.3 features, and Laravel-era PHP |
| 50 | [MySQL Interview Q&A](50-interview-mysql.md) | Interview questions on SQL queries, database design, indexing, normalization, transactions, query optimization, and Laravel database layer |
| 51 | [HTML Interview Q&A](51-interview-html.md) | Interview questions on semantic HTML, forms, accessibility, SEO, HTML5 APIs, and Blade integration patterns |
| 52 | [CSS Interview Q&A](52-interview-css.md) | Interview questions on selectors, box model, flexbox/grid, responsive design, animations, Tailwind/CSS frameworks, and Laravel frontend integration |
| 53 | [JavaScript Interview Q&A](53-interview-javascript.md) | Interview questions on ES6+, DOM, async/await, promises, Fetch API, Alpine.js, Vue.js/React integration, and JavaScript in Laravel ecosystems |
| 54 | [AI/ML Interview Q&A](54-interview-ai-ml.md) | Interview questions on classical ML, PHP-ML/Rubix ML, model deployment, Laravel AI SDK, MCP integration, and production AI/ML workflows |

## Supplementary Resources

- [Laravel 13.x Official Documentation](https://laravel.com/docs/13.x)
- [Laracasts](https://laracasts.com) â€” Video tutorials
- [Laravel News](https://laravel-news.com) â€” Community news and tutorials
- *Laravel: Up & Running* by Matt Stauffer (O'Reilly)
- *Laravel Design Patterns and Best Practices* by Arda KÄ±lÄ±Ã§daÄŸÄ± and H. Ä°brahim YÄ±lmaz
- [Laravel AI SDK GitHub](https://github.com/laravel/ai)
- [Laravel MCP GitHub](https://github.com/laravel/mcp)
- [Laravel Boost GitHub](https://github.com/laravel/boost)