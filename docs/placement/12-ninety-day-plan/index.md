
<div class="module-hero">
  <div class="module-hero-icon">📚</div>
  <div class="module-hero-body">
    <h1>Placement Curriculum — Chapter Index</h1>
    <p>Poore placement ka syllabus, chapter-wise organized. Har chapter mein concepts, code examples, practice problems, aur source references hain. Sequentially padhte ja — har chapter previous chapter pe build karta hai.</p>
    <div class="module-hero-meta">
      <span class="tag tag-hot">5 Phases</span>
      <span class="tag tag-star">14 Chapters</span>
      <span class="tag tag-method">Topic-Based</span>
    </div>
  </div>
</div>

---

## Phase 1 — Programming & DSA Foundation  

Placement ka sabse important phase. Java + DSA ka solid foundation banega yahan. Har concept ko code ke saath practice karo — theory sirf 30% hai, baaki 70% coding hai.

---

### Chapter 1: Programming Fundamentals — Java

**Java placement prep ki primary language hai.** Isliye Java core concepts strong hone chahiye — OOP, Collections, Multithreading sabse zyada puchhe jaate hain.

#### 1.1 Setup & Syntax

```java
// Basic Java structure
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

**Key points:**
- `public static void main` — entry point (JVM isi ko dhundhti hai)
- `System.out.println()` — console output
- File name must match class name (case-sensitive)

#### 1.2 Data Types

| Type | Size | Range | Default |
|------|------|-------|---------|
| `byte` | 8-bit | -128 to 127 | 0 |
| `short` | 16-bit | -32,768 to 32,767 | 0 |
| `int` | 32-bit | -2³¹ to 2³¹-1 | 0 |
| `long` | 64-bit | -2⁶³ to 2⁶³-1 | 0L |
| `float` | 32-bit | ±3.4E+38 | 0.0f |
| `double` | 64-bit | ±1.7E+308 | 0.0d |
| `char` | 16-bit | Unicode | '\u0000' |
| `boolean` | 1-bit | true/false | false |

**Interview tip:** `==` vs `equals()` — Primitive types mein `==` value compare karta hai. Objects mein `==` reference compare karta hai, `equals()` content compare karta hai (agar override kiya ho).

```java
String s1 = "Hello";              // String pool
String s2 = new String("Hello");  // Heap
s1 == s2            // false — different references
s1.equals(s2)       // true — same content
```

#### 1.3 Control Flow

```java
// if-else
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else {
    grade = 'C';
}

// switch (Java 14+ me arrow syntax bhi hai)
switch (day) {
    case 1 -> System.out.println("Monday");
    case 2 -> System.out.println("Tuesday");
    default -> System.out.println("Invalid");
}

