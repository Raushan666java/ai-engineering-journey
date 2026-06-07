# Document Similarity and Diff System Design

## Executive Summary

Design a scalable system for comparing, finding similarities, and generating differences between documents (text files, source code, legal documents, etc.). The system leverages string DP algorithms (LCS, Edit Distance, etc.) to provide features like plagiarism detection, code review diffs, version control, and document deduplication.

**Key Features:**
- Real-time document comparison with visual diff highlighting
- Plagiarism detection with similarity scoring
- Version control diff generation (Git-style)
- Merge conflict detection and resolution suggestions
- Document deduplication for storage optimization
- Semantic similarity analysis

---

## 1. System Requirements

### 1.1 Functional Requirements

**Core Features:**
1. **Document Comparison**
   - Line-by-line diff generation (insertions, deletions, modifications)
   - Word-level and character-level granularity options
   - Support for multiple document formats (txt, md, code files, PDF text)

2. **Similarity Detection**
   - Compute similarity score between two documents (0-100%)
   - Identify longest common subsequences and substrings
   - Detect paraphrased content (semantic similarity)

3. **Plagiarism Detection**
   - Compare document against database of reference documents
   - Identify copied segments with source attribution
   - Generate plagiarism report with highlighted matches

4. **Version Control Diff**
   - Generate Git-style unified diff format
   - Three-way merge with conflict detection
   - Patch generation and application

5. **Document Deduplication**
   - Identify duplicate or near-duplicate documents
   - Cluster similar documents for archival
   - Recommend candidates for merging

### 1.2 Non-Functional Requirements

**Performance:**
- **Latency:** < 100ms for documents up to 10KB
- **Throughput:** Handle 10,000+ comparison requests per second
- **Scalability:** Support documents up to 10MB
- **Concurrency:** 100,000+ concurrent users

**Reliability:**
- **Availability:** 99.99% uptime (52 minutes downtime/year)
- **Durability:** Document metadata and results stored reliably
- **Fault Tolerance:** Automatic failover, no data loss

**Accuracy:**
- **Diff Accuracy:** 100% correct line-level diffs
- **Similarity Scoring:** ±2% margin of error
- **Plagiarism Detection:** > 95% precision and recall

### 1.3 Scale Estimations

**Users:**
- 100 million registered users
- 10 million daily active users (DAU)
- 10,000 concurrent users during peak hours

**Documents:**
- 10 billion documents stored
- 100 million comparisons per day
- Average document size: 50KB
- Total storage: 500TB (documents) + 50TB (metadata)

**Traffic:**
- Read-heavy: 90% reads, 10% writes
- Peak QPS: 10,000 requests/second
- Bandwidth: 500 Gbps outbound (diffs, results)

---

## 2. High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Load Balancer (nginx)                    │
└────────────┬───────────────────────────────────┬─────────────────┘
             │                                   │
     ┌───────▼────────┐                 ┌────────▼────────┐
     │  API Gateway   │                 │  WebSocket      │
     │   (Kong)       │                 │   Gateway       │
     └───────┬────────┘                 └────────┬────────┘
             │                                   │
┌────────────▼───────────────────────────────────▼────────────────┐
│                    Application Layer (Microservices)            │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐           │
│  │  Diff       │  │ Similarity  │  │ Plagiarism   │           │
│  │  Service    │  │  Service    │  │  Service     │           │
│  └──────┬──────┘  └──────┬──────┘  └──────┬───────┘           │
│         │                 │                 │                   │
│  ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼───────┐           │
│  │  Document   │  │  Cache      │  │  Search      │           │
│  │  Service    │  │  Service    │  │  Service     │           │
│  └──────┬──────┘  └──────┬──────┘  └──────┬───────┘           │
└─────────┼─────────────────┼─────────────────┼───────────────────┘
          │                 │                 │
