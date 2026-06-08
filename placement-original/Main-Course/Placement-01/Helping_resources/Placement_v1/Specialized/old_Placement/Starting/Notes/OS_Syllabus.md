# SECTION 1: Core CS Subjects

## 2. Operating Systems (OS)

### A. Process Management

- Process Concept
  - Definition of a process, program vs process
  - Process life cycle: creation, execution, termination
  - Process states: new, ready, running, waiting, terminated
  - State transition diagram
- Process Control Block (PCB)
  - Structure and fields: process ID, state, program counter, CPU registers, memory management info, accounting info, I/O status
- Threads
  - User-level vs kernel-level threads
  - Benefits: concurrency, resource sharing, responsiveness
  - Thread models: many-to-one, one-to-one, many-to-many
  - Thread libraries: POSIX threads, Java threads
- Multithreading
  - Thread creation: APIs, fork/join, thread pools
  - Synchronization: race conditions, critical sections
  - Issues: deadlock, starvation, context switching overhead
- Scheduling Algorithms
  - First-Come-First-Served (FCFS)
  - Shortest Job First (SJF), Shortest Remaining Time First (SRTF)
  - Priority Scheduling (preemptive/non-preemptive)
  - Round Robin (RR)
  - Multilevel Queue, Multilevel Feedback Queue
  - Scheduling criteria: CPU utilization, throughput, turnaround time, waiting time, response time
  - Gantt charts, algorithm comparison
- Context Switching
  - Definition, steps involved, overhead
  - Saving/restoring process state
- Orphan and Zombie Processes
  - Orphan: parent terminated before child
  - Zombie: child terminated, parent hasn’t read exit status

### B. Inter-Process Communication (IPC)

- Pipes, shared memory, message queues
- Signals, semaphores, monitors
- Sockets, RPC

### C. Deadlock

- Deadlock conditions: mutual exclusion, hold and wait, no preemption, circular wait
- Prevention, avoidance (Banker's algorithm), detection, recovery
- Wait-for graph

### D. Memory Management

- Memory hierarchy: registers, cache, RAM, secondary storage
- Address binding: compile, load, execution time
- Contiguous allocation: fixed/variable partitioning, fragmentation
- Paging: page table, page faults, multilevel/inverted tables
- Segmentation: segment table, protection
- Virtual memory: demand paging, page replacement (FIFO, LRU, Optimal, Clock)
- Thrashing, locality of reference

### E. File System & I/O Management

- File concepts: attributes, operations, types, structure
- Directory structures: single-level, two-level, tree, acyclic graph
- File allocation: contiguous, linked, indexed
- Free space management: bit vector, linked list, grouping
- I/O devices: character/block devices, device controllers, DMA
- Disk scheduling: FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK
- RAID levels

### F. Synchronization

- Critical section problem
- Mutex, semaphore, monitors
- Condition variables: wait/signal
- Classic problems: producer-consumer, readers-writers, dining philosophers, sleeping barber

### G. Linux Commands

- Basic: ls, cd, pwd, cp, mv, rm, grep, chmod, ps, top, kill, man, touch, mkdir, rmdir
- File permissions, process management, networking commands
