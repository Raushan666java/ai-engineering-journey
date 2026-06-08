# Interview Prep — Placement Ki Final War

<div class="module-hero">
  <div class="hero-icon">🎯</div>
  <div class="hero-content">
    <h2>Technical + System Design + Behavioral — Ek Dam Tayaar</h2>
    <p>Ye section tujhe technical, system design aur behavioral interviews ke liye ready karega. 3-phase preparation: Foundation → Technical Deep Dive → Company-Specific.</p>
    <div class="hero-meta">
      <span class="tag tag-hot">500+ Problems</span>
      <span class="tag tag-star">System Design</span>
      <span class="tag tag-method">Behavioral STAR</span>
    </div>
  </div>
</div>

## Preparation Roadmap

<div class="roadmap-path">
  <div class="roadmap-step" data-step="1">
    <h4>Foundation</h4>
    <p>DSA patterns + communication</p>
  </div>
  <div class="roadmap-step" data-step="2">
    <h4>Technical Deep Dive</h4>
    <p>Topic-wise practice + PHP-Laravel</p>
  </div>
  <div class="roadmap-step" data-step="3">
    <h4>System Design</h4>
    <p>Case studies + frameworks</p>
  </div>
  <div class="roadmap-step" data-step="4">
    <h4>Behavioral</h4>
    <p>STAR stories + leadership</p>
  </div>
  <div class="roadmap-step" data-step="5">
    <h4>Company-Specific</h4>
    <p>FAANG / Product / Startup</p>
  </div>
  <div class="roadmap-step" data-step="6">
    <h4>Mock Interviews</h4>
    <p>Self → Peer → Senior → Real</p>
  </div>
</div>

<div class="phase-section">
  <div class="phase-header">
    <span class="phase-num">01</span>
    <div>
      <h3>Technical Interviews — Foundation Building</h3>
    </div>
  </div>
  <div class="phase-body">

### Problem-Solving Framework

```
1. CLARIFY — Inputs, outputs, constraints, edge cases
   - Kya inputs hain? Output format? Constraints?
   - Edge cases: empty, null, single element, duplicates
2. EXPLORE — Manual examples, patterns
   - 2-3 examples khud solve karo
   - Pattern identify karo
3. BRAINSTORM — Brute force → optimize (time/space)
   - Pehle brute force, phir optimize
   - Kya data structure help karega?
4. IMPLEMENT — Clean code, meaningful names
   - Brute force se start karo zaroorat ho toh
   - Variable names meaningful rakho
5. TEST — Edge cases, complexity analysis
   - Examples pe walkthrough karo
   - O(n) time, O(n) space discuss karo
```

### Communication Skills

- **Thinking out loud** — silence mat rakho, jo soch rahe ho bolo
- **Explain clearly** — approach, tradeoffs, alternatives
- **Ask questions** — clarifying questions se confidence dikhta hai
- **Handle hints** — interviewer ke hints ko gracefully accept karo

  </div>
</div>

<div class="phase-section">
  <div class="phase-header">
    <span class="phase-num">02</span>
    <div>
      <h3>Technical Deep Dive</h3>
    </div>
  </div>
  <div class="phase-body">

### DSA Practice Target

<table class="table-dash">
  <thead>
    <tr><th>Level</th><th>Target</th><th>Source</th></tr>
  </thead>
  <tbody>
    <tr><td>Easy</td><td>150 problems</td><td><code>03-Programming/01-DSA/</code></td></tr>
    <tr><td>Medium</td><td>200 problems</td><td><code>03-Programming/01-DSA/</code></td></tr>
    <tr><td>Hard</td><td>100 problems</td><td><code>03-Programming/01-DSA/</code></td></tr>
    <tr><td><strong>Total</strong></td><td><strong>500+</strong></td><td></td></tr>
  </tbody>
</table>

### Topic-Wise Questions with Code Patterns

DSA ke har topic ke interview questions `Interview-Complete.md` mein hain. Key patterns yaad rakho:

#### Arrays & Strings (25 Essential Qs)

