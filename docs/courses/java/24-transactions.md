# Transaction Management

Transactions are the bedrock of reliable data processing. A transaction groups multiple operations into a single unit of work that either succeeds completely (commit) or fails entirely (rollback), preserving data integrity even under concurrent access, hardware failures, and application crashes.

Spring's transaction management abstracts over JDBC, JPA, JTA, and even non-relational stores behind a consistent programming model. You declare transactional boundaries declaratively with `@Transactional`, control propagation and isolation declaratively, and plug in any `PlatformTransactionManager` without changing your business logic.

This chapter covers the entire transaction landscape: from simple local transactions with `@Transactional` through programmatic control with `TransactionTemplate`, to distributed sagas across microservices.

---

## Learning Objectives

By the end of this chapter you should be able to:

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/java/24-transactions/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/24-transactions/hero.svg" alt="Chapter Banner: Transaction Management" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/24-transactions/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/24-transactions/handwritten-notes.svg" alt="Handwritten Notes: Transaction Management" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/24-transactions/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/24-transactions/sticky-notes.svg" alt="Sticky Notes: Transaction Management" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/24-transactions/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/24-transactions/visual-explanation.svg" alt="Visual Explanation: Transaction Management" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/24-transactions/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/24-transactions/architecture.svg" alt="Architecture: Transaction Management" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/24-transactions/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/24-transactions/workflow.svg" alt="Workflow: Transaction Management" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/24-transactions/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/24-transactions/mindmap.svg" alt="Mind Map: Transaction Management" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/24-transactions/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/24-transactions/comparison.svg" alt="Comparison: Transaction Management" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/24-transactions/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/24-transactions/cheatsheet.svg" alt="Cheat Sheet: Transaction Management" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/24-transactions/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/24-transactions/interview-quiz.svg" alt="Quiz Card: Transaction Management" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/java/24-transactions/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/java/24-transactions/social-card.svg" alt="Social Card: Transaction Management" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


- Configure and use `@Transactional` with all seven propagation behaviors and five isolation levels
- Control rollback behavior with `rollbackFor`, `noRollbackFor`, the `readOnly` flag, and `timeout`
- Manage transactions programmatically using `TransactionTemplate` with callbacks
- Understand the `PlatformTransactionManager` hierarchy and choose the right implementation
- Synchronize transaction lifecycle events with `@TransactionalEventListener` and `TransactionSynchronizationManager`
- Decide between declarative and programmatic transaction management for a given scenario
- Implement distributed transactions with JTA, Atomikos, and the two-phase commit protocol
- Design and implement the Saga pattern with choreography and orchestration approaches
- Apply pessimistic locking with `@Lock` annotations and `SELECT ... FOR UPDATE`
- Implement optimistic locking with `@Version` and retry logic

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

## @Transactional Ã¢â‚¬â€ Declarative Transactions

![Transaction Management Flow](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/24-transactions.png)

`@Transactional` is the cornerstone of Spring's transaction management. When placed on a method or class, it wraps execution in a transactional boundary managed by a `PlatformTransactionManager`.

### Basic Usage

<a href="../../../assets/images/diagrams/java/24-transactions/basic-usage-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/basic-usage-handwritten.svg" alt="Handwritten: Basic Usage" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/basic-usage-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/basic-usage-diagram.svg" alt="Diagram: Basic Usage" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/basic-usage-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/basic-usage-sticky.svg" alt="Sticky Note: Basic Usage" width="30%">
</a>


```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PaymentService {

    private final AccountRepository accountRepository;
    private final LedgerRepository ledgerRepository;

    public PaymentService(AccountRepository accountRepository,
                          LedgerRepository ledgerRepository) {
        this.accountRepository = accountRepository;
        this.ledgerRepository = ledgerRepository;
    }

    @Transactional
    public void transfer(Long fromAccountId, Long toAccountId, BigDecimal amount) {
        Account from = accountRepository.findById(fromAccountId)
            .orElseThrow(() -> new IllegalArgumentException("Source account not found"));
        Account to = accountRepository.findById(toAccountId)
            .orElseThrow(() -> new IllegalArgumentException("Target account not found"));

        from.debit(amount);
        to.credit(amount);

        accountRepository.save(from);
        accountRepository.save(to);

        ledgerRepository.logTransfer(fromAccountId, toAccountId, amount);
    }

    @Transactional(readOnly = true)
    public BigDecimal getBalance(Long accountId) {
        return accountRepository.findById(accountId)
            .map(Account::getBalance)
            .orElse(BigDecimal.ZERO);
    }
}
```

### How @Transactional Works

<a href="../../../assets/images/diagrams/java/24-transactions/how-transactional-works-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/how-transactional-works-handwritten.svg" alt="Handwritten: How @Transactional Works" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/how-transactional-works-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/how-transactional-works-diagram.svg" alt="Diagram: How @Transactional Works" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/how-transactional-works-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/how-transactional-works-sticky.svg" alt="Sticky Note: How @Transactional Works" width="30%">
</a>


Spring creates a proxy around the target bean. When a `@Transactional` method is invoked, the proxy:

1. Checks whether a transaction already exists or creates a new one
2. Invokes the target method
3. Commits if the method returns normally
4. Rolls back if a runtime exception (or specified checked exception) is thrown

```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProxyDemoService {

    @Transactional
    public void doWork() {
        // This method runs inside a transaction
    }

    public void callInternal() {
        // BEWARE: Self-invocation bypasses the proxy!
        // No transaction will be created here:
        this.doWork();
    }
}
```

To fix self-invocation:

```java
package com.course.tx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SelfInvocationFix {

    @Autowired
    private ApplicationContext context;

    @Transactional
    public void doWork() {
        // actual transactional work
    }

    public void callInternal() {
        // Get the proxy from the context
        SelfInvocationFix proxy = context.getBean(SelfInvocationFix.class);
        proxy.doWork(); // Now @Transactional is effective
    }
}
```

### Propagation Behaviors

<a href="../../../assets/images/diagrams/java/24-transactions/propagation-behaviors-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/propagation-behaviors-handwritten.svg" alt="Handwritten: Propagation Behaviors" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/propagation-behaviors-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/propagation-behaviors-diagram.svg" alt="Diagram: Propagation Behaviors" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/propagation-behaviors-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/propagation-behaviors-sticky.svg" alt="Sticky Note: Propagation Behaviors" width="30%">
</a>


Propagation defines how transactions relate to each other when a transactional method calls another transactional method.

| Propagation | Behavior |
|---|---|
| `REQUIRED` (default) | Join existing transaction; create new if none exists |
| `REQUIRES_NEW` | Suspend existing transaction; create new always |
| `NESTED` | Execute within nested transaction (savepoint) if exists; create new otherwise |
| `MANDATORY` | Fail if no existing transaction |
| `SUPPORTS` | Join if exists; execute non-transactionally otherwise |
| `NOT_SUPPORTED` | Suspend existing transaction; execute non-transactionally |
| `NEVER` | Fail if a transaction exists |

```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Demonstrates all seven propagation behaviors.
 */
@Service
public class PropagationDemoService {

    private final AuditLogRepository auditLogRepository;
    private final NotificationService notificationService;

    public PropagationDemoService(AuditLogRepository auditLogRepository,
                                   NotificationService notificationService) {
        this.auditLogRepository = auditLogRepository;
        this.notificationService = notificationService;
    }

    @Transactional
    public void parentOperation() {
        // This runs within a transaction (REQUIRED by default)

        childRequired();      // joins the same transaction
        childRequiresNew();   // suspends parent, creates new, resumes parent
        childNested();        // creates a savepoint within parent
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public void childRequired() {
        // Joins the caller's transaction.
        // If caller has none, creates one.
        auditLogRepository.save(new AuditLog("required child executed"));
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void childRequiresNew() {
        // Suspends the caller's transaction and creates a brand new one.
        // The new transaction commits independently Ã¢â‚¬â€ even if the parent
        // rolls back, this child's work is already committed.
        auditLogRepository.save(new AuditLog("requires_new child executed"));
    }

    @Transactional(propagation = Propagation.NESTED)
    public void childNested() {
        // Creates a JDBC savepoint within the parent transaction.
        // If this child rolls back, the parent can continue.
        // If the parent rolls back, the child goes with it.
        auditLogRepository.save(new AuditLog("nested child executed"));
    }

    @Transactional(propagation = Propagation.MANDATORY)
    public void childMandatory() {
        // Throws IllegalTransactionStateException if no transaction exists.
        auditLogRepository.save(new AuditLog("mandatory child executed"));
    }

    @Transactional(propagation = Propagation.SUPPORTS)
    public void childSupports() {
        // Joins if a transaction exists; runs without if none.
        auditLogRepository.save(new AuditLog("supports child executed"));
    }

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public void childNotSupported() {
        // Suspends any existing transaction; runs without transaction.
        auditLogRepository.save(new AuditLog("not_supported child executed"));
    }

    @Transactional(propagation = Propagation.NEVER)
    public void childNever() {
        // Throws IllegalTransactionStateException if a transaction exists.
        auditLogRepository.save(new AuditLog("never child executed"));
    }
}
```

### REQUIRES_NEW In-Depth

<a href="../../../assets/images/diagrams/java/24-transactions/requires-new-in-depth-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/requires-new-in-depth-handwritten.svg" alt="Handwritten: REQUIRES_NEW In-Depth" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/requires-new-in-depth-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/requires-new-in-depth-diagram.svg" alt="Diagram: REQUIRES_NEW In-Depth" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/requires-new-in-depth-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/requires-new-in-depth-sticky.svg" alt="Sticky Note: REQUIRES_NEW In-Depth" width="30%">
</a>


When `REQUIRES_NEW` is used, the parent transaction is suspended. The child starts a new physical transaction, commits independently, and then the parent resumes. If the child succeeds but the parent fails, the child's work persists. This is critical for audit logging, where you must record an operation even if the business operation fails.

```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuditService {

    private final AuditLogRepository auditLogRepository;

    public AuditService(AuditLogRepository auditLogRepository) {
        this.auditLogRepository = auditLogRepository;
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void logAction(String action, String performedBy, String details) {
        AuditLog log = new AuditLog(action, performedBy, details);
        auditLogRepository.save(log);
        // This commit is independent of the caller's transaction
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void logFailure(String action, String performedBy, Throwable error) {
        AuditLog log = new AuditLog(
            action + "_FAILED",
            performedBy,
            error.getMessage()
        );
        auditLogRepository.save(log);
    }
}
```

### NESTED Behavior with Savepoints

<a href="../../../assets/images/diagrams/java/24-transactions/nested-behavior-with-savepoints-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/nested-behavior-with-savepoints-handwritten.svg" alt="Handwritten: NESTED Behavior with Savepoints" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/nested-behavior-with-savepoints-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/nested-behavior-with-savepoints-diagram.svg" alt="Diagram: NESTED Behavior with Savepoints" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/nested-behavior-with-savepoints-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/nested-behavior-with-savepoints-sticky.svg" alt="Sticky Note: NESTED Behavior with Savepoints" width="30%">
</a>


`NESTED` uses JDBC savepoints to create a sub-transaction within the parent. The nested transaction can roll back independently via a savepoint, without affecting the parent. However, if the parent rolls back, the nested transaction rolls back too.

```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BulkImportService {

    private final ItemRepository itemRepository;

    public BulkImportService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @Transactional
    public void bulkImport(List<ImportRow> rows) {
        for (int i = 0; i < rows.size(); i++) {
            try {
                importSingleRow(rows.get(i));
            } catch (Exception e) {
                // Only this row's changes are rolled back
                System.err.println("Row " + i + " failed, continuing with next");
            }
        }
    }

    @Transactional(propagation = Propagation.NESTED)
    public void importSingleRow(ImportRow row) {
        Item item = new Item(row.getName(), row.getPrice());
        itemRepository.save(item);
        // If this throws, only this row's savepoint is rolled back
    }
}
```

### Isolation Levels

<a href="../../../assets/images/diagrams/java/24-transactions/isolation-levels-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/isolation-levels-handwritten.svg" alt="Handwritten: Isolation Levels" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/isolation-levels-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/isolation-levels-diagram.svg" alt="Diagram: Isolation Levels" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/isolation-levels-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/isolation-levels-sticky.svg" alt="Sticky Note: Isolation Levels" width="30%">
</a>


Isolation controls how transaction changes are visible to other concurrent transactions. The SQL standard defines four levels, each preventing a different set of phenomena:

| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read |
|---|---|---|---|
| `READ_UNCOMMITTED` | Possible | Possible | Possible |
| `READ_COMMITTED` (default in most databases) | Prevented | Possible | Possible |
| `REPEATABLE_READ` | Prevented | Prevented | Possible |
| `SERIALIZABLE` | Prevented | Prevented | Prevented |

```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

@Service
public class InventoryService {

    private final InventoryRepository inventoryRepository;

    public InventoryService(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    @Transactional(isolation = Isolation.READ_COMMITTED)
    public int getStockLevel(Long productId) {
        // Default in PostgreSQL, Oracle, SQL Server
        // Guarantees no dirty reads
        return inventoryRepository.getStock(productId);
    }

    @Transactional(isolation = Isolation.REPEATABLE_READ)
    public void verifyAndDeductStock(Long productId, int quantity) {
        // Prevents non-repeatable reads:
        // If we read twice in this transaction, we see the same value
        int stock = inventoryRepository.getStock(productId);
        if (stock < quantity) {
            throw new InsufficientStockException(productId, quantity, stock);
        }
        inventoryRepository.deductStock(productId, quantity);
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    public void allocateInventory(Long orderId, List<OrderLine> lines) {
        // Strictest level: prevents phantoms and all anomalies
        // Use sparingly Ã¢â‚¬â€ throughput suffers significantly
        for (OrderLine line : lines) {
            int stock = inventoryRepository.getStock(line.getProductId());
            if (stock >= line.getQuantity()) {
                inventoryRepository.deductStock(
                    line.getProductId(), line.getQuantity());
                inventoryRepository.createAllocation(
                    orderId, line.getProductId(), line.getQuantity());
            }
        }
    }

    @Transactional(isolation = Isolation.READ_UNCOMMITTED)
    public int approximateStockLevel(Long productId) {
        // Allows dirty reads Ã¢â‚¬â€ fastest but least safe
        return inventoryRepository.getStock(productId);
    }
}
```

### rollbackFor and noRollbackFor

<a href="../../../assets/images/diagrams/java/24-transactions/rollbackfor-and-norollbackfor-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/rollbackfor-and-norollbackfor-handwritten.svg" alt="Handwritten: rollbackFor and noRollbackFor" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/rollbackfor-and-norollbackfor-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/rollbackfor-and-norollbackfor-diagram.svg" alt="Diagram: rollbackFor and noRollbackFor" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/rollbackfor-and-norollbackfor-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/rollbackfor-and-norollbackfor-sticky.svg" alt="Sticky Note: rollbackFor and noRollbackFor" width="30%">
</a>


