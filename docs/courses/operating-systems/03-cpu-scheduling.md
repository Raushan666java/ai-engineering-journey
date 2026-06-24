# Chapter 3: CPU Scheduling

**<< [Processes](./02-processes.md)** | [**Next: Threads**](./04-threads.md) >>

---

## Learning Objectives

- Distinguish between preemptive and non-preemptive scheduling
- Compute and compare scheduling criteria (turnaround, waiting, response time)
- Implement and analyze FCFS, SJF, Priority, and Round Robin algorithms
- Explain the priority inversion problem and its solutions
- Design multilevel queue and multilevel feedback queue schedulers
- Evaluate scheduling algorithms using Gantt charts and quantitative metrics

---

## Why CPU Scheduling Matters

Imagine you are the sole cashier at a busy supermarket. There is one checkout counter (the CPU) and a line of customers (processes). Each customer has a basket with a different number of items (CPU burst length). One customer has 24 items. Another has 3. A third has 3.

**Which customer do you serve next?**

- If you serve the first person who lined up (FCFS), the customers with 3 items each wait while the 24-item customer checks out first — they get frustrated and may leave.
- If you always pick the customer with the fewest items (SJF), the small-basket customers leave happy, but the large-basket customer might wait indefinitely.
- If you give each customer 30 seconds of service and then rotate (Round Robin), everyone makes progress, but you spend extra time switching between customers (context-switch overhead).
- If VIP customers jump the queue (Priority), regular customers may starve.

This is **CPU scheduling** in a nutshell: deciding which ready process gets the CPU next. A good scheduler balances **throughput** (customers served per hour), **fairness** (nobody waits too long), **response time** (how fast the first item is scanned), and **overhead** (time spent switching between customers).

Without CPU scheduling, a system would run processes one after another — a long CPU-bound process would block interactive tasks until it finished. That worked in the batch-processing era, but modern systems run hundreds of processes concurrently. The scheduler makes multitasking possible.

---

## Chapter at a Glance

| Topic | Key Points |
|-------|------------|
| **Scheduling Criteria** | CPU utilization, throughput, turnaround time, waiting time, response time |
| **FCFS** | Non-preemptive; simple but convoy effect; average waiting time can be high |
| **SJF** | Optimal avg. waiting time; impractical without knowing future CPU bursts |
| **SRTF** | Preemptive SJF; optimal but more context switches |
| **Priority Scheduling** | Can cause indefinite blocking (starvation); aging solves it |
| **Round Robin** | Preemptive; time quantum determines performance — too large => FCFS, too small => overhead |
| **Multilevel Queue** | Processes partitioned into queues with different scheduling policies |
| **MLFQ** | Processes move between queues; adapts to behavior |

---

## Chapter Roadmap

<div class="mermaid">
flowchart LR
    A[Scheduling Basics] --> B[Scheduling Criteria]
    B --> C[FCFS]
    B --> D[SJF / SRTF]
    B --> E[Priority Scheduling]
    B --> F[Round Robin]
    F --> G[Multilevel Queue / Feedback]
    G --> H[Evaluation & Examples]
    H --> I[Real-World Schedulers]
</div>

---

## Theory

### Basic Concepts

CPU scheduling is the foundation of multiprogramming. The **scheduler** selects among processes in the ready queue to allocate CPU time. Scheduling decisions happen when a process:

1. Switches from running to waiting (I/O request)
2. Switches from running to ready (interrupt)
3. Switches from waiting to ready (I/O completion)
4. Terminates

When scheduling only happens in cases 1 and 4, the algorithm is **non-preemptive**. Once a process gets the CPU, it keeps it until it voluntarily yields or terminates. Cases 2 and 3 require **preemptive** scheduling — the OS can forcibly remove the CPU from a process.

**Dispatcher** is the module that gives control of the CPU to the process selected by the scheduler. Its work includes:
- Switching context (saving/restoring registers)
- Switching to user mode
- Jumping to the proper location in the program

**Dispatch latency** — the time the dispatcher takes to stop one process and start another — must be minimized (typically less than 10 microseconds).

### Scheduling Criteria

| Metric | Definition | Formula | Target |
|--------|------------|---------|--------|
| **CPU utilization** | Percentage of time CPU is busy | (Busy time / Total time) x 100 | Maximize (40-90% typical) |
| **Throughput** | Number of processes completed per time unit | Completed processes / Time | Maximize |
| **Turnaround time** | Time from submission to completion | Completion time - Arrival time | Minimize |
| **Waiting time** | Total time spent in ready queue | Sum of periods waiting in ready queue | Minimize |
| **Response time** | Time from submission to first CPU response | First start time - Arrival time | Minimize (critical for interactive systems) |

**Key insight**: Turnaround time includes all execution time (CPU + I/O). Waiting time measures only the time spent waiting in the ready queue — NOT including time actually running on CPU or doing I/O.

---

### Scheduling Algorithms

---

#### 1. First-Come, First-Served (FCFS)

##### Real-World Analogy

A single queue at a bank teller. Customers join the back of the line. The teller serves the person at the front, one at a time, until each transaction is fully complete. No interruptions — the teller never stops mid-transaction to serve someone else.

##### Algorithm Steps

1. All processes are added to the ready queue in order of their arrival time
2. The scheduler picks the process at the head of the ready queue
3. The chosen process runs to completion (non-preemptive — it holds the CPU until it terminates or performs I/O)
4. On completion, the process is removed from the queue
5. The scheduler picks the new head of the ready queue
6. Repeat from step 2 until the ready queue is empty

##### Pseudocode

```
FUNCTION FCFS_Scheduling(processes[]):
    // processes: array of (id, arrival_time, burst_time)
    SORT processes by arrival_time ASC

    current_time = 0
    FOR each process p IN processes:
        IF current_time < p.arrival_time:
            current_time = p.arrival_time

        p.start_time = current_time
        p.completion_time = current_time + p.burst_time
        p.turnaround_time = p.completion_time - p.arrival_time
        p.waiting_time = p.start_time - p.arrival_time

        current_time = p.completion_time

    RETURN processes WITH computed times
```

##### Dry Run — Step-by-Step Trace

**Workload**: Three processes, all arrive at time 0.

| Process | Arrival | Burst |
|---------|---------|-------|
| P1 | 0 | 24 |
| P2 | 0 | 3 |
| P3 | 0 | 3 |

**Gantt Chart**:

```
|       P1       |  P2  |  P3  |
0                24    27     30
```

**Trace Table**:

| Process | Arrival | Burst | Start | End | Waiting | Turnaround |
|---------|---------|-------|-------|-----|---------|------------|
| P1 | 0 | 24 | 0 | 24 | 0 | 24 |
| P2 | 0 | 3 | 24 | 27 | 24 | 27 |
| P3 | 0 | 3 | 27 | 30 | 27 | 30 |

**Calculations**:
- Average waiting time = (0 + 24 + 27) / 3 = **17 ms**
- Average turnaround time = (24 + 27 + 30) / 3 = **27 ms**

**Second Workload** (showing arrival-time gaps):

| Process | Arrival | Burst |
|---------|---------|-------|
| P1 | 0 | 5 |
| P2 | 2 | 3 |
| P3 | 4 | 2 |

**Gantt Chart**:

```
|   P1   |  P2  |  P3  |
0        5      8     10
```

**Trace Table**:

| Process | Arrival | Burst | Start | End | Waiting | Turnaround |
|---------|---------|-------|-------|-----|---------|------------|
| P1 | 0 | 5 | 0 | 5 | 0 | 5 |
| P2 | 2 | 3 | 5 | 8 | 3 | 6 |
| P3 | 4 | 2 | 8 | 10 | 4 | 6 |

**Calculations**:
- Average waiting time = (0 + 3 + 4) / 3 = **2.33 ms**
- Average turnaround time = (5 + 6 + 6) / 3 = **5.67 ms**

##### C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>
using namespace std;

struct Process {
    int id, arrival, burst, start, completion, waiting, turnaround;
};

void fcfs(vector<Process>& processes) {
    sort(processes.begin(), processes.end(),
         [](const Process& a, const Process& b) {
             return a.arrival < b.arrival;
         });

    int time = 0;
    for (auto& p : processes) {
        if (time < p.arrival)
            time = p.arrival;
        p.start = time;
        p.completion = time + p.burst;
        p.turnaround = p.completion - p.arrival;
        p.waiting = p.start - p.arrival;
        time = p.completion;
    }
}

int main() {
    vector<Process> procs = {
        {1, 0, 24}, {2, 0, 3}, {3, 0, 3}
    };

    fcfs(procs);

    cout << left << setw(10) << "Process"
         << setw(10) << "Arrival" << setw(10) << "Burst"
         << setw(10) << "Start" << setw(10) << "End"
         << setw(10) << "Wait" << setw(12) << "Turnaround\n";
    cout << string(72, '-') << endl;

    double avg_wait = 0, avg_turn = 0;
    for (auto& p : procs) {
        cout << setw(10) << ("P" + to_string(p.id))
             << setw(10) << p.arrival << setw(10) << p.burst
             << setw(10) << p.start << setw(10) << p.completion
             << setw(10) << p.waiting << setw(12) << p.turnaround << endl;
        avg_wait += p.waiting;
        avg_turn += p.turnaround;
    }

    cout << "\nAverage Waiting Time: " << (avg_wait / procs.size()) << " ms\n";
    cout << "Average Turnaround Time: " << (avg_turn / procs.size()) << " ms\n";
    return 0;
}
```

##### Python Implementation

```python
class Process:
    def __init__(self, pid, arrival, burst):
        self.pid = pid
        self.arrival = arrival
        self.burst = burst
        self.start = 0
        self.completion = 0
        self.waiting = 0
        self.turnaround = 0

def fcfs(processes):
    processes.sort(key=lambda p: p.arrival)
    time = 0
    for p in processes:
        if time < p.arrival:
            time = p.arrival
        p.start = time
        p.completion = time + p.burst
        p.turnaround = p.completion - p.arrival
        p.waiting = p.start - p.arrival
        time = p.completion

