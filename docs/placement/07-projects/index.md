<div class="module-hero">
  <div class="module-hero-icon">🏗️</div>
  <div class="module-hero-body">
    <h1>Projects — Portfolio Ka Dum</h1>
    <p>Placement mein projects hi teri real identity hai. Ye section tujhe beginner se lekar advanced projects tak le jayega.</p>
    <div class="module-hero-meta">
      <span>Beginner → Capstone</span>
      <span>12+ Projects</span>
      <span>Portfolio Ready</span>
    </div>
  </div>
</div>

## 🗺️ Project Progression

<div class="roadmap-path">
  <div class="roadmap-step" data-step="1">Beginner</div>
  <div class="roadmap-step" data-step="2">Intermediate</div>
  <div class="roadmap-step" data-step="3">Advanced</div>
  <div class="roadmap-step" data-step="4">Expert</div>
  <div class="roadmap-step" data-step="5">Capstone</div>
</div>

<div class="tip-banner">
  <span class="tip-badge">🎯 Strategy</span>
  <p><strong>Project Selection Hinglish Tip:</strong> Ek baar mein sab mat karo. Pehle 1–2 beginner projects banao confidence build karne ke liye. Phir intermediate mein koi ek solid project pick karo jo teri niche (web dev / backend / fullstack) ke closest ho. Advanced projects sirf tab uthao jab fundamentals strong ho jaye. Remember — <strong>quality > quantity</strong>. Ek accha project better hai 5 half-baked projects se!</p>
</div>



<div class="phase-section">
  <div class="phase-header">
    <h2>Beginner Projects</h2>
    <p>Foundation build karo — HTML, CSS, JS, PHP ke saath solid hands-on practice.</p>
  </div>
  <div class="phase-body">
    <div class="topic-grid">

<div class="topic-card">
  <h3>1. Portfolio Website</h3>
  <p>
    <span class="tag">HTML5</span>
    <span class="tag">CSS3</span>
    <span class="tag">JavaScript</span>
    <span class="tag">PHP</span>
  </p>
  <p><span class="tag tag-star">⭐⭐☆☆☆</span></p>
  <p>Responsive portfolio with About, Skills, Projects, Contact sections. Contact form with PHP backend, smooth scrolling, mobile-first approach, CSS animations and transitions.</p>
  <p><strong>Learning Outcomes:</strong> HTML5 semantic elements, advanced CSS styling, JavaScript DOM manipulation, basic PHP form handling, responsive design principles.</p>
  <p><strong>Implementation Steps:</strong> HTML structure + CSS styling → JS interactivity + animations → PHP contact form + deployment.</p>

```html
<!-- Portfolio — responsive grid with CSS Grid/Flexbox -->
<section class="projects">
  <div class="projects-grid">
    <div class="project-card" data-category="web">
      <img src="project1.jpg" alt="Project" loading="lazy">
      <h3>E-Commerce Platform</h3>
      <div class="project-links">
        <a href="#" class="btn">Live Demo</a>
        <a href="#" class="btn btn-outline">GitHub</a>
      </div>
    </div>
  </div>
</section>
```

```css
/* CSS Grid layout — responsive without media queries */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
```

```php
<?php
// Contact form handler — sanitization + validation + email
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    if ($name && $email && $message) {
        mail("you@example.com", "Portfolio Contact", $message, "From: $email");
        $response = ['status' => 'success', 'message' => 'Thanks!'];
    } else {
        $response = ['status' => 'error', 'message' => 'Invalid input'];
    }
    header('Content-Type: application/json');
    echo json_encode($response);
}
```
</div>

<div class="topic-card">
  <h3>2. Task Management System</h3>
  <p>
    <span class="tag">Vanilla JS</span>
    <span class="tag">LocalStorage</span>
  </p>
  <p><span class="tag tag-star">⭐⭐☆☆☆</span></p>
  <p>Add, edit, delete tasks with mark-as-complete. Filter tasks (all, active, completed), data persistence with localStorage, drag-and-drop, CSS animations.</p>
  <p><strong>Learning Outcomes:</strong> JS array methods and manipulation, event handling and delegation, browser storage APIs.</p>