By default, `@Transactional` rolls back on runtime (unchecked) exceptions and does NOT roll back on checked exceptions. Override this with `rollbackFor` and `noRollbackFor`.

```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RollbackControlService {

    private final OrderRepository orderRepository;

    public RollbackControlService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Transactional(rollbackFor = InsufficientStockException.class)
    public void placeOrder(Order order) throws InsufficientStockException {
        // Will roll back on InsufficientStockException even though it's checked
        orderRepository.save(order);
    }

    @Transactional(noRollbackFor = PaymentDeclinedException.class)
    public void processPayment(Payment payment) {
        // Will NOT roll back on PaymentDeclinedException (runtime)
        // Useful when you want to save the failed payment record
        paymentRepository.save(payment);
    }

    @Transactional(rollbackFor = {SQLException.class, DataIntegrityViolationException.class},
                   noRollbackFor = BusinessValidationException.class)
    public void complexRollbackRules(Entity entity) {
        // Custom combination
    }

    @Transactional(rollbackForClassName = {"java.sql.SQLException"},
                   noRollbackForClassName = {"com.course.tx.OptimisticLockException"})
    public void rollbackByClassName() {
        // Class name strings Ã¢â‚¬â€ useful when the exception class isn't on the classpath
        // at compile time
    }
}
```

### readOnly Flag

<a href="../../../assets/images/diagrams/java/24-transactions/readonly-flag-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/readonly-flag-handwritten.svg" alt="Handwritten: readOnly Flag" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/readonly-flag-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/readonly-flag-diagram.svg" alt="Diagram: readOnly Flag" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/readonly-flag-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/readonly-flag-sticky.svg" alt="Sticky Note: readOnly Flag" width="30%">
</a>


The `readOnly` attribute has different effects depending on the underlying `PlatformTransactionManager`:

- **Hibernate/JPA**: Sets `FlushMode.MANUAL` and `clear()` after reads, avoiding dirty checking overhead. May also set the JDBC connection to read-only (`Connection.setReadOnly(true)`) which some databases optimize.
- **JDBC**: Sets `connection.setReadOnly(true)`, which some databases use for query optimization.
- **MongoDB**: No effect
- **NoSQL generally**: May be ignored

```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ReadOnlyDemoService {

    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;

    public ReadOnlyDemoService(AccountRepository accountRepository,
                                TransactionRepository transactionRepository) {
        this.accountRepository = accountRepository;
        this.transactionRepository = transactionRepository;
    }

    @Transactional(readOnly = true)
    public AccountSummary getAccountSummary(Long accountId) {
        // Hibernate skips dirty checking Ã¢â‚¬â€ no flush at commit
        // Database may optimize query path
        Account account = accountRepository.findById(accountId)
            .orElseThrow(() -> new IllegalArgumentException("Account not found"));
        List<Transaction> recentTxns = transactionRepository
            .findTop10ByAccountIdOrderByDateDesc(accountId);
        return new AccountSummary(account, recentTxns);
    }

    @Transactional(readOnly = true)
    public List<Account> findAccountsByCustomer(String customerId) {
        return accountRepository.findByCustomerId(customerId);
    }
}
```

### timeout

<a href="../../../assets/images/diagrams/java/24-transactions/timeout-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/timeout-handwritten.svg" alt="Handwritten: timeout" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/timeout-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/timeout-diagram.svg" alt="Diagram: timeout" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/timeout-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/timeout-sticky.svg" alt="Sticky Note: timeout" width="30%">
</a>


The `timeout` attribute sets the maximum seconds a transaction may run. Exceeding the timeout causes a transaction rollback.

```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TimeoutDemoService {

    private final BatchProcessor batchProcessor;

    public TimeoutDemoService(BatchProcessor batchProcessor) {
        this.batchProcessor = batchProcessor;
    }

    @Transactional(timeout = 30)
    public void processWithTimeout() {
        // Must complete within 30 seconds or transaction rolls back
        batchProcessor.execute();
    }

    @Transactional(timeout = 5)
    public void quickOperation() {
        // Tight timeout for fast operations
        batchProcessor.quickTask();
    }
}
```

### Complete @Transactional Example

<a href="../../../assets/images/diagrams/java/24-transactions/complete-transactional-example-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/complete-transactional-example-handwritten.svg" alt="Handwritten: Complete @Transactional Example" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/complete-transactional-example-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/complete-transactional-example-diagram.svg" alt="Diagram: Complete @Transactional Example" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/complete-transactional-example-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/complete-transactional-example-sticky.svg" alt="Sticky Note: Complete @Transactional Example" width="30%">
</a>


```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
public class OrderFulfillmentService {

    private final PaymentService paymentService;
    private final InventoryService inventoryService;
    private final ShippingService shippingService;
    private final AuditService auditService;

    public OrderFulfillmentService(PaymentService paymentService,
                                    InventoryService inventoryService,
                                    ShippingService shippingService,
                                    AuditService auditService) {
        this.paymentService = paymentService;
        this.inventoryService = inventoryService;
        this.shippingService = shippingService;
        this.auditService = auditService;
    }

    @Transactional(
        propagation = Propagation.REQUIRED,
        isolation = Isolation.REPEATABLE_READ,
        rollbackFor = {PaymentFailedException.class, InventoryShortageException.class},
        noRollbackFor = {NotificationFailureException.class},
        timeout = 60,
        readOnly = false
    )
    public Order fulfillOrder(Order order) {
        // 1. Process payment (in this transaction)
        paymentService.processPayment(order.getPayment());

        // 2. Reserve inventory (in this transaction)
        for (OrderLine line : order.getLines()) {
            inventoryService.reserve(line.getProductId(), line.getQuantity());
        }

        // 3. Create shipping label (in this transaction)
        ShippingLabel label = shippingService.createLabel(order);

        order.setStatus("FULFILLED");
        order.setShippingLabel(label);

        // 4. Log audit independently Ã¢â‚¬â€ uses REQUIRES_NEW
        // This persists even if the main transaction rolls back
        auditService.logAction(
            "ORDER_FULFILLED",
            order.getCustomerId(),
            "Order " + order.getId() + " fulfilled"
        );

        return order;
    }
}
```

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

## TransactionTemplate Ã¢â‚¬â€ Programmatic Transactions

When you need fine-grained control over transaction boundaries Ã¢â‚¬â€ for example, looping with per-item transactions or conditionally committing Ã¢â‚¬â€ use `TransactionTemplate` instead of `@Transactional`.

### Basic TransactionTemplate

<a href="../../../assets/images/diagrams/java/24-transactions/basic-transactiontemplate-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/basic-transactiontemplate-handwritten.svg" alt="Handwritten: Basic TransactionTemplate" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/basic-transactiontemplate-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/basic-transactiontemplate-diagram.svg" alt="Diagram: Basic TransactionTemplate" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/basic-transactiontemplate-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/basic-transactiontemplate-sticky.svg" alt="Sticky Note: Basic TransactionTemplate" width="30%">
</a>


```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

@Service
public class TransactionTemplateService {

    private final TransactionTemplate transactionTemplate;

    public TransactionTemplateService(PlatformTransactionManager transactionManager) {
        this.transactionTemplate = new TransactionTemplate(transactionManager);
        this.transactionTemplate.setPropagationBehavior(
            TransactionDefinition.PROPAGATION_REQUIRED);
        this.transactionTemplate.setIsolationLevel(
            TransactionDefinition.ISOLATION_READ_COMMITTED);
        this.transactionTemplate.setTimeout(30);
        this.transactionTemplate.setReadOnly(false);
    }

    public Order executeInTransaction(Order order) {
        return transactionTemplate.execute(new TransactionCallback<Order>() {
            @Override
            public Order doInTransaction(TransactionStatus status) {
                try {
                    // All operations here are within one transaction
                    orderRepository.save(order);
                    inventoryService.reserve(order.getLines());
                    return order;
                } catch (Exception e) {
                    // Roll back explicitly
                    status.setRollbackOnly();
                    throw new RuntimeException("Transaction failed", e);
                }
            }
        });
    }

    public void executeWithoutResult(List<Order> orders) {
        transactionTemplate.execute(new TransactionCallbackWithoutResult() {
            @Override
            protected void doInTransactionWithoutResult(TransactionStatus status) {
                for (Order order : orders) {
                    if (order.getAmount().compareTo(BigDecimal.ZERO) < 0) {
                        // Mark this transaction for rollback
                        status.setRollbackOnly();
                        return;
                    }
                    orderRepository.save(order);
                }
            }
        });
    }
}
```

### TransactionCallback with Return Value

<a href="../../../assets/images/diagrams/java/24-transactions/transactioncallback-with-return-value-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transactioncallback-with-return-value-handwritten.svg" alt="Handwritten: TransactionCallback with Return Value" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/transactioncallback-with-return-value-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transactioncallback-with-return-value-diagram.svg" alt="Diagram: TransactionCallback with Return Value" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/transactioncallback-with-return-value-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transactioncallback-with-return-value-sticky.svg" alt="Sticky Note: TransactionCallback with Return Value" width="30%">
</a>


```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import java.math.BigDecimal;

@Service
public class TransactionCallbackService {

    private final TransactionTemplate transactionTemplate;
    private final AccountRepository accountRepository;

    public TransactionCallbackService(TransactionTemplate transactionTemplate,
                                       AccountRepository accountRepository) {
        this.transactionTemplate = transactionTemplate;
        this.accountRepository = accountRepository;
    }

    public BigDecimal transferWithResult(Long fromId, Long toId, BigDecimal amount) {
        return transactionTemplate.execute(new TransactionCallback<BigDecimal>() {
            @Override
            public BigDecimal doInTransaction(TransactionStatus status) {
                Account from = accountRepository.findById(fromId)
                    .orElseThrow(() -> new IllegalArgumentException("Account not found"));

                Account to = accountRepository.findById(toId)
                    .orElseThrow(() -> new IllegalArgumentException("Account not found"));

                if (from.getBalance().compareTo(amount) < 0) {
                    status.setRollbackOnly();
                    throw new InsufficientBalanceException(fromId, amount);
                }

                from.setBalance(from.getBalance().subtract(amount));
                to.setBalance(to.getBalance().add(amount));

                accountRepository.save(from);
                accountRepository.save(to);

                return from.getBalance();
            }
        });
    }
}
```

### Lambda Syntax

<a href="../../../assets/images/diagrams/java/24-transactions/lambda-syntax-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/lambda-syntax-handwritten.svg" alt="Handwritten: Lambda Syntax" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/lambda-syntax-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/lambda-syntax-diagram.svg" alt="Diagram: Lambda Syntax" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/lambda-syntax-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/lambda-syntax-sticky.svg" alt="Sticky Note: Lambda Syntax" width="30%">
</a>


TransactionTemplate supports lambda syntax for concise code:

```java
package com.course.tx;

import org.springframework.stereotype.Service;

@Service
public class LambdaTransactionService {

    private final TransactionTemplate transactionTemplate;
    private final AccountRepository accountRepository;

    public LambdaTransactionService(TransactionTemplate transactionTemplate,
                                     AccountRepository accountRepository) {
        this.transactionTemplate = transactionTemplate;
        this.accountRepository = accountRepository;
    }

    public void transferLambda(Long fromId, Long toId, BigDecimal amount) {
        transactionTemplate.executeWithoutResult(status -> {
            Account from = accountRepository.findById(fromId)
                .orElseThrow(() -> new IllegalArgumentException("Not found"));

            Account to = accountRepository.findById(toId)
                .orElseThrow(() -> new IllegalArgumentException("Not found"));

            from.setBalance(from.getBalance().subtract(amount));
            to.setBalance(to.getBalance().add(amount));

            accountRepository.save(from);
            accountRepository.save(to);
        });
    }

    public String createWithLambda(String name) {
        return transactionTemplate.execute(status -> {
            Account account = new Account(name);
            accountRepository.save(account);
            return account.getId().toString();
        });
    }
}
```

### Per-Item Transactions with TransactionTemplate

<a href="../../../assets/images/diagrams/java/24-transactions/per-item-transactions-with-transactiontemplate-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/per-item-transactions-with-transactiontemplate-handwritten.svg" alt="Handwritten: Per-Item Transactions with TransactionTemplate" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/per-item-transactions-with-transactiontemplate-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/per-item-transactions-with-transactiontemplate-diagram.svg" alt="Diagram: Per-Item Transactions with TransactionTemplate" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/per-item-transactions-with-transactiontemplate-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/per-item-transactions-with-transactiontemplate-sticky.svg" alt="Sticky Note: Per-Item Transactions with TransactionTemplate" width="30%">
</a>


A common pattern: process each item in its own transaction so a single failure does not roll back other items:

```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.List;

@Service
public class PerItemTransactionService {

    private final TransactionTemplate transactionTemplate;
    private final ItemRepository itemRepository;

    public PerItemTransactionService(TransactionTemplate transactionTemplate,
                                      ItemRepository itemRepository) {
        this.transactionTemplate = transactionTemplate;
        this.itemRepository = itemRepository;
    }

    public void processItemsIndividually(List<ImportRow> items) {
        int successCount = 0;
        int failureCount = 0;

        for (ImportRow item : items) {
            try {
                transactionTemplate.execute(new TransactionCallbackWithoutResult() {
                    @Override
                    protected void doInTransactionWithoutResult(TransactionStatus status) {
                        Item entity = new Item(item.getName(), item.getPrice());
                        itemRepository.save(entity);
                    }
                });
                successCount++;
            } catch (Exception e) {
                failureCount++;
                System.err.println("Failed to import item: " + item.getName());
            }
        }

        System.out.println("Import complete: " + successCount + " succeeded, "
            + failureCount + " failed");
    }
}
```

### Dynamic Transaction Attributes

<a href="../../../assets/images/diagrams/java/24-transactions/dynamic-transaction-attributes-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/dynamic-transaction-attributes-handwritten.svg" alt="Handwritten: Dynamic Transaction Attributes" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/dynamic-transaction-attributes-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/dynamic-transaction-attributes-diagram.svg" alt="Diagram: Dynamic Transaction Attributes" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/dynamic-transaction-attributes-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/dynamic-transaction-attributes-sticky.svg" alt="Sticky Note: Dynamic Transaction Attributes" width="30%">
</a>


