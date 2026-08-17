---
id: 14-ai-sdk-media
slug: /laravel/14-ai-sdk-media
title: "Chapter 14: Laravel AI SDK → Images, Audio, Transcriptions & Embeddings"
sidebar_label: "Chapter 14: Laravel AI SDK → Images, Audio, Transcriptions & Embeddings"
sidebar_position: 14
---
# Chapter 14: Laravel AI SDK → Images, Audio, Transcriptions & Embeddings
> **Previous:** [Laravel AI SDK -- Tools, MCP Tools & Provider Tools](./13-ai-sdk-tools) | **Next:** [Laravel MCP -- Model Context Protocol](./15-mcp)

---
## Learning Objectives

- Generate images from text prompts using the `Image` class with multi-provider support
- Produce text-to-speech audio and transcribe spoken audio to text using the `Audio` and `Transcript` classes
- Create text embeddings with the `Embeddings` class and use them for vector similarity operations
- Implement caching strategies for embeddings to reduce API costs and latency
- Apply reranking to improve search result relevance using supported providers
- Test and mock AI SDK operations using the built-in fake implementations
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| Image Generation | Text-to-image, provider selection, options |
| Text-to-Speech | Audio synthesis, voice selection |
| Speech-to-Text | Transcription, timestamps |
| Embeddings | Str helper, Embeddings class, batch processing |
| Embedding Caching | Cache keys, observer invalidation |
| Reranking | Cross-encoder rescoring |
| Vector Stores | File management, provider-side storage |
| Failover & Retry | Provider chaining, exponential backoff |
| Testing | Fakes for all AI SDK operations |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Image Generation] --> B[Text-to-Speech]
    B --> C[Speech-to-Text]
    C --> D[Embeddings]
    D --> E[Embedding Caching]
    E --> F[Reranking]
    F --> G[Vector Stores]
    G --> H[Failover & Retry]
    H --> I[Testing & Fakes]
```
---
## Theory

![AI SDK Media](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/14-ai-sdk-media.png)


### 14.1 Image Generation


> **One-Sentence Takeaway:** The Image class provides a unified interface for generating images across providers like OpenAI (DALL-E 3), Gemini, and Azure.

The `Laravel\Ai\Image` class provides a unified interface for generating images from text prompts. Supported providers include OpenAI (DALL-E 3), Gemini, xAI, Azure OpenAI, Amazon Bedrock, and OpenRouter.

Basic image generation returns raw image content as a string, which you save to a file:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Laravel\Ai\Image;

class ImageController extends Controller
{
    public function generate(Request $request): array
    {
        $request->validate(['prompt' => 'required|string|min:10|max:1000']);

        $rawContent = Image::of($request->input('prompt'))->generate();

        $filename = 'generated/' . md5($request->input('prompt')) . '.png';

        Storage::disk('public')->put($filename, $rawContent);

        return [
            'url' => Storage::disk('public')->url($filename),
            'size_bytes' => strlen($rawContent),
        ];
    }
}
```

Specify the provider, model, and provider-specific options:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Laravel\Ai\Image;
use Laravel\Ai\Lab;

class ImageController extends Controller
{
    public function generateWithOptions(Request $request): array
    {
        $request->validate(['prompt' => 'required|string']);

        $rawContent = Image::of($request->input('prompt'))
            ->using(Lab::OpenAI)
            ->model('dall-e-3')
            ->generate([
                'size' => '1792x1024',
                'quality' => 'hd',
                'style' => 'vivid',
            ]);

        $filename = 'generated/' . str()->uuid() . '.png';

        Storage::disk('public')->put($filename, $rawContent);

        return ['url' => Storage::disk('public')->url($filename)];

> **Pro Tip:** Always validate and sanitize image prompts before sending to the API. Provider content policies vary — what works on OpenAI may be rejected by Gemini. Append style guidance ('photorealistic', 'digital art') for consistent results.
    }
}
```

### 14.2 Text-to-Speech (TTS) Audio


> **One-Sentence Takeaway:** The Audio class converts text to spoken audio with support for OpenAI TTS-1, ElevenLabs, and Gemini, accepting voice and stability parameters.

The `Laravel\Ai\Audio` class converts text to spoken audio. Supported providers include OpenAI (TTS-1), ElevenLabs, and Gemini:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Laravel\Ai\Audio;
use Laravel\Ai\Lab;

class AudioController extends Controller
{
    public function synthesize(Request $request): array
    {
        $request->validate(['text' => 'required|string|max:5000']);

        $rawAudio = Audio::of($request->input('text'))
            ->using(Lab::ElevenLabs)
            ->model('eleven_multilingual_v2')
            ->generate([
                'voice' => '21m00Tcm4TlvDq8ikWAM',
                'stability' => 0.5,
                'similarity_boost' => 0.75,
            ]);

        $filename = 'audio/' . str()->uuid() . '.mp3';

        Storage::disk('public')->put($filename, $rawAudio);

        return ['url' => Storage::disk('public')->url($filename)];
    }
}
```

