# Chapter 16: Semantic Search, Vector Search & RAG with pgvector
> **Previous:** [Laravel MCP -- Model Context Protocol](./15-mcp) | **Next:** [Boost](./17-boost)

---
## Learning Objectives
- Implement full-text search using MySQL and PostgreSQL native capabilities
- Understand semantic search and embeddings for meaning-based retrieval
- Install and configure pgvector for vector similarity search in Laravel
- Build a complete RAG (Retrieval-Augmented Generation) pipeline
- Integrate Laravel Scout with database, full-text, and vector engines

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/laravel/16-search-rag/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/16-search-rag/hero.svg" alt="Chapter Banner: Chapter 16: Semantic Search, Vector Search & RAG with pgvector" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/16-search-rag/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/16-search-rag/handwritten-notes.svg" alt="Handwritten Notes: Chapter 16: Semantic Search, Vector Search & RAG with pgvector" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/16-search-rag/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/16-search-rag/sticky-notes.svg" alt="Sticky Notes: Chapter 16: Semantic Search, Vector Search & RAG with pgvector" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/16-search-rag/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/16-search-rag/visual-explanation.svg" alt="Visual Explanation: Chapter 16: Semantic Search, Vector Search & RAG with pgvector" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/16-search-rag/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/16-search-rag/architecture.svg" alt="Architecture: Chapter 16: Semantic Search, Vector Search & RAG with pgvector" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/16-search-rag/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/16-search-rag/workflow.svg" alt="Workflow: Chapter 16: Semantic Search, Vector Search & RAG with pgvector" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/16-search-rag/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/16-search-rag/mindmap.svg" alt="Mind Map: Chapter 16: Semantic Search, Vector Search & RAG with pgvector" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/16-search-rag/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/16-search-rag/comparison.svg" alt="Comparison: Chapter 16: Semantic Search, Vector Search & RAG with pgvector" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/16-search-rag/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/16-search-rag/cheatsheet.svg" alt="Cheat Sheet: Chapter 16: Semantic Search, Vector Search & RAG with pgvector" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/16-search-rag/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/16-search-rag/interview-quiz.svg" alt="Quiz Card: Chapter 16: Semantic Search, Vector Search & RAG with pgvector" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/laravel/16-search-rag/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/laravel/16-search-rag/social-card.svg" alt="Social Card: Chapter 16: Semantic Search, Vector Search & RAG with pgvector" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->

## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| Full-Text Search | MySQL MATCH/AGAINST, PostgreSQL tsvector |
| Semantic Search | Embeddings, cosine similarity |
| pgvector | Extension, vector columns, HNSW indexes |
| Embedding Generation | Str::toEmbeddings(), batch processing |
| Vector Search | whereVectorSimilarTo(), auto-embedding |
| Reranking | Cross-encoder rescoring, Collection rerank |
| Laravel Scout | Database engine, full-text attributes |
| RAG Patterns | Full-text + reranking, vector + filters, hybrid |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Full-Text Search] --> B[Semantic Search Concept]
    B --> C[pgvector Installation]
    C --> D[Generating Embeddings]
    D --> E[Storing Vectors]
    E --> F[Complete Search Pipeline]
    F --> G[Reranking]
    G --> H[Laravel Scout]
    H --> I[RAG Patterns]
```
---

## Theory

![Semantic Search & RAG Pipeline](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/16-search-rag.png)

### 16.1 Full-Text Search


Full-text search searches within documents for exact or stemmed keyword matches. Laravel's query builder provides a cross-database `whereFullText()` method:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use Illuminate\Support\Facades\DB;

class ArticleSearchController extends Controller
{
    public function search(Request $request)
    {
        $validated = $request->validate([
            'query' => ['required', 'string', 'min:2'],
            'language' => ['string', 'default' => 'english'],
        ]);

        $articles = Article::whereFullText(
            ['title', 'body'],
            $validated['query'],
            ['language' => $validated['language']]
        )->paginate(20);

        return view('articles.search', [
            'articles' => $articles,
            'query' => $validated['query'],
        ]);
    }
}
```

The underlying SQL differs by database. On MySQL, `whereFullText` generates a `MATCH ... AGAINST` statement:

```sql
SELECT * FROM articles
WHERE MATCH (title, body) AGAINST (? IN NATURAL LANGUAGE MODE)
```