// loops
for (int i = 0; i < n; i++) { }         // for loop
for (int x : arr) { }                     // enhanced for
while (condition) { }                     // while
do { } while (condition);                // do-while
```

#### 1.4 OOP — 4 Pillars

**Encapsulation:** Data hiding — `private` fields + public getters/setters
```java
public class Student {
    private String name;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
```

**Inheritance:** Code reuse — `extends` keyword
```java
class Animal { void eat() { } }
class Dog extends Animal { void bark() { } }
// Dog can access both eat() and bark()
```

**Polymorphism:** Same method, different behavior
```java
// Compile-time (overloading)
class Calc {
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}

// Run-time (overriding)
Animal a = new Dog();
a.eat();  // Dog's eat() runs — method resolution at runtime
```

**Abstraction:** Hide implementation details
```java
abstract class Vehicle { abstract void start(); }
interface Drivable { void drive(); }
```

**Interview Must-Know:**
- Diamond problem — Java interfaces se solve karta hai (multiple inheritance allowed via interfaces)
- `super` keyword — parent class constructor/method call
- `final` keyword — class (can't inherit), method (can't override), variable (constant)

#### 1.5 Exception Handling

```java
try {
    int result = 10 / 0;  // ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
} finally {
    System.out.println("Always executes");
}

// try-with-resources (Java 7+)
try (Scanner sc = new Scanner(System.in)) {
    String input = sc.nextLine();
} // Auto-closes scanner
```

#### 1.6 Collections Framework

```
Collection
├── List (ArrayList, LinkedList, Vector)
├── Set (HashSet, LinkedHashSet, TreeSet)
└── Queue (PriorityQueue, Deque)
Map (HashMap, LinkedHashMap, TreeMap, ConcurrentHashMap)
```

**HashMap internal working — FAANG must-know:**
1. Array of buckets (Node<K,V>[])
2. `hashCode()` determines bucket index
3. Collision resolved via linked list / tree (Java 8+, if >8 entries)
4. `equals()` checks key equality within bucket
5. Initial capacity: 16, Load factor: 0.75

```java
Map<String, Integer> map = new HashMap<>();
map.put("Alice", 95);                   // O(1) average
int score = map.getOrDefault("Bob", 0); // O(1) average
for (Map.Entry<String, Integer> e : map.entrySet()) {
    System.out.println(e.getKey() + ": " + e.getValue());
}
```

**Comparable vs Comparator:**
```java
// Comparable — natural ordering (inside class)
class Student implements Comparable<Student> {
    int age;
    public int compareTo(Student o) { return this.age - o.age; }
}

// Comparator — custom ordering (outside class)
Comparator<Student> byName = (a, b) -> a.name.compareTo(b.name);
Collections.sort(list, byName);
```

#### 1.7 Multithreading

```java
// Approach 1: extends Thread
class MyThread extends Thread {
    public void run() { System.out.println("Running"); }
}
new MyThread().start();

// Approach 2: implements Runnable (preferred — more flexible)
class MyRunnable implements Runnable {
    public void run() { System.out.println("Running"); }
}
new Thread(new MyRunnable()).start();

// ExecutorService (production-ready)
ExecutorService executor = Executors.newFixedThreadPool(10);
executor.submit(() -> System.out.println("Task"));
executor.shutdown();
```

**Key concepts:** `synchronized`, `volatile`, `wait()/notify()`, `ReentrantLock`, `ConcurrentHashMap`

**Practice Programs:** Calculator, Student Management System, Vehicle Hierarchy, Pattern Programs (Pyramid, Diamond, Floyd's)
**LeetCode:** Two Sum (#1), Palindrome Number (#9), Roman to Integer (#13)

**Reference:** `Day-01/` through `Day-07/` for daily study plans + `03-programming` module

---

### Chapter 2: Data Structures & Algorithms

**Placement ka make-or-break topic.** 60-70% interview questions DSA se aate hain. Har topic ka pattern samjho, ratte mat lagao.

#### 2.1 Arrays

```java
// Two Pointer — sorted array
int i = 0, j = arr.length - 1;
while (i < j) {
    int sum = arr[i] + arr[j];
    if (sum == target) return new int[]{i, j};
    else if (sum < target) i++;
    else j--;
}

// Sliding Window — subarray problems
int windowSum = 0, maxSum = 0;
for (int i = 0; i < k; i++) windowSum += arr[i];
for (int i = k; i < n; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
}

// Kadane's Algorithm — maximum subarray sum
int maxEndingHere = arr[0], maxSoFar = arr[0];
for (int i = 1; i < n; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
}
```

#### 2.2 Linked Lists

```java
// Fast & Slow Pointer — cycle detection, middle element
ListNode slow = head, fast = head;
while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
}
// slow is at middle, or meeting point for cycle

// Reverse a linked list
ListNode prev = null, curr = head;
while (curr != null) {
    ListNode next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
}
return prev;
```

#### 2.3 Stacks & Queues

```java
// Monotonic Stack — next greater element
Stack<Integer> stack = new Stack<>();
int[] result = new int[n];
for (int i = n - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.peek() <= arr[i]) stack.pop();
    result[i] = stack.isEmpty() ? -1 : stack.peek();
    stack.push(arr[i]);
}

