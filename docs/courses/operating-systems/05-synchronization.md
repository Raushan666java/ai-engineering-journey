# Chapter 5: Process Synchronization

**<< [Threads](./04-threads.md)** | [**Next: Semaphores and Monitors**](./06-semaphores-monitors.md) >>

---

## Learning Objectives

- Define race conditions and explain why they occur in concurrent systems
- Formulate the critical section problem and characterize a valid solution
- Implement Peterson's solution for two processes
- Explain hardware support for synchronization (test-and-set, compare-and-swap)
- Use mutex locks and semaphores for process synchronization
- Recognize classic synchronization problems and their solutions

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/operating-systems/05-synchronization/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/05-synchronization/hero.svg" alt="Chapter Banner: Chapter 5: Process Synchronization" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/05-synchronization/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/05-synchronization/handwritten-notes.svg" alt="Handwritten Notes: Chapter 5: Process Synchronization" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/05-synchronization/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/05-synchronization/sticky-notes.svg" alt="Sticky Notes: Chapter 5: Process Synchronization" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/05-synchronization/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/05-synchronization/visual-explanation.svg" alt="Visual Explanation: Chapter 5: Process Synchronization" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/05-synchronization/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/05-synchronization/architecture.svg" alt="Architecture: Chapter 5: Process Synchronization" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/05-synchronization/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/05-synchronization/workflow.svg" alt="Workflow: Chapter 5: Process Synchronization" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/05-synchronization/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/05-synchronization/mindmap.svg" alt="Mind Map: Chapter 5: Process Synchronization" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/05-synchronization/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/05-synchronization/comparison.svg" alt="Comparison: Chapter 5: Process Synchronization" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/05-synchronization/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/05-synchronization/cheatsheet.svg" alt="Cheat Sheet: Chapter 5: Process Synchronization" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/05-synchronization/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/05-synchronization/interview-quiz.svg" alt="Quiz Card: Chapter 5: Process Synchronization" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/operating-systems/05-synchronization/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/operating-systems/05-synchronization/social-card.svg" alt="Social Card: Chapter 5: Process Synchronization" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


## Chapter at a Glance

| Topic | Key Points |
|-------|------------|
| **Race Condition** | Multiple processes manipulate shared data concurrently; result depends on scheduling order |
| **Critical Section** | Code segment accessing shared resources; must be executed atomically |
| **Peterson Solution** | Software-based two-process synchronization using turn and flag variables |
| **Hardware Support** | Test-and-set, compare-and-swap, memory barriers for lock implementation |
| **Mutex Locks** | Simple lock variable with acquire/release; spinlock if busy-waiting |

## Chapter Roadmap