```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.transaction.support.TransactionTemplate;

@Service
public class DynamicTransactionService {

    private final PlatformTransactionManager transactionManager;
    private final AccountRepository accountRepository;

    public DynamicTransactionService(PlatformTransactionManager transactionManager,
                                      AccountRepository accountRepository) {
        this.transactionManager = transactionManager;
        this.accountRepository = accountRepository;
    }

    public void executeWithDynamicAttributes(String operationType, Runnable work) {
        DefaultTransactionDefinition def = new DefaultTransactionDefinition();

        switch (operationType) {
            case "READ_ONLY" -> {
                def.setReadOnly(true);
                def.setIsolationLevel(TransactionDefinition.ISOLATION_READ_COMMITTED);
            }
            case "CRITICAL_WRITE" -> {
                def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
                def.setIsolationLevel(TransactionDefinition.ISOLATION_SERIALIZABLE);
                def.setTimeout(10);
            }
            case "AUDIT_LOG" -> {
                def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRES_NEW);
                def.setTimeout(5);
            }
            default -> {
                def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
                def.setIsolationLevel(TransactionDefinition.ISOLATION_READ_COMMITTED);
            }
        }

        TransactionStatus status = transactionManager.getTransaction(def);
        try {
            work.run();
            transactionManager.commit(status);
        } catch (RuntimeException e) {
            transactionManager.rollback(status);
            throw e;
        }
    }
}
```

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

## PlatformTransactionManager Hierarchy

Spring's `PlatformTransactionManager` is the strategy interface that all transaction management builds on.

### Interface Hierarchy

<a href="../../../assets/images/diagrams/java/24-transactions/interface-hierarchy-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/interface-hierarchy-handwritten.svg" alt="Handwritten: Interface Hierarchy" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/interface-hierarchy-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/interface-hierarchy-diagram.svg" alt="Diagram: Interface Hierarchy" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/interface-hierarchy-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/interface-hierarchy-sticky.svg" alt="Sticky Note: Interface Hierarchy" width="30%">
</a>


```
PlatformTransactionManager
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ AbstractPlatformTransactionManager
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ DataSourceTransactionManager    (JDBC / single DataSource)
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ JpaTransactionManager           (JPA / EntityManager)
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ JtaTransactionManager          (JTA / application server)
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ HibernateTransactionManager    (Hibernate 5, legacy)
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ ReactiveTransactionManager
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ ReactiveTransactionAdapter
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ ChainedTransactionManager          (multiple resources)
```

### DataSourceTransactionManager

<a href="../../../assets/images/diagrams/java/24-transactions/datasourcetransactionmanager-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/datasourcetransactionmanager-handwritten.svg" alt="Handwritten: DataSourceTransactionManager" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/datasourcetransactionmanager-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/datasourcetransactionmanager-diagram.svg" alt="Diagram: DataSourceTransactionManager" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/datasourcetransactionmanager-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/datasourcetransactionmanager-sticky.svg" alt="Sticky Note: DataSourceTransactionManager" width="30%">
</a>


Manages transactions on a plain JDBC `DataSource`. The simplest implementation Ã¢â‚¬â€ does not support savepoints, but is lightweight and fast.

```java
package com.course.tx;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import javax.sql.DataSource;

@Configuration
public class DataSourceTxConfig {

    @Bean
    public DataSourceTransactionManager transactionManager(DataSource dataSource) {
        DataSourceTransactionManager tm = new DataSourceTransactionManager(dataSource);
        tm.setDefaultTimeout(30);
        tm.setRollbackOnCommitFailure(true);
        return tm;
    }
}
```

### JpaTransactionManager

<a href="../../../assets/images/diagrams/java/24-transactions/jpatransactionmanager-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/jpatransactionmanager-handwritten.svg" alt="Handwritten: JpaTransactionManager" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/jpatransactionmanager-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/jpatransactionmanager-diagram.svg" alt="Diagram: JpaTransactionManager" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/jpatransactionmanager-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/jpatransactionmanager-sticky.svg" alt="Sticky Note: JpaTransactionManager" width="30%">
</a>


Wraps a JPA `EntityManagerFactory`. Supports nested transactions via JDBC savepoints when JPA is backed by a JDBC resource.

```java
package com.course.tx;

import jakarta.persistence.EntityManagerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.JpaTransactionManager;

@Configuration
public class JpaTxConfig {

    @Bean
    public JpaTransactionManager transactionManager(EntityManagerFactory emf) {
        JpaTransactionManager tm = new JpaTransactionManager(emf);
        tm.setNestedTransactionAllowed(true);
        return tm;
    }
}
```

### JtaTransactionManager

<a href="../../../assets/images/diagrams/java/24-transactions/jtatransactionmanager-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/jtatransactionmanager-handwritten.svg" alt="Handwritten: JtaTransactionManager" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/jtatransactionmanager-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/jtatransactionmanager-diagram.svg" alt="Diagram: JtaTransactionManager" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/jtatransactionmanager-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/jtatransactionmanager-sticky.svg" alt="Sticky Note: JtaTransactionManager" width="30%">
</a>


Delegates to the Jakarta Transaction API (JTA) implementation provided by the application server (WebSphere, WebLogic, JBoss) or a standalone provider (Atomikos, Narayana, Bitronix).

```java
package com.course.tx;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.jta.JtaTransactionManager;

import jakarta.transaction.TransactionManager;
import jakarta.transaction.UserTransaction;

@Configuration
public class JtaTxConfig {

    @Bean
    public JtaTransactionManager transactionManager(
            UserTransaction userTransaction,
            TransactionManager transactionManager) {

        JtaTransactionManager tm = new JtaTransactionManager();
        tm.setUserTransaction(userTransaction);
        tm.setTransactionManager(transactionManager);
        tm.setAllowCustomIsolationLevels(true);
        return tm;
    }
}
```

### ChainedTransactionManager

<a href="../../../assets/images/diagrams/java/24-transactions/chainedtransactionmanager-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/chainedtransactionmanager-handwritten.svg" alt="Handwritten: ChainedTransactionManager" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/chainedtransactionmanager-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/chainedtransactionmanager-diagram.svg" alt="Diagram: ChainedTransactionManager" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/chainedtransactionmanager-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/chainedtransactionmanager-sticky.svg" alt="Sticky Note: ChainedTransactionManager" width="30%">
</a>


The `ChainedTransactionManager` (deprecated in recent Spring versions; use `org.springframework.data.transaction.ChainedTransactionManager` from Spring Data) commits and rolls back multiple transaction managers in order. Use it when you need to coordinate across heterogeneous resources Ã¢â‚¬â€ for example, a JPA repository and a MongoDB repository in the same transactional method.

```java
package com.course.tx;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.transaction.ChainedTransactionManager;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import jakarta.persistence.EntityManagerFactory;
import javax.sql.DataSource;

@Configuration
public class ChainedTxConfig {

    @Bean
    public ChainedTransactionManager chainedTransactionManager(
            EntityManagerFactory emf, DataSource dataSource) {

        JpaTransactionManager jpaTm = new JpaTransactionManager(emf);
        DataSourceTransactionManager dsTm = new DataSourceTransactionManager(dataSource);

        // Commits: jpaTm first, then dsTm
        // Rollback: dsTm first, then jpaTm
        return new ChainedTransactionManager(jpaTm, dsTm);
    }
}
```

### Custom PlatformTransactionManager

<a href="../../../assets/images/diagrams/java/24-transactions/custom-platformtransactionmanager-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/custom-platformtransactionmanager-handwritten.svg" alt="Handwritten: Custom PlatformTransactionManager" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/custom-platformtransactionmanager-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/custom-platformtransactionmanager-diagram.svg" alt="Diagram: Custom PlatformTransactionManager" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/custom-platformtransactionmanager-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/custom-platformtransactionmanager-sticky.svg" alt="Sticky Note: Custom PlatformTransactionManager" width="30%">
</a>


```java
package com.course.tx;

import org.springframework.transaction.*;
import org.springframework.transaction.support.AbstractPlatformTransactionManager;
import org.springframework.transaction.support.DefaultTransactionStatus;
import org.springframework.transaction.support.TransactionSynchronizationManager;

public class CustomTransactionManager extends AbstractPlatformTransactionManager {

    private final TransactionStore transactionStore;

    public CustomTransactionManager(TransactionStore transactionStore) {
        this.transactionStore = transactionStore;
        setNestedTransactionAllowed(true);
        setDefaultTimeout(30);
    }

    @Override
    protected Object doGetTransaction() throws TransactionException {
        CustomTransactionObject txObject = new CustomTransactionObject();
        txObject.setHasTransaction(TransactionSynchronizationManager
            .hasResource(transactionStore));
        return txObject;
    }

    @Override
    protected void doBegin(Object transaction, TransactionDefinition definition)
            throws TransactionException {
        CustomTransactionObject txObject = (CustomTransactionObject) transaction;
        txObject.setBeginTime(System.currentTimeMillis());
        txObject.setReadOnly(definition.isReadOnly());
        txObject.setTimeout(definition.getTimeout());
        TransactionSynchronizationManager.bindResource(
            transactionStore, txObject);
    }

    @Override
    protected void doCommit(DefaultTransactionStatus status)
            throws TransactionException {
        CustomTransactionObject txObject = (CustomTransactionObject) status.getTransaction();
        transactionStore.commit(txObject);
        TransactionSynchronizationManager.unbindResource(transactionStore);
    }

    @Override
    protected void doRollback(DefaultTransactionStatus status)
            throws TransactionException {
        CustomTransactionObject txObject = (CustomTransactionObject) status.getTransaction();
        transactionStore.rollback(txObject);
        TransactionSynchronizationManager.unbindResource(transactionStore);
    }

    static class CustomTransactionObject {
        private boolean hasTransaction;
        private long beginTime;
        private boolean readOnly;
        private int timeout;

        public boolean isHasTransaction() { return hasTransaction; }
        public void setHasTransaction(boolean hasTransaction) {
            this.hasTransaction = hasTransaction;
        }

        public long getBeginTime() { return beginTime; }
        public void setBeginTime(long beginTime) { this.beginTime = beginTime; }

        public boolean isReadOnly() { return readOnly; }
        public void setReadOnly(boolean readOnly) { this.readOnly = readOnly; }

        public int getTimeout() { return timeout; }
        public void setTimeout(int timeout) { this.timeout = timeout; }
    }
}
```

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

## Transaction Synchronization

Spring's transaction synchronization allows you to register callbacks that execute at specific points in the transaction lifecycle.

### @TransactionalEventListener

<a href="../../../assets/images/diagrams/java/24-transactions/transactionaleventlistener-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transactionaleventlistener-handwritten.svg" alt="Handwritten: @TransactionalEventListener" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/transactionaleventlistener-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transactionaleventlistener-diagram.svg" alt="Diagram: @TransactionalEventListener" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/transactionaleventlistener-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transactionaleventlistener-sticky.svg" alt="Sticky Note: @TransactionalEventListener" width="30%">
</a>


`@TransactionalEventListener` fires an event handler only at a specific transaction phase.

```java
package com.course.tx;

import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.transaction.event.TransactionPhase;
import org.springframework.transaction.event.TransactionalEventListener;

@Component
public class OrderEventListeners {

    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void onOrderConfirmed(OrderConfirmedEvent event) {
        // Only fires after the transaction commits successfully
        emailService.sendConfirmation(event.getOrderId());
        analyticsService.trackOrder(event.getOrderId());
    }

    @TransactionalEventListener(phase = TransactionPhase.AFTER_ROLLBACK)
    public void onOrderFailed(OrderConfirmedEvent event) {
        // Only fires after the transaction rolls back
        notificationService.alertFailure(event.getOrderId());
    }

    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMPLETION)
    public void onOrderComplete(OrderConfirmedEvent event) {
        // Fires after both commit and rollback
        auditService.logCompletion(event.getOrderId());
    }

    @TransactionalEventListener(phase = TransactionPhase.BEFORE_COMMIT)
    public void beforeCommit(OrderConfirmedEvent event) {
        // Fires just before the transaction commits
        validationService.finalCheck(event.getOrderId());
    }

    @Async
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void asyncEmailNotification(OrderConfirmedEvent event) {
        // Non-blocking: sends email asynchronously after commit
        emailService.sendHtmlEmail(event.getOrderId());
    }
}
```

### TransactionSynchronizationManager

<a href="../../../assets/images/diagrams/java/24-transactions/transactionsynchronizationmanager-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transactionsynchronizationmanager-handwritten.svg" alt="Handwritten: TransactionSynchronizationManager" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/transactionsynchronizationmanager-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transactionsynchronizationmanager-diagram.svg" alt="Diagram: TransactionSynchronizationManager" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/transactionsynchronizationmanager-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transactionsynchronizationmanager-sticky.svg" alt="Sticky Note: TransactionSynchronizationManager" width="30%">
</a>


`TransactionSynchronizationManager` provides access to the current transaction's context. Use it for registering resources and checking transaction state.

```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.support.TransactionSynchronization;
import org.springframework.transaction.support.TransactionSynchronizationManager;

@Service
public class TransactionContextService {

    public void workWithTransactionContext() {
        // Check if we are in a transaction
        boolean inTransaction = TransactionSynchronizationManager.isActualTransactionActive();
        boolean readOnly = TransactionSynchronizationManager.isCurrentTransactionReadOnly();

        System.out.println("In transaction: " + inTransaction + ", readOnly: " + readOnly);

        // Get the current transaction name
        String txName = TransactionSynchronizationManager.getCurrentTransactionName();
        System.out.println("Transaction name: " + txName);

        // Register a synchronization
        if (inTransaction) {
            TransactionSynchronizationManager.registerSynchronization(
                new TransactionSynchronization() {

                    @Override
                    public void beforeCommit(boolean readOnly) {
                        System.out.println("Before commit (readOnly=" + readOnly + ")");
                    }

                    @Override
                    public void afterCommit() {
                        System.out.println("After commit");
                    }

                    @Override
                    public void beforeCompletion() {
                        System.out.println("Before completion");
                    }

                    @Override
                    public void afterCompletion(int status) {
                        String statusStr = switch (status) {
                            case STATUS_COMMITTED -> "COMMITTED";
                            case STATUS_ROLLED_BACK -> "ROLLED_BACK";
                            case STATUS_UNKNOWN -> "UNKNOWN";
                            default -> "?";
                        };
                        System.out.println("After completion: " + statusStr);
                    }

                    @Override
                    public void flush() {
                        System.out.println("Flush requested");
                    }
                }
            );
        }
    }

    public String getCurrentTransactionInfo() {
        boolean active = TransactionSynchronizationManager.isActualTransactionActive();
        String name = TransactionSynchronizationManager.getCurrentTransactionName();
        boolean readOnly = TransactionSynchronizationManager.isCurrentTransactionReadOnly();
        int timeout = TransactionSynchronizationManager.getCurrentTransactionIsolationLevel();

        return String.format(
            "Active: %b, Name: %s, ReadOnly: %b, Isolation: %d",
            active, name, readOnly, timeout
        );
    }
}
```

### Registering Synchronization from @Transactional Methods

<a href="../../../assets/images/diagrams/java/24-transactions/registering-synchronization-from-transactional-methods-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/registering-synchronization-from-transactional-methods-handwritten.svg" alt="Handwritten: Registering Synchronization from @Transactional Methods" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/registering-synchronization-from-transactional-methods-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/registering-synchronization-from-transactional-methods-diagram.svg" alt="Diagram: Registering Synchronization from @Transactional Methods" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/registering-synchronization-from-transactional-methods-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/registering-synchronization-from-transactional-methods-sticky.svg" alt="Sticky Note: Registering Synchronization from @Transactional Methods" width="30%">
</a>