**Easy**
```python
# Two Sum — HashMap approach
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []
# Time: O(n), Space: O(n)

# Valid Anagram — Sorting vs Counter
def is_anagram(s, t):
    return Counter(s) == Counter(t)

# Contains Duplicate
def contains_duplicate(nums):
    return len(nums) != len(set(nums))
```

**Medium**
```python
# Longest Substring Without Repeating — Sliding Window
def lengthOfLongestSubstring(s):
    char_index = {}
    left = max_length = 0
    for right, char in enumerate(s):
        if char in char_index and char_index[char] >= left:
            left = char_index[char] + 1
        char_index[char] = right
        max_length = max(max_length, right - left + 1)
    return max_length

# 3Sum — Two Pointers
def three_sum(nums):
    nums.sort()
    result = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]: continue
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total < 0: left += 1
            elif total > 0: right -= 1
            else:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]: left += 1
                while left < right and nums[right] == nums[right - 1]: right -= 1
                left += 1; right -= 1
    return result
```

#### Trees & Graphs — Key Code Patterns

```python
# Binary Tree BFS (Level Order)
from collections import deque

def level_order(root):
    if not root: return []
    result, queue = [], deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    return result

# Lowest Common Ancestor (BST)
def lowest_common_ancestor(root, p, q):
    if p.val < root.val and q.val < root.val:
        return lowest_common_ancestor(root.left, p, q)
    if p.val > root.val and q.val > root.val:
        return lowest_common_ancestor(root.right, p, q)
    return root

# Number of Islands — DFS
def num_islands(grid):
    def dfs(i, j):
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == '0':
            return
        grid[i][j] = '0'
        dfs(i + 1, j); dfs(i - 1, j)
        dfs(i, j + 1); dfs(i, j - 1)

    count = 0
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == '1':
                dfs(i, j)
                count += 1
    return count
```

#### Dynamic Programming — Pattern Templates

```python
# 1D DP — Fibonacci style
def fib(n):
    if n <= 1: return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]

# 2D DP — Longest Common Subsequence
def longest_common_subsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]

# Knapsack 0/1
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(dp[i - 1][w],
                               dp[i - 1][w - weights[i - 1]] + values[i - 1])
            else:
                dp[i][w] = dp[i - 1][w]
    return dp[n][capacity]
```

#### DSA — Quick Reference Cheat Sheet

| Pattern | When to Use | Time/Space |
|---------|-------------|------------|
| **Two Pointers** | Sorted array, pair sum | O(n), O(1) |
| **Sliding Window** | Subarray/substring, contiguous | O(n), O(k) |
| **Fast & Slow** | Cycle detection, middle node | O(n), O(1) |
| **Merge Intervals** | Overlap, meeting rooms | O(n log n), O(n) |
| **Cyclic Sort** | 1-n range, missing numbers | O(n), O(1) |
| **In-place Reversal** | Reverse linked list | O(n), O(1) |
| **BFS** | Shortest path, level order | O(V+E), O(V) |
| **DFS** | All paths, connected components | O(V+E), O(V) |
| **Binary Search** | Sorted array, search space | O(log n), O(1) |
| **Top K elements** | K largest/smallest, Heap | O(n log k), O(k) |
| **Backtracking** | Permutations, subsets, combinations | O(n!), O(n) |
| **DP** | Optimal substructure, overlapping | O(n²), O(n²) |

<table class="table-dash">
  <thead>
    <tr><th>Topic</th><th>Key Questions</th><th>Pattern</th></tr>
  </thead>
  <tbody>
    <tr><td>Arrays & Strings</td><td>Two Sum, Anagrams, Longest Substring, 3Sum</td><td>HashMap, Sliding Window, Two Pointers</td></tr>
    <tr><td>Linked Lists</td><td>Cycle detection, Merge, Reverse, Middle</td><td>Fast & Slow, Dummy Node, Recursion</td></tr>
    <tr><td>Trees</td><td>BFS, DFS, LCA, Max Depth, Validate BST</td><td>Stack/Queue, Recursion</td></tr>
    <tr><td>DP</td><td>Knapsack, LCS, Edit Distance, Coin Change</td><td>Tabulation, Memoization</td></tr>
    <tr><td>Graphs</td><td>Dijkstra, Topo Sort, MST, Number of Islands</td><td>BFS/DFS, Union Find, Priority Queue</td></tr>
  </tbody>
