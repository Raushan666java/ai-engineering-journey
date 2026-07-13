> **Previous:** [JPA/Hibernate](./20-jpa-hibernate.md) | **Next:** [Migrations](./22-migrations.md)

# Spring Data JPA

## Learning Objectives

By the end of this chapter, you will be able to:

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/java/21-spring-data-jpa/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/21-spring-data-jpa/hero.svg" alt="Chapter Banner: Spring Data JPA" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/21-spring-data-jpa/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/21-spring-data-jpa/handwritten-notes.svg" alt="Handwritten Notes: Spring Data JPA" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/21-spring-data-jpa/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/21-spring-data-jpa/sticky-notes.svg" alt="Sticky Notes: Spring Data JPA" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/21-spring-data-jpa/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/21-spring-data-jpa/visual-explanation.svg" alt="Visual Explanation: Spring Data JPA" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/21-spring-data-jpa/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/21-spring-data-jpa/architecture.svg" alt="Architecture: Spring Data JPA" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/21-spring-data-jpa/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/21-spring-data-jpa/workflow.svg" alt="Workflow: Spring Data JPA" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/21-spring-data-jpa/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/21-spring-data-jpa/mindmap.svg" alt="Mind Map: Spring Data JPA" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/21-spring-data-jpa/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/21-spring-data-jpa/comparison.svg" alt="Comparison: Spring Data JPA" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/21-spring-data-jpa/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/21-spring-data-jpa/cheatsheet.svg" alt="Cheat Sheet: Spring Data JPA" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/21-spring-data-jpa/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/21-spring-data-jpa/interview-quiz.svg" alt="Quiz Card: Spring Data JPA" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/21-spring-data-jpa/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/21-spring-data-jpa/social-card.svg" alt="Social Card: Spring Data JPA" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


1.  Choose the appropriate repository interface for any data access pattern
2.  Write derived query methods following Spring Data JPA naming conventions
3.  Implement custom JPQL and native queries with @Query
4.  Perform bulk operations safely with @Modifying
5.  Build dynamic queries using Specifications and the Criteria API
6.  Integrate QueryDSL for type-safe query construction
7.  Enable JPA auditing for automatic timestamp and user tracking
8.  Implement pagination, sorting, and keyset pagination for large datasets
9.  Use projections to optimize data transfer between layers

---

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| Repositories | CrudRepository, JpaRepository, PagingAndSortingRepository | JpaRepository extends all others |
| Derived Queries | findBy*, countBy*, deleteBy* | Follow naming conventions for auto-implementation |
| @Query | Custom JPQL and native SQL | Use native queries for database-specific features |
| Specifications | Dynamic query building | Combine with JpaSpecificationExecutor |
| Projections | Interface-based, DTO-based | Reduce data transfer overhead |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Repository Interfaces] --> B[Derived Queries]
    B --> C[@Query & @Modifying]
    C --> D[Specifications]
    D --> E[QueryDSL]
    E --> F[Auditing]
    F --> G[Pagination & Sorting]
    G --> H[Projections]
```

> **Pro Tip:** For read-only queries, use projections or DTO-based queries to avoid loading entire entities. This significantly reduces memory usage for large result sets.

## 1. Repository Interfaces

![Spring Data JPA Repository Hierarchy](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/21-spring-data-jpa.png)

Spring Data JPA provides a hierarchy of repository interfaces. Each adds functionality on top of the previous one.

### 1.1 Interface Hierarchy

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/1-1-interface-hierarchy-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/1-1-interface-hierarchy-handwritten.svg" alt="Handwritten: 1.1 Interface Hierarchy" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/1-1-interface-hierarchy-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/1-1-interface-hierarchy-diagram.svg" alt="Diagram: 1.1 Interface Hierarchy" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/1-1-interface-hierarchy-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/1-1-interface-hierarchy-sticky.svg" alt="Sticky Note: 1.1 Interface Hierarchy" width="30%">
</a>


```java
// Repository Ã¢â‚¬â€ Marker interface (no methods)
public interface Repository<T, ID> { }

// CrudRepository Ã¢â‚¬â€ Basic CRUD operations
//   save(S), saveAll(Iterable<S>), findById(ID), existsById(ID),
//   findAll(), findAllById(Iterable<ID>), count(), deleteById(ID),
//   delete(T), deleteAllById(Iterable<? extends ID>), deleteAll()

// PagingAndSortingRepository Ã¢â‚¬â€ Adds pagination and sorting
//   findAll(Sort), findAll(Pageable)

// JpaRepository Ã¢â‚¬â€ JPA-specific extensions
//   findAll(), findAll(Sort), findAll(Pageable), saveAllAndFlush(),
//   saveAndFlush(), flush(), deleteInBatch(), deleteAllInBatch(),
//   getOne(ID), getById(ID), getReferenceById(ID)
//   Also exposes all methods of CrudRepository and PagingAndSortingRepository

// ListCrudRepository Ã¢â‚¬â€ Modern variant returning List instead of Iterable
// ListPagingAndSortingRepository Ã¢â‚¬â€ Modern pagination variant returning List/Page
```

### 1.2 Choosing the Right Interface

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/1-2-choosing-the-right-interface-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/1-2-choosing-the-right-interface-handwritten.svg" alt="Handwritten: 1.2 Choosing the Right Interface" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/1-2-choosing-the-right-interface-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/1-2-choosing-the-right-interface-diagram.svg" alt="Diagram: 1.2 Choosing the Right Interface" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/1-2-choosing-the-right-interface-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/1-2-choosing-the-right-interface-sticky.svg" alt="Sticky Note: 1.2 Choosing the Right Interface" width="30%">
</a>


```java
// Minimal Ã¢â‚¬â€ just type-safe ID-based access
@Repository
public interface CountryRepository extends Repository<Country, Long> {
    Optional<Country> findByCode(String code);
}

// Standard CRUD
public interface CustomerRepository extends CrudRepository<Customer, Long> { }

// CRUD + Pagination (most common)
public interface OrderRepository extends JpaRepository<Order, Long> { }

// Modern List-based (Spring Data 3+)
public interface ProductRepository extends ListCrudRepository<Product, Long>,
                                           ListPagingAndSortingRepository<Product, Long> { }
```

### 1.3 Complete Repository Example

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/1-3-complete-repository-example-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/1-3-complete-repository-example-handwritten.svg" alt="Handwritten: 1.3 Complete Repository Example" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/1-3-complete-repository-example-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/1-3-complete-repository-example-diagram.svg" alt="Diagram: 1.3 Complete Repository Example" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/1-3-complete-repository-example-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/1-3-complete-repository-example-sticky.svg" alt="Sticky Note: 1.3 Complete Repository Example" width="30%">
</a>


```java
@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(unique = true, nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    private CustomerTier tier;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    // getters, setters, equals, hashCode
}

public enum CustomerTier {
    STANDARD, GOLD, PLATINUM
}

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    // Derived query methods
    Optional<Customer> findByEmail(String email);

    List<Customer> findByLastName(String lastName);

    boolean existsByEmail(String email);

    long countByTier(CustomerTier tier);

    // Custom query
    @Query("SELECT c FROM Customer c WHERE c.tier = :tier AND c.createdAt > :since")
    List<Customer> findCustomersByTierSince(@Param("tier") CustomerTier tier,
                                            @Param("since") LocalDateTime since);
}
```

---

## 2. Derived Query Methods

Spring Data JPA parses method names to generate JPQL queries automatically.

### 2.1 Subject Keywords

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/2-1-subject-keywords-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/2-1-subject-keywords-handwritten.svg" alt="Handwritten: 2.1 Subject Keywords" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/2-1-subject-keywords-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/2-1-subject-keywords-diagram.svg" alt="Diagram: 2.1 Subject Keywords" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/2-1-subject-keywords-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/2-1-subject-keywords-sticky.svg" alt="Sticky Note: 2.1 Subject Keywords" width="30%">
</a>


```java
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    // find...By Ã¢â‚¬â€ Returns entity, Optional, List, Set, Stream
    Optional<Customer> findByEmail(String email);
    List<Customer> findByLastName(String lastName);
    Set<Customer> findByTier(CustomerTier tier);
    Stream<Customer> findByCreatedAtAfter(LocalDateTime date);  // Requires @Transactional

    // exists...By Ã¢â‚¬â€ Returns boolean
    boolean existsByEmail(String email);

    // count...By Ã¢â‚¬â€ Returns long
    long countByTier(CustomerTier tier);

    // delete...By / remove...By Ã¢â‚¬â€ Returns void or int (number of deleted)
    void deleteByEmail(String email);
    int removeByLastName(String lastName);

    // stream...By Ã¢â‚¬â€ Returns Stream<Entity>
    @Transactional(readOnly = true)
    Stream<Customer> streamByTier(CustomerTier tier);
}
```

### 2.2 Query Expressions

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/2-2-query-expressions-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/2-2-query-expressions-handwritten.svg" alt="Handwritten: 2.2 Query Expressions" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/2-2-query-expressions-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/2-2-query-expressions-diagram.svg" alt="Diagram: 2.2 Query Expressions" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/2-2-query-expressions-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/2-2-query-expressions-sticky.svg" alt="Sticky Note: 2.2 Query Expressions" width="30%">
</a>


```java
public interface OrderRepository extends JpaRepository<Order, Long> {