┌─────────▼─────────────────▼─────────────────▼───────────────────┐
│                       Data Layer                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐            │
│  │  PostgreSQL │  │    Redis    │  │ Elasticsearch│            │
│  │  (metadata) │  │   (cache)   │  │  (search)    │            │
│  └─────────────┘  └─────────────┘  └──────────────┘            │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐            │
│  │     S3      │  │   Kafka     │  │   Cassandra  │            │
│  │ (documents) │  │ (streaming) │  │  (results)   │            │
│  └─────────────┘  └─────────────┘  └──────────────┘            │
└──────────────────────────────────────────────────────────────────┘
```

### 2.1 Key Components

**1. API Gateway (Kong)**
- Rate limiting, authentication, API versioning
- Request routing to appropriate microservices

**2. Diff Service**
- Implements Myers' diff algorithm and LCS-based diff
- Generates unified diff, context diff, side-by-side view
- Handles line-level, word-level, character-level diffs

**3. Similarity Service**
- Computes edit distance, LCS length, Jaccard similarity
- Uses TF-IDF and cosine similarity for semantic matching
- Caches similarity scores for frequently compared pairs

**4. Plagiarism Service**
- Compares document against reference database
- Uses inverted index (Elasticsearch) for candidate retrieval
- Applies string matching algorithms to identify copied segments

**5. Document Service**
- Manages document uploads, storage, retrieval
- Stores documents in S3, metadata in PostgreSQL
- Handles document versioning and access control

**6. Cache Service (Redis)**
- Caches diff results, similarity scores, document metadata
- LRU eviction policy, TTL-based expiration
- Reduces database load by 80%

**7. Search Service (Elasticsearch)**
- Indexes documents for full-text search
- Supports fuzzy matching, phrase queries
- Enables fast candidate retrieval for plagiarism detection

---

## 3. Core String DP Algorithms

### 3.1 Diff Generation (Myers' Algorithm + LCS)

**Algorithm:**
```
1. Longest Common Subsequence (LCS):
   - dp[i][j] = length of LCS of doc1[0..i-1] and doc2[0..j-1]
   - Reconstruct path to identify common lines

2. Myers' Diff Algorithm (O(ND) complexity):
   - Efficiently finds shortest edit script
   - Produces minimal diff with fewest changes
   - Optimal for large documents

3. Three-Way Merge:
   - Find LCS(base, version1) and LCS(base, version2)
   - Identify conflicts where both versions modified same section
```

**Implementation Optimizations:**
- **Space:** O(n) instead of O(n²) using rolling arrays
- **Time:** O(n+d²) with Myers' algorithm (d = edit distance)
- **Parallelization:** Split large documents into chunks

**API Example:**
```java
GET /api/v1/diff?doc1_id=123&doc2_id=456&format=unified
Response:
{
  "diff": [
    {"line": 1, "type": "unchanged", "content": "public class Main {"},
    {"line": 2, "type": "deleted", "content": "  // Old comment"},
    {"line": 3, "type": "inserted", "content": "  // New comment"},
    {"line": 4, "type": "unchanged", "content": "}"}
  ],
  "summary": {"additions": 1, "deletions": 1, "unchanged": 2}
}
```

### 3.2 Similarity Scoring

**Algorithm:**
```
1. Edit Distance Similarity:
   similarity = 1 - (editDistance / max(len1, len2))

2. LCS-based Similarity:
   similarity = (2 * lcsLength) / (len1 + len2)

3. Jaccard Similarity (for words):
   similarity = |wordsInCommon| / |wordsUnion|

4. Cosine Similarity (TF-IDF vectors):
   similarity = (vec1 · vec2) / (||vec1|| * ||vec2||)
```

**Multi-level Approach:**
1. **Fast Pre-filter:** Use Jaccard similarity on word tokens (O(n))
2. **Detailed Comparison:** If > 60% similar, compute edit distance (O(n²))
3. **Semantic Analysis:** For > 80% similar, use NLP models

**API Example:**
```java
POST /api/v1/similarity
{
  "doc1_id": "123",
  "doc2_id": "456",
  "algorithms": ["edit_distance", "lcs", "jaccard"]
}

