# Chapter 26: Business Automation Agents

---

## Learning Objectives

- Design and implement the automation pipeline pattern (trigger â†’ agent â†’ decision â†’ action â†’ log) using Laravel and the AI SDK
- Build a reusable `AutomationAgent` base class with database-driven configuration for triggers, actions, and branching workflows
- Deploy scheduled, event-triggered, and webhook-driven automation agents with Laravel's scheduler, event system, and webhook controllers
- Implement human-in-the-loop approval workflows where agents propose actions and humans approve via notification buttons
- Construct agent-based ETL data pipelines with ingestion, transformation, and loading stages orchestrated by AI
- Build escalation and notification agents with multi-channel alerting and time-based escalation chains
- Implement comprehensive audit logging for every automated decision with full traceability

---

## Theory

![Business Automation Agents](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/laravel/26-business-automation-agents.png)


### 26.1 Introduction to Business Automation with AI

Business automation replaces manual, repetitive processes with software that executes without human intervention. Traditional automation handles deterministic rules â€” "if invoice total > $10,000, send for approval." AI agents transform automation by handling non-deterministic decisions: classifying an invoice category, deciding whether an email is spam or legitimate, extracting structured data from an unstructured PDF, or determining which team should handle a support ticket.

#### The Automation Pipeline

Every automation follows the same fundamental pipeline:

```
Trigger â†’ Agent â†’ Decision â†’ Action â†’ Log
```

| Stage | Purpose | Example |
|---|---|---|
| **Trigger** | Initiates the workflow | Cron schedule, Laravel event, incoming webhook |
| **Agent** | AI-powered reasoning | Classifies, extracts, decides, transforms |
| **Decision** | The agent's structured output | Category, confidence score, extracted fields |
| **Action** | Executes the decision | Create record, send email, call API |
| **Log** | Records everything | Who triggered, what agent decided, what action was taken |

#### Automation Types

| Type | Trigger | Latency | Use Case |
|---|---|---|---|
| **Scheduled** | Laravel scheduler (cron) | Minutes to hours | Daily reports, hourly monitoring |
| **Event-triggered** | Laravel events (ModelSaved, etc.) | Near-real-time | Invoice paid â†’ reconcile, user registered â†’ onboard |
| **Webhook-driven** | External HTTP POST | Real-time | GitHub push â†’ review, Stripe charge â†’ record |
| **Human-in-the-loop** | Agent â†’ Notification â†’ Approval | Minutes to days | Purchase order approval, content publishing |

---

### 26.2 Setting Up an Automation Framework in Laravel

A robust automation framework needs three things: a way to define workflows, a base agent class that all automation agents extend, and a logging mechanism. We build these as reusable infrastructure.

#### The AutomationWorkflow Model

