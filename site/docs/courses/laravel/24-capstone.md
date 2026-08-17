---
id: 24-capstone
slug: /laravel/24-capstone
title: "Chapter 24: Capstone Project — AI-Powered Team Collaboration SaaS"
sidebar_label: "Chapter 24: Capstone Project — AI-Powered Team Collaboration SaaS"
sidebar_position: 24
---
# Chapter 24: Capstone Project — AI-Powered Team Collaboration SaaS

> **Previous:** [Case Study AI Content](./23-case-study-ai-content.md) | **Next:** [Multi-Agent Systems](./25-multi-agent-systems.md)

---

## Learning Objectives

- Synthesize all Laravel 13 concepts into a complete, production-grade SaaS application design
- Architect a multi-agent AI system with role-specialized agents, orchestration, and MCP tool exposure
- Design a hybrid search and RAG system operating across heterogeneous content types
- Implement real-time collaboration features using Reverb and Echo with presence channels
- Construct a comprehensive deployment, monitoring, and testing strategy for an AI-intensive Laravel application
- Define and enforce a strict performance budget across all system layers

---
## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Project Overview | Capstone project: full-stack AI application | Apply all previous concepts in one project |
| Architecture | Parts A-B: system and data model | Design the overall system and relational schema |
| AI Agents | Parts C-D: AI agent layer and MCP servers | Build AI agents with MCP tool exposure |
| Search | Parts E-F: search, RAG, and real-time | Implement semantic search and live collaboration |
| Deployment | Parts G-H: deployment and testing | Deploy with CI/CD and comprehensive testing |
| Performance | Parts I-J: performance budget and monitoring | Set metrics budgets and observe production |

## Chapter Roadmap

``mermaid
flowchart LR
    A[Part A: Architecture] --> B[Part B: Data Model]
    B --> C[Part C: AI Agents]
    C --> D[Part D: MCP Servers]
    D --> E[Part E: Search & RAG]
    E --> F[Part F: Real-Time]
    F --> G[Part G: Deployment]
    G --> H[Part H: Testing]
    H --> I[Part I: Performance]
    I --> J[Part J: Monitoring]
``



## Theory — Capstone Project Specification

![Capstone Project](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/24-capstone.png)


### 8.1 Project Overview



> **One-Sentence Takeaway:** Apply all concepts from the course in a single comprehensive capstone project.

**Platform Name:** TeamSynth

**Tagline:** *Where teams collaborate and AI amplifies every contribution.*

TeamSynth is a team collaboration platform that embeds AI agents directly into the team workflow. Every artifact a team creates — documents, meeting recordings, pull requests, chat messages — is ingested into a unified knowledge base. AI agents analyze, summarize, review, and search across this corpus, turning raw collaboration output into actionable intelligence.

**Core Value Proposition**

1. Automatically capturing and indexing every team artifact.
2. Providing a semantic search layer that understands intent, not just keywords.
3. Deploying specialized AI agents: meeting summarizers, document analysts, code reviewers.
4. Exposing the knowledge base and agent capabilities through MCP servers for external AI tools.

### 8.2 Part A — System Architecture


**High-Level Topology**

```
Cloudflare (CDN, DNS, DDoS)
       |
Load Balancer
       |
+------+------+
|      |      |
Octane Nodes (RoadRunner, N instances)
       |
Redis Cluster (Cache, Session, Queue, Horizon, Reverb Pub)
       |
PostgreSQL + pgvector (Users, Teams, Docs, Meetings, Embeddings)
       |
Queue Workers (Horizon: docs, meetings, reviews, embeddings, email)
       |
Reverb Server (Presence channels, collaboration, agent progress)
       |
AI SDK Layer (DocumentAnalysis, MeetingSummarizer, CodeReview, SearchAgent)
```

**Key Architectural Decisions**

| Decision | Rationale |
|---|---|
| Octane with RoadRunner | Persistent application in memory eliminates framework boot time. Critical for &lt;200ms page load budget. |
| PostgreSQL + pgvector | Single database for relational data and vector embeddings. No separate vector DB needed. |
| Redis for cache + queue + pub/sub | Three workloads on one cluster reduces operational complexity. |
| Separate AI worker queues | AI generation can take 30-60 seconds. Isolating prevents head-of-line blocking on request queues. |

### 8.3 Part B — Data Model


The data model supports five domain entities: User, Team, Project, Document, Meeting, and CodeReview. Each entity is team-scoped via a team_id foreign key. The embedding_cache table stores pgvector embeddings polymorphically across all content types.

