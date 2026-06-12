### Q1: JDBC vs JPA vs Hibernate — when to use what?

**Answer:** JDBC is the lowest-level database API (raw SQL, manual mapping). JPA is the specification (ORM standard). Hibernate is the most popular JPA implementation. Use JDBC for simple operations or when you need maximum SQL control. Use JPA/Hibernate for complex domain models with relationships. Spring Data JPA builds on Hibernate and eliminates boilerplate.

```java
// === 1. JDBC — bare metal ===
/*
Pros: Full SQL control, best performance for simple queries
Cons: Boilerplate (Connection, Statement, ResultSet), SQL injection risk,
      manual mapping, no caching
Use: Simple CRUD, stored procedures, bulk operations
*/

import java.sql.*;

class JdbcExample {
    public Order findById(Long id) {
        String sql = "SELECT * FROM orders WHERE id = ?";

        try (Connection conn = DriverManager.getConnection(
                "jdbc:postgresql://localhost:5432/mydb", "user", "pass");
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setLong(1, id);

            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    Order order = new Order();
                    order.setId(rs.getLong("id"));
                    order.setCustomerName(rs.getString("customer_name"));
                    order.setTotal(rs.getBigDecimal("total"));
                    order.setStatus(rs.getString("status"));
                    return order;
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Database error", e);
        }
        return null;
    }

    public void insert(Order order) {
        String sql = "INSERT INTO orders (customer_name, total, status) " +
                     "VALUES (?, ?, ?)";
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql,
                     Statement.RETURN_GENERATED_KEYS)) {

            stmt.setString(1, order.getCustomerName());
            stmt.setBigDecimal(2, order.getTotal());
            stmt.setString(3, order.getStatus());
            stmt.executeUpdate();

            try (ResultSet keys = stmt.getGeneratedKeys()) {
                if (keys.next()) {
                    order.setId(keys.getLong(1));
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Insert failed", e);
        }
    }

    // Batch insert with JDBC
    public void insertBatch(List<Order> orders) {
        String sql = "INSERT INTO orders (customer_name, total, status) " +
                     "VALUES (?, ?, ?)";
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            for (Order order : orders) {
                stmt.setString(1, order.getCustomerName());
                stmt.setBigDecimal(2, order.getTotal());
                stmt.setString(3, order.getStatus());
                stmt.addBatch();
            }
            stmt.executeBatch();
        } catch (SQLException e) {
            throw new RuntimeException("Batch insert failed", e);
        }
    }

    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(
            "jdbc:postgresql://localhost:5432/mydb", "user", "pass");
    }
}

// === 2. JPA with Hibernate — ORM approach ===
/*
Pros: Auto-mapping, L1 cache, lazy loading, relationship management
Cons: N+1 queries, complex configuration, magic behavior
Use: Domain-driven designs, complex relationships, standard CRUD
*/

@Entity
@Table(name = "orders")
class Order {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_name", nullable = false)
    private String customerName;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal total;

    @Column(nullable = false, length = 20)
    private String status;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL,
               fetch = FetchType.LAZY)
    private List<OrderItem> items;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @Version
    private Integer version;
}

// === 3. Spring Data JPA — repository abstraction ===
/*
No implementation needed — Spring generates it at runtime.
*/

interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByCustomerNameContainingIgnoreCase(String name);
    List<Order> findByStatusAndTotalGreaterThan(
        String status, BigDecimal minTotal);
    Page<Order> findByCreatedAtBetween(
        LocalDate from, LocalDate to, Pageable pageable);

    @Query("SELECT o FROM Order o JOIN FETCH o.items WHERE o.id = :id")
    Optional<Order> findByIdWithItems(@Param("id") Long id);

    @Query(value = "SELECT * FROM orders WHERE total > :min " +
           "ORDER BY total DESC LIMIT :limit",
           nativeQuery = true)
    List<Order> findTopExpensive(
        @Param("min") BigDecimal min, @Param("limit") int limit);

    @Modifying
    @Query("UPDATE Order o SET o.status = :status WHERE o.id = :id")
    int updateStatus(@Param("id") Long id, @Param("status") String status);
}

@Service
class OrderService {
    private final OrderRepository orderRepository;

    @Transactional
    public Order createOrder(CreateOrderRequest request) {
        Order order = new Order();
        order.setCustomerName(request.customerName());
        order.setTotal(request.total());
        order.setStatus("PENDING");
        return orderRepository.save(order);
    }

    @Transactional(readOnly = true)
    public Order findById(Long id) {
        return orderRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Order not found"));
    }

    @Transactional
    public void cancelOrder(Long id) {
        int updated = orderRepository.updateStatus(id, "CANCELLED");
        if (updated == 0) {
            throw new RuntimeException("Order not found");
        }
    }
}

// === 4. JdbcTemplate — middle ground ===
/*
Spring JdbcTemplate removes JDBC boilerplate without full ORM.
Good for: reports, complex queries, bulk operations.
*/

import org.springframework.jdbc.core.*;

@Repository
class OrderJdbcTemplateDao {
    private final JdbcTemplate jdbcTemplate;
    private final RowMapper<Order> rowMapper = (rs, rowNum) -> {
        Order o = new Order();
        o.setId(rs.getLong("id"));
        o.setCustomerName(rs.getString("customer_name"));
        o.setTotal(rs.getBigDecimal("total"));
        o.setStatus(rs.getString("status"));
        return o;
    };

    public Order findById(Long id) {
        return jdbcTemplate.queryForObject(
            "SELECT * FROM orders WHERE id = ?", rowMapper, id);
    }

    public List<Order> findByStatus(String status) {
        return jdbcTemplate.query(
            "SELECT * FROM orders WHERE status = ?", rowMapper, status);
    }

    public int updateStatus(Long id, String status) {
        return jdbcTemplate.update(
            "UPDATE orders SET status = ? WHERE id = ?", status, id);
    }

    public int[] batchInsert(List<Order> orders) {
        return jdbcTemplate.batchUpdate(
            "INSERT INTO orders (customer_name, total, status) VALUES (?, ?, ?)",
            new BatchPreparedStatementSetter() {
                public void setValues(PreparedStatement ps, int i) {
                    Order o = orders.get(i);
                    ps.setString(1, o.getCustomerName());
                    ps.setBigDecimal(2, o.getTotal());
                    ps.setString(3, o.getStatus());
                }
                public int getBatchSize() { return orders.size(); }
            });
    }

    // Named parameters
    public List<Order> findFiltered(String status, BigDecimal minTotal) {
        MapSqlParameterSource params = new MapSqlParameterSource()
            .addValue("status", status)
            .addValue("minTotal", minTotal);

        return new NamedParameterJdbcTemplate(jdbcTemplate)
            .query("SELECT * FROM orders WHERE status = :status " +
                   "AND total >= :minTotal", params, rowMapper);
    }
}

// === 5. Comparison ===
/*
                JDBC       JdbcTemplate   Spring Data JPA
───────────────────────────────────────────────────────────
Boilerplate     High       Medium         Low
SQL control     Full       Full           Limited (with @Query)
Caching         None       None           L1 + optional L2
Lazy loading    Manual     Manual         Automatic
Relationships   Manual     Manual         Automatic
DDL generation  External   External       Auto (validate/update)
Performance     Best       Very good      Good (caching offset)
Learning curve  Low        Low            Medium
Batch ops       Native     Native         Via repository
Testing         Hard       Medium         Easy

// Rule of thumb:
// JDBC: when you need every bit of performance
// JdbcTemplate: batch ops, reports, complex queries
// JPA/Spring Data: 90% of applications
*/
```

JDBC gives you full SQL control with maximum boilerplate. Spring Data JPA eliminates boilerplate but adds abstraction overhead. Use JdbcTemplate as a middle ground for complex queries. For 90% of applications, Spring Data JPA is the right choice — combine with @Query for complex queries and native queries for performance-critical paths.


### Q2: How does Hibernate caching work (L1, L2, query cache)?

**Answer:** Hibernate has three caching layers. L1 (first-level) cache is mandatory — tied to the Session, caches entities within a single transaction. L2 (second-level) cache is optional — shared across Sessions, caches entities by ID. Query cache caches query results (IDs). L1 requires no configuration. L2 and query cache need explicit setup and are best for read-heavy, rarely-modified data.

```java
// === 1. First-level cache (L1) ===
/*
Scope: Per Hibernate Session (per PersistenceContext)
Default: Always enabled, not optional
Behavior: Caches entities by ID within a transaction
Eviction: Session.close(), Session.clear(), Session.evict(entity)
Lifetime: Same as transaction

Benefit: Prevents same entity from being loaded twice in one transaction
*/

@Service
class L1CacheExample {
    private final OrderRepository orderRepository;
    @PersistenceContext private EntityManager em;

    @Transactional
    public void demonstrateL1Cache() {
        // First load — hits database
        Order order1 = orderRepository.findById(1L);
        log.info("First load hit database");

        // Modify the entity
        order1.setStatus("PROCESSING");

        // Second load with same ID — L1 cache hit (NO database query)
        Order order2 = orderRepository.findById(1L);
        log.info("Second load from L1 cache");

        // Same Java object — identity guaranteed within Session
        assert order1 == order2 : "Same instance from L1 cache";

        // Clear L1 cache manually
        em.clear();
        log.info("L1 cache cleared");

        // Third load — hits database again
        Order order3 = orderRepository.findById(1L);
        log.info("Third load hit database after clear");
    }

    @Transactional
    public void batchProcessing() {
        // In long transactions, L1 cache grows — clear periodically
        for (int i = 0; i < 10000; i++) {
            Order order = new Order();
            order.setCustomerName("User" + i);
            order.setTotal(BigDecimal.valueOf(100));
            order.setStatus("PENDING");
            em.persist(order);

            // Flush and clear every 100 inserts to prevent OOM
            if (i % 100 == 0) {
                em.flush();
                em.clear();
            }
        }
    }

    // Evict single entity from L1
    @Transactional
    public void evictExample(Long id) {
        Order order = orderRepository.findById(id);
        em.detach(order);  // Remove from L1 cache
        // Now entity is detached — changes won't be persisted
    }
}

// === 2. Second-level cache (L2) ===
/*
Scope: Across Sessions (SessionFactory level)
Default: Disabled
Implementation: Ehcache, Redis, Hazelcast, Infinispan
Behavior: Caches entities by ID (not queries)
Eviction: Time-to-live, region-based eviction
Lifetime: Application lifetime (until TTL)

Configuration via annotations:
@Cacheable — Mark entity as cacheable
@Cache — Cache concurrency strategy
*/

// === 2a. L2 cache setup ===
/*
pom.xml:
<dependency>
    <groupId>org.hibernate.orm</groupId>
    <artifactId>hibernate-jcache</artifactId>
</dependency>
<dependency>
    <groupId>org.ehcache</groupId>
    <artifactId>ehcache</artifactId>
</dependency>

application.yml:
spring:
  jpa:
    properties:
      hibernate:
        cache:
          use_second_level_cache: true
          region.factory_class: jcache
          javax.cache.provider: org.ehcache.jsr107.EhcacheCachingProvider
        javax:
          cache:
            uri: classpath:ehcache.xml
*/

// === 2b. Entity L2 caching ===
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "products")
@Cacheable  // Enable L2 caching
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE,
       region = "products")
class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(length = 2000)
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    @Cache(usage = CacheConcurrencyStrategy.READ_ONLY)
    private Category category;
}

// READ_ONLY: For immutable data (configs, lookup tables)
// READ_WRITE: For mutable data with optimistic locking
// NONSTRICT_READ_WRITE: For rarely-updated data (more tolerant)
// TRANSACTIONAL: For JTA environments (strongest consistency)

@Entity
@Cacheable
@Cache(usage = CacheConcurrencyStrategy.READ_ONLY, region = "categories")
class Category {
    @Id
    private Long id;
    private String name;
}

// === 2c. Ehcache configuration (ehcache.xml) ===
/*
<config xmlns="http://www.ehcache.org/v3">
    <cache alias="products">
        <key-type>java.lang.Long</key-type>
        <value-type>com.example.entity.Product</value-type>
        <expiry>
            <ttl unit="seconds">3600</ttl>  <!-- 1 hour -->
        </expiry>
        <heap unit="entries">1000</heap>
    </cache>
    <cache alias="categories">
        <key-type>java.lang.Long</key-type>
        <value-type>com.example.entity.Category</value-type>
        <expiry>
            <ttl unit="seconds">86400</ttl>  <!-- 24 hours -->
        </expiry>
        <heap unit="entries">100</heap>
    </cache>
</config>
*/

// === 2d. Verify L2 cache hits ===
@Slf4j
@Service
class L2CacheService {
    private final ProductRepository productRepository;

    @Transactional(readOnly = true)
    public void demonstrateL2() {
        // First call — from DB, stored in L2
        Product p1 = productRepository.findById(1L).orElseThrow();
        log.info("First load — DB query");

        // Second call across Sessions — L2 cache hit
        Product p2 = productRepository.findById(1L).orElseThrow();
        log.info("Second load — L2 cache hit");

        // Same data, different instances (L2 returns new objects)
        assert p1 != p2 : "Different instances from L2 cache";
        assert p1.getId().equals(p2.getId()) : "Same data";
    }

    // L2 cache statistics (if hibernate.generate_statistics=true)
    @EventListener
    public void onMetrics(SessionFactoryMetricsEvent event) {
        Statistics stats = event.getStatistics();
        log.info("L2 hit: {}, miss: {}, put: {}",
            stats.getSecondLevelCacheHitCount(),
            stats.getSecondLevelCacheMissCount(),
            stats.getSecondLevelCachePutCount());
    }
}

// === 3. Query cache ===
/*
Caches: Query result IDs (not entity data)
Requires: L2 cache must also be enabled
Region: Per query + parameters
Invalidation: When any entity in the result set is modified

application.yml:
spring.jpa.properties.hibernate.cache.use_query_cache: true
*/

@Repository
interface ProductRepository extends JpaRepository<Product, Long> {
    @QueryHints(@QueryHint(name = "org.hibernate.cacheable",
                           value = "true"))
    List<Product> findByCategoryName(String categoryName);
}

// Or programmatically:
@Repository
class ProductDao {
    @PersistenceContext private EntityManager em;

    public List<Product> findByPriceRange(BigDecimal min, BigDecimal max) {
        return em.createQuery(
                "SELECT p FROM Product p WHERE p.price BETWEEN :min AND :max",
                Product.class)
            .setParameter("min", min)
            .setParameter("max", max)
            .setHint("org.hibernate.cacheable", "true")
            .setHint("org.hibernate.cacheRegion", "productPriceSearch")
            .getResultList();
    }
}

// === 4. Cache concurrency strategies ===
/*
READ_ONLY:
  - Use: Static data (countries, currencies, status codes)
  - Safe: Multiple readers, no writers
  - Best performance (no locking)

READ_WRITE:
  - Use: Frequently read, occasionally updated entities
  - Safe: Soft locking with version (optimistic)
  - Good for: Products, users, orders (with @Version)

NONSTRICT_READ_WRITE:
  - Use: Rarely updated, inconsistent reads are acceptable
  - Safe: No locking — might see stale data
  - Good for: Reference data updated overnight

TRANSACTIONAL:
  - Use: JTA environments, needs strict consistency
  - Safe: Full transaction isolation
  - Requires: JTA transaction manager
*/

// === 5. Cache region strategies per data type ===
/*
Data Type         Strategy          TTL        Region
─────────────────────────────────────────────────────
Country codes     READ_ONLY         24h        static-data
Currencies        READ_ONLY         24h        static-data
Product catalog   READ_WRITE        1h         products
User profiles     READ_WRITE        30m        users
Order status      NONSTRICT_RW      5m         orders
Search results    Query cache       5m         search
Session tokens    NOT CACHED        -          (no cache for auth)
Audit logs        NOT CACHED        -          (write-only)
*/

// === 6. When NOT to cache ===
/*
1. Frequently updated data (counters, stock levels)
2. Large data sets (blobs, full-text search results)
3. Real-time data (pricing, availability)
4. Session-specific data (user state)
5. Write-heavy tables (audit logs, events)
6. Data requiring immediate consistency

// Avoid caching for:
@Entity
@Table(name = "inventory")
@Cacheable(false)  // Explicitly NOT cached (stock changes rapidly)
class InventoryItem {
    @Id private Long id;
    private int quantityOnHand;
    private LocalDateTime lastUpdated;
}
*/

// === 7. Monitoring cache ===
/*
application.yml (enable statistics):
spring.jpa.properties.hibernate.generate_statistics: true
logging.level.org.hibernate.stat: DEBUG

Sample output:
SessionMetrics{89400 nanoseconds spent acquiring 1 JDBC connections;
89400 nanoseconds spent releasing 0 JDBC connections;
0 prepare statements; 0 sort rows;
0 second level cache hits; 0 second level cache misses;
0 entities loaded; 0 entities updated; 0 entities deleted;
0 queries executed; 0 query cache hits; 0 query cache misses;
0 flush executed}

Required: L1 cache → Optional: L2 + Query cache
L1: Always on, per transaction, no config needed
L2: Add dependency + annotations + configuration
Query cache: Add hint to queries + L2 must be on
*/
```

L1 cache is always active — prevents duplicate loads within a transaction. L2 cache requires explicit setup (READ_WRITE for mutable data, READ_ONLY for lookups). Query cache caches result IDs (requires L2). Cache read-heavy, rarely-modified entities. Never cache write-heavy or real-time data. Monitor hit/miss ratios via Hibernate statistics.


### Q3: Explain transaction propagation and isolation levels.

**Answer:** Transaction propagation defines how transactions relate to each other when multiple transactional methods call each other. Isolation levels control how much one transaction can see uncommitted changes from another. Propagation is about transaction boundaries. Isolation is about data visibility. Both are configured via @Transactional.

```java
// === 1. Propagation levels ===
/*
@Transactional(propagation = Propagation.REQUIRED)    (default)
@Transactional(propagation = Propagation.REQUIRES_NEW)
@Transactional(propagation = Propagation.MANDATORY)
@Transactional(propagation = Propagation.NESTED)
@Transactional(propagation = Propagation.NEVER)
@Transactional(propagation = Propagation.NOT_SUPPORTED)
@Transactional(propagation = Propagation.SUPPORTS)
*/

// === REQUIRED (default) ===
/*
If no transaction exists → create new one
If transaction exists → join existing one
Most common choice for service methods
*/
@Service
@Transactional  // Default: REQUIRED
class RequiredPropagationService {
    private final OrderRepository orderRepository;
    private final AuditService auditService;

    public Order createOrder(CreateOrderRequest request) {
        Order order = orderRepository.save(new Order(request));
        auditService.log("order_created", order.getId());
        // Audit runs in SAME transaction — if audit fails, order also rolls back
        return order;
    }
}

// === REQUIRES_NEW ===
/*
SUSPEND the existing transaction
Create a new, independent transaction
Commit/rollback the new transaction independently
Resume the original transaction

Use when: Logging, auditing, notification — operations that must
          commit even if the calling transaction rolls back
*/
@Service
class AuditService {

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void log(String action, Long entityId) {
        AuditRecord record = new AuditRecord();
        record.setAction(action);
        record.setEntityId(entityId);
        record.setTimestamp(Instant.now());
        auditRepository.save(record);
        // This persists even if the caller's transaction rolls back
    }
}

// === MANDATORY ===
/*
Requires an existing transaction — throws if none present
Use when: Method must be called within a transaction
          (never standalone)
*/
@Service
class InventoryService {

    @Transactional(propagation = Propagation.MANDATORY)
    public void deductStock(Long productId, int quantity) {
        Inventory inv = inventoryRepository.findById(productId)
            .orElseThrow();
        inv.setQuantity(inv.getQuantity() - quantity);
        // Must be called within a transaction
    }
}

// === NESTED ===
/*
Creates a savepoint within the current transaction
Inner transaction can roll back independently to savepoint
If outer commits → inner commits too
If outer rolls back → inner rolls back too
Use when: Batch processing — skip failed items without failing entire batch
*/
@Service
class BatchProcessingService {

    @Transactional
    public void processOrders(List<CreateOrderRequest> requests) {
        for (CreateOrderRequest request : requests) {
            try {
                processSingleOrder(request);
            } catch (Exception e) {
                log.warn("Failed to process order: {}", e.getMessage());
                // NESTED transaction rolled back to savepoint
                // Outer transaction continues
            }
        }
    }

    @Transactional(propagation = Propagation.NESTED)
    public void processSingleOrder(CreateOrderRequest request) {
        // Business logic that might fail
        Order order = new Order(request);
        orderRepository.save(order);
        inventoryService.deductStock(request.productId(), request.quantity());
    }
}

// === NEVER ===
/*
No transaction allowed — throws exception if one exists
Use when: Operations that should never run within a transaction
*/
@Service
class ConfigService {

    @Transactional(propagation = Propagation.NEVER)
    public String getConfigValue(String key) {
        return configRepository.findByKey(key).getValue();
    }
}

// === NOT_SUPPORTED ===
/*
Suspend current transaction, run without one
Use when: Calling non-transactional resources (email API, file system)
*/
@Service
class EmailService {

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public void sendEmail(String to, String subject, String body) {
        // No transaction — email server doesn't support transactions
        mailSender.send(new SimpleMailMessage(to, subject, body));
    }
}

// === SUPPORTS ===
/*
Run with a transaction if one exists, without one if not
Use when: Query methods — benefit from transaction but don't require it
*/
@Service
class LookupService {

    @Transactional(propagation = Propagation.SUPPORTS,
                   readOnly = true)
    public Product findProduct(Long id) {
        return productRepository.findById(id).orElseThrow();
    }
}

// === 2. Propagation comparison table ===
/*
Propagation     Creates New?   Joins Existing?   Behavior
──────────────────────────────────────────────────────────
REQUIRED        Yes if none    Yes               Default
REQUIRES_NEW    Always          No                Independent
MANDATORY       No              Yes               Requires existing
NESTED          Savepoint      Yes               Partial rollback
NEVER           No              No                No transaction allowed
NOT_SUPPORTED   No              No                Suspend if exists
SUPPORTS        No              Yes               Optional
*/

// === 3. Isolation levels ===
/*
@Transactional(isolation = Isolation.DEFAULT)            (default)
@Transactional(isolation = Isolation.READ_UNCOMMITTED)
@Transactional(isolation = Isolation.READ_COMMITTED)
@Transactional(isolation = Isolation.REPEATABLE_READ)
@Transactional(isolation = Isolation.SERIALIZABLE)

Problems isolation levels prevent:
Dirty Read:      Read uncommitted changes from another transaction
Non-repeatable:  Same query returns different results in same transaction
Phantom Read:    New rows appear/disappear between queries in same transaction
*/

// === READ_UNCOMMITTED ===
/*
Can read: Uncommitted changes (dirty reads possible)
Prevents: Nothing
Use: Approximate counts, monitoring dashboards
*/
@Transactional(isolation = Isolation.READ_UNCOMMITTED)
public long getApproximateOrderCount() {
    return orderRepository.count();
}

// === READ_COMMITTED (default in PostgreSQL, SQL Server, Oracle) ===
/*
Can read: Only committed data
Prevents: Dirty reads
Allows: Non-repeatable reads, phantom reads
Use: Default — good for most operations
*/
@Transactional(isolation = Isolation.READ_COMMITTED)
public Order getOrder(Long id) {
    // First read — gets current committed state
    Order order = orderRepository.findById(id).orElseThrow();

    // Another transaction could update and commit here

    // Second read — might see different value (non-repeatable read)
    Order orderAgain = orderRepository.findById(id).orElseThrow();
    return order;
}

// === REPEATABLE_READ ===
/*
Can read: Only committed data, consistent reads
Prevents: Dirty reads, non-repeatable reads
Allows: Phantom reads (MySQL default — prevents phantoms too)
Use: Financial calculations, reporting
*/
@Transactional(isolation = Isolation.REPEATABLE_READ)
public BigDecimal calculateDailyRevenue(LocalDate date) {
    List<Payment> payments = paymentRepository.findByDate(date);
    // All reads within transaction see the same snapshot
    // Changes from other transactions are invisible
    return payments.stream()
        .map(Payment::getAmount)
        .reduce(BigDecimal.ZERO, BigDecimal::add);
}

// === SERIALIZABLE ===
/*
Can read: Most restrictive
Prevents: Dirty reads, non-repeatable reads, phantom reads
Performance: Worst — serial execution of conflicting transactions
Use: Race conditions on critical operations
*/
@Transactional(isolation = Isolation.SERIALIZABLE)
public void allocateSerialNumbers(int count) {
    List<SerialNumber> available = serialNumberRepository
        .findAvailable(count);
    // No other transaction can modify serial numbers simultaneously
    available.forEach(sn -> sn.setAllocated(true));
}

// === 4. Isolation comparison ===
/*
                    Dirty Read  Non-Repeatable  Phantom Read  Performance
                    ──────────────────────────────────────────────────────
READ_UNCOMMITTED    Possible    Possible        Possible      Best
READ_COMMITTED      Prevented   Possible        Possible      Good
REPEATABLE_READ     Prevented   Prevented       Possible*     Fair
SERIALIZABLE        Prevented   Prevented       Prevented     Worst

* MySQL with InnoDB also prevents phantom reads at REPEATABLE_READ
*/

// === 5. Propagation + Isolation together ===
@Service
@Transactional  // Default: REQUIRED, DEFAULT isolation
class OrderTransactionService {

    @Transactional(propagation = Propagation.REQUIRED,
                   isolation = Isolation.REPEATABLE_READ)
    public Order createOrder(Long customerId, List<OrderItem> items) {
        // REQUIRED: Join or create transaction
        // REPEATABLE_READ: Consistent reads within transaction

        Order order = new Order();
        order.setCustomerId(customerId);
        order.setStatus("PENDING");

        // Check inventory (REPEATABLE_READ ensures consistent view)
        for (OrderItem item : items) {
            Inventory inv = inventoryRepository
                .findById(item.getProductId()).orElseThrow();
            if (inv.getQuantity() < item.getQuantity()) {
                throw new InsufficientStockException(
                    item.getProductId());
            }
        }

        Order saved = orderRepository.save(order);

        // Deduct inventory in REQUIRES_NEW transaction
        deductInventory(items);

        return saved;
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW,
                   isolation = Isolation.READ_COMMITTED)
    public void deductInventory(List<OrderItem> items) {
        // REQUIRES_NEW: Independent transaction — commits even if
        // createOrder rolls back (deduction is separate)
        for (OrderItem item : items) {
            inventoryRepository.deductQuantity(
                item.getProductId(), item.getQuantity());
        }
    }
}

// === 6. Transaction rollback rules ===
@Service
class TransactionRollbackService {

    // Rollback on RuntimeException by default
    @Transactional
    public void defaultRollback() {
        // Rollback: RuntimeException and subclasses
        // No rollback: Checked exceptions (Exception subclasses)
        throw new RuntimeException("Forces rollback");
    }

    // Custom rollback rules
    @Transactional(rollbackFor = {SQLException.class, DataIntegrityViolationException.class},
                   noRollbackFor = {BusinessException.class})
    public void customRollback() throws SQLException {
        // Rollback: SQLException, DataIntegrityViolationException
        // No rollback: BusinessException
        throw new BusinessException("No rollback for business errors");
    }

    // Read-only optimization
    @Transactional(readOnly = true)
    public List<Order> findRecentOrders() {
        // Hibernate skips dirty checks — better performance
        return orderRepository.findRecent();
    }

    // Timeout
    @Transactional(timeout = 30)  // Seconds
    public void longRunningOperation() {
        // Throws TransactionTimedOutException after 30 seconds
    }
}

// === 7. Testing transaction behavior ===
/*
@Test
void testPropagation() {
    // REQUIRES_NEW: audit log persists even when order fails
    assertThrows(RuntimeException.class, () -> {
        orderService.createFailingOrder();
    });

    // Audit record still exists
    assertTrue(auditRepository.count() > 0);
}

@Test
void testIsolation() {
    // Run concurrent transactions and check isolation behavior
    // (Integration test with database)
}
*/
```

Transaction propagation controls transaction boundaries (REQUIRED joins, REQUIRES_NEW creates independent). Isolation levels control data visibility (READ_COMMITTED for most, REPEATABLE_READ for calculations, SERIALIZABLE for critical sections). Default: REQUIRED propagation, READ_COMMITTED isolation (varies by database). Use REQUIRES_NEW for audit logging. Use readOnly = true for query optimization.


### Q4: Optimistic vs pessimistic locking — when to use each?

**Answer:** Optimistic locking assumes conflicts are rare — multiple transactions can read data, but only the first to commit wins. Uses a version column checked at update time. Pessimistic locking assumes conflicts are common — locks the database row when reading, preventing others from modifying it until the lock is released. Optimistic is more scalable; pessimistic is safer for high-contention scenarios.

```java
// === 1. Optimistic locking ===
/*
Mechanism: Version column (integer or timestamp)
Check: At COMMIT time — Hibernate compares version
Conflict: OptimisticLockException → retry
Performance: No lock overhead, best for read-heavy workloads
*/

// === 1a. Version-based optimistic locking ===
@Entity
@Table(name = "products")
class OptimisticProduct {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = false)
    private int quantityInStock;

    @Version  // Hibernate manages this automatically
    private Integer version;

    // Getter/setter...
}

// === 1b. Optimistic locking in action ===
@Service
class ProductLockingService {
    private final ProductRepository productRepository;

    @Transactional
    public void deductStock(Long productId, int quantity) {
        Product product = productRepository.findById(productId)
            .orElseThrow();

        // This check is optimistic — no lock held
        if (product.getQuantityInStock() < quantity) {
            throw new InsufficientStockException(productId);
        }

        product.setQuantityInStock(
            product.getQuantityInStock() - quantity);

        // At commit time, Hibernate runs:
        // UPDATE products SET quantity=?, version=? WHERE id=? AND version=?
        // If version changed → OptimisticLockException → rollback
    }

    // Retry on optimistic lock failure
    @Transactional
    public Order createOrderWithRetry(Long productId, int quantity) {
        int retries = 3;
        while (retries > 0) {
            try {
                return doCreateOrder(productId, quantity);
            } catch (OptimisticLockException e) {
                retries--;
                if (retries == 0) throw e;
                // Refresh and retry
                productRepository.flush();
                productRepository.clear();
            }
        }
        throw new ConcurrentModificationException("Retries exhausted");
    }

    @Transactional
    protected Order doCreateOrder(Long productId, int quantity) {
        Product product = productRepository.findById(productId)
            .orElseThrow();
        product.setQuantityInStock(
            product.getQuantityInStock() - quantity);
        return orderRepository.save(
            new Order(productId, quantity));
    }
}

// === 2. Pessimistic locking ===
/*
Mechanism: Database row/table lock
Types:
  PESSIMISTIC_READ:  Shared lock — others can read but not write
  PESSIMISTIC_WRITE: Exclusive lock — others can't read or write
Behavior: Locks at READ time (not commit time)
Performance: Reduced concurrency, deadlock risk
*/

// === 2a. Pessimistic lock modes ===
@Repository
interface ProductRepository extends JpaRepository<Product, Long> {

    // Shared lock — prevents writes but allows reads
    @Lock(LockModeType.PESSIMISTIC_READ)
    @Query("SELECT p FROM Product p WHERE p.id = :id")
    Optional<Product> findByIdWithSharedLock(@Param("id") Long id);

    // Exclusive lock — prevents all access
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT p FROM Product p WHERE p.id = :id")
    Optional<Product> findByIdWithExclusiveLock(@Param("id") Long id);

    // Exclusive lock with timeout (PostgreSQL):
    @QueryHints(@QueryHint(name = "jakarta.persistence.lock.timeout",
                           value = "5000"))  // 5 seconds
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT p FROM Product p WHERE p.id = :id")
    Optional<Product> findByIdWithTimeout(@Param("id") Long id);
}

// === 2b. Pessimistic locking in action ===
@Service
class PessimisticLockingService {
    private final ProductRepository productRepository;

    @Transactional
    public void deductStockPessimistic(Long productId, int quantity) {
        // Locks the row at SELECT time (not commit time)
        Product product = productRepository
            .findByIdWithExclusiveLock(productId)
            .orElseThrow();

        // No other transaction can read this row until we commit
        if (product.getQuantityInStock() < quantity) {
            throw new InsufficientStockException(productId);
        }

        product.setQuantityInStock(
            product.getQuantityInStock() - quantity);

        // At commit, lock is released
    }

    @Transactional
    public void transferStock(Long fromProductId, Long toProductId,
                              int quantity) {
        // Lock both products in a consistent order (prevents deadlock)
        Product from, to;

        if (fromProductId < toProductId) {
            from = productRepository.findByIdWithExclusiveLock(fromProductId)
                .orElseThrow();
            to = productRepository.findByIdWithExclusiveLock(toProductId)
                .orElseThrow();
        } else {
            to = productRepository.findByIdWithExclusiveLock(toProductId)
                .orElseThrow();
            from = productRepository.findByIdWithExclusiveLock(fromProductId)
                .orElseThrow();
        }

        if (from.getQuantityInStock() < quantity) {
            throw new InsufficientStockException(fromProductId);
        }

        from.setQuantityInStock(from.getQuantityInStock() - quantity);
        to.setQuantityInStock(to.getQuantityInStock() + quantity);
    }
}

// === 3. Pessimistic locking with EntityManager ===
@Service
class EntityManagerLockingService {
    @PersistenceContext private EntityManager em;

    @Transactional
    public void lockExample(Long productId, int quantity) {
        // Load entity (no lock yet)
        Product product = em.find(Product.class, productId);

        // Apply pessimistic lock after loading
        em.lock(product, LockModeType.PESSIMISTIC_WRITE);

        // Or load with lock in one step
        Product locked = em.find(Product.class, productId,
            LockModeType.PESSIMISTIC_WRITE);

        // Custom lock timeout
        Map<String, Object> properties = new HashMap<>();
        properties.put("jakarta.persistence.lock.timeout", 3000);
        Product withTimeout = em.find(Product.class, productId,
            LockModeType.PESSIMISTIC_WRITE, properties);
    }

    @Transactional
    public void refreshWithLock(Long id) {
        Product product = em.find(Product.class, id);
        // Re-read from database and lock
        em.refresh(product, LockModeType.PESSIMISTIC_WRITE);
    }
}

// === 4. Comparison ===
/*
                    Optimistic          Pessimistic
─────────────────────────────────────────────────────────
Lock location      Application layer   Database row
Lock timing        At commit           At read
Conflict detection At commit           Immediate (waits)
Best for           Read-heavy          Write-heavy
Scalability        High                Lower
Deadlock risk      No                  Yes
Retry needed       Yes                 No (waits)
Implementation     @Version field      @Lock annotation
Overhead           Version check       Database locks
*/

// === 5. When to use each ===
/*
Use optimistic locking when:
- Low contention (conflicts are rare)
- Read-heavy workloads (more reads than writes)
- Short transactions (quick commit)
- High scalability needed
Examples: Product catalog, User profiles, Blog posts

Use pessimistic locking when:
- High contention (frequent conflicts)
- Write-heavy workloads
- Long transactions (need consistency throughout)
- Consequence of conflict is severe (financial)
Examples: Inventory deduction, Ticket booking, Account balance

// In practice:
// 90% of entities → Optimistic locking
// 10% of entities (hot spots) → Pessimistic locking
// Always use @Version as baseline, add @Lock for critical sections
*/

// === 6. Handling lock timeout ===
@Transactional
public void handleLockTimeout() {
    try {
        Product product = productRepository
            .findByIdWithTimeout(1L);
        // Process...
    } catch (PessimisticLockException e) {
        // Lock could not be acquired
        throw new TryLaterException("System busy, please retry");
    } catch (LockTimeoutException e) {
        // Lock timed out (5s in our config)
        throw new TryLaterException("Request timed out, please retry");
    }
}

// === 7. Custom retry with Spring Retry ===
import org.springframework.retry.annotation.*;

@Service
class RetryableLockingService {
    private final OrderService orderService;

    @Retryable(
        value = {OptimisticLockException.class},
        maxAttempts = 3,
        backoff = @Backoff(delay = 100, multiplier = 2))
    public Order createOrderWithRetry(Long productId, int quantity) {
        return orderService.createOrder(productId, quantity);
    }

    @Recover
    public Order recover(OptimisticLockException e,
                         Long productId, int quantity) {
        log.error("Failed to create order after retries: product={}",
            productId, e);
        throw new ConcurrentModificationException(
            "Too many concurrent updates, please try again later");
    }
}

// === 8. Testing locking ===
/*
@Test
void testOptimisticLocking() {
    // Two threads read same product
    // First thread commits → version increments
    // Second thread commits → OptimisticLockException
    Product product = productRepository.save(
        new Product("Widget", BigDecimal.TEN, 100));

    ExecutorService executor = Executors.newFixedThreadPool(2);
    List<Future<?>> futures = new ArrayList<>();

    for (int i = 0; i < 2; i++) {
        futures.add(executor.submit(() -> {
            lockingService.deductStock(product.getId(), 50);
        }));
    }

    // One should succeed, one should throw OptimisticLockException
    long successCount = futures.stream()
        .filter(f -> { try { f.get(); return true; }
                       catch (Exception e) { return false; }})
        .count();

    assertThat(successCount).isEqualTo(1);
}

@Test
void testPessimisticLocking() throws Exception {
    // Thread 1 acquires pessimistic lock and holds transaction
    // Thread 2 tries to read same row — blocks until timeout
    CountDownLatch latch1 = new CountDownLatch(1);
    CountDownLatch latch2 = new CountDownLatch(1);

    CompletableFuture<Void> t1 = CompletableFuture.runAsync(() -> {
        transactionTemplate.execute(status -> {
            Product p = productRepository.findByIdWithExclusiveLock(1L);
            latch1.countDown();  // Signal thread 2 to try
            sleep(2000);  // Hold lock for 2 seconds
            return null;
        });
        latch2.countDown();
    });

    CompletableFuture<Void> t2 = CompletableFuture.runAsync(() -> {
        latch1.await();  // Wait for thread 1 to acquire lock
        assertThrows(LockTimeoutException.class, () -> {
            transactionTemplate.execute(status -> {
                Product p = productRepository.findByIdWithTimeout(1L);
                return null;
            });
        });
    });

    CompletableFuture.allOf(t1, t2).get();
}
*/
```

