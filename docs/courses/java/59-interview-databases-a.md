# Chapter 59: Database Interview Q&A for Java & Spring Boot Developers

> 25+ questions covering JDBC, JPA, Hibernate, transactions, locking, indexing, NoSQL, and production database patterns. Each answer includes compilable Java code.

---

![JPA Relationships - ManyToMany vs Join Entity](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/59-interview-databases-a.png)

### Q1: What is the difference between JDBC and JPA, and when would you use each?

**Answer:**

JDBC (Java Database Connectivity) is a low-level API that lets you execute raw SQL directly against a database. You manage connections, statements, result sets, and transactions manually. JPA (Jakarta Persistence API) is a high-level specification for object-relational mapping (ORM) that maps Java objects to database tables and lets you work with entities instead of SQL strings.

Use JDBC when you need fine-grained control over SQL, are doing bulk operations where ORM overhead hurts, or are interacting with database-specific features. Use JPA when you want to reduce boilerplate, need automatic dirty checking, lazy loading, or a unit-of-work pattern, and your queries are reasonably standard.

```java
// â”€â”€ JDBC approach â”€â”€
public User findUserByIdJdbc(long id) {
    String sql = "SELECT id, name, email FROM users WHERE id = ?";
    try (Connection conn = dataSource.getConnection();
         PreparedStatement ps = conn.prepareStatement(sql)) {
        ps.setLong(1, id);
        try (ResultSet rs = ps.executeQuery()) {
            if (rs.next()) {
                User u = new User();
                u.setId(rs.getLong("id"));
                u.setName(rs.getString("name"));
                u.setEmail(rs.getString("email"));
                return u;
            }
        }
    } catch (SQLException e) {
        throw new RuntimeException(e);
    }
    return null;
}

// â”€â”€ JPA approach â”€â”€
@Repository
public class UserRepository {
    @PersistenceContext
    private EntityManager em;

    public User findUserByIdJpa(long id) {
        return em.find(User.class, id);  // single line, automatic mapping
    }
}
```

JPA wraps JDBC under the hood. Every JPA operation translates to JDBC calls eventually. The tradeoff is control versus convenience.

---

### Q2: Explain the difference between `hibernate.hbm2ddl.auto` values: `validate`, `update`, `create`, `create-drop`

**Answer:**

These control how Hibernate synchronizes your entity mappings with the database schema:

- `validate`: Checks that the database schema matches your entities. Throws an exception on mismatch. Safe for production â€” it never modifies the schema.
- `update`: Automatically alters the schema to match your entities (adds new tables/columns, but never drops anything). **Not safe for production** â€” it can make destructive guesses in edge cases.
- `create`: Drops all existing tables and recreates them from your entities. Data loss guaranteed. Useful for testing only.
- `create-drop`: Same as `create`, but also drops the schema when the session factory closes. Ideal for embedded databases in unit tests.

```java
// application.yml
spring:
  jpa:
    hibernate:
      ddl-auto: validate   # production
    # ddl-auto: create      # development only
    # ddl-auto: create-drop # integration tests
```

For production, always use `validate` (or `none`) and manage schema changes through migrations (Flyway or Liquibase).

---

### Q3: What is the N+1 query problem in Hibernate, and how do you solve it?

**Answer:**

The N+1 problem occurs when you fetch a collection of entities (1 query), then iterate over them and lazily load a relationship for each one (N additional queries). This turns a single operation into N+1 database round-trips.

```java
@Entity
public class Post {
    @Id private Long id;
    private String title;

    @OneToMany(mappedBy = "post", fetch = FetchType.LAZY)
    private List<Comment> comments;
}

// âŒ Triggers N+1 queries:
// SELECT p FROM Post p                          -- 1 query
// for each post: SELECT c FROM Comment c WHERE c.post_id = ?  -- N queries
List<Post> posts = em.createQuery("SELECT p FROM Post p", Post.class)
    .getResultList();
for (Post p : posts) {
    System.out.println(p.getComments().size());  // lazy load triggered
}
```

Solutions, from best to worst:

**1. JOIN FETCH â€” one query with a join:**
```java
// âœ… Single query with LEFT JOIN FETCH
TypedQuery<Post> q = em.createQuery(
    "SELECT p FROM Post p LEFT JOIN FETCH p.comments", Post.class);
List<Post> posts = q.getResultList();
```

**2. `@EntityGraph` â€” declarative fetch plan:**
```java
@Entity
@NamedEntityGraph(name = "Post.comments", attributeNodes = @NamedAttributeNode("comments"))
public class Post { /* ... */ }

// Usage:
@EntityGraph("Post.comments")
List<Post> findAll();
```

**3. Hibernate `@BatchSize` â€” loads lazy proxies in batches:**
```java
@OneToMany(mappedBy = "post")
@BatchSize(size = 20)
private List<Comment> comments;
```