    // AND / OR
    List<Order> findByCustomerIdAndStatus(Long customerId, OrderStatus status);
    List<Order> findByCustomerIdOrAssignedUserId(Long customerId, Long userId);

    // Between / LessThan / GreaterThan
    List<Order> findByTotalBetween(BigDecimal min, BigDecimal max);
    List<Order> findByCreatedAtAfter(LocalDateTime date);
    List<Order> findByTotalLessThanEqual(BigDecimal threshold);

    // Is / Equals (redundant but explicit)
    List<Order> findByStatusIs(OrderStatus status);
    List<Order> findByStatusEquals(OrderStatus status);

    // Like / NotLike / StartingWith / EndingWith / Containing
    List<Order> findByNotesLike("%urgent%");
    List<Order> findByNotesNotLike("%spam%");
    List<Order> findByCustomerNameStartingWith("A");
    List<Order> findByCustomerNameEndingWith("Inc");
    List<Order> findByCustomerNameContaining("tech");  // LIKE '%tech%'

    // In / NotIn
    List<Order> findByStatusIn(List<OrderStatus> statuses);
    List<Order> findByIdNotIn(List<Long> ids);

    // Null / NotNull
    List<Order> findByAssignedUserIdIsNull();
    List<Order> findByAssignedUserIdIsNotNull();

    // True / False
    List<Order> findByPriorityIsTrue();

    // IgnoreCase (can combine with other expressions)
    List<Order> findByCustomerNameIgnoreCase(String name);
    List<Order> findByCustomerNameContainingIgnoreCase(String fragment);

    // OrderBy
    List<Order> findByCustomerIdOrderByCreatedAtDesc(Long customerId);
    List<Order> findByStatusOrderByTotalAscCreatedAtDesc(OrderStatus status);
}
```

### 2.3 Nested Property Traversal

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/2-3-nested-property-traversal-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/2-3-nested-property-traversal-handwritten.svg" alt="Handwritten: 2.3 Nested Property Traversal" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/2-3-nested-property-traversal-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/2-3-nested-property-traversal-diagram.svg" alt="Diagram: 2.3 Nested Property Traversal" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/2-3-nested-property-traversal-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/2-3-nested-property-traversal-sticky.svg" alt="Sticky Note: 2.3 Nested Property Traversal" width="30%">
</a>


```java
@Entity
public class Shipment {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    private LocalDateTime shippedAt;
    private String trackingNumber;
}

public interface ShipmentRepository extends JpaRepository<Shipment, Long> {

    // Traverse through Order Ã¢â€ â€™ Customer Ã¢â€ â€™ email
    List<Shipment> findByOrderCustomerEmail(String email);

    // Traverse through Order Ã¢â€ â€™ status
    List<Shipment> findByOrderStatus(OrderStatus status);

    // Multiple levels
    List<Shipment> findByOrderCustomerTierAndShippedAtAfter(
        CustomerTier tier, LocalDateTime date);
}
```

### 2.4 Limiting Results

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/2-4-limiting-results-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/2-4-limiting-results-handwritten.svg" alt="Handwritten: 2.4 Limiting Results" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/2-4-limiting-results-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/2-4-limiting-results-diagram.svg" alt="Diagram: 2.4 Limiting Results" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/2-4-limiting-results-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/2-4-limiting-results-sticky.svg" alt="Sticky Note: 2.4 Limiting Results" width="30%">
</a>


```java
public interface ProductRepository extends JpaRepository<Product, Long> {

    // Top / First Ã¢â‚¬â€ limits results
    List<Product> findTop10ByOrderByPriceDesc();
    List<Product> findFirst5ByCategoryIdOrderByNameAsc(Long categoryId);
    Optional<Product> findTopByOrderBySalesCountDesc();  // Single result

    // Distinct
    List<Product> findDistinctByCategoryName(String categoryName);
}
```

---

## 3. @Query Ã¢â‚¬â€ Custom JPQL and Native Queries

### 3.1 JPQL Queries

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/3-1-jpql-queries-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/3-1-jpql-queries-handwritten.svg" alt="Handwritten: 3.1 JPQL Queries" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/3-1-jpql-queries-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/3-1-jpql-queries-diagram.svg" alt="Diagram: 3.1 JPQL Queries" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/3-1-jpql-queries-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/3-1-jpql-queries-sticky.svg" alt="Sticky Note: 3.1 JPQL Queries" width="30%">
</a>


```java
public interface OrderRepository extends JpaRepository<Order, Long> {

    // Simple JPQL
    @Query("SELECT o FROM Order o WHERE o.status = :status")
    List<Order> findByStatus(@Param("status") OrderStatus status);

    // JPQL with JOIN FETCH to avoid n+1
    @Query("SELECT DISTINCT o FROM Order o LEFT JOIN FETCH o.items WHERE o.customer.id = :customerId")
    List<Order> findByCustomerIdWithItems(@Param("customerId") Long customerId);

    // JPQL with expression
    @Query("SELECT o FROM Order o WHERE o.total > :min AND o.createdAt BETWEEN :start AND :end")
    List<Order> findLargeOrdersBetween(@Param("min") BigDecimal min,
                                       @Param("start") LocalDateTime start,
                                       @Param("end") LocalDateTime end);

    // JPQL aggregate
    @Query("SELECT COUNT(o) FROM Order o WHERE o.customer.id = :customerId")
    long countOrdersByCustomerId(@Param("customerId") Long customerId);

    // JPQL with IN clause
    @Query("SELECT o FROM Order o WHERE o.status IN :statuses")
    List<Order> findByStatuses(@Param("statuses") List<OrderStatus> statuses);

    // JPQL with optional parameters (Spring Data 3+)
    @Query("SELECT o FROM Order o WHERE (:status IS NULL OR o.status = :status)")
    List<Order> findByOptionalStatus(@Param("status") OrderStatus status);
}
```

### 3.2 Native Queries

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/3-2-native-queries-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/3-2-native-queries-handwritten.svg" alt="Handwritten: 3.2 Native Queries" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/3-2-native-queries-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/3-2-native-queries-diagram.svg" alt="Diagram: 3.2 Native Queries" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/3-2-native-queries-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/3-2-native-queries-sticky.svg" alt="Sticky Note: 3.2 Native Queries" width="30%">
</a>


```java
public interface OrderRepository extends JpaRepository<Order, Long> {

    // Native SQL query
    @Query(value = """
        SELECT o.* FROM orders o
        JOIN customers c ON o.customer_id = c.id
        WHERE c.tier = :tier
        ORDER BY o.total DESC
        LIMIT :limit
        """, nativeQuery = true)
    List<Order> findTopOrdersByTier(@Param("tier") String tier,
                                    @Param("limit") int limit);

    // Native query with count query (needed for pagination)
    @Query(value = """
        SELECT o.* FROM orders o
        WHERE o.total > :min
        """,
        countQuery = "SELECT COUNT(*) FROM orders o WHERE o.total > :min",
        nativeQuery = true)
    Page<Order> findOrdersAboveMin(@Param("min") BigDecimal min, Pageable pageable);