On PostgreSQL, it generates a `to_tsvector` / `to_tsquery` statement:

```sql
SELECT * FROM articles
WHERE to_tsvector('english', title || ' ' || body) @@ plainto_tsquery('english', ?)
```

To use full-text indexes, add them to your migrations:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('articles', function (Blueprint $table) {
            if (DB::getDriverName() === 'mysql') {
                $table->fullText(['title', 'body'], 'articles_title_body_fulltext');
            } else {
                DB::statement(
                    'CREATE INDEX articles_title_body_fulltext ON articles ' .
                    'USING GIN (to_tsvector(\'english\', coalesce(title, \'\') || \' \' || coalesce(body, \'\')))'
                );
            }
        });
    }

    public function down(): void
    {
        Schema::table('articles', function (Blueprint $table) {
            $table->dropIndex('articles_title_body_fulltext');
        });
    }
};
```

For PostgreSQL, the language parameter in `whereFullText` is important because `to_tsvector` uses a language-specific dictionary for stemming:

```php
$articles = Article::whereFullText(
    ['title', 'body'],
    $request->input('query'),
    ['language' => 'french']
)->get();
```

Composite full-text indexes improve performance on multi-column searches. In MySQL, you can also add a `FULLTEXT` index on a generated column that concatenates multiple text sources:

```php
Schema::table('articles', function (Blueprint $table) {
    $table->fullText(['title', 'body', 'meta_keywords']);
});
```

Relevance ordering is automatic with `whereFullText`. The database returns rows ordered by relevancy score, which you can also access explicitly:

```php
$articles = Article::select('*')
    ->selectRaw('MATCH (title, body) AGAINST (?) AS relevance', [$query])
    ->whereRaw('MATCH (title, body) AGAINST (?)', [$query])
    ->orderByRaw('relevance DESC')
    ->get();
```

### 16.2 Semantic Search Concept


Semantic search understands the *meaning* of a query, not just its keywords. Instead of matching character sequences, it compares numerical representations called **embeddings** → arrays of floating-point numbers produced by a machine learning model.

Consider this contrast:

- **Keyword search**: Searching "fast vehicle" returns documents containing "fast" and "vehicle" but NOT "speedy car" or "quick automobile"
- **Semantic search**: Searching "fast vehicle" returns "speedy car" because their embeddings are close in vector space

Embeddings are computed by models like OpenAI's `text-embedding-3-small` (1536 dimensions), `text-embedding-3-large` (3072 dimensions), or open-source models like `intfloat/e5-mistral-7b-instruct`. Each model produces a vector where the distance between vectors corresponds to semantic similarity.

The primary distance metric is **cosine similarity**:

```
cosine_similarity(A, B) = (A Â· B) / (||A|| * ||B||)
```

Values range from -1 (opposite meaning) to 1 (identical meaning). A threshold of 0.4 to 0.6 typically indicates semantically related content.

### 16.3 pgvector Installation


pgvector is a PostgreSQL extension that adds vector data types and similarity search operators. Install it on your PostgreSQL server:

```bash
# On the database server (Ubuntu/Debian)
sudo apt install postgresql-17-pgvector

# On macOS with Homebrew
brew install pgvector
```

Then enable the extension in a Laravel migration:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::ensureVectorExtensionExists();

> **Pro Tip:** The HNSW index parameters (ef_construction, m) balance build time vs. accuracy. Start with ef_construction=200 and m=16 for most applications. Increase ef_construction for better quality at the cost of slower index building.
    }

    public function down(): void
    {
        Schema::dropExtensionIfExists('vector');
    }
};
```

