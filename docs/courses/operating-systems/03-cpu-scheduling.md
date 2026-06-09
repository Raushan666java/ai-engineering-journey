# Chapter 3 — CPU Scheduling

## Learning Objectives

1. Distinguish preemptive and non-preemptive scheduling.
2. Evaluate scheduling algorithms using turnaround time, waiting time, and response time.
3. Implement and compare FCFS, SJF, SRTF, Round Robin, and Priority scheduling.
4. Understand multilevel queue and multilevel feedback queue designs.
5. Describe the Linux O(1) and Completely Fair Scheduler (CFS) algorithms.

## 3.1 Scheduling Concepts

CPU scheduling is the mechanism by which the OS decides which ready process receives the CPU next. The **scheduler** (or short-term scheduler) selects a process from the ready queue and dispatches it. Scheduling decisions occur when a process:

1. Switches from running to waiting (e.g., I/O request).
2. Switches from running to ready (e.g., timer interrupt).
3. Switches from waiting to ready (e.g., I/O completion).
4. Terminates.

Cases 1 and 4 are **non-preemptive** — the process voluntarily gives up the CPU. Cases 2 and 3 are **preemptive** — the OS forcibly removes the process from the CPU.

## 3.2 Scheduling Criteria

| Criterion | Definition | Goal |
|-----------|------------|------|
| CPU utilisation | Fraction of time CPU is busy | Maximise |
| Throughput | Processes completed per unit time | Maximise |
| Turnaround time | Interval from submission to completion | Minimise |
| Waiting time | Total time spent in ready queue | Minimise |
| Response time | Time from submission to first CPU dispatch | Minimise |

## 3.3 First-Come, First-Served (FCFS)

The process that requests the CPU first is allocated the CPU first, implemented as a FIFO queue. FCFS is non-preemptive.

**Example**: Three processes with CPU bursts:

| Process | Burst (ms) |
|---------|------------|
| P1 | 24 |
| P2 | 3 |
| P3 | 3 |

If order is P1, P2, P3:

- P1 waiting = 0, turnaround = 24
- P2 waiting = 24, turnaround = 27
- P3 waiting = 27, turnaround = 30

Average waiting = (0 + 24 + 27) / 3 = 17 ms. Average turnaround = (24 + 27 + 30) / 3 = 27 ms.

**Convoy effect**: Short processes wait behind a long process, degrading average waiting time dramatically.

## 3.4 Shortest-Job-First (SJF)

The process with the smallest next CPU burst is scheduled next. SJF is provably optimal with respect to average waiting time for non-preemptive scheduling, but it requires predicting burst lengths.

### 3.4.1 Predicting Burst Length

Exponential averaging estimates the next burst:

```
τ_{n+1} = α · t_n + (1 − α) · τ_n
```

Where τ_n is the predicted burst, t_n is the actual nth burst, and α (0 ≤ α ≤ 1) controls the weight given to recent history. Common values are α = 0.5.

## 3.5 Shortest-Remaining-Time-First (SRTF)

SRTF is the preemptive variant of SJF. When a new process arrives with a burst smaller than the remaining time of the current process, the current process is preempted.

**Example**:

| Process | Arrival | Burst |
|---------|---------|-------|
| P1 | 0 | 8 |
| P2 | 1 | 4 |
| P3 | 2 | 9 |
| P4 | 3 | 5 |

At t=0: P1 runs. t=1: P2 arrives (burst 4 < remaining 7), so P1 is preempted. P2 runs. At t=5: P4 arrives (burst 5 > remaining 0 of P2 — actually P2 has finished at t=5). P4 runs next (burst 5 < remaining 7 of P1). SRTF produces average waiting time = ( (10−1−0) + (1−1) + (17−2) + (5−3) ) / 4 = 6.5 ms, which is optimal for preemptive scheduling.

## 3.6 Round Robin (RR)

Each process receives a fixed time quantum (typically 10–100 ms). If a process does not complete within its quantum, the timer interrupts and the process is moved to the tail of the ready queue.

**Example** (quantum = 4 ms, processes from §3.3):

| Time | Event |
|------|-------|
| 0 | P1 runs (4 ms elapsed, 20 remaining) |
| 4 | P2 runs (3 ms, finishes at 7) |
| 7 | P3 runs (3 ms, finishes at 10) |
| 10 | P1 runs (4 ms, 16 remaining) |
| 14 | P1 runs (4 ms, 12 remaining) |
| ... | continue until P1 finishes at t=30 |