def print_results(processes):
    print(f"{'Process':<10}{'Arrival':<10}{'Burst':<10}{'Start':<10}"
          f"{'End':<10}{'Wait':<10}{'Turnaround':<12}")
    print("-" * 72)
    for p in processes:
        print(f"{f'P{p.pid}':<10}{p.arrival:<10}{p.burst:<10}{p.start:<10}"
              f"{p.completion:<10}{p.waiting:<10}{p.turnaround:<12}")
    avg_wait = sum(p.waiting for p in processes) / len(processes)
    avg_turn = sum(p.turnaround for p in processes) / len(processes)
    print(f"\nAverage Waiting Time: {avg_wait:.2f} ms")
    print(f"Average Turnaround Time: {avg_turn:.2f} ms")

if __name__ == "__main__":
    procs = [Process(1, 0, 24), Process(2, 0, 3), Process(3, 0, 3)]
    fcfs(procs)
    print_results(procs)
```

##### Complexity Analysis

| Resource | Complexity | Why |
|----------|-----------|-----|
| **Time (worst)** | O(n log n) | Sorting processes by arrival time dominates when arrivals are unsorted |
| **Time (best)** | O(n) | If already sorted by arrival, one linear pass suffices |
| **Space** | O(n) | Storing the process table of n entries |

**Why O(n log n)?** The sorting step requires comparison-based sorting, which has a known lower bound of Omega(n log n). The scheduling loop itself is pure O(n) — one pass, constant work per process. Without sorting, the algorithm is O(n).

**Why not O(1)?** We must examine every process at least once to compute its times. Since there are n processes, the lower bound is Omega(n).

##### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Simplest scheduling algorithm to implement | **Convoy effect**: short processes wait behind a long one |
| Fair in the order of arrival (no bias) | Average waiting time is generally poor |
| Minimal scheduling overhead (no preemption timers) | Not suitable for time-sharing / interactive systems |
| Every process runs to completion (predictable) | Low CPU and device utilization in mixed workloads |
| No starvation — every process eventually executes | Response time is terrible for late-arriving short jobs |
| Intuitive for developers and users | Non-preemptive — a long process blocks everyone |

##### Edge Cases

1. **All processes arrive at same time**: Executes in input/process-ID order. Works correctly — no special handling needed.

2. **Starvation**: Does **not** occur in FCFS. Every process moves deterministically toward the head of the queue. Guaranteed finite waiting time.

3. **Zero-burst process**: A process with burst = 0 completes immediately. Start = arrival, waiting = 0, turnaround = 0. The next process inherits the same start time.

4. **CPU-bound + I/O-bound mixed workloads**: A CPU-bound process with burst 100 ms followed by ten I/O-bound processes with bursts of 2 ms each. The I/O-bound processes each wait (100, 102, 104, ...) ms — I/O devices are idle during the entire CPU burst. This is the **convoy effect** and it severely degrades device utilization.

5. **Late arrivals**: If a long process (burst 10) arrives at time 0 and a short process (burst 1) arrives at time 1, the short process waits 9 ms. In SJF, it would start almost immediately.


#### 2. Shortest-Job-First (SJF) — Non-Preemptive

##### Real-World Analogy

The express checkout lane at a supermarket. The cashier scans the line and picks the customer with the fewest items — regardless of who arrived first. Customers with small baskets are served quickly. A customer with a full cart may wait a long time if people with smaller baskets keep arriving.

##### Algorithm Steps

1. When the CPU becomes available, scan the ready queue for the process with the smallest burst time
2. If multiple processes have the same burst time, use FCFS to break the tie
3. Run the selected process to completion (non-preemptive)
4. On termination, repeat from step 1
5. If a new process arrives while one is running, it joins the ready queue but does NOT preempt the running process

##### Pseudocode

```
FUNCTION SJF_NonPreemptive(processes[]):
    SORT processes by arrival_time ASC
    ready_queue = EMPTY
    completed = []
    current_time = 0
    index = 0
    n = LENGTH(processes)

    WHILE completed.size < n:
        // Add all arrived processes to ready queue
        WHILE index < n AND processes[index].arrival <= current_time:
            ADD processes[index] TO ready_queue
            index = index + 1

        IF ready_queue is EMPTY:
            current_time = processes[index].arrival
            CONTINUE

        // Select process with shortest burst
        SELECT p FROM ready_queue WITH MIN burst_time
        REMOVE p FROM ready_queue

        p.start_time = current_time
        p.completion_time = current_time + p.burst_time
        p.turnaround_time = p.completion_time - p.arrival_time
        p.waiting_time = p.start_time - p.arrival_time

        current_time = p.completion_time
        ADD p TO completed

    RETURN completed
```

##### Dry Run — Step-by-Step Trace

**Workload**: Different arrival times.

| Process | Arrival | Burst |
|---------|---------|-------|
| P1 | 0 | 6 |
| P2 | 2 | 8 |
| P3 | 3 | 7 |
| P4 | 5 | 3 |

**Gantt Chart**:

```
|  P1  |  P4  |  P3  |  P2  |
0      6     9     16     24
```

**Step-by-Step Logic**:

| Time | Event | Ready Queue | Decision |
|------|-------|------------|----------|
| 0 | P1 arrives, CPU idle | P1(6) | Run P1 (only choice) |
| 2 | P2 arrives | P2(8) | P1 still running (non-preemptive) |
| 3 | P3 arrives | P2(8), P3(7) | P1 still running |
| 5 | P4 arrives | P2(8), P3(7), P4(3) | P1 still running |
| 6 | P1 finishes | P2(8), P3(7), P4(3) | Pick P4 (shortest burst = 3) |
| 9 | P4 finishes | P2(8), P3(7) | Pick P3 (shortest burst = 7) |
| 16 | P3 finishes | P2(8) | Run P2 (only choice) |
| 24 | P2 finishes | — | All done |

**Trace Table**:

| Process | Arrival | Burst | Start | End | Waiting | Turnaround |
|---------|---------|-------|-------|-----|---------|------------|
| P1 | 0 | 6 | 0 | 6 | 0 | 6 |
| P2 | 2 | 8 | 16 | 24 | 14 | 22 |
| P3 | 3 | 7 | 9 | 16 | 6 | 13 |
| P4 | 5 | 3 | 6 | 9 | 1 | 4 |

**Calculations**:
- Average waiting time = (0 + 14 + 6 + 1) / 4 = **5.25 ms**
- Average turnaround time = (6 + 22 + 13 + 4) / 4 = **11.25 ms**

**FCFS comparison** (same workload): FCFS would order P1->P2->P3->P4 with waiting times (0, 6, 14, 21) = avg 10.25 ms. SJF reduces avg wait by nearly 50%.

##### C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
#include <iomanip>
using namespace std;

struct Process {
    int id, arrival, burst, start, completion, waiting, turnaround;
    bool done = false;
};

void sjf_nonpreemptive(vector<Process>& procs) {
    int n = procs.size(), completed = 0, time = 0;

    while (completed < n) {
        // Find shortest job among arrived processes
        int idx = -1, min_burst = INT_MAX;
        for (int i = 0; i < n; i++) {
            if (!procs[i].done && procs[i].arrival <= time && procs[i].burst < min_burst) {
                min_burst = procs[i].burst;
                idx = i;
            }
        }

        if (idx == -1) {
            time++; // idle — advance time
            continue;
        }

        procs[idx].start = time;
        procs[idx].completion = time + procs[idx].burst;
        procs[idx].turnaround = procs[idx].completion - procs[idx].arrival;
        procs[idx].waiting = procs[idx].start - procs[idx].arrival;
        time = procs[idx].completion;
        procs[idx].done = true;
        completed++;
    }
}

int main() {
    vector<Process> procs = {
        {1, 0, 6}, {2, 2, 8}, {3, 3, 7}, {4, 5, 3}
    };

    sjf_nonpreemptive(procs);

    cout << left << setw(10) << "Process" << setw(10) << "Arrival"
         << setw(10) << "Burst" << setw(10) << "Start" << setw(10) << "End"
         << setw(10) << "Wait" << setw(12) << "Turnaround\n";
    cout << string(72, '-') << endl;

    double avg_w = 0, avg_t = 0;
    for (auto& p : procs) {
        cout << setw(10) << ("P" + to_string(p.id))
             << setw(10) << p.arrival << setw(10) << p.burst
             << setw(10) << p.start << setw(10) << p.completion
             << setw(10) << p.waiting << setw(12) << p.turnaround << endl;
        avg_w += p.waiting;
        avg_t += p.turnaround;
    }
    cout << "\nAvg Waiting: " << (avg_w / procs.size()) << " ms\n";
    cout << "Avg Turnaround: " << (avg_t / procs.size()) << " ms\n";
    return 0;
}
```

##### Python Implementation

```python
class Process:
    def __init__(self, pid, arrival, burst):
        self.pid = pid
        self.arrival = arrival
        self.burst = burst
        self.start = 0
        self.completion = 0
        self.waiting = 0
        self.turnaround = 0
        self.done = False

def sjf_nonpreemptive(processes):
    n = len(processes)
    completed = 0
    time = 0

    while completed < n:
        idx = -1
        min_burst = float('inf')
        for i, p in enumerate(processes):
            if not p.done and p.arrival <= time and p.burst < min_burst:
                min_burst = p.burst
                idx = i

        if idx == -1:
            time += 1
            continue

        p = processes[idx]
        p.start = time
        p.completion = time + p.burst
        p.turnaround = p.completion - p.arrival
        p.waiting = p.start - p.arrival
        time = p.completion
        p.done = True
        completed += 1

if __name__ == "__main__":
    procs = [Process(1, 0, 6), Process(2, 2, 8),
             Process(3, 3, 7), Process(4, 5, 3)]
    sjf_nonpreemptive(procs)

    print(f"{'Process':<10}{'Arrival':<10}{'Burst':<10}{'Start':<10}"
          f"{'End':<10}{'Wait':<10}{'Turnaround':<12}")
    print("-" * 72)
    for p in procs:
        print(f"{f'P{p.pid}':<10}{p.arrival:<10}{p.burst:<10}{p.start:<10}"
              f"{p.completion:<10}{p.waiting:<10}{p.turnaround:<12}")
    avg_w = sum(p.waiting for p in procs) / len(procs)
    avg_t = sum(p.turnaround for p in procs) / len(procs)
    print(f"\nAvg Waiting: {avg_w:.2f} ms\nAvg Turnaround: {avg_t:.2f} ms")
```

##### Complexity Analysis