Workflows define what triggers an automation, what agent runs, and what actions to take. Store them in the database so they can be configured without code changes:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AutomationWorkflow extends Model
{
    protected $fillable = [
        'name',
        'description',
        'trigger_type',
        'trigger_config',
        'agent_class',
        'agent_instructions',
        'conditions',
        'actions',
        'is_active',
        'priority',
    ];

    protected $casts = [
        'trigger_config' => 'array',
        'conditions' => 'array',
        'actions' => 'array',
        'is_active' => 'boolean',
        'priority' => 'integer',
    ];

    public function logs(): HasMany
    {
        return $this->hasMany(AutomationLog::class, 'workflow_id');
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeByTrigger($query, string $triggerType)
    {
        return $query->where('trigger_type', $triggerType);
    }
}
```

#### Migration for AutomationWorkflow

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('automation_workflows', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('trigger_type');
            $table->json('trigger_config')->nullable();
            $table->string('agent_class');
            $table->text('agent_instructions');
            $table->json('conditions')->nullable();
            $table->json('actions')->nullable();
            $table->boolean('is_active')->default(true);
            $table->integer('priority')->default(0);
            $table->timestamps();

            $table->index('trigger_type');
            $table->index('is_active');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('automation_workflows');
    }
};
```

#### The AutomationAgent Base Class

All automation agents extend this base class, which injects the workflow configuration and provides helper methods for logging decisions and executing actions:

```php
<?php

namespace App\Ai\Agents\Automation;

use App\Models\AutomationLog;
use App\Models\AutomationWorkflow;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

abstract class AutomationAgent implements Agent
{
    use Promptable;

    public function __construct(
        protected AutomationWorkflow $workflow,
        protected array $context = [],
    ) {}

    public function instructions(): Stringable|string
    {
        $context = ! empty($this->context)
            ? "Context:\n" . json_encode($this->context, JSON_PRETTY_PRINT)
            : 'No additional context provided.';

        return <<<PROMPT
You are a business automation agent. Your role is to process incoming data,
make decisions, and produce structured output that drives automated actions.

Workflow: {$this->workflow->name}
Instructions: {$this->workflow->agent_instructions}

{$context}

Respond with a structured decision that includes:
1. Your analysis of the input
2. The decision or classification
3. What action should be taken
4. Confidence level and reasoning
PROMPT;
    }

    public function logDecision(
        string $triggerSource,
        mixed $inputData,
        mixed $decision,
        mixed $actionResult,
        ?string $status = 'completed',
        ?string $errorMessage = null,
    ): AutomationLog {
        return AutomationLog::create([
            'workflow_id' => $this->workflow->id,
            'trigger_source' => $triggerSource,
            'input_data' => $inputData,
            'agent_decision' => $decision,
            'action_taken' => $actionResult,
            'status' => $status,
            'error_message' => $errorMessage,
            'execution_time_ms' => defined('LARAVEL_START')
                ? (int) ((microtime(true) - LARAVEL_START) * 1000)
                : 0,
        ]);
    }

    public function executeAction(string $actionType, array $actionConfig, mixed $decision): mixed
    {
        return match ($actionType) {
            'create_record' => $this->executeCreateRecord($actionConfig, $decision),
            'send_notification' => $this->executeSendNotification($actionConfig, $decision),
            'call_api' => $this->executeCallApi($actionConfig, $decision),
            'update_record' => $this->executeUpdateRecord($actionConfig, $decision),
            'dispatch_job' => $this->executeDispatchJob($actionConfig, $decision),
            default => throw new \InvalidArgumentException("Unknown action type: {$actionType}"),
        };
    }

    protected function executeCreateRecord(array $config, mixed $decision): mixed
    {
        $modelClass = $config['model'];
        $data = array_merge($config['static_data'] ?? [], $decision['data'] ?? []);

        return $modelClass::create($data);
    }

    protected function executeSendNotification(array $config, mixed $decision): void
    {
        $notificationClass = $config['notification'];
        $recipients = $config['recipients'];

        foreach ($recipients as $recipient) {
            $user = \App\Models\User::where('email', $recipient)->first();
            if ($user) {
                $user->notify(new $notificationClass($decision, $config));
            }
        }
    }

    protected function executeCallApi(array $config, mixed $decision): mixed
    {
        $method = $config['method'] ?? 'post';
        $url = $config['url'];
        $data = array_merge($config['body'] ?? [], $decision['data'] ?? []);

        return \Illuminate\Support\Facades\Http::withHeaders($config['headers'] ?? [])
            ->{$method}($url, $data)
            ->json();
    }

    protected function executeUpdateRecord(array $config, mixed $decision): mixed
    {
        $modelClass = $config['model'];
        $record = $modelClass::findOrFail($config['record_id']);

        $updateData = array_merge($config['static_data'] ?? [], $decision['data'] ?? []);
        $record->update($updateData);

        return $record;
    }

    protected function executeDispatchJob(array $config, mixed $decision): void
    {
        $jobClass = $config['job'];
        $jobData = array_merge($config['data'] ?? [], ['decision' => $decision]);

        $jobClass::dispatch($jobData);
    }
}
```

---

### 26.3 Scheduled (Cron-Driven) Automation Agents

Scheduled automation agents run on a recurring schedule defined by Laravel's `schedule()` method in the console Kernel. Common examples include daily report generation, hourly monitoring, and weekly cleanup tasks.

#### The GenerateReportCommand

Wrap the scheduled agent in an Artisan command so the scheduler can invoke it:

```php
<?php

namespace App\Console\Commands;

use App\Ai\Agents\Automation\Scheduled\DailyReportAgent;
use App\Models\AutomationWorkflow;
use Illuminate\Console\Command;

class GenerateReportCommand extends Command
{
    protected $signature = 'automation:generate-report {workflow?} {--period=daily}';
    protected $description = 'Run the daily report generation automation agent';

    public function handle(): int
    {
        $workflowId = $this->argument('workflow');

        $workflow = $workflowId
            ? AutomationWorkflow::findOrFail($workflowId)
            : AutomationWorkflow::active()
                ->byTrigger('scheduled')
                ->where('agent_class', DailyReportAgent::class)
                ->first();

        if (! $workflow) {
            $this->error('No matching automation workflow found.');
            return Command::FAILURE;
        }

        $this->info("Running automation: {$workflow->name}");

        try {
            $period = $this->option('period');
            $yesterday = now()->subDay();

            $metrics = [
                'orders_count' => \App\Models\Order::whereDate('created_at', $yesterday)->count(),
                'revenue' => \App\Models\Order::whereDate('created_at', $yesterday)->sum('total'),
                'avg_order_value' => \App\Models\Order::whereDate('created_at', $yesterday)->avg('total'),
                'new_customers' => \App\Models\User::whereDate('created_at', $yesterday)->count(),
                'refund_requests' => \App\Models\Refund::whereDate('created_at', $yesterday)->count(),
            ];

            $agent = new DailyReportAgent($workflow, ['metrics' => $metrics], $period);

            $response = $agent
                ->maxTokens(2048)
                ->prompt("Generate the {$period} business report for "
                    . $yesterday->toDateString()
                    . '. Include key metrics, trends, and any anomalies detected.');

            $decision = [
                'action' => 'store_report',
                'report_summary' => mb_substr($response->text(), 0, 500),
                'data' => [
                    'period' => $period,
                    'generated_at' => now()->toIso8601String(),
                    'report' => $response->text(),
                ],
            ];

            $result = $agent->executeAction('create_record', [
                'model' => \App\Models\GeneratedReport::class,
                'static_data' => [
                    'workflow_id' => $workflow->id,
                    'period' => $period,
                    'content' => $response->text(),
                    'metrics' => json_encode($metrics),
                ],
            ], $decision);

            $agent->logDecision(
                triggerSource: 'scheduler',
                inputData: $metrics,
                decision: $decision,
                actionResult: $result->toArray(),
            );

            $this->info('Report generated successfully.');
            return Command::SUCCESS;
        } catch (\Throwable $e) {
            $this->error("Automation failed: {$e->getMessage()}");
            return Command::FAILURE;
        }
    }
}
```

#### The DailyReportAgent Class

```php
<?php

namespace App\Ai\Agents\Automation\Scheduled;

use App\Ai\Agents\Automation\AutomationAgent;
use App\Models\AutomationWorkflow;
use Stringable;

class DailyReportAgent extends AutomationAgent
{
    public function __construct(
        AutomationWorkflow $workflow,
        array $context = [],
        protected string $period = 'daily',
    ) {
        parent::__construct($workflow, $context);
    }

    public function instructions(): Stringable|string
    {
        $metrics = $this->context['metrics'] ?? [];

        $metricsStr = ! empty($metrics)
            ? collect($metrics)->map(fn ($v, $k) => "  - {$k}: {$v}")->implode("\n")
            : '  No metrics available.';

        return <<<PROMPT
You are a report generation agent. Your job is to analyze business metrics
and generate a comprehensive {$this->period} report.

Current metrics:
{$metricsStr}

Your report should include:
1. Executive summary of key metrics
2. Trends and comparisons to previous periods
3. Notable anomalies or outliers
4. Actionable recommendations

Format the report professionally with sections and bullet points.
PROMPT;
    }
}
```

#### The RunMonitoringAgent Command

An hourly agent that checks system health metrics and alerts on anomalies:

```php
<?php

namespace App\Console\Commands;

use App\Ai\Agents\Automation\Scheduled\SystemMonitorAgent;
use App\Models\AutomationWorkflow;
use Illuminate\Console\Command;

class RunMonitoringAgentCommand extends Command
{
    protected $signature = 'automation:monitor';
    protected $description = 'Run the hourly system monitoring agent';

    public function handle(): int
    {
        $workflow = AutomationWorkflow::active()
            ->byTrigger('scheduled')
            ->where('agent_class', SystemMonitorAgent::class)
            ->first();

        if (! $workflow) {
            $this->error('No system monitor workflow found.');
            return Command::FAILURE;
        }

        $metrics = [
            'cpu_usage' => sys_getloadavg()[0] ?? 0,
            'memory_usage_mb' => memory_get_usage(true) / 1024 / 1024,
            'queue_size' => \Illuminate\Support\Facades\Queue::size(),
            'failed_jobs_24h' => \App\Models\FailedJob::where('failed_at', '>=', now()->subDay())->count(),
        ];

        $agent = new SystemMonitorAgent($workflow, ['metrics' => $metrics]);

        $response = $agent
            ->maxTokens(1024)
            ->prompt("Analyze these system metrics and determine if any thresholds are breached:\n"
                . json_encode($metrics, JSON_PRETTY_PRINT));

        $decision = $response->structured();

        if (($decision['alert_required'] ?? false)) {
            foreach (($decision['alerts'] ?? []) as $alert) {
                $this->sendAlert($alert);
            }
        }

        $agent->logDecision(
            triggerSource: 'scheduler:monitor',
            inputData: $metrics,
            decision: $decision,
            actionResult: ['alerts_sent' => $decision['alerts'] ?? []],
        );

        $this->info('Monitoring cycle completed.');
        return Command::SUCCESS;
    }

    private function sendAlert(array $alert): void
    {
        \Illuminate\Support\Facades\Notification::route('slack', config('services.slack.webhook'))
            ->notify(new \App\Notifications\SystemAlert(
                $alert['message'] ?? 'Unknown alert',
                $alert['severity'] ?? 'warning',
            ));
    }
}
```

#### Registering in the Console Kernel

```php
<?php

namespace App\Console;

use App\Console\Commands\GenerateReportCommand;
use App\Console\Commands\RunMonitoringAgentCommand;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule): void
    {
        $schedule->command(GenerateReportCommand::class, ['--period=daily'])
            ->dailyAt('06:00')
            ->withoutOverlapping()
            ->onFailure(function () {
                \Illuminate\Support\Facades\Log::error('Daily report automation failed.');
            });

        $schedule->command(GenerateReportCommand::class, ['--period=weekly'])
            ->weeklyOn(1, '07:00')
            ->withoutOverlapping();

        $schedule->command(RunMonitoringAgentCommand::class)
            ->hourly()
            ->withoutOverlapping()
            ->runInBackground();

        $schedule->command('automation:cleanup-logs')
            ->daily()
            ->onOneServer();
    }

    protected function commands(): void
    {
        $this->load(__DIR__ . '/Commands');
    }
}
```

---

### 26.4 Event-Triggered Automation Agents

Event-triggered agents react to Laravel events. When something happens in the application â€” a model is saved, a user registers, an invoice is paid â€” the event system dispatches an agent to process it.

#### The Event-to-Agent Bridge

```php
<?php

namespace App\Listeners;

use App\Models\AutomationLog;
use App\Models\AutomationWorkflow;
use Illuminate\Database\Eloquent\Model;

class DispatchAutomationAgent
{
    public function handle(object $event): void
    {
        $eventClass = get_class($event);

        $workflows = AutomationWorkflow::active()
            ->byTrigger('event')
            ->where('trigger_config->event', $eventClass)
            ->get();

        foreach ($workflows as $workflow) {
            try {
                $context = $this->extractContext($event);

                if (! $this->evaluateConditions($workflow->conditions, $context)) {
                    AutomationLog::create([
                        'workflow_id' => $workflow->id,
                        'trigger_source' => "event:{$eventClass}",
                        'input_data' => $context,
                        'status' => 'skipped',
                        'error_message' => 'Conditions not met',
                    ]);
                    continue;
                }

                $agentClass = $workflow->agent_class;
                $agent = new $agentClass($workflow, $context);

                $agent
                    ->queue("Process the following event data:\n"
                        . json_encode($context, JSON_PRETTY_PRINT))
                    ->then(function (string $output) use ($agent, $workflow, $context, $eventClass): void {
                        foreach ($workflow->actions as $action) {
                            $agent->executeAction($action['type'], $action['config'], [
                                'output' => $output,
                                'context' => $context,
                            ]);
                        }

                        $agent->logDecision(
                            triggerSource: "event:{$eventClass}",
                            inputData: $context,
                            decision: ['agent_output' => $output],
                            actionResult: ['actions_executed' => count($workflow->actions)],
                        );
                    })
                    ->catch(function (\Throwable $e) use ($workflow, $context, $eventClass): void {
                        AutomationLog::create([
                            'workflow_id' => $workflow->id,
                            'trigger_source' => "event:{$eventClass}",
                            'input_data' => $context,
                            'status' => 'failed',
                            'error_message' => $e->getMessage(),
                        ]);
                    });
            } catch (\Throwable $e) {
                AutomationLog::create([
                    'workflow_id' => $workflow->id,
                    'trigger_source' => "event:{$eventClass}",
                    'input_data' => $context ?? [],
                    'status' => 'error',
                    'error_message' => $e->getMessage(),
                ]);
            }
        }
    }

    private function extractContext(object $event): array
    {
        $reflection = new \ReflectionClass($event);
        $properties = [];

        foreach ($reflection->getProperties(\ReflectionProperty::IS_PUBLIC) as $prop) {
            $value = $prop->getValue($event);

            if ($value instanceof Model) {
                $properties[$prop->getName()] = $value->toArray();
            } else {
                $properties[$prop->getName()] = $value;
            }
        }

        return $properties;
    }

    private function evaluateConditions(?array $conditions, array $context): bool
    {
        if (empty($conditions)) {
            return true;
        }

        foreach ($conditions as $condition) {
            $field = $condition['field'] ?? null;
            $operator = $condition['operator'] ?? '=';
            $value = $condition['value'] ?? null;
            $actualValue = data_get($context, $field);

            $matches = match ($operator) {
                '=' => $actualValue == $value,
                '!=' => $actualValue != $value,
                '>' => $actualValue > $value,
                '>=' => $actualValue >= $value,
                '<' => $actualValue < $value,
                '<=' => $actualValue <= $value,
                'in' => in_array($actualValue, (array) $value),
                'not_in' => ! in_array($actualValue, (array) $value),
                'contains' => str_contains((string) $actualValue, (string) $value),
                'regex' => preg_match($value, (string) $actualValue) === 1,
                default => true,
            };

            if (! $matches) {
                return false;
            }
        }

        return true;
    }
}
```

#### The InvoiceProcessingAgent

```php
<?php

namespace App\Ai\Agents\Automation\EventDriven;

use App\Ai\Agents\Automation\AutomationAgent;
use Stringable;

class InvoiceProcessingAgent extends AutomationAgent
{
    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are an invoice processing agent. When an invoice is paid, you must:

1. Verify the payment matches the invoice amount
2. Categorize the invoice (operational_expense, vendor_payment, subscription, one_time)
3. Determine if the invoice needs reconciliation (if amount > threshold)
4. Suggest the appropriate GL account code
5. Flag any anomalies (overpayment, underpayment, duplicate)

Respond with a structured decision containing:
- verification_status: verified or discrepancy_found
- category: one of the categories above
- needs_reconciliation: boolean
- suggested_gl_code: string
- anomalies: array of strings
- confidence: float between 0 and 1
PROMPT;
    }
}
```

#### Registering the Event Subscriber

```php
<?php

namespace App\Providers;

use App\Events\InvoicePaid;
use App\Events\OrderShipped;
use App\Events\UserRegistered;
use App\Listeners\DispatchAutomationAgent;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        InvoicePaid::class => [
            DispatchAutomationAgent::class,
        ],
        OrderShipped::class => [
            DispatchAutomationAgent::class,
        ],
        UserRegistered::class => [
            DispatchAutomationAgent::class,
        ],
    ];

    public function boot(): void
    {
        parent::boot();
    }
}
```

#### Seeding Automation Workflows

```php
<?php

namespace Database\Seeders;

use App\Models\AutomationWorkflow;
use Illuminate\Database\Seeder;

class AutomationWorkflowSeeder extends Seeder
{
    public function run(): void
    {
        AutomationWorkflow::create([
            'name' => 'Invoice Paid Processing',
            'description' => 'Process invoices when payment is received',
            'trigger_type' => 'event',
            'trigger_config' => [
                'event' => 'App\Events\InvoicePaid',
            ],
            'agent_class' => 'App\Ai\Agents\Automation\EventDriven\InvoiceProcessingAgent',
            'agent_instructions' => 'Process invoice payments, verify amounts, categorize expenses, and flag discrepancies.',
            'conditions' => [
                ['field' => 'invoice.total', 'operator' => '>', 'value' => 0],
            ],
            'actions' => [
                [
                    'type' => 'create_record',
                    'config' => [
                        'model' => 'App\Models\ProcessedTransaction',
                        'static_data' => ['source' => 'invoice_agent'],
                    ],
                ],
                [
                    'type' => 'send_notification',
                    'config' => [
                        'notification' => 'App\Notifications\InvoiceProcessed',
                        'recipients' => ['finance@example.com'],
                    ],
                ],
            ],
            'is_active' => true,
            'priority' => 10,
        ]);

        AutomationWorkflow::create([
            'name' => 'New User Onboarding',
            'description' => 'Send onboarding sequence to newly registered users',
            'trigger_type' => 'event',
            'trigger_config' => [
                'event' => 'App\Events\UserRegistered',
            ],
            'agent_class' => 'App\Ai\Agents\Automation\EventDriven\UserOnboardingAgent',
            'agent_instructions' => "Analyze the new user's signup data, determine their likely use case, and recommend the appropriate onboarding flow.",
            'conditions' => [],
            'actions' => [
                [
                    'type' => 'dispatch_job',
                    'config' => [
                        'job' => 'App\Jobs\SendOnboardingSequence',
                        'data' => ['delay_minutes' => 5],
                    ],
                ],
            ],
            'is_active' => true,
            'priority' => 5,
        ]);
    }
}
```

### 26.5 Webhook-Driven Automation Agents

Webhook-driven agents accept incoming HTTP requests from external services â€” GitHub, Stripe, Slack, or any service that sends webhooks â€” and dispatch agents to process the payload.

#### WebhookController with Signature Verification

```php
<?php

namespace App\Http\Controllers\Api;

use App\Ai\Agents\Automation\WebhookDriven\CodeReviewAgent;
use App\Ai\Agents\Automation\WebhookDriven\PaymentReconciliationAgent;
use App\Models\AutomationLog;
use App\Models\AutomationWorkflow;
use Illuminate\Http\Request;

class WebhookController extends Controller
{
    public function handleGithub(Request $request): array
    {
        $payload = $request->getContent();
        $signature = $request->header('X-Hub-Signature-256');
        $event = $request->header('X-GitHub-Event');
        $secret = config('services.github.webhook_secret');

        if (! $secret || ! $signature) {
            abort(401, 'Missing signature or secret');
        }

        $expected = 'sha256=' . hash_hmac('sha256', $payload, $secret);

        if (! hash_equals($expected, $signature)) {
            abort(401, 'Invalid signature');
        }

        $data = json_decode($payload, true);

        $workflow = AutomationWorkflow::active()
            ->byTrigger('webhook')
            ->where('trigger_config->source', 'github')
            ->first();

        if (! $workflow) {
            return ['status' => 'no_workflow'];
        }

        if ($event === 'push') {
            $agent = new CodeReviewAgent($workflow, [
                'repository' => $data['repository']['full_name'],
                'branch' => str_replace('refs/heads/', '', $data['ref']),
                'commits' => $data['commits'],
                'pusher' => $data['pusher']['name'],
            ]);

            $response = $agent
                ->maxTokens(4096)
                ->prompt("Review the following push to {$data['repository']['full_name']} "
                    . "on branch {$data['ref']}.\n\nCommits:\n"
                    . json_encode($data['commits'], JSON_PRETTY_PRINT));

            $agent->logDecision(
                triggerSource: 'webhook:github:push',
                inputData: [
                    'repository' => $data['repository']['full_name'],
                    'event' => $event,
                    'commits' => $data['commits'],
                ],
                decision: ['recommendations' => $response->text()],
                actionResult: [],
            );
        }

        return ['status' => 'processed', 'event' => $event];
    }

    public function handleStripe(Request $request): array
    {
        $payload = $request->getContent();
        $sigHeader = $request->header('Stripe-Signature');
        $secret = config('services.stripe.webhook_secret');

        if (! $secret || ! $sigHeader) {
            abort(401, 'Missing configuration');
        }

        try {
            \Stripe\Webhook::constructEvent($payload, $sigHeader, $secret);
        } catch (\Exception $e) {
            abort(401, 'Invalid signature');
        }

        $event = json_decode($payload, true);
        $eventType = $event['type'];

        $workflow = AutomationWorkflow::active()
            ->byTrigger('webhook')
            ->where('trigger_config->source', 'stripe')
            ->where('trigger_config->event_type', $eventType)
            ->first();

        if (! $workflow) {
            return ['status' => 'no_matching_workflow'];
        }

        $data = $event['data']['object'];

        $agent = new PaymentReconciliationAgent($workflow, [
            'event_type' => $eventType,
            'amount' => $data['amount'] / 100,
            'currency' => $data['currency'],
            'customer' => $data['customer'] ?? null,
            'created' => date('Y-m-d H:i:s', $data['created']),
        ]);

        $agent
            ->queue("Reconcile this Stripe {$eventType} event:\n"
                . json_encode($data, JSON_PRETTY_PRINT))
            ->then(function (string $output) use ($agent, $eventType, $data): void {
                $agent->logDecision(
                    triggerSource: "webhook:stripe:{$eventType}",
                    inputData: $data,
                    decision: ['agent_output' => $output],
                    actionResult: ['status' => 'reconciled'],
                );
            });

        return ['status' => 'received', 'event' => $eventType];
    }

    public function handleGeneric(Request $request, string $source): array
    {
        $workflow = AutomationWorkflow::active()
            ->byTrigger('webhook')
            ->where('trigger_config->source', $source)
            ->first();

        if (! $workflow) {
            return ['status' => 'no_workflow'];
        }

        $payload = $request->all();
        $agentClass = $workflow->agent_class;
        $agent = new $agentClass($workflow, ['payload' => $payload]);

        $agent
            ->queue("Process this webhook payload from {$source}:\n"
                . json_encode($payload, JSON_PRETTY_PRINT))
            ->then(function (string $output) use ($agent, $source, $payload): void {
                $agent->logDecision(
                    triggerSource: "webhook:{$source}",
                    inputData: $payload,
                    decision: ['agent_output' => $output],
                    actionResult: [],
                );
            });

        return ['status' => 'queued', 'source' => $source];
    }
}
```

#### Webhook Routes

```php
<?php

use App\Http\Controllers\Api\WebhookController;
use Illuminate\Support\Facades\Route;

Route::prefix('webhooks')->group(function () {
    Route::post('github', [WebhookController::class, 'handleGithub']);
    Route::post('stripe', [WebhookController::class, 'handleStripe']);
    Route::post('{source}', [WebhookController::class, 'handleGeneric']);
});
```

#### Webhook Agent Classes

```php
<?php

namespace App\Ai\Agents\Automation\WebhookDriven;

use App\Ai\Agents\Automation\AutomationAgent;
use Stringable;

class CodeReviewAgent extends AutomationAgent
{
    public function instructions(): Stringable|string
    {
        $repo = $this->context['repository'] ?? 'unknown';
        $branch = $this->context['branch'] ?? 'unknown';

        return <<<PROMPT
You are a code review automation agent monitoring the {$repo} repository ({$branch} branch).

For each push event, you must:
1. Summarize the changes in each commit
2. Flag potential issues: security vulnerabilities, breaking changes, debug code, hardcoded secrets
3. Assess code quality based on commit messages and change descriptions
4. Recommend whether this push needs human review before proceeding to production

Provide actionable feedback.
PROMPT;
    }
}
```

```php
<?php

namespace App\Ai\Agents\Automation\WebhookDriven;

use App\Ai\Agents\Automation\AutomationAgent;
use Stringable;

class PaymentReconciliationAgent extends AutomationAgent
{
    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are a payment reconciliation agent for Stripe transactions.

For each payment event, you must:
1. Verify the transaction matches expected patterns
2. Cross-reference the amount and currency with any pending invoices
3. Categorize the transaction (subscription_renewal, one_time_purchase, refund, adjustment)
4. Flag any discrepancies (wrong amount, unexpected currency, unusual timing)
5. Determine if the transaction should be automatically reconciled or flagged for manual review

Respond with a structured decision containing verification status, category, and any flags.
PROMPT;
    }
}
```

---

### 26.6 Approval Workflows with Human-in-the-Loop

Some decisions are too important for an agent to make alone. The agent proposes an action, sends a notification to a human approver with accept/reject actions, and only executes once approved.

#### The ApprovalWorkflowAgent

```php
<?php

namespace App\Ai\Agents\Automation\Approval;

use App\Ai\Agents\Automation\AutomationAgent;
use App\Models\ApprovalRequest;
use App\Models\AutomationWorkflow;
use Stringable;

class ApprovalWorkflowAgent extends AutomationAgent
{
    public function __construct(
        AutomationWorkflow $workflow,
        array $context = [],
        protected array $approvers = [],
    ) {
        parent::__construct($workflow, $context);
    }

    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are an approval workflow agent. Your job is to analyze requests that require
human approval before execution. For each request, you must:

1. Analyze the request details and context
2. Determine the risk level (low, medium, high)
3. Recommend whether to approve, reject, or request more information
4. Identify the appropriate approver based on the request type and amount
5. Provide a clear rationale for your recommendation

You do NOT execute actions directly â€” you submit recommendations for human review.
PROMPT;
    }

    public function proposeAction(
        string $actionType,
        array $actionData,
        string $summary,
        int $approvalTimeoutMinutes = 60,
    ): ApprovalRequest {
        $response = $this
            ->maxTokens(1024)
            ->prompt("Analyze this action and provide a recommendation:\n\n"
                . "Action Type: {$actionType}\nData: "
                . json_encode($actionData, JSON_PRETTY_PRINT)
                . "\n\nSummary: {$summary}");

        $approval = ApprovalRequest::create([
            'workflow_id' => $this->workflow->id,
            'action_type' => $actionType,
            'action_data' => $actionData,
            'summary' => $summary,
            'agent_recommendation' => $response->text(),
            'status' => 'pending',
            'approvers' => $this->approvers,
            'expires_at' => now()->addMinutes($approvalTimeoutMinutes),
        ]);

        $this->sendApprovalNotification($approval);

        return $approval;
    }

    private function sendApprovalNotification(ApprovalRequest $approval): void
    {
        $notification = new \App\Notifications\ApprovalRequired($approval);

        foreach ($this->approvers as $approverRef) {
            $user = $this->resolveApprover($approverRef);
            if ($user) {
                $user->notify($notification);
            }
        }
    }

    private function resolveApprover(string|int $ref): ?\App\Models\User
    {
        if (is_numeric($ref)) {
            return \App\Models\User::find($ref);
        }
        return \App\Models\User::where('email', $ref)->first();
    }

    public function handleApproval(ApprovalRequest $approval, string $decision, ?string $comment = null): void
    {
        $approval->update([
            'status' => $decision,
            'approved_at' => $decision === 'approved' ? now() : null,
            'rejected_at' => $decision === 'rejected' ? now() : null,
            'approver_comment' => $comment,
        ]);

        if ($decision === 'approved') {
            foreach ($this->workflow->actions as $action) {
                $this->executeAction($action['type'], $action['config'], [
                    'approval_id' => $approval->id,
                    'data' => $approval->action_data,
                ]);
            }
        }

        $this->logDecision(
            triggerSource: 'approval_workflow',
            inputData: $approval->action_data,
            decision: [
                'approval_id' => $approval->id,
                'recommendation' => $approval->agent_recommendation,
                'human_decision' => $decision,
            ],
            actionResult: ['status' => "human_{$decision}"],
        );
    }
}
```

#### The ApprovalRequest Model

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ApprovalRequest extends Model
{
    protected $fillable = [
        'workflow_id',
        'requestor_id',
        'action_type',
        'action_data',
        'summary',
        'agent_recommendation',
        'status',
        'approvers',
        'approved_by',
        'approved_at',
        'rejected_at',
        'approver_comment',
        'expires_at',
    ];

    protected $casts = [
        'action_data' => 'array',
        'approvers' => 'array',
        'expires_at' => 'datetime',
        'approved_at' => 'datetime',
        'rejected_at' => 'datetime',
    ];

    public function workflow(): BelongsTo
    {
        return $this->belongsTo(AutomationWorkflow::class);
    }

    public function isExpired(): bool
    {
        return $this->expires_at && $this->expires_at->isPast();
    }
}
```

#### Migration for ApprovalRequest

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('approval_requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('workflow_id')->constrained('automation_workflows');
            $table->foreignId('requestor_id')->nullable()->constrained('users');
            $table->string('action_type');
            $table->json('action_data');
            $table->text('summary');
            $table->longText('agent_recommendation')->nullable();
            $table->string('status')->default('pending');
            $table->json('approvers');
            $table->foreignId('approved_by')->nullable()->constrained('users');
            $table->timestamp('approved_at')->nullable();
            $table->timestamp('rejected_at')->nullable();
            $table->text('approver_comment')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('expires_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('approval_requests');
    }
};
```

#### Approval Notification with Action Buttons

```php
<?php

namespace App\Notifications;

use App\Models\ApprovalRequest;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ApprovalRequired extends Notification
{
    use Queueable;

    public function __construct(
        public ApprovalRequest $approval,
    ) {}

    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        $approveUrl = url("/api/approvals/{$this->approval->id}/approve");
        $rejectUrl = url("/api/approvals/{$this->approval->id}/reject");

        return (new MailMessage)
            ->subject("Approval Required: {$this->approval->summary}")
            ->greeting('Approval Request')
            ->line("Action: {$this->approval->action_type}")
            ->line("Summary: {$this->approval->summary}")
            ->line("Agent Recommendation: {$this->approval->agent_recommendation}")
            ->line('')
            ->line('Please review and take action:')
            ->action('Approve', $approveUrl)
            ->line("To reject, visit: {$rejectUrl}")
            ->line("Expires: {$this->approval->expires_at->toDayDateTimeString()}");
    }

    public function toArray(object $notifiable): array
    {
        return [
            'approval_id' => $this->approval->id,
            'action_type' => $this->approval->action_type,
            'summary' => $this->approval->summary,
            'approve_url' => url("/api/approvals/{$this->approval->id}/approve"),
            'reject_url' => url("/api/approvals/{$this->approval->id}/reject"),
        ];
    }
}
```

#### ApprovalController

```php
<?php

namespace App\Http\Controllers\Api;

use App\Ai\Agents\Automation\Approval\ApprovalWorkflowAgent;
use App\Models\ApprovalRequest;
use App\Models\AutomationWorkflow;
use Illuminate\Http\Request;

class ApprovalController extends Controller
{
    public function approve(int $id): array
    {
        $approval = ApprovalRequest::findOrFail($id);

        if ($approval->status !== 'pending') {
            return [
                'status' => 'error',
                'message' => "This request has already been {$approval->status}.",
            ];
        }

        if ($approval->isExpired()) {
            $approval->update(['status' => 'expired']);
            return ['status' => 'expired', 'message' => 'This approval request has expired.'];
        }

        $workflow = AutomationWorkflow::findOrFail($approval->workflow_id);
        $agent = new ApprovalWorkflowAgent($workflow);
        $agent->handleApproval($approval, 'approved');

        return ['status' => 'approved', 'message' => 'Action has been approved and executed.'];
    }

    public function reject(Request $request, int $id): array
    {
        $request->validate(['comment' => 'nullable|string|max:1000']);

        $approval = ApprovalRequest::findOrFail($id);

        if ($approval->status !== 'pending') {
            return [
                'status' => 'error',
                'message' => "This request has already been {$approval->status}.",
            ];
        }

        $workflow = AutomationWorkflow::findOrFail($approval->workflow_id);
        $agent = new ApprovalWorkflowAgent($workflow);
        $agent->handleApproval($approval, 'rejected', $request->input('comment'));

        return ['status' => 'rejected', 'message' => 'Action has been rejected.'];
    }

    public function pending(): array
    {
        $pending = ApprovalRequest::where('status', 'pending')
            ->where('expires_at', '>', now())
            ->with('workflow')
            ->orderBy('created_at', 'desc')
            ->get();

        return [
            'pending_count' => $pending->count(),
            'requests' => $pending->map(fn ($r) => [
                'id' => $r->id,
                'summary' => $r->summary,
                'action_type' => $r->action_type,
                'recommendation' => $r->agent_recommendation,
                'created_at' => $r->created_at->diffForHumans(),
                'expires_at' => $r->expires_at->diffForHumans(),
            ]),
        ];
    }
}
```

---

### 26.7 Agent-Based Data Pipelines

Agents can orchestrate ETL (Extract, Transform, Load) pipelines â€” ingesting data from files or APIs, using AI to transform and enrich it, and loading the result into the database.

#### DataIngestionAgent

```php
<?php

namespace App\Ai\Agents\Automation\DataPipeline;

use App\Ai\Agents\Automation\AutomationAgent;
use Illuminate\Support\Facades\Storage;
use Stringable;

class DataIngestionAgent extends AutomationAgent
{
    public function instructions(): Stringable|string
    {
        $sourceType = $this->context['source_type'] ?? 'unknown';

        return <<<PROMPT
You are a data ingestion agent. Your job is to extract raw data from various sources
and prepare it for transformation.

Source type: {$sourceType}

For CSV files, identify the columns, data types, row count, and any data quality issues.
For API responses, parse the structure, identify the relevant data fields, and pagination.
For PDFs, extract the key data points and tabular information.

Output a structured summary of what was ingested including record count, fields found,
and any anomalies detected.
PROMPT;
    }

    public function ingestFromCsv(string $filePath): array
    {
        $rows = [];
        $handle = fopen(Storage::path($filePath), 'r');

        if (! $handle) {
            throw new \RuntimeException("Cannot open file: {$filePath}");
        }

        $headers = fgetcsv($handle);
        $rowCount = 0;

        while (($data = fgetcsv($handle)) !== false) {
            if (count($data) === count($headers)) {
                $rows[] = array_combine($headers, $data);
            }
            $rowCount++;
        }

        fclose($handle);

        $sampleData = array_slice($rows, 0, 5);

        $response = $this
            ->maxTokens(1024)
            ->prompt("Analyze this CSV data:\n\nColumns: "
                . json_encode($headers)
                . "\n\nRow Count: {$rowCount}\n\nSample Rows:\n"
                . json_encode($sampleData, JSON_PRETTY_PRINT));

        return [
            'headers' => $headers,
            'row_count' => $rowCount,
            'rows' => $rows,
            'analysis' => $response->text(),
        ];
    }

    public function ingestFromApi(string $url, array $headers = []): array
    {
        $response = \Illuminate\Support\Facades\Http::withHeaders($headers)->get($url);

        if ($response->failed()) {
            throw new \RuntimeException("API request failed: {$response->status()}");
        }

        $data = $response->json();
        $recordCount = count($data['data'] ?? $data ?? []);

        $analysis = $this
            ->maxTokens(1024)
            ->prompt("Analyze this API response structure:\n\n"
                . json_encode($data, JSON_PRETTY_PRINT));

        return [
            'raw_data' => $data,
            'record_count' => $recordCount,
            'analysis' => $analysis->text(),
        ];
    }
}
```

#### DataTransformAgent

```php
<?php

namespace App\Ai\Agents\Automation\DataPipeline;

use App\Ai\Agents\Automation\AutomationAgent;
use Stringable;

class DataTransformAgent extends AutomationAgent
{
    public function instructions(): Stringable|string
    {
        $targetModel = $this->context['target_model'] ?? 'unknown';

        return <<<PROMPT
You are a data transformation agent. Your job is to transform raw ingested data
into structured records for the {$targetModel} model.

For each record, you must:
1. Map source fields to target model fields
2. Clean and normalize data (trim whitespace, standardize formats)
3. Validate data types and constraints
4. Enrich data where possible (derive calculated fields)
5. Flag records that cannot be cleanly transformed

Output the transformed records as structured data ready for loading.
PROMPT;
    }

    public function transform(array $rows, array $fieldMapping): array
    {
        $transformed = [];
        $errors = [];

        foreach ($rows as $index => $row) {
            try {
                $mapped = [];

                foreach ($fieldMapping as $targetField => $sourceField) {
                    if (is_array($sourceField)) {
                        $mapped[$targetField] = $this->applyTransformation(
                            $row[$sourceField['source']] ?? null,
                            $sourceField['transform'] ?? 'passthrough',
                            $sourceField['params'] ?? [],
                        );
                    } else {
                        $mapped[$targetField] = $row[$sourceField] ?? null;
                    }
                }

                $transformed[] = $mapped;
            } catch (\Throwable $e) {
                $errors[] = [
                    'row_index' => $index,
                    'error' => $e->getMessage(),
                    'data' => $row,
                ];
            }
        }

        $response = $this
            ->maxTokens(1024)
            ->prompt("Review transformation result:\n\nTransformed: "
                . count($transformed) . " records\nErrors: "
                . count($errors) . "\n\nFirst 3 transformed:\n"
                . json_encode(array_slice($transformed, 0, 3), JSON_PRETTY_PRINT)
                . "\n\nErrors:\n" . json_encode($errors, JSON_PRETTY_PRINT));

        return [
            'transformed' => $transformed,
            'errors' => $errors,
            'quality_report' => $response->text(),
        ];
    }

    private function applyTransformation(mixed $value, string $transform, array $params = []): mixed
    {
        return match ($transform) {
            'passthrough' => $value,
            'trim' => is_string($value) ? trim($value) : $value,
            'lowercase' => is_string($value) ? mb_strtolower($value) : $value,
            'uppercase' => is_string($value) ? mb_strtoupper($value) : $value,
            'float' => is_numeric($value) ? (float) $value
                : throw new \InvalidArgumentException("Cannot convert to float: {$value}"),
            'integer' => is_numeric($value) ? (int) $value
                : throw new \InvalidArgumentException("Cannot convert to integer: {$value}"),
            'boolean' => filter_var($value, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE)
                ?? throw new \InvalidArgumentException("Cannot convert to boolean: {$value}"),
            'date' => date($params['format'] ?? 'Y-m-d', strtotime((string) $value)),
            'datetime' => date($params['format'] ?? 'Y-m-d H:i:s', strtotime((string) $value)),
            'json' => is_string($value) ? json_decode($value, true) : $value,
            default => $value,
        };
    }
}
```

#### ETL Pipeline Orchestration

```php
<?php

namespace App\Http\Controllers\Api;

use App\Ai\Agents\Automation\DataPipeline\DataIngestionAgent;
use App\Ai\Agents\Automation\DataPipeline\DataTransformAgent;
use App\Models\AutomationLog;
use App\Models\AutomationWorkflow;
use Illuminate\Http\Request;

class EtlPipelineController extends Controller
{
    public function runCsvImport(Request $request): array
    {
        $request->validate([
            'file' => 'required|file|mimes:csv,txt|max:10240',
            'workflow_id' => 'required|exists:automation_workflows,id',
        ]);

        $workflow = AutomationWorkflow::findOrFail($request->input('workflow_id'));
        $file = $request->file('file');
        $path = $file->store('etl-imports');

        $ingestionAgent = new DataIngestionAgent($workflow, [
            'source_type' => 'csv',
        ]);

        $ingested = $ingestionAgent->ingestFromCsv($path);

        $fieldMapping = $workflow->trigger_config['field_mapping'] ?? [];
        $targetModel = $workflow->trigger_config['target_model'] ?? 'App\Models\ImportedRecord';

        $transformAgent = new DataTransformAgent($workflow, [
            'target_model' => $targetModel,
        ]);

        $transformed = $transformAgent->transform($ingested['rows'], $fieldMapping);

        $importedCount = 0;
        foreach ($transformed['transformed'] as $record) {
            $targetModel::create($record);
            $importedCount++;
        }

        AutomationLog::create([
            'workflow_id' => $workflow->id,
            'trigger_source' => 'etl:pipeline',
            'input_data' => [
                'source' => $path,
                'raw_count' => $ingested['row_count'],
            ],
            'agent_decision' => [
                'ingestion_analysis' => $ingested['analysis'],
                'transformation_quality' => $transformed['quality_report'],
            ],
            'action_taken' => [
                'imported' => $importedCount,
                'errors' => count($transformed['errors']),
            ],
            'status' => $transformed['errors'] ? 'completed_with_errors' : 'completed',
        ]);

        return [
            'imported' => $importedCount,
            'errors' => count($transformed['errors']),
            'error_details' => $transformed['errors'],
        ];
    }
}
```

### 26.8 Notification & Escalation Agents

Notification agents monitor system events and metrics, then intelligently route alerts to the right people through the right channels. Escalation agents add time-based escalation logic: if nobody acknowledges an alert within a window, it escalates to someone more senior.

#### EscalationAgent

```php
<?php

namespace App\Ai\Agents\Automation\Escalation;

use App\Ai\Agents\Automation\AutomationAgent;
use App\Models\Alert;
use App\Models\EscalationPolicie; // intentionally kept
use Illuminate\Support\Facades\Notification as NotificationFacade;
use Stringable;

class EscalationAgent extends AutomationAgent
{
    protected int $alertId;

    protected array $escalationPath = [];

    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are an escalation management agent. Your job is to classify alerts, determine severity,
and route them through the appropriate escalation path.

Severity levels:
- **CRITICAL**: System down, data loss, security breach. Escalate immediately to on-call + manager.
- **HIGH**: Major feature degraded, performance impact. Escalate to on-call within 15 min if unacknowledged.
- **MEDIUM**: Non-critical issue. Escalate to team lead if unacknowledged within 1 hour.
- **LOW**: Informational. No escalation needed.

For each alert, analyze the context and determine:
1. Correct severity level
2. Initial notification targets (who should be notified first)
3. Escalation path (who to escalate to and after how long)
4. Suggested response or remediation steps

Output a structured escalation plan.
PROMPT;
    }

    public function classifyAndEscalate(
        string $alertType,
        string $message,
        array $context = [],
        string $source = 'system',
    ): Alert {
        $response = $this
            ->maxTokens(1024)
            ->prompt("Classify this alert:\n\nType: {$alertType}\nMessage: {$message}\nContext: "
                . json_encode($context, JSON_PRETTY_PRINT));

        $plan = json_decode($response->text(), true) ?? [
            'severity' => 'MEDIUM',
            'initial_targets' => ['on-call'],
            'escalation_steps' => [
                ['after_minutes' => 60, 'targets' => ['team-lead']],
            ],
        ];

        $alert = Alert::create([
            'alert_type' => $alertType,
            'message' => $message,
            'context' => $context,
            'source' => $source,
            'severity' => $plan['severity'],
            'status' => 'open',
            'escalation_plan' => $plan['escalation_steps'] ?? [],
            'escalation_level' => 0,
        ]);

        $this->alertId = $alert->id;
        $this->escalationPath = $plan['escalation_steps'] ?? [];

        $this->notifyTargets($plan['initial_targets'] ?? ['on-call'], $alert);

        $this->logDecision(
            triggerSource: "escalation:{$source}",
            inputData: ['type' => $alertType, 'message' => $message, 'context' => $context],
            decision: $plan,
            actionResult: ['alert_id' => $alert->id, 'severity' => $plan['severity']],
        );

        return $alert;
    }

    public function checkEscalation(Alert $alert): ?array
    {
        if ($alert->status !== 'open' && $alert->status !== 'acknowledged') {
            return null;
        }

        $plan = $alert->escalation_plan;
        $currentLevel = $alert->escalation_level;

        if ($currentLevel >= count($plan)) {
            return null;
        }

        $step = $plan[$currentLevel];
        $escalatedAt = $alert->acknowledged_at ?? $alert->created_at;
        $minutesElapsed = $escalatedAt->diffInMinutes(now());

        if ($minutesElapsed >= ($step['after_minutes'] ?? 15)) {
            $this->notifyTargets($step['targets'] ?? [], $alert, true);
            $alert->increment('escalation_level');

            $this->logDecision(
                triggerSource: 'escalation:check',
                inputData: ['alert_id' => $alert->id, 'level' => $currentLevel],
                decision: ['action' => 'escalated', 'targets' => $step['targets'] ?? []],
                actionResult: ['new_level' => $currentLevel + 1],
            );

            return $step;
        }

        return null;
    }

    private function notifyTargets(array $targets, Alert $alert, bool $isEscalation = false): void
    {
        $notification = $isEscalation
            ? new \App\Notifications\AlertEscalated($alert)
            : new \App\Notifications\AlertCreated($alert);

        foreach ($targets as $target) {
            $user = $this->resolveTarget($target);
            if ($user) {
                NotificationFacade::send($user, $notification);
            }
        }
    }

    private function resolveTarget(string $target): ?\App\Models\User
    {
        $roles = [
            'on-call' => ['role' => 'support', 'oncall' => true],
            'team-lead' => ['role' => 'team_lead'],
            'manager' => ['role' => 'manager'],
            'admin' => ['role' => 'admin'],
            'security' => ['role' => 'security'],
        ];

        $criteria = $roles[$target] ?? null;
        if (! $criteria) {
            return \App\Models\User::where('email', $target)->first();
        }

        return \App\Models\User::whereHas('roles', function ($q) use ($criteria) {
            $q->where('name', $criteria['role']);
        })
            ->when($criteria['oncall'] ?? false, fn ($q) => $q->where('is_oncall', true))
            ->inRandomOrder()
            ->first();
    }
}
```

#### Alert Model and Migration

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Alert extends Model
{
    protected $fillable = [
        'alert_type', 'message', 'context', 'source',
        'severity', 'status', 'escalation_plan', 'escalation_level',
        'acknowledged_by', 'acknowledged_at', 'resolved_by', 'resolved_at',
    ];

    protected $casts = [
        'context' => 'array',
        'escalation_plan' => 'array',
        'acknowledged_at' => 'datetime',
        'resolved_at' => 'datetime',
    ];
}
```

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('alerts', function (Blueprint $table) {
            $table->id();
            $table->string('alert_type');
            $table->text('message');
            $table->json('context')->nullable();
            $table->string('source')->default('system');
            $table->string('severity');
            $table->string('status')->default('open');
            $table->json('escalation_plan')->nullable();
            $table->unsignedTinyInteger('escalation_level')->default(0);
            $table->foreignId('acknowledged_by')->nullable()->constrained('users');
            $table->timestamp('acknowledged_at')->nullable();
            $table->foreignId('resolved_by')->nullable()->constrained('users');
            $table->timestamp('resolved_at')->nullable();
            $table->timestamps();

            $table->index(['status', 'severity']);
            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('alerts');
    }
};
```

#### Escalation Command (run every minute via scheduler)

```php
<?php

namespace App\Console\Commands;

use App\Ai\Agents\Automation\Escalation\EscalationAgent;
use App\Models\Alert;
use App\Models\AutomationWorkflow;
use Illuminate\Console\Command;

class ProcessEscalations extends Command
{
    protected $signature = 'alerts:escalate';
    protected $description = 'Check and process alert escalations';

    public function handle(): int
    {
        $workflow = AutomationWorkflow::active()
            ->byTrigger('schedule')
            ->whereHas('tasks', fn ($q) => $q->where('task', 'alerts:escalate'))
            ->first();

        if (! $workflow) {
            $this->warn('No escalation workflow found');
            return self::FAILURE;
        }

        $agent = new EscalationAgent($workflow);

        $openAlerts = Alert::whereIn('status', ['open', 'acknowledged'])->get();
        $escalated = 0;

        foreach ($openAlerts as $alert) {
            $step = $agent->checkEscalation($alert);
            if ($step) {
                $escalated++;
                $this->info(
                    "Escalated alert #{$alert->id} to "
                    . implode(', ', $step['targets'] ?? [])
                );
            }
        }

        $this->info("Checked {$openAlerts->count()} alerts, escalated {$escalated}");

        return self::SUCCESS;
    }
}
```

---

### 26.9 Audit Logging for Agent Decisions

Every agent action should be auditable. The `AutomationLog` model captures who (which agent), what (decision), when (timestamp), and why (input context).

#### Enhanced AutomationLog with AgentReference

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AutomationLog extends Model
{
    protected $fillable = [
        'workflow_id',
        'agent_session_id',
        'trigger_source',
        'input_data',
        'agent_decision',
        'action_taken',
        'response_time_ms',
        'token_usage',
        'model_used',
        'status',
        'error_message',
        'performed_by',
    ];

    protected $casts = [
        'input_data' => 'array',
        'agent_decision' => 'array',
        'action_taken' => 'array',
        'token_usage' => 'array',
    ];

    public function workflow(): BelongsTo
    {
        return $this->belongsTo(AutomationWorkflow::class);
    }

    public function performer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'performed_by');
    }

    public function scopeByTrigger($query, string $trigger)
    {
        return $query->where('trigger_source', $trigger);
    }

    public function scopeToday($query)
    {
        return $query->whereDate('created_at', today());
    }

    public function scopeErrors($query)
    {
        return $query->where('status', 'failed');
    }

    public function scopeForWorkflow($query, int $workflowId)
    {
        return $query->where('workflow_id', $workflowId);
    }
}
```

#### AuditLogController with Query Capabilities

```php
<?php