```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionSynchronization;
import org.springframework.transaction.support.TransactionSynchronizationManager;

@Service
public class SynchronizationRegistrationService {

    @Transactional
    public void performOperation(String data) {
        // Core business logic
        repository.save(data);

        // Register callback that runs after commit
        TransactionSynchronizationManager.registerSynchronization(
            new TransactionSynchronization() {
                @Override
                public void afterCommit() {
                    // Guaranteed to run only if this transaction commits
                    cacheService.evict(data);
                    messageBroker.send("DataUpdated", data);
                }
            }
        );
    }
}
```

### Resource Binding

<a href="../../../assets/images/diagrams/java/24-transactions/resource-binding-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/resource-binding-handwritten.svg" alt="Handwritten: Resource Binding" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/resource-binding-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/resource-binding-diagram.svg" alt="Diagram: Resource Binding" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/resource-binding-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/resource-binding-sticky.svg" alt="Sticky Note: Resource Binding" width="30%">
</a>


`TransactionSynchronizationManager` also manages resource binding Ã¢â‚¬â€ associating a JDBC `Connection` or JPA `EntityManager` with the current thread.

```java
package com.course.tx;

import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.support.TransactionSynchronizationManager;

import javax.sql.DataSource;
import java.sql.Connection;

@Service
public class ResourceBindingService {

    private final DataSource dataSource;

    public ResourceBindingService(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public void demonstrateResourceBinding() {
        // Check if a Connection is already bound to this transaction
        boolean hasResource = TransactionSynchronizationManager.hasResource(dataSource);

        if (!hasResource) {
            // Get connection through DataSourceUtils (participates in transaction)
            Connection connection = DataSourceUtils.getConnection(dataSource);
            // The connection is now bound to the current transaction
            TransactionSynchronizationManager.bindResource(dataSource, connection);
        }

        // Later in the same transaction:
        Connection sameConnection = (Connection)
            TransactionSynchronizationManager.getResource(dataSource);
    }
}
```

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

## Declarative vs Programmatic Transactions

Both approaches have their place. Choose based on the complexity and nature of your transaction boundaries.

| Aspect | Declarative (@Transactional) | Programmatic (TransactionTemplate) |
|---|---|---|
| **Boilerplate** | Minimal Ã¢â‚¬â€ single annotation | More code per method |
| **Readability** | High Ã¢â‚¬â€ transaction scope is visible at a glance | Moderate Ã¢â‚¬â€ logic interleaved with transaction code |
| **Control** | Coarse Ã¢â‚¬â€ applies to entire method | Fine-grained Ã¢â‚¬â€ per-item, conditional commit/rollback |
| **Self-invocation** | Bypassed (proxy limitation) | Works correctly |
| **Dynamic attributes** | Fixed at compile time | Can change per invocation |
| **Exception handling** | Declarative via rollbackFor | Full try/catch/retry |
| **Testing** | Integration tests with Spring context | Easier to unit test the callback logic |
| **When to use** | Simple CRUD, service-layer boundaries, consistent behavior across calls | Batch processing, per-item transactions, conditional rollback, retry logic |

```java
package com.course.tx;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionTemplate;

import java.math.BigDecimal;
import java.util.List;

@Service
public class ComparisonService {

    private final AccountRepository accountRepository;
    private final TransactionTemplate transactionTemplate;

    public ComparisonService(AccountRepository accountRepository,
                              TransactionTemplate transactionTemplate) {
        this.accountRepository = accountRepository;
        this.transactionTemplate = transactionTemplate;
    }

    // Declarative Ã¢â‚¬â€ best for simple whole-method transactions
    @Transactional
    public void transferDeclarative(Long fromId, Long toId, BigDecimal amount) {
        Account from = accountRepository.findById(fromId).orElseThrow();
        Account to = accountRepository.findById(toId).orElseThrow();
        from.debit(amount);
        to.credit(amount);
        accountRepository.save(from);
        accountRepository.save(to);
    }

    // Programmatic Ã¢â‚¬â€ best when you need per-item transaction boundaries
    public void batchTransferDeclarative(List<TransferRequest> requests) {
        // BEWARE: One transaction for ALL transfers
        // One failure rolls back EVERYTHING
        for (TransferRequest req : requests) {
            transferDeclarative(req.fromId(), req.toId(), req.amount());
        }
    }

    // Programmatic Ã¢â‚¬â€ each transfer is an independent transaction
    public void batchTransferProgrammatic(List<TransferRequest> requests) {
        for (TransferRequest req : requests) {
            transactionTemplate.execute(status -> {
                try {
                    Account from = accountRepository.findById(req.fromId()).orElseThrow();
                    Account to = accountRepository.findById(req.toId()).orElseThrow();
                    from.debit(req.amount());
                    to.credit(req.amount());
                    accountRepository.save(from);
                    accountRepository.save(to);
                    return null;
                } catch (Exception e) {
                    status.setRollbackOnly();
                    throw e;
                }
            });
        }
    }

    // Programmatic Ã¢â‚¬â€ conditional commit/rollback
    public void conditionalProcess(List<TransferRequest> requests) {
        transactionTemplate.execute(status -> {
            int processed = 0;
            for (TransferRequest req : requests) {
                if (req.amount().compareTo(BigDecimal.valueOf(10000)) > 0) {
                    // Skip this transfer but continue with others
                    continue;
                }
                if (req.amount().compareTo(BigDecimal.ZERO) <= 0) {
                    // Invalid Ã¢â‚¬â€ roll back everything
                    status.setRollbackOnly();
                    throw new IllegalArgumentException("Invalid amount: " + req.amount());
                }
                Account from = accountRepository.findById(req.fromId()).orElseThrow();
                Account to = accountRepository.findById(req.toId()).orElseThrow();
                from.debit(req.amount());
                to.credit(req.amount());
                accountRepository.save(from);
                accountRepository.save(to);
                processed++;
            }
            return processed;
        });
    }
}
```

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

## Distributed Transactions

When an operation spans multiple databases, message brokers, or services, a local transaction is insufficient. Distributed transaction coordination is required.

### JTA and the Two-Phase Commit Protocol

<a href="../../../assets/images/diagrams/java/24-transactions/jta-and-the-two-phase-commit-protocol-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/jta-and-the-two-phase-commit-protocol-handwritten.svg" alt="Handwritten: JTA and the Two-Phase Commit Protocol" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/jta-and-the-two-phase-commit-protocol-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/jta-and-the-two-phase-commit-protocol-diagram.svg" alt="Diagram: JTA and the Two-Phase Commit Protocol" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/jta-and-the-two-phase-commit-protocol-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/jta-and-the-two-phase-commit-protocol-sticky.svg" alt="Sticky Note: JTA and the Two-Phase Commit Protocol" width="30%">
</a>


JTA (Jakarta Transaction API) coordinates transactions across multiple XA resources using the two-phase commit (2PC) protocol:

**Phase 1 (Prepare):** The transaction manager asks each resource manager to prepare for commit. Each resource writes its changes to durable storage and votes "ready" or "abort."

**Phase 2 (Commit/Rollback):** If all vote "ready," the coordinator sends a commit. If any votes "abort," the coordinator sends a rollback.

```java
package com.course.tx.distributed;

import jakarta.transaction.*;
import org.springframework.stereotype.Service;

@Service
public class JtaDemoService {

    private final UserTransaction userTransaction;
    private final OrderRepository orderRepository;
    private final InventoryRepository inventoryRepository;
    private final BillingRepository billingRepository;

    public JtaDemoService(UserTransaction userTransaction,
                           OrderRepository orderRepository,
                           InventoryRepository inventoryRepository,
                           BillingRepository billingRepository) {
        this.userTransaction = userTransaction;
        this.orderRepository = orderRepository;
        this.inventoryRepository = inventoryRepository;
        this.billingRepository = billingRepository;
    }

    public void createOrderWithJta(Order order, Payment payment) {
        try {
            userTransaction.begin();

            orderRepository.save(order);
            inventoryRepository.deductStock(order.getProductId(), order.getQuantity());
            billingRepository.charge(payment);

            userTransaction.commit();
        } catch (Exception e) {
            try {
                userTransaction.rollback();
            } catch (SystemException se) {
                throw new RuntimeException("Rollback failed", se);
            }
            throw new RuntimeException("Order creation failed", e);
        }
    }
}
```

### Atomikos Configuration

<a href="../../../assets/images/diagrams/java/24-transactions/atomikos-configuration-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/atomikos-configuration-handwritten.svg" alt="Handwritten: Atomikos Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/atomikos-configuration-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/atomikos-configuration-diagram.svg" alt="Diagram: Atomikos Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/atomikos-configuration-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/atomikos-configuration-sticky.svg" alt="Sticky Note: Atomikos Configuration" width="30%">
</a>


Atomikos is a popular standalone JTA transaction manager for Spring applications.

```java
package com.course.tx.distributed;

import com.atomikos.icatch.jta.UserTransactionImp;
import com.atomikos.icatch.jta.JtaTransactionManager;
import com.atomikos.jdbc.AtomikosDataSourceBean;
import org.postgresql.xa.PGXADataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.transaction.jta.JtaTransactionManager;

import jakarta.transaction.TransactionManager;
import jakarta.transaction.UserTransaction;
import java.util.Properties;

@Configuration
public class AtomikosConfig {

    @Bean(initMethod = "init", destroyMethod = "close")
    public AtomikosDataSourceBean dataSourceA() {
        PGXADataSource pgXaDs = new PGXADataSource();
        pgXaDs.setUrl("jdbc:postgresql://localhost:5432/db_a");
        pgXaDs.setUser("user");
        pgXaDs.setPassword("password");

        AtomikosDataSourceBean ds = new AtomikosDataSourceBean();
        ds.setUniqueResourceName("XA_DS_A");
        ds.setXaDataSource(pgXaDs);
        ds.setMaxPoolSize(10);
        ds.setBorrowConnectionTimeout(30);
        return ds;
    }

    @Bean(initMethod = "init", destroyMethod = "close")
    public AtomikosDataSourceBean dataSourceB() {
        PGXADataSource pgXaDs = new PGXADataSource();
        pgXaDs.setUrl("jdbc:postgresql://localhost:5432/db_b");
        pgXaDs.setUser("user");
        pgXaDs.setPassword("password");

        AtomikosDataSourceBean ds = new AtomikosDataSourceBean();
        ds.setUniqueResourceName("XA_DS_B");
        ds.setXaDataSource(pgXaDs);
        ds.setMaxPoolSize(10);
        ds.setBorrowConnectionTimeout(30);
        return ds;
    }

    @Bean
    public UserTransaction userTransaction() {
        UserTransactionImp ut = new UserTransactionImp();
        ut.setTransactionTimeout(60);
        return ut;
    }

    @Bean
    public TransactionManager atomikosTransactionManager() {
        com.atomikos.icatch.jta.UserTransactionManager utm =
            new com.atomikos.icatch.jta.UserTransactionManager();
        utm.setForceShutdown(false);
        return utm;
    }

    @Bean
    @DependsOn({"userTransaction", "atomikosTransactionManager"})
    public JtaTransactionManager transactionManager(
            UserTransaction userTransaction,
            TransactionManager atomikosTransactionManager) {

        JtaTransactionManager tm = new JtaTransactionManager();
        tm.setUserTransaction(userTransaction);
        tm.setTransactionManager(atomikosTransactionManager);
        tm.setAllowCustomIsolationLevels(true);
        return tm;
    }
}
```

### Narayana Configuration

<a href="../../../assets/images/diagrams/java/24-transactions/narayana-configuration-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/narayana-configuration-handwritten.svg" alt="Handwritten: Narayana Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/narayana-configuration-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/narayana-configuration-diagram.svg" alt="Diagram: Narayana Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/narayana-configuration-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/narayana-configuration-sticky.svg" alt="Sticky Note: Narayana Configuration" width="30%">
</a>


Narayana is JBoss's transaction manager, also available standalone.

```java
package com.course.tx.distributed;

import com.arjuna.ats.jbossatx.jta.RecoveryManagerService;
import com.arjuna.ats.jta.common.JTAEnvironmentBean;
import com.arjuna.ats.jta.common.jtaPropertyManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.jta.JtaTransactionManager;

@Configuration
public class NarayanaConfig {

    @Bean
    public JtaTransactionManager transactionManager() {
        jtaPropertyManager.getJTAEnvironmentBean()
            .setTransactionManagerClassName(
                "com.arjuna.ats.internal.jta.transaction.arjunacore.TransactionManagerImple");

        return new JtaTransactionManager();
    }
}
```

### Limitations of 2PC / XA

<a href="../../../assets/images/diagrams/java/24-transactions/limitations-of-2pc-xa-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/limitations-of-2pc-xa-handwritten.svg" alt="Handwritten: Limitations of 2PC / XA" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/limitations-of-2pc-xa-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/limitations-of-2pc-xa-diagram.svg" alt="Diagram: Limitations of 2PC / XA" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/limitations-of-2pc-xa-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/limitations-of-2pc-xa-sticky.svg" alt="Sticky Note: Limitations of 2PC / XA" width="30%">
</a>


1. **Latency**: The prepare phase requires an extra round-trip to all participants.
2. **Blocking**: If the coordinator crashes after prepare, participants hold locks until recovery.
3. **Scalability**: The coordinator is a single point of failure and a throughput bottleneck.
4. **Support**: Not all databases and message brokers support XA. NoSQL databases generally do not.
5. **Complexity**: Recovery managers, transaction logs, and heuristic outcomes (ambiguous commits) add operational burden.
6. **Not suitable for microservices**: 2PC does not span network boundaries well Ã¢â‚¬â€ services must share the same transaction manager.

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

## Saga Pattern

The Saga pattern manages distributed transactions across microservices without 2PC. Each service performs its local transaction and publishes an event or message. If a step fails, previous steps execute compensating transactions to undo their effects.

### Choreography Saga

<a href="../../../assets/images/diagrams/java/24-transactions/choreography-saga-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/choreography-saga-handwritten.svg" alt="Handwritten: Choreography Saga" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/choreography-saga-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/choreography-saga-diagram.svg" alt="Diagram: Choreography Saga" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/choreography-saga-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/choreography-saga-sticky.svg" alt="Sticky Note: Choreography Saga" width="30%">
</a>


Each service publishes events that trigger the next service's action. No central coordinator.