```sql
CREATE TABLE users (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    email           VARCHAR(255) NOT NULL UNIQUE,
    password        VARCHAR(255) NOT NULL,
    avatar_url      VARCHAR(500) NULL,
    preferences     JSON,
    stripe_id       VARCHAR(255) NULL,
    trial_ends_at   TIMESTAMP NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE teams (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    owner_id        BIGINT UNSIGNED NOT NULL,
    name            VARCHAR(255) NOT NULL,
    slug            VARCHAR(255) NOT NULL UNIQUE,
    plan            ENUM('free', 'pro', 'enterprise') NOT NULL DEFAULT 'free',
    settings        JSON,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_team_owner FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE team_members (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    team_id         BIGINT UNSIGNED NOT NULL,
    user_id         BIGINT UNSIGNED NOT NULL,
    role            ENUM('owner', 'admin', 'member', 'viewer') NOT NULL DEFAULT 'member',
    joined_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE INDEX idx_team_user (team_id, user_id),
    CONSTRAINT fk_tm_team FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
    CONSTRAINT fk_tm_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE projects (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    team_id         BIGINT UNSIGNED NOT NULL,
    owner_id        BIGINT UNSIGNED NOT NULL,
    name            VARCHAR(255) NOT NULL,
    slug            VARCHAR(255) NOT NULL,
    description     TEXT,
    status          ENUM('active', 'archived', 'completed') NOT NULL DEFAULT 'active',
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_team (team_id),
    UNIQUE INDEX idx_team_slug (team_id, slug),
    CONSTRAINT fk_project_team FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
    CONSTRAINT fk_project_owner FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE documents (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    project_id      BIGINT UNSIGNED NOT NULL,
    team_id         BIGINT UNSIGNED NOT NULL,
    author_id       BIGINT UNSIGNED NOT NULL,
    title           VARCHAR(500) NOT NULL,
    slug            VARCHAR(500) NOT NULL,
    body            LONGTEXT,
    summary         TEXT,
    status          ENUM('draft', 'review', 'published', 'archived') NOT NULL DEFAULT 'draft',
    word_count      INT UNSIGNED NOT NULL DEFAULT 0,
    last_embedded_at TIMESTAMP NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_team (team_id),
    FULLTEXT INDEX ft_docs (title, body),
    UNIQUE INDEX idx_project_slug (project_id, slug),
    CONSTRAINT fk_doc_project FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    CONSTRAINT fk_doc_team FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
    CONSTRAINT fk_doc_author FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE document_versions (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    document_id     BIGINT UNSIGNED NOT NULL,
    version_number  INT UNSIGNED NOT NULL,
    title           VARCHAR(500) NOT NULL,
    body            LONGTEXT,
    summary         TEXT,
    editor_id       BIGINT UNSIGNED NULL,
    change_summary  VARCHAR(500),
    checksum        CHAR(64) NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_document (document_id),
    UNIQUE INDEX idx_doc_version (document_id, version_number),
    CONSTRAINT fk_dv_document FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE,
    CONSTRAINT fk_dv_editor FOREIGN KEY (editor_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE meetings (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    project_id      BIGINT UNSIGNED NOT NULL,
    team_id         BIGINT UNSIGNED NOT NULL,
    organizer_id    BIGINT UNSIGNED NOT NULL,
    title           VARCHAR(500) NOT NULL,
    description     TEXT,
    meeting_url     VARCHAR(500),
    started_at      TIMESTAMP NULL,
    ended_at        TIMESTAMP NULL,
    duration_seconds INT UNSIGNED NULL,
    status          ENUM('scheduled', 'in_progress', 'completed', 'cancelled') NOT NULL DEFAULT 'scheduled',
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_project (project_id),
    INDEX idx_team (team_id),
    CONSTRAINT fk_meeting_project FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    CONSTRAINT fk_meeting_team FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
    CONSTRAINT fk_meeting_organizer FOREIGN KEY (organizer_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE meeting_transcripts (
    id                BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    meeting_id        BIGINT UNSIGNED NOT NULL,
    speaker_id        BIGINT UNSIGNED NULL,
    speaker_name      VARCHAR(255) NOT NULL,
    content           TEXT NOT NULL,
    start_seconds     DECIMAL(8,2) NOT NULL,
    end_seconds       DECIMAL(8,2) NOT NULL,
    language          CHAR(2) NOT NULL DEFAULT 'en',
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_meeting (meeting_id),
    CONSTRAINT fk_transcript_meeting FOREIGN KEY (meeting_id) REFERENCES meetings(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE meeting_summaries (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    meeting_id      BIGINT UNSIGNED NOT NULL UNIQUE,
    summary         TEXT NOT NULL,
    action_items    JSON,
    decisions       JSON,
    key_topics      JSON,
    sentiment       VARCHAR(50),
    generated_by    VARCHAR(100) NOT NULL DEFAULT 'meeting-summarizer',
    model           VARCHAR(100) NOT NULL,
    duration_ms     INT UNSIGNED NOT NULL DEFAULT 0,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_ms_meeting FOREIGN KEY (meeting_id) REFERENCES meetings(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE code_reviews (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    project_id      BIGINT UNSIGNED NOT NULL,
    team_id         BIGINT UNSIGNED NOT NULL,
    author_id       BIGINT UNSIGNED NOT NULL,
    pr_url          VARCHAR(500) NOT NULL,
    pr_title        VARCHAR(500) NOT NULL,
    pr_description  TEXT,
    branch          VARCHAR(255),
    base_branch     VARCHAR(255),
    commit_sha      CHAR(40),
    status          ENUM('pending', 'in_review', 'changes_requested', 'approved') NOT NULL DEFAULT 'pending',
    ai_reviewed     BOOLEAN NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_project (project_id),
    INDEX idx_team (team_id),
    UNIQUE INDEX idx_pr_url (pr_url),
    CONSTRAINT fk_cr_project FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    CONSTRAINT fk_cr_team FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
    CONSTRAINT fk_cr_author FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE review_comments (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    code_review_id  BIGINT UNSIGNED NOT NULL,
    author_id       BIGINT UNSIGNED NULL,
    author_type     ENUM('human', 'ai') NOT NULL DEFAULT 'human',
    file_path       VARCHAR(500),
    line_start      INT UNSIGNED,
    line_end        INT UNSIGNED,
    body            TEXT NOT NULL,
    severity        ENUM('info', 'warning', 'critical') NOT NULL DEFAULT 'info',
    category        VARCHAR(100),
    resolved_at     TIMESTAMP NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_review (code_review_id),
    INDEX idx_severity (severity),
    CONSTRAINT fk_rc_review FOREIGN KEY (code_review_id) REFERENCES code_reviews(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE embedding_cache (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    embeddable_type VARCHAR(255) NOT NULL,
    embeddable_id   BIGINT UNSIGNED NOT NULL,
    chunk_index     INT UNSIGNED NOT NULL,
    chunk_text      TEXT NOT NULL,
    embedding       VECTOR(1536) NOT NULL,
    content_type    ENUM('document', 'meeting', 'code', 'comment') NOT NULL,
    team_id         BIGINT UNSIGNED NOT NULL,
    language        CHAR(2) NOT NULL DEFAULT 'en',
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_embeddable (embeddable_type, embeddable_id),
    INDEX idx_team (team_id),
    INDEX idx_content_type (content_type),
    CONSTRAINT fk_ec_team FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- HNSW index for fast ANN search
-- CREATE INDEX idx_embedding_hnsw ON embedding_cache
--     USING hnsw (embedding vector_cosine_ops) WITH (m = 16, ef_construction = 200);

CREATE TABLE agent_logs (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    team_id         BIGINT UNSIGNED NOT NULL,
    agent_type      VARCHAR(100) NOT NULL,
    session_id      CHAR(36) NOT NULL,
    user_id         BIGINT UNSIGNED NULL,
    action          VARCHAR(100) NOT NULL,
    input_tokens    INT UNSIGNED NOT NULL DEFAULT 0,
    output_tokens   INT UNSIGNED NOT NULL DEFAULT 0,
    model           VARCHAR(100) NOT NULL,
    duration_ms     INT UNSIGNED NOT NULL DEFAULT 0,
    status          ENUM('started', 'completed', 'failed') NOT NULL DEFAULT 'started',
    error_message   TEXT NULL,
    metadata        JSON,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_team (team_id),
    INDEX idx_agent_type (agent_type),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB;
```