</table>

### PHP-Laravel Interview

`php-laravel-interview-questions-answers-part-1-main/` — 6 parts:

```bash
Part - 1.md           # Core PHP, Laravel basics
Part - 2.md           # Eloquent, Database, Migrations
Part - 3.md           # API, Auth, Security
Part - 4.md           # Testing, Queues, Events
Part - 5.md           # Advanced patterns
Part - 6.md           # Final summary
```

**Top PHP-Laravel Interview Topics:**
1. Service Provider vs Facade vs Contract
2. Eloquent N+1 problem and solution
3. Middleware types (Global, Route, Group)
4. Queue drivers (database, redis, sqs)
5. Event vs Listener vs Observer
6. API Resource vs Fractal vs JSON Resource
7. SOLID principles with Laravel examples
8. Dependency Injection in Laravel

**PHP-Laravel Code Patterns:**
```php
// Service Provider registration
class AppServiceProvider extends ServiceProvider {
    public function register(): void {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->singleton(PaymentGateway::class, function ($app) {
            return new StripePaymentGateway(config('services.stripe.key'));
        });
    }
}

// Eloquent N+1 fix — Eager Loading
// ❌ Bad: N+1 queries
$posts = Post::all();
foreach ($posts as $post) {
    echo $post->user->name;  // N queries for N posts
}
// ✅ Good: 2 queries total
$posts = Post::with('user', 'comments.author')->get();

// Queue job — async processing
class ProcessPayment implements ShouldQueue {
    use Queueable;
    public function handle(PaymentService $service): void {
        $service->charge($this->order);
    }
}

// Custom Artisan Command
class GenerateReport extends Command {
    protected $signature = 'report:generate {type} {--force}';
    public function handle(): int {
        $this->info("Generating {$this->argument('type')} report...");
        // ... business logic
        return Command::SUCCESS;
    }
}
```

### SQL Interview Questions

```sql
-- Second highest salary — LIMIT/OFFSET vs subquery
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;

-- Department-wise max salary with employee details
SELECT d.name AS department, e.name AS employee, e.salary
FROM employees e
JOIN departments d ON e.department_id = d.id
WHERE e.salary = (
    SELECT MAX(salary) FROM employees WHERE department_id = e.department_id
);

-- Employees with no manager (self-join)
SELECT e1.name AS employee
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id
WHERE e2.id IS NULL;

-- Running total — window functions
SELECT date, amount,
       SUM(amount) OVER (ORDER BY date) AS running_total
FROM sales;

-- Find duplicates by email
SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- Nth highest salary
SELECT DISTINCT salary
FROM employees e1
WHERE N = (SELECT COUNT(DISTINCT salary) FROM employees e2 WHERE e2.salary >= e1.salary);
```

**SQL Topics for Interview:**
- Joins (INNER, LEFT, RIGHT, CROSS, SELF)
- Window functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD)
- GROUP BY + HAVING vs WHERE
- Indexes (Clustered vs Non-clustered, Composite)
- Normalization (1NF, 2NF, 3NF) vs Denormalization
- ACID properties
- Query optimization (EXPLAIN, index usage, slow queries)
- Transactions + Isolation Levels

  </div>
</div>

## System Design Interviews

Detailed in <code>docs/placement/10-system-design/</code>. Key topics:

<table class="table-dash">
  <thead>
    <tr><th>Topic</th><th>Must-Know Concepts</th></tr>
  </thead>
  <tbody>
    <tr><td>Database Design</td><td>Sharding, Replication, CAP Theorem, ACID vs BASE</td></tr>
    <tr><td>Scalability</td><td>Horizontal vs Vertical, Caching (Redis), CDN, Load Balancer</td></tr>
    <tr><td>Microservices</td><td>API Gateway, Circuit Breaker, Message Queue, Service Discovery</td></tr>
    <tr><td>Consistency</td><td>Eventual vs Strong, Quorum, Leader Election</td></tr>
  </tbody>
</table>

### Case Studies to Practice

1. **WhatsApp** — 1B users, chat system design
2. **Instagram** — Photo sharing, feed generation
3. **Uber** — Real-time ride matching, location service
4. **Netflix** — Video streaming, recommendation
5. **Twitter** — Tweet timeline, fan-out pattern