// Queue using Stack — two stacks approach
class MyQueue {
    Stack<Integer> in = new Stack<>(), out = new Stack<>();
    void push(int x) { in.push(x); }
    int pop() {
        if (out.isEmpty()) while (!in.isEmpty()) out.push(in.pop());
        return out.pop();
    }
}
```

#### 2.4 Trees

```java
// Binary Tree Traversals
// Inorder: Left → Root → Right
void inorder(TreeNode root) {
    if (root == null) return;
    inorder(root.left);
    System.out.print(root.val);
    inorder(root.right);
}

// Level Order (BFS)
Queue<TreeNode> q = new LinkedList<>();
q.offer(root);
while (!q.isEmpty()) {
    int size = q.size();
    for (int i = 0; i < size; i++) {
        TreeNode node = q.poll();
        if (node.left != null) q.offer(node.left);
        if (node.right != null) q.offer(node.right);
    }
}

// Lowest Common Ancestor (BST)
TreeNode lca(TreeNode root, TreeNode p, TreeNode q) {
    if (root.val > p.val && root.val > q.val) return lca(root.left, p, q);
    if (root.val < p.val && root.val < q.val) return lca(root.right, p, q);
    return root;
}
```

#### 2.5 Graphs

```java
// BFS — shortest path in unweighted graph
Queue<Integer> q = new LinkedList<>();
boolean[] visited = new boolean[n];
q.offer(start); visited[start] = true;
while (!q.isEmpty()) {
    int node = q.poll();
    for (int neighbor : graph[node]) {
        if (!visited[neighbor]) {
            visited[neighbor] = true;
            q.offer(neighbor);
        }
    }
}

// DFS (iterative)
Stack<Integer> stack = new Stack<>();
stack.push(start);
while (!stack.isEmpty()) {
    int node = stack.pop();
    if (!visited[node]) {
        visited[node] = true;
        for (int neighbor : graph[node]) stack.push(neighbor);
    }
}

// Topological Sort (Kahn's Algorithm)
int[] inDegree = new int[n];
for (int i = 0; i < n; i++)
    for (int neighbor : graph[i]) inDegree[neighbor]++;
Queue<Integer> q = new LinkedList<>();
for (int i = 0; i < n; i++) if (inDegree[i] == 0) q.offer(i);

// Dijkstra's Algorithm (shortest path)
PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[1]-b[1]);
int[] dist = new int[n]; Arrays.fill(dist, Integer.MAX_VALUE);
dist[start] = 0; pq.offer(new int[]{start, 0});
while (!pq.isEmpty()) {
    int[] curr = pq.poll();
    if (curr[1] > dist[curr[0]]) continue;
    for (int[] edge : graph[curr[0]]) {
        int newDist = curr[1] + edge[1];
        if (newDist < dist[edge[0]]) {
            dist[edge[0]] = newDist;
            pq.offer(new int[]{edge[0], newDist});
        }
    }
}
```

#### 2.6 Dynamic Programming

DP kaafi interviews mein aata hai. Master karne ke liye patterns samjho.

**Pattern 1 — Fibonacci (1D DP):**
```java
int fib(int n) {
    if (n <= 1) return n;
    int[] dp = new int[n + 1];
    dp[0] = 0; dp[1] = 1;
    for (int i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];
    return dp[n];
}
// Space optimized: O(1) using two variables
```

**Pattern 2 — 0/1 Knapsack (2D DP):**
```java
int knapSack(int W, int[] wt, int[] val, int n) {
    int[][] dp = new int[n+1][W+1];
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= W; w++) {
            if (wt[i-1] <= w)
                dp[i][w] = Math.max(val[i-1] + dp[i-1][w-wt[i-1]], dp[i-1][w]);
            else
                dp[i][w] = dp[i-1][w];
        }
    }
    return dp[n][W];
}
```

**Pattern 3 — LCS (Longest Common Subsequence):**
```java
int lcs(String text1, String text2) {
    int m = text1.length(), n = text2.length();
    int[][] dp = new int[m+1][n+1];
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1.charAt(i-1) == text2.charAt(j-1))
                dp[i][j] = 1 + dp[i-1][j-1];
            else
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][n];
}
```

#### 2.7 Sorting & Searching

| Algorithm | Time (Avg) | Time (Worst) | Space | Stable |
|-----------|-----------|-------------|-------|--------|
| Bubble | O(n²) | O(n²) | O(1) | Yes |
| Selection | O(n²) | O(n²) | O(1) | No |
| Insertion | O(n²) | O(n²) | O(1) | Yes |
| Merge | O(n log n) | O(n log n) | O(n) | Yes |
| Quick | O(n log n) | O(n²) | O(log n) | No |
| Heap | O(n log n) | O(n log n) | O(1) | No |

**Binary Search — most important searching technique:**
```java
int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;  // avoids overflow
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