### 8.4 Part C — AI Agent Layer


TeamSynth defines four specialized agents built on a shared `BaseAgent` class. Each agent logs every execution to `agent_logs` for observability and cost tracking.

**BaseAgent** provides scaffolding: `logStart()`, `logComplete()`, and `logFailed()` methods that write structured records to `agent_logs`. Every agent extends this class and implements a `handle(array $input): array` method.

**DocumentAnalysisAgent** — Analyzes documents to extract key points, suggest improvements, and compute quality scores. Supports three actions: summarize (3-5 sentence summary), suggest (actionable improvement ideas), and analyze (key points, quality score 1-10, readability level, suggested tags). Input is a document_id; output is structured JSON via the AI SDK with `response_format` set to `json_object`.

**MeetingSummarizerAgent** — Takes a meeting with its transcript segments (speaker-labeled with start/end timestamps), sends the full transcript to the AI model, and returns a structured summary. Output includes summary text, action items (with owner and deadline), decisions made, key topics discussed, and overall sentiment. The agent selects the correct model based on transcript length: gpt-4o for short meetings, gpt-4o-mini for standard, with automatic truncation of transcripts exceeding the model context window.

**CodeReviewAgent** — Connects to a GitHub PR via the PR URL, fetches the diff using the GitHub API, and analyzes each changed file. For each file, it examines the diff hunks and produces review comments tagged by severity (info, warning, critical) and category (security, performance, style, bug, best_practice). The agent respects the existing codebase style by analyzing surrounding context. Output also includes an overall PR summary, estimated risk score, and a pass/fail recommendation for the merge.

