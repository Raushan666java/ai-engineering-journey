# Purvanchal Flow Studio

**Project Type:** AI-Powered Automation Platform
**Stack:** n8n + FastAPI Microservices + Redis + Laravel
**Duration:** 2 Weeks (after Phase 7)

---

## What is Purvanchal Flow Studio?

```
Purvanchal = Purab ka ilaaka (Eastern UP/Bihar)
Flow Studio = Automation platform

= Ek visual workflow builder jisme AI hai

Users bina code ke:
→ Workflows bana sakte hain (drag & drop)
→ AI nodes add kar sakte hain (ChatGPT, Claude)
→ 200+ apps connect kar sakte hain
→ Production pipelines bana sakte hain
→ Monitoring + alerts le sakte hain
```

---

## Problem & Solution

```
Problem:
❌ Raushan ke clients (SMEs in Bihar/UP) ko automation chahiye
❌ Par unke paas technical team nahi hai
❌ Zapier/Make bahut expensive hai ($30+/month)
❌ Complex workflows ke liye developer chahiye

Solution:
✅ Self-hosted n8n (free, open-source)
✅ AI-powered workflow builder
✅ Custom n8n nodes for local needs
✅ Laravel dashboard for management
✅ Affordable pricing for Indian SMEs
```

---

## Features

| Feature | Description |
|---------|-------------|
| Visual Workflow Builder | Drag-and-drop n8n interface |
| AI Nodes | OpenAI, Anthropic, HuggingFace integration |
| Custom Nodes | ApexERP-specific nodes (DB, Email, SMS, WhatsApp) |
| Templates | Pre-built workflows (Lead gen, Invoice, Support) |
| Monitoring | Execution logs, success rates, alerts |
| Teams | Multi-user with role-based access |
| Webhook Support | HTTP triggers from any app |
| Scheduling | Cron-based workflow triggers |
| Error Handling | Retry logic, error workflows, alerts |
| API Access | REST API to trigger/manage workflows |

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Laravel Frontend                   │
│           Dashboard | Templates | Monitoring         │
└──────────────────────┬──────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────┐
│              Laravel API (Backend)                   │
│      User Mgmt | Billing | Workflow CRUD | Stats    │
└──────┬──────────────────────┬───────────────────────┘
       │                      │
┌──────▼──────┐     ┌─────────▼──────────┐
│   n8n Core  │     │  Python Microservices │
│  Workflows  │     │  ├─ AI Service      │
│  AI Nodes   │     │  ├─ Workflow Engine │
│  200+ Apps  │     │  └─ Monitoring     │
└──────┬──────┘     └─────────┬──────────┘
       │                      │
┌──────┴──────────────────────┴───────────────────────┐
│                 Redis Queue                          │
│         (Async processing + Caching)                │
└──────────────────────┬──────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────┐
│                    PostgreSQL                         │
│        Workflows | Executions | Users | Logs        │
└─────────────────────────────────────────────────────┘
```

---

## Tech Stack

```
Frontend:
├── Laravel Blade + Tailwind CSS → User dashboard
├── n8n UI (embedded iframe) → Workflow builder
└── Chart.js → Monitoring graphs

Backend:
├── Laravel → User management, billing, API
├── n8n → Workflow execution engine
├── FastAPI → AI services, custom nodes, monitoring
└── Redis → Queue, caching, session management

Infrastructure:
├── Docker Compose → All services
├── PostgreSQL → Primary database
├── Redis → Cache + queue
└── Nginx → Reverse proxy
```

---

## Implementation Steps

### Step 1: Project Structure

```
flow-studio/
├── laravel/                    # Laravel application
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   │   ├── WorkflowController.php
│   │   │   │   ├── ExecutionController.php
│   │   │   │   ├── TemplateController.php
│   │   │   │   └── DashboardController.php
│   │   │   └── Livewire/
│   │   │       └── WorkflowBuilder.php
│   │   ├── Models/
│   │   │   ├── Workflow.php
│   │   │   ├── Execution.php
│   │   │   └── User.php
│   │   └── Services/
│   │       ├── N8nService.php
│   │       ├── WorkflowService.php
│   │       └── MonitoringService.php
│   ├── routes/
│   │   └── web.php
│   ├── resources/views/
│   │   ├── dashboard.blade.php
│   │   ├── workflows/
│   │   ├── templates/
│   │   └── monitoring/
│   └── docker/
│
├── microservices/              # Python services
│   ├── ai_service/
│   │   ├── main.py            # FastAPI AI endpoints
│   │   └── requirements.txt
│   ├── workflow_service/
│   │   ├── main.py            # Workflow orchestration
│   │   └── requirements.txt
│   └── monitoring_service/
│       ├── main.py            # Execution monitoring
│       └── requirements.txt
│
├── custom-nodes/               # Custom n8n nodes
│   ├── apexerp-db/
│   ├── apexerp-email/
│   ├── apexerp-whatsapp/
│   └── apexerp-sms/
│
├── docker-compose.yml
├── nginx.conf
├── .env.example
└── README.md
```

### Step 2: Laravel Backend

```php
<?php
// laravel/app/Services/N8nService.php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class N8nService
{
    protected string $baseUrl;
    protected string $apiKey;

    public function __construct()
    {
        $this->baseUrl = config('services.n8n.url', 'http://n8n:5678');
        $this->apiKey = config('services.n8n.api_key');
    }

    /**
     * Get all workflows from n8n.
     */
    public function getWorkflows(): array
    {
        $response = Http::withHeaders([
            'X-N8N-API-KEY' => $this->apiKey,
        ])->get("{$this->baseUrl}/rest/workflows");

        return $response->json()['data'] ?? [];
    }

    /**
     * Create a new workflow in n8n.
     */
    public function createWorkflow(array $data): array
    {
        $response = Http::withHeaders([
            'X-N8N-API-KEY' => $this->apiKey,
        ])->post("{$this->baseUrl}/rest/workflows", $data);

        return $response->json();
    }

    /**
     * Activate a workflow.
     */
    public function activateWorkflow(string $workflowId): bool
    {
        $response = Http::withHeaders([
            'X-N8N-API-KEY' => $this->apiKey,
        ])->post("{$this->baseUrl}/rest/workflows/{$workflowId}/activate");

        return $response->successful();
    }

    /**
     * Get executions for a workflow.
     */
    public function getExecutions(string $workflowId, int $limit = 20): array
    {
        $response = Http::withHeaders([
            'X-N8N-API-KEY' => $this->apiKey,
        ])->get("{$this->baseUrl}/rest/executions", [
            'workflowId' => $workflowId,
            'limit' => $limit,
        ]);

        return $response->json()['data'] ?? [];
    }

    /**
     * Trigger a workflow via webhook.
     */
    public function triggerWorkflow(string $webhookId, array $data): array
    {
        $response = Http::post(
            "{$this->baseUrl}/webhook/{$webhookId}",
            $data
        );

        return $response->json() ?? [];
    }
}
```

```php
<?php
// laravel/app/Http/Controllers/WorkflowController.php

namespace App\Http\Controllers;

use App\Services\N8nService;
use Illuminate\Http\Request;

class WorkflowController extends Controller
{
    public function __construct(
        protected N8nService $n8n
    ) {}

    /**
     * List all workflows for user.
     */
    public function index()
    {
        $workflows = $this->n8n->getWorkflows();
        return view('workflows.index', compact('workflows'));
    }

    /**
     * Show workflow builder (embedded n8n).
     */
    public function builder(string $id = null)
    {
        return view('workflows.builder', [
            'n8nUrl' => config('services.n8n.url'),
            'workflowId' => $id,
        ]);
    }

    /**
     * Create workflow from template.
     */
    public function createFromTemplate(Request $request)
    {
        $template = $this->getTemplate($request->template_id);
        
        $workflow = $this->n8n->createWorkflow([
            'name' => $template['name'],
            'nodes' => $template['nodes'],
            'connections' => $template['connections'],
            'settings' => $template['settings'],
        ]);

        return redirect()->route('workflows.builder', $workflow['id']);
    }

    /**
     * Toggle workflow activation.
     */
    public function toggleActivation(string $id)
    {
        $activated = $this->n8n->activateWorkflow($id);
        
        return response()->json([
            'activated' => $activated,
            'message' => $activated ? 'Workflow activated' : 'Failed to activate',
        ]);
    }

    /**
     * Get workflow executions.
     */
    public function executions(string $id)
    {
        $executions = $this->n8n->getExecutions($id);
        return view('workflows.executions', compact('executions'));
    }
}
```

### Step 3: User Dashboard (Blade)

```php
{{-- laravel/resources/views/dashboard.blade.php --}}
@extends('layouts.app')