<div class="mermaid">
flowchart LR
    A[Race Conditions] --> B[Critical Section Problem]
    B --> C[Peterson's Solution]
    C --> D[Hardware Synchronization]
    D --> E[Mutex Locks]
    E --> F[Semaphores & Monitors]
    F --> G[Classic Problems]
</div>

---

# UNIT 1: RACE CONDITIONS

## 1.1 Definition

A **race condition** occurs when multiple processes or threads access shared data concurrently, and the final result depends on the non-deterministic order of execution (the "race" between threads). The process that "wins" the race to access the shared variable determines the outcome.

### Real-World Analogy


**Bank Account Withdrawal by Two ATMs**: Imagine a joint bank account with a balance of $1000. Two ATMs process simultaneous withdrawals of $800 each.

```
ATM 1 (left)                    ATM 2 (right)
├── Check balance: $1000        ├── Check balance: $1000
├── Deduct $800 → $200          ├── Deduct $800 → $200
├── Write new balance: $200     ├── Write new balance: $200
└── Dispense cash               └── Dispense cash
```

**Result**: Both ATMs dispense $800, but the final balance is $200 instead of -$600. The bank lost $600 because each ATM read the balance before the other wrote its update. This is a race condition in the real world.

### Numbered Steps of a Race Condition


1. Thread A loads shared variable `counter` from memory into register (value = 5)
2. Thread A increments register (value = 6)
3. **Context switch** → Thread B loads `counter` from memory (value = 5 — stale!)
4. Thread B increments register (value = 6)
5. **Context switch** → Thread A stores register to `counter` (counter = 6)
6. Thread B stores register to `counter` (counter = 6)

**Final value**: 6 instead of 7. One increment is lost.

### Pseudocode


```
shared int counter = 0

// Executed by both threads
function increment():
    LOAD counter into reg    // Machine instruction 1
    ADD 1 to reg             // Machine instruction 2
    STORE reg to counter     // Machine instruction 3
```

### C++ Implementation


```cpp
#include <iostream>
#include <thread>
#include <vector>

int counter = 0;  // UNSYNCHRONIZED — shared global

void increment(int iterations) {
    for (int i = 0; i < iterations; ++i) {
        counter++;  // Race condition: RMW sequence not atomic
    }
}

int main() {
    const int N = 100000;
    std::thread t1(increment, N);
    std::thread t2(increment, N);

    t1.join();
    t2.join();

    std::cout << "Counter: " << counter
              << " (expected: " << (2 * N) << ")\n";
    return 0;
}
```

### Python Implementation


```python
import threading
import sys

counter = 0  # UNSYNCHRONIZED shared global
iterations = 100000

def increment():
    global counter
    for _ in range(iterations):
        counter += 1  # Race condition: read-modify-write not atomic in CPython

t1 = threading.Thread(target=increment)
t2 = threading.Thread(target=increment)

t1.start()
t2.start()
t1.join()
t2.join()

print(f"Counter: {counter} (expected: {2 * iterations})")
```

### Dry Run Trace Table


| Step | Thread | Action | Register (local) | counter (shared) | Notes |
|------|--------|--------|-----------------:|-----------------:|-------|
| 1 | A | LOAD counter | 5 | 5 | |
| 2 | A | INCREMENT | 6 | 5 | |
| 3 | A→B | Context switch | — | 5 | |
| 4 | B | LOAD counter | 5 | 5 | **Stale read!** |
| 5 | B | INCREMENT | 6 | 5 | |
| 6 | B | STORE | 6 | **6** | |
| 7 | B | LOAD counter | 6 | 6 | |
| 8 | B | INCREMENT | 7 | 6 | |
| 9 | B | STORE | — | **7** | |
| 10 | B→A | Context switch | — | 7 | |
| 11 | A | STORE (old reg=6) | — | **6** | **Overwrites B's work!** |
| **FINAL** | | | | **6** (expected: 7) | **One increment lost** |

### Complexity Analysis


| Operation | Time | Space | Why |
|-----------|------|-------|-----|
| Single increment (unsafe) | O(1) | O(1) | One RMW sequence, no synchronization overhead |
| With race | Unbounded | O(1) | The lost-update window grows with thread count |
| Expected safe counter | O(N) | O(1) | N increments across M threads = N total work |

**Why race conditions are dangerous**: They are non-deterministic and schedule-dependent. A program may run correctly 999 times and fail on the 1000th. Debugging is extremely difficult because the bug disappears under debugger breakpoints (Heisenbug).

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|--------------|
| Zero synchronization overhead (when race doesn't trigger) | Non-deterministic results |
| Maximum throughput in uncontended scenarios | Extremely hard to reproduce and debug |
| Simple code (no lock primitives) | Heisenbugs — disappear under debugger |
| | Results may vary across runs, CPUs, and load levels |
| | Security risk — race windows can be exploited |

### Edge Cases


| Scenario | Behavior | Mitigation |
|----------|----------|------------|
| Single thread | No race; counter is accurate | N/A |
| Two threads on single-core | Race still occurs (preemption during RMW) | Synchronization required |
| N threads (N > 2) | Lost updates compound; error grows with N | Mutex or atomic operations |
| Compiler optimization | Compiler may reorder or eliminate the increment | Use `volatile` or atomics |
| Weakly-ordered CPU (ARM) | Memory operations reordered by hardware | Memory barriers needed |
| Very high iteration count | Error approaches 50% of expected value asymptotically | Always use synchronization |

## 1.2 Race Condition vs Data Race

These terms are often confused but are technically distinct:

| Dimension | Race Condition | Data Race |
|-----------|---------------|-----------|
| **Definition** | A timing-dependent error where the output depends on the uncontrolled order of execution | Two or more threads concurrently access the same memory location, at least one is a write, and there is no synchronization |
| **Scope** | Logical / semantic — about program correctness | Hardware / memory model — about low-level memory access |
| **Involves** | Shared state and scheduling order | Concurrent read/write or write/write to same memory without happens-before |
| **Always a bug?** | Sometimes intended (deliberate races in lock-free algorithms) | Almost always a bug (formally undefined behavior in C/C++) |
| **Example** | Bank account balance depending on which ATM runs first | Two threads writing to the same `int` without a mutex |
| **Detection** | Behavioral testing, stress testing | Thread sanitizers (TSan), happens-before analysis |
| **C/C++ effect** | Logic error; program still runs | **Undefined behavior** — compiler may generate broken code |
| **Relationship** | A data race can *cause* a race condition, but a race condition can exist without a data race (e.g., mutex-protected code with wrong logic) | All data races in properly synchronized code are bugs, but some race conditions (e.g., work-stealing) are intentional |

**Key insight**: All data races are potential race conditions, but not all race conditions involve data races. For example, a race between two threads checking `if (account.balance >= amount)` before debiting — both protected by the same mutex — is a race condition (logic error) but not a data race (the mutex prevents concurrent access).

## 1.3 The Critical Section Problem

### Real-World Analogy


**Bathroom Stall**: A single-occupancy bathroom has one stall. Multiple people need to use it. Rules:
1. Only one person can be inside at any time (**mutual exclusion**)
2. If no one is inside and someone wants to go, they should eventually get in (**progress**)
3. You cannot cut in line indefinitely; everyone gets a turn (**bounded waiting**)

### Formal Definition


Consider a system with n processes {P₀, P₁, ..., Pₙ₋₁}. Each process has a segment of code called the **critical section** (CS) where it accesses shared data. The critical section problem is to design a protocol that processes can use to coordinate access.

### Requirements for a Valid Solution


A valid solution must satisfy three requirements:

1. **Mutual Exclusion (ME)**: If process Pᵢ is executing in its critical section, no other process can be executing in its critical section
2. **Progress**: If no process is in its critical section and some processes want to enter, only those not in their remainder sections can participate in deciding which will enter next; this selection cannot be postponed indefinitely
3. **Bounded Waiting (BW)**: There exists a bound on the number of times other processes are allowed to enter their critical sections after a process has made a request to enter

### Numbered Steps of Critical Section Protocol


```
entry_section:     // Request permission to enter CS
    [synchronization code]

critical_section:  // Access shared resources
    [code that modifies shared data]

exit_section:      // Release permission
    [cleanup / unlock code]

remainder_section: // Non-critical code
    [other work]
```

### Pseudocode


```
shared data protected by some synchronization mechanism

process(i):
    while true:
        entry_section(i)      // Acquire lock / wait
            critical_section()  // Access shared resource
        exit_section(i)       // Release lock / signal
        remainder_section()    // Do other work
```

### Complexity Analysis of Critical Section Problem


| Aspect | Complexity | Why |
|--------|-----------|-----|
| Entry section (worst-case wait) | O(n) for some solutions | May need to wait for n-1 other processes |
| Entry section (ideal) | O(1) | Lock is free, acquire immediately |
| Space (Peterson for n=2) | O(1) | Two flag bits + one turn variable |
| Space (general n-process) | O(n) or more | Need per-process state or queue |

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|--------------|
| Provides a structured way to reason about concurrency | Adds overhead even when uncontended |
| Enables safe sharing of data structures | Can become a performance bottleneck |
| Foundation for all higher-level synchronization | Poorly designed solutions lead to deadlock/starvation |

### Edge Cases


| Scenario | Issue | Solution |
|----------|-------|----------|
| Process crashes inside CS | Locks held forever | Timeout / recovery mechanisms |
| Process terminates in remainder section | No issue | No shared resources held |
| Interrupt occurs in CS | Interrupt handler may deadlock | Disable interrupts during CS (kernel only) |
| Nested critical sections | Deadlock if ordering violated | Lock ordering discipline |
| Preemptive kernel | Race even in kernel code | Spinlocks for short sections |

## 1.4 Critical Section Requirements — Detailed

### Mutual Exclusion — Formal Proof Structure


To prove mutual exclusion, show:
- At most one process can have `flag[self] = true AND turn == self`
- If P₀ is in CS, then `flag[0] == true AND turn == 0`
- P₁ cannot enter because `flag[0] == true AND turn == 0` makes P₁ spin-wait

### Progress — Formal Statement


If:
1. No process is executing in its CS
2. One or more processes wish to enter their CS

Then:
- Only processes that are not in their remainder section can participate in the decision
- The decision cannot be postponed indefinitely

### Bounded Waiting — Formal Statement


After process Pᵢ makes a request to enter its CS, there exists a bound on the number of times other processes may enter their CS before Pᵢ's request is granted.

---

# UNIT 2: PETERSON'S SOLUTION

## 2.1 Overview

**Peterson's algorithm** (Gary Peterson, 1981) is a software-based solution to the critical section problem for two processes. It uses two shared variables: `flag[2]` (indicating each process's intent to enter CS) and `turn` (indicating whose turn it is).

### Real-World Analogy


**Two People at a Single-Lock Door**: Alice and Bob share an office with a single key. When Alice wants to enter:
1. Alice puts her hand on the key (sets `flag[Alice] = true`)
2. Alice says "Bob can go first" (sets `turn = Bob`)
3. If Bob also wants to go (`flag[Bob] == true`) AND it's Bob's turn (`turn == Bob`), Alice waits
4. Otherwise Alice enters

### Numbered Steps of Peterson's Algorithm


```
Pᵢ wants to enter critical section:
Step 1: flag[i] = true          // Announce intent
Step 2: turn = j                // Defer to other process
Step 3: while (flag[j] && turn == j) {}  // Wait if both want and it's other's turn
Step 4: // Enter critical section
Step 5: flag[i] = false         // Done; allow other to enter
```

### Pseudocode


```
shared bool flag[2] = {false, false}
shared int turn

process(i):
    int other = 1 - i
    while true:
        flag[i] = true               // I want to enter
        turn = other                 // I yield to the other process
        while flag[other] and turn == other:
            // busy wait — spin until it's my turn
        // critical section
        flag[i] = false              // I'm done
        // remainder section
```

### C++ Implementation


```cpp
#include <iostream>
#include <thread>
#include <atomic>

struct PetersonLock {
    std::atomic<bool> flag[2];
    std::atomic<int> turn;

    PetersonLock() : flag{false, false}, turn(0) {}

    void lock(int self) {
        int other = 1 - self;
        flag[self].store(true, std::memory_order_seq_cst);
        turn.store(other, std::memory_order_seq_cst);
        while (flag[other].load(std::memory_order_seq_cst) &&
               turn.load(std::memory_order_seq_cst) == other) {
            std::this_thread::yield();  // Spin with yield
        }
    }

    void unlock(int self) {
        flag[self].store(false, std::memory_order_seq_cst);
    }
};

PetersonLock plock;
int counter = 0;

void worker(int id, int iterations) {
    for (int i = 0; i < iterations; ++i) {
        plock.lock(id);
        counter++;
        plock.unlock(id);
    }
}

int main() {
    const int N = 100000;
    std::thread t1(worker, 0, N);
    std::thread t2(worker, 1, N);

    t1.join();
    t2.join();

    std::cout << "Counter: " << counter
              << " (expected: " << (2 * N) << ")\n";
    return 0;
}
```

### Python Implementation


```python
import threading

class PetersonLock:
    def __init__(self):
        self.flag = [False, False]
        self.turn = 0

    def lock(self, self_id):
        other = 1 - self_id
        self.flag[self_id] = True
        self.turn = other
        while self.flag[other] and self.turn == other:
            pass  # Busy wait — spinning

    def unlock(self, self_id):
        self.flag[self_id] = False

counter = 0
plock = PetersonLock()
iterations = 100000

def worker(thread_id):
    global counter
    for _ in range(iterations):
        plock.lock(thread_id)
        counter += 1
        plock.unlock(thread_id)

t1 = threading.Thread(target=worker, args=(0,))
t2 = threading.Thread(target=worker, args=(1,))

t1.start()
t2.start()
t1.join()
t2.join()

print(f"Counter: {counter} (expected: {2 * iterations})")
```

## 2.2 Peterson's Algorithm — Full Dry Run

### Scenario: P₀ tries to enter CS, then P₁ tries, then P₀ exits


| Step | Process | Action | flag[0] | flag[1] | turn | Who is in CS? | Explanation |
|------|---------|--------|:-------:|:-------:|:----:|:------------:|-------------|
| 0 | — | Initial state | F | F | 0 | None | Nobody wants CS |
| 1 | P₀ | `flag[0] = true` | **T** | F | 0 | None | P₀ announces intent |
| 2 | P₀ | `turn = 1` | T | F | **1** | None | P₀ defers to P₁ |
| 3 | P₀ | Check: `flag[1]==F` → skip loop | T | F | 1 | **P₀** | P₁ doesn't want CS, so P₀ enters |
| 4 | P₁ | `flag[1] = true` | T | **T** | 1 | P₀ | P₁ announces intent |
| 5 | P₁ | `turn = 0` | T | T | **0** | P₀ | P₁ defers to P₀ |
| 6 | P₁ | Check: `flag[0]==T && turn==0` → **spin** | T | T | 0 | P₀ | P₀ in CS, P₁ waits |
| 7 | P₀ | `flag[0] = false` (exits CS) | **F** | T | 0 | None | P₀ releases |
| 8 | P₁ | Re-check: `flag[0]==F` → skip loop | F | T | 0 | **P₁** | P₁ enters CS |
| 9 | P₁ | `flag[1] = false` (exits CS) | F | **F** | 0 | None | P₁ releases |

### Scenario: Both P₀ and P₁ want CS simultaneously


| Step | Process | Action | flag[0] | flag[1] | turn | Who is in CS? | Explanation |
|------|---------|--------|:-------:|:-------:|:----:|:------------:|-------------|
| 0 | — | Initial state | F | F | 0 | None | |
| 1 | P₀ | `flag[0] = true` | **T** | F | 0 | None | |
| 2 | P₁ | `flag[1] = true` | T | **T** | 0 | None | Both now want CS |
| 3 | P₀ | `turn = 1` | T | T | **1** | None | P₀ defers |
| 4 | P₀ | Check: `flag[1]==T && turn==1` → **spin** | T | T | 1 | None | P₀ waits |
| 5 | P₁ | `turn = 0` | T | T | **0** | None | P₁ defers |
| 6 | P₁ | Check: `flag[0]==T && turn==0` → **spin** | T | T | 0 | None | P₁ waits |
| 7 | P₁ | Re-check: `flag[0]==T && turn==0` → spin | T | T | 0 | None | |
| 8 | P₀ | Re-check: `flag[1]==T && turn==1`? `turn==0` now → **skip** | T | T | 0 | **P₀** | P₀ enters because turn≠1 |
| 9 | P₀ | `flag[0] = false` (exits CS) | **F** | T | 0 | None | |
| 10 | P₁ | Re-check: `flag[0]==F` → skip loop | F | T | 0 | **P₁** | P₁ enters |
| 11 | P₁ | `flag[1] = false` | F | **F** | 0 | None | |

## 2.3 Proof of Correctness

### Mutual Exclusion Proof


Assume P₀ and P₁ are both in CS simultaneously. Then:
- P₀ entered CS only when `flag[1] == false OR turn == 0`
- P₁ entered CS only when `flag[0] == false OR turn == 1`

If both are in CS, then either:
- `turn == 0` (so P₁ must have found `flag[0] == false`) AND `turn == 1` (so P₀ must have found `flag[1] == false`) → contradiction because turn cannot be both 0 and 1

By contradiction, both cannot be in CS simultaneously. **ME holds.**

### Progress Proof


If P₀ is in its remainder section (`flag[0] == false`) and P₁ wants CS:
- P₁'s while condition: `flag[0] == false` → loop skipped immediately
- P₁ enters CS without waiting

If P₁ is waiting (`flag[1] == true`) and P₀ is in remainder section:
- P₀ will not set `flag[0] = true` (it's in remainder)
- P₁'s while condition: `flag[0] == false` → loop exits
- **Progress holds.**

### Bounded Waiting Proof


If P₀ wants CS and P₁ is in CS:
- P₀ sets `flag[0] = true`, `turn = 1`
- P₀ waits while `flag[1] == true && turn == 1`
- P₁ will eventually exit CS and set `flag[1] = false`
- At most one entry by P₁ before P₀ enters (P₁ may re-enter before P₀, but then on P₁'s next attempt, `turn == 1` makes P₁ wait)

Bound = 1. **Bounded waiting holds.**

## 2.4 Complexity Analysis

| Operation | Time | Space | Why |
|-----------|------|-------|-----|
| Lock (uncontended) | O(1) | O(1) | Two stores, one load |
| Lock (contended) | O(k) wait | O(1) | Spin until other releases; k = duration of CS |
| Memory | 2 booleans + 1 int | 3 bytes + padding | Constant, independent of critical section size |
| Context switches | 0 (spinlock) | — | No yield to kernel; CPU spins |

**Why Peterson is impractical on modern hardware**: Modern CPUs (ARM, PowerPC) implement weak memory ordering. Without memory barriers, the compiler or CPU may reorder the `flag[i] = true` and `turn = j` stores, breaking the algorithm. Hardware requires assembly-level `dmb` (data memory barrier) instructions.

## 2.5 Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|--------------|
| Pure software — no special hardware needed | Only works for 2 processes |
| Elegant and simple to understand | Busy-waiting wastes CPU |
| Satisfies all three CS requirements | Fails on weakly-ordered CPUs without barriers |
| No starvation | Not practical for real systems |
| Teaches core CS concepts | Extension to n processes is complex |

## 2.6 Edge Cases

| Scenario | Behavior | Mitigation |
|----------|----------|------------|
| Process crashes after `flag[i]=true` but not in CS | Other process spins forever | Timeout mechanism |
| Process crashes inside CS | Other process spins forever | Recovery protocol |
| One process much faster than other | Works correctly; faster may re-enter multiple times | Bound = 1 BW guarantee holds |
| Both arrive at exact same time | `turn` determines winner | Fair tie-breaking |
| Compiler reorders `flag[i]` and `turn` | Algorithm breaks | Use `atomic_thread_fence` or inline assembly |
---

# UNIT 3: SYNCHRONIZATION HARDWARE

## 3.1 Overview

Modern hardware provides atomic (non-interruptible) instructions that allow lock implementations without relying on software protocols. These instructions are the foundation of all real-world synchronization.

### Real-World Analogy


**The Cash Register "Total" Button**: When a cashier presses "Total" on a register, the machine atomically reads all item prices, computes the sum, and displays it — all in one uninterruptible operation. Another cashier cannot interfere mid-computation. This is exactly what a hardware atomic instruction does: read-modify-write as one indivisible step.

### Why Hardware Support?


Peterson's algorithm fails on modern CPUs because:
1. Compilers can reorder memory operations for optimization
2. CPUs with weakly-ordered memory models (ARM, PowerPC, RISC-V) can reorder stores
3. Multi-core systems have cache coherency delays

Hardware atomic instructions solve this by guaranteeing that no other core can modify the memory location between the read and the write.

## 3.2 Test-and-Set (TSL) Instruction

### Definition


`test_and_set(target)` atomically:
1. Reads the current value of `target`
2. Sets `target` to 1
3. Returns the original value

### Real-World Analogy


**Airline Seat Reservation**: When two agents try to book the last seat:
- Agent 1: "Is seat 14A available?" (read)
- Agent 1: "Mark it as sold!" (write)
- Agent 2: "Is seat 14A available?" → already sold → tries next seat

The check-and-mark must happen as one atomic operation, which is exactly what test-and-set provides.

### Numbered Steps


```
acquire(lock):
1. Call test_and_set(&lock)
2. If return value == 1 → another thread holds the lock → goto 1 (spin)
3. If return value == 0 → lock was free → we now hold it → enter CS

release(lock):
1. Set lock = 0
2. Other threads' test_and_set calls will now succeed
```

### Pseudocode


```
// Atomic hardware instruction — executes as one uninterruptible step
function test_and_set(int *target) -> int:
    old = *target
    *target = 1
    return old

struct Spinlock:
    int flag = 0

function acquire(Spinlock *lock):
    while test_and_set(&lock->flag) == 1:
        // busy wait — spinning

function release(Spinlock *lock):
    lock->flag = 0
```

### C/C++ Implementation (GCC atomic builtins)


```cpp
#include <iostream>
#include <thread>
#include <atomic>

struct TASLock {
    std::atomic<int> flag{0};

    void lock() {
        while (flag.exchange(1, std::memory_order_acquire) == 1) {
            // Spin — busy wait
        }
    }

    void unlock() {
        flag.store(0, std::memory_order_release);
    }
};

TASLock lock;
int counter = 0;

void worker(int iterations) {
    for (int i = 0; i < iterations; ++i) {
        lock.lock();
        counter++;
        lock.unlock();
    }
}

int main() {
    const int N = 100000;
    std::thread t1(worker, N);
    std::thread t2(worker, N);
    t1.join();
    t2.join();
    std::cout << "Counter: " << counter << " (expected: " << (2 * N) << ")\n";
    return 0;
}
```

### Python Implementation (simulated)


```python
import threading
import ctypes

# Python doesn't have hardware TAS — simulate with threading.Lock
# In CPython, the GIL protects individual bytecodes, but we use
# threading.Lock which wraps the platform's native mutex.

class TASLock:
    def __init__(self):
        self._lock = threading.Lock()
        self._flag = 0

    def acquire(self):
        while True:
            # Simulate test_and_set: atomically read and set to 1
            with self._lock:
                old = self._flag
                self._flag = 1
            if old == 0:
                break
            # Spin

    def release(self):
        self._flag = 0  # Not thread-safe in real Python — use actual Lock

counter = 0
lock = TASLock()
iterations = 100000

def worker():
    global counter
    for _ in range(iterations):
        lock.acquire()
        counter += 1
        lock.release()

# Note: This simulation has its own races on self._flag.
# In practice, use threading.Lock directly.
```

### Dry Run Trace Table


| Step | Thread | Action | lock->flag | Return value | Who holds lock? |
|------|--------|--------|:----------:|:------------:|:---------------:|
| 0 | — | Initial | 0 | — | None |
| 1 | A | TAS(&lock) | **1** | **0** → free | **A** |
| 2 | A | Enter CS | 1 | — | A |
| 3 | B | TAS(&lock) | **1** | **1** → held | A |
| 4 | B | Spin (loop) | 1 | — | A |
| 5 | A | Exit CS → flag=0 | **0** | — | None |
| 6 | B | TAS(&lock) | **1** | **0** → free | **B** |
| 7 | B | Enter CS | 1 | — | B |

### Complexity Analysis


| Aspect | Complexity | Why |
|--------|-----------|-----|
| Lock (uncontended) | O(1) | One atomic instruction, ~10-30ns on modern CPU |
| Lock (contended) | O(k) | k = time until lock released; spinning burns CPU cycles |
| Memory | O(1) | One flag variable per lock |
| Cache behavior | Poor | TAS generates bus traffic (cache line invalidations) |

**Why TAS is inefficient on multi-core**: Each TAS instruction writes to the flag variable, which invalidates the cache line on all other cores. Even spinning threads generate bus traffic. **Test-and-test-and-set** (TTAS) is a better variant: spin with read-only loads, call TAS only when the lock appears free.

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|--------------|
| Works on all modern CPUs | Busy-waiting wastes CPU cycles |
| Simple hardware implementation | No bounded waiting guarantee (may starve) |
| Foundation for all OS locks | Cache coherence traffic on multi-core |
| Can be used in interrupt handlers | Priority inversion possible |
| Fast uncontended acquisition | Not fair — later threads may acquire before earlier ones |

### Edge Cases


| Scenario | Behavior | Mitigation |
|----------|----------|------------|
| Interrupt handler acquires lock held by interrupted thread | **Deadlock** | Disable interrupts or use spin_lock_irqsave() |
| Single core, no preemption | Lock always acquired immediately | Spinning never happens |
| N threads contending same lock | Unfair — one thread may starve | Ticket lock (provides FIFO) |
| Very long critical section | CPU waste from spinning | Use blocking mutex instead |
| Thread dies holding lock | All spinners spin forever | Lock fencing / recovery |

## 3.3 Compare-and-Swap (CAS)

### Definition


`compare_and_swap(value, expected, new_value)` atomically:
1. Reads the current value of `*value`
2. If `*value == expected`, sets `*value = new_value`
3. Returns the old value

### Real-World Analogy


**Vending Machine Coin Slot**: The machine checks: "Is the coin exactly $1? If yes, accept it and dispense a soda. If not, reject it." The check-and-accept must be atomic — otherwise someone could trick it with a half-accepted coin.

### Numbered Steps


```
compare_and_swap(int *value, int expected, int new_value):
Step 1: old = *value
Step 2: if old == expected: *value = new_value
Step 3: return old
(all three steps execute atomically — no interleaving)
```

### Pseudocode


```
// Atomic — implemented as a single CPU instruction (CMPXCHG on x86)
function compare_and_swap(int *value, int expected, int new_value) -> int:
    old = *value
    if old == expected:
        *value = new_value
    return old
```

### C/C++ Implementation


```cpp
#include <iostream>
#include <thread>
#include <atomic>

std::atomic<int> counter{0};

// Lock-free increment using CAS
void lock_free_increment(std::atomic<int> &val) {
    int expected = val.load(std::memory_order_relaxed);
    while (!val.compare_exchange_weak(expected, expected + 1,
                                      std::memory_order_acq_rel)) {
        // CAS failed — expected was updated with current value; retry
    }
}

void worker(int iterations) {
    for (int i = 0; i < iterations; ++i) {
        lock_free_increment(counter);
    }
}

int main() {
    const int N = 100000;
    std::thread t1(worker, N);
    std::thread t2(worker, N);
    t1.join();
    t2.join();
    std::cout << "Counter: " << counter.load() << " (expected: " << (2 * N) << ")\n";
    return 0;
}
```

### Python Implementation


```python
import threading
import ctypes

# Python doesn't have CAS natively; simulate with a spinlock
# In real Python, use multiprocessing.Value with lock=True or ctypes.

class CASLock:
    def __init__(self):
        self._flag = 0
        self._mutex = threading.Lock()

    def compare_and_swap(self, expected, new_value):
        with self._mutex:
            old = self._flag
            if old == expected:
                self._flag = new_value
            return old

    def lock(self):
        while self.compare_and_swap(0, 1) == 1:
            pass

    def unlock(self):
        self._flag = 0
```

### Dry Run Trace Table (Lock-free Increment)


| Step | Thread | Action | counter (shared) | expected (local) | CAS success? |
|------|--------|--------|:----------------:|:----------------:|:------------:|
| 0 | — | Initial | 5 | — | — |
| 1 | A | Load counter → expected=5 | 5 | 5 | — |
| 2 | B | CAS(5, 6) → succeeds | **6** | — | **Yes** |
| 3 | A | CAS(5, 6) → fails (counter=6 ≠ expected=5) | 6 | updated to **6** | **No** |
| 4 | A | Retry: CAS(6, 7) → succeeds | **7** | 6 | **Yes** |
| **FINAL** | | | **7** | | |

### Complexity Analysis


| Aspect | Complexity | Why |
|--------|-----------|-----|
| CAS instruction | O(1) | Single CPU cycle on x86 (CMPXCHG), ~10-40ns |
| Lock-free increment | O(retries) | Retries = number of concurrent CAS attempts |
| Worst-case retries | O(n) | n concurrent threads all CAS on same variable |
| Memory | O(1) | Single atomic variable |

**Why CAS enables lock-free programming**: Unlike TAS, CAS can be retried on failure without holding any lock. This means a thread can help another thread complete its operation rather than blocking. This is the foundation of lock-free data structures.

### CAS vs TAS — Key Difference


| Property | TAS | CAS |
|----------|-----|-----|
| Always writes? | **Yes** (always sets to 1) | Only when match succeeds |
| Cache behavior | Poor (always invalidates) | Good (most CAS attempts succeed) |
| Lock-free possible? | No | Yes (foundation of lock-free) |
| ABA problem? | No | **Yes** — value can change A→B→A and CAS won't detect |
| x86 instruction | `xchg` | `cmpxchg` |

## 3.4 Memory Barriers (Fences)

### Definition


A **memory barrier** is a CPU instruction that enforces ordering constraints on memory operations before and after the barrier. It prevents the CPU and compiler from reordering memory accesses across the barrier.

### Real-World Analogy


**Bridge Toll Booth**: Cars (memory operations) approach a bridge. Cars from both directions can cross in any order normally. A toll booth (memory barrier) forces all cars on one side to finish crossing before any car from the other side can start.

### Types of Memory Barriers


| Barrier | Effect | When Used |
|---------|--------|-----------|
| `acquire` (load-load, load-store) | Reads after barrier see writes before barrier | Lock acquire |
| `release` (load-store, store-store) | Writes before barrier are visible after barrier | Lock release |
| `full` (all orders) | Complete ordering | Generic synchronization |
| `data-dependency` | Order dependent loads | RCU (Read-Copy-Update) |

### C++ Memory Order Usage


```cpp
std::atomic<int> data;
std::atomic<bool> ready{false};

// Thread 1 — producer
data.store(42, std::memory_order_relaxed);
ready.store(true, std::memory_order_release);

// Thread 2 — consumer
while (!ready.load(std::memory_order_acquire)) {}
// Guaranteed to see data == 42
std::cout << data.load(std::memory_order_relaxed);  // 42
```

---

# UNIT 4: MUTEX LOCKS

## 4.1 Definition

A **mutex** (mutual exclusion) is a synchronization primitive that protects a critical section by ensuring only one thread holds the lock at any time. Unlike spinlocks, a mutex typically **blocks** (puts to sleep) the waiting thread rather than busy-waiting.

### Real-World Analogy


**Library Study Room Checkout**: A library has one study room with a key at the front desk.
1. You take the key (acquire the mutex)
2. You use the room (critical section)
3. You return the key (release the mutex)
4. If the room is taken, you **wait in a queue** (blocking), not standing outside the door spinning

### Numbered Steps of Mutex Operation


```
acquire(mutex):
Step 1: Try to grab the lock
Step 2: If lock is free → mark as held, return
Step 3: If lock is held → add thread to wait queue, call scheduler to block
Step 4: When woken → try again (Step 1)

release(mutex):
Step 1: Mark lock as free
Step 2: If any threads are in wait queue → move one to ready queue (wake up)
```

### Pseudocode


```
struct Mutex:
    int value = 1           // 1 = free, ≤0 = held
    Queue waiting           // Queue of blocked processes

function acquire(Mutex *m):
    m->value--
    if m->value < 0:
        // Lock was already held → block this thread
        add this thread to m->waiting
        block()  // Yield CPU

function release(Mutex *m):
    m->value++
    if m->value <= 0:
        // Someone is waiting → wake one
        remove a thread from m->waiting
        wakeup(thread)  // Move to ready queue
```

### C++ Implementation (pthreads wrapper)


```cpp
#include <iostream>
#include <thread>
#include <mutex>

std::mutex mtx;
int counter = 0;

void worker(int iterations) {
    for (int i = 0; i < iterations; ++i) {
        std::lock_guard<std::mutex> lock(mtx);  // RAII — acquire on construction
        counter++;                                // Critical section
    }  // Release on destruction (unlock automatically)
}

int main() {
    const int N = 100000;
    std::thread t1(worker, N);
    std::thread t2(worker, N);
    t1.join();
    t2.join();
    std::cout << "Counter: " << counter << " (expected: " << (2 * N) << ")\n";
    return 0;
}
```

### Raw pthread Mutex (C-style)


```cpp
#include <iostream>
#include <thread>
#include <pthread.h>

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
int counter = 0;

void* worker(void* arg) {
    int iters = *(int*)arg;
    for (int i = 0; i < iters; ++i) {
        pthread_mutex_lock(&mutex);
        counter++;
        pthread_mutex_unlock(&mutex);
    }
    return nullptr;
}

int main() {
    const int N = 100000;
    pthread_t t1, t2;
    pthread_create(&t1, nullptr, worker, &N);
    pthread_create(&t2, nullptr, worker, &N);
    pthread_join(t1, nullptr);
    pthread_join(t2, nullptr);
    std::cout << "Counter: " << counter << " (expected: " << (2 * N) << ")\n";
    return 0;
}
```

### Python Implementation


```python
import threading

counter = 0
mutex = threading.Lock()
iterations = 100000

def worker():
    global counter
    for _ in range(iterations):
        with mutex:          # Acquire on enter
            counter += 1     # Critical section
        # Release on exit

t1 = threading.Thread(target=worker)
t2 = threading.Thread(target=worker)

t1.start()
t2.start()
t1.join()
t2.join()

print(f"Counter: {counter} (expected: {2 * iterations})")
```

### Dry Run Trace Table (Two Threads Using Mutex)


| Step | Thread | Action | mutex value | Waiting queue | Notes |
|------|--------|--------|:-----------:|:-------------:|-------|
| 0 | — | Initial | 1 | empty | Lock is free |
| 1 | A | acquire → value-- | **0** | empty | A holds lock |
| 2 | A | Enter CS | 0 | empty | |
| 3 | B | acquire → value-- | **-1** | **[B]** | B blocked |
| 4 | A | Exit CS → release → value++ | **0** | **[B]** | B's turn |
| 5 | A | release → queue not empty → wake B | 0 | **empty** | B moved to ready |
| 6 | B | acquire → value-- | **-1** | empty | B acquired (scheduler ran B) |
| 7 | B | Exit CS → release → value++ | **0** | empty | |

### Spinlock vs Mutex — Detailed Comparison


| Property | Spinlock | Blocking Mutex |
|----------|----------|---------------|
| **CPU usage while waiting** | 100% — busy loops | ~0% — thread is blocked |
| **Context switch on contention** | None | Yes (2 switches: block + wake) |
| **Latency to acquire** | Nanoseconds (if short wait) | Microseconds (switch overhead) |
| **Best for** | Very short CS (< context switch time) | Long CS or I/O-bound |
| **Can be used in interrupt context** | Yes (no blocking allowed in IRQ) | No (cannot sleep in IRQ) |
| **Priority inversion risk** | Low (no scheduler involvement) | Higher (OS may boost holder) |
| **Preemption** | No preemption needed | OS scheduler must preempt |
| **Fairness** | Usually not fair (TAS) | Usually FIFO or priority-based |
| **Memory** | O(1) — just a flag | O(n) — wait queue per lock |

**Decision rule**: If the critical section is shorter than the time to do two context switches (~1-5µs), use a spinlock. Otherwise, use a blocking mutex.

### Recursive Mutex


A **recursive mutex** allows the same thread to acquire the same mutex multiple times without deadlocking. Each acquire must be matched with a release.

```cpp
#include <iostream>
#include <thread>
#include <mutex>

std::recursive_mutex rmtx;

void recursive_function(int depth) {
    if (depth <= 0) return;
    std::lock_guard<std::recursive_mutex> lock(rmtx);
    std::cout << "Depth: " << depth << "\n";
    recursive_function(depth - 1);  // Same thread re-acquires same mutex
}

int main() {
    std::thread t(recursive_function, 5);
    t.join();
    return 0;
}
```

**Danger**: Recursive mutexes can mask bad design. Prefer non-recursive mutexes with a clear lock hierarchy.

### Complexity Analysis


| Operation | Time | Space | Why |
|-----------|------|-------|-----|
| acquire (uncontended) | O(1) | O(1) | Atomic CAS on flag |
| acquire (contended, spin) | O(k) | O(1) | Spin until free |
| acquire (contended, block) | O(1) user + O(s) kernel | O(w) | w = wait queue entry |
| release (no waiters) | O(1) | O(1) | Atomic store |
| release (with waiters) | O(1) + O(s) | O(1) | System call to wake |

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|--------------|
| Clean acquire/release semantics | Risk of deadlock if order is wrong |
| Available in all threading libraries | Can cause priority inversion |
| Blocking is efficient for long CS | Not suitable for interrupt handlers |
| RAII wrappers prevent leaks | Overhead even when uncontested |

### Edge Cases


| Scenario | Behavior | Mitigation |
|----------|----------|------------|
| Same thread locks twice (non-recursive) | **Deadlock** or undefined behavior | Use recursive mutex or check lock state |
| Thread exits holding mutex | All waiters wait forever | Robust mutex (pthread_mutex_robust) |
| Mutex destroyed while held | Undefined behavior | Ensure all threads have released |
| Low-priority thread holds mutex, high-priority waits | Priority inversion | Priority inheritance protocol |
| Signal delivered while holding mutex | Signal handler may try to acquire → deadlock | Async-signal-safe only functions |
| Nested critical sections, different order | Deadlock | Enforce global lock ordering |
---

# UNIT 5: SEMAPHORES

## 5.1 Definition

A **semaphore** (Edsger Dijkstra, 1965) is an integer variable accessed only through two atomic operations: `wait()` (P -- *proberen*, Dutch for "to test") and `signal()` (V -- *verhogen*, "to increment"). A semaphore can be used to control access to one or more identical resources.

### Real-World Analogy


**Valet Parking Ticket Machine**: A restaurant has 10 parking spots. The valet takes a ticket from the machine:
- **wait() / P**: Take a ticket. If no tickets left (counter = 0), wait until someone returns theirs
- **signal() / V**: Return a ticket. If someone is waiting for a ticket, they can now take one

The ticket counter IS the semaphore value -- it represents the number of available resources.

### Type 1: Binary Semaphore (value 0 or 1)


Used like a mutex -- protects one resource.

### Type 2: Counting Semaphore (value >= 0)

<a href="../../../assets/images/diagrams/operating-systems/05-synchronization/type-2-counting-semaphore-value-0-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/operating-systems/05-synchronization/type-2-counting-semaphore-value-0-handwritten.svg" alt="Handwritten: Type 2: Counting Semaphore (value >= 0)" width="30%">
</a>
<a href="../../../assets/images/diagrams/operating-systems/05-synchronization/type-2-counting-semaphore-value-0-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/operating-systems/05-synchronization/type-2-counting-semaphore-value-0-diagram.svg" alt="Diagram: Type 2: Counting Semaphore (value >= 0)" width="30%">
</a>
<a href="../../../assets/images/diagrams/operating-systems/05-synchronization/type-2-counting-semaphore-value-0-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/operating-systems/05-synchronization/type-2-counting-semaphore-value-0-sticky.svg" alt="Sticky Note: Type 2: Counting Semaphore (value >= 0)" width="30%">
</a>


Used to manage a pool of identical resources (e.g., 5 database connections, 10 printer queues).

### Numbered Steps -- Semaphore Operations


```
// wait() / P() -- "proberen" (to test)
Step 1: s->value--                     // Decrement atomically
Step 2: if s->value < 0:
            add thread to waiting queue
            block the thread

// signal() / V() -- "verhogen" (to increment)
Step 1: s->value++                     // Increment atomically
Step 2: if s->value <= 0:
            remove thread from waiting queue
            wake the thread
```

### Pseudocode


```
struct Semaphore:
    int value
    Queue waiting   // FIFO queue of blocked processes

function wait(Semaphore *s):
    s->value = s->value - 1
    if s->value < 0:
        add running process to s->waiting
        block()

function signal(Semaphore *s):
    s->value = s->value + 1
    if s->value <= 0:
        remove process P from s->waiting
        wakeup(P)
```

### C/C++ Implementation (POSIX Semaphores)


```cpp
#include <iostream>
#include <thread>
#include <semaphore.h>
#include <vector>

sem_t semaphore;
int counter = 0;

void worker(int iterations) {
    for (int i = 0; i < iterations; ++i) {
        sem_wait(&semaphore);   // P operation -- acquire
        counter++;
        sem_post(&semaphore);   // V operation -- release
    }
}

int main() {
    const int N = 100000;
    sem_init(&semaphore, 0, 1);

    std::thread t1(worker, N);
    std::thread t2(worker, N);
    t1.join();
    t2.join();

    std::cout << "Counter: " << counter << " (expected: " << (2 * N) << ")\n";
    sem_destroy(&semaphore);
    return 0;
}
```

### Counting Semaphore -- Resource Pool (C++)


```cpp
#include <iostream>
#include <thread>
#include <semaphore.h>
#include <vector>
#include <unistd.h>

sem_t pool;
const int RESOURCES = 3;

void use_resource(int id) {
    std::cout << "Thread " << id << " waiting for resource...\n";
    sem_wait(&pool);
    std::cout << "Thread " << id << " using resource...\n";
    sleep(1);
    std::cout << "Thread " << id << " releasing resource.\n";
    sem_post(&pool);
}

int main() {
    sem_init(&pool, 0, RESOURCES);
    std::vector<std::thread> threads;

    for (int i = 0; i < 10; ++i)
        threads.emplace_back(use_resource, i);
    for (auto &t : threads) t.join();

    sem_destroy(&pool);
    return 0;
}
```

### Python Implementation


```python
import threading
import time

semaphore = threading.Semaphore(1)
counter = 0
iterations = 100000

def worker():
    global counter
    for _ in range(iterations):
        semaphore.acquire()
        counter += 1
        semaphore.release()

t1 = threading.Thread(target=worker)
t2 = threading.Thread(target=worker)

t1.start()
t2.start()
t1.join()
t2.join()

print(f"Counter: {counter} (expected: {2 * iterations})")
```

### Python Counting Semaphore -- Resource Pool


```python
import threading
import time

pool = threading.Semaphore(3)

def use_resource(thread_id):
    print(f"Thread {thread_id} waiting for resource...")
    pool.acquire()
    print(f"Thread {thread_id} acquired resource.")
    time.sleep(1)
    print(f"Thread {thread_id} releasing resource.")
    pool.release()

threads = []
for i in range(10):
    t = threading.Thread(target=use_resource, args=(i,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()
```

### Dry Run Trace Table -- Binary Semaphore (value=1)


| Step | Thread | Action | sem value | Waiting queue | Notes |
|------|--------|--------|:---------:|:-------------:|-------|
| 0 | -- | Initial (init = 1) | 1 | empty | Resource available |
| 1 | A | wait() -> value-- | **0** | empty | A acquired |
| 2 | A | Enter CS | 0 | empty | |
| 3 | B | wait() -> value-- | **-1** | **[B]** | B blocked |
| 4 | C | wait() -> value-- | **-2** | **[B, C]** | C blocked |
| 5 | A | signal() -> value++ | **-1** | **[C]** | B woken up |
| 6 | B | wait() wakes -> value-- | **-1** | **[C]** | B acquired |
| 7 | B | signal() -> value++ | **0** | **empty** | C woken up |
| 8 | C | wait() wakes -> value-- | **0** | empty | C acquired |
| 9 | C | signal() -> value++ | **1** | empty | Back to initial |

### Complexity Analysis


| Operation | Time | Space | Why |
|-----------|------|-------|-----|
| wait (uncontended) | O(1) | O(1) | One atomic decrement + check |
| wait (contended -- block) | O(s) | O(w) | s = scheduler, w = queue entry |
| signal (no waiters) | O(1) | O(1) | One atomic increment |
| signal (wake waiter) | O(s) | O(1) | s = scheduler time |

**Why sem_value can become negative**: Tracks overcommitment. -3 means 3 threads waiting for 1 resource. Elegantly encodes resource count AND waiter count in one integer.

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|--------------|
| Generalizes mutex to N resources | No ownership -- any thread can signal |
| Blocks instead of busy-waiting | Easy to create deadlock (forgot signal) |
| Can coordinate producer-consumer | Harder to reason about than mutex |
| Well-understood, decades of practice | Binary sem != mutex (no ownership) |

### Binary Semaphore vs Mutex


| Property | Binary Semaphore | Mutex |
|----------|-----------------|-------|
| Initial value | 0 or 1 | 1 |
| Ownership | No -- any thread can signal | Yes -- only owner can unlock |
| Used for | Signaling / synchronization | Mutual exclusion |
| Priority inheritance | No | Yes (most OS) |
| Recursive | No | Yes (with attrs) |
| Can be used in ISR | Yes (signal from ISR) | No |

### Edge Cases


| Scenario | Behavior | Mitigation |
|----------|----------|------------|
| Signal before wait (signaling use) | Value becomes 2, second signal lost | Always init at 0 for signaling |
| Thread signals when should wait | Resource released incorrectly | Careful design; no ownership |
| Semaphore destroyed with blocked threads | Undefined behavior | Drain all waiters first |
| Overflow (high signal count) | Value wraps | Use bounded increments |

## 5.2 Classic Problems Using Semaphores

### 5.2.1 Producer-Consumer (Bounded Buffer)


```cpp
#include <iostream>
#include <thread>
#include <semaphore.h>
#include <vector>

const int BUFFER_SIZE = 5;
int buffer[BUFFER_SIZE];
int in = 0, out = 0;

sem_t empty;
sem_t full;
sem_t mutex;

void producer() {
    for (int i = 0; i < 20; ++i) {
        sem_wait(&empty);
        sem_wait(&mutex);
        buffer[in] = i;
        std::cout << "Produced: " << i << " at slot " << in << "\n";
        in = (in + 1) % BUFFER_SIZE;
        sem_post(&mutex);
        sem_post(&full);
    }
}

void consumer() {
    for (int i = 0; i < 20; ++i) {
        sem_wait(&full);
        sem_wait(&mutex);
        int val = buffer[out];
        std::cout << "Consumed: " << val << " from slot " << out << "\n";
        out = (out + 1) % BUFFER_SIZE;
        sem_post(&mutex);
        sem_post(&empty);
    }
}

int main() {
    sem_init(&empty, 0, BUFFER_SIZE);
    sem_init(&full, 0, 0);
    sem_init(&mutex, 0, 1);

    std::thread prod(producer);
    std::thread cons(consumer);

    prod.join();
    cons.join();

    sem_destroy(&empty);
    sem_destroy(&full);
    sem_destroy(&mutex);
    return 0;
}
```

### 5.2.2 Readers-Writers


```cpp
#include <iostream>
#include <thread>
#include <semaphore.h>
#include <unistd.h>

sem_t rw_mutex;
sem_t mutex;
int read_count = 0;
int shared_data = 0;

void reader(int id) {
    for (int i = 0; i < 5; ++i) {
        sem_wait(&mutex);
        read_count++;
        if (read_count == 1)
            sem_wait(&rw_mutex);
        sem_post(&mutex);

        std::cout << "Reader " << id << " reads: " << shared_data << "\n";

        sem_wait(&mutex);
        read_count--;
        if (read_count == 0)
            sem_post(&rw_mutex);
        sem_post(&mutex);

        sleep(1);
    }
}

void writer(int id) {
    for (int i = 0; i < 3; ++i) {
        sem_wait(&rw_mutex);
        shared_data++;
        std::cout << "Writer " << id << " writes: " << shared_data << "\n";
        sem_post(&rw_mutex);
        sleep(2);
    }
}

int main() {
    sem_init(&rw_mutex, 0, 1);
    sem_init(&mutex, 0, 1);

    std::thread r1(reader, 1), r2(reader, 2), w1(writer, 1);
    r1.join(); r2.join(); w1.join();

    sem_destroy(&rw_mutex);
    sem_destroy(&mutex);
    return 0;
}
```
---

# UNIT 6: MONITOR CONCEPTS

## 6.1 Definition

A **monitor** (C. A. R. Hoare, 1974; Per Brinch Hansen) is a high-level synchronization construct that encapsulates shared data, operations on that data, and synchronization into a single unit. Unlike semaphores (which are scattered through code), monitors provide **structured concurrency** where the compiler/runtime enforces mutual exclusion.

### Real-World Analogy


**Hotel Room Key System**: A hotel has rooms (shared resources). The front desk (monitor) controls all access:
- You request a room key from the front desk -- you get exclusive access
- You return the key when done
- The front desk ensures only one person is in each room at a time
- You can **wait** (if the room isn't ready) and the front desk will **notify** you when it is
- You never directly access the room without going through the front desk

### Key Characteristics


1. **Mutual Exclusion**: Only one thread can be active inside the monitor at any time
2. **Condition Variables**: Enable threads to wait for specific conditions and be notified
3. **Data Encapsulation**: Shared data is private to the monitor -- only accessible through monitor procedures

### Condition Variables


- **wait(c)**: Release monitor lock, block on condition c. When re-acquired, re-acquire lock
- **signal(c)**: Wake one thread waiting on condition c (Hoare semantics: waiter runs immediately; Mesa semantics: waiter becomes ready and competes for lock)
- **broadcast(c)**: Wake ALL threads waiting on condition c

### Numbered Steps -- Monitor Wait/Signal


```
// Thread A inside monitor -- needs to wait for condition
Step 1: A calls wait(cond)
Step 2: A releases monitor lock (so other threads can enter)
Step 3: A is placed on cond's waiting queue
Step 4: A blocks (sleeps) -- does NOT busy wait

// Thread B inside monitor -- makes condition true
Step 1: B calls signal(cond)
Step 2: One thread (A) is moved from cond's queue to ready queue
Step 3: B continues in monitor (Mesa) OR B yields to A immediately (Hoare)
Step 4: A wakes, re-acquires monitor lock, returns from wait()
```

### Pseudocode


```
monitor SharedResource:
    data: shared_data
    condition_variable cond

    procedure entry doSomething():
        entry:  // implicit -- runtime acquires monitor lock
        while not condition:
            cond.wait()     // release lock, wait, re-acquire
        modify shared_data
        cond.signal()       // wake one waiter
        exit:               // implicit -- runtime releases monitor lock
```

### C++ Implementation (std::condition_variable)


```cpp
#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <queue>

class BoundedBuffer {
private:
    std::queue<int> buffer;
    std::mutex mtx;
    std::condition_variable not_empty;
    std::condition_variable not_full;
    const size_t max_size;

public:
    BoundedBuffer(size_t size) : max_size(size) {}

    void produce(int item) {
        std::unique_lock<std::mutex> lock(mtx);
        while (buffer.size() >= max_size) {
            not_full.wait(lock);
        }
        buffer.push(item);
        std::cout << "Produced: " << item << " (size: " << buffer.size() << ")\n";
        not_empty.notify_one();
    }

    int consume() {
        std::unique_lock<std::mutex> lock(mtx);
        while (buffer.empty()) {
            not_empty.wait(lock);
        }
        int item = buffer.front();
        buffer.pop();
        std::cout << "Consumed: " << item << " (size: " << buffer.size() << ")\n";
        not_full.notify_one();
        return item;
    }
};

int main() {
    BoundedBuffer buf(5);
    std::thread producer([&]() {
        for (int i = 0; i < 20; ++i) buf.produce(i);
    });
    std::thread consumer([&]() {
        for (int i = 0; i < 20; ++i) buf.consume();
    });
    producer.join();
    consumer.join();
    return 0;
}
```

### Python Implementation (threading.Condition)


```python
import threading
import time

class BoundedBuffer:
    def __init__(self, max_size):
        self.buffer = []
        self.max_size = max_size
        self.lock = threading.Lock()
        self.not_empty = threading.Condition(self.lock)
        self.not_full = threading.Condition(self.lock)

    def produce(self, item):
        with self.not_full:
            while len(self.buffer) >= self.max_size:
                self.not_full.wait()
            self.buffer.append(item)
            print(f"Produced: {item} (size: {len(self.buffer)})")
            self.not_empty.notify()

    def consume(self):
        with self.not_empty:
            while len(self.buffer) == 0:
                self.not_empty.wait()
            item = self.buffer.pop(0)
            print(f"Consumed: {item} (size: {len(self.buffer)})")
            self.not_full.notify()
            return item

buf = BoundedBuffer(5)

def producer():
    for i in range(20):
        buf.produce(i)
        time.sleep(0.01)

def consumer():
    for _ in range(20):
        buf.consume()
        time.sleep(0.03)

t1 = threading.Thread(target=producer)
t2 = threading.Thread(target=consumer)
t1.start()
t2.start()
t1.join()
t2.join()
```

### Dry Run Trace Table -- Monitor with CV


| Step | Thread | Action | Buffer size | Cond queue | Lock holder | Notes |
|------|--------|--------|:-----------:|:----------:|:-----------:|-------|
| 0 | -- | Initial | 0 | empty | none | |
| 1 | P | produce(1) | 1 | empty | P | |
| 2 | P | produce(2) | 2 | empty | P | |
| 3 | P | produce(3) | 3 | empty | P | |
| 4 | C | consume -- try lock | 3 | empty | **P** | C blocked on mutex |
| 5 | P | produce(4) | 4 | empty | P | |
| 6 | P | produce(5) | **5** | empty | P | Full! |
| 7 | P | produce(6) -> wait(not_full) | 5 | **[P on not_full]** | **C** | P releases lock, sleeps |
| 8 | C | acquire -> consume -> pop | **4** | **[P on not_full]** | C | |
| 9 | C | notify_one(not_full) | 4 | **empty** | C | P moved to ready |
| 10 | C | consume -> pop | **3** | empty | C | |
| 11 | P | wakes -> re-acquire -> produce(6) | **4** | empty | P | |

### Hoare vs Mesa Semantics


| Property | Hoare | Mesa |
|----------|-------|------|
| Signaled thread runs | **Immediately** | Later (competes for lock) |
| Condition guaranteed? | Yes (no re-check needed) | **No** -- must re-check |
| While vs If | `if` is safe | **Must use `while`** |
| Complexity | High | Simple |
| Used in | Research systems | **Most real systems** (Java, C++) |

**Key rule for Mesa**: Always use `while (not condition) wait()` -- never `if`.

### Complexity Analysis


| Operation | Time | Space | Why |
|-----------|------|-------|-----|
| Enter monitor (uncontended) | O(1) | O(1) | Acquire underlying mutex |
| Wait on CV | O(1)+O(s) | O(w) | Release lock, block; w = queue entry |
| Signal CV (no waiters) | O(1) | O(1) | No-op |
| Signal CV (wake waiter) | O(s) | O(1) | s = scheduler time |
| Broadcast CV | O(n x s) | O(1) | Wake n waiters |

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|--------------|
| Structured -- code is sequential | May be overkill for simple ME |
| Compiler enforces mutual exclusion | Can deadlock if signal/wait order wrong |
| Easier to reason about than semaphores | Not available in all languages |
| Condition variables are precise | Mesa requires while-loop discipline |
| Encapsulation of data + sync | Complex with many CVs |

### Edge Cases


| Scenario | Behavior | Mitigation |
|----------|----------|------------|
| Spurious wakeup | Thread wakes without signal | Always use `while` loop |
| Signal when no thread waiting | Signal is lost | Use separate predicate variable |
| Nested monitor calls | Deadlock risk | Avoid nested calls |
| Broadcast wakes all | Most re-check and sleep | Use notify_one when possible |

## 6.2 Monitor vs Semaphore

| Property | Monitor | Semaphore |
|----------|---------|-----------|
| Abstraction level | High (language construct) | Low (OS primitive) |
| Mutual exclusion | Implicit (compiler) | Explicit (wait/signal) |
| Data encapsulation | Yes (data inside monitor) | No |
| Condition sync | Condition variables | Counting semaphores |
| Ownership | Yes (lock owner) | No |
| Error-prone? | Less | More |
| Available in | Java, C++11, Python, C# | C, C++, POSIX, System V |

---

# UNIT 7: INTERVIEW CORNER

## 7.1 Race Condition Detection

### Q1: Find the race condition


```cpp
int balance = 100;
void withdraw(int amount) {
    if (balance >= amount) {
        balance -= amount;
    }
}
```

**Answer**: T1 and T2 both read `balance` before either writes. T1 sees balance=100, amount=200 -> skip. T2 sees balance=100, amount=50 -> balance=50. If T2 debited first, T1 would see 50 and skip -- but timing makes outcomes non-deterministic. **Solution**: Use a mutex or CAS.

### Q2: Is this thread-safe?


```cpp
std::vector<int> vec;
void add(int x) {
    if (vec.empty()) {
        vec.push_back(0);
    }
    vec.push_back(x);
}
```

**Answer**: No. `vector::push_back` is not thread-safe -- concurrent calls cause data corruption. Even the `empty()` check has a race. Use `std::mutex` for all accesses.

### Q3: Why is this lock incorrect?


```cpp
std::mutex mtx;
int data;
void update() {
    mtx.lock();
    data++;
    if (data == 10) {
        return;  // BUG -- forgot to unlock!
    }
    mtx.unlock();
}
```

**Answer**: Early return skips `unlock()`, causing deadlock on next call. Use `std::lock_guard` (RAII).

## 7.2 Spinlock vs Mutex

### Q1: When use spinlock instead of mutex?


**Answer**: In kernel interrupt handlers (where sleeping is not allowed) or for very short CS (~<2us) where context switch cost exceeds busy-wait. Examples: per-CPU variable protection, device register update.

### Q2: 100ms CS with 50 threads contending on spinlock?


**Answer**: 49 CPU cores waste 100ms spinning. Power spikes. Throughput collapses. **Design error** -- use blocking mutex.

### Q3: Overhead comparison


| Scenario | Spinlock | Mutex |
|----------|----------|-------|
| No contention | ~10-30 ns | ~25-50 ns |
| Light contention, short CS | ~1-10 us | ~5-20 us |
| Heavy contention, long CS | **Very high** | ~10-50 us per wake |

### Q4: What is a ticket lock?


**Answer**: Fair spinlock guaranteeing FIFO. Each thread takes a ticket number, waits until called.

```cpp
struct TicketLock {
    std::atomic<int> next_ticket{0};
    std::atomic<int> now_serving{0};

    void lock() {
        int my_ticket = next_ticket.fetch_add(1);
        while (now_serving.load() != my_ticket)
            std::this_thread::yield();
    }

    void unlock() {
        now_serving.fetch_add(1);
    }
};
```

## 7.3 Critical Section Solutions Comparison

| Solution | ME | Progress | Bounded Wait | Busy-Wait | Hardware | Blocking | N procs | Fairness | Real-world use |
|----------|:--:|:--------:|:------------:|:---------:|:--------:|:--------:|:-------:|:--------:|:--------------:|
| **Peterson** | Y | Y | Y (bound=1) | Y | None | No | 2 | Y | Educational |
| **Dekker** | Y | Y | Y | Y | None | No | 2 | Y | Historical |
| **TAS** | Y | Y | N (starves) | Y | Atomic RMW | No | N | N | Linux arch |
| **TTAS** | Y | Y | N (starves) | Y | Atomic RMW | No | N | N | Spin+backoff |
| **Ticket Lock** | Y | Y | Y (FIFO) | Y | Atomic RMW | No | N | **Y** | Linux pre-v5 |
| **MCS Lock** | Y | Y | Y | Y | Atomic RMW+qnode | No | N | Y | Linux v5+ |
| **Mutex (block)** | Y | Y | Y | N | OS scheduler | **Y** | N | Usually | Pthreads, Java |
| **Binary Sem** | Y | Y | Varies | N | OS scheduler | **Y** | N | Varies | Signaling |
| **CAS (lock-free)** | Y | Y | N (livelock) | N | CAS | No | N | N | Lock-free DS |
| **Monitor** | Y | Y | Y | N | Mutex+CV | **Y** | N | Usually | Java, C++, C# |

**Key insight**: Every solution trades off fairness, throughput, and complexity.

## 7.4 Common Synchronization Bugs

### Deadlock (4 Coffman Conditions)


1. **Mutual exclusion**: Resource held by one
2. **Hold and wait**: Holder waits for another resource
3. **No preemption**: Resource can't be taken away
4. **Circular wait**: Cycle of threads each waiting for next

### Livelock


Threads keep yielding to each other without progress. Like two people in a hallway who keep stepping the same direction.

### Priority Inversion


High-priority thread waits for low-priority thread holding a lock, while medium-priority threads preempt the low-priority holder.

**Real example**: Mars Pathfinder 1997 -- high-priority bus task blocked by low-priority meteo task holding mutex; medium-priority comms kept preempting. **Fixed with priority inheritance**.

### ABA Problem


Thread reads A, computes, CAS(A, C). Between read and CAS, another changed A->B->A. CAS succeeds but state is wrong.

**Solution**: Tagged pointers or version counters.
---

# UNIT 8: APPLICATIONS IN REAL SYSTEMS

## 8.1 Linux Kernel Spinlocks

The Linux kernel provides spinlocks for use in interrupt handlers and short critical sections.

```c
#include <linux/spinlock.h>

DEFINE_SPINLOCK(my_lock);

void example_function(void) {
    unsigned long flags;
    spin_lock_irqsave(&my_lock, flags);
    // Critical section -- safe from interrupt handlers on this CPU
    spin_unlock_irqrestore(&my_lock, flags);
}
```

### Variants


| Variant | Disables preemption? | Disables IRQs? | Used when |
|---------|:--------------------:|:--------------:|-----------|
| `spin_lock()` | Y | N | Process context, no IRQ sharing |
| `spin_lock_irq()` | Y | Y | Process context, shares with IRQ |
| `spin_lock_irqsave()` | Y | Y (saves state) | Same, but IRQs may already be off |
| `spin_lock_bh()` | Y | N (blocks softirqs) | Bottom-half context |

### Raw Spinlock (x86 asm)


```c
static __always_inline void arch_spin_lock(arch_spinlock_t *lock) {
    asm volatile(
        "1:  lock; btsl $0, %0\n"
        "    jnc  3f\n"
        "2:  testb $1, %0\n"
        "    jne  2b\n"
        "    jmp  1b\n"
        "3:\n"
        : "+m" (lock->slock) : : "memory"
    );
}
```

### MCS Lock (Linux v5+)


Linux migrated from ticket locks to MCS locks for scalability. Each spinning thread spins on its own local cache line.

```c
struct mcs_lock {
    struct mcs_node *tail;
};

struct mcs_node {
    struct mcs_node *next;
    int locked;
};

void mcs_lock(struct mcs_lock *lock, struct mcs_node *my_node) {
    my_node->next = NULL;
    my_node->locked = 1;
    struct mcs_node *prev = atomic_xchg(&lock->tail, my_node);
    if (prev != NULL) {
        prev->next = my_node;
        smp_mb();
        while (my_node->locked)
            cpu_relax();
    }
}
```

## 8.2 pthread Mutex Implementation (NPTL)

glibc's NPTL uses a hybrid: spin briefly, then block via futex.

```c
int __pthread_mutex_lock(pthread_mutex_t *mutex) {
    // Fast path: try atomic CAS in userspace
    if (atomic_compare_exchange(&mutex->__lock, 0, 1) == 0)
        return 0;  // Acquired -- no syscall!

    // Spin phase
    int spins = 0;
    while (spins < MAX_SPIN_COUNT) {
        if (atomic_compare_exchange(&mutex->__lock, 0, 1) == 0)
            return 0;
        spins++;
        cpu_relax();
    }

    // Block phase -- futex syscall
    atomic_fetch_add(&mutex->__lock, -1);
    do {
        futex_wait(&mutex->__lock, 0);
    } while (atomic_exchange(&mutex->__lock, 1) != 0);

    return 0;
}
```

### Linux Futex Design


Futex (Fast Userspace Mutex) avoids syscalls in the uncontended case:

```
1. Try atomic increment in userspace -- 99.9% case, ~10ns, NO syscall
2. If contended, call futex(FUTEX_WAIT) -- ONLY THEN enter kernel
3. Kernel puts thread to sleep on futex queue
4. On unlock, futex(FUTEX_WAKE) wakes one waiter
```

**Performance**: ~10ns uncontended, ~5-10us contended. Two-level design is critical.

## 8.3 Java Synchronization

```java
public class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }
}

// Java explicit locks
import java.util.concurrent.locks.ReentrantLock;
import java.util.concurrent.locks.Lock;

public class CounterWithLock {
    private final Lock lock = new ReentrantLock(true);
    private int count = 0;

    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }
}
```

## 8.4 Windows CRITICAL_SECTION

```cpp
#include <windows.h>

CRITICAL_SECTION cs;
InitializeCriticalSection(&cs);

EnterCriticalSection(&cs);
// Critical section
LeaveCriticalSection(&cs);

DeleteCriticalSection(&cs);
```

Windows critical sections use a two-level strategy similar to futexes.

## 8.5 Engineering Case Studies

### Case 1: Therac-25 Radiation Overdose (1985-1987)


**Root cause**: Race condition in concurrent task controlling electron beam. A flag was set and checked without synchronization, allowing the beam to fire at full power without target positioned.

**Lesson**: Life-critical systems need formal verification of synchronization.

### Case 2: Mars Pathfinder Priority Inversion (1997)


**Root cause**: Low-priority meteo task held mutex while high-priority bus task waited. Medium-priority comms tasks preempted the low-priority holder, making high-priority task miss its deadline. System reset.

**Fix**: Priority inheritance -- holder temporarily inherits the waiting thread's priority.

### Case 3: Northeast Blackout 2003


**Root cause**: Race condition in alarm logging system caused alarms to be lost during cascade. Operators were unaware of developing failure.

**Lesson**: Even "non-critical" sync errors have catastrophic consequences.

---

# UNIT 9: EXISTING EXAMPLES (RETAINED)

## 9.1 Race Condition Demonstration

```c
#include <stdio.h>
#include <pthread.h>

int counter = 0;

void *add_many(void *arg) {
    for (int i = 0; i < 1000000; i++)
        counter++;
    return NULL;
}

int main() {
    pthread_t t1, t2;
    pthread_create(&t1, NULL, add_many, NULL);
    pthread_create(&t2, NULL, add_many, NULL);
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);
    printf("Counter: %d (expected: 2000000)\n", counter);
    return 0;
}
```

## 9.2 Semaphore Resource Counter

```c
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

sem_t printers;

void *print_job(void *arg) {
    int id = *(int *)arg;
    printf("Job %d waiting for printer...\n", id);
    sem_wait(&printers);
    printf("Job %d printing...\n", id);
    sleep(2);
    printf("Job %d done.\n", id);
    sem_post(&printers);
    return NULL;
}

int main() {
    pthread_t jobs[10];
    int ids[10];
    sem_init(&printers, 0, 3);
    for (int i = 0; i < 10; i++) {
        ids[i] = i;
        pthread_create(&jobs[i], NULL, print_job, &ids[i]);
    }
    for (int i = 0; i < 10; i++)
        pthread_join(jobs[i], NULL);
    sem_destroy(&printers);
    return 0;
}
```

---

> [TIP]
> Peterson solution is the classic software-only approach to mutual exclusion, but it does not work on modern hardware that reorders instructions. Use **hardware primitives** (test-and-set, CAS) or **higher-level constructs** (mutex, semaphore) in real systems.

> [WARNING]
> **Spinlocks** (busy-waiting mutexes) waste CPU cycles. Only appropriate when the wait is expected to be short (e.g., in the kernel before a context switch). For longer waits, use a blocking mutex that yields the CPU.

> [NOTE]
> Three requirements for a valid critical section solution: **mutual exclusion** (only one process in CS), **progress** (no process outside CS blocks entry), and **bounded waiting** (no indefinite postponement).

---

# UNIT 10: REFERENCE TABLES

## 10.1 Concept Comparison

| Solution | Mutual Exclusion | Progress | Bounded Waiting | Busy-Waiting | N Processes | Fairness |
|---------|:----------------:|:--------:|:---------------:|:------------:|:-----------:|:--------:|
| Peterson | Yes | Yes | Yes | Yes | 2 only | Yes |
| Test-and-Set | Yes | Yes | No (may starve) | Yes | N | No |
| Compare-and-Swap | Yes | Yes | No | No (retry) | N | No |
| Mutex (blocking) | Yes | Yes | Yes | No | N | Yes |

## 10.2 Quick Reference

| Term | Definition |
|------|------------|
| **Race Condition** | Timing-dependent error from concurrent shared data access |
| **Data Race** | Unsynchronized concurrent memory access (C/C++ UB) |
| **Critical Section** | Code segment where shared data is accessed |
| **Mutual Exclusion** | No two processes simultaneously in critical section |
| **Progress** | If no process in CS, one wanting to enter will eventually enter |
| **Bounded Waiting** | Bound on entries by others after a process requests CS |
| **Spinlock** | Lock that busy-waits until acquired |
| **Mutex** | Lock that blocks (sleeps) the waiting thread |
| **Test-and-Set** | Atomic hardware instruction: read -> set to 1 -> return old |
| **Compare-and-Swap** | Atomic: if *p == exp, *p = new; returns old |
| **Semaphore** | Integer with wait(P)/signal(V) for resource counting |
| **Monitor** | High-level construct: mutex + condition variables + data |
| **Condition Variable** | Allows threads to wait for a specific condition |

## 10.3 Cross-Application Matrix

| Concept | Web Server | Database | Embedded System | Smartphone |
|--------|-----------|---------|-----------------|------------|
| Mutex | Protect connection pool | Buffer pool access | Shared peripheral registers | File system |
| Spinlock | Short critical sections | Log buffer writes | Interrupt handler sync | Graphics pipeline |
| Atomic Ops | Reference counting | Sequence generation | Flag setting | Lock-free queues |
| Semaphore | Worker thread pool | Connection pool limit | DMA buffer count | Camera buffer pool |
| Monitor | Request queue | Transaction manager | Device state machine | Audio pipeline |

---

### TypeScript Lock Implementation Simulator

The following TypeScript code implements Peterson's algorithm, test-and-set, ticket locks, and MCS locks with full race condition detection:

```typescript
/**
 * Synchronization Primitive Simulator
 * Implements: Peterson, Test-and-Set, Ticket Lock, MCS Lock, CAS
 */
class AtomicUtils {
  static testAndSet(lock: boolean[]): boolean {
    const old = lock[0];
    lock[0] = true;
    return old;
  }

  static compareAndSwap(ptr: number[], expected: number, newVal: number): boolean {
    if (ptr[0] === expected) {
      ptr[0] = newVal;
      return true;
    }
    return false;
  }

  static fetchAndAdd(ptr: number[], increment: number): number {
    const old = ptr[0];
    ptr[0] += increment;
    return old;
  }
}

class PetersonLock {
  private flag: boolean[] = [false, false];
  private turn: number = 0;

  lock(id: number): void {
    const other = id === 0 ? 1 : 0;
    this.flag[id] = true;
    this.turn = other;
    while (this.flag[other] && this.turn === other) {
      // Busy wait
    }
  }

  unlock(id: number): void {
    this.flag[id] = false;
  }
}

class TicketLock {
  private nextTicket: number[] = [0];
  private nowServing: number[] = [0];

  lock(): number {
    const myTicket = AtomicUtils.fetchAndAdd(this.nextTicket, 1);
    while (this.nowServing[0] !== myTicket) {
      // Busy wait — but fair (FIFO)
    }
    return myTicket;
  }

  unlock(): void {
    AtomicUtils.fetchAndAdd(this.nowServing, 1);
  }
}

class MCSLock {
  private tail: MCSNode | null = null;

  lock(node: MCSNode): void {
    node.next = null;
    node.locked = true;
    const prev = this.tail;
    this.tail = node;
    if (prev !== null) {
      prev.next = node;
      while (node.locked) {
        // Spin on local flag — cache-friendly
      }
    }
  }

  unlock(node: MCSNode): void {
    if (node.next === null) {
      if (this.tail === node) {
        this.tail = null;
        return;
      }
      while (node.next === null) {
        // Wait for successor to link
      }
    }
    node.next.locked = false;
    node.next = null;
  }
}

interface MCSNode {
  next: MCSNode | null;
  locked: boolean;
}

/**
 * Simulate race condition and fix with lock
 */
class CounterSimulator {
  private counter = 0;
  private lock = new TicketLock();
  private raceDetected = false;
  private log: string[] = [];

  async unsafeIncrement(threadId: number, iterations: number): Promise<void> {
    for (let i = 0; i < iterations; i++) {
      // Race: load, increment, store — no synchronization
      const val = this.counter;
      this.log.push(`Thread ${threadId}: read counter=${val}`);
      await new Promise(r => setImmediate(r)); // Forced context switch
      this.counter = val + 1;
    }
  }

  async safeIncrement(threadId: number, iterations: number): Promise<void> {
    for (let i = 0; i < iterations; i++) {
      this.lock.lock();
      this.counter++;
      this.lock.unlock();
    }
  }

  async compareRaceVsSafe(threads: number, iterations: number): Promise<string> {
    // Unsafe run
    this.counter = 0;
    const unsafePromises: Promise<void>[] = [];
    for (let t = 0; t < threads; t++) {
      unsafePromises.push(this.unsafeIncrement(t, iterations));
    }
    await Promise.all(unsafePromises);
    const unsafeResult = this.counter;
    const expected = threads * iterations;

    // Safe run
    this.counter = 0;
    const safePromises: Promise<void>[] = [];
    for (let t = 0; t < threads; t++) {
      safePromises.push(this.safeIncrement(t, iterations));
    }
    await Promise.all(safePromises);
    const safeResult = this.counter;

    return JSON.stringify({
      expected,
      unsafeResult,
      safeResult,
      raceDetected: unsafeResult !== expected,
      lostUpdates: expected - unsafeResult,
      lockPreventsRace: safeResult === expected
    }, null, 2);
  }
}

// Benchmark: spinlock vs mutex (simulated)
function benchmarkLocks(criticalSectionNs: number): string {
  const spinTime = criticalSectionNs < 2000
    ? criticalSectionNs * 1.1  // spinlock overhead ~10%
    : criticalSectionNs * 2.0; // spinlock wastes CPU

  const mutexTime = criticalSectionNs * 1.3; // mutex overhead ~30%
  // but spinlock burns CPU while waiting

  return JSON.stringify({
    criticalSectionNs,
    spinlockEffectiveNs: spinTime,
    mutexEffectiveNs: mutexTime,
    recommendation: criticalSectionNs < 2000 ? 'Use spinlock' : 'Use mutex'
  }, null, 2);
}

console.log('=== Race vs Lock Comparison ===');
const sim = new CounterSimulator();
console.log(await sim.compareRaceVsSafe(3, 100));

console.log('\n=== Lock Benchmark ===');
console.log(benchmarkLocks(100));   // Short CS → spinlock
console.log(benchmarkLocks(10000)); // Long CS → mutex
```

### Memory Barriers and Instruction Reordering


Modern CPUs and compilers reorder instructions for performance. This breaks Peterson's algorithm and naive lock implementations without memory barriers:

| Reordering Type | Effect | Example |
|----------------|--------|---------|
| **Compiler reordering** | Compiler rearranges code during optimization | Two writes to adjacent variables may be swapped |
| **CPU out-of-order** | CPU executes instructions in parallel, commits in order | Store buffer delays visibility |
| **Write-to-read reordering** | A later read can bypass an earlier write | Most common on x86 TSO |
| **Read-to-read reordering** | Reads can be reordered | Rare on x86, common on ARM/PowerPC |

**Memory barrier types:**
- `mfence` (x86): Full memory barrier — all loads/stores before fence complete before any after
- `lfence` (x86): Load barrier — all loads before fence complete before any after
- `sfence` (x86): Store barrier — all stores before fence complete before any after
- `dmb` (ARM): Data memory barrier
- `atomic_thread_fence(memory_order_seq_cst)` (C++): Sequential consistency fence

### Additional Chapter Quiz Questions


10. What is the key difference between a race condition and a data race?
    - a) They are the same thing
    - b) A race condition is a logic error; a data race is undefined behavior per the language memory model
    - c) Data races only occur in databases
    - d) Race conditions only occur with semaphores