**Total DSA Practice:** 150+ problems across all patterns
**Source:** `Day-08/` through `Day-28/` for daily DSA study plans + `02-cs-core` module

---

## Phase 2 — Core Computer Science

Theory-heavy phase. Har subject ke core concepts strong karo — interviewers CS fundamentals boht test karte hain.

---

### Chapter 3: Computer Networks

#### 3.1 OSI & TCP/IP Model

```
OSI Model:                TCP/IP Model:
7. Application        ┐
6. Presentation       ├── Application Layer
5. Session            ┘
4. Transport      ──── Transport Layer (TCP/UDP)
3. Network       ──── Internet Layer (IP)
2. Data Link     ─┐
1. Physical      ─┴── Network Access Layer
```

**Encapsulation:** Data → Segment → Packet → Frame → Bits
**Interview tip:** OSI ke 7 layers yaad rakho — "Please Do Not Throw Sausage Pizza Away"

#### 3.2 TCP vs UDP

| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | Connection-oriented | Connectionless |
| Reliability | Guaranteed delivery | No guarantee |
| Ordering | In-order delivery | No ordering |
| Speed | Slower (acknowledgments) | Faster |
| Use Case | HTTP, FTP, Email (Web, SMTP) | DNS, VoIP, Video streaming |

**3-way Handshake:** SYN → SYN-ACK → ACK
**Flow Control:** Sliding Window Protocol
**Congestion Control:** Slow Start, Congestion Avoidance, Fast Retransmit

#### 3.3 HTTP & Application Layer

```http
GET /api/users HTTP/1.1
Host: example.com
Authorization: Bearer <token>
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json
{
    "id": 1,
    "name": "John"
}
```

**Status Codes:** 1xx (Info), 2xx (Success), 3xx (Redirect), 4xx (Client Error), 5xx (Server Error)
**Key codes:** 200 OK, 201 Created, 301 Moved, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error

**DNS Resolution:** Browser → Cache → Recursive Resolver → Root → TLD → Authoritative → IP

**Reference:** `02-cs-core` — Computer Networks section + `Day-31/` to `Day-37/`

---

### Chapter 4: Database Management Systems

#### 4.1 SQL Essentials

```sql
-- DDL (Data Definition Language)
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- DML (Data Manipulation Language)
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
SELECT * FROM users WHERE email LIKE '%example.com';
UPDATE users SET name = 'Bob' WHERE id = 1;
DELETE FROM users WHERE id = 1;

-- Joins — interview must
SELECT u.name, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN: All users even if no orders
-- RIGHT JOIN: All orders even if no user
-- FULL OUTER JOIN: All records from both (MySQL doesn't support directly)

-- Aggregation
SELECT user_id, COUNT(*) as order_count, SUM(total) as total_spent
FROM orders
GROUP BY user_id
HAVING COUNT(*) > 5
ORDER BY total_spent DESC;
```

#### 4.2 Normalization

| Form | Rule | Violation Example |
|------|------|-------------------|
| 1NF | Atomic columns | Column with multiple phone numbers |
| 2NF | 1NF + no partial dependency | Order table with product name (depends on product, not order) |
| 3NF | 2NF + no transitive dependency | Employee table with department location (depends on dept, not emp) |
| BCNF | 3NF + every determinant is a candidate key | |

#### 4.3 Transactions (ACID)