### 14.3 Speech-to-Text Transcription


> **One-Sentence Takeaway:** The Transcript class transcribes audio files to text with Whisper, supporting word-level timestamps for segmented analysis.

The `Laravel\Ai\Transcript` class transcribes audio to text. Supported providers include OpenAI (Whisper), ElevenLabs, Mistral, and Gemini:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Ai\Lab;
use Laravel\Ai\Transcript;

class TranscriptionController extends Controller
{
    public function transcribe(Request $request): array
    {
        $request->validate([
            'audio' => 'required|file|mimes:mp3,wav,m4a,ogg|max:25600',
        ]);

        $storePath = $request->file('audio')->store('uploads/audio', 'local');

        $text = Transcript::of($storePath)
            ->using(Lab::OpenAI)
            ->model('whisper-1')
            ->fromFile([
                'language' => $request->input('language', 'en'),
                'response_format' => 'text',
                'temperature' => 0.0,
            ]);

        return ['text' => $text];
    }
}
```

For timestamped word-level transcription:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Ai\Transcript;

class TranscriptionController extends Controller
{
    public function transcribeWithTimestamps(Request $request): array
    {
        $request->validate([
            'audio' => 'required|file|mimes:mp3,wav,m4a|max:51200',
        ]);

        $storePath = $request->file('audio')->store('uploads/audio', 'local');

        $response = Transcript::of($storePath)
            ->fromFileWithResponse([
                'timestamp_granularities' => ['segment', 'word'],
                'response_format' => 'verbose_json',
            ]);

        return [
            'text' => $response['text'],
            'segments' => array_map(fn($s) => [
                'start' => $s['start'],
                'end' => $s['end'],
                'text' => $s['text'],
            ], $response['segments'] ?? []),
        ];
    }
}
```

### 14.4 Embeddings


> **One-Sentence Takeaway:** Str::toEmbeddings() handles single texts while Embeddings::for([...])->generate() batch-processes multiple texts in a single API call for efficiency.

Embeddings convert text into high-dimensional vector representations capturing semantic meaning. The SDK provides two approaches.

#### 14.4.1 The `Str` Helper

`Str::toEmbeddings()` returns an embedding array for a single text string:

```php
<?php

namespace App\Console\Commands;

use App\Models\Document;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

class IndexDocuments extends Command
{
    protected $signature = 'documents:index';
    protected $description = 'Generate embeddings for unindexed documents';

    public function handle(): int
    {
        Document::whereNull('embedding_indexed_at')
            ->each(function (Document $document): void {
                $text = $document->title . "\n\n" . $document->content;
                $embedding = Str::of($text)->toEmbeddings();

> **Remember:** Embedding API calls are stateless — generating the same text twice costs twice. Always implement caching with content-hash keys (md5 of the input text) to avoid redundant API costs.
                $document->forceFill([
                    'embedding' => $embedding,
                    'embedding_indexed_at' => now(),
                ])->save();
                $this->info("Indexed document {$document->id}");
            });

        return Command::SUCCESS;
    }
}
```

#### 14.4.2 The `Embeddings` Class

For batch operations, use `Embeddings` → it sends all texts in a single API request:

```php
<?php

namespace App\Console\Commands;

use App\Models\Document;
use Illuminate\Console\Command;
use Laravel\Ai\Embeddings;

class BatchIndexDocuments extends Command
{
    protected $signature = 'documents:batch-index {chunk=100}';
    protected $description = 'Batch generate embeddings';

    public function handle(): int
    {
        $chunkSize = (int) $this->argument('chunk');

        Document::whereNull('embedding_indexed_at')
            ->chunk($chunkSize, function ($documents): void {
                $texts = $documents->map(fn($d) => $d->title . "\n\n" . $d->content)->toArray();
                $embeddings = Embeddings::for($texts)->generate();
                foreach ($documents as $index => $document) {
                    $document->forceFill([
                        'embedding' => $embeddings[$index] ?? [],
                        'embedding_indexed_at' => now(),
                    ])->save();
                }
            });

        $this->info('Batch indexing complete.');

        return Command::SUCCESS;
    }
}
```

