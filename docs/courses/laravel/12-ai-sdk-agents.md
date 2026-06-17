# Chapter 12: Laravel AI SDK â€” Agents, Prompting & Structured Output

---
## Learning Objectives

- Understand the architecture and provider-agnostic design of the `laravel/ai` package
- Install, configure, and register AI providers with environment-based credentials
- Create custom agent classes implementing the Agent contract with the Promptable trait
- Manage conversational context using the RemembersConversations trait and database persistence
- Define structured output schemas using the fluent JsonSchema builder with nested and constrained types
- Implement streaming responses, broadcasting, and queued agent execution
---
## Theory

![AI SDK Agents](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/laravel/12-ai-sdk-agents.png)


### 12.1 The AI SDK Architecture

Laravel 13 introduces the `laravel/ai` package, a unified, provider-agnostic interface for interacting with large language models and AI services. The package abstracts away provider-specific SDKs behind a single, expressive API that supports text generation, tool-calling agents, embeddings, audio transcription, image generation, vector-store integration, and file uploads. With more than fourteen supported providers, the SDK allows you to swap between Anthropic Claude, OpenAI GPT, Google Gemini, Amazon Bedrock, Azure OpenAI, Groq, xAI, DeepSeek, Mistral, Ollama, OpenRouter, Cohere, Jina, VoyageAI, and ElevenLabs without changing application code.

The central design philosophy is provider independence. Every AI operation is expressed through a Laravel-native fluent interface. The underlying driver is resolved at runtime from the configuration file, which maps each feature category to a specific provider and model. You can develop against Ollama locally, deploy against Anthropic in staging, and run against OpenAI in production, changing only environment variables.

The package ships with two migration files that create the `agent_conversations` and `agent_conversation_messages` database tables, enabling stateful multi-turn conversations without managing session storage manually.

### 12.2 Installation and Configuration

Installation is a single Composer command followed by publishing configuration and running migrations:

```
composer require laravel/ai
php artisan vendor:publish --provider="Laravel\Ai\AiServiceProvider"
php artisan migrate
```

The published configuration file at `config/ai.php` defines the default provider and model for each feature category and stores provider credentials loaded from `.env`:

```php
<?php

return [
    'defaults' => [
        'text' => [
            'provider' => env('AI_TEXT_PROVIDER', 'anthropic'),
            'model' => env('AI_TEXT_MODEL', 'claude-sonnet-4-20250514'),
        ],
        'embeddings' => [
            'provider' => env('AI_EMBEDDINGS_PROVIDER', 'openai'),
            'model' => env('AI_EMBEDDINGS_MODEL', 'text-embedding-3-small'),
        ],
        'image' => [
            'provider' => env('AI_IMAGE_PROVIDER', 'openai'),
            'model' => env('AI_IMAGE_MODEL', 'dall-e-3'),
        ],
        'audio' => [
            'provider' => env('AI_AUDIO_PROVIDER', 'openai'),
            'model' => env('AI_AUDIO_MODEL', 'tts-1'),
        ],
        'transcription' => [
            'provider' => env('AI_TRANSCRIPTION_PROVIDER', 'openai'),
            'model' => env('AI_TRANSCRIPTION_MODEL', 'whisper-1'),
        ],
    ],
    'providers' => [
        'anthropic' => [
            'key' => env('ANTHROPIC_API_KEY'),
            'base_url' => env('ANTHROPIC_BASE_URL'),
        ],
        'openai' => [
            'key' => env('OPENAI_API_KEY'),
            'organization' => env('OPENAI_ORGANIZATION'),
            'base_url' => env('OPENAI_BASE_URL'),
        ],
        'gemini' => ['key' => env('GEMINI_API_KEY')],
        'azure' => [
            'key' => env('AZURE_OPENAI_KEY'),
            'endpoint' => env('AZURE_OPENAI_ENDPOINT'),
            'deployment' => env('AZURE_OPENAI_DEPLOYMENT'),
            'api_version' => env('AZURE_OPENAI_API_VERSION', '2024-10-21'),
        ],
        'bedrock' => [
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
            'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
        ],
        'groq' => ['key' => env('GROQ_API_KEY')],
        'xai' => ['key' => env('XAI_API_KEY')],
        'deepseek' => ['key' => env('DEEPSEEK_API_KEY')],
        'mistral' => ['key' => env('MISTRAL_API_KEY')],
        'ollama' => ['base_url' => env('OLLAMA_BASE_URL', 'http://localhost:11434')],
        'openrouter' => [
            'key' => env('OPENROUTER_API_KEY'),
            'base_url' => env('OPENROUTER_BASE_URL', 'https://openrouter.ai/api/v1'),
        ],
        'cohere' => ['key' => env('COHERE_API_KEY')],
        'jina' => ['key' => env('JINA_API_KEY')],
        'voyageai' => ['key' => env('VOYAGEAI_API_KEY')],
        'elevenlabs' => ['key' => env('ELEVENLABS_API_KEY')],
    ],
];
```