- **Atomicity:** All or nothing
- **Consistency:** Data remains valid
- **Isolation:** Concurrent transactions don't interfere
- **Durability:** Committed data persists

**Isolation Levels:** Read Uncommitted → Read Committed → Repeatable Read → Serializable
**Problem:** Dirty Read, Non-repeatable Read, Phantom Read

```sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT; -- or ROLLBACK;
```

#### 4.4 Indexing

```sql
-- B-Tree index (default, for general use)
CREATE INDEX idx_email ON users(email);

-- Composite index (column order matters)
CREATE INDEX idx_name_email ON users(name, email);

-- EXPLAIN to check query plan
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';
```

**Reference:** `02-cs-core` — DBMS section + `Day-38/` to `Day-44/`

---

### Chapter 5: Operating Systems

#### 5.1 Process Management

**Process states:** New → Ready → Running → Waiting → Terminated
**Context switch:** OS saves process state, loads next process — overhead hai, minimize karo

**CPU Scheduling:**
| Algorithm | Type | Starvation | Complexity |
|-----------|------|-----------|------------|
| FCFS | Non-preemptive | No | Simple |
| SJF | Non-preemptive | Yes (long processes) | Optimal avg wait |
| Round Robin | Preemptive | No | Time quantum critical |
| Priority | Both | Yes (low priority) | Priority inversion |

#### 5.2 Memory Management

**Paging:** Fixed-size pages (4KB typically). Logical address → Page Table → Physical address
**Virtual Memory:** Program sochta hai uske paas saara memory hai — actually disk pe page files hain
**Page Replacement:** FIFO, LRU (most used), Optimal (theoretical)

#### 5.3 Concurrency

```java
// Mutex — mutual exclusion (binary semaphore)
synchronized(sharedObject) {
    // critical section
}

// Semaphore — permit-based access
Semaphore sem = new Semaphore(3); // 3 threads at a time
sem.acquire();
// access shared resource
sem.release();

// Deadlock — four conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait
// Prevention: Break any one condition
```

**Reference:** `02-cs-core` — OS section + `Day-52/` to `Day-53/`

---

## Phase 3 — Web Development

Full-stack banne ke liye. Frontend (HTML/CSS/JS) + Backend (PHP/Laravel) — yeh combination placement mein sabse zyada demand mein hai.

---

### Chapter 6: Frontend — HTML, CSS, JavaScript

#### 6.1 HTML5

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="hero">
            <h1>Welcome to My Portfolio</h1>
        </section>
        <article>
            <h2>Project Title</h2>
            <time datetime="2025-01-01">Jan 1, 2025</time>
        </article>
    </main>
    <footer>&copy; 2025 My Portfolio</footer>
</body>
</html>
```

#### 6.2 CSS3

```css
/* Flexbox — one-dimensional layout */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

/* Grid — two-dimensional layout */
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

/* Responsive Design — Media Queries */
@media (max-width: 768px) {
    .grid { grid-template-columns: 1fr; }
}

/* CSS Variables */
:root {
    --primary: #3498db;
    --text: #333;
}
body { color: var(--text); }
```

#### 6.3 JavaScript (ES6+)

```javascript
// ES6+ features — interview must
const arr = [1, 2, 3, 4, 5];
const doubled = arr.map(x => x * 2);           // [2, 4, 6, 8, 10]
const evens = arr.filter(x => x % 2 === 0);     // [2, 4]
const sum = arr.reduce((acc, x) => acc + x, 0); // 15

// Promise & Async/Await
async function fetchData() {
    try {
        const response = await fetch('/api/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch:', error);
    }
}

// DOM Manipulation
document.querySelector('.btn').addEventListener('click', (e) => {
    e.target.classList.toggle('active');
});
```

**Reference:** `04-web-dev` module + `Web-Development-Complete.md`

---

### Chapter 7: Backend — PHP + Laravel

**Primary stack for placement.** Laravel's demand high hai in Indian product companies.

#### 7.1 PHP Basics

```php
<?php
// Variables, arrays, functions
$name = "John";
$users = ["Alice", "Bob", "Charlie"];
foreach ($users as $user) {
    echo "Hello, $user!";
}

