# Debugging and Code Review

## Learning Objectives

After this chapter you will be able to identify common bugs in TypeScript and Python code under time pressure, systematically approach debugging without a debugger, review code for correctness, performance, and style, and communicate your findings clearly during code review rounds.

## Theory

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

## Buggy Code Examples

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
```

Bug: `i <= n` includes n, but the range should be 1 to n. Fix: `i < n` or start at 1: `for (let i = 1; i <= n; i++)`.

### Example 2: Null Reference

```typescript
function getFirstCharacter(str: string | null): string {
    return str.charAt(0)  // Bug: str could be null, calling charAt on null throws
}
```

Fix: `return str?.charAt(0) ?? ''` or `if (!str) return ''; return str.charAt(0);`

### Example 3: Mutation Bug

```typescript
function sortAndReverse(arr: number[]): number[] {
    arr.sort((a, b) => a - b)  // Bug: sort mutates the original array
    return arr.reverse()  // Bug: also mutates
}
```

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
```

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
```

Fix: Use `for...of` with await, or `Promise.all` with map:
```typescript
async function processItems(items: string[]): Promise<void> {
    const results = await Promise.all(items.map((item) => processItem(item)))
    saveResults(results)
}
```

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
```

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
```

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
```

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
```

Fix: Use async/await properly and handle concurrent requests for the same key with a pending promise map.

### Example 10: Deep Equality

```typescript
function areEqual(a: object, b: object): boolean {
    return a === b  // Bug: checks reference equality, not deep equality
}
```

Fix: Implement recursive deep equality or use JSON.stringify for simple cases: `JSON.stringify(a) === JSON.stringify(b)` (does not handle all types).

## Code Review Simulation

### Review 1: API Endpoint

```typescript
app.post('/api/users', async (req, res) => {
    const user = req.body
    const saved = await db.save(user)
    res.status(201).json(saved)
})
```

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
```

### Review 2: File Processing

```typescript
function processFile(filename: string): string[] {
    const data = fs.readFileSync(filename)
    const lines = data.split('\\n')
    return lines.filter((l) => l.trim() !== '')
}
```

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
```

Fix: Use parameterized queries:
```typescript
async function getOrders(userId: string): Promise<Order[]> {
    const result = await db.query(
        'SELECT * FROM orders WHERE user_id = $1', [userId]
    )
    return result.rows
}
```


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


## Summary

Debugging and code review rounds test your ability to read code critically under time pressure. Use a systematic checklist: off-by-one errors, null references, mutation, async timing, type coercion, edge cases. In code reviews, evaluate correctness, performance, readability, testability, security, and error handling. Communicate findings constructively: start positive, state evidence, suggest specific fixes.

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

## Exercises

1. Find the bug in this function: `function sumEven(arr: number[]): number { return arr.filter(n => n % 2 === 0).reduce((a, b) => a + b) }` (Hint: what happens with an empty array after filtering?)

2. Review this code and list 5 issues: `app.get('/data', async (req, res) => { const data = await fetch(req.query.url); res.send(data) })`

3. Debug this async function: `async function getFirst(items: string[]): string { items.forEach(async i => { const r = await fetch(i); return r }) }` (There are 3 bugs.)

4. Write a function that deep clones an object without using JSON.parse(JSON.stringify(obj)) and identify what edge cases your implementation does not handle.
