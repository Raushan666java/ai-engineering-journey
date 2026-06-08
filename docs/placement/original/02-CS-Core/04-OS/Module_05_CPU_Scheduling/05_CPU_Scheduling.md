# Module 5: CPU Scheduling

## CPU Scheduling Fundamentals

### What is CPU Scheduling?
The process of determining which process gets CPU time and for how long, maximizing CPU utilization and system throughput.

### CPU-I/O Burst Cycle
```
Process Execution:
CPU Burst → I/O Burst → CPU Burst → I/O Burst → ... → Terminate

CPU-bound processes: Long CPU bursts, short I/O bursts
I/O-bound processes: Short CPU bursts, long I/O bursts
```

### CPU Scheduler
- **Short-term scheduler**: Selects process from ready queue
- **Frequency**: Executes very frequently (milliseconds)
- **Speed**: Must be fast to minimize overhead

## Scheduling Criteria

### Performance Metrics
1. **CPU Utilization**: Percentage of time CPU is busy
2. **Throughput**: Number of processes completed per time unit
3. **Turnaround Time**: Time from submission to completion
4. **Waiting Time**: Time spent in ready queue
5. **Response Time**: Time from request to first response

### Optimization Goals
- **Maximize**: CPU utilization, throughput
- **Minimize**: Turnaround time, waiting time, response time

## Scheduling Algorithms

### 1. First-Come, First-Served (FCFS)
**Non-preemptive**: Process runs until completion or I/O

```c
// FCFS Implementation
struct process {
    int pid;
    int arrival_time;
    int burst_time;
    int waiting_time;
    int turnaround_time;
};

void fcfs_scheduling(struct process proc[], int n) {
    int total_waiting = 0, total_turnaround = 0;
    
    // Calculate waiting time
    proc[0].waiting_time = 0;
    for (int i = 1; i < n; i++) {
        proc[i].waiting_time = proc[i-1].waiting_time + proc[i-1].burst_time;
    }
    
    // Calculate turnaround time
    for (int i = 0; i < n; i++) {
        proc[i].turnaround_time = proc[i].waiting_time + proc[i].burst_time;
        total_waiting += proc[i].waiting_time;
        total_turnaround += proc[i].turnaround_time;
    }
    
    printf("Average Waiting Time: %.2f\n", (float)total_waiting/n);
    printf("Average Turnaround Time: %.2f\n", (float)total_turnaround/n);
}
```

**Example:**
```
Process | Burst Time | Waiting Time | Turnaround Time
P1      | 24         | 0            | 24
P2      | 3          | 24           | 27
P3      | 3          | 27           | 30

Average Waiting Time: 17.0
Average Turnaround Time: 27.0
```

### 2. Shortest Job First (SJF)
**Non-preemptive**: Shortest burst time first

```c
void sjf_scheduling(struct process proc[], int n) {
    // Sort processes by burst time
    for (int i = 0; i < n-1; i++) {
        for (int j = i+1; j < n; j++) {
            if (proc[i].burst_time > proc[j].burst_time) {
                struct process temp = proc[i];
                proc[i] = proc[j];
                proc[j] = temp;
            }
        }
    }
    
    // Calculate waiting and turnaround times
    fcfs_scheduling(proc, n);  // Same calculation as FCFS after sorting
}
```

### 3. Shortest Remaining Time First (SRTF)
**Preemptive version of SJF**

```c
void srtf_scheduling(struct process proc[], int n) {
    int completed = 0, current_time = 0, shortest = 0;
    int remaining_time[n];
    bool finished[n];
    
    // Initialize remaining times
    for (int i = 0; i < n; i++) {
        remaining_time[i] = proc[i].burst_time;
        finished[i] = false;
    }
    
    while (completed != n) {
        // Find process with shortest remaining time
        int min_time = INT_MAX;
        shortest = -1;
        
        for (int i = 0; i < n; i++) {
            if (proc[i].arrival_time <= current_time && 
                !finished[i] && remaining_time[i] < min_time) {
                min_time = remaining_time[i];
                shortest = i;
            }
        }
        
        if (shortest == -1) {
            current_time++;
            continue;
        }
        
        // Execute shortest process for 1 time unit
        remaining_time[shortest]--;
        current_time++;
        
        // Check if process is completed
        if (remaining_time[shortest] == 0) {
            completed++;
            finished[shortest] = true;
            proc[shortest].turnaround_time = current_time - proc[shortest].arrival_time;
            proc[shortest].waiting_time = proc[shortest].turnaround_time - proc[shortest].burst_time;
        }
    }
}
```