From <code>10-System-design/</code>:
- Structured weekly plan
- 15+ case studies
- 50+ practice problems

### System Design Framework

```
1. Requirements — Functional + Non-functional
2. Estimation — Traffic, storage, bandwidth
3. Data Model — Schema, relationships
4. High-Level Design — Components, APIs
5. Deep Dive — Key component details
6. Trade-offs — Consistency vs Availability, SQL vs NoSQL
```

## Behavioral Interviews

### STAR Method

```
S — Situation: Context kya tha
T — Task: Tera role/responsibility kya thi
A — Action: Tune exactly kya actions liye
R — Result: Kya outcome aaya, kya seekha
```

### Common Questions (with preparation tips)

1. **Tell me about yourself** — 30-60 sec pitch: Current → Past → Why here
2. **Biggest challenge** — STAR se batao, failure se kya seekha dikhao
3. **Team conflict** — How you resolved it, what you learned
4. **Why our company** — Company research dikhao, genuine reasons do
5. **5 years vision** — Growth mindset dikhao, realistic goals rakho

### Leadership Stories

Prepare 3-4 stories — har story STAR format mein honi chahiye:

<table class="table-dash">
  <thead>
    <tr><th>Story Type</th><th>What to Show</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Technical challenge</strong></td><td>Production bug fix, architecture decision</td></tr>
    <tr><td><strong>Leadership</strong></td><td>Mentored junior, led project, owned feature</td></tr>
    <tr><td><strong>Failure</strong></td><td>Project delay, wrong approach, lessons learned</td></tr>
    <tr><td><strong>Impact</strong></td><td>Revenue increase, performance improvement, user growth</td></tr>
  </tbody>
</table>

**How to prepare**: Har story ko 2 versions mein ready rakho — 2-min detailed aur 30-sec crisp.

## 🏢 FAANG aur Big Tech — Company-Specific Deep Dive

<div class="tip-banner">
  <span class="tip-badge">🚀 BIG TECH MINDSET</span>
  Har big tech company ka interview pattern <strong>different</strong> hota hai. Ek hi prep sabke liye kaam nahi karta. Neeche har company ka breakdown hai — <strong>pattern, prep strategy, aur sample questions</strong>.
</div>

### Company-Wise Interview Pattern