Optimistic locking (version column) is the default choice — scalable, simple, and sufficient for most scenarios. Pessimistic locking (exclusive locks) is for high-contention hot spots where retries are unacceptable. Always acquire locks in a consistent order to prevent deadlocks. Combine @Version with @Retryable for robust optimistic locking. Use pessimistic for inventory, financial balances, and ticket booking.


### Q5: What is the N+1 query problem and how do you fix it?

**Answer:** N+1 happens when you load a collection of entities (1 query) and then iterate to access lazy-loaded relationships (N queries). Example: loading 100 orders and accessing each order's customer triggers 1 + 100 queries. Fixes: JOIN FETCH, Entity Graphs, @BatchSize, or @EntityGraph. Always identify N+1 by logging SQL queries during development.

```java
// === 1. The N+1 problem ===
/*
N+1 queries occur when:
1. One query loads parent entities (1)
2. Lazy loading triggers one query per parent to load children (N)
*/

@Entity
@Table(name = "orders")
class Order {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String customerName;
    private BigDecimal total;
    private String status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY)
    private List<OrderItem> items;
}

// BAD — N+1 queries:
@Service
class NPlusOneExample {
    private final OrderRepository orderRepository;

    @Transactional(readOnly = true)
    public void badApproach() {
        // 1 query: SELECT * FROM orders WHERE status = 'PENDING'
        List<Order> orders = orderRepository
            .findByStatus("PENDING");

        for (Order order : orders) {
            // For each order, another query:
            // N queries: SELECT * FROM customer WHERE id = ?
            String customerName = order.getCustomer().getName();
            System.out.println(customerName);
        }
        // Total: 1 + N queries
    }
}

// === 2. Fix: JOIN FETCH ===
@Repository
interface OrderRepository extends JpaRepository<Order, Long> {

    // JOIN FETCH loads customer in the same query
    @Query("SELECT o FROM Order o JOIN FETCH o.customer WHERE o.status = :status")
    List<Order> findByStatusWithCustomer(@Param("status") String status);

    // Multiple JOIN FETCH for multiple relationships
    @Query("SELECT DISTINCT o FROM Order o " +
           "JOIN FETCH o.customer " +
           "LEFT JOIN FETCH o.items " +
           "WHERE o.status = :status")
    List<Order> findByStatusWithCustomerAndItems(
        @Param("status") String status);

    // JOIN FETCH with pagination (use subquery for count)
    @Query(value = "SELECT o FROM Order o JOIN FETCH o.customer",
           countQuery = "SELECT COUNT(o) FROM Order o")
    Page<Order> findAllWithCustomer(Pageable pageable);
}

// GOOD — single query:
@Service
class JoinFetchExample {
    private final OrderRepository orderRepository;

    @Transactional(readOnly = true)
    public void goodApproach() {
        // 1 query: SELECT o.*, c.* FROM orders o
        //          JOIN customer c ON o.customer_id = c.id
        //          WHERE o.status = 'PENDING'
        List<Order> orders = orderRepository
            .findByStatusWithCustomer("PENDING");

        // No additional queries — customer already loaded
        for (Order order : orders) {
            String customerName = order.getCustomer().getName();
            System.out.println(customerName);
        }
        // Total: 1 query
    }
}

// === 3. Fix: Entity Graphs ===
/*
EntityGraph defines which relationships to fetch eagerly
at query time — without changing the entity mapping.

Types:
- @NamedEntityGraph: Pre-defined, reusable
- @EntityGraph: Ad-hoc, inline
*/

@Entity
@Table(name = "orders")
@NamedEntityGraph(name = "Order.withCustomer",
    attributeNodes = @NamedAttributeNode("customer"))
@NamedEntityGraph(name = "Order.withAll",
    attributeNodes = {
        @NamedAttributeNode("customer"),
        @NamedAttributeNode(value = "items", subgraph = "items")
    },
    subgraphs = @NamedSubgraph(
        name = "items",
        attributeNodes = @NamedAttributeNode("product")))
class OrderWithGraph {
    // Same fields as Order above...
}

// Using EntityGraph in repository
@Repository
interface OrderRepository extends JpaRepository<Order, Long> {

    // Reference a named entity graph
    @EntityGraph("Order.withCustomer")
    List<Order> findByStatus(String status);

    @EntityGraph("Order.withAll")
    List<Order> findByStatusWithAll(String status);

    // Inline entity graph (no @NamedEntityGraph needed)
    @EntityGraph(attributePaths = {"customer", "items"})
    List<Order> findByCustomerName(String name);

    // Multiple repositories
    @EntityGraph(attributePaths = {"items", "customer"})
    @Query("SELECT o FROM Order o WHERE o.total > :minTotal")
    List<Order> findExpensiveWithDetails(
        @Param("minTotal") BigDecimal minTotal);
}

// === 4. Fix: @BatchSize ===
/*
Loads children in batches (size N) instead of one at a time.
Reduces N queries to N/batchSize queries.
No query change needed — Hibernate batches automatically.
*/

@Entity
@BatchSize(size = 25)
class Order {
    // Fields...

    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY)
    @BatchSize(size = 25)
    private List<OrderItem> items;
}

// With @BatchSize(25) loading 100 orders:
// Without: 100 queries for items (N+1)
// With:    4 queries (100/25)
// Less intrusive than JOIN FETCH, but still multiple queries

// === 5. Fix: FetchMode.SUBSELECT ===
/*
Fetches all related entities in one additional query
using a subquery.
*/
@Entity
class Order {
    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY)
    @Fetch(FetchMode.SUBSELECT)
    private List<OrderItem> items;
}

// With 100 orders:
// Query 1: SELECT * FROM orders
// Query 2: SELECT * FROM order_items WHERE order_id IN (SELECT id FROM orders)
// Total: 2 queries (no N+1)

// === 6. SQL logging to detect N+1 ===
/*
In development, enable SQL logging:
application.yml:
logging:
  level:
    org.hibernate.SQL: DEBUG
    org.hibernate.type.descriptor.sql.BasicBinder: TRACE

spring.jpa.properties:
  hibernate.format_sql: true
  hibernate.use_sql_comments: true

Sample N+1 output in logs:
Hibernate: select o1_0.id from orders o1_0         ← 1 query for orders
Hibernate: select c1_0.id,c1_0.name from customer c1_0 where c1_0.id=?
Hibernate: select c1_0.id,c1_0.name from customer c1_0 where c1_0.id=?
Hibernate: select c1_0.id,c1_0.name from customer c1_0 where c1_0.id=?
... (N queries for customers)
*/

// === 7. Automated detection ===
/*
Use Hibernate's query plan cache logging:
spring.jpa.properties.hibernate.generate_statistics: true

Listen for N+1 warnings:
@EventListener
public void handleNPlusOne(
        SessionFactorySessionEvent event) {
    Statistics stats = event.getSessionFactory()
        .getStatistics();
    long queryCount = stats.getQueryExecutionCount();

    // Alert if query count exceeds parent count by threshold
}
*/

// === 8. Performance test for N+1 detection ===
/*
@Test
void testNPlusOneDetection() {
    // Insert test data
    List<Order> orders = new ArrayList<>();
    for (int i = 0; i < 10; i++) {
        Customer c = customerRepository.save(
            new Customer("Customer " + i));
        Order o = orderRepository.save(
            new Order(c, "Order " + i, BigDecimal.valueOf(100)));
        orders.add(o);
    }

    // Clear L1 cache to force real queries
    entityManager.clear();

    // Load orders and access lazy relationship
    List<Order> loaded = orderRepository.findByStatus("PENDING");
    assertThat(loaded).hasSize(10);

    // This should trigger lazy loading
    loaded.forEach(o -> o.getCustomer().getName());

    // In a test, verify query count stayed at 1 + 1 = 2
    // (With JOIN FETCH: 1 query, without: 11 queries)
}
*/

// === 9. Summary: Fixing N+1 ===
/*
Approach        Pros                    Cons                Best For
─────────────────────────────────────────────────────────────────────
JOIN FETCH      Single query            Cartesian product   1:1, M:1
                Most efficient          with collections

@EntityGraph    Declarative             Requires annotation  Multiple
                Readable                per query           relationships

@BatchSize      No query change         Still N queries,    Collections
                Works automatically     just batched        (1:M)

FetchMode       Single extra query      Subquery overhead   Large
.SUBSELECT                              2 queries vs 1      collections

// Rule of thumb:
// 1:1 or M:1 → JOIN FETCH
// 1:M (small) → @BatchSize
// 1:M (large) → FetchMode.SUBSELECT
// Complex → @EntityGraph
*/

// === 10. Common N+1 patterns to watch ===
/*
1. Order → Customer (ManyToOne)
   Fix: JOIN FETCH or @EntityGraph

2. Customer → Orders (OneToMany)
   Fix: @BatchSize or SUBSELECT

3. Order → Items → Product (chain)
   Fix: @EntityGraph with subgraph

4. Any @ManyToMany
   Fix: JOIN FETCH or @EntityGraph

5. DTO projection with nested collections
   Fix: Multiple queries (collection projections are Cartesian)

// Testing tip:
// add @TestPropertySource with:
// spring.jpa.properties.hibernate.session.events.log=true
// This logs all SQL statements — look for repeated identical queries
*/
```

N+1 queries are the most common JPA performance issue. Detect them by enabling SQL logging in development. Fix with JOIN FETCH for single relationships, @EntityGraph for multiple, @BatchSize for collections, and FetchMode.SUBSELECT for large collections. Always verify query count in tests. Profile before and after in production-like data volumes.


### Q6: How do you configure connection pooling with HikariCP?

**Answer:** HikariCP is the default connection pool in Spring Boot 2.x+. It manages a pool of database connections for reuse, avoiding the cost of opening/closing connections. Key settings: maximumPoolSize (connections), minimumIdle (idle connections), connectionTimeout (wait time), maxLifetime (connection recycling), and idleTimeout. Pool size rule of thumb: (cores * 2) + effective spindle count.

```java
// === 1. HikariCP is the default ===
/*
Spring Boot auto-configures HikariCP if it's on the classpath.
spring-boot-starter-data-jpa includes it.

Default settings:
- maximumPoolSize: 10
- minimumIdle: equal to maximumPoolSize (eager pool)
- connectionTimeout: 30000ms (30 seconds)
- idleTimeout: 600000ms (10 minutes)
- maxLifetime: 1800000ms (30 minutes)
*/

// === 2. Custom configuration ===
/*
application.yml:
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/mydb
    username: app_user
    password: ${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver
    hikari:
      pool-name: AppPool
      maximum-pool-size: 20
      minimum-idle: 5
      connection-timeout: 5000
      idle-timeout: 300000
      max-lifetime: 1200000
      connection-test-query: SELECT 1
      validation-timeout: 3000
      leak-detection-threshold: 60000
      register-mbeans: true
      auto-commit: false
*/

// === 3. Programmatic configuration ===
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import javax.sql.DataSource;

@Configuration
class HikariConfig {

    @Bean
    @ConfigurationProperties(prefix = "app.datasource")
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:postgresql://localhost:5432/mydb");
        config.setUsername("app_user");
        config.setPassword(System.getenv("DB_PASSWORD"));
        config.setDriverClassName("org.postgresql.Driver");
        config.setPoolName("AppPool");

        // Pool sizing
        config.setMaximumPoolSize(20);
        config.setMinimumIdle(5);

        // Timeouts
        config.setConnectionTimeout(5000);   // Wait 5s for connection
        config.setIdleTimeout(300_000);       // Remove idle after 5min
        config.setMaxLifetime(1_200_000);     // Max connection lifetime 20min
        config.setValidationTimeout(3_000);   // Validate within 3s

        // Health
        config.setConnectionTestQuery("SELECT 1");
        config.setConnectionInitSql("SET TIME ZONE 'UTC'");

        // Debugging
        config.setLeakDetectionThreshold(60_000);  // Log if held >60s

        // Transaction
        config.setAutoCommit(false);

        // Metrics
        config.setRegisterMbeans(true);

        // Pool sizing strategy
        config.addDataSourceProperty("cachePrepStmts", "true");
        config.addDataSourceProperty("prepStmtCacheSize", "250");
        config.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");
        config.addDataSourceProperty("useServerPrepStmts", "true");

        return new HikariDataSource(config);
    }

    // Environment-specific pools
    @Profile("prod")
    @Bean
    public DataSource prodDataSource() {
        return createPool(30, 10, "ProdPool");
    }

    @Profile("dev")
    @Bean
    public DataSource devDataSource() {
        return createPool(5, 2, "DevPool");
    }

    @Profile("test")
    @Bean
    public DataSource testDataSource() {
        return createPool(2, 1, "TestPool");
    }

    private DataSource createPool(int maxSize, int minIdle, String name) {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:postgresql://" +
            System.getenv("DB_HOST") + ":5432/" +
            System.getenv("DB_NAME"));
        config.setUsername(System.getenv("DB_USER"));
        config.setPassword(System.getenv("DB_PASSWORD"));
        config.setMaximumPoolSize(maxSize);
        config.setMinimumIdle(minIdle);
        config.setPoolName(name);
        return new HikariDataSource(config);
    }
}

// === 4. Pool size sizing guide ===
/*
Rule of thumb: pool_size = (cores * 2) + effective_spindle_count

Examples:
- 4 cores, single SSD → 8 + 1 = 9 connections
- 8 cores, RAID 10 (4 spindles) → 16 + 4 = 20 connections
- 16 cores, SAN → 32 connections
- Microservice (2 cores) → 4 + 1 = 5 connections

More important than pool size:
- Set connectionTimeout low (5s) — fail fast if pool is exhausted
- Set maxLifetime slightly below database's wait_timeout
- Monitor pool usage — if pool is exhausted, optimize queries first

// Pool sizing by application type:
// Web app (request-scoped): maxPoolSize = max concurrent requests
// Batch processor: maxPoolSize = thread pool size
// Admin tool: maxPoolSize = 5 (low concurrency)
// API gateway: maxPoolSize = concurrent API calls × 2
*/

// === 5. Monitoring HikariCP ===
@Component
class HikariMonitor {
    private final HikariDataSource dataSource;

    @Scheduled(fixedRate = 30_000)  // Every 30 seconds
    public void logPoolMetrics() {
        HikariPoolMXBean pool = dataSource.getHikariPoolMXBean();

        log.info("HikariCP Pool [{}]: active={}, idle={}, " +
                 "waiting={}, total={}, completed={}",
            dataSource.getPoolName(),
            pool.getActiveConnections(),
            pool.getIdleConnections(),
            pool.getThreadsAwaitingConnection(),
            pool.getTotalConnections(),
            pool.getTotalConnectionsCreated());
    }

    // Publish metrics to Micrometer
    @EventListener
    public void registerMetrics(ContextRefreshedEvent event) {
        MeterRegistry registry = event.getApplicationContext()
            .getBean(MeterRegistry.class);

        HikariPoolMXBean pool = dataSource.getHikariPoolMXBean();

        Gauge.builder("hikari.active", pool,
                HikariPoolMXBean::getActiveConnections)
            .tag("pool", dataSource.getPoolName())
            .register(registry);

        Gauge.builder("hikari.idle", pool,
                HikariPoolMXBean::getIdleConnections)
            .tag("pool", dataSource.getPoolName())
            .register(registry);

        Gauge.builder("hikari.waiting", pool,
                HikariPoolMXBean::getThreadsAwaitingConnection)
            .tag("pool", dataSource.getPoolName())
            .register(registry);

        Gauge.builder("hikari.pending", pool,
                HikariPoolMXBean::getPendingThreads)
            .tag("pool", dataSource.getPoolName())
            .register(registry);
    }
}

// === 6. Connection leak detection ===
/*
Configure leak-detection-threshold to catch connections
not returned to the pool.

application.yml:
spring.datasource.hikari.leak-detection-threshold: 60000

When a connection is held longer than 60 seconds, HikariCP logs:
"Connection leak detection triggered...
 Stack trace of where the connection was acquired:"

This helps find code that forgets to close connections.

// Common leak causes:
// 1. Missing try-with-resources on JDBC
// 2. Long-running transactions
// 3. Thread-local connection holders
// 4. Connection passed to external system
*/

// === 7. Healthy pool configuration ===
@Configuration
class HealthyPoolConfig {

    @Bean
    public DataSource healthCheckedDataSource() {
        HikariConfig config = new HikariConfig();

        // Health check
        config.setConnectionTestQuery("SELECT 1");
        config.setValidationTimeout(3000);

        // Prevent stale connections
        config.setMaxLifetime(1_200_000);  // 20 minutes
        config.setIdleTimeout(300_000);     // 5 minutes

        // Fail fast
        config.setConnectionTimeout(5_000);  // 5 seconds

        // Catch leaks
        config.setLeakDetectionThreshold(60_000);  // 1 minute

        // Metrics
        config.setRegisterMbeans(true);

        return new HikariDataSource(config);
    }
}

// === 8. Testing connection pool ===
/*
@Test
void testConnectionPoolConfiguration() {
    HikariDataSource ds = (HikariDataSource) dataSource;
    assertThat(ds.getMaximumPoolSize()).isEqualTo(20);
    assertThat(ds.getConnectionTimeout()).isEqualTo(5000);
    assertThat(ds.getMinimumIdle()).isEqualTo(5);
}

@Test
void testPoolReturnsConnections() {
    // Verify we can acquire connections up to pool limit
    List<Connection> connections = new ArrayList<>();
    try {
        for (int i = 0; i < 10; i++) {
            Connection conn = dataSource.getConnection();
            assertThat(conn.isValid(1)).isTrue();
            connections.add(conn);
        }

        // 11th connection should timeout
        assertThrows(SQLException.class, () -> {
            dataSource.setLoginTimeout(2);
            dataSource.getConnection();
        });
    } finally {
        connections.forEach(c -> {
            try { c.close(); } catch (SQLException ignored) {}
        });
    }
}

@Test
void testConnectionPoolUnderLoad() {
    ExecutorService executor = Executors.newFixedThreadPool(20);
    List<Future<Boolean>> results = new ArrayList<>();

    for (int i = 0; i < 100; i++) {
        results.add(executor.submit(() -> {
            try (Connection conn = dataSource.getConnection();
                 PreparedStatement stmt = conn.prepareStatement("SELECT 1");
                 ResultSet rs = stmt.executeQuery()) {
                return rs.next();
            } catch (SQLException e) {
                return false;
            }
        }));
    }

    long successCount = results.stream()
        .map(f -> { try { return f.get(); }
                     catch (Exception e) { return false; }})
        .filter(r -> r)
        .count();

    // Should succeed even under load
    assertThat(successCount).isGreaterThan(90);
}
*/

// === 9. Common mistakes ===
/*
1. Too large pool
   "Set pool to 100 for 100 concurrent users" → Wrong!
   100 concurrent web threads × 1 connection each = 100 connections
   But database has only 8 CPU cores → most connections will wait
   Rule: pool = cores * 2 + spindles (not concurrent users)

2. Too small pool
   Less common, but happens in batch processing
   Batch thread pool of 20 needs at least 20 connections

3. Missing connection-test-query for older databases
   PostgreSQL: "SELECT 1"
   Oracle: "SELECT 1 FROM DUAL"
   MySQL: "SELECT 1"
   H2: "SELECT 1"

4. Auto-commit = true with JPA
   JPA/Spring Data requires auto-commit=false for proper transaction management
   Spring Boot sets this automatically for JPA

5. Not setting maxLifetime below database timeout
   If database closes idle connections after 8 hours (MySQL wait_timeout),
   set maxLifetime to 30 minutes to recycle before timeout
*/

// === 10. Pool sizing by environment ===
/*
DEV (shared, low traffic):
  maximumPoolSize: 5
  minimumIdle: 2
  connectionTimeout: 10000

STAGING (moderate traffic):
  maximumPoolSize: 15
  minimumIdle: 5
  connectionTimeout: 5000

PRODUCTION (high traffic):
  maximumPoolSize: 25
  minimumIdle: 10
  connectionTimeout: 5000

BATCH PROCESSING:
  maximumPoolSize: 50
  minimumIdle: 0 (no idle needed for batch)
  connectionTimeout: 10000
*/
```

HikariCP is Spring Boot's default connection pool. Configure pool size based on CPU cores + disk spindles (not concurrent users). Set connectionTimeout short (5s) for fast failure. Enable leak detection in development. Monitor pool metrics in production. Verify pool size under realistic load. The most common mistake is setting the pool too large.


### Q7: How do you manage database migrations with Flyway?

**Answer:** Flyway versions your database schema using sequential migration files. Migrations are SQL (or Java) files with a version number and description. Flyway tracks which migrations have run in the flyway_schema_history table. On startup, it runs any pending migrations in order. This makes schema changes repeatable, auditable, and team-safe.

```java
// === 1. Flyway setup ===
/*
pom.xml:
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-core</artifactId>
</dependency>
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-database-postgresql</artifactId>
</dependency>
*/

// === 2. Migration file naming ===
/*
Naming convention:
Prefix: V (versioned), U (undo), R (repeatable)
Version: Numbers separated by dots or underscores
Separator: __ (double underscore)
Description: Snake_case or PascalCase
Suffix: .sql

Examples:
V1__create_orders_table.sql
V1_1__add_customer_email.sql
V2__seed_reference_data.sql
R__daily_materialized_view.sql (repeatable)

Flyway discovers migrations by scanning:
classpath:db/migration (default)
*/

// === 3. Migration files ===
/*
// V1__create_orders_table.sql
CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    version INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);

// V2__add_customer_table.sql
CREATE TABLE customers (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

ALTER TABLE orders ADD COLUMN customer_id BIGINT REFERENCES customers(id);
CREATE INDEX idx_orders_customer_id ON orders(customer_id);

// V3__seed_reference_data.sql
INSERT INTO order_statuses (code, name) VALUES
    ('PENDING', 'Pending Approval'),
    ('CONFIRMED', 'Confirmed'),
    ('SHIPPED', 'Shipped'),
    ('DELIVERED', 'Delivered'),
    ('CANCELLED', 'Cancelled');

// V4__add_delivery_tracking.sql
CREATE TABLE deliveries (
    id BIGSERIAL PRIMARY KEY,
    order_id BIGINT NOT NULL REFERENCES orders(id),
    carrier VARCHAR(50) NOT NULL,
    tracking_number VARCHAR(100) NOT NULL,
    estimated_delivery DATE,
    status VARCHAR(20) NOT NULL DEFAULT 'PENDING'
);

// V5__add_order_items.sql
CREATE TABLE order_items (
    id BIGSERIAL PRIMARY KEY,
    order_id BIGINT NOT NULL REFERENCES orders(id),
    product_id BIGINT NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL(10, 2) NOT NULL
);

// V6__create_audit_log.sql
CREATE TABLE audit_log (
    id BIGSERIAL PRIMARY KEY,
    table_name VARCHAR(100) NOT NULL,
    record_id BIGINT NOT NULL,
    action VARCHAR(20) NOT NULL,
    old_values JSONB,
    new_values JSONB,
    changed_by VARCHAR(100),
    changed_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_audit_log_table_record ON audit_log(table_name, record_id);
*/

// === 4. Application configuration ===
/*
application.yml:
spring:
  flyway:
    enabled: true
    locations: classpath:db/migration
    baseline-on-migrate: true
    baseline-version: 0
    validate-on-migrate: true
    out-of-order: false
    clean-disabled: true  # NEVER clean in production!
    table: flyway_schema_history
    encoding: UTF-8
    connect-retries: 5
    default-schema: public
    schemas: public
    placeholders:
      table_prefix: app_
      audit_user: flyway_migration
*/

// === 5. Programmatic Flyway configuration ===
@Configuration
class FlywayConfig {

    @Bean
    public Flyway flyway(DataSource dataSource) {
        Flyway flyway = Flyway.configure()
            .dataSource(dataSource)
            .locations("classpath:db/migration")
            .baselineOnMigrate(true)
            .baselineVersion("0")
            .validateOnMigrate(true)
            .outOfOrder(false)
            .cleanDisabled(true)
            .table("flyway_schema_history")
            .placeholders(Map.of(
                "schema_name", "public",
                "table_prefix", "app_"))
            .load();
        flyway.migrate();
        return flyway;
    }
}

// === 6. Java-based migrations ===
/*
For complex migrations (data transformations, BLOB processing).
Implement Flyway's JavaMigration interface.

// V7__MigrateLegacyData.java
import org.flywaydb.core.api.migration.BaseJavaMigration;
import org.flywaydb.core.api.migration.Context;

public class V7__Migrate_legacy_order_data extends BaseJavaMigration {

    @Override
    public void migrate(Context context) throws Exception {
        try (PreparedStatement select = context.getConnection()
                .prepareStatement("SELECT id, legacy_data FROM orders " +
                                  "WHERE migrated = false");
             ResultSet rs = select.executeQuery()) {

            while (rs.next()) {
                Long id = rs.getLong("id");
                String legacyData = rs.getString("legacy_data");

                // Transform legacy data
                String newData = transformLegacyData(legacyData);

                try (PreparedStatement update = context.getConnection()
                        .prepareStatement(
                            "UPDATE orders SET migrated = true, " +
                            "new_data = ? WHERE id = ?")) {
                    update.setString(1, newData);
                    update.setLong(2, id);
                    update.executeUpdate();
                }
            }
        }
    }

    private String transformLegacyData(String legacy) {
        // Complex data transformation logic
        return legacy.replace("old_format", "new_format");
    }
}
*/

// === 7. Flyway best practices ===
/*
1. Never modify existing migrations after they're deployed
   → Create a new migration for changes
   → Old migrations must be immutable

2. Each migration should be small and focused
   → One change per migration
   → Easy to roll back (undo migration)

3. Use repeatable migrations for views, functions, triggers
   → Flyway re-runs if checksum changes
   → Good for: CREATE OR REPLACE VIEW, FUNCTION, MATERIALIZED VIEW

4. Test migrations against a copy of production data
   → Unexpected data causes migration failures
   → Test in staging before prod

5. Always set cleanDisabled=true in production
   → clean() drops everything
   → Irreversible data loss

6. Include rollback plan
   → SQL for reverting the migration
   → Or prepare a compensating migration

7. Monitor migration execution time
   → Large data migrations may need downtime
   → Consider batch processing for very large tables

8. Use placeholders for environment-specific values
   → {{table_prefix}} resolves at migration time
   → Keeps SQL files portable
*/

// === 8. Undo migrations (Flyway Teams) ===
/*
// U1__undo_create_orders_table.sql
DROP TABLE IF EXISTS orders;

// Undo migrations are only available in Flyway Teams (paid)
// For OSS, use a compensating forward migration:
// V8__remove_customer_table.sql
DROP TABLE IF EXISTS customers CASCADE;
DROP INDEX IF EXISTS idx_orders_customer_id;
ALTER TABLE orders DROP COLUMN IF EXISTS customer_id;
*/

// === 9. Migration validation ===
/*
Flyway validates migration checksums on startup.
If a migration file changed after being applied, Flyway fails:
"Migration version 3 has been applied to the database
 but does not match the checksum of the local file"

Fix: Never edit applied migrations. Create V4 to fix the issue.
*/

@Component
class FlywayValidationListener {
    private final Flyway flyway;

    @EventListener(ApplicationReadyEvent.class)
    public void validateMigrations() {
        FlywayValidateResult result = flyway.validateWithResult();
        if (!result.validationSuccessful) {
            log.error("Flyway validation failed! Pending migrations: {}",
                result.invalidMigrations);
            // Alert ops team
            notificationService.sendAlert("Flyway migration validation failed");
        } else {
            log.info("Flyway validation passed. {} migrations applied",
                flyway.info().applied().length);
        }
    }
}

// === 10. Testing migrations ===
/*
@Test
void testMigrationsApplySuccessfully() {
    // Application starts with Flyway enabled
    // Migrations run before tests execute
    assertThat(flyway.info().pending().length).isEqualTo(0);
}

@Test
void testSpecificMigration() {
    // Verify V2 created the customers table
    jdbcTemplate.queryForObject(
        "SELECT count(*) FROM information_schema.tables " +
        "WHERE table_name = 'customers'",
        Integer.class);
    assertThat(count).isPositive();
}

@Test
void testSeedData() {
    // Verify seed data from V3 exists
    List<String> statuses = jdbcTemplate.queryForList(
        "SELECT code FROM order_statuses",
        String.class);
    assertThat(statuses).contains("PENDING", "SHIPPED", "DELIVERED");
}

@Test
void testRollbackMigration() {
    // Test that a compensating forward migration works
    flyway.migrate();
    assertThat(jdbcTemplate.queryForList(
        "SELECT * FROM deliveries")).isEmpty();
}
*/

// === 11. Flyway in CI/CD ===
/*
// Deploy script (PowerShell):
// 1. Backup database
// 2. Run Flyway migrate
// 3. Verify migration

$backupFile = "backup_$(Get-Date -Format 'yyyyMMdd_HHmmss').sql"
pg_dump -h $env:DB_HOST -U $env:DB_USER -d $env:DB_NAME > $backupFile
if ($LASTEXITCODE -ne 0) { throw "Backup failed" }

./gradlew flywayMigrate
if ($LASTEXITCODE -ne 0) {
    ./gradlew flywayUndo  # Flyway Teams
    throw "Migration failed, restored backup"
}

Write-Output "Migration successful"
*/
```