    // Native update
    @Modifying
    @Query(value = "UPDATE orders SET status = :newStatus WHERE status = :oldStatus",
           nativeQuery = true)
    int bulkUpdateStatus(@Param("oldStatus") String oldStatus,
                         @Param("newStatus") String newStatus);
}
```

### 3.3 @QueryHints

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/3-3-queryhints-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/3-3-queryhints-handwritten.svg" alt="Handwritten: 3.3 @QueryHints" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/3-3-queryhints-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/3-3-queryhints-diagram.svg" alt="Diagram: 3.3 @QueryHints" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/3-3-queryhints-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/3-3-queryhints-sticky.svg" alt="Sticky Note: 3.3 @QueryHints" width="30%">
</a>


```java
public interface CountryRepository extends JpaRepository<Country, Long> {

    // Hibernate query hints
    @QueryHints({
        @QueryHint(name = org.hibernate.jpa.HibernateHints.HINT_FETCH_SIZE, value = "100"),
        @QueryHint(name = org.hibernate.jpa.HibernateHints.HINT_CACHEABLE, value = "true"),
        @QueryHint(name = org.hibernate.jpa.HibernateHints.HINT_READ_ONLY, value = "true"),
        @QueryHint(name = org.hibernate.jpa.HibernateHints.HINT_COMMENT, value = "Find all countries")
    })
    @Query("SELECT c FROM Country c")
    List<Country> findAllCached();

    // Timeout hint
    @QueryHints(@QueryHint(name = "jakarta.persistence.query.timeout", value = "5000"))
    @Query("SELECT c FROM Country c WHERE c.code = :code")
    Optional<Country> findByCodeWithTimeout(@Param("code") String code);
}
```

### 3.4 Dynamic SpEL Queries

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/3-4-dynamic-spel-queries-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/3-4-dynamic-spel-queries-handwritten.svg" alt="Handwritten: 3.4 Dynamic SpEL Queries" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/3-4-dynamic-spel-queries-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/3-4-dynamic-spel-queries-diagram.svg" alt="Diagram: 3.4 Dynamic SpEL Queries" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/3-4-dynamic-spel-queries-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/3-4-dynamic-spel-queries-sticky.svg" alt="Sticky Note: 3.4 Dynamic SpEL Queries" width="30%">
</a>


```java
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    // Use SpEL to reference entity name (avoids hardcoding)
    @Query("SELECT #{#entityName} FROM #{#entityName} c WHERE c.email = :email")
    Optional<Customer> findByEmailSpEL(@Param("email") String email);

    // SpEL with condition
    @Query("SELECT c FROM #{#entityName} c WHERE c.tier = :#{#tier?.toString()}")
    List<Customer> findByTier(@Param("tier") CustomerTier tier);

    // SpEL for like pattern
    @Query("SELECT c FROM Customer c WHERE c.lastName LIKE %:search%")
    List<Customer> searchByLastName(@Param("search") String search);
}
```

---

## 4. @Modifying

### 4.1 Basic Usage

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/4-1-basic-usage-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/4-1-basic-usage-handwritten.svg" alt="Handwritten: 4.1 Basic Usage" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/4-1-basic-usage-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/4-1-basic-usage-diagram.svg" alt="Diagram: 4.1 Basic Usage" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/4-1-basic-usage-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/4-1-basic-usage-sticky.svg" alt="Sticky Note: 4.1 Basic Usage" width="30%">
</a>


```java
public interface OrderRepository extends JpaRepository<Order, Long> {

    // Update query requires @Modifying
    @Modifying
    @Query("UPDATE Order o SET o.status = :newStatus WHERE o.id = :orderId")
    int updateOrderStatus(@Param("orderId") Long orderId,
                          @Param("newStatus") OrderStatus newStatus);

    // Delete query
    @Modifying
    @Query("DELETE FROM Order o WHERE o.createdAt < :cutoff")
    int deleteOldOrders(@Param("cutoff") LocalDateTime cutoff);
}
```

### 4.2 clearAutomatically and flushAutomatically

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/4-2-clearautomatically-and-flushautomatically-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/4-2-clearautomatically-and-flushautomatically-handwritten.svg" alt="Handwritten: 4.2 clearAutomatically and flushAutomatically" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/4-2-clearautomatically-and-flushautomatically-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/4-2-clearautomatically-and-flushautomatically-diagram.svg" alt="Diagram: 4.2 clearAutomatically and flushAutomatically" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/4-2-clearautomatically-and-flushautomatically-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/4-2-clearautomatically-and-flushautomatically-sticky.svg" alt="Sticky Note: 4.2 clearAutomatically and flushAutomatically" width="30%">
</a>


```java
public interface OrderRepository extends JpaRepository<Order, Long> {

    // After execution, automatically clear the persistence context
    // Prevents stale data Ã¢â‚¬â€ the 1LC is cleared so subsequent reads hit the DB
    @Modifying(clearAutomatically = true)
    @Query("UPDATE Order o SET o.status = :newStatus WHERE o.customer.id = :customerId")
    int updateOrdersByCustomer(@Param("customerId") Long customerId,
                               @Param("newStatus") OrderStatus newStatus);

    // Before execution, automatically flush the persistence context
    // Ensures pending changes are flushed before the bulk operation
    @Modifying(flushAutomatically = true, clearAutomatically = true)
    @Query("DELETE FROM Order o WHERE o.status = :status AND o.createdAt < :cutoff")
    int deleteProcessedOrders(@Param("status") OrderStatus status,
                              @Param("cutoff") LocalDateTime cutoff);

    // Usage is typically:
    // 1. flushAutomatically = true  Ã¢â‚¬â€ flush pending changes first
    // 2. clearAutomatically = true  Ã¢â‚¬â€ clear 1LC after to avoid stale state
}
```

### 4.3 @Transactional on Modifications

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/4-3-transactional-on-modifications-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/4-3-transactional-on-modifications-handwritten.svg" alt="Handwritten: 4.3 @Transactional on Modifications" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/4-3-transactional-on-modifications-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/4-3-transactional-on-modifications-diagram.svg" alt="Diagram: 4.3 @Transactional on Modifications" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/4-3-transactional-on-modifications-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/4-3-transactional-on-modifications-sticky.svg" alt="Sticky Note: 4.3 @Transactional on Modifications" width="30%">
</a>


```java
@Service
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    // Bulk cancel Ã¢â‚¬â€ service-layer transaction wraps the modifying operation
    public int bulkCancelOrders(Long customerId) {
        return orderRepository.updateOrdersByCustomer(customerId, OrderStatus.CANCELLED);
    }

    // Combined operations
    public void cancelAndNotify(Long orderId) {
        int updated = orderRepository.updateOrderStatus(orderId, OrderStatus.CANCELLED);
        if (updated > 0) {
            notificationService.sendCancellation(orderId);
        }
    }
}
```

**Warning:** Bulk modifying queries bypass the persistence context. Entities already loaded in the 1LC will not reflect the changes unless `clearAutomatically = true` is set.

---

## 5. Specifications and Criteria API

### 5.1 JpaSpecificationExecutor

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/5-1-jpaspecificationexecutor-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/5-1-jpaspecificationexecutor-handwritten.svg" alt="Handwritten: 5.1 JpaSpecificationExecutor" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/5-1-jpaspecificationexecutor-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/5-1-jpaspecificationexecutor-diagram.svg" alt="Diagram: 5.1 JpaSpecificationExecutor" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/5-1-jpaspecificationexecutor-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/5-1-jpaspecificationexecutor-sticky.svg" alt="Sticky Note: 5.1 JpaSpecificationExecutor" width="30%">
</a>


```java
// First, extend JpaSpecificationExecutor
@Repository
public interface OrderRepository extends JpaRepository<Order, Long>,
                                         JpaSpecificationExecutor<Order> {
}

// Now your repository supports:
// findAll(Specification<T>)
// findAll(Specification<T>, Sort)
// findAll(Specification<T>, Pageable)
// findOne(Specification<T>)
// count(Specification<T>)
// exists(Specification<T>)
// delete(Specification<T>)
```

### 5.2 Building Specifications

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/5-2-building-specifications-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/5-2-building-specifications-handwritten.svg" alt="Handwritten: 5.2 Building Specifications" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/5-2-building-specifications-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/5-2-building-specifications-diagram.svg" alt="Diagram: 5.2 Building Specifications" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/5-2-building-specifications-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/5-2-building-specifications-sticky.svg" alt="Sticky Note: 5.2 Building Specifications" width="30%">
</a>


```java
public class OrderSpecifications {