| Resource | Complexity | Why |
|----------|-----------|-----|
| **Time (worst)** | O(n^2) | Each of n iterations scans up to n processes to find the min burst |
| **Time (min-heap)** | O(n log n) | Using a min-heap (priority queue) for ready queue — O(log n) insert and extract-min |
| **Space** | O(n) | Process table + ready queue |

**Why O(n^2) in the simple approach?** The outer while loop runs n times (one per process). For each iteration, we scan all n processes to find the one with the shortest burst that has arrived. This gives O(n^2). Using a **min-heap** reduces this to O(n log n): each process is inserted once (O(log n)) and extracted once (O(log n)).

**Why O(n log n) is the lower bound?** SJF requires repeatedly finding the minimum element among dynamically arriving items — this is exactly what a priority queue provides. Sorting alone is insufficient because arrivals are interleaved with scheduling.

##### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Minimizes average waiting time (provably optimal for non-preemptive) | Requires knowing future CPU burst lengths — impossible in practice |
| Good for batch systems where job times are known | Long processes may starve if many short jobs keep arriving |
| Reduces turnaround time for short processes | Non-preemptive — a long-running short job blocks new short arrivals |
| Simple to understand and benchmark against | Tie-breaking (FCFS) affects fairness |

##### Edge Cases

1. **All arrive at time 0**: SJF degenerates to sorting by burst time. The shortest runs first. No differences from the general case.

2. **Starvation**: A process with a very long burst may be delayed indefinitely if shorter processes keep arriving. This is real starvation — the long process never gets CPU time.

3. **Zero-burst process**: Runs immediately when selected, completes instantly, yields the CPU. Functions correctly.

4. **Equal burst times**: The tie is broken by arrival order (FCFS). If both arrival and burst are equal, by process ID or insertion order.

5. **CPU-bound + I/O-bound**: I/O-bound processes (short CPU bursts) are favored — they get CPU quickly, do their I/O, return with another short burst, and get CPU again. CPU-bound processes are systematically penalized.

---

#### 3. Shortest Remaining Time First (SRTF) — Preemptive SJF

##### Real-World Analogy

A hospital emergency room triage system. When a new patient arrives, the doctor assesses both the new patient's and the current patient's remaining treatment time. If the new patient needs less time to treat, the doctor switches to the new patient — even if the current patient is mid-treatment. This minimizes the average time spent in the ER but causes frequent interruptions.

##### Algorithm Steps

1. When a process arrives or the CPU becomes idle, check all ready processes
2. Select the process with the **smallest remaining burst time**
3. If the running process is NOT the one with the smallest remaining time, preempt it
4. The preempted process goes back to the ready queue with its remaining time
5. Repeat at every arrival event

##### Pseudocode

```
FUNCTION SRTF(processes[]):
    SORT processes by arrival_time ASC
    remaining[i] = processes[i].burst_time
    completed = 0
    current_time = 0
    prev_process = -1

    WHILE completed < n:
        // Find process with smallest remaining time among those arrived
        idx = -1
        min_remaining = INFINITY
        FOR i = 0 TO n-1:
            IF processes[i].arrival <= current_time AND remaining[i] > 0:
                IF remaining[i] < min_remaining:
                    min_remaining = remaining[i]
                    idx = i

        IF idx == -1:
            current_time++
            CONTINUE

        // Preemption check happens naturally — we pick the shortest remaining
        IF idx != prev_process AND prev_process != -1:
            // Context switch occurs, record preemption
            MARK preemption at current_time

        // Execute one time unit (or until next arrival)
        RUN process idx for 1 unit (or until next arrival time)
        remaining[idx] = remaining[idx] - runtime
        current_time = current_time + runtime

        IF remaining[idx] == 0:
            completed++
            processes[idx].completion_time = current_time
            processes[idx].turnaround_time = current_time - processes[idx].arrival_time
            processes[idx].waiting_time = processes[idx].turnaround_time - processes[idx].burst_time
```

##### Dry Run — Step-by-Step Trace

**Workload**: Different arrival times to show preemption.

| Process | Arrival | Burst |
|---------|---------|-------|
| P1 | 0 | 8 |
| P2 | 1 | 4 |
| P3 | 2 | 9 |
| P4 | 3 | 5 |

**Gantt Chart**:

```
| P1 |  P2  |  P4  |  P1  |        P3        |
0    1     5     10    17                  26
```

**Step-by-Step Logic**:

| Time | Event | Ready Queue (remaining) | Decision |
|------|-------|------------------------|----------|
| 0 | P1 arrives | P1(8) | Run P1 |
| 1 | P2 arrives | P1(7), P2(4) | P2 has less remaining (4 < 7) — **preempt P1**, run P2 |
| 2 | P3 arrives | P1(7), P2(3), P3(9) | P2 still shortest (3) — continue P2 |
| 3 | P4 arrives | P1(7), P2(2), P3(9), P4(5) | P2 still shortest (2) — continue P2 |
| 5 | P2 finishes | P1(7), P3(9), P4(5) | P4 shortest (5) — run P4 |
| 10 | P4 finishes | P1(7), P3(9) | P1 shortest (7) — resume P1 |
| 17 | P1 finishes | P3(9) | Run P3 (only choice) |
| 26 | P3 finishes | — | All done |

**Trace Table**:

| Process | Arrival | Burst | Completion | Waiting | Turnaround |
|---------|---------|-------|-----------|---------|------------|
| P1 | 0 | 8 | 17 | 9 | 17 |
| P2 | 1 | 4 | 5 | 0 | 4 |
| P3 | 2 | 9 | 26 | 15 | 24 |
| P4 | 3 | 5 | 10 | 2 | 7 |

**Waiting time details**:
- P1 runs 0-1 (1 unit), preempted, resumes at 10, finishes at 17 → total wait = (10 − 1) = 9
- P2 arrives at 1, runs 1-5 → wait = 0
- P3 arrives at 2, runs 17-26 → wait = 15
- P4 arrives at 3, runs 5-10 → wait = 2

**Calculations**:
- Average waiting time = (9 + 0 + 15 + 2) / 4 = **6.5 ms**
- Average turnaround time = (17 + 4 + 24 + 7) / 4 = **13 ms**

##### C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <climits>
#include <iomanip>
using namespace std;

struct Process {
    int id, arrival, burst, remaining, completion, waiting, turnaround;
};

void srtf(vector<Process>& procs) {
    int n = procs.size(), completed = 0, time = 0;
    int prev = -1;

    for (auto& p : procs) p.remaining = p.burst;

    while (completed < n) {
        int idx = -1, min_rem = INT_MAX;
        for (int i = 0; i < n; i++) {
            if (procs[i].arrival <= time && procs[i].remaining > 0 && procs[i].remaining < min_rem) {
                min_rem = procs[i].remaining;
                idx = i;
            }
        }

        if (idx == -1) { time++; continue; }

        procs[idx].remaining--;
        time++;

        if (procs[idx].remaining == 0) {
            completed++;
            procs[idx].completion = time;
            procs[idx].turnaround = time - procs[idx].arrival;
            procs[idx].waiting = procs[idx].turnaround - procs[idx].burst;
        }
    }
}

int main() {
    vector<Process> procs = {
        {1, 0, 8}, {2, 1, 4}, {3, 2, 9}, {4, 3, 5}
    };

    srtf(procs);

    cout << left << setw(10) << "Process" << setw(10) << "Arrival"
         << setw(10) << "Burst" << setw(12) << "Completion"
         << setw(10) << "Wait" << setw(12) << "Turnaround\n";
    cout << string(64, '-') << endl;

    double avg_w = 0, avg_t = 0;
    for (auto& p : procs) {
        cout << setw(10) << ("P" + to_string(p.id))
             << setw(10) << p.arrival << setw(10) << p.burst
             << setw(12) << p.completion << setw(10) << p.waiting
             << setw(12) << p.turnaround << endl;
        avg_w += p.waiting;
        avg_t += p.turnaround;
    }
    cout << "\nAvg Waiting: " << (avg_w / procs.size()) << " ms\n";
    cout << "Avg Turnaround: " << (avg_t / procs.size()) << " ms\n";
    return 0;
}
```

##### Python Implementation

```python
class Process:
    def __init__(self, pid, arrival, burst):
        self.pid = pid
        self.arrival = arrival
        self.burst = burst
        self.remaining = burst
        self.completion = 0
        self.waiting = 0
        self.turnaround = 0

def srtf(processes):
    n = len(processes)
    completed = 0
    time = 0

    while completed < n:
        idx = -1
        min_rem = float('inf')
        for i, p in enumerate(processes):
            if p.arrival <= time and p.remaining > 0 and p.remaining < min_rem:
                min_rem = p.remaining
                idx = i

        if idx == -1:
            time += 1
            continue

        processes[idx].remaining -= 1
        time += 1

        if processes[idx].remaining == 0:
            completed += 1
            processes[idx].completion = time
            processes[idx].turnaround = time - processes[idx].arrival
            processes[idx].waiting = processes[idx].turnaround - processes[idx].burst

    return processes

if __name__ == "__main__":
    procs = [Process(1, 0, 8), Process(2, 1, 4),
             Process(3, 2, 9), Process(4, 3, 5)]
    srtf(procs)

    print(f"{'Process':<10}{'Arrival':<10}{'Burst':<10}"
          f"{'Complete':<12}{'Wait':<10}{'Turnaround':<12}")
    print("-" * 64)
    for p in procs:
        print(f"{f'P{p.pid}':<10}{p.arrival:<10}{p.burst:<10}"
              f"{p.completion:<12}{p.waiting:<10}{p.turnaround:<12}")
    avg_w = sum(p.waiting for p in procs) / len(procs)
    avg_t = sum(p.turnaround for p in procs) / len(procs)
    print(f"\nAvg Waiting: {avg_w:.2f} ms\nAvg Turnaround: {avg_t:.2f} ms")