Flyway version-controls your database schema. Each migration is immutable (never edit applied migrations). Small, focused migrations are easier to debug and roll back. Always test migrations against production-like data. Enable cleanDisabled in production. Use Java migrations for complex data transformations. The goal: any developer or environment gets the same schema from the same codebase.


### Q8: Explain indexing strategies for database performance.

**Answer:** Indexes speed up data retrieval by creating a separate data structure (B-tree, hash, GiST) that maps column values to row locations. They accelerate WHERE, JOIN, ORDER BY, and GROUP BY operations at the cost of slower writes and increased storage. Choose indexes based on your query patterns — not all columns need indexes. Use EXPLAIN to verify.

```java
// === 1. Index types ===
/*
B-tree (default):    Range queries, equality, sorting
Hash:                Equality only (rarely used in practice)
GiST:                Full-text search, geometric data
GIN:                 Array, JSONB, tsvector
BRIN:                Large, naturally-ordered tables (logs, time-series)
SP-GiST:             Clustered data, quad-trees
*/

// === 2. Migration with indexes ===
/*
// V1__create_indexes.sql

// Single-column index (simplest, most common)
CREATE INDEX idx_orders_status ON orders(status);

// Composite index (multiple columns — order matters!)
CREATE INDEX idx_orders_status_date ON orders(status, created_at);

// Unique index (enforces uniqueness)
CREATE UNIQUE INDEX idx_customers_email ON customers(email);

// Partial index (only subset of rows — smaller, faster for common queries)
CREATE INDEX idx_orders_active ON orders(created_at)
    WHERE status NOT IN ('DELIVERED', 'CANCELLED');

// Covering index (includes extra columns for index-only scans)
CREATE INDEX idx_orders_summary ON orders(status, created_at)
    INCLUDE (id, customer_name, total);

// Functional index (index on expression)
CREATE INDEX idx_customers_lower_email ON customers(LOWER(email));

// Concurrent index creation (don't block writes)
CREATE INDEX CONCURRENTLY idx_orders_customer_id ON orders(customer_id);
*/

// === 3. When to index ===
/*
Index these columns:
☐ Primary keys (auto-indexed by PK constraint)
☐ Foreign keys (JOIN columns)
☐ Columns in WHERE clauses (frequently queried)
☐ Columns in ORDER BY (sorting)
☐ Columns in GROUP BY (aggregation)
☐ Columns in JOIN conditions
☐ Columns with high cardinality (many unique values)

Don't index:
☒ Columns rarely used in queries
☒ Low-cardinality with small tables (< 1000 rows)
☒ Columns that are frequently updated with limited query benefit
☒ Binary/LOB columns
☒ Every column "just in case"
*/

// === 4. Composite index column order ===
/*
Order columns from highest to lowest cardinality:
Column order: customer_id (high) → status (medium) → created_at (low)

idx_customers_status_date ON orders(customer_id, status, created_at)

Supports these queries:
WHERE customer_id = 123                      -- ✓ Uses full index
WHERE customer_id = 123 AND status = 'SHIPPED' -- ✓
WHERE customer_id = 123 AND status = 'SHIPPED' -- ✓
    AND created_at > '2024-01-01'           -- ✓
WHERE status = 'PENDING'                    -- ✗ Index skip (not helpful)

Rule: Put columns with highest selectivity (most unique values) first
      The index can't use columns after a range condition
*/

// === 5. EXPLAIN ANALYZE (verify index usage) ===
/*
Run these queries to understand index usage:

EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders WHERE status = 'PENDING';
-- Shows: Seq Scan vs Index Scan, actual time, rows, buffers

EXPLAIN (ANALYZE, BUFFERS)
SELECT * FROM orders o
JOIN customers c ON o.customer_id = c.id
WHERE c.email = 'test@example.com';
-- Shows: Nested Loop, Hash Join, or Merge Join
-- Shows: Index Scan or Seq Scan per table

Key terms:
Seq Scan: Full table scan (no index used — slow on large tables)
Index Scan: Uses index to find rows (fast for selective queries)
Index Only Scan: All needed data in index (fastest — no heap lookup)
Bitmap Heap Scan: Combines multiple indexes (BITMAP OR/AND)
*/

// === 6. Detect missing indexes with Spring ===
@Component
class IndexAnalysisService {
    private final JdbcTemplate jdbcTemplate;

    @EventListener(ApplicationReadyEvent.class)
    public void analyzeMissingIndexes() {
        // PostgreSQL: check for sequential scans on large tables
        List<Map<String, Object>> slowScans = jdbcTemplate
            .queryForList("""
                SELECT schemaname, relname, seq_scan, seq_tup_read,
                       idx_scan, n_live_tup
                FROM pg_stat_user_tables
                WHERE seq_scan > 1000
                  AND n_live_tup > 10000
                  AND seq_tup_read / NULLIF(seq_scan, 0) > 1000
                ORDER BY seq_tup_read DESC
                """);

        if (!slowScans.isEmpty()) {
            log.warn("Tables with many sequential scans (possible missing indexes):");
            slowScans.forEach(row ->
                log.warn("  {}.{}: {} seq scans, {} rows read",
                    row.get("schemaname"), row.get("relname"),
                    row.get("seq_scan"), row.get("seq_tup_read")));
        }
    }

    // Check index usage
    public void checkIndexUsage() {
        List<Map<String, Object>> unusedIndexes = jdbcTemplate
            .queryForList("""
                SELECT schemaname, tablename, indexname, idx_scan
                FROM pg_stat_user_indexes
                WHERE idx_scan = 0
                  AND indexname NOT LIKE '%_pkey'
                ORDER BY tablename
                """);

        if (!unusedIndexes.isEmpty()) {
            log.warn("Unused indexes (consider removing):");
            unusedIndexes.forEach(row ->
                log.warn("  Index {} on {}.{} (0 scans)",
                    row.get("indexname"), row.get("schemaname"),
                    row.get("tablename")));
        }
    }
}

// === 7. Index maintenance ===
/*
// Check index bloat (PostgreSQL)
EXPLAIN (ANALYZE, BUFFERS) SELECT 1 FROM orders WHERE id = 1;

// Rebuild index (reduces bloat)
REINDEX INDEX idx_orders_status;  -- Locks table
REINDEX TABLE CONCURRENTLY orders; -- No lock (PostgreSQL 12+)

// PostgreSQL auto-analyze keeps statistics up-to-date
// But after bulk inserts, manually:
ANALYZE orders;

// Remove unused indexes to speed up writes
DROP INDEX IF EXISTS idx_old_unused_index;
*/

// === 8. Testing index effectiveness ===
/*
@Test
void testIndexUsedForQuery() {
    // Insert enough data for index to matter
    IntStream.range(0, 10000).forEach(i ->
        orderRepository.save(new Order("User" + i,
            BigDecimal.valueOf(100), "PENDING")));

    entityManager.clear();

    // This query should use the index
    StopWatch watch = new StopWatch();
    watch.start("query");
    List<Order> orders = orderRepository.findByStatus("PENDING", PageRequest.of(0, 100));
    watch.stop();

    log.info("Query took {} ms", watch.getTotalTimeMillis());
    assertThat(watch.getTotalTimeMillis()).isLessThan(50); // With index
}

@Test
void testCompositeIndexOrder() {
    // The index on (customer_id, status, created_at)
    // should handle this efficiently
    List<Order> orders = orderRepository
        .findByCustomerIdAndStatusOrderByCreatedAtDesc(
            1L, "SHIPPED", PageRequest.of(0, 50));
    assertThat(orders).isNotEmpty();
}

@Test
void testPartialIndex() {
    // Partial index only indexes WHERE status NOT IN ('DELIVERED','CANCELLED')
    // Should be faster for this common query
    List<Order> active = orderRepository.findByStatusAndCreatedAtBefore(
        "PENDING", LocalDate.now().minusDays(30));
    assertThat(active).isNotEmpty();
}
*/

// === 9. Index types comparison ===
/*
Index Type     Use Case                          Size     Write Overhead
─────────────────────────────────────────────────────────────────────
B-tree         General purpose (default)          Medium   Low
B-tree unique  Enforce uniqueness                 Medium   Low
B-tree partial Filtered subset (active records)   Small    Low
B-tree covering Index-only scans (no heap)        Large    Medium
Hash           Equality (=) only                  Small    Low
GIN            Arrays, JSON, full-text            Large    Medium
GiST           Geospatial, full-text              Large    Medium
BRIN           Ordered large tables (logs)        Tiny     Very low

// For 99% of cases, B-tree is the right choice.
// Use BRIN for time-series data (millions of rows, natural order).
// Use GIN for JSONB and array columns.
*/

// === 10. Common indexing mistakes ===
/*
1. Too many indexes on write-heavy tables
   Each index slows INSERT/UPDATE/DELETE
   Rule: Index COUNT = (read_operations / write_operations) * 0.5

2. Indexing low-cardinality columns alone
   CREATE INDEX ON orders(status) -- status has only 5 values
   Better: CREATE INDEX ON orders(status, created_at)
   → Composite index with status as leading column

3. Not indexing foreign keys
   JPA doesn't auto-create FK indexes
   Always add: CREATE INDEX idx_orders_customer_id ON orders(customer_id)

4. Forgetting to ANALYZE after bulk loads
   PostgreSQL uses statistics for query planning
   Stale stats → wrong plans → slow queries

5. Indexing every column "just in case"
   Each index increases write time and storage
   Index what your queries actually use
*/

// === 11. Monitoring indexes at runtime ===
@Scheduled(cron = "0 0 2 * * ?")  // Daily at 2 AM
public void analyzeTableStatistics() {
    // Refresh statistics for query planner
    jdbcTemplate.execute("ANALYZE");
    log.info("Table statistics refreshed");
}

@Scheduled(cron = "0 0 3 * * 0")  // Weekly on Sunday
public void rebuildBloat() {
    // Check for bloated indexes
    List<Map<String, Object>> bloated = jdbcTemplate.queryForList("""
        SELECT
            schemaname, tablename, indexname,
            round(100 * (1 - avg_leaf_density)) AS bloat_pct
        FROM pg_stat_user_indexes
        CROSS JOIN LATERAL (
            SELECT avg(avg_leaf_density) AS avg_leaf_density
            FROM pg_stat_user_indexes
        ) stats
        WHERE avg_leaf_density < 0.8
          AND indexname NOT LIKE '%_pkey'
        ORDER BY bloat_pct DESC
        """);

    bloated.forEach(row ->
        log.info("Bloat detected: {}.{} index on {} — {}%",
            row.get("schemaname"), row.get("indexname"),
            row.get("tablename"), row.get("bloat_pct")));
}
```

Indexes are the most impactful database optimization. Create indexes on WHERE columns, JOIN columns, and ORDER BY columns. Use composite indexes matching your query patterns — column order matters. Monitor unused indexes (remove them) and sequential scans (add indexes). Test index performance with realistic data volumes. The goal: Index Scans on query columns and Index-Only Scans where possible.


### Q9: How do you work with MongoDB using Spring Data MongoDB?

**Answer:** Spring Data MongoDB brings the familiar repository pattern to MongoDB. Documents are stored as BSON in collections. Use @Document to map entities, MongoRepository for CRUD, and @Query for custom queries. MongoDB excels at flexible schemas, nested documents, and horizontal scaling. Choose MongoDB when your data is document-shaped (JSON-like) and doesn't require complex joins or transactions.

```java
// === 1. Setup ===
/*
pom.xml:
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>

application.yml:
spring:
  data:
    mongodb:
      uri: mongodb://localhost:27017/orderdb
      auto-index-creation: true
      database: orderdb
      field-naming-strategy: org.springframework.data.mapping.model
          .SnakeCaseFieldNamingStrategy
*/

// === 2. Document mapping ===
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.math.BigDecimal;

@Document(collection = "orders")  // Maps to MongoDB collection
class MongoOrder {
    @Id  // Maps to _id in MongoDB
    private String id;  // MongoDB uses ObjectId (String in Java)

    @Field("customer_name")
    private String customerName;

    @Field("total")
    private BigDecimal total;

    @Field("status")
    private String status;

    @Field("items")
    private List<OrderItem> items;  // Embedded documents

    @Field("shipping_address")
    private Address shippingAddress;  // Embedded document

    @Field("created_at")
    private Instant createdAt;

    @Field("tags")
    private List<String> tags;  // Array field

    @Field("metadata")
    private Map<String, Object> metadata;  // Dynamic attributes

    @Version
    private Long version;  // Optimistic locking
}

// Embedded documents (no @Document — stored within parent)
class OrderItem {
    private String productId;
    private String productName;
    private int quantity;
    private BigDecimal price;
}

class Address {
    private String street;
    private String city;
    private String zipCode;
    private String country;
}

// === 3. Repository ===
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Repository
interface MongoOrderRepository
        extends MongoRepository<MongoOrder, String> {

    // Query methods (Spring Data derives query)
    List<MongoOrder> findByCustomerName(String customerName);
    List<MongoOrder> findByStatus(String status);

    // Range query
    List<MongoOrder> findByTotalBetween(
        BigDecimal min, BigDecimal max);

    // Array contains
    List<MongoOrder> findByTagsContaining(String tag);

    // Embedded document fields
    List<MongoOrder> findByShippingAddressCity(String city);

    // Nested array fields
    List<MongoOrder> findByItemsProductId(String productId);

    // Date range
    List<MongoOrder> findByCreatedAtBetween(
        Instant from, Instant to);

    // Pagination and sorting
    Page<MongoOrder> findByStatus(String status, Pageable pageable);

    // Aggregation
    @Query(value = "{ 'status': ?0 }",
           fields = "{ 'customerName': 1, 'total': 1, 'status': 1 }")
    List<MongoOrder> findSummaryByStatus(String status);

    // Aggregation pipeline (MongoDB Aggregation Framework)
    @Aggregation(pipeline = {
        "{ $match: { status: ?0 } }",
        "{ $group: { _id: '$status', totalAmount: { $sum: '$total' } } }",
        "{ $sort: { totalAmount: -1 } }"
    })
    List<StatusSummary> aggregateByStatus(String status);

    // Text search
    @Query("{ $text: { $search: ?0 } }")
    Page<MongoOrder> searchByText(String keyword, Pageable pageable);

    // Geo-spatial queries
    @Query("{ 'shippingAddress.location': { $near: { $geometry: { type: 'Point', coordinates: [?1, ?0] }, $maxDistance: 5000 } } }")
    List<MongoOrder> findNearby(double lat, double lng);

    // Delete by condition
    Long deleteByStatus(String status);
}

// === 4. MongoTemplate — advanced operations ===
@Service
class MongoTemplateService {
    @Autowired private MongoTemplate mongoTemplate;

    public List<MongoOrder> findCustom() {
        Query query = new Query();
        query.addCriteria(Criteria.where("status").is("PENDING")
            .and("total").gte(new BigDecimal("100"))
            .and("tags").in("urgent"));

        query.with(Sort.by(Sort.Direction.DESC, "total"));
        query.with(PageRequest.of(0, 20));
        query.fields().include("customerName", "total", "status");

        return mongoTemplate.find(query, MongoOrder.class);
    }

    // Aggregation pipeline
    public AggregationResults<StatusSummary> aggregate() {
        Aggregation agg = Aggregation.newAggregation(
            Aggregation.match(Criteria.where("total")
                .gte(new BigDecimal("50"))),
            Aggregation.group("status")
                .count().as("count")
                .sum("total").as("totalAmount"),
            Aggregation.sort(Sort.by(Sort.Direction.DESC, "totalAmount")),
            Aggregation.skip(0L),
            Aggregation.limit(10)
        );

        return mongoTemplate.aggregate(agg, "orders", StatusSummary.class);
    }

    // Bulk write operations
    public void bulkInsert(List<MongoOrder> orders) {
        mongoTemplate.bulkOps(BulkOperations.BulkMode.ORDERED, MongoOrder.class)
            .insert(orders)
            .execute();
    }

    // Update with upsert
    public void upsertOrder(String orderId, MongoOrder update) {
        Query query = new Query(Criteria.where("id").is(orderId));
        Update updateOps = new Update()
            .set("status", update.getStatus())
            .set("total", update.getTotal())
            .inc("version", 1);

        mongoTemplate.upsert(query, updateOps, MongoOrder.class);
    }

    // Text search with weights
    public List<MongoOrder> searchWithRelevance(String term) {
        TextCriteria criteria = TextCriteria.forDefaultLanguage()
            .matchingAny(term);

        Query query = TextQuery.queryText(criteria)
            .sortByScore()
            .with(PageRequest.of(0, 10));

        return mongoTemplate.find(query, MongoOrder.class);
    }
}

// === 5. Indexes ===
/*
Indexes in MongoDB are critical — unindexed queries scan all documents.
*/

@Document(collection = "orders")
@CompoundIndexes({
    @CompoundIndex(name = "status_date_idx",
                   def = "{'status': 1, 'createdAt': -1}"),
    @CompoundIndex(name = "customer_status_idx",
                   def = "{'customerName': 1, 'status': 1}"),
})
@TextIndexed
class IndexedMongoOrder {
    @Id private String id;

    @Indexed(background = true)  // Single field index
    private String customerName;

    @Indexed(background = true)
    private String status;

    @TextIndexed(weight = 2)  // Text search index
    private String customerName;

    @TextIndexed(weight = 1)
    private String description;

    // TTL index (auto-expire documents)
    @Indexed(name = "ttl_idx", expireAfter = "7d")
    private Instant createdAt;
}

// === 6. Transactions ===
/*
MongoDB 4.0+ supports multi-document ACID transactions.
Use Spring's @Transactional with MongoDB.

application.yml:
spring.data.mongodb.authentication-database: admin
*/

@Service
class MongoTransactionService {
    private final MongoOrderRepository orderRepository;
    private final MongoTemplate mongoTemplate;

    @Transactional  // Requires MongoDB replica set
    public void transferItems(String fromOrderId, String toOrderId,
                              String itemId) {
        MongoOrder from = orderRepository.findById(fromOrderId)
            .orElseThrow();
        MongoOrder to = orderRepository.findById(toOrderId)
            .orElseThrow();

        OrderItem item = from.getItems().stream()
            .filter(i -> i.getProductId().equals(itemId))
            .findFirst().orElseThrow();

        from.getItems().remove(item);
        to.getItems().add(item);

        orderRepository.save(from);
        orderRepository.save(to);
        // Both saves commit or both roll back
    }
}

// === 7. Projections ===
interface OrderSummary {
    String getCustomerName();
    BigDecimal getTotal();
    String getStatus();
}

interface MongoOrderRepository extends MongoRepository<MongoOrder, String> {
    // Projection (only returns specified fields)
    List<OrderSummary> findByStatus(String status);

    // Dynamic projection
    <T> List<T> findByCustomerName(String name, Class<T> projection);
}

// === 8. Testing with Flapdoodle (embedded MongoDB) ===
/*
pom.xml:
<dependency>
    <groupId>de.flapdoodle.embed</groupId>
    <artifactId>de.flapdoodle.embed.mongo</artifactId>
    <scope>test</scope>
</dependency>

Spring Boot auto-configures embedded MongoDB for tests.
*/

/*
@DataMongoTest
class MongoOrderRepositoryTest {
    @Autowired
    private MongoOrderRepository repository;

    @Test
    void shouldSaveAndFind() {
        MongoOrder order = new MongoOrder();
        order.setCustomerName("Alice");
        order.setTotal(new BigDecimal("250"));
        order.setStatus("PENDING");
        order.setItems(List.of(new OrderItem("P1", "Widget", 2,
            new BigDecimal("125"))));
        order.setCreatedAt(Instant.now());

        MongoOrder saved = repository.save(order);
        assertThat(saved.getId()).isNotNull();

        Optional<MongoOrder> found = repository.findById(saved.getId());
        assertThat(found).isPresent();
        assertThat(found.get().getCustomerName()).isEqualTo("Alice");
        assertThat(found.get().getItems()).hasSize(1);
    }

    @Test
    void shouldQueryByEmbeddedField() {
        MongoOrder order = new MongoOrder();
        order.setCustomerName("Bob");
        order.setItems(List.of(new OrderItem("P1", "Widget", 1,
            new BigDecimal("50"))));
        repository.save(order);

        List<MongoOrder> found = repository
            .findByItemsProductId("P1");
        assertThat(found).hasSize(1);
    }

    @Test
    void shouldUseTextSearch() {
        MongoOrder order = new MongoOrder();
        order.setCustomerName("Alice Johnson");
        repository.save(order);

        // Need text index on customerName field
        Page<MongoOrder> results = repository
            .searchByText("Alice", PageRequest.of(0, 10));
        assertThat(results.getContent()).isNotEmpty();
    }
}
*/

// === 9. MongoDB vs JPA comparison ===
/*
Feature              MongoDB (NoSQL)     JPA/Hibernate (SQL)
────────────────────────────────────────────────────────────
Schema              Dynamic, flexible    Fixed, migrations
Relationships       Embedded/references  JOINs
Transactions        Replica set only     Native
Joins               Application level    Database level
Auto-indexing       Manual               Mostly auto
Query language      JSON-based           JPQL/SQL
Aggregation         Pipeline             GROUP BY
ACID                Limited              Full
Scaling             Horizontal (shard)   Vertical (scale up)
Nested objects      Native               @Embedded
Arrays              Native               @ElementCollection
Schema changes      Seamless             Migrations (Flyway)

When to choose MongoDB:
- Document-shaped data (JSON)
- Flexible/evolving schema
- Hierarchical data (nested documents)
- Horizontal scaling needed
- High write throughput

When to choose JPA/PostgreSQL:
- Complex relationships (many-to-many)
- Strict data integrity (ACID)
- Complex reporting (JOINs, aggregation)
- Mature tooling and migrations
- BI/SQL tools compatibility
*/
```

MongoDB is excellent for document-oriented, schema-flexible data with Spring Data MongoDB providing the familiar repository pattern. Embedded documents reduce JOINs. Use MongoTemplate for aggregations and complex queries. Create indexes for all query patterns. Use transactions (replica set required) for multi-document atomicity. Choose MongoDB when your data is document-shaped — not as a replacement for relational databases.


### Q10: How do you use Redis with Spring Boot?

**Answer:** Spring Data Redis provides two access patterns: RedisTemplate (key-value operations) and @Cacheable (annotation-driven caching). Redis is an in-memory data store used for caching, sessions, rate limiting, leaderboards, pub/sub messaging, and distributed locks. It excels at sub-millisecond read/write of simple data structures (strings, hashes, lists, sets, sorted sets).

```java
// === 1. Setup ===
/*
pom.xml:
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
</dependency>

application.yml:
spring:
  data:
    redis:
      host: localhost
      port: 6379
      password: ${REDIS_PASSWORD:}
      timeout: 2000ms
      lettuce:
        pool:
          max-active: 16
          max-idle: 8
          min-idle: 4
          max-wait: -1ms
*/

// === 2. Redis configuration ===
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.*;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import java.time.Duration;

@Configuration
@EnableCaching
class RedisConfig {

    @Bean
    public RedisTemplate<String, Object> redisTemplate(
            RedisConnectionFactory connectionFactory) {
        RedisTemplate<String, Object> template = new RedisTemplate<>();
        template.setConnectionFactory(connectionFactory);

        // Key serializer: String (readable in Redis CLI)
        template.setKeySerializer(new StringRedisSerializer());

        // Value serializer: JSON
        template.setValueSerializer(
            new GenericJackson2JsonRedisSerializer());

        // Hash key/value serializers
        template.setHashKeySerializer(new StringRedisSerializer());
        template.setHashValueSerializer(
            new GenericJackson2JsonRedisSerializer());

        // Default serializer
        template.setDefaultSerializer(
            new GenericJackson2JsonRedisSerializer());

        template.afterPropertiesSet();
        return template;
    }

    // Cache configuration
    @Bean
    public RedisCacheManager cacheManager(
            RedisConnectionFactory connectionFactory) {
        RedisCacheConfiguration defaults = RedisCacheConfiguration
            .defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(10))  // Default TTL
            .disableCachingNullValues()
            .serializeKeysWith(
                RedisSerializationContext.SerializationPair
                    .fromSerializer(new StringRedisSerializer()))
            .serializeValuesWith(
                RedisSerializationContext.SerializationPair
                    .fromSerializer(
                        new GenericJackson2JsonRedisSerializer()));

        Map<String, RedisCacheConfiguration> cacheConfigs =
            new HashMap<>();
        cacheConfigs.put("products",
            RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofHours(1)));
        cacheConfigs.put("orders",
            RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofMinutes(5)));
        cacheConfigs.put("sessions",
            RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofHours(24)));

        return RedisCacheManager.builder(connectionFactory)
            .cacheDefaults(defaults)
            .withInitialCacheConfigurations(cacheConfigs)
            .build();
    }

    // String-focused template for counters and simple values
    @Bean
    public StringRedisTemplate stringRedisTemplate(
            RedisConnectionFactory connectionFactory) {
        return new StringRedisTemplate(connectionFactory);
    }
}

// === 3. Redis operations ===
@Service
class RedisCacheService {
    @Autowired private RedisTemplate<String, Object> redisTemplate;
    @Autowired private StringRedisTemplate stringRedisTemplate;

    // String operations
    public void setString(String key, String value) {
        stringRedisTemplate.opsForValue().set(key, value);
    }

    public String getString(String key) {
        return stringRedisTemplate.opsForValue().get(key);
    }

    public void setStringWithTTL(String key, String value,
                                  long ttlSeconds) {
        stringRedisTemplate.opsForValue()
            .set(key, value, Duration.ofSeconds(ttlSeconds));
    }

    // Object operations (JSON serialized)
    public void setOrder(String key, MongoOrder order) {
        redisTemplate.opsForValue().set(key, order,
            Duration.ofMinutes(30));
    }

    public MongoOrder getOrder(String key) {
        return (MongoOrder) redisTemplate.opsForValue().get(key);
    }

    // Hash operations (for object field access)
    public void setHashField(String key, String field, Object value) {
        redisTemplate.opsForHash().put(key, field, value);
    }

    public Object getHashField(String key, String field) {
        return redisTemplate.opsForHash().get(key, field);
    }

    public Map<Object, Object> getHashAll(String key) {
        return redisTemplate.opsForHash().entries(key);
    }

    // List operations (queue, feed)
    public void pushToList(String key, Object value) {
        redisTemplate.opsForList().rightPush(key, value);
    }

    public Object popFromList(String key) {
        return redisTemplate.opsForList().leftPop(key);
    }

    public List<Object> getListRange(String key, long start, long end) {
        return redisTemplate.opsForList().range(key, start, end);
    }

    // Set operations (unique items)
    public void addToSet(String key, String... values) {
        stringRedisTemplate.opsForSet().add(key, values);
    }

    public Set<String> getSetMembers(String key) {
        return stringRedisTemplate.opsForSet().members(key);
    }

    // Sorted set operations (leaderboards)
    public void addToSortedSet(String key, String member, double score) {
        stringRedisTemplate.opsForZSet().add(key, member, score);
    }

    public Set<String> getTopFromSortedSet(String key, long topN) {
        return stringRedisTemplate.opsForZSet()
            .reverseRange(key, 0, topN - 1);
    }

    // Counter (atomic increment)
    public long increment(String key) {
        return stringRedisTemplate.opsForValue().increment(key);
    }

    public long incrementBy(String key, long delta) {
        return stringRedisTemplate.opsForValue()
            .increment(key, delta);
    }

    // Time-to-live management
    public boolean expire(String key, long ttlSeconds) {
        return redisTemplate.expire(key,
            Duration.ofSeconds(ttlSeconds));
    }

    public Long getTTL(String key) {
        return redisTemplate.getExpire(key);
    }

    // Existence check
    public boolean exists(String key) {
        return Boolean.TRUE.equals(
            redisTemplate.hasKey(key));
    }

    // Delete
    public void delete(String key) {
        redisTemplate.delete(key);
    }
}

// === 4. Spring @Cacheable with Redis ===
@Service
class ProductCachingService {
    private final ProductRepository productRepository;

    @Cacheable(value = "products", key = "#id",
               unless = "#result == null")
    public Product findById(Long id) {
        // Cache miss → query database, store in Redis
        // Cache hit → return from Redis
        return productRepository.findById(id).orElseThrow(
            () -> new RuntimeException("Product not found"));
    }

    @Cacheable(value = "products", key = "'all:' + #page + ':' + #size")
    public List<Product> findAll(int page, int size) {
        return productRepository.findAll(
            PageRequest.of(page, size)).getContent();
    }

    @Cacheable(value = "products", key = "#category",
               unless = "#result.isEmpty()")
    public List<Product> findByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    @CacheEvict(value = "products", key = "#result.id")
    @Transactional
    public Product update(Product product) {
        return productRepository.save(product);
    }

    @CacheEvict(value = "products", allEntries = true)
    @Transactional
    public void refreshCache() {
        // Evict all products from cache
    }

    @Caching(evict = {
        @CacheEvict(value = "products", key = "#id"),
        @CacheEvict(value = "products", key = "'all:*'",
                    allEntries = true)
    })
    @Transactional
    public void delete(Long id) {
        productRepository.deleteById(id);
    }

    @CachePut(value = "products", key = "#result.id")
    @Transactional
    public Product create(Product product) {
        // Always executes and stores result in cache
        return productRepository.save(product);
    }
}

// === 5. Redis pub/sub ===
@Service
class RedisPubSubService {
    @Autowired private RedisTemplate<String, Object> redisTemplate;

    // Publish message
    public void publish(String channel, Object message) {
        redisTemplate.convertAndSend(channel, message);
    }

    // Subscribe (listener)
    // @Component
    @Slf4j
    static class OrderMessageListener
            implements MessageListener {
        @Override
        public void onMessage(Message message, byte[] pattern) {
            String channel = new String(message.getChannel());
            String body = new String(message.getBody());
            log.info("Received from channel {}: {}", channel, body);
        }
    }

    // Configuration for listeners
    @Bean
    public MessageListenerAdapter messageListenerAdapter(
            OrderMessageListener listener) {
        return new MessageListenerAdapter(listener);
    }

    @Bean
    public RedisMessageListenerContainer container(
            RedisConnectionFactory connectionFactory,
            MessageListenerAdapter adapter) {
        RedisMessageListenerContainer container =
            new RedisMessageListenerContainer();
        container.setConnectionFactory(connectionFactory);
        container.addMessageListener(adapter,
            new PatternTopic("orders:*"));
        return container;
    }
}

// === 6. Distributed lock with Redis ===
@Service
class RedisDistributedLock {
    @Autowired private StringRedisTemplate redisTemplate;
    private static final String LOCK_PREFIX = "lock:";

    // Acquire lock (set if not exists + TTL)
    public boolean acquireLock(String lockKey, String requestId,
                                long ttlMillis) {
        return Boolean.TRUE.equals(
            redisTemplate.opsForValue()
                .setIfAbsent(LOCK_PREFIX + lockKey,
                    requestId,
                    Duration.ofMillis(ttlMillis)));
    }

    // Release lock (only if we own it — prevent releasing others' locks)
    public boolean releaseLock(String lockKey, String requestId) {
        String script = """
            if redis.call('get', KEYS[1]) == ARGV[1] then
                return redis.call('del', KEYS[1])
            else
                return 0
            end
            """;
        return Boolean.TRUE.equals(
            redisTemplate.execute(
                new DefaultRedisScript<>(script, Long.class),
                List.of(LOCK_PREFIX + lockKey), requestId));
    }

    // Execute with lock
    public <T> T executeWithLock(String lockKey, long ttlMillis,
                                  Supplier<T> task) {
        String requestId = UUID.randomUUID().toString();
        try {
            if (!acquireLock(lockKey, requestId, ttlMillis)) {
                throw new RuntimeException(
                    "Could not acquire lock: " + lockKey);
            }
            return task.get();
        } finally {
            releaseLock(lockKey, requestId);
        }
    }
}

// === 7. Rate limiting with Redis (sliding window) ===
@Service
class RedisRateLimiter {
    @Autowired private StringRedisTemplate redisTemplate;

    public boolean isAllowed(String clientId, int maxRequests,
                              Duration window) {
        String key = "ratelimit:" + clientId;
        long now = System.currentTimeMillis();
        long windowStart = now - window.toMillis();

        // Remove old entries
        redisTemplate.opsForZSet()
            .removeRangeByScore(key, 0, windowStart);

        // Count current window
        Long count = redisTemplate.opsForZSet().size(key);
        if (count != null && count >= maxRequests) {
            return false;
        }

        // Add current request
        redisTemplate.opsForZSet()
            .add(key, String.valueOf(now), now);

        // Set TTL on key
        redisTemplate.expire(key, window);

        return true;
    }
}

// === 8. Redis cache health ===
@Component
class RedisHealthIndicator {
    @Autowired private RedisTemplate<String, Object> redisTemplate;

    @Scheduled(fixedRate = 30_000)
    public void checkRedisHealth() {
        try {
            String result = redisTemplate
                .getConnectionFactory()
                .getConnection()
                .ping();
            log.debug("Redis health: {}", result);
        } catch (Exception e) {
            log.error("Redis health check failed: {}", e.getMessage());
            // Fallback to database
        }
    }
}

// === 9. Testing with Redis (embedded Redis) ===
/*
@TestRedis (test annotation)
class RedisCacheTest {
    @Autowired private RedisTemplate<String, Object> redisTemplate;
    @Autowired private ProductCachingService cachingService;

    @Test
    void testSetAndGet() {
        String key = "test:" + UUID.randomUUID();
        redisTemplate.opsForValue().set(key, "value",
            Duration.ofMinutes(5));

        Object value = redisTemplate.opsForValue().get(key);
        assertThat(value).isEqualTo("value");
    }

    @Test
    void testCacheable() {
        // First call — cache miss
        Product p1 = cachingService.findById(1L);

        // Second call — cache hit (no DB query)
        Product p2 = cachingService.findById(1L);

        assertThat(p1.getId()).isEqualTo(p2.getId());
    }

    @Test
    void testTTL() {
        String key = "ttltest:" + UUID.randomUUID();
        redisTemplate.opsForValue().set(key, "temp",
            Duration.ofSeconds(1));

        assertThat(redisTemplate.getExpire(key))
            .isGreaterThan(0);

        Thread.sleep(1500);
        assertThat(redisTemplate.hasKey(key)).isFalse();
    }
}
*/
```