#### 14.4.3 Querying with Embeddings

Semantic search compares a query embedding against stored vectors using cosine similarity:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SearchController extends Controller
{
    public function search(Request $request): array
    {
        $request->validate(['query' => 'required|string|min:2']);

        $queryVector = Str::of($request->input('query'))->toEmbeddings();
        $queryJson = json_encode($queryVector);

        $results = Document::select('id', 'title', 'content')
            ->selectRaw('1 - (embedding <=> ?::vector) as similarity', [$queryJson])
            ->whereRaw('embedding IS NOT NULL')
            ->orderByRaw('similarity DESC')
            ->limit(10)
            ->get()
            ->filter(fn($d) => $d->similarity > 0.78)
            ->values();

        return [
            'results' => $results->map(fn($d) => [
                'id' => $d->id,
                'title' => $d->title,
                'similarity' => round($d->similarity, 4),
            ]),
            'count' => $results->count(),
        ];
    }
}
```

### 14.5 Caching Embeddings


> **One-Sentence Takeaway:** Cache embeddings using content-hash keys to avoid redundant API calls; observer hooks invalidate caches when documents change.

Cache embeddings using a deterministic hash to avoid redundant API calls:

```php
<?php

namespace App\Console\Commands;

use App\Models\Document;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class IndexDocumentsCached extends Command
{
    protected $signature = 'documents:index-cached';
    protected $description = 'Index with embedding caching';

    public function handle(): int
    {
        Document::whereNull('embedding_indexed_at')->each(function (Document $document): void {
            $text = $document->title . "\n\n" . $document->content;
            $hash = md5($text);
            $embedding = Cache::remember('embedding:' . $hash, 86400 * 30, function () use ($text): array {
                return Str::of($text)->toEmbeddings();
            });
            $document->forceFill(['embedding' => $embedding, 'embedding_indexed_at' => now()])->save();
        });

        return Command::SUCCESS;
    }
}
```

Invalidate cached embeddings when content changes:

```php
<?php

namespace App\Observers;

use App\Models\Document;
use Illuminate\Support\Facades\Cache;

class DocumentObserver
{
    public function saving(Document $document): void
    {
        if ($document->isDirty('content') || $document->isDirty('title')) {
            $document->embedding_indexed_at = null;
            $oldHash = md5($document->getOriginal('title') . "\n\n" . $document->getOriginal('content'));
            Cache::forget('embedding:' . $oldHash);
            $newHash = md5($document->title . "\n\n" . $document->content);
            Cache::forget('embedding:' . $newHash);
        }
    }

    public function deleted(Document $document): void
    {
        Cache::forget('embedding:' . md5($document->title . "\n\n" . $document->content));
    }
}
```

### 14.6 Reranking


> **One-Sentence Takeaway:** Reranking rescales initial search results using cross-encoder models from Cohere, Jina, and VoyageAI for improved precision.

Reranking rescores initial results using a cross-encoder model. Supported providers: Cohere, Jina, VoyageAI.

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Ai\Reranking;

class RerankController extends Controller
{
    public function rerank(Request $request): array
    {
        $request->validate(['query' => 'required|string']);

        $documents = [
            'Laravel provides a clean routing system.',
            'Symfony is a set of reusable PHP components.',
            'Laravel includes Eloquent ORM for database interaction.',
        ];

        $results = Reranking::of($documents)->rerank($request->input('query'));

> **Warning:** Reranking adds latency and cost per operation. Only rerank the top 20-50 results from your initial retrieval, not the entire corpus. The two-stage retrieve-then-rerank pattern balances speed with accuracy.

        return [
            'results' => $results->map(fn($r) => [
                'document' => $r->document,
                'score' => round($r->score, 4),
            ]),
        ];
    }
}
```

Use the `rerank()` macro on Eloquent collections:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Str;