namespace App\Http\Controllers\Api;

use App\Models\AutomationLog;
use Illuminate\Http\Request;

class AuditLogController extends Controller
{
    public function index(Request $request): array
    {
        $query = AutomationLog::with('workflow')
            ->latest();

        if ($request->filled('workflow_id')) {
            $query->where('workflow_id', $request->input('workflow_id'));
        }

        if ($request->filled('trigger_source')) {
            $query->where('trigger_source', 'like', '%' . $request->input('trigger_source') . '%');
        }

        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

        if ($request->filled('date_from')) {
            $query->whereDate('created_at', '>=', $request->input('date_from'));
        }

        if ($request->filled('date_to')) {
            $query->whereDate('created_at', '<=', $request->input('date_to'));
        }

        $perPage = $request->input('per_page', 25);
        $logs = $query->paginate(min($perPage, 100));

        return [
            'total' => $logs->total(),
            'per_page' => $logs->perPage(),
            'current_page' => $logs->currentPage(),
            'logs' => $logs->map(fn ($log) => [
                'id' => $log->id,
                'workflow' => $log->workflow?->name,
                'trigger' => $log->trigger_source,
                'decision_summary' => $this->summarizeDecision($log->agent_decision),
                'response_time_ms' => $log->response_time_ms,
                'status' => $log->status,
                'created_at' => $log->created_at->toIso8601String(),
            ]),
        ];
    }