    public static Specification<Order> byStatus(OrderStatus status) {
        return (root, query, criteriaBuilder) ->
            criteriaBuilder.equal(root.get("status"), status);
    }

    public static Specification<Order> byCustomerId(Long customerId) {
        return (root, query, cb) ->
            cb.equal(root.get("customer").get("id"), customerId);
    }

    public static Specification<Order> totalGreaterThan(BigDecimal min) {
        return (root, query, cb) ->
            cb.greaterThan(root.get("total"), min);
    }

    public static Specification<Order> createdAfter(LocalDateTime date) {
        return (root, query, cb) ->
            cb.greaterThan(root.get("createdAt"), date);
    }

    public static Specification<Order> hasItems() {
        return (root, query, cb) ->
            cb.greaterThan(cb.size(root.get("items")), 0);
    }

    public static Specification<Order> searchByCustomerName(String search) {
        return (root, query, cb) ->
            cb.like(cb.lower(root.get("customer").get("name")),
                    "%" + search.toLowerCase() + "%");
    }
}
```

### 5.3 Combining Specifications

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/5-3-combining-specifications-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/5-3-combining-specifications-handwritten.svg" alt="Handwritten: 5.3 Combining Specifications" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/5-3-combining-specifications-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/5-3-combining-specifications-diagram.svg" alt="Diagram: 5.3 Combining Specifications" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/5-3-combining-specifications-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/5-3-combining-specifications-sticky.svg" alt="Sticky Note: 5.3 Combining Specifications" width="30%">
</a>


```java
@Service
public class OrderSearchService {

    private final OrderRepository orderRepository;

    public OrderSearchService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> findGoldCustomerLargeOrders(LocalDateTime since) {
        Specification<Order> spec = Specification
            .where(OrderSpecifications.byCustomerId(42L))
            .and(OrderSpecifications.totalGreaterThan(new BigDecimal("500")))
            .and(OrderSpecifications.createdAfter(since));

        return orderRepository.findAll(spec);
    }

    public Page<Order> searchOrders(String customerName, OrderStatus status,
                                    BigDecimal minTotal, Pageable pageable) {
        Specification<Order> spec = Specification.where(null);

        if (customerName != null && !customerName.isBlank()) {
            spec = spec.and(OrderSpecifications.searchByCustomerName(customerName));
        }
        if (status != null) {
            spec = spec.and(OrderSpecifications.byStatus(status));
        }
        if (minTotal != null) {
            spec = spec.and(OrderSpecifications.totalGreaterThan(minTotal));
        }

        return orderRepository.findAll(spec, pageable);
    }
}
```

### 5.4 Criteria API Ã¢â‚¬â€ Advanced Usage

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/5-4-criteria-api-advanced-usage-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/5-4-criteria-api-advanced-usage-handwritten.svg" alt="Handwritten: 5.4 Criteria API Ã¢â‚¬â€ Advanced Usage" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/5-4-criteria-api-advanced-usage-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/5-4-criteria-api-advanced-usage-diagram.svg" alt="Diagram: 5.4 Criteria API Ã¢â‚¬â€ Advanced Usage" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/5-4-criteria-api-advanced-usage-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/5-4-criteria-api-advanced-usage-sticky.svg" alt="Sticky Note: 5.4 Criteria API Ã¢â‚¬â€ Advanced Usage" width="30%">
</a>


```java
@Repository
public class CustomOrderRepositoryImpl implements CustomOrderRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<OrderSummary> findOrderSummariesByCriteria(Long customerId,
                                                            LocalDateTime start,
                                                            LocalDateTime end) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<OrderSummary> query = cb.createQuery(OrderSummary.class);
        Root<Order> order = query.from(Order.class);

        // Joins
        Join<Order, Customer> customer = order.join("customer");
        Join<Order, OrderItem> items = order.join("items", JoinType.LEFT);

        // Predicates
        Predicate customerPredicate = cb.equal(customer.get("id"), customerId);
        Predicate datePredicate = cb.between(order.get("createdAt"), start, end);
        Predicate totalPredicate = cb.greaterThan(order.get("total"), BigDecimal.ZERO);

        // Select with constructor expression
        query.select(cb.construct(OrderSummary.class,
            order.get("id"),
            order.get("status"),
            order.get("total"),
            customer.get("name"),
            cb.count(items.get("id"))));

        // Group by and having
        query.where(cb.and(customerPredicate, datePredicate, totalPredicate));
        query.groupBy(order.get("id"), order.get("status"),
                      order.get("total"), customer.get("name"));
        query.having(cb.gt(cb.count(items.get("id")), 0));

        // Order
        query.orderBy(cb.desc(order.get("createdAt")));

        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Page<Order> findByDynamicFilters(OrderSearchFilters filters, Pageable pageable) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();

        // Count query
        CriteriaQuery<Long> countQuery = cb.createQuery(Long.class);
        Root<Order> countRoot = countQuery.from(Order.class);
        List<Predicate> predicates = buildPredicates(cb, countRoot, filters);
        countQuery.select(cb.count(countRoot));
        countQuery.where(predicates.toArray(new Predicate[0]));
        Long totalCount = entityManager.createQuery(countQuery).getSingleResult();

        // Data query
        CriteriaQuery<Order> dataQuery = cb.createQuery(Order.class);
        Root<Order> dataRoot = dataQuery.from(Order.class);
        dataQuery.where(buildPredicates(cb, dataRoot, filters).toArray(new Predicate[0]));
        dataQuery.orderBy(pageable.getSort().stream()
            .map(sort -> sort.isAscending()
                ? cb.asc(dataRoot.get(sort.getProperty()))
                : cb.desc(dataRoot.get(sort.getProperty())))
            .toList());

        List<Order> result = entityManager.createQuery(dataQuery)
            .setFirstResult((int) pageable.getOffset())
            .setMaxResults(pageable.getPageSize())
            .getResultList();

        return new PageImpl<>(result, pageable, totalCount);
    }

    private List<Predicate> buildPredicates(CriteriaBuilder cb, Root<Order> root,
                                             OrderSearchFilters filters) {
        List<Predicate> predicates = new ArrayList<>();
        if (filters.status() != null) {
            predicates.add(cb.equal(root.get("status"), filters.status()));
        }
        if (filters.customerId() != null) {
            predicates.add(cb.equal(root.get("customer").get("id"), filters.customerId()));
        }
        if (filters.minTotal() != null) {
            predicates.add(cb.greaterThanOrEqualTo(root.get("total"), filters.minTotal()));
        }
        if (filters.createdAfter() != null) {
            predicates.add(cb.greaterThan(root.get("createdAt"), filters.createdAfter()));
        }
        return predicates;
    }
}

public record OrderSearchFilters(
    OrderStatus status,
    Long customerId,
    BigDecimal minTotal,
    LocalDateTime createdAfter
) { }

public record OrderSummary(
    Long id,
    OrderStatus status,
    BigDecimal total,
    String customerName,
    Long itemCount
) { }

public interface CustomOrderRepository {
    List<OrderSummary> findOrderSummariesByCriteria(Long customerId,
                                                     LocalDateTime start,
                                                     LocalDateTime end);
    Page<Order> findByDynamicFilters(OrderSearchFilters filters, Pageable pageable);
}
```

---

## 6. QueryDSL

### 6.1 Setup and Configuration

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-1-setup-and-configuration-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-1-setup-and-configuration-handwritten.svg" alt="Handwritten: 6.1 Setup and Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-1-setup-and-configuration-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-1-setup-and-configuration-diagram.svg" alt="Diagram: 6.1 Setup and Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-1-setup-and-configuration-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-1-setup-and-configuration-sticky.svg" alt="Sticky Note: 6.1 Setup and Configuration" width="30%">
</a>


```xml
<dependency>
    <groupId>com.querydsl</groupId>
    <artifactId>querydsl-jpa</artifactId>
    <version>${querydsl.version}</version>
</dependency>
<dependency>
    <groupId>com.querydsl</groupId>
    <artifactId>querydsl-apt</artifactId>
    <version>${querydsl.version}</version>
    <scope>provided</scope>
</dependency>

