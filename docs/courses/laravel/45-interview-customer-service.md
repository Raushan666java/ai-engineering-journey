# Chapter 45: Customer Service & Support — Interview Q&A

---

## 1. Customer Service Domain Knowledge

**Q1: What are the core components of a modern customer support ticketing system?**

A modern ticketing system centers on the ticket lifecycle: intake (web form, email, chat, social, phone), triage (classification, prioritization, routing), resolution (agent collaboration, knowledge base lookup, internal notes), and closure (satisfaction survey, feedback collection). Core data entities include tickets (subject, description, status, priority, channel), messages (threaded replies, internal notes, attachments), customers (contact info, history, segment), agents (skills, availability, workload), teams (groups with specialized knowledge), knowledge base articles, SLA policies, and satisfaction survey records. The system must maintain an immutable audit trail of every status change, assignment, and escalation.

**Q2: Explain common SLA metrics used in customer support.**

Service Level Agreements define measurable commitments. Key metrics include:

- **First Response Time (FRT):** Time from ticket creation to first agent reply. Typical SLAs: 1 hour for urgent, 4 hours for standard.
- **Resolution Time (RT):** Time to close or resolve the ticket. Often measured as Mean Time to Resolve (MTTR).
- **SLA Compliance Rate:** Percentage of tickets meeting their SLA targets within a given period. Most teams target 90%+.
- **Backlog Aging:** Distribution of open tickets by time buckets (e.g., < 24h, 24–72h, 72h+).
- **Breach Count:** Number of tickets that exceeded SLA thresholds, broken down by priority and team.
- **Business Hours vs. Calendar Hours:** Many SLAs exclude weekends and after-hours, requiring configurable support windows.

**Q3: What support workflow stages exist between ticket creation and closure?**

The standard workflow follows: **New** → **Open** (acknowledged by system or triage) → **Assigned** (agent claimed) → **In Progress** (agent working) → **Pending** (waiting on customer or third party) → **Resolved** (solution provided, awaiting confirmation) → **Closed**. Optional branches include **Escalated** (bumped to senior team or management), **On Hold** (blocked by internal dependency), and **Reopened** (customer not satisfied). Each transition should log timestamps for SLA calculation and trigger appropriate notifications.

**Q4: How do multi-channel support platforms normalize interactions from different sources?**

Multi-channel normalization solves three problems: format variance, identity resolution, and context continuity. Email arrives as MIME with subject lines and attachments; chat comes as real-time message streams; social media posts have platform-specific metadata; phone calls generate transcripts via speech-to-text. The system normalizes every interaction into a universal **Message** record containing: channel type, normalized body text, timestamp, direction (inbound/outbound), attachments as standardized files, and metadata preserved as JSON. Customer identity is resolved across channels by matching email, phone, social handle, or session token to a unified customer profile. Context continuity ensures that a customer who starts on chat, emails a follow-up, and calls for escalation sees one ticket with the full history.

**Q5: Describe how customer satisfaction is measured in support platforms.**

Satisfaction measurement typically uses post-resolution surveys dispatched automatically after ticket closure. The **CSAT (Customer Satisfaction Score)** asks "How satisfied were you with the support you received?" on a 1–5 scale. **FCR (First Contact Resolution)** is a binary yes/no question asking whether the issue was resolved in a single interaction. **NPS (Net Promoter Score)** asks "How likely are you to recommend us?" on a 0–10 scale. Response data feeds trend dashboards that track scores by agent, team, channel, and time period. Free-text survey comments are analyzed via sentiment analysis to extract emerging themes and detect negative trends requiring intervention.

---

## 2. Technical Implementation

**Q6: How would you implement a TicketTriageAgent that classifies and routes incoming support tickets?**

The agent processes tickets at creation time using an LLM with a structured output schema:

```php
class TicketTriageAgent
{
    public function __construct(
        protected Pipeline $pipeline,
        protected Agent $classifier
    ) {}

    public function triage(Ticket $ticket): void
    {
        $result = $this->classifier
            ->withInput(['subject' => $ticket->subject, 'description' => $ticket->description])
            ->withOutputSchema(TriageResult::class)
            ->run();

        $ticket->update([
            'triage_intent' => $result->intent,
            'priority' => $result->priority,
            'assigned_team' => $this->resolveTeam($result->intent),
        ]);

        if ($result->priority === 'urgent') {
            $this->pipeline->send(new NotifyTeamLead($ticket))->onQueue('high');
        }

        if ($result->is_billing) {
            $this->pipeline->send(new FetchCustomerBillingHistory($ticket))->onQueue('low');
        }
    }

    protected function resolveTeam(string $intent): string
    {
        return match ($intent) {
            'billing', 'refund' => 'billing',
            'technical', 'bug' => 'engineering',
            'account', 'access' => 'account-management',
            default => 'general-support',
        };
    }
}
```

Key design considerations: the agent uses structured output (PHP enums or typed properties) so the caller gets typed, predictable results; priority escalation is fire-and-forget via the queue; enrichment tasks (like fetching billing history) run on a lower-priority queue to avoid delaying the triage response.

**Q7: Design a SentimentAnalysisAgent that scores customer messages and triggers escalations.**

