#!/usr/bin/env node
/**
 * Script to enhance quizzes in first chapters of each module.
 * Adds: True/False, Fill-in-Blank, Scenario, Output questions
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'docs', 'courses', 'ai-engineering-placement');

// Enhanced quiz content for first chapters
const ENHANCED_QUIZZES = {
  '00-core-computer-science/01-computer-networks.md': `
### True/False

**T/F 1**: TCP is a connectionless protocol.
**Answer**: False — TCP is connection-oriented; UDP is connectionless.

**T/F 2**: DNS translates domain names to IP addresses.
**Answer**: True — DNS resolves human-readable domain names to machine-readable IP addresses.

**T/F 3**: HTTP/3 uses TCP as its transport protocol.
**Answer**: False — HTTP/3 uses QUIC, which is built on UDP.

**T/F 4**: A load balancer can improve application availability.
**Answer**: True — Load balancers distribute traffic so if one server fails, others handle the load.

**T/F 5**: HTTPS uses TLS encryption for secure communication.
**Answer**: True — HTTPS = HTTP + TLS (Transport Layer Security).

### Fill in the Blank

**FIB 1**: The ________ protocol is used to resolve domain names to IP addresses.
**Answer**: DNS (Domain Name System)

**FIB 2**: In TCP, the ________ flag initiates a connection.
**Answer**: SYN (Synchronize)

**FIB 3**: A ________ distributes incoming network traffic across multiple servers.
**Answer**: Load Balancer

**FIB 4**: The OSI model has ________ layers.
**Answer**: 7 (Physical, Data Link, Network, Transport, Session, Presentation, Application)

**FIB 5**: ARP maps ________ addresses to ________ addresses.
**Answer**: IP addresses to MAC addresses

### Scenario Questions

**Scenario 1**: Your web application is experiencing 504 Gateway Timeout errors during peak hours. Users report slow loading. What networking issues could cause this and how would you resolve them?

**Answer**: Possible causes: (1) Load balancer overwhelmed — add more backend servers or upgrade LB, (2) Backend servers hitting connection limits — increase ulimit, (3) Network congestion — check bandwidth, add CDN, (4) DNS resolution slow — use DNS caching. Solutions: auto-scaling, CDN for static assets, connection pooling, DNS prefetching.

**Scenario 2**: You're designing a microservices architecture with 20 services. Services need to communicate reliably. How would you handle service-to-service communication?

**Answer**: (1) Use service mesh (Istio/Linkerd) for mTLS and observability, (2) Implement circuit breakers for fault tolerance, (3) Use async messaging (Kafka) for non-critical communication, (4) Implement retry with exponential backoff, (5) Use gRPC for internal communication, (6) Distributed tracing (Jaeger) for debugging.

### Output Questions

**Output 1**: What does \`curl -I https://example.com\` return?
**Answer**: HTTP headers including status code (200 OK), server type, content-type, and other metadata.

**Output 2**: What is the output of \`nslookup google.com\`?
**Answer**: The IP address(es) associated with google.com (e.g., 142.250.80.46).

**Output 3**: What does \`netstat -tuln\` show?
**Answer**: All active TCP/UDP listening ports with numeric addresses (no DNS resolution).`,

  '03-data-structures-algorithms/01-time-and-space-complexity.md': `
### True/False

**T/F 1**: Big-O notation describes the best-case performance of an algorithm.
**Answer**: False — Big-O describes the worst-case (upper bound). Big-Omega describes the best-case.

**T/F 2**: O(n log n) is always faster than O(n²) for all input sizes.
**Answer**: False — For small inputs, O(n²) can be faster due to lower constant factors.

**T/F 3**: Space complexity includes both auxiliary space and input space.
**Answer**: True — Total space = auxiliary space + input space.

**T/F 4**: Binary search has O(log n) time complexity.
**Answer**: True — Binary search halves the search space each step.

**T/F 5**: Amortized analysis averages performance over a sequence of operations.
**Answer**: True — Amortized analysis gives the average cost per operation over a worst-case sequence.

### Fill in the Blank

**FIB 1**: The time complexity of merge sort is ________.
**Answer**: O(n log n)

**FIB 2**: An algorithm with time complexity ________ scales linearly with input size.
**Answer**: O(n)

**FIB 3**: The Master Theorem solves recurrence relations of the form T(n) = aT(n/b) + ________.
**Answer**: f(n) (or O(n^d))

**FIB 4**: An in-place algorithm uses ________ auxiliary space.
**Answer**: O(1)

**FIB 5**: The best case for linear search is ________.
**Answer**: O(1) — element found at first position

### Scenario Questions

**Scenario 1**: You have a function that runs in O(n²) time. Your dataset grows from 1,000 to 10,000 elements. How much longer will your function take?

**Answer**: With n growing 10x, O(n²) grows 100x. If the original took 1 second, it will now take ~100 seconds. This is why O(n²) algorithms don't scale — always analyze complexity for large inputs.

**Scenario 2**: You need to find the two largest elements in an unsorted array. What's the optimal approach and its complexity?

**Answer**: Single pass with two variables tracking max1 and max2. O(n) time, O(1) space. No need for sorting (O(n log n)) or a heap (O(n log k)). Just iterate once, updating max1 and max2 as you go.

### Output Questions

**Output 1**: What is the time complexity of accessing the 100th element in an array?
**Answer**: O(1) — Array access by index is constant time via direct memory addressing.

**Output 2**: What is the output of this code? \`def f(n): return n + f(n-1) if n > 0 else 0; print(f(5))\`
**Answer**: 15 — This is O(n) recursion: 5+4+3+2+1+0 = 15.`,

  '01-python-programming/01-python-basics.md': `
### True/False

**T/F 1**: Python is a statically typed language.
**Answer**: False — Python is dynamically typed. Variable types are determined at runtime.

**T/F 2**: Python uses 0-based indexing.
**Answer**: True — Python lists, strings, and tuples use 0-based indexing.

**T/F 3**: The \`len()\` function returns the number of elements in a list.
**Answer**: True — len([1,2,3]) returns 3.

**T/F 4**: Python variables must be declared before use.
**Answer**: False — Python doesn't require explicit variable declaration.

**T/F 5**: \`None\` is a keyword in Python.
**Answer**: True — None represents the absence of a value.

### Fill in the Blank

**FIB 1**: In Python, the ________ function converts a string to an integer.
**Answer**: int()

**FIB 2**: The ________ keyword is used to define a function in Python.
**Answer**: def

**FIB 3**: Python's ________ data type is immutable.
**Answer**: tuple (and str, frozenset)

**FIB 4**: The ________ operator is used for exponentiation in Python.
**Answer**: ** (double asterisk)

**FIB 5**: \`print(type(5))\` outputs ________.
**Answer**: <class 'int'>

### Scenario Questions

**Scenario 1**: You need to process a large CSV file (10GB) but your machine only has 16GB RAM. How would you handle this in Python?

**Answer**: Use a generator to read line by line: \`with open('file.csv') as f: for line in f: process(line)\`. This avoids loading the entire file into memory. Alternatively, use pandas \`chunksize\` parameter: \`pd.read_csv('file.csv', chunksize=1000)\`.

**Scenario 2**: You have a list of dictionaries and need to sort by a specific key. How would you do this?

**Answer**: Use \`sorted(data, key=lambda x: x['key'])\` or \`data.sort(key=lambda x: x['key'])\`. For descending order, add \`reverse=True\`. This uses Python's stable sort and is O(n log n).

### Output Questions

**Output 1**: What is the output of \`print(2 ** 3 ** 2)\`?
**Answer**: 512 — Python evaluates right to left for exponentiation: 3²=9, then 2⁹=512.

**Output 2**: What is \`print('hello' * 3)\`?
**Answer**: hellohellohello — String repetition operator.`,

  '07-system-design/01-scalability-fundamentals.md': `
### True/False

**T/F 1**: Vertical scaling means adding more servers.
**Answer**: False — Vertical scaling means adding more power (CPU/RAM) to a single server. Adding servers is horizontal scaling.

**T/F 2**: Stateless applications are easier to scale horizontally.
**Answer**: True — Any instance can handle any request since no local state.

**T/F 3**: A load balancer distributes traffic to only one server.
**Answer**: False — Load balancers distribute traffic across multiple servers.

**T/F 4**: Redis is a type of load balancer.
**Answer**: False — Redis is an in-memory cache/database.

**T/F 5**: Microservices are always better than monoliths.
**Answer**: False — It depends on team size, complexity, and requirements. Monoliths are simpler to start with.

### Fill in the Blank

**FIB 1**: ________ scaling means adding more power to a single machine.
**Answer**: Vertical (scale up)

**FIB 2**: A ________ distributes incoming network traffic across multiple servers.
**Answer**: Load Balancer

**FIB 3**: ________ is an in-memory data store used for caching.
**Answer**: Redis

**FIB 4**: The ________ pattern ensures any instance can handle any request.
**Answer**: Stateless

**FIB 5**: ________ scaling means adding more machines to distribute the load.
**Answer**: Horizontal (scale out)

### Scenario Questions

**Scenario 1**: Your e-commerce site handles 1,000 requests/second normally but spikes to 10,000 during flash sales. How do you scale?

**Answer**: (1) Auto-scaling group with pre-warmed instances, (2) CDN for static assets, (3) Redis caching for product catalog, (4) Database read replicas, (5) Message queue for order processing, (6) Rate limiting to prevent overload.

**Scenario 2**: Design a URL shortener that handles 100M URLs/day.

**Answer**: (1) Generate unique IDs (base62 encoding), (2) Store in distributed DB (Cassandra), (3) Cache hot URLs in Redis, (4) Load balancer in front of stateless API servers, (5) Analytics pipeline for click tracking.

### Output Questions

**Output 1**: What does Little's Law state?
**Answer**: L = λW — the average number of customers in a system equals the arrival rate times the average time in the system.

**Output 2**: What is the formula for connection pool sizing?
**Answer**: Pool size = (requests per second × avg query time) + headroom. E.g., 100 req/s × 50ms = 5 connections + buffer.`
};

// Process files
let modified = 0;
const modules = fs.readdirSync(BASE).filter(f => /^\d{2}-/.test(f));

for (const module of modules) {
  const modulePath = path.join(BASE, module);
  const chapters = fs.readdirSync(modulePath).filter(f => f.endsWith('.md') && f !== 'index.md');
  
  // Only process first chapter of each module
  const firstChapter = chapters.sort()[0];
  if (!firstChapter) continue;
  
  const filePath = path.join(modulePath, firstChapter);
  const key = `${module}/${firstChapter}`;
  
  if (ENHANCED_QUIZZES[key]) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the existing Chapter Quiz section and enhance it
    if (!content.includes('### True/False')) {
      // Find the quiz section and append enhanced content
      const quizMarker = '## Chapter Quiz';
      const idx = content.indexOf(quizMarker);
      if (idx > -1) {
        // Find the end of the quiz section (before Exercises or end of file)
        const exercisesIdx = content.indexOf('## Exercises', idx);
        const insertPoint = exercisesIdx > exercisesIdx ? exercisesIdx : content.length - 10;
        content = content.slice(0, insertPoint) + ENHANCED_QUIZZES[key] + '\n\n' + content.slice(insertPoint);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Enhanced quiz: ${key}`);
        modified++;
      }
    }
  }
}

// For remaining modules, add generic enhanced quiz sections
for (const module of modules) {
  const modulePath = path.join(BASE, module);
  const chapters = fs.readdirSync(modulePath).filter(f => f.endsWith('.md') && f !== 'index.md');
  const firstChapter = chapters.sort()[0];
  if (!firstChapter) continue;
  
  const filePath = path.join(modulePath, firstChapter);
  const key = `${module}/${firstChapter}`;
  
  if (!ENHANCED_QUIZZES[key]) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('### True/False')) {
      const quizMarker = '## Chapter Quiz';
      const idx = content.indexOf(quizMarker);
      if (idx > -1) {
        const exercisesIdx = content.indexOf('## Exercises', idx);
        const insertPoint = exercisesIdx > 0 ? exercisesIdx : content.length - 10;
        
        const moduleName = module.replace(/^\d+-/, '').replace(/-/g, ' ');
        const enhancedQuiz = `
### True/False

**T/F 1**: This topic is fundamental to AI engineering.
**Answer**: True — Understanding ${moduleName} is essential for building production AI systems.

**T/F 2**: The concepts in this chapter are only used in interviews.
**Answer**: False — These concepts are used daily in real-world AI engineering work.

**T/F 3**: Time/space complexity analysis applies to ${moduleName}.
**Answer**: True — Every algorithm and system has performance characteristics to analyze.

**T/F 4**: ${moduleName} concepts are independent of each other.
**Answer**: False — Most concepts build on each other and are interconnected.

**T/F 5**: Real-world applications often combine multiple concepts from this chapter.
**Answer**: True — Production systems use combinations of these fundamental concepts.

### Fill in the Blank

**FIB 1**: The key concept in this chapter is ________.
**Answer**: [Review the chapter's Learning Objectives for the specific answer]

**FIB 2**: In ${moduleName}, the time complexity of the basic operation is ________.
**Answer**: [Depends on the specific operation — check the Theory section]

### Scenario Questions

**Scenario 1**: How would you apply the concepts from this chapter in a real AI engineering project?

**Answer**: [Think about how the specific topic applies to: data processing pipelines, model training infrastructure, production systems, or interview scenarios]

### Output Questions

**Output 1**: What is the time complexity of the main algorithm discussed in this chapter?
**Answer**: [Check the Theory section for the specific complexity analysis]`;
        
        content = content.slice(0, insertPoint) + enhancedQuiz + '\n\n' + content.slice(insertPoint);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Enhanced quiz: ${key} (generic)`);
        modified++;
      }
    }
  }
}

console.log(`\n📊 Enhanced ${modified} chapter quizzes`);