```

##### Complexity Analysis

| Resource | Complexity | Why |
|----------|-----------|-----|
| **Time (worst)** | O(n * total_burst) | The time loop advances one unit at a time. If total CPU bursts = B, then O(n * B) scans in naive implementation |
| **Time (min-heap)** | O((n + B) log n) | Each arrival inserts into heap (O(log n)), each time unit extracts-min (O(log n)). Optimized: O(n log n) for n processes |
| **Space** | O(n) | Process table + priority queue |

**Why O((n + B) log n)?** In the naive implementation, we scan all n processes every time unit. If the total burst time across all processes is B, this is O(nB). With a min-heap keyed by remaining time, each arrival is one insert, and each preemption/finish is one extract-min. However, remaining time changes every time unit, which complicates heap usage — typically we only re-evaluate at arrival events.

**SRTF vs SJF**: SRTF is strictly better (lower avg waiting time) because preemption allows it to react to new short jobs immediately. SJF (non-preemptive) can get stuck running a medium-length job while a short one waits.

##### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Provably optimal average waiting time (best possible) | Must know or predict remaining burst times |
| Optimal average turnaround time | More context switches than SJF (overhead) |
| Reacts immediately to new short processes | Difficult to implement in practice |
| Good for interactive workloads with short bursts | Starvation for long processes (worse than SJF) |

##### Edge Cases

1. **All arrive at time 0**: Reduces to SJF (non-preemptive) since no arrivals trigger preemption. All processes are available at time 0, so the shortest runs first and no preemption occurs.

2. **Starvation**: Severe. If short processes keep arriving, a long process may be preempted repeatedly and never finish. This is worse than non-preemptive SJF because partial progress is wiped out each time.

3. **Zero-burst process**: Completes immediately upon being selected. Same as SJF.

4. **Equal remaining times**: If two processes have the same remaining time, FCFS among the ready processes. The running process keeps the CPU (no unnecessary preemption).

5. **Consecutive short arrivals**: With P1(burst=100), if 99 processes with burst=1 arrive one after another, P1 gets preempted 99 times and finishes last. Each preemption costs context-switch time.

---

#### 4. Round Robin (RR)

##### Real-World Analogy

A round-robin tournament in sports (e.g., tennis). Each player gets a turn to serve. After a fixed number of points (the quantum), the serve rotates to the next player. Nobody plays to completion in one sitting — everyone gets equal playing time in rotation. If your turn ends before you finish the game, you go to the back of the line and wait for your next turn.

##### Algorithm Steps

1. Maintain a circular FIFO queue of ready processes
2. Pick the process at the head of the queue
3. Run the process for at most **one time quantum** (typically 10-100 ms)
4. If the process finishes within the quantum, it is removed from the system
5. If the process does NOT finish within the quantum, preempt it and move it to the tail of the ready queue
6. Pick the new head of the queue and repeat

##### Pseudocode

```
FUNCTION RoundRobin(processes[], quantum):
    ready_queue = FIFO queue
    remaining[i] = processes[i].burst_time
    current_time = 0
    index = 0
    n = LENGTH(processes)
    completed = 0

    // Enqueue first process (arrival = 0)
    ADD processes[0] TO ready_queue
    index = 1

    WHILE completed < n:
        IF ready_queue is EMPTY:
            // CPU idle — fast-forward to next arrival
            current_time = processes[index].arrival
            ADD processes[index] TO ready_queue
            index++

        p = DEQUEUE(ready_queue)
        run_time = MIN(quantum, remaining[p.id])
        remaining[p.id] = remaining[p.id] - run_time
        current_time = current_time + run_time

        // Add newly arrived processes during this run
        WHILE index < n AND processes[index].arrival <= current_time:
            ADD processes[index] TO ready_queue
            index++

        IF remaining[p.id] == 0:
            // Process completed
            completed++
            p.completion_time = current_time
            p.turnaround_time = current_time - p.arrival_time
            p.waiting_time = p.turnaround_time - p.burst_time
        ELSE:
            // Process quantum expired, re-enqueue
            ADD p TO ready_queue

    RETURN processes WITH computed times
```

##### Dry Run — Step-by-Step Trace

**Workload**: Three processes, all arrive at time 0, quantum = 4 ms.

| Process | Arrival | Burst |
|---------|---------|-------|
| P1 | 0 | 24 |
| P2 | 0 | 3 |
| P3 | 0 | 3 |

**Gantt Chart**:

```
| P1 | P2 | P3 | P1 | P1 | P1 | P1 | P1 |
0    4    7   10   14   18   22   26   30
```

**Step-by-Step Logic**:

| Time | Process | Action | Remaining | Ready Queue |
|------|---------|--------|-----------|-------------|
| 0 | P1 | Runs for 4 ms | P1(20) | P2, P3 |
| 4 | P2 | Runs for 3 ms (finishes) | P2(0) | P3, P1 |
| 7 | P3 | Runs for 3 ms (finishes) | P3(0) | P1 |
| 10 | P1 | Runs for 4 ms | P1(16) | P1 |
| 14 | P1 | Runs for 4 ms | P1(12) | P1 |
| 18 | P1 | Runs for 4 ms | P1(8) | P1 |
| 22 | P1 | Runs for 4 ms | P1(4) | P1 |
| 26 | P1 | Runs for 4 ms (finishes) | P1(0) | — |
| 30 | — | All done | — | — |

**Trace Table**:

| Process | Arrival | Burst | Completion | Waiting | Turnaround |
|---------|---------|-------|-----------|---------|------------|
| P1 | 0 | 24 | 30 | 6 | 30 |
| P2 | 0 | 3 | 7 | 4 | 7 |
| P3 | 0 | 3 | 10 | 7 | 10 |

**Waiting time details**:
- P1: ran at 0-4, 10-14, 14-18, 18-22, 22-26, 26-30. Total run = 24. Total time = 30. Wait = 6.
- P2: ran at 4-7. Wait = 4 (queued at 0, ran at 4).
- P3: ran at 7-10. Wait = 7.

**Calculations**:
- Average waiting time = (6 + 4 + 7) / 3 = **5.67 ms**
- Average turnaround time = (30 + 7 + 10) / 3 = **15.67 ms**

**Compare with FCFS** (same workload): FCFS avg wait = 17, avg turnaround = 27. RR reduces waiting time by 67% for this mixed workload.

##### C++ Implementation

```cpp
#include <iostream>
#include <queue>
#include <vector>
#include <iomanip>
using namespace std;

struct Process {
    int id, arrival, burst, remaining, completion, waiting, turnaround;
};

void round_robin(vector<Process>& procs, int quantum) {
    int n = procs.size(), completed = 0, time = 0, idx = 0;
    queue<int> rq;

    for (auto& p : procs) p.remaining = p.burst;

    // Enqueue first process
    if (n > 0) rq.push(0);
    idx = 1;

    while (completed < n) {
        if (rq.empty()) {
            time = procs[idx].arrival;
            rq.push(idx++);
        }

        int i = rq.front(); rq.pop();
        int run = min(quantum, procs[i].remaining);
        procs[i].remaining -= run;
        time += run;

        // Enqueue newly arrived processes
        while (idx < n && procs[idx].arrival <= time) {
            rq.push(idx++);
        }

        if (procs[i].remaining == 0) {
            completed++;
            procs[i].completion = time;
            procs[i].turnaround = time - procs[i].arrival;
            procs[i].waiting = procs[i].turnaround - procs[i].burst;
        } else {
            rq.push(i);
        }
    }
}

int main() {
    vector<Process> procs = {
        {1, 0, 24}, {2, 0, 3}, {3, 0, 3}
    };
    int quantum = 4;

    round_robin(procs, quantum);

    cout << left << setw(10) << "Process" << setw(10) << "Arrival"
         << setw(10) << "Burst" << setw(12) << "Completion"
         << setw(10) << "Wait" << setw(12) << "Turnaround\n";
    cout << string(64, '-') << endl;

    double avg_w = 0, avg_t = 0;
    for (auto& p : procs) {
        cout << setw(10) << ("P" + to_string(p.id))
             << setw(10) << p.arrival << setw(10) << p.burst
             << setw(12) << p.completion << setw(10) << p.waiting
             << setw(12) << p.turnaround << endl;
        avg_w += p.waiting;
        avg_t += p.turnaround;
    }
    cout << "\nAvg Waiting: " << (avg_w / procs.size()) << " ms\n";
    cout << "Avg Turnaround: " << (avg_t / procs.size()) << " ms\n";
    cout << "Quantum used: " << quantum << " ms\n";
    return 0;
}
```

##### Python Implementation

```python
from collections import deque

class Process:
    def __init__(self, pid, arrival, burst):
        self.pid = pid
        self.arrival = arrival
        self.burst = burst
        self.remaining = burst
        self.completion = 0
        self.waiting = 0
        self.turnaround = 0

def round_robin(processes, quantum):
    n = len(processes)
    rq = deque()
    completed = 0
    time = 0
    idx = 0

    if n > 0:
        rq.append(0)
        idx = 1

    while completed < n:
        if not rq:
            time = processes[idx].arrival
            rq.append(idx)
            idx += 1

        i = rq.popleft()
        run = min(quantum, processes[i].remaining)
        processes[i].remaining -= run
        time += run

        while idx < n and processes[idx].arrival <= time:
            rq.append(idx)
            idx += 1

        if processes[i].remaining == 0:
            completed += 1
            processes[i].completion = time
            processes[i].turnaround = time - processes[i].arrival
            processes[i].waiting = processes[i].turnaround - processes[i].burst
        else:
            rq.append(i)

if __name__ == "__main__":
    procs = [Process(1, 0, 24), Process(2, 0, 3), Process(3, 0, 3)]
    round_robin(procs, quantum=4)

    print(f"{'Process':<10}{'Arrival':<10}{'Burst':<10}"
          f"{'Complete':<12}{'Wait':<10}{'Turnaround':<12}")
    print("-" * 64)
    for p in procs:
        print(f"{f'P{p.pid}':<10}{p.arrival:<10}{p.burst:<10}"
              f"{p.completion:<12}{p.waiting:<10}{p.turnaround:<12}")
    avg_w = sum(p.waiting for p in procs) / len(procs)
    avg_t = sum(p.turnaround for p in procs) / len(procs)
    print(f"\nAvg Waiting: {avg_w:.2f} ms")
    print(f"Avg Turnaround: {avg_t:.2f} ms")
    print(f"Quantum: 4 ms")