@section('content')
<div class="container mx-auto px-4 py-8">
    {{-- Stats Cards --}}
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm">Total Workflows</h3>
            <p class="text-3xl font-bold mt-2">{{ $stats['total_workflows'] }}</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm">Active Workflows</h3>
            <p class="text-3xl font-bold mt-2 text-green-600">{{ $stats['active_workflows'] }}</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm">Total Executions</h3>
            <p class="text-3xl font-bold mt-2">{{ $stats['total_executions'] }}</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm">Success Rate</h3>
            <p class="text-3xl font-bold mt-2 {{ $stats['success_rate'] >= 90 ? 'text-green-600' : 'text-red-600' }}">
                {{ $stats['success_rate'] }}%
            </p>
        </div>
    </div>

    {{-- Recent Workflows --}}
    <div class="bg-white rounded-lg shadow mb-8">
        <div class="px-6 py-4 border-b flex justify-between items-center">
            <h2 class="text-lg font-semibold">Your Workflows</h2>
            <a href="{{ route('workflows.builder') }}" 
               class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                + New Workflow
            </a>
        </div>
        <div class="divide-y">
            @foreach($workflows as $wf)
            <div class="px-6 py-4 flex justify-between items-center">
                <div>
                    <h3 class="font-medium">{{ $wf['name'] }}</h3>
                    <p class="text-sm text-gray-500">
                        Last run: {{ $wf['last_execution'] ?? 'Never' }}
                    </p>
                </div>
                <div class="flex items-center space-x-4">
                    <span class="{{ $wf['active'] ? 'text-green-600' : 'text-gray-400' }}">
                        {{ $wf['active'] ? '● Active' : '○ Inactive' }}
                    </span>
                    <a href="{{ route('workflows.builder', $wf['id']) }}" 
                       class="text-indigo-600 hover:underline">Edit</a>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>
@endsection
```

### Step 4: Custom n8n Node

```javascript
// custom-nodes/apexerp-db/ApexerpDb.node.js

const { Node } = require('n8n-core');

/**
 * Custom n8n node to query ApexERP database.
 * 
 * Usage in n8n workflow:
 * 1. Add "ApexERP DB" node
 * 2. Configure: query type (sales/inventory/customers)
 * 3. Output: JSON data
 */
class ApexerpDb extends Node {
    constructor() {
        super();
        this.description = {
            displayName: 'ApexERP Database',
            name: 'apexerpDb',
            group: ['transform'],
            description: 'Query ApexERP database',
            version: 1,
            defaults: {
                name: 'ApexERP DB',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Query Type',
                    name: 'queryType',
                    type: 'options',
                    options: [
                        { name: 'Sales Data', value: 'sales' },
                        { name: 'Inventory', value: 'inventory' },
                        { name: 'Customers', value: 'customers' },
                        { name: 'Custom SQL', value: 'custom' },
                    ],
                    default: 'sales',
                    description: 'Type of data to fetch',
                },
                {
                    displayName: 'SQL Query',
                    name: 'sqlQuery',
                    type: 'string',
                    typeOptions: {
                        rows: 4,
                    },
                    displayOptions: {
                        show: { queryType: ['custom'] },
                    },
                    default: 'SELECT * FROM sales LIMIT 10',
                    description: 'Custom SQL query (SELECT only)',
                },
                {
                    displayName: 'Parameters',
                    name: 'parameters',
                    type: 'fixedCollection',
                    typeOptions: {
                        multipleValues: true,
                    },
                    options: [
                        {
                            name: 'values',
                            displayName: 'Values',
                            values: [
                                {
                                    displayName: 'Key',
                                    name: 'key',
                                    type: 'string',
                                    default: '',
                                },
                                {
                                    displayName: 'Value',
                                    name: 'value',
                                    type: 'string',
                                    default: '',
                                },
                            ],
                        },
                    ],
                    default: {},
                    description: 'Query parameters',
                },
            ],
        };
    }

    async execute() {
        const items = this.getInputData();
        const returnData = [];

        for (let i = 0; i < items.length; i++) {
            const queryType = this.getNodeParameter('queryType', i);
            const sqlQuery = this.getNodeParameter('sqlQuery', i, '');
            
            try {
                // Call Flow Studio microservice
                const result = await this.helpers.httpRequest({
                    method: 'POST',
                    url: 'http://workflow-service:8002/api/db/query',
                    body: {
                        query_type: queryType,
                        sql: sqlQuery,
                        params: this.getNodeParameter('parameters', i, {}),
                    },
                });

                returnData.push({
                    json: {
                        success: true,
                        data: result.data,
                        row_count: result.data.length,
                        query_type: queryType,
                    },
                });
            } catch (error) {
                returnData.push({
                    json: {
                        success: false,
                        error: error.message,
                        query_type: queryType,
                    },
                });
            }
        }

        return this.prepareOutputData(returnData);
    }
}

module.exports = {
    node: ApexerpDb,
};
```

### Mermaid: Architecture Sequence

```mermaid
sequenceDiagram
    actor C as Client (SME Owner)
    participant L as Laravel Dashboard
    participant N as n8n Engine
    participant A as AI Microservice
    participant W as Workflow Service
    participant R as Redis Queue
    participant P as PostgreSQL
    
    C->>L: Login to Flow Studio
    L->>L: Authenticate user
    L->>N: Request workflow list (API)
    N-->>L: Return workflows
    
    C->>L: Create workflow from template
    L->>N: POST /rest/workflows (template JSON)
    N-->>L: Workflow created
    
    C->>L: Activate workflow
    L->>N: POST /rest/workflows/{id}/activate
    N-->>L: Workflow active
    
    Note over N,R: Trigger fires (webhook/cron)
    
    N->>R: Queue workflow execution
    R->>N: Dequeue for processing
    N->>A: POST /ai/complete (prompt)
    A->>A: Call OpenAI API
    A-->>N: AI response
    
    N->>W: Execute business logic
    W->>P: Query/Store data
    W-->>N: Result
    
    N->>P: Log execution record
    N-->>L: Execution status update
    
    L-->>C: Dashboard updated with results
    L-->>C: Notification (WhatsApp/Email)
