# Chapter 7: Deadlocks

## Learning Objectives

- Characterize deadlocks using the four necessary conditions
- Construct and interpret resource-allocation graphs
- Apply deadlock prevention by breaking one of the four conditions
- Implement Banker's algorithm for deadlock avoidance
- Design deadlock detection algorithms for single and multiple resource types
- Compare recovery strategies: process termination vs resource preemption

## Theory

![Deadlock Handling](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/operating-systems/07-deadlocks.png)

### Deadlock Definition

A **deadlock** is a state in which every process in a set is waiting for an event that can only be caused by another process in the set. Since all are waiting, none can proceed — the system is permanently blocked.

### The Four Necessary Conditions

For a deadlock to occur, all four conditions must hold simultaneously:

1. **Mutual Exclusion**: At least one resource must be held in a non-sharable mode (only one process can use it at a time)
2. **Hold and Wait**: A process holding at least one resource is waiting to acquire additional resources held by other processes
3. **No Preemption**: Resources cannot be forcibly taken from a process — they must be released voluntarily
4. **Circular Wait**: There exists a set {P₀, P₁, ..., Pₙ} where P₀ is waiting for a resource held by P₁, P₁ is waiting for a resource held by P₂, ..., Pₙ₋₁ is waiting for a resource held by Pₙ, and Pₙ is waiting for a resource held by P₀

### Resource-Allocation Graphs

A **Resource-Allocation Graph (RAG)** is a directed graph that represents processes (circles), resources (squares), and their relationships.

- **Request edge**: Pᵢ → Rⱼ (process i wants resource j)
- **Assignment edge**: Rⱼ → Pᵢ (resource j is assigned to process i)

```
    P1 ──→ R1 ──→ P2 ──→ R2 ──→ P1
```

If the graph contains a **cycle**, there may be a deadlock:
- One resource per type: cycle = deadlock
- Multiple resources per type: cycle = possible deadlock (must examine further)

```
     ┌─────────────────────────┐
     │                         │
     ▼                         │
    R1 ──→ P2 ──→ R2 ──→ P3 ──┘
     ▲         │               ▲
     │         └───────────────┘
    P1
```

This cycle means P1 holds R? and wants R?, P2 holds R? and wants R?, etc. If every resource in the cycle has only one instance, it's a deadlock.

### Deadlock Handling Strategies

| Strategy | Description | Overhead |
|----------|-------------|----------|
| Prevention | Ensure at least one condition never holds | Resource utilization may suffer |
| Avoidance | OS decides if granting a request leads to unsafe state | Must know future resource needs |
| Detection | Allow deadlock, then detect and recover | Runtime detection cost |
| Ignorance | Assume deadlocks never happen (Ostrich algorithm) | System may freeze |

Most modern OS use the **Ostrich algorithm** for most resources — ignoring the problem because deadlocks are rare enough to justify rebooting.

### Deadlock Prevention

Prevention ensures that at least one of the four necessary conditions cannot hold.

#### Breaking Mutual Exclusion

Some resources are inherently non-sharable (printers, tape drives). Making them sharable would require spooling (spooling directories make printers appear sharable). Not always possible.

#### Breaking Hold and Wait

Require a process to request **all** resources before it starts execution. Or: a process can request resources only when it has none.

**Problem**: Low resource utilization — processes hold resources for much longer than needed. Potential for starvation.

#### Breaking No Preemption

If a process that holds resources requests another that cannot be granted, it must release all currently held resources. It can request them again later (along with the new one).

**Problem**: Complex to implement. If preemption is not safe (e.g., partially updated data structures), it may cause corruption.

#### Breaking Circular Wait

Impose a **total ordering** of all resource types. A process can only request resources in increasing order.

```c
// Resource ordering: R1 < R2 < R3
// If a process holds R2, it can only request R3 (higher), never R1 (lower)

// Example system with 3 resource types:
// R = {Tape drive, Disk, Printer}
// Order: Tape drive (1) < Disk (2) < Printer (3)

// Allowed: Process holds tape(1), requests disk(2) ✓
// Allowed: Process holds disk(2), requests printer(3) ✓
// Not allowed: Process holds printer(3), requests tape(1) ✗
```