Redis is the go-to solution for caching, distributed locks, rate limiting, and real-time data. Use @Cacheable for simple caching, RedisTemplate for structured operations, and StringRedisTemplate for counters. Always set TTL to prevent memory leaks. Use Redis pub/sub for async notifications and Redlock for distributed locks in critical sections. Never store sensitive data in Redis without encryption.


### Q11: Explain SQL JOINs with examples. What is the difference between INNER, LEFT, RIGHT, FULL, CROSS, and SELF JOIN?

**Answer:** JOINs combine rows from two or more tables based on a related column. INNER JOIN returns matching rows only. LEFT JOIN returns all left-table rows plus matches. RIGHT JOIN returns all right-table rows plus matches. FULL JOIN returns all rows from both tables. CROSS JOIN produces a Cartesian product. SELF JOIN joins a table to itself. Each serves a different query pattern.

```java
// === 1. Schema for examples ===
/*
Tables:
  customers: id, name, email
  orders: id, customer_id, total, status, created_at

Sample data:
  customers: {1, Alice, alice@ex.com}, {2, Bob, bob@ex.com}, {3, Charlie, charlie@ex.com}
  orders: {1, 1, 100, SHIPPED, ...}, {2, 1, 50, PENDING, ...}, {3, 3, 200, PENDING, ...}
*/

// === 2. INNER JOIN (default JOIN) ===
/*
Returns: Only rows where the join condition matches in BOTH tables
If no match → row excluded (even from "left" side)
Cardinality: 0 to N matches per left row
Use: "I need customers AND their orders"
*/
@Service
class JoinExampleService {
    private final JdbcTemplate jdbc;

    @Transactional(readOnly = true)
    public void demonstrateJoins() {
        // INNER JOIN — only customers with orders
        List<Map<String, Object>> innerJoin = jdbc.queryForList("""
            SELECT c.name, o.id AS order_id, o.total, o.status
            FROM customers c
            INNER JOIN orders o ON c.id = o.customer_id
            """);
        // Result: {Alice, 1, 100, SHIPPED}, {Alice, 2, 50, PENDING}, {Charlie, 3, 200, PENDING}
        // Bob has no orders → excluded

        // LEFT JOIN — all customers, with or without orders
        List<Map<String, Object>> leftJoin = jdbc.queryForList("""
            SELECT c.name, o.id AS order_id, o.total, o.status
            FROM customers c
            LEFT JOIN orders o ON c.id = o.customer_id
            """);
        // Result: {Alice, 1, 100, SHIPPED}, {Alice, 2, 50, PENDING},
        //         {Bob, null, null, null}, {Charlie, 3, 200, PENDING}

        // RIGHT JOIN — all orders, with or without customer
        List<Map<String, Object>> rightJoin = jdbc.queryForList("""
            SELECT c.name, o.id AS order_id, o.total, o.status
            FROM customers c
            RIGHT JOIN orders o ON c.id = o.customer_id
            """);
        // Same as INNER JOIN here (all orders have customers)
        // Useful when orders might reference deleted customers

        // FULL JOIN — all rows from both sides
        List<Map<String, Object>> fullJoin = jdbc.queryForList("""
            SELECT c.name, o.id AS order_id, o.total, o.status
            FROM customers c
            FULL JOIN orders o ON c.id = o.customer_id
            """);
        // All customers + all orders, with nulls where no match

        // CROSS JOIN — Cartesian product
        List<Map<String, Object>> crossJoin = jdbc.queryForList("""
            SELECT c.name, o.status
            FROM customers c
            CROSS JOIN orders o
            """);
        // 3 customers × 3 orders = 9 rows
        // {Alice, SHIPPED}, {Alice, PENDING}, {Alice, PENDING}
        // {Bob, SHIPPED}, {Bob, PENDING}, {Bob, PENDING}
        // {Charlie, SHIPPED}, {Charlie, PENDING}, {Charlie, PENDING}
    }

    // SELF JOIN — join table to itself (e.g., employee hierarchy)
    @Transactional(readOnly = true)
    public void selfJoinExample() {
        /*
        employees:
        id | name     | manager_id
        1  | Alice    | null
        2  | Bob      | 1
        3  | Charlie  | 1
        4  | Diana    | 2
        */
        List<Map<String, Object>> employeeTree = jdbc.queryForList("""
            SELECT e.name AS employee,
                   m.name AS manager
            FROM employees e
            LEFT JOIN employees m ON e.manager_id = m.id
            ORDER BY m.name NULLS FIRST
            """);
        // Result:
        // {Alice, null}    ← Alice is CEO (no manager)
        // {Bob, Alice}     ← Bob reports to Alice
        // {Charlie, Alice} ← Charlie reports to Alice
        // {Diana, Bob}     ← Diana reports to Bob
    }
}

// === 3. JOIN variants in JPA ===
@Entity
@Table(name = "customers")
class JoinCustomer {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;

    @OneToMany(mappedBy = "customer")
    private List<JoinOrder> orders;
}

@Entity
@Table(name = "orders")
class JoinOrder {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private BigDecimal total;
    private String status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private JoinCustomer customer;
}

@Repository
interface JoinCustomerRepository extends JpaRepository<JoinCustomer, Long> {

    // INNER JOIN — customers with orders
    @Query("SELECT DISTINCT c FROM JoinCustomer c JOIN c.orders o")
    List<JoinCustomer> findCustomersWithOrders();

    // LEFT JOIN — all customers even without orders
    @Query("SELECT c FROM JoinCustomer c LEFT JOIN c.orders o")
    List<JoinCustomer> findAllCustomersWithOrders();

    // JOIN FETCH — eager load orders
    @Query("SELECT DISTINCT c FROM JoinCustomer c " +
           "LEFT JOIN FETCH c.orders WHERE c.id = :id")
    Optional<JoinCustomer> findByIdWithOrders(@Param("id") Long id);

    // Multiple JOINs
    @Query("SELECT DISTINCT o FROM JoinOrder o " +
           "JOIN FETCH o.customer c " +
           "LEFT JOIN FETCH o.items")
    List<JoinOrder> findAllWithDetails();
}

// === 4. Semi-join and anti-join patterns ===
/*
Semi-join: EXISTS (rows from A that have match in B)
*/
@Query("SELECT c FROM JoinCustomer c WHERE EXISTS " +
       "(SELECT 1 FROM JoinOrder o WHERE o.customer = c)")
List<JoinCustomer> customersWithOrdersSemiJoin();

/*
Anti-join: NOT EXISTS (rows from A that have NO match in B)
*/
@Query("SELECT c FROM JoinCustomer c WHERE NOT EXISTS " +
       "(SELECT 1 FROM JoinOrder o WHERE o.customer = c)")
List<JoinCustomer> customersWithoutOrders();

// === 5. JOIN performance considerations ===
/*
1. Always join on indexed columns (foreign keys)
2. Prefer INNER JOIN over LEFT JOIN when possible
3. Use EXISTS/NOT EXISTS over LEFT JOIN ... IS NULL for anti-joins
4. Multiple JOINs create large intermediate results — filter early
5. JOIN FETCH in JPA avoids N+1 but causes Cartesian products with collections
6. Use DISTINCT when JOIN on collections produces duplicates

// EXPLAIN output analysis:
EXPLAIN (ANALYZE, BUFFERS)
SELECT c.name, o.total
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE c.id = 1;

// Look for:
// Nested Loop: Good for small result sets
// Hash Join: Good for large, unindexed joins
// Merge Join: Good for sorted data
// Seq Scan on inner table: Missing index warning
*/

// === 6. JOIN types comparison ===
/*
Join Type      Returns                          Common Use
──────────────────────────────────────────────────────────
INNER JOIN     Only matching rows               "Customers with orders"
LEFT JOIN      All left + matches               "All customers, show orders if any"
RIGHT JOIN     All right + matches              "All orders, show customers if any"
FULL JOIN      All rows from both                "Complete audit trail"
CROSS JOIN     Every pair (Cartesian)            "Generate combinations"
SELF JOIN      Table matched to itself           "Employee hierarchy"

// Row count examples (3 customers, 3 orders):
// INNER: 2 rows (Alice + Charlie)
// LEFT: 3 rows (Alice + Bob + Charlie)
// RIGHT: 3 rows (same as INNER here)
// FULL: 3 rows
// CROSS: 9 rows (3 × 3)
*/
```

JOIN types control row inclusion. INNER = only matches. LEFT = all from left. RIGHT = all from right. FULL = all rows. CROSS = Cartesian product. SELF = table to itself. Always join on indexed columns. Use EXISTS for semi-joins and NOT EXISTS for anti-joins. In JPA, use JOIN FETCH to eagerly load relationships and prevent N+1 queries. Verify with EXPLAIN ANALYZE.


### Q12: How do you implement Spring Data JPA auditing?

**Answer:** Spring Data JPA auditing automatically populates created-by, created-date, last-modified-by, and last-modified-date fields on entities. Enable with @EnableJpaAuditing and annotate entity fields with @CreatedDate, @LastModifiedDate, @CreatedBy, @LastModifiedBy. The auditor-aware resolves the current user (from Spring Security or a custom provider). No manual field setting needed.

```java
// === 1. Enable auditing ===
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.context.annotation.Bean;
import java.util.Optional;

@Configuration
@EnableJpaAuditing  // Enables auditing for all entities
class JpaAuditingConfig {

    @Bean
    public AuditorAware<String> auditorAware() {
        // Returns the current user from Spring Security
        return () -> {
            Authentication auth = SecurityContextHolder
                .getContext().getAuthentication();
            if (auth == null || !auth.isAuthenticated()) {
                return Optional.of("SYSTEM");
            }
            return Optional.of(auth.getName());
        };
    }
}

// === 2. Base entity with auditing fields ===
import org.springframework.data.annotation.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import jakarta.persistence.*;
import java.time.Instant;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
abstract class AuditableEntity {

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    @CreatedBy
    @Column(name = "created_by", nullable = false, updatable = false,
            length = 100)
    private String createdBy;

    @LastModifiedBy
    @Column(name = "updated_by", nullable = false, length = 100)
    private String updatedBy;

    public Instant getCreatedAt() { return createdAt; }
    public Instant getUpdatedAt() { return updatedAt; }
    public String getCreatedBy() { return createdBy; }
    public String getUpdatedBy() { return updatedBy; }

    // Protected setters — not for public use
    protected void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
    protected void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }
}

// === 3. Entity extending auditable base ===
@Entity
@Table(name = "orders")
class AuditableOrder extends AuditableEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String customerName;

    @Column(nullable = false)
    private BigDecimal total;

    @Column(nullable = false)
    private String status;

    // createdAt, updatedAt, createdBy, updatedBy are inherited
    // and auto-populated by auditing
}

// === 4. Alternative: Auditing annotations on entity directly ===
@Entity
@Table(name = "products")
@EntityListeners(AuditingEntityListener.class)
class Product {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private BigDecimal price;

    @CreatedDate
    @Column(updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    private Instant updatedAt;

    @CreatedBy
    @Column(updatable = false, length = 100)
    private String createdBy;

    @LastModifiedBy
    @Column(length = 100)
    private String updatedBy;

    // getters/setters...
}

// === 5. Custom auditor provider (non-Spring Security) ===
@Component
class CustomAuditorAware implements AuditorAware<String> {
    // Use a request-scoped bean or ThreadLocal
    private static final ThreadLocal<String> currentAuditor =
        new ThreadLocal<>();

    public static void setCurrentUser(String user) {
        currentAuditor.set(user);
    }

    public static void clear() {
        currentAuditor.remove();
    }

    @Override
    public Optional<String> getCurrentAuditor() {
        return Optional.ofNullable(
            currentAuditor.get()).or(() -> Optional.of("SYSTEM"));
    }
}

// Usage in batch job:
@Service
class BatchAuditingService {

    @Transactional
    public void batchCreateOrders(List<CreateOrderRequest> requests) {
        CustomAuditorAware.setCurrentUser("BATCH_JOB");
        try {
            requests.forEach(req -> orderRepository.save(createOrder(req)));
        } finally {
            CustomAuditorAware.clear();
        }
    }
}

// === 6. System-time only auditing (no user tracking) ===
@Configuration
@EnableJpaAuditing(dateTimeProviderRef = "utcDateTimeProvider")
class SimpleAuditingConfig {

    @Bean
    public DateTimeProvider utcDateTimeProvider() {
        return () -> Optional.of(Instant.now());
    }
}

// Entity with timestamps only:
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
abstract class TimestampedEntity {
    @CreatedDate
    @Column(updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    private Instant updatedAt;

    // getters...
}

// === 7. Audit log table ===
/*
For full audit trail (all changes), create an audit log table:
V8__create_audit_log.sql

CREATE TABLE audit_log (
    id BIGSERIAL PRIMARY KEY,
    table_name VARCHAR(100) NOT NULL,
    record_id BIGINT NOT NULL,
    action VARCHAR(10) NOT NULL, -- CREATE, UPDATE, DELETE
    old_values JSONB,
    new_values JSONB,
    changed_by VARCHAR(100) NOT NULL,
    changed_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_audit_log_table_record ON audit_log(table_name, record_id);
CREATE INDEX idx_audit_log_changed_at ON audit_log(changed_at);
*/

// === 8. Hibernate Envers (full audit history) ===
/*
For full entity versioning (every change is tracked):

pom.xml:
<dependency>
    <groupId>org.hibernate.orm</groupId>
    <artifactId>hibernate-envers</artifactId>
</dependency>

@Entity
@Audited  // Track all changes to this entity
class AuditedOrder {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;
    private BigDecimal total;
    private String status;

    @NotAudited  // Skip sensitive/noisy fields
    private String internalNotes;
}

// Hibernate Envers creates:
// orders_AUD table with REV, REVTYPE, and all fields
// revinfo table with revision timestamps

// Query audit history:
@Service
class AuditQueryService {
    @PersistenceContext private EntityManager entityManager;

    public List<Object[]> getOrderHistory(Long orderId) {
        AuditReader reader = AuditReaderFactory.get(entityManager);
        return reader.createQuery()
            .forRevisionsOfEntity(AuditedOrder.class, false, true)
            .add(AuditEntity.id().eq(orderId))
            .getResultList();
        // Returns: [order, revision_metadata, revision_type]
    }

    public AuditedOrder getOrderAtRevision(Long orderId,
                                             Number revision) {
        AuditReader reader = AuditReaderFactory.get(entityManager);
        return reader.find(AuditedOrder.class, orderId, revision);
    }

    public List<Number> getRevisions(Long orderId) {
        AuditReader reader = AuditReaderFactory.get(entityManager);
        return reader.getRevisions(AuditedOrder.class, orderId);
    }
}
*/

// === 9. Testing auditing ===
/*
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Import(JpaAuditingConfig.class)
class AuditingTest {
    @Autowired private OrderRepository orderRepository;
    @Autowired private TestEntityManager entityManager;

    @Test
    void testCreatedDateIsSet() {
        AuditableOrder order = new AuditableOrder();
        order.setCustomerName("Alice");
        order.setTotal(new BigDecimal("250"));
        order.setStatus("PENDING");

        AuditableOrder saved = orderRepository.save(order);

        assertThat(saved.getCreatedAt()).isNotNull();
        assertThat(saved.getUpdatedAt()).isNotNull();
        assertThat(saved.getCreatedBy()).isNotNull();
        assertThat(saved.getUpdatedBy()).isNotNull();
    }

    @Test
    void testUpdatedDateChanges() {
        AuditableOrder order = orderRepository.save(
            createOrder("Alice", BigDecimal.valueOf(250)));

        Instant originalUpdatedAt = order.getUpdatedAt();

        // Wait and update
        order.setStatus("SHIPPED");
        orderRepository.save(order);
        entityManager.flush();

        AuditableOrder updated = orderRepository.findById(order.getId())
            .orElseThrow();

        assertThat(updated.getUpdatedAt())
            .isAfter(originalUpdatedAt);
        assertThat(updated.getCreatedAt())
            .isEqualTo(order.getCreatedAt());  // CreatedAt unchanged
    }

    @Test
    void testCreatedByReflectsUser() {
        Authentication auth = Mockito.mock(Authentication.class);
        when(auth.getName()).thenReturn("TEST_USER");
        when(auth.isAuthenticated()).thenReturn(true);
        SecurityContextHolder.getContext().setAuthentication(auth);

        AuditableOrder order = orderRepository.save(
            createOrder("Bob", BigDecimal.valueOf(100)));

        assertThat(order.getCreatedBy()).isEqualTo("TEST_USER");
    }
}
*/

// === 10. Schema with audit columns ===
/*
V1__initial_schema.sql:
CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by VARCHAR(100) NOT NULL DEFAULT 'SYSTEM',
    updated_by VARCHAR(100) NOT NULL DEFAULT 'SYSTEM',
    version INTEGER NOT NULL DEFAULT 0
);
*/
```

Spring Data JPA auditing eliminates manual timestamp and user tracking. Enable with @EnableJpaAuditing + AuditorAware bean. Extend a base AuditableEntity or annotate fields individually. @CreatedDate and @CreatedBy are immutable (updatable = false). @LastModifiedDate and @LastModifiedBy update on every change. For full audit history, use Hibernate Envers. Always test that auditing works with your security context.


### Q13: How do SQL window functions work? Show ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD, and aggregate window functions.

**Answer:** Window functions perform calculations across a set of rows related to the current row, without collapsing them into a single output row. Unlike GROUP BY (which reduces rows), window functions preserve all rows while computing values over a window (PARTITION BY) in a specified ORDER. They're essential for running totals, ranking, moving averages, and finding differences between adjacent rows.

```java
// === 1. Core concepts ===
/*
Every window function has:
  PARTITION BY: Groups rows (optional — whole result set if omitted)
  ORDER BY:     Defines order within each partition
  Frame:        ROWS/RANGE between ... and ...
                Default: RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW

Syntax:
  function() OVER (
    [PARTITION BY column]
    [ORDER BY column]
    [frame_clause]
  )
*/

// === 2. Ranking functions ===
@Service
class RankingFunctionsService {
    private final JdbcTemplate jdbc;

    @Transactional(readOnly = true)
    public void rankingExamples() {
        /*
        sales:
        id | salesperson | region    | amount | sale_date
        1  | Alice       | North     | 100    | 2024-01-01
        2  | Bob         | North     | 200    | 2024-01-02
        3  | Alice       | North     | 150    | 2024-01-03
        4  | Charlie     | South     | 300    | 2024-01-01
        5  | Diana       | South     | 200    | 2024-01-02
        6  | Charlie     | South     | 100    | 2024-01-03
        7  | Bob         | North     | 200    | 2024-01-04
        */

        // ROW_NUMBER: Unique sequential number (1, 2, 3...) per partition
        List<Map<String, Object>> rowNum = jdbc.queryForList("""
            SELECT salesperson, amount,
                   ROW_NUMBER() OVER (ORDER BY amount DESC) AS row_num,
                   ROW_NUMBER() OVER (PARTITION BY region ORDER BY amount DESC) AS region_rank
            FROM sales
            """);
        // Row number across all: Alice(100)=7, Bob(200)=4, Charlie(300)=1
        // Region rank (North): Bob(200)=1, Alice(100)=3

        // RANK: Same values get same rank, next rank skips
        List<Map<String, Object>> rankResult = jdbc.queryForList("""
            SELECT salesperson, amount,
                   RANK() OVER (ORDER BY amount DESC) AS rank
            FROM sales
            """);
        // 300→1, 200→2, 200→2, 150→4, 100→5, 100→5, 100→5
        // Notice: rank 3 is skipped

        // DENSE_RANK: Same values get same rank, no gaps
        List<Map<String, Object>> denseRank = jdbc.queryForList("""
            SELECT salesperson, amount,
                   DENSE_RANK() OVER (ORDER BY amount DESC) AS dense_rank
            FROM sales
            """);
        // 300→1, 200→2, 200→2, 150→3, 100→4, 100→4, 100→4
        // No gaps — consecutive ranking

        // NTILE: Divides rows into N buckets
        List<Map<String, Object>> ntile = jdbc.queryForList("""
            SELECT salesperson, amount,
                   NTILE(4) OVER (ORDER BY amount DESC) AS quartile
            FROM sales
            """);
        // 7 rows, 4 buckets → 2, 2, 2, 1 rows per bucket
    }

    // Practical: Top-N per group
    @Transactional(readOnly = true)
    public List<Map<String, Object>> topSalespersonPerRegion() {
        return jdbc.queryForList("""
            SELECT salesperson, region, amount, rank
            FROM (
                SELECT salesperson, region, amount,
                       ROW_NUMBER() OVER (
                           PARTITION BY region ORDER BY amount DESC
                       ) AS rank
                FROM sales
            ) ranked
            WHERE rank <= 3
            ORDER BY region, rank
            """);
        // Top 3 sales by region (each region has its own rankings)
    }
}

// === 3. Value functions: LAG and LEAD ===
@Service
class LagLeadExampleService {
    private final JdbcTemplate jdbc;

    @Transactional(readOnly = true)
    public void lagLeadExamples() {
        /*
        LAG(column, offset, default): Access previous row's value
        LEAD(column, offset, default): Access next row's value
        */

        // LAG: Compare each sale to previous sale (same salesperson)
        List<Map<String, Object>> lagResult = jdbc.queryForList("""
            SELECT salesperson, sale_date, amount,
                   LAG(amount) OVER (
                       PARTITION BY salesperson ORDER BY sale_date
                   ) AS prev_amount,
                   amount - LAG(amount, 1, 0) OVER (
                       PARTITION BY salesperson ORDER BY sale_date
                   ) AS growth
            FROM sales
            """);
        // Alice: first row prev=null, growth=100-0=100
        // Alice: second row prev=100, growth=150-100=50

        // LEAD: Compare each sale to next sale
        List<Map<String, Object>> leadResult = jdbc.queryForList("""
            SELECT salesperson, sale_date, amount,
                   LEAD(amount, 1) OVER (
                       PARTITION BY salesperson ORDER BY sale_date
                   ) AS next_amount
            FROM sales
            """);
        // Alice first row: amount=100, next=150
        // Alice last row: amount=150, next=null

        // Practical: Find sales decline
        List<Map<String, Object>> declineResult = jdbc.queryForList("""
            SELECT salesperson, sale_date, amount,
                   LAG(amount) OVER w AS prev_amount
            FROM sales
            WINDOW w AS (PARTITION BY salesperson ORDER BY sale_date)
            QUALIFY prev_amount IS NOT NULL AND amount < prev_amount
            """);
        // Sales where amount decreased from previous sale
    }

    // 3-row moving average
    @Transactional(readOnly = true)
    public void movingAverage() {
        List<Map<String, Object>> movingAvg = jdbc.queryForList("""
            SELECT sale_date, amount,
                   AVG(amount) OVER (
                       ORDER BY sale_date
                       ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
                   ) AS moving_avg_3
            FROM sales
            WHERE salesperson = 'Alice'
            """);
        // date=1: avg(100)=100
        // date=2: avg(100, 200)=150
        // date=3: avg(100, 200, 150)=150
        // date=4: avg(200, 150, 300)=217
    }
}

// === 4. Aggregate window functions ===
@Service
class AggregateWindowService {
    private final JdbcTemplate jdbc;

    @Transactional(readOnly = true)
    public void aggregateWindowExamples() {
        // Running total (SUM over ordered rows)
        List<Map<String, Object>> runningTotal = jdbc.queryForList("""
            SELECT sale_date, salesperson, amount,
                   SUM(amount) OVER (
                       ORDER BY sale_date
                       ROWS UNBOUNDED PRECEDING
                   ) AS running_total
            FROM sales
            """);

        // Running total by region
        List<Map<String, Object>> regionRunning = jdbc.queryForList("""
            SELECT region, sale_date, amount,
                   SUM(amount) OVER (
                       PARTITION BY region
                       ORDER BY sale_date
                   ) AS region_running
            FROM sales
            """);

        // Moving average (3 days)
        List<Map<String, Object>> movingAvg = jdbc.queryForList("""
            SELECT sale_date, amount,
                   AVG(amount) OVER (
                       ORDER BY sale_date
                       ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING
                   ) AS centered_avg,
                   AVG(amount) OVER (
                       ORDER BY sale_date
                       ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
                   ) AS trailing_avg
            FROM sales
            """);

        // Group-level comparison (total vs percentage of total)
        List<Map<String, Object>> percentage = jdbc.queryForList("""
            SELECT salesperson, amount,
                   SUM(amount) OVER () AS grand_total,
                   ROUND(amount * 100.0 / SUM(amount) OVER (), 2) AS pct_of_total
            FROM sales
            """);
        // Each row shows its contribution to grand total

        // Min/Max per group
        List<Map<String, Object>> minMax = jdbc.queryForList("""
            SELECT salesperson, sale_date, amount,
                   MIN(amount) OVER (PARTITION BY salesperson) AS min_sale,
                   MAX(amount) OVER (PARTITION BY salesperson) AS max_sale
            FROM sales
            """);

        // FIRST_VALUE / LAST_VALUE
        List<Map<String, Object>> firstLast = jdbc.queryForList("""
            SELECT salesperson, sale_date, amount,
                   FIRST_VALUE(amount) OVER (
                       PARTITION BY salesperson ORDER BY sale_date
                   ) AS first_sale,
                   LAST_VALUE(amount) OVER (
                       PARTITION BY salesperson ORDER BY sale_date
                       RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
                   ) AS last_sale
            FROM sales
            """);
    }
}

// === 5. Window functions in JPA ===
@Repository
interface SaleRepository extends JpaRepository<Sale, Long> {

    @Query(value = """
        SELECT s.*,
               ROW_NUMBER() OVER (ORDER BY s.amount DESC) AS rank,
               AVG(amount) OVER (PARTITION BY region) AS region_avg
        FROM sales s
        WHERE s.sale_date >= :since
        """, nativeQuery = true)
    List<Object[]> findRankedSales(
        @Param("since") LocalDate since);
}

// DTO for window function results
record SaleRanking(
    Long id,
    String salesperson,
    BigDecimal amount,
    int rank,
    BigDecimal regionAvg
) {}

// === 6. Window frame types ===
/*
Frame          Rows Included
─────────────────────────────────────
ROWS           Physical row count (precise)
RANGE          Logical (same ORDER BY values → same frame)
GROUPS         Groups of peers (same ORDER BY values)

Frame boundaries:
  UNBOUNDED PRECEDING:   All rows before current
  N PRECEDING:           N rows before current
  CURRENT ROW:           Current row
  N FOLLOWING:           N rows after current
  UNBOUNDED FOLLOWING:   All rows after current

Default: RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW

// Use ROWS for precise windowing (stock prices, sensor data)
// Use RANGE for date-based windows (financial quarters)
// Use GROUPS for categorical ordering
*/

// === 7. Common window function patterns ===
/*
1. Remove duplicates (keep first occurrence per group):
   DELETE FROM sales
   WHERE id IN (
       SELECT id FROM (
           SELECT id,
                  ROW_NUMBER() OVER (
                      PARTITION BY salesperson, amount, sale_date
                      ORDER BY id
                  ) AS rn
           FROM sales
       ) dup
       WHERE rn > 1
   );

2. Year-over-year comparison:
   SELECT sale_date, amount,
          LAG(amount, 365) OVER (ORDER BY sale_date) AS last_year
   FROM sales;

3. Cumulative distribution:
   SELECT amount,
          CUME_DIST() OVER (ORDER BY amount) AS percentile
   FROM sales;

4. Gap detection (missing dates):
   SELECT sale_date,
          LEAD(sale_date) OVER (ORDER BY sale_date) AS next_date,
          LEAD(sale_date) OVER (ORDER BY sale_date) - sale_date AS gap_days
   FROM sales;

5. Median calculation:
   SELECT AVG(amount) AS median
   FROM (
       SELECT amount,
              ROW_NUMBER() OVER (ORDER BY amount) AS rn,
              COUNT(*) OVER () AS total
       FROM sales
   ) calc
   WHERE rn BETWEEN total/2 AND total/2 + 1;
*/

// === 8. Performance ===
/*
1. Window functions scan the partition once — efficient for large datasets
2. The ORDER BY within OVER can use indexes
3. Materialize early (filter first, window later)
4. Prefer ROWS over RANGE for large frames (RANGE needs peer tracking)
5. Nested window functions not allowed — use CTE or subquery

// EXPLAIN shows:
// WindowAgg (the window function node)
// Sort (if ORDER BY doesn't match index)
// -> Seq Scan (or Index Scan)
*/
```

Window functions are invaluable for analytical queries: ROW_NUMBER for unique ranking, RANK and DENSE_RANK for tied rankings (with/without gaps), LAG/LEAD for comparing adjacent rows, and aggregate functions (SUM, AVG) OVER for running totals and moving averages. They preserve all rows while computing group-level metrics. Key choices: ROWS for physical frames, RANGE for logical frames, and proper PARTITION BY for per-group calculations.


### Q14: What are ACID and BASE? Explain MVCC and snapshot isolation.

**Answer:** ACID (Atomicity, Consistency, Isolation, Durability) guarantees reliable transaction processing in relational databases. BASE (Basically Available, Soft state, Eventually consistent) is the NoSQL trade-off — prioritizing availability over consistency. MVCC (Multi-Version Concurrency Control) is the mechanism behind snapshot isolation — each transaction sees a consistent snapshot of the database at its start time, enabling concurrent reads without blocking writes.