<plugin>
    <groupId>com.mysema.maven</groupId>
    <artifactId>apt-maven-plugin</artifactId>
    <version>1.1.3</version>
    <executions>
        <execution>
            <goals><goal>process</goal></goals>
            <configuration>
                <outputDirectory>target/generated-sources/java</outputDirectory>
                <processor>com.querydsl.apt.jpa.JPAAnnotationProcessor</processor>
            </configuration>
        </execution>
    </executions>
</plugin>
```

### 6.2 QuerydslPredicateExecutor

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-2-querydslpredicateexecutor-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-2-querydslpredicateexecutor-handwritten.svg" alt="Handwritten: 6.2 QuerydslPredicateExecutor" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-2-querydslpredicateexecutor-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-2-querydslpredicateexecutor-diagram.svg" alt="Diagram: 6.2 QuerydslPredicateExecutor" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-2-querydslpredicateexecutor-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-2-querydslpredicateexecutor-sticky.svg" alt="Sticky Note: 6.2 QuerydslPredicateExecutor" width="30%">
</a>


```java
@Entity
public class Customer {

    @Id
    @GeneratedValue
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private CustomerTier tier;
    private Integer age;
}

// Extend QuerydslPredicateExecutor
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>,
                                            QuerydslPredicateExecutor<Customer> {
}

// Now supports:
// findAll(Predicate)
// findAll(Predicate, Sort)
// findAll(Predicate, Pageable)
// findOne(Predicate)
// count(Predicate)
// exists(Predicate)
```

### 6.3 Building QueryDSL Predicates

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-3-building-querydsl-predicates-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-3-building-querydsl-predicates-handwritten.svg" alt="Handwritten: 6.3 Building QueryDSL Predicates" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-3-building-querydsl-predicates-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-3-building-querydsl-predicates-diagram.svg" alt="Diagram: 6.3 Building QueryDSL Predicates" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-3-building-querydsl-predicates-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-3-building-querydsl-predicates-sticky.svg" alt="Sticky Note: 6.3 Building QueryDSL Predicates" width="30%">
</a>


```java
import static com.example.domain.QCustomer.customer;

@Service
public class CustomerSearchService {

    private final CustomerRepository customerRepository;

    public CustomerSearchService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> findGoldCustomers() {
        return customerRepository.findAll(
            customer.tier.eq(CustomerTier.GOLD)
        );
    }

    public Page<Customer> searchCustomers(String name, CustomerTier tier,
                                          Integer minAge, Pageable pageable) {
        BooleanBuilder builder = new BooleanBuilder();

        if (name != null) {
            builder.and(customer.firstName.containsIgnoreCase(name)
                .or(customer.lastName.containsIgnoreCase(name)));
        }
        if (tier != null) {
            builder.and(customer.tier.eq(tier));
        }
        if (minAge != null) {
            builder.and(customer.age.goe(minAge));
        }

        return customerRepository.findAll(builder, pageable);
    }

    public Optional<Customer> findByEmail(String email) {
        return customerRepository.findOne(customer.email.eq(email));
    }

    public List<Customer> findByTierWithPagination(CustomerTier tier, int page, int size) {
        return customerRepository.findAll(
            customer.tier.eq(tier),
            PageRequest.of(page, size, Sort.by("lastName").ascending())
        ).getContent();
    }

    // Complex predicates
    public List<Customer> findEligibleForPromotion() {
        Predicate predicate = customer.tier.in(CustomerTier.GOLD, CustomerTier.PLATINUM)
            .and(customer.age.between(25, 60))
            .and(customer.email.isNotNull());

        return customerRepository.findAll(predicate, Sort.by("lastName"));
    }
}
```

### 6.4 QuerydslBinderCustomizer

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-4-querydslbindercustomizer-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-4-querydslbindercustomizer-handwritten.svg" alt="Handwritten: 6.4 QuerydslBinderCustomizer" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-4-querydslbindercustomizer-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-4-querydslbindercustomizer-diagram.svg" alt="Diagram: 6.4 QuerydslBinderCustomizer" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-4-querydslbindercustomizer-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-4-querydslbindercustomizer-sticky.svg" alt="Sticky Note: 6.4 QuerydslBinderCustomizer" width="30%">
</a>


```java
@Repository
public interface ProductRepository extends JpaRepository<Product, Long>,
                                           QuerydslPredicateExecutor<Product>,
                                           QuerydslBinderCustomizer<QProduct> {

    @Override
    default void customize(QuerydslBinders binders, QProduct product) {
        // Customize binding for specific paths

        // Case-insensitive "contains" for name
        binders.bind(product.name).first(
            (path, value) -> path.containsIgnoreCase(value));

        // Exact match for SKU (ignore case)
        binders.bind(product.sku).first(
            (path, value) -> path.equalsIgnoreCase(value));

        // Range binding for price
        binders.bind(product.price).all((path, values) -> {
            List<? extends BigDecimal> numbers =
                values.stream().map(v -> (BigDecimal) v).toList();
            if (numbers.size() == 1) {
                return Optional.of(path.goe(numbers.get(0)));
            }
            return Optional.of(path.between(numbers.get(0), numbers.get(1)));
        });

        // Ignore undefined paths (prevents binding errors for unknown filters)
        binders.bind(path -> true).first(
            (path, value) -> path.stringValue().containsIgnoreCase(value.toString()));
    }
}
```

### 6.5 QuerydslRepositorySupport

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-5-querydslrepositorysupport-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-5-querydslrepositorysupport-handwritten.svg" alt="Handwritten: 6.5 QuerydslRepositorySupport" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-5-querydslrepositorysupport-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-5-querydslrepositorysupport-diagram.svg" alt="Diagram: 6.5 QuerydslRepositorySupport" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/6-5-querydslrepositorysupport-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/6-5-querydslrepositorysupport-sticky.svg" alt="Sticky Note: 6.5 QuerydslRepositorySupport" width="30%">
</a>


```java
@Repository
public class CustomOrderRepositoryImpl extends QuerydslRepositorySupport
                                       implements CustomOrderRepository {

    public CustomOrderRepositoryImpl() {
        super(Order.class);
    }

    @Override
    public List<Order> findOrdersWithComplexCriteria(Long customerId,
                                                      LocalDateTime since,
                                                      BigDecimal minTotal) {
        QOrder order = QOrder.order;
        QCustomer customer = QCustomer.customer;
        QOrderItem item = QOrderItem.orderItem;

        JPQLQuery<Order> query = from(order)
            .innerJoin(order.customer, customer).fetchJoin()
            .leftJoin(order.items, item).fetchJoin()
            .where(customer.id.eq(customerId))
            .where(order.createdAt.after(since))
            .where(order.total.goe(minTotal))
            .orderBy(order.createdAt.desc());

        return query.fetch();
    }

    @Override
    public long countByTier(CustomerTier tier) {
        QCustomer customer = QCustomer.customer;
        return from(customer)
            .where(customer.tier.eq(tier))
            .fetchCount();
    }

    @Override
    public Page<Order> findFiltered(OrderSearchFilters filters, Pageable pageable) {
        QOrder order = QOrder.order;
        QCustomer customer = QCustomer.customer;

        BooleanBuilder builder = new BooleanBuilder();
        if (filters.status() != null) {
            builder.and(order.status.eq(filters.status()));
        }
        if (filters.customerId() != null) {
            builder.and(order.customer.id.eq(filters.customerId()));
        }
        if (filters.minTotal() != null) {
            builder.and(order.total.goe(filters.minTotal()));
        }

        JPQLQuery<Order> query = from(order)
            .innerJoin(order.customer, customer).fetchJoin()
            .where(builder);

        long total = query.fetchCount();

        List<Order> results = query
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .orderBy(order.createdAt.desc())
            .fetch();

        return new PageImpl<>(results, pageable, total);
    }
}
```

---

## 7. Auditing

### 7.1 Entity Auditing Annotations

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/7-1-entity-auditing-annotations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/7-1-entity-auditing-annotations-handwritten.svg" alt="Handwritten: 7.1 Entity Auditing Annotations" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/7-1-entity-auditing-annotations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/7-1-entity-auditing-annotations-diagram.svg" alt="Diagram: 7.1 Entity Auditing Annotations" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/7-1-entity-auditing-annotations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/7-1-entity-auditing-annotations-sticky.svg" alt="Sticky Note: 7.1 Entity Auditing Annotations" width="30%">
</a>


```java
@Entity
@Table(name = "auditable_entities")
@EntityListeners(AuditingEntityListener.class)
public class AuditableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @CreatedBy
    @Column(name = "created_by", updatable = false)
    private String createdBy;

    @LastModifiedBy
    @Column(name = "updated_by")
    private String lastModifiedBy;

    // getters and setters
}
```

### 7.2 AuditorAware Implementation

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/7-2-auditoraware-implementation-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/7-2-auditoraware-implementation-handwritten.svg" alt="Handwritten: 7.2 AuditorAware Implementation" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/7-2-auditoraware-implementation-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/7-2-auditoraware-implementation-diagram.svg" alt="Diagram: 7.2 AuditorAware Implementation" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/7-2-auditoraware-implementation-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/7-2-auditoraware-implementation-sticky.svg" alt="Sticky Note: 7.2 AuditorAware Implementation" width="30%">
</a>


```java
@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
public class AuditingConfig {