The `base_url` option routes traffic through proxies or self-hosted model platforms. The `Lab` enum provides type-safe provider references:

```php
<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use Laravel\Ai\Image;
use Laravel\Ai\Lab;

class GenerateConceptArt extends Command
{
    protected $signature = 'art:generate {prompt}';
    protected $description = 'Generate concept art using a specific AI provider';

    public function handle(): int
    {
        $prompt = $this->argument('prompt');

        $result = Image::of($prompt)
            ->using(Lab::Gemini)
            ->generate();

        $this->info('Image generated successfully.');
        $this->info('Raw content length: ' . strlen($result));

        return Command::SUCCESS;
    }
}
### 12.3 Provider Support Matrix

| Feature | Supported Providers |
|---|---|
| Text Generation | OpenAI, Anthropic, Gemini, Azure, Bedrock, Groq, xAI, DeepSeek, Mistral, Ollama, OpenRouter |
| Image Generation | OpenAI, Gemini, xAI, Azure, Bedrock, OpenRouter |
| Text-to-Speech | OpenAI, ElevenLabs, Gemini |
| Speech-to-Text | OpenAI, ElevenLabs, Mistral, Gemini |
| Embeddings | OpenAI, Gemini, Azure, Bedrock, Cohere, Mistral, Jina, VoyageAI, Ollama, OpenRouter |
| Reranking | Cohere, Jina, VoyageAI |
| File Processing | OpenAI, Anthropic, Gemini |

### 12.4 Creating Agents

Agents encapsulate a system prompt, a default model configuration, and optional tool definitions. Generate a new agent using `php artisan make:agent SalesCoach`, which creates a class in `app/Ai/Agents/SalesCoach.php`. Every agent must implement the `Agent` interface, which requires an `instructions()` method. The `Promptable` trait provides the default implementation for the `make()` static factory method and convenience methods for prompting:

```php
<?php

namespace App\Ai\Agents;

use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;
use Stringable;

class SalesCoach implements Agent
{
    use Promptable;

    public function instructions(): Stringable|string
    {
        return 'You are an expert sales coach with 20 years of experience training B2B SaaS sales teams. Analyze call transcripts and provide specific, actionable feedback on discovery questions, objection handling, closing techniques, and talk-to-listen ratio. Be direct and constructive.';
    }
}
```

### 12.5 Prompting Agents

Interact with an agent through the static `make()` method, which returns a configured `PendingAgentRequest`. Call `prompt()` to send a user message and receive a response:

```php
<?php

namespace App\Http\Controllers;

use App\Ai\Agents\SalesCoach;
use Illuminate\Http\Request;

class CoachingController extends Controller
{
    public function analyzeTranscript(Request $request): array
    {
        $request->validate([
            'transcript' => 'required|string|min:50|max:50000',
        ]);

        $response = SalesCoach::make()
            ->prompt('Analyze this sales call transcript and provide coaching feedback: ' . $request->input('transcript'));

        return [
            'feedback' => $response->text(),
            'input_tokens' => $response->inputTokens(),
            'output_tokens' => $response->outputTokens(),
        ];
    }
}
```

The `PendingAgentRequest` is configurable â€” override the provider, model, max tokens, and timeout:

```php
<?php

namespace App\Http\Controllers;

use App\Ai\Agents\SalesCoach;
use Illuminate\Http\Request;
use Laravel\Ai\Lab;

class CoachingController extends Controller
{
    public function quickAnalysis(Request $request): array
    {
        $request->validate(['transcript' => 'required|string']);

        $response = SalesCoach::make()
            ->using(Lab::Groq)
            ->model('llama-3.3-70b-versatile')
            ->maxTokens(512)
            ->timeout(30)
            ->prompt('Provide a brief 3-bullet analysis: ' . $request->input('transcript'));

        return ['feedback' => $response->text()];
    }
}
```

### 12.6 Conversation Context

For multi-turn interactions, use the `Conversational` interface and the `RemembersConversations` trait. The SDK persists every message exchange to the database and groups messages into conversations:

```php
<?php

namespace App\Ai\Agents;

use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Conversational;
use Laravel\Ai\Promptable;
use Laravel\Ai\RemembersConversations;
use Stringable;