Now create a table with a vector column:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->string('category')->nullable();
            $table->foreignId('user_id')->constrained();
            $table->vector('content_embedding', 1536);
            $table->timestamps();
        });

        Schema::table('documents', function (Blueprint $table) {
            $table->index('category');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};
```

The second argument to `vector()` is the **dimensions**. This must match your embedding model:

- `text-embedding-3-small` → 1536
- `text-embedding-3-large` → 3072
- `intfloat/e5-mistral-7b-instruct` → 4096

For performance at scale, add an HNSW (Hierarchical Navigable Small World) index:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('documents', function (Blueprint $table) {
            $table->vectorIndex('content_embedding', 'documents_embedding_hnsw', 'hnsw')
                ->distance('cosine')
                ->options('ef_construction=200, m=16');
        });
    }

    public function down(): void
    {
        Schema::table('documents', function (Blueprint $table) {
            $table->dropIndex('documents_embedding_hnsw');
        });
    }
};
```

The HNSW index parameters balance build time against query accuracy:

- `ef_construction=200` → Higher values improve index quality at build time
- `m=16` → Maximum number of connections per element; higher = more accurate but larger index

### 16.4 Generating Embeddings


Laravel's AI SDK provides embedding generation. Use `Str::toEmbeddings()` for single texts:

```php
<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Document;
use Illuminate\Support\Str;

class EmbedDocuments extends Command
{
    protected $signature = 'documents:embed';
    protected $description = 'Generate embeddings for all documents without them';

    public function handle(): int
    {
        $documents = Document::whereNull('content_embedding')
            ->orWhere('content_embedding', '[]')
            ->get();

        $this->info("Found {$documents->count()} documents to embed.");

        foreach ($documents as $document) {
            $embedding = Str::of($document->content)->toEmbeddings();

> **Remember:** Always cache embeddings using content-hash keys during batch indexing. Generating embeddings is both time-consuming and costly — caching prevents redundant API calls during re-indexing operations.

            $document->forceFill([
                'content_embedding' => $embedding,
            ])->save();

            $this->line("Embedded document #{$document->id}: {$document->title}");
        }

        $this->info('All documents embedded successfully.');

        return Command::SUCCESS;
    }
}
```

For batch processing (more efficient), use `Embeddings::for()`:

```php
<?php

namespace App\Actions;

use Illuminate\Support\Facades\Embeddings;
use App\Models\Document;

class BatchEmbedDocuments
{
    public function execute(): void
    {
        $documents = Document::whereNull('content_embedding')->get();

        $chunks = $documents->chunk(20);

        foreach ($chunks as $chunk) {
            $texts = $chunk->pluck('content')->toArray();

            $embeddings = Embeddings::for($texts)->generate();

            foreach ($chunk as $index => $document) {
                $document->forceFill([
                    'content_embedding' => $embeddings[$index],
                ])->save();
            }
        }
    }
}
```

The embedding model is configured in `config/ai.php`:

```php
return [
    'embeddings' => [
        'model' => 'text-embedding-3-small',
        'dimensions' => 1536,
    ],
];
```

### 16.5 Storing Vectors


On the Eloquent model, cast the vector column to an array so it serializes and deserializes automatically:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected function casts(): array
    {
        return [
            'content_embedding' => 'array',
        ];
    }
}
```

During model creation, generate and store the embedding:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class DocumentController extends Controller
{
    public function store(Request $request): Document
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'content' => ['required', 'string'],
            'category' => ['nullable', 'string', 'max:100'],
        ]);

        $embedding = Str::of($validated['content'])->toEmbeddings();

        $document = Document::create([
            'title' => $validated['title'],
            'content' => $validated['content'],
            'category' => $validated['category'],
            'user_id' => auth()->id(),
            'content_embedding' => $embedding,
        ]);

        return $document;
    }
}
```

### 16.6 Complete Search Pipeline


The core of semantic search is the `whereVectorSimilarTo` query builder method. It accepts a plain-text query or an embedding array and returns results ordered by cosine similarity:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SemanticSearchController extends Controller
{
    public function search(Request $request)
    {
        $validated = $request->validate([
            'query' => ['required', 'string', 'min:2'],
            'category' => ['nullable', 'string', 'exists:documents,category'],
            'per_page' => ['integer', 'min:1', 'max:100'],
        ]);

        $query = Document::query()
            ->whereVectorSimilarTo(
                'content_embedding',
                $validated['query'],
                minSimilarity: 0.4
            )
            ->limit($validated['per_page'] ?? 10);

        if (! empty($validated['category'])) {
            $query->where('category', $validated['category']);
        }

        $documents = $query->get();

        return response()->json([
            'query' => $validated['query'],
            'count' => $documents->count(),
            'results' => $documents->map(function ($doc) {
                return [
                    'id' => $doc->id,
                    'title' => $doc->title,
                    'excerpt' => Str::limit($doc->content, 200),
                    'category' => $doc->category,
                    'similarity' => $doc->similarity,
                ];
            }),
        ]);
    }
}
```

The `whereVectorSimilarTo` method accepts either a plain string (auto-embedded) or an explicit embedding array:

```php
// Auto-embedding → pass a plain string
Document::whereVectorSimilarTo('content_embedding', 'How do I install Laravel?', minSimilarity: 0.4);