11. Which synchronization primitive provides FIFO fairness?
    - a) Test-and-set lock
    - b) Ticket lock
    - c) Spinlock
    - d) Peterson's algorithm

12. On x86 CPUs, what memory barrier instruction ensures all previous loads and stores complete before any subsequent loads or stores?
    - a) `lfence`
    - b) `sfence`
    - c) `mfence`
    - d) `cpuid`

13. Which synchronization primitive spins on a per-thread local memory location rather than a shared location?
    - a) Test-and-set lock
    - b) Ticket lock
    - c) MCS lock
    - d) Spinlock

14. What problem does the ABA problem affect?
    - a) Mutex implementation
    - b) Lock-free data structures using CAS
    - c) Semaphore counting
    - d) Condition variable signaling

**Answers:** 10-b, 11-b, 12-c, 13-c, 14-b

### Additional Exercises


#### Basic
10. Use TypeScript to implement Peterson's solution for mutual exclusion between two async functions. Show that without proper memory barriers, the lock fails on weakly-ordered architectures.

#### Intermediate
11. Implement a **ticket lock** in TypeScript. Demonstrate that it provides FIFO fairness (bounded waiting) by creating 5 concurrent "threads" that each increment a shared counter 1000 times. Verify the final counter value equals 5000. Compare the implementation against a test-and-set lock that can starve threads.

