# Chapter 3: CPU Scheduling

## Learning Objectives

- Distinguish between preemptive and non-preemptive scheduling
- Compute and compare scheduling criteria (turnaround, waiting, response time)
- Implement and analyze FCFS, SJF, Priority, and Round Robin algorithms
- Explain the priority inversion problem and its solutions
- Design multilevel queue and multilevel feedback queue schedulers
- Evaluate scheduling algorithms using Gantt charts and quantitative metrics

## Theory

### Basic Concepts

CPU scheduling is the foundation of multiprogramming. The **scheduler** selects among processes in the ready queue to allocate CPU time. Scheduling decisions happen when a process:

1. Switches from running to waiting (I/O request)
2. Switches from running to ready (interrupt)
3. Switches from waiting to ready (I/O completion)
4. Terminates

When scheduling only happens in cases 1 and 4, the algorithm is **non-preemptive**. Once a process gets the CPU, it keeps it until it voluntarily yields or terminates. Cases 2 and 3 require **preemptive** scheduling — the OS can forcibly remove the CPU from a process.

### Scheduling Criteria

| Metric | Definition | Target |
|--------|------------|--------|
| **CPU utilization** | Percentage of time CPU is busy | Maximize (40%–90% typical) |
| **Throughput** | Number of processes completed per time unit | Maximize |
| **Turnaround time** | Time from submission to completion | Minimize |
| **Waiting time** | Total time spent in ready queue | Minimize |
| **Response time** | Time from submission to first CPU response | Minimize (critical for interactive systems) |

### Scheduling Algorithms

#### First-Come, First-Served (FCFS)

The simplest algorithm. The process that requests the CPU first gets it first, implemented with a FIFO queue.

**Example**: Processes with burst times P1=24, P2=3, P3=3

```
Gantt chart:
|    P1    |  P2  |  P3  |
0          24    27     30

Average waiting time: (0 + 24 + 27) / 3 = 17ms
Average turnaround time: (24 + 27 + 30) / 3 = 27ms
```

**Convoy effect**: Short processes get stuck behind a long one, reducing CPU and device utilization.

#### Shortest-Job-First (SJF)

Associates each process with the length of its next CPU burst. When the CPU is available, it runs the process with the smallest next burst.

- **Non-preemptive**: Once a process gets the CPU, it runs to completion
- **Preemptive (SRTF)**: If a new process arrives with a shorter burst than the remaining time of the current process, preempt

SJF is **optimal** — it minimizes average waiting time. But it requires knowing the next burst length in advance, which is impossible. Systems use **exponential averaging** to predict:

```
τₙ₊₁ = α · tₙ + (1 − α) · τₙ
```

Where τₙ₊₁ is the predicted next burst, tₙ is the actual last burst, and α controls how quickly the prediction adapts (typically 0.5).

#### Priority Scheduling

Each process has a priority (usually a small integer). The CPU is allocated to the highest-priority process.

- **Low number = high priority** (Unix convention: priority 0 is highest)
- Can be preemptive or non-preemptive
- **Starvation**: Low-priority processes may never execute
- **Aging**: Gradually increase the priority of waiting processes to prevent starvation

**Priority inversion**: A high-priority process is indirectly blocked by a low-priority process holding a needed lock. The classic fix is **priority inheritance** — the low-priority process temporarily inherits the high priority.

#### Round Robin (RR)

Built for time-sharing systems. Each process gets a fixed time quantum (10–100ms). When the quantum expires, the process is preempted and moved to the end of the ready queue.

```
Gantt chart with quantum = 4ms:
Processes: P1=24, P2=3, P3=3

| P1 | P2 | P3 | P1 | P1 | P1 | P1 | P1 |
0    4    7   10   14   18   22   26   30

Average waiting time: (6 + 4 + 7) / 3 = 5.67ms
```

**Quantum trade-off**:
- Too large: Degrades to FCFS
- Too small: Too many context switches (overhead)

Context switches are not free. Each switch costs 1–10μs. If quantum = 4ms and switch = 0.1ms, overhead = 0.1/4.1 = 2.4%.

```
Optimal: quantum should be slightly larger than the typical context switch time
but small enough to provide good response time.
```

#### Multilevel Queue

The ready queue is partitioned into separate queues, each with its own scheduling algorithm. Processes are permanently assigned to a queue based on type (system processes, interactive, batch).

```
High priority ┌──────────────────────┐
              │  Queue 1 (System)    │  RR (q = 8ms)
              ├──────────────────────┤
              │  Queue 2 (Interactive)│  RR (q = 16ms)
              ├──────────────────────┤
              │  Queue 3 (Batch)     │  FCFS
Low priority  └──────────────────────┘
```

Scheduling between queues: **fixed-priority** (serve all of Queue 1 first) or **time-slice** (allocate 80% CPU to Queue 1, 20% to Queue 2).

#### Multilevel Feedback Queue

Like multilevel queue, but processes **can move between queues**. This allows the scheduler to learn process behavior over time.

**Example (3 queues)**:
- Q1 — RR, quantum = 8ms, highest priority
- Q2 — RR, quantum = 16ms
- Q3 — FCFS, lowest priority

**Rules**:
1. A new process enters Q1
2. If a process in Q1 does not finish in its quantum, it is moved to Q2
3. If a process in Q2 does not finish in its quantum, it is moved to Q3
4. A higher-priority queue is always served first; lower queues only run when higher queues are empty