```

##### Complexity Analysis

| Resource | Complexity | Why |
|----------|-----------|-----|
| **Time** | O(n) | Each process is enqueued/dequeued at most once per quantum slice. Total operations proportional to number of context switches |
| **Space** | O(n) | Ready queue holds at most n processes |

**Why O(n)?** Each process is inserted into the ready queue at most once per time slice. The total number of queue operations is proportional to (total burst / quantum) + n. However, if we treat each enqueue as a unit operation, each of the n processes is enqueued roughly (burst / quantum) times. In the worst case with small quantum, this can be large. Practically, though, each quantum slice involves O(1) work (dequeue head, enqueue tail), giving O(n) relative to the number of processes for one full schedule.

**Why not O(1)?** We must still iterate through all processes to compute final statistics (completion, turnaround, waiting times). The actual scheduling loop is O(1) per context switch.

##### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Excellent response time for interactive processes | Average turnaround time is worse than SJF/SRTF |
| Fair — every process gets equal CPU share | Performance depends heavily on quantum size |
| No starvation (finite waiting time guaranteed) | Too many context switches if quantum is small |
| Simple to implement with a FIFO queue | Degrades to FCFS if quantum is too large |
| Best for time-sharing systems | Does not prioritize I/O-bound or interactive processes |

##### Quantum Trade-off Analysis

| Quantum | Behavior | Context Switches | Avg Turnaround |
|---------|----------|-----------------|----------------|
| Very large (e.g., 100 ms) | Near-FCFS behavior | Few | High for short jobs |
| Moderate (e.g., 10-20 ms) | Good interactivity | Moderate (2-5% overhead) | Balanced |
| Very small (e.g., 1 microsecond) | High responsiveness | Massive (90%+ overhead) | Terrible |

**Rule of thumb**: Quantum should be slightly larger than the typical context-switch time. If context switch = 0.1 ms and quantum = 4 ms, overhead = 0.1 / 4.1 = 2.4%. Most systems use quantum between 10 ms and 100 ms.

##### Edge Cases

1. **All arrive at time 0**: Standard case — every process gets one quantum in round-robin order. Works identically to described behavior.

2. **Starvation**: Does **not** occur in Round Robin. Every process gets a turn within a bounded number of context switches. Maximum wait time for any process is approximately (n - 1) * quantum.

3. **Zero-burst process**: Gets the CPU, runs 0 ms, completes instantly. No impact on schedule.

4. **Quantum = 0**: Degenerate case — infinite context switches, zero work done. Never used in practice.

5. **Quantum larger than all bursts**: RR degenerates to FCFS. No preemption occurs because every process finishes within its first quantum.

6. **Very short quantum**: If quantum approaches context-switch time, overhead dominates and throughput collapses. Example: quantum = 0.2 ms, context switch = 0.1 ms → 33% overhead.


#### 5. Priority Scheduling

##### Real-World Analogy

An airport boarding process. First-class passengers (highest priority) board first, regardless of when they arrived at the gate. Premium economy boards next, then economy. If a first-class passenger arrives late, they skip to the front of the line (preemptive priority). Without aging, economy passengers might never board if first-class passengers keep arriving.

##### Algorithm Steps

1. Each process is assigned a priority number (lower number = higher priority in Unix convention)
2. When the CPU is available, select the ready process with the highest priority
3. If preemptive: when a new higher-priority process arrives, preempt the running process
4. If non-preemptive: the running process keeps the CPU until it voluntarily yields
5. Use **aging** to prevent starvation: periodically increase the priority of waiting processes

##### Pseudocode (Preemptive)

```
FUNCTION Priority_Preemptive(processes[]):
    n = LENGTH(processes)
    remaining[i] = processes[i].burst_time
    completed = 0
    current_time = 0

    WHILE completed < n:
        // Find highest-priority process that has arrived
        idx = -1
        highest_priority = INFINITY   // lower number = higher priority
        FOR i = 0 TO n-1:
            IF processes[i].arrival <= current_time AND remaining[i] > 0:
                IF processes[i].priority < highest_priority:
                    highest_priority = processes[i].priority
                    idx = i

        IF idx == -1:
            current_time++
            CONTINUE

        // Run one time unit
        remaining[idx] = remaining[idx] - 1
        current_time = current_time + 1

        IF remaining[idx] == 0:
            completed++
            processes[idx].completion_time = current_time
            processes[idx].turnaround_time = current_time - processes[idx].arrival_time
            processes[idx].waiting_time = processes[idx].turnaround_time - processes[idx].burst_time
```

##### Dry Run — Step-by-Step Trace

| Process | Arrival | Burst | Priority (lower = higher) |
|---------|---------|-------|--------------------------|
| P1 | 0 | 10 | 3 |
| P2 | 0 | 5 | 1 |
| P3 | 2 | 2 | 2 |
| P4 | 3 | 1 | 1 |

**Preemptive Priority Gantt Chart**:

```
|  P2  |P4| P3  |     P1      |
0      5  6     8            18
```

**Step-by-Step Logic**:

| Time | Event | Ready Queue (priority) | Decision |
|------|-------|----------------------|----------|
| 0 | P1, P2 arrive | P1(3), P2(1) | P2 highest priority (1) |
| 2 | P3 arrives | P1(3), P2(rem 3), P3(2) | P2 still running (priority 1 < 2) |
| 3 | P4 arrives | P1(3), P2(rem 2), P3(2), P4(1) | P2 still has priority 1. P4 also priority 1, but P2 is running. Continue P2. |
| 5 | P2 finishes | P1(3), P3(2), P4(1) | P4 has highest priority (1) — run P4 |
| 6 | P4 finishes | P1(3), P3(2) | P3 has highest priority (2) — run P3 |
| 8 | P3 finishes | P1(3) | Run P1 (only choice) |
| 18 | P1 finishes | — | All done |

**Trace Table**:

| Process | Arrival | Burst | Priority | Completion | Waiting | Turnaround |
|---------|---------|-------|----------|-----------|---------|------------|
| P1 | 0 | 10 | 3 | 18 | 8 | 18 |
| P2 | 0 | 5 | 1 | 5 | 0 | 5 |
| P3 | 2 | 2 | 2 | 8 | 4 | 6 |
| P4 | 3 | 1 | 1 | 6 | 2 | 3 |

**Calculations**:
- Average waiting time = (8 + 0 + 4 + 2) / 4 = **3.5 ms**
- Average turnaround time = (18 + 5 + 6 + 3) / 4 = **8 ms**

**Non-Preemptive Priority** (same workload):
- Gantt: | P2 | P1 | P3 | P4 |
- Waiting: P1=0, P2=0, P3=8, P4=10
- Avg waiting = 4.5 ms (worse than preemptive because P4 waits for P1 to finish)

##### C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <climits>
#include <iomanip>
#include <algorithm>
using namespace std;

struct Process {
    int id, arrival, burst, priority, remaining, completion, waiting, turnaround;
};

void priority_preemptive(vector<Process>& procs) {
    int n = procs.size(), completed = 0, time = 0;
    for (auto& p : procs) p.remaining = p.burst;

    while (completed < n) {
        int idx = -1;
        int highest_prio = INT_MAX;

        for (int i = 0; i < n; i++) {
            if (procs[i].arrival <= time && procs[i].remaining > 0) {
                if (procs[i].priority < highest_prio) {
                    highest_prio = procs[i].priority;
                    idx = i;
                }
            }
        }

        if (idx == -1) { time++; continue; }

        procs[idx].remaining--;
        time++;

        if (procs[idx].remaining == 0) {
            completed++;
            procs[idx].completion = time;
            procs[idx].turnaround = time - procs[idx].arrival;
            procs[idx].waiting = procs[idx].turnaround - procs[idx].burst;
        }
    }
}

int main() {
    vector<Process> procs = {
        {1, 0, 10, 3}, {2, 0, 5, 1}, {3, 2, 2, 2}, {4, 3, 1, 1}
    };

    priority_preemptive(procs);

    cout << left << setw(10) << "Process" << setw(10) << "Arrival"
         << setw(10) << "Burst" << setw(10) << "Priority"
         << setw(12) << "Completion" << setw(10) << "Wait"
         << setw(12) << "Turnaround\n";
    cout << string(74, '-') << endl;

    double avg_w = 0, avg_t = 0;
    for (auto& p : procs) {
        cout << setw(10) << ("P" + to_string(p.id))
             << setw(10) << p.arrival << setw(10) << p.burst
             << setw(10) << p.priority << setw(12) << p.completion
             << setw(10) << p.waiting << setw(12) << p.turnaround << endl;
        avg_w += p.waiting;
        avg_t += p.turnaround;
    }
    cout << "\nAvg Waiting: " << (avg_w / procs.size()) << " ms\n";
    cout << "Avg Turnaround: " << (avg_t / procs.size()) << " ms\n";
    return 0;
}
```

##### Python Implementation

```python
class Process:
    def __init__(self, pid, arrival, burst, priority):
        self.pid = pid
        self.arrival = arrival
        self.burst = burst
        self.priority = priority
        self.remaining = burst
        self.completion = 0
        self.waiting = 0
        self.turnaround = 0

def priority_preemptive(processes):
    n = len(processes)
    completed = 0
    time = 0

    while completed < n:
        idx = -1
        highest = float('inf')

        for i, p in enumerate(processes):
            if p.arrival <= time and p.remaining > 0 and p.priority < highest:
                highest = p.priority
                idx = i

        if idx == -1:
            time += 1
            continue

        processes[idx].remaining -= 1
        time += 1

        if processes[idx].remaining == 0:
            completed += 1
            processes[idx].completion = time
            processes[idx].turnaround = time - processes[idx].arrival
            processes[idx].waiting = processes[idx].turnaround - processes[idx].burst

if __name__ == "__main__":
    procs = [
        Process(1, 0, 10, 3),
        Process(2, 0, 5, 1),
        Process(3, 2, 2, 2),
        Process(4, 3, 1, 1),
    ]
    priority_preemptive(procs)

    print(f"{'Process':<10}{'Arrival':<10}{'Burst':<10}{'Priority':<10}"
          f"{'Finish':<10}{'Wait':<10}{'Turnaround':<12}")
    print("-" * 72)
    for p in procs:
        print(f"{f'P{p.pid}':<10}{p.arrival:<10}{p.burst:<10}{p.priority:<10}"
              f"{p.completion:<10}{p.waiting:<10}{p.turnaround:<12}")
    avg_w = sum(p.waiting for p in procs) / len(procs)
    avg_t = sum(p.turnaround for p in procs) / len(procs)
    print(f"\nAvg Waiting: {avg_w:.2f} ms\nAvg Turnaround: {avg_t:.2f} ms")
```

##### Complexity Analysis