    @Bean
    public AuditorAware<String> auditorProvider() {
        return new SpringSecurityAuditorAware();
    }
}

// With Spring Security
public class SpringSecurityAuditorAware implements AuditorAware<String> {

    @Override
    @NonNull
    public Optional<String> getCurrentAuditor() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            return Optional.of("SYSTEM");
        }

        return Optional.of(authentication.getName());
    }
}

// Without Spring Security (static context)
public class StaticAuditorAware implements AuditorAware<String> {

    @Override
    @NonNull
    public Optional<String> getCurrentAuditor() {
        // In a real app, get from request context or thread-local
        return Optional.ofNullable(RequestContext.getCurrentUser())
            .or(() -> Optional.of("SYSTEM"));
    }
}
```

### 7.3 MappedSuperclass for Reusable Auditing

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/7-3-mappedsuperclass-for-reusable-auditing-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/7-3-mappedsuperclass-for-reusable-auditing-handwritten.svg" alt="Handwritten: 7.3 MappedSuperclass for Reusable Auditing" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/7-3-mappedsuperclass-for-reusable-auditing-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/7-3-mappedsuperclass-for-reusable-auditing-diagram.svg" alt="Diagram: 7.3 MappedSuperclass for Reusable Auditing" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/7-3-mappedsuperclass-for-reusable-auditing-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/7-3-mappedsuperclass-for-reusable-auditing-sticky.svg" alt="Sticky Note: 7.3 MappedSuperclass for Reusable Auditing" width="30%">
</a>


```java
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseAuditEntity {

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @CreatedBy
    @Column(name = "created_by", updatable = false)
    private String createdBy;

    @LastModifiedBy
    @Column(name = "updated_by")
    private String lastModifiedBy;

    public LocalDateTime getCreatedAt() { return createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public String getCreatedBy() { return createdBy; }
    public String getLastModifiedBy() { return lastModifiedBy; }
}

@Entity
@Table(name = "articles")
public class Article extends BaseAuditEntity {

    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String content;

    // getters and setters
}
```

---

## 8. Pagination and Sorting

### 8.1 Pageable, Page, and Sort

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-1-pageable-page-and-sort-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-1-pageable-page-and-sort-handwritten.svg" alt="Handwritten: 8.1 Pageable, Page, and Sort" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-1-pageable-page-and-sort-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-1-pageable-page-and-sort-diagram.svg" alt="Diagram: 8.1 Pageable, Page, and Sort" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-1-pageable-page-and-sort-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-1-pageable-page-and-sort-sticky.svg" alt="Sticky Note: 8.1 Pageable, Page, and Sort" width="30%">
</a>


```java
// Controller
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @GetMapping
    public Page<Order> listOrders(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "createdAt,desc") String[] sort) {

        List<Sort.Order> orders = new ArrayList<>();
        for (String sortField : sort) {
            String[] parts = sortField.split(",");
            String property = parts[0];
            Sort.Direction direction = parts.length > 1
                ? Sort.Direction.fromString(parts[1])
                : Sort.Direction.ASC;
            orders.add(new Sort.Order(direction, property).ignoreCase());
        }

        Pageable pageable = PageRequest.of(page, size, Sort.by(orders));
        return orderRepository.findAll(pageable);
    }

    @GetMapping("/by-status")
    public Page<Order> filterByStatus(
            @RequestParam OrderStatus status,
            Pageable pageable) {                             // Spring auto-binds Pageable
        return orderRepository.findByStatus(status, pageable);
    }
}
```

### 8.2 Repository Methods with Pagination

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-2-repository-methods-with-pagination-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-2-repository-methods-with-pagination-handwritten.svg" alt="Handwritten: 8.2 Repository Methods with Pagination" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-2-repository-methods-with-pagination-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-2-repository-methods-with-pagination-diagram.svg" alt="Diagram: 8.2 Repository Methods with Pagination" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-2-repository-methods-with-pagination-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-2-repository-methods-with-pagination-sticky.svg" alt="Sticky Note: 8.2 Repository Methods with Pagination" width="30%">
</a>


```java
public interface OrderRepository extends JpaRepository<Order, Long> {

    // Spring Data automatically applies pagination
    Page<Order> findByStatus(OrderStatus status, Pageable pageable);

    // Slice Ã¢â‚¬â€ lighter than Page (no count query)
    Slice<Order> findByCustomerId(Long customerId, Pageable pageable);

    // List Ã¢â‚¬â€ ignores pagination in method signature but can still use Limit
    List<Order> findByCustomerId(Long customerId);

    // Custom query with pagination
    @Query("SELECT o FROM Order o WHERE o.total > :min")
    Page<Order> findLargeOrders(@Param("min") BigDecimal min, Pageable pageable);

    // Native query with pagination (requires countQuery)
    @Query(value = "SELECT * FROM orders WHERE total > :min",
           countQuery = "SELECT COUNT(*) FROM orders WHERE total > :min",
           nativeQuery = true)
    Page<Order> findLargeOrdersNative(@Param("min") BigDecimal min, Pageable pageable);
}
```

### 8.3 Page vs Slice vs List

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-3-page-vs-slice-vs-list-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-3-page-vs-slice-vs-list-handwritten.svg" alt="Handwritten: 8.3 Page vs Slice vs List" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-3-page-vs-slice-vs-list-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-3-page-vs-slice-vs-list-diagram.svg" alt="Diagram: 8.3 Page vs Slice vs List" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-3-page-vs-slice-vs-list-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-3-page-vs-slice-vs-list-sticky.svg" alt="Sticky Note: 8.3 Page vs Slice vs List" width="30%">
</a>


```java
@Service
public class OrderService {

    private final OrderRepository orderRepository;

    // Page Ã¢â‚¬â€ full pagination with total count (expensive for large datasets)
    public Page<Order> getOrdersPage(Pageable pageable) {
        return orderRepository.findAll(pageable);
        // Executes: SELECT ... LIMIT ? OFFSET ?
        // Executes: SELECT COUNT(*) ...
    }

    // Slice Ã¢â‚¬â€ knows if there are more results, no count query (faster)
    public Slice<Order> getOrdersSlice(Pageable pageable) {
        return orderRepository.findByCustomerId(42L, pageable);
        // Executes: SELECT ... LIMIT ? + 1 OFFSET ?
        // The +1 determines hasNext without a count query
    }

    // List Ã¢â‚¬â€ no pagination (use with caution for large datasets)
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}
```

### 8.4 JpaSort (Unsafe)

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-4-jpasort-unsafe-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-4-jpasort-unsafe-handwritten.svg" alt="Handwritten: 8.4 JpaSort (Unsafe)" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-4-jpasort-unsafe-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-4-jpasort-unsafe-diagram.svg" alt="Diagram: 8.4 JpaSort (Unsafe)" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-4-jpasort-unsafe-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-4-jpasort-unsafe-sticky.svg" alt="Sticky Note: 8.4 JpaSort (Unsafe)" width="30%">
</a>


```java
@Service
public class OrderService {