</div>

<div class="topic-card">
  <h3>3. Weather Dashboard</h3>
  <p>
    <span class="tag">JavaScript</span>
    <span class="tag">REST API</span>
    <span class="tag">Chart.js</span>
  </p>
  <p><span class="tag tag-star">⭐⭐⭐☆☆</span></p>
  <p>Current weather display + 5-day forecast, search by city name, geolocation integration, weather charts and graphs, error handling and user feedback.</p>
  <p><strong>Learning Outcomes:</strong> API integration, async JavaScript, data visualization, browser geolocation API.</p>
</div>

    </div>
  </div>
</div>



<div class="phase-section">
  <div class="phase-header">
    <h2>Intermediate Projects</h2>
    <p>Database-driven applications, authentication, full-stack patterns.</p>
  </div>
  <div class="phase-body">
    <div class="topic-grid">

<div class="topic-card">
  <h3>1. E-commerce Platform</h3>
  <p>
    <span class="tag">PHP</span>
    <span class="tag">MySQL</span>
    <span class="tag">JavaScript</span>
    <span class="tag">Bootstrap</span>
  </p>
  <p><span class="tag tag-star">⭐⭐⭐☆☆</span></p>
  <p>Product catalog with categories, shopping cart, user registration and login, order management, admin panel for product management.</p>
  <p><strong>Learning Outcomes:</strong> Database design and normalization, PHP sessions and authentication, CRUD operations, SQL queries and relationships, security best practices.</p>
  <p><strong>Complete Database Schema:</strong></p>
  ```sql
  CREATE TABLE users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE categories (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(50) NOT NULL,
      description TEXT
  );

  CREATE TABLE products (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      description TEXT,
      price DECIMAL(10,2) NOT NULL,
      stock_quantity INT DEFAULT 0,
      category_id INT,
      image_url VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (category_id) REFERENCES categories(id)
  );

  CREATE TABLE orders (
      id INT PRIMARY KEY AUTO_INCREMENT,
      user_id INT NOT NULL,
      total_amount DECIMAL(10,2) NOT NULL,
      status ENUM('pending','processing','shipped','delivered') DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE order_items (
      id INT PRIMARY KEY AUTO_INCREMENT,
      order_id INT NOT NULL,
      product_id INT NOT NULL,
      quantity INT NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      FOREIGN KEY (order_id) REFERENCES orders(id),
      FOREIGN KEY (product_id) REFERENCES products(id)
  );
  ```

**API Routes Pattern:**
```
GET    /api/products          → List all products
GET    /api/products/{id}     → Single product detail
POST   /api/cart/add          → Add item to cart
GET    /api/cart              → View cart
POST   /api/orders            → Place order
GET    /api/orders/{id}       → Order status
POST   /api/auth/login        → User login
POST   /api/auth/register     → User registration
```
</div>

<div class="topic-card">
  <h3>2. Blog Management System</h3>
  <p>
    <span class="tag">Laravel</span>
    <span class="tag">MySQL</span>
    <span class="tag">Vue.js</span>
  </p>
  <p><span class="tag tag-star">⭐⭐⭐⭐☆</span></p>
  <p>Article creation with rich text editor, category and tag management, user authentication and roles, comment system, search functionality, SEO optimization.</p>
  <p><strong>Learning Outcomes:</strong> Laravel framework mastery, Eloquent ORM relationships, authentication and authorization, frontend-backend integration.</p>

**Eloquent Relationships:**
```php
// Post model — belongsTo + morphMany + belongsToMany
class Post extends Model {
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function comments() {
        return $this->morphMany(Comment::class, 'commentable');
    }
    public function tags() {
        return $this->belongsToMany(Tag::class);
    }
    public function category() {
        return $this->belongsTo(Category::class);
    }
}

// API Routes
Route::apiResource('posts', PostController::class);
Route::post('posts/{post}/comments', [CommentController::class, 'store']);
Route::get('posts/{post}/seo', [SeoController::class, 'analyze']);
```

