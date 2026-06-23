![Database Advanced Topics - Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/59-interview-databases-d.png)

## Chapter at a Glance

| Topic | Key Focus | Key Questions |
|-------|----------|--------------|
| Core Concepts | Foundational understanding | Definitions, contrasts, trade-offs |
| Code Examples | Compilable, runnable solutions | Real interview scenarios |
| Best Practices | Production-ready patterns | Pitfalls to avoid |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Core Concepts] --> B[Code Examples]
    B --> C[Edge Cases]
    C --> D[Best Practices]
```

### Q26: What is database sharding, and how do you implement it?
> **Pro Tip:** In interviews, always start with the "why" before the "how." Explaining the reasoning behind a design choice is more valuable than reciting syntax.

> **Remember:** Code readability matters in interviews. Write clean, well-structured code with meaningful variable names.


**Answer:**

Sharding (horizontal partitioning) splits a table across multiple database instances. Each shard holds a subset of rows based on a shard key. The application routes queries to the correct shard.

```java
// â”€â”€ Shard key routing with AbstractRoutingDataSource â”€â”€
public class ShardRouter {
    private final Map<String, DataSource> shards = Map.of(
        "shard-0", createDataSource("jdbc:postgresql://shard0.example.com:5432/db"),
        "shard-1", createDataSource("jdbc:postgresql://shard1.example.com:5432/db"),
        "shard-2", createDataSource("jdbc:postgresql://shard2.example.com:5432/db")
    );

    public DataSource getShard(long tenantId) {
        int shardIndex = (int) (tenantId % shards.size());
        return shards.get("shard-" + shardIndex);
    }
}

// â”€â”€ Spring AbstractRoutingDataSource â”€â”€
public class TenantAwareRoutingSource extends AbstractRoutingDataSource {
    @Override
    protected Object determineCurrentLookupKey() {
        return "shard-" + (TenantContext.getTenantId() % 3);
    }
}
```

Key considerations:
- Choose a shard key that evenly distributes data (user_id, tenant_id, region)
- Cross-shard queries (JOINs across shards) are expensive or impossible â€” design aggregates per shard
- Adding shards requires rebalancing or consistent hashing
- Transactions cannot span shards (no distributed ACID without coordinator)
- PostgreSQL Citus, MySQL Cluster, and Vitess provide automated sharding at the database layer

Sharding is the most complex scaling strategy. Exhaust read replicas, vertical scaling, and connection pooling before considering it.

---

### Q27: How do you configure read replicas with Spring Boot?

**Answer:**

Use `@Transactional(readOnly = true)` to route read operations to a replica datasource. Implement this with `AbstractRoutingDataSource` and a `@Transactional` interceptor.

```java
// â”€â”€ Multi-datasource configuration â”€â”€
@Configuration
public class DataSourceConfig {

    @Bean
    @ConfigurationProperties("spring.datasource.primary")
    public DataSource primaryDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean
    @ConfigurationProperties("spring.datasource.replica")
    public DataSource replicaDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean
    public DataSource routingDataSource() {
        RoutingDataSource router = new RoutingDataSource();
        Map<Object, Object> targets = new HashMap<>();
        targets.put("PRIMARY", primaryDataSource());
        targets.put("REPLICA", replicaDataSource());
        router.setDefaultTargetDataSource(primaryDataSource());
        router.setTargetDataSources(targets);
        return router;
    }
}

// â”€â”€ Routing datasource â”€â”€
public class RoutingDataSource extends AbstractRoutingDataSource {
    @Override
    protected Object determineCurrentLookupKey() {
        return TransactionSynchronizationManager
            .isCurrentTransactionReadOnly() ? "REPLICA" : "PRIMARY";
    }
}

// â”€â”€ Usage â”€â”€
@Service
public class UserService {
    @Transactional(readOnly = true)  // routes to REPLICA
    public List<User> findAll() { return repo.findAll(); }

    @Transactional  // routes to PRIMARY
    public User save(User u) { return repo.save(u); }
}
```

Caveats:
- Replica lag means read-after-write consistency is not guaranteed â€” a user may not see their own saved data immediately
- Use `@Transactional(readOnly = true)` only on queries where stale data is acceptable
- For read-your-writes consistency, use the primary datasource within the same transaction
- Connection pooling needs separate pools for primary and replica

---

### Q28: Explain Hibernate cascade types with examples

**Answer:**

Cascade types dictate how operations on a parent entity propagate to its children.

```java
@Entity
public class Author {
    @Id @GeneratedValue private Long id;
    private String name;

    // â”€â”€ ALL: persist, merge, remove, refresh, detach â”€â”€
    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    private List<Book> books;

    // â”€â”€ PERSIST: saving Author saves Books â”€â”€
    @OneToMany(mappedBy = "author", cascade = CascadeType.PERSIST)
    private List<Article> articles;