// OOP in PHP
class User {
    private string $name;
    public function __construct(string $name) {
        $this->name = $name;
    }
    public function greet(): string {
        return "Hello, {$this->name}!";
    }
}

// PDO — Database connection
$pdo = new PDO("mysql:host=localhost;dbname=test", "root", "");
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$id]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);
?>
```

#### 7.2 Laravel Framework

```bash
# Installation
composer create-project laravel/laravel my-app

# Key Artisan Commands
php artisan serve                    # Start dev server
php artisan make:model User -m       # Model + Migration
php artisan make:controller UserController --resource
php artisan migrate                  # Run migrations
php artisan tinker                   # Interactive shell
```

```php
// Routes (routes/web.php)
Route::get('/users', [UserController::class, 'index']);
Route::resource('/posts', PostController::class);

// Controller
class UserController extends Controller {
    public function index() {
        return User::with('posts')->paginate(20);
    }
    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users'
        ]);
        return User::create($validated);
    }
}

// Eloquent ORM
$users = User::where('active', true)
    ->whereHas('posts', fn($q) => $q->where('published', true))
    ->withCount('comments')
    ->orderBy('name')
    ->paginate(15);

// Blade Template
@foreach($users as $user)
    <div>{{ $user->name }}</div>
@endforeach
```

**Laravel Interview Topics:** Service-Repository pattern, SOLID in Laravel, Facade vs DI, Eloquent vs Query Builder, N+1 problem, Middleware types, Events vs Listeners, Queue drivers

**Reference:** `04-web-dev` module + PHP + Laravel syllabus files

---

### Chapter 8: Additional Languages — Java & Python

**Java** — OOP, Collections, Multithreading (covered in Chapter 1)
**Python** — Scripting, automation, data processing for ML

```python
# Python basics
def process_data(data):
    """Process list of numbers"""
    return [x * 2 for x in data if x > 0]

# Lambda
sorted(list, key=lambda x: x['age'])

# File I/O
with open('data.txt', 'r') as f:
    content = f.read()
```

**Reference:** `03-programming` module

---

## Phase 4 — Advanced Topics

Ye topics tujhe average candidates se alag karenge. System design senior roles ke liye must hai, AI/ML emerging trend hai.

---

### Chapter 9: System Design

#### 9.1 Fundamentals

| Concept | Explanation |
|---------|-------------|
| CAP Theorem | Consistency, Availability, Partition Tolerance — pick 2 |
| ACID vs BASE | RDBMS (ACID) vs NoSQL (BASE) |
| Latency vs Throughput | Latency = response time, Throughput = requests/sec |
| Vertical vs Horizontal | Scale up (bigger machine) vs Scale out (more machines) |

#### 9.2 Building Blocks

```java
// Caching pattern
public class CacheService {
    private final RedisTemplate<String, Object> redis;
    private static final long TTL = 3600; // 1 hour

    public User getUser(Long id) {
        String key = "user:" + id;
        User cached = (User) redis.opsForValue().get(key);
        if (cached != null) return cached;

        User user = userRepository.findById(id);  // DB hit
        redis.opsForValue().set(key, user, TTL, TimeUnit.SECONDS);
        return user;
    }
}
```

**Key concepts:** Load Balancer (Round Robin, Least Connections), CDN (static assets), Message Queue (RabbitMQ, Kafka), Database Indexing, Sharding, Replication

#### 9.3 Design Problems Practice

| Problem | Key Focus |
|---------|-----------|
| URL Shortener (TinyURL) | Hash generation, redirect, analytics |
| WhatsApp | Real-time messaging,Online status, End-to-end encryption |
| Twitter | Fan-out, Timeline generation, Hashtag search |
| Uber | Location service, Ride matching, Real-time tracking |
| Netflix | Video streaming, CDN, Recommendation |

**Framework to use:** Requirements → Estimation → Data Model → High-Level Design → Deep Dive → Trade-offs

**Reference:** `10-system-design` module (10 chapters, 61+ files)

---

### Chapter 10: AI & Machine Learning

#### 10.1 Python for ML

```python
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load & prepare data
df = pd.read_csv('data.csv')
X = df.drop('target', axis=1)
y = df['target']

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Predict & evaluate
predictions = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, predictions):.2f}")
```

#### 10.2 ML Algorithms Overview

| Algorithm | Type | Use Case |
|-----------|------|----------|
| Linear Regression | Regression | Price prediction |
| Logistic Regression | Classification | Spam detection |
| Decision Trees | Both | Customer segmentation |
| Random Forest | Both | Higher accuracy than single tree |
| SVM | Classification | Image classification |
| K-Means | Clustering | Customer grouping |
| Neural Networks | Deep Learning | Complex patterns |

#### 10.3 Agentic AI

```python
# LangChain basics
from langchain.llms import OpenAI
from langchain.agents import create_sql_agent
from langchain.agents.agent_toolkits import SQLDatabaseToolkit
from langchain.sql_database import SQLDatabase