**Controller Pattern:**
```php
class PostController extends Controller {
    public function index() {
        return Post::with(['user', 'category', 'tags'])
            ->latest()
            ->paginate(15);
    }

    public function store(StorePostRequest $request) {
        $post = auth()->user()->posts()->create($request->validated());

        if ($request->has('tags')) {
            $post->tags()->sync($request->tags);
        }

        return PostResource::make($post);
    }
}
```
</div>

<div class="topic-card">
  <h3>3. Social Media Dashboard</h3>
  <p>
    <span class="tag">Node.js</span>
    <span class="tag">Express</span>
    <span class="tag">MongoDB</span>
    <span class="tag">React</span>
  </p>
  <p><span class="tag tag-star">⭐⭐⭐⭐☆</span></p>
  <p>User profiles and friend system, post creation and interaction, real-time messaging, image upload and processing, activity feeds.</p>
  <p><strong>Learning Outcomes:</strong> Full-stack JavaScript development, NoSQL database design, real-time communication (WebSockets), RESTful API design.</p>

```javascript
// Express API with JWT auth
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email:    { type: String, unique: true, required: true },
    password: { type: String, required: true },
    friends:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    avatar:   { type: String, default: 'default.png' }
}, { timestamps: true });

// Auth middleware
const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (e) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Post route — with auth middleware
app.post('/api/posts', auth, async (req, res) => {
    const post = new Post({ ...req.body, user: req.user.id });
    await post.save();
    res.status(201).json(post);
});
```

**API Endpoints:**
```
POST   /api/auth/register    → Create account
POST   /api/auth/login       → Login → JWT token
GET    /api/users/me         → Profile
PUT    /api/users/me         → Update profile
GET    /api/posts            → Feed (paginated)
POST   /api/posts            → Create post
POST   /api/posts/{id}/like  → Toggle like
POST   /api/friends/request  → Send friend request
GET    /api/friends          → Friend list
WS     /ws/chat              → Real-time messaging
```
</div>

<div class="topic-card">
  <h3>4. Task Manager (Laravel)</h3>
  <p>
    <span class="tag">Laravel</span>
    <span class="tag">Livewire</span>
    <span class="tag">Alpine.js</span>
  </p>
  <p><span class="tag tag-star">⭐⭐⭐⭐☆</span></p>
  <p>Task CRUD with priorities and status, drag-drop kanban board, team collaboration features.</p>
  <p><strong>Learning Outcomes:</strong> Livewire/Alpine.js patterns, real-time UI updates, team collaboration patterns.</p>
</div>

    </div>
  </div>
</div>



<div class="phase-section">
  <div class="phase-header">
    <h2>Advanced Projects</h2>
    <p>Complex architecture, real-time systems, payments, caching, and deployment.</p>
  </div>
  <div class="phase-body">
    <div class="topic-grid">

<div class="topic-card">
  <h3>1. Learning Management System (LMS)</h3>
  <p>
    <span class="tag">Laravel</span>
    <span class="tag">Vue.js</span>
    <span class="tag">MySQL</span>
    <span class="tag">Redis</span>
  </p>
  <p><span class="tag tag-star">⭐⭐⭐⭐⭐</span></p>
  <p>Course creation and management, video streaming and progress tracking, quiz and assessment system, certificate generation, payment integration (Stripe), analytics dashboard.</p>
  <p><strong>Learning Outcomes:</strong> Complex system architecture, video processing and streaming, payment gateway integration, caching strategies with Redis.</p>
  <p><strong>Architecture:</strong></p>
  ```
  Frontend (Vue.js) → Backend (Laravel API) → Database (MySQL) → External (AWS S3, Stripe, SendGrid)
  ```
</div>