```java
package com.course.tx.saga.choreography;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Choreography-based Saga for order fulfillment.
 *
 * Flow:
 *   1. Order Service: create order (PENDING)
 *   2. Inventory Service: reserve items  Ã¢â€ â€™  fail Ã¢â€ â€™ Order Service: CANCEL order
 *   3. Payment Service: charge card      Ã¢â€ â€™  fail Ã¢â€ â€™ Inventory: release items
 *   4. Shipping Service: create label    Ã¢â€ â€™  fail Ã¢â€ â€™ Payment: refund
 */
@Service
public class OrderSagaOrchestrator {

    private final EventPublisher eventPublisher;

    public OrderSagaOrchestrator(EventPublisher eventPublisher) {
        this.eventPublisher = eventPublisher;
    }

    @Transactional
    public void createOrder(Order order) {
        order.setStatus("PENDING");
        orderRepository.save(order);
        eventPublisher.publish(new OrderCreatedEvent(order.getId(), order.getItems()));
    }

    public void onInventoryReserved(InventoryReservedEvent event) {
        orderRepository.findById(event.getOrderId()).ifPresent(order -> {
            order.setStatus("INVENTORY_RESERVED");
            orderRepository.save(order);
            eventPublisher.publish(
                new PaymentRequestEvent(order.getId(), order.getTotal()));
        });
    }

    public void onPaymentProcessed(PaymentProcessedEvent event) {
        orderRepository.findById(event.getOrderId()).ifPresent(order -> {
            order.setStatus("PAYMENT_PROCESSED");
            orderRepository.save(order);
            eventPublisher.publish(
                new ShippingRequestEvent(order.getId(), order.getAddress()));
        });
    }

    // Compensating: release inventory if payment fails
    public void onPaymentFailed(PaymentFailedEvent event) {
        orderRepository.findById(event.getOrderId()).ifPresent(order -> {
            order.setStatus("PAYMENT_FAILED");
            orderRepository.save(order);
            eventPublisher.publish(
                new ReleaseInventoryEvent(order.getId(), order.getItems()));
        });
    }

    // Compensating: refund payment if shipping fails
    public void onShippingFailed(ShippingFailedEvent event) {
        orderRepository.findById(event.getOrderId()).ifPresent(order -> {
            order.setStatus("SHIPPING_FAILED");
            orderRepository.save(order);
            eventPublisher.publish(
                new RefundPaymentEvent(order.getId(), order.getTotal()));
        });
    }
}
```

```java
package com.course.tx.saga.choreography;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
public class InventorySagaService {

    private final InventoryRepository inventoryRepository;
    private final EventPublisher eventPublisher;

    public InventorySagaService(InventoryRepository inventoryRepository,
                                 EventPublisher eventPublisher) {
        this.inventoryRepository = inventoryRepository;
        this.eventPublisher = eventPublisher;
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void handleOrderCreated(OrderCreatedEvent event) {
        try {
            for (OrderItem item : event.getItems()) {
                inventoryRepository.reserve(item.getProductId(), item.getQuantity());
            }
            eventPublisher.publish(
                new InventoryReservedEvent(event.getOrderId()));
        } catch (Exception e) {
            eventPublisher.publish(
                new InventoryReservationFailedEvent(event.getOrderId(), e.getMessage()));
        }
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void handleReleaseInventory(ReleaseInventoryEvent event) {
        for (OrderItem item : event.getItems()) {
            inventoryRepository.release(item.getProductId(), item.getQuantity());
        }
    }
}
```

### Orchestration Saga

<a href="../../../assets/images/diagrams/java/24-transactions/orchestration-saga-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/orchestration-saga-handwritten.svg" alt="Handwritten: Orchestration Saga" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/orchestration-saga-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/orchestration-saga-diagram.svg" alt="Diagram: Orchestration Saga" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/orchestration-saga-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/orchestration-saga-sticky.svg" alt="Sticky Note: Orchestration Saga" width="30%">
</a>


A central Saga Coordinator sends commands to each service and handles failures.

```java
package com.course.tx.saga.orchestration;

import org.springframework.stereotype.Service;

/**
 * Orchestration-based Saga.
 *
 * A central OrderSagaCoordinator sends commands to each service
 * and invokes compensating actions on failure.
 */
@Service
public class OrderSagaCoordinator {

    private final InventoryClient inventoryClient;
    private final PaymentClient paymentClient;
    private final ShippingClient shippingClient;
    private final SagaLogRepository sagaLogRepository;

    public OrderSagaCoordinator(InventoryClient inventoryClient,
                                 PaymentClient paymentClient,
                                 ShippingClient shippingClient,
                                 SagaLogRepository sagaLogRepository) {
        this.inventoryClient = inventoryClient;
        this.paymentClient = paymentClient;
        this.shippingClient = shippingClient;
        this.sagaLogRepository = sagaLogRepository;
    }

    public void executeSaga(CreateOrderCommand command) {
        String sagaId = java.util.UUID.randomUUID().toString();
        sagaLogRepository.save(new SagaLog(sagaId, "STARTED", command.getOrderId()));

        try {
            // Step 1: Reserve inventory
            InventoryResponse inventoryResponse = inventoryClient.reserve(
                sagaId, command.getOrderId(), command.getItems());

            sagaLogRepository.save(
                new SagaLog(sagaId, "INVENTORY_RESERVED", command.getOrderId()));

            // Step 2: Process payment
            PaymentResponse paymentResponse = paymentClient.charge(
                sagaId, command.getOrderId(), command.getTotal());

            sagaLogRepository.save(
                new SagaLog(sagaId, "PAYMENT_PROCESSED", command.getOrderId()));

            // Step 3: Create shipment
            ShippingResponse shippingResponse = shippingClient.ship(
                sagaId, command.getOrderId(), command.getAddress());

            sagaLogRepository.save(
                new SagaLog(sagaId, "SHIPPED", command.getOrderId()));

            sagaLogRepository.save(
                new SagaLog(sagaId, "COMPLETED", command.getOrderId()));

        } catch (Exception e) {
            sagaLogRepository.save(
                new SagaLog(command.getOrderId(), "FAILED", e.getMessage()));
            compensate(sagaId, command);
        }
    }

    private void compensate(String sagaId, CreateOrderCommand command) {
        // Execute compensating actions in reverse order
        try {
            shippingClient.cancel(sagaId, command.getOrderId());
        } catch (Exception e) {
            // Log and continue Ã¢â‚¬â€ best effort compensation
        }

        try {
            paymentClient.refund(sagaId, command.getOrderId(), command.getTotal());
        } catch (Exception e) {
            // Log and continue
        }

        try {
            inventoryClient.release(sagaId, command.getOrderId(), command.getItems());
        } catch (Exception e) {
            // Log and continue
        }

        sagaLogRepository.save(
            new SagaLog(sagaId, "COMPENSATED", command.getOrderId()));
    }
}
```

### Saga with Kafka

<a href="../../../assets/images/diagrams/java/24-transactions/saga-with-kafka-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/saga-with-kafka-handwritten.svg" alt="Handwritten: Saga with Kafka" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/saga-with-kafka-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/saga-with-kafka-diagram.svg" alt="Diagram: Saga with Kafka" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/saga-with-kafka-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/saga-with-kafka-sticky.svg" alt="Sticky Note: Saga with Kafka" width="30%">
</a>


Using Kafka for saga event communication provides durability, ordering guarantees, and replayability.

```java
package com.course.tx.saga.kafka;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Configuration
public class KafkaSagaConfig {

    @Bean
    public NewTopic orderCommands() {
        return new NewTopic("saga.order.commands", 3, (short) 1);
    }

    @Bean
    public NewTopic inventoryEvents() {
        return new NewTopic("saga.inventory.events", 3, (short) 1);
    }

    @Bean
    public NewTopic paymentEvents() {
        return new NewTopic("saga.payment.events", 3, (short) 1);
    }

    @Bean
    public NewTopic shippingEvents() {
        return new NewTopic("saga.shipping.events", 3, (short) 1);
    }
}
```

```java
package com.course.tx.saga.kafka;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class KafkaSagaCoordinator {

    private final KafkaTemplate<String, String> kafkaTemplate;
    private final ObjectMapper objectMapper;
    private final SagaStateRepository stateRepository;

    public KafkaSagaCoordinator(KafkaTemplate<String, String> kafkaTemplate,
                                 ObjectMapper objectMapper,
                                 SagaStateRepository stateRepository) {
        this.kafkaTemplate = kafkaTemplate;
        this.objectMapper = objectMapper;
        this.stateRepository = stateRepository;
    }

    public void startSaga(CreateOrderCommand command) {
        SagaState state = new SagaState(
            command.getOrderId(),
            "ORDER_CREATED",
            command
        );
        stateRepository.save(state);
        kafkaTemplate.send("saga.order.commands", command.getOrderId(),
            toJson(new ReserveInventoryCommand(command.getOrderId(), command.getItems())));
    }

    @KafkaListener(topics = "saga.inventory.events")
    public void onInventoryEvent(ConsumerRecord<String, String> record) {
        InventoryEvent event = fromJson(record.value(), InventoryEvent.class);
        SagaState state = stateRepository.findById(record.key()).orElse(null);

        if (event.isSuccess()) {
            state.setStatus("INVENTORY_RESERVED");
            stateRepository.save(state);
            kafkaTemplate.send("saga.order.commands", record.key(),
                toJson(new ProcessPaymentCommand(
                    state.getOrderId(), state.getCommand().getTotal())));
        } else {
            kafkaTemplate.send("saga.order.commands", record.key(),
                toJson(new CompensateOrderCommand(state.getOrderId(), "INVENTORY_FAILED")));
        }
    }

    @KafkaListener(topics = "saga.payment.events")
    public void onPaymentEvent(ConsumerRecord<String, String> record) {
        PaymentEvent event = fromJson(record.value(), PaymentEvent.class);
        SagaState state = stateRepository.findById(record.key()).orElse(null);

        if (event.isSuccess()) {
            state.setStatus("PAYMENT_PROCESSED");
            stateRepository.save(state);
            kafkaTemplate.send("saga.order.commands", record.key(),
                toJson(new CreateShipmentCommand(
                    state.getOrderId(), state.getCommand().getAddress())));
        } else {
            kafkaTemplate.send("saga.order.commands", record.key(),
                toJson(new CompensateOrderCommand(
                    state.getOrderId(), "PAYMENT_FAILED")));
        }
    }

    @KafkaListener(topics = "saga.shipping.events")
    public void onShippingEvent(ConsumerRecord<String, String> record) {
        ShippingEvent event = fromJson(record.value(), ShippingEvent.class);
        SagaState state = stateRepository.findById(record.key()).orElse(null);

        if (event.isSuccess()) {
            state.setStatus("COMPLETED");
            stateRepository.save(state);
        } else {
            kafkaTemplate.send("saga.order.commands", record.key(),
                toJson(new CompensateOrderCommand(
                    state.getOrderId(), "SHIPPING_FAILED")));
        }
    }

    @KafkaListener(topics = "saga.order.commands")
    public void onCompensation(ConsumerRecord<String, String> record) {
        CompensateOrderCommand cmd = fromJson(record.value(), CompensateOrderCommand.class);
        if (cmd != null) {
            handleCompensation(cmd);
        }
    }

    private void handleCompensation(CompensateOrderCommand cmd) {
        SagaState state = stateRepository.findById(cmd.getOrderId()).orElse(null);
        if (state == null) return;

        String currentStatus = state.getStatus();

        if ("PAYMENT_PROCESSED".equals(currentStatus)) {
            kafkaTemplate.send("saga.order.commands", cmd.getOrderId(),
                toJson(new RefundPaymentCommand(cmd.getOrderId(), 0)));
        }
        if ("INVENTORY_RESERVED".equals(currentStatus)
            || "PAYMENT_PROCESSED".equals(currentStatus)) {
            kafkaTemplate.send("saga.order.commands", cmd.getOrderId(),
                toJson(new ReleaseInventoryCommand(cmd.getOrderId())));
        }

        state.setStatus("COMPENSATED");
        stateRepository.save(state);
    }

    private String toJson(Object obj) {
        try {
            return objectMapper.writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException("Serialization error", e);
        }
    }

    private <T> T fromJson(String json, Class<T> type) {
        try {
            return objectMapper.readValue(json, type);
        } catch (Exception e) {
            return null;
        }
    }
}
```

### Compensating Transaction Pattern

<a href="../../../assets/images/diagrams/java/24-transactions/compensating-transaction-pattern-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/compensating-transaction-pattern-handwritten.svg" alt="Handwritten: Compensating Transaction Pattern" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/compensating-transaction-pattern-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/compensating-transaction-pattern-diagram.svg" alt="Diagram: Compensating Transaction Pattern" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/compensating-transaction-pattern-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/compensating-transaction-pattern-sticky.svg" alt="Sticky Note: Compensating Transaction Pattern" width="30%">
</a>


Each saga step must have a compensating action:

| Step | Forward Action | Compensating Action |
|---|---|---|
| Create order | `INSERT INTO orders (PENDING)` | `UPDATE orders SET status = CANCELLED` |
| Reserve inventory | `UPDATE inventory SET reserved = reserved + qty` | `UPDATE inventory SET reserved = reserved - qty` |
| Charge payment | `INSERT INTO payments (AUTHORIZED)` | `INSERT INTO refunds (FULL_REFUND)` |
| Create shipment | `INSERT INTO shipments (CREATED)` | `UPDATE shipments SET status = CANCELLED` |

```java
package com.course.tx.saga;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CompensatingActionService {

    private final OrderRepository orderRepository;
    private final InventoryRepository inventoryRepository;
    private final PaymentGateway paymentGateway;

    public CompensatingActionService(OrderRepository orderRepository,
                                      InventoryRepository inventoryRepository,
                                      PaymentGateway paymentGateway) {
        this.orderRepository = orderRepository;
        this.inventoryRepository = inventoryRepository;
        this.paymentGateway = paymentGateway;
    }

    @Transactional
    public void createOrderAndReserve(Order order) {
        order.setStatus("PENDING");
        orderRepository.save(order);
        inventoryRepository.reserve(order.getItems());
    }

    @Transactional
    public void compensateCreateOrderAndReserve(Order order) {
        // Undo the inventory reservation
        inventoryRepository.release(order.getItems());
        // Cancel the order
        order.setStatus("CANCELLED");
        orderRepository.save(order);
    }

    public boolean chargePayment(String orderId, BigDecimal amount) {
        try {
            paymentGateway.charge(orderId, amount);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean refundPayment(String orderId, BigDecimal amount) {
        try {
            paymentGateway.refund(orderId, amount);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
```

### Eventuate Tram

<a href="../../../assets/images/diagrams/java/24-transactions/eventuate-tram-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/eventuate-tram-handwritten.svg" alt="Handwritten: Eventuate Tram" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/eventuate-tram-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/eventuate-tram-diagram.svg" alt="Diagram: Eventuate Tram" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/eventuate-tram-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/eventuate-tram-sticky.svg" alt="Sticky Note: Eventuate Tram" width="30%">
</a>


Eventuate Tram is a microservice saga framework that uses message-based coordination.