db = SQLDatabase.from_uri("sqlite:///chinook.db")
toolkit = SQLDatabaseToolkit(db=db, llm=OpenAI())
agent = create_sql_agent(llm=OpenAI(), toolkit=toolkit, verbose=True)
agent.run("How many employees are there?")
```

**Reference:** `05-ai-ml` module + `Day-61/` to `Day-74/`

---

### Chapter 11: DevOps & Cloud

```bash
# Docker basics
docker build -t my-app:latest .
docker run -d -p 8080:80 my-app:latest
docker-compose up -d  # Multi-container apps

# GitHub Actions CI/CD
# .github/workflows/deploy.yml
name: Deploy
on: push to main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: composer install
      - run: php artisan test

# AWS basics
aws ec2 run-instances --image-id ami-xxx --instance-type t2.micro
aws s3 cp myfile.txt s3://my-bucket/
aws lambda invoke --function-name my-function output.txt
```

**Reference:** `06-devops` module (43 files)

---

### Chapter 12: Cyber Security

#### 12.1 OWASP Top 10 — Key Attacks

| Attack | Description | Prevention |
|--------|-------------|------------|
| SQLi | Inject SQL via input | Parameterized queries (PDO prepared statements) |
| XSS | Inject JS via input | Output escaping, CSP headers |
| CSRF | Cross-site request forgery | CSRF tokens |
| SSRF | Server-side request forgery | URL allowlist, disable unnecessary protocols |

```sql
-- SQL Injection Example
-- Unsafe: "SELECT * FROM users WHERE email = '" + email + "'"
-- Input: ' OR '1'='1
-- Result: Returns ALL users

-- Safe (PDO prepared statement)
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt->execute([$email]);
```

#### 12.2 Cryptography Basics

```bash
# Symmetric (AES) — same key for encrypt/decrypt
openssl enc -aes-256-cbc -salt -in file.txt -out file.enc

# Asymmetric (RSA) — public/private key pair
openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -pubout -out public.pem

