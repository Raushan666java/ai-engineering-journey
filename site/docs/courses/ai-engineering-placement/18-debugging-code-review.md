---
slug: /ai-engineering-placement/18-debugging-code-review
title: "18 Debugging Code Review"
sidebar_label: "18 Debugging Code Review"
sidebar_position: 226
---
<!-- Clear Language: Keep sentences under 50 words -->
# Debugging and Code Review


## Learning Objectives

After this chapter you will be able to identify common bugs in TypeScript and Python code under time pressure, systematically approach debugging without a debugger, review code for correctness, performance, and style, and communicate your findings clearly during code review rounds.


## Introduction

Interviews test both technical skill and communication. DSA patterns, system design, behavioral questions, and mock interviews prepare you for the full interview loop. This module is your final prep before offers.



## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

```mermaid
flowchart TD
    A[Reproduce Bug] --> B[Read Error/Trace]
    B --> C[Form Hypothesis]
    C --> D[Isolate via Logs]
    D --> E{Found?}
    E -->|No| C
    E -->|Yes| F[Fix]
    F --> G[Verify Tests Pass]
    G --> H[Check Edge Cases]
```text


### Debugging Interview Format

Two common formats:
1. Given buggy code, find and fix all bugs (10-20 min). Often includes compilation errors, logic errors, and edge cases.
2. Given a failing test, debug the production code and fix it. Tests provide the expected behavior.


### The Debugging Checklist

Systematically check these categories:

1. **Off-by-one errors**: loop indices (<= vs <), array bounds
2. **Null/undefined references**: accessing properties on null, uninitialized variables
3. **Type errors**: implicit type coercion, mixed types in operations
4. **Mutation bugs**: modifying input data, shared state across calls
5. **Asynchronous timing**: race conditions, missing awaits, promise handling
6. **Edge cases**: empty input, single element, negative numbers, large values
7. **Integer overflow**: JavaScript safe integer (2^53), bitwise operations truncate to 32-bit
8. **Floating point precision**: 0.1 + 0.2 !== 0.3, use epsilon comparison


### Code Review Checklist

When reviewing code, evaluate:

1. **Correctness**: does it handle all edge cases? Any silent failures?
2. **Performance**: time/space complexity, unnecessary allocations, nested loops
3. **Readability**: clear naming, appropriate abstraction level, comments for why not what
4. **Testability**: pure functions, dependency injection, mock boundaries
5. **Security**: input validation, injection risks, data exposure
6. **Error handling**: exceptions caught at right level, meaningful error messages
7. **Concurrency**: race conditions, deadlocks, atomicity


### How to Communicate Findings

In code review rounds, your tone matters as much as your findings:
- Start with positive observations ("the overall structure is clean")
- State what you found with evidence ("line 12 has a potential null reference when input is empty")
- Suggest specific fixes ("we can add a guard clause here")
- Ask questions rather than dictate ("does this handle the case where x is null?")


## Examples


### Buggy Code Examples


### Example 1: Array Index Bug

```typescript
function findMissingNumber(nums: number[], n: number): number {
    let total = 0
    for (let i = 0; i <= n; i++) {  // Bug: i < n, not i <= n. Total will include an extra number
        total += i
    }
    for (let i = 0; i < nums.length; i++) {
        total -= nums[i]
    }
    return total
}
```text

Bug: `i <= n` includes n, but the range should be 1 to n. Fix: `i < n` or start at 1: `for (let i = 1; i <= n; i++)`.


### Example 2: Null Reference

```typescript
function getFirstCharacter(str: string | null): string {
    return str.charAt(0)  // Bug: str could be null, calling charAt on null throws
}
```text

Fix: `return str?.charAt(0) ?? ''` or `if (!str) return ''; return str.charAt(0);`


### Example 3: Mutation Bug

```typescript
function sortAndReverse(arr: number[]): number[] {
    arr.sort((a, b) => a - b)  // Bug: sort mutates the original array
    return arr.reverse()  // Bug: also mutates
}
```text

Fix: `const copy = [...arr]; copy.sort(...); return copy.reverse();`


### Example 4: Floating Point Precision

```typescript
function calculateTotal(prices: number[]): number {
    let total = 0
    for (const price of prices) {
        total += price  // Bug: 0.1 + 0.2 = 0.30000000000000004
    }
    return total  // Should round to 2 decimal places
}
```text

