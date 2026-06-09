# Chapter 7 — Deadlocks

## Learning Objectives

1. Characterise deadlock using the four necessary conditions.
2. Construct and interpret a resource-allocation graph.
3. Apply deadlock prevention by negating necessary conditions.
4. Implement the banker's algorithm for deadlock avoidance.
5. Describe deadlock detection and recovery techniques.

## 7.1 System Model

A system comprises a finite set of resources R = {R1, R2, ..., Rm} and processes P = {P1, P2, ..., Pn}. Each resource type Ri has Wi instances. A process requests resources, uses them, and releases them. The OS grants resources in a way that avoids or manages deadlock.

## 7.2 Deadlock Characterisation

A **deadlock** is a state in which every process in a set is waiting for an event that can only be caused by another process in the set. Since all are waiting, none can proceed.

### 7.2.1 Necessary Conditions

Four conditions must hold simultaneously for deadlock to occur:

1. **Mutual exclusion**: At least one resource must be held in a non-sharable mode. Only one process at a time can use the resource.
2. **Hold and wait**: A process holding at least one resource is waiting to acquire additional resources held by other processes.
3. **No preemption**: Resources cannot be forcibly taken away; they must be released voluntarily by the holding process.
4. **Circular wait**: A set of processes {P0, P1, ..., Pn} exists such that P0 waits for a resource held by P1, P1 waits for P2, ..., Pn−1 waits for Pn, and Pn waits for P0.

### 7.2.2 Resource-Allocation Graph (RAG)

A deadlock can be visualised using a directed bipartite graph:

- Processes are circles. Resources are rectangles (with dots for instances).
- A **request edge** (P → R) means P is waiting for R.
- An **assignment edge** (R → P) means an instance of R is allocated to P.

A cycle in the RAG is necessary for deadlock. If each resource type has exactly one instance, a cycle is both necessary and sufficient. If resource types have multiple instances, a cycle is necessary but not sufficient — the system may be in a deadlock-free state despite having a cycle.

## 7.3 Handling Deadlocks

The OS may use one of four strategies:

1. Prevent deadlock by ensuring at least one necessary condition never holds.
2. Avoid deadlock by making judicious resource-allocation decisions at runtime.
3. Detect deadlock and recover after it occurs.
4. Ignore the problem (the **ostrich algorithm**) — let the system administrator reboot.

## 7.4 Deadlock Prevention

### 7.4.1 Break Mutual Exclusion

If a resource is sharable, mutual exclusion does not hold. Read-only files do not cause deadlock. However, many resources (printers, mutexes) are inherently non-sharable.

### 7.4.2 Break Hold-and-Wait

Require every process to request all its resources before beginning execution, or release all resources before requesting more. This underutilises resources (a process holds resources it does not yet need) and can cause starvation.

### 7.4.3 Break No Preemption

If a process holding resources is denied a new request, it must release all held resources (they are implicitly preempted). The process later re-requests everything. This is difficult to implement because resources may be in an unrecoverable state (partially written printer spool file).

### 7.4.4 Break Circular Wait

Impose a total order on resource types and require processes to request resources in increasing order. Proof: if all processes request resources in increasing order, a circular chain of waiting would require a process holding Ri to wait for Rj where j < i, which is prohibited.

```c
// Example: order resources as R1 < R2 < R3
void process() {
    // Must request R1 before R2, R2 before R3
    request(R1); request(R2); request(R3);
    use_resources();
    release(R3); release(R2); release(R1);
}
```

## 7.5 Deadlock Avoidance

Avoidance requires knowledge of future resource requests. The system only grants a request if the resulting state is **safe**.

### 7.5.1 Safe State

A state is safe if there exists a sequence of process executions that allows all processes to complete. An unsafe state is not necessarily deadlocked but may lead to deadlock.

**Example**: A system with 12 tape drives and three processes:

| Process | Max needs | Currently held |
|---------|-----------|----------------|
| P0 | 10 | 5 |
| P1 | 4 | 2 |
| P2 | 9 | 2 |

Available = 3. Safe sequence: P1 (needs 2 more → has 2, completes, releases 2+2=4) → P0 (needs 5 more → has 5+4=9, completes) → P2 (needs 7 more → has 9+5=14... wait). Actually: P1 needs 2 more (max 4, has 2), available = 3, grant 2 → P1 runs, releases 4 → available = 5. P0 needs 5, grant 5 → P0 runs, releases 10 → available = 10. P2 needs 7, grant 7 → P2 runs. This is a safe state.

### 7.5.2 Banker's Algorithm

The banker's algorithm (Dijkstra, 1965) is the canonical deadlock-avoidance algorithm. Data structures:

- `Available[m]`: number of instances available for each resource type.
- `Max[n][m]`: maximum demand of each process.
- `Allocation[n][m]`: currently allocated resources.
- `Need[n][m] = Max - Allocation`: remaining need.