<div class="topic-card">
  <h3>2. Real-time Chat Application</h3>
  <p>
    <span class="tag">Node.js</span>
    <span class="tag">Socket.io</span>
    <span class="tag">React</span>
    <span class="tag">MongoDB</span>
  </p>
  <p><span class="tag tag-star">⭐⭐⭐⭐☆</span></p>
  <p>Real-time messaging, group chat rooms, file sharing, voice/video calling (WebRTC), message encryption, mobile responsive.</p>
  <p><strong>Learning Outcomes:</strong> WebSocket programming, real-time communication protocols, WebRTC for peer-to-peer, end-to-end encryption.</p>
</div>

<div class="topic-card">
  <h3>3. Expense Tracker with Analytics</h3>
  <p>
    <span class="tag">Python</span>
    <span class="tag">Django</span>
    <span class="tag">PostgreSQL</span>
    <span class="tag">Chart.js</span>
    <span class="tag">Docker</span>
  </p>
  <p><span class="tag tag-star">⭐⭐⭐⭐☆</span></p>
  <p>Expense categorization and tracking, budget planning and alerts, financial analytics and reports, multi-currency support, data export functionality.</p>
  <p><strong>Learning Outcomes:</strong> Django framework proficiency, data analysis and visualization, RESTful API development, containerization with Docker.</p>
</div>

    </div>
  </div>
</div>



<div class="phase-section">
  <div class="phase-header">
    <h2>Expert-Level Projects</h2>
    <p>Microservices, ML integration, distributed systems, DevOps.</p>
  </div>
  <div class="phase-body">
    <div class="topic-grid">

<div class="topic-card">
  <h3>1. Microservices E-commerce Platform</h3>
  <p>
    <span class="tag">Kubernetes</span>
    <span class="tag">Docker</span>
    <span class="tag">Node.js</span>
    <span class="tag">React</span>
    <span class="tag">PostgreSQL</span>
  </p>
  <p><span class="tag tag-star">⭐⭐⭐⭐⭐</span></p>
  <p><strong>Architecture:</strong></p>
  ```
  Frontend → API Gateway → Microservices (User, Product, Order, Payment, Notification, Inventory) → Databases (PostgreSQL, MongoDB, Redis)
  Infrastructure: Kubernetes + Docker + CI/CD + Prometheus/Grafana
  ```
  <p><strong>Learning Outcomes:</strong> Microservices architecture, container orchestration, service mesh implementation, distributed system challenges, DevOps practices.</p>
</div>

<div class="topic-card">
  <h3>2. AI-Powered Content Management</h3>
  <p>
    <span class="tag">Python</span>
    <span class="tag">TensorFlow</span>
    <span class="tag">FastAPI</span>
    <span class="tag">React</span>
    <span class="tag">PostgreSQL</span>
  </p>
  <p><span class="tag tag-star">⭐⭐⭐⭐⭐</span></p>
  <p>AI content generation (GPT-2 based), automatic content categorization, sentiment analysis (TextBlob), SEO optimization suggestions, image recognition and tagging (YOLO), multi-language support.</p>
  <p><strong>AI Components:</strong></p>
  ```python
  # Content Generation using transformers
  # Sentiment Analysis using TextBlob
  # Image Detection using OpenCV + YOLO
  ```
  <p><strong>Learning Outcomes:</strong> Machine learning integration, AI model deployment, natural language processing, computer vision applications.</p>
</div>

    </div>
  </div>
</div>



<div class="phase-section">
  <div class="phase-header">
    <h2>Capstone: Jira Clone <span class="tag tag-hot">Portfolio Centerpiece</span></h2>
    <p>Ultimate project jo sab kuch ek saath dikhata hai.</p>
  </div>
  <div class="phase-body">
    <p><strong>Features:</strong> Project management, sprints, issues. User stories, backlog, kanban. Auth, permissions, notifications. Real-time updates with broadcasting.</p>
  </div>
</div>



<div class="phase-section">
  <div class="phase-header">
    <h2>Already Built Projects</h2>
  </div>
  <div class="phase-body">
    <div class="topic-grid">