// Explicit embedding → pre-compute and pass the array
$embedding = Str::of($query)->toEmbeddings();
Document::whereVectorSimilarTo('content_embedding', $embedding, minSimilarity: 0.4);
```

When you pass a string, the framework calls the configured embedding model under the hood. When you pass an array, it uses it directly → useful when you've already embedded the query for other purposes.

The generated SQL uses the `<=>` distance operator (cosine distance) with the HNSW index:

```sql
SELECT *, 1 - (content_embedding <=> ?) AS similarity
FROM documents
WHERE 1 - (content_embedding <=> ?) >= 0.4
ORDER BY content_embedding <=> ?
LIMIT 10
```

### 16.7 Reranking


Reranking improves search quality by applying a second, more expensive model to reorder the initial results. This is the "retrieve then rerank" pattern:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Reranking;

class RerankedSearchController extends Controller
{
    public function search(Request $request)
    {
        $validated = $request->validate([
            'query' => ['required', 'string', 'min:2'],
        ]);

        // Step 1: Fast retrieval with vector search
        $documents = Document::whereVectorSimilarTo(

> **Warning:** The minSimilarity threshold directly impacts RAG answer quality. Too low (0.3) includes irrelevant context that confuses the LLM. Too high (0.85) may miss relevant documents. Tune this per use case — start at 0.4 and adjust based on result quality.
            'content_embedding',
            $validated['query'],
            minSimilarity: 0.3
        )->limit(50)->get();

        // Step 2: Rerank with a cross-encoder model
        $reranked = Reranking::of($documents)
            ->rerank($validated['query'])
            ->take(10);

        return response()->json([
            'query' => $validated['query'],
            'count' => $reranked->count(),
            'results' => $reranked->map(function ($doc) {
                return [
                    'id' => $doc->id,
                    'title' => $doc->title,
                    'excerpt' => Str::limit($doc->content, 200),
                    'rerank_score' => $doc->rerankScore,
                ];
            }),
        ]);
    }
}
```

The Eloquent `Collection` class also provides a `rerank` convenience method:

```php
$documents = Document::whereVectorSimilarTo(
    'content_embedding',
    $validated['query'],
    minSimilarity: 0.3
)->limit(50)->get();

$reranked = $documents->rerank(field: 'content', query: $validated['query']);

foreach ($reranked as $document) {
    echo $document->rerankScore; // Float between 0 and 1
    echo $document->title;
}
```

This pattern is computationally efficient: the vector search runs in O(log n) with HNSW indexing, while the expensive cross-encoder reranks only the top 50 candidates rather than the entire corpus.

### 16.8 Laravel Scout


Laravel Scout provides a unified interface for full-text search across multiple engines including the database engine, Meilisearch, Typesense, and Algolia.

**Database Engine** → No external service required. Uses your existing database's full-text capabilities:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Post extends Model
{
    use Searchable;

    public function toSearchableArray(): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
            'author' => $this->author->name,
            'tags' => $this->tags->pluck('name')->implode(', '),
        ];
    }
}
```

Searching:

```php
$posts = Post::search('Laravel installation guide')
    ->where('published', true)
    ->paginate(15);
```

Scout attributes control how the database engine executes searches:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Laravel\Scout\Attributes\SearchUsingFullText;
use Laravel\Scout\Attributes\SearchUsingPrefix;

class Product extends Model
{
    use Searchable;

    #[SearchUsingFullText(['name', 'description'])]
    #[SearchUsingPrefix(['sku'])]
    public function toSearchableArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'sku' => $this->sku,
            'price' => $this->price,
            'category' => $this->category->name,
        ];
    }
}
```

`#[SearchUsingFullText]` generates MATCH/AGAINST (MySQL) or to_tsvector (PostgreSQL). `#[SearchUsingPrefix]` uses a LIKE query with the prefix appended with `*`, ideal for SKU or partial ID searches.