**SearchAgent** — The RAG agent. Accepts a natural language query, performs hybrid search (vector + full-text) across all team content, reranks results, and returns answers with source citations. Supports scoping to specific content types (documents, meetings, code) and date ranges. Implements semantic caching: if a semantically similar query was answered recently, the cached response is returned.

**Agent Chaining — Code Review Pipeline**

```php
// App/Services/CodeReviewPipeline.php
public function runFullReview(int $codeReviewId): array
{
    $review = CodeReview::findOrFail($codeReviewId);

    // Step 1: AI code review
    $comments = $this->codeReviewAgent->handle([
        'pr_url' => $review->pr_url,
        'review_id' => $review->id,
    ]);

    // Step 2: For critical comments, deep-dive with DocumentAnalysisAgent
    $deepDives = [];
    foreach ($comments as $comment) {
        if ($comment['severity'] === 'critical') {
            $deepDives[] = $this->docAgent->handle([
                'document_id' => $this->findRelatedDocument($comment),
                'action' => 'analyze',
            ]);
        }
    }

    // Step 3: Post summary to PR
    $this->githubService->postPRComment($review->pr_url, [
        'summary' => $comments['overall_summary'],
        'critical_count' => count($deepDives),
    ]);

    return ['comments' => $comments, 'deep_dives' => $deepDives];
}
```

### 8.5 Part D — MCP Servers


MCP servers expose TeamSynth capabilities to external AI clients via JSON-RPC endpoints.

**DocumentServer** — Tools: `search_documents` (hybrid search across content), `summarize_document` (AI summary), `analyze_document` (quality + structure analysis). Each tool accepts a workspace context parameter for team-scoping.

**CodeReviewServer** — Tools: `review_pr` (full AI code review), `lint_check` (static analysis via LLM), `security_scan` (vulnerability pattern detection). Returns structured comments with severity, category, file path, and line numbers.

**MeetingServer** — Tools: `transcribe` (audio-to-text), `summarize` (transcript to structured summary), `extract_action_items` (parse decisions from raw text).

```php
// routes/mcp.php
use App\Mcp\DocumentServer;
use App\Mcp\CodeReviewServer;
use App\Mcp\MeetingServer;

Route::post('mcp/document/search', [DocumentServer::class, 'search']);
Route::post('mcp/document/summarize', [DocumentServer::class, 'summarize']);
Route::post('mcp/code/review', [CodeReviewServer::class, 'review']);
Route::post('mcp/code/lint', [CodeReviewServer::class, 'lint']);
Route::post('mcp/meeting/transcribe', [MeetingServer::class, 'transcribe']);
Route::post('mcp/meeting/summarize', [MeetingServer::class, 'summarize']);
```

Each MCP endpoint validates the JSON-RPC envelope (jsonrpc version, method, params, id), dispatches to the appropriate handler, and returns a properly formatted JSON-RPC response with result or error.

### 8.6 Part E — Search and RAG


Search operates at three tiers with progressive fallback:

**Full-Text Search (Tier 1)** — PostgreSQL FULLTEXT index on title and body. Uses `tsvector` and `plainto_tsquery`. Fast, zero external dependencies. Suitable for exact keyword matching and prefix queries. Response time: &lt;50ms at p95.

**Vector Search (Tier 2)** — pgvector cosine similarity on 1536-dimension embeddings. HNSW index with m=16, ef_construction=200 for approximate nearest neighbor. Understands semantic intent. Response time: &lt;200ms at p95 for 1M vectors.