Response:
{
  "overall_similarity": 0.87,
  "scores": {
    "edit_distance": 0.85,
    "lcs": 0.88,
    "jaccard": 0.89
  },
  "common_segments": [
    {"start1": 10, "end1": 50, "start2": 15, "end2": 55, "text": "..."}
  ]
}
```

### 3.3 Plagiarism Detection

**Algorithm:**
```
1. Document Fingerprinting (Winnowing):
   - Compute rolling hash for k-grams
   - Select representative hashes (fingerprints)
   - Store in inverted index: hash → (doc_id, position)

2. Candidate Retrieval:
   - Query inverted index with document fingerprints
   - Rank candidates by number of matching fingerprints

3. Detailed Matching:
   - For top candidates, run LCS or edit distance
   - Identify exact match segments (substring matching)
   - Compute plagiarism score

4. Result Aggregation:
   - Combine matches from multiple sources
   - Remove overlapping segments
   - Generate report with highlighted plagiarized sections
```

**Optimizations:**
- **Bloom Filters:** Quickly eliminate non-matching candidates
- **MinHash/LSH:** Group similar documents for faster search
- **Parallel Processing:** Distribute candidates across workers

**API Example:**
```java
POST /api/v1/plagiarism/check
{
  "document": "...",
  "check_against": ["database", "web"],
  "min_match_length": 50
}

Response:
{
  "plagiarism_score": 0.35,
  "sources": [
    {
      "source_id": "ref_789",
      "source_title": "Research Paper XYZ",
      "matches": [
        {"start": 100, "end": 250, "source_start": 50, "text": "..."}
      ],
      "match_percentage": 0.40
    }
  ],
  "total_matched_chars": 1200,
  "total_chars": 3500
}
```

---

## 4. Database Schema

### 4.1 PostgreSQL (Metadata)

**documents table:**
```sql
CREATE TABLE documents (
  doc_id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL,
  title VARCHAR(500),
  file_path VARCHAR(1000),  -- S3 key
  file_size BIGINT,
  file_hash VARCHAR(64),     -- SHA-256
  content_type VARCHAR(100),
  version INT DEFAULT 1,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_user_id (user_id),
  INDEX idx_file_hash (file_hash)
);
```

**comparison_results table:**
```sql
CREATE TABLE comparison_results (
  result_id BIGSERIAL PRIMARY KEY,
  doc1_id BIGINT REFERENCES documents(doc_id),
  doc2_id BIGINT REFERENCES documents(doc_id),
  algorithm VARCHAR(50),      -- 'edit_distance', 'lcs', etc.
  similarity_score DECIMAL(5,4),
  result_data JSONB,          -- Full diff/similarity data
  computed_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_doc_pair (doc1_id, doc2_id),
  INDEX idx_algorithm (algorithm)
);
```

### 4.2 Redis (Cache)

**Cache Keys:**
- `diff:{doc1_id}:{doc2_id}:{format}` → Cached diff result (TTL: 1 hour)
- `similarity:{doc1_id}:{doc2_id}:{algo}` → Similarity score (TTL: 24 hours)
- `doc_metadata:{doc_id}` → Document metadata (TTL: 6 hours)
- `plag_result:{doc_hash}` → Plagiarism check result (TTL: 1 week)

### 4.3 Cassandra (Large-scale Results)

**comparison_history table:**
```cql
CREATE TABLE comparison_history (
  user_id BIGINT,
  timestamp TIMESTAMP,
  doc1_id BIGINT,
  doc2_id BIGINT,
  result_summary TEXT,
  PRIMARY KEY ((user_id), timestamp)
) WITH CLUSTERING ORDER BY (timestamp DESC);
```

### 4.4 Elasticsearch (Search Index)

**documents index:**
```json
{
  "mappings": {
    "properties": {
      "doc_id": {"type": "long"},
      "title": {"type": "text", "analyzer": "standard"},
      "content": {"type": "text", "analyzer": "english"},
      "fingerprints": {"type": "keyword"},
      "created_at": {"type": "date"}
    }
  }
}
```

---

## 5. API Design

### 5.1 REST Endpoints

**Document Management:**
```
POST   /api/v1/documents              - Upload document
GET    /api/v1/documents/{id}         - Get document
DELETE /api/v1/documents/{id}         - Delete document
GET    /api/v1/documents/{id}/versions - List versions
```

**Comparison:**
```
GET    /api/v1/diff                   - Generate diff
POST   /api/v1/similarity             - Compute similarity
POST   /api/v1/merge                  - Three-way merge
```

**Plagiarism:**
```
POST   /api/v1/plagiarism/check       - Check for plagiarism
GET    /api/v1/plagiarism/report/{id} - Get plagiarism report
```

### 5.2 WebSocket API (Real-time Diff)

**Connection:**
```javascript
ws://api.example.com/ws/diff