# Hashing (SHA-256) — one-way, for passwords
echo -n "password123" | sha256sum
```

**Reference:** `11-cyber-security` module (30 modules of detailed content)

---

## Phase 5 — Interview & Placement

Theory aur coding dono complete hai. Ab interview patterns pe focus karo.

---

### Chapter 13: Interview Preparation

#### 13.1 Technical Interview Framework

```
1. CLARIFY — Inputs, outputs, constraints, edge cases
2. EXPLORE — Manual examples, identify patterns
3. BRAINSTORM — Brute force → Optimize
4. IMPLEMENT — Clean code, meaningful names
5. TEST — Edge cases, complexity analysis
```

**Communication tip:** Silence mat rakho. Jo soch rahe ho, bolo. Interviewer tujhe solve karte dekhna chahta hai, na ki sirf answer.

#### 13.2 DSA Patterns to Master

| Pattern | Example Problems |
|---------|-----------------|
| Two Pointer | Two Sum (sorted), Container with most water |
| Sliding Window | Max sum subarray, Longest substring without repeating |
| Fast & Slow Pointer | Cycle detection, Middle of linked list |
| Merge Intervals | Merge intervals, Insert interval |
| Cyclic Sort | Find missing/duplicate number |
| Tree BFS | Level order traversal, Zigzag traversal |
| Tree DFS | Path sum, LCA, Diameter of tree |
| Subsets | Subsets, Permutations, Letter combinations |
| Modified Binary Search | Search in rotated array, Find peak |
| Top 'K' Elements | K largest, K closest points, Top K frequent |
| 0/1 Knapsack | Subset sum, Partition equal subset sum |
| Palindromic Subsequence | Longest palindromic substring, Count palindromes |
| Graph Traversal | Number of islands, Course schedule, Clone graph |

#### 13.3 Resume & Behavioral

**Resume checklist:**
- ATS-friendly format (no columns/tables)
- Quantifiable achievements: "Optimized DB queries → 40% faster"
- Projects section with tech stack + live links
- GitHub profile with pinned repos

**STAR Method for Behavioral:**
```
S — Situation: Context kya tha
T — Task: Tera role/responsibility
A — Action: Exactly kya kiya tune
R — Result: Kya outcome aaya
```

**Common questions:** "Tell me about yourself", "Why this company?", "What's your biggest weakness?", "Tell me about a time you failed", "Describe a conflict with a teammate"

#### 13.4 Company-Specific Prep

| Company | Focus Areas |
|---------|-------------|
| TCS, Infosys, Wipro | Core Java, SQL, Aptitude, Basic DSA |
| Product-based (Flipkart, Amazon) | DSA + System Design + Behavioral |
| FAANG | Advanced DSA, Deep System Design, Leadership |
| Startup | Full-stack knowledge, Problem-solving, Versatility |

**Aptitude topics:** Quantitative (Percentage, Time & Work, Ratio), Logical (Syllogism, Coding-Decoding), Verbal (Reading Comprehension, Grammar), Data Interpretation (Charts, Graphs)

**Reference:** `08-interview-prep` module (581 lines of detailed content) + `Day-75/` to `Day-81/`

---

### Chapter 14: Projects

Projects resume mein weight dete hain. Quality over quantity — 3 solid projects > 10 todo apps.

| Level | Project | Tech Stack |
|-------|---------|------------|
| Beginner | Portfolio Website | HTML, CSS, JS, PHP (contact form) |
| Beginner | Calculator / Todo App | Vanilla JS, LocalStorage |
| Intermediate | E-commerce Platform | PHP, MySQL, Bootstrap |
| Intermediate | Blog System | Laravel, Vue.js, MySQL |
| Intermediate | Task Manager | Laravel, Livewire, Alpine.js |
| Advanced | Real-time Chat | Node.js, Socket.io, React |
| Advanced | Learning Management System | Laravel, Vue.js, Redis |
| Expert | Microservices E-commerce | K8s, Docker, Node.js, PostgreSQL |
| Expert | AI-Powered CMS | Python, TensorFlow, FastAPI, React |

**Each project should have:**
- Live demo / screenshots
- Source code on GitHub (clean README, proper commit messages)
- Architecture diagram
- Key features listed
- Deployment link (Netlify, Vercel, AWS)

**Reference:** `07-projects` module (517 lines, 20+ project descriptions with code) + `Day-82/` to `Day-88/`

---

## Source Content

Detailed day-by-day content available for deep reading:

- [Complete Curriculum (987 lines — full breakdown)](../original/90-Day-Plan/COMPLETE_90_DAY_CURRICULUM.md)
- [Day 1-3 Summary](../original/90-Day-Plan/DAYS_1-3_SUMMARY.md)
- [Overview](../original/90-Day-Plan/OVERVIEW.md)
- [Day-wise study plans](../original/90-Day-Plan/) (Day-01/ through Day-90/)
- [README with full structure](../original/90-Day-Plan/README.md)

Each day folder contains: `study_plan.md` (full 9-hour schedule), `resources.md`, `progress.md`, `notes.md`, and if available complete summaries and certificates.

---

## Notes

<div id="page-notes"></div>