**Hybrid Search (Tier 3)** — Weighted combination: `hybrid_score = vector_score * 0.7 + fts_score * 0.3`. Results are deduplicated and reranked. Weights are configurable per content type (e.g., code reviews emphasize full-text, meetings emphasize semantic).

**Reranking** — A lightweight cross-encoder reranks the top 50 hybrid results. Each candidate pair (query, chunk) is scored and the top 10 returned. Reranking runs in a queue job; the top 3 from un-reranked hybrid are shown immediately while reranked results stream in via Reverb broadcast.

**Search Agent Flow**

1. User submits natural language query.
2. SearchAgent generates embedding for query (cached if identical within 24h).
3. Hybrid search runs across all team content, filtered by team_id and optional content_type.
4. Top 50 results reranked by cross-encoder.
5. LLM generates answer with inline citations using retrieved context.
6. Response includes answer, sources (title, similarity, excerpt), and confidence.
7. Result cached via semantic key (query embedding hash + options hash) for 5-60 min TTL.

### 8.7 Part F — Real-Time Collaboration


Reverb with Laravel Echo powers four real-time features:

**Presence Channels** — Each project has a presence channel (`presence-project.{id}`). Echo.join() tracks who is viewing the same resource. Shows user avatars in the browser. Users are automatically removed on disconnect via heartbeat.

**Document Editing Status** — When a user types, a `DocumentEditing` event broadcasts to `project.{id}.document.{id}` with the user ID and cursor position. Echo.whisper provides low-latency cursor sync, throttled to once per 500ms.

**Agent Progress Broadcasts** — Agent execution stages broadcast to `team.{id}.agents`. The UI shows a live progress bar: stage name, status, and metadata (e.g., "Research completed — 5 facts found"). Each broadcast includes agent type, status enum, and an optional metadata payload.

**Notification Streams** — Code review assignments, meeting reminders, document mentions broadcast to `user.{id}.notifications`. The UI shows action-button toasts. Notifications are also persisted in a `notifications` table for offline access.

```php
// App/Events/AgentProgressUpdated.php
class AgentProgressUpdated implements ShouldBroadcast
{
    public function __construct(
        public string $agentType,
        public string $status,
        public int $teamId,
        public array $metadata = [],
    ) {}

    public function broadcastOn(): array
    {
        return [new Channel("team.{$this->teamId}.agents")];
    }

    public function broadcastWith(): array
    {
        return [
            'agent_type' => $this->agentType,
            'status'     => $this->status,
            'metadata'   => $this->metadata,
            'timestamp'  => now()->toIso8601String(),
        ];
    }
}
```

### 8.8 Part G — Deployment


TeamSynth uses Laravel Vapor for serverless API deployment paired with managed infrastructure.

**Vapor (Serverless API)** — The Octane application runs as a Vapor project. Each Vapor environment (staging, production) maps to a separate team. Auto-scaling handles traffic spikes without manual intervention. Vapor manages SSL certificates and custom domains.

**Cloud (Managed Database + Redis)** — PostgreSQL with pgvector runs on a managed cloud provider (Crunchy Bridge, RDS, or Cloud SQL). Redis is a managed cluster (Upstash or ElastiCache) sized at 50GB. Both databases have automated backups with point-in-time recovery.

**Envoyer (Zero-Downtime Deployments)** — Deployment script: `vapor deploy production` triggers Envoyer. Envoyer runs health checks against the new deployment, migrates the database, and switches the load balancer only after all checks pass. Rollback is a single click.

**Forge (Queue Workers + Octane)** — Forge manages the Octane server processes and Horizon queue workers. Supervisors are configured: one for request queues (3 processes, 300s timeout) and one for AI queues (5 processes, 600s timeout).

**CI/CD Pipeline**

```
Git push → GitHub Actions:
  1. npm ci && npm run build (frontend assets)
  2. composer install --no-dev
  3. php artisan test (feature + unit)
  4. php artisan dusk (browser tests)
  5. vapor deploy staging
  6. Envoyer health check
  7. npm run cy:run (E2E tests on staging)
  8. vapor deploy production (manual approval gate)
  9. Envoyer deploy production → rollback on failure
```

### 8.9 Part H — Testing Strategy