class SearchController extends Controller
{
    public function searchWithRerank(Request $request): array
    {
        $request->validate(['query' => 'required|string']);

        $queryVector = Str::of($request->input('query'))->toEmbeddings();
        $queryJson = json_encode($queryVector);

        $initial = Document::select('id', 'title', 'content')
            ->selectRaw('1 - (embedding <=> ?::vector) as similarity', [$queryJson])
            ->whereRaw('embedding IS NOT NULL')
            ->orderByRaw('similarity DESC')
            ->limit(20)
            ->get();

        $reranked = $initial->rerank('content', $request->input('query'));

        return [
            'results' => $reranked->take(5)->map(fn($r) => [
                'id' => $r->item->id,
                'title' => $r->item->title,
                'relevance_score' => round($r->score, 4),
            ]),
        ];
    }
}
```

### 14.7 Files and Vector Stores


The `Laravel\Ai\Files` namespace provides `Document` and `Image` classes with three factory methods: `fromStorage($disk, $path)`, `fromPath($absolutePath)`, and `upload($file)`.

Vector stores manage provider-side file storage for file search:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Ai\Facades\Agent;
use Laravel\Ai\VectorStores;

class VectorStoreController extends Controller
{
    public function createAndSearch(Request $request): array
    {
        $request->validate(['query' => 'required|string']);

        $store = VectorStores::create('product-docs');
        $store->addFile(storage_path('app/documents/introduction.md'));

        $response = Agent::make()
            ->instructions('Answer based on provided files.')
            ->withFileSearch(vectorStoreIds: [$store->id()])
            ->prompt($request->input('query'));

        return ['answer' => $response->text()];
    }
}
```

### 14.8 Failover and Retry


Automatic failover chains providers with priority ordering:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Ai\Image;
use Laravel\Ai\Lab;
use Laravel\Ai\Provider;

class ResilientImageController extends Controller
{
    public function generate(Request $request): array
    {
        $request->validate(['prompt' => 'required|string']);

        $rawContent = Image::of($request->input('prompt'))
            ->using(
                Provider::failover()
                    ->with(Lab::OpenAI, 3)
                    ->with(Lab::Gemini, 2)
                    ->with(Lab::Azure, 1)
            )
            ->generate([
                'retry' => [
                    'max_attempts' => 3,
                    'delay' => 1000,
                    'backoff' => 'exponential',
                ],
            ]);

        return ['image' => base64_encode($rawContent)];
    }
}
```

### 14.9 Testing AI SDK Operations


> **One-Sentence Takeaway:** The SDK provides fake implementations for Agent, Image, Audio, Transcript, Embedding, and Reranking, enabling deterministic, side-effect-free testing.

The SDK provides fake implementations for deterministic testing.

```php
<?php

namespace Tests\Feature;

use App\Ai\Agents\SalesCoach;
use Illuminate\Support\Str;
use Laravel\Ai\Embeddings;
use Laravel\Ai\Facades\Agent;
use Laravel\Ai\Facades\Audio;
use Laravel\Ai\Facades\Embedding;
use Laravel\Ai\Facades\Image;
use Laravel\Ai\Facades\Reranking as RerankingFacade;
use Laravel\Ai\Facades\Transcript;
use Laravel\Ai\Reranking;
use Tests\TestCase;

class AiSdkTest extends TestCase
{
    public function test_agent_fake(): void
    {
        Agent::fake([
            SalesCoach::make()->shouldRespond('Great call!'),
        ]);

        $response = SalesCoach::make()->prompt('Analyze this transcript.');

        $this->assertEquals('Great call!', $response->text());
    }

    public function test_agent_assertions(): void
    {
        Agent::fake();

        SalesCoach::make()->prompt('Analyze this transcript: Hello');

        Agent::assertPrompted(fn(string $m): bool => str_contains($m, 'Analyze'));
    }

    public function test_image_generation(): void
    {
        Image::fake(['fake-image-content']);
        $result = Image::of('A sunset')->generate();
        $this->assertEquals('fake-image-content', $result);
    }

    public function test_image_prompt_assertion(): void
    {
        Image::fake();
        Image::of('A cat')->generate();
        Image::assertGenerated(fn(string $p): bool => str_contains($p, 'cat'));
    }

    public function test_audio_synthesis(): void
    {
        Audio::fake(['fake-mp3']);
        $this->assertEquals('fake-mp3', Audio::of('Hello')->generate());
    }