Fix: `return Math.round(total * 100) / 100;` or use integer arithmetic (cents).


### Example 5: Async Timing Bug

```typescript
async function processItems(items: string[]): Promise<void> {
    let results: string[] = []
    items.forEach(async (item) => {  // Bug: async callback in forEach, results not awaited
        const processed = await processItem(item)
        results.push(processed)
    })
    // Bug: at this point, results is still empty
    saveResults(results)
}
```text

Fix: Use `for...of` with await, or `Promise.all` with map:
```typescript
async function processItems(items: string[]): Promise<void> {
    const results = await Promise.all(items.map((item) => processItem(item)))
    saveResults(results)
}
```text


### Example 6: Type Coercion

```typescript
function countOccurrences(arr: any[]): Record<string, number> {
    const counts: Record<string, number> = {}
    for (const item of arr) {
        if (counts[item]) {  // Bug: if counts[item] is 0, this is falsy
            counts[item]++
        } else {
            counts[item] = 1
        }
    }
    return counts
}
```text

Bug: when `counts[item]` is 0 (falsy), it incorrectly sets to 1 instead of incrementing. Fix: `if (counts[item] !== undefined)`.


### Example 7: Closure in Loop

```typescript
function createCallbacks(): (() => void)[] {
    const callbacks: (() => void)[] = []
    for (var i = 0; i < 5; i++) {  // Bug: var has function scope, not block scope
        callbacks.push(() => console.log(i))  // All log 5 (the final value of i)
    }
    return callbacks
}
```text

Fix: Use `let i = 0` (block scope) or an IIFE closure.


### Example 8: Off-by-One in Binary Search

```typescript
function binarySearch(arr: number[], target: number): number {
    let left = 0
    let right = arr.length - 1
    while (left < right) {  // Bug: should be left <= right, misses when target is at mid and left===right
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) return mid
        if (arr[mid] < target) left = mid + 1
        else right = mid - 1
    }
    return -1  // Bug: never checks if arr[left] === target when left === right
}
```text

Fix: `while (left <= right)` or add a check after the loop for arr[left] === target.


### Example 9: Shared Mutable State

```typescript
const cache: Map<string, number> = new Map()

function expensiveComputation(key: string): number {
    if (cache.has(key)) return cache.get(key)!
    const result = doHeavyWork(key)  // Bug: async operation not awaited
    cache.set(key, result)
    return result
}
```text

Fix: Use async/await properly and handle concurrent requests for the same key with a pending promise map.


### Example 10: Deep Equality

```typescript
function areEqual(a: object, b: object): boolean {
    return a === b  // Bug: checks reference equality, not deep equality
}
```text

Fix: Implement recursive deep equality or use JSON.stringify for simple cases: `JSON.stringify(a) === JSON.stringify(b)` (does not handle all types).


## Code Review Simulation


### Review 1: API Endpoint

```typescript
app.post('/api/users', async (req, res) => {
    const user = req.body
    const saved = await db.save(user)
    res.status(201).json(saved)
})
```text

Issues found:
- Missing input validation (`req.body` could be malformed)
- No error handling (if db.save throws, the endpoint crashes)
- Missing rate limiting (no protection against abuse)
- No logging of the request
- No idempotency check (repeated requests create duplicate users)
- No response type specification

Fixed version:
```typescript
app.post('/api/users', rateLimit(100, 60000), async (req, res, next) => {
    try {
        const validation = validateUserSchema(req.body)
        if (!validation.valid) {
            return res.status(400).json({ error: validation.errors })
        }
        const existing = await db.findByEmail(req.body.email)
        if (existing) return res.status(409).json({ error: 'User exists' })
        const saved = await db.save(req.body)
        logger.info(`User created: ${saved.id}`)
        res.status(201).json(saved)
    } catch (error) {
        next(error)
    }
})
```text


### Review 2: File Processing

```typescript
function processFile(filename: string): string[] {
    const data = fs.readFileSync(filename)
    const lines = data.split('\\n')
    return lines.filter((l) => l.trim() !== '')
}
```text

Issues found:
- Synchronous file reading blocks event loop for large files
- No error handling for missing file or permissions
- Assumes UTF-8 encoding (does not specify)
- Memory-inefficient for large files (loads entire file)
- Does not trim whitespace from individual lines

Recommended fix: use streaming or async read with encoding specified.


### Review 3: Database Query