### 16.9 RAG Patterns


Retrieval-Augmented Generation (RAG) combines retrieval (search) with generation (LLM). Here are three common patterns:

**Pattern 1: Full-text + Reranking** → Fast keyword retrieval refined by semantic reranking. Best for documentation and knowledge bases:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;

class RagFullTextController extends Controller
{
    public function search(Request $request)
    {
        $validated = $request->validate([
            'query' => ['required', 'string', 'min:2'],
        ]);

        $documents = Document::whereFullText(
            ['title', 'content'],
            $validated['query']
        )->limit(50)->get();

        $reranked = $documents->rerank(field: 'content', query: $validated['query']);

        return view('rag.results', [
            'query' => $validated['query'],
            'documents' => $reranked->take(10),
        ]);
    }
}
```

**Pattern 2: Vector Search + Traditional Filters** → Semantic search scoped by traditional database filters. Best for multi-tenant or categorized content:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;

class RagFilteredController extends Controller
{
    public function search(Request $request)
    {
        $validated = $request->validate([
            'query' => ['required', 'string', 'min:2'],
            'category' => ['required', 'string', 'exists:categories,slug'],
            'user_id' => ['nullable', 'integer', 'exists:users,id'],
            'date_from' => ['nullable', 'date'],
        ]);

        $documents = Document::query()
            ->whereVectorSimilarTo('content_embedding', $validated['query'], minSimilarity: 0.4)
            ->where('category', $validated['category'])
            ->when($validated['user_id'] ?? null, fn ($q, $id) => $q->where('user_id', $id))
            ->when($validated['date_from'] ?? null, fn ($q, $d) => $q->whereDate('created_at', '>=', $d))
            ->limit(10)
            ->get();

        return response()->json($documents);
    }
}
```

**Pattern 3: Hybrid Search** → Combines full-text and vector results with score normalization. Best for general-purpose search:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class RagHybridController extends Controller
{
    public function search(Request $request): Collection
    {
        $validated = $request->validate([
            'query' => ['required', 'string', 'min:2'],
        ]);

        $query = $validated['query'];
        $limit = 20;

        $vectorResults = Document::whereVectorSimilarTo(
            'content_embedding', $query, minSimilarity: 0.3
        )->limit($limit)->get()->keyBy('id');

        $fullTextResults = Document::whereFullText(
            ['title', 'content'], $query
        )->limit($limit)->get()->keyBy('id');

        $merged = $vectorResults->union($fullTextResults);

        $normalized = $merged->values()->map(function ($doc) use ($vectorResults, $fullTextResults) {
            $vectorScore = isset($vectorResults[$doc->id])
                ? $vectorResults[$doc->id]->similarity
                : 0;

            $fullTextScore = isset($fullTextResults[$doc->id])
                ? $fullTextResults[$doc->id]->relevance
                : 0;

            $doc->hybridScore = ($vectorScore * 0.6) + ($fullTextScore * 0.4);

            return $doc;
        });

        return $normalized->sortByDesc('hybridScore')->take(10)->values();
    }
}
```

### 16.10 Complete Example: RAG Documentation Search


This example builds a complete documentation search system with full-text retrieval, vector reranking, and Scout:

```php
<?php

// File: app/Models/DocumentationPage.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Laravel\Scout\Attributes\SearchUsingFullText;

class DocumentationPage extends Model
{
    use Searchable;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'version',
        'category',
        'content_embedding',
    ];

    protected function casts(): array
    {
        return [
            'content_embedding' => 'array',
        ];
    }

    #[SearchUsingFullText(['title', 'content'])]
    public function toSearchableArray(): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
            'version' => $this->version,
            'category' => $this->category,
        ];
    }

    public function scopeByVersion($query, string $version)
    {
        return $query->where('version', $version);
    }

    public function scopeByCategory($query, string $category)
    {
        return $query->where('category', $category);
    }
}
```

```php
<?php

// File: app/Console/Commands/EmbedDocumentation.php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\DocumentationPage;
use Illuminate\Support\Str;

class EmbedDocumentation extends Command
{
    protected $signature = 'docs:embed
        {--chunk=20 : Number of documents to process per batch}
        {--force : Re-embed already embedded documents}';