    public function test_transcription(): void
    {
        Transcript::fake(['Hello world.']);
        $this->assertEquals('Hello world.', Transcript::of('a.mp3')->fromFile());
    }

    public function test_embedding(): void
    {
        Embedding::fake([[0.1, 0.2, 0.3]]);
        $this->assertEquals([0.1, 0.2, 0.3], Str::of('Hi')->toEmbeddings());
    }

    public function test_batch_embeddings(): void
    {
        Embedding::fake([[0.1, 0.2], [0.3, 0.4]]);
        $results = Embeddings::for(['A', 'B'])->generate();
        $this->assertCount(2, $results);
    }

    public function test_reranking(): void
    {
        RerankingFacade::fake([
            ['document' => 'Laravel is a framework.', 'score' => 0.95, 'index' => 0],
        ]);

        $results = Reranking::of(['Laravel is a framework.'])->rerank('Laravel');

        $this->assertEquals(0.95, $results->first()->score);
    }
}
```

### 14.10 Events


Key event types include `AiTextGenerated`, `AiStreamChunk`, `AiToolCalled`, `AiToolCompleted`, `AiImageGenerated`, `AiAudioGenerated`, `AiTranscriptionCompleted`, `AiEmbeddingGenerated`, and `AiError`:

```php
<?php

namespace App\Listeners;

use Illuminate\Support\Facades\Log;
use Laravel\Ai\Events\AiTextGenerated;

class LogAiUsage
{
    public function handle(AiTextGenerated $event): void
    {
        Log::info('AI text generation completed', [
            'agent' => $event->agent,
            'input_tokens' => $event->inputTokens,
            'output_tokens' => $event->outputTokens,
            'duration_ms' => $event->durationMs,
            'model' => $event->model,
            'provider' => $event->provider,
        ]);
    }
}
```

### 14.11 Complete Example: Multi-Modal Content Analysis


This action combines image analysis, audio transcription, embedding search, and reranking:

```php
<?php

namespace App\Actions;

use App\Models\Document;
use App\Models\MediaAnalysis;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Laravel\Ai\Facades\Agent;
use Laravel\Ai\Files\Image as AiImage;
use Laravel\Ai\Transcript;