The agent scores every inbound message and updates the ticket's running sentiment:

```php
class SentimentAnalysisAgent
{
    public function __construct(protected Agent $analyzer) {}

    public function analyze(Ticket $ticket, Message $message): SentimentResult
    {
        $result = $this->analyzer
            ->withInput([
                'message' => $message->body,
                'customer_history' => $this->buildRecentContext($ticket),
                'ticket_age_hours' => $ticket->created_at->diffInHours(now()),
            ])
            ->withOutputSchema(SentimentResult::class)
            ->run();

        $ticket->update(['sentiment_score' => $result->score]);
        $message->update(['sentiment_score' => $result->score]);

        if ($result->score < -0.7 && $ticket->priority !== 'urgent') {
            $ticket->update(['priority' => 'urgent']);
            EscalationAgent::escalateOnSentiment($ticket, $result);
        }

        if ($result->labels->contains('churn_risk')) {
            dispatch(new NotifyCustomerSuccess($ticket));
        }

        return $result;
    }
}
```

The sentiment score (typically –1.0 to 1.0) is stored on both the message and the ticket for trend analysis. The agent also extracts emotion labels (frustration, urgency, satisfaction) and flags churn risk. Escalation happens at configurable thresholds, combined with ticket age to avoid false positives from isolated frustrated messages.

**Q8: How would you implement a Knowledge Base RAG agent that retrieves articles and generates contextual answers?**

The agent uses a two-stage pipeline: retrieval then generation:

```php
class KnowledgeBaseAgent
{
    public function __construct(
        protected Agent $generator,
        protected int $maxResults = 5
    ) {}

    public function answer(Ticket $ticket): GeneratedAnswer
    {
        $query = $ticket->subject.' '.$ticket->description;

        $articles = Article::query()
            ->whereVectorSimilarity('embedding', Str::toEmbeddings($query), $this->maxResults)
            ->where('is_published', true)
            ->get();

        $context = $articles->map(fn ($a) => "- {$a->title}: {$a->content}")->implode("\n");

        if ($articles->isEmpty()) {
            return new GeneratedAnswer(
                answer: null,
                confidence: 0.0,
                suggested_action: 'create_kb_article',
                sources: collect(),
            );
        }

        $result = $this->generator
            ->withInput([
                'customer_question' => $query,
                'knowledge_base_context' => $context,
                'articles' => $articles->toArray(),
            ])
            ->withOutputSchema(GeneratedAnswer::class)
            ->run();

        if ($result->confidence < 0.4) {
            return new GeneratedAnswer(
                answer: null,
                confidence: $result->confidence,
                suggested_action: 'needs_agent',
                sources: $articles,
            );
        }

        return $result;
    }
}
```

The agent embeds the query at runtime using `Str::toEmbeddings()`, performs a `whereVectorSimilarity` search against pgvector, and passes the top results as context to an LLM. The LLM returns a structured answer with confidence score and source citations. Low-confidence results signal the ticket needs a human agent rather than a canned response.

**Q9: Implement an EscalationAgent that monitors SLA breaches and stalled tickets.**

```php
class EscalationAgent
{
    public function evaluate(Ticket $ticket): ?EscalationAction
    {
        $sla = $ticket->slaPolicy;

        if ($sla === null) {
            return null;
        }

        $breachMinutes = $this->calculateOverdueMinutes($ticket, $sla);

        if ($breachMinutes <= 0) {
            return null;
        }

        $currentLevel = $ticket->escalation_level;
        $ticket->update(['escalation_level' => $currentLevel + 1]);

        return match ($currentLevel) {
            0 => new EscalationAction(
                level: 1,
                notify: [$ticket->assignedAgent, $ticket->team->lead],
                autoAssign: $ticket->team->lead,
                priority: 'high',
            ),
            1 => new EscalationAction(
                level: 2,
                notify: [$ticket->team->lead, $ticket->team->manager],
                autoAssign: $ticket->team->manager,
                priority: 'urgent',
            ),
            2 => new EscalationAction(
                level: 3,
                notify: [$ticket->team->manager, User::role('support-director')->get()],
                autoAssign: null,
                priority: 'critical',
            ),
            default => null,
        };
    }

    protected function calculateOverdueMinutes(Ticket $ticket, SlaPolicy $sla): int
    {
        $elapsed = now()->diffInMinutes($ticket->created_at);
        $allowed = $ticket->priority === 'urgent'
            ? $sla->urgent_resolution_minutes
            : $sla->standard_resolution_minutes;
        return $elapsed - $allowed;
    }
}
```

The agent runs on a scheduled task every few minutes, processing tickets approaching or past SLA thresholds. Each escalation level increases notification breadth and auto-assigns a more senior resource. The escalation chain is configurable per SLA policy, and the agent logs every escalation event for audit trails.

**Q10: Design a MultiChannelAgent that normalizes email, chat, social, and phone interactions into unified tickets.**