```typescript
async function getOrders(userId: string): Promise<Order[]> {
    const result = await db.query(
        `SELECT * FROM orders WHERE user_id = ${userId}`  // SQL injection vulnerability
    )
    return result.rows
}
```text

Fix: Use parameterized queries:
```typescript
async function getOrders(userId: string): Promise<Order[]> {
    const result = await db.query(
        'SELECT * FROM orders WHERE user_id = $1', [userId]
    )
    return result.rows
}
```text



### Advanced Debugging Techniques

**Rubber duck debugging**: explain the code line by line to an imaginary listener. The act of verbalizing often reveals the bug.

**Binary search debugging**: comment out half the code. If the bug persists, it is in the other half. Repeat to isolate.

**Print statement strategy**: add console.log at each step showing input, output, and intermediate values. Compare against expectations.

**Invariant checking**: assert conditions that must be true at each step (e.g., 'stack is non-empty before pop'). If an assertion fails, you found the bug.

**Diff debugging**: compare broken code with a known working version. The difference is likely the bug.


### Common TypeScript Pitfalls

1. == vs ===: always use === (strict equality). == coerces types
2. Array.sort() sorts in-place as strings by default: [1, 2, 10].sort() returns [1, 10, 2]
3. 	ypeof null === 'object': check === null explicitly
4. NaN !== NaN: use Number.isNaN() to check
5. Floating point: 	oFixed(2) returns a string, use Math.round(n * 100) / 100
6. map without return: rr.map(x => x * 2) returns a new array, but if you forget the return in {}, it returns undefined
7. ilter(Boolean) removes falsy values including 0 and empty strings
8.
educe without initial value: errors on empty arrays
9. const does not make objects/arrays immutable
10. Promise.all fails fast: one rejection rejects the entire promise


### Debugging Async Code

Async bugs are the hardest to find because they are non-deterministic. Patterns to watch for:

**Race condition**: two operations depend on shared state and can interleave.
Fix: use locks, transactions, or deterministic ordering.

**Missing await**: function returns a Promise instead of the resolved value.
Fix: ensure all async functions are awaited. Use TypeScript compiler to catch unhandled promises.

**Stale closure**: async callback captures a variable that changes before the callback runs.
Fix: copy the variable into the closure scope or use let (block scope).

**Promise.all error swallowing**: unhandled promise rejections are silently ignored in older Node versions.
Fix: always add .catch to promises or use try/catch with await.


### Code Review Anti-Patterns

What NOT to do in a code review:

1. Nitpicking style: focus on logic bugs, not formatting
2. Assuming intent: ask clarifying questions instead of assuming the author meant something else
3. Reviewing too fast: take at least 5-10 minutes per 100 lines of complex code
4. Ignoring tests: if there are no tests, that is the first issue to raise
5. Rubber stamping: approving without reading is worse than being strict
6. Personal attacks: review the code, not the person


### Real-World Code Review Example

Reviewing a caching function:

`	ypescript
const cache: { [key: string]: any } = {}

async function getData(url: string): Promise<any> {
    if (cache[url]) {
        return cache[url]
    }
    const response = await fetch(url)
    const data = await response.json()
    cache[url] = data
    return data
}
`

Issues:
1. cache[url] could be a falsy value (0, false, empty string) that gets incorrectly treated as a cache miss. Use url in cache or cache.hasOwnProperty(url).
2. Concurrent requests for the same URL both miss the cache and fire duplicate fetches. Use a pending promise map.
3. No error handling: if fetch fails, the cache is not populated, but the error is returned anyway.
4. No cache invalidation: data is cached forever. Add TTL.
5. No types: using ny loses type safety.
6. Cache is global and persists for the lifetime of the process. Could cause memory leaks.

Fixed version:

`	ypescript
interface CacheEntry<T> {
    data: T
    expiresAt: number
}

const cache: Map<string, CacheEntry<any>> = new Map()
const pendingRequests: Map<string, Promise<any>> = new Map()
const TTL_MS = 5 * 60 * 1000

async function getData<T = any>(url: string): Promise<T> {
    const cached = cache.get(url)
    if (cached && cached.expiresAt > Date.now()) {
        return cached.data
    }

    if (pendingRequests.has(url)) {
        return pendingRequests.get(url)!
    }

    const promise = (async () => {
        try {
            const response = await fetch(url)
            if (!response.ok) throw new Error('HTTP ' + response.status)
            const data = await response.json()
            cache.set(url, { data, expiresAt: Date.now() + TTL_MS })
            return data
        } finally {
            pendingRequests.delete(url)
        }
    })()

    pendingRequests.set(url, promise)
    return promise
}
`