```

### Step 6: User Authentication & Team Management

```php
<?php
// laravel/app/Models/User.php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'company_name',
        'phone',
        'role',        // admin, manager, operator, viewer
        'tenant_id',   // multi-tenant: each client gets unique ID
        'plan',        // free, basic, pro, enterprise
        'workflow_limit',
        'ai_call_limit',
        'is_active',
    ];

    protected $hidden = ['password', 'remember_token'];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_active' => 'boolean',
        'workflow_limit' => 'integer',
        'ai_call_limit' => 'integer',
    ];

    /**
     * Check if user can create more workflows.
     */
    public function canCreateWorkflow(): bool
    {
        $count = $this->workflows()->count();
        return $count < $this->workflow_limit;
    }

    /**
     * Get usage percentage for dashboard.
     */
    public function usagePercentage(): array
    {
        return [
            'workflows' => round(($this->workflows()->count() / max($this->workflow_limit, 1)) * 100),
            'ai_calls' => round(($this->aiCallsThisMonth() / max($this->ai_call_limit, 1)) * 100),
            'storage' => $this->getStorageUsage(),
        ];
    }

    public function workflows()
    {
        return $this->hasMany(Workflow::class);
    }

    public function aiCallsThisMonth(): int
    {
        return $this->executions()
            ->where('created_at', '>=', now()->startOfMonth())
            ->where('has_ai', true)
            ->count();
    }
}
```

```php
<?php
// laravel/app/Http/Middleware/TenantMiddleware.php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TenantMiddleware
{
    /**
     * Handle multi-tenant data isolation.
     * Har client sirf apna data dekhe.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $tenantId = auth()->user()->tenant_id;
        
        // Set global tenant scope for all queries
        request()->merge(['tenant_id' => $tenantId]);
        
        // Add tenant filter to all queries via global scope
        // Workflow::addGlobalScope('tenant', fn($q) => $q->where('tenant_id', $tenantId));
        
        return $next($request);
    }
}
```

### Step 7: Usage Tracking & Billing

```php
<?php
// laravel/app/Services/BillingService.php

namespace App\Services;

use App\Models\User;
use Carbon\Carbon;

class BillingService
{
    /**
     * Pricing plans for Indian SMEs (in INR).
     */
    const PLANS = [
        'free' => [
            'price' => 0,
            'workflows' => 5,
            'ai_calls' => 100,
            'users' => 1,
            'support' => 'community',
        ],
        'starter' => [
            'price' => 499,  // ₹499/month
            'workflows' => 20,
            'ai_calls' => 1000,
            'users' => 3,
            'support' => 'email',
        ],
        'business' => [
            'price' => 1499,  // ₹1,499/month
            'workflows' => 100,
            'ai_calls' => 10000,
            'users' => 10,
            'support' => 'priority',
        ],
        'enterprise' => [
            'price' => 4999,  // ₹4,999/month
            'workflows' => -1,  // unlimited
            'ai_calls' => -1,   // unlimited
            'users' => -1,       // unlimited
            'support' => 'dedicated',
        ],
    ];

    /**
     * Calculate bill for a tenant at month end.
     */
    public function calculateMonthlyBill(User $user): array
    {
        $plan = self::PLANS[$user->plan] ?? self::PLANS['free'];
        $basePrice = $plan['price'];
        
        // Calculate overage costs
        $workflowCount = $user->workflows()->count();
        $aiCalls = $user->aiCallsThisMonth();
        
        $overages = [];
        
        // Workflow overage
        if ($plan['workflows'] > 0 && $workflowCount > $plan['workflows']) {
            $extraWorkflows = $workflowCount - $plan['workflows'];
            $overages[] = [
                'item' => 'Extra workflows',
                'count' => $extraWorkflows,
                'rate' => 49,  // ₹49 per extra workflow
                'amount' => $extraWorkflows * 49,
            ];
        }
        
        // AI call overage
        if ($plan['ai_calls'] > 0 && $aiCalls > $plan['ai_calls']) {
            $extraCalls = $aiCalls - $plan['ai_calls'];
            $overages[] = [
                'item' => 'Extra AI calls',
                'count' => $extraCalls,
                'rate' => 0.50,  // ₹0.50 per extra call
                'amount' => $extraCalls * 0.50,
            ];
        }
        
        $totalOverage = array_sum(array_column($overages, 'amount'));
        
        return [
            'plan' => $user->plan,
            'base_price' => $basePrice,
            'overages' => $overages,
            'total_overage' => $totalOverage,
            'total' => $basePrice + $totalOverage,
            'gst' => ($basePrice + $totalOverage) * 0.18,  // 18% GST
            'grand_total' => ($basePrice + $totalOverage) * 1.18,
            'currency' => 'INR',
        ];
    }
    
    /**
     * Check if user needs upgrade (soft reminder, not block).
     */
    public function checkUpgradeNeeded(User $user): ?array
    {
        $usage = $user->usagePercentage();
        
        if ($usage['workflows'] >= 80 || $usage['ai_calls'] >= 80) {
            $plans = array_keys(self::PLANS);
            $currentIndex = array_search($user->plan, $plans);
            $nextPlan = $plans[$currentIndex + 1] ?? null;
            
            if ($nextPlan) {
                return [
                    'current_plan' => $user->plan,
                    'recommended_plan' => $nextPlan,
                    'price' => self::PLANS[$nextPlan]['price'],
                    'reason' => 'You\'re approaching your plan limits. Upgrade for more capacity.',
                ];
            }
        }
        
        return null;
    }
}
```

### Step 8: Execution Monitoring Dashboard

```php
<?php
// laravel/app/Http/Controllers/ExecutionController.php

namespace App\Http\Controllers;

use App\Models\Execution;
use Illuminate\Http\Request;

class ExecutionController extends Controller
{
    /**
     * Show execution history for a workflow.
     */
    public function index(Request $request, string $workflowId)
    {
        $executions = Execution::where('workflow_id', $workflowId)
            ->where('tenant_id', auth()->user()->tenant_id)
            ->orderBy('created_at', 'desc')
            ->paginate(20);

        return view('monitoring.executions', [
            'executions' => $executions,
            'workflowId' => $workflowId,
        ]);
    }

    /**
     * Get execution details.
     */
    public function show(string $id)
    {
        $execution = Execution::where('id', $id)
            ->where('tenant_id', auth()->user()->tenant_id)
            ->firstOrFail();

        return view('monitoring.execution-detail', [
            'execution' => $execution,
            'trace' => json_decode($execution->trace_json, true),
            'input' => json_decode($execution->input_json, true),
            'output' => json_decode($execution->output_json, true),
        ]);
    }

    /**
     * API endpoint for real-time stats (Chart.js).
     */
    public function stats(Request $request)
    {
        $hours = $request->get('hours', 24);
        $tenantId = auth()->user()->tenant_id;
        
        $since = now()->subHours($hours);
        
        // Per-hour execution counts
        $hourlyStats = Execution::selectRaw(
            "DATE_TRUNC('hour', created_at) as hour, status, COUNT(*) as count"
        )
            ->where('tenant_id', $tenantId)
            ->where('created_at', '>=', $since)
            ->groupBy('hour', 'status')
            ->orderBy('hour')
            ->get();

        // Success rate
        $total = Execution::where('tenant_id', $tenantId)
            ->where('created_at', '>=', $since)
            ->count();
        
        $successful = Execution::where('tenant_id', $tenantId)
            ->where('created_at', '>=', $since)
            ->where('status', 'success')
            ->count();

        // AI cost
        $totalCost = Execution::where('tenant_id', $tenantId)
            ->where('created_at', '>=', $since)
            ->sum('ai_cost');

        return response()->json([
            'hourly' => $hourlyStats,
            'total_executions' => $total,
            'success_rate' => $total > 0 ? round(($successful / $total) * 100, 1) : 0,
            'failed_count' => $total - $successful,
            'ai_cost' => round($totalCost, 2),
            'avg_duration_ms' => round(
                Execution::where('tenant_id', $tenantId)
                    ->where('created_at', '>=', $since)
                    ->whereNotNull('duration_ms')
                    ->avg('duration_ms') ?? 0
            ),
        ]);
    }
}
```

```php
{{-- laravel/resources/views/monitoring/execution-detail.blade.php --}}
@extends('layouts.app')

@section('content')
<div class="container mx-auto px-4 py-8">
    <div class="mb-6">
        <a href="{{ route('monitoring.executions', $execution->workflow_id) }}" 
           class="text-indigo-600 hover:underline">&larr; Back to executions</a>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm">Status</h3>
            <p class="text-2xl font-bold {{ $execution->status === 'success' ? 'text-green-600' : 'text-red-600' }}">
                {{ ucfirst($execution->status) }}
            </p>
            @if($execution->status === 'error' && $execution->error_message)
                <p class="text-sm text-red-500 mt-2">{{ $execution->error_message }}</p>
            @endif
        </div>
        <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm">Duration</h3>
            <p class="text-2xl font-bold">{{ number_format($execution->duration_ms) }} ms</p>
            <p class="text-sm text-gray-500 mt-1">
                {{ $execution->started_at?->diffForHumans($execution->finished_at) }}
            </p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm">AI Cost</h3>
            <p class="text-2xl font-bold">₹{{ number_format($execution->ai_cost * 83, 2) }}</p>
            <p class="text-sm text-gray-500 mt-1">{{ $execution->ai_model ?? 'N/A' }} | {{ $execution->total_tokens ?? 0 }} tokens</p>
        </div>
    </div>

    {{-- Execution Trace --}}
    <div class="bg-white rounded-lg shadow mb-8">
        <div class="px-6 py-4 border-b">
            <h2 class="text-lg font-semibold">Execution Trace</h2>
        </div>
        <div class="p-6">
            <div class="space-y-4">
                @foreach($trace ?? [] as $step)
                <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full 
                        {{ $step['status'] === 'success' ? 'bg-green-100' : 'bg-red-100' }} 
                        flex items-center justify-center">
                        {{ $step['status'] === 'success' ? '✓' : '✗' }}
                    </div>
                    <div class="flex-1">
                        <p class="font-medium">{{ $step['node_name'] }}</p>
                        <p class="text-sm text-gray-500">{{ $step['duration_ms'] }}ms</p>
                        @if($step['error'] ?? false)
                            <p class="text-sm text-red-500 mt-1">{{ $step['error'] }}</p>
                        @endif
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>

    {{-- Input/Output --}}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow">
            <div class="px-6 py-4 border-b">
                <h2 class="text-lg font-semibold">Input</h2>
            </div>
            <div class="p-6">
                <pre class="bg-gray-50 rounded p-4 text-sm overflow-auto max-h-96">
                    {{ json_encode($input, JSON_PRETTY_PRINT) }}
                </pre>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow">
            <div class="px-6 py-4 border-b">
                <h2 class="text-lg font-semibold">Output</h2>
            </div>
            <div class="p-6">
                <pre class="bg-gray-50 rounded p-4 text-sm overflow-auto max-h-96">
                    {{ json_encode($output, JSON_PRETTY_PRINT) }}
                </pre>
            </div>
        </div>
    </div>
</div>
@endsection
```

### Step 5: Workflow Templates

```php
<?php
// laravel/app/Services/WorkflowTemplates.php

namespace App\Services;