```php
class MultiChannelAgent
{
    public function ingest(InboundMessage $raw): Ticket
    {
        $normalized = match ($raw->channel) {
            'email' => $this->fromEmail($raw),
            'chat' => $this->fromChat($raw),
            'social' => $this->fromSocial($raw),
            'phone' => $this->fromPhone($raw),
        };

        $customer = $this->resolveCustomer($raw);

        if ($normalized->inReplyTo) {
            $ticket = Ticket::findOrFail($normalized->inReplyTo);
        } else {
            $ticket = Ticket::create([
                'user_id' => $customer->id,
                'subject' => $normalized->subject,
                'channel' => $raw->channel,
                'status' => 'open',
            ]);
        }

        $ticket->messages()->create([
            'body' => $normalized->body,
            'channel' => $raw->channel,
            'direction' => 'inbound',
            'metadata' => $raw->metadata,
            'attachments' => $normalized->attachments,
        ]);

        dispatch(new AnalyzeTicketSentiment($ticket));

        return $ticket;
    }

    protected function resolveCustomer(InboundMessage $raw): User
    {
        return User::firstOrCreate(
            ['email' => $raw->email],
            ['name' => $raw->name, 'channel' => $raw->channel]
        );
    }
}
```

Each channel has a dedicated parser: email extracts from MIME (subject, body, attachments); chat wraps message streams into threaded messages; social strips platform-specific formatting and metadata; phone converts speech-to-text transcripts. The agent deduplicates by detecting reply chains and consolidating fragmented conversations.

**Q11: How would you track customer satisfaction with a SatisfactionAgent?**

```php
class SatisfactionAgent
{
    public function dispatchSurvey(Ticket $ticket): void
    {
        $delay = $ticket->slaPolicy?->survey_delay_hours ?? 24;

        dispatch(new SendSatisfactionSurvey($ticket))
            ->delay(now()->addHours($delay));
    }

    public function recordResponse(SurveyResponse $response): void
    {
        $response->ticket->update([
            'csat_score' => $response->csat,
            'fcr' => $response->fcr,
            'nps_score' => $response->nps,
            'closed_at' => now(),
        ]);

        if ($response->comments) {
            $sentiment = app(SentimentAnalysisAgent::class)
                ->analyzeText($response->comments);

            $response->update(['comment_sentiment' => $sentiment->score]);

            if ($sentiment->score < -0.5) {
                dispatch(new NotifyQualityTeam($response));
            }
        }
    }

    public function getMonthlyStats(Carbon $month): array
    {
        return [
            'avg_csat' => SurveyResponse::whereMonth('created_at', $month)->avg('csat'),
            'fcr_rate' => SurveyResponse::whereMonth('created_at', $month)->where('fcr', true)->count()
                / max(SurveyResponse::whereMonth('created_at', $month)->count(), 1),
            'avg_nps' => SurveyResponse::whereMonth('created_at', $month)->avg('nps'),
            'response_count' => SurveyResponse::whereMonth('created_at', $month)->count(),
        ];
    }
}
```

The survey dispatches after a configurable delay (to avoid surveying during pending states) and sends via the customer's preferred channel. Response data feeds CSAT, FCR, and NPS dashboards. Free-text comments are analyzed for sentiment, and negative scores trigger quality-team notifications for follow-up.

**Q12: Implement a SelfServiceAgent that handles FAQ matching and guided troubleshooting.**

```php
class SelfServiceAgent
{
    public function handleQuery(User $customer, string $query): SelfServiceResult
    {
        $articles = Article::query()
            ->whereVectorSimilarity('embedding', Str::toEmbeddings($query), 3)
            ->where('is_published', true)
            ->where('is_faq', true)
            ->get();

        if ($articles->isNotEmpty() && $articles->first()->similarity > 0.85) {
            return new SelfServiceResult(
                resolved: true,
                article: $articles->first(),
                confidence: $articles->first()->similarity,
            );
        }

        $troubleshooting = TroubleshootingFlow::query()
            ->whereVectorSimilarity('embedding', Str::toEmbeddings($query), 1)
            ->where('is_active', true)
            ->first();

        if ($troubleshooting && $troubleshooting->similarity > 0.75) {
            return new SelfServiceResult(
                resolved: false,
                flow: $troubleshooting,
                confidence: $troubleshooting->similarity,
                next_step: 'guided_troubleshooting',
            );
        }

        return new SelfServiceResult(
            resolved: false,
            confidence: 0.0,
            next_step: 'create_ticket',
        );
    }
}
```

High-confidence FAQ matches (> 0.85 similarity) resolve the query without creating a ticket. Medium-confidence results offer a guided troubleshooting flow that asks step-by-step diagnostic questions. Low-confidence results create a ticket pre-populated with the query and suggested search terms, saving the customer from retyping.

**Q13: Design an SlaMonitoringAgent that tracks compliance and generates alerts.**