    public Page<Order> getOrdersSortedByFunction(Pageable pageable) {
        // JpaSort.unsafe allows function-based sorting
        // Normal Sort would throw: "Cannot sort by function"
        Sort sort = JpaSort.unsafe(
            Sort.Direction.DESC,
            "COALESCE(total, 0)"             // Raw SQL expression
        );

        Pageable unsafePageable = PageRequest.of(
            pageable.getPageNumber(),
            pageable.getPageSize(),
            sort
        );

        return orderRepository.findAll(unsafePageable);
    }
}
```

**Warning:** `JpaSort.unsafe` is vulnerable to SQL injection if user input reaches the sort expression. Never concatenate user input into unsafe sort strings.

### 8.5 Keyset Pagination

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-5-keyset-pagination-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-5-keyset-pagination-handwritten.svg" alt="Handwritten: 8.5 Keyset Pagination" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-5-keyset-pagination-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-5-keyset-pagination-diagram.svg" alt="Diagram: 8.5 Keyset Pagination" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/8-5-keyset-pagination-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/8-5-keyset-pagination-sticky.svg" alt="Sticky Note: 8.5 Keyset Pagination" width="30%">
</a>


```java
// Keyset pagination Ã¢â‚¬â€ efficient for large datasets
// Instead of OFFSET, use WHERE createdAt < :lastCreatedAt

public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT o FROM Order o WHERE o.createdAt < :lastCreatedAt " +
           "ORDER BY o.createdAt DESC")
    List<Order> findNextPage(@Param("lastCreatedAt") LocalDateTime lastCreatedAt,
                             Pageable pageable);
}

// Spring Data 3+ Ã¢â‚¬â€ ScrollSubquery for keyset pagination
@Query("SELECT o FROM Order o ORDER BY o.createdAt DESC, o.id DESC")
Window<Order> findFirstWindow(Pageable pageable);

// Usage in service
public Window<Order> findOrdersAfter(LocalDateTime cursor, int size) {
    Pageable pageable = PageRequest.of(0, size);
    if (cursor == null) {
        return orderRepository.findFirstWindow(pageable);
    }
    // Manual implementation with ScrollSubquery
    return orderRepository.findFirstWindow(pageable);
}
```

Keyset pagination advantages:
- O(1) performance regardless of page depth
- No OFFSET drift (new rows don't shift pages)
- Works with real-time data

Disadvantages:
- Only supports forward pagination
- Requires a unique, sortable key
- Cannot jump to arbitrary pages

---

## 9. Projections

Projections allow you to fetch only the data you need, reducing network transfer and improving performance.

### 9.1 Interface-Based Closed Projection

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-1-interface-based-closed-projection-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-1-interface-based-closed-projection-handwritten.svg" alt="Handwritten: 9.1 Interface-Based Closed Projection" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-1-interface-based-closed-projection-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-1-interface-based-closed-projection-diagram.svg" alt="Diagram: 9.1 Interface-Based Closed Projection" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-1-interface-based-closed-projection-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-1-interface-based-closed-projection-sticky.svg" alt="Sticky Note: 9.1 Interface-Based Closed Projection" width="30%">
</a>


```java
// Closed projection Ã¢â‚¬â€ only getter methods matching entity properties
// Spring Data generates a proxy at runtime Ã¢â‚¬â€ no data is fetched for unneeded columns
public interface CustomerSummary {

    Long getId();
    String getFirstName();
    String getLastName();
    String getEmail();
}

// Nested projection
public interface OrderView {

    Long getId();
    OrderStatus getStatus();
    BigDecimal getTotal();

    CustomerSummary getCustomer();     // Nested projection for the customer

    // Computed property (not in entity Ã¢â‚¬â€ SpEL evaluated)
    @Value("#{target.total > 1000 ? 'HIGH' : 'NORMAL'}")
    String getPriority();
}

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    // Returns projection interface (only fetches needed columns)
    List<CustomerSummary> findCustomerSummaryByTier(CustomerTier tier);

    @Query("SELECT o FROM Order o WHERE o.customer.id = :customerId")
    List<OrderView> findOrderViewsByCustomer(@Param("customerId") Long customerId);
}
```

### 9.2 Interface-Based Open Projection

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-2-interface-based-open-projection-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-2-interface-based-open-projection-handwritten.svg" alt="Handwritten: 9.2 Interface-Based Open Projection" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-2-interface-based-open-projection-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-2-interface-based-open-projection-diagram.svg" alt="Diagram: 9.2 Interface-Based Open Projection" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-2-interface-based-open-projection-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-2-interface-based-open-projection-sticky.svg" alt="Sticky Note: 9.2 Interface-Based Open Projection" width="30%">
</a>


```java
// Open projection Ã¢â‚¬â€ uses SpEL to compute values
// Spring Data loads ALL columns because it cannot determine which ones are needed
public interface CustomerWithFullName {

    String getFirstName();
    String getLastName();

    @Value("#{target.firstName + ' ' + target.lastName}")
    String getFullName();

    @Value("#{target.email != null ? target.email : 'NO EMAIL'}")
    String getEmailOrDefault();

    @Value("#{@customerFormatter.format(target)}")  // Reference Spring bean
    String getFormatted();
}
```

### 9.3 Class-Based DTO Projection (DTO)

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-3-class-based-dto-projection-dto-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-3-class-based-dto-projection-dto-handwritten.svg" alt="Handwritten: 9.3 Class-Based DTO Projection (DTO)" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-3-class-based-dto-projection-dto-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-3-class-based-dto-projection-dto-diagram.svg" alt="Diagram: 9.3 Class-Based DTO Projection (DTO)" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-3-class-based-dto-projection-dto-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-3-class-based-dto-projection-dto-sticky.svg" alt="Sticky Note: 9.3 Class-Based DTO Projection (DTO)" width="30%">
</a>


```java
// DTO with constructor Ã¢â‚¬â€ most efficient projection
// JPQL constructor expression must match DTO constructor exactly
public record CustomerDto(
    Long id,
    String firstName,
    String lastName,
    String email,
    CustomerTier tier
) { }

// Another DTO
public class OrderListItem {

    private final Long id;
    private final OrderStatus status;
    private final BigDecimal total;
    private final String customerName;
    private final LocalDateTime createdAt;

    // Constructor must match the JPQL expression
    public OrderListItem(Long id, OrderStatus status, BigDecimal total,
                         String customerName, LocalDateTime createdAt) {
        this.id = id;
        this.status = status;
        this.total = total;
        this.customerName = customerName;
        this.createdAt = createdAt;
    }

    // getters
}

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    // JPQL constructor expression
    @Query("""
        SELECT new com.example.dto.OrderListItem(
            o.id, o.status, o.total, c.name, o.createdAt)
        FROM Order o JOIN o.customer c
        WHERE o.createdAt > :since
        ORDER BY o.createdAt DESC
        """)
    List<OrderListItem> findOrderListItems(@Param("since") LocalDateTime since);

    // Interface projection Ã¢â‚¬â€ returns proxy (no constructor needed)
    List<CustomerSummary> findCustomerSummaryByTier(CustomerTier tier);
}
```

### 9.4 Dynamic Projection

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-4-dynamic-projection-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-4-dynamic-projection-handwritten.svg" alt="Handwritten: 9.4 Dynamic Projection" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-4-dynamic-projection-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-4-dynamic-projection-diagram.svg" alt="Diagram: 9.4 Dynamic Projection" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-4-dynamic-projection-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-4-dynamic-projection-sticky.svg" alt="Sticky Note: 9.4 Dynamic Projection" width="30%">
</a>


```java
// Single repository method that returns different projection types
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    // Class<T> parameter determines the return type
    <T> List<T> findByTier(CustomerTier tier, Class<T> type);

    <T> Optional<T> findByEmail(String email, Class<T> type);

    @Query("SELECT c FROM Customer c WHERE c.lastName = :lastName")
    <T> List<T> findByLastName(@Param("lastName") String lastName, Class<T> type);
}