    // â”€â”€ MERGE: updating Author updates Books â”€â”€
    @OneToMany(mappedBy = "author", cascade = CascadeType.MERGE)
    private List<Book> editedBooks;

    // â”€â”€ REMOVE: deleting Author deletes Books â”€â”€
    @OneToMany(mappedBy = "author", cascade = CascadeType.REMOVE)
    private List<Book> coAuthoredBooks;

    // â”€â”€ DETACH: detaching Author detaches Books â”€â”€
    @OneToMany(mappedBy = "author", cascade = CascadeType.DETACH)
    private List<Book> reviewedBooks;

    // â”€â”€ REFRESH: refreshing Author refreshes Books â”€â”€
    @OneToMany(mappedBy = "author", cascade = CascadeType.REFRESH)
    private List<Book> proofreadBooks;
}

@Service
public class AuthorService {
    @Transactional
    public void createAuthorWithBooks() {
        Author a = new Author();
        a.setName("Raushan");
        a.setBooks(List.of(
            new Book("AI Engineering 101", a),
            new Book("Spring Boot in Practice", a)
        ));
        repo.save(a);  // cascade = ALL saves both books automatically
    }
}
```

```sql
-- Generated SQL for the above:
INSERT INTO author (name) VALUES ('Raushan');
INSERT INTO book (title, author_id) VALUES ('AI Engineering 101', 1);
INSERT INTO book (title, author_id) VALUES ('Spring Boot in Practice', 1);
```

Use `CascadeType.ALL` only when the child entity has no independent lifecycle. Never cascade `ALL` on `@ManyToMany` â€” it can delete entities that belong to other owners. Use `PERSIST` + `MERGE` for most `@OneToMany` relationships.

---

### Q29: What is the difference between `@Embedded` and `@OneToOne`?

**Answer:**

`@Embedded` maps the fields of an embeddable class directly into the parent table (flat schema). `@OneToOne` creates a separate table with a foreign key relationship.

```java
// â”€â”€ @Embedded â€” fields in the same table â”€â”€
@Embeddable
public class Address {
    private String street;
    private String city;
    private String zipCode;
    private String country;
}

@Entity
public class User {
    @Id private Long id;
    private String name;

    @Embedded
    private Address address;  // columns: street, city, zip_code, country â€” in the users table
}

// Result: single table "users" with columns: id, name, street, city, zip_code, country

// â”€â”€ @OneToOne â€” separate table with FK â”€â”€
@Entity
public class Profile {
    @Id private Long id;
    private String bio;
    private String avatarUrl;
}

@Entity
public class User {
    @Id private Long id;
    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profile_id")
    private Profile profile;  // FK to separate profiles table
}

// Result: users(id, name, profile_id), profiles(id, bio, avatar_url)
```

When to use each:
- `@Embedded`: The embedded fields are tightly coupled to the parent, never queried independently, and the relationship is strictly one-to-one. Address, contact info, monetary amount (value + currency).
- `@OneToOne`: The associated entity has its own lifecycle, is queried independently, may be shared (rare), or would create too many nullable columns in the parent table.

Embeddables support nesting and overriding column names:
```java
@Embedded
@AttributeOverrides({
    @AttributeOverride(name = "street", column = @Column(name = "home_street")),
    @AttributeOverride(name = "city", column = @Column(name = "home_city"))
})
private Address homeAddress;
```

---

### Q30: How do you implement batch processing with JPA and Hibernate?

**Answer:**

Batch processing inserts or updates thousands of rows efficiently by batching JDBC statements and flushing periodically.

```java
// â”€â”€ Configuration â”€â”€
spring:
  jpa:
    properties:
      hibernate:
        jdbc:
          batch_size: 50
        order_inserts: true
        order_updates: true
        batch_versioned_data: true

// â”€â”€ Batch insert service â”€â”€
@Service
public class BatchImportService {

    @PersistenceContext
    private EntityManager em;

    @Transactional
    public void importUsers(List<UserCsvRow> rows) {
        int batchSize = 50;
        for (int i = 0; i < rows.size(); i++) {
            User u = new User();
            u.setName(rows.get(i).name());
            u.setEmail(rows.get(i).email());
            em.persist(u);

            if (i > 0 && i % batchSize == 0) {
                em.flush();
                em.clear();  // detaches all managed entities â€” frees memory
            }
        }
        em.flush();
        em.clear();
    }
}
```

Without `order_inserts=true`, Hibernate sends individual INSERT statements for unrelated entities. With batching and ordering:

```sql
-- Generated SQL (batched):
INSERT INTO users (name, email) VALUES ('Alice', 'a@x.com'), ('Bob', 'b@x.com'), ...;  -- 50 rows
```

For updates, `order_updates=true` groups statements by entity type:

```java
@Transactional
public void bulkStatusUpdate(List<Long> ids, String newStatus) {
    // âŒ Without batching: N separate UPDATEs (one per entity)
    // âœ… With order_updates: batched UPDATE ... WHERE id IN (...)

    for (Long id : ids) {
        User u = em.find(User.class, id);
        u.setStatus(newStatus);  // dirty checking queues UPDATE
    }
    em.flush();
}
```

For truly large datasets (100K+ rows), use JDBC batch updates directly or a bulk operation:

```java
@Modifying
@Query("UPDATE User u SET u.status = :status WHERE u.id IN :ids")
int bulkUpdateStatus(@Param("ids") List<Long> ids, @Param("status") String status);