**4. DTO projection â€” avoid entity loading entirely:**
```java
List<PostSummary> summaries = em.createQuery(
    "SELECT new com.example.PostSummary(p.id, p.title, SIZE(p.comments)) FROM Post p",
    PostSummary.class).getResultList();
```

JOIN FETCH is the most common fix. Watch for `MultipleBagFetchException` when fetching multiple collections â€” use `Set` instead of `List` or fetch one collection per query.

---

### Q4: What is the difference between `FetchType.LAZY` and `FetchType.EAGER`?

**Answer:**

`FetchType.LAZY` defers loading of an association until it is accessed. Hibernate creates a proxy or collection wrapper that fetches the data from the database on first access. `FetchType.EAGER` loads the association immediately, either via a join in the same query or a separate query right after.

```java
@Entity
public class Order {
    @Id private Long id;

    @ManyToOne(fetch = FetchType.EAGER)  // loaded immediately with Order
    private Customer customer;

    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY)  // loaded on first access
    private List<OrderItem> items;
}
```

Rules of thumb:
- Always prefer `LAZY` for `@OneToMany` and `@ManyToMany`. Eager loading a large collection can pull in the entire database.
- `@ManyToOne` defaults to `EAGER`. Consider changing it to `LAZY` and using `JOIN FETCH` when you actually need the parent.
- `@Basic` (scalar fields) is always `EAGER` â€” there is no lazy loading for simple columns unless you enable bytecode enhancement.
- Eager loading via `@ManyToOne` can cascade into multiple joins: `Order â†’ Customer â†’ Address â†’ Country`. One simple query becomes a 4-table Cartesian product.

The `@NamedEntityGraph` approach gives you the best of both worlds: LAZY by default, eager via explicit fetch graph when needed.

---

### Q5: How do you handle optimistic and pessimistic locking in JPA?

**Answer:**

**Optimistic locking** assumes conflicts are rare. You add a `@Version` column, and Hibernate checks it on every update. If another transaction modified the row concurrently, an `OptimisticLockException` is thrown.

```java
@Entity
public class Account {
    @Id private Long id;
    private BigDecimal balance;

    @Version
    private long version;  // incremented on every update
}

// Usage â€” retry on conflict:
@Transactional
public void transfer(Long fromId, Long toId, BigDecimal amount) {
    try {
        Account from = accountRepo.findById(fromId).orElseThrow();
        Account to = accountRepo.findById(toId).orElseThrow();
        from.setBalance(from.getBalance().subtract(amount));
        to.setBalance(to.getBalance().add(amount));
        // Hibernate flushes at commit; if version changed, throws exception
    } catch (OptimisticLockException e) {
        // retry the entire operation
    }
}
```

**Pessimistic locking** assumes conflicts are likely. You acquire a database-level lock on the row immediately.

```java
@Lock(LockModeType.PESSIMISTIC_WRITE)
@Query("SELECT a FROM Account a WHERE a.id = :id")
Optional<Account> findByIdWithLock(@Param("id") Long id);

// Usage:
@Transactional
public void transfer(Long fromId, Long toId, BigDecimal amount) {
    Account from = accountRepo.findByIdWithLock(fromId).orElseThrow();
    Account to = accountRepo.findByIdWithLock(toId).orElseThrow();
    // other transactions block until we commit
    from.setBalance(from.getBalance().subtract(amount));
    to.setBalance(to.getBalance().add(amount));
}
```

Pessimistic lock modes:
- `PESSIMISTIC_READ` â€” shared lock, others can read but not write
- `PESSIMISTIC_WRITE` â€” exclusive lock, no one else can read or write
- `PESSIMISTIC_FORCE_INCREMENT` â€” pessimistic lock + version increment on commit

Use optimistic for read-heavy workloads with rare writes. Use pessimistic for financial transactions, inventory reservations, and any operation where retry is expensive or unacceptable.

---

### Q6: What is the difference between `@Transactional` and manual transaction management?

**Answer:**

`@Transactional` is declarative transaction management. Spring wraps the method in a proxy that begins a transaction before the method and commits (or rolls back) after it. Manual management uses `TransactionTemplate` or `PlatformTransactionManager` directly.

```java
// â”€â”€ Declarative with @Transactional â”€â”€
@Service
public class OrderService {
    @Transactional
    public void placeOrder(OrderRequest req) {
        orderRepo.save(req.toOrder());
        inventoryRepo.deductStock(req.productId(), req.quantity());
        paymentService.charge(req.amount());  // any RuntimeException triggers rollback
    }
}

// â”€â”€ Manual with TransactionTemplate â”€â”€
@Service
public class OrderService {
    private final TransactionTemplate txTemplate;

    public void placeOrder(OrderRequest req) {
        txTemplate.executeWithoutResult(status -> {
            try {
                orderRepo.save(req.toOrder());
                inventoryRepo.deductStock(req.productId(), req.quantity());
                paymentService.charge(req.amount());
            } catch (Exception e) {
                status.setRollbackOnly();  // manual rollback
                throw e;
            }
        });
    }
}
```