```java
// Dependency: io.eventuate.tram:eventuate-tram-core

package com.course.tx.saga.eventuate;

import io.eventuate.tram.commands.common.Command;
import io.eventuate.tram.sagas.orchestration.SagaDefinition;
import io.eventuate.tram.sagas.simpledsl.SimpleSaga;

public class OrderFulfillmentSaga implements SimpleSaga<OrderSagaData> {

    private final SagaDefinition<OrderSagaData> sagaDefinition;

    public OrderFulfillmentSaga() {
        this.sagaDefinition = step()
            .invokeParticipant(this::reserveInventory)
            .withCompensation(this::releaseInventory)
            .step()
            .invokeParticipant(this::processPayment)
            .withCompensation(this::refundPayment)
            .step()
            .invokeParticipant(this::createShipment)
            .build();
    }

    @Override
    public SagaDefinition<OrderSagaData> getSagaDefinition() {
        return sagaDefinition;
    }

    private Command reserveInventory(OrderSagaData data) {
        return new ReserveInventoryCommand(data.getOrderId(), data.getItems());
    }

    private Command releaseInventory(OrderSagaData data) {
        return new ReleaseInventoryCommand(data.getOrderId(), data.getItems());
    }

    private Command processPayment(OrderSagaData data) {
        return new ProcessPaymentCommand(data.getOrderId(), data.getTotal());
    }

    private Command refundPayment(OrderSagaData data) {
        return new RefundPaymentCommand(data.getOrderId(), data.getTotal());
    }

    private Command createShipment(OrderSagaData data) {
        return new CreateShipmentCommand(data.getOrderId(), data.getAddress());
    }
}
```

### Axon Saga

<a href="../../../assets/images/diagrams/java/24-transactions/axon-saga-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/axon-saga-handwritten.svg" alt="Handwritten: Axon Saga" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/axon-saga-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/axon-saga-diagram.svg" alt="Diagram: Axon Saga" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/axon-saga-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/axon-saga-sticky.svg" alt="Sticky Note: Axon Saga" width="30%">
</a>


Axon Framework provides saga orchestration as a first-class concept.

```java
package com.course.tx.saga.axon;

import org.axonframework.commandhandling.gateway.CommandGateway;
import org.axonframework.modelling.saga.SagaEventHandler;
import org.axonframework.modelling.saga.SagaLifecycle;
import org.axonframework.modelling.saga.StartSaga;
import org.axonframework.spring.stereotype.Saga;

@Saga
public class OrderSaga {

    private String orderId;
    private boolean inventoryReserved;
    private boolean paymentProcessed;
    private boolean shipmentCreated;

    @StartSaga
    @SagaEventHandler(associationProperty = "orderId")
    public void handle(OrderCreatedEvent event, CommandGateway commandGateway) {
        this.orderId = event.getOrderId();
        SagaLifecycle.associateWith("orderId", event.getOrderId());

        commandGateway.send(new ReserveInventoryCommand(
            event.getOrderId(), event.getItems()));
    }

    @SagaEventHandler(associationProperty = "orderId")
    public void handle(InventoryReservedEvent event, CommandGateway commandGateway) {
        this.inventoryReserved = true;
        commandGateway.send(new ProcessPaymentCommand(
            event.getOrderId(), event.getTotal()));
    }

    @SagaEventHandler(associationProperty = "orderId")
    public void handle(PaymentProcessedEvent event, CommandGateway commandGateway) {
        this.paymentProcessed = true;
        commandGateway.send(new CreateShipmentCommand(
            event.getOrderId(), event.getAddress()));
    }

    @SagaEventHandler(associationProperty = "orderId")
    public void handle(ShipmentCreatedEvent event) {
        this.shipmentCreated = true;
        SagaLifecycle.end();
    }

    // Compensating handlers
    @SagaEventHandler(associationProperty = "orderId")
    public void handle(PaymentFailedEvent event, CommandGateway commandGateway) {
        if (inventoryReserved) {
            commandGateway.send(new ReleaseInventoryCommand(
                event.getOrderId(), event.getItems()));
        }
        SagaLifecycle.end();
    }

    @SagaEventHandler(associationProperty = "orderId")
    public void handle(InventoryReservationFailedEvent event, CommandGateway commandGateway) {
        SagaLifecycle.end();
    }
}
```

### Saga with REST Callbacks

<a href="../../../assets/images/diagrams/java/24-transactions/saga-with-rest-callbacks-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/saga-with-rest-callbacks-handwritten.svg" alt="Handwritten: Saga with REST Callbacks" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/saga-with-rest-callbacks-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/saga-with-rest-callbacks-diagram.svg" alt="Diagram: Saga with REST Callbacks" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/saga-with-rest-callbacks-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/saga-with-rest-callbacks-sticky.svg" alt="Sticky Note: Saga with REST Callbacks" width="30%">
</a>


When a message broker is unavailable, saga coordination can use REST callbacks.

```java
package com.course.tx.saga.rest;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class RestSagaCoordinator {

    private final RestTemplate restTemplate;
    private final ConcurrentHashMap<String, SagaState> sagaStates = new ConcurrentHashMap<>();

    public RestSagaCoordinator(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public CompletableFuture<SagaResult> startSaga(SagaRequest request) {
        CompletableFuture<SagaResult> future = new CompletableFuture<>();
        SagaState state = new SagaState(
            request.getOrderId(),
            request,
            future
        );
        sagaStates.put(request.getOrderId(), state);

        // Step 1: Call inventory service
        try {
            InventoryResponse invResp = restTemplate.postForObject(
                "http://inventory-service/api/reserve",
                new InventoryRequest(request.getOrderId(), request.getItems()),
                InventoryResponse.class
            );

            if (invResp != null && invResp.isSuccess()) {
                // Step 2: Call payment service
                PaymentResponse payResp = restTemplate.postForObject(
                    "http://payment-service/api/charge",
                    new PaymentRequest(request.getOrderId(), request.getTotal()),
                    PaymentResponse.class
                );

                if (payResp != null && payResp.isSuccess()) {
                    // Step 3: Call shipping service
                    ShippingResponse shipResp = restTemplate.postForObject(
                        "http://shipping-service/api/ship",
                        new ShippingRequest(request.getOrderId(), request.getAddress()),
                        ShippingResponse.class
                    );

                    if (shipResp != null && shipResp.isSuccess()) {
                        future.complete(new SagaResult(request.getOrderId(), "COMPLETED"));
                    } else {
                        compensate(request.getOrderId());
                        future.complete(new SagaResult(request.getOrderId(), "SHIPPING_FAILED"));
                    }
                } else {
                    compensate(request.getOrderId());
                    future.complete(new SagaResult(request.getOrderId(), "PAYMENT_FAILED"));
                }
            } else {
                future.complete(new SagaResult(request.getOrderId(), "INVENTORY_FAILED"));
            }
        } catch (Exception e) {
            compensate(request.getOrderId());
            future.completeExceptionally(e);
        }

        return future;
    }

    private void compensate(String orderId) {
        SagaState state = sagaStates.get(orderId);
        if (state == null) return;

        // Compensate in reverse order
        try {
            restTemplate.postForObject(
                "http://shipping-service/api/cancel",
                new CancelRequest(orderId),
                Void.class);
        } catch (Exception e) { /* best effort */ }

        try {
            restTemplate.postForObject(
                "http://payment-service/api/refund",
                new RefundRequest(orderId, state.getRequest().getTotal()),
                Void.class);
        } catch (Exception e) { /* best effort */ }

        try {
            restTemplate.postForObject(
                "http://inventory-service/api/release",
                new ReleaseRequest(orderId, state.getRequest().getItems()),
                Void.class);
        } catch (Exception e) { /* best effort */ }
    }

    private record SagaState(String orderId, SagaRequest request,
                              CompletableFuture<SagaResult> future) {}
}
```

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

## Pessimistic Locking

Pessimistic locking acquires a database lock on the data before any operation, preventing other transactions from modifying or reading the locked data. Use it when conflicts are frequent and the cost of retries is high.

### @Lock Annotations

<a href="../../../assets/images/diagrams/java/24-transactions/lock-annotations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/lock-annotations-handwritten.svg" alt="Handwritten: @Lock Annotations" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/lock-annotations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/lock-annotations-diagram.svg" alt="Diagram: @Lock Annotations" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/lock-annotations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/lock-annotations-sticky.svg" alt="Sticky Note: @Lock Annotations" width="30%">
</a>


Spring Data JPA provides `@Lock` for repository methods:

```java
package com.course.tx.locking;

import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpapaRepository.QueryHints;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountLockingRepository extends JpaRepository<Account, Long> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("select a from Account a where a.id = :id")
    Optional<Account> findByIdWithPessimisticWriteLock(Long id);

    @Lock(LockModeType.PESSIMISTIC_READ)
    @Query("select a from Account a where a.id = :id")
    Optional<Account> findByIdWithPessimisticReadLock(Long id);

    @Lock(LockModeType.PESSIMISTIC_FORCE_INCREMENT)
    @Query("select a from Account a where a.id = :id")
    Optional<Account> findByIdWithPessimisticForceIncrement(Long id);

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @QueryHints({@QueryHint(name = "jakarta.persistence.lock.timeout", value = "3000")})
    @Query("select a from Account a where a.id = :id")
    Optional<Account> findByIdWithLockTimeout(Long id);

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("select a from Account a where a.balance > :minBalance")
    List<Account> findAccountsWithBalanceAbove(BigDecimal minBalance);
}
```

### Lock Modes

<a href="../../../assets/images/diagrams/java/24-transactions/lock-modes-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/lock-modes-handwritten.svg" alt="Handwritten: Lock Modes" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/lock-modes-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/lock-modes-diagram.svg" alt="Diagram: Lock Modes" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/lock-modes-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/lock-modes-sticky.svg" alt="Sticky Note: Lock Modes" width="30%">
</a>


| Lock Mode | SQL (PostgreSQL) | Behavior |
|---|---|---|
| `PESSIMISTIC_READ` | `SELECT ... FOR SHARE` | Shared lock Ã¢â‚¬â€ others can read but not write |
| `PESSIMISTIC_WRITE` | `SELECT ... FOR UPDATE` | Exclusive lock Ã¢â‚¬â€ no other transaction can read or write |
| `PESSIMISTIC_FORCE_INCREMENT` | `SELECT ... FOR UPDATE` + `@Version` increment | Like WRITE but also increments the version column |

### Pessimistic Locking in a Service

<a href="../../../assets/images/diagrams/java/24-transactions/pessimistic-locking-in-a-service-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/pessimistic-locking-in-a-service-handwritten.svg" alt="Handwritten: Pessimistic Locking in a Service" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/pessimistic-locking-in-a-service-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/pessimistic-locking-in-a-service-diagram.svg" alt="Diagram: Pessimistic Locking in a Service" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/pessimistic-locking-in-a-service-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/pessimistic-locking-in-a-service-sticky.svg" alt="Sticky Note: Pessimistic Locking in a Service" width="30%">
</a>


```java
package com.course.tx.locking;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
public class PessimisticLockingService {

    private final AccountLockingRepository accountRepository;

    public PessimisticLockingService(AccountLockingRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Transactional
    public void transferWithPessimisticLock(Long fromId, Long toId, BigDecimal amount) {
        // These SELECT ... FOR UPDATE queries acquire row-level locks
        Account from = accountRepository.findByIdWithPessimisticWriteLock(fromId)
            .orElseThrow(() -> new IllegalArgumentException("Source not found"));

        Account to = accountRepository.findByIdWithPessimisticWriteLock(toId)
            .orElseThrow(() -> new IllegalArgumentException("Target not found"));

        if (from.getBalance().compareTo(amount) < 0) {
            throw new InsufficientBalanceException(fromId, amount);
        }

        from.setBalance(from.getBalance().subtract(amount));
        to.setBalance(to.getBalance().add(amount));

        accountRepository.save(from);
        accountRepository.save(to);
    }

    @Transactional
    public BigDecimal readWithSharedLock(Long accountId) {
        // SELECT ... FOR SHARE Ã¢â‚¬â€ allows other shared locks
        // but blocks exclusive locks
        Account account = accountRepository.findByIdWithPessimisticReadLock(accountId)
            .orElseThrow(() -> new IllegalArgumentException("Not found"));
        return account.getBalance();
    }
}
```

### Lock Timeout

<a href="../../../assets/images/diagrams/java/24-transactions/lock-timeout-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/lock-timeout-handwritten.svg" alt="Handwritten: Lock Timeout" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/lock-timeout-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/lock-timeout-diagram.svg" alt="Diagram: Lock Timeout" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/lock-timeout-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/lock-timeout-sticky.svg" alt="Sticky Note: Lock Timeout" width="30%">
</a>


Configure how long a transaction waits to acquire a lock before giving up:

```java
package com.course.tx.locking;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.LockTimeoutException;

@Service
public class LockTimeoutService {

    private final AccountLockingRepository accountRepository;

    public LockTimeoutService(AccountLockingRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Transactional
    public void transferWithTimeout(Long fromId, Long toId, BigDecimal amount) {
        try {
            // Uses @QueryHint timeout = 3000ms (3 seconds)
            Account from = accountRepository.findByIdWithLockTimeout(fromId)
                .orElseThrow(() -> new IllegalArgumentException("Not found"));

            Account to = accountRepository.findByIdWithLockTimeout(toId)
                .orElseThrow(() -> new IllegalArgumentException("Not found"));

            from.debit(amount);
            to.credit(amount);
            accountRepository.save(from);
            accountRepository.save(to);

        } catch (LockTimeoutException e) {
            // Could not acquire lock within 3 seconds
            throw new ConcurrentOperationException("Transaction timed out acquiring lock", e);
        }
    }
}
```

### Deadlock Handling

<a href="../../../assets/images/diagrams/java/24-transactions/deadlock-handling-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/deadlock-handling-handwritten.svg" alt="Handwritten: Deadlock Handling" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/deadlock-handling-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/deadlock-handling-diagram.svg" alt="Diagram: Deadlock Handling" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/deadlock-handling-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/deadlock-handling-sticky.svg" alt="Sticky Note: Deadlock Handling" width="30%">
</a>


Deadlocks occur when two transactions each hold a lock the other needs. Databases detect deadlocks automatically and roll back one transaction (the "victim"). Your code must retry.