**Safety algorithm** — determines if a state is safe:

```c
bool is_safe() {
    int Work[m] = Available;
    bool Finish[n] = {false};
    
    for (int step = 0; step < n; step++) {
        // Find an unfinished process whose needs can be met
        int i = -1;
        for (int j = 0; j < n; j++) {
            if (!Finish[j] && Need[j] <= Work) {
                i = j;
                break;
            }
        }
        if (i == -1) return false; // no such process → unsafe
        Work += Allocation[i];
        Finish[i] = true;
    }
    return true; // all processes finished → safe
}
```

**Resource-request algorithm** — called when a process Pi requests Request[i]:

```c
if (Request[i] > Need[i])
    error("exceeded maximum claim");
if (Request[i] > Available)
    block(); // not enough resources available

// Pretend to grant request
Available -= Request[i];
Allocation[i] += Request[i];
Need[i] -= Request[i];

if (is_safe())
    grant(); // state remains safe
else {
    // deny and roll back
    Available += Request[i];
    Allocation[i] -= Request[i];
    Need[i] += Request[i];
    block();
}
```

## 7.6 Deadlock Detection

If the system does not prevent or avoid deadlock, it must detect it.

### 7.6.1 Single Instance per Resource Type

Maintain a wait-for graph derived from the RAG (remove resource nodes, connect processes waiting for resources directly to the processes holding them). Periodically run a cycle-detection algorithm. If a cycle exists, deadlock is present.

### 7.6.2 Multiple Instances per Resource Type

A detection algorithm similar to the banker's safety algorithm searches for processes that can finish. If any processes remain unfinished, they are deadlocked.

```c
bool detect_deadlock() {
    int Work[m] = Available;
    bool Finish[n];
    for (int i = 0; i < n; i++)
        Finish[i] = (Allocation[i] == 0); // finished if no allocation
    
    while (true) {
        int i = find_unfinished_with_need_le_work(Finish, Work);
        if (i == -1) break;
        Work += Allocation[i];
        Finish[i] = true;
    }
    
    for (int i = 0; i < n; i++)
        if (!Finish[i]) return true; // deadlock detected
    return false;
}
```

Detection frequency trades overhead against deadlock duration: running it every request incurs high overhead; running it infrequently means deadlocked processes waste resources for longer periods.

## 7.7 Recovery from Deadlock

### 7.7.1 Process Termination

- **Abort all deadlocked processes**: Expensive, may lose computation.
- **Abort one process at a time**: After each abort, re-run detection. Minimal aborts, but significant overhead.

### 7.7.2 Resource Preemption

Select a victim process and forcibly preempt its resources. Considerations:

- **Selecting a victim**: Minimise cost — consider process priority, CPU time used, resources held.
- **Rollback**: The process must be rolled back to a safe checkpoint and restarted.
- **Starvation**: A process may be selected repeatedly as the victim. Ensure the cost factor includes the number of times a process has been preempted.

## Summary

Deadlock requires mutual exclusion, hold-and-wait, no preemption, and circular wait. Prevention statically ensures one condition cannot hold. Avoidance uses the banker's algorithm to maintain safe states. Detection identifies deadlock via wait-for graph analysis or a detection algorithm; recovery terminates processes or preempts resources. Most general-purpose OSs prefer prevention or the ostrich algorithm, while critical systems employ avoidance or detection.

## Exercises

### Review Questions

1. List and explain the four necessary conditions for deadlock.
2. Is a cycle in a resource-allocation graph sufficient for deadlock? Justify your answer.
3. How does the ordering of resource requests prevent circular wait?
4. What is a safe state, and how does it relate to deadlock avoidance?
5. What trade-offs exist in choosing how frequently to run deadlock detection?

### Application Problems

1. A system has three resource types: A (10 units), B (5 units), C (7 units). Processes P0–P3 have the following allocation and max matrices. Is the current state safe?

| Process | Allocation (A,B,C) | Max (A,B,C) |
|---------|-------------------|-------------|
| P0 | (1,1,2) | (4,3,3) |
| P1 | (2,1,1) | (3,2,2) |
| P2 | (3,1,0) | (6,1,3) |
| P3 | (1,2,1) | (3,3,3) |

Available = (3,0,3).

2. Run the banker's algorithm on the system from problem 1. Can a request by P0 for (2,0,1) be granted safely?
3. A system has 6 tape drives and 4 processes. Process P0 needs 5, P1 needs 4, P2 needs 2, P3 needs 3. Currently P0 holds 2, P1 holds 2, P2 holds 0, P3 holds 1. Determine whether this state is safe.

### Challenge Problem

1. Implement a deadlock detection tool in C that reads a snapshot of system state (available resources, current allocation, waiting requests) and determines whether deadlock exists. If deadlock exists, output the set of deadlocked processes and recommend a recovery plan (which process to terminate).