```php
// Tests/Unit/Agents/DocumentAnalysisAgentTest.php
class DocumentAnalysisAgentTest extends TestCase
{
    public function test_it_returns_structured_analysis(): void
    {
        // Fake the AI SDK to return controlled JSON
        OpenAI::fake([
            Chat::create(response: [
                'choices' => [[
                    'message' => [
                        'content' => json_encode([
                            'key_points' => ['Point A', 'Point B'],
                            'summary' => 'Test summary.',
                            'quality_score' => 8,
                        ]),
                    ],
                ]],
                'usage' => ['prompt_tokens' => 100, 'completion_tokens' => 50],
            ]),
        ]);

        $document = Document::factory()->create(['body' => 'Test content.']);

        $agent = new DocumentAnalysisAgent();
        $result = $agent->handle([
            'document_id' => $document->id,
            'action' => 'analyze',
        ]);

        $this->assertArrayHasKey('key_points', $result);
        $this->assertArrayHasKey('summary', $result);
        $this->assertGreaterThanOrEqual(1, $result['quality_score']);
    }
}
```

**Testing Layers**

| Layer | Tool | Focus |
|---|---|---|
| Unit | PHPUnit | Agent output structure, model scopes, service logic with mocked AI SDK |
| Feature | PHPUnit | API endpoint behavior, authentication, validation, rate limiting |
| Integration | PHPUnit + Testbench | RAG pipeline end-to-end (real pgvector), queue jobs |
| Browser | Laravel Dusk | Reverb connection, Echo event reception, presence channel membership |
| AI Quality | Custom evals | Agent output accuracy, search relevance (NDCG), moderation precision |

**AI SDK Fakes** — The OpenAI facade can be faked with `OpenAI::fake([...])` to return controlled responses. This eliminates external API calls during testing while validating that the agent correctly parses structured output and handles edge cases (missing fields, invalid JSON, API errors).

### 8.10 Part I — Performance Budget


| Metric | Target (p95) | Measurement Tool |
|---|---|---|
| Page load (server-side) | <200ms | Laravel Clockwork, Telescope |
| Search response | <500ms | Custom middleware timer, logs |
| AI generation (1000 words) | <5s | AgentLog.duration_ms |
| API response (non-AI) | <100ms | Telescope request timeline |
| Real-time event latency | <100ms | Reverb metrics endpoint |
| Embedding generation | <1s | Horizon job timeline |
| Database query (p95) | <50ms | Telescope queries tab |
| Queue job wait time | <5s | Horizon dashboard |

**Budget Enforcement** — A custom middleware tags every response with `X-TeamSynth-Time: {duration_ms}`. A CI pipeline step runs Lighthouse CI to catch regressions. Alert thresholds in Pulse trigger notifications when any metric exceeds 120% of the budget for 5 consecutive minutes.

### 8.11 Part J — Monitoring


**Pulse Dashboard** — Laravel Pulse provides at-a-glance monitoring for slow queries, slow requests, queue throughput, cache hit ratio, and Redis memory usage. Custom Pulse cards display AI token usage per agent type and content type distribution.

**Telescope Debugging** — Telescope captures every request, query, job, event, and cache operation in development and staging. In production, Telescope is configured with a 1% sample rate to reduce overhead while retaining debugging capability for slow requests (automatically captured at 100% sample when duration exceeds 1s).

**Nightwatch Error Tracking** — Nightwatch captures and aggregates PHP exceptions, JavaScript errors, and scheduled task failures. Errors are grouped by fingerprint (exception class + file + line). Each error includes the Telescope request ID for full context replay.

**Custom Metrics** — Logged to Prometheus via a statsd bridge:

| Metric | Labels | Purpose |
|---|---|---|
| `ai_token_usage_total` | agent_type, model, status | Token consumption per agent |
| `queue_length` | queue_name | Horizon queue depth |
| `cache_hit_ratio` | cache_store | Cache effectiveness |
| `search_latency_ms` | search_tier (fts, vector, hybrid) | Search performance |
| `embedding_count` | content_type | Vector store growth rate |
| `agent_execution_duration` | agent_type, status | Agent speed |

**Alert Rules**

- Pager: AI token usage exceeds monthly budget by 80% (Slack webhook).
- Warning: Search p95 latency exceeds 500ms for 5 minutes.
- Critical: Queue backlog exceeds 10,000 jobs for 2 minutes.
- Info: Cache hit ratio drops below 80% for 30 minutes.

---

## Concept Comparison Table