```php
class SlaMonitoringAgent
{
    public function checkActiveTickets(): array
    {
        $breaches = [];

        Ticket::whereIn('status', ['open', 'in_progress', 'pending'])
            ->with('slaPolicy')
            ->chunk(100, function ($tickets) use (&$breaches) {
                foreach ($tickets as $ticket) {
                    $action = app(EscalationAgent::class)->evaluate($ticket);
                    if ($action !== null) {
                        $breaches[] = $ticket;
                    }
                }
            });

        return $breaches;
    }

    public function generateDailyReport(): array
    {
        $tickets = Ticket::whereDate('created_at', today())->get();
        $resolved = $tickets->whereIn('status', ['resolved', 'closed']);

        return [
            'date' => today()->toDateString(),
            'total_tickets' => $tickets->count(),
            'resolved_count' => $resolved->count(),
            'sla_compliance' => [
                'compliant' => $resolved->where('sla_breached', false)->count(),
                'breached' => $resolved->where('sla_breached', true)->count(),
                'compliance_rate' => $resolved->count() > 0
                    ? round($resolved->where('sla_breached', false)->count() / $resolved->count() * 100, 2)
                    : 100.0,
            ],
            'breaches_by_team' => Ticket::whereDate('created_at', today())
                ->where('sla_breached', true)
                ->groupBy('assigned_team')
                ->select('assigned_team', DB::raw('count(*) as breach_count'))
                ->pluck('breach_count', 'assigned_team')
                ->toArray(),
            'backlog_aging' => [
                'under_24h' => Ticket::whereIn('status', ['open', 'in_progress'])->where('created_at', '>=', now()->subHours(24))->count(),
                '24_72h' => Ticket::whereIn('status', ['open', 'in_progress'])->whereBetween('created_at', [now()->subHours(72), now()->subHours(24)])->count(),
                'over_72h' => Ticket::whereIn('status', ['open', 'in_progress'])->where('created_at', '<', now()->subHours(72))->count(),
            ],
        ];
    }
}
```

The monitoring agent runs as a scheduled artisan command every 5–15 minutes. It checks all active tickets against their SLA policies, triggers escalation for breached thresholds, and caches compliance snapshots for dashboard consumption. Daily reports include team-level breach breakdowns and backlog aging distributions.

**Q14: How would you implement agent skill-based routing in a Laravel support system?**

```php
class SkillBasedRouter
{
    public function route(Ticket $ticket): void
    {
        $requiredSkills = $this->getRequiredSkills($ticket);

        $bestAgent = User::where('is_agent', true)
            ->where('is_available', true)
            ->with('skills')
            ->get()
            ->filter(fn ($agent) => $requiredSkills->diff($agent->skills->pluck('name'))->isEmpty())
            ->sortBy(fn ($agent) => $agent->activeTickets()->count())
            ->first();

        if ($bestAgent) {
            $ticket->update([
                'assigned_agent_id' => $bestAgent->id,
                'status' => 'assigned',
            ]);

            broadcast(new TicketAssigned($ticket, $bestAgent));
        } else {
            $ticket->update(['status' => 'unassigned']);
            EscalationAgent::notifyUnassigned($ticket);
        }
    }

    protected function getRequiredSkills(Ticket $ticket): Collection
    {
        // Derive required skills from triage intent and product category
        return match ($ticket->triage_intent) {
            'billing' => collect(['billing', 'refunds']),
            'technical' => collect([$ticket->metadata['product_area'] ?? 'general-tech']),
            'account' => collect(['account-management']),
            default => collect(['general']),
        };
    }
}
```

The router matches tickets to agents whose skill sets fully cover the required skills, then picks the least-loaded qualified agent. If no agent matches all required skills, the ticket goes to unassigned and triggers a notification for manual assignment.

**Q15: Describe how to build a real-time support dashboard with Livewire or Reverb.**

A real-time support dashboard uses Laravel Reverb for WebSocket broadcasting combined with a Livewire or Inertia frontend. Key broadcasting events include `TicketCreated`, `TicketAssigned`, `TicketStatusChanged`, `NewMessage`, `SlaBreach`, and `AgentOnlineStatus`. The dashboard shows:

- **Queue panel:** Live counts of tickets by status, sorted by SLA urgency with visual indicators (green/yellow/red).
- **Agent status board:** Each agent's current ticket count, availability toggle, and active ticket list.
- **Live feed:** A scrolling list of recent events (new tickets, messages, escalations).
- **SLA clock:** Real-time countdown timers for each active ticket's response and resolution deadlines.

The backend broadcasts events via `Pusher` or `Reverb`, and the frontend subscribes to Echo channels: a public `support.dashboard` channel for anonymized metrics and an authenticated private-agent channel for per-agent assignments.

---

## 3. Architecture & Design

**Q16: Design a multi-channel support platform architecture. What are the key services and data flows?**

The platform follows a microservices-oriented modular monolith with these primary services:

1. **Ingestion Service:** Channel-specific adapters (email IMAP/POP3, chat WebSocket, social API webhooks, telephony SIP) that normalize inbound messages into a standard event format and publish to a unified `support.inbound` queue.

2. **Triage Service:** Consumes from `support.inbound`, runs `TicketTriageAgent` for classification and routing, then dispatches to appropriate queues (`support.billing`, `support.engineering`, etc.).

3. **Agent Assignment Service:** Listens for unassigned tickets, applies skill-based routing, load-balances across available agents, and broadcasts assignment events.

4. **Knowledge Service:** Manages article CRUD, embedding generation/syncing, and exposes a RAG endpoint consumed by both the self-service portal and agent-facing suggestion panels.