### 4. Priority Scheduling
**Each process has a priority number**

```c
struct priority_process {
    int pid;
    int burst_time;
    int priority;  // Lower number = higher priority
    int waiting_time;
    int turnaround_time;
};

void priority_scheduling(struct priority_process proc[], int n) {
    // Sort by priority
    for (int i = 0; i < n-1; i++) {
        for (int j = i+1; j < n; j++) {
            if (proc[i].priority > proc[j].priority) {
                struct priority_process temp = proc[i];
                proc[i] = proc[j];
                proc[j] = temp;
            }
        }
    }
    
    // Calculate times (same as FCFS after sorting)
    proc[0].waiting_time = 0;
    for (int i = 1; i < n; i++) {
        proc[i].waiting_time = proc[i-1].waiting_time + proc[i-1].burst_time;
    }
    
    for (int i = 0; i < n; i++) {
        proc[i].turnaround_time = proc[i].waiting_time + proc[i].burst_time;
    }
}
```

### 5. Round Robin (RR)
**Preemptive with time quantum**

```c
void round_robin_scheduling(struct process proc[], int n, int quantum) {
    int remaining_time[n];
    int current_time = 0, completed = 0;
    
    // Initialize remaining times
    for (int i = 0; i < n; i++) {
        remaining_time[i] = proc[i].burst_time;
    }
    
    while (completed < n) {
        bool done = true;
        
        for (int i = 0; i < n; i++) {
            if (remaining_time[i] > 0) {
                done = false;
                
                if (remaining_time[i] > quantum) {
                    // Process runs for quantum time
                    current_time += quantum;
                    remaining_time[i] -= quantum;
                } else {
                    // Process completes
                    current_time += remaining_time[i];
                    proc[i].turnaround_time = current_time;
                    proc[i].waiting_time = proc[i].turnaround_time - proc[i].burst_time;
                    remaining_time[i] = 0;
                    completed++;
                }
            }
        }
        
        if (done) break;
    }
}
```

## Algorithm Comparison

### Performance Analysis
```
Algorithm | Average Waiting Time | Advantages | Disadvantages
FCFS      | High for short jobs  | Simple     | Convoy effect
SJF       | Optimal (non-preemptive) | Minimum avg waiting | Starvation possible
SRTF      | Optimal (preemptive) | Best response time | High overhead
Priority  | Depends on priorities | Flexible   | Starvation possible
RR        | Good for interactive | Fair sharing | High overhead for small quantum
```

### Convoy Effect (FCFS)
```
Long process followed by many short processes:
P1 (24ms) → P2 (3ms) → P3 (3ms)

Waiting times: P1=0, P2=24, P3=27
Average: 17ms

If order was P2 → P3 → P1:
Waiting times: P2=0, P3=3, P1=6
Average: 3ms
```

## Multilevel Queue Scheduling

### Queue Structure
```
System Processes (Priority 0)
Interactive Processes (Priority 1)
Interactive Editing Processes (Priority 2)
Batch Processes (Priority 3)
Student Processes (Priority 4)
```

### Implementation
```c
struct multilevel_queue {
    struct process_queue system_queue;
    struct process_queue interactive_queue;
    struct process_queue batch_queue;
    int queue_priorities[3];
};

struct process* multilevel_schedule(struct multilevel_queue *mq) {
    // Check highest priority queue first
    if (!is_empty(&mq->system_queue)) {
        return dequeue(&mq->system_queue);
    }
    if (!is_empty(&mq->interactive_queue)) {
        return dequeue(&mq->interactive_queue);
    }
    if (!is_empty(&mq->batch_queue)) {
        return dequeue(&mq->batch_queue);
    }
    return NULL;
}
```

## Multilevel Feedback Queue

