# ✨ STAGE 6B — AI Features for SaaS

> **Level:** Advanced | **Duration:** 1 Week

---

## 1. AI Features You Can Build

| Feature | Description | AI Model |
|---------|-------------|----------|
| **AI Search** | Semantic search across content | Embeddings + Vector DB |
| **AI Chat** | Chatbot for your app | GPT-4o + RAG |
| **AI Summarization** | Auto-summarize content | BART / GPT |
| **AI Tagging** | Auto-categorize content | Classification model |
| **AI Content Gen** | Generate descriptions, emails | GPT-4o |
| **AI Analytics** | Natural language data queries | Text-to-SQL |
| **AI Recommendations** | Suggest related items | Embeddings similarity |

---

## 2. AI Search Implementation

```php
// SearchController.php
class SearchController extends Controller
{
    public function __construct(
        private AIService $ai,
        private ProductRepository $products
    ) {}

    public function search(Request $request)
    {
        $query = $request->input('q');
        
        // Get embedding for search query
        $queryEmbedding = $this->ai->generateEmbedding($query);
        
        // Search vector DB
        $similarIds = $this->ai->vectorSearch($queryEmbedding, limit: 20);
        
        // Fetch products
        $products = $this->products->findByIds($similarIds);
        
        return ProductResource::collection($products);
    }
}
```

---

## 3. AI Chat for SaaS

```php
// ChatController.php
public function chat(Request $request)
{
    $message = $request->input('message');
    $sessionId = $request->input('session_id', Str::uuid());
    
    // Get chat history
    $history = AiConversation::where('session_id', $sessionId)
        ->latest()
        ->take(10)
        ->get()
        ->reverse()
        ->map(fn ($m) => ['role' => $m->role, 'content' => $m->message])
        ->values()
        ->toArray();
    
    // Get relevant context (RAG)
    $context = $this->ai->retrieveContext($message);
    
    // Get AI response
    $reply = $this->ai->chat($message, $history, $context);
    
    // Store messages
    AiConversation::insert([
        ['session_id' => $sessionId, 'user_id' => auth()->id(),
         'role' => 'user', 'message' => $message, 'created_at' => now()],
        ['session_id' => $sessionId, 'user_id' => auth()->id(),
         'role' => 'assistant', 'message' => $reply, 'created_at' => now()],
    ]);
    
    return response()->json([
        'reply' => $reply,
        'session_id' => $sessionId,
    ]);
}
```

---

## 4. AI Auto-Tagging

```php
// When product is created
class AutoTagProduct implements ShouldQueue
{
    public function handle(AIService $ai): void
    {
        $description = $this->product->name . ' ' . $this->product->description;
        
        $tags = $ai->classify($description, [
            'electronics', 'clothing', 'books', 'home',
            'sports', 'beauty', 'food', 'toys'
        ]);
        
        $this->product->tags()->sync(
            Tag::whereIn('name', $tags)->pluck('id')
        );
    }
}
```

---

## 5. AI Content Generation

```php
public function generateDescription(Request $request)
{
    $product = Product::findOrFail($request->product_id);
    
    $prompt = "Write a compelling product description for:
    Name: {$product->name}
    Category: {$product->category->name}
    Features: " . implode(', ', $product->features) . "
    
    Make it SEO-friendly, 150 words max.";
    
    $description = $this->ai->generate($prompt);
    
    return response()->json(['description' => $description]);
}
```

---

## 6. AI Analytics (Text-to-SQL)

```php
public function queryAnalytics(Request $request)
{
    $question = $request->input('question');
    // "What were our top 5 selling products last month?"
    
    $schema = $this->getRelevantSchema();
    
    $sql = $this->ai->textToSql($question, $schema);
    // Generated: SELECT name, SUM(qty) as total FROM order_items 
    //            JOIN products ON ... WHERE created_at >= ...
    //            GROUP BY name ORDER BY total DESC LIMIT 5
    
    // Safety check — only allow SELECT
    if (!Str::startsWith(trim(strtoupper($sql)), 'SELECT')) {
        return response()->json(['error' => 'Invalid query'], 400);
    }
    
    $results = DB::select($sql);
    
    // AI interprets results
    $insight = $this->ai->interpret($question, $results);
    
    return response()->json([
        'answer' => $insight,
        'data' => $results,
    ]);
}
```

---

## 🎯 Practice Tasks
- [ ] Build AI semantic search for products
- [ ] Implement AI chat with RAG context
- [ ] Create auto-tagging system
- [ ] Build AI content generator for descriptions
- [ ] Implement text-to-SQL analytics

---

*Next: [Multi-Tenant AI →](./03_MULTI_TENANT_AI.md)*