```java
package com.course.tx.locking;

import org.springframework.dao.DeadlockLoserDataAccessException;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
public class DeadlockResilientService {

    private final AccountLockingRepository accountRepository;

    public DeadlockResilientService(AccountLockingRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Retryable(
        value = {DeadlockLoserDataAccessException.class,
                 CannotAcquireLockException.class},
        maxAttempts = 3,
        backoff = @Backoff(delay = 100, multiplier = 2, maxDelay = 1000)
    )
    @Transactional
    public void transferWithRetry(Long fromId, Long toId, BigDecimal amount) {
        Account from = accountRepository.findByIdWithPessimisticWriteLock(fromId)
            .orElseThrow(() -> new IllegalArgumentException("Not found"));

        Account to = accountRepository.findByIdWithPessimisticWriteLock(toId)
            .orElseThrow(() -> new IllegalArgumentException("Not found"));

        from.debit(amount);
        to.credit(amount);
        accountRepository.save(from);
        accountRepository.save(to);
    }

    // Manual retry without Spring Retry
    @Transactional
    public void transferWithManualRetry(Long fromId, Long toId, BigDecimal amount) {
        int maxRetries = 3;
        int retryDelay = 100;

        for (int attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                Account from = accountRepository.findByIdWithPessimisticWriteLock(fromId)
                    .orElseThrow(() -> new IllegalArgumentException("Not found"));
                Account to = accountRepository.findByIdWithPessimisticWriteLock(toId)
                    .orElseThrow(() -> new IllegalArgumentException("Not found"));

                from.debit(amount);
                to.credit(amount);
                accountRepository.save(from);
                accountRepository.save(to);
                return; // Success
            } catch (DeadlockLoserDataAccessException e) {
                if (attempt == maxRetries) {
                    throw e; // Last attempt failed
                }
                try {
                    Thread.sleep(retryDelay * (long) Math.pow(2, attempt - 1));
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                    throw new RuntimeException("Retry interrupted", ie);
                }
            }
        }
    }
}
```

### Deadlock Prevention Strategy

<a href="../../../assets/images/diagrams/java/24-transactions/deadlock-prevention-strategy-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/deadlock-prevention-strategy-handwritten.svg" alt="Handwritten: Deadlock Prevention Strategy" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/deadlock-prevention-strategy-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/deadlock-prevention-strategy-diagram.svg" alt="Diagram: Deadlock Prevention Strategy" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/deadlock-prevention-strategy-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/deadlock-prevention-strategy-sticky.svg" alt="Sticky Note: Deadlock Prevention Strategy" width="30%">
</a>


```java
package com.course.tx.locking;

import org.springframework.stereotype.Service;

/**
 * Deadlock prevention: always acquire locks in the same order.
 * If all transactions lock accounts in ascending order of ID,
 * deadlocks are structurally impossible.
 */
@Service
public class OrderedLockingService {

    private final AccountLockingRepository accountRepository;

    public OrderedLockingService(AccountLockingRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public void safeTransfer(Long accountA, Long accountB, BigDecimal amount) {
        // Always lock smaller ID first
        Long first = Math.min(accountA, accountB);
        Long second = Math.max(accountA, accountB);

        Account firstAccount = accountRepository.findByIdWithPessimisticWriteLock(first)
            .orElseThrow(() -> new IllegalArgumentException("Account not found: " + first));

        Account secondAccount = accountRepository.findByIdWithPessimisticWriteLock(second)
            .orElseThrow(() -> new IllegalArgumentException("Account not found: " + second));

        if (accountA < accountB) {
            firstAccount.debit(amount);
            secondAccount.credit(amount);
        } else {
            secondAccount.debit(amount);
            firstAccount.credit(amount);
        }

        accountRepository.save(firstAccount);
        accountRepository.save(secondAccount);
    }
}
```

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

## Optimistic Locking

Optimistic locking assumes conflicts are rare. Instead of acquiring locks upfront, it detects conflicts at commit time using a version column.

### @Version

<a href="../../../assets/images/diagrams/java/24-transactions/version-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/version-handwritten.svg" alt="Handwritten: @Version" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/version-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/version-diagram.svg" alt="Diagram: @Version" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/version-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/version-sticky.svg" alt="Sticky Note: @Version" width="30%">
</a>


Add a `@Version` field to your entity. JPA increments it on every update and checks it on every commit.

```java
package com.course.tx.locking;

import jakarta.persistence.*;

@Entity
@Table(name = "accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String ownerName;

    private BigDecimal balance;

    @Version
    private Long version;

    public Account() {}

    public Account(String ownerName, BigDecimal balance) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.version = 0L;
    }

    public void debit(BigDecimal amount) {
        if (this.balance.compareTo(amount) < 0) {
            throw new InsufficientBalanceException(this.id, amount);
        }
        this.balance = this.balance.subtract(amount);
    }

    public void credit(BigDecimal amount) {
        this.balance = this.balance.add(amount);
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getOwnerName() { return ownerName; }
    public void setOwnerName(String ownerName) { this.ownerName = ownerName; }

    public BigDecimal getBalance() { return balance; }
    public void setBalance(BigDecimal balance) { this.balance = balance; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }
}
```

### How Version Checking Works

<a href="../../../assets/images/diagrams/java/24-transactions/how-version-checking-works-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/how-version-checking-works-handwritten.svg" alt="Handwritten: How Version Checking Works" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/how-version-checking-works-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/how-version-checking-works-diagram.svg" alt="Diagram: How Version Checking Works" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/how-version-checking-works-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/how-version-checking-works-sticky.svg" alt="Sticky Note: How Version Checking Works" width="30%">
</a>


```sql
-- Initial read:
SELECT id, balance, version FROM accounts WHERE id = 1;
-- Result: id=1, balance=100.00, version=5

-- Update (JPA generates this):
UPDATE accounts SET balance = 90.00, version = 6
WHERE id = 1 AND version = 5;

-- If another transaction updated the row between our read and write,
-- the version will have changed. The WHERE version=5 matches zero rows,
-- and JPA throws OptimisticLockException.
```

### OptimisticLockException Handling

<a href="../../../assets/images/diagrams/java/24-transactions/optimisticlockexception-handling-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/optimisticlockexception-handling-handwritten.svg" alt="Handwritten: OptimisticLockException Handling" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/optimisticlockexception-handling-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/optimisticlockexception-handling-diagram.svg" alt="Diagram: OptimisticLockException Handling" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/optimisticlockexception-handling-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/optimisticlockexception-handling-sticky.svg" alt="Sticky Note: OptimisticLockException Handling" width="30%">
</a>


```java
package com.course.tx.locking;

import jakarta.persistence.OptimisticLockException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
public class OptimisticLockingService {

    private final AccountRepository accountRepository;

    public OptimisticLockingService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Transactional
    public void transfer(Long fromId, Long toId, BigDecimal amount) {
        Account from = accountRepository.findById(fromId)
            .orElseThrow(() -> new IllegalArgumentException("Not found"));

        Account to = accountRepository.findById(toId)
            .orElseThrow(() -> new IllegalArgumentException("Not found"));

        from.debit(amount);
        to.credit(amount);

        // On save, Hibernate checks the version column.
        // If another thread modified the same entity, this throws
        // OptimisticLockException (or StaleStateException in Hibernate)
        accountRepository.save(from);
        accountRepository.save(to);
    }
}
```

### Retry Pattern for Optimistic Locking

<a href="../../../assets/images/diagrams/java/24-transactions/retry-pattern-for-optimistic-locking-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/retry-pattern-for-optimistic-locking-handwritten.svg" alt="Handwritten: Retry Pattern for Optimistic Locking" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/retry-pattern-for-optimistic-locking-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/retry-pattern-for-optimistic-locking-diagram.svg" alt="Diagram: Retry Pattern for Optimistic Locking" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/retry-pattern-for-optimistic-locking-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/retry-pattern-for-optimistic-locking-sticky.svg" alt="Sticky Note: Retry Pattern for Optimistic Locking" width="30%">
</a>


```java
package com.course.tx.locking;

import jakarta.persistence.OptimisticLockException;
import org.hibernate.StaleStateException;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.function.Supplier;

@Service
public class RetryOptimisticLockingService {

    private final AccountRepository accountRepository;

    public RetryOptimisticLockingService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Retryable(
        value = {OptimisticLockException.class,
                 StaleStateException.class,
                 OptimisticLockingFailureException.class},
        maxAttempts = 5,
        backoff = @Backoff(delay = 50, multiplier = 2, maxDelay = 500)
    )
    @Transactional
    public void transferWithRetry(Long fromId, Long toId, BigDecimal amount) {
        Account from = accountRepository.findById(fromId)
            .orElseThrow(() -> new IllegalArgumentException("Not found"));
        Account to = accountRepository.findById(toId)
            .orElseThrow(() -> new IllegalArgumentException("Not found"));

        from.debit(amount);
        to.credit(amount);
        accountRepository.save(from);
        accountRepository.save(to);
    }

    // Generic retry utility
    public <T> T withOptimisticRetry(Supplier<T> operation) {
        int maxAttempts = 5;
        int baseDelay = 50;

        for (int attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                return operation.get();
            } catch (OptimisticLockException | StaleStateException
                     | OptimisticLockingFailureException e) {
                if (attempt == maxAttempts) {
                    throw e;
                }
                try {
                    Thread.sleep(baseDelay * (long) Math.pow(2, attempt - 1));
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                    throw new RuntimeException("Retry interrupted", ie);
                }
            }
        }
        throw new RuntimeException("Should not reach here");
    }
}
```

### Version Management in REST Controllers

<a href="../../../assets/images/diagrams/java/24-transactions/version-management-in-rest-controllers-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/version-management-in-rest-controllers-handwritten.svg" alt="Handwritten: Version Management in REST Controllers" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/version-management-in-rest-controllers-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/version-management-in-rest-controllers-diagram.svg" alt="Diagram: Version Management in REST Controllers" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/version-management-in-rest-controllers-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/version-management-in-rest-controllers-sticky.svg" alt="Sticky Note: Version Management in REST Controllers" width="30%">
</a>


```java
package com.course.tx.locking;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountRepository accountRepository;

    public AccountController(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Account> updateAccount(
            @PathVariable Long id,
            @RequestBody AccountUpdateRequest request) {

        return accountRepository.findById(id)
            .map(account -> {
                // The client sends the version they last read
                if (!account.getVersion().equals(request.getVersion())) {
                    return ResponseEntity.status(409).build();
                }
                account.setOwnerName(request.getOwnerName());
                Account saved = accountRepository.save(account);
                return ResponseEntity.ok(saved);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/balance")
    public ResponseEntity<Account> updateBalance(
            @PathVariable Long id,
            @RequestBody BalanceUpdateRequest request) {

        return accountRepository.findById(id)
            .map(account -> {
                try {
                    account.setBalance(request.getNewBalance());
                    Account saved = accountRepository.save(account);
                    return ResponseEntity.ok(saved);
                } catch (OptimisticLockException e) {
                    return ResponseEntity.status(409)
                        .header("X-Conflict", "Version conflict, retry")
                        .build();
                }
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
```

### Optimistic vs Pessimistic Comparison

<a href="../../../assets/images/diagrams/java/24-transactions/optimistic-vs-pessimistic-comparison-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/optimistic-vs-pessimistic-comparison-handwritten.svg" alt="Handwritten: Optimistic vs Pessimistic Comparison" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/optimistic-vs-pessimistic-comparison-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/optimistic-vs-pessimistic-comparison-diagram.svg" alt="Diagram: Optimistic vs Pessimistic Comparison" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/optimistic-vs-pessimistic-comparison-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/optimistic-vs-pessimistic-comparison-sticky.svg" alt="Sticky Note: Optimistic vs Pessimistic Comparison" width="30%">
</a>


| Aspect | Optimistic Locking | Pessimistic Locking |
|---|---|---|
| **Lock acquisition** | At commit time | At read time |
| **When to use** | Low contention, read-heavy | High contention, write-heavy |
| **Throughput** | Higher (no lock overhead) | Lower (locks serialize access) |
| **Deadlocks** | Impossible (no locks held) | Possible (retry required) |
| **Retry required** | Yes (version conflict) | Yes (deadlock victim) |
| **Stale data duration** | Window between read and commit | No stale reads (locked) |
| **Overhead** | Version increment on every write | Lock management in database |
| **Database support** | Universal (version column) | Requires `SELECT ... FOR UPDATE` |

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

## Transaction Configuration

### Enabling Transaction Management

<a href="../../../assets/images/diagrams/java/24-transactions/enabling-transaction-management-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/enabling-transaction-management-handwritten.svg" alt="Handwritten: Enabling Transaction Management" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/enabling-transaction-management-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/enabling-transaction-management-diagram.svg" alt="Diagram: Enabling Transaction Management" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/enabling-transaction-management-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/enabling-transaction-management-sticky.svg" alt="Sticky Note: Enabling Transaction Management" width="30%">
</a>


```java
package com.course.tx;

import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
// @EnableTransactionManagement(order = 0) Ã¢â‚¬â€ custom order for advisors
// @EnableTransactionManagement(mode = AdviceMode.ASPECTJ) Ã¢â‚¬â€ use AspectJ instead of proxies
public class TransactionConfig {
}
```

### Custom Transaction Attributes with @Transactional

<a href="../../../assets/images/diagrams/java/24-transactions/custom-transaction-attributes-with-transactional-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/custom-transaction-attributes-with-transactional-handwritten.svg" alt="Handwritten: Custom Transaction Attributes with @Transactional" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/custom-transaction-attributes-with-transactional-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/custom-transaction-attributes-with-transactional-diagram.svg" alt="Diagram: Custom Transaction Attributes with @Transactional" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/custom-transaction-attributes-with-transactional-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/custom-transaction-attributes-with-transactional-sticky.svg" alt="Sticky Note: Custom Transaction Attributes with @Transactional" width="30%">
</a>


```java
package com.course.tx;

import org.springframework.core.annotation.AliasFor;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.lang.annotation.*;

@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Inherited
@Documented
@Transactional(
    propagation = Propagation.REQUIRED,
    isolation = Isolation.REPEATABLE_READ,
    timeout = 30,
    rollbackFor = DataIntegrityException.class,
    readOnly = false
)
public @interface CustomTransactional {

    @AliasFor(annotation = Transactional.class, attribute = "readOnly")
    boolean readOnly() default false;

    @AliasFor(annotation = Transactional.class, attribute = "timeout")
    int timeout() default 30;
}
```

### Transaction Configuration with Properties

<a href="../../../assets/images/diagrams/java/24-transactions/transaction-configuration-with-properties-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transaction-configuration-with-properties-handwritten.svg" alt="Handwritten: Transaction Configuration with Properties" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/transaction-configuration-with-properties-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transaction-configuration-with-properties-diagram.svg" alt="Diagram: Transaction Configuration with Properties" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/transaction-configuration-with-properties-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transaction-configuration-with-properties-sticky.svg" alt="Sticky Note: Transaction Configuration with Properties" width="30%">
</a>


```yaml
# application.yml
spring:
  transaction:
    default-timeout: 30
    rollback-on-commit-failure: true
```

### Transaction Template with Custom Configuration

<a href="../../../assets/images/diagrams/java/24-transactions/transaction-template-with-custom-configuration-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transaction-template-with-custom-configuration-handwritten.svg" alt="Handwritten: Transaction Template with Custom Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/transaction-template-with-custom-configuration-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transaction-template-with-custom-configuration-diagram.svg" alt="Diagram: Transaction Template with Custom Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/transaction-template-with-custom-configuration-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/transaction-template-with-custom-configuration-sticky.svg" alt="Sticky Note: Transaction Template with Custom Configuration" width="30%">
</a>


