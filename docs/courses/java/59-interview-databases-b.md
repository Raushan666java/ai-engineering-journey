![JPA Auditing - Flowchart](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/java/59-interview-databases-b.png)

### Q9: What is the difference between `@ManyToMany` and `@OneToMany` with a join entity?

**Answer:**

`@ManyToMany` creates an implicit join table with only two columns (the foreign keys). You cannot add attributes to the relationship (like `createdAt`, `role`, `quantity`). A join entity (also called an association entity) creates an explicit third entity mapped to the join table, allowing you to add columns to the relationship itself.

```java
// ── @ManyToMany (simple, no extra columns) ──
@Entity
public class Student {
    @Id private Long id;

    @ManyToMany
    @JoinTable(name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id"))
    private Set<Course> courses;
}

@Entity
public class Course {
    @Id private Long id;

    @ManyToMany(mappedBy = "courses")
    private Set<Student> students;
}

// ── Join entity (extra columns possible) ──
@Entity
public class Enrollment {
    @Id private Long id;

    @ManyToOne
    private Student student;

    @ManyToOne
    private Course course;

    private LocalDateTime enrolledAt;
    private String grade;
}

@Entity
public class Student {
    @OneToMany(mappedBy = "student")
    private List<Enrollment> enrollments;
}
```

Rules:
- Use `@ManyToMany` only when the relationship truly has no attributes — tags, categories, simple many-to-many labels
- Use a join entity whenever the relationship carries metadata (timestamps, roles, quantities, status)
- A join entity also makes it easier to query the relationship itself: `SELECT e FROM Enrollment e WHERE e.grade = 'A'`

---

### Q10: How do you map inheritance hierarchies in JPA?

**Answer:**

JPA provides three inheritance strategies, each mapped via `@Inheritance`:

**1. SINGLE_TABLE** (default) — one table for the entire hierarchy, with a discriminator column:
```java
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "vehicle_type", discriminatorType = DiscriminatorType.STRING)
public abstract class Vehicle {
    @Id @GeneratedValue private Long id;
    private String manufacturer;
}

@Entity
@DiscriminatorValue("CAR")
public class Car extends Vehicle {
    private int doors;
}

@Entity
@DiscriminatorValue("TRUCK")
public class Truck extends Vehicle {
    private double payloadCapacity;
}

// Result: single "vehicle" table with columns: id, manufacturer, doors, payload_capacity, vehicle_type
```

**2. JOINED** — one table per class, with foreign keys to the parent:
```java
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Payment {
    @Id @GeneratedValue private Long id;
    private BigDecimal amount;
}

@Entity
public class CreditCardPayment extends Payment {
    private String cardNumber;
    private String cardHolder;
}

// Result: payment(id, amount), credit_card_payment(id, card_number, card_holder)
```

**3. TABLE_PER_CLASS** — one complete table per concrete class:
```java
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Animal {
    @Id @GeneratedValue private Long id;
    private String name;
}

@Entity
public class Dog extends Animal {
    private String breed;
}

// Result: dog(id, name, breed), cat(id, name, ...)
```

| Strategy | Query efficiency | Schema normalization | Constraint support |
|----------|-----------------|---------------------|--------------------|
| SINGLE_TABLE | Best (no joins) | Worst (nullable columns) | Simple |
| JOINED | Polymorphic queries need joins | Best (normalized) | Full FK support |
| TABLE_PER_CLASS | Worst (UNION queries) | Moderate | No polymorphic FK |

Use SINGLE_TABLE for simple hierarchies with few subclasses. Use JOINED when subclasses have many distinct columns. Avoid TABLE_PER_CLASS unless you have specific reasons — most databases struggle with polymorphic UNION queries at scale.

---

### Q11: What is a projection in Spring Data JPA, and why use DTO projections over entities?

**Answer:**

A projection is a subset of entity fields fetched instead of the full entity. DTO projections fetch only the columns you need, avoiding the overhead of loading large columns (BLOBs, TEXT) or eagerly-fetched associations.