class MultiModalAnalyzer
{
    public function analyze(string $imagePath, string $audioPath, string $searchQuery): MediaAnalysis
    {
        $imageDescription = Agent::make()
            ->instructions('You are a visual analyst. Describe everything you see in detail.')
            ->withAttachment(AiImage::fromPath($imagePath))
            ->prompt('Describe this image in detail.');

        $transcription = Transcript::of($audioPath)->fromFile();

        $audioSummary = Agent::make()
            ->instructions('You are an audio analyst. Summarize key points.')
            ->prompt('Summarize: ' . $transcription);

        $queryVector = Str::of($searchQuery)->toEmbeddings();
        $queryJson = json_encode($queryVector);

        $similarDocs = Document::select('id', 'title', 'content')
            ->selectRaw('1 - (embedding <=> ?::vector) as similarity', [$queryJson])
            ->whereRaw('embedding IS NOT NULL')
            ->orderByRaw('similarity DESC')
            ->limit(10)
            ->get();

        $rerankedDocs = $similarDocs->rerank('content', $searchQuery);

        return MediaAnalysis::create([
            'image_description' => $imageDescription->text(),
            'audio_transcription' => $transcription,
            'audio_summary' => $audioSummary->text(),
            'search_query' => $searchQuery,
            'relevant_documents' => $rerankedDocs->take(3)->map(fn($r) => [
                'id' => $r->item->id,
                'title' => $r->item->title,
                'relevance' => round($r->score, 4),
            ])->toArray(),
        ]);
    }
}
```

---

## Concept Comparison

| Feature | Str::toEmbeddings() | Embeddings::for() |
|---------|--------------------|-------------------|
| Scope | Single text | Multiple texts (batch) |
| API Calls | 1 per invocation | 1 for entire batch |
| Efficiency | Lower (per-text call) | Higher (batched) |
| Use Case | Real-time search query | Batch document indexing |

## Quick Reference — AI SDK Media Methods

| Method | Purpose |
|--------|---------|
| `Image::of($prompt)->generate()` | Generate image |
| `Audio::of($text)->generate()` | Text-to-speech |
| `Transcript::of($file)->fromFile()` | Speech-to-text |
| `Str::of($text)->toEmbeddings()` | Single embedding |
| `Embeddings::for([$texts])->generate()` | Batch embeddings |
| `Reranking::of($docs)->rerank($query)` | Re-rank results |

## Cross-Application Matrix

| Concept | Media App | Content Platform | Enterprise Search |
|---------|----------|-----------------|-----------------|
| Image Gen | Thumbnails, covers | Social media posts | Report headers |
| TTS | Audiobooks | Article narration | Accessibility |
| Embeddings | Video descriptions | Article search | Document retrieval |
| Reranking | Search relevance | Content discovery | Compliance search |
| Caching | Video metadata | Article embeddings | Legal documents |

## Chapter Quiz

**1. Which method generates a single text embedding?**
- a) Embeddings::for([$text])->generate()
- b) Str::of($text)->toEmbeddings()
- c) Text::embed($text)
- d) Vector::create($text)

**2. What is the purpose of Reranking in a search pipeline?**
- a) To reduce the number of search results
- b) To rescale initial results using a cross-encoder
- c) To generate search query embeddings
- d) To cache search results

**3. Which facade provides fake implementations for testing?**
- a) Agent::fake(), Image::fake(), Audio::fake()
- b) Mock::fake(), Stub::fake()
- c) Test::fake(), Assert::fake()
- d) Fake::agent(), Fake::image()

**4. How does failover work in the AI SDK?**
- a) By retrying the same provider
- b) By chaining providers with priority ordering
- c) By switching to a local model
- d) By caching the last successful response

**Answers: 1-b, 2-b, 3-a, 4-b**

## Summary

- Image generation uses `Image::of(prompt)->generate()` with support for OpenAI, Gemini, xAI, Azure, Bedrock, and OpenRouter
- TTS uses `Audio::of(text)->generate()`; STT uses `Transcript::of(file)->fromFile()` with OpenAI, ElevenLabs, Mistral, and Gemini
- Embeddings via `Str::toEmbeddings()` (single) or `Embeddings::for([...])->generate()` (batch) enable vector similarity search
- Reranking with `Reranking::of([documents])->rerank(query)` rescales results using Cohere, Jina, and VoyageAI
- Embedding caching with `Cache::remember()` using content-hash keys reduces API costs; observers handle invalidation
- Failover via `Provider::failover()->with()` chains fallback providers with configurable retry logic
- Fake implementations for Agent, Image, Audio, Transcript, Embedding, Reranking, File, and VectorStore enable deterministic testing
- Events like `AiTextGenerated`, `AiImageGenerated`, and `AiEmbeddingGenerated` provide observability hooks
---
## Exercises

### Review Questions

1. Explain the differences between the `Image` class and the `Files\Image` class. When would you use each?

2. Compare `Str::toEmbeddings()` with `Embeddings::for([...])->generate()`. What are the performance implications of each?

3. Describe the purpose of reranking in a search pipeline. Why is two-stage retrieval superior to either stage alone?

4. How does the failover system work? What happens when the primary provider errors and a fallback is configured?

5. What AI SDK event types are available and what is the recommended approach for tracking AI usage?

### Application Problems

1. Build an Artisan command that reads files from a `documents/` directory, generates embeddings using `Embeddings`, stores them in a `document_embeddings` table with `pgvector`, and implements caching with a 7-day TTL. Accept a `--provider` option.

2. Create a controller endpoint that accepts an uploaded audio file, transcribes it with `Transcript`, sends the transcription to an agent for summarization, generates an embedding of the summary, and stores all artifacts in a `media_analyses` table.

3. Build a search endpoint that accepts a query, generates its embedding, performs vector similarity against a `products` table, reranks the top 20 using Cohere, and returns the top 5 with relevance scores. Cache the query embedding for 24 hours.

### Challenge Problem

Design a complete multi-modal content moderation pipeline that: (1) accepts an image and optional audio via a single upload, (2) sends the image to an agent for content analysis via `Files\Image`, (3) transcribes audio with `Transcript` and analyzes for prohibited topics, (4) generates embeddings for the image description and transcription, (5) searches a `moderation_rules` vector store via cosine similarity, (6) reranks matched rules, (7) returns structured verdict with `is_approved` (boolean), `flags` (array), `confidence` (float), and `matched_rules` (array), (8) dispatches an `AiTextGenerated` listener logging to `moderation_logs`, (9) includes a complete test suite using all relevant fake implementations.