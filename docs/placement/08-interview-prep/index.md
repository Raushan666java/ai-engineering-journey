# Interview Prep — Placement Ki Final War

Ye section tujhe technical, system design aur behavioral interviews ke liye ready karega. Complete guide `placement-original/Main-Course/Placement-01/08-Interview-Prep/Interview-Complete.md` (633 lines) mein hai.

**Complete Source**: `placement-original/Main-Course/Placement-01/08-Interview-Prep/Interview-Complete.md` (633 lines) — 3-phase preparation: Foundation → Technical Deep Dive → Company-Specific.

## Phase 1: Technical Interviews — Foundation Building (Month 9-10)

### Problem-Solving Framework

From `placement-original/Main-Course/Placement-01/08-Interview-Prep/Interview-Complete.md`:

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

## Phase 2: Technical Deep Dive (Month 10-11)

### DSA Practice Target

| Level | Target | Current |
|-------|--------|---------|
| Easy | 150 problems | `placement-original/Main-Course/Placement-01/03-Programming/01-DSA/` |
| Medium | 200 problems | `placement-original/Main-Course/Placement-01/03-Programming/01-DSA/` |
| Hard | 100 problems | `placement-original/Main-Course/Placement-01/03-Programming/01-DSA/` |
| **Total** | **500+** | |

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

| Topic | Key Questions | Pattern |
|-------|--------------|---------|
| Arrays & Strings | Two Sum, Anagrams, Longest Substring, 3Sum | HashMap, Sliding Window, Two Pointers |
| Linked Lists | Cycle detection, Merge, Reverse, Middle | Fast & Slow, Dummy Node, Recursion |
| Trees | BFS, DFS, LCA, Max Depth, Validate BST | Stack/Queue, Recursion |
| DP | Knapsack, LCS, Edit Distance, Coin Change | Tabulation, Memoization |
| Graphs | Dijkstra, Topo Sort, MST, Number of Islands | BFS/DFS, Union Find, Priority Queue |

### PHP-Laravel Interview

`placement-original/Main-Course/Placement-01/php-laravel-interview-questions-answers-part-1-main/` — 6 parts:

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

## System Design Interviews

Detailed in module 10 (`docs/placement/10-system-design/`). Key topics:

| Topic | Must-Know Concepts |
|-------|-------------------|
| Database Design | Sharding, Replication, CAP Theorem, ACID vs BASE |
| Scalability | Horizontal vs Vertical, Caching (Redis), CDN, Load Balancer |
| Microservices | API Gateway, Circuit Breaker, Message Queue, Service Discovery |
| Consistency | Eventual vs Strong, Quorum, Leader Election |

### Case Studies to Practice

1. **WhatsApp** — 1B users, chat system design
2. **Instagram** — Photo sharing, feed generation
3. **Uber** — Real-time ride matching, location service
4. **Netflix** — Video streaming, recommendation
5. **Twitter** — Tweet timeline, fan-out pattern

From `placement-original/Main-Course/Placement-01/10-System-design/`:
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

From `placement-original/Main-Course/Placement-01/08-Interview-Prep/Interview-Complete.md`:

1. **Tell me about yourself** — 30-60 sec pitch: Current → Past → Why here
2. **Biggest challenge** — STAR se batao, failure se kya seekha dikhao
3. **Team conflict** — How you resolved it, what you learned
4. **Why our company** — Company research dikhao, genuine reasons do
5. **5 years vision** — Growth mindset dikhao, realistic goals rakho

### Leadership Stories

Prepare 3-4 stories — har story STAR format mein honi chahiye:

| Story Type | What to Show |
|------------|-------------|
| **Technical challenge** | Production bug fix, architecture decision |
| **Leadership** | Mentored junior, led project, owned feature |
| **Failure** | Project delay, wrong approach, lessons learned |
| **Impact** | Revenue increase, performance improvement, user growth |

**How to prepare**: Har story ko 2 versions mein ready rakho — 2-min detailed aur 30-sec crisp.

## Company-Specific Prep

| Type | Example Companies | Focus |
|------|------------------|-------|
| FAANG | Google, Amazon, Microsoft | Hard DSA + Advanced System Design + Leadership Principles |
| Product | Flipkart, Zomato, Paytm | Medium DSA + Project discussion + System Design basics |
| Startup | Early-stage | Full-stack knowledge + adaptability + product thinking |
| Service | TCS, Infosys, Wipro | CS core (OS, DBMS, Networking) + Communication |

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

- **📅 3-Phase Plan**: Month 9-10 foundation (DSA patterns + communication), Month 10-11 deep dive (topic-wise practice), Month 11-12 company-specific + mocks.
- **📝 DSA Notebook**: Har problem ka brute force + optimal solution notebook mein likho. Pattern wise organize karo — "yeh sliding window ka problem hai."
- **🎙️ Practice Loud**: Interview mein silence sabse deadly hai. Recording karo apne aap ko aur suno — improvements dikhenge.
- **🔄 Revision Cycle**: Har 3 din mein purane problems revise karo. Active recall > passive reading.
- **📊 Company Research**: Apply karne se pehle company ka product, tech stack, recent news — sab research karo. Interview mein genuine interest dikhta hai.
- **💪 Rejection = Learning**: Placement process mein rejections aayenge. Har rejection se 1 lesson lo aur improve karo. Consistency matters.
- **🤝 Peer Mock Groups**: 3-4 friends ka group banao. Weekly mocks lo. Cross feedback se confidence badhega.

## Resources

- `placement-original/Main-Course/Placement-01/08-Interview-Prep/Interview-Complete.md` (633 lines)
- `placement-original/Main-Course/Placement-01/03-Programming/01-DSA/` — DSA problems
- `placement-original/Main-Course/Placement-01/php-laravel-interview-questions-answers-part-1-main/` (6 parts)
- `placement-original/PDF-References/Data Structure and Algorithms Handwritten Notes.!!.pdf`
- `placement-original/Main-Course/Placement-01/10-System-design/` — System design (10 weeks)

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