<div class="company-grid">
  <div class="company-card">
    <div class="company-sub">FAANG</div>
    <h4>Amazon</h4>
    <p><strong>Rounds:</strong> OA → 4-5 onsite (DSA × 2, System Design, Behavioral × 2)</p>
    <p><strong>Focus:</strong> Leadership Principles (16 LPs) har answer mein dikhane hain. Bar Raiser round sabse tough.</p>
    <div class="company-tags">
      <span>16 LPs</span>
      <span>STAR Stories</span>
      <span>DSA Medium-Hard</span>
      <span>Bar Raiser</span>
    </div>
  </div>
  <div class="company-card">
    <div class="company-sub">FAANG</div>
    <h4>Google</h4>
    <p><strong>Rounds:</strong> OA → Phone Screen → 4-5 onsite (DSA × 2-3, System Design, Googleyness)</p>
    <p><strong>Focus:</strong> Perfect DSA (optimal + clean), Scale, Googleyness + Leadership. Hiring committee style.</p>
    <div class="company-tags">
      <span>Optimal Code</span>
      <span>Googleyness</span>
      <span>LC Hard</span>
      <span>Coding Standards</span>
    </div>
  </div>
  <div class="company-card">
    <div class="company-sub">FAANG</div>
    <h4>Meta (Facebook)</h4>
    <p><strong>Rounds:</strong> OA → Phone → 4 onsite (DSA × 2, System Design, Behavioral)</p>
    <p><strong>Focus:</strong> Speed + Clean code. System design mein real-world product design. Move Fast culture.</p>
    <div class="company-tags">
      <span>Speed Matters</span>
      <span>Product Design</span>
      <span>Medium-Hard DSA</span>
      <span>2 years exp focus</span>
    </div>
  </div>
  <div class="company-card">
    <div class="company-sub">FAANG</div>
    <h4>Netflix</h4>
    <p><strong>Rounds:</strong> 3-5 rounds (DSA, System Design × 2, Culture, Manager)</p>
    <p><strong>Focus:</strong> High autonomy, Freedom & Responsibility culture. Deep system design. Senior roles only.</p>
    <div class="company-tags">
      <span>Senior Only</span>
      <span>Deep SD</span>
      <span>Culture Fit</span>
      <span>Keeper Test</span>
    </div>
  </div>
  <div class="company-card">
    <div class="company-sub">TOP TECH</div>
    <h4>Microsoft</h4>
    <p><strong>Rounds:</strong> OA → 4-5 onsite (DSA × 2, System Design, Behavioral, ASK)</p>
    <p><strong>Focus:</strong> DSA Medium (not Google hard), Design questions, Culture+Collaboration. ASK = Aptitude.</p>
    <div class="company-tags">
      <span>Medium DSA</span>
      <span>Design Focus</span>
      <span>Growth Mindset</span>
      <span>Collaboration</span>
    </div>
  </div>
  <div class="company-card">
    <div class="company-sub">TOP TECH</div>
    <h4>Apple</h4>
    <p><strong>Rounds:</strong> Phone → 5-7 onsite (varies by team — DSA, Domain, Design, Behavioral × 2)</p>
    <p><strong>Focus:</strong> Domain knowledge heavy (iOS/macOS). Attention to detail. Cross-functional collaboration.</p>
    <div class="company-tags">
      <span>Domain Deep</span>
      <span>Detail Oriented</span>
      <span>Team Fit</span>
      <span>Product Passion</span>
    </div>
  </div>
  <div class="company-card">
    <div class="company-sub">TOP TECH</div>
    <h4>Uber</h4>
    <p><strong>Rounds:</strong> OA → Phone → 4-5 onsite (DSA, System Design × 2, Behavioral, Manager)</p>
    <p><strong>Focus:</strong> Real-time systems + DSA. Lean team culture. Customer obsession.</p>
    <div class="company-tags">
      <span>Real-Time Systems</span>
      <span>Lean Culture</span>
      <span>Full Stack-ish</span>
      <span>Customer Focus</span>
    </div>
  </div>
  <div class="company-card">
    <div class="company-sub">TOP TECH</div>
    <h4>Stripe</h4>
    <p><strong>Rounds:</strong> OA → Take-Home/API → 4 onsite (Debugging, API Design, System Design, Behavioral)</p>
    <p><strong>Focus:</strong> API design excellence, debugging skills. Write production-quality code from day 1.</p>
    <div class="company-tags">
      <span>API Design</span>
      <span>Debugging Deep</span>
      <span>Production Code</span>
      <span>Writing Focus</span>
    </div>
  </div>
</div>

### 🏆 Amazon Leadership Principles — Deep Dive

Amazon ka interview <strong>16 Leadership Principles</strong> pe chalta hai. Har answer mein 2-3 LPs dikhane hain.