### Adaptive Priority Adjustment
```c
struct mlfq {
    struct process_queue queues[3];  // 3 priority levels
    int time_quantum[3];             // Different quantum for each level
    int aging_threshold;             // Time before priority boost
};

void mlfq_schedule(struct mlfq *mlfq) {
    for (int level = 0; level < 3; level++) {
        if (!is_empty(&mlfq->queues[level])) {
            struct process *p = dequeue(&mlfq->queues[level]);
            
            // Execute for time quantum
            int exec_time = min(p->remaining_time, mlfq->time_quantum[level]);
            p->remaining_time -= exec_time;
            
            if (p->remaining_time > 0) {
                // Move to lower priority queue if not completed
                if (level < 2) {
                    enqueue(&mlfq->queues[level + 1], p);
                } else {
                    enqueue(&mlfq->queues[level], p);  // Stay in lowest queue
                }
            }
            break;
        }
    }
    
    // Age processes (move up priority levels)
    age_processes(mlfq);
}
```

## Real-Time Scheduling

### Hard Real-Time Systems
- **Deadline**: Must complete before deadline
- **Schedulability**: Can all tasks meet deadlines?

### Rate Monotonic Scheduling
```c
struct rt_task {
    int period;          // Task period
    int execution_time;  // Worst-case execution time
    int deadline;        // Relative deadline
    int priority;        // Assigned priority
};

bool rate_monotonic_test(struct rt_task tasks[], int n) {
    // Assign priorities (shorter period = higher priority)
    for (int i = 0; i < n; i++) {
        tasks[i].priority = 1000 / tasks[i].period;  // Inverse of period
    }
    
    // Utilization test
    float total_utilization = 0;
    for (int i = 0; i < n; i++) {
        total_utilization += (float)tasks[i].execution_time / tasks[i].period;
    }
    
    float bound = n * (pow(2, 1.0/n) - 1);
    return total_utilization <= bound;
}
```

## Multiprocessor Scheduling

### Approaches
1. **Asymmetric Multiprocessing**: One processor handles scheduling
2. **Symmetric Multiprocessing**: Each processor self-schedules

### Processor Affinity
```c
struct cpu_info {
    int cpu_id;
    struct process_queue ready_queue;
    struct process *current_process;
    int load;
};

void smp_schedule(struct cpu_info cpus[], int num_cpus) {
    for (int i = 0; i < num_cpus; i++) {
        if (cpus[i].current_process == NULL) {
            // Try local queue first (processor affinity)
            if (!is_empty(&cpus[i].ready_queue)) {
                cpus[i].current_process = dequeue(&cpus[i].ready_queue);
            } else {
                // Load balancing: steal from other queues
                cpus[i].current_process = steal_process(cpus, num_cpus, i);
            }
        }
    }
}
```

## Practical Implementation

### Complete Scheduler Simulator
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef enum {
    FCFS, SJF, SRTF, PRIORITY, RR
} scheduling_algorithm;

struct scheduler {
    scheduling_algorithm algorithm;
    int time_quantum;  // For Round Robin
    struct process_queue ready_queue;
    struct process *running_process;
    int current_time;
};

void simulate_scheduling(struct scheduler *sched, struct process processes[], int n) {
    printf("Simulating %s scheduling...\n", 
           get_algorithm_name(sched->algorithm));
    
    // Add processes to ready queue based on arrival time
    for (int time = 0; time < 1000; time++) {
        // Add arriving processes
        for (int i = 0; i < n; i++) {
            if (processes[i].arrival_time == time) {
                enqueue(&sched->ready_queue, &processes[i]);
            }
        }
        
        // Schedule next process if CPU is idle
        if (sched->running_process == NULL && !is_empty(&sched->ready_queue)) {
            sched->running_process = schedule_next_process(sched);
        }
        
        // Execute current process
        if (sched->running_process != NULL) {
            execute_process(sched, time);
        }
        
        sched->current_time = time;
    }
    
    print_statistics(processes, n);
}
```

## Lab Assignment
1. **Scheduler Simulator**: Implement all scheduling algorithms
2. **Performance Comparison**: Compare algorithms with different workloads
3. **Real-time Scheduler**: Implement Rate Monotonic Scheduling
4. **Multiprocessor Simulator**: Simulate SMP scheduling with load balancing

## Quiz Questions
1. What is the convoy effect in FCFS scheduling?
2. Why is SJF optimal for average waiting time?
3. How does time quantum affect Round Robin performance?
4. What is the difference between multilevel queue and multilevel feedback queue?
5. What is processor affinity in multiprocessor systems?

## Next Module
Module 6: Process Synchronization