```java
// ── Interface-based projection ──
public interface UserSummary {
    String getName();
    String getEmail();
}

@Query("SELECT u.name AS name, u.email AS email FROM User u WHERE u.active = true")
List<UserSummary> findActiveUserSummaries();

// ── Class-based DTO projection ──
public record UserDto(String name, String email, int orderCount) {}

@Query("SELECT new com.example.UserDto(u.name, u.email, SIZE(u.orders)) " +
       "FROM User u WHERE u.active = true")
List<UserDto> findActiveUserDtos();
```

Why use projections over entities:
1. **Performance**: Select only needed columns — avoids fetching large TEXT/BLOB columns
2. **Read-only**: No dirty checking overhead — Hibernate tracks changes only on managed entities
3. **Join efficiency**: DTOs can aggregate data from multiple entities without loading them
4. **Safety**: No lazy-loading exceptions outside transactions — DTOs are plain objects
5. **API boundary**: Expose only intended fields to REST clients — never accidentally serialize lazy proxies

EntityGraph can help with partial entity loading, but DTO projections give you the most control and the least overhead.

---

### Q12: How do you implement database migrations with Flyway in Spring Boot?

**Answer:**

Flyway manages schema changes as versioned SQL scripts. Spring Boot auto-configures Flyway when it finds `flyway-core` on the classpath.

Step 1 — Add dependency:
```xml
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-core</artifactId>
</dependency>
```

Step 2 — Create migration scripts in `src/main/resources/db/migration/`:
```sql
-- V1__create_users_table.sql
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- V2__add_active_column.sql
ALTER TABLE users ADD COLUMN active BOOLEAN DEFAULT TRUE;

-- V3__create_orders_table.sql
CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id),
    total DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- V3_1__add_index_on_orders_user_id.sql
CREATE INDEX idx_orders_user_id ON orders(user_id);
```

Step 3 — Configure (minimal — Spring Boot auto-configures):
```yaml
spring:
  flyway:
    enabled: true
    locations: classpath:db/migration
    baseline-on-migrate: true  # for existing databases
```

Naming convention: `V{version}__{description}.sql`
- Underscore separates version from description
- Double underscore before the description
- Versions can be integers (V1) or dotted (V1_2_3)
- Repeatable migrations: `R__{description}.sql` (re-run if checksum changes)

Flyway tracks applied migrations in a `flyway_schema_history` table. Never modify an already-applied migration — create a new one instead.

---

### Q13: How do you handle concurrent updates to the same row without data loss?

**Answer:**

Use optimistic locking with `@Version`. When two transactions read the same row and both try to update it, the second one to commit gets an `OptimisticLockException` because the version has changed.

```java
@Entity
public class InventoryItem {
    @Id private Long id;
    private int quantity;

    @Version
    private long version;
}

@Service
public class InventoryService {
    @Transactional
    public void deductStock(Long itemId, int quantity) {
        InventoryItem item = repo.findById(itemId).orElseThrow();
        if (item.getQuantity() < quantity) {
            throw new InsufficientStockException();
        }
        item.setQuantity(item.getQuantity() - quantity);
        // Hibernate increments version on flush/commit
        // If another transaction modified the row, version mismatch → OptimisticLockException
    }
}
```

For high-contention scenarios, use pessimistic locking:

```java
@Lock(LockModeType.PESSIMISTIC_WRITE)
@Query("SELECT i FROM InventoryItem i WHERE i.id = :id")
Optional<InventoryItem> findByIdForUpdate(@Param("id") Long id);

@Transactional
public void deductStockPessimistic(Long itemId, int quantity) {
    InventoryItem item = repo.findByIdForUpdate(itemId).orElseThrow();
    // Database row is locked — other transactions wait
    item.setQuantity(item.getQuantity() - quantity);
}
```

For counters and atomic updates, use a single UPDATE statement to avoid the read-then-write race entirely:

```java
@Modifying
@Query("UPDATE InventoryItem i SET i.quantity = i.quantity - :qty WHERE i.id = :id AND i.quantity >= :qty")
int deductStockAtomic(@Param("id") Long id, @Param("qty") int qty);

// Returns 0 if row didn't exist or quantity was insufficient — no race condition
```

The single-UPDATE approach is the most performant for high-contention counters because it avoids the round-trip for reading.

---

### Q14: How do you test database code with TestContainers?

**Answer:**

TestContainers spins up real database instances in Docker containers for integration tests. It is the industry standard for testing JPA repositories, native queries, and Flyway migrations against the actual database instead of H2 or HSQLDB.

```java
@SpringBootTest
@Testcontainers
class UserRepositoryTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry reg) {
        reg.add("spring.datasource.url", postgres::getJdbcUrl);
        reg.add("spring.datasource.username", postgres::getUsername);
        reg.add("spring.datasource.password", postgres::getPassword);
    }

    @Autowired
    private UserRepository userRepo;

    @Test
    void shouldSaveAndFindUser() {
        User u = new User("alice@example.com", "Alice");
        userRepo.save(u);

        Optional<User> found = userRepo.findByEmail("alice@example.com");
        assertThat(found).isPresent();
        assertThat(found.get().getName()).isEqualTo("Alice");
    }

    @Test
    void shouldEnforceUniqueEmail() {
        userRepo.save(new User("same@example.com", "First"));
        assertThrows(DataIntegrityViolationException.class, () -> {
            userRepo.save(new User("same@example.com", "Second"));
            userRepo.flush();
        });
    }
}
```

Key benefits over H2:
- Same database dialect, same SQL features, same locking behavior
- Triggers, stored procedures, and database-specific types work correctly
- Flyway migrations are validated against the real schema
- Catches dialect-specific bugs before production

Add `@Testcontainers` + static `@Container` for a shared container across tests (fastest), or instance `@Container` for per-test isolation.

---

### Q15: What is the difference between `JOIN`, `LEFT JOIN`, and `JOIN FETCH` in JPA?

**Answer:**

- `JOIN` (inner join): Returns only entities that have matching associated entities. Excludes orphans.
- `LEFT JOIN`: Returns all entities from the left side, with nulls for missing associations.
- `JOIN FETCH`: A JPA-specific directive that tells Hibernate to **eagerly load** the association in the same query. Unlike plain `JOIN`, it populates the entity's persistence state so that lazy loading is not triggered later.

```java
// INNER JOIN — only posts with at least one comment
// Result: List<Object[]> — [Post, Comment] pairs
@Query("SELECT p, c FROM Post p JOIN p.comments c")
List<Object[]> findPostsWithComments();

// LEFT JOIN — all posts, comments may be null
@Query("SELECT p, c FROM Post p LEFT JOIN p.comments c")
List<Object[]> findAllPostsAndComments();

// JOIN FETCH — eagerly loads comments, returns Post entities with comments populated
@Query("SELECT p FROM Post p LEFT JOIN FETCH p.comments")
List<Post> findAllPostsWithComments();
```

The critical difference: plain `JOIN` adds a WHERE/HAVING filter — it doesn't change how the entity is loaded. `JOIN FETCH` actually populates the entity's collection field, preventing N+1 queries for that association.

```java
// ❌ Plain LEFT JOIN — comments are still lazy
@Query("SELECT p FROM Post p LEFT JOIN p.comments c WHERE c.approved = true")
List<Post> findApprovedCommentPosts(); // p.getComments() will still trigger lazy load!

// ✅ JOIN FETCH — comments are loaded
@Query("SELECT p FROM Post p LEFT JOIN FETCH p.comments")
List<Post> findAllPostsWithComments(); // p.getComments() is already populated
```

**Caveat:** Multiple JOIN FETCHs on multiple collections create a Cartesian product. Fetch one collection per query, or use `@BatchSize`.