    public function show(int $id): array
    {
        $log = AutomationLog::with('workflow', 'performer')->findOrFail($id);

        return [
            'id' => $log->id,
            'workflow' => $log->workflow?->name,
            'trigger_source' => $log->trigger_source,
            'input' => $log->input_data,
            'decision' => $log->agent_decision,
            'action' => $log->action_taken,
            'performance' => [
                'response_time_ms' => $log->response_time_ms,
                'token_usage' => $log->token_usage,
                'model' => $log->model_used,
            ],
            'status' => $log->status,
            'error' => $log->error_message,
            'performed_by' => $log->performer?->name,
            'timestamp' => $log->created_at->toIso8601String(),
        ];
    }

    public function stats(Request $request): array
    {
        $query = AutomationLog::query();

        if ($request->filled('workflow_id')) {
            $query->where('workflow_id', $request->input('workflow_id'));
        }

        $dateFrom = $request->input('date_from', now()->subDays(7));
        $query->whereDate('created_at', '>=', $dateFrom);

        $totalActions = (clone $query)->count();
        $successCount = (clone $query)->where('status', 'completed')->count();
        $failedCount = (clone $query)->where('status', 'failed')->count();
        $avgResponseTime = (clone $query)->avg('response_time_ms');

        $byTrigger = (clone $query)
            ->selectRaw('trigger_source, count(*) as count')
            ->groupBy('trigger_source')
            ->pluck('count', 'trigger_source')
            ->toArray();

        $byDay = (clone $query)
            ->selectRaw('DATE(created_at) as date, count(*) as count')
            ->groupBy('date')
            ->orderBy('date')
            ->pluck('count', 'date')
            ->toArray();

        return [
            'period' => ['from' => $dateFrom, 'to' => now()],
            'summary' => [
                'total_actions' => $totalActions,
                'completed' => $successCount,
                'failed' => $failedCount,
                'success_rate' => $totalActions > 0
                    ? round(($successCount / $totalActions) * 100, 1) . '%' : '0%',
                'avg_response_time_ms' => round($avgResponseTime ?? 0, 0),
            ],
            'breakdown' => [
                'by_trigger_source' => $byTrigger,
                'by_day' => $byDay,
            ],
        ];
    }