This breaks circular wait because a cycle would require an ordering violation.

### Deadlock Avoidance

Avoidance requires that the system knows in advance the **maximum** number of resources each process will ever need. The system decides whether granting a request would leave the system in a **safe state**.

#### Safe State

A state is **safe** if there exists a sequence of process executions that allows every process to complete. A safe state is not a deadlock; a deadlock is necessarily an unsafe state.

```
Safe state:     P2 completes → releases resources → P1 completes → P0 completes
Unsafe state:   No such sequence exists
```

#### Banker's Algorithm (Dijkstra, 1965)

Named because it models how a banker would allocate loans. Data structures:

- **Available**: Vector of length m (m = number of resource types). Available[j] = k means k instances of resource type Rⱼ are available.
- **Max**: n × m matrix. Max[i][j] = k means process Pᵢ will request at most k instances of Rⱼ.
- **Allocation**: n × m matrix. Allocation[i][j] = k means Pᵢ currently holds k instances of Rⱼ.
- **Need**: n × m matrix. Need[i][j] = Max[i][j] - Allocation[i][j].

```c
#include <stdio.h>
#include <stdbool.h>

#define NUM_PROCESSES 5
#define NUM_RESOURCES 3

int available[NUM_RESOURCES] = {3, 3, 2};
int max[NUM_PROCESSES][NUM_RESOURCES] = {
    {7, 5, 3},
    {3, 2, 2},
    {9, 0, 2},
    {2, 2, 2},
    {4, 3, 3}
};
int allocation[NUM_PROCESSES][NUM_RESOURCES] = {
    {0, 1, 0},
    {2, 0, 0},
    {3, 0, 2},
    {2, 1, 1},
    {0, 0, 2}
};
int need[NUM_PROCESSES][NUM_RESOURCES];

void calculate_need() {
    for (int i = 0; i < NUM_PROCESSES; i++) {
        for (int j = 0; j < NUM_RESOURCES; j++) {
            need[i][j] = max[i][j] - allocation[i][j];
        }
    }
}

bool is_safe() {
    int work[NUM_RESOURCES];
    bool finish[NUM_PROCESSES];
    int safe_sequence[NUM_PROCESSES];
    int seq_idx = 0;

    // Initialize work = available
    for (int j = 0; j < NUM_RESOURCES; j++) {
        work[j] = available[j];
    }
    for (int i = 0; i < NUM_PROCESSES; i++) {
        finish[i] = false;
    }

    while (seq_idx < NUM_PROCESSES) {
        bool found = false;

        for (int i = 0; i < NUM_PROCESSES; i++) {
            if (!finish[i]) {
                // Check if need[i] <= work
                bool can_run = true;
                for (int j = 0; j < NUM_RESOURCES; j++) {
                    if (need[i][j] > work[j]) {
                        can_run = false;
                        break;
                    }
                }

                if (can_run) {
                    // Process i can finish
                    for (int j = 0; j < NUM_RESOURCES; j++) {
                        work[j] += allocation[i][j];
                    }
                    finish[i] = true;
                    safe_sequence[seq_idx++] = i;
                    found = true;
                }
            }
        }

        if (!found) {
            printf("System is NOT in a safe state.\n");
            return false;
        }
    }

    printf("Safe sequence: ");
    for (int i = 0; i < NUM_PROCESSES; i++) {
        printf("P%d ", safe_sequence[i]);
    }
    printf("\n");
    return true;
}

bool request_resources(int pid, int request[]) {
    // Check if request <= need
    for (int j = 0; j < NUM_RESOURCES; j++) {
        if (request[j] > need[pid][j]) {
            printf("Error: Process exceeded max claim\n");
            return false;
        }
    }

    // Check if request <= available
    for (int j = 0; j < NUM_RESOURCES; j++) {
        if (request[j] > available[j]) {
            printf("Resources not available yet\n");
            return false;
        }
    }

    // Pretend to allocate
    for (int j = 0; j < NUM_RESOURCES; j++) {
        available[j] -= request[j];
        allocation[pid][j] += request[j];
        need[pid][j] -= request[j];
    }

    if (is_safe()) {
        return true;  // Allocation is safe
    } else {
        // Roll back
        for (int j = 0; j < NUM_RESOURCES; j++) {
            available[j] += request[j];
            allocation[pid][j] -= request[j];
            need[pid][j] += request[j];
        }
        printf("Request would lead to unsafe state — denied\n");
        return false;
    }
}

int main() {
    calculate_need();

    printf("Initial state:\n");
    is_safe();

    int request[] = {1, 0, 2};
    printf("\nP1 requests (1,0,2): ");
    request_resources(1, request);

    return 0;
}
```