<div class="table-dash">
<table>
  <tr><th>LP</th><th>Kya Hai</th><th>STAR Story Tip</th></tr>
  <tr><td><strong>Customer Obsession</strong></td><td>Customer se shuru karo, backwards work karo</td><td>Ek feature jo customer feedback se aaya, uska impact dikhao</td></tr>
  <tr><td><strong>Ownership</strong></td><td>Never say "that's not my job"</td><td>Production issue lia jo tera domain nahi tha, but tune fix kiya</td></tr>
  <tr><td><strong>Invent & Simplify</strong></td><td>New solutions dhoondo, complex ko simple karo</td><td>Koi manual process automate kiya ho toh dikhao</td></tr>
  <tr><td><strong>Are Right, A Lot</strong></td><td>Strong judgment, data-driven decisions</td><td>Wrong decision avoid karne ke liye data use kiya</td></tr>
  <tr><td><strong>Learn & Be Curious</strong></td><td>Continuous learning, explore new tech</td><td>Naya technology seekh ke project mein apply kiya</td></tr>
  <tr><td><strong>Hire & Develop the Best</strong></td><td>Raise the bar, mentor others</td><td>Kisi junior ko mentored ya training session lia</td></tr>
  <tr><td><strong>Insist on Highest Standards</strong></td><td>Continually raise the bar</td><td>Code review mein improvement laaya, test coverage badhaya</td></tr>
  <tr><td><strong>Think Big</strong></td><td>Bada socho, vision dikhao</td><td>Ek small feature ka big impact vision banaya</td></tr>
  <tr><td><strong>Bias for Action</strong></td><td>80% information pe decision lo, speed matters</td><td>Analysis paralysis break kiya, calculated risk lia</td></tr>
  <tr><td><strong>Dive Deep</strong></td><td>Surface level mat raho, root cause tak jao</td><td>Production bug ka root cause nikal kar permanently fix kiya</td></tr>
  <tr><td><strong>Have Backbone; Disagree & Commit</strong></td><td>Disagree respectfully, but commit fully</td><td>Team decision se disagree kiya but phir fully committed raha</td></tr>
  <tr><td><strong>Deliver Results</strong></td><td>Input nahi, output matter karta hai</td><td>Deadline save ki, ya project deliver kiya despite obstacles</td></tr>
  <tr><td><strong>Strive to be Earth's Best Employer</strong></td><td>Safety, inclusion, work environment</td><td>Team culture better banane ke liye kuch kiya</td></tr>
  <tr><td><strong>Success & Scale Bring Broad Responsibility</strong></td><td>Corporate social responsibility</td><td>Environmental/social impact ka initiative lia</td></tr>
  <tr><td><strong>Frugality</strong></td><td>More with less, resource optimization</td><td>Cloud cost optimize kiya, build vs buy decision lia</td></tr>
  <tr><td><strong>Trust Your Teammates</strong></td><td>Be transparent, trust before verification</td><td>Team member pe trust karke delegation ki</td></tr>
</table>
</div>

<div class="tip-banner">
  <span class="tip-badge">🎯 AMAZON STRATEGY</span>
  Amazon mein <strong>STAR stories + 2-3 LPs per answer</strong> ka formula hai. Har story ko 3 LPs se connect karo. Jaise: Customer Obsession + Ownership + Deliver Results. Practice karo jab tak stories natural na lage.
</div>

### 🎭 STAR Method — Mastery Level

```
S — Situation: "Meri team ek critical production bug ka root cause find kar rahi thi..."
T — Task: "Mera responsibility tha ki main... identify karun..."
A — Action: "Maine logging add ki, flamegraphs dekhe, aur discovered kiya ki..."
R — Result: "Isse latency 40% reduce hui aur team ka confidence badha."
```

**Star Story Bank — 6 Stories Ready Karo:**

<div class="table-dash">
<table>
  <tr><th>#</th><th>Story Type</th><th>Example Hook</th><th>Best For</th></tr>
  <tr><td>1</td><td><strong>Technical Challenge</strong></td><td>"Production mein memory leak tha, 3 din lag gaye root cause find karne mein..."</td><td>Amazon, Google</td></tr>
  <tr><td>2</td><td><strong>Leadership / Ownership</strong></td><td>"Feature deliver karna tha, 2 team members chhutti pe the. Maine..."</td><td>Amazon, Meta</td></tr>
  <tr><td>3</td><td><strong>Failure & Learning</strong></td><td>"Maine optimize karne ke chakkar mein production mein issue kar diya..."</td><td>All companies</td></tr>
  <tr><td>4</td><td><strong>Impact / Results</strong></td><td>"Maine caching implement kiya, jisse page load time 3s → 300ms ho gaya..."</td><td>Meta, Uber</td></tr>
  <tr><td>5</td><td><strong>Conflict Resolution</strong></td><td>"Do senior engineers ka disagreement tha architecture pe, maine..."</td><td>Google, Apple</td></tr>
  <tr><td>6</td><td><strong>Innovation / Initiative</strong></td><td>"Maine ek internal tool banaya jisse team ki productivity 30% badh gayi..."</td><td>Amazon, Stripe</td></tr>
</table>
</div>

### 🌍 Google Googleyness — Kya Expect Karein

Google "Googleyness" round mein ye check karte hain:

<div class="topic-grid" style="margin-top:16px">
  <div class="topic-card">
    <h4>🤝 Collaboration</h4>
    <p>Cross-team projects ka example. Google mein bohot dependency hoti hai teams ke beech.</p>
    <div class="topic-meta"><span class="tag tag-method">TEAMWORK</span></div>
  </div>
  <div class="topic-card">
    <h4>🧩 Ambiguity</h4>
    <p>Unclear requirements mein kaise kaam kiya. Structured thinking dikhao.</p>
    <div class="topic-meta"><span class="tag tag-method">STRUCTURE</span></div>
  </div>
  <div class="topic-card">
    <h4>💡 Intellectual Curiosity</h4>
    <p>Naye tech seekhne ka passion. Projects ya learning initiatives dikhao.</p>
    <div class="topic-meta"><span class="tag tag-hot">PASSION</span></div>
  </div>
  <div class="topic-card">
    <h4>⚖️ Humility</h4>
    <p>Mistakes admit karo, feedback lo, improve karo. Ego mat dikhao.</p>
    <div class="topic-meta"><span class="tag tag-star">HUMBLE</span></div>
  </div>
</div>

### 📊 LeetCode Strategy for FAANG

<div class="table-dash">
<table>
  <tr><th>Company</th><th>Problems to Solve</th><th>Focus Topics</th><th>Target Difficulty</th></tr>
  <tr><td>Google</td><td>200-300</td><td>DP, Graphs, Trees, Backtracking, Math</td><td>Medium-Hard</td></tr>
  <tr><td>Amazon</td><td>150-250</td><td>Arrays, Strings, Trees, Design, OOD</td><td>Medium</td></tr>
  <tr><td>Meta</td><td>150-200</td><td>Arrays, Strings, DP, Graphs</td><td>Medium</td></tr>
  <tr><td>Microsoft</td><td>100-150</td><td>Arrays, Strings, Linked Lists, Trees</td><td>Easy-Medium</td></tr>
  <tr><td>Netflix</td><td>80-120</td><td>System Design heavy, DSA moderate</td><td>Medium</td></tr>
  <tr><td>Uber</td><td>100-150</td><td>Graph, Design, Concurrency, Arrays</td><td>Medium-Hard</td></tr>
  <tr><td>Stripe</td><td>80-100</td><td>API Design, Debugging, Concurrency</td><td>Medium</td></tr>
</table>
</div>

<div class="tip-banner">
  <span class="tip-badge">💡 PRO TIP</span>
  <strong>Quality > Quantity:</strong> 50 problems samajh ke karo toh 150 ratne se better hai. Har problem ka brute → better → optimal approach notebook mein likho.
</div>

### 💰 Offer Negotiation Strategy

1. **Never accept first offer** — Always negotiate
2. **Leverage competing offers** — Multiple interviews rakho same timeline mein
3. **Know your numbers** — Base + Stock (RSUs) + Sign-on Bonus + Annual Bonus
4. **Amazon LPs in negotiation** — "Think Big" karte hue mutual benefit dikhao
5. **Level matching** — Fir bhi Google L3 vs L4 ka difference $50k-100k+ hai
6. **Resources:** Levels.fyi, Blind app, TeamBlind — real salary data dekho

## Mock Interview Schedule

```
1. Self-practice (record yourself, Pramp/ interviewing.io)
2. Peer mock interviews
3. Senior engineer mock (get real feedback)
4. Real interviews start
```

### Feedback Template

```markdown
## Mock Interview Feedback
- Problem-solving approach: /5
- Code quality (cleanliness, naming): /5
- Communication (clarity, structure): /5
- Time management: /5
- Areas to improve:
- What went well:
```

### OS & Networking — Interview Quick Reference

| Concept | Key Points |
|---------|------------|
| **Process vs Thread** | Process = independent memory, Thread = shared memory |
| **Deadlock** | 4 conditions: Mutual exclusion, Hold & wait, No preemption, Circular wait |
| **Context Switch** | OS saves/restores process state — expensive operation |
| **Virtual Memory** | Paging, Page fault, LRU/FIFO replacement |
| **TCP vs UDP** | TCP: reliable, ordered, connection-oriented. UDP: fast, no guarantee |
| **HTTP/1.1 vs HTTP/2** | HTTP/2: multiplexing, server push, header compression |
| **DNS** | Recursive vs Iterative, TTL, caching layers |
| **OSI Model** | 7 layers: Physical → Data Link → Network → Transport → Session → Presentation → Application |
| **Load Balancer** | Round-robin, Least connections, IP hash |
| **CDN** | Edge caching, origin pull, DDoS protection |