    private function summarizeDecision(?array $decision): string
    {
        if (! $decision) {
            return 'N/A';
        }

        $text = json_encode($decision);
        return mb_strlen($text) > 200 ? mb_substr($text, 0, 200) . '...' : $text;
    }
}
```

#### Audit Log Routes

```php
<?php

use App\Http\Controllers\Api\AuditLogController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->prefix('audit')->group(function () {
    Route::get('logs', [AuditLogController::class, 'index']);
    Route::get('logs/{id}', [AuditLogController::class, 'show']);
    Route::get('stats', [AuditLogController::class, 'stats']);
});
```

---

### 26.10 End-to-End Example: Customer Support Inbox Agent

This e2e example combines scheduling, event-driven logic, approval workflows, notifications, and audit logging into a single system: an automated customer support triage agent that ingests tickets, categorizes them, drafts replies, escalates critical issues, and logs everything.

#### SupportTriageAgent

```php
<?php

namespace App\Ai\Agents\Automation\E2E\CustomerSupport;

use App\Ai\Agents\Automation\AutomationAgent;
use App\Models\AutomationWorkflow;
use App\Models\SupportTicket;
use Stringable;

class SupportTriageAgent extends AutomationAgent
{
    public function __construct(
        AutomationWorkflow $workflow,
        array $context = [],
        protected ?string $ticketContent = null,
    ) {
        parent::__construct($workflow, $context);
    }