```java
// === 1. ACID breakdown ===
/*
Atomicity:    All or nothing — transaction commits fully or fully rolls back
Consistency:  Data is valid before and after — constraints, triggers, cascades
Isolation:    Concurrent transactions don't interfere — controlled via isolation level
Durability:   Committed data survives crashes — WAL (Write-Ahead Log) to disk

// Spring ensures ACID via:
// @Transactional → Atomicity (rollback)
// Constraints/validations → Consistency
// Isolation levels → Isolation
// Database commit → Durability
*/

// === 2. BASE breakdown ===
/*
Basically Available:  System remains available even during failures (partition tolerance)
Soft state:          State may change without input (eventual consistency)
Eventually consistent:  Given enough time, all replicas converge

BASE characteristics:
  - Weaker consistency guarantees
  - Higher availability and partition tolerance
  - Better horizontal scalability
  - Optimistic replication

NoSQL categories by BASE compliance:
  - Document stores (MongoDB): Tunable consistency
  - Key-value stores (Redis): Strong for single-key, eventual for replication
  - Wide-column stores (Cassandra): Tunable consistency (AP system)
  - Column-family (HBase): Strong consistency (CP system)
*/

// === 3. Isolation problems (read phenomena) ===
@Service
class ReadPhenomenaService {
    private final JdbcTemplate jdbc;

    /*
    Problem        Description
    ──────────────────────────────────────────────────
    Dirty Read     Read uncommitted changes from another
                   transaction. If the other rolls back,
                   you read data that never existed.

    Non-repeatable Read  Same query, same transaction, two
                   different results (another transaction
                   UPDATED and committed between reads).

    Phantom Read   Same query, same transaction, different
                   rows appear/disappear (another transaction
                   INSERTED or DELETED between reads).

    Lost Update    Two transactions read the same value, both
                   modify it, last commit overwrites the first.
    */

    @Transactional(isolation = Isolation.READ_COMMITTED)
    public void demonstrateReadPhenomena() {
        // Dirty Read (only possible at READ_UNCOMMITTED):
        // Transaction A: UPDATE products SET stock = 0 WHERE id = 1;
        // Transaction B (at READ_UNCOMMITTED): SELECT stock FROM products WHERE id = 1;
        //   → B reads 0 (uncommitted)
        // Transaction A: ROLLBACK;
        //   → B has read phantom data (stock is still old value)

        // Non-repeatable Read (possible at READ_COMMITTED):
        // Transaction A (at READ_COMMITTED):
        //   SELECT stock FROM products WHERE id = 1; → 10
        // Transaction B: UPDATE products SET stock = 5 WHERE id = 1; COMMIT;
        // Transaction A:
        //   SELECT stock FROM products WHERE id = 1; → 5 (different!)
        //   → Non-repeatable read within same transaction

        // Phantom Read (possible at REPEATABLE READ in some databases):
        // Transaction A:
        //   SELECT * FROM orders WHERE total > 100; → 3 rows
        // Transaction B: INSERT INTO orders(...total=200); COMMIT;
        // Transaction A:
        //   SELECT * FROM orders WHERE total > 100; → 4 rows (phantom!)
    }
}

// === 4. MVCC (Multi-Version Concurrency Control) ===
/*
Core idea: Each transaction sees a snapshot of data as of a point in time.
Modifications create new versions of rows — old versions preserved for
other transactions still using the old snapshot.

How MVCC works:
  1. Every transaction gets a transaction ID (XID) at start
  2. Each row has xmin (creating XID) and xmax (deleting/updating XID)
  3. INSERT: New row with xmin = current XID
  4. DELETE: Row gets xmax = current XID (not physically removed yet)
  5. UPDATE: Actually DELETE old row + INSERT new row
  6. SELECT: Reads only rows visible to its snapshot

Visibility rules:
  A row version is visible IF:
    - xmin is committed AND
    - xmin is before transaction's snapshot AND
    - xmax is not set OR xmax is not committed OR xmax is after snapshot

// PostgreSQL MVCC implementation:
// Dead tuples (old row versions) are cleaned by VACUUM
// No read locks needed — readers never block writers
// Writers never block readers
*/

// === 5. Snapshot isolation (PostgreSQL) ===
/*
PostgreSQL implements REPEATABLE READ via snapshot isolation:

  Transaction A starts (gets snapshot S1)
  Transaction B starts (gets snapshot S2)
  A: SELECT * FROM products; -- sees snapshot S1
  B: UPDATE products SET price = 20 WHERE id = 1; -- creates new version
  B: COMMIT;
  A: SELECT * FROM products; -- still sees snapshot S1 (old price)
  A: UPDATE products SET price = 25 WHERE id = 1; -- can't — serialization failure!
     → "could not serialize access due to concurrent update"

Snapshot isolation prevents:
  √ Dirty reads
  √ Non-repeatable reads
  √ Phantom reads

Snapshot isolation allows:
  - Write skew (two concurrent transactions updating different but related rows)

// Write skew example:
// Shared account: Alice has 100, Bob has 0, sum must be >= 0
// Transaction A: If Alice's balance + Bob's balance >= 100, withdraw 100 from Alice
// Transaction B: If Alice's balance + Bob's balance >= 50, give 50 to Bob
// Both check sum (100+0=100, 100+0=100)
// Both proceed — now Alice has 0, Bob has 50, sum=50 < invoice
// A committed one, B committed one — but based on stale read of the other's balance
*/

// === 6. Isolation level comparison with MVCC ===
/*
Level               Dirty  Non-Repeat  Phantom  Implementation
                    Read   Read
──────────────────────────────────────────────────────────────
READ_UNCOMMITTED    Yes    Yes         Yes      No MVCC (or bypasses it)
READ_COMMITTED      No     Yes         Yes      New snapshot per statement
REPEATABLE_READ     No     No          No*      Single snapshot for transaction
SERIALIZABLE        No     No          No       Serializable Snapshot Isolation (SSI)

* PostgreSQL prevents phantoms at REPEATABLE_READ
  MySQL/InnoDB prevents phantoms via gap locks at REPEATABLE_READ

// READ_COMMITTED (default for most databases):
//   Each query gets a new snapshot
//   Most common — balances consistency and performance

// REPEATABLE_READ:
//   Single snapshot for the entire transaction
//   Prevents non-repeatable reads and phantoms
//   May get serialization failures on conflicting updates
*/

// === 7. Configuring isolation for ACID compliance ===
@Service
@Transactional
class AcidComplianceService {

    // For strict financial accuracy — SERIALIZABLE
    @Transactional(isolation = Isolation.SERIALIZABLE)
    public void transferFunds(Long fromId, Long toId, BigDecimal amount) {
        Account from = accountRepository.findByIdWithLock(fromId);
        Account to = accountRepository.findByIdWithLock(toId);

        if (from.getBalance().compareTo(amount) < 0) {
            throw new InsufficientFundsException();
        }

        from.setBalance(from.getBalance().subtract(amount));
        to.setBalance(to.getBalance().add(amount));

        // At SERIALIZABLE, this is isolated from all other operations
        // No dirty reads, no lost updates, no phantom transfers
    }

    // For reporting — REPEATABLE_READ ensures consistent snapshot
    @Transactional(isolation = Isolation.REPEATABLE_READ, readOnly = true)
    public FinancialReport generateDailyReport(LocalDate date) {
        // All reads return data from the same snapshot
        // Even if transactions commit during report generation

        BigDecimal totalRevenue = paymentRepository
            .sumByDate(date);
        long newCustomers = customerRepository
            .countByCreatedDate(date);
        Map<String, Long> ordersByStatus = orderRepository
            .countByStatus();

        return new FinancialReport(date, totalRevenue,
            newCustomers, ordersByStatus);
    }

    // For most operations — READ_COMMITTED is sufficient
    @Transactional(isolation = Isolation.READ_COMMITTED)
    public Order createOrder(String customerName, BigDecimal total) {
        Order order = new Order();
        order.setCustomerName(customerName);
        order.setTotal(total);
        order.setStatus("PENDING");
        return orderRepository.save(order);
    }
}

// === 8. MVCC monitoring ===
@Component
class MvccMonitor {
    private final JdbcTemplate jdbc;

    @Scheduled(fixedRate = 300_000)
    public void checkDeadTuples() {
        // PostgreSQL: Check for excessive dead tuples (old MVCC versions)
        List<Map<String, Object>> deadTuples = jdbc.queryForList("""
            SELECT relname, n_live_tup, n_dead_tup,
                   round(n_dead_tup * 100.0 / NULLIF(n_live_tup, 0), 2) AS dead_pct
            FROM pg_stat_user_tables
            WHERE n_dead_tup > 10000
            ORDER BY n_dead_tup DESC
            """);

        deadTuples.forEach(row -> {
            double deadPct = ((Number) row.get("dead_pct")).doubleValue();
            if (deadPct > 20) {
                log.warn("High dead tuple ratio on {}: {}% — VACUUM needed",
                    row.get("relname"), deadPct);
            }
        });
    }

    // Check for long-running transactions (cause MVCC bloat)
    public void checkLongTransactions() {
        List<Map<String, Object>> longRunning = jdbc.queryForList("""
            SELECT pid, state, query_start, now() - query_start AS duration,
                   left(query, 100) AS query_preview
            FROM pg_stat_activity
            WHERE state = 'idle in transaction'
               OR (state = 'active' AND query_start < now() - interval '5 minutes')
            ORDER BY query_start
            """);

        longRunning.forEach(row ->
            log.warn("Long running transaction PID {}: {}",
                row.get("pid"), row.get("duration")));
    }
}

// === 9. ACID vs BASE decision guide ===
/*
Choose ACID when:
  - Financial transactions (payments, accounting)
  - Inventory management (stock levels)
  - Booking systems (no double-booking)
  - Anywhere data integrity is critical
  - Complex relationships with referential integrity
  - Reporting needs consistent snapshots

Choose BASE when:
  - Social media feeds (eventual consistency is fine)
  - Content management (stale reads are acceptable)
  - IoT sensor data (high write throughput)
  - Session storage (fast reads)
  - Product catalog (availability over strict freshness)
  - Global scaling needed

// Modern trend: NewSQL (CockroachDB, Yugabyte) aims for both
// ACID guarantees with horizontal scalability
*/
```