<div class="topic-card">
  <h3>ApexERP</h3>
  <p>Enterprise resource planning system</p>
</div>

<div class="topic-card">
  <h3>Purvanchal Flow Studio</h3>
  <p>Workflow automation</p>
</div>

<div class="topic-card">
  <h3>Document AI</h3>
  <p>AI-powered document processing</p>
</div>

    </div>

    <h3>Developer Life Platform</h3>
    <p>Yeh ek complete Laravel platform hai:</p>
    <ul>
      <li>Agent-based architecture</li>
      <li>Desktop agent, mobile agent</li>
      <li>AI teacher integration</li>
      <li>Multi-tenant setup</li>
    </ul>
  </div>
</div>



<div class="phase-section">
  <div class="phase-header">
    <h2>Code Quality Standards</h2>
  </div>
  <div class="phase-body">
    <ol>
      <li><strong>Clean Code</strong> — meaningful names, consistent formatting, DRY principle</li>
      <li><strong>Version Control</strong> — Git repo har project ka, meaningful commits, feature branch workflow, README</li>
      <li><strong>Testing</strong> — unit tests core functionality ke liye, integration tests APIs ke, E2E for user flows</li>
    </ol>
  </div>
</div>



<div class="phase-section">
  <div class="phase-header">
    <h2>Documentation Requirements</h2>
  </div>
  <div class="phase-body">
    <ul>
      <li><strong>README</strong> — description, setup instructions, usage examples, tech stack, screenshots</li>
      <li><strong>Code docs</strong> — inline comments complex logic ke liye, API docs, DB schema, deployment guides</li>
    </ul>
  </div>
</div>



<div class="phase-section">
  <div class="phase-header">
    <h2>Deployment Strategy</h2>
  </div>
  <div class="phase-body">
    <ul>
      <li><strong>Local</strong>: Dev environment setup, local DB config, env variables management</li>
      <li><strong>Production</strong>: Cloud hosting (AWS/GCP/Heroku), domain + SSL, performance optimization, monitoring/logging</li>
    </ul>
  </div>
</div>



<div class="phase-section">
  <div class="phase-header">
    <h2>Project Assessment Criteria</h2>
  </div>
  <div class="phase-body">
    <table class="table-dash">
      <thead>
        <tr>
          <th>Criterion</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Technical Implementation (code quality, tech usage, performance, security)</td>
          <td>40%</td>
        </tr>
        <tr>
          <td>Features and Functionality (completeness, UX, error handling)</td>
          <td>30%</td>
        </tr>
        <tr>
          <td>Documentation and Presentation (README, demo readiness)</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Innovation and Problem-Solving (creative solutions, extra features)</td>
          <td>10%</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

### Big Tech Projects — FAANG-Level Portfolio

<div class="tip-banner">
  <span class="tip-badge">🚀 IMPACT MATTERS</span>
  Big tech companies <strong>impact dekhte hain</strong> — kitne users handle kar sakta hai, kaise scale karega, real-world problem solve karta hai ya nahi. Ye projects resume mein <strong>differentiator</strong> hain.
</div>