    public function instructions(): Stringable|string
    {
        return <<<PROMPT
You are a customer support triage agent for a SaaS platform.

For each incoming support ticket, you must:

1. **CATEGORIZE** the issue into: billing, technical, account, feature_request, bug_report, general
2. **ASSESS PRIORITY**: urgent (system down, data loss), high (blocked workflow), normal (question), low (request)
3. **SENTIMENT ANALYSIS**: frustrated, neutral, satisfied â€” flag frustrated tickets for priority handling
4. **DRAFT RESPONSE**: a helpful first reply addressing the customer's core concern
5. **DETERMINE ROUTING**: which team or agent should handle this (tier-1, billing, engineering, escalation)
6. **IDENTIFY ATTACHMENTS**: if files are referenced, note what they contain
7. **RECOMMEND NEXT STEPS**: auto-reply vs. human review â€” if confidence is above 85%, auto-reply; otherwise flag for review

Output a structured triage result with category, priority, sentiment, draft reply, and routing decision.
PROMPT;
    }

    public function triage(SupportTicket $ticket): SupportTicket
    {
        $startTime = microtime(true);

        $response = $this
            ->maxTokens(2048)
            ->prompt("Triage this support ticket:\n\n"
                . "Subject: {$ticket->subject}\n\n"
                . "Message:\n{$ticket->message}\n\n"
                . "Customer: {$ticket->customer_name} ({$ticket->customer_email})\n"
                . "Plan: {$ticket->customer_plan}\n"
                . "Attachments: " . ($ticket->attachment_names ?? 'none'));

        $result = json_decode($response->text(), true) ?? [
            'category' => 'general',
            'priority' => 'normal',
            'sentiment' => 'neutral',
            'draft_reply' => '',
            'routing' => 'tier-1',
            'auto_reply_confidence' => 0,
        ];

        $responseTime = (int) ((microtime(true) - $startTime) * 1000);

        $ticket->update([
            'category' => $result['category'] ?? 'general',
            'priority' => $result['priority'] ?? 'normal',
            'sentiment' => $result['sentiment'] ?? 'neutral',
            'routed_to' => $result['routing'] ?? 'tier-1',
            'triage_status' => 'completed',
        ]);

        if (($result['auto_reply_confidence'] ?? 0) > 85) {
            $this->sendAutoReply($ticket, $result['draft_reply'] ?? '');
        } else {
            $this->flagForReview($ticket, $result);
        }

        $this->logDecision(
            triggerSource: 'e2e:support_triage',
            inputData: [
                'ticket_id' => $ticket->id,
                'subject' => $ticket->subject,
                'customer' => $ticket->customer_email,
            ],
            decision: $result,
            actionResult: [
                'auto_replied' => ($result['auto_reply_confidence'] ?? 0) > 85,
                'routed_to' => $result['routing'] ?? 'tier-1',
            ],
            responseTimeMs: $responseTime,
        );

        return $ticket->fresh();
    }