ACID is required for transactional integrity (payments, bookings, inventory). BASE trades strict consistency for availability and partition tolerance (social feeds, sensor data, sessions). MVCC enables concurrent reads and writes without blocking by maintaining row version histories. Snapshot isolation (PostgreSQL's REPEATABLE_READ) gives each transaction a consistent view at its start time. Monitor dead tuple ratios and long-running transactions to prevent MVCC bloat. Choose your isolation level based on the consistency requirements of each operation.


### Q15: How do you analyze and optimize slow database queries?

**Answer:** Query optimization starts with identifying slow queries (slow query log, database monitoring), then using EXPLAIN ANALYZE to understand the query plan. Common fixes: add indexes for sequential scans, rewrite queries to use indexes, reduce the amount of data processed (filter early), avoid unnecessary joins, optimize sort operations, and tune database configuration. The goal is to minimize the number of rows examined and leverage indexes for data access.

```java
// === 1. Identifying slow queries ===
@Component
class SlowQueryDetector {
    private final JdbcTemplate jdbc;

    @EventListener(ApplicationReadyEvent.class)
    public void configureSlowQueryLog() {
        // Configure PostgreSQL slow query log
        jdbc.execute("SET log_min_duration_statement = 200");  // 200ms

        // Or enable pg_stat_statements for historical analysis
        jdbc.execute("CREATE EXTENSION IF NOT EXISTS pg_stat_statements");
    }

    @Scheduled(fixedRate = 300_000)
    public void analyzeSlowQueries() {
        // Top 10 slowest queries by total time
        List<Map<String, Object>> slowQueries = jdbc.queryForList("""
            SELECT query,
                   calls,
                   round(total_exec_time::numeric, 2) AS total_ms,
                   round(mean_exec_time::numeric, 2) AS avg_ms,
                   round(100 * total_exec_time /
                       SUM(total_exec_time) OVER (), 2) AS pct_time
            FROM pg_stat_statements
            WHERE query NOT LIKE '%pg_%'
            ORDER BY total_exec_time DESC
            LIMIT 10
            """);

        slowQueries.forEach(row ->
            log.warn("Slow query ({}% of total time, avg {}ms):\n{}",
                row.get("pct_time"), row.get("avg_ms"), row.get("query")));
    }

    // Log queries exceeding threshold at runtime
    @Scheduled(fixedRate = 60_000)
    public void runningQueries() {
        List<Map<String, Object>> running = jdbc.queryForList("""
            SELECT pid, now() - query_start AS duration,
                   state, left(query, 200) AS query
            FROM pg_stat_activity
            WHERE state = 'active'
              AND query NOT LIKE '%pg_stat_activity%'
              AND query != ''
              AND query_start < now() - interval '1 second'
            ORDER BY query_start
            """);

        running.forEach(row ->
            log.warn("Running query ({}s): {}",
                row.get("duration"), row.get("query")));
    }
}

// === 2. Using EXPLAIN ANALYZE ===
/*
EXPLAIN shows the query plan (estimated costs)
EXPLAIN ANALYZE executes the query and shows actual timings
EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) includes buffer info in machine-readable format

Example table: orders (1M rows), customers (100K rows)

Query:
  SELECT c.name, SUM(o.total) as total_spent
  FROM customers c
  JOIN orders o ON c.id = o.customer_id
  WHERE c.created_at > '2024-01-01'
  GROUP BY c.name
  ORDER BY total_spent DESC
  LIMIT 10;

Without indexes:
  Seq Scan on customers (cost=0..20000 rows=50000)
  Hash Join (cost=25000..80000 rows=200000)
  Seq Scan on orders (cost=0..15000 rows=1M)
  Sort (cost=90000..95000 rows=200000)

With indexes:
  Index Scan on customers_created_idx (cost=0..500 rows=50000)
  Nested Loop (cost=500..5000 rows=200000)
  Index Scan on orders_customer_idx (cost=0..10 rows=20)
  Sort (cost=5000..5500 rows=200000)

// Terminology:
// Seq Scan: Full table scan — slow for large tables
// Index Scan: Index lookup + heap fetch — fast for selective queries
// Index Only Scan: All data in index — fastest (no heap access)
// Bitmap Scan: Multiple index scans combined — good for many hits
// Nested Loop: For each outer row, scan inner — good for small result sets
// Hash Join: Build hash table from one side, probe with other — good for large joins
// Merge Join: Sort both sides, merge — good for pre-sorted data
*/

// === 3. Scan type analysis ===
@Service
class ScanAnalysisService {
    private final JdbcTemplate jdbc;

    @Transactional(readOnly = true)
    public void demonstrateScanTypes() {
        // Sequential Scan — scans entire table (bad for large tables)
        // Happens when: no index, query returns > 10% of rows, or statistics are stale
        // Fix: Add index, or if most rows match, Seq Scan is actually optimal
        jdbc.queryForList("EXPLAIN (ANALYZE, BUFFERS) " +
            "SELECT * FROM orders WHERE status = 'PENDING'");
        // Without index: Seq Scan on orders (cost=0..15000 rows=500000)
        // With index: Index Scan using idx_orders_status (cost=0..500 rows=500000)

        // Index Scan — uses index to find row locations, then fetches from heap
        // Fast when query is selective (< 5% of rows)
        // Each row requires an index lookup + heap access
        // Slower when many rows (random IO to heap)
        jdbc.queryForList("EXPLAIN (ANALYZE, BUFFERS) " +
            "SELECT * FROM orders WHERE customer_id = 42");
        // Index Scan using idx_orders_customer on orders
        //   Index Cond: (customer_id = 42)

        // Index Only Scan — all needed columns in the index
        // Fastest — no heap access needed
        // Requires covering index (INCLUDE extra columns)
        jdbc.queryForList("EXPLAIN (ANALYZE, BUFFERS) " +
            "SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id");
        // Index Only Scan using idx_orders_customer on orders
        // Heap Fetches: 0 (good — index has all needed data)

        // Bitmap Scan — combines multiple indexes for complex conditions
        // Two phases:
        //   1. Bitmap Index Scan — find row locations for each condition
        //   2. Bitmap Heap Scan — fetch rows from heap
        // Good for: conditions that individually match many rows
        jdbc.queryForList("EXPLAIN (ANALYZE, BUFFERS) " +
            "SELECT * FROM orders " +
            "WHERE status = 'PENDING' AND total > 100");
        // Bitmap Heap Scan
        //   Recheck Cond: (status = 'PENDING') AND (total > 100)
        //   -> BitmapAnd
        //     -> Bitmap Index Scan on idx_orders_status
        //     -> Bitmap Index Scan on idx_orders_total

        // Nested Loop — for each outer row, probe inner with index
        // Good: small outer, indexed inner (common in OLTP)
        jdbc.queryForList("EXPLAIN (ANALYZE, BUFFERS) " +
            "SELECT c.name, o.total " +
            "FROM customers c JOIN orders o ON c.id = o.customer_id " +
            "WHERE c.id = 42");
        // Nested Loop
        //   -> Index Scan on customers_pkey (rows=1)
        //   -> Index Scan on idx_orders_customer (rows=10)

        // Hash Join — build hash from inner, probe with outer
        // Good for: large unindexed joins, warehouse queries
        jdbc.queryForList("EXPLAIN (ANALYZE, BUFFERS) " +
            "SELECT c.* FROM customers c " +
            "JOIN orders o ON c.id = o.customer_id");
        // Hash Join
        //   Hash Cond: (o.customer_id = c.id)
        //   -> Seq Scan on orders
        //   -> Hash
        //     -> Seq Scan on customers
    }
}

// === 4. Query optimization patterns ===
@Repository
interface OptimizedOrderRepository extends JpaRepository<Order, Long> {

    // BAD: No filtering — reads all rows, counts in memory
    default long countByStatusBad(String status) {
        return findAll().stream()
            .filter(o -> o.getStatus().equals(status))
            .count();
    }

    // GOOD: Database does the count
    long countByStatus(String status);

    // BAD: Select *, then filter in memory
    default List<Order> findRecentBad(LocalDate since) {
        return findAll().stream()
            .filter(o -> o.getCreatedAt().isAfter(since))
            .collect(toList());
    }

    // GOOD: Database filter + index
    @Query("SELECT o FROM Order o WHERE o.createdAt > :since")
    List<Order> findRecent(@Param("since") LocalDate since);

    // BAD: N+1 — loads orders, then items for each
    @Query("SELECT o FROM Order o WHERE o.status = :status")
    List<Order> findByStatusNPlusOne(@Param("status") String status);

    // GOOD: JOIN FETCH for N+1 prevention
    @Query("SELECT DISTINCT o FROM Order o " +
           "JOIN FETCH o.customer " +
           "LEFT JOIN FETCH o.items " +
           "WHERE o.status = :status")
    List<Order> findByStatusOptimized(@Param("status") String status);

    // BAD: Fetch all then paginate in memory
    default Page<Order> findPageBad(Pageable pageable) {
        List<Order> all = findAll();
        int start = (int) pageable.getOffset();
        int end = Math.min(start + pageable.getPageSize(), all.size());
        return new PageImpl<>(all.subList(start, end),
            pageable, all.size());
    }

    // GOOD: Database handles pagination
    Page<Order> findAll(Pageable pageable);

    // BAD: Too many JOINs pulling unnecessary columns
    @Query("SELECT o FROM Order o " +
           "JOIN FETCH o.customer " +
           "JOIN FETCH o.items i " +
           "JOIN FETCH i.product")
    List<Order> findAllOverfetched();

    // GOOD: DTO projection — only needed columns
    @Query("SELECT new com.example.dto.OrderSummary(o.id, o.customerName, o.total) " +
           "FROM Order o WHERE o.status = :status")
    List<OrderSummary> findSummaryByStatus(@Param("status") String status);
}

// === 5. Optimization patterns ===
@Service
class OptimizationService {
    private final JdbcTemplate jdbc;

    // Filter early — reduce data before joins
    @Transactional(readOnly = true)
    public void filterEarly() {
        // BAD: Join all orders, then filter
        jdbc.queryForList("""
            SELECT c.name, o.total
            FROM customers c
            JOIN orders o ON c.id = o.customer_id
            WHERE c.created_at > '2024-01-01'
              AND o.created_at > '2024-06-01'
            """);

        // GOOD: Filter each table before join (same plan if optimizer is smart,
        // but explicit CTEs help with complex queries)
        jdbc.queryForList("""
            WITH recent_customers AS (
                SELECT id, name FROM customers
                WHERE created_at > '2024-01-01'
            ),
            recent_orders AS (
                SELECT customer_id, total FROM orders
                WHERE created_at > '2024-06-01'
            )
            SELECT c.name, o.total
            FROM recent_customers c
            JOIN recent_orders o ON c.id = o.customer_id
            """);
    }

    // Limit columns — avoid SELECT *
    @Transactional(readOnly = true)
    public void limitColumns() {
        // BAD: SELECT * returns all columns (including BLOBs, text fields)
        // GOOD: Only request needed columns — faster network, less memory
        jdbc.queryForList("""
            SELECT customer_id, COUNT(*) as order_count,
                   SUM(total) as total_spent
            FROM orders
            GROUP BY customer_id
            """);
        // Instead of:
        // SELECT * FROM orders — then aggregate in application
    }
}

// === 6. Common optimization techniques ===
/*
Technique              Problem                      Solution
─────────────────────────────────────────────────────────────
Missing index          Seq Scan on large table      Add index on WHERE/JOIN columns
Bad index order        Index used but inefficient   Reorder composite index (high cardinality first)
SELECT *               Unnecessary data transfer    Select only needed columns
No WHERE               Full table scan              Add filters
Function on column     Index not used               Rewrite: WHERE date_col > '2024-01-01'
                                                        NOT WHERE YEAR(date_col) = 2024
No LIMIT               Huge result sets             Add LIMIT + pagination
Too many JOINs         Large intermediate results   Denormalize, or separate queries
Not using covering     Extra heap lookups           INCLUDE extra columns in index
index
Non-sargable WHERE     Index not used               Make predicate sargable (Search ARGument ABLE)
*/

// === 7. Practical optimization checklist ===
@Configuration
class QueryOptimizationChecklist {

    // Enable auto-explain for slow queries (dev only)
    /*
    application-dev.yml:
    spring.jpa.properties.hibernate.session.events.log: true
    spring.jpa.show-sql: true
    spring.jpa.properties.hibernate.format_sql: true
    */

    // Auto-EXPLAIN slow queries (PostgreSQL 12+)
    // SET auto_explain.log_min_duration = '1s';
    // SET auto_explain.log_analyze = true;
    // SET auto_explain.log_buffers = true;

    @Bean
    public DataSource queryLoggingDataSource(DataSource original) {
        return new ProxyDataSource(original);
        // Configure to log slow queries with parameter values
    }
}

// === 8. Testing query performance ===
/*
@SpringBootTest
class QueryPerformanceTest {
    @Autowired private OrderRepository repository;
    @Autowired private EntityManager em;

    @BeforeEach
    void setUp() {
        // Insert realistic data volume
        IntStream.range(0, 100_000).forEach(i -> {
            Order o = new Order("User" + i, BigDecimal.valueOf(i), "PENDING");
            repository.save(o);
        });
        em.flush();
        em.clear();
    }

    @Test
    void testQueryWithIndex() {
        StopWatch watch = new StopWatch();
        watch.start("findByStatus");
        List<Order> orders = repository.findByStatus("PENDING",
            PageRequest.of(0, 100));
        watch.stop();

        log.info("Query time: {}ms", watch.getTotalTimeMillis());
        // With index on status: < 2ms for 100 rows
        assertThat(watch.getTotalTimeMillis()).isLessThan(50);

        // Verify index was used
        List<Map<String, Object>> plan = jdbcTemplate.queryForList(
            "EXPLAIN SELECT * FROM orders WHERE status = 'PENDING' LIMIT 100");
        assertThat(plan.toString()).contains("Index Scan");
    }

    @Test
    void testPaginatedQuery() {
        // Pagination should be fast regardless of total count
        for (int page = 0; page < 100; page++) {
            StopWatch watch = new StopWatch();
            watch.start("page " + page);
            Page<Order> result = repository.findAll(
                PageRequest.of(page, 100));
            watch.stop();

            // Each page takes similar time (doesn't grow with offset)
            assertThat(watch.getTotalTimeMillis()).isLessThan(50);
        }
    }

    @Test
    void testJoinQuery() {
        StopWatch watch = new StopWatch();
        watch.start("join query");
        List<Order> orders = repository.findByStatusOptimized("PENDING");
        watch.stop();

        assertThat(watch.getTotalTimeMillis()).isLessThan(100);
    }
}
*/
```

Query optimization is systematic: find slow queries (pg_stat_statements, slow query log), understand the plan (EXPLAIN ANALYZE), and fix the root cause. Target sequential scans on large tables (add indexes), N+1 queries (JOIN FETCH), excessive data transfer (SELECT only what you need), and missing filters. Verify each optimization with realistic data volumes. The best optimization is reducing the number of rows examined — index access paths are 100-1000x faster than full table scans for selective queries.


### Q16: What are Hibernate flush modes? How and when do you use clear/detach/merge and StatelessSession?

**Answer:** Flush mode controls when Hibernate synchronizes the persistence context with the database. AUTO (default) flushes before queries, COMMIT flushes at transaction commit, ALWAYS flushes before every query, and MANUAL defers flushing to explicit calls. The persistence context (first-level cache) can be managed via clear (clear all entities), detach (remove specific entities), and merge (reattach detached entities). StatelessSession bypasses the persistence context entirely for bulk operations.

```java
// === 1. Flush modes ===
/*
FlushModeType.AUTO     (default) — Flush before any query execution
FlushModeType.COMMIT   — Only flush at transaction commit
FlushModeType.ALWAYS   — Flush before every query (Hibernate extension)
FlushModeType.MANUAL   — Only flush when explicitly called
*/

@Service
class FlushModeExample {
    @PersistenceContext private EntityManager em;
    private final OrderRepository orderRepository;

    @Transactional
    public void autoFlush() {
        // AUTO: Hibernate flushes before queries to ensure consistency
        Order order = new Order();
        order.setCustomerName("Alice");
        order.setTotal(BigDecimal.valueOf(100));
        order.setStatus("PENDING");
        em.persist(order);  // In persistence context, not yet in DB

        // AUTO flushes here before the query:
        List<Order> pending = em.createQuery(
            "SELECT o FROM Order o WHERE o.status = 'PENDING'", Order.class)
            .getResultList();
        // The INSERT was flushed before the SELECT
        // So pending includes our new order
    }

    @Transactional
    public void commitFlush() {
        // COMMIT: Only flushes at transaction commit
        // Manual flush needed before queries to see pending changes
        em.setFlushMode(FlushModeType.COMMIT);

        Order order = new Order();
        order.setCustomerName("Bob");
        em.persist(order);  // In persistence context, not in DB

        // Without explicit flush, this query WON'T see the new order
        // Because FlushMode is COMMIT, not AUTO
        // em.flush(); // Would need explicit flush

        List<Order> orders = em.createQuery(
            "SELECT o FROM Order o", Order.class)
            .getResultList();
        // Bob's order might NOT be in results!
    }

    @Transactional
    public void manualOnly() {
        // MANUAL: Only flush when explicitly called
        em.setFlushMode(FlushModeType.MANUAL);

        Order order = new Order();
        order.setCustomerName("Charlie");
        em.persist(order);

        // Nothing is in DB yet! But we're still in the transaction
        // Useful for long transactions where you want to control exactly
        // when data hits the database

        // Explicit flush at the right moment:
        em.flush();  // Now data goes to database
    }

    @Transactional
    public void batchInsertWithFlush() {
        // Batch processing: flush and clear periodically
        // to prevent persistence context from growing too large
        FlushModeType originalFlush = em.getFlushMode();
        em.setFlushMode(FlushModeType.MANUAL);

        try {
            for (int i = 0; i < 10000; i++) {
                Order order = new Order();
                order.setCustomerName("User" + i);
                order.setTotal(BigDecimal.valueOf(i));
                order.setStatus("PENDING");
                em.persist(order);

                if (i % 100 == 0) {
                    em.flush();   // Write batch to DB
                    em.clear();   // Clear persistence context
                    // Without clear, the context would have 10000 entities
                    // consuming all heap memory
                }
            }
            em.flush();  // Flush remaining
        } finally {
            em.setFlushMode(originalFlush);
        }
    }
}

// === 2. Clear, detach, merge ===
@Service
class ClearDetachMergeExample {
    @PersistenceContext private EntityManager em;
    private final OrderRepository orderRepository;

    // clear — remove ALL entities from persistence context
    @Transactional
    public void demonstrateClear() {
        Order order1 = em.find(Order.class, 1L);
        Order order2 = em.find(Order.class, 2L);

        // Both entities are now managed (in persistence context)
        assert em.contains(order1);  // true
        assert em.contains(order2);  // true

        em.clear();  // Remove ALL entities from context

        assert !em.contains(order1);  // false — detached
        assert !em.contains(order2);  // false — detached

        // Changes to order1 after clear are NOT tracked
        order1.setStatus("MODIFIED");  // This change is NOT persisted
        // At commit, no UPDATE for order1 — it was detached
    }

    // detach — remove specific entity from persistence context
    @Transactional
    public void demonstrateDetach() {
        Order order = em.find(Order.class, 1L);
        // order is managed

        em.detach(order);
        // order is now detached — changes won't be persisted

        order.setStatus("SHIPPED");  // NOT persisted
    }

    // merge — reattach a detached entity
    @Transactional
    public void demonstrateMerge() {
        Order order = em.find(Order.class, 1L);
        em.detach(order);  // Now detached

        order.setCustomerName("New Name");  // This change is lost...
        // Unless we merge it back:

        Order merged = em.merge(order);
        // merged is a NEW managed instance (may be different instance)
        // Merged copies state from 'order' into the managed instance
        // At commit, changes to 'merged' are persisted

        assert merged != order;  // Different instances!
        assert em.contains(merged);  // true
        assert !em.contains(order);  // false (still detached)
    }

    // Practical use case: update with merge
    @Transactional
    public Order updateOrder(Long id, String newStatus) {
        // load → detach → modify → merge
        Order order = em.find(Order.class, id);
        em.detach(order);
        order.setStatus(newStatus);
        return em.merge(order);
    }

    // Alternative: load → modify (simpler, same result)
    @Transactional
    public Order updateOrderSimple(Long id, String newStatus) {
        Order order = em.find(Order.class, id);
        order.setStatus(newStatus);
        return order;
        // At commit, Hibernate detects the change and updates
        // (dirty checking — no merge needed)
    }
}

// === 3. Save, saveOrUpdate, persist ===
/*
persist(): Make transient entity managed. No return value.
           Guaranteed not to execute INSERT immediately (may batch).
           Best practice for new entities.

save() (Hibernate):  Returns generated ID. Executes INSERT immediately.
                     Not part of JPA spec. Avoid.

saveOrUpdate() (Hibernate):   Insert or update depending on entity state.
                              Not part of JPA spec. Avoid.

merge(): Copy state from detached entity into persistence context.
         Returns managed instance (may differ from argument).
         Use for detached entities from HTTP requests.
*/

// === 4. StatelessSession — for bulk operations ===
/*
StatelessSession bypasses the persistence context entirely:
  - No first-level cache
  - No dirty checking
  - No cascading operations
  - No lazy loading
  - Much faster for bulk inserts/updates
  - Bypasses event listeners (no auditing, no version checking)
*/

@Service
class StatelessSessionExample {
    @PersistenceContext private EntityManager em;

    @Transactional
    public void bulkInsertWithStateful(int count) {
        // Stateful: Each entity tracked (slow for bulk)
        for (int i = 0; i < count; i++) {
            Order order = new Order();
            order.setCustomerName("User" + i);
            order.setTotal(BigDecimal.valueOf(100));
            order.setStatus("PENDING");
            em.persist(order);
            // Each persist adds entity to context
            // Dirty checking tracks every entity
        }
        // With 100,000 rows — OutOfMemoryError likely
        // With flush/clear every 100 — still slow due to context overhead
    }

    public void bulkInsertStateless(int count) {
        // Stateless: No tracking, much faster
        // Need to unwrap StatelessSession from SessionFactory
        SessionFactory sf = em.getEntityManagerFactory()
            .unwrap(SessionFactory.class);

        try (StatelessSession session = sf.openStatelessSession()) {
            session.beginTransaction();

            for (int i = 0; i < count; i++) {
                Order order = new Order();
                order.setCustomerName("User" + i);
                order.setTotal(BigDecimal.valueOf(100));
                order.setStatus("PENDING");
                session.insert(order);
                // No context overhead — just executes INSERT statement
                // No cascade, no version check
            }

            session.getTransaction().commit();
        }
        // 100,000 rows insert in seconds instead of minutes
    }

    // StatelessSession: batch update
    public void bulkUpdateStatus(String oldStatus, String newStatus) {
        SessionFactory sf = em.getEntityManagerFactory()
            .unwrap(SessionFactory.class);

        try (StatelessSession session = sf.openStatelessSession()) {
            session.beginTransaction();

            // Use ScrollableResults for large datasets
            ScrollableResults results = session.createQuery(
                    "SELECT o FROM Order o WHERE o.status = :status",
                    Order.class)
                .setParameter("status", oldStatus)
                .scroll(ScrollMode.FORWARD_ONLY);

            int batchSize = 50;
            int count = 0;

            while (results.next()) {
                Order order = (Order) results.get();
                order.setStatus(newStatus);
                session.update(order);

                count++;
                if (count % batchSize == 0) {
                    session.flush();
                    session.clear();
                }
            }

            session.getTransaction().commit();
        }
    }

    // StatelessSession: bulk delete
    public void bulkDeleteOldOrders(LocalDate cutoff) {
        SessionFactory sf = em.getEntityManagerFactory()
            .unwrap(SessionFactory.class);

        try (StatelessSession session = sf.openStatelessSession()) {
            session.beginTransaction();

            int deleted = session.createMutationQuery(
                    "DELETE FROM Order o WHERE o.createdAt < :cutoff")
                .setParameter("cutoff", cutoff)
                .executeUpdate();

            session.getTransaction().commit();
            log.info("Deleted {} old orders", deleted);
        }
    }
}

// === 5. JPA provider-specific features ===
/*
Entity state transitions:

                  persist()
  Transient ────────────────→ Managed
     ↑                          │
     │ save()/merge()           │ detach()
     │ persist()                ↓
     └───────────────────── Detached
     merge()

  Removed (after remove())
     │
     ↓
  Removed entity (scheduled for deletion at flush)

// Flush triggers:
// 1. Before query execution (AUTO mode)
// 2. Transaction commit
// 3. Explicit em.flush()
// 4. em.getTransaction().commit() in resource-local mode
*/

// === 6. Choosing the right approach ===
/*
Operation             Stateful Session    StatelessSession
─────────────────────────────────────────────────────────
Single CRUD           ✓ Use              ✗ (overkill)
Batch insert (100K)   ✗ (slow, OOM risk) ✓ (fast)
Bulk update           ✗ (load each row)   ✓ (update query)
Bulk delete           ✗ (load each row)   ✓ (delete query)
With cascading        ✓                  ✗ (no cascade)
With caching          ✓ (L1, L2)         ✗ (no cache)
With auditing         ✓ (listeners)      ✗ (no listeners)
Read-only queries     ✓                  ✓ (faster, no tracking)

// Rule of thumb:
// < 100 rows: Stateful session (normal JPA)
// 100-10000: Stateful with periodic flush/clear
// > 10000: StatelessSession or JDBC batch
*/
```

Flush mode controls synchronization timing: AUTO for most cases, COMMIT for read-heavy, MANUAL for batch operations. Use clear() and detach() to manage persistence context size and prevent memory issues. merge() reattaches detached entities from HTTP requests. For bulk operations (> 10K rows), use StatelessSession to bypass the persistence context overhead — it's 10-100x faster than stateful sessions for large datasets but sacrifices caching, cascading, and event listeners.


### Q17: Flyway vs Liquibase — which migration tool should you use and why?

**Answer:** Both Flyway and Liquibase version-control database schemas. Flyway uses SQL-first approach — migrations are plain SQL files with a version prefix. Liquibase uses XML/YAML/JSON changelogs with database-agnostic changeset definitions. Flyway is simpler and faster for teams that know SQL well. Liquibase is more flexible for complex migrations, multi-database support, and rollback strategies. Choose Flyway for simplicity, Liquibase for advanced scenarios.

```java
// === 1. Flyway approach ===
/*
Core concept: Versioned SQL files in db/migration/
File naming: V{version}__{description}.sql
             R__{description}.sql (repeatable)
Tracking: flyway_schema_history table
Philosophy: SQL-first, explicit, simple
*/

// Flyway migration example:
/*
// V1__create_orders_table.sql
CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    version INTEGER NOT NULL DEFAULT 0
);

// V2__add_indexes.sql
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created ON orders(created_at);

// V3__add_customer_table.sql
CREATE TABLE customers (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);
ALTER TABLE orders ADD COLUMN customer_id BIGINT;
ALTER TABLE orders ADD CONSTRAINT fk_customer
    FOREIGN KEY (customer_id) REFERENCES customers(id);
*/

// === 2. Liquibase approach ===
/*
Core concept: Changelog files describing changes
Formats: XML, YAML, JSON, SQL
Tracking: DATABASECHANGELOG table
Philosophy: Declarative, database-agnostic, flexible
*/

// Liquibase YAML changelog:
/*
databaseChangeLog:
  - changeSet:
      id: 1
      author: developer
      comment: Create orders table
      changes:
        - createTable:
            tableName: orders
            columns:
              - column:
                  name: id
                  type: BIGSERIAL
                  autoIncrement: true
                  constraints:
                    primaryKey: true
              - column:
                  name: customer_name
                  type: VARCHAR(100)
                  constraints:
                    nullable: false
              - column:
                  name: total
                  type: DECIMAL(10,2)
                  constraints:
                    nullable: false
              - column:
                  name: status
                  type: VARCHAR(20)
                  defaultValue: PENDING

  - changeSet:
      id: 2
      author: developer
      comment: Add indexes
      changes:
        - createIndex:
            tableName: orders
            indexName: idx_orders_status
            columns:
              - column:
                  name: status

  - changeSet:
      id: 3
      author: developer
      comment: Add customers table
      changes:
        - createTable:
            tableName: customers
            columns:
              - column:
                  name: id
                  type: BIGSERIAL
                  autoIncrement: true
                  constraints:
                    primaryKey: true
              - column:
                  name: name
                  type: VARCHAR(150)
              - column:
                  name: email
                  type: VARCHAR(255)
                  constraints:
                    nullable: false
                    unique: true
        - addColumn:
            tableName: orders
            columns:
              - column:
                  name: customer_id
                  type: BIGINT
        - addForeignKeyConstraint:
            baseTableName: orders
            baseColumnNames: customer_id
            referencedTableName: customers
            referencedColumnNames: id
            constraintName: fk_customer
*/

// === 3. Versioning strategies ===
/*
Semantic versioning (Flyway):
  V1_0__description.sql
  V1_1__description.sql
  V2_0__description.sql
  Pros: Intentional, meaningful versions
  Cons: Conflicts when multiple branches add V2_1

Timestamp versioning:
  V20240101__description.sql  (YYYYMMDD)
  V20240102__description.sql
  Pros: No conflicts between branches
  Cons: Harder to reason about order

Sequential numbering:
  V1__description.sql
  V2__description.sql
  Pros: Simple, obvious ordering
  Cons: Conflicts on branches (both use V3)

// Best practice: Use timestamps for CI/CD projects,
// sequential for single-team projects,
// semantic for library databases
*/

// === 4. Rollback strategies ===
/*
// Flyway OSS: No built-in rollback
// Instead: Create a compensating forward migration

// V4__add_shipping_address.sql
ALTER TABLE orders ADD COLUMN shipping_address VARCHAR(500);

// V5__remove_shipping_address.sql (compensating migration)
ALTER TABLE orders DROP COLUMN shipping_address;

// Flyway Teams (paid): Supports undo migrations
// U4__rollback_shipping_address.sql
ALTER TABLE orders DROP COLUMN shipping_address;

// Liquibase: Built-in rollback per changeset
// Each changeSet can define rollback steps:
databaseChangeLog:
  - changeSet:
      id: 4
      author: developer
      changes:
        - addColumn:
            tableName: orders
            columns:
              - column:
                  name: shipping_address
                  type: VARCHAR(500)
      rollback:
        - dropColumn:
            tableName: orders
            columnName: shipping_address
*/

// === 5. Liquibase with Spring Boot ===
/*
application.yml:
spring:
  liquibase:
    enabled: true
    change-log: classpath:db/changelog/db.changelog-master.yaml
    contexts: production
    default-schema: public
    liquibase-schema: public
    drop-first: false  # NEVER true in production!
*/

@Configuration
class LiquibaseConfig {
    @Bean
    public SpringLiquibase liquibase(DataSource dataSource) {
        SpringLiquibase liquibase = new SpringLiquibase();
        liquibase.setDataSource(dataSource);
        liquibase.setChangeLog("classpath:db/changelog/db.changelog-master.yaml");
        liquibase.setContexts("${spring.profiles.active:production}");

        // Context-specific changelogs
        if (isDevProfile()) {
            liquibase.setContexts("development");
        }
        return liquibase;
    }
}

// === 6. Feature comparison ===
/*
Feature                 Flyway                 Liquibase
─────────────────────────────────────────────────────────
Migration format        SQL only               XML, YAML, JSON, SQL
Learning curve          Low                    Medium
Database-agnostic       No (SQL per DB)        Yes (generates SQL)
Rollback                No (OSS), Yes (Teams)  Yes (built-in)
Repeatable migrations   Yes (R__ files)        Yes (runAlways: true)
Context-based           No                     Yes (contexts)
Preconditions           No                     Yes (check before run)
Labels                  No                     Yes (tag changesets)
CI/CD integration       Excellent              Excellent
Performance             Faster (direct SQL)    Slower (generates SQL)
Maven/Gradle plugin     Excellent              Excellent
Java-based migrations   Yes                    Yes
*/

// === 7. Advanced Liquibase features ===
/*
// Preconditions — check state before running
databaseChangeLog:
  - preConditions:
      - dbms:
          type: postgresql
      - runningAs:
          username: app_user

  - changeSet:
      id: 5
      author: developer
      preConditions:
        - onFail: MARK_RAN
        - not:
            - tableExists:
                tableName: payments
      changes:
        - createTable:
            tableName: payments
            columns:
              - column:
                  name: id
                  type: BIGSERIAL
                  constraints:
                    primaryKey: true

// Context-specific changes
  - changeSet:
      id: seed-dev-data
      author: developer
      context: development
      changes:
        - insert:
            tableName: customers
            columns:
              - column:
                  name: name
                  value: Dev User
              - column:
                  name: email
                  value: dev@example.com
*/

// === 8. Choosing the right tool ===
@Service
class MigrationStrategyService {
    private final JdbcTemplate jdbc;

    public String recommendMigrationTool(Map<String, Object> context) {
        boolean sqlProficient = (boolean) context.get("teamKnowsSQL");
        boolean multiDatabase = (boolean) context.get("supportsMultipleDBs");
        boolean rollbackRequired = (boolean) context.get("rollbackRequired");

        if (sqlProficient && !multiDatabase && !rollbackRequired) {
            return "Flyway — Simple, fast, SQL-native";
        }
        if (multiDatabase || rollbackRequired) {
            return "Liquibase — Database-agnostic, built-in rollback";
        }
        if (!sqlProficient) {
            return "Liquibase — Declarative changelogs easier to review";
        }
        return "Flyway — Conventions over configuration, proven reliability";
    }

    // Migration best practices checklist
    public void bestPractices() {
        /*
        □ Each migration is small and focused (one change)
        □ Never edit applied migrations — create new ones
        □ Test migrations on production-like data
        □ Include compensating migrations for rollback scenarios
        □ Version control all migration files
        □ CI/CD pipeline runs migrations before tests
        □ Monitor migration execution time in production
        □ Backup database before applying migrations
        □ Lock migration tool to avoid schema version conflicts
        □ Use repeatable migrations for views, functions, triggers
        □ Validate migration checksums on startup
        □ Clean-disabled in production (never drop schema)
        */
    }
}

// === 9. Migration in CI/CD pipeline ===
/*
// GitHub Actions example:
deploy:
  steps:
    - name: Backup database
      run: pg_dump $DATABASE_URL > backup.sql

    - name: Run migrations
      run: ./gradlew flywayMigrate
      env:
        SPRING_DATASOURCE_URL: ${{ secrets.DATABASE_URL }}

    - name: Verify migration
      run: ./gradlew flywayInfo

// Flyway info output:
// +--------+---------+-------------------+------+---------+
// | Version | Description              | State | Installed |
// +--------+---------+-------------------+------+---------+
// | 1       | create orders table     | Success | 2024-01-01 |
// | 2       | add indexes             | Success | 2024-01-02 |
// | 3       | add customers table     | Success | 2024-01-03 |
// | 4       | add shipping address    | Pending |           |
// +--------+---------+-------------------+------+---------+
*/
```

Both tools are excellent. Flyway wins on simplicity — plain SQL files with clear versioning — perfect when your team knows SQL and targets a single database. Liquibase wins on flexibility — multi-database support, built-in rollback, preconditions, and context-specific changesets — essential for complex enterprise deployments. The migration tool matters less than the practice: version-controlled, immutable, tested, and backed up before every schema change.


### Q18: How do you choose between MongoDB, Redis, Cassandra, and PostgreSQL?

**Answer:** The database choice depends on your data model, consistency requirements, query patterns, and scaling needs. PostgreSQL (SQL) is the default for relational data with complex queries. MongoDB (document) excels at hierarchical, schema-flexible JSON data. Redis (in-memory) is for caching, real-time data, and distributed coordination. Cassandra (wide-column) handles high-write-throughput, multi-region deployments. Each excels in different scenarios — no single database fits all use cases.

```java
// === 1. Decision framework ===
/*
Ask these questions:
  1. Is your data relational? (JOINs, constraints, ACID) → SQL
  2. Is your data document-shaped? (JSON, nested, flexible) → MongoDB
  3. Is read latency critical? (< 1ms, high throughput) → Redis
  4. Is write throughput the priority? (millions of writes/sec) → Cassandra
  5. Do you need global multi-region? → Cassandra or CockroachDB
  6. Is strong consistency mandatory? → SQL or CP systems
  7. Do you need complex aggregations/reporting? → SQL or MongoDB aggregation
  8. Is your schema stable or evolving? → Stable: SQL, Evolving: MongoDB
*/

// === 2. Cassandra — wide-column store ===
/*
Cassandra is a distributed, peer-to-peer, wide-column store designed for:
  - High write throughput (millions of writes/second)
  - Multi-region, multi-datacenter deployments
  - Always-on availability (no single point of failure)
  - Linear scalability (add nodes for more throughput)

Key concepts:
  Partition key: Determines data distribution across nodes
  Clustering key: Determines sort order within a partition
  Wide-row model: Each partition can have millions of rows
  Tunable consistency: Per-query consistency level
*/

// Spring Data Cassandra setup
/*
pom.xml:
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-cassandra</artifactId>
</dependency>

application.yml:
spring:
  data:
    cassandra:
      keyspace-name: order_keyspace
      contact-points: node1:9042,node2:9042,node3:9042
      local-datacenter: us-east-1
      schema-action: CREATE_IF_NOT_EXISTS
      request:
        timeout: 10s
      pool:
        max-connections-per-host: 10
*/

// Cassandra entity mapping
import org.springframework.data.cassandra.core.mapping.*;

@Table("orders_by_customer")
class CassandraOrder {
    @PrimaryKeyClass
    static class OrderKey {
        @PrimaryKeyColumn(name = "customer_id",
                          type = PrimaryKeyType.PARTITIONED)
        private UUID customerId;

        @PrimaryKeyColumn(name = "order_date",
                          type = PrimaryKeyType.CLUSTERED,
                          ordering = Ordering.DESCENDING)
        private LocalDate orderDate;

        @PrimaryKeyColumn(name = "order_id",
                          type = PrimaryKeyType.CLUSTERED)
        private UUID orderId;
    }

    @PrimaryKey
    private OrderKey key;

    @Column("total")
    private BigDecimal total;

    @Column("status")
    private String status;

    @Column("items")
    private List<String> items;

    @CassandraType(type = CassandraType.Name.UDT,
                   userTypeName = "address")
    private AddressDto shippingAddress;
}

// Cassandra repository
@Repository
interface CassandraOrderRepository
        extends CassandraRepository<CassandraOrder, CassandraOrder.OrderKey> {

    // Query by partition key (fast — single node)
    List<CassandraOrder> findByKeyCustomerId(UUID customerId);

    // Query by partition key + clustering key range
    List<CassandraOrder> findByKeyCustomerIdAndKeyOrderDateBetween(
        UUID customerId, LocalDate from, LocalDate to);

    // Allow filtering (use sparingly — scans multiple nodes)
    @Query("SELECT * FROM orders_by_customer " +
           "WHERE status = ?0 ALLOW FILTERING")
    List<CassandraOrder> findByStatus(String status);
}

// === 3. Cassandra query patterns ===
/*
Cassandra query-first design:
  1. Define your queries first
  2. Design tables optimized for each query
  3. Denormalize — one table per query pattern
  4. No JOINs — all data in one table

// Event table — time-series data
CREATE TABLE events_by_type (
    event_type TEXT,         // Partition key
    bucket_hour TIMESTAMP,   // Partition key (time bucket)
    event_id TIMEUUID,       // Clustering key
    data TEXT,
    PRIMARY KEY ((event_type, bucket_hour), event_id)
) WITH CLUSTERING ORDER BY (event_id DESC);

// Counters — high-write counters
CREATE TABLE page_visitors (
    page_id TEXT PRIMARY KEY,
    visitor_count COUNTER
);
UPDATE page_visitors SET visitor_count = visitor_count + 1
WHERE page_id = 'homepage';

// Tunable consistency per query:
// ONE: Fastest, weakest consistency
// QUORUM: Strong consistency (majority)
// LOCAL_QUORUM: Strong within datacenter
// ALL: Strongest, slowest (not recommended)
*/

// === 4. Database comparison ===
@Service
class DatabaseSelector {

    public String recommendDatabase(Requirement req) {
        // High write throughput, multi-region
        if (req.isHighWriteThroughput() && req.isMultiRegion()) {
            return "Apache Cassandra";
        }

        // Complex queries, joins, reports
        if (req.isComplexQueries()) {
            return "PostgreSQL (SQL)";
        }

        // Sub-millisecond reads, caching
        if (req.isSubMillisecondLatency()) {
            return "Redis";
        }

        // JSON documents, flexible schema
        if (req.isDocumentOriented()) {
            return "MongoDB";
        }

        // Default: PostgreSQL
        return "PostgreSQL (SQL)";
    }
}

record Requirement(
    boolean highWriteThroughput,
    boolean multiRegion,
    boolean complexQueries,
    boolean subMillisecondLatency,
    boolean documentOriented
) {}

// === 5. Detailed comparison ===
/*
Dimension          PostgreSQL    MongoDB        Redis        Cassandra
─────────────────────────────────────────────────────────────────────
Data model         Relational    Document       Key-Value    Wide-column
Schema             Fixed         Flexible        Key-based    Flexible
ACID               Full          Limited         No           Per-key
JOINs              Native        $lookup         No           No (denormalize)
Indexes            Rich          B-tree, text    Primitive    Secondary limited
Read performance   Fast          Fast            < 1ms        Fast (by PK)
Write performance  Good          Good             Excellent   Excellent
Scaling            Vertical      Horizontal       Cluster     Horizontal
Replication        Leader-follower  Replica set  Sentinel     Peer-to-peer
Consistency        Strong        Tunable         Strong       Tunable
Maturity           Very mature   Mature           Mature       Mature
Best for           OLTP, reporting  Catalogs, CMS  Cache, sessions  IoT, time-series events

// Throughput comparison (approximate, single node):
// PostgreSQL:   ~1,000 writes/sec,  ~10,000 reads/sec
// MongoDB:      ~10,000 writes/sec, ~50,000 reads/sec
// Redis:        ~100,000 ops/sec
// Cassandra:    ~1,000,000 writes/sec (multi-node)
*/

// === 6. Multi-model approach ===
@Configuration
class MultiDatabaseConfig {
    // Many applications use multiple databases

    @Bean
    @Primary
    public DataSource postgresDataSource() {
        // ACID transactions, complex queries, reporting
        return DataSourceBuilder.create()
            .url("jdbc:postgresql://localhost:5432/appdb")
            .username("app")
            .password("pass")
            .build();
    }

    @Bean
    public RedisConnectionFactory redisConnectionFactory() {
        // Session storage, caching, rate limiting
        return new LettuceConnectionFactory("localhost", 6379);
    }

    @Bean
    public MongoClient mongoClient() {
        // Product catalog, flexible documents
        return MongoClients.create("mongodb://localhost:27017");
    }

    @Bean
    public CqlSession cassandraSession() {
        // Event logging, high-write telemetry
        return CqlSession.builder()
            .addContactPoint(new InetSocketAddress("localhost", 9042))
            .withLocalDatacenter("datacenter1")
            .withKeyspace("events")
            .build();
    }
}

// === 7. Migration between databases ===
@Service
class DatabaseMigrationService {
    private final JdbcTemplate postgres;
    private final MongoTemplate mongo;
    private final RedisTemplate<String, Object> redis;

    // Migrate from PostgreSQL to Redis (for hot data)
    public void migrateHotDataToRedis() {
        // Load frequently accessed data to Redis
        List<Product> hotProducts = postgres.query("""
            SELECT p.* FROM products p
            JOIN order_items oi ON p.id = oi.product_id
            GROUP BY p.id
            HAVING COUNT(*) > 100
            """, productRowMapper);

        hotProducts.forEach(product -> {
            String key = "product:" + product.getId();
            redis.opsForValue().set(key, product);
            redis.expire(key, Duration.ofHours(24));
        });
    }

    // Migrate from PostgreSQL to MongoDB (for flexible schema)
    public void migrateProductCatalogToMongo() {
        // Extract catalog data to document store
        List<Map<String, Object>> products = postgres.queryForList(
            "SELECT * FROM products");

        Map<String, Object> categories = postgres.queryForList(
            "SELECT * FROM categories").stream()
            .collect(Collectors.toMap(
                c -> c.get("id").toString(),
                c -> c.get("name")));

        // Convert relational to document model
        products.forEach(product -> {
            String catId = product.get("category_id").toString();
            product.put("category_name", categories.get(catId));
            product.remove("category_id");

            // Add reviews as embedded array
            List<Map<String, Object>> reviews = postgres.queryForList(
                "SELECT * FROM reviews WHERE product_id = ?",
                product.get("id"));
            product.put("reviews", reviews);

            mongo.save(product, "products");
        });
    }
}

// === 8. When to use each — quick reference ===
/*
PostgreSQL:
  - Financial transactions (ACID required)
  - Complex JOIN queries, reporting
  - Data with strict schema and relationships
  - Need mature tooling, migrations, BI support

MongoDB:
  - Product catalogs with varying attributes
  - Content management, CMS
  - Real-time analytics, IoT (moderate write)
  - Rapid prototyping (schema evolves fast)

Redis:
  - Session storage
  - Cache layer (database query results)
  - Rate limiting, distributed locks
  - Leaderboards, counters, pub/sub
  - Real-time data (websocket state)

Cassandra:
  - IoT sensor data (high-write throughput)
  - Time-series events, logs
  - Multi-region deployments
  - Always-available applications
  - User activity tracking, recommendations
*/
```

Choose the database that fits your dominant access pattern. PostgreSQL handles 90% of use cases with ACID guarantees and rich query capabilities. MongoDB excels when your data is document-shaped and schema evolves. Redis provides sub-millisecond performance for caching and real-time data. Cassandra handles massive write throughput across regions. Most production systems use 2-3 databases — PostgreSQL for transactions, Redis for caching, and either MongoDB or Cassandra for their specific strengths. Never use a NoSQL database just because it's trendy — start with PostgreSQL and add other databases as specific needs arise.


### Q19: Explain database sharding. How do you choose a shard key and handle rebalancing?

**Answer:** Sharding (horizontal partitioning) distributes data across multiple database instances (shards) by a shard key value. Each shard holds a subset of data. Sharding enables horizontal scaling beyond what a single server can handle. The shard key determines data distribution and query routing. A good shard key balances data evenly, supports the most common query patterns, and minimizes cross-shard operations. Rebalancing redistributes data when adding or removing shards.

```java
// === 1. Sharding strategies ===
/*
Horizontal sharding: Different rows in different databases
Vertical sharding: Different columns in different databases

// Horizontal sharding approaches:
// 1. Range-based:   Shard by ID range (1-1000 → Shard A, 1001-2000 → Shard B)
//    Pros: Simple range scans, easy to understand
//    Cons: Hot spots (recent IDs), uneven distribution

// 2. Hash-based:    Hash of shard key mod N
//    Pros: Even distribution, predictable
//    Cons: Rebalancing requires rehashing, range queries cross shards

// 3. Directory:     Lookup table maps key to shard
//    Pros: Flexible, can move data without changing schema
//    Cons: Extra hop (lookup), single point of failure

// 4. Geographic:    Shard by region (us-east-1, eu-west-1, ap-southeast-1)
//    Pros: Low latency, compliance (GDPR)
//    Cons: Skewed distribution by population
*/

// === 2. Shard key selection ===
@Service
class ShardKeyAnalysisService {

    public String analyzeShardKey(String tableName, List<String> candidates) {
        /*
        Criteria for a good shard key:
        1. High cardinality (many distinct values)
        2. Even distribution (no hot spots)
        3. Supports primary query pattern (filter by shard key)
        4. Immutable (shard key shouldn't change)
        5. Routes majority of queries to single shard

        Bad shard keys:
        - status (low cardinality, maybe 5 values)
        - created_at (time-based hot spots)
        - country (skewed distribution)
        - boolean flags (only 2 values)

        Good shard keys:
        - customer_id (high cardinality, evenly distributed)
        - UUID (perfectly distributed)
        - composite: (customer_id, order_id)
        */

        Map<String, Integer> scores = new HashMap<>();
        for (String candidate : candidates) {
            int score = 0;
            score += hasHighCardinality(candidate) ? 10 : 0;
            score += isEvenlyDistributed(candidate) ? 10 : 0;
            score += isPrimaryQueryKey(candidate) ? 10 : 0;
            score += isImmutable(candidate) ? 5 : 0;
            scores.put(candidate, score);
        }

        return scores.entrySet().stream()
            .max(Map.Entry.comparingByValue())
            .map(e -> e.getKey())
            .orElse("No good shard key found");
    }

    private boolean hasHighCardinality(String column) {
        // Check distinct values vs total rows
        // Rule: cardinality should be > 10% of row count
        return true; // Simplified
    }

    private boolean isEvenlyDistributed(String column) {
        // Check value distribution (no hot spot > 10% of total)
        return true; // Simplified
    }
}

// === 3. Consistent hashing ===
/*
Consistent hashing solves the rebalancing problem:
  - Hash range mapped onto a ring (0 to 2^32 - 1)
  - Each shard is assigned one or more points on the ring
  - Each key is hashed to a point on the ring
  - Key belongs to the nearest shard going clockwise

Adding/removing a shard:
  - Only affects the keys in the adjacent range
  - Most keys stay where they are
  - Minimizes data movement

Virtual nodes:
  - Each physical shard maps to multiple ring positions
  - Better distribution with heterogeneous hardware
  - Default in Cassandra, Riak, Dynamo
*/

// === 4. Sharding with Spring Cloud (ShardingSphere) ===
/*
Apache ShardingSphere is a popular sharding framework for Java:
pom.xml:
<dependency>
    <groupId>org.apache.shardingsphere</groupId>
    <artifactId>shardingsphere-jdbc-core-spring-boot-starter</artifactId>
    <version>5.4.0</version>
</dependency>
*/

/*
application.yml (ShardingSphere configuration):
spring:
  shardingsphere:
    datasource:
      names: shard0, shard1, shard2
      shard0:
        jdbc-url: jdbc:postgresql://host0:5432/orderdb
        username: user
        password: pass
      shard1:
        jdbc-url: jdbc:postgresql://host1:5432/orderdb
        username: user
        password: pass
      shard2:
        jdbc-url: jdbc:postgresql://host2:5432/orderdb
        username: user
        password: pass

    rules:
      sharding:
        tables:
          orders:
            actual-data-nodes: shard${0..2}.orders
            table-strategy:
              standard:
                sharding-column: customer_id
                sharding-algorithm-name: mod
        sharding-algorithms:
          mod:
            type: MOD
            props:
              sharding-count: 3
        default-key-generators:
          snowflake:
            type: SNOWFLAKE
*/

// Programmatic sharding configuration
@Configuration
@Profile("sharded")
class ShardConfiguration {

    @Bean
    public DataSource shardedDataSource() {
        /*
        // Manual sharding approach:

        ShardManager shardManager = new ShardManager();
        shardManager.addShard("shard0", createDataSource("jdbc:postgresql://host0/orderdb"));
        shardManager.addShard("shard1", createDataSource("jdbc:postgresql://host1/orderdb"));
        shardManager.addShard("shard2", createDataSource("jdbc:postgresql://host2/orderdb"));

        return new ShardedDataSource(shardManager, new ModShardStrategy(3));
        */
        return null;
    }
}

// === 5. Application-level sharding ===
@Service
class ApplicationShardService {
    private final Map<Integer, DataSource> shards = new HashMap<>();
    private static final int SHARD_COUNT = 3;

    public ApplicationShardService() {
        for (int i = 0; i < SHARD_COUNT; i++) {
            shards.put(i, createDataSource(i));
        }
    }

    // Determine shard for a given customer
    public DataSource getShardForCustomer(Long customerId) {
        int shardId = (int) (customerId % SHARD_COUNT);
        return shards.get(shardId);
    }

    // Execute query on correct shard
    public Order findOrder(Long customerId, Long orderId) {
        DataSource shard = getShardForCustomer(customerId);
        JdbcTemplate jdbc = new JdbcTemplate(shard);

        // This query only hits one shard — efficient
        return jdbc.queryForObject(
            "SELECT * FROM orders WHERE id = ? AND customer_id = ?",
            orderRowMapper, orderId, customerId);
    }

    // Cross-shard query — query all shards and combine
    public List<Order> findOrdersByStatus(String status) {
        List<Order> allOrders = new ArrayList<>();
        for (DataSource shard : shards.values()) {
            JdbcTemplate jdbc = new JdbcTemplate(shard);
            allOrders.addAll(
                jdbc.query("SELECT * FROM orders WHERE status = ?",
                    orderRowMapper, status));
        }
        return allOrders;
    }

    private DataSource createDataSource(int shardId) {
        return DataSourceBuilder.create()
            .url("jdbc:postgresql://host" + shardId + ":5432/orderdb")
            .username("user")
            .password("pass")
            .build();
    }

    private final RowMapper<Order> orderRowMapper = (rs, rowNum) -> {
        Order o = new Order();
        o.setId(rs.getLong("id"));
        o.setCustomerId(rs.getLong("customer_id"));
        o.setTotal(rs.getBigDecimal("total"));
        o.setStatus(rs.getString("status"));
        return o;
    };
}

// === 6. Rebalancing strategies ===
@Service
class RebalancingService {
    private final JdbcTemplate jdbc;

    /*
    Rebalancing approaches:

    1. Offline rebalancing:
       - Stop writes
       - Redistribute data
       - Update routing
       - Resume writes
       Pros: Simple, consistent
       Cons: Downtime

    2. Online rebalancing:
       - Add new shards
       - Migrate data incrementally
       - Use dual-write (write to both old and new)
       - Update routing when migration complete
       Pros: Zero downtime
       Cons: Complex, temporary consistency issues

    3. Presharding:
       - Create more shards than needed initially
       - Use virtual nodes
       - Just reassign virtual nodes on scale-out
       Pros: No data movement
       Cons: Over-provisioning
    */

    // Online rebalancing: migrate data range from old to new shard
    @Transactional
    public void migrateShardRange(int fromShard, int toShard,
                                    Long startId, Long endId) {
        log.info("Migrating orders {}-{} from shard {} to shard {}",
            startId, endId, fromShard, toShard);

        DataSource source = getShard(fromShard);
        DataSource target = getShard(toShard);

        // Read from source
        JdbcTemplate sourceJdbc = new JdbcTemplate(source);
        List<Order> orders = sourceJdbc.query(
            "SELECT * FROM orders WHERE id BETWEEN ? AND ?",
            orderRowMapper, startId, endId);

        // Write to target
        JdbcTemplate targetJdbc = new JdbcTemplate(target);
        for (Order order : orders) {
            targetJdbc.update(
                "INSERT INTO orders (id, customer_id, total, status) " +
                "VALUES (?, ?, ?, ?)",
                order.getId(), order.getCustomerId(),
                order.getTotal(), order.getStatus());
        }

        // Delete from source (after verification)
        sourceJdbc.update(
            "DELETE FROM orders WHERE id BETWEEN ? AND ?",
            startId, endId);

        // Update routing table
        updateRouting(fromShard, toShard, startId, endId);
    }

    private void updateRouting(int fromShard, int toShard,
                                Long startId, Long endId) {
        jdbc.update("""
            INSERT INTO shard_routing (range_start, range_end, shard_id)
            VALUES (?, ?, ?)
            ON CONFLICT (range_start, range_end)
            DO UPDATE SET shard_id = EXCLUDED.shard_id
            """, startId, endId, toShard);
    }
}

// === 7. Sharding considerations and challenges ===
/*
Challenge           Impact                        Mitigation
─────────────────────────────────────────────────────────────
Distributed joins   Cross-shard JOINs are slow     Denormalize, or use application join
Distributed transactions  2PC is slow, unreliable  Use saga pattern or eventual consistency
Auto-increment IDs  Unique across shards            Snowflake, UUID, or sequence ranges
Schema changes      Must roll out to all shards     Use Flyway per shard or sidecar
Backup/Restore      Multiple databases              Consistent snapshot across shards
Hot spots           Uneven load distribution        Use consistent hashing, split hot shards
Resharding          Expensive data movement         Preshard or use consistent hashing
Global queries      Query all shards (slow)         Maintain denormalized global view

// When NOT to shard:
// - Data fits on one server (< 500GB)
// - Read-heavy workload (caching may suffice)
// - Complex JOINs and transactions
// - Early-stage product (premature optimization)
// - Team lacks operational experience
*/

// === 8. Monitoring shard health ===
@Component
class ShardHealthMonitor {
    private final Map<Integer, DataSource> shards;

    @Scheduled(fixedRate = 60_000)
    public void checkShardHealth() {
        for (Map.Entry<Integer, DataSource> entry : shards.entrySet()) {
            int shardId = entry.getKey();
            DataSource ds = entry.getValue();

            try (Connection conn = ds.getConnection()) {
                if (!conn.isValid(5)) {
                    log.error("Shard {} is unhealthy!", shardId);
                    alertOps("Shard " + shardId + " down");
                }
            } catch (SQLException e) {
                log.error("Cannot connect to shard {}", shardId);
            }
        }
    }

    @Scheduled(fixedRate = 300_000)
    public void checkShardBalance() {
        for (Map.Entry<Integer, DataSource> entry : shards.entrySet()) {
            JdbcTemplate jdbc = new JdbcTemplate(entry.getValue());
            Long rowCount = jdbc.queryForObject(
                "SELECT COUNT(*) FROM orders", Long.class);

            log.info("Shard {}: {} orders", entry.getKey(), rowCount);

            // Alert if imbalance > 20%
            // (handled by external monitoring)
        }
    }
}
```

Sharding enables horizontal scaling by distributing data across databases. Choose a shard key with high cardinality, even distribution, and alignment with your primary query pattern (customer_id is a common choice). Prefer hash-based or consistent-hashing strategies for even distribution. Cross-shard queries and distributed transactions are expensive — design your data model to keep most queries within a single shard. Don't shard until you actually need it — premature sharding adds complexity without benefit. Start with a single database, optimize queries and indexes, add caching, then shard only when the single database is genuinely the bottleneck.


### Q20: What is database partitioning? Explain RANGE, LIST, HASH, composite partitioning, and partition pruning.

**Answer:** Partitioning divides a large table into smaller, manageable segments (partitions) while maintaining a single logical table. Unlike sharding (which distributes across servers), partitioning keeps all partitions within the same database instance. Types: RANGE (by date range), LIST (by discrete values), HASH (by hash of a column), and composite (combinations like RANGE-HASH). Partition pruning eliminates irrelevant partitions at query time — dramatically reducing data scanned.

```java
// === 1. Partitioning types ===
/*
Partitioning divides a table into physical sub-tables.
Queries on the parent table automatically route to the correct partition(s).
Partition pruning: query planner skips partitions that don't match WHERE clause.

Benefits:
  - Faster queries on large tables (prunes irrelevant partitions)
  - Faster bulk deletes (DROP PARTITION vs DELETE)
  - Easier archiving (detach partition)
  - Better maintenance (VACUUM per partition)
  - Parallel scans across partitions
*/

// === 2. PostgreSQL partitioning examples ===
/*
-- RANGE partitioning: By date range
CREATE TABLE orders (
    id BIGSERIAL,
    customer_name VARCHAR(100),
    total DECIMAL(10,2),
    status VARCHAR(20),
    created_at DATE NOT NULL
) PARTITION BY RANGE (created_at);

CREATE TABLE orders_2024_q1 PARTITION OF orders
    FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');

CREATE TABLE orders_2024_q2 PARTITION OF orders
    FOR VALUES FROM ('2024-04-01') TO ('2024-07-01');

CREATE TABLE orders_2024_q3 PARTITION OF orders
    FOR VALUES FROM ('2024-07-01') TO ('2024-10-01');

CREATE TABLE orders_2024_q4 PARTITION OF orders
    FOR VALUES FROM ('2024-10-01') TO ('2025-01-01');

-- LIST partitioning: By discrete values
CREATE TABLE orders_by_status (
    id BIGSERIAL,
    customer_name VARCHAR(100),
    total DECIMAL(10,2),
    status VARCHAR(20)
) PARTITION BY LIST (status);

CREATE TABLE orders_pending PARTITION OF orders_by_status
    FOR VALUES IN ('PENDING');

CREATE TABLE orders_shipped PARTITION OF orders_by_status
    FOR VALUES IN ('SHIPPED');

CREATE TABLE orders_delivered PARTITION OF orders_by_status
    FOR VALUES IN ('DELIVERED', 'COMPLETED');

CREATE TABLE orders_other PARTITION OF orders_by_status DEFAULT;

-- HASH partitioning: By hash of column
CREATE TABLE orders_hash (
    id BIGSERIAL,
    customer_id BIGINT,
    total DECIMAL(10,2)
) PARTITION BY HASH (customer_id);

CREATE TABLE orders_hash_0 PARTITION OF orders_hash
    FOR VALUES WITH (MODULUS 4, REMAINDER 0);

CREATE TABLE orders_hash_1 PARTITION OF orders_hash
    FOR VALUES WITH (MODULUS 4, REMAINDER 1);

CREATE TABLE orders_hash_2 PARTITION OF orders_hash
    FOR VALUES WITH (MODULUS 4, REMAINDER 2);

CREATE TABLE orders_hash_3 PARTITION OF orders_hash
    FOR VALUES WITH (MODULUS 4, REMAINDER 3);

-- Composite (sub-partitioning): RANGE then HASH
CREATE TABLE orders_composite (
    id BIGSERIAL,
    customer_id BIGINT,
    created_at DATE NOT NULL,
    total DECIMAL(10,2)
) PARTITION BY RANGE (created_at);

CREATE TABLE orders_2024 PARTITION OF orders_composite
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01')
    PARTITION BY HASH (customer_id);

CREATE TABLE orders_2024_h0 PARTITION OF orders_2024
    FOR VALUES WITH (MODULUS 4, REMAINDER 0);

CREATE TABLE orders_2024_h1 PARTITION OF orders_2024
    FOR VALUES WITH (MODULUS 4, REMAINDER 1);
*/

// === 3. Managing partitions via Flyway ===
/*
// V1__create_partitioned_orders.sql
CREATE TABLE orders (
    id BIGSERIAL,
    customer_name VARCHAR(100),
    total DECIMAL(10,2),
    status VARCHAR(20),
    created_at DATE NOT NULL
) PARTITION BY RANGE (created_at);

// V2__create_initial_partitions.sql
CREATE TABLE orders_2024_q1 PARTITION OF orders
    FOR VALUES FROM ('2024-01-01') TO ('2024-04-01');
CREATE TABLE orders_2024_q2 PARTITION OF orders
    FOR VALUES FROM ('2024-04-01') TO ('2024-07-01');
CREATE TABLE orders_2024_q3 PARTITION OF orders
    FOR VALUES FROM ('2024-07-01') TO ('2024-10-01');
CREATE TABLE orders_2024_q4 PARTITION OF orders
    FOR VALUES FROM ('2024-10-01') TO ('2025-01-01');
*/

// === 4. Partition management in Java ===
@Component
class PartitionManager {
    private final JdbcTemplate jdbc;

    @Scheduled(cron = "0 0 0 1 1,4,7,10 ?")  // First day of each quarter
    public void createNextQuarterPartition() {
        // Auto-create next quarter's partition
        LocalDate now = LocalDate.now();
        int quarter = (now.getMonthValue() - 1) / 3 + 1;
        int nextQuarter = quarter == 4 ? 1 : quarter + 1;
        int year = nextQuarter == 1 ? now.getYear() + 1 : now.getYear();

        String partitionName = String.format("orders_%d_q%d", year, nextQuarter);
        LocalDate start = LocalDate.of(year, (nextQuarter - 1) * 3 + 1, 1);
        LocalDate end = start.plusMonths(3);

        jdbc.execute(String.format("""
            CREATE TABLE IF NOT EXISTS %s PARTITION OF orders
            FOR VALUES FROM ('%s') TO ('%s')
            """, partitionName, start, end));

        log.info("Created partition {}: {} to {}", partitionName, start, end);
    }

    @Scheduled(cron = "0 0 2 1 1,4,7,10 ?")  // Night of first day
    public void archiveOldPartitions() {
        // Detach partitions older than 2 years
        LocalDate cutoff = LocalDate.now().minusYears(2);

        List<Map<String, Object>> oldPartitions = jdbc.queryForList("""
            SELECT inhrelid::regclass::text AS partition_name,
                   pg_get_expr(relpartbound, inhrelid) AS boundary
            FROM pg_inherits
            JOIN pg_class ON pg_class.oid = inhrelid
            WHERE inhparent = 'orders'::regclass
              AND relispartition = true
            """);

        for (Map<String, Object> partition : oldPartitions) {
            String name = (String) partition.get("partition_name");
            String boundary = (String) partition.get("boundary");

            // Check if partition is older than cutoff
            if (boundary.contains(cutoff.getYear() + "")) {
                // Detach and convert to standalone table (archive)
                jdbc.execute(String.format(
                    "ALTER TABLE orders DETACH PARTITION %s", name));
                log.info("Archived partition: {}", name);

                // Optionally move to archive tablespace
                // jdbc.execute("ALTER TABLE " + name + " SET TABLESPACE archive");
            }
        }
    }
}

// === 5. Partition pruning in action ===
/*
Query: SELECT * FROM orders WHERE created_at BETWEEN '2024-05-01' AND '2024-06-01';

Without partitioning:
  Seq Scan on orders (rows=10M) ← scans entire table

With RANGE partitioning on created_at:
  Seq Scan on orders_2024_q2 (rows=2.5M) ← only scans Q2 partition
  Partition pruning: scanned 1 of 4 partitions

EXPLAIN output:
  Append
    Subplans Removed: 3  ← 3 partitions pruned
    ->  Seq Scan on orders_2024_q2
          Filter: (created_at >= '2024-05-01' AND created_at <= '2024-06-01')

// Partition pruning happens when:
// - WHERE clause references partition key
// - JOIN condition references partition key
// - The condition is sargable (no functions wrapping partition key)
// - Statistics are up to date
*/

// === 6. Indexing partitions ===
/*
// Each partition can have its own indexes:
CREATE INDEX idx_orders_q1_status ON orders_2024_q1(status);
CREATE INDEX idx_orders_q2_status ON orders_2024_q2(status);

// Or create index on parent table (propagates to all partitions):
CREATE INDEX idx_orders_created_at ON orders(created_at);
// This creates individual indexes on each partition automatically

// Unique constraint MUST include partition key:
-- BAD: CREATE UNIQUE INDEX idx_orders_id ON orders(id);
-- ERROR: unique constraint on partitioned table must include all partition columns
-- GOOD: CREATE UNIQUE INDEX idx_orders_id_date ON orders(id, created_at);
*/

// === 7. Partition pruning verification ===
@Service
class PartitionPruningVerifier {
    private final JdbcTemplate jdbc;

    public void verifyPruning() {
        // Check that query planner prunes partitions
        List<Map<String, Object>> plan = jdbc.queryForList("""
            EXPLAIN (ANALYZE, COSTS OFF)
            SELECT COUNT(*) FROM orders
            WHERE created_at >= '2024-05-01'
              AND created_at < '2024-06-01'
            """);

        plan.forEach(row -> log.info("{}", row));
        // Look for: Partition Pruning: yes (or Subplans Removed: N)
    }

    public void checkPartitionSizes() {
        List<Map<String, Object>> sizes = jdbc.queryForList("""
            SELECT
                inhrelid::regclass::text AS partition_name,
                pg_size_pretty(pg_total_relation_size(inhrelid::regclass))
                    AS size,
                (SELECT count(*) FROM inhrelid::regclass) AS rows
            FROM pg_inherits
            WHERE inhparent = 'orders'::regclass
            ORDER BY partition_name
            """);

        sizes.forEach(row ->
            log.info("{}: {} ({} rows)",
                row.get("partition_name"),
                row.get("size"),
                row.get("rows")));
    }
}

// === 8. Performance comparison ===
/*
Scenario: Table with 100M orders, queried by last 30 days (3M rows)
Query: SELECT SUM(total) FROM orders WHERE created_at > CURRENT_DATE - 30

Without partitioning:
  Time: 45 seconds (full table sequential scan)
  Buffers: 1,200,000 reads

With monthly RANGE partitioning:
  Time: 1.5 seconds (scans 1 of 12 partitions)
  Buffers: 100,000 reads

With daily RANGE + index:
  Time: 0.2 seconds (index scan on 1 partition)
  Buffers: 5,000 reads

// Key insight: Partition doesn't make individual queries faster by itself,
// but partition pruning makes the query read fewer rows.
// For truly fast lookups, you still need indexes within partitions.
*/

// === 9. Partitioning vs sharding ===
/*
Dimension         Partitioning                Sharding
──────────────────────────────────────────────────────────
Scope             Single database instance    Multiple database instances
Data distribution Within one server            Across servers
Transparency      Fully transparent           Application-aware or middleware
Query routing     Automatic (pruning)          Explicit (shard key in query)
Cross-partition   Full support                 Complex, expensive
Cross-shard       N/A                         Very expensive
Scalability       Vertical (larger server)    Horizontal (more servers)
Management        Simple (DDL operations)     Complex (monitoring, ops)
Use case          Large tables, time-series   Massive scale, multi-region

// Rule of thumb:
// Partition first, shard later (if needed)
// Partition: table > 100GB or > 10M rows
// Shard: partition > 500GB or need multi-region
*/
```

Partitioning improves query performance on large tables by enabling partition pruning — only relevant partitions are scanned. RANGE partitioning is ideal for time-series data (events, logs, orders). LIST partitioning works for categorical data. HASH partitioning spreads writes evenly. Composite partitioning combines strategies for very large datasets. Automate partition creation and archiving with scheduled jobs. Always include the partition key in WHERE clauses to enable pruning. Start with partitioning before sharding — it's simpler and sufficient for most scale challenges.


### Q21: Explain database replication: synchronous vs asynchronous, leader-follower, multi-leader, and quorum.

**Answer:** Replication copies data from one database server to others for high availability, read scalability, and disaster recovery. Synchronous replication waits for replicas to acknowledge writes — stronger consistency but higher latency. Asynchronous replication allows the leader to commit without waiting — better performance but potential data loss on failure. Architectures: leader-follower (single writer), multi-leader (multiple writers), and leaderless (quorum-based). The choice depends on consistency and availability requirements.

```java
// === 1. Replication architectures ===
/*
Leader-follower (master-slave):
  - One leader accepts writes
  - Followers replicate from leader (read replicas)
  - If leader fails → promote a follower
  - Most common: PostgreSQL, MySQL, SQL Server

Multi-leader (master-master):
  - Multiple nodes accept writes
  - Each leader replicates to all others
  - Conflict resolution required
  - Common: MySQL Group Replication, PostgreSQL BDR

Leaderless (quorum):
  - Any node can accept reads/writes
  - Consistency via quorum: W + R > N
  - Common: Cassandra, DynamoDB, Riak
*/

// === 2. Synchronous vs asynchronous replication ===
@Service
class ReplicationComparisonService {

    @Transactional(readOnly = true)
    public void explainReplicationModes() {
        /*
        Synchronous replication:
          Leader waits for at least one replica to confirm write
          Pros: No data loss on failover (zero RPO)
          Cons: Higher latency (network round-trip)
          Use: Financial data, critical transactions

        Asynchronous replication:
          Leader commits without waiting for replicas
          Pros: Lower latency, higher throughput
          Cons: Potential data loss on leader failure
          Use: Read replicas, analytics, reporting

        Semi-synchronous:
          Leader waits for at least one sync replica
          Others replicate asynchronously
          Compromise: Good balance of safety and performance
        */
    }
}

// === 3. Configuring read-write splitting ===
@Configuration
class ReadWriteDataSourceConfiguration {

    @Bean
    @Primary
    @ConfigurationProperties(prefix = "app.datasource.primary")
    public DataSource primaryDataSource() {
        // Writes go to leader
        return DataSourceBuilder.create()
            .url("jdbc:postgresql://leader:5432/orderdb")
            .username("app")
            .password("pass")
            .build();
    }

    @Bean
    @ConfigurationProperties(prefix = "app.datasource.replica")
    public DataSource replicaDataSource() {
        // Reads go to replica
        return DataSourceBuilder.create()
            .url("jdbc:postgresql://replica1:5432,replica2:5432/orderdb")
            .username("app_reader")
            .password("pass")
            .build();
    }

    // Routing datasource — sends writes to leader, reads to replica
    @Bean
    public DataSource routingDataSource() {
        Map<Object, Object> dataSources = new HashMap<>();
        dataSources.put("primary", primaryDataSource());
        dataSources.put("replica", replicaDataSource());

        ReadWriteRoutingDataSource routing =
            new ReadWriteRoutingDataSource();
        routing.setDefaultTargetDataSource(primaryDataSource());
        routing.setTargetDataSources(dataSources);
        return routing;
    }
}

// Custom routing datasource
class ReadWriteRoutingDataSource extends AbstractRoutingDataSource {
    @Override
    protected Object determineCurrentLookupKey() {
        return TransactionSynchronizationManager
            .isCurrentTransactionReadOnly()
            ? "replica" : "primary";
    }
}

// === 4. Read-only transactions route to replicas ===
@Service
class OrderReplicatedService {
    private final OrderRepository orderRepository;

    // readOnly = true → routed to replica
    @Transactional(readOnly = true)
    public Order findById(Long id) {
        return orderRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Not found"));
    }

    @Transactional(readOnly = true)
    public List<Order> findByStatus(String status) {
        return orderRepository.findByStatus(status);
    }

    @Transactional(readOnly = true)
    public Page<OrderSummary> getReport(LocalDate from, LocalDate to,
                                          Pageable pageable) {
        // Heavy reporting queries go to replica
        // Don't impact OLTP performance on leader
        return orderRepository.findByCreatedAtBetween(from, to, pageable);
    }

    // Non-readOnly → routed to leader
    @Transactional
    public Order createOrder(CreateOrderRequest request) {
        Order order = new Order();
        order.setCustomerName(request.customerName());
        order.setTotal(request.total());
        order.setStatus("PENDING");
        Order saved = orderRepository.save(order);

        // NOTE: Can't immediately read from replica —
        // replication lag means the replica may not have the data yet
        return saved;
    }
}

// === 5. Handling replication lag ===
@Service
class ReplicationLagHandler {
    private final OrderRepository orderRepository;

    @Transactional(readOnly = true)
    public Order readAfterWrite(Long orderId) {
        // BAD: read from replica immediately after write
        // Replica might be behind — may not find the order

        // GOOD: Read from leader for "immediately after write" scenarios
        // Use @Transactional(..., readOnly = false) to force leader read
        // Or wrap in a non-read-only transaction
        return orderRepository.findById(orderId)
            .orElseThrow();
    }

    // Force leader read for critical reads
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public Order forceLeaderRead(Long id) {
        // This transaction is NOT read-only → routes to leader
        return orderRepository.findById(id)
            .orElseThrow();
    }

    // Handle eventual consistency
    @Transactional
    public Order createAndReturnWithRetry(CreateOrderRequest request) {
        Order saved = orderRepository.save(new Order(request));

        // Retry with backoff for read-after-write consistency
        int retries = 5;
        while (retries > 0) {
            try {
                // Force leader read
                return forceLeaderRead(saved.getId());
            } catch (Exception e) {
                retries--;
                if (retries == 0) throw e;
                try { Thread.sleep(100); } catch (InterruptedException ie) {}
            }
        }
        return saved;
    }
}

// === 6. Read replicas with Spring Cloud + PostgreSQL ===
/*
application.yml:
spring:
  datasource:
    primary:
      jdbc-url: jdbc:postgresql://leader:5432/orderdb
      username: app_writer
      password: ${WRITER_PASS}
    replica:
      jdbc-url: jdbc:postgresql://replica1:5432,replica2:5432/orderdb
      username: app_reader
      password: ${READER_PASS}

  jpa:
    properties:
      hibernate:
        connection:
          // Disable Hibernate auto-flush for read-only transactions
          // (we want to actually route to replica, not just skip flush)
        generate_statistics: true
*/

// === 7. Quorum-based replication (Cassandra-style) ===
@Service
class QuorumReplicationService {
    private final JdbcTemplate jdbc;

    /*
    Quorum: W + R > N

    N = total replicas (e.g., 3)
    W = write consistency (how many replicas confirm write)
    R = read consistency (how many replicas read from)

    Examples:
      W=3, R=1 (N=3): Strong writes, fast reads
      W=1, R=1 (N=3): Fast both, weak consistency
      W=2, R=2 (N=3): Balanced (quorum = 2 + 2 > 3)

    Reading with quorum:
      Read from R replicas
      Compare timestamps/versions
      Return most recent version
      If versions differ, repair stale replicas (read repair)
    */

    @Transactional(readOnly = true)
    public void quorumExample() {
        /*
        // PostgreSQL does not natively support quorum reads.
        // But the pattern applies to distributed databases:

        // Read from 2 out of 3 replicas:
        String version1 = getVersionFromReplica("replica1", 1L);
        String version2 = getVersionFromReplica("replica2", 1L);

        if (version1.equals(version2)) {
            // Consistent across replicas
        } else {
            // Inconsistency detected — read from third replica
            // Return latest version, trigger repair
            String version3 = getVersionFromReplica("replica3", 1L);
            // Repair stale replicas
        }
        */
    }
}

// === 8. Multi-leader replication ===
/*
Multi-leader topology:
  - Each data center has a leader
  - Leaders replicate bidirectionally
  - Writes accepted locally in each DC
  - Conflict resolution: last-write-wins, CRDTs, application-merge

// Use cases:
// - Multi-region (write local, replicate globally)
// - Offline-first apps (local DB syncs when online)
// - Active-active disaster recovery

// Challenges:
// - Write conflicts (same record modified in two DCs)
// - Conflict resolution strategy needed
// - Causality tracking (which write happened first?)
// - Circular replication (avoid infinite loops)

// PostgreSQL solutions:
// - BDR (Bi-Directional Replication)
// - pglogical (logical replication)
// - Bucardo (trigger-based)
*/

// === 9. Monitoring replication health ===
@Component
class ReplicationMonitor {
    private final JdbcTemplate jdbc;

    @Scheduled(fixedRate = 30_000)
    public void checkReplicationLag() {
        // PostgreSQL replication lag check
        List<Map<String, Object>> lag = jdbc.queryForList("""
            SELECT
                client_addr,
                application_name,
                state,
                pg_wal_lsn_diff(
                    pg_current_wal_lsn(),
                    replay_lsn
                ) AS lag_bytes,
                ROUND(
                    EXTRACT(EPOCH FROM NOW() - pg_last_xact_replay_timestamp())
                ) AS lag_seconds
            FROM pg_stat_replication
            """);

        lag.forEach(row -> {
            long lagSeconds = ((Number) row.get("lag_seconds")).longValue();
            if (lagSeconds > 30) {
                log.error("REPLICATION LAG: {} is {} seconds behind!",
                    row.get("application_name"), lagSeconds);
                alertOps("High replication lag: " + lagSeconds + "s");
            } else if (lagSeconds > 5) {
                log.warn("Replication lag: {} ({}s)",
                    row.get("application_name"), lagSeconds);
            }
        });
    }

    @Scheduled(cron = "0 0 * * * ?")  // Hourly
    public void checkReadReplicaStaleness() {
        // Compare recent counts between leader and replica
        Long leaderCount = jdbc.queryForObject(
            "SELECT COUNT(*) FROM orders WHERE created_at > NOW() - INTERVAL '1 hour'",
            Long.class);

        // Run the same query on replica (separate datasource)
        // Alert if difference > threshold
    }

    @EventListener
    public void onReplicaFailure(ApplicationReadyEvent event) {
        log.info("Replication monitoring started");
        // Initialize monitoring connections to replicas
    }
}

// === 10. Comparison of replication approaches ===
/*
Approach           Consistency     Latency    Write Throughput  Complexity
─────────────────────────────────────────────────────────────────────────
Sync (1 replica)   Strong          Higher     Lower             Low
Async              Eventual        Low        Higher            Low
Semi-sync          Strong+         Medium     Medium            Medium
Multi-leader       Eventual        Low        Highest           High
Quorum (W+R>N)     Tunable         Medium     Medium            High

// Recommendation:
// - Start with async replication for read scalability
// - Add semi-sync for critical financial data
// - Use multi-leader only for multi-region active-active
// - Monitor replication lag as a key operational metric
// - Always test failover scenarios regularly
*/
```

Replication is essential for high availability and read scalability. Asynchronous replication with read replicas is the standard approach — leaders handle writes, replicas serve read queries and reporting. Use @Transactional(readOnly = true) to route queries to replicas. Beware of replication lag — read-after-write problems require leader reads for immediate consistency. Monitor lag as a critical metric (< 5s is healthy, > 30s is emergency). For stronger guarantees, use synchronous or semi-sync replication. Multi-leader replication is powerful but complex — only use when single-leader topology is insufficient.


### Q22: How do you handle distributed transactions? When do you use XA vs BASE and the saga pattern?

**Answer:** Distributed transactions span multiple databases, services, or message brokers. XA (two-phase commit / 2PC) provides ACID guarantees across resources but sacrifices performance and availability — a coordinator ensures all participants commit or all roll back. BASE (saga pattern) breaks a distributed transaction into a sequence of local transactions with compensating actions for rollback — it prioritizes availability over strict consistency. Sagas are the modern standard for microservices.

```java
// === 1. The distributed transaction problem ===
/*
A distributed transaction touches multiple resources:
  - Database A (orders)
  - Database B (inventory)
  - Message broker (notifications)

In a single database: local transaction, ACID, simple.
Across services/databases: consistency is hard.

Challenges:
  - Network failures
  - Partial failures (some succeed, some fail)
  - Coordination overhead
  - Deadlocks across services
  - Performance impact
*/

// === 2. XA (Two-Phase Commit / 2PC) ===
/*
Phase 1: Prepare
  Coordinator asks all participants: "Can you commit?"
  Each participant: validates, writes prepare record, responds yes/no

Phase 2: Commit
  If all said yes: coordinator sends COMMIT to all
  If any said no: coordinator sends ROLLBACK to all

Downsides:
  - Coordinator is a single point of failure
  - Locks held during phase 1 → reduced concurrency
  - Blocking protocol (participants wait for coordinator)
  - Not suitable for long-running transactions
  - Rarely used in microservices architectures
*/

// XA with Spring + Atomikos
/*
pom.xml:
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jta-atomikos</artifactId>
</dependency>
*/

@Configuration
@EnableTransactionManagement
class XAConfiguration {

    @Bean
    @Primary
    @ConfigurationProperties(prefix = "app.datasource.orders")
    public DataSource ordersDataSource() {
        return DataSourceBuilder.create()
            .url("jdbc:postgresql://host1:5432/orders")
            .username("app")
            .password("pass")
            .build();
    }

    @Bean
    @ConfigurationProperties(prefix = "app.datasource.inventory")
    public DataSource inventoryDataSource() {
        return DataSourceBuilder.create()
            .url("jdbc:postgresql://host2:5432/inventory")
            .username("app")
            .password("pass")
            .build();
    }

    @Bean
    public JtaTransactionManager transactionManager() {
        return new JtaTransactionManager(
            atomikosTransactionManager(), userTransaction());
    }

    @Bean
    public UserTransaction userTransaction() {
        return new com.atomikos.icatch.jta.UserTransactionImp();
    }

    @Bean
    public TransactionManager atomikosTransactionManager() {
        return new com.atomikos.icatch.jta.UserTransactionManager();
    }
}

// XA distributed transaction
@Service
class XaOrderService {
    private final DataSource ordersDataSource;
    private final DataSource inventoryDataSource;

    @Transactional  // JTA transaction manager coordinates across DS
    public void createOrderXa(CreateOrderRequest request) {
        // Both operations are in the same global transaction
        // XA coordinator ensures both commit or both rollback

        try (Connection ordersConn = ordersDataSource.getConnection()) {
            // Insert order
            try (PreparedStatement stmt = ordersConn.prepareStatement(
                    "INSERT INTO orders (customer, total, status) VALUES (?, ?, 'PENDING')")) {
                stmt.setString(1, request.customerName());
                stmt.setBigDecimal(2, request.total());
                stmt.executeUpdate();
            }
        } catch (SQLException e) {
            throw new RuntimeException("Order insert failed", e);
        }

        try (Connection invConn = inventoryDataSource.getConnection()) {
            // Deduct inventory
            try (PreparedStatement stmt = invConn.prepareStatement(
                    "UPDATE inventory SET quantity = quantity - ? WHERE product_id = ?")) {
                stmt.setInt(1, request.quantity());
                stmt.setLong(2, request.productId());
                int updated = stmt.executeUpdate();
                if (updated == 0) {
                    throw new RuntimeException("Product not found");
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Inventory update failed", e);
        }
        // If either fails → both rollback
        // If both succeed → both commit
    }
}

// === 3. Saga pattern ===
/*
A saga is a sequence of local transactions.
Each step publishes an event or triggers the next step.
If a step fails, the saga executes compensating actions (undo).

Two coordination approaches:
  1. Choreography: Each service publishes events, other services react
  2. Orchestration: A coordinator tells services what to do

Saga principles:
  - ACID within each service (local transaction)
  - BASE across services (eventual consistency)
  - Compensating actions for rollback
  - Idempotent operations
*/

// === 4. Choreography-based saga ===
@Service
class ChoreographySagaService {
    private final OrderRepository orderRepository;
    private final KafkaTemplate<String, Object> kafka;

    @Transactional
    public void createOrder(OrderRequest request) {
        // Step 1: Create order (PENDING)
        Order order = new Order();
        order.setCustomerName(request.customerName());
        order.setTotal(request.total());
        order.setStatus("PENDING");
        order = orderRepository.save(order);

        // Publish event → Inventory Service picks it up
        kafka.send("order-created", order.getId().toString(),
            new OrderCreatedEvent(order.getId(), request.productId(),
                request.quantity()));

        log.info("Order created: {}, waiting for inventory", order.getId());
    }

    // Called by Inventory Service via Kafka
    @EventListener
    public void onInventoryResult(InventoryResultEvent event) {
        if (event.isSuccess()) {
            // Approve the order
            orderRepository.updateStatus(event.orderId(), "APPROVED");
        } else {
            // Reject the order (compensation already done by inventory)
            orderRepository.updateStatus(event.orderId(), "REJECTED");
        }
    }
}

// Inventory Service
@Service
class InventorySagaService {
    private final InventoryRepository inventoryRepository;
    private final KafkaTemplate<String, Object> kafka;

    @Transactional
    public void handleOrderCreated(OrderCreatedEvent event) {
        try {
            // Step 2: Deduct inventory
            Inventory inv = inventoryRepository
                .findByProductId(event.productId());
            inv.setQuantity(inv.getQuantity() - event.quantity());
            inventoryRepository.save(inv);

            // Step 3: If success, publish approval
            kafka.send("inventory-result", event.orderId().toString(),
                new InventoryResultEvent(event.orderId(), true));
        } catch (Exception e) {
            // Compensating action: rollback is automatic (local txn)
            // But order is still PENDING — need to notify
            kafka.send("inventory-result", event.orderId().toString(),
                new InventoryResultEvent(event.orderId(), false));
        }
    }
}

// === 5. Orchestration-based saga ===
@Service
class OrderOrchestrator {
    private final RestTemplate rest;
    private final KafkaTemplate<String, Object> kafka;
    private final OrderRepository orderRepository;

    @Transactional
    public void createOrderSaga(OrderRequest request) {
        // Create saga execution in DB
        SagaExecution saga = new SagaExecution();
        saga.setOrderId(orderRepository.save(new Order(request)).getId());
        saga.setStatus("STARTED");
        saga = sagaRepository.save(saga);

        try {
            // Step 1: Reserve inventory
            InventoryResponse inv = rest.postForObject(
                "http://inventory-service/api/reserve",
                new ReserveRequest(request.productId(), request.quantity()),
                InventoryResponse.class);

            if (!inv.isSuccess()) {
                throw new SagaException("Inventory reservation failed");
            }
            saga.setStep1Completed(true);

            // Step 2: Process payment
            PaymentResponse payment = rest.postForObject(
                "http://payment-service/api/charge",
                new PaymentRequest(request.customerId(), request.total()),
                PaymentResponse.class);

            if (!payment.isSuccess()) {
                // Compensate: release inventory
                rest.postForObject(
                    "http://inventory-service/api/release",
                    new ReleaseRequest(request.productId(), request.quantity()),
                    Void.class);
                throw new SagaException("Payment failed");
            }
            saga.setStep2Completed(true);

            // Step 3: Send notification
            try {
                kafka.send("order-notifications",
                    new OrderConfirmationEvent(saga.getOrderId(),
                        request.customerName()));
            } catch (Exception e) {
                log.warn("Notification failed (non-critical): {}", e.getMessage());
                // Non-compensating failure — order is still valid
            }

            // Complete saga
            saga.setStatus("COMPLETED");
            sagaRepository.save(saga);

            orderRepository.updateStatus(saga.getOrderId(), "CONFIRMED");

        } catch (Exception e) {
            saga.setStatus("FAILED");
            saga.setError(e.getMessage());
            sagaRepository.save(saga);

            orderRepository.updateStatus(saga.getOrderId(), "FAILED");
            throw new SagaException("Order processing failed: " + e.getMessage());
        }
    }
}

// Saga execution state (persisted)
@Entity
@Table(name = "saga_executions")
class SagaExecution {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long orderId;
    private String status;  // STARTED, COMPLETED, FAILED
    private boolean step1Completed;
    private boolean step2Completed;
    private String error;
    private Instant createdAt;
    private Instant completedAt;
}

// === 6. Spring state machine for sagas ===
@Configuration
@EnableStateMachineFactory
class SagaStateMachineConfig
        extends StateMachineConfigurer<String, String> {

    @Override
    public void configure(
            StateMachineStateConfigurer<String, String> states) {
        states.withStates()
            .initial("ORDER_CREATED")
            .state("INVENTORY_RESERVED")
            .state("PAYMENT_PROCESSED")
            .end("COMPLETED")
            .end("FAILED")
            .end("COMPENSATING");
    }

    @Override
    public void configure(
            StateMachineTransitionConfigurer<String, String> transitions) {
        transitions
            .withExternal()
                .source("ORDER_CREATED")
                .target("INVENTORY_RESERVED")
                .event("INVENTORY_SUCCESS")
            .and()
            .withExternal()
                .source("ORDER_CREATED")
                .target("COMPENSATING")
                .event("INVENTORY_FAILURE")
            .and()
            .withExternal()
                .source("INVENTORY_RESERVED")
                .target("PAYMENT_PROCESSED")
                .event("PAYMENT_SUCCESS")
            .and()
            .withExternal()
                .source("INVENTORY_RESERVED")
                .target("COMPENSATING")
                .event("PAYMENT_FAILURE")
            .and()
            .withExternal()
                .source("COMPENSATING")
                .target("FAILED")
                .event("COMPENSATION_DONE");
    }
}

// === 7. Saga vs XA comparison ===
/*
Dimension         XA (2PC)                Saga (BASE)
──────────────────────────────────────────────────────
Consistency       Strong (ACID)           Eventual
Isolation         Serializable            Read Committed
Locks             Held during prepare     Released after each step
Performance       Slower (coordinator)    Faster (async)
Scalability       Poor (coordinator)      Good (async)
Complexity        Medium                  High (compensation)
Rollback          Automatic (2PC)         Manual (compensating actions)
Failure handling  Coordinator decides     Application logic
Use case          Single service,         Microservices, multi-service
                  multi-resource
*/

// === 8. Saga best practices ===
@Service
class SagaBestPractices {
    /*
    □ Each step is idempotent
    □ Compensating actions are also idempotent
    □ Saga state is persisted (recoverable)
    □ Timeout handling for hanging steps
    □ Dead letter queue for failed messages
    □ Monitoring dashboard for active sagas
    □ Testing: simulate failures in each step
    */

    // Idempotency key pattern
    public void processWithIdempotency(String sagaId, Runnable step) {
        // Check if step already completed
        SagaStep stepState = sagaStepRepository
            .findBySagaIdAndStepName(sagaId, step.getClass().getName());

        if (stepState != null && stepState.isCompleted()) {
            log.info("Step already completed, skipping");
            return;
        }

        try {
            step.run();
            sagaStepRepository.save(new SagaStep(sagaId,
                step.getClass().getName(), true));
        } catch (Exception e) {
            sagaStepRepository.save(new SagaStep(sagaId,
                step.getClass().getName(), false, e.getMessage()));
            throw e;
        }
    }

    // Timeout handling
    @Scheduled(fixedRate = 60_000)
    public void timeoutActiveSagas() {
        List<SagaExecution> stuckSagas = sagaRepository
            .findByStatusAndCreatedAtBefore("STARTED",
                Instant.now().minus(5, ChronoUnit.MINUTES));

        stuckSagas.forEach(saga -> {
            log.warn("Saga {} timed out, triggering compensation", saga.getId());
            triggerCompensation(saga);
        });
    }

    private void triggerCompensation(SagaExecution saga) {
        // Execute compensating actions for completed steps
        if (saga.isStep1Completed()) {
            // Release inventory
        }
        if (saga.isStep2Completed()) {
            // Refund payment
        }
        saga.setStatus("COMPENSATED");
        sagaRepository.save(saga);
    }
}
```

Distributed transactions are inherently complex. XA (2PC) provides strong consistency but sacrifices performance, scalability, and availability — suitable only for short transactions within a single trust boundary. Sagas provide eventual consistency with better scalability — the standard for microservices. Use choreography for simple workflows (each service reacts to events). Use orchestration for complex workflows (central coordinator manages state). Always persist saga state, ensure idempotent operations, implement compensating actions, and handle timeouts. The best distributed transaction is the one you avoid — design services to minimize cross-service coordination.


### Q23: How do you use CTEs and subqueries effectively with JPA?

**Answer:** CTEs (Common Table Expressions, WITH clause) and subqueries allow complex query logic within a single SQL statement — avoiding multiple round-trips and application-level processing. CTEs are named temporary result sets within a query, useful for recursive queries, multi-step aggregations, and improving readability. Subqueries nest within SELECT, WHERE, FROM, and HAVING clauses. JPA supports subqueries in JPQL (limited) and native queries (full SQL). For complex CTEs, native queries or JdbcTemplate are preferred.

```java
// === 1. CTE basics (SQL) ===
/*
WITH cte_name AS (
    SELECT ...
)
SELECT * FROM cte_name;

Benefits:
  - Better readability (break complex queries into steps)
  - Reuse same result set multiple times
  - Recursive queries (hierarchical data)
  - Avoid repeated subqueries
  - Query planner can optimize WITH vs inline
*/

// === 2. CTE examples with JdbcTemplate ===
@Service
class CteExamplesService {
    private final JdbcTemplate jdbc;

    @Transactional(readOnly = true)
    public void cteExamples() {
        // Simple CTE — total sales per customer
        List<Map<String, Object>> customerSales = jdbc.queryForList("""
            WITH customer_totals AS (
                SELECT c.id, c.name,
                       COUNT(o.id) AS order_count,
                       COALESCE(SUM(o.total), 0) AS total_spent
                FROM customers c
                LEFT JOIN orders o ON c.id = o.customer_id
                GROUP BY c.id, c.name
            )
            SELECT name, order_count, total_spent
            FROM customer_totals
            WHERE total_spent > 1000
            ORDER BY total_spent DESC
            """);

        // Multiple CTEs
        List<Map<String, Object>> multiCte = jdbc.queryForList("""
            WITH
            high_value AS (
                SELECT customer_id, SUM(total) AS total
                FROM orders
                WHERE created_at > '2024-01-01'
                GROUP BY customer_id
                HAVING SUM(total) > 500
            ),
            frequent AS (
                SELECT customer_id, COUNT(*) AS order_count
                FROM orders
                WHERE created_at > '2024-01-01'
                GROUP BY customer_id
                HAVING COUNT(*) > 10
            )
            SELECT c.name, h.total AS high_value_total,
                   f.order_count
            FROM customers c
            JOIN high_value h ON c.id = h.customer_id
            LEFT JOIN frequent f ON c.id = f.customer_id
            ORDER BY h.total DESC
            """);
    }
}

// === 3. Recursive CTE — employee hierarchy ===
@Service
class RecursiveCteService {
    private final JdbcTemplate jdbc;

    @Transactional(readOnly = true)
    public void organizationHierarchy() {
        /*
        employees:
        id | name      | manager_id
        1  | Alice     | null       (CEO)
        2  | Bob       | 1          (VP)
        3  | Charlie   | 1          (VP)
        4  | Diana     | 2          (Director)
        5  | Eve       | 2          (Director)
        6  | Frank     | 3          (Manager)
        7  | Grace     | 4          (Engineer)
        */

        // Recursive CTE finds all descendants of Alice
        List<Map<String, Object>> hierarchy = jdbc.queryForList("""
            WITH RECURSIVE org_tree AS (
                -- Anchor member: top-level employee
                SELECT id, name, manager_id, 0 AS level,
                       name::text AS path
                FROM employees
                WHERE manager_id IS NULL

                UNION ALL

                -- Recursive member: employees whose manager is in the tree
                SELECT e.id, e.name, e.manager_id, t.level + 1,
                       t.path || ' -> ' || e.name
                FROM employees e
                JOIN org_tree t ON e.manager_id = t.id
            )
            SELECT id, name, level, path
            FROM org_tree
            ORDER BY path
            """);

        hierarchy.forEach(row ->
            log.info("{} (Level {}): {}",
                row.get("name"), row.get("level"), row.get("path")));
    }

    // Parent-child hierarchy (find managers chain)
    @Transactional(readOnly = true)
    public void managementChain(Long employeeId) {
        List<Map<String, Object>> chain = jdbc.queryForList("""
            WITH RECURSIVE manager_chain AS (
                SELECT id, name, manager_id, 0 AS level
                FROM employees
                WHERE id = ?

                UNION ALL

                SELECT e.id, e.name, e.manager_id, mc.level + 1
                FROM employees e
                JOIN manager_chain mc ON e.id = mc.manager_id
            )
            SELECT name, level
            FROM manager_chain
            ORDER BY level DESC
            """, employeeId);
        // Returns: CEO → VP → Director → Employee
    }
}

// === 4. Subqueries in JPA ===
@Repository
interface SubqueryOrderRepository extends JpaRepository<Order, Long> {

    // Subquery in WHERE (JPQL)
    @Query("SELECT o FROM Order o WHERE o.total > " +
           "(SELECT AVG(o2.total) FROM Order o2)")
    List<Order> findOrdersAboveAverage();

    // Subquery with correlated condition
    @Query("SELECT o FROM Order o WHERE " +
           "(SELECT COUNT(oi) FROM OrderItem oi " +
            "WHERE oi.order = o) > :minItems")
    List<Order> findOrdersWithAtLeastItems(
        @Param("minItems") int minItems);

    // Subquery with EXISTS
    @Query("SELECT c FROM Customer c WHERE EXISTS " +
           "(SELECT 1 FROM Order o WHERE o.customer = c " +
           "AND o.total > :minTotal)")
    List<Customer> findCustomersWithLargeOrders(
        @Param("minTotal") BigDecimal minTotal);

    // Subquery in SELECT (scalar)
    @Query("SELECT o.customerName, o.total, " +
           "(SELECT AVG(o2.total) FROM Order o2) AS avg_total " +
           "FROM Order o WHERE o.status = :status")
    List<Object[]> findOrdersWithAverage(
        @Param("status") String status);
}

// === 5. Complex CTEs via native queries ===
@Service
class ComplexCteService {
    private final EntityManager em;
    private final JdbcTemplate jdbc;

    // Time-series CTE: fill missing dates
    @Transactional(readOnly = true)
    public List<Map<String, Object>> dailySales(LocalDate from,
                                                  LocalDate to) {
        return jdbc.queryForList("""
            WITH date_series AS (
                SELECT generate_series(?::date, ?::date, '1 day'::interval)
                       ::date AS sale_date
            ),
            daily_totals AS (
                SELECT created_at::date AS sale_date,
                       COUNT(*) AS order_count,
                       COALESCE(SUM(total), 0) AS revenue
                FROM orders
                WHERE created_at::date BETWEEN ? AND ?
                GROUP BY created_at::date
            )
            SELECT ds.sale_date,
                   COALESCE(dt.order_count, 0) AS orders,
                   COALESCE(dt.revenue, 0) AS revenue
            FROM date_series ds
            LEFT JOIN daily_totals dt ON ds.sale_date = dt.sale_date
            ORDER BY ds.sale_date
            """, from, to, from, to);
    }

    // CTE with multiple aggregations
    @Transactional(readOnly = true)
    public List<Map<String, Object>> customerAnalytics() {
        return jdbc.queryForList("""
            WITH customer_metrics AS (
                SELECT
                    customer_id,
                    COUNT(*) AS total_orders,
                    SUM(total) AS lifetime_value,
                    AVG(total) AS avg_order_value,
                    MAX(created_at) AS last_order_date,
                    MIN(created_at) AS first_order_date,
                    COUNT(*) FILTER (WHERE status = 'CANCELLED')
                        AS cancelled_orders
                FROM orders
                GROUP BY customer_id
            )
            SELECT
                c.name,
                cm.total_orders,
                cm.lifetime_value,
                cm.avg_order_value,
                CASE
                    WHEN cm.last_order_date > NOW() - INTERVAL '30 days'
                        THEN 'Active'
                    WHEN cm.last_order_date > NOW() - INTERVAL '90 days'
                        THEN 'At Risk'
                    ELSE 'Churned'
                END AS customer_status,
                cm.cancelled_orders
            FROM customers c
            JOIN customer_metrics cm ON c.id = cm.customer_id
            ORDER BY cm.lifetime_value DESC
            """);
    }
}

// === 6. Subquery performance considerations ===
/*
Subquery type     Performance                 When to use
──────────────────────────────────────────────────────────
WHERE IN          Can be slow if large set    Small result sets (< 100)
WHERE EXISTS      Often fastest               Correlation check
WHERE NOT EXISTS  Efficient for anti-join     "Customers without orders"
SELECT scalar     Executes per row (N+1!)     Only for small result sets
FROM subquery     Like CTE (materialized)     Complex aggregations

// Optimization tips:
// 1. EXISTS vs IN: EXISTS is faster for correlated subqueries
// 2. IN vs JOIN: Use JOIN when you need columns from both tables
// 3. Nested subqueries: Extract to CTE for readability and performance
// 4. Correlated subqueries: Can be slow for large tables
// 5. Materialized: Mark CTEs as MATERIALIZED to force materialization

// PostgreSQL CTE behavior:
// WITH cte AS MATERIALIZED ( ... )  ← Force materialization (default)
// WITH cte AS NOT MATERIALIZED ( ... )  ← Inline (optimizer merges)
*/

// === 7. DTO projections from CTEs ===
// Record for CTE results
record CustomerAnalyticsDto(
    String name,
    Long totalOrders,
    BigDecimal lifetimeValue,
    BigDecimal avgOrderValue,
    String customerStatus
) {}

@Repository
class CteProjectionRepository {
    private final JdbcTemplate jdbc;
    private final RowMapper<CustomerAnalyticsDto> rowMapper =
        (rs, rowNum) -> new CustomerAnalyticsDto(
            rs.getString("name"),
            rs.getLong("total_orders"),
            rs.getBigDecimal("lifetime_value"),
            rs.getBigDecimal("avg_order_value"),
            rs.getString("customer_status"));

    public List<CustomerAnalyticsDto> getAnalytics() {
        return jdbc.query("""
            WITH metrics AS (
                SELECT customer_id,
                       COUNT(*) AS total_orders,
                       SUM(total) AS total_spent,
                       AVG(total) AS avg_order
                FROM orders
                GROUP BY customer_id
            )
            SELECT c.name, m.total_orders, m.total_spent,
                   m.avg_order,
                   CASE WHEN m.total_spent > 1000 THEN 'Gold'
                        WHEN m.total_spent > 500 THEN 'Silver'
                        ELSE 'Bronze'
                   END AS tier
            FROM customers c
            JOIN metrics m ON c.id = m.customer_id
            """, rowMapper);
    }
}

// === 8. Recursive CTE for tree traversal ===
@Service
class CategoryTreeService {
    private final JdbcTemplate jdbc;

    // Product categories hierarchy
    @Transactional(readOnly = true)
    public void categoryTree() {
        /*
        categories:
        id | name         | parent_id
        1  | Electronics   | null
        2  | Computers     | 1
        3  | Laptops       | 2
        4  | Desktops      | 2
        5  | Phones        | 1
        6  | Accessories   | 5
        */

        List<Map<String, Object>> tree = jdbc.queryForList("""
            WITH RECURSIVE cat_tree AS (
                SELECT id, name, parent_id, 0 AS depth,
                       name::text AS breadcrumb
                FROM categories
                WHERE parent_id IS NULL

                UNION ALL

                SELECT c.id, c.name, c.parent_id, ct.depth + 1,
                       ct.breadcrumb || ' > ' || c.name
                FROM categories c
                JOIN cat_tree ct ON c.parent_id = ct.id
            )
            SELECT id, name, depth, breadcrumb
            FROM cat_tree
            ORDER BY breadcrumb
            """);

        // Output:
        // Electronics (0)
        // Electronics > Computers (1)
        // Electronics > Computers > Laptops (2)
        // Electronics > Computers > Desktops (2)
        // Electronics > Phones (1)
        // Electronics > Phones > Accessories (2)
    }
}

// === 9. CTE vs subquery comparison ===
/*
Feature           CTE                          Subquery
──────────────────────────────────────────────────────────
Readability       Named, isolated              Inline, can be dense
Reusability       Multiple references           Single use
Recursive         Yes (WITH RECURSIVE)          No
Performance       Materialized by default       Inlined by optimizer
Scope             Query-level                   Expression-level
Debugging         Step-by-step testing          Harder to isolate
JPA support       Native query only             JPQL supports simple subqueries

// Rule of thumb:
// - Use CTE for: recursive queries, 3+ step logic, reusable temp results
// - Use subquery for: simple WHERE EXISTS, IN clauses, scalar calculations
// - Use native query for: CTEs, window functions, DB-specific features
// - Use JPQL subqueries for: simple EXISTS, IN, scalar subqueries
*/
```

CTEs and subqueries enable complex data analysis in a single database round-trip. Use CTEs for readability (break complex logic into named steps), recursion (hierarchical data), and reusability (reference the same result multiple times). Use subqueries for simple WHERE EXISTS, IN, and scalar expressions. For recursive CTEs (org charts, category trees, graph traversal), native SQL is required — JPA's JPQL doesn't support WITH RECURSIVE. Prefer CTEs over deeply nested subqueries for maintainability. Always test with realistic data volumes — correlated subqueries can be surprisingly expensive.


### Q24: How do you handle batch operations in JPA/Hibernate efficiently?

**Answer:** Batch operations in JPA require careful management to avoid memory issues and poor performance. For inserts/updates, use batch_size configuration, periodic flush/clear, and StatelessSession for very large datasets. For bulk updates/deletes, use JPQL UPDATE/DELETE queries (single SQL statement, no entity loading). For reads, use streaming and scrollable results. Key settings: hibernate.jdbc.batch_size, hibernate.order_inserts, and hibernate.order_updates.

```java
// === 1. Batch insert configuration ===
/*
application.yml:
spring:
  jpa:
    properties:
      hibernate:
        jdbc:
          batch_size: 50
          batch_versioned_data: true
          order_inserts: true
          order_updates: true
        generate_statistics: true  # Monitor batch effectiveness

// Key properties explained:
// batch_size: Number of statements to batch together (default: 0 = disabled)
// order_inserts: Group INSERTs by table (allows larger batches)
// order_updates: Group UPDATEs by table and type (allows larger batches)
// batch_versioned_data: Include versioned entities in batch (default: false)
*/

// === 2. Efficient batch insert ===
@Service
class BatchInsertService {
    @PersistenceContext private EntityManager em;
    private final OrderRepository orderRepository;

    @Transactional
    public void batchInsert(int count) {
        // BAD: Individual inserts without batching
        for (int i = 0; i < count; i++) {
            Order order = new Order();
            order.setCustomerName("User" + i);
            order.setTotal(BigDecimal.valueOf(100));
            order.setStatus("PENDING");
            em.persist(order);
            // Each persist generates individual INSERT
            // At flush: 10000 separate INSERT statements
        }
    }

    @Transactional
    public void batchInsertEfficient(int count) {
        // GOOD: Batch with periodic flush/clear
        int batchSize = 50;

        // Hibernate batches INSERTs when order_inserts=true
        // Every 50 persists → 1 batch INSERT with 50 rows
        for (int i = 0; i < count; i++) {
            Order order = new Order();
            order.setCustomerName("User" + i);
            order.setTotal(BigDecimal.valueOf(100));
            order.setStatus("PENDING");
            em.persist(order);

            // Flush + clear to prevent OOM in persistence context
            if (i > 0 && i % batchSize == 0) {
                em.flush();   // Execute batch INSERTs
                em.clear();   // Remove entities from context
            }
        }
        em.flush();  // Flush remaining
        em.clear();
    }

    // Batching statistics log:
    // Hibernate: batch INSERT completed (50 statements)
    // SessionMetrics: 200 queries executed, 4 batch statements
    // Without batching: 200 individual INSERTs
    // With batching: 4 batch INSERTs (50 each)
}

// === 3. Batch update ===
@Service
class BatchUpdateService {
    @PersistenceContext private EntityManager em;

    @Transactional
    public void batchUpdateStatus(String oldStatus, String newStatus) {
        // BAD: Load all entities, modify each, let Hibernate detect
        List<Order> orders = em.createQuery(
            "SELECT o FROM Order o WHERE o.status = :status", Order.class)
            .setParameter("status", oldStatus)
            .getResultList();

        for (Order order : orders) {
            order.setStatus(newStatus);
        }
        // Loads ALL entities → memory issues for large datasets
        // Each entity is tracked → dirty checking overhead
        // Generates individual UPDATE per entity
    }

    @Transactional
    public void batchUpdateEfficient(String oldStatus, String newStatus) {
        // GOOD: JPQL bulk UPDATE — single SQL statement
        int updated = em.createQuery(
                "UPDATE Order o SET o.status = :newStatus " +
                "WHERE o.status = :oldStatus")
            .setParameter("newStatus", newStatus)
            .setParameter("oldStatus", oldStatus)
            .executeUpdate();
        // Single SQL: UPDATE orders SET status=? WHERE status=?
        // No entities loaded into persistence context

        // IMPORTANT: After bulk update, clear persistence context
        em.clear();
        // Existing managed entities may have stale data
    }
}

// === 4. Batch delete ===
@Service
class BatchDeleteService {
    @PersistenceContext private EntityManager em;

    @Transactional
    public void batchDeleteEfficient(LocalDate cutoff) {
        // GOOD: JPQL bulk DELETE
        int deleted = em.createQuery(
                "DELETE FROM Order o WHERE o.createdAt < :cutoff")
            .setParameter("cutoff", cutoff)
            .executeUpdate();
        // Single SQL: DELETE FROM orders WHERE created_at < ?

        em.clear();  // Clear context after bulk operation
    }

    @Transactional
    public void batchDeleteWithChildren(LocalDate cutoff) {
        // Delete children first, then parents
        em.createQuery(
                "DELETE FROM OrderItem oi WHERE oi.order.id IN " +
                "(SELECT o.id FROM Order o WHERE o.createdAt < :cutoff)")
            .setParameter("cutoff", cutoff)
            .executeUpdate();

        int deleted = em.createQuery(
                "DELETE FROM Order o WHERE o.createdAt < :cutoff")
            .setParameter("cutoff", cutoff)
            .executeUpdate();

        em.clear();
    }
}

// === 5. Scrollable results for large reads ===
@Service
class ScrollableResultService {
    @PersistenceContext private EntityManager em;

    public void processLargeResultSet() {
        // BAD: Load all results into memory
        List<Order> allOrders = em.createQuery(
                "SELECT o FROM Order o", Order.class)
            .getResultList();
        // With 1M orders → OutOfMemoryError
    }

    public void processLargeResultSetEfficient() {
        // GOOD: Scroll through results (cursor-based)
        Session session = em.unwrap(Session.class);

        try (ScrollableResults results = session.createQuery(
                "SELECT o FROM Order o", Order.class)
                .setCacheMode(CacheMode.IGNORE)
                .scroll(ScrollMode.FORWARD_ONLY)) {

            int batchSize = 50;
            int count = 0;

            while (results.next()) {
                Order order = (Order) results.get();
                processOrder(order);

                count++;
                // Periodically flush and clear to manage memory
                if (count % batchSize == 0) {
                    session.flush();
                    session.clear();
                }
            }
        }
        // Never loads all 1M orders into memory at once
    }

    private void processOrder(Order order) {
        // Business logic
    }
}

// === 6. StatelessSession for batch operations ===
@Service
class StatelessBatchService {
    @PersistenceContext private EntityManager em;

    public void batchInsertStateless(int count) {
        SessionFactory sf = em.getEntityManagerFactory()
            .unwrap(SessionFactory.class);

        try (StatelessSession session = sf.openStatelessSession()) {
            session.beginTransaction();

            // No persistence context — fastest possible insert
            for (int i = 0; i < count; i++) {
                Order order = new Order();
                order.setCustomerName("User" + i);
                order.setTotal(BigDecimal.valueOf(100));
                order.setStatus("PENDING");
                session.insert(order);
                // No tracking, no cascade, no version check
                // Just pure INSERT execution
            }

            session.getTransaction().commit();
        }
    }

    public void batchUpdateStateless(String oldStatus, String newStatus) {
        SessionFactory sf = em.getEntityManagerFactory()
            .unwrap(SessionFactory.class);

        try (StatelessSession session = sf.openStatelessSession()) {
            session.beginTransaction();

            int updated = session.createMutationQuery(
                    "UPDATE Order o SET o.status = :newStatus " +
                    "WHERE o.status = :oldStatus")
                .setParameter("newStatus", newStatus)
                .setParameter("oldStatus", oldStatus)
                .executeUpdate();

            session.getTransaction().commit();
            log.info("Updated {} orders", updated);
        }
    }
}

// === 7. Batch with JdbcTemplate (preferred for very large datasets) ===
@Service
class BatchJdbcTemplateService {
    private final NamedParameterJdbcTemplate jdbc;

    public void batchInsertJdbc(List<Order> orders) {
        // For very large datasets, JdbcTemplate is often the fastest
        String sql = "INSERT INTO orders " +
            "(customer_name, total, status, created_at) " +
            "VALUES (:customerName, :total, :status, :createdAt)";

        List<Map<String, Object>> batchParams = orders.stream()
            .map(order -> Map.<String, Object>of(
                "customerName", order.getCustomerName(),
                "total", order.getTotal(),
                "status", order.getStatus(),
                "createdAt", order.getCreatedAt()))
            .collect(Collectors.toList());

        int[] results = jdbc.batchUpdate(sql,
            batchParams.toArray(new Map[0]));
        log.info("Inserted {} orders", results.length);
    }

    // JDBC batch with explicit batch size
    public void batchUpdateWithSize(List<Long> orderIds, String newStatus) {
        String sql = "UPDATE orders SET status = ? WHERE id = ?";

        jdbc.getJdbcOperations().batchUpdate(sql,
            new BatchPreparedStatementSetter() {
                @Override
                public void setValues(PreparedStatement ps, int i) {
                    ps.setString(1, newStatus);
                    ps.setLong(2, orderIds.get(i));
                }

                @Override
                public int getBatchSize() {
                    return orderIds.size();
                }
            });
    }
}

// === 8. Performance comparison ===
/*
Approach                     Time (100K rows)   Memory    SQL Statements
────────────────────────────────────────────────────────────────────────
Individual persists (no batch)  ~60s             High     100,000 INSERTs
Batch size 50 + flush/clear     ~8s              Medium   2,000 batches
StatelessSession                ~3s              Low      2,000 batches
JdbcTemplate batch              ~2s              Low      2,000 batches
JPQL bulk update/delete         ~0.1s            Low      1 UPDATE/DELETE
Native COPY (PostgreSQL)        ~0.5s            Low      1 COPY statement

// Rule of thumb:
// < 100 rows: Normal JPA persist
// 100-10,000: Batch size + flush/clear
// 10,000-1M:  StatelessSession or JdbcTemplate
// > 1M:       Native COPY (PostgreSQL) or SQL*Loader (Oracle)
// Bulk updates: JPQL UPDATE (always)
// Bulk deletes: JPQL DELETE (always)
*/

// === 9. Testing batch operations ===
/*
@SpringBootTest
class BatchPerformanceTest {
    @Autowired private BatchInsertService batchService;

    @Test
    void testBatchInsertPerformance() {
        StopWatch watch = new StopWatch();
        watch.start("batch insert");

        batchService.batchInsertEfficient(10_000);

        watch.stop();
        log.info("Batch insert 10K rows: {}ms", watch.getTotalTimeMillis());

        assertThat(watch.getTotalTimeMillis())
            .isLessThan(20_000);  // Should finish in < 20 seconds
    }

    @Test
    void testBulkUpdate() {
        StopWatch watch = new StopWatch();
        watch.start("bulk update");

        batchService.batchUpdateEfficient("PENDING", "PROCESSED");

        watch.stop();
        log.info("Bulk update: {}ms", watch.getTotalTimeMillis());

        assertThat(watch.getTotalTimeMillis())
            .isLessThan(1000);  // Single SQL, should be fast
    }

    @Test
    void verifyBatchConfiguration() {
        SessionFactory sf = entityManager.getEntityManagerFactory()
            .unwrap(SessionFactory.class);
        SessionFactoryImplementor impl = (SessionFactoryImplementor) sf;

        assertThat(impl.getSessionFactoryOptions()
            .getJdbcBatchSize()).isEqualTo(50);
    }
}
*/
```

Efficient batching is essential for processing large datasets. Configure hibernate.jdbc.batch_size, order_inserts, and order_updates. Use periodic flush/clear to manage persistence context size. Prefer JPQL UPDATE/DELETE for bulk modifications — they execute as single SQL statements without loading entities. Use ScrollableResults for streaming reads. For extreme scale (> 100K rows), drop to JdbcTemplate or StatelessSession. Always test batch operations with production-like data volumes — what works with 100 rows may OOM with 100K. Bulk operations require clearing the persistence context afterward to avoid stale entity state.


### Q25: How do you test database code with TestContainers and Spring Boot?

**Answer:** TestContainers provides lightweight, disposable database instances in Docker containers for integration testing. Spring Boot's @DataJpaTest slices the application context to only JPA components. Combined, they enable realistic database testing — real SQL, real transactions, real locking behavior — without external infrastructure dependencies. Always test with a database matching your production environment (not H2 in-memory).

```java
// === 1. TestContainers setup ===
/*
pom.xml:
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>testcontainers</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>postgresql</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>junit-jupiter</artifactId>
    <scope>test</scope>
</dependency>
*/

// === 2. Base test configuration ===
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

@Testcontainers
@SpringBootTest
abstract class BaseDatabaseTest {

    // Single PostgreSQL container for all tests in the class
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(
            "postgres:16-alpine")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
        registry.add("spring.datasource.driver-class-name",
            () -> "org.postgresql.Driver");
        registry.add("spring.jpa.hibernate.ddl-auto", () -> "validate");
        // Use Flyway migrations to set up schema
        registry.add("spring.flyway.enabled", () -> "true");
    }
}

// === 3. Repository tests ===
@DataJpaTest
@ImportAutoConfiguration(TestcontainersConfig.class)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class OrderRepositoryTest extends BaseDatabaseTest {

    @Autowired private OrderRepository orderRepository;
    @Autowired private TestEntityManager em;

    @Test
    void shouldSaveAndFindOrder() {
        Order order = new Order();
        order.setCustomerName("Alice");
        order.setTotal(new BigDecimal("250.00"));
        order.setStatus("PENDING");

        Order saved = orderRepository.save(order);
        em.flush();
        em.clear();

        Optional<Order> found = orderRepository.findById(saved.getId());
        assertThat(found).isPresent();
        assertThat(found.get().getCustomerName()).isEqualTo("Alice");
        assertThat(found.get().getTotal())
            .isEqualByComparingTo(new BigDecimal("250.00"));
    }

    @Test
    void shouldFindByStatus() {
        orderRepository.save(createOrder("Alice", "100", "PENDING"));
        orderRepository.save(createOrder("Bob", "200", "SHIPPED"));
        orderRepository.save(createOrder("Charlie", "300", "PENDING"));
        em.flush();

        List<Order> pending = orderRepository.findByStatus("PENDING");
        assertThat(pending).hasSize(2);
        assertThat(pending).extracting(Order::getCustomerName)
            .containsExactlyInAnyOrder("Alice", "Charlie");
    }

    @Test
    void shouldExecuteCustomQuery() {
        orderRepository.save(createOrder("Alice", "50", "PENDING"));
        orderRepository.save(createOrder("Bob", "500", "COMPLETED"));
        em.flush();

        List<Order> largeOrders = orderRepository
            .findByTotalGreaterThanEqual(new BigDecimal("100"));
        assertThat(largeOrders).hasSize(1);
        assertThat(largeOrders.get(0).getCustomerName()).isEqualTo("Bob");
    }

    @Test
    void shouldEnforceUniqueConstraint() {
        // Test database constraints
        assertThrows(DataIntegrityViolationException.class, () -> {
            Order invalid = new Order();
            invalid.setCustomerName(null);  // NOT NULL violation
            invalid.setTotal(new BigDecimal("100"));
            invalid.setStatus("PENDING");
            orderRepository.save(invalid);
            em.flush();
        });
    }

    private Order createOrder(String name, String total, String status) {
        Order order = new Order();
        order.setCustomerName(name);
        order.setTotal(new BigDecimal(total));
        order.setStatus(status);
        return order;
    }
}

// === 4. Transactional behavior tests ===
@SpringBootTest
class TransactionalTest extends BaseDatabaseTest {
    @Autowired private OrderService orderService;
    @Autowired private OrderRepository orderRepository;

    @Test
    void testRollbackOnException() {
        assertThrows(RuntimeException.class, () -> {
            orderService.createOrderFailing();
        });

        // Verify nothing was persisted (rollback)
        long count = orderRepository.count();
        assertThat(count).isZero();
    }

    @Test
    void testOptimisticLocking() throws Exception {
        Order order = orderRepository.save(
            createOrder("Alice", "100", "PENDING"));

        // Simulate concurrent update
        ExecutorService executor = Executors.newFixedThreadPool(2);
        CountDownLatch latch = new CountDownLatch(1);

        Future<?> f1 = executor.submit(() -> {
            orderService.updateOrder(order.getId(), "SHIPPED");
            latch.countDown();
        });

        Future<?> f2 = executor.submit(() -> {
            try {
                latch.await();
                orderService.updateOrder(order.getId(), "CANCELLED");
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });

        // One should succeed, one should throw OptimisticLockException
        assertThrows(ExecutionException.class, () -> f2.get());
    }

    @Test
    void testPessimisticLocking() {
        // Acquire lock and verify concurrent access is blocked
        assertDoesNotThrow(() -> {
            orderService.deductStockWithLock(1L, 5);
        });
    }

    @Test
    void testIsolationLevel() {
        // Verify READ_COMMITTED isolation works as expected
        // by testing concurrent reads during uncommitted writes
    }
}

// === 5. Migration tests ===
@SpringBootTest
class MigrationTest extends BaseDatabaseTest {
    @Autowired private Flyway flyway;

    @Test
    void allMigrationsApplySuccessfully() {
        // Verify all pending migrations apply without errors
        MigrateResult result = flyway.migrate();
        assertThat(result.success).isTrue();
        assertThat(result.migrationsExecuted).isPositive();
    }

    @Test
    void schemaIsValid() {
        flyway.migrate();
        flyway.validate();
        // If validation passes, schema matches migration files
    }

    @Test
    void seedDataExists() {
        flyway.migrate();
        // Verify seed data from migrations
        Integer count = jdbcTemplate.queryForObject(
            "SELECT COUNT(*) FROM order_statuses", Integer.class);
        assertThat(count).isPositive();
    }
}

// === 6. Query performance tests ===
@SpringBootTest
class QueryPerformanceTest extends BaseDatabaseTest {
    @Autowired private JdbcTemplate jdbc;
    @Autowired private EntityManager em;

    @BeforeEach
    void setUp() {
        // Insert realistic data volume
        for (int i = 0; i < 10000; i++) {
            jdbc.update(
                "INSERT INTO orders (customer_name, total, status, created_at) " +
                "VALUES (?, ?, ?, ?)",
                "User" + i, BigDecimal.valueOf(i * 10),
                i % 2 == 0 ? "PENDING" : "SHIPPED",
                LocalDate.now().minusDays(i % 365));
        }
    }

    @Test
    void verifyIndexUsage() {
        String sql = "SELECT COUNT(*) FROM orders WHERE status = 'PENDING'";

        String plan = jdbc.queryForObject(
            "EXPLAIN " + sql, String.class);
        assertThat(plan).contains("Index Scan");
    }

    @Test
    void verifyNoNPlusOne() {
        em.clear();
        // Count SQL queries using Hibernate statistics
        Statistics stats = em.getEntityManagerFactory()
            .unwrap(SessionFactory.class)
            .getStatistics();

        stats.clear();
        em.createQuery("SELECT o FROM Order o JOIN FETCH o.items", Order.class)
            .getResultList();

        long queryCount = stats.getQueryExecutionCount();
        assertThat(queryCount).isLessThanOrEqualTo(2);
    }
}

// === 7. Testing with different databases ===
@Testcontainers
class MultiDatabaseTest {
    // Test with PostgreSQL
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16");

    // Test with MySQL
    @Container
    static MySQLContainer<?> mysql = new MySQLContainer<>("mysql:8");

    @Test
    void testPostgresSpecificFeature() {
        // PostgreSQL-specific feature (JSONB, array, etc.)
    }

    @Test
    void testMySQLSpecificFeature() {
        // MySQL-specific feature
    }
}

// === 8. Test configuration class ===
@TestConfiguration
class TestcontainersConfig {

    @Bean
    @ServiceConnection  // Spring Boot 3.1+ — auto-configures DataSource
    public PostgreSQLContainer<?> postgresContainer() {
        return new PostgreSQLContainer<>("postgres:16-alpine")
            .withDatabaseName("testdb");
    }
}

// === 9. Testing with Spring Boot 3.1+ @ServiceConnection ===
/*
// Since Spring Boot 3.1, @ServiceConnection auto-configures
// the datasource from TestContainers — no @DynamicPropertySource needed!

@Testcontainers
@SpringBootTest
class SimplifiedTest {

    @Container
    @ServiceConnection
    static PostgreSQLContainer<?> postgres =
        new PostgreSQLContainer<>("postgres:16-alpine");

    @Test
    void testWithAutoConfiguration() {
        // DataSource is auto-configured from the container
        // No @DynamicPropertySource required
    }
}
*/

// === 10. Testing best practices ===
/*
□ Use TestContainers, not H2 in-memory — they behave differently
□ Use @DataJpaTest for repository-layer tests (sliced context)
□ Use @SpringBootTest for integration tests (full context)
□ Always flush and clear EntityManager between test operations
□ Test optimistic locking with concurrent threads
□ Test migration scripts apply successfully
□ Verify index usage with EXPLAIN
□ Test with production-like data volumes for performance
□ Test edge cases: null constraints, unique violations, FK violations
□ Clean up test data between tests (rollback transaction or truncate)

// Anti-patterns:
// 1. H2 in-memory for PostgreSQL production → different SQL dialect
// 2. @DataJpaTest without @AutoConfigureTestDatabase(Replace.NONE) → uses H2
// 3. Not flushing between operations → false positives
// 4. Single-threaded tests for concurrency bugs → miss locking issues
// 5. Tiny datasets → indexes not used → false query performance assumptions
*/
```

TestContainers provides real database instances for integration testing — essential for validating SQL dialect, constraints, migrations, and transactional behavior. Use @DataJpaTest for repository tests and @SpringBootTest for full integration tests. Always flush and clear the persistence context between operations. Test concurrent access patterns (optimistic locking, isolation levels). Verify index usage and query plans. Never rely on H2 in-memory databases for testing against PostgreSQL or MySQL production environments — subtle SQL differences will cause untestable production issues.


