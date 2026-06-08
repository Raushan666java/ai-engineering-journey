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

## 📂 Original Deep Content

Original interview prep content:

- [Interview Complete Guide](../original/08-Interview-Prep/Interview-Complete.md)
- PHP-Laravel Interview Q&A (6 parts) in [original/08-Interview-Prep/](../original/08-Interview-Prep/)

---

## Notes

<div id="page-notes"></div>