    private function sendAutoReply(SupportTicket $ticket, string $reply): void
    {
        \Illuminate\Support\Facades\Mail::to($ticket->customer_email)
            ->send(new \App\Mail\AutoReply($ticket, $reply));

        $ticket->update([
            'auto_replied_at' => now(),
            'auto_reply_content' => $reply,
        ]);
    }

    private function flagForReview(SupportTicket $ticket, array $triageResult): void
    {
        \App\Models\TicketReview::create([
            'ticket_id' => $ticket->id,
            'reason' => 'low_confidence',
            'agent_data' => $triageResult,
        ]);
    }
}
```

#### SupportTicket Model

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupportTicket extends Model
{
    protected $fillable = [
        'customer_name', 'customer_email', 'customer_plan',
        'subject', 'message', 'attachment_names',
        'category', 'priority', 'sentiment',
        'routed_to', 'triage_status',
        'auto_replied_at', 'auto_reply_content',
    ];

    protected $casts = [
        'auto_replied_at' => 'datetime',
    ];
}
```

#### SupportTicket Migration

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('support_tickets', function (Blueprint $table) {
            $table->id();
            $table->string('customer_name');
            $table->string('customer_email');
            $table->string('customer_plan')->nullable();
            $table->string('subject');
            $table->longText('message');
            $table->text('attachment_names')->nullable();
            $table->string('category')->nullable();
            $table->string('priority')->default('normal');
            $table->string('sentiment')->nullable();
            $table->string('routed_to')->nullable();
            $table->string('triage_status')->default('pending');
            $table->timestamp('auto_replied_at')->nullable();
            $table->text('auto_reply_content')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('support_tickets');
    }
};
```

#### Event Listener for New Tickets

```php
<?php

