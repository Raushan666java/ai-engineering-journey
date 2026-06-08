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
    <p>DSA patterns + communication — Month 9-10</p>
  </div>
  <div class="roadmap-step" data-step="2">
    <h4>Technical Deep Dive</h4>
    <p>Topic-wise practice + PHP-Laravel — Month 10-11</p>
  </div>
  <div class="roadmap-step" data-step="3">
    <h4>System Design</h4>
    <p>Case studies + frameworks — Month 11-12</p>
  </div>
  <div class="roadmap-step" data-step="4">
    <h4>Behavioral</h4>
    <p>STAR stories + leadership — Month 11-12</p>
  </div>
  <div class="roadmap-step" data-step="5">
    <h4>Company-Specific</h4>
    <p>FAANG / Product / Startup — Month 11-12</p>
  </div>
  <div class="roadmap-step" data-step="6">
    <h4>Mock Interviews</h4>
    <p>Self → Peer → Senior → Real — Month 12</p>
  </div>
</div>

<div class="phase-section">
  <div class="phase-header">
    <span class="phase-num">01</span>
    <div>
      <h3>Technical Interviews — Foundation Building</h3>
      <p>Month 9-10</p>
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
      <p>Month 10-11</p>
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
```

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
- Weekly structure (10 weeks, 70+ days)
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

## Company-Specific Prep

<div class="topic-grid">
  <div class="topic-card">
    <h4><span class="tag tag-hot">FAANG</span></h4>
    <p>Google, Amazon, Microsoft</p>
    <p>Hard DSA + Advanced System Design + Leadership Principles</p>
  </div>
  <div class="topic-card">
    <h4><span class="tag tag-star">Product</span></h4>
    <p>Flipkart, Zomato, Paytm</p>
    <p>Medium DSA + Project discussion + System Design basics</p>
  </div>
  <div class="topic-card">
    <h4><span class="tag tag-method">Startup</span></h4>
    <p>Early-stage</p>
    <p>Full-stack knowledge + adaptability + product thinking</p>
  </div>
  <div class="topic-card">
    <h4><span class="tag">Service</span></h4>
    <p>TCS, Infosys, Wipro</p>
    <p>CS core (OS, DBMS, Networking) + Communication</p>
  </div>
</div>

## Mock Interview Schedule

```markdown
Week 1-2: Self-practice (record yourself, Pramp/ interviewing.io)
Week 3-4: Peer mock interviews (2-3 per week)
Week 5-6: Senior engineer mock (1-2 per week, get real feedback)
Week 7-8: Real interviews start
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
    <strong>Peer Mock Groups:</strong> 3-4 friends ka group banao. Weekly mocks lo. Cross feedback se confidence badhega.
  </div>
</div>

## Resources

- `Interview-Complete.md` (633 lines)
- `03-Programming/01-DSA/` — DSA problems
- `php-laravel-interview-questions-answers-part-1-main/` (6 parts)
- `Data Structure and Algorithms Handwritten Notes.pdf`
- `10-System-design/` — System design (10 weeks)

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

## Notes

<div id="page-notes"></div>