class SupportAgent implements Agent, Conversational
{
    use Promptable, RemembersConversations;

    public function instructions(): Stringable|string
    {
        return 'You are a helpful customer support agent for an e-commerce platform. Help customers with order status, returns, refunds, and product questions. Always ask for their order number first. Be empathetic and concise.';
    }
}
```

To start a new conversation, call `forUser()`:

```php
<?php

namespace App\Http\Controllers;

use App\Ai\Agents\SupportAgent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SupportController extends Controller
{
    public function chat(Request $request): array
    {
        $request->validate(['message' => 'required|string']);

        $response = SupportAgent::make()
            ->forUser(Auth::user())
            ->prompt($request->input('message'));

        return [
            'reply' => $response->text(),
            'conversation_id' => $response->conversationId(),
        ];
    }
}
```

To continue an existing conversation, pass the conversation ID via `continue()`:

```php
<?php

namespace App\Http\Controllers;

use App\Ai\Agents\SupportAgent;
use Illuminate\Http\Request;

class SupportController extends Controller
{
    public function continueChat(Request $request): array
    {
        $request->validate([
            'message' => 'required|string',
            'conversation_id' => 'required|integer|exists:agent_conversations,id',
        ]);

        $response = SupportAgent::make()
            ->continue($request->input('conversation_id'))
            ->prompt($request->input('message'));

        return [
            'reply' => $response->text(),
            'conversation_id' => $response->conversationId(),
        ];
    }
}
```

Add the `HasConversations` trait to your User model to query all conversations belonging to a user:

```php
<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Ai\HasConversations;

class User extends Authenticatable
{
    use HasConversations;
}
```

### 12.7 Structured Output

The `HasStructuredOutput` interface enables agents to return typed, validated JSON responses. Use the `schema()` method with the fluent `JsonSchema` builder:

```php
<?php

namespace App\Ai\Agents;

use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\HasStructuredOutput;
use Laravel\Ai\Promptable;
use Stringable;

class InvoiceExtractor implements Agent, HasStructuredOutput
{
    use Promptable;

    public function instructions(): Stringable|string
    {
        return 'Extract structured invoice data from the provided text. Extract all fields accurately. If a field is not present, omit it from the output.';
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'invoice_number' => $schema->string()->required(),
            'vendor_name' => $schema->string()->required(),
            'vendor_address' => $schema->string()->required(),
            'issue_date' => $schema->string()->pattern('^\d{4}-\d{2}-\d{2}$')->required(),
            'due_date' => $schema->string()->pattern('^\d{4}-\d{2}-\d{2}$')->required(),
            'currency' => $schema->string()->enum(['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY'])->required(),
            'subtotal' => $schema->float()->min(0)->required(),
            'tax_total' => $schema->float()->min(0),
            'total' => $schema->float()->min(0)->required(),
            'line_items' => $schema->array()->items(
                $schema->object(function (JsonSchema $s): array {
                    return [
                        'description' => $s->string()->required(),
                        'quantity' => $s->integer()->min(1)->required(),
                        'unit_price' => $s->float()->min(0)->required(),
                        'total_price' => $s->float()->min(0)->required(),
                    ];
                })
            ),
        ];
    }
}
```

When prompted, the response implements `StructuredAgentResponse` and behaves as an array:

```php
<?php

namespace App\Http\Controllers;

use App\Ai\Agents\InvoiceExtractor;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function extract(Request $request): array
    {
        $request->validate(['text' => 'required|string']);

        $response = InvoiceExtractor::make()->prompt($request->input('text'));

        $data = $response->structured();

        return [
            'invoice_number' => $data['invoice_number'],
            'vendor' => $data['vendor_name'],
            'total' => $data['total'],
            'line_items_count' => count($data['line_items']),
            'first_item' => $data['line_items'][0]['description'],
        ];
    }
}
```

### 12.8 Streaming Responses

The `stream()` method returns a `StreamableAgentResponse`, essential for chat interfaces where you display tokens as they arrive:

```php
<?php

namespace App\Http\Controllers;

use App\Ai\Agents\SalesCoach;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;

class StreamingController extends Controller
{
    public function stream(Request $request): StreamedResponse
    {
        $request->validate(['transcript' => 'required|string']);

        $response = new StreamedResponse(function () use ($request): void {
            $stream = SalesCoach::make()->stream(
                'Provide a line-by-line critique: ' . $request->input('transcript')
            );

            foreach ($stream as $chunk) {
                if ($chunk->text() !== '') {
                    echo 'data: ' . json_encode(['token' => $chunk->text()]) . "\n\n";
                    ob_flush();
                    flush();
                }
            }

            echo 'data: [DONE]' . "\n\n";
            ob_flush();
            flush();
        });

        $response->headers->set('Content-Type', 'text/event-stream');
        $response->headers->set('Cache-Control', 'no-cache');
        $response->headers->set('Connection', 'keep-alive');
        $response->headers->set('X-Accel-Buffering', 'no');

        return $response;
    }
}
```

The `then()` callback executes once the stream completes:

```php
<?php