class WorkflowTemplates
{
    /**
     * Get all available workflow templates.
     */
    public static function all(): array
    {
        return [
            'daily-sales-report' => [
                'name' => 'Daily Sales Report',
                'description' => 'Auto-generate and email daily sales report',
                'category' => 'Reporting',
                'difficulty' => 'Easy',
                'nodes' => 4,
                'configuration' => [
                    'trigger' => 'cron (0 9 * * 1-5)',
                    'steps' => [
                        'Query ApexERP for yesterday sales',
                        'Generate summary with AI',
                        'Format as HTML email',
                        'Send to manager',
                    ],
                ],
            ],
            
            'low-stock-alert' => [
                'name' => 'Low Stock Alert',
                'description' => 'Get notified when inventory is running low',
                'category' => 'Inventory',
                'difficulty' => 'Easy',
                'nodes' => 3,
                'configuration' => [
                    'trigger' => 'cron (0 */2 * * *)',
                    'steps' => [
                        'Check stock levels for all products',
                        'Filter products below threshold',
                        'Send Slack notification',
                    ],
                ],
            ],
            
            'lead-capture' => [
                'name' => 'Lead Capture & Follow-up',
                'description' => 'Capture leads from website and send automatic follow-up emails',
                'category' => 'Sales',
                'difficulty' => 'Medium',
                'nodes' => 6,
                'configuration' => [
                    'trigger' => 'webhook (contact form)',
                    'steps' => [
                        'Receive lead from website form',
                        'AI lead scoring (1-10)',
                        'Create in CRM',
                        'Send personalized welcome email',
                        'Notify sales team on Slack',
                        'Add to email sequence',
                    ],
                ],
            ],
            
            'customer-support-ticket' => [
                'name' => 'AI Customer Support',
                'description' => 'Auto-respond to common support queries',
                'category' => 'Support',
                'difficulty' => 'Medium',
                'nodes' => 5,
                'configuration' => [
                    'trigger' => 'email (support@)',
                    'steps' => [
                        'Receive support email',
                        'AI classifies issue type',
                        'Search knowledge base for answer',
                        'Auto-respond if found',
                        'Create ticket if not found',
                    ],
                ],
            ],
            
            'invoice-processing' => [
                'name' => 'Invoice Processing',
                'description' => 'Extract data from invoice PDFs and create records',
                'category' => 'Finance',
                'difficulty' => 'Hard',
                'nodes' => 7,
                'configuration' => [
                    'trigger' => 'email (invoices@)',
                    'steps' => [
                        'Receive invoice email with attachment',
                        'Download PDF',
                        'AI extract invoice fields',
                        'Validate data',
                        'Create record in accounting',
                        'Send confirmation',
                        'Log to spreadsheet',
                    ],
                ],
            ],
        ];
    }
}
```

---

## Deployment

```yaml
# docker-compose.yml — Full Flow Studio Stack
version: "3.8"

services:
  # Laravel App
  app:
    build:
      context: ./laravel
      dockerfile: Dockerfile
    ports:
      - "80:80"
    environment:
      - APP_ENV=production
      - APP_DEBUG=false
      - DB_HOST=postgres
      - DB_DATABASE=flowstudio
      - DB_USERNAME=user
      - DB_PASSWORD=${DB_PASSWORD}
      - N8N_URL=http://n8n:5678
      - N8N_API_KEY=${N8N_API_KEY}
    depends_on:
      - postgres
      - n8n

  # n8n
  n8n:
    image: n8nio/n8n:latest
    ports:
      - "5678:5678"
    volumes:
      - n8n_data:/home/node/.n8n
      - ./custom-nodes:/home/node/custom-nodes
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=${N8N_ADMIN_PASSWORD}
      - N8N_CUSTOM_EXTENSIONS=/home/node/custom-nodes
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_DATABASE=flowstudio
      - DB_POSTGRESDB_USER=user
      - DB_POSTGRESDB_PASSWORD=${DB_PASSWORD}
      - N8N_ENCRYPTION_KEY=${N8N_ENCRYPTION_KEY}
    depends_on:
      - postgres

  # AI Service
  ai-service:
    build: ./microservices/ai_service
    ports:
      - "8001:8000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - REDIS_URL=redis://redis:6379
    depends_on:
      - redis

  # Workflow Service
  workflow-service:
    build: ./microservices/workflow_service
    ports:
      - "8002:8000"
    environment:
      - DATABASE_URL=postgresql://user:${DB_PASSWORD}@postgres:5432/flowstudio
      - REDIS_URL=redis://redis:6379
      - N8N_URL=http://n8n:5678
    depends_on:
      - postgres
      - redis

  # Monitoring Service
  monitoring-service:
    build: ./microservices/monitoring_service
    ports:
      - "8003:8000"
    environment:
      - DATABASE_URL=postgresql://user:${DB_PASSWORD}@postgres:5432/flowstudio
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis

  # Redis
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  # PostgreSQL
  postgres:
    image: postgres:15-alpine
    ports:
      - "5432:5432"
    environment:
      POSTGRES_DB: flowstudio
      POSTGRES_USER: user
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  n8n_data:
  redis_data:
  postgres_data:
```

### Nginx Reverse Proxy Configuration

```nginx
# nginx/nginx.conf — Production reverse proxy
upstream laravel_backend {
    server app:80;
    keepalive 32;
}

upstream n8n_backend {
    server n8n:5678;
    keepalive 16;
}

upstream ai_service {
    server ai-service:8000;
    keepalive 16;
}

# Rate limit zones
limit_req_zone $binary_remote_addr zone=api_limit:10m rate=30r/s;
limit_req_zone $binary_remote_addr zone=webhook_limit:10m rate=100r/s;