// Returns the number of updated rows â€” no entity loading needed
```

---

### Q31: Explain database indexing strategies for common query patterns

**Answer:**

Indexes are the single most impactful performance optimization. Choosing the right index type depends on your query pattern.

**B-tree index** (default, works for most queries):
```sql
CREATE INDEX idx_users_email ON users(email);
-- Supports: =, >, <, >=, <=, BETWEEN, LIKE 'prefix%', IN
-- Does NOT support: LIKE '%suffix', LIKE '%middle%', function(column)
```

**Composite index** (for queries filtering/sorting by multiple columns):
```sql
CREATE INDEX idx_orders_user_status ON orders(user_id, status);
-- Supports: WHERE user_id = ?  (uses first column)
-- Supports: WHERE user_id = ? AND status = ?  (full index)
-- Does NOT support: WHERE status = ?  (cannot use index â€” status is second column)

-- Column order matters: put equality filters first, range filters last
CREATE INDEX idx_orders_date_status ON orders(order_date, status);
-- WHERE order_date > '2024-01-01' AND status = 'ACTIVE'  â€” partial index usage (date column only)
-- Better: put the equality column first
CREATE INDEX idx_orders_status_date ON orders(status, order_date);
```

**Partial index** (index only a subset of rows â€” smaller, faster):
```sql
CREATE INDEX idx_active_users ON users(email) WHERE active = true;
-- Only indexes active users â€” 70% smaller if 30% of users are active
```

**Covering index** (includes all needed columns â€” no table lookup):
```sql
CREATE INDEX idx_orders_covering ON orders(user_id, status, total, created_at);
-- SELECT status, total FROM orders WHERE user_id = 123 ORDER BY created_at DESC
-- Entire query satisfied from index â€” zero table page reads
```

**GIN index** (for JSONB, full-text search, arrays):
```sql
CREATE INDEX idx_metadata ON products USING GIN (metadata jsonb_path_ops);
-- SELECT * FROM products WHERE metadata @> '{"color": "red"}'  â€” fast JSON containment search
```

**Indexing checklist per query:**
1. Run `EXPLAIN ANALYZE` on the slow query
2. Identify the table scan (`Seq Scan`) or filter condition
3. Create the smallest viable index that covers the WHERE clause
4. Add the ORDER BY columns if they aren't in the index
5. Include SELECT columns in the index if the table is read-heavy (covering index)
6. `VACUUM ANALYZE` and re-test

Most applications need fewer than 20 indexes per table. Too many indexes slow down writes (each INSERT/UPDATE must update every index).

---

### Q32: How does Hibernate's first-level cache interact with `@Transactional`?

**Answer:**

The first-level cache (persistence context) is scoped to the Hibernate `Session`, which is bound to a Spring transaction. Within a `@Transactional` method, all entity operations share the same persistence context.

```java
@Service
public class UserService {
    @Transactional
    public User updateUser(Long id, String newName, String newEmail) {
        // Both calls to findById hit the same persistence context
        User u1 = userRepo.findById(id).orElseThrow();
        u1.setName(newName);

        User u2 = userRepo.findById(id).orElseThrow();  // L1 cache hit â€” no SQL
        System.out.println(u1 == u2);  // true â€” same Java object

        u2.setEmail(newEmail);

        // At commit: Hibernate detects dirty fields (name AND email changed)
        // generates: UPDATE users SET name = ?, email = ? WHERE id = ? AND version = ?
        return u2;
    }
}
```

Implications:
1. **Write-behind**: Changes are queued in the persistence context until flush. The database is not touched until `em.flush()` or `@Transactional` commit.
2. **Dirty checking**: On flush, Hibernate compares every managed entity's current state with its snapshot. Changed fields generate UPDATE statements.
3. **Read-after-write consistency**: Within the same transaction, you always see your own writes because the L1 cache serves the entity.

Common mistake â€” calling `save()` is unnecessary for managed entities:
```java
@Transactional
public void updateName(Long id, String name) {
    User u = userRepo.findById(id).orElseThrow();  // managed
    u.setName(name);  // no save() needed â€” Hibernate auto-detects the change on flush
    // Hibernate generates: UPDATE users SET name = ? WHERE id = ?
}
```

---

### Q33: What are database migration rollback strategies in production?

**Answer:**

Database rollbacks are more complex than code rollbacks because the schema change is irreversible once applied. Three strategies:

**1. Forward-only with compensating migration (recommended):**
Every migration must have a corresponding "down" migration that reverses the change.

```java
// â”€â”€ Flyway with callback for rollback support â”€â”€
public class FlywayRollbackService {
    public void undoLastMigration() {
        Flyway flyway = Flyway.configure()
            .dataSource(dataSource)
            .load();

        // Get the last applied migration
        var applied = flyway.info().applied();
        MigrationInfo last = applied[applied.length - 1];

        // Execute the undo script (V{version}__{description}.sql â†’ V{version}__{description}__undo.sql)
        String undoScript = "db/undomigrations/" + last.getVersion() + "__undo.sql";
        Resource undo = new ClassPathResource(undoScript);
        if (undo.exists()) {
            executeSql(new String(undo.getInputStream().readAllBytes()));
        }
    }
}