| Concept | Purpose | Key Benefit | Limitation |
|---------|---------|-------------|------------|
| Architecture | System design upfront | Clear direction | Hard to change later |
| AI Agents | Specialized agents | Separation of concerns | Inter-agent communication |
| MCP Servers | Tool exposure | Interoperability | Security considerations |
| Performance Budget | Metrics with thresholds | Prevents regressions | Requires CI enforcement |

## Quick Reference

| Item | Description |
|------|-------------|
| php artisan make:agent ContentAgent|Create a new AI agent | php artisan make:mcp-server SearchTool|Create MCP server |
| php artisan reverb:start|Start WebSocket server | php artisan deploy|Deploy with CI/CD script |

## Cross-Application Matrix

| Scenario | Approach | Benefit | Challenge |
|----------|----------|---------|-----------|
| System Design | Architecture first | Clear direction | Hard to change |
| Agent Layer | Specialized agents | Separation of concerns | Inter-agent sync |
| MCP | Tool exposure | Agent interoperability | Auth and security |
| CI/CD | Automated pipeline | Consistent deploys | Setup complexity |

## Chapter Quiz

1. What is the first step in the capstone project?
   - A) Write tests
   - B) Design the system architecture
   - C) Install dependencies
   - D) Configure the database
   <details><summary>Answer&lt;/summary&gt;**B)** Part A is system architecture design before any code is written.</details>

2. How are AI agents structured in this project?
   - A) Monolithic single agent
   - B) Specialized agents per capability
   - C) External API only
   - D) Stateless functions
   <details><summary>Answer&lt;/summary&gt;**B)** Specialized agents handle content generation, moderation, and search separately.</details>

3. What is the purpose of a performance budget?
   - A) Estimate project cost
   - B) Set metrics thresholds enforced in CI
   - C) Track developer productivity
   - D) Measure code coverage
   <details><summary>Answer&lt;/summary&gt;**B)** A performance budget defines acceptable thresholds for response times, query counts, and memory usage, enforced in CI.</details>

4. When should CI/CD be set up?
   - A) After the first release
   - B) Before the first feature commit
   - C) During beta testing
   - D) Only for production
   <details><summary>Answer&lt;/summary&gt;**B)** CI/CD should be set up before the first feature commit for automated deployment from day one.</details>

## Concept Comparison Table

| Concept | Purpose | Key Benefit | Limitation |
|---------|---------|-------------|------------|
| Architecture | System design upfront | Clear direction | Hard to change later |
| AI Agents | Specialized agents | Separation of concerns | Inter-agent communication |
| MCP Servers | Tool exposure | Interoperability | Security considerations |
| Performance Budget | Metrics with thresholds | Prevents regressions | Requires CI enforcement |

## Quick Reference

| Item | Description |
|------|-------------|
| php artisan make:agent ContentAgent|Create a new AI agent | php artisan make:mcp-server SearchTool|Create MCP server |
| php artisan reverb:start|Start WebSocket server | php artisan deploy|Deploy with CI/CD script |

## Cross-Application Matrix

| Scenario | Approach | Benefit | Challenge |
|----------|----------|---------|-----------|
| System Design | Architecture first | Clear direction | Hard to change |
| Agent Layer | Specialized agents | Separation of concerns | Inter-agent sync |
| MCP | Tool exposure | Agent interoperability | Auth and security |
| CI/CD | Automated pipeline | Consistent deploys | Setup complexity |

## Chapter Quiz

1. What is the first step in the capstone project?
   - A) Write tests
   - B) Design the system architecture
   - C) Install dependencies
   - D) Configure the database
   <details><summary>Answer&lt;/summary&gt;**B)** Part A is system architecture design before any code is written.</details>

2. How are AI agents structured in this project?
   - A) Monolithic single agent
   - B) Specialized agents per capability
   - C) External API only
   - D) Stateless functions
   <details><summary>Answer&lt;/summary&gt;**B)** Specialized agents handle content generation, moderation, and search separately.</details>

3. What is the purpose of a performance budget?
   - A) Estimate project cost
   - B) Set metrics thresholds enforced in CI
   - C) Track developer productivity
   - D) Measure code coverage
   <details><summary>Answer&lt;/summary&gt;**B)** A performance budget defines acceptable thresholds for response times, query counts, and memory usage, enforced in CI.</details>

4. When should CI/CD be set up?
   - A) After the first release
   - B) Before the first feature commit
   - C) During beta testing
   - D) Only for production
   <details><summary>Answer&lt;/summary&gt;**B)** CI/CD should be set up before the first feature commit for automated deployment from day one.</details>

## Summary