server {
    listen 80;
    server_name flowstudio.apexerp.com;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name flowstudio.apexerp.com;

    ssl_certificate /etc/nginx/ssl/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https: ws:; frame-src 'self' http://n8n:5678" always;

    # Laravel Dashboard
    location / {
        proxy_pass http://laravel_backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # n8n Workflow Builder (embedded)
    location /n8n/ {
        proxy_pass http://n8n_backend/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # WebSocket support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        
        # n8n in iframe needs these
        add_header X-Frame-Options "SAMEORIGIN" always;
        proxy_cookie_path / "/; SameSite=None; Secure";
    }

    # AI Service API
    location /api/ai/ {
        limit_req zone=api_limit burst=10 nodelay;
        proxy_pass http://ai_service/;
        proxy_set_header Host $host;
    }

    # Webhook endpoints (higher rate limit)
    location /webhook/ {
        limit_req zone=webhook_limit burst=50 nodelay;
        proxy_pass http://n8n_backend;
    }

    # Static assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript image/svg+xml;
    gzip_min_length 1000;
    gzip_comp_level 6;
}

# Health check endpoint (internal only)
server {
    listen 8080;
    location /health {
        access_log off;
        return 200 "OK\n";
    }
}
```

### Client Onboarding Guide

Client ko onboard karne ka step-by-step process:

```yaml
Client Onboarding Flow:
────────────────────────

DAY 1 — Discovery Call (30 min)
├── Samjho: Client ka business kaise chalta hai
├── Identify: 3 processes jo automate ho sakte hain
├── Example: "Aap roz subah manually sales ka message bhejte ho?"
└── Promise: "Hum AI se yeh auto kar denge, aapko bas approve karna hoga"

DAY 2 — Demo Setup (2 hours)
├── Deploy Flow Studio (use pre-built Docker Compose)
├── Create: Client ke liye 2 sample workflows
│   ├── Workflow 1: Daily order summary on WhatsApp
│   └── Workflow 2: Low stock alert on SMS
├── Show: Dashboard, execution logs, alerts
└── Let client "play" with builder

DAY 3 — Onboarding & Training (1 hour)
├── Explain: Workflow trigger → action → output
├── Show: How to activate/deactivate workflows
├── Train: How to read execution logs
├── Teach: What to do when workflow fails
└── Handover: Simple documentation in Hinglish

WEEK 1 — Customization (2-3 hours)
├── Build: 3 custom workflows for their needs
├── Integrate: ApexERP, WhatsApp, email, Slack
├── Test: All workflows with real data
├── Fix: Edge cases and error handling
└── Deploy: Production with monitoring

WEEK 2 — Optimization (1 hour)
├── Review: Execution success rate
├── Optimize: AI prompts for better accuracy
├── Adjust: Timing (cron schedules)
├── Add: Alerts for critical failures
└── Report: Monthly savings report (hours saved)
```

### Client Handover Document Template

```markdown
# Flow Studio — Aapka Automation Dashboard

Namaste! Ab aapka business automation ready hai.

## Kaise Use Karein?

1. **Dashboard dekhein:** `https://flowstudio.apexerp.com`
2. **Login karein:** Aapke email + password se
3. **Workflows dekhein:** Dashboard pe saare workflows dikhenge
4. **Status check karein:** Green = kaam kar raha hai, Red = kuch gadbad hai

## Aapke Workflows

| Workflow | Kaam | Kab Chalta Hai |
|----------|------|----------------|
| Daily Sales | Roz ka bech kar ke summary | Subah 9 AM |
| Low Stock Alert | Stock khatam hone pe alert | Har 2 ghante |
| Order WhatsApp | Naya order aane pe message | Turant |
| Invoice Email | Invoice PDF email karo | Jab invoice bane |

## Agar Koi Problem Ho

1. Dashboard pe "Failed" workflows check karein
2. Error message padhein (Hinglish mein hi hai)
3. Raushan ko WhatsApp karein: [Phone Number]
4. Ya email: raushan@apexerp.com

## Monthly Cost

| Plan | Price | Users |
|------|-------|-------|
| Starter | ₹499/month | 3 users |
| Business | ₹1,499/month | 10 users |
| Enterprise | ₹4,999/month | Unlimited |

*First month free!* Koi tension nahi — cancel kabhi bhi kar sakte hain.
```

### Pricing Model for Indian SMEs

```yaml
Pricing Strategy (INR):
────────────────────────

Why this pricing works:
├── Zapier/Make: $30-100/month = ₹2,500-8,500
├── Self-hosted n8n: Free (only server cost)
├── Flow Studio: ₹499-4,999/month
└── Value prop: AI-powered + WhatsApp/SMS + Hinglish support

Tier: FREE
  Price: ₹0
  Target: Testing, personal use
  Features:
    ├── 5 workflows
    ├── 100 AI calls/month
    ├── 1 user
    └── Community support
  Best for: Raushan ko trial dena hai

Tier: STARTER
  Price: ₹499/month (₹5,988/year)
  Target: Micro-business (1-5 employees)
  Features:
    ├── 20 workflows
    ├── 1,000 AI calls/month
    ├── 3 users
    ├── Email support
    └── WhatsApp notifications
  Best for: Chhoti dukaan, local trader

Tier: BUSINESS
  Price: ₹1,499/month (₹17,988/year)
  Target: Small business (5-20 employees)
  Features:
    ├── 100 workflows
    ├── 10,000 AI calls/month
    ├── 10 users
    ├── Priority support
    ├── ApexERP integration
    └── Custom AI prompts
  Best for: Manufacturer, distributor

Tier: ENTERPRISE
  Price: ₹4,999/month (₹59,988/year)
  Target: Growing business (20+ employees)
  Features:
    ├── Unlimited workflows
    ├── Unlimited AI calls
    ├── Unlimited users
    ├── Dedicated support
    ├── Custom n8n nodes
    ├── On-premise deployment
    └── SLA guarantee 99.9%
  Best for: Multi-branch, ERP-heavy client

Revenue projection:
───────────────────
  5 clients @ Starter  = ₹2,495/month
  3 clients @ Business = ₹4,497/month
  1 client @ Enterprise = ₹4,999/month
  ─────────────────────────────────
  Total MRR             = ₹11,991/month (~$143)
  
  Target:
  Month 1: 3 clients
  Month 3: 10 clients
  Month 6: 25 clients
  Month 12: 50 clients → ~₹60,000/month MRR
```

### Step 9: AI Template Library

Pre-built AI templates jo client ko turant value dein:

```php
<?php
// laravel/app/Services/AITemplates.php

namespace App\Services;

class AITemplates
{
    /**
     * AI prompt templates for common business scenarios.
     * Client ko sirf context dena hai, AI prompt ready hai.
     */
    public static function getPromptTemplates(): array
    {
        return [
            'order-confirmation' => [
                'name' => 'Order Confirmation (Hinglish)',
                'language' => 'hi+en',
                'system_prompt' => 'Aap ApexERP ke customer support ho. Order confirm kar rahe ho. Hinglish mein baat karo, friendly tone mein.',
                'user_template' => "Customer: {customer_name}\nOrder: {order_id}\nItems: {items}\nTotal: {amount}\nDelivery: {delivery_date}\n\nEk friendly confirmation message banao.",
            ],
            'payment-reminder' => [
                'name' => 'Payment Reminder',
                'language' => 'hi+en',
                'system_prompt' => 'Aap ek professional collection agent ho. Payment reminder bhej rahe ho. Respectful tone, urgency dikhao but rude mat ho.',
                'user_template' => "Customer: {customer_name}\nInvoice: {invoice_no}\nAmount: {amount_due}\nDue Date: {due_date}\nDays Overdue: {overdue_days}\n\nPayment reminder message banao.",
            ],
            'stock-alert' => [
                'name' => 'Stock Alert Message',
                'language' => 'hi+en',
                'system_prompt' => 'Aap inventory manager ho. Stock alerts generate kar rahe ho. Clear batao konsi cheez khatam ho rahi hai.',
                'user_template' => "Product: {product_name}\nCurrent Stock: {current_stock}\nThreshold: {threshold}\nSupplier: {supplier}\nLast Order: {last_order_date}\n\nAlert message banao.",
            ],
            'lead-followup' => [
                'name' => 'Lead Follow-up Email',
                'language' => 'hi+en',
                'system_prompt' => 'Aap ek sales executive ho. Lead follow-up kar rahe ho. Professional but warm tone.',
                'user_template' => "Lead Name: {lead_name}\nCompany: {company}\nInterest: {product_interest}\nSource: {source}\nDays Since Contact: {days_since}\n\nFollow-up message banao. Agar interested hai toh demo offer karo.",
            ],
            'support-response' => [
                'name' => 'Support Ticket Response',
                'language' => 'hi+en',
                'system_prompt' => 'Aap ApexERP support team ho. Customer ki problem solve kar rahe ho. Step-by-step solution do. Hinglish mein.',
                'user_template' => "Customer: {customer_name}\nIssue: {issue_description}\nPriority: {priority}\nPlan: {customer_plan}\n\nSolution provide karo. Step by step.",
            ],
            'daily-summary' => [
                'name' => 'Daily Business Summary',
                'language' => 'hi+en',
                'system_prompt' => 'Aap business analyst ho. Daily summary generate kar rahe ho. Numbers do, comparison do, recommendations do.',
                'user_template' => "Date: {date}\nTotal Sales: {total_sales}\nOrders: {order_count}\nNew Customers: {new_customers}\nTop Product: {top_product}\nIssues: {issues_count}\n\nSummary banao with key insights.",
            ],
            'whatsapp-order-update' => [
                'name' => 'WhatsApp Order Status',
                'language' => 'hi+en',
                'system_prompt' => 'Aap ek delivery manager ho. WhatsApp pe order update bhej rahe ho. Short, clear, helpful. Emojis use karo.',
                'user_template' => "Customer: {customer_name}\nOrder: {order_id}\nStatus: {order_status}\nExpected: {expected_time}\nNotes: {notes}\n\nWhatsApp message banao max 2 lines.",
            ],
            'invoice-email' => [
                'name' => 'Invoice Email with Table',
                'language' => 'en',
                'system_prompt' => 'You are an accounts executive. Send a professional invoice email with an HTML table of items.',
                'user_template' => "To: {customer_email}\nInvoice: {invoice_no}\nDate: {date}\nItems:\n{items_table}\nTotal: {total}\nGST: {gst}\nGrand Total: {grand_total}\nDue: {due_date}\n\nProfressional invoice email with table.",
            ],
        ];
    }

    /**
     * Render a template with variables.
     */
    public static function render(string $templateKey, array $variables): ?array
    {
        $templates = self::getPromptTemplates();
        $template = $templates[$templatekey] ?? null;
        
        if (!$template) return null;
        
        $rendered = $template['user_template'];
        foreach ($variables as $key => $value) {
            $rendered = str_replace("{{$key}}", $value, $rendered);
        }
        
        return [
            'name' => $template['name'],
            'language' => $template['language'],
            'system_prompt' => $template['system_prompt'],
            'user_prompt' => $rendered,
        ];
    }
}
```

### Step 10: Production Webhook Management

```php
<?php
// laravel/app/Http/Controllers/WebhookController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\N8nService;
use Illuminate\Support\Str;

class WebhookController extends Controller
{
    public function __construct(
        protected N8nService $n8n
    ) {}

    /**
     * Generate a new webhook URL for external app connectivity.
     */
    public function generateWebhook(Request $request)
    {
        $workflowId = $request->workflow_id;
        $webhookId = Str::random(32);  // Unique, unpredictable

        // Store webhook mapping
        // WebhookUrl::create([
        //     'webhook_id' => $webhookId,
        //     'workflow_id' => $workflowId,
        //     'tenant_id' => auth()->user()->tenant_id,
        //     'created_by' => auth()->id(),
        // ]);

        $webhookUrl = config('services.n8n.webhook_base') . '/' . $webhookId;

        return response()->json([
            'webhook_url' => $webhookUrl,
            'webhook_id' => $webhookId,
            'curl_example' => "curl -X POST {$webhookUrl} \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"key\": \"value\"}'",
            'php_example' => "Http::post('{$webhookUrl}', ['key' => 'value']);",
            'javascript_example' => "fetch('{$webhookUrl}', { method: 'POST', body: JSON.stringify({key: 'value'}) })",
        ]);
    }

    /**
     * Test webhook with sample data.
     */
    public function testWebhook(Request $request, string $webhookId)
    {
        $testData = $request->input('test_data', [
            'customer_name' => 'Test Customer',
            'amount' => 1000,
            'product' => 'Test Product',
        ]);

        $result = $this->n8n->triggerWorkflow($webhookId, $testData);
        
        return response()->json([
            'status' => 'triggered',
            'webhook_id' => $webhookId,
            'test_data' => $testData,
            'response' => $result,
        ]);
    }

    /**
     * List all webhooks for user's workflows.
     */
    public function listWebhooks()
    {
        // $webhooks = WebhookUrl::where('tenant_id', auth()->user()->tenant_id)->get();
        
        return view('workflows.webhooks', [
            'webhooks' => [],  // TODO: fetch from DB
            'base_url' => config('services.n8n.webhook_base'),
        ]);
    }

    /**
     * Rotate (regenerate) a webhook URL for security.
     */
    public function rotateWebhook(string $webhookId)
    {
        // Delete old, create new
        // WebhookUrl::where('webhook_id', $webhookId)->delete();
        
        $newWebhookId = Str::random(32);
        // Create new mapping
        
        return response()->json([
            'old_webhook' => $webhookId,
            'new_webhook' => $newWebhookId,
            'message' => 'Webhook rotated. Update your external apps with the new URL.',
        ]);
    }
}
```

## Production Deployment

### Docker Compose — Production Stack

```yaml
# docker-compose.prod.yml

version: '3.8'

networks:
  flowstudio:
    driver: overlay
    attachable: false

volumes:
  mysql_data:
    driver: local
  n8n_data:
    driver: local
  ai_data:
    driver: local
  redis_data:
    driver: local
  elastic_data:
    driver: local

services:
  traefik:
    image: traefik:v3.0
    command:
      - "--providers.docker.swarmMode=true"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.letsencrypt.acme.tlschallenge=true"
      - "--certificatesresolvers.letsencrypt.acme.email=ops@apexerp.com"
      - "--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json"
    ports:
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "letsencrypt_data:/letsencrypt"
    networks:
      - flowstudio
    deploy:
      mode: replicated
      replicas: 2
      placement:
        constraints:
          - node.role == manager

  app:
    image: apexerp/flowstudio:${BUILD_TAG:-latest}
    environment:
      - APP_ENV=production
      - APP_DEBUG=false
      - DB_HOST=mysql
      - DB_DATABASE=flowstudio
      - DB_USERNAME=${DB_USERNAME}
      - DB_PASSWORD=${DB_PASSWORD}
      - N8N_BASE_URL=http://n8n:5678
      - N8N_API_KEY=${N8N_API_KEY}
      - AI_SERVICE_URL=http://ai-service:8000
      - REDIS_HOST=redis
      - REDIS_PASSWORD=${REDIS_PASSWORD}
      - SENTRY_DSN=${SENTRY_DSN}
      - ELASTIC_HOSTS=http://elastic:9200
    deploy:
      mode: replicated
      replicas: 3
      update_config:
        parallelism: 1
        delay: 10s
        order: start-first
      resources:
        limits:
          cpus: '1.0'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
      health_check:
        test: ["CMD", "curl", "-f", "http://localhost:80/health"]
        interval: 30s
        timeout: 10s
        retries: 3
    networks:
      - flowstudio

  n8n:
    image: n8nio/n8n:latest
    environment:
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - N8N_HOST=flowstudio.apexerp.com
      - N8N_PATH=/n8n
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_DATABASE=n8n
      - DB_POSTGRESDB_USER=${POSTGRES_USER}
      - DB_POSTGRESDB_PASSWORD=${POSTGRES_PASSWORD}
      - EXECUTIONS_DATA_PRUNE=true
      - EXECUTIONS_DATA_MAX_AGE=168
      - N8N_METRICS=true
      - N8N_METRICS_INCLUDE_DEFAULT_METRICS=true
    volumes:
      - n8n_data:/home/node/.n8n
    deploy:
      mode: replicated
      replicas: 2
      resources:
        limits:
          cpus: '2.0'
          memory: 1G
    networks:
      - flowstudio

  ai-service:
    image: apexerp/flowstudio-ai:${BUILD_TAG:-latest}
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - REDIS_HOST=redis
      - CACHE_TTL=3600
      - LOG_LEVEL=info
    deploy:
      mode: replicated
      replicas: 2
      resources:
        limits:
          cpus: '2.0'
          memory: 1G
    networks:
      - flowstudio

  mysql:
    image: mysql:8.0
    command: --default-authentication-plugin=mysql_native_password
    environment:
      - MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
      - MYSQL_DATABASE=flowstudio
      - MYSQL_USER=${DB_USERNAME}
      - MYSQL_PASSWORD=${DB_PASSWORD}
    volumes:
      - mysql_data:/var/lib/mysql
      - ./backup/mysql:/backup
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints:
          - node.role == manager
    networks:
      - flowstudio

  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=n8n
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints:
          - node.role == manager
    networks:
      - flowstudio

  redis:
    image: redis:7-alpine
    command: redis-server --requirepass ${REDIS_PASSWORD}
    volumes:
      - redis_data:/data
    deploy:
      mode: replicated
      replicas: 2
    networks:
      - flowstudio

  elasticsearch:
    image: elasticsearch:8.11
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
      - ES_JAVA_OPTS=-Xms512m -Xmx512m
    volumes:
      - elastic_data:/usr/share/elasticsearch/data
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints:
          - node.role == manager
    networks:
      - flowstudio

  logstash:
    image: logstash:8.11
    environment:
      - XPACK_MONITORING_ENABLED=false
    volumes:
      - ./logstash/pipeline:/usr/share/logstash/pipeline:ro
    deploy:
      mode: replicated
      replicas: 1
    networks:
      - flowstudio

  kibana:
    image: kibana:8.11
    environment:
      - ELASTICSEARCH_HOSTS=http://elastic:9200
    deploy:
      mode: replicated
      replicas: 1
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.kibana.rule=Host(`logs.flowstudio.apexerp.com`)"
      - "traefik.http.routers.kibana.entrypoints=websecure"
    networks:
      - flowstudio

  backup:
    image: apexerp/flowstudio-backup:latest
    environment:
      - AWS_ACCESS_KEY_ID=${BACKUP_AWS_KEY}
      - AWS_SECRET_ACCESS_KEY=${BACKUP_AWS_SECRET}
      - AWS_BUCKET=flowstudio-backups
      - MYSQL_HOST=mysql
      - MYSQL_USER=${DB_USERNAME}
      - MYSQL_PASSWORD=${DB_PASSWORD}
      - POSTGRES_HOST=postgres
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    volumes:
      - /tmp/backups:/tmp/backups
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints:
          - node.role == manager
    networks:
      - flowstudio
```

### Zero-Downtime Deployment with Swarm

```bash
#!/bin/bash
# deploy.sh — Zero-downtime deployment script

# 1. Build fresh images
docker build -t apexerp/flowstudio:latest -f laravel/Dockerfile .
docker build -t apexerp/flowstudio-ai:latest -f ai-service/Dockerfile .

# 2. Tag with build number
BUILD_TAG=$(date +%Y%m%d-%H%M%S)
docker tag apexerp/flowstudio:latest apexerp/flowstudio:${BUILD_TAG}
docker tag apexerp/flowstudio-ai:latest apexerp/flowstudio-ai:${BUILD_TAG}

# 3. Push to registry
docker push apexerp/flowstudio:${BUILD_TAG}
docker push apexerp/flowstudio-ai:${BUILD_TAG}

# 4. Deploy with rolling update
docker stack deploy -c docker-compose.prod.yml flowstudio

# 5. Wait for health check
echo "Waiting for deployment to stabilize..."
sleep 30

# 6. Verify
curl -f https://flowstudio.apexerp.com/health && echo "✅ Deployment successful" || echo "❌ Health check failed"

# 7. Rollback on failure
if [ $? -ne 0 ]; then
  echo "⚠️ Rolling back..."
  docker service update --rollback flowstudio_app
  exit 1
fi

# 8. Cleanup old images
docker image prune -f --filter "until=24h"
```

### Database Backup Strategy

```yaml
Backup Strategy (Purvanchal Style):
────────────────────────────────────

Real Bhai ka backup plan, koi tension nahi:

SCHEDULED BACKUPS:
├── Hourly:    MySQL binlog (point-in-time recovery)
├── Daily:     Full MySQL dump + n8n JSON exports
├── Weekly:    Full stack backup to S3
└── Monthly:   Cold backup to external HDD

RETENTION:
├── Hourly:    24 hours
├── Daily:     30 days
├── Weekly:    90 days
└── Monthly:   12 months

AUTOMATED BACKUP SCRIPT:
├── db_backup.sh → mysqldump | gzip → S3
├── n8n_backup.sh → n8n export:workflow --all → S3
└── config_backup.sh → .env + nginx.conf → S3

DISASTER RECOVERY:
├── RPO (Recovery Point Objective): 1 hour max
├── RTO (Recovery Time Objective): 30 minutes
├── Test: Monthly DR drill with full restore
└── Documentation: step-by-step Hindi mein

Raushan ka personal rule:
  "Bhai, backup nahi hai toh business nahi hai.
  Agar server crash ho gaya aur backup nahi hai,
  toh gaali khane ko taiyaar raho."
```

### Monitoring & Alerting Setup

```yaml
Monitoring Stack:
─────────────────

PROMETHEUS METRICS (via node_exporter):
├── CPU usage per container
├── Memory usage per container
├── Disk I/O per volume
├── Network traffic per service
├── n8n execution queue depth
├── AI service response time (p50/p95/p99)
├── Database connection pool usage
├── Redis cache hit ratio
└── SSL certificate expiry

GRAFANA DASHBOARDS:
├── Executive Dashboard — Client-facing: uptime, executions, cost
├── Operations Dashboard — Internal: resource usage, alerts
└── AI Metrics Dashboard — Model costs, latency, error rates

ALERTING RULES (Prometheus):
├── Critical: Service down > 5 minutes → Phone call
├── High: Error rate > 5% → Slack + Email
├── Medium: Disk > 80% → Email
└── Low: SSL expiry < 30 days → Log

ALERT CHANNELS:
├── Urgent: Phone call (Raushan + DevOps)
├── High: Slack (#flowstudio-alerts)
├── Normal: Email (ops@apexerp.com)
└── Info: Dashboard notification only

UPCOMING FEATURE IDEA:
  WhatsApp-based alerting for clients
  "Bhai, aapka workflow fail ho gaya, check karo!"
```

## Testing

### Workflow Service Test

```php
<?php
// tests/Feature/WorkflowTest.php

namespace Tests\Feature;

use Tests\TestCase;
use App\Services\N8nService;
use Mockery;

class WorkflowTest extends TestCase
{
    public function test_workflow_list_page_loads()
    {
        $response = $this->get('/workflows');
        $response->assertStatus(200);
    }

    public function test_workflow_builder_loads()
    {
        $response = $this->get('/workflows/builder');
        $response->assertStatus(200);
    }

    public function test_n8n_service_returns_workflows()
    {
        $mock = Mockery::mock(N8nService::class);
        $mock->shouldReceive('getWorkflows')
             ->once()
             ->andReturn([
                 ['id' => '1', 'name' => 'Test Workflow', 'active' => true],
             ]);

        $this->app->instance(N8nService::class, $mock);
        
        $workflows = app(N8nService::class)->getWorkflows();
        $this->assertCount(1, $workflows);
        $this->assertEquals('Test Workflow', $workflows[0]['name']);
    }

    public function test_workflow_activation()
    {
        $mock = Mockery::mock(N8nService::class);
        $mock->shouldReceive('activateWorkflow')
             ->once()
             ->with('test-id')
             ->andReturn(true);

        $this->app->instance(N8nService::class, $mock);
        
        $result = app(N8nService::class)->activateWorkflow('test-id');
        $this->assertTrue($result);
    }

    public function test_dashboard_stats()
    {
        $response = $this->get('/dashboard');
        $response->assertStatus(200);
        $response->assertViewHas('stats');
    }
}
```

### AI Service Test

```python
# ai-service/tests/test_service.py

import pytest
from fastapi.testclient import TestClient
from app.main import app
from unittest.mock import patch, AsyncMock

client = TestClient(app)


class TestAIEndpoint:
    """AI service endpoints ke tests."""

    def test_chat_completion(self):
        response = client.post("/api/ai/chat", json={
            "messages": [
                {"role": "system", "content": "Aap expert assistant ho."},
                {"role": "user", "content": "Order confirmation message banao."},
            ],
            "model": "gpt-4o-mini",
            "temperature": 0.7,
        })
        assert response.status_code == 200
        data = response.json()
        assert "content" in data
        assert len(data["content"]) > 0

    def test_chat_with_cache(self):
        """Cache hit hone pe response fast aana chahiye."""
        payload = {
            "messages": [
                {"role": "system", "content": "Aap assistant ho."},
                {"role": "user", "content": "Hello"},
            ],
            "model": "gpt-4o-mini",
        }

        # First call — cache miss
        response1 = client.post("/api/ai/chat", json=payload)
        assert response1.status_code == 200

        # Second call — cache hit (faster response expected)
        response2 = client.post("/api/ai/chat", json=payload)
        assert response2.status_code == 200
        assert response2.elapsed.total_seconds() < response1.elapsed.total_seconds()

    def test_chat_with_translation(self):
        """Hinglish input → English prompt."""
        response = client.post("/api/ai/chat", json={
            "messages": [
                {"role": "user", "content": "Mujhe order confirmation chahiye customer ke liye."},
            ],
            "language": "hi",
            "translate_to_english": True,
        })
        assert response.status_code == 200
        data = response.json()
        assert "translated_prompt" in data
        assert "content" in data

    def test_invalid_model_returns_400(self):
        response = client.post("/api/ai/chat", json={
            "messages": [{"role": "user", "content": "Hi"}],
            "model": "non-existent-model",
        })
        assert response.status_code == 400

    def test_empty_messages_returns_400(self):
        response = client.post("/api/ai/chat", json={
            "messages": [],
        })
        assert response.status_code == 400

    def test_health_endpoint(self):
        response = client.get("/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "healthy"
        assert "redis" in data["checks"]
        assert "openai" in data["checks"]

    @pytest.mark.asyncio
    async def test_concurrent_requests(self):
        """Multiple concurrent requests should not block each other."""
        import asyncio
        async with AsyncClient(app=app, base_url="http://test") as ac:
            tasks = [
                ac.post("/api/ai/chat", json={
                    "messages": [{"role": "user", "content": f"Message {i}"}],
                })
                for i in range(5)
            ]
            responses = await asyncio.gather(*tasks)
            assert all(r.status_code == 200 for r in responses)


class TestTemplateRendering:
    """AI template rendering tests."""

    def test_render_order_confirmation(self):
        """Order confirmation template Hindi+English mein render hona chahiye."""
        from app.templates import AITemplates
        
        result = AITemplates.render("order-confirmation", {
            "customer_name": "Raushan Kumar",
            "order_id": "ORD-001",
            "items": "2x T-Shirt, 1x Jeans",
            "amount": "₹1,499",
            "delivery_date": "2025-01-20",
        })
        
        assert result is not None
        assert "Raushan" in result["user_prompt"]
        assert "ORD-001" in result["user_prompt"]
        assert "₹1,499" in result["user_prompt"]

    def test_render_unknown_template(self):
        """Unknown template ke liye null return hona chahiye."""
        from app.templates import AITemplates
        result = AITemplates.render("non-existent", {})
        assert result is None

    def test_all_templates_have_required_fields(self):
        """Har template mein name, language, system_prompt, user_template ho."""
        from app.templates import AITemplates
        templates = AITemplates.get_prompt_templates()
        
        for key, template in templates.items():
            assert "name" in template, f"{key} missing name"
            assert "language" in template, f"{key} missing language"
            assert "system_prompt" in template, f"{key} missing system_prompt"
            assert "user_template" in template, f"{key} missing user_template"
            assert len(template["system_prompt"]) > 0, f"{key} empty system_prompt"
            assert len(template["user_template"]) > 0, f"{key} empty user_template"


class TestTranslationService:
    """Hinglish <-> English translation tests."""

    def test_hinglish_to_english(self):
        """Hinglish input ko English mein translate karna."""
        from app.translation import TranslationService
        
        result = TranslationService.translate(
            text="Mujhe ek order confirmation message banao customer ke liye.",
            source_lang="hi",
            target_lang="en",
        )
        assert result is not None
        assert "order" in result.lower()
        assert "confirmation" in result.lower()

    def test_english_to_hinglish(self):
        """English ko Hinglish mein convert karna."""
        from app.translation import TranslationService
        
        result = TranslationService.translate(
            text="Please create an invoice for the customer.",
            source_lang="en",
            target_lang="hi",
        )
        assert result is not None
        assert any(word in result for word in ["invoice", "karo", "customer", "invoice"])
```

### Webhook & Integration Test

```php
<?php
// tests/Feature/WebhookTest.php

namespace Tests\Feature;

use Tests\TestCase;
use App\Services\N8nService;
use Illuminate\Support\Str;
use Mockery;

class WebhookTest extends TestCase
{
    public function test_webhook_generation_returns_url()
    {
        $response = $this->postJson('/api/webhooks/generate', [
            'workflow_id' => 'test-workflow-id',
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'webhook_url',
            'webhook_id',
            'curl_example',
        ]);
    }

    public function test_webhook_url_is_unique()
    {
        $response1 = $this->postJson('/api/webhooks/generate', [
            'workflow_id' => 'wf-1',
        ]);
        $response2 = $this->postJson('/api/webhooks/generate', [
            'workflow_id' => 'wf-1',
        ]);

        $this->assertNotEquals(
            $response1->json('webhook_id'),
            $response2->json('webhook_id')
        );
    }

    public function test_webhook_rotation_returns_new_id()
    {
        // First create
        $create = $this->postJson('/api/webhooks/generate', [
            'workflow_id' => 'wf-rotate-test',
        ]);
        $oldId = $create->json('webhook_id');

        // Then rotate
        $rotate = $this->postJson("/api/webhooks/{$oldId}/rotate");
        $rotate->assertStatus(200);
        $this->assertNotEquals($oldId, $rotate->json('new_webhook'));
    }

    public function test_test_webhook_returns_execution_result()
    {
        $mock = Mockery::mock(N8nService::class);
        $mock->shouldReceive('triggerWorkflow')
             ->once()
             ->andReturn(['execution_id' => 'exec-123', 'status' => 'running']);

        $this->app->instance(N8nService::class, $mock);

        $response = $this->postJson('/api/webhooks/test-wh-123/test', [
            'test_data' => ['customer' => 'Test'],
        ]);

        $response->assertStatus(200);
        $response->assertJson([
            'status' => 'triggered',
        ]);
    }

    public function test_webhook_list_returns_view()
    {
        $response = $this->get('/webhooks');
        $response->assertStatus(200);
    }

    public function test_unauthenticated_webhook_access_redirects()
    {
        $response = $this->get('/api/webhooks/generate');
        $response->assertStatus(302);  // Redirect to login
    }
}
```

### Tenant Isolation Test

```php
<?php
// tests/Feature/TenantIsolationTest.php

namespace Tests\Feature;

use Tests\TestCase;

class TenantIsolationTest extends TestCase
{
    /**
     * Yeh test pakka karta hai ki ek tenant ka data
     * doosre tenant ko nahi dikhe.
     */
    public function test_tenant_a_cannot_see_tenant_b_workflows()
    {
        // Tenant A login
        $tenantA = $this->actingAsTenant('tenant-a');
        
        // Tenant B ki workflow detail access kare
        $response = $this->getJson('/api/workflows/tenant-b-workflow-id');
        
        // Access denied hona chahiye
        $response->assertStatus(403);
    }

    public function test_tenant_can_only_see_own_workflows()
    {
        $tenantA = $this->actingAsTenant('tenant-a');
        
        $response = $this->getJson('/api/workflows');
        $workflows = $response->json('data');
        
        // Har workflow ka tenant_id tenant-a hona chahiye
        foreach ($workflows as $workflow) {
            $this->assertEquals('tenant-a', $workflow['tenant_id']);
        }
    }

    public function test_tenant_cannot_activate_other_tenant_workflows()
    {
        $tenantA = $this->actingAsTenant('tenant-a');
        
        $response = $this->postJson('/api/workflows/tenant-b-workflow-id/activate');
        $response->assertStatus(403);
    }

    public function test_tenant_execution_logs_are_isolated()
    {
        $tenantA = $this->actingAsTenant('tenant-a');
        
        $response = $this->getJson('/api/executions');
        $executions = $response->json('data');
        
        foreach ($executions as $execution) {
            $this->assertEquals('tenant-a', $execution['tenant_id']);
        }
    }
}
```

### Load Test with k6

```javascript
// k6/load-test.js
// Install: choco install k6   (ya brew install k6)
// Run: k6 run k6/load-test.js

import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Rate, Trend } from 'k6/metrics';

const errorRate = new Rate('errors');
const aiLatency = new Trend('ai_latency');
const workflowLatency = new Trend('workflow_latency');

export const options = {
  stages: [
    { duration: '1m', target: 10 },  // Ramp up to 10 VUs
    { duration: '3m', target: 50 },  // Ramp to 50 VUs
    { duration: '2m', target: 100 }, // Spike to 100 VUs
    { duration: '1m', target: 0 },   // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% requests under 2s
    errors: ['rate<0.05'],              // Less than 5% errors
  },
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:8000';

export default function () {
  group('Dashboard Load', () => {
    const res = http.get(`${BASE_URL}/dashboard`);
    check(res, {
      'dashboard status is 200': (r) => r.status === 200,
    });
    errorRate.add(res.status !== 200);
    sleep(1);
  });

  group('AI Chat API', () => {
    const payload = JSON.stringify({
      messages: [
        { role: 'system', content: 'Aap expert ho.' },
        { role: 'user', content: 'Order confirmation banao ₹1500 ke liye.' },
      ],
      model: 'gpt-4o-mini',
    });

    const res = http.post(`${BASE_URL}/api/ai/chat`, payload, {
      headers: { 'Content-Type': 'application/json' },
    });

    aiLatency.add(res.timings.duration);
    check(res, {
      'ai response is 200': (r) => r.status === 200,
      'ai has content': (r) => r.json('content') !== '',
    });
    errorRate.add(res.status !== 200);
    sleep(2);
  });

  group('Workflow List', () => {
    const res = http.get(`${BASE_URL}/api/workflows`);
    workflowLatency.add(res.timings.duration);
    check(res, {
      'workflows status is 200': (r) => r.status === 200,
    });
    errorRate.add(res.status !== 200);
    sleep(1);
  });
}
```

---

## Success Checklist

### Development
- [ ] Laravel app running locally (`php artisan serve`)
- [ ] n8n Docker setup working with custom nodes
- [ ] AI service responding on `/api/ai/chat`
- [ ] Redis cache working (miss + hit)
- [ ] MySQL migrations running clean
- [ ] Queue workers processing jobs
- [ ] Horizon monitoring dashboard

### Features
- [ ] User registration + login (email/password)
- [ ] Workflow templates gallery (5+ templates)
- [ ] Custom n8n node (ApexERP DB) installed
- [ ] Embedded n8n workflow builder (iframe)
- [ ] Dashboard with execution statistics
- [ ] Real-time stats API (`/api/stats`)
- [ ] Error alerts (Slack/email/WhatsApp)
- [ ] Multi-tenant isolation (data scoping)
- [ ] Rate limiting on API endpoints
- [ ] Usage tracking + billing meters

### Testing
- [ ] PHPUnit tests passing (`php artisan test`)
- [ ] AI service tests passing (`pytest`)
- [ ] Webhook generation + rotation tested
- [ ] k6 load test under threshold (p95 < 2s)
- [ ] Tenant isolation verified (A can't see B)
- [ ] Error scenarios covered (invalid input, timeouts)

### Deployment
- [ ] Docker Compose full stack running
- [ ] Traefik SSL certificates issued (Let's Encrypt)
- [ ] Nginx reverse proxy configured
- [ ] Production environment variables set
- [ ] Zero-downtime deployment script ready
- [ ] Database backups automated (hourly/daily/weekly)
- [ ] Prometheus metrics exporting
- [ ] Grafana dashboards deployed
- [ ] Monitoring alerts configured
- [ ] DR plan documented + tested
- [ ] DNS configured (`flowstudio.apexerp.com`)

### Client Readiness
- [ ] Client onboarding guide prepared
- [ ] Hinglish handover document ready
- [ ] Pricing plan decided (Starter/Business/Enterprise)
- [ ] WhatsApp/SMS notification channel active
- [ ] First client demo completed
- [ ] Monthly savings report template ready
- [ ] Support contact established (Raushan ka WhatsApp)

### Post-Launch
- [ ] First week: monitor + fix edge cases
- [ ] First month: client feedback collection
- [ ] Month 2: AI template customization based on feedback
- [ ] Month 3: performance optimization
- [ ] Month 6: scale review (horizontal vs vertical)