When to use manual:
- You need transaction boundaries that don't align with method boundaries
- You need programmatic rollback decisions (rollback only if certain conditions)
- You're calling transactional code from non-beans or lambda expressions
- You need nested transactions with savepoints

`@Transactional` covers 90% of use cases. Drop down to manual for the remaining 10%.

Key `@Transactional` attributes:
- `propagation`: `REQUIRED` (default), `REQUIRES_NEW`, `NESTED`, `MANDATORY`, `NEVER`
- `isolation`: `READ_COMMITTED` (default in most databases), `SERIALIZABLE`, `REPEATABLE_READ`
- `rollbackFor`: roll back on checked exceptions too (default is only `RuntimeException`)
- `timeout`: seconds before automatic rollback
- `readOnly`: hint for optimization (bypasses dirty checking, sets `FLUSH_MODE = MANUAL`)

---

### Q7: Explain Hibernate's first-level and second-level cache

**Answer:**

**First-level cache** (L1) is the `EntityManager`/`Session`-scoped cache. Every entity loaded or persisted within a session is stored in L1. Subsequent lookups by the same ID within the same session hit the cache instead of the database. L1 is always enabled and cannot be disabled â€” it is a core part of the unit-of-work pattern.

```java
// First-level cache in action:
User u1 = em.find(User.class, 1L);  // SQL: SELECT ... WHERE id = 1
User u2 = em.find(User.class, 1L);  // L1 cache hit â€” no SQL

em.clear();  // clears L1 cache

User u3 = em.find(User.class, 1L);  // SQL again â€” L1 was empty
```

**Second-level cache** (L2) is a `SessionFactory`-scoped cache shared across all sessions. You must explicitly enable it and configure a cache provider (Hazelcast, Redis, Ehcache, or the built-in `hibernate-jcache`).

```java
// application.yml
spring:
  jpa:
    properties:
      hibernate:
        cache:
          use_second_level_cache: true
          region:
            factory_class: org.hibernate.cache.jcache.JCacheRegionFactory
        javax:
          cache:
            provider: org.ehcache.jsr107.EhcacheCachingProvider

// Entity must be marked cacheable:
@Entity
@Cacheable
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Country {
    @Id private Long id;
    private String code;
    private String name;
}
```

Cache concurrency strategies:
- `READ_ONLY`: for reference data that never changes. Fastest, no locking.
- `READ_WRITE`: for mutable data. Uses soft locks. Good for most cases.
- `NONSTRICT_READ_WRITE`: for data that rarely conflicts. Weaker isolation.
- `TRANSACTIONAL`: for JTA environments. Requires a transactional cache provider.

L2 cache is not a replacement for a well-tuned database. Use it sparingly â€” cache only reference data (countries, status codes, configuration) and data that is expensive to compute but rarely changes.

---

### Q8: How does Spring Data JPA derive queries from method names?

**Answer:**

Spring Data JPA parses repository method names and generates queries automatically using a predefined keyword grammar. The method name is broken into a subject (optional), a predicate, and a series of connecting keywords.

```java
public interface UserRepository extends JpaRepository<User, Long> {

    // findBy + field + keyword
    Optional<User> findByEmail(String email);
    List<User> findByAgeGreaterThanEqual(int age);
    List<User> findByNameStartingWith(String prefix);

    // Multiple fields with And/Or
    List<User> findByLastNameAndAgeBetween(String lastName, int from, int to);
    List<User> findByFirstNameOrLastName(String first, String last);

    // Sorting
    List<User> findByActiveTrueOrderByCreatedAtDesc();

    // Limiting
    Optional<User> findFirstByOrderByScoreDesc();
    List<User> findTop5ByActiveTrueOrderByScoreDesc();

    // Distinct
    List<String> findDistinctLastNamesByActiveTrue();

    // Joining across associations
    List<User> findByDepartmentName(String deptName);  // traverses User.department.name

    // Negation
    List<User> findByNameNot(String name);

    // Exists
    boolean existsByEmail(String email);

    // Count
    long countByStatus(UserStatus status);

    // Delete
    void deleteByEmail(String email);  // generates delete query
}
```

Supported keywords: `And`, `Or`, `After`, `Before`, `Between`, `Containing`, `EndingWith`, `Exists`, `False`, `GreaterThan`, `GreaterThanEqual`, `In`, `Is`, `IsEmpty`, `IsNotNull`, `IsNull`, `LessThan`, `LessThanEqual`, `Like`, `Near`, `Not`, `NotContaining`, `NotIn`, `NotLike`, `Regex`, `StartingWith`, `True`, `Within`, `OrderBy`, `Distinct`, `First`, `Top`.

For complex queries, method names become unwieldy. Use `@Query` or `Specification` instead:

```java
@Query("SELECT u FROM User u WHERE u.email LIKE %:domain AND u.active = true " +
       "ORDER BY u.createdAt DESC")
List<User> findActiveUsersByEmailDomain(@Param("domain") String domain);
```