// Client sends:
{
  "action": "stream_diff",
  "doc1_id": "123",
  "doc2_content": "... (streaming content) ..."
}

// Server responds:
{
  "type": "diff_chunk",
  "chunk_id": 1,
  "diff": [...]
}
```

---

## 6. Scalability and Performance

### 6.1 Horizontal Scaling

**Application Layer:**
- **Stateless Services:** All microservices are stateless, scalable via Kubernetes
- **Auto-scaling:** Scale based on CPU, memory, and request queue length
- **Load Balancing:** Round-robin with health checks

**Data Layer:**
- **Database Sharding:** Partition documents by user_id (consistent hashing)
- **Read Replicas:** PostgreSQL primary + 5 read replicas
- **Caching:** Redis cluster with 10 nodes

### 6.2 Performance Optimizations

**Algorithm Optimizations:**
1. **Early Termination:** If docs differ significantly in size, skip detailed comparison
2. **Chunk Processing:** Split large documents into 10KB chunks, compare in parallel
3. **Heuristic Pre-filtering:** Use fast heuristics (file size, word count) before DP algorithms

**Caching Strategy:**
- **Layer 1:** Browser cache (ETag, max-age=3600)
- **Layer 2:** CDN cache for static assets
- **Layer 3:** Redis cache for API responses
- **Layer 4:** Application-level memoization for repeated computations

**Compression:**
- **Document Storage:** gzip compression (50% size reduction)
- **API Responses:** Brotli compression (30% bandwidth savings)

### 6.3 Asynchronous Processing

**For Large Documents (> 1MB):**
```
1. Client uploads document → Document Service
2. Document Service stores in S3, queues job in Kafka
3. Worker pool picks up job, computes diff/similarity
4. Result stored in Cassandra
5. Client notified via WebSocket or polling
```

**Job Queue (Kafka):**
- **Topics:** `diff_jobs`, `similarity_jobs`, `plagiarism_jobs`
- **Partitions:** 100 partitions for parallel processing
- **Workers:** 500 worker processes across 50 machines

---

## 7. Fault Tolerance and Reliability

### 7.1 Redundancy

- **Application:** 3 availability zones, 10 replicas per service
- **Database:** Primary + 2 synchronous replicas (PostgreSQL)
- **Cache:** Redis Cluster with automatic failover
- **Storage:** S3 with 99.999999999% durability

### 7.2 Failure Handling

**Scenarios:**
1. **Service Failure:** Load balancer detects unhealthy instance, routes traffic away
2. **Database Failure:** Automatic failover to replica (< 30 seconds)
3. **Network Partition:** Degrade to cached results, queue requests for retry
4. **Data Corruption:** Checksums for documents, detect and recover from backups

### 7.3 Monitoring and Alerts

**Metrics:**
- **Latency:** P50, P95, P99 for all endpoints
- **Throughput:** Requests per second, bytes processed
- **Error Rate:** 4xx, 5xx errors
- **Resource Usage:** CPU, memory, disk I/O

**Alerting:**
- **Critical:** P95 latency > 500ms, error rate > 1%, service down
- **Warning:** Cache hit rate < 70%, disk usage > 80%

---

## 8. Security

### 8.1 Authentication and Authorization

- **Authentication:** OAuth 2.0, JWT tokens
- **Authorization:** Role-based access control (RBAC)
- **Document Permissions:** Owner, collaborator, public

### 8.2 Data Protection

- **Encryption at Rest:** S3 SSE-KMS, database TDE
- **Encryption in Transit:** TLS 1.3 for all connections
- **PII Protection:** Mask sensitive data in logs

### 8.3 Rate Limiting

- **Per User:** 100 requests/minute for free tier, 1000 for premium
- **Per IP:** 1000 requests/minute to prevent abuse
- **Algorithm:** Token bucket with Redis

---

## 9. Advanced Features

### 9.1 Semantic Similarity (NLP)

**For near-duplicate detection:**
- **Embeddings:** Use BERT/Sentence-BERT to generate document embeddings
- **Similarity:** Cosine similarity on embeddings
- **Use Case:** Detect paraphrased plagiarism

### 9.2 Code-Specific Diff

**For source code:**
- **AST-based Diff:** Parse code into AST, compare trees
- **Syntax Highlighting:** Generate colored diff with language-specific highlighting
- **Refactoring Detection:** Identify renamed variables, moved functions

### 9.3 Collaborative Editing (Real-time)

**Operational Transformation:**
- Track concurrent edits from multiple users
- Resolve conflicts automatically using OT algorithms
- Show live diffs as users type

---

## 10. Cost Analysis

### 10.1 Infrastructure Costs (Monthly)

| Component            | Units       | Cost        |
|----------------------|-------------|-------------|
| EC2 (App Servers)    | 100 m5.large| $10,000     |
| RDS PostgreSQL       | db.r5.2xl   | $2,000      |
| ElastiCache Redis    | 10 nodes    | $1,500      |
| S3 Storage           | 500TB       | $11,500     |
| Data Transfer        | 100TB out   | $9,000      |
| Elasticsearch        | 20 nodes    | $5,000      |
| **Total**            |             | **$39,000** |

### 10.2 Optimization Opportunities

- **Compression:** Reduce S3 storage by 50% → Save $5,750/month
- **Reserved Instances:** Save 40% on EC2 → Save $4,000/month
- **CDN Offloading:** Reduce data transfer by 30% → Save $2,700/month

---

## 11. Deployment Strategy

### 11.1 CI/CD Pipeline

```
1. Code Commit (GitHub)
2. Automated Tests (JUnit, integration tests)
3. Build Docker Images
4. Push to Container Registry (ECR)
5. Deploy to Staging (Kubernetes)
6. Automated E2E Tests
7. Manual QA Approval
8. Canary Deployment to Production (10% traffic)
9. Monitor for 1 hour
10. Full Rollout (100% traffic)
```

### 11.2 Rollback Strategy

- **Automated:** If error rate > 2%, auto-rollback to previous version
- **Manual:** One-click rollback via dashboard
- **Database Migrations:** Blue-green deployment for schema changes

---

## 12. Future Enhancements

1. **AI-Powered Suggestions:** Suggest merge resolutions using ML
2. **Multi-Language Support:** Extend to non-English documents
3. **Real-time Collaboration:** Google Docs-style live editing with diffs
4. **Blockchain Integration:** Timestamp and verify document authenticity
5. **Mobile Apps:** Native iOS/Android apps with offline diff

---

## 13. Conclusion

This document similarity and diff system leverages advanced string DP algorithms (LCS, Edit Distance, Pattern Matching) to provide scalable, real-time document comparison. Key design decisions include:

- **Microservices Architecture:** Independent scaling and fault isolation
- **Multi-level Caching:** Redis + CDN for 90% cache hit rate
- **Algorithm Optimization:** Space-optimized DP (O(n) space), parallel processing
- **Asynchronous Processing:** Kafka queue for large documents
- **High Availability:** Multi-AZ deployment, automatic failover

The system supports 10,000+ requests/second, handles documents up to 10MB, and achieves < 100ms latency for typical comparisons, making it suitable for enterprise-scale version control, plagiarism detection, and document management applications.