    protected $description = 'Generate vector embeddings for all documentation pages';

    public function handle(): int
    {
        $query = DocumentationPage::query();

        if (! $this->option('force')) {
            $query->whereNull('content_embedding');
        }

        $total = $query->count();

        if ($total === 0) {
            $this->info('No documents to embed.');
            return Command::SUCCESS;
        }

        $this->info("Embedding {$total} documentation pages...");

        $bar = $this->output->createProgressBar($total);
        $bar->start();

        $query->chunk($this->option('chunk'), function ($pages) use ($bar) {
            foreach ($pages as $page) {
                $text = $page->title . "\n\n" . $page->content;
                $page->content_embedding = Str::of($text)->toEmbeddings();
                $page->save();
                $bar->advance();
            }
        });

        $bar->finish();
        $this->newLine();
        $this->info('Done!');

        return Command::SUCCESS;
    }
}
```

```php
<?php

// File: app/Http/Controllers/DocumentationSearchController.php

namespace App\Http\Controllers;

use App\Models\DocumentationPage;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cache;

class DocumentationSearchController extends Controller
{
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'query' => ['required', 'string', 'min:2'],
            'version' => ['nullable', 'string', 'in:11.x,12.x,13.x'],
            'category' => ['nullable', 'string'],
            'page' => ['integer', 'min:1', 'default' => 1],
        ]);

        $query = $validated['query'];
        $version = $validated['version'] ?? '13.x';
        $perPage = 20;

        $cacheKey = 'doc_search:' . md5(serialize($validated));
        $cacheTTL = 300;

        $results = Cache::remember($cacheKey, $cacheTTL, function () use ($query, $version, $perPage) {
            $pages = DocumentationPage::query()
                ->whereVectorSimilarTo('content_embedding', $query, minSimilarity: 0.35)
                ->where('version', $version)
                ->limit(50)
                ->get();

            $reranked = $pages->rerank(field: 'content', query: $query);

            return $reranked->take($perPage)->values();
        });

        return view('docs.search-results', [
            'query' => $query,
            'version' => $version,
            'results' => $results,
            'total' => $results->count(),
        ]);
    }
}
```

```php
<?php

// File: app/Http/Controllers/DocumentationRagController.php

namespace App\Http\Controllers;

use App\Models\DocumentationPage;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class DocumentationRagController extends Controller
{
    public function ask(Request $request)
    {
        $validated = $request->validate([
            'question' => ['required', 'string', 'min:5'],
            'version' => ['nullable', 'string', 'in:11.x,12.x,13.x'],
        ]);

        $query = $validated['question'];
        $version = $validated['version'] ?? '13.x';

        $pages = DocumentationPage::query()
            ->whereVectorSimilarTo('content_embedding', $query, minSimilarity: 0.35)
            ->where('version', $version)
            ->limit(5)
            ->get();

        $context = $pages->map(function ($page) {
            return "## {$page->title}\n\n{$page->content}";
        })->implode("\n\n---\n\n");

        $answer = Str::of(
            "You are a Laravel documentation assistant. Answer the question based SOLELY on the context below. " .
            "If the context does not contain the answer, say you don't know.\n\n" .
            "CONTEXT:\n{$context}\n\n" .
            "QUESTION: {$query}\n\n" .
            "ANSWER:"
        )->ask();

        return response()->json([
            'question' => $query,
            'answer' => $answer,
            'sources' => $pages->map(fn ($p) => [
                'title' => $p->title,
                'slug' => $p->slug,
                'version' => $p->version,
            ]),
        ]);
    }
}
```

```php
<?php

// File: routes/web.php

use App\Http\Controllers\DocumentationSearchController;
use App\Http\Controllers\DocumentationRagController;
use Illuminate\Support\Facades\Route;

Route::get('/docs/search', DocumentationSearchController::class)
    ->name('docs.search');

Route::post('/docs/ask', DocumentationRagController::class)
    ->middleware('throttle:30,1')
    ->name('docs.ask');