```java
package com.course.tx;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.support.TransactionTemplate;

@Configuration
public class TransactionTemplateConfig {

    @Bean
    public TransactionTemplate transactionTemplate(
            PlatformTransactionManager transactionManager) {
        TransactionTemplate template = new TransactionTemplate(transactionManager);
        template.setPropagationBehaviorName(
            "PROPAGATION_REQUIRED");
        template.setIsolationLevel(
            TransactionDefinition.ISOLATION_READ_COMMITTED);
        template.setTimeout(30);
        template.setReadOnly(false);
        template.setName("app-tx-template");
        return template;
    }

    @Bean
    public TransactionTemplate readOnlyTransactionTemplate(
            PlatformTransactionManager transactionManager) {
        TransactionTemplate template = new TransactionTemplate(transactionManager);
        template.setReadOnly(true);
        template.setTimeout(10);
        template.setName("readonly-tx-template");
        return template;
    }

    @Bean
    public TransactionTemplate requiresNewTransactionTemplate(
            PlatformTransactionManager transactionManager) {
        TransactionTemplate template = new TransactionTemplate(transactionManager);
        template.setPropagationBehavior(
            TransactionDefinition.PROPAGATION_REQUIRES_NEW);
        template.setTimeout(5);
        template.setName("requires-new-tx-template");
        return template;
    }
}
```

### Multi-DataSource Transaction Configuration

<a href="../../../assets/images/diagrams/java/24-transactions/multi-datasource-transaction-configuration-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/multi-datasource-transaction-configuration-handwritten.svg" alt="Handwritten: Multi-DataSource Transaction Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/multi-datasource-transaction-configuration-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/multi-datasource-transaction-configuration-diagram.svg" alt="Diagram: Multi-DataSource Transaction Configuration" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/multi-datasource-transaction-configuration-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/multi-datasource-transaction-configuration-sticky.svg" alt="Sticky Note: Multi-DataSource Transaction Configuration" width="30%">
</a>


```java
package com.course.tx;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;

import jakarta.persistence.EntityManagerFactory;
import javax.sql.DataSource;

@Configuration
public class MultiDataSourceTxConfig {

    @Primary
    @Bean
    public PlatformTransactionManager primaryTransactionManager(
            @Qualifier("primaryDataSource") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    @Bean
    public PlatformTransactionManager reportingTransactionManager(
            @Qualifier("reportingDataSource") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    @Bean
    public PlatformTransactionManager jpaTransactionManager(
            @Qualifier("jpaEntityManagerFactory") EntityManagerFactory emf) {
        return new JpaTransactionManager(emf);
    }
}
```

```java
package com.course.tx;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MultiDataSourceService {

    private final OrderRepository orderRepository;
    private final ReportRepository reportRepository;

    public MultiDataSourceService(
            OrderRepository orderRepository,
            @Qualifier("reportingRepository") ReportRepository reportRepository) {
        this.orderRepository = orderRepository;
        this.reportRepository = reportRepository;
    }

    @Transactional("primaryTransactionManager")
    public void saveOrder(Order order) {
        orderRepository.save(order);
    }

    @Transactional("reportingTransactionManager")
    public void generateReport() {
        reportRepository.runReport();
    }
}
```

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

## Entity and Repository Definitions

The domain classes used across the examples:

```java
package com.course.tx;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String ownerName;

    @Column(nullable = false, precision = 19, scale = 2)
    private BigDecimal balance;

    @Version
    private Long version;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

    public Account() {}

    public Account(String ownerName, BigDecimal balance) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.version = 0L;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public void debit(BigDecimal amount) {
        if (balance.compareTo(amount) < 0) {
            throw new InsufficientBalanceException(id, amount);
        }
        this.balance = balance.subtract(amount);
        this.updatedAt = LocalDateTime.now();
    }

    public void credit(BigDecimal amount) {
        this.balance = balance.add(amount);
        this.updatedAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getOwnerName() { return ownerName; }
    public void setOwnerName(String ownerName) { this.ownerName = ownerName; }

    public BigDecimal getBalance() { return balance; }
    public void setBalance(BigDecimal balance) { this.balance = balance; }

    public Long getVersion() { return version; }
    public void setVersion(Long version) { this.version = version; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
```

```java
package com.course.tx;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

    List<Account> findByOwnerName(String ownerName);

    List<Account> findByBalanceGreaterThan(BigDecimal threshold);

    long countByBalanceLessThan(BigDecimal threshold);
}
```

```java
package com.course.tx;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String customerId;

    @Column(nullable = false, precision = 19, scale = 2)
    private BigDecimal amount;

    @Column(nullable = false)
    private String status;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    public Order() {}

    public Order(String customerId, BigDecimal amount) {
        this.customerId = customerId;
        this.amount = amount;
        this.status = "PENDING";
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCustomerId() { return customerId; }
    public void setCustomerId(String customerId) { this.customerId = customerId; }

    public BigDecimal getAmount() { return amount; }
    public void setAmount(BigDecimal amount) { this.amount = amount; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
```

```java
package com.course.tx;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByCustomerId(String customerId);

    List<Order> findByStatus(String status);

    long countByStatus(String status);
}
```

```java
package com.course.tx;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "audit_logs")
public class AuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String action;

    @Column(nullable = false)
    private String performedBy;

    @Column(length = 4000)
    private String details;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    public AuditLog() {}

    public AuditLog(String action, String performedBy, String details) {
        this.action = action;
        this.performedBy = performedBy;
        this.details = details;
        this.createdAt = LocalDateTime.now();
    }

    public AuditLog(String action) {
        this.action = action;
        this.performedBy = "system";
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getAction() { return action; }
    public void setAction(String action) { this.action = action; }

    public String getPerformedBy() { return performedBy; }
    public void setPerformedBy(String performedBy) { this.performedBy = performedBy; }

    public String getDetails() { return details; }
    public void setDetails(String details) { this.details = details; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
```

```java
package com.course.tx;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuditLogRepository extends JpaRepository<AuditLog, Long> {
}
```

```java
package com.course.tx;

public class InsufficientBalanceException extends RuntimeException {

    private final Long accountId;
    private final BigDecimal requested;
    private final BigDecimal available;

    public InsufficientBalanceException(Long accountId, BigDecimal requested) {
        super("Insufficient balance in account " + accountId
            + ": requested " + requested);
        this.accountId = accountId;
        this.requested = requested;
        this.available = null;
    }

    public Long getAccountId() { return accountId; }
    public BigDecimal getRequested() { return requested; }
    public BigDecimal getAvailable() { return available; }
}
```

```java
package com.course.tx;

public class ConcurrentOperationException extends RuntimeException {
    public ConcurrentOperationException(String message, Throwable cause) {
        super(message, cause);
    }
}
```

### Application Entry Point

<a href="../../../assets/images/diagrams/java/24-transactions/application-entry-point-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/application-entry-point-handwritten.svg" alt="Handwritten: Application Entry Point" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/application-entry-point-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/application-entry-point-diagram.svg" alt="Diagram: Application Entry Point" width="30%">
</a>
<a href="../../../assets/images/diagrams/java/24-transactions/application-entry-point-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/java/24-transactions/application-entry-point-sticky.svg" alt="Sticky Note: Application Entry Point" width="30%">
</a>


```java
package com.course.tx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.retry.annotation.EnableRetry;

@SpringBootApplication
@EnableRetry
public class TransactionCourseApplication {

    public static void main(String[] args) {
        SpringApplication.run(TransactionCourseApplication.class, args);
    }
}
```

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

## Summary

- **@Transactional**: Declarative transaction management with seven propagation levels (`REQUIRED`, `REQUIRES_NEW`, `NESTED`, `MANDATORY`, `SUPPORTS`, `NOT_SUPPORTED`, `NEVER`) and five isolation levels (`READ_UNCOMMITTED`, `READ_COMMITTED`, `REPEATABLE_READ`, `SERIALIZABLE`). Use `rollbackFor`/`noRollbackFor` to control rollback behavior, `readOnly` for optimization hints, and `timeout` for maximum execution duration.

- **TransactionTemplate**: Programmatic transaction management with `TransactionCallback` (with return value) and `TransactionCallbackWithoutResult`. Use when you need per-item transactions, conditional commit/rollback, or dynamic transaction attributes.

- **PlatformTransactionManager hierarchy**: `DataSourceTransactionManager` for JDBC, `JpaTransactionManager` for JPA, `JtaTransactionManager` for distributed XA transactions, and `ChainedTransactionManager` for coordinating multiple resources.

- **Transaction synchronization**: `@TransactionalEventListener` with `AFTER_COMMIT`, `AFTER_ROLLBACK`, `AFTER_COMPLETION`, and `BEFORE_COMMIT` phases. `TransactionSynchronizationManager` provides thread-bound transaction context and resource management.

- **Declarative vs programmatic**: Declarative is cleaner and sufficient for most service-layer boundaries. Programmatic is necessary when you need fine-grained control, per-item transactions, or dynamic configuration.

- **Distributed transactions**: JTA with 2PC provides strong consistency across multiple databases but has significant latency, blocking, and complexity trade-offs. The Saga pattern (choreography or orchestration) provides eventual consistency with compensating transactions and is more suitable for microservices.

- **Pessimistic locking**: `@Lock(PESSIMISTIC_WRITE/PESSIMISTIC_READ/PESSIMISTIC_FORCE_INCREMENT)` acquires database locks at read time. Use for high-contention scenarios with retry logic for deadlock victims. `SELECT ... FOR UPDATE` and `SELECT ... FOR SHARE` are the underlying SQL mechanisms.

- **Optimistic locking**: `@Version` column increments on every update, with conflict detection at commit time throws `OptimisticLockException` or `StaleStateException`. Use for low-contention scenarios with retry patterns. Always retry with exponential backoff.

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

## Exercises

### Review Questions

1. Explain the difference between `REQUIRED` and `REQUIRES_NEW` propagation. Give a concrete scenario where you would use each.

2. What is the purpose of `readOnly = true` on `@Transactional`? Does it actually prevent writes?

3. How does `NESTED` propagation differ from `REQUIRES_NEW`? Which one commits independently?

4. What happens when `@Transactional` is placed on a private method? Why?

5. Explain the four standard isolation levels and which concurrency phenomena each prevents.

6. What is the difference between `rollbackFor = SomeException.class` and throwing a runtime exception?

7. When would you choose `TransactionTemplate` over `@Transactional`?

8. Describe the two-phase commit protocol. What are its failure modes?

9. Compare choreography-based sagas with orchestration-based sagas. What are the trade-offs?

10. How does `@Version` in JPA implement optimistic locking? What happens when a version conflict is detected?

11. What is a deadlock? How can you prevent it in a pessimistic locking scenario?

12. Explain the difference between `PESSIMISTIC_READ` and `PESSIMISTIC_WRITE` locking.

### Application Problems

1. **Bank Transfer Service**: Implement a complete bank transfer service with:
   - `@Transactional` with `REPEATABLE_READ` isolation
   - Pessimistic write locking on both accounts
   - Proper deadlock handling with retry
   - Audit logging with `REQUIRES_NEW` propagation
   - Balance validation before transfer
   - Email notification via `@TransactionalEventListener(AFTER_COMMIT)`

2. **Bulk Order Importer**: Build a batch import processor that:
   - Reads 1000+ orders from a CSV file
   - Imports each order in its own transaction (use `TransactionTemplate`)
   - Skips invalid rows without rolling back valid ones
   - Logs each failure with details
   - Returns a summary of successes and failures
   - Uses per-item transaction boundaries to maximize throughput

3. **Inventory Reservation System**: Implement a distributed inventory service with:
   - Optimistic locking on inventory quantities via `@Version`
   - Retry with exponential backoff on `OptimisticLockException`
   - Dedicated endpoint that returns the current version to clients
   - Version-based conflict detection in REST API responses (HTTP 409)
   - Integration tests that verify concurrent reservation behavior

4. **Saga-Based Order Processing**: Design and implement a complete saga for order fulfillment:
   - Step 1: Order Service creates order in PENDING state
   - Step 2: Inventory Service reserves stock
   - Step 3: Payment Service charges the customer
   - Step 4: Shipping Service creates a shipment
   - Compensating actions for each step
   - Implement with both choreography (events) and orchestration (coordinator) patterns

### Challenge Problems

1. **Distributed Transaction Coordinator**: Build a custom distributed transaction coordinator that:
   - Manages transactions across a PostgreSQL database and a MongoDB replica set
   - Implements a simplified two-phase commit protocol
   - Maintains a transaction log for recovery
   - Handles prepare failures with automatic rollback
   - Provides a REST API to inspect ongoing and completed transactions
   - Implements timeout-based abort for stuck transactions

2. **Multi-Phase Saga with Axon**: Implement an Axon Framework saga for a travel booking system:
   - Book flight Ã¢â€ â€™ Reserve hotel Ã¢â€ â€™ Rent car Ã¢â€ â€™ Confirm all
   - Each step is a separate microservice with its own database
   - Compensating actions: cancel flight, release hotel, cancel car
   - Handle partial failures Ã¢â‚¬â€ if car rental fails, cancel both flight and hotel
   - Implement timeout handling Ã¢â‚¬â€ if any step takes longer than 30 seconds, compensate
   - Add monitoring: saga state, step status, and compensating action history

3. **Concurrent Auction System**: Build a real-time bidding system that:
   - Uses optimistic locking for bids
   - Uses pessimistic locking for payment processing
   - Implements a distributed lock on auction closing via Redis
   - Handles concurrent bids with retry logic
   - Prevents deadlocks with ordered resource acquisition
   - Provides a real-time leaderboard using Redis sorted sets
   - Ensures exactly-once payment processing using idempotency keys

4. **Transaction Monitor**: Build a Spring Boot Actuator extension that:
   - Exposes real-time transaction metrics via a custom Actuator endpoint
   - Tracks active transaction count, commit rate, rollback rate
   - Monitors average transaction duration
   - Identifies transactions running longer than a threshold
   - Provides an endpoint to inspect currently active transactions
   - Logs slow transactions with stack traces for debugging
   - Integrates with `TransactionSynchronizationManager` and AOP

5. **Chained Transaction Manager for Heterogeneous Stores**: Implement a custom transaction coordinator that:
   - Coordinates transactions across PostgreSQL (JPA), MongoDB, and a REST API
   - Uses the Saga pattern internally with compensating actions
   - Provides `@Transactional` compatibility with a custom annotation
   - Works with Spring's `PlatformTransactionManager` abstraction
   - Handles partial failures gracefully with automatic compensation
   - Provides configurable consistency levels (strong vs eventual per participant)
   - Includes a recovery mechanism for failed compensations
