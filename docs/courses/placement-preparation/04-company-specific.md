# Company-Specific Placement Preparation

> A tiered breakdown of interview processes, question patterns, and preparation strategies across FAANG/MANGA, product-based Indian companies, service-based companies, startups, and premium semiconductor/enterprise companies.

---

## Table of Contents

1. [FAANG / MANGA Companies](#1-faang--manga-companies)
2. [Product-Based Companies (India)](#2-product-based-companies-india)
3. [Service-Based Companies](#3-service-based-companies)
4. [Startups & Unicorns](#4-startups--unicorns)
5. [Premium Semiconductor & Enterprise Companies](#5-premium-semiconductor--enterprise-companies)

---

## 1. FAANG / MANGA Companies

### Overview

FAANG (Facebook/Meta, Apple, Amazon, Netflix, Google) and the extended MANGA (Meta, Amazon, Netflix, Google, Apple) represent the pinnacle of software engineering compensation and prestige. These companies have hiring bars that rank among the highest in the industry.

### Common Threads Across All FAANG Interviews

- **Resume screening** — top schools, prior FAANG, strong open-source contributions, or referral required for initial call
- **Phone screen (45-60 min)** — one or two LeetCode Medium/Hard problems over shared editor (CoderPad, HackerRank)
- **On-site loop (4-6 rounds)** — 45 min each, mix of coding, system design, behavioral, and sometimes specialized rounds
- **Compensation** — TC ranges from $180K (junior) to $500K+ (senior) in the US; 30-60 LPA in India equivalent
- **Hiring committee** — debrief where all interviewers calibrate before extending offer

### Google

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Resume screen + recruiter call | 30 min | Background, levels, team matching |
| Phone screen (coding) | 45 min | 1-2 LeetCode Medium/Hard problems |
| On-site (4-6 rounds) | 4-6 hours | 2-3 coding, 1 system design, 1 googleyness, 1 extra |
| Hiring committee | — | Packet review, cross-panel calibration |
| Compensation + team matching | — | Find team + finalize offer |

#### Googleyness & Leadership

Google evaluates four core attributes beyond technical ability:

1. **Googleyness** — Do they embody Google's values? Comfort with ambiguity, bias to action, intellectual humility.
2. **Cognitive ability** — How do they think through unfamiliar problems? Verbalize reasoning before coding.
3. **Leadership** — Have they led projects, mentored others, or driven impact without authority?
4. **Role-related knowledge** — Domain expertise for the specific role.

Typical googleyness questions:
- Tell me about a time you disagreed with your manager.
- Describe a project where you had to deal with ambiguity.
- What is the most complex problem you have solved?
- Tell me about a time you failed.
- How do you handle feedback?

#### Problem-Solving Approach (CRACK)

Google interviewers expect you to follow a structured approach:

1. **Clarify** — Repeat the problem. Ask about input size, constraints, edge cases.
2. **Restate** — Summarize in your own words. Confirm understanding.
3. **Approach** — Propose 2-3 solutions. Discuss trade-offs (time, space, scalability).
4. **Code** — Write clean, idiomatic code. Use meaningful variable names.
5. **K-test** — Walk through with an example. Check edge cases (empty, single element, overflow).

#### System Design Focus

Google places heavy emphasis on system design for senior roles (L5+). Typical topics:
- Design Google Docs (real-time collaboration)
- Design YouTube (video processing pipeline)
- Design a URL shortener (tinyurl)
- Design Google Search (web crawling + indexing)
- Design WhatsApp (messaging at scale)

Key frameworks: CACH (Clarify, Assumptions, Components, High-level design) or SCA (Scale, Components, Algorithms).

#### Sample Google Problem

```
Problem: "You are given a list of words. Group all anagrams together."
Company twist: "Now optimize for a streaming input where you cannot store all words in memory."
```

**Solution approach:** Use sorted string as key in hash map. For streaming, use trie-based bucketing with on-disk storage when memory fills.

```java
import java.util.*;

public class GroupAnagrams {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        for (String s : strs) {
            char[] arr = s.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(map.values());
    }

    // Streaming version: bucketed by length + sorted-trie prefix
    public List<List<String>> groupAnagramsStreaming(Iterator<String> stream) {
        // In real implementation, swap to disk-backed map when heap exceeds threshold
        Map<String, List<String>> map = new HashMap<>();
        while (stream.hasNext()) {
            String s = stream.next();
            char[] arr = s.toCharArray();
            Arrays.sort(arr);
            map.computeIfAbsent(new String(arr), k -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(map.values());
    }
}
```

### Amazon

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Online assessment (OA) | 90-120 min | 2-3 coding problems + work style assessment |
| Phone screen | 45-60 min | 1 coding + LP-based behavioral questions |
| On-site loop | 4-5 hours | 3-4 coding/design rounds + Bar Raiser |

#### 16 Leadership Principles (LPs)

Amazon's LPs are the single most important behavioral preparation area. Every answer must demonstrate one or more of these:

| # | Principle | Meaning |
|---|-----------|---------|
| 1 | Customer Obsession | Start with the customer and work backward |
| 2 | Ownership | Never say "that's not my job" |
| 3 | Invent and Simplify | Seek new ways, simplify everything |
| 4 | Are Right, A Lot | Strong judgment, self-correct when wrong |
| 5 | Learn and Be Curious | Never stop learning |
| 6 | Hire and Develop the Best | Raise the bar with every hire |
| 7 | Insist on the Highest Standards | Continuously raise the bar |
| 8 | Think Big | Small thinking is a self-fulfilling prophecy |
| 9 | Bias for Action | Speed matters in business |
| 10 | Frugality | Accomplish more with less |
| 11 | Earn Trust | Listen, speak candidly, benchmark |
| 12 | Dive Deep | Stay connected to details, audit frequently |
| 13 | Have Backbone; Disagree and Commit | Challenge when you disagree, commit once decided |
| 14 | Deliver Results | Focus on key inputs, deliver with quality |
| 15 | Strive to be Earth's Best Employer | Create safety, growth, and inclusivity |
| 16 | Success and Scale Bring Broad Responsibility | Think beyond your own team |

#### Bar Raiser Round

The Bar Raiser is a dedicated interviewer who:
- Has veto power over hire/no-hire decisions
- Is not part of the hiring team
- Evaluates whether the candidate raises the overall bar for the organization
- Asks deeper LP questions and stress-tests your answers

The Bar Raiser looks for:
- **Ownership** — Did you go above and beyond?
- **Bias for Action** — Did you move fast despite ambiguity?
- **Insist on Highest Standards** — Did you find and fix root causes?

#### LP-Based Behavioral Questions (5+ Sample STAR Answers)

**Q1: Tell me about a time you went above and beyond for a customer.**
*(Tests: Customer Obsession, Ownership)*

**STAR Answer:**
- **Situation:** Our team managed a payment processing service. A critical bug caused transactions to silently fail for 2% of users, losing ~$50K/day.
- **Task:** I needed to identify affected users, restore transactions, and prevent recurrence — all within 24 hours before month-end closing.
- **Action:** I built a reconciliation script that cross-referenced payment logs with order data, identified all 12,000 affected transactions, wrote a batch retry pipeline that reprocessed them with idempotency guarantees, and added monitoring alerts for silent failures. I also called each of our top 20 merchants personally to explain the remediation plan.
- **Result:** All 12,000 transactions were recovered within 12 hours. Merchants reported zero churn. The monitoring alert detected two similar issues the following week before they affected customers. I received a team-level recognition award.

---

**Q2: Tell me about a time you disagreed with your manager or team.**
*(Tests: Have Backbone; Disagree and Commit, Earn Trust)*

**STAR Answer:**
- **Situation:** My team was migrating from a monolith to microservices. The manager wanted a full rewrite over 6 months. I felt an incremental strangler-fig pattern was safer and faster.
- **Task:** I needed to convince the team that incremental migration reduced risk without extending timeline.
- **Action:** I built a prototype of the strangler pattern routing 5% of traffic to a new service, measured latency and error rates against the monolith, and presented data at the architecture review. I acknowledged the full-rewrite approach was cleaner in theory but showed that incremental delivered value faster. When the team still disagreed after two discussions, I committed to their decision but asked to start with a single bounded context as a proof of concept.
- **Result:** The single-context PoC succeeded in 3 weeks. The team adopted the strangler pattern for the remaining services. We completed the migration in 5 months — one month ahead of the original full-rewrite timeline — with zero production incidents.

---

**Q3: Give me an example of a time you invented or simplified a process.**
*(Tests: Invent and Simplify, Frugality)*

**STAR Answer:**
- **Situation:** Our deployment process required 8 manual steps across 3 tools, took 45 minutes, and failed 1 in 5 times. Engineers avoided deploying on Fridays.
- **Task:** I wanted to reduce deployment time to under 5 minutes with zero manual steps.
- **Action:** I wrote a CI/CD pipeline in 3 weeks that automated everything from build to canary to full rollout. I added automated rollback triggers (pagerduty on 5xx spike > 1%), Slack notifications at each stage, and a one-click override for emergencies. The total change was ~600 lines of YAML and Groovy.
- **Result:** Deploy time dropped from 45 min to 3 min. Failure rate went from 20% to 2%. Friday deployments resumed. The pipeline saved the team ~40 engineer-hours per week.

---

**Q4: Describe a time you had to make a decision with incomplete information.**
*(Tests: Bias for Action, Are Right A Lot)*

**STAR Answer:**
- **Situation:** A production database was growing at 200 GB/month. The existing server had 2 TB remaining. At the current rate, we would hit capacity in 10 months, but the procurement cycle was 4 months.
- **Task:** I needed to decide between vertical scaling (provision larger server — expensive, slow) vs. sharding (months of engineering work) with incomplete data on future growth rates.
- **Action:** I analyzed query patterns to estimate whether sharding was viable, interviewed 3 teams about their growth projections, and made a call to start sharding using customer_id modulo 16. I set a 2-month deadline to ship a minimal sharding layer and ordered a mid-range server as insurance. I communicated the decision and rationale in a doc shared with 4 stakeholder teams.
- **Result:** Sharding shipped in 6 weeks. The insurance server was never needed. The sharding design scaled to handle 10x the current volume.

---

**Q5: Tell me about a time you failed. What did you learn?**
*(Tests: Learn and Be Curious, Ownership)*

**STAR Answer:**
- **Situation:** I pushed a schema migration that added a NOT NULL column to a table with 50M rows. I tested on staging (10M rows) where it completed in 2 minutes. In production, it took 45 minutes and locked the table, causing a 22-minute read outage.
- **Task:** I needed to resolve the outage, recover the data, and prevent future migrations from causing downtime.
- **Action:** I killed the migration, restored the previous schema from backup, and ran the migration with ALGORITHM=INPLACE, LOCK=NONE using pt-online-schema-change. I then wrote a migration runbook that required every migration to specify estimated lock time, rollback plan, and validation query. I added a CI check that flagged any migration running ALTER on tables larger than 10M rows.
- **Result:** Went from 22-minute outage to zero-downtime migrations. The runbook became team standard. Two other teams adopted the same practice.

---

**Q6: Give an example of how you held a high standard for quality.**
*(Tests: Insist on the Highest Standards, Dive Deep)*

**STAR Answer:**
- **Situation:** Our team's test suite took 4 hours to run and had a 15% flaky test rate. Engineers routinely ignored test failures.
- **Task:** I needed to restore confidence in the test suite so that failures were taken seriously.
- **Action:** I quarantined all flaky tests (342 tests) into a separate pipeline, added a mandatory 3-strike rule (test flaky 3 times = auto-filed bug), and rewrote the 50 most impactful tests with deterministic assertions. I set up a weekly test-health dashboard showing pass rate, run time, and flakiness trend.
- **Result:** Flaky rate dropped from 15% to 0.3%. Test suite run time reduced to 45 minutes. Developer trust restored — no ignored failures in 6 months.

#### Sample Amazon Problem

```
Problem: "Serialize and deserialize a binary tree."
Company twist: "Now handle a tree with 100M nodes. Optimize for disk I/O."
```

```java
import java.util.*;

public class Codec {
    private static final String NULL = "#";
    private static final String SEP = ",";

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        serializeHelper(root, sb);
        return sb.toString();
    }

    private void serializeHelper(TreeNode node, StringBuilder sb) {
        if (node == null) {
            sb.append(NULL).append(SEP);
            return;
        }
        sb.append(node.val).append(SEP);
        serializeHelper(node.left, sb);
        serializeHelper(node.right, sb);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        Queue<String> queue = new LinkedList<>(Arrays.asList(data.split(SEP)));
        return deserializeHelper(queue);
    }

    private TreeNode deserializeHelper(Queue<String> queue) {
        String val = queue.poll();
        if (val.equals(NULL)) return null;
        TreeNode node = new TreeNode(Integer.parseInt(val));
        node.left = deserializeHelper(queue);
        node.right = deserializeHelper(queue);
        return node;
    }

    // For 100M nodes: use chunked file I/O with BFS-level order
    public void serializeToFile(TreeNode root, String filePath) {
        // Implementation writes level by level, 10K nodes per chunk
    }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}
```

### Microsoft

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Recruiter screen | 30 min | Background, leveling |
| Phone screen (1-2 rounds) | 45 min | Coding + design |
| On-site (4-5 rounds) | 4-5 hours | 2-3 coding, 1 system design, 1 ASK / behavioral |
| ASK review | — | Final calibration |

#### ASK Philosophy

Microsoft's ASK framework evaluates three dimensions:

1. **Algorithm** — Data structures, algorithms, problem-solving (LeetCode Medium/Hard)
2. **Silicon** — Low-level understanding: memory management, concurrency, OS concepts, performance
3. **Knowledge** — Domain expertise for the specific role (Azure, .NET, TypeScript, etc.)

Interviewers are trained to evaluate all three. A strong coder who cannot discuss cache locality or thread safety will not pass.

#### Design Discussions

Microsoft system design interviews focus on:
- **Azure-scale problems** — Design a blob storage system, design a VM provisioning pipeline
- **Enterprise concerns** — Multi-tenancy, data isolation, compliance, SLA guarantees
- **Trade-off analysis** — Why did you choose this consistency model? What happens when a datacenter fails?

#### Sample Microsoft Problem

```
Problem: "Design a thread-safe LRU cache."
Company twist: "Now make it work in a distributed environment with eventual consistency."
```

```java
import java.util.concurrent.*;
import java.util.*;

public class LRUCache<K, V> {
    private final int capacity;
    private final ConcurrentHashMap<K, Node<K, V>> map;
    private final Node<K, V> head;
    private final Node<K, V> tail;
    private final ReentrantLock lock = new ReentrantLock();

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new ConcurrentHashMap<>();
        this.head = new Node<>(null, null);
        this.tail = new Node<>(null, null);
        head.next = tail;
        tail.prev = head;
    }

    public V get(K key) {
        lock.lock();
        try {
            Node<K, V> node = map.get(key);
            if (node == null) return null;
            moveToHead(node);
            return node.value;
        } finally {
            lock.unlock();
        }
    }

    public void put(K key, V value) {
        lock.lock();
        try {
            Node<K, V> node = map.get(key);
            if (node != null) {
                node.value = value;
                moveToHead(node);
            } else {
                node = new Node<>(key, value);
                map.put(key, node);
                addToHead(node);
                if (map.size() > capacity) {
                    Node<K, V> removed = removeTail();
                    map.remove(removed.key);
                }
            }
        } finally {
            lock.unlock();
        }
    }

    private void moveToHead(Node<K, V> node) {
        removeNode(node);
        addToHead(node);
    }

    private void addToHead(Node<K, V> node) {
        node.next = head.next;
        node.prev = head;
        head.next.prev = node;
        head.next = node;
    }

    private void removeNode(Node<K, V> node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    private Node<K, V> removeTail() {
        Node<K, V> node = tail.prev;
        removeNode(node);
        return node;
    }

    private static class Node<K, V> {
        K key;
        V value;
        Node<K, V> prev;
        Node<K, V> next;
        Node(K key, V value) { this.key = key; this.value = value; }
    }
}
```

### Meta

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Phone screen | 45 min | 1-2 coding problems (LeetCode Medium) |
| On-site (4 rounds) | 4 hours | 2 coding, 1 behavioral, 1 product design/system design |

#### Speed and Accuracy

Meta interviews are known for:
- **Fast pace** — You need to solve 2 problems per coding round (45 min each)
- **No warm-up** — First problem starts immediately after introduction
- **Bug-free code** — Interviewers pay close attention to off-by-one errors, null pointer checks
- **Verbalize constantly** — Think out loud; silence is interpreted as being stuck

Key preparation tip: Practice solving LeetCode problems in under 20 minutes. Use a timer. Do 3-problem streaks without breaks.

#### Product Sense

Meta emphasizes product sense rounds heavily:
- **Design Instagram feed** — How do you rank posts? How do you personalize?
- **Design Facebook Messenger** — How do you handle real-time messaging at scale?
- **Design WhatsApp group chat** — How do you handle delivery receipts across 256 participants?

Product design questions are evaluated on:
1. **User focus** — Who uses this? What problem does it solve?
2. **Metrics** — How do you measure success? (DAU, retention, time spent)
3. **Iteration** — What would you ship in v1 vs v2 vs v3?
4. **Edge cases** — What happens when network is slow? Someone posts spam?

#### Behavioral Focus

Meta's behavioral round evaluates:
- **Impact** — What measurable outcomes did you drive?
- **Initiative** — Did you identify problems and fix them without being asked?
- **Conflict** — How do you handle disagreements? (Similar to Amazon LPs but less formalized)
- **Ambition** — Why Meta? Why now? Do you understand the mission?

#### Sample Meta Problem

```
Problem: "Given a binary tree, find the lowest common ancestor of two nodes."
Company twist: "The tree has parent pointers. Solve in O(1) space."
```

```java
public class LowestCommonAncestor {
    public Node lca(Node p, Node q) {
        int depthP = depth(p);
        int depthQ = depth(q);
        // Move deeper node up to same level
        while (depthP > depthQ) { p = p.parent; depthP--; }
        while (depthQ > depthP) { q = q.parent; depthQ--; }
        // Walk up together
        while (p != q) {
            p = p.parent;
            q = q.parent;
        }
        return p;
    }

    private int depth(Node node) {
        int d = 0;
        while (node != null) { node = node.parent; d++; }
        return d;
    }

    static class Node {
        int val;
        Node left;
        Node right;
        Node parent;
        Node(int v) { this.val = v; }
    }
}
```

### Netflix

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Recruiter call | 30 min | Culture discussion, expectations |
| Technical phone screen | 45 min | 1 coding problem |
| On-site (4-5 rounds) | 4-5 hours | Deep dives, system design, culture |
| Executive round | 45 min | VP or Director — strategic thinking |

#### Culture Deck

Netflix's culture deck (128 slides, publicly available) is the foundation of all interviews:

1. **Freedom and Responsibility** — We hire great people and give them freedom. With freedom comes accountability.
2. **Context, Not Control** — Leaders provide context; employees make decisions.
3. **Highly Aligned, Loosely Coupled** — Teams align on goals but operate independently.
4. **The Keeper Test** — Would you fight to keep this person? If not, let them go with a generous severance.
5. **No Rules Rules** — No vacation policy (take what you need). No expense policy (act in Netflix's best interest).

Interviewers ask questions specifically designed to assess whether you fit this culture:
- Tell me about a time you made a decision without asking permission.
- How do you handle a teammate who is not performing?
- Describe a situation where you had to push back on a requirement.
- What does "freedom and responsibility" mean to you?

#### Sample Netflix Problem

```
Problem: "Design a personalized recommendation system."
Company twist: "How would you handle the cold-start problem for a new user who has watched nothing?"
```

**Solution approach:** Use hybrid filtering — collaborative for users with history, content-based (genre, actors, directors) for cold start, and popularity + editorial picks for brand-new users.

```java
import java.util.*;
import java.util.stream.*;

public class RecommendationEngine {
    static class User {
        String id;
        Map<String, Double> genreAffinities; // genre -> score
        List<String> watchHistory;
        User(String id) {
            this.id = id;
            this.genreAffinities = new HashMap<>();
            this.watchHistory = new ArrayList<>();
        }
    }

    static class Content {
        String id;
        String title;
        Set<String> genres;
        double popularityScore;
        double avgRating;
    }

    public List<Content> recommend(User user, List<Content> catalog) {
        if (user.watchHistory.isEmpty()) {
            return handleColdStart(catalog);
        }
        return collaborativeFilter(user, catalog);
    }

    private List<Content> handleColdStart(List<Content> catalog) {
        // Weighted combination: 60% popularity + 30% rating + 10% editorial picks
        return catalog.stream()
            .sorted(Comparator.comparingDouble(c ->
                -0.6 * c.popularityScore - 0.3 * c.avgRating))
            .limit(10)
            .collect(Collectors.toList());
    }

    private List<Content> collaborativeFilter(User user, List<Content> catalog) {
        return catalog.stream()
            .filter(c -> !user.watchHistory.contains(c.id))
            .sorted(Comparator.comparingDouble(c ->
                -scoreByGenreAffinity(user, c)))
            .limit(20)
            .collect(Collectors.toList());
    }

    private double scoreByGenreAffinity(User user, Content content) {
        return content.genres.stream()
            .mapToDouble(g -> user.genreAffinities.getOrDefault(g, 0.0))
            .sum();
    }
}
```

### 5 Sample Technical Problems with Company-Specific Twists

**Problem 1: Google — Median of Two Sorted Arrays**

Base: LeetCode Hard — find median of two sorted arrays in O(log(m+n)).

Google twist: "Now you have K sorted arrays of different sizes. Find the median in O(K log N) or better."

```java
public class MedianOfKSortedArrays {
    public double findMedian(int[][] arrays) {
        int totalLen = 0;
        for (int[] arr : arrays) totalLen += arr.length;
        if (totalLen == 0) return 0.0;

        PriorityQueue<int[]> minHeap = new PriorityQueue<>(
            Comparator.comparingInt(a -> a[0]));
        for (int i = 0; i < arrays.length; i++) {
            if (arrays[i].length > 0) {
                minHeap.offer(new int[]{arrays[i][0], i, 0});
            }
        }

        boolean even = totalLen % 2 == 0;
        int targetIdx = totalLen / 2;
        int count = -1;
        Integer prev = null;

        while (!minHeap.isEmpty()) {
            int[] entry = minHeap.poll();
            int val = entry[0], arrIdx = entry[1], elemIdx = entry[2];
            prev = (count == targetIdx - 1 && even) ? val : prev;
            count++;

            if (count == targetIdx) {
                return even ? (prev + val) / 2.0 : val;
            }

            if (elemIdx + 1 < arrays[arrIdx].length) {
                minHeap.offer(new int[]{arrays[arrIdx][elemIdx + 1], arrIdx, elemIdx + 1});
            }
        }
        return 0.0;
    }
}
```

**Problem 2: Amazon — Item Recommendations**

Base: Given a list of products purchased together, recommend items for a shopping cart.

Amazon twist: "Your dataset has 100M transactions and 10M products. Design a real-time recommendation system that returns top-5 suggestions in under 50ms. The suggestions must be explainable to the customer."

```java
public class RealTimeRecommender {
    // Use precomputed co-occurrence matrix (sparse, stored as adjacency lists)
    // In production: Redis-backed with LRU eviction
    Map<String, Map<String, Integer>> coOccurrence; // productA -> (productB -> count)

    public List<String> recommend(String productId, int topK) {
        return coOccurrence.getOrDefault(productId, Collections.emptyMap())
            .entrySet().stream()
            .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
            .limit(topK)
            .map(Map.Entry::getKey)
            .collect(Collectors.toList());
    }

    // Explanation: "Customers who bought X also bought Y (Z times)"
    public String explain(String productId, String recommendation) {
        int count = coOccurrence.getOrDefault(productId, Collections.emptyMap())
            .getOrDefault(recommendation, 0);
        return String.format("Customers who bought %s also bought %s (%d times)",
            productId, recommendation, count);
    }
}
```

**Problem 3: Meta — Friend Recommendations**

Base: Given a social graph, recommend friends-of-friends.

Meta twist: "Scale to 2B users. Handle the case where someone follows 5000 people. Recommend in under 10ms."

```java
public class FriendRecommender {
    // For 2B users: adjacency stored in sharded Redis clusters
    // Use Bloom filters to skip already-followed users
    Map<String, Set<String>> graph; // userId -> set of friendIds

    public List<String> recommend(String userId, int topK) {
        Set<String> friends = graph.getOrDefault(userId, Collections.emptySet());
        Map<String, Integer> mutualCount = new HashMap<>();

        for (String friend : friends) {
            for (String friendOfFriend : graph.getOrDefault(friend, Collections.emptySet())) {
                if (!friendOfFriend.equals(userId) && !friends.contains(friendOfFriend)) {
                    mutualCount.merge(friendOfFriend, 1, Integer::sum);
                }
            }
        }

        return mutualCount.entrySet().stream()
            .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
            .limit(topK)
            .map(Map.Entry::getKey)
            .collect(Collectors.toList());
    }
}
```

**Problem 4: Microsoft — Distributed Rate Limiter**

Base: Implement a token bucket rate limiter.

Microsoft twist: "Design a distributed rate limiter that works across 100 microservices. Each service should be able to check rate limits locally without calling a centralized service for every request."

```java
public class DistributedRateLimiter {
    // Architecture:
    // 1. Central coordinator assigns token budgets per service per interval
    // 2. Each service runs a local token bucket with its assigned budget
    // 3. Services report usage to coordinator async
    // 4. Coordinator redistributes unused tokens every N seconds

    private final int localBudget;
    private final long windowMs;
    private int tokensRemaining;
    private long lastRefill;

    public DistributedRateLimiter(int localBudget, long windowMs) {
        this.localBudget = localBudget;
        this.windowMs = windowMs;
        this.tokensRemaining = localBudget;
        this.lastRefill = System.currentTimeMillis();
    }

    public synchronized boolean tryAcquire() {
        refillIfNeeded();
        if (tokensRemaining > 0) {
            tokensRemaining--;
            return true;
        }
        return false;
    }

    private void refillIfNeeded() {
        long now = System.currentTimeMillis();
        if (now - lastRefill >= windowMs) {
            tokensRemaining = localBudget;
            lastRefill = now;
        }
    }
}
```

**Problem 5: Netflix — Video Streaming Optimization**

Base: Design a video streaming pipeline.

Netflix twist: "Optimize for users with unstable internet connections. How do you decide between quality and buffering?"

```java
public class AdaptiveBitrateStreamer {
    // ABR (Adaptive Bitrate) algorithm
    // Monitors download speed and buffer fill, selects optimal quality tier

    static class QualityTier {
        String name;   // "1080p", "720p", "480p", "360p"
        int bitrate;   // kbps
        int maxResolution;
    }

    private static final List<QualityTier> TIERS = Arrays.asList(
        new QualityTier("1080p", 5000, 1920),
        new QualityTier("720p", 2500, 1280),
        new QualityTier("480p", 1000, 854),
        new QualityTier("360p", 500, 640)
    );

    private static final int TARGET_BUFFER_MS = 30_000;  // 30s buffer
    private static final int MIN_BUFFER_MS = 5_000;      // 5s minimum

    public QualityTier selectTier(double downloadSpeedKbps, int currentBufferMs) {
        if (currentBufferMs < MIN_BUFFER_MS) {
            // Buffer running low — drop to lowest
            return TIERS.get(TIERS.size() - 1);
        }

        // Select highest tier that sustained speed can support with 20% headroom
        for (QualityTier tier : TIERS) {
            if (downloadSpeedKbps * 0.8 >= tier.bitrate) {
                return tier;
            }
        }
        return TIERS.get(TIERS.size() - 1); // fallback to lowest
    }

    static class QualityTier {
        String name; int bitrate; int maxResolution;
        QualityTier(String n, int b, int r) { name = n; bitrate = b; maxResolution = r; }
    }
}
```

### Resume Tips for FAANG

| Aspect | Recommendation |
|--------|----------------|
| Length | Exactly 1 page (2 pages max for 10+ YoE at Microsoft) |
| Format | PDF, clean format, no columns, no graphics |
| Action verbs | "Architected", "Delivered", "Designed", "Led", "Optimized", "Reduced" |
| Quantify everything | "Reduced latency by 40%", "Served 1M+ requests/day" |
| Keywords | Match job description — AWS, Kubernetes, microservices, distributed systems |
| Projects | 2-3 impactful projects with tech stack and measurable outcomes |
| Experience | Reverse chronological, bullet points under each role |
| Education | Top of page for new grads, bottom for experienced |
| Avoid | Buzzwords ("synergy"), soft skills without evidence, listing technologies without context |
| ATS optimization | Spell out acronyms once (Amazon Web Services (AWS)), use section headers that scanners recognize |

**Resume dos and don'ts:**
- DO: Tailor your resume for each company (Amazon wants ownership stories, Google wants impact metrics)
- DO: Have a "Technical Skills" section with categories (Languages, Frameworks, Tools, Cloud)
- DON'T: Include a photo, age, gender, marital status
- DON'T: Use tables or multi-column layouts (resume parsers will garble them)
- DON'T: List every project you've ever done — pick the best 2-3

---

## 2. Product-Based Companies (India)

### Overview

India's product ecosystem includes homegrown giants like Flipkart, Uber (engineering hub), Swiggy, Zomato, Ola, Paytm, MakeMyTrip, and others. These companies offer competitive compensation (20-60 LPA for SDE-2) and interview processes that rival FAANG in rigor.

### Common Patterns

- **Round structure:** Online assessment → 2-3 technical rounds → Hiring manager round → HR
- **Focus areas:** DSA (Medium/Hard), system design (especially high-traffic scenarios), product sense, past experience deep-dive
- **Language freedom:** Most allow any language (Python preferred for speed, Java/C++ for performance)
- **Compensation:** 15-30 LPA fresher, 30-60 LPA SDE-2, 50-90 LPA Senior

### Flipkart

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Online assessment | 90 min | DSA (2-3 problems), MCQs on CS fundamentals |
| Machine coding round | 90 min | Design and implement a working application (e.g., splitwise, parking lot) |
| DSA round 1 | 45 min | Medium/Hard DSA — graphs, DP, trees |
| DSA round 2 | 45 min | Hard DSA — advanced problem solving |
| System design / Design round | 60 min | Product design, scale, database schema |
| Hiring manager + HR | 30 min | Cultural fit, expectations |

#### Key Preparation Areas

- **Machine coding** — This is unique to Flipkart among Indian product companies. You must build a functioning application with clean code, OOP principles, and test coverage in 90 minutes.
- **Product design** — Flipkart asks product-level design (Design Amazon cart, design Flipkart search) rather than pure system design.
- **DSA depth** — Two dedicated DSA rounds means you need breadth across topics.

#### Sample Flipkart Problem

```
Problem: "Design and implement a Splitwise-like expense management system in 90 minutes."
Requirements: Add expense, settle up, show balances, support groups.
```

```java
import java.util.*;

public class ExpenseManager {
    private Map<String, User> users;
    private List<Expense> expenses;

    public ExpenseManager() {
        this.users = new HashMap<>();
        this.expenses = new ArrayList<>();
    }

    public void addUser(String id, String name) {
        users.put(id, new User(id, name));
    }

    public void addExpense(String paidBy, double amount, List<String> splitAmong, SplitType type) {
        Expense e = new Expense(UUID.randomUUID().toString(), paidBy, amount, splitAmong, type);
        expenses.add(e);
        User payer = users.get(paidBy);
        double share = type == SplitType.EQUAL ? amount / splitAmong.size() : amount;

        for (String userId : splitAmong) {
            if (!userId.equals(paidBy)) {
                User u = users.get(userId);
                u.balances.merge(paidBy, -share, Double::sum);
                payer.balances.merge(userId, share, Double::sum);
            }
        }
    }

    public Map<String, Double> getBalances(String userId) {
        User u = users.get(userId);
        Map<String, Double> net = new HashMap<>(u.balances);
        // Remove zero balances
        net.entrySet().removeIf(e -> Math.abs(e.getValue()) < 0.01);
        return net;
    }

    static class User {
        String id;
        String name;
        Map<String, Double> balances;
        User(String id, String name) {
            this.id = id; this.name = name;
            this.balances = new HashMap<>();
        }
    }

    static class Expense {
        String id; String paidBy; double amount;
        List<String> splitAmong; SplitType type;
        Expense(String id, String paidBy, double amount, List<String> splitAmong, SplitType type) {
            this.id = id; this.paidBy = paidBy; this.amount = amount;
            this.splitAmong = splitAmong; this.type = type;
        }
    }

    enum SplitType { EQUAL }
}
```

### Uber

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Coding screen | 60 min | 2 LeetCode Medium problems |
| Technical round 1 | 60 min | DSA + problem solving |
| Technical round 2 | 60 min | System design (heavy) |
| Technical round 3 | 60 min | Engineering rigor — code review, debugging, testing |
| Manager round | 45 min | Leadership, ownership, past experience |

#### Engineering Rigor

Uber is known for its engineering rigor. Key expectations:
- **Production-ready code** — Handle edge cases, logging, error handling, input validation
- **Testing mindset** — How would you test this? What unit/integration tests would you write?
- **Debugging** — Given a production issue, how do you root-cause it?
- **Monitoring** — What metrics would you track? How do you set up alerts?

#### Sample Uber Problem

```
Problem: "Design Uber's ride-matching system."
Requirements: Match riders to nearby drivers in real-time, handle surge pricing, optimize ETA calculation.
```

```java
import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;

public class RideMatchingService {
    // For real production: use geohashing for spatial indexing
    // This example shows a simplified grid-based approach

    static class Location {
        double lat, lng;
        Location(double lat, double lng) { this.lat = lat; this.lng = lng; }
        double distanceTo(Location other) {
            double dlat = Math.toRadians(other.lat - this.lat);
            double dlng = Math.toRadians(other.lng - this.lng);
            double a = Math.sin(dlat/2) * Math.sin(dlat/2) +
                       Math.cos(Math.toRadians(this.lat)) *
                       Math.cos(Math.toRadians(other.lat)) *
                       Math.sin(dlng/2) * Math.sin(dlng/2);
            return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        }
    }

    static class Driver {
        String id; Location location; boolean available;
        Driver(String id) { this.id = id; this.available = true; }
    }

    static class RideRequest {
        String id; String userId; Location pickup; Location dropoff;
        RideRequest(String id, String userId, Location pickup, Location dropoff) {
            this.id = id; this.userId = userId;
            this.pickup = pickup; this.dropoff = dropoff;
        }
    }

    private final Map<String, Driver> drivers = new ConcurrentHashMap<>();

    public void updateLocation(String driverId, Location loc) {
        drivers.computeIfPresent(driverId, (k, d) -> { d.location = loc; return d; });
    }

    public List<Driver> findNearbyDrivers(Location pickup, double radiusKm) {
        return drivers.values().stream()
            .filter(d -> d.available && d.location.distanceTo(pickup) <= radiusKm)
            .sorted(Comparator.comparingDouble(d -> d.location.distanceTo(pickup)))
            .limit(10)
            .collect(Collectors.toList());
    }

    public Driver matchDriver(RideRequest request) {
        List<Driver> nearby = findNearbyDrivers(request.pickup, 5.0);
        if (nearby.isEmpty()) return null;
        Driver best = nearby.get(0);
        best.available = false;
        return best;
    }
}
```

### Swiggy / Zomato

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Online assessment | 90 min | DSA + SQL + system design MCQs |
| Technical round 1 | 60 min | DSA — arrays, strings, hashing, trees |
| Technical round 2 | 60 min | System design — scale, data pipelines |
| Data analytics round (some) | 45 min | SQL, data modeling, experimentation |
| Manager / HR | 30 min | Culture, expectations |

#### Data-Driven Problems

Swiggy and Zomato emphasize data-driven problem solving:
- **SQL** — Complex joins, window functions, aggregations on order data
- **Metrics** — How would you measure delivery time quality? What's a good cancellation rate?
- **A/B testing** — How do you test a new ranking algorithm? What metrics would you track?
- **Experimentation** — How do you validate that a new feature improves retention?

#### Sample Swiggy/Zomato Problem

```
Problem: "Given a log of restaurant orders (order_id, restaurant_id, customer_id, order_time, delivery_time, amount), write a query to find restaurants with the highest order cancellation rate in the last 30 days."
```

```sql
WITH order_stats AS (
    SELECT
        restaurant_id,
        COUNT(*) AS total_orders,
        SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled_orders
    FROM orders
    WHERE order_time >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY)
    GROUP BY restaurant_id
    HAVING total_orders > 100
)
SELECT
    restaurant_id,
    ROUND(cancelled_orders * 100.0 / total_orders, 2) AS cancellation_rate
FROM order_stats
ORDER BY cancellation_rate DESC
LIMIT 10;
```

### Ola, Paytm, MakeMyTrip

#### Interview Process (Common Pattern)

| Round | Duration | Focus |
|-------|----------|-------|
| Online assessment | 60-90 min | DSA + CS fundamentals MCQs |
| DSA round 1 | 45 min | Arrays, strings, basic DSA |
| DSA round 2 | 45 min | Advanced DSA — DP, graphs |
| Design round | 45-60 min | System design or product design |
| Manager / HR | 30 min | Culture, behavioral |

#### Ola-Specific Focus

- **System design at scale** — Design a fleet management system, cab allocation
- **Hardware + software** — IoT integration with driver devices
- **Geospatial problems** — Route optimization, ETA prediction, geofencing

#### Paytm-Specific Focus

- **Fintech domain** — Understanding of payment systems, wallets, UPI
- **Concurrency** — How do you handle double-spending? Race conditions in wallet transactions?
- **Security** — Secure payment flows, encryption, tokenization
- **Compliance** — RBI guidelines, KYC, transaction limits

#### MakeMyTrip-Specific Focus

- **Search optimization** — Price comparison across thousands of flights/hotels
- **Cache invalidation** — Real-time pricing changes, seat availability
- **Recommendation engine** — Personalized travel suggestions
- **Distributed transactions** — Booking flights across multiple airlines (saga pattern)

#### Sample Question Patterns

| Company | Question Pattern | Example |
|---------|-----------------|---------|
| Ola | Geospatial + optimization | "Find the nearest available cab using quadtrees" |
| Paytm | Concurrency + fintech | "Design a thread-safe wallet transfer system" |
| MakeMyTrip | Search + caching | "Design a ticket search that returns results under 200ms" |

### Typical Compensation Ranges (India, 2024-2025)

| Company | SDE-1 (Fresher) | SDE-2 | SDE-3 / Senior |
|---------|-----------------|-------|----------------|
| Flipkart | 20-30 LPA | 40-60 LPA | 60-90 LPA |
| Uber | 25-35 LPA | 45-70 LPA | 70-100 LPA |
| Swiggy | 18-25 LPA | 35-50 LPA | 50-80 LPA |
| Zomato | 16-22 LPA | 30-45 LPA | 45-70 LPA |
| Ola | 14-20 LPA | 28-40 LPA | 40-60 LPA |
| Paytm | 12-18 LPA | 25-35 LPA | 35-55 LPA |
| MakeMyTrip | 12-16 LPA | 22-32 LPA | 32-50 LPA |

*Note: Numbers include base salary + RSUs/ESOPs + joining bonus. Actual offers vary by location, experience, and market conditions.*

---

## 3. Service-Based Companies

### Overview

Service-based companies (TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Tech Mahindra) hire in bulk through campus placements. They form the entry point for the majority of engineering graduates in India.

### Common Patterns

| Aspect | Details |
|--------|---------|
| Selection rounds | Aptitude test + coding assessment + technical interview + HR |
| Aptitude focus | Quantitative aptitude, logical reasoning, verbal ability |
| Coding focus | Basics — arrays, strings, simple algorithms |
| Technical interview | CS fundamentals (OS, DBMS, Networks, OOP) |
| Compensation | 3.5 LPA - 11.5 LPA (varies by role and company) |
| Bond | 1-2 years (common — read terms carefully) |

### TCS (Tata Consultancy Services)

#### Hiring Programs

TCS has multiple hiring tracks:

**TCS Ninja:**
- Target: Entry-level engineers
- CTC: ~3.5 LPA
- Process: NQT (National Qualifier Test) → Technical interview → HR
- NQT sections: Quantitative aptitude (20 Q), verbal ability (15 Q), logical reasoning (20 Q), coding (2 problems)
- Coding difficulty: Easy — pattern printing, array manipulation, string basics

**TCS Digital:**
- Target: Higher-performers on NQT
- CTC: ~7-8 LPA
- Process: NQT → Advanced coding round → Technical + Managerial interview
- Advanced coding: 2-3 Medium-level problems (graphs, DP, trees)
- Additional: System design or case study discussion

**TCS Prime:**
- Target: Top 1% performers
- CTC: ~11-12 LPA
- Process: Same as Digital but higher cutoffs

#### Sample TCS Aptitude Question

```
Question: A train 150m long passes a platform 250m long in 30 seconds. What is the speed of the train in km/h?

Solution:
Total distance = train length + platform length = 150 + 250 = 400m
Time = 30 seconds
Speed = 400/30 = 13.33 m/s
In km/h: 13.33 * (18/5) = 48 km/h
```

#### Sample TCS Coding Question

```java
// Problem: Find the second largest element in an array without sorting.
public class SecondLargest {
    public static int findSecondLargest(int[] arr) {
        if (arr.length < 2) return -1;
        int first = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }
        return second == Integer.MIN_VALUE ? -1 : second;
    }

    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};
        System.out.println("Second largest: " + findSecondLargest(arr));
    }
}
```

#### TCS Preparation Strategy

| Area | Focus |
|------|-------|
| Aptitude | Time-speed-distance, percentages, profit-loss, probability, permutations, data interpretation |
| Logical reasoning | Blood relations, coding-decoding, syllogisms, seating arrangement, direction sense |
| Verbal ability | Reading comprehension, sentence correction, synonyms, antonyms |
| Coding | Arrays, strings, basic recursion, pattern printing |
| Technical interview | OOP concepts, SQL queries, OS basics, networking basics, your projects |

### Infosys

#### Hiring Programs

**InfyTQ (Infosys Talent Quotient):**
- Platform-based assessment open to all 2024/2025 graduates
- Process: InfyTQ certification test (2 hours) → Interview shortlisting
- Sections: Programming aptitude, DSA, object-oriented programming, DBMS, operating systems
- Benefits: Get Infosys certification + interview opportunity

**Infosys System Engineer (SE):**
- Entry-level engineering role
- CTC: ~5-6 LPA (SE), ~8-9 LPA (SE with PPA)
- Process: InfyTQ score → Technical + HR interview

**Infosys Specialist Programmer (SP):**
- Higher grade with better pay
- CTC: ~9-11 LPA
- Process: Harder InfyTQ + Advanced coding round + Technical deep-dive
- Focus: DSA, system design, coding expertise

#### Sample Infosys Question

```java
// Problem: Given a string, find the length of the longest substring without repeating characters.
public class LongestSubstring {
    public static int lengthOfLongestSubstring(String s) {
        int maxLen = 0;
        int left = 0;
        Map<Character, Integer> map = new HashMap<>();

        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (map.containsKey(c)) {
                left = Math.max(left, map.get(c) + 1);
            }
            map.put(c, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // 3
    }
}
```

### Wipro

#### Hiring Programs

**WILP (Wipro Integrated Learning Program):**
- 12-month work-integrated learning program
- CTC: ~2.5-3 LPA (during training), converts to ~3.5 LPA post-training
- Process: Aptitude + coding + essay writing + interview
- Bond: 1 year

**Wipro Turbo (Project Engineer):**
- Direct hire for engineering roles
- CTC: ~5.5-6.5 LPA
- Process: Aptitude + coding + technical interview + HR
- Updated structure: Now includes Wipro National Level Aptitude Test (NLAT) for shortlisting

**Wipro Engineer:**
- Higher tier than Project Engineer
- CTC: ~6.5-8 LPA
- Focus: Strong DSA, system design basics, past projects

#### Sample Wipro Question

```
Aptitude: In a class of 60 students, 40 like cricket, 30 like football, and 20 like both. How many like neither?

Solution:
Total = 60
Cricket = 40, Football = 30, Both = 20
Only cricket = 40 - 20 = 20
Only football = 30 - 20 = 10
Total who like at least one = 20 + 10 + 20 = 50
Neither = 60 - 50 = 10
```

### Accenture

#### Hiring Process

| Stage | Details |
|-------|---------|
| Registration | Through campus placement cell or Accenture careers portal |
| Cognitive assessment | 90 min — verbal ability, logical reasoning, quantitative aptitude |
| Coding assessment | 45 min — 2 coding problems |
| Communication assessment | 30 min — spoken and written English evaluation |
| Technical + HR interview | 30-45 min — CS fundamentals, projects, communication |
| Offer | Dependent on performance across all stages |

#### New Associate vs Associate Engineer

- **New Associate** (entry-level): ~4.5 LPA
- **Associate Software Engineer (ASE)**: ~5-6 LPA
- **Senior Software Engineer**: ~7-8 LPA (experienced hires)

#### Sample Accenture Coding Question

```java
// Problem: Check if two strings are anagrams.
public class AnagramCheck {
    public static boolean areAnagrams(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        int[] count = new int[26];
        for (int i = 0; i < s1.length(); i++) {
            count[s1.charAt(i) - 'a']++;
            count[s2.charAt(i) - 'a']--;
        }
        for (int c : count) {
            if (c != 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(areAnagrams("listen", "silent")); // true
    }
}
```

### Cognizant

#### Hiring Process

| Stage | Details |
|-------|---------|
| Online test | 90 min — quantitative aptitude, logical reasoning, verbal ability, automata coding |
| Technical interview | 30-45 min — programming, core subjects, projects |
| HR interview | 15-20 min — communication, availability, location flexibility |

#### Compensation (Fresher)

- **Programmer Analyst Trainee**: ~4-5 LPA
- **Programmer Analyst**: ~5.5-6.5 LPA

#### Sample Cognizant Question

```
Question: Find the missing number in the sequence: 2, 6, 12, 20, ?, 42

Answer: 30
Pattern: 1×2, 2×3, 3×4, 4×5, 5×6, 6×7
Or: +4, +6, +8, +10, +12
```

### Capgemini

#### Hiring Process

| Stage | Details |
|-------|---------|
| Pre-placement talk | Company overview (usually in campus) |
| Online assessment | 80 min — aptitude, reasoning, English, pseudo-code, essay writing |
| Technical interview | 30 min — CS fundamentals, programming, project discussion |
| HR interview | 15-20 min |

#### Compensation

- **Analyst**: ~4-5 LPA
- **Senior Analyst**: ~5.5-7 LPA

#### Preparation Focus

- **Pseudo-code** — Capgemini often asks to trace code written in pseudocode. Understand loops, conditionals, recursion.
- **Essay writing** — Write a short essay on a topic (e.g., "Impact of AI on society"). Practice writing 200-300 words in 15 minutes.
- **English fluency** — Interviews emphasize communication skills heavily.

### Tech Mahindra

#### Hiring Process

| Stage | Details |
|-------|---------|
| Online test | 60 min — aptitude, logical, verbal, coding |
| Technical + HR interview | Combined round, 25-30 min |

#### Compensation

- **Engineer Trainee**: ~3.5-4 LPA
- **Software Engineer**: ~4.5-5.5 LPA

### Sample Aptitude Questions (Service-Based)

**Q1: Ratio and Proportion**
```
If A:B = 2:3 and B:C = 5:7, find A:C.
Solution: A:B = 2:3 = 10:15, B:C = 5:7 = 15:21
A:C = 10:21
```

**Q2: Work and Time**
```
A can complete a work in 12 days. B is 50% more efficient than A. How many days will B take?
Solution: B's efficiency = 1.5 × A's efficiency
B's time = 12 / 1.5 = 8 days
```

**Q3: Probability**
```
Two dice are rolled. What is the probability that the sum is 7?
Solution: Total outcomes = 36
Favorable: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6
Probability = 6/36 = 1/6
```

**Q4: Permutations**
```
How many ways can the letters of "APPLE" be arranged?
Solution: 5 letters with P repeated twice
= 5! / 2! = 120 / 2 = 60
```

### Typical Compensation Ranges (Service-Based, Fresher)

| Company | Role | CTC Range |
|---------|------|-----------|
| TCS Ninja | Trainee | 3.2 - 3.5 LPA |
| TCS Digital | Trainee | 7 - 8 LPA |
| TCS Prime | Trainee | 11 - 12 LPA |
| Infosys SE | System Engineer | 5 - 6 LPA |
| Infosys SP | Specialist Programmer | 9 - 11 LPA |
| Wipro WILP | Trainee | 2.5 - 3.5 LPA |
| Wipro Turbo | Project Engineer | 5.5 - 6.5 LPA |
| Accenture ASE | Associate Software Engineer | 5 - 6 LPA |
| Cognizant PAT | Programmer Analyst Trainee | 4 - 5 LPA |
| Capgemini | Analyst | 4 - 5 LPA |
| Tech Mahindra | Engineer Trainee | 3.5 - 4.5 LPA |

### Red Flags to Avoid (Service-Based)

| Red Flag | Why It Matters |
|----------|----------------|
| Bond agreement | Read the fine print — some have 2-year bonds with 1-2L penalty |
| Bench period | Some companies keep you on bench without pay after training |
| Service agreement fees | Training fees deducted if you leave early |
| Location flexibility denial | Be prepared to relocate anywhere in India |
| Low variable pay | Base salary matters more than promises of "performance bonus" |
| No project guarantee | Some hires wait 3-6 months for project allocation |

### Resources for Service-Based Preparation

- **Aptitude:** RS Aggarwal's Quantitative Aptitude, Indiabix (online practice)
- **Coding:** HackerRank easy/medium problems, GeeksforGeeks basic DSA
- **CS Fundamentals:** GateSmashers YouTube (OS, DBMS, Networking), GeeksforGeeks interview questions
- **Mock tests:** PrepInsta, FacePrep, IndiaBix
- **Previous papers:** Ask seniors for company-specific test papers

---

## 4. Startups & Unicorns

### Overview

Startups (early-stage to unicorn) offer a different interview experience than established product or service companies. They value versatility, speed, and ownership over depth in any single area.

### What Startups Look For

#### Versatility Over Specialization

Unlike FAANG where SDEs often specialize in a narrow domain for years, startups need engineers who can:
- Design a database schema at 10 AM, debug a frontend issue at noon, set up CI/CD by 3 PM, and write an API by 5 PM
- Work across the full stack (frontend, backend, infra, DevOps)
- Pick up new languages and frameworks quickly
- Make architectural decisions without a dedicated architect team

**Interview implications:** Your interview will cover a wider range of topics — you may get a frontend question, a backend system design, and a SQL optimization problem in the same loop.

#### Ownership Mindset

Startups value candidates who:
- Act like owners, not employees
- Proactively identify problems and fix them
- Take responsibility for outcomes, not just tasks
- Are comfortable with ambiguity and changing requirements

#### Product Sense

In a startup, every engineer influences the product. You will be asked:
- What do you think of our product? How would you improve it?
- How would you measure success for this feature?
- What would you build if you had two weeks to ship anything?

#### Culture Fit

Startup culture fit evaluation focuses on:
- **Communication** — Can you explain technical concepts to non-technical team members?
- **Collaboration** — Startups have flat hierarchies; can you work without a manager directing every step?
- **Resilience** — Things break, priorities change, features get canceled. How do you handle it?
- **Passion** — Do you care about the problem the startup is solving?

### How Startup Interviews Differ

| Aspect | FAANG | Startup |
|--------|-------|---------|
| Focus | DSA depth + system design | Full-stack + product + pragmatism |
| Coding difficulty | LeetCode Hard | LeetCode Medium, often real-world problems |
| System design | L4+ only, 45-60 min | All levels, often integrated with code |
| Behavioral | Formal (STAR, LPs) | Conversational product discussion |
| Take-home assignment | Rare | Common (build a small app) |
| Decision speed | 2-6 weeks | 1-2 weeks |
| Rounds | 5-6 | 3-4 |

### Identifying Good Startups

Not all startups are created equal. Here is how to evaluate them:

| Factor | Green Flags | Red Flags |
|--------|-------------|-----------|
| Funding | Series A+ from top VCs (Sequoia, Accel, Tiger Global, YC) | Bootstrap with no clear path to revenue |
| Product-market fit | Growing user base, positive unit economics | Building for "everyone" without focus |
| Team | 2-3 founders with domain expertise, ex-FAANG engineers | Founders with no technical background, all junior team |
| Compensation | Competitive base + meaningful ESOP (0.1-1% for early employees) | "We'll compensate you with experience" |
| Culture | Blameless postmortems, transparent communication | 60+ hour weeks celebrated, founder-driven blame |
| Growth | Clear promotion tracks, learning budget | No senior engineers to learn from |
| Liquidity | Path to exit (IPO, acquisition) | ESOPs that will never vest or be worthless |

### Negotiation Strategies for Startups

#### ESOPs (Employee Stock Option Plans)

ESOPs are the most complicated part of startup compensation. Understand these terms:

| Term | Meaning |
|------|---------|
| Strike price | Price per share you pay to exercise options |
| FMV (Fair Market Value) | Current value per share (usually = strike price at grant) |
| Vesting schedule | Typically 4 years with 1-year cliff |
| Exercise window | Time after leaving to exercise (90 days typical — short!) |
| Liquidation preference | Who gets paid first when company is acquired |
| Dilution | Your percentage ownership decreases as more shares are issued |

**Negotiation tips:**
- Negotiate base salary first; equity is secondary
- Ask about the pool — is the equity from a fresh pool or existing?
- Understand the difference between options and RSUs
- Check if early exercise is available (tax advantage in the US)
- Never trade base salary for equity at an early-stage company

#### Base Salary Negotiation

Even at startups, base salary is negotiable:

1. **Know your BATNA** — What is your next-best option? Use competing offers.
2. **Delay salary conversations** — Let them want you first.
3. **Total comp frame** — Talk about total package, not just base salary.
4. **Be specific** — "I would like to see $X base" is better than "more."
5. **Don't lie** — About existing offers or current compensation.

#### Sample Negotiation Script

```
"Thank you for the offer. I am very excited about [Company] and the
problem you are solving. Based on my research and comparing with other
opportunities, I was hoping for a base salary closer to [number].
I understand budget constraints — would it be possible to bridge the gap
with a signing bonus or additional equity?"
```

### Sample Startup Interview Questions

**Coding:**
```java
// Problem: Build a real-time search autocomplete system that returns top-5 suggestions.
// Startup context: Must work offline-first for mobile users.

public class AutocompleteSystem {
    static class TrieNode {
        Map<Character, TrieNode> children = new HashMap<>();
        Map<String, Integer> frequency = new HashMap<>();
    }

    private final TrieNode root;

    public AutocompleteSystem() {
        this.root = new TrieNode();
    }

    public void addSearch(String query, int count) {
        TrieNode node = root;
        for (char c : query.toCharArray()) {
            node = node.children.computeIfAbsent(c, k -> new TrieNode());
            node.frequency.merge(query, count, Integer::sum);
        }
    }

    public List<String> getTopSuggestions(String prefix, int topK) {
        TrieNode node = root;
        for (char c : prefix.toCharArray()) {
            node = node.children.get(c);
            if (node == null) return Collections.emptyList();
        }
        return node.frequency.entrySet().stream()
            .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
            .limit(topK)
            .map(Map.Entry::getKey)
            .collect(Collectors.toList());
    }
}
```

**System Design (Startup Style):**
```
Problem: "Design a URL shortening service like bit.ly."
Startup twist: "You have 2 weeks and a team of 1 (you). What do you build?"
```

The startup expects:
- **Pragmatism** — What can you build quickly? SQLite vs PostgreSQL? Single server vs cluster?
- **Trade-offs** — Why not use an existing service? When do you need to scale?
- **Incremental delivery** — V1 is a working link shortener. V2 adds analytics. V3 scales.

**Product Discussion:**
```
Problem: "Our app has 10K DAU but 30% of users churn within 7 days.
How would you diagnose the problem and what would you do about it?"
```

Framework:
1. **Hypothesize** — Is it onboarding? Time-to-value? Missing features?
2. **Validate** — What data would you look at? What experiments would you run?
3. **Prioritize** — What is the highest-leverage fix?
4. **Measure** — How do you know if your fix worked?

### Startup Compensation Ranges (India)

| Stage | Base Salary | Equity | Total Package |
|-------|-------------|--------|---------------|
| Pre-seed / Seed | 6-12 LPA | 0.5-2% | Lower base, high upside |
| Series A | 12-20 LPA | 0.1-0.5% | Moderate base |
| Series B+ | 18-30 LPA | 0.05-0.2% | Balanced |
| Unicorn | 25-50 LPA | 0.01-0.1% | Competitive with product companies |

### Red Flags at Startups

| Red Flag | What to Watch For |
|----------|-------------------|
| "We work hard and play hard" | Translation: 70-hour work weeks |
| No clear product roadmap | You will build things that get thrown away monthly |
| Founder does not code | Technical founder who stopped coding is a yellow flag |
| High turnover | Ask how many engineers joined and left in the last year |
| No senior engineers | You will have no mentors |
| "Equity is worth millions" | Without a liquidity event, equity is paper |
| No structured feedback | Performance reviews are reactive, not regular |
| Unclear role | "You will wear many hats" means you do everyone's job |

### Preparation Strategy for Startups

| Area | How to Prepare |
|------|----------------|
| Full-stack skills | Build and deploy a complete web app (React + Node.js + PostgreSQL) |
| Pragmatic system design | Focus on build-vs-buy decisions, MVP architecture, scaling incrementally |
| Product sense | Use every product you use critically — what would you improve? |
| Speed | Many startups value shipping fast over perfect architecture |
| Communication | Practice explaining technical decisions to non-technical stakeholders |
| Portfolio | GitHub with real projects, not just cloned tutorials |
| Domain knowledge | Deep-dive into the startup's domain before the interview |

### Resources for Startup Preparation

- **YC Startup School** — Free course on building startups (understanding context matters)
- **Hacker News (news.ycombinator.com)** — Follow startup culture and discussions
- **ProductHunt** — See what new products are being built
- **High-Growth Engineer newsletter** — Content on startup engineering culture
- **Lenny's Podcast** — Product and growth insights
- **Startup interview guides** — Glassdoor company reviews, Blind app discussions

---

## 5. Premium Semiconductor & Enterprise Companies

### Overview

Beyond FAANG and product companies, premium semiconductor firms (NVIDIA, Qualcomm, Texas Instruments) and enterprise software giants (Adobe, Salesforce, Oracle, LinkedIn) offer exceptional careers with unique interview patterns. These companies test deep domain knowledge — hardware-software co-design for chip companies, enterprise-scale architecture for software giants.

### Common Threads

- **Domain depth** — Chip companies test OS, computer architecture, C/C++ proficiency; enterprise companies test system design at scale
- **Low-level coding** — Semiconductors ask pointer manipulation, memory management, bit manipulation
- **System design** — Enterprise companies focus on distributed systems handling millions of transactions
- **Behavioral fit** — Cultural alignment with company values is heavily weighted
- **Compensation** — ₹25-60 LPA for software roles; competitive with FAANG for senior positions

---

### Apple

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Recruiter screen | 30 min | Background, availability, team preference |
| Technical phone screen | 45-60 min | 1-2 LeetCode Medium/Hard problems (Swift/Obj-C/Java) |
| On-site loop (6-7 rounds) | 6-8 hours | 4-5 coding, 1 system design, 1 hiring manager, 1 behavioral |
| Team match / Direct offer | — | Team-specific alignment after passing HC |

#### What Apple Looks For

- **Craftsmanship** — Apple values beautifully written, production-quality code. Variable naming, edge-case handling, and code structure are scrutinized.
- **Cross-functional thinking** — How does your feature interact with hardware, design, privacy, and accessibility?
- **Product passion** — Apple interviewers expect you to use and understand Apple products deeply.
- **Attention to detail** — Pixel-perfect, bit-perfect thinking. Edge cases matter.
- **Privacy & security mindset** — Apple prioritizes on-device processing, minimal data collection, and user privacy.

#### Sample Technical Problems

**Problem: "Implement a thread-safe in-memory cache with LRU eviction policy."**
Apple twists: "Now make it persist to disk" and "How does the cache behave under memory pressure on iOS?"

```java
import java.util.concurrent.*;
import java.util.*;

public class LRUCache<K, V> {
    private final int capacity;
    private final Map<K, V> cache = new ConcurrentHashMap<>();
    private final Deque<K> order = new ConcurrentLinkedDeque<>();

    public LRUCache(int capacity) { this.capacity = capacity; }

    public synchronized V get(K key) {
        if (!cache.containsKey(key)) return null;
        order.remove(key);
        order.addFirst(key);
        return cache.get(key);
    }

    public synchronized void put(K key, V value) {
        if (cache.containsKey(key)) {
            order.remove(key);
        } else if (cache.size() >= capacity) {
            K oldest = order.removeLast();
            cache.remove(oldest);
        }
        order.addFirst(key);
        cache.put(key, value);
    }
}
```

**Problem: "Reverse a linked list."**
Apple twist: "Now implement it recursively and explain the memory implications on a resource-constrained device."

```java
public class ReverseLinkedList {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null, curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    public ListNode reverseListRecursive(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode newHead = reverseListRecursive(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }
}
```

#### Sample HR / Behavioral Questions

| Question | What They Are Testing |
|----------|----------------------|
| Tell me about a time you had to balance quality with shipping speed. | Craftsmanship vs. pragmatism |
| Describe a project where you had to learn a new technology rapidly. | Adaptability, learning velocity |
| How do you handle feedback on code you have written? | Ego, growth mindset |
| Tell me about a time you advocated for a user-facing change. | Product passion, user empathy |
| What Apple product do you love and what would you improve? | Product knowledge, critical thinking |

#### Apple-Specific Tips

- Study Apple's Human Interface Guidelines — they test design sensibility
- Practice Swift or Objective-C if targeting iOS/macOS roles; Java/C++ for server-side
- Know Apple's privacy stance — differential privacy, on-device ML, App Tracking Transparency
- Be prepared for "surprise" rounds — you may meet a manager from a completely different team
- Apple values tenure — demonstrate long-term thinking in your answers
- **Key resources:** Apple's HIG (Human Interface Guidelines), WWDC sessions, Swift.org

---

### LinkedIn

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Recruiter call | 30 min | Background, role alignment |
| Technical phone screen | 45-60 min | 1 LeetCode Medium + system design basics |
| On-site loop (4-5 rounds) | 5 hours | 2 coding, 1 system design, 1 behavioral (values), 1 hiring manager |
| Team selection | — | Cross-functional team matching |

#### What LinkedIn Looks For

- **Transformation** — LinkedIn's motto is "Transforming the way the world works." Candidates should show career growth and learning agility.
- **Data-driven thinking** — Many problems involve graph algorithms (professional network), recommendation systems, and personalization.
- **Professional impact** — How have you changed your previous teams or organizations?
- **Collaboration** — Cross-team collaboration is central to LinkedIn's culture.
- **Members first** — LinkedIn emphasizes member trust and experience over monetization.

#### Sample Technical Problems

**Problem: "Design a professional social network feed."**
LinkedIn twist: "How do you rank content based on relevance, recency, and relationship strength?"

```java
// Simplified feed ranking model
public class FeedRanker {
    static class Post {
        int authorId; long timestamp; int engagementScore;
        int connectionStrength; // 0 = stranger, 10 = close connection
        Post(int authorId, long ts, int score, int strength) {
            this.authorId = authorId; this.timestamp = ts;
            this.engagementScore = score; this.connectionStrength = strength;
        }
    }

    public double calculateRelevance(Post p, long currentTime) {
        double recencyWeight = 1.0 / (1 + Math.log(currentTime - p.timestamp + 1));
        double engagementWeight = Math.log(p.engagementScore + 1) * 0.3;
        double connectionWeight = p.connectionStrength * 0.5;
        return recencyWeight + engagementWeight + connectionWeight;
    }
}
```

**Problem: "Find if a path exists between two nodes in a graph."**
LinkedIn twist: "This represents a professional network. Now find the shortest path in terms of mutual connections."

```java
import java.util.*;

public class ShortestConnectionPath {
    public static int shortestPath(Map<Integer, List<Integer>> graph, int start, int end) {
        Queue<Integer> queue = new LinkedList<>();
        Set<Integer> visited = new HashSet<>();
        Map<Integer, Integer> distance = new HashMap<>();
        queue.offer(start);
        visited.add(start);
        distance.put(start, 0);
        while (!queue.isEmpty()) {
            int node = queue.poll();
            if (node == end) return distance.get(node);
            for (int neighbor : graph.getOrDefault(node, new ArrayList<>())) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    distance.put(neighbor, distance.get(node) + 1);
                    queue.offer(neighbor);
                }
            }
        }
        return -1; // No connection path
    }
}
```

#### Sample HR / Behavioral Questions

| Question | What They Are Testing |
|----------|----------------------|
| Tell me about a time you transformed a process or team. | Transformation value |
| Describe a situation where you had to build consensus across teams. | Collaboration |
| How do you make data-driven decisions? | Data-first mindset |
| Tell me about a time you invested in someone else's growth. | Mentorship, leadership |
| What do you think LinkedIn does wrong and how would you fix it? | Critical thinking, product sense |

#### LinkedIn-Specific Tips

- Study graph algorithms deeply (BFS, DFS, Dijkstra, PageRank, community detection)
- Know LinkedIn's products: Recruiter, Sales Navigator, Learning, Premium
- Practice system design for news feed, notification systems, and recommendation engines
- Demonstrate career transformation in your narrative
- **Key resources:** LinkedIn Engineering Blog, The Workforce Report, Graph algorithms practice

---

### Adobe

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Online assessment | 90-120 min | Coding problems + aptitude/logical reasoning |
| Technical phone screen | 45-60 min | 1-2 LeetCode Medium problems |
| On-site loop (4-5 rounds) | 5-6 hours | DS/Algo, system design, problem solving, managerial, HR |
| Director round | 30-45 min | Vision, leadership, product thinking |

#### What Adobe Looks For

- **Innovation & creativity** — Adobe values novel solutions and creative problem-solving approaches
- **Product thinking** — Candidates who understand design tools, creative workflows, and user experience
- **Technical breadth** — Full-stack knowledge, cloud architecture, AI/ML integration
- **Customer empathy** — Understanding creative professionals' needs and workflows
- **Code quality** — Clean, maintainable, well-tested code is expected

#### Sample Technical Problems

**Problem: "Design a version control system for design files (like Figma's 'History')."**

```java
import java.util.*;

public class DesignVersionControl {
    static class Version {
        int id;
        byte[] snapshot;
        long timestamp;
        String author;
        Version(int id, byte[] snapshot, String author) {
            this.id = id; this.snapshot = snapshot;
            this.timestamp = System.currentTimeMillis(); this.author = author;
        }
    }

    private final List<Version> versions = new ArrayList<>();
    private final Map<String, Integer> branchHeads = new HashMap<>();

    public int commit(byte[] snapshot, String author, String branch) {
        int id = versions.size();
        versions.add(new Version(id, snapshot, author));
        branchHeads.put(branch, id);
        return id;
    }

    public Version getVersion(int id) {
        if (id < 0 || id >= versions.size()) return null;
        return versions.get(id);
    }

    public byte[] diff(int fromId, int toId) {
        // Byte-level diff between two snapshots
        Version v1 = getVersion(fromId);
        Version v2 = getVersion(toId);
        if (v1 == null || v2 == null) return null;
        byte[] diff = new byte[Math.max(v1.snapshot.length, v2.snapshot.length)];
        for (int i = 0; i < diff.length; i++) {
            byte b1 = i < v1.snapshot.length ? v1.snapshot[i] : 0;
            byte b2 = i < v2.snapshot.length ? v2.snapshot[i] : 0;
            diff[i] = (byte) (b1 ^ b2);
        }
        return diff;
    }
}
```

**Problem: "Given a list of intervals, merge all overlapping intervals."**

```java
import java.util.*;

public class MergeIntervals {
    public static int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) return intervals;
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        List<int[]> merged = new ArrayList<>();
        int[] current = intervals[0];
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] <= current[1]) {
                current[1] = Math.max(current[1], intervals[i][1]);
            } else {
                merged.add(current);
                current = intervals[i];
            }
        }
        merged.add(current);
        return merged.toArray(new int[0][]);
    }
}
```

#### Sample HR / Behavioral Questions

| Question | What They Are Testing |
|----------|----------------------|
| Describe a creative solution you developed for a difficult problem. | Innovation, creativity |
| How do you handle competing priorities from multiple stakeholders? | Prioritization, communication |
| Tell me about a time you used data to influence a product decision. | Data-driven mindset |
| What is your favorite Adobe product and what would you change? | Product passion |
| Describe a situation where you had to learn a new technology quickly. | Learning agility |

#### Adobe-Specific Tips

- Know Adobe's product ecosystem: Photoshop, Illustrator, Premiere Pro, Acrobat, Experience Cloud
- Adobe values design thinking — practice product improvement discussions
- System design questions often involve creative workflows, real-time collaboration, asset management
- Demonstrate understanding of creative professionals' needs
- **Key resources:** Adobe Tech Blog, Adobe I/O, Behance (understand the creative ecosystem)

---

### Salesforce

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Recruiter call | 30 min | Background check, role overview |
| HackerRank / CodeSignal OA | 90 min | 2-3 coding problems |
| Technical phone screen | 45-60 min | Algorithms + OOP + Apex basics for CRM roles |
| On-site loop (4-5 rounds) | 5 hours | DS/Algo, system design, architecture, manager, HR |
| Leadership round | 45 min | Vision, cultural fit, Ohana values |

#### What Salesforce Looks For

- **Ohana culture** — Family values: trust, customer success, innovation, equality, sustainability
- **Platform thinking** — Understanding of multi-tenant architecture and metadata-driven development
- **Enterprise mindset** — Reliability, security, compliance, and SLAs for mission-critical business data
- **Trailblazer attitude** — Continuous learning, certification, community contribution
- **Giving back** — Salesforce's 1-1-1 model (1% equity, product, employee time to community)

#### Sample Technical Problems

**Problem: "Design a multi-tenant database schema for a CRM platform."**

```java
// Simplified multi-tenant schema representation
public class MultiTenantSchema {
    // Approach 1: Shared table with tenant_id discriminator
    static class AccountRecord {
        String tenantId; String recordId;
        String name; String industry; String phone;
        Map<String, String> customFields; // Dynamic fields per tenant
    }

    // Approach 2: Metadata-driven (Salesforce's actual approach)
    static class MetadataField {
        String tenantId;
        String objectType; // "Account", "Contact", etc.
        String fieldName; String fieldType;
        boolean isRequired; String defaultValue;
    }

    static class DataRecord {
        String tenantId; String objectType;
        Map<String, Object> fieldValues; // Keyed by fieldName
    }

    // Query with tenant isolation
    public static String buildIsolatedQuery(String tenantId, String objectType) {
        return "SELECT * FROM DataRecords WHERE tenantId = '" + tenantId
             + "' AND objectType = '" + objectType + "'";
    }
}
```

**Problem: "Check if a string of parentheses is valid."**
Salesforce twist: "Now support multiple bracket types and handle malformed XML-like tags."

```java
import java.util.*;

public class ValidParentheses {
    public static boolean isValid(String s) {
        Map<Character, Character> map = Map.of(')', '(', '}', '{', ']', '[', '>', '<');
        Deque<Character> stack = new ArrayDeque<>();
        for (char c : s.toCharArray()) {
            if (map.containsValue(c)) {
                stack.push(c);
            } else if (map.containsKey(c)) {
                if (stack.isEmpty() || stack.pop() != map.get(c)) return false;
            }
        }
        return stack.isEmpty();
    }

    // Extended: XML-like tag validation
    public static boolean isValidXml(String s) {
        Deque<String> stack = new ArrayDeque<>();
        Matcher m = Pattern.compile("<(/)?(\\w+)>").matcher(s);
        while (m.find()) {
            if (m.group(1) == null) stack.push(m.group(2));
            else if (stack.isEmpty() || !stack.pop().equals(m.group(2))) return false;
        }
        return stack.isEmpty();
    }
}
```

#### Sample HR / Behavioral Questions

| Question | What They Are Testing |
|----------|----------------------|
| What does "Ohana" mean to you? | Cultural alignment |
| Tell me about a time you went above and beyond for a customer. | Customer success value |
| How do you contribute to your community? | Giving back, 1-1-1 model |
| Describe a time you advocated for equality or inclusion. | Equality value |
| What certifications have you pursued and why? | Trailblazer attitude, learning |

#### Salesforce-Specific Tips

- Earn Salesforce certifications (Admin, Platform App Builder, Developer I) — they significantly boost your profile
- Understand multi-tenant architecture, governor limits, and SOQL
- Know the Customer 360 platform — Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud
- Practice Trailhead modules — Salesforce's free learning platform
- **Key resources:** Salesforce Developer Blog, Trailhead, Salesforce Architects

---

### Oracle

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Recruiter screen | 30 min | Background, availability |
| Online coding test | 60-90 min | 2-3 problems (Java/C++) |
| Technical phone screen | 45-60 min | LeetCode Medium, SQL queries, database concepts |
| On-site loop (4-5 rounds) | 5 hours | DS/Algo, system design, database internals, manager, HR |
| Team match | — | Specific team alignment (OCI, Database, Cloud) |

#### What Oracle Looks For

- **Deep systems knowledge** — Operating systems, memory management, file systems, networking stack
- **Database expertise** — SQL, indexing, query optimization, ACID, distributed transactions
- **Java mastery** — Oracle is the steward of Java; deep Java knowledge (JVM, concurrency, memory model) is highly valued
- **Cloud transformation** — Oracle Cloud Infrastructure (OCI) hires heavily for its cloud-native platform
- **Enterprise reliability** — Five-nines availability, backup/recovery, disaster recovery expertise

#### Sample Technical Problems

**Problem: "Implement a thread-safe singleton pattern."**
Oracle twist: "Explain the JVM memory model implications and why double-checked locking works in modern Java."

```java
public class DatabaseConnectionPool {
    private static volatile DatabaseConnectionPool instance;
    private final int maxConnections;
    private int activeConnections;

    private DatabaseConnectionPool(int maxConnections) {
        this.maxConnections = maxConnections;
    }

    public static DatabaseConnectionPool getInstance(int maxConnections) {
        if (instance == null) {
            synchronized (DatabaseConnectionPool.class) {
                if (instance == null) {
                    instance = new DatabaseConnectionPool(maxConnections);
                }
            }
        }
        return instance;
    }

    public synchronized boolean acquireConnection() {
        if (activeConnections < maxConnections) {
            activeConnections++;
            return true;
        }
        return false;
    }

    public synchronized void releaseConnection() {
        if (activeConnections > 0) activeConnections--;
    }
}
```

**Problem: "Design a key-value store with persistence."**
Oracle twist: "How would you implement write-ahead logging for crash recovery?"

```java
import java.util.concurrent.*;
import java.io.*;

public class PersistentKVStore {
    private final ConcurrentHashMap<String, String> store = new ConcurrentHashMap<>();
    private final String walPath;
    private BufferedWriter walWriter;

    public PersistentKVStore(String walPath) throws IOException {
        this.walPath = walPath;
        this.walWriter = new BufferedWriter(new FileWriter(walPath, true));
        recoverFromWAL();
    }

    public void put(String key, String value) throws IOException {
        store.put(key, value);
        walWriter.write("PUT:" + key + ":" + value + "\n");
        walWriter.flush();
    }

    public String get(String key) {
        return store.get(key);
    }

    private void recoverFromWAL() throws IOException {
        File walFile = new File(walPath);
        if (!walFile.exists()) return;
        try (BufferedReader reader = new BufferedReader(new FileReader(walFile))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(":", 3);
                if (parts[0].equals("PUT") && parts.length == 3) {
                    store.put(parts[1], parts[2]);
                }
            }
        }
    }
}
```

#### Sample HR / Behavioral Questions

| Question | What They Are Testing |
|----------|----------------------|
| What excites you about working at Oracle? | Cloud transformation alignment |
| Describe a complex technical problem you solved that had no clear solution. | Deep system thinking |
| How do you ensure code reliability in production? | Enterprise mindset, testing |
| Tell me about a time you worked with a difficult stakeholder. | Professional communication |
| Oracle is transitioning from on-prem to cloud — how do you see that future? | Strategic thinking |

#### Oracle-Specific Tips

- Oracle values Java depth — master JVM internals, garbage collection, concurrency, and the Collections framework
- Database knowledge is essential — practice SQL optimization, indexing strategies, and query plans
- For OCI roles, study cloud architecture, IaaS, PaaS, and Oracle Cloud services
- Be ready for discussions on distributed systems, fault tolerance, and data consistency models
- **Key resources:** Oracle Java Documentation, Oracle Dev Blog, Oracle Cloud Architecture

---

### NVIDIA

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Recruiter screen | 30 min | Background and technical alignment |
| Technical phone screen | 45-60 min | C/C++ coding, algorithms, computer architecture |
| On-site loop (5-6 rounds) | 6 hours | Low-level programming, CUDA/parallel computing, OS, system design, hiring manager, HR |
| Presentation round | 45 min | Present past work / research (for GPU-computing roles) |

#### What NVIDIA Looks For

- **Low-level systems expertise** — Pointers, memory management, cache coherence, assembly-level understanding
- **Parallel thinking** — Naturally write parallel code; understand warp scheduling, thread divergence, shared memory
- **Computer architecture depth** — GPU architecture, memory hierarchy, pipeline, SIMT execution model
- **Mathematical fluency** — Linear algebra, matrix operations, numerical methods for graphics/AI
- **Optimization mindset** — Benchmarking, profiling, cycle-counting, memory bandwidth optimization
- **Research background** — Publications in graphics, ML, robotics, or HPC are highly valued

#### Sample Technical Problems

**Problem: "Implement matrix multiplication."**
NVIDIA twist: "Optimize for cache locality. Now describe how you would implement this on CUDA using shared memory."

```java
public class MatrixMultiplication {
    // Cache-friendly: loop order i-k-j for row-major access
    public static double[][] multiplyOptimized(double[][] A, double[][] B) {
        int n = A.length, m = B[0].length, p = B.length;
        double[][] C = new double[n][m];
        for (int i = 0; i < n; i++) {
            for (int k = 0; k < p; k++) {
                double aik = A[i][k];
                for (int j = 0; j < m; j++) {
                    C[i][j] += aik * B[k][j];
                }
            }
        }
        return C;
    }
}
```

**Problem: "Find the maximum sum subarray (Kadane's Algorithm)."**
NVIDIA twist: "Now implement it for a stream of data where you cannot store all elements."

```java
public class MaxSubarraySum {
    public static int maxSubArray(int[] nums) {
        int maxSoFar = nums[0], maxEndingHere = nums[0];
        for (int i = 1; i < nums.length; i++) {
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    // Streaming version: O(1) space
    public static int maxSubArrayStreaming(int[] nums) {
        int maxSoFar = Integer.MIN_VALUE, maxEndingHere = 0;
        for (int num : nums) {
            maxEndingHere += num;
            if (maxSoFar < maxEndingHere) maxSoFar = maxEndingHere;
            if (maxEndingHere < 0) maxEndingHere = 0;
        }
        return maxSoFar;
    }
}
```

#### Sample HR / Behavioral Questions

| Question | What They Are Testing |
|----------|----------------------|
| Describe a project where you had to optimize for performance. | Optimization mindset |
| How do you debug a race condition in a multithreaded program? | Concurrency expertise |
| Tell me about a time you worked at the intersection of hardware and software. | HW-SW co-design thinking |
| How do you stay current with advances in AI/ML hardware? | Intellectual curiosity |
| Describe the most performance-critical code you have ever written. | Low-level expertise |

#### NVIDIA-Specific Tips

- Master C/C++ (pointer arithmetic, memory layout, cache-friendly patterns)
- Learn CUDA basics — threads, blocks, shared memory, warp divergence, memory coalescing
- Study GPU architecture — understand the difference between CPU and GPU programming models
- Practice bit manipulation and numerical computing problems
- Read NVIDIA technical blogs and GTC conference talks
- For AI roles: know TensorRT, cuDNN, CUDA programming model
- **Key resources:** NVIDIA Developer Blog, CUDA Programming Guide, GTC talks

---

### Qualcomm

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Online coding test | 60-90 min | C/C++ coding, algorithms, basic electronics |
| Technical phone screen | 45-60 min | Embedded C, memory management, OS concepts |
| On-site loop (4-5 rounds) | 5 hours | Coding, embedded systems, RTOS, wireless protocols, manager, HR |
| Technical deep-dive | 45 min | Past projects, system-level design decisions |

#### What Qualcomm Looks For

- **Embedded systems expertise** — Writing code for resource-constrained devices, memory management, interrupt handling
- **Wireless communications** — Understanding of cellular protocols (4G/5G), WiFi, Bluetooth, GPS
- **C/C++ mastery** — Almost all coding is in C/C++; no modern language features, no STL in embedded
- **Hardware-software interface** — Reading datasheets, register-level programming, driver development
- **Real-time constraints** — RTOS concepts, scheduling, priority inversion, deadlock prevention
- **Power optimization** — Battery life, thermal management, low-power coding techniques

#### Sample Technical Problems

**Problem: "Implement a circular buffer for a real-time data stream."**
Qualcomm twist: "Make it thread-safe with minimum locking and ensure no data loss on overflow (overwrite oldest)."

```java
public class CircularBuffer<T> {
    private final T[] buffer;
    private int head = 0, tail = 0, count = 0;
    private final int capacity;

    @SuppressWarnings("unchecked")
    public CircularBuffer(int capacity) {
        this.capacity = capacity;
        buffer = (T[]) new Object[capacity];
    }

    public synchronized boolean write(T value) {
        buffer[head] = value;
        head = (head + 1) % capacity;
        if (count < capacity) {
            count++;
        } else {
            tail = (tail + 1) % capacity; // Overwrite oldest
        }
        return true;
    }

    public synchronized T read() {
        if (count == 0) return null;
        T value = buffer[tail];
        tail = (tail + 1) % capacity;
        count--;
        return value;
    }

    public synchronized boolean isEmpty() { return count == 0; }
    public synchronized boolean isFull() { return count == capacity; }
}
```

**Problem: "Find the first non-repeating character in a string."**
Qualcomm twist: "Now optimize for a streaming input from a low-bandwidth sensor."

```java
import java.util.*;

public class FirstNonRepeating {
    public static char firstNonRepeating(String s) {        Map<Character, Integer> count = new LinkedHashMap<>();
        for (char c : s.toCharArray()) {
            count.put(c, count.getOrDefault(c, 0) + 1);
        }
        for (Map.Entry<Character, Integer> entry : count.entrySet()) {
            if (entry.getValue() == 1) return entry.getKey();
        }
        return '_'; // No non-repeating character
    }

    // Streaming version — processes characters one at a time
    public static char firstNonRepeatingStreaming(Iterator<Character> stream) {
        Map<Character, Integer> freq = new HashMap<>();
        Queue<Character> queue = new LinkedList<>();
        while (stream.hasNext()) {
            char c = stream.next();
            freq.put(c, freq.getOrDefault(c, 0) + 1);
            queue.offer(c);
            while (!queue.isEmpty() && freq.get(queue.peek()) > 1) {
                queue.poll();
            }
        }
        return queue.isEmpty() ? '_' : queue.peek();
    }
}
```

#### Sample HR / Behavioral Questions

| Question | What They Are Testing |
|----------|----------------------|
| Describe a project where you worked under tight memory constraints. | Embedded experience |
| How do you debug an intermittent crash in an embedded system? | Systematic debugging |
| Tell me about a time you had to optimize for power consumption. | Power awareness |
| How do you ensure code reliability when hardware is unavailable during testing? | Simulation, testing strategy |
| What experience do you have with wireless protocols? | Domain relevance |

#### Qualcomm-Specific Tips

- C is the primary language — practice pointer arithmetic, memory management, bit manipulation
- Study OS fundamentals deeply — scheduling, interrupts, memory management, semaphores
- Learn about ARM architecture and compiler optimizations
- Know the wireless protocol stack: Physical → MAC → Network → Transport
- Power optimization is a recurring theme — study low-power design patterns
- **Key resources:** Qualcomm Developer Network, Embedded C guides, ARM Architecture Reference

---

### Texas Instruments

#### Interview Process

| Round | Duration | Focus |
|-------|----------|-------|
| Online coding test | 60 min | C coding, basic electronics, aptitude |
| Technical phone/online interview | 45-60 min | Embedded C, microcontrollers, analog/digital concepts |
| On-site loop (3-4 rounds) | 4 hours | Coding, embedded systems, analog/digital circuits, HR |
| Manager round | 30-45 min | Project discussion, domain alignment |

#### What Texas Instruments Looks For

- **Analog + digital knowledge** — Understanding of both hardware (circuits, signals) and software (firmware, drivers)
- **Microcontroller expertise** — MSP430, Tiva C, C2000, or ARM Cortex-M series familiarity
- **Firmware development** — Bare-metal programming, register-level control, interrupt service routines
- **Real-time control** — Motor control, power management, sensor data acquisition
- **Low-power design** — Battery-powered device optimization, sleep modes, energy harvesting
- **Signal processing fundamentals** — ADC/DAC, filters, PWM, timers, comparators

#### Sample Technical Problems

**Problem: "Implement a function to toggle an LED using a timer interrupt."**
TI twist: "This is real — you will do this on actual TI hardware during the interview."

```java
// Conceptual representation of timer-based LED toggle on a microcontroller
public class TimerLED {
    private boolean ledState = false;
    private int timerCounter = 0;
    private final int TIMER_PERIOD = 1000; // 1 second at 1kHz

    // Called by timer ISR at 1kHz
    public void timerInterruptHandler() {
        timerCounter++;
        if (timerCounter >= TIMER_PERIOD) {
            timerCounter = 0;
            ledState = !ledState;
            writeGPIO(ledState); // Set GPIO pin high/low
        }
    }

    private void writeGPIO(boolean state) {
        System.out.println("LED " + (state ? "ON" : "OFF"));
    }
}
```

**Problem: "Reverse a string in place without using any library functions."**
TI twist: "Now do it in constant memory — you only have 256 bytes of SRAM."

```java
public class ReverseString {
    public static void reverse(char[] s) {
        int left = 0, right = s.length - 1;
        while (left < right) {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
    }
}
```

#### Sample HR / Behavioral Questions

| Question | What They Are Testing |
|----------|----------------------|
| Describe a project where you interfaced software with hardware. | HW-SW integration |
| How do you approach debugging when you don't have an oscilloscope? | Problem-solving with limited tools |
| Tell me about a time you had to meet a hard real-time deadline. | Real-time constraints |
| What experience do you have with analog circuits? | Hardware background |
| How do you document firmware so others can maintain it? | Code quality, documentation |

#### Texas Instruments-Specific Tips

- Learn about TI's microcontroller families: MSP430 (ultra-low power), Tiva C (ARM Cortex-M), C2000 (real-time control)
- Practice reading datasheets and application notes — this is a daily skill at TI
- Understand ADC/DAC concepts, PWM generation, timer configurations, and serial protocols (I2C, SPI, UART)
- Low-power design is central — study sleep modes, wake-up sources, and energy efficiency
- TI values hands-on hardware experience — mention any PCB design, soldering, or lab work
- **Key resources:** TI E2E Community, TI Application Notes, MSP430 and Tiva C LaunchPad tutorials

---

## Resources for Semiconductor & Enterprise

- **Semiconductor interviews:** "Cracking the Embedded Software Engineering Interview" — specific to embedded roles
- **CUDA resources:** NVIDIA's CUDA Programming Guide, Udacity's CUDA course
- **Enterprise system design:** "Designing Data-Intensive Applications" by Martin Kleppmann
- **Wireless/Telecom:** Qualcomm's Wireless Academy, 3GPP specifications
- **Hardware tinkering:** TI LaunchPad kits, Arduino, Raspberry Pi for hands-on experience
- **Mock interviews:** Pramp (general), InterviewBit (system design), LeetCode (DS/Algo)

---

## Final Checklist

### Before Applying to Any Company

- [ ] Resume tailored and reviewed (1 page, quantifiable impact)
- [ ] LeetCode solved: 150+ (FAANG), 75+ (Product India), 40+ (Service), 50+ (Startups)
- [ ] CS fundamentals revised (OS, DBMS, Networks, OOP)
- [ ] 2-3 projects ready to discuss in depth
- [ ] Behavioral stories prepared (5+ STAR answers)
- [ ] System design basics covered (for product/FAANG)
- [ ] Company-specific research done (products, culture, recent news)

### Interview Day Checklist

- [ ] Stable internet connection (backup hotspot ready)
- [ ] Workspace clean, quiet, well-lit
- [ ] Laptop charged, IDE ready, screenshare tested
- [ ] Water, notebook, pen nearby
- [ ] Company details visible (notebook or second monitor)
- [ ] 5 min early, calm, breathing exercises done
- [ ] Mute phone, close unnecessary apps

### Post-Interview

- [ ] Send thank-you email within 24 hours
- [ ] Note down questions you struggled with (study them immediately)
- [ ] Do not obsess over outcome — the next one is waiting
- [ ] If rejected, ask for feedback (some companies provide it)
- [ ] Keep applying — placement is a numbers game

---

> **Remember:** Placement preparation is a marathon, not a sprint. Consistent daily practice of 2-3 hours beats 10-hour weekend cramming. Quality of preparation matters more than quantity. Good luck!