Average waiting = ( (30−24) + (4−0) + (7−0) ) / 3 = 5.67 ms. Turnaround = (30 + (7−0) + (10−0)) / 3 = 15.67 ms.

The quantum size is critical: too large degenerates to FCFS; too small causes excessive context-switch overhead. Rule of thumb: quantum should be greater than the context-switch time by a factor of 100–1000.

## 3.7 Priority Scheduling

Each process is assigned a priority; the highest-priority (lowest number) process runs first. Priority scheduling may be preemptive or non-preemptive.

**Starvation**: Low-priority processes may never execute if high-priority processes arrive continuously. **Aging** gradually increases the priority of waiting processes to prevent starvation. For example, increment the priority by 1 for every 15 minutes spent in the ready queue.

## 3.8 Multilevel Queue Scheduling

The ready queue is partitioned into separate queues, each with its own scheduling algorithm. Tasks are permanently assigned to a queue based on their type (foreground interactive, background batch). The queues themselves are scheduled via fixed-priority preemption or time slicing between queues.

## 3.9 Multilevel Feedback Queue (MLFQ)

MLFQ generalises multilevel queuing by allowing processes to move between queues. A process that uses too much CPU is demoted to a lower-priority queue; a process that waits too long or displays interactive behaviour is promoted.

**Example** — Three queues:
- Q0: RR quantum = 8 ms, highest priority.
- Q1: RR quantum = 16 ms.
- Q2: FCFS, lowest priority.

New processes enter Q0. If a process does not finish within its Q0 quantum, it is moved to Q1. If it exceeds Q1's quantum, it drops to Q2. This ensures interactive jobs receive excellent response while CPU-bound jobs still make progress.

## 3.10 Linux Scheduling

### 3.10.1 O(1) Scheduler (Linux 2.6.0–2.6.22)

The O(1) scheduler maintained two priority arrays per CPU: the active array (processes with remaining time slice) and the expired array (processes whose time slice has been exhausted). When the active array emptied, the arrays were swapped — a constant-time operation. Priorities were recalculated once per epoch. The algorithm scaled to thousands of processes.

### 3.10.2 Completely Fair Scheduler (CFS) (Linux 2.6.23+)

CFS aims to give each process a fair share of the CPU. Instead of fixed time slices, CFS maintains a red-black tree keyed by **vruntime** (virtual runtime). The scheduler picks the process with the smallest vruntime.

The vruntime accounts for process priority and sleep time: lower nice values (higher priority) cause vruntime to advance more slowly. A sleeping process accumulates negative vruntime, ensuring it runs immediately when it wakes. CFS targets a **targeted latency** (default 6 ms) and scales the time slice by the number of active processes. A process that exceeds its time slice is preempted.

```c
// Conceptual CFS decision:
next = rb_first(&cfs_rq->tasks_timeline);
// next is the process with the minimum vruntime
```

## Summary

CPU scheduling aims to maximise utilisation and throughput while minimising waiting and response times. FCFS is simplest but suffers the convoy effect. SJF/SRTF are optimal but require burst prediction. Round Robin provides fairness via time quanta. MLFQ combines responsiveness with throughput and is used in many general-purpose systems. Linux CFS provides scalable, fair scheduling through vruntime accounting.

## Exercises

### Review Questions

1. What is the difference between preemptive and non-preemptive scheduling?
2. Why is the convoy effect a problem, and which algorithm is susceptible to it?
3. How does exponential averaging predict burst lengths? What does α close to 1 imply?
4. What is the effect of a very large quantum in Round Robin? A very small quantum?
5. How does the Linux CFS scheduler ensure fairness among processes?

### Application Problems

1. Given processes with arrival times and bursts — P1(0, 10), P2(0, 5), P3(5, 2) — compute the average waiting and turnaround times for FCFS, SJF, SRTF, and RR (quantum = 2).
2. Derive the average waiting time for the following set using MLFQ with 3 queues: Q0 (RR, q=5), Q1 (RR, q=10), Q2 (FCFS). New processes enter Q0. P1(0, 18), P2(1, 6), P3(2, 2).
3. In Round Robin with quantum q and n processes, what is the maximum time any process must wait for its first time quantum? Express your answer in terms of q and n.

### Challenge Problem

1. Implement a process scheduler simulator in C that reads a trace file (arrival_time, burst_time lines), simulates FCFS, SJF, SRTF, and RR scheduling, and outputs average waiting and turnaround times for each algorithm. Validate your output against hand-computed examples.