| Resource | Complexity | Why |
|----------|-----------|-----|
| **Time (naive)** | O(n * total_burst) | Scanning n processes every time unit in preemptive version |
| **Time (heap-optimized)** | O(n log n) | Priority queue gives O(log n) insert/extract per event |
| **Space** | O(n) | Process table + priority queue |

**Why O(n * total_burst) for naive preemptive?** Similar to SRTF — scanning all processes each time unit to find highest priority. With total burst B, this is O(nB). Using a heap keyed by priority reduces this significantly.

**Why use priority scheduling?** Priority scheduling is the foundation of nearly all real-world OS schedulers (Linux, Windows, macOS). Processes are assigned priorities based on their type and behavior — system daemons get high priority, background tasks get low priority. The key challenge is preventing starvation through **aging**.

##### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Supports priority-based execution (important for real-time systems) | **Starvation**: low-priority processes may never execute |
| Configurable — can be preemptive or non-preemptive | Priority inversion (high-priority blocked by low-priority holding a lock) |
| Reflects real-world importance of processes | Priority assignment is subjective and may lead to abuse |
| Can be combined with other algorithms (e.g., Priority + RR) | Aging adds complexity |

##### Aging

Aging is the solution to starvation in priority scheduling. It works by gradually increasing the priority of waiting processes over time.

```
WHILE process p is in ready queue:
    p.wait_time = current_time - p.arrival_time
    p.effective_priority = p.base_priority - (p.wait_time / aging_interval)

    // Every aging_interval time units, priority increases by 1
```

**Example**: A process with base priority 127 (very low). After 10 seconds of waiting, its effective priority becomes 117. After 100 seconds, priority 27. Eventually, it becomes the highest-priority process and runs.

##### Priority Inversion

**Problem**: A high-priority process H needs a resource held by a low-priority process L. L is preempted by medium-priority processes M, so L cannot release the resource. H is blocked indefinitely by M.

**Solution — Priority Inheritance**: When L holds a lock that H needs, L temporarily inherits H's priority. This prevents M from preempting L. Once L releases the lock, it returns to its original priority.

This was famously demonstrated on the **Mars Pathfinder** mission (1997), where priority inversion caused system resets. The VxWorks RTOS had priority inheritance enabled by default, but the relevant flag was accidentally cleared during testing.

##### Edge Cases

1. **All arrive at same time**: Processes execute in priority order. If priorities are equal, FCFS tiebreaks.

2. **Starvation**: The fundamental problem of priority scheduling. Without aging, a low-priority process may never run if higher-priority processes keep arriving.

3. **Zero-burst process**: Completes instantly regardless of priority. Correct behavior.

4. **Negative priorities**: Depends on convention. Lower = higher is the Unix convention (priority -20 is highest for `nice`). The algorithm must handle negative values correctly.

5. **Equal priorities**: Degenerates to FCFS (non-preemptive) or RR (if round-robin tiebreak is used). Many real systems use RR within equal-priority groups.

6. **Priority + RR**: Used in many real systems. Processes at the same priority level are scheduled using Round Robin. Different priority levels use strict priority scheduling.

---

#### 6. Multilevel Queue Scheduling

##### Real-World Analogy

An airport with separate security lanes. Lane 1 is for first-class and priority passengers (RR with short quantum — fast processing). Lane 2 is for families with small children (RR with longer quantum). Lane 3 is for general boarding (FCFS — slow but simple). Passengers never switch lanes — once assigned, you always use the same lane.

##### Algorithm Steps

1. Partition the ready queue into multiple separate queues, each with its own scheduling algorithm
2. Assign each process permanently to a queue based on its type (system, interactive, batch)
3. Schedule between queues using either:
   - **Fixed-priority scheduling**: Serve all of queue 1 first, then queue 2, etc.
   - **Time-slice scheduling**: Allocate a percentage of CPU time to each queue (e.g., 80% to foreground, 20% to background)
4. Within each queue, use the queue's own scheduling algorithm (RR, FCFS, etc.)

##### Queue Structure

```
High    +----------------------------------+
prio    |  Queue 1: System Processes       |  RR, q = 8 ms
        +----------------------------------+
        |  Queue 2: Interactive Processes  |  RR, q = 16 ms
        +----------------------------------+
        |  Queue 3: Batch Processes        |  FCFS
Low     +----------------------------------+
```

##### Pseudocode

```
FUNCTION MultilevelQueue(processes[]):
    // Initialize 3 queues
    q1 = FIFO queue  // system: RR quantum=8
    q2 = FIFO queue  // interactive: RR quantum=16
    q3 = FIFO queue  // batch: FCFS

    FOR each process p:
        IF p.type == SYSTEM:     ADD p TO q1
        IF p.type == INTERACTIVE: ADD p TO q2
        IF p.type == BATCH:      ADD p TO q3

    // Between-queue scheduling: fixed-priority
    WHILE processes remain:
        IF q1 NOT empty:
            Run RR(q1, quantum=8)
        ELSE IF q2 NOT empty:
            Run RR(q2, quantum=16)
        ELSE IF q3 NOT empty:
            Run FCFS(q3)
```

##### Complexity Analysis

| Resource | Complexity | Why |
|----------|-----------|-----|
| **Time** | O(n * scheduling) | Dominated by the scheduling algorithm used within each queue |
| **Space** | O(n) | Multiple queues store all processes combined |

**Why O(n * scheduling)?** The overall complexity depends on the algorithms used in each queue. If all use RR, total operations = O(n) per queue sweep. If FCFS, O(1) per process selection.

##### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Separates processes by type — optimal algorithm per type | Queue assignment is fixed and cannot adapt |
| Low overhead (simple queue management) | Low-priority queues can starve |
| Configurable between-queue scheduling | Inflexible — a batch process that becomes interactive is stuck in the batch queue |

##### Edge Cases

1. **Empty higher-priority queue**: Lower queues run when higher queues are empty. This is the normal operating mode.

2. **Starvation**: Batch processes in the lowest queue may starve if higher queues always have work. Fixed-priority inter-queue scheduling is especially prone to this.

3. **Zero-burst process**: Completed immediately within whatever queue it was assigned to.

---

#### 7. Multilevel Feedback Queue (MLFQ)

##### Real-World Analogy

A smart highway toll system with multiple lanes. New cars enter the express lane (fast processing). If a car is slow (takes too long), it gets moved to a slower lane. If a car demonstrates it belongs in a faster lane (quick bursts), it can move back up. The system learns from your driving behavior and adapts your lane assignment dynamically — unlike fixed lanes that never change.

##### Algorithm Steps

MLFQ is characterized by:
1. **Multiple queues** with different priorities and quantum sizes
2. **Processes can move between queues** based on their behavior
3. Higher-priority queues have smaller quanta (better response time)
4. Lower-priority queues have larger quanta (throughput-oriented)

**Example (3-queue MLFQ)**:

- **Q0**: RR, quantum = 8 ms, highest priority
- **Q1**: RR, quantum = 16 ms
- **Q2**: FCFS, lowest priority

**Rules**:

1. A new process always enters Q0
2. If a process in Q0 does not finish within its 8 ms quantum, it is demoted to Q1
3. If a process in Q1 does not finish within its 16 ms quantum, it is demoted to Q2
4. A process in Q2 runs until it finishes (FCFS)
5. A higher-priority queue must be empty before a lower queue runs
6. **Priority boost**: Periodically move all processes back to Q0 to prevent starvation

##### Pseudocode

```
FUNCTION MLFQ(processes[], boost_interval):
    q0 = FIFO queue  // RR, quantum = 8
    q1 = FIFO queue  // RR, quantum = 16
    q2 = FIFO queue  // FCFS
    time = 0

    FOR each new process p:
        ENQUEUE p TO q0
        p.current_queue = Q0

    WHILE processes remain:
        // Priority boost: move all to Q0
        IF time % boost_interval == 0 AND time > 0:
            MOVE all processes from q1, q2 TO q0

        IF q0 NOT empty:
            p = DEQUEUE(q0)
            RUN p FOR 8 ms OR until completion
            IF p not finished: ENQUEUE p TO q1; p.current_queue = Q1

        ELSE IF q1 NOT empty:
            p = DEQUEUE(q1)
            RUN p FOR 16 ms OR until completion
            IF p not finished: ENQUEUE p TO q2; p.current_queue = Q2

        ELSE IF q2 NOT empty:
            p = DEQUEUE(q2)
            RUN p TO completion (FCFS)

        time = time + run_time
```

##### Dry Run — Step-by-Step Trace

| Process | Arrival | Burst |
|---------|---------|-------|
| P1 | 0 | 5 |
| P2 | 1 | 20 |
| P3 | 2 | 30 |

**Gantt Chart** (Q0 quantum = 8, Q1 quantum = 16, Q2 = FCFS, boost every 50 ms):

```
| P1 | P2  |  P2  |     P2     |         P3          |  P2  | ... |
0    5     13     29           45                    61      77
```

**Step-by-Step**:

| Time | Event | Q0 | Q1 | Q2 | Decision |
|------|-------|----|----|----|----------|
| 0 | P1 arrives, enters Q0 | P1(5) | — | — | P1 runs (Q0 only process) |
| 1 | P2 arrives, enters Q0 | P2(20) | — | — | P1 still running in Q0 |
| 2 | P3 arrives, enters Q0 | P2(20), P3(30) | — | — | P1 still running |
| 5 | P1 finishes | P2(20), P3(30) | — | — | Q0 not empty, pick P2 |
| 13 | P2 uses Q0 quantum (8 ms), not done | P3(30) | P2(12) | — | Q0 has P3, pick P3 |
| 21 | P3 uses Q0 quantum (8 ms), not done | — | P2(12), P3(22) | — | Q0 empty, switch to Q1 |
| 21 | Q1: pick P2 | — | P2(12), P3(22) | — | Run P2 for 16 ms or until done |
| 29 | P2 finishes in Q1 | — | P3(22) | — | Continue Q1 with P3 |
| 45 | P3 uses Q1 quantum (16 ms), not done | — | — | P3(6) | Q1 empty, Q2 runs P3 to completion |
| 51 | P3 finishes | — | — | — | All done |

##### Complexity Analysis

| Resource | Complexity | Why |
|----------|-----------|-----|
| **Time** | O(n * scheduling) | Depends on algorithms used in each queue. Queue operations are O(1) per enqueue/dequeue |
| **Space** | O(n) | All queues combined store n processes |