<div class="topic-grid">
  <div class="topic-card">
    <h4>🏪 Distributed URL Shortener</h4>
    <p><strong>Stack:</strong> Laravel + Redis + MySQL + Queue Workers</p>
    <p>Bit.ly clone but distributed. Base62 encoding, Redis caching, read replicas, rate limiting. Handle 10K QPS.</p>
    <div class="topic-meta">
      <span class="level-badge level-badge-hard">SCALABLE</span>
      <span class="tag tag-hot">System Design</span>
    </div>
  </div>
  <div class="topic-card">
    <h4>📊 Real-Time Analytics Dashboard</h4>
    <p><strong>Stack:</strong> Laravel + WebSockets + Redis + Chart.js</p>
    <p>Real-time user analytics with event streaming, live updates, aggregation pipelines, data visualization.</p>
    <div class="topic-meta">
      <span class="level-badge level-badge-hard">REAL-TIME</span>
      <span class="tag tag-star">Full Stack</span>
    </div>
  </div>
  <div class="topic-card">
    <h4>🛒 Multi-Tenant E-Commerce Platform</h4>
    <p><strong>Stack:</strong> Laravel + PostgreSQL + Redis + Docker</p>
    <p>Amazon-style platform with multi-tenancy, microservices, API gateway, caching layer, queue jobs.</p>
    <div class="topic-meta">
      <span class="level-badge level-badge-hard">ARCHITECTURE</span>
      <span class="tag tag-method">FAANG Level</span>
    </div>
  </div>
  <div class="topic-card">
    <h4>💬 Real-Time Chat (WhatsApp Clone)</h4>
    <p><strong>Stack:</strong> Laravel Reverb + WebSockets + Redis</p>
    <p>Typing indicators, read receipts, group chats, message queues, horizontal scaling.</p>
    <div class="topic-meta">
      <span class="level-badge level-badge-medium">REAL-TIME</span>
      <span class="tag tag-hot">WebSockets</span>
    </div>
  </div>
  <div class="topic-card">
    <h4>📝 Collaborative Document Editor</h4>
    <p><strong>Stack:</strong> Laravel + TipTap + WebSockets + CRDT</p>
    <p>Google Docs clone. CRDT for conflict resolution, real-time sync, version history.</p>
    <div class="topic-meta">
      <span class="level-badge level-badge-hard">DISTRIBUTED</span>
      <span class="tag tag-star">CRDT</span>
    </div>
  </div>
  <div class="topic-card">
    <h4>🐳 Microservices + API Gateway</h4>
    <p><strong>Stack:</strong> Laravel multi-service + RabbitMQ + Docker + K8s</p>
    <p>User/order/payment/notification services. API Gateway, rate limiting, service discovery.</p>
    <div class="topic-meta">
      <span class="level-badge level-badge-hard">MICROSERVICES</span>
      <span class="tag tag-method">K8s</span>
    </div>
  </div>
</div>

<div class="tip-banner">
  <span class="tip-badge">💡 RESUME TIP</span>
  Har project ke liye <strong>metrics likho</strong>. "Built a URL shortener" nahi — "Built a distributed URL shortener handling <strong>10K+ QPS</strong> with 99.9% uptime using Laravel + Redis caching, <strong>60% latency reduction</strong>".
</div>

### Implementation Patterns — FAANG-Level

```php
// URL Shortener — Base62 encoding + Redis cache
class UrlShortenerService {
    public function __construct(
        private readonly Redis $redis,
        private readonly UrlRepository $repository
    ) {}

    public function encode(string $originalUrl): string {
        $hash = $this->repository->findHashByUrl($originalUrl);
        if ($hash) return $hash;

        $id = $this->repository->nextId();
        $hash = $this->base62Encode($id);

        // Cache aggressively — 60% latency reduction ka source
        $this->redis->setex("url:$hash", 86400, $originalUrl);
        $this->repository->save(['id' => $id, 'hash' => $hash, 'url' => $originalUrl]);

        return $hash;
    }

    public function decode(string $hash): ?string {
        // Redis first, DB second — cache-aside pattern
        return $this->redis->get("url:$hash")
            ?? $this->repository->findUrlByHash($hash);
    }

    private function base62Encode(int $id): string {
        $chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $hash = '';
        while ($id > 0) {
            $hash = $chars[$id % 62] . $hash;
            $id = intdiv($id, 62);
        }
        return $hash ?: '0';
    }
}
```

```php
// Rate Limiting Middleware — prevent abuse, handle 10K QPS
class RateLimitMiddleware {
    public function handle(Request $request, Closure $next, int $maxAttempts = 60): Response {
        $key = 'rate_limit:' . $request->ip();

        $current = (int) Cache::increment($key);

        if ($current === 1) {
            Cache::expire($key, 60); // 1-minute window
        }

        if ($current > $maxAttempts) {
            return response()->json([
                'error' => 'Too many requests',
                'retry_after' => Cache::ttl($key)
            ], 429);
        }

        return $next($request);
    }
}
```