5. **SLA Engine:** A scheduled service that evaluates all active tickets against SLA policies every N minutes, triggers escalations, and writes compliance snapshots to a time-series store for reporting.

6. **Analytics Service:** Consumes a stream of all ticket lifecycle events, computes CSAT/NPS/FCR metrics, sentiment trends, and agent performance KPIs.

7. **Notification Service:** Template-driven notification dispatch across email, in-app, SMS, and push channels, triggered by lifecycle events (assignment, escalation, survey, breach).

Data flows through a central event bus. Each service is horizontally scalable behind queues, and the shared database uses read replicas for reporting queries to avoid impacting transactional throughput.

**Q17: How would you architect real-time ticket management for a team of 50+ agents?**

Real-time ticket management at scale requires:

- **WebSocket gateway** (Laravel Reverb with horizontal scaling via Redis) that connects authenticated agents to private channels. Each agent subscribes to their assigned tickets channel and a team-scoped channel.
- **Optimistic UI updates:** When an agent claims, updates, or closes a ticket, the UI updates immediately on their screen while the server processes the change. Conflicts are resolved server-side and broadcast back.
- **Presence channels** track agent online/offline status and current ticket load, enabling real-time workload visibility.
- **Queue-backed writes:** All mutations (status changes, messages, assignments) dispatch jobs to the queue so the WebSocket broadcast isn't blocked by slow database writes.
- **Filtered ticket stream:** Agents don't see every ticket in the system. The server pushes only tickets matching their team, skills, or direct assignments. An override channel for managers shows all active tickets.
- **Pagination with infinite scroll** for ticket lists, backed by cursor-based pagination on the API to avoid loading thousands of records.

The backend uses a `TicketBroadcastController` that validates the action, writes to the database via queued job, and broadcasts the event. The frontend subscribes via Echo and reconciles events with the local state store.

**Q18: How do you optimize knowledge base search for low-latency customer-facing queries?**

Optimization happens at four layers:

1. **Embedding caching:** Cache computed embeddings for frequent queries using `Cache::remember('faq:embedding:'.md5($query), 3600, fn () => Str::toEmbeddings($query))`. This avoids recomputing embeddings for the same or similar queries.

2. **Pgvector HNSW indexing:** Create a Hierarchical Navigable Small World index on the embeddings column to reduce similarity search from O(n) to O(log n):

```sql
CREATE INDEX idx_articles_embedding ON articles
  USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 200);
```

3. **Two-tier retrieval:** First attempt a lightweight keyword search (Laravel Scout or full-text index) that returns results in single-digit milliseconds. Only fall back to vector search if keyword precision is below a threshold.

4. **Response caching:** Cache the full RAG result for identical queries with a short TTL (30–60 seconds for live queries, hours for FAQ pages). Invalidate the cache when articles are updated using a model observer.

**Q19: Design the database schema for a multi-tenant customer support platform.**

Core tables and their multi-tenant considerations:

```php
Schema::create('teams', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->json('settings')->nullable(); // SLA defaults, business hours
    $table->softDeletes();
    $table->timestamps();
});

Schema::create('tickets', function (Blueprint $table) {
    $table->id();
    $table->foreignId('team_id')->constrained()->onDelete('cascade');
    $table->foreignId('user_id')->constrained(); // customer
    $table->foreignId('assigned_agent_id')->nullable()->constrained('users');
    $table->foreignId('sla_policy_id')->nullable()->constrained();
    $table->string('subject');
    $table->text('description');
    $table->string('status')->default('open');
    $table->string('priority')->default('medium');
    $table->string('channel')->default('web');
    $table->string('triage_intent')->nullable();
    $table->string('assigned_team')->nullable();
    $table->decimal('sentiment_score', 4, 2)->nullable();
    $table->integer('escalation_level')->default(0);
    $table->boolean('sla_breached')->default(false);
    $table->timestamp('first_response_at')->nullable();
    $table->timestamp('resolved_at')->nullable();
    $table->timestamp('closed_at')->nullable();
    $table->softDeletes();
    $table->timestamps();

    $table->index(['team_id', 'status', 'priority']);
    $table->index(['team_id', 'assigned_agent_id', 'status']);
});

Schema::create('messages', function (Blueprint $table) {
    $table->id();
    $table->foreignId('ticket_id')->constrained()->onDelete('cascade');
    $table->foreignId('user_id')->nullable()->constrained(); // sender
    $table->text('body');
    $table->string('channel');
    $table->string('direction'); // inbound / outbound
    $table->json('attachments')->nullable();
    $table->decimal('sentiment_score', 4, 2)->nullable();
    $table->boolean('is_internal_note')->default(false);
    $table->json('metadata')->nullable();
    $table->timestamps();

    $table->index(['ticket_id', 'created_at']);
});

Schema::create('sla_policies', function (Blueprint $table) {
    $table->id();
    $table->foreignId('team_id')->constrained()->onDelete('cascade');
    $table->string('name');
    $table->integer('urgent_response_minutes');
    $table->integer('urgent_resolution_minutes');
    $table->integer('standard_response_minutes');
    $table->integer('standard_resolution_minutes');
    $table->json('business_hours')->nullable(); // e.g., { "monday": "09:00-18:00", ... }
    $table->integer('survey_delay_hours')->default(24);
    $table->json('escalation_chain')->nullable(); // ordered list of levels
    $table->boolean('is_active')->default(true);
    $table->timestamps();
});
```