**Why is MLFQ so powerful?** MLFQ learns process behavior without prior knowledge. Interactive processes (short CPU bursts) stay in high-priority queues and get excellent response time. CPU-bound processes (long bursts) sink to lower queues where they get larger quanta and better throughput. The scheduler adapts to the workload — no burst prediction needed.

##### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Adapts to process behavior automatically | Complex to configure (number of queues, quantum sizes, boost interval) |
| No prior knowledge of burst lengths needed | Starvation possible without priority boosts |
| Excellent response time for interactive processes | High overhead from queue management |
| Good throughput for CPU-bound processes | Process gaming (deliberately yielding CPU to stay in high queue) |
| Used by most modern operating systems (Linux, Windows, macOS) | Boost interval tuning is workload-dependent |

##### Edge Cases

1. **All arrive at same time**: All enter Q0. They execute in RR order at Q0's quantum until they exceed it and get demoted or finish.

2. **Starvation**: Can occur if higher queues always have work. **Priority boost** (periodically moving all processes to the highest queue) prevents starvation. Typical boost intervals are 100-200 ms.

3. **Zero-burst process**: Finishes in Q0 without demotion. Gets excellent response time.

4. **Gaming the system**: A process could voluntarily yield the CPU just before its quantum expires to stay in Q0. Solutions include tracking accrued CPU time rather than per-quantum behavior.

5. **Parameter tuning**: Number of queues, per-queue quantum, boost interval, and migration rules all affect performance. These are typically tuned empirically based on workload analysis.

6. **I/O-bound processes**: After performing I/O, a process returns to the ready queue. In MLFQ, returning processes can be placed back in a higher queue to reward interactive behavior.


---

## Scheduling Algorithms Comparison

| Feature | FCFS | SJF (Non-Preemptive) | SRTF (Preemptive SJF) | Round Robin | Priority (Preemptive) | MLFQ |
|---------|------|---------------------|----------------------|-------------|----------------------|------|
| **Preemptive** | No | No | Yes | Yes | Yes | Yes |
| **Starvation Possible** | No | Yes (long jobs) | Yes (long jobs) | No | Yes (low priority) | Yes (without boost) |
| **Avg. Waiting Time** | High | Low (optimal non-preemptive) | Lowest (optimal) | Moderate | Depends on priority | Low |
| **Avg. Turnaround Time** | High | Low | Lowest | Moderate | Depends on priority | Low |
| **Response Time** | Poor (worst) | Poor | Good | Excellent (best) | Depends on priority | Excellent |
| **Overhead** | Minimal | Low | High (many context switches) | Moderate (quantum-dependent) | Moderate | High |
| **Convoy Effect** | Yes | No | No | No | No | No |
| **Burst Prediction Needed** | No | Yes | Yes | No | No | No |
| **CPU Utilization** | Low (convoy) | Good | Good | Good | Good | Good |
| **Fairness** | Good (order) | Poor (biases short) | Poor (biases short) | Excellent (equal) | Poor | Good (adaptive) |
| **Complexity** | O(1) schedule | O(n) naive / O(n log n) heap | O(nB) naive / O((n+B) log n) heap | O(n) | O(nB) naive / O(n log n) heap | O(n) per sweep |
| **Best For** | Batch systems | Batch with known times | Benchmark optimal | Time-sharing systems | Real-time systems | General-purpose OS |

---

## Interview Corner

### Q1: What is the Convoy Effect? Explain with an Example.

**Answer**: The convoy effect occurs in FCFS scheduling when a long CPU-bound process holds the CPU, forcing many short I/O-bound processes to wait. The I/O devices remain idle during this time, reducing overall system utilization.

**Example**: P1 (CPU-bound, burst = 100 ms) runs first. Ten I/O-bound processes (burst = 2 ms each) wait behind P1. Each I/O-bound process waits 100 ms before its first 2 ms of execution. The I/O devices are idle for 100 ms — a massive waste.

**Impact**:
- CPU utilization: May still be high (P1 keeps CPU busy), but...
- I/O device utilization: Near zero during P1's execution
- Overall throughput: Poor
- Average waiting time: Very high for short processes

**Solution**: Use preemptive scheduling (RR, MLFQ) to limit how long any single process can monopolize the CPU.

### Q2: Starvation vs. Deadlock — Are They the Same?

| Aspect | Starvation | Deadlock |
|--------|-----------|----------|
| **Definition** | A process is perpetually denied access to a resource (CPU) because other processes keep getting it first | Two or more processes are each waiting for a resource the other holds, forming a circular wait |
| **Recovery** | Automatically resolves when higher-priority processes finish. Aging guarantees eventual execution | Does NOT resolve automatically. Requires external intervention (kill a process, reboot) |
| **Resource** | CPU time (scheduling) | Any shared resource (lock, I/O device, memory) |
| **System state** | Processes exist but some make no progress | Processes are blocked and cannot proceed |
| **Detection** | Track waiting time per process | Detect circular wait (resource allocation graph) |
| **Prevention** | Aging (increase priority over time) | Eliminate one of the four necessary conditions (mutual exclusion, hold-and-wait, no preemption, circular wait) |

**Key difference**: Starvation is a **liveness** issue (eventually resolved if waiting processes finish). Deadlock involves **mutual blocking** (no progress possible by any involved process).

### Q3: How Do You Tune MLFQ Parameters?

MLFQ has several configurable parameters. Here is how to tune them:

| Parameter | Effect | If Too High | If Too Low | Typical Value |
|-----------|--------|-------------|-------------|---------------|
| **Number of queues** | Priority granularity | Too many context switches | Poor differentiation | 3-7 |
| **Quantum per queue** | How long a process runs before demotion | Degrades responsiveness | Excessive overhead | Q0: 8 ms, Q1: 16 ms, Q2: 32 ms |
| **Boost interval** | How often to reset all processes to top queue | Starvation of demoted processes | Wastes learning (processes never settle) | 100-200 ms |
| **Demotion criteria** | What triggers moving to lower queue | Too aggressive (all processes at bottom) | Too lenient (all processes at top) | Exceed quantum once or twice |

**Tuning methodology**:
1. **Start with the classic 3-queue design**: Q0 (RR, 8 ms), Q1 (RR, 16 ms), Q2 (FCFS)
2. **Measure response time** for interactive tasks. If poor, increase boost frequency or reduce Q0 quantum
3. **Measure throughput** for CPU-bound tasks. If poor, increase Q2 quantum or reduce boost frequency
4. **Check for starvation**: Track maximum waiting time. If any process waits > 1 second, increase boost frequency
5. **Iterate**: MLFQ tuning is workload-dependent. What works for a web server may not work for a database

### Q4: Can Round Robin Quantum Be Zero or Negative?

**No**. A zero quantum means the CPU does zero work — every context switch preempts before any instruction executes. This is a degenerate case with infinite overhead and zero throughput. The quantum must always be a positive number, typically at least 2-3 times the context-switch time.

### Q5: Is FCFS Always Non-Preemptive?