// Usage
@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public List<CustomerSummary> getGoldCustomerSummaries() {
        return customerRepository.findByTier(CustomerTier.GOLD, CustomerSummary.class);
    }

    public List<CustomerDto> getGoldCustomerDtos() {
        return customerRepository.findByTier(CustomerTier.GOLD, CustomerDto.class);
    }

    public Optional<Customer> getFullCustomer(String email) {
        return customerRepository.findByEmail(email, Customer.class);  // Full entity
    }
}
```

### 9.5 Projection Performance

<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-5-projection-performance-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-5-projection-performance-handwritten.svg" alt="Handwritten: 9.5 Projection Performance" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-5-projection-performance-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-5-projection-performance-diagram.svg" alt="Diagram: 9.5 Projection Performance" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/21-spring-data-jpa/9-5-projection-performance-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/21-spring-data-jpa/9-5-projection-performance-sticky.svg" alt="Sticky Note: 9.5 Projection Performance" width="30%">
</a>


```java
// Performance comparison:
//
// Full entity (Customer.class):
//   SELECT id, first_name, last_name, email, tier, age, created_at, updated_at, version
//   FROM customers
//   Ã¢â‚¬â€ All columns loaded
//   Ã¢â‚¬â€ Managed entity in persistence context
//   Ã¢â‚¬â€ Supports lazy loading
//
// Interface projection (CustomerSummary):
//   SELECT id, first_name, last_name, email
//   FROM customers
//   Ã¢â‚¬â€ Only requested columns loaded
//   Ã¢â‚¬â€ Not managed (read-only)
//   Ã¢â‚¬â€ No lazy loading
//
// DTO projection (new CustomerDto(...)):
//   SELECT id, first_name, last_name, email, tier
//   FROM customers
//   Ã¢â‚¬â€ Same as interface projection
//   Ã¢â‚¬â€ No proxy creation overhead
//   Ã¢â‚¬â€ Not managed
//
// When to use each:
// - Full entity: when you need to update data
// - Interface projection: quick read-only queries
// - DTO projection: service-layer DTOs, complex constructor logic
```

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| Derived Query | Method name to query auto-generation | findBy*, countBy*, deleteBy* | Simple lookups by fields |
| @Query | Custom JPQL or native SQL | Full query control | Complex or optimized queries |
| Specifications | Dynamic, combinable query predicates | and/or/not composition | Filter-based search |
| QueryDSL | Type-safe query construction | Q-types generation | Complex dynamic queries |
| Projections | Interface-based data transfer | Optimize data retrieval | Read-only data views |

## Quick Reference

| Query Method Prefix | JPQL Translation | Use Case |
|--------------------|-----------------|----------|
| findBy... | WHERE clause | Field-based lookups |
| countBy... | COUNT query | Aggregation |
| deleteBy... | DELETE query | Bulk deletion |
| existsBy... | EXISTS query | Existence check |
| findBy...OrderBy... | ORDER BY | Sorted results |

## Cross-Application Matrix

| Query Type | Simple Lookups | Complex Filters | Aggregations | Pagination |
|------------|---------------|-----------------|--------------|------------|
| Derived | Excellent | Poor | Poor | Good |
| @Query | Good | Good | Excellent | Good |
| Specifications | Overkill | Excellent | Poor | Good |
| QueryDSL | Overkill | Excellent | Good | Good |

## Chapter Quiz

1. Which method name deletes user records by email?
   - A) removeByEmail
   - B) deleteByEmail
   - C) eraseByEmail
   - D) dropByEmail

<details>
<summary>Answer&lt;/summary&gt;
**B) deleteByEmail.** Spring Data JPA derives delete operations from the deleteBy prefix in method names.
</details>

2. What is the primary advantage of Specifications?
   - A) Better performance
   - B) Dynamic, composable query predicates
   - C) Automatic caching
   - D) No SQL knowledge needed

<details>
<summary>Answer&lt;/summary&gt;
**B) Dynamic, composable query predicates.** Specifications allow building dynamic WHERE clauses programmatically.
</details>

3. How do you implement pagination in Spring Data JPA?
   - A) @Pageable annotation
   - B) Pageable parameter in repository method
   - C) Manual LIMIT/OFFSET
   - D) @Query(native=true)

<details>
<summary>Answer&lt;/summary&gt;
**B) Pageable parameter in repository method.** Spring Data automatically applies pagination when the method accepts a Pageable parameter.
</details>

---

## Summary
ummary

- **Repository hierarchy** progresses from `Repository` (minimal) through `CrudRepository` and `PagingAndSortingRepository` to `JpaRepository` (full feature set). Modern `ListCrudRepository` and `ListPagingAndSortingRepository` return List instead of Iterable.
- **Derived query methods** parse method names into JPQL. Support `findBy`, `existsBy`, `countBy`, `deleteBy`, and `streamBy` prefixes with rich expressions (And, Or, Between, Like, In, OrderBy, IgnoreCase).
- **@Query** supports JPQL and native SQL with `@QueryHints` for tuning. Use SpEL for dynamic entity references and LIKE patterns.
- **@Modifying** marks update/delete queries. Always use `clearAutomatically = true` and `flushAutomatically = true` for predictable results with bulk operations.
- **Specifications** build dynamic queries through composable `Specification<T>` predicates. Combine with `where()`, `and()`, `or()`, `not()` for complex filters.
- **QueryDSL** provides type-safe query building with `QuerydslPredicateExecutor` and `BooleanBuilder`. `QuerydslBinderCustomizer` customizes property bindings.
- **Auditing** via `@CreatedDate`, `@LastModifiedDate`, `@CreatedBy`, `@LastModifiedBy` with `AuditorAware` and `@EnableJpaAuditing` provides automatic timestamp and user tracking.
- **Pagination** via `Pageable`/`Page` includes total count queries. `Slice` avoids count queries. Keyset pagination (`ScrollSubquery`) provides O(1) navigation through deep pages.
- **Projections** reduce data transfer. Closed interface projections fetch only needed columns. DTO projections with `new` expressions are most efficient. Dynamic projections via `Class<T>` parameters allow flexible return types.

---

## Exercises

1. **Repository Selection:** You have three entities: `Country` (read-only reference data), `Product` (CRUD + pagination), `AuditLog` (write-only, millions of rows). Which repository interface would you choose for each and why?

2. **Derived Queries:** Write a repository interface for `Transaction` with methods to:
   - Find all transactions for a given account ID sorted by date descending
   - Count transactions above a certain amount created after a date
   - Delete all transactions older than a cutoff date
   - Check if a transaction with a given reference exists

3. **@Query and @Modifying:** Create a bulk archiving operation that moves orders older than 90 days to an `archived_orders` table using a native query with @Modifying. Include proper flush and clear behavior. Then write a JPQL @Query that fetches active orders with their items using JOIN FETCH.

4. **Specifications:** Build a dynamic filter system for a `Person` entity with fields: name, age range, city, occupation. Create `PersonSpecifications` and a service that accepts optional filter parameters and returns a `Page<Person>`. Support case-insensitive name search.

5. **QueryDSL:** Implement the same dynamic filter system from exercise 4 using QueryDSL instead of Specifications. Use `BooleanBuilder` and `QuerydslPredicateExecutor`. Then add a `QuerydslBinderCustomizer` that makes string matching case-insensitive by default.

6. **Auditing:** Create a complete auditing setup with `BaseAuditEntity` (createdAt, updatedAt, createdBy, lastModifiedBy), an `AuditorAware` that extracts the username from Spring Security, and an entity `Ticket` that extends the base. Show all configuration classes.

7. **Pagination Benchmark:** Write a controller that accepts page, size, and sort parameters and returns `Page<Order>`. Then compare performance characteristics of `Page` vs `Slice` vs keyset pagination for a dataset of 1 million orders. Which would you choose for a real-time order list?

8. **Projections:** Create three projection variants for a `User` entity:
   - `UserSummary` (closed interface: id, name, email)
   - `UserDetails` (open interface: fullName = firstName + lastName, age computed from birthDate)
   - `UserAdminDto` (record/class-based: all fields including sensitive data)
   Then implement a dynamic projection repository method that accepts `Class<T>`.

9. **Combined Features:** Build a complete REST endpoint `/api/search/orders` that accepts:
   - Optional filters (status, customerId, minTotal, dateRange)
   - Sort and pagination parameters
   - A projection parameter to switch between full entity and summary
   Use Specifications for filtering and projections for the response.

10. **Performance Analysis:** Given the following query method:
    ```java
    List<Order> findByCustomerId(Long customerId);
    ```
    The controller iterates `order.getItems()` for each order, causing n+1. Refactor to eliminate n+1 using:
    - JOIN FETCH in @Query
    - Entity Graphs
    - @BatchSize
    - Show the Hibernate SQL log output for each approach