```

---


## Concept Comparison

| Feature | Full-Text Search | Vector Search | Hybrid Search |
|---------|-----------------|---------------|---------------|
| Matching | Keywords, stemming | Semantic meaning | Both |
| Language | Query-dependent | Language-agnostic | Both |
| Index | B-tree, GIN | HNSW (IVFFlat) | Both |
| Speed | Fast | Fast (with HNSW) | Moderate |
| Cold Start | Zero config | Embeddings required | Both required |
| Best For | Exact terms, SKU | Synonyms, concepts | General purpose |

## Quick Reference — Search Methods

| Method | Purpose |
|--------|---------|
| `whereFullText(['col1','col2'], $query)` | Full-text search |
| `whereVectorSimilarTo('embedding', $text, 0.4)` | Semantic search (auto-embed) |
| `whereVectorSimilarTo('embedding', $array, 0.4)` | Semantic search (pre-computed) |
| `$collection->rerank('field', $query)` | Re-rank results |
| `Model::search($query)->paginate()` | Scout search |
| `Str::of($text)->toEmbeddings()` | Generate embedding |

## Cross-Application Matrix

| Concept | Documentation | E-Commerce | Support System |
|---------|-------------|-----------|---------------|
| Search Type | Hybrid | Full-text + vector | Vector + filters |
| Primary Index | Full-text (title, body) | Vector (product names) | Vector (articles) |
| Filter | Version, category | Category, price range | Product, tenant |
| Rerank | Top 50 \u2192 10 | Top 20 \u2192 5 | Top 30 \u2192 5 |
| Cache TTL | 5 minutes | 1 minute | 10 minutes |

## Chapter Quiz

**1. Which PostgreSQL operator does pgvector use for cosine distance?**
- a) &lt;#>
- b) &lt;=>
- c) &lt;->
- d) &lt;@>

**2. What does the vector column dimension parameter (e.g., 1536) correspond to?**
- a) The number of rows in the table
- b) The embedding model's output dimensions
- c) The index size
- d) The query timeout

**3. Which Scout attribute enables MySQL MATCH/AGAINST queries?**
- a) SearchUsingPrefix
- b) SearchUsingFullText
- c) SearchUsingLike
- d) SearchUsingMatch

**4. What is the primary benefit of the retrieve-then-rerank pattern?**
- a) Faster queries
- b) Improved precision with manageable cost
- c) Reduced storage
- d) Simpler code

**Answers: 1-b, 2-b, 3-b, 4-b**

## Summary
- Full-text search uses database-native `MATCH/AGAINST` (MySQL) or `to_tsvector` (PostgreSQL) via `whereFullText()`
- Semantic search compares vector embeddings using cosine similarity for meaning-based retrieval
- pgvector provides the `vector` column type and `<=>` distance operator in PostgreSQL
- String auto-embedding via the AI SDK generates embeddings from plain text
- `whereVectorSimilarTo()` accepts a string or explicit embedding array for vector search
- Reranking applies a cross-encoder to reorder initial results, improving precision
- Laravel Scout provides a unified search API with database engine, full-text attributes, and prefix search
- RAG combines retrieval with LLM generation for context-aware answers
- Hybrid search merges full-text and vector results with score normalization
- HNSW indexes accelerate vector search at scale with configurable trade-offs

## Exercises

### Review Questions
1. How does `to_tsvector` differ from a simple `LIKE '%keyword%'` query in PostgreSQL?
2. What is cosine similarity and why is it preferred over Euclidean distance for semantic search?
3. Explain the relationship between the vector dimensions parameter and the embedding model used.
4. What is the purpose of the minSimilarity parameter in `whereVectorSimilarTo()`?
5. How does the "retrieve then rerank" pattern improve search quality over pure vector search?

### Application Problems
1. Write a migration that adds a `vector` column for 1536-dimension embeddings to a `posts` table, then add an HNSW index on that column.
2. Build a `SemanticProductSearchController` that accepts a query string and optionally a category slug, performs vector search, and returns results ordered by similarity.
3. Create a command that batch-embeds all `articles` that have null embeddings, processing 50 at a time and logging progress.

### Challenge Problem
Build a complete RAG-powered support system with:
- A `support_articles` table with a vector column for 1536-dimension embeddings
- An `ArticleSearchController` that combines full-text search and vector search using hybrid scoring
- A reranking step using the Collection `rerank()` method
- Caching of search results for 10 minutes
- A `POST /support/ask` endpoint that accepts a natural language question, retrieves the top 5 most relevant articles, builds a context prompt, and returns a generated answer with source citations