**Yes, in its pure form**. FCFS is defined as non-preemptive — once a process starts, it runs to completion or until it voluntarily blocks (I/O). However, a system could implement "preemptive FCFS" by using FCFS as the scheduling policy within a preemptive framework (e.g., in MLFQ's lowest queue). This is really FCFS as a **sub-policy** within a preemptive system.

---

## Applications in Real Systems

### Linux Completely Fair Scheduler (CFS)

The CFS, introduced in Linux kernel 2.6.23, replaced the earlier O(1) scheduler. It is the default scheduler for regular (non-real-time) processes in Linux.

**Core Idea**: Instead of fixed time slices, CFS gives each process a **proportion** of the CPU. It maintains **virtual runtime** (`vruntime`) — the amount of time a process has run, weighted by its priority.

**Data Structure**: A **red-black tree** (self-balancing BST) keyed by `vruntime`. The leftmost node is the process with the smallest `vruntime` — i.e., the one that has received the least CPU time and should run next.

```
rb_tree_keyed_by_vruntime:
    [P1: vruntime=100] ← root
    [P2: vruntime=80]  ← left child (next to run)
    [P3: vruntime=120] ← right child

Next to run: P2 (smallest vruntime = 80)
```

**Target Latency**: The time within which every runnable process gets at least one chance to run. Default: ~20 ms.

**Key Operations**:
- `pick_next_task()`: Find leftmost node in red-black tree — O(log n)
- `enqueue()`: Insert process into tree — O(log n)
- `dequeue()`: Remove process from tree — O(log n)
- `update_curr()`: Update `vruntime` and check if preemption needed

**Nice Values**: Priority is expressed through the `nice` value (-20 to +19). Lower nice = higher priority. CFS weights time slices based on nice:

```
weight = 1024 / (1.25^nice)
vruntime += (actual_runtime * NICE_0_LOAD / weight)
```

A process with nice=0 gets default weight 1024. A process with nice=5 gets ~312 weight — it receives proportionally less CPU time.

**Why a red-black tree?** CFS needs to find the minimum `vruntime` process efficiently. A red-black tree supports O(log n) insertion (on wakeup), O(log n) deletion (on sleep), and O(1) minimum lookup (leftmost child). A simple sorted list would be O(n) for insertion. A heap would support extraction but not arbitrary deletion (when a process blocks, it must be removed from the runqueue — a heap requires O(n) for arbitrary removal).

### Windows NT Scheduling

Windows uses a **priority-driven, preemptive** scheduler with 32 priority levels:

| Level | Type | Description |
|-------|------|-------------|
| 0 | System | Zero page thread (idle) |
| 1-15 | Dynamic | Variable-priority threads (can be boosted/decayed) |
| 16-31 | Real-time | Fixed-priority threads (never boosted) |

**Quantum**:
- Default: 6-18 timer ticks (~30-120 ms depending on system)
- Configurable: Server systems use longer quanta (better throughput)
- Client systems use shorter quanta (better responsiveness)

**Priority Boost**:
- A thread waiting for I/O gets a boost when the I/O completes (e.g., keyboard input → boost to level 6)
- Boosts decay by 1 after each quantum
- After sufficient decay, the thread returns to its base priority

**Foreground Boost**: The foreground process gets 3x the normal quantum to improve interactive responsiveness.

**Volume**: Windows Server detects "volume" — if the process is the sole consumer of the CPU, it gets a higher priority boost.

### Real-Time Scheduling

Real-time systems require **guaranteed response times** within deadlines. Two classic algorithms:

#### Rate-Monotonic Scheduling (RMS)

- **Preemptive**, fixed-priority
- Priority is assigned based on period: **shorter period = higher priority**
- **Optimal** among fixed-priority algorithms for periodic tasks
- Utilization bound: Sum(Ci/Ti) <= n(2^(1/n) - 1). For large n, approaches ~69%

**Example**: Task A (period = 50, CPU = 20), Task B (period = 100, CPU = 40)
- Priority: A > B (shorter period)
- Utilization: 20/50 + 40/100 = 0.4 + 0.4 = 0.8 > 0.69 (theoretical bound for n=2 is ~83%)
- Schedulable? Check: 20 + 40 + 40 (interference from A in B's execution) = 100. B's deadline is 100. Yes, schedulable.

#### Earliest Deadline First (EDF)

- **Preemptive**, dynamic priority
- The process with the **earliest absolute deadline** gets the highest priority
- **Optimal** — can schedule any set of tasks up to 100% utilization
- Higher overhead (must recalculate priorities on every scheduling event)

**Comparison**: RMS is simpler with lower overhead but caps at ~69% utilization. EDF achieves up to 100% utilization but requires more complex priority management.

### Evaluating Scheduling Algorithms

**Deterministic modeling**: Compute metrics for a fixed workload. Useful for comparing algorithms on the same input. Provides exact results but does not generalize to dynamic workloads.

**Queueing models**: Treat the system as a network of queues. Use Little's law: `n = lambda x W` (average queue length = arrival rate x average wait time).

**Simulation**: Program a model of the system and run it against representative workloads (e.g., using the C++/Python implementations above as a discrete-event simulator). The most practical evaluation method.

**Implementation**: Run the actual scheduler in a real OS with real workloads. Only feasible for OS developers but gives the most accurate results.

---

## Concept Comparison

| Criterion | FCFS | SJF | Priority | Round Robin | MLFQ |
|-----------|------|-----|----------|-------------|------|
| Preemptive | No | Optional (SRTF) | Optional | Yes | Yes |
| Avg. Waiting Time | High | Optimal | Depends on priority | Moderate (depends on quantum) | Low |
| Starvation | No | Possible (long jobs) | Yes (low priority) | No | Possible (without boost) |
| Convoy Effect | Yes | No | No | No | No |
| Overhead | Minimal | Moderate | Low | Moderate | High |
| Predictability | High | Low (unknown bursts) | Medium | Medium | Low |
| Adaptability | None | None | None | None | High |

---

## Quick Reference

| Term | Definition |
|------|------------|
| **Turnaround Time** | Total time from process submission to completion |
| **Waiting Time** | Total time spent waiting in ready queue |
| **Response Time** | Time from submission to first CPU response |
| **Throughput** | Number of processes completed per unit time |
| **Aging** | Gradually increasing priority of waiting processes to prevent starvation |
| **Convoy Effect** | Short processes waiting behind a long process in FCFS |
| **Starvation** | A process is indefinitely denied CPU time |
| **Priority Inversion** | High-priority process blocked by low-priority process holding a needed lock |
| **Priority Inheritance** | Temporarily boosting the priority of a lock-holding process |
| **Dispatch Latency** | Time to switch from one process to another |
| **Quantum** | Maximum time a process runs in Round Robin before preemption |
| **vruntime** | Virtual runtime used by Linux CFS — weighted by priority |
| **MLFQ** | Multilevel Feedback Queue — processes move between priority queues |
| **RMS** | Rate-Monotonic Scheduling — fixed priority based on period |
| **EDF** | Earliest Deadline First — dynamic priority based on deadline |

---

## Cross-Application Matrix

| Concept | Web Server | Database | Embedded System | Smartphone | Real-Time System |
|---------|-----------|----------|-----------------|------------|------------------|
| FCFS | Not suitable | Suitable for serial jobs | Not suitable | Not suitable | Not suitable |
| SJF | Not practical | Good for known workloads | Not suitable | Not suitable | Not suitable |
| SRTF | Not practical | Not practical | Not suitable | Not suitable | Not suitable |
| RR | Excellent (fair) | High overhead | Poor (no guarantees) | Good with small quantum | Not suitable |
| Priority | Good for foreground tasks | Limited use | Essential (deadline-based) | Good for mixed workloads | Essential |
| MLFQ | Excellent (adaptive) | Good (adapts to query types) | Overkill | Excellent (Android uses MLFQ) | Not suitable |
| RMS | Not used | Not used | Common for periodic tasks | Not used | Standard for hard real-time |
| EDF | Not used | Not used | When utilization > 69% | Not used | Optimal soft real-time |

---

## Chapter Quiz

1. **Which scheduling algorithm is provably optimal for minimizing average waiting time?**
   - a) FCFS
   - b) SJF
   - c) Round Robin
   - d) Priority Scheduling

2. **The convoy effect is associated with which scheduling algorithm?**
   - a) FCFS
   - b) SJF
   - c) Round Robin
   - d) Multilevel Queue

3. **What technique prevents starvation in priority scheduling?**
   - a) Preemption
   - b) Aging
   - c) Time quantum
   - d) Multiprogramming

4. **In Round Robin, if the time quantum is very large, it degenerates to:**
   - a) SJF
   - b) FCFS
   - c) Priority
   - d) Multilevel Queue

5. **Which scheduling algorithm allows processes to move between queues?**
   - a) Multilevel Queue
   - b) Multilevel Feedback Queue
   - c) Priority Scheduling
   - d) Round Robin

6. **In Linux CFS, the next process to run is the one with:**
   - a) Highest priority number
   - b) Largest vruntime
   - c) Smallest vruntime
   - d) Earliest deadline

7. **Priority inheritance solves:**
   - a) Starvation
   - b) Convoy effect
   - c) Priority inversion
   - d) Deadlock

8. **Which scheduling algorithm has the highest overhead due to frequent context switches?**
   - a) FCFS
   - b) SJF
   - c) Round Robin (very small quantum)
   - d) Priority Scheduling

9. **Rate-Monotonic Scheduling assigns priority based on:**
   - a) Burst length
   - b) Period length (shorter = higher)
   - c) Arrival time
   - d) Deadline

10. **The key data structure used by Linux CFS is:**
    - a) Hash table
    - b) Red-black tree
    - c) Linked list
    - d) Min-heap

**Answers**: 1-b, 2-a, 3-b, 4-b, 5-b, 6-c, 7-c, 8-c, 9-b, 10-b

---

## Exercises

### Basic

1. Draw Gantt charts for FCFS, SJF (non-preemptive), and RR (q=3) given: P1=8, P2=4, P3=9, P4=5 (all arrive at time 0). Compute average waiting and turnaround times.

2. What is the convoy effect? Give a concrete example with three processes showing completion times and device utilization.

3. Why can SJF not be implemented exactly in practice? How do real systems approximate it?

### Intermediate

4. **Priority Inversion**: Implement priority inversion in C using POSIX threads and mutexes. Verify that P_high is blocked. Then implement priority inheritance using `pthread_mutexattr_setprotocol` with `PTHREAD_PRIO_INHERIT` and show the difference.

5. **Fairness Bound**: Design a scheduling algorithm that guarantees no process waits longer than some maximum time. What data structure supports this? Explain using the concept of **fairness**.

6. **I/O-bound vs CPU-bound**: A system has 10 I/O-bound processes (burst = 2 ms, then 10 ms I/O) and 1 CPU-bound process (burst = 50 ms). Compute CPU utilization for RR quanta of 1 ms, 10 ms, and 50 ms.

7. **FCFS vs RR**: Given processes P1(burst=10, arr=0), P2(burst=5, arr=1), P3(burst=2, arr=2), compute average turnaround and waiting time for FCFS and RR (quantum=4). Show detailed trace tables.

### Advanced

8. **Scheduling Simulator**: Implement a discrete-event simulator for CPU scheduling. Read a list of (arrival_time, burst_time) pairs and output Gantt charts, average waiting time, and average turnaround time for FCFS, SJF (preemptive), Priority, and RR.

9. **CFS Analysis**: The Completely Fair Scheduler in Linux uses a **red-black tree** keyed by **virtual runtime** (`vruntime`). Explain why a red-black tree is used instead of a simple priority queue. What operations must be O(log n) or better? Implement a simplified CFS scheduler in Python that simulates 100 processes with varying nice values and shows the scheduling order.

10. **Real-Time Scheduling**: Compare RMS and EDF for the following task set:
    - Task A: period = 50 ms, CPU burst = 20 ms
    - Task B: period = 100 ms, CPU burst = 40 ms
    - Task C: period = 150 ms, CPU burst = 30 ms
    Are the tasks schedulable under RMS? Under EDF?

11. **MLFQ Design**: Design a 4-queue MLFQ scheduler. Specify the quantum for each queue, the demotion policy, and the boost interval. Simulate 10 processes with random arrival times and burst lengths. Show that the scheduler correctly separates interactive and CPU-bound processes.

12. **Scheduling Metrics**: Prove mathematically that SRTF minimizes average waiting time among all preemptive scheduling algorithms. Compare this proof with the non-preemptive case.

---

## Summary

- CPU scheduling decides which ready process gets the CPU next
- Preemptive scheduling can interrupt a process; non-preemptive waits for voluntary yield
- FCFS is simple but suffers from the **convoy effect** — short processes wait behind long ones
- SJF minimizes average waiting time but requires burst prediction (impossible in practice); SRTF is its preemptive optimal variant
- Round Robin provides good response time for interactive workloads; quantum size is the critical tuning parameter
- Priority scheduling can starve low-priority processes without **aging**
- Priority inversion occurs when a high-priority process is blocked by a low-priority lock holder; **priority inheritance** is the standard fix
- Multilevel Feedback Queue is the most flexible design — it adapts to process behavior automatically
- Linux CFS uses a red-black tree keyed by virtual runtime to achieve fair CPU distribution
- Windows uses priority-driven scheduling with 32 levels, priority boosts, and variable quantum
- Real-time scheduling (RMS, EDF) provides deadline guarantees for time-critical systems
- Scheduling is inherently about trade-offs: throughput vs fairness vs response time vs overhead