namespace App\Http\Controllers;

use App\Ai\Agents\SalesCoach;
use App\Models\AnalysisLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\StreamedResponse;

class StreamingController extends Controller
{
    public function streamAndLog(Request $request): StreamedResponse
    {
        $request->validate(['transcript' => 'required|string']);
        $userId = Auth::id();

        $response = new StreamedResponse(function () use ($request, $userId): void {
            $fullText = '';

            $stream = SalesCoach::make()
                ->stream('Analyze this transcript: ' . $request->input('transcript'))
                ->then(function (string $completeText) use ($userId): void {
                    AnalysisLog::create([
                        'user_id' => $userId,
                        'type' => 'sales_coaching',
                        'result' => $completeText,
                    ]);
                });

            foreach ($stream as $chunk) {
                if ($chunk->text() !== '') {
                    $fullText .= $chunk->text();
                    echo 'data: ' . json_encode(['token' => $chunk->text()]) . "\n\n";
                    ob_flush();
                    flush();
                }
            }

            echo 'data: [DONE]' . "\n\n";
            ob_flush();
            flush();
        });

        $response->headers->set('Content-Type', 'text/event-stream');
        $response->headers->set('Cache-Control', 'no-cache');

        return $response;
    }
}
```

For Vercel AI SDK protocol compatibility, call `usingVercelDataProtocol()`:

```php
<?php

namespace App\Http\Controllers;

use App\Ai\Agents\SupportAgent;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;

class VercelChatController extends Controller
{
    public function chat(Request $request): StreamedResponse
    {
        $request->validate(['message' => 'required|string']);

        $response = new StreamedResponse(function () use ($request): void {
            $stream = SupportAgent::make()
                ->usingVercelDataProtocol()
                ->stream($request->input('message'));

            foreach ($stream as $chunk) {
                echo $chunk->text();
                ob_flush();
                flush();
            }
        });

        $response->headers->set('Content-Type', 'text/event-stream');
        $response->headers->set('Cache-Control', 'no-cache');

        return $response;
    }
}
```

### 12.9 Broadcasting

The `broadcast()` method on a stream dispatches events as each chunk arrives:

```php
<?php

namespace App\Http\Controllers;

use App\Ai\Agents\SupportAgent;
use Illuminate\Http\Request;

class BroadcastChatController extends Controller
{
    public function chat(Request $request): void
    {
        $request->validate(['message' => 'required|string']);

        SupportAgent::make()
            ->broadcast()
            ->onChannel('support.' . $request->user()->id)
            ->asEvent('AiMessage')
            ->stream($request->input('message'));
    }
}
```

For high-traffic applications, use `broadcastOnQueue()`:

```php
<?php

namespace App\Http\Controllers;

use App\Ai\Agents\SupportAgent;
use Illuminate\Http\Request;

class BroadcastChatController extends Controller
{
    public function chat(Request $request): void
    {
        $request->validate(['message' => 'required|string']);

        SupportAgent::make()
            ->broadcastOnQueue()
            ->onChannel('support.' . $request->user()->id)
            ->stream($request->input('message'));
    }
}
```

### 12.10 Queueing Agent Work

The `queue()` method dispatches agent prompts to the queue for async processing:

```php
<?php

namespace App\Http\Controllers;

use App\Ai\Agents\SalesCoach;
use App\Models\AnalysisJob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class QueueController extends Controller
{
    public function analyzeTranscript(Request $request): array
    {
        $request->validate(['transcript' => 'required|string']);

        $job = AnalysisJob::create([
            'user_id' => Auth::id(),
            'status' => 'pending',
        ]);

        SalesCoach::make()
            ->queue('Analyze this transcript: ' . $request->input('transcript'))
            ->then(function (string $response) use ($job): void {
                $job->update([
                    'status' => 'completed',
                    'result' => $response,
                    'completed_at' => now(),
                ]);
            })
            ->catch(function (\Throwable $e) use ($job): void {
                $job->update([
                    'status' => 'failed',
                    'error' => $e->getMessage(),
                    'completed_at' => now(),
                ]);
            });

        return ['job_id' => $job->id, 'status' => 'pending'];
    }
}
```

### 12.11 Agent Attachments

The `Files\Document` and `Files\Image` classes provide file context to agents:

```php
<?php