```javascript
// Collaborative Editing — CRDT-based conflict resolution
const { createDocument, modifyText } = require('automerge');

class CollaborativeEditor {
    constructor(docId) {
        this.doc = createDocument();
        this.docId = docId;
        this.clients = new Map();
    }

    applyOperation(clientId, operation) {
        // CRDT ensures convergence without central coordinator
        this.doc = modifyText(this.doc, operation.path, (text) => {
            text.insertAt(operation.pos, ...operation.chars);
        });

        // Broadcast to all other clients
        this.broadcast(clientId, operation);
    }
}
```

### System Design Patterns for FAANG Projects

| Pattern | Description | Project |
|---------|-------------|---------|
| **CQRS** | Separate read/write models | Analytics Dashboard |
| **Event Sourcing** | State changes as events | Order Processing |
| **Cache-Aside** | Lazy loading + TTL | URL Shortener |
| **Pub/Sub** | Async event distribution | Real-time Chat |
| **Saga** | Distributed transaction | Microservices E-commerce |
| **Bulkhead** | Isolate failures per service | Microservices |
| **Circuit Breaker** | Fail fast on service down | API Gateway |
| **Rate Limiting** | Token bucket / sliding window | All public APIs |

### Resume Metrics Template

```
• Built a distributed URL shortener handling 10K+ QPS with 99.9% uptime
• Reduced API response time by 60% via Redis caching and query optimization
• Architected microservices platform with 6 services, handling 50K+ daily users
• Implemented real-time chat supporting 1K+ concurrent connections via WebSockets
• Designed database schema supporting 100K+ products with <50ms query time
• Deployed CI/CD pipeline reducing deployment time from 2hrs to 15mins
• Achieved 95% test coverage with automated testing suite
• Containerized application reducing environment setup time by 80%
```

</div>
</div>

<div class="phase-section">
  <div class="phase-header">
    <h2>Portfolio Presentation Tips</h2>
  </div>
  <div class="phase-body">

### Demo Preparation
- Talking points har feature ke liye rakh
- Smooth navigation practice kar
- Backup plan rakh technical issues ke liye
- Demo 5–10 minute ka rak

### Interview Talking Points
- **Technology Choices**: Kyon choose kiye specific tech, trade-offs kya the
- **Scaling Considerations**: Kaise scale karega, performance bottlenecks kya hain
- **Team Collaboration**: Kaise kaam karega team mein, code review process kya hoga

  </div>
</div>



<div class="phase-section">
  <div class="phase-header">
    <h2>Project Portfolio Checklist</h2>
  </div>
  <div class="phase-body">
    <ul>
      <li><input type="checkbox" disabled /> Beginner project (portfolio/to-do/weather) banaya</li>
      <li><input type="checkbox" disabled /> E-commerce ya Blog CMS banaya</li>
      <li><input type="checkbox" disabled /> Task Manager ya Social Dashboard banaya</li>
      <li><input type="checkbox" disabled /> Ek advanced project (LMS/Chat/Microservices) kiya</li>
      <li><input type="checkbox" disabled /> Jira Clone capstone project shuru kiya</li>
      <li><input type="checkbox" disabled /> Sabhi projects GitHub pe push kiye</li>
      <li><input type="checkbox" disabled /> Developer_Life_Platform ka code samjha</li>
      <li><input type="checkbox" disabled /> Projects ke live demos deploy kiye</li>
      <li><input type="checkbox" disabled /> Har project ka README.md likha</li>
      <li><input type="checkbox" disabled /> Har project ke liye talking points ready</li>
    </ul>
  </div>
</div>

---

## 📂 Original Deep Content

The complete projects guide:

- [Projects Portfolio Guide](../original/07-Projects/Project-Portfolio.md)

---

## Notes

<div id="page-notes"></div>