### Deadlock Detection

If the system does not prevent or avoid deadlocks, it must be able to detect them.

#### Detection with Single Instance per Resource Type

Use a **wait-for graph** — derived from the resource-allocation graph by removing resources and connecting processes directly. If the wait-for graph contains a cycle, there is a deadlock.

```
Resource-allocation graph:      Wait-for graph:
P1 → R1 → P2                    P1 → P2
     R1 → P1, P2                P2 → P3
P2 → R2 → P3                    P3 → P1 (cycle!)
P3 → R1 → P1 (cycle)
```

#### Detection with Multiple Instances per Resource Type

Similar to Banker's algorithm but modified:

```c
bool detect_deadlock() {
    int work[NUM_RESOURCES];
    bool finish[NUM_PROCESSES];

    // Initialize work = available
    for (int j = 0; j < NUM_RESOURCES; j++) {
        work[j] = available[j];
    }

    // Processes with allocation > 0 are initially unfinished
    for (int i = 0; i < NUM_PROCESSES; i++) {
        bool allocated = false;
        for (int j = 0; j < NUM_RESOURCES; j++) {
            if (allocation[i][j] > 0) {
                allocated = true;
                break;
            }
        }
        finish[i] = !allocated;  // Processes with no resources can never deadlock
    }

    // Look for an unfinished process whose request <= work
    bool changed;
    do {
        changed = false;
        for (int i = 0; i < NUM_PROCESSES; i++) {
            if (!finish[i]) {
                bool can_run = true;
                for (int j = 0; j < NUM_RESOURCES; j++) {
                    if ((max[i][j] - allocation[i][j]) > work[j]) {
                        can_run = false;
                        break;
                    }
                }
                if (can_run) {
                    for (int j = 0; j < NUM_RESOURCES; j++) {
                        work[j] += allocation[i][j];
                    }
                    finish[i] = true;
                    changed = true;
                }
            }
        }
    } while (changed);

    // Check for deadlocked processes
    bool deadlock = false;
    for (int i = 0; i < NUM_PROCESSES; i++) {
        if (!finish[i]) {
            printf("Process P%d is deadlocked\n", i);
            deadlock = true;
        }
    }

    return deadlock;
}
```

### Deadlock Recovery

Once a deadlock is detected, the system must recover.

#### Process Termination

- **Abort all deadlocked processes**: Expensive — processes may have computed for a long time
- **Abort one process at a time**: After each abort, re-run detection to see if deadlock is broken

**Selection criteria**: Choose the process with the smallest cost:
- Lowest priority
- Most time remaining
- Most resources held
- Least total work done so far

#### Resource Preemption

Forcibly take resources from some processes and give them to others.

**Challenges**:
1. **Select a victim**: Which process to preempt?
2. **Rollback**: The preempted process must be rolled back to a safe state and restarted
3. **Starvation**: A process might always be selected as the victim. Use a cost metric that increases with each preemption.

## Examples

### Example 1: Deadlock Demonstration