- TeamSynth is a team collaboration platform that uses four specialized AI agents (DocumentAnalysis, MeetingSummarizer, CodeReview, Search) to extract actionable intelligence from team artifacts.
- The architecture follows a layered topology: Cloudflare CDN → Load Balancer → Octane web nodes → Redis → PostgreSQL + pgvector → Queue Workers → Reverb → AI SDK.
- The data model stores all content polymorphically. Embeddings use pgvector with a 1536-dimension HNSW index across document, meeting, code, and comment content types.
- Search uses three tiers: PostgreSQL full-text (Tier 1, &lt;50ms), pgvector cosine similarity (Tier 2, <200ms), and hybrid weighted scoring (Tier 3, <500ms). A cross-encoder reranker improves precision.
- Real-time collaboration uses Reverb with Echo for presence channels, typing indicators, agent progress broadcasts, and notification streams.
- MCP servers expose search_documents, summarize_document, review_pr, lint_check, transcribe, and summarize as JSON-RPC tools for external AI clients.
- Deployment uses Vapor for serverless Octane, managed PostgreSQL + Redis, Envoyer for zero-downtime deploys, and Forge for queue workers.
- Testing spans unit (agent output), feature (API), integration (RAG pipeline), browser (Dusk for WebSockets), and custom evals (search relevance, output quality).
- Performance budget: page load &lt;200ms, search <500ms, AI generation <5s, API <100ms, real-time <100ms latency.
- Monitoring uses Pulse (dashboards), Telescope (request debugging), Nightwatch (error tracking), and custom Prometheus metrics for token usage, queue length, and cache hit ratio.

---

## Exercises

### Review Questions

1. Why does the architecture use separate queue supervisors for AI and non-AI workloads? What problem does this prevent?
2. Explain the three-tier search strategy. Under what circumstances would you skip tier 1 and go directly to tier 2 or tier 3?
3. How do MCP servers differ from REST API endpoints? When would an external AI client use an MCP tool instead of a direct API call?
4. The agent_logs table captures token usage per agent execution. How would you use this data to forecast monthly AI costs and set per-team budget limits?
5. Describe the role of the cross-encoder reranker. Why does the system show immediate results from hybrid search while reranked results arrive later?

### Application Problems

1. **Implement the CodeReviewAgent**: Write the full `handle()` method that connects to a GitHub PR, fetches the diff, analyzes each changed file using the AI SDK, and creates `review_comments` records. Include logic to detect the programming language from the file extension and adjust the review prompt accordingly (e.g., PHP review checks for SQL injection, Laravel best practices; JavaScript checks for XSS, dependency vulnerabilities).

2. **Build the agent progress broadcasting system**: Design the `AgentProgressUpdated` event, the Livewire component that listens for it, and the UI that shows a multi-step progress bar during code review. The bar should show each stage (fetching, analyzing file 1, analyzing file 2, ..., generating summary) with estimated time remaining.

3. **Design the team-level token budget system**: Create a `TeamTokenBudget` model that stores monthly token limits per team. Implement a middleware that, before each AI SDK call, checks whether the team has remaining budget. If exceeded, the agent returns a cached response or a degraded result. Include an Artisan command to reset budgets monthly and send warning notifications at 80%, 90%, and 100% usage.

### Challenge Problem

**Implement a semantic caching layer with TTL decay based on query similarity**

Design and build a `SemanticCache` service that:

- **Stores**: Array of (query_embedding, response, created_at, access_count, last_accessed_at) in a PostgreSQL table `semantic_cache`.
- **Retrieves**: Given a new query, generate its embedding, then find the nearest neighbor in the cache using cosine similarity. If similarity > 0.95, return the cached response. If similarity is between 0.85 and 0.95, return the cached response but mark it as "degraded" (add an `X-Cache-Quality: degraded` header).
- **TTL decay**: Each cache entry has a base TTL of 24 hours. Each time an entry is accessed, its effective TTL is extended by 1 hour (up to a max of 48 hours). Entries with access_count > 100 have their base TTL doubled to 48 hours.
- **Cache warming**: When a team generates content (new document, meeting summary, code review), the system proactively generates 5 likely search queries for that content and pre-populates the cache.
- **Invalidation**: When a document is updated, all cache entries whose query embedding is similar (cosine > 0.8) to the document's embedding are deleted or marked stale.

Write the migration for `semantic_cache`, the `SemanticCache` service class, the cache warming job, the invalidation logic in the document update observer, and the middleware that checks the cache before executing a full RAG pipeline. Include explanations of how you handle concurrent writes and the trade-off between cache freshness and hit rate.