-- Example down migration: V2__add_active_column__undo.sql
ALTER TABLE users DROP COLUMN active;
DELETE FROM flyway_schema_history WHERE version = '2';
```

**2. Expand-contract pattern (zero-downtime):**
Phase 1 â€” expand: Add the new column/table. Both old and new code can run simultaneously.
Phase 2 â€” migrate: Backfill data. Deploy new code that uses the new schema.
Phase 3 â€” contract: Remove the old column/table after confirming the new code works.

```sql
-- Phase 1 (expand): Add nullable column
ALTER TABLE users ADD COLUMN email_v2 VARCHAR(255);

-- Application writes to both email and email_v2 during migration

-- Phase 2 (migrate): Backfill
UPDATE users SET email_v2 = email WHERE email_v2 IS NULL;

-- Deploy code that reads from email_v2 instead of email

-- Phase 3 (contract): Remove old column
ALTER TABLE users DROP COLUMN email;
```

**3. Feature flags with backward-compatible schema:**
New schema changes are rolled out behind a feature flag. If the deployment fails, disable the flag. The schema change remains but is unused until re-enabled.

```java
@Value("${features.use-new-email-column:false}")
private boolean useNewEmail;

public String getEmail(User u) {
    return useNewEmail ? u.getEmailV2() : u.getEmail();
}
```

Never rename or drop columns without a multi-phase migration. Never make columns NOT NULL without backfilling data first. Test rollbacks on a staging database that mirrors production volume.

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| Interface | Contract without state | Multiple inheritance of type | API contracts |
| Abstract Class | Partial implementation | Single inheritance, shared state | Template method pattern |
| Record | Transparent data carrier | Auto-generated methods | DTOs, value objects |

## Quick Reference

| Topic | Key Points | Interview Frequency |
|-------|-----------|-------------------|
| **OOP** | Encapsulation, Inheritance, Polymorphism, Abstraction | Every interview |
| **Collections** | List, Set, Map, Queue, Deque | 9/10 interviews |
| **Concurrency** | synchronized, volatile, Locks, CompletableFuture | 7/10 senior interviews |
| **Java 8+** | Lambdas, Streams, Optional, CompletableFuture | 8/10 interviews |

## Cross-Application Matrix

| Skill | Junior (0-2yr) | Mid (3-5yr) | Senior (6-9yr) | Staff (10+) |
|-------|---------------|-------------|----------------|-------------|
| OOP & Design Patterns | Define and identify | Apply and combine | Evaluate and refactor | Create and teach |
| Collections | Basic usage | Performance trade-offs | Concurrent collections | Custom implementations |
| Concurrency | Syntax knowledge | Write thread-safe code | Debug deadlocks | Design concurrent systems |

## Chapter Quiz

1. What is the difference between equals() and == in Java?
   - A) They are identical
   - B) equals() compares values, == compares references
   - C) == compares values, equals() compares references
   - D) equals() is for primitives, == is for objects

<details>
<summary>Answer</summary>
**B) equals() compares logical equality (overridable), == compares reference equality.**
</details>

2. Which collection guarantees insertion order?
   - A) HashMap
   - B) TreeMap
   - C) LinkedHashMap
   - D) HashSet

<details>
<summary>Answer</summary>
**C) LinkedHashMap.** LinkedHashMap maintains a doubly-linked list of entries to preserve insertion order.
</details>

3. What keyword prevents a method from being overridden?
   - A) static
   - B) final
   - C) private
   - D) abstract

<details>
<summary>Answer</summary>
**B) final.** A final method cannot be overridden by subclasses.
</details>