namespace App\Listeners;

use App\Ai\Agents\Automation\E2E\CustomerSupport\SupportTriageAgent;
use App\Events\TicketCreated;
use App\Models\AutomationWorkflow;

class HandleTicketCreated
{
    public function handle(TicketCreated $event): void
    {
        $workflow = AutomationWorkflow::active()
            ->byTrigger('event')
            ->where('trigger_config->event', get_class($event))
            ->first();

        if (! $workflow) {
            return;
        }

        $agent = new SupportTriageAgent(
            workflow: $workflow,
            context: ['source' => 'event:listener'],
            ticketContent: $event->ticket->message,
        );

        $agent->triage($event->ticket);
    }
}
```

#### Scheduled Weekly Summary Command

```php
<?php

namespace App\Console\Commands;

use App\Ai\Agents\Automation\E2E\CustomerSupport\SupportTriageAgent;
use App\Models\AutomationWorkflow;
use App\Models\SupportTicket;
use Illuminate\Console\Command;

class SupportWeeklySummary extends Command
{
    protected $signature = 'support:weekly-summary';
    protected $description = 'Generate weekly support ticket summary';

    public function handle(): int
    {
        $workflow = AutomationWorkflow::active()
            ->byTrigger('schedule')
            ->whereHas('tasks', fn ($q) => $q->where('task', 'support:weekly-summary'))
            ->first();

        if (! $workflow) {
            $this->warn('No summary workflow found');
            return self::FAILURE;
        }

        $tickets = SupportTicket::where('created_at', '>=', now()->subWeek())->get();

        $agent = new SupportTriageAgent($workflow);

        $report = $agent
            ->maxTokens(2048)
            ->prompt("Generate a weekly support summary based on these tickets:\n\n"
                . json_encode($tickets->toArray(), JSON_PRETTY_PRINT));

        $this->info("Weekly Summary:\n{$report->text()}");

        $agent->logDecision(
            triggerSource: 'e2e:weekly_summary',
            inputData: ['ticket_count' => $tickets->count()],
            decision: ['summary' => $report->text()],
            actionResult: ['status' => 'reported'],
        );

        return self::SUCCESS;
    }
}
```

---

### Summary

Business automation agents bring AI decision-making into the operational backbone of a Laravel application. This chapter covered:

- **Automation framework**: A reusable base `AutomationAgent` with configurable workflows, conditions, and actions stored in the database
- **Scheduled agents**: Cron-driven agents that run reports, send digests, reconcile data â€” managed via the Task scheduler and a dedicated `AutomationTask` model
- **Event-triggered agents**: Agents that subscribe to Laravel events and react in real-time to user registrations, payments, errors, and domain events
- **Webhook-driven agents**: Externally triggered agents via signed HTTP requests from GitHub, Stripe, and custom sources â€” with signature verification
- **Approval workflows**: Human-in-the-loop agents that propose actions, notify approvers, and execute only on explicit approval â€” with expiry and escalation
- **Data pipeline agents**: ETL agents that ingest CSV or API data, transform it with AI-driven mapping, and load structured records into the database
- **Notification & escalation agents**: Severity-aware alert agents with multi-level escalation paths that route to the right person through the right channel
- **Audit logging**: A structured `AutomationLog` model that records every agent decision, action, response time, and token usage for compliance and debugging

The architectural pattern is consistent across all agent types: a configurable workflow definition in the database, a dedicated agent class, and a logging layer that records every decision. This makes the system observable, testable, and safe to deploy in production â€” agents act with full traceability.

---

### Exercises

#### Review Questions

1. What are the three core components of the automation framework's `AutomationAgent` base class?

2. How does a scheduled agent differ from an event-triggered agent? Give one use case for each.

3. Why must webhook payloads be signature-verified before being processed by an agent?

4. What is the role of the `ApprovalRequest` model in a human-in-the-loop workflow?

5. How does the escalation agent determine when to escalate an alert to the next level?

#### Application Problems

1. **Multi-Channel Alert Router**. Build an `AlertRouter` workflow that accepts alerts from email, Slack webhook, and internal API, classifies severity using an agent, and routes to the appropriate channel â€” PagerDuty for critical, Slack for high, email digest for medium/low.

2. **Invoice Reconciliation Pipeline**. Create a scheduled agent that runs nightly: ingests invoices from a CSV export, transforms them into the `App\Models\Invoice` model, cross-references payments against the Stripe webhook log, and flags discrepancies for manual approval.

3. **User Lifecycle Automation**. Design a set of event-driven agents that listen for `UserCreated`, `SubscriptionStarted`, `SubscriptionExpired`, and `UserDeleted` events â€” each agent sends the appropriate communication, updates CRM fields, and logs the action with full audit trail.

#### Challenge Problem

**Automated Incident Response System**. Build a complete end-to-end automation system with the following components:

1. **Monitoring Agent** (scheduled, every 5 min): Pings critical health endpoints, analyzes response times, and creates alerts for anomalies
2. **Classification Agent** (event-triggered): When a health check fails, classify severity and determine whether it is an infrastructure, application, or security incident
3. **Response Agent** (approval workflow): For critical incidents, propose a remediation action (restart service, rollback deployment, scale up resources) and route to the on-call engineer for approval
4. **Escalation Agent**: If the critical alert is unacknowledged for 10 minutes, escalate to the engineering manager; if unacknowledged for 30 minutes, escalate to the CTO
5. **Postmortem Agent** (scheduled, daily): Summarize all incidents from the past 24 hours, identify patterns, and draft a postmortem report with root cause analysis recommendations

Implement all workflow definitions, agent classes, models, migrations, event listeners, and associated notifications. Ensure every action is logged through the `AutomationLog` audit trail.