#### Advanced
12. Implement a **lock-free stack** (Treiber stack) using compare-and-swap (CAS) semantics in TypeScript. Support `push(value)` and `pop()` operations. Handle the ABA problem by using a version counter (tagged pointer reference). Show that under concurrent access, the lock-free stack maintains correctness while a naive stack corrupted data.
13. Implement the **MCS lock** (Mellor-Crummey and Scott) in TypeScript. Unlike test-and-set, MCS spins on a per-thread local flag, avoiding cache-line contention. Show that MCS outperforms test-and-set under high contention (16+ threads) by measuring simulated cache misses.

## SUMMARY

- **Race conditions** happen when concurrent operations interleave incorrectly on shared data; they are logical errors distinct from **data races** (which are memory-model UB)
- The **critical section problem** must satisfy mutual exclusion, progress, and bounded waiting
- **Peterson's solution** demonstrates software-based synchronization but only works for 2 processes and fails on weakly-ordered CPUs
- Hardware provides **test-and-set** and **compare-and-swap** for atomic lock implementation; CAS enables lock-free programming
- **Spinlocks** busy-wait (good for short sections), while **mutexes** block (good for long sections)
- **Semaphores** generalize counting -- binary semaphores protect one resource, counting semaphores manage pools
- **Monitors** provide structured concurrency with condition variables; prefer Mesa semantics with while loops
- Real systems (Linux, NPTL) use hybrid approaches: spin briefly, then block
- Every synchronization construct is a **trade-off** between fairness, throughput, and complexity

---

## Exercises

### Basic


1. What is a race condition? Provide an example beyond counter increment.
2. Explain the three requirements for a solution to the critical section problem.
3. What is the difference between a mutex and a binary semaphore?

### Intermediate


4. Prove that Peterson's solution satisfies mutual exclusion, progress, and bounded waiting.
5. Implement a **ticket lock**, where each thread takes a number and waits until its number is called. Demonstrate that it provides FIFO fairness (bounded waiting).
6. Compare spinlocks and mutexes. Write a benchmark that measures the performance of each for a critical section that takes (a) 10ns, (b) 10us, (c) 10ms.

### Advanced


7. Implement a lock-free stack using compare-and-swap (CAS). The stack should support push() and pop() without locks. Handle the ABA problem.
8. The **Dekker algorithm** is another software-based two-process mutual exclusion solution from 1965. Implement it, prove its correctness, and compare it to Peterson's solution.
9. Implement a **reader-writer lock** using semaphores. Multiple readers should be able to access the shared data simultaneously, but writers must have exclusive access. Show that readers can starve writers in your implementation, then fix it.