### Day Before Interview Checklist

```
□ Company research refresh (product, culture, recent news)
□ 2 STAR stories loud practice (record yourself)
□ 5 DSA problems quick solve (warmup, not new topics)
□ System design framework revision
□ Computer setup check (camera, mic, IDE, stable internet)
□ Background check (clean, well-lit, quiet)
□ Glassdoor recent interview experience read
□ Notification silence mode ON
□ Sleep on time (7-8 hours minimum)
```

### During Interview — Pro Tips

1. **First 2 minutes matter** — smile, confident greeting, thank interviewer
2. **Clarify before coding** — repeat the problem, ask about constraints
3. **Think out loud** — interviewer cannot read your mind
4. **Stuck?** — don't freeze, talk about what you're thinking, ask for hint
5. **No "I don't know"** — say "I haven't encountered this exactly, but I'd approach it by..."
6. **Code review yourself** — after writing, manually run through your code
7. **Ask questions at end** — show genuine interest (team culture, tech stack, growth)

## Study Tips (Hinglish)

<div class="tip-banner">
  <span class="tip-badge">🧠</span>
  <div>
    <strong>DSA Notebook:</strong> Har problem ka brute force + optimal solution notebook mein likho. Pattern wise organize karo — "yeh sliding window ka problem hai."
  </div>
</div>

<div class="tip-banner">
  <span class="tip-badge">🎙️</span>
  <div>
    <strong>Practice Loud:</strong> Interview mein silence sabse deadly hai. Recording karo apne aap ko aur suno — improvements dikhenge.
  </div>
</div>

<div class="tip-banner">
  <span class="tip-badge">🔄</span>
  <div>
    <strong>Revision Cycle:</strong> Har 3 din mein purane problems revise karo. Active recall > passive reading.
  </div>
</div>

<div class="tip-banner">
  <span class="tip-badge">📊</span>
  <div>
    <strong>Company Research:</strong> Apply karne se pehle company ka product, tech stack, recent news — sab research karo. Interview mein genuine interest dikhta hai.
  </div>
</div>

<div class="tip-banner">
  <span class="tip-badge">💪</span>
  <div>
    <strong>Rejection = Learning:</strong> Placement process mein rejections aayenge. Har rejection se 1 lesson lo aur improve karo. Consistency matters.
  </div>
</div>

<div class="tip-banner">
  <span class="tip-badge">🤝</span>
  <div>
    <strong>Peer Mock Groups:</strong> 3-4 friends ka group banao. Regular mocks lo. Cross feedback se confidence badhega.
  </div>
</div>

## Resources

- `Interview-Complete.md` (633 lines)
- `03-Programming/01-DSA/` — DSA problems
- `php-laravel-interview-questions-answers-part-1-main/` (6 parts)
- `Data Structure and Algorithms Handwritten Notes.pdf`
- `10-System-design/` — System design

## Checklist

- [ ] DSA ke 500+ problems solve kiye (all difficulty levels)
- [ ] PHP-Laravel interview Q&A (6 parts) padh liye
- [ ] System design case studies (5+) practice ki
- [ ] Behavioral STAR stories (3-4) tayar hain
- [ ] Mock interviews schedule pe hain (≥8 mocks)
- [ ] Company-specific prep start kiya (FAANG / Product / Startup)
- [ ] Problem-solving framework roj practice mein hai
- [ ] Mock interview feedback template ready hai
- [ ] Self-recording practice ki hai (≥5 sessions)

---

## 📂 Original Deep Content

Original interview prep content:

- [Interview Complete Guide](../original/08-Interview-Prep/Interview-Complete.md)
- PHP-Laravel Interview Q&A (6 parts) in [original/08-Interview-Prep/](../original/08-Interview-Prep/)

---

## Notes

<div id="page-notes"></div>
