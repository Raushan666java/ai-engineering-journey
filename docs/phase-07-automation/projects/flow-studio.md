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

---

## Testing

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

---

## Success Checklist

- [ ] n8n Docker setup working with custom nodes
- [ ] Laravel dashboard listing workflows
- [ ] AI service running (OpenAI integration)
- [ ] Workflow templates available (5+ templates)
- [ ] Custom n8n node (ApexERP DB) working
- [ ] User authentication (register/login)
- [ ] Embedded n8n workflow builder
- [ ] Execution monitoring with stats
- [ ] Error alerts (Slack/email)
- [ ] Docker Compose full stack deployment
- [ ] Test suite passing
- [ ] Production server deployed
- [ ] Client demo completed
