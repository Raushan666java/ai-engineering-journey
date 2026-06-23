$dir = 'C:\xampp\htdocs\ai-engineering-journey\docs\courses\java'
$utf8 = New-Object System.Text.UTF8Encoding $false

# ====== 24-transactions ======
$f = Join-Path $dir '24-transactions.md'
$c = Get-Content -LiteralPath $f -Raw

# A) Nav
$c = $c -replace "(?m)^# Transaction Management`$", @'
# Transaction Management

> **Previous:** [NoSQL](../23-nosql.md) | **Next:** [Auth/AuthZ](../25-auth-authz.md)
'@

# B+C) Glance + Roadmap after Learning Objectives section
$c = $c -replace "(?<=## Learning Objectives[\s\S]*?)`r`n---", @'

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| @Transactional | Declarative transaction demarcation | Use propagation, isolation, rollbackFor attributes |
| Propagation | Required, RequiresNew, Nested | REQUIRED is default; RequiresNew for independent units |
| Isolation Levels | READ_UNCOMMITTED to SERIALIZABLE | READ_COMMITTED balances safety and performance |
| Optimistic Locking | Version-based conflict detection | @Version on a numeric/timestamp column |
| Distributed Tx | JTA, 2PC, Saga patterns | 2PC for short XA; Saga for long-running workflows |

## Chapter Roadmap

```mermaid
flowchart LR
    A[@Transactional] --> B[Propagation]
    B --> C[Isolation Levels]
    C --> D[Rollback Rules]
    D --> E[Programmatic Tx]
    E --> F[Distributed Tx]
    F --> G[Saga Pattern]
```

> **Pro Tip:** Start with @Transactional(readOnly = true) on all read-only service methods because it hints Hibernate to disable dirty checking, reducing memory and flush overhead.

---
'@

# D) Takeaways after h2 sections
$c = $c -replace "(?m)^## Theory$", @'
## Theory

> **One-Sentence Takeaway:** Transactions are the bedrock of reliable data processing; Spring abstracts over JDBC, JPA, JTA, and non-relational stores behind @Transactional.
'@
$c = $c -replace "(?m)^## @Transactional -- Declarative Transactions$", @'
## @Transactional -- Declarative Transactions

> **One-Sentence Takeaway:** @Transactional is the cornerstone of Spring transaction management, wrapping method execution in a transactional boundary managed by PlatformTransactionManager.
'@

# F) Enrichment before Summary
$c = $c -replace "(?m)^## Summary$", @'
---

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| @Transactional | Declarative tx boundary | propagation, isolation, rollbackFor | Service layer methods |
| TransactionTemplate | Programmatic tx control | execute(TransactionCallback) | Complex retry/recovery logic |
| PlatformTransactionManager | SPI for tx management | JPA/JDBC/JTA implementations | Pluggable backend |
| Optimistic Locking | @Version field | Fails on commit conflict | Read-heavy low-contention |
| Pessimistic Locking | SELECT FOR UPDATE | Locks row at read time | Write-heavy high-contention |

## Quick Reference

| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read | Performance |
|----------------|-----------|---------------------|-------------|-------------|
| READ_UNCOMMITTED | Possible | Possible | Possible | Best |
| READ_COMMITTED | Safe | Possible | Possible | Good |
| REPEATABLE_READ | Safe | Safe | Possible | Fair |
| SERIALIZABLE | Safe | Safe | Safe | Worst |

## Cross-Application Matrix

| Pattern | Microservice | Monolith | Batch Job |
|---------|-------------|----------|-----------|
| @Transactional | Required for consistency | Required | Per-chunk tx |
| Saga | Choreography/Orchestration | N/A | N/A |
| 2PC | Short-lived XA | JTA | N/A |
| Optimistic Locking | High-read low-write | High-read low-write | Bulk upserts |

## Chapter Quiz

1. Which propagation behavior starts a new transaction and suspends the existing one?
   - A) REQUIRED
   - B) REQUIRES_NEW
   - C) NESTED
   - D) SUPPORTS

<details>
<summary>Answer</summary>
**B) REQUIRES_NEW.** REQUIRES_NEW suspends the current transaction and creates a new independent one.
</details>

2. What does @Version enable?
   - A) Pessimistic locking
   - B) Optimistic locking
   - C) Read-only mode
   - D) Transaction timeout

<details>
<summary>Answer</summary>
**B) Optimistic locking.** A @Version field increments on each update; conflicting updates throw OptimisticLockException.
</details>

3. Which isolation level prevents phantom reads?
   - A) READ_COMMITTED
   - B) REPEATABLE_READ
   - C) SERIALIZABLE
   - D) READ_UNCOMMITTED

<details>
<summary>Answer</summary>
**C) SERIALIZABLE.** SERIALIZABLE is the strictest level, preventing dirty reads, non-repeatable reads, and phantom reads.
</details>

4. When should you use TransactionTemplate over @Transactional?
   - A) Always prefer @Transactional
   - B) When you need fine-grained error recovery
   - C) When using readOnly=true
   - D) For batch operations

<details>
<summary>Answer</summary>
**B) When you need fine-grained error recovery.** TransactionTemplate provides programmatic control for complex retry and recovery logic.
</details>

---

## Summary
'@

[System.IO.File]::WriteAllText($f, $c, $utf8)
Write-Host 'Done: 24-transactions.md'