namespace App\Http\Controllers;

use App\Ai\Agents\SalesCoach;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Laravel\Ai\Files\Document;

class AttachmentController extends Controller
{
    public function analyzeWithTranscript(Request $request): array
    {
        $request->validate([
            'transcript_id' => 'required|integer|exists:transcripts,id',
        ]);

        $transcript = \App\Models\Transcript::findOrFail($request->input('transcript_id'));

        $response = SalesCoach::make()
            ->withAttachment(
                Document::fromStorage(Storage::disk('s3'), $transcript->file_path)
            )
            ->prompt('Analyze this sales call transcript and provide coaching feedback.');

        return ['feedback' => $response->text()];
    }
}
```

For image attachments, use `Files\Image`:

```php
<?php

namespace App\Http\Controllers;

use App\Ai\Agents\SalesCoach;
use Illuminate\Http\Request;
use Laravel\Ai\Files\Image;

class ImageAnalysisController extends Controller
{
    public function analyzeScreenshot(Request $request): array
    {
        $request->validate(['screenshot' => 'required|image|max:10240']);

        $response = SalesCoach::make()
            ->withAttachment(
                Image::upload($request->file('screenshot'))
            )
            ->prompt('Analyze this CRM screenshot and suggest improvements.');

        return ['feedback' => $response->text()];
    }
}
```

### 12.12 Anonymous Agents

The `Agent` facade creates anonymous agents inline without a dedicated class:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Ai\Facades\Agent;
use Laravel\Ai\Lab;

class QuickController extends Controller
{
    public function summarize(Request $request): array
    {
        $request->validate(['text' => 'required|string']);

        $response = Agent::make()
            ->instructions('You are a concise summarizer. Summarize any text in exactly three sentences.')
            ->using(Lab::Anthropic)
            ->model('claude-sonnet-4-20250514')
            ->prompt($request->input('text'));

        return ['summary' => $response->text()];
    }
}
```

---
## Summary

- The `laravel/ai` package provides a unified, provider-agnostic API for text generation, tool calling, embeddings, audio, images, and vector stores across 14+ providers
- Installation requires `composer require laravel/ai`, publishing configuration, and running `php artisan migrate`
- Agents implement the `Agent` interface with an `instructions()` method; the `Promptable` trait provides `make()` and `prompt()`
- Conversational agents use `RemembersConversations`, persisting messages to the database with `forUser()` and `continue()` support
- `HasStructuredOutput` enables typed JSON responses using the fluent `JsonSchema` builder with nested objects, arrays, enums, and constraints
- Streaming via `stream()` returns `StreamableAgentResponse` with `then()` callbacks and Vercel AI SDK protocol support
- Broadcasting dispatches over WebSockets; queuing with `queue()` enables async agent execution
- `Files\Document` and `Files\Image` provide file context; anonymous agents via the `Agent` facade enable inline creation
---
## Exercises

### Review Questions

1. What is the purpose of the `Promptable` trait and which interface requires its use? Describe the methods it provides.

2. Explain how structured output enforces response shape. What happens when the language model produces output that violates the defined schema?

3. Compare the `stream()` method with the standard `prompt()` method. In what scenarios would you choose streaming over a blocking call?

4. How does the `RemembersConversations` trait persist conversational state? Describe the role of `forUser()` and `continue()`.

5. What is the difference between a dedicated agent class and an anonymous agent created via the `Agent` facade?

### Application Problems

1. Create a `CodeReviewer` agent class that analyzes submitted PHP code and returns structured output containing an array of `issues` â€” each with a `severity` enum (error, warning, suggestion), a `line` number, and a `message`. Use `HasStructuredOutput` with a nested object inside an array.

2. Implement a controller endpoint that accepts a conversation ID and a message, continues an existing conversation with a support agent, streams the response using the Vercel AI SDK protocol, and broadcasts each chunk to a Pusher channel named `chat.{conversation_id}`.

3. Build an Artisan command that reads a text file from the local filesystem, passes it as a `Document` attachment to a `SummaryAgent`, and writes the response to a new file in the storage directory.

### Challenge Problem

Design a multi-agent pipeline with three agents: a `ClassifierAgent` (structured output: category and confidence), a `SpecialistAgent` (detailed analysis per category), and a `ReviewerAgent` (quality check). Create a `PipelineController` that queues the classifier, passes its result to the specialist, then passes the specialist output to the reviewer, all using queued calls with `then()` and `catch()` callbacks. Return a pipeline ID for frontend polling.