Every table includes `team_id` for row-level multi-tenant isolation. Global scopes enforce tenant filtering, and indexing strategies prioritize the `team_id` prefix for partition-aware query plans.

**Q20: How would you design a sentiment trend analysis system across thousands of daily interactions?**

The system uses a lambda architecture combining real-time and batch processing:

- **Real-time stream:** Each inbound message passes through `SentimentAnalysisAgent`, which writes the per-message score to a `sentiment_events` time-series table. A Livewire dashboard component reads the last 60 minutes of events to display a rolling sentiment chart.
- **Hourly aggregation:** A scheduled artisan command summarizes the last hour: average sentiment, volume by channel, sentiment distribution buckets (positive/neutral/negative), and top negative-scored tickets with links.
- **Daily batch:** Overnight, a heavier pipeline recomputes running averages by agent, team, channel, and product category. It also runs topic extraction on negative comments to surface recurring pain points using `Str::toEmbeddings()` with clustering.
- **Trend detection:** The batch pipeline compares current metrics against trailing 7-day and 30-day averages. If sentiment drops more than 0.15 points week-over-week for a team or product area, it auto-creates a quality-assurance ticket for management review.
- **Data retention:** Raw sentiment events are rotated after 90 days; aggregated daily and weekly snapshots are retained for 2 years for long-term trend analysis and reporting.

---

## 4. Behavioral & Scenario

**Q21: Design an AI-powered customer support platform from scratch. Walk through your system design decisions.**

**Scope:** A SaaS support platform handling 10,000 tickets/day across email, chat, social, and phone, with 100 agents, multi-tenant for 50+ companies.

**Core decisions:**

1. **Architecture pattern:** Modular monolith on Laravel for the first 12 months, with clear bounded contexts (Tickets, Knowledge, Analytics, SLA) communicating through internal events. This avoids the operational complexity of microservices while keeping future extraction paths clean.

2. **AI layer:** Each support function gets a dedicated AI agent (triage, sentiment, knowledge base, escalation, satisfaction) rather than one monolithic "AI brain." This makes agents independently testable, deployable, and replaceable.

3. **Vector search:** Pgvector in the primary PostgreSQL database rather than a separate vector database. This eliminates data synchronization complexity for a platform that doesn't yet need multi-region vector replication. HNSW indexes ensure sub-50ms query times.

4. **Real-time:** Laravel Reverb for WebSockets with Redis pub/sub. Each agent subscribes to a private channel filtered by team and assignment. The server broadcasts ticket lifecycle events (new, assigned, updated, breached) over dedicated channels.

5. **Queue topology:** Three priority tiers — `critical` (escalations, SLA breaches), `default` (ticket creation, triage, assignment), `low` (embedding generation, report computation, survey dispatch). Each tier has dedicated workers to prevent backpressure from cold tasks blocking hot-path processing.

6. **Multi-tenancy:** Row-level tenancy with `team_id` on every table. Global scopes enforce isolation. Each tenant configures their own SLA policies, business hours, escalation chains, and knowledge base.

7. **API-first:** All agent functionality is exposed as REST API endpoints consumed by a first-party Vue/Livewire frontend and available for third-party integrations. MCP servers expose key agent capabilities (triage, knowledge search) for external AI tooling.

**Outcome:** The platform handles 10,000 daily tickets with sub-2-second triage latency, 95%+ SLA compliance, and automated escalation that catches 90% of SLA breaches within 1 minute of threshold crossing.

**Q22: Walk through your approach to automate ticket routing and escalation for a large enterprise support operation.**

**Step 1 — Intake triage:** Every incoming ticket passes through `TicketTriageAgent` which classifies into intents (billing, technical, account, general) and assigns priority (low, medium, high, urgent). The LLM uses structured output to guarantee typed results. Urgent tickets immediately notify team leads via broadcast and SMS.

**Step 2 — Skill-based routing:** After triage, `SkillBasedRouter` matches the ticket to the best-qualified available agent. Qualification is intersection-based: the agent's declared skills must fully cover the ticket's required skills (e.g., a Spanish-speaking senior engineer for a technical bug reported by a Latin American enterprise customer). Among qualified agents, the least-loaded is selected.

**Step 3 — SLA clock start:** On assignment, the SLA timer begins. The `SlaMonitoringAgent` evaluates every active ticket every 5 minutes, calculating elapsed time against the policy's business-hours-aware thresholds. Tickets approaching 80% of their SLA window get a warning notification to the assigned agent.

**Step 4 — Sentiment-aware mid-life escalation:** If `SentimentAnalysisAgent` detects a sustained negative trend (three consecutive messages with score < -0.5), it triggers a mid-life escalation that moves the ticket up one escalation level regardless of SLA status, preventing a frustrated customer from waiting the full resolution SLA.