## Exercises

**Easy** — Implement a basic debugging code review example that demonstrates the core concept.

**Medium** — Create a more complex implementation that handles edge cases.

**Hard** — Design an optimized solution for large-scale debugging code review scenarios.

## Summary

Debugging and code review rounds test your ability to read code critically under time pressure. Use a systematic checklist: off-by-one errors,.
null references, mutation, async timing, type coercion, edge cases. In code reviews, evaluate correctness, performance, readability, testability, security, and error handling. Communicate findings constructively: start positive,.
state evidence, suggest specific fixes.


## Practical Takeaways

- Practice reading code without running it. Find bugs by tracing execution in your head
- For every loop, check the boundary conditions: empty, single element, two elements
- Every null check is a potential bug if missing. Be paranoid about null/undefined
- Async code is the most common source of bugs in modern TypeScript: always check if a function is async and whether await is used
- Mutation bugs are subtle: when a function takes an array/object, ask "does it modify the input?"
- In code reviews, look for SQL injection, unsanitized user input, hardcoded secrets
- Always check error handling: what happens when a database call fails? When a file is missing? When an API returns 500?


## Chapter Quiz

1. In TypeScript, what does `arr.sort()` return?
   - A) A new sorted array
   - B) The same array sorted in place
   - C) undefined
   - D) void
   // correct: B

2. What is the result of `0.1 + 0.2 === 0.3` in JavaScript?
   - A) true
   - B) false
   - C) undefined
   - D) NaN
   // correct: B

3. Which loop construct correctly handles async operations sequentially?
   - A) arr.forEach(async (item) => ...)
   - B) for (const item of arr) { await process(item) }
   - C) arr.map(async (item) => ...)
   - D) setTimeout(async () => ..., 0)
   // correct: B

4. A SQL injection vulnerability occurs when:
   - A) The database is not indexed
   - B) User input is concatenated directly into SQL queries
   - C) The database connection pool is too small
   - D) Queries use parameterized statements
   // correct: B

5. What does `typeof null` return in JavaScript?
   - A) null
   - B) undefined
   - C) object
   - D) boolean
   // correct: C

#

## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition# Exercises

1. Find the bug in this function: `function sumEven(arr: number[]): number { return arr.filter(n => n % 2 === 0).reduce((a, b) => a + b) }` (Hint: what happens with an empty array after filtering?)

2. Review this code and list 5 issues: `app.get('/data', async (req, res) => { const data = await fetch(req.query.url); res.send(data) })`

3. Debug this async function: `async function getFirst(items: string[]): string { items.forEach(async i => { const r = await fetch(i); return r }) }` (There are 3 bugs.)

4. Write a function that deep clones an object without using JSON.parse(JSON.stringify(obj)) and identify what edge cases your implementation does not

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 21-interview-preparation. When would you choose one approach over another?
2. Design a system that efficiently handles 21-interview-preparation at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 21-interview-preparation. What was your approach and what was the result?
2. How would you explain 21-interview-preparation to a non-technical stakeholder?

#### Microsoft Style
1. How does 21-interview-preparation integrate with enterprise systems and cloud architectures?
2. What are the security implications of 21-interview-preparation?

#### NVIDIA Style
1. How would you optimize 21-interview-preparation for GPU-accelerated computing?
2. What parallel processing patterns apply to 21-interview-preparation?

#### AI Startup Style
1. How would you implement 21-interview-preparation in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 21-interview-preparation?

### Resume Tips
- **Technical Skills**: List 21-interview-preparation under relevant technical skills
- **Project Description**: "Implemented 21-interview-preparation to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 21-interview-preparation in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 21-interview-preparation
- [ ] Practice 3-5 problems related to 21-interview-preparation
- [ ] Prepare 2 real-world examples of using 21-interview-preparation
- [ ] Know the time/space complexity of common 21-interview-preparation operations
- [ ] Have questions ready about how the company uses 21-interview-preparation handle.


## Difficulty Level

**Level**: Intermediate
**Estimated Study Time**: 30-45 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to Interview Preparation fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master debugging code review?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of debugging code review helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding debugging code review at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of debugging code review like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply debugging code review concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of debugging code review?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply debugging code review in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering Interview Preparation, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