```c
// deadlock.c — compile with: gcc deadlock.c -lpthread -o deadlock
#include <stdio.h>
#include <pthread.h>
#include <unistd.h>

pthread_mutex_t mutex1 = PTHREAD_MUTEX_INITIALIZER;
pthread_mutex_t mutex2 = PTHREAD_MUTEX_INITIALIZER;

void *thread1(void *arg) {
    pthread_mutex_lock(&mutex1);
    printf("Thread 1: locked mutex1\n");
    sleep(1);  // Force deadlock timing
    pthread_mutex_lock(&mutex2);
    printf("Thread 1: locked mutex2\n");

    pthread_mutex_unlock(&mutex2);
    pthread_mutex_unlock(&mutex1);
    return NULL;
}

void *thread2(void *arg) {
    pthread_mutex_lock(&mutex2);
    printf("Thread 2: locked mutex2\n");
    sleep(1);
    pthread_mutex_lock(&mutex1);  // Deadlock here
    printf("Thread 2: locked mutex1\n");

    pthread_mutex_unlock(&mutex1);
    pthread_mutex_unlock(&mutex2);
    return NULL;
}

int main() {
    pthread_t t1, t2;

    pthread_create(&t1, NULL, thread1, NULL);
    pthread_create(&t2, NULL, thread2, NULL);

    pthread_join(t1, NULL);  // Never returns
    pthread_join(t2, NULL);

    return 0;
}
```

### Example 2: Preventing Deadlock with Resource Ordering

Fix the above by always locking mutex1 before mutex2:

```c
void *thread2_fixed(void *arg) {
    pthread_mutex_lock(&mutex1);  // Changed: same order as thread1
    pthread_mutex_lock(&mutex2);
    printf("Thread 2: locked both mutexes\n");

    pthread_mutex_unlock(&mutex2);
    pthread_mutex_unlock(&mutex1);
    return NULL;
}
```

## Summary

- Deadlock requires four conditions: mutual exclusion, hold-and-wait, no preemption, circular wait
- Resource-allocation graphs can detect cycles; a cycle with single-instance resources means deadlock
- Prevention breaks one condition; avoidance (Banker's algorithm) identifies unsafe states
- Detection algorithms find deadlocked processes; recovery uses termination or preemption
- The Ostrich algorithm is the most common strategy: assume deadlocks won't happen
- Banker's algorithm is an O(m·n²) algorithm where m = resource types, n = processes
- Deadlock detection with multiple resource instances uses a variant of Banker's algorithm

## Exercises

### Basic

1. List the four necessary conditions for deadlock and explain each in one sentence.
2. Draw the resource-allocation graph for: P1 holds R1, wants R2; P2 holds R2, wants R1. Is this a deadlock?
3. What is the difference between deadlock prevention and deadlock avoidance?

### Intermediate

4. Given a system with three resource types (A:10, B:5, C:7) and these processes:
   - P0: Max (7,5,3), Allocation (0,1,0)
   - P1: Max (3,2,2), Allocation (2,0,0)
   - P2: Max (9,0,2), Allocation (3,0,2)
   - P3: Max (2,2,2), Allocation (2,1,1)
   - P4: Max (4,3,3), Allocation (0,0,2)
   Use Banker's algorithm to determine if (3,3,0) available is a safe state.

5. Implement a program that detects deadlock in a system by constructing a wait-for graph (not by using Banker's algorithm). Represent the graph as an adjacency matrix and use cycle detection.

6. Explain why the "hold and wait" condition is the easiest to prevent in practice, and why this prevention leads to poor resource utilization.

### Advanced

7. Implement Banker's algorithm for a system with up to 10 processes and 5 resource types. Your program should accept resource request vectors and either grant or deny them, displaying the safe sequence.

8. Research and implement the **Ostrich algorithm** in a small multithreaded program: after some time with no progress, assume deadlock and abort all threads. What heuristic would you use to detect "no progress"?

9. Consider the dining philosophers problem with resource ordering. Assign chopsticks numbers 0–4. Philosopher i must acquire lower-numbered chopstick first, then higher. Does this prevent deadlock? Prove it or find a counterexample.