This is the general approach used by Linux, BSD, and other modern OS. It rewards short CPU bursts (interactive processes stay in Q1) while still completing long-running background jobs.

### Evaluating Scheduling Algorithms

**Deterministic modeling**: Compute metrics for a fixed workload. Useful for comparing algorithms on the same input.

**Queueing models**: Treat the system as a network of queues. Use Little's law: `n = λ × W` (average queue length = arrival rate × average wait time).

**Simulation**: Program a model of the system and run it against representative workloads.

### Real-World Schedulers

| System | Scheduler | Key Characteristics |
|--------|-----------|---------------------|
| Linux (CFS) | Completely Fair Scheduler | Red-black tree, target latency, virtual runtime |
| Linux (O(1)) | O(1) Scheduler (2.6.0–2.6.22) | Two arrays (active/expired), fixed time slices |
| Windows NT | Priority-driven, 32 levels | Variable quantum (6–18 ticks), priority boost |
| macOS/XNU | Multi-level feedback + CFS | Combination of BSD and Mach scheduling |

## Examples

### Example 1: FCFS vs RR — Quantitative Comparison

```
Processes:
  P1: burst = 10, arrival = 0
  P2: burst = 5,  arrival = 0
  P3: burst = 2,  arrival = 0

FCFS:
  Gantt:  | P1 |  P2  |  P3  |
  Times:  0    10    15     17
  Waiting: P1=0, P2=10, P3=15 → Average = 8.33
  Turnaround: P1=10, P2=15, P3=17 → Average = 14.0

RR (q=5):
  Gantt:  | P1 | P2 | P3 | P1 |
  Times:  0    5   10   12   17
  Waiting: P1=2, P2=0, P3=5 → Average = 2.33
  Turnaround: P1=12, P2=10, P3=7 → Average = 9.67
```

### Example 2: Priority Inversion

```c
// Pseudocode illustrating priority inversion
// P_high (priority 10), P_med (priority 20), P_low (priority 30)

// 1. P_low acquires lock L
// 2. P_high preempts P_low
// 3. P_high tries to acquire lock L → blocked
// 4. P_med (medium priority) runs, preventing P_low from releasing L
// 5. P_high is blocked indefinitely by P_med

// Solution: Priority inheritance
// When P_low holds L and P_high needs L, P_low inherits P_high's priority
// This prevents P_med from running until P_low releases L
```

### Example 3: Predicting CPU Burst Length

```c
#include <stdio.h>

#define ALPHA 0.5

double predict(double prev_guess, int actual_burst) {
    return ALPHA * actual_burst + (1 - ALPHA) * prev_guess;
}

int main() {
    double predicted = 10.0;  // initial guess
    int actual[] = {6, 4, 6, 4, 13, 13, 13, 13};

    printf("Initial predicted: %.2f\n", predicted);

    for (int i = 0; i < 8; i++) {
        predicted = predict(predicted, actual[i]);
        printf("Actual: %d, Next predicted: %.2f\n", actual[i], predicted);
    }

    return 0;
}
```

## Summary

- CPU scheduling decides which ready process gets the CPU next
- Preemptive scheduling can interrupt a process; non-preemptive waits for voluntary yield
- FCFS is simple but suffers from the convoy effect
- SJF minimizes average waiting time but requires burst prediction
- Round Robin provides good response time for interactive workloads; quantum size is critical
- Priority scheduling can starve low-priority processes without aging
- Multilevel Feedback Queue is the most flexible — it adapts to process behavior
- Scheduling is about trade-offs: throughput vs fairness vs response time vs overhead

## Exercises

### Basic

1. Draw Gantt charts for FCFS, SJF (non-preemptive), and RR (q=3) given: P1=8, P2=4, P3=9, P4=5 (all arrive at time 0). Compute average waiting and turnaround times.
2. What is the convoy effect? Give a concrete example with three processes.
3. Why can't SJF be implemented exactly in practice? How do real systems approximate it?

### Intermediate

4. Consider the priority inversion scenario described above. Implement it in C using POSIX threads and mutexes. Verify that P_high is blocked. Then implement priority inheritance using `pthread_mutexattr_setprotocol` with `PTHREAD_PRIO_INHERIT` and show the difference.
5. Design a scheduling algorithm that guarantees no process waits longer than some maximum time. What data structure supports this? Explain using the concept of **fairness**.
6. A system has 10 I/O-bound processes (burst = 2ms, then 10ms I/O) and 1 CPU-bound process (burst = 50ms). Compute CPU utilization for RR quanta of 1ms, 10ms, and 50ms.

### Advanced

7. Implement a discrete-event simulator for CPU scheduling. Your program should read a list of (arrival_time, burst_time) pairs and output Gantt charts, average waiting time, and average turnaround time for FCFS, SJF (preemptive), Priority, and RR.
8. The completely fair scheduler (CFS) in Linux uses a **red-black tree** keyed by **virtual runtime** (`vruntime`). Explain why a red-black tree is used instead of a simple priority queue. What operations must be O(log n) or better?
9. Write a kernel module (or pseudo-code) that collects per-process scheduling statistics — number of context switches, time in ready queue, CPU burst lengths — and exposes them via `/proc/sched_stats`. What fields would you include in `task_struct`?