**Step 5 — Multi-level escalation chain:** At level 1, the team lead is notified and optionally auto-assigned. At level 2, the department manager is pulled in with a summary of what's been tried. At level 3, a support director is alerted and a war-room Slack channel is created. Each escalation includes a machine-generated summary of the ticket timeline, actions taken, and suggested next steps.

**Step 6 — Post-resolution calibration:** Escalation events feed back into the triage model. If a particular intent/team combination consistently produces escalations, the triage agent recalibrates to assign higher initial priority to similar future tickets.

**Q23: Describe how you would build a multi-channel customer engagement system that unifies email, chat, social media, and phone into a single agent workspace.**

The system centers on a unified inbox that presents every customer interaction as a ticket with a chronological message thread, regardless of source channel.

**Channel ingestion layer:**

- **Email:** A dedicated mailbox monitored via IMAP IDLE. Incoming emails are parsed (MIME subject, body, attachments, in-reply-to headers) and published to the `inbound` queue. Outbound replies are sent via the same mailbox with proper threading headers.
- **Chat:** A WebSocket server (Laravel Reverb) powers a live chat widget embedded in the customer portal. Messages are streamed in real-time to both customer and agent. When the chat ends, the transcript is appended to the ticket.
- **Social:** API webhooks from Twitter/X, Facebook Messenger, Instagram, and WhatsApp receive incoming messages. Rate-limited pollers backfill missed messages. Social posts are normalized into standard message format with platform metadata preserved.
- **Phone:** Twilio or Vonage integration receives incoming calls. An IVR menu collects the ticket number or customer ID, then the call is queued for an available agent. After the call, a speech-to-text transcript (using Whisper or Google Speech-to-Text) is attached to the ticket.

**Unified agent workspace:**

The agent sees one interface regardless of channel. Key features:

- **Ticket list:** Filterable by status, priority, channel, team, and SLA urgency. Visual indicators (colored dots, countdown clocks) for SLA breaches.
- **Message thread:** Chronological display with channel badges (email envelope, chat bubble, phone icon). Internal notes are highlighted with a different background. Attachments render inline.
- **Customer profile sidebar:** History of past tickets, CSAT scores, segment tags, and recent interactions.
- **AI assistant panel:** Knowledge-based article suggestions, auto-composed reply drafts, and sentiment indicators update in real-time.
- **Quick actions:** Merge tickets, change priority, reassign, add internal note, or escalate with a single click.

**Identity resolution:** When a customer contacts from a new channel (e.g., existing email customer sends a Facebook message), the system resolves identity by matching phone number, email hash, or social handle to the existing customer profile. Fragmented identities are flagged for manual merge.

**Q24: A customer opens a ticket via chat at 9 AM, emails a detailed explanation at 10 AM, and calls at 2 PM frustrated that no one has responded. How would your system handle this?**

This scenario tests multi-channel continuity and SLA management.

**9:00 AM — Chat:** The customer starts a chat. The `MultiChannelAgent` creates a new ticket. The chat transcript becomes the ticket's initial message. `TicketTriageAgent` classifies the intent as "technical" with medium priority and routes to the engineering team. Ticket status: `open`.

**9:15 AM — Chat ends:** A 5-minute idle timeout closes the chat session. The ticket remains `open`, awaiting assignment. The SLA clock started at 9:00 AM (first contact). The `SlaMonitoringAgent` records zero elapsed response time.

**10:00 AM — Email:** The customer sends a detailed email from the same address. The email parser detects the customer email matches an existing open ticket's customer. Instead of creating a new ticket, it appends the email as a new message on the existing ticket. `SentimentAnalysisAgent` scores the email at -0.3 (slight frustration, not yet critical). The ticket's `description` field is updated to include the new details.

**2:00 PM — Phone call:** The customer calls. The IVR looks up the caller's phone number, finds the open ticket, and queues the call with ticket context. The agent who answers sees the full chat transcript and email attachment. The customer's frustration is validated by the system: at this point, 5 hours have elapsed with no agent assignment.

**System response at 2:00 PM:** The `SlaMonitoringAgent` evaluates the ticket. Assuming an 8-hour resolution SLA, the ticket is at 62.5% of its window — not yet breached but past the 50% warning threshold. A warning notification fires to the engineering team lead. Additionally, the `EscalationAgent` notes the pending sentiment trend (two messages, slight negative) and applies a "attention-needed" flag.

**Resolution:** The team lead assigns a senior agent who reviews the unified timeline, responds within 30 minutes of the flag, and resolves the issue. The post-resolution survey is dispatched. A follow-up retrospective identifies that the engineering team had no agents available that morning, triggering a staffing review.

**Q25: Design a system that uses AI to suggest knowledge base articles to agents while they type a reply.**

The agent typing in the reply composer triggers a debounced AJAX call (300ms idle) to an endpoint that runs the knowledge base RAG pipeline:

```php
class AgentSuggestionController
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'ticket_id' => 'required|exists:tickets,id',
            'draft_text' => 'required|string|min:10',
        ]);

        $ticket = Ticket::findOrFail($request->ticket_id);
        $draftEmbedding = Str::toEmbeddings($request->draft_text);

        $articles = Article::query()
            ->whereVectorSimilarity('embedding', $draftEmbedding, 3)
            ->where('is_published', true)
            ->get()
            ->map(fn ($article) => [
                'id' => $article->id,
                'title' => $article->title,
                'snippet' => Str::limit($article->content, 200),
                'similarity' => $article->similarity,
                'url' => route('knowledge.show', $article),
            ]);

        // Also compare draft against resolved tickets for similar past solutions
        $similarTickets = Ticket::query()
            ->whereVectorSimilarity('resolution_embedding', $draftEmbedding, 2)
            ->where('status', 'closed')
            ->where('team_id', $ticket->team_id)
            ->get()
            ->map(fn ($t) => [
                'ticket_id' => $t->id,
                'resolution_summary' => $t->resolution_summary,
                'similarity' => $t->similarity,
            ]);

        return response()->json([
            'articles' => $articles,
            'similar_tickets' => $similarTickets,
        ]);
    }
}
```

The frontend renders suggestions as a collapsible panel beside the composer. Clicking an article inserts a citation link; clicking a similar ticket opens a read-only view of the past resolution. The suggestions improve over time because resolved tickets store their resolution as embeddings that future searches can match against.

The endpoint is rate-limited per agent (60 requests/minute) and cached aggressively — identical draft texts within a 5-minute window return cached results. Embeddings are computed asynchronously on first request and cached in Redis for subsequent identical or near-identical drafts.

**Q26: Your support platform's SLA compliance rate dropped from 94% to 78% in one week. How do you diagnose and fix it?**

**Diagnosis:**

1. **Verify data integrity.** Check if the SLA timer correctly excludes business hours and weekends. A policy configuration change (e.g., switching from 8-hour to 4-hour resolution SLA) could mechanically increase breaches without any operational change.

2. **Segment by dimension.** Break down the 78% by team, channel, priority, time of day, and customer segment. If engineering has 95% compliance but billing has 55%, the issue is team-specific rather than systemic.

3. **Check agent availability.** Query agent login/logout times against ticket volume. A week of higher-than-normal PTO or a hiring freeze could reduce coverage. The `agent_activity_log` table reveals whether coverage dropped.

4. **Inspect queue depth.** A backed-up queue (especially the triage or assignment queue) means tickets are created but not processed. `Horizon::queueMetrics()` shows stalled jobs or workers at capacity.

5. **Review triage accuracy.** Sample 50 breached tickets and check whether `TicketTriageAgent` correctly classified priority. If medium-priority tickets are actually high-severity billing issues, the triage model needs retraining.

**Fix:**

- **Immediate:** Reassign backlog across teams based on current workload. Temporarily reduce non-urgent ticket visibility to let agents focus on breached and soon-to-breach tickets. Extend SLA targets temporarily with management approval.
- **Short-term:** Adjust auto-escalation thresholds so tickets approaching breach get reassigned to less-loaded teams. Add a manual override allowing team leads to reassign stalled tickets in bulk.
- **Long-term:** Implement predictive SLA breach forecasting — a simple model that flags tickets likely to breach within 2 hours based on current assignment, queue depth, and agent availability. Auto-escalate those tickets proactively rather than reactively.
- **Preventive:** Add a weekly SLA compliance review to the monitoring agent that compares week-over-week rates and auto-creates a management ticket when a team drops more than 5 percentage points.

---

## Summary

This chapter covered 25+ interview questions spanning the full customer service and support domain. The questions tested domain knowledge (ticketing systems, SLA metrics, support workflows), technical implementation (triage agents, sentiment analysis, knowledge base RAG, escalation automation, multi-channel normalization, satisfaction tracking, self-service portals, SLA monitoring), architecture and design (multi-channel platform design, real-time ticket management, schema design, sentiment analytics), and behavioral scenarios (full platform design, automated routing, multi-channel continuity, agent assist features, SLA incident diagnosis).

Key themes: every support function maps to a specialized AI agent; structured output from LLMs is essential for reliable automation; multi-channel normalization is the hardest integration problem; and SLA compliance is both a technical metric and an operational process.

---

## Exercises

1. **SLA Breach Prediction:** Extend `SlaMonitoringAgent` with a `predictBreaches()` method that uses ticket age, current queue depth, and agent availability to flag tickets likely to breach within 2 hours. Cache predictions and compare against actual breaches for accuracy tracking.

2. **Cross-Channel Identity Merge:** Build an artisan command `support:merge-duplicate-customers` that finds customer records sharing phone, email, or social handles across channels and merges their ticket histories into a single customer profile with an audit log.

3. **Agent Assist Ranking:** Modify the `AgentSuggestionController` so that article suggestions are ranked by a weighted score combining vector similarity, article view count, and the article's correlation with high-CSAT resolutions. Store the ranking weights in a config file.

4. **Sentiment-Aware Survey Timing:** Update `SatisfactionAgent::dispatchSurvey` so that if the final message sentiment score is below -0.3, the survey is delayed by an additional 24 hours and a follow-up message from a senior agent is dispatched first.

5. **Escalation Chain Config UI:** Build a Livewire component that lets team leads configure their escalation chain (level thresholds, notification targets, auto-assignment rules) through a drag-and-drop interface backed by the `sla_policies.escalation_chain` JSON column.
