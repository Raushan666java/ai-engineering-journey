# Chapter 14: Linux Kernel Internals

**<< [I/O Systems](./13-io-systems.md)** | [**Next: Shell Scripting**](./15-shell-scripting.md) >>

---

## Learning Objectives

- Differentiate monolithic vs modular kernel architecture with trade-offs
- Master the Linux process model via task_struct and clone() system call
- Analyze CFS scheduler design using vruntime and red-black trees
- Explain Linux memory management hierarchy: buddy allocator, SLAB/SLUB, vmalloc
- Trace a system call through VFS: open()/read()/write() path from user to device
- Implement, compile, and load a kernel module with /proc interface
- Compare kernel synchronization primitives: spinlock, mutex, RCU
- Understand control groups and namespaces as container building blocks

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/operating-systems/14-linux-kernel/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/operating-systems/14-linux-kernel/.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/operating-systems/14-linux-kernel/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/operating-systems/14-linux-kernel/.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/operating-systems/14-linux-kernel/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/operating-systems/14-linux-kernel/.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


## Prerequisites

| Concept | Why Needed |
|---------|------------|
| C programming | Kernel code is written in C (GCC extensions) |
| Process & threads | Linux treats threads as special processes |
| Virtual memory | Page tables, MMU, TLB operations |
| System calls | User to kernel mode transition mechanism |
| Data structures | Linked lists, red-black trees, hash tables in kernel |

## Chapter at a Glance

| Topic | Key Points | Real-World Analogy |
|-------|------------|-------------------|
| **Linux Architecture** | Monolithic + modules; kernel/user space split | Car factory: core chassis (kernel) + optional add-ons (modules) |
| **Process Mgmt** | task_struct PCB, CFS, clone(), process states | Hospital patient records (task_struct), triage nurse (scheduler) |
| **Memory Mgmt** | Buddy allocator (physical), SLUB (objects), KSM | Warehouse (buddy: pallets of boxes), Vending machine (SLAB: cans) |
| **VFS** | super_block, inode, dentry, file objects | Postal system: uniform delivery regardless of transport mode |
| **Interrupts** | Top half (urgent), bottom half (deferrable) | Restaurant: host seats (top half), chef cooks (bottom half) |
| **Synchronization** | Spinlock, mutex, RCU, atomic ops | Library bathroom key (spinlock), coffee machine queue (mutex) |
| **cgroups/ns** | Resource limits, namespace isolation | Apartment building: separate units (ns), HOA rules (cgroups) |

## Chapter Roadmap

```
mermaid
flowchart LR
    A[Linux Architecture<br/>Monolithic + Modules] --> B[Process Management<br/>task_struct + CFS]
    A --> C[Memory Management<br/>Buddy + SLAB + vmalloc]
    A --> D[VFS<br/>super_block/inode/dentry/file]
    A --> E[Interrupt Handling<br/>Top half / Bottom half]
    A --> F[Kernel Synchronization<br/>spinlock/mutex/RCU]
    A --> G[cgroups & Namespaces<br/>Container foundations]
    F --> H[Kernel Modules<br/>LKMs + /proc interface]
    H --> I[Booting + System Call Flow]
    I --> J[Interview Corner]
    J --> K[Applications: Android, Embedded, Containers]
    K --> L[Summary & Exercises]
```

## Key Terms

| Term | Definition |
|------|------------|
| **CFS** | Completely Fair Scheduler: O(log n) red-black tree scheduler |
| **VFS** | Virtual File System: uniform interface for multiple FS types |
| **Buddy Allocator** | Physical page allocator using power-of-two block coalescing |
| **SLAB/SLUB** | Kernel object cache allocator (SLUB is the modern default) |
| **Kernel Module** | Dynamically loadable kernel code (.ko) extending functionality |
| **System Call** | Software interrupt (int 0x80 / sysenter) transitioning user to kernel |
| **RCU** | Read-Copy-Update: lock-free synchronization for read-heavy workloads |
| **cgroup** | Control group: constrain CPU/memory/IO per process group |
| **Namespace** | Isolate process trees, mounts, network, PID, user, IPC |
| **vruntime** | Virtual runtime: weighted execution time used by CFS |
| **OOM Killer** | Out-Of-Memory killer: terminates processes when memory exhausted |

---

## 1. Linux Kernel Architecture

### Real-World Analogy


Think of the Linux kernel as **a car factory with modular assembly lines**:

- **Monolithic core** = The main chassis assembly line: everything is welded together, fast and efficient
- **Loadable modules** = Optional feature kits (sunroof, GPS, heated seats) that snap in without rebuilding the factory
- **User space** = The dealerships and customers who drive the cars but never enter the factory floor
- **System calls** = The order forms dealerships submit to request cars from the factory

### Monolithic vs Modular: Deep Dive


Linux is a **monolithic kernel** (all core services run in kernel space) with **loadable module support** - not a hybrid kernel.

| Aspect | Pure Monolithic | Linux (Monolithic + Modules) | Microkernel |
|--------|----------------|------------------------------|-------------|
| Address space | Single kernel space | Single kernel space + module loading | Kernel + user-space servers |
| Communication | Function calls (ns) | Function calls (ns) | IPC (us) |
| Performance | Fast | Fast (module overhead negligible once loaded) | Slower (IPC overhead) |
| Flexibility | Recompile to change | Load/unload at runtime | Add servers at runtime |
| Stability | Bug crashes entire kernel | Buggy module can crash kernel | Server crash = restart server |
| Debugging | Hard | Module debugging via kgdb | Easier (user space servers) |
| Size | Single large binary | Smaller base + optional modules | Small kernel + many servers |
| Examples | Older Unix, early Linux | Linux, Solaris | Minix, QNX, L4 |

### Kernel Space vs User Space


| Property | User Space | Kernel Space |
|----------|-----------|-------------|
| Privilege level | Ring 3 (x86) | Ring 0 (x86) |
| Memory access | Virtual address space only | Physical + virtual, all pages |
| CPU instructions | Restricted set | All (HLT, IN/OUT, LGDT, etc.) |
| Crash recovery | Process killed | Panic (system halts) |
| Libraries | glibc, musl | None (kernel has own lib: lib/)* |
| Entry points | System calls, exceptions, interrupts | N/A (runs in kernel mode) |

*The kernel has a minimal library (`lib/`) - string ops, checksums, sorting - not a full libc.

### Kernel Subsystem Map


```
+-------------------------------------------------------------------+
|                      USER SPACE (Ring 3)                          |
|  [Application] -> [glibc] -> [syscall wrapper]                    |
+-------------------------------|-----------------------------------+
                               | int 0x80 / syscall / sysenter
+-------------------------------|-----------------------------------+
|                      KERNEL SPACE (Ring 0)                         |
|                                                                   |
|  +------------------+  +------------------+  +------------------+  |
|  | System Call Layer|  | VFS Layer        |  | Signals          |  |
|  | (sys_read, etc.) |  | (ext4, XFS, NFS) |  | (do_signal)      |  |
|  +--------+---------+  +--------+---------+  +------------------+  |
|           |                     |                                  |
|  +--------v---------+  +--------v---------+  +------------------+  |
|  | Process Mgmt      |  | Memory Mgmt       |  | Net Stack        |  |
|  | (CFS, task_struct)|  | (Buddy, SLAB, MMU)|  | (TCP/IP)         |  |
|  +-------------------+  +-------------------+  +------------------+  |
|           |                     |                                  |
|  +--------v---------+  +--------v---------+  +------------------+  |
|  | Device Drivers    |  | Interrupt Handler|  | Arch code        |  |
|  | (char, block, net)|  | (top/bottom half)|  | (x86, ARM)       |  |
|  +-------------------+  +-------------------+  +------------------+  |
|                                                                   |
|  +-------------------------------------------------------------+  |
|  | Kernel Modules (loadable .ko files)                          |  |
|  | [driver.ko] [fs.ko] [netfilter.ko] [crypto.ko]              |  |
|  +-------------------------------------------------------------+  |
+-------------------------------------------------------------------+
```

### Advantages & Disadvantages


| Advantage | Disadvantage | Mitigation |
|-----------|-------------|------------|
| High performance (direct function calls) | One bug panics entire system | Modules isolated; core carefully reviewed |
| Rich feature set in kernel | Large attack surface | LSM (SELinux, AppArmor), KASLR |
| Runtime extensibility via modules | Module can introduce vulnerabilities | Signed modules, lock down insmod |
| Tight integration of subsystems | Coupling makes maintenance hard | Well-defined APIs between subsystems |
| Excellent for general-purpose OS | Less suitable for safety-critical (no hard RT) | PREEMPT_RT patch set exists |

### Edge Cases


| Edge Case | What Happens | Why It Matters |
|-----------|-------------|----------------|
| **module_init() fails** | Module load aborted; no memory leak (error path cleans up) | Prevents half-initialized modules |
| **rmmod while in use** | Module refcount > 0; removal fails with EBUSY | Prevents use-after-free |
| **Module stack overflow** | Kernel oops (random memory corruption; no guard page) | Stack in kernel is small (8KB); deep call chains crash |
| **Kernel NULL deref** | oops, often panic (depending on context) | A module bug that dereferences NULL crashes the system |
| **Kernel panic in IRQ** | panic_on_oops (must be set; else deadlock) | Interrupt context cannot schedule; must die gracefully |

---

## 2. Process Management in Linux

### Real-World Analogy


A **task_struct** is like a **hospital patient record**:

- **Patient ID (PID)** = Unique patient number
- **State** = In waiting room (runnable), in surgery (running), discharged (zombie)
- **Priority** = Emergency severity level (triage)
- **mm** = Medical history (memory map)
- **files** = Current prescriptions (open file descriptors)
- **parent/children** = Referring doctor / dependent patients
- **signal** = Nurse call button (pending signals)

### task_struct: The Process Control Block


Defined in `include/linux/sched.h`, `task_struct` is the largest structure in the kernel (approx 2KB on x86_64 with approx 200+ fields).

```c
// Complete field groups of task_struct (kernel 6.x)
struct task_struct {
    /* 1. State & Identity */
    volatile long           state;           // TASK_RUNNING, _INTERRUPTIBLE, etc.
    int                     exit_state;      // EXIT_DEAD, EXIT_ZOMBIE
    pid_t                   pid;             // Process ID
    pid_t                   tgid;            // Thread group ID (PID of main thread)
    struct task_struct      *real_parent;    // Actual parent (receives SIGCHLD)
    struct task_struct      *parent;         // Receiving ptrace or debugger
    struct list_head        children;        // List of children
    struct list_head        sibling;         // Sibling in parent's children list

    /* 2. Scheduling */
    unsigned int            policy;          // SCHED_NORMAL, SCHED_FIFO, SCHED_RR, etc.
    int                     prio;            // Dynamic priority
    int                     static_prio;     // Base priority (set by nice)
    int                     normal_prio;     // Normal priority (static + RT adjustments)
    unsigned int            rt_priority;     // Real-time priority (0-99)
    struct sched_entity     se;              // CFS scheduling entity
    struct sched_rt_entity  rt;              // RT scheduling entity
    struct sched_dl_entity  dl;              // Deadline scheduling entity

    /* 3. Memory Management */
    struct mm_struct        *mm;             // Memory descriptor (address space)
    struct mm_struct        *active_mm;      // Borrowed mm for kernel threads

    /* 4. File System */
    struct fs_struct        *fs;             // Root, pwd, umask
    struct files_struct     *files;          // Open file descriptor table
    struct nsproxy          *nsproxy;        // Namespace proxy

    /* 5. Signal Handling */
    struct signal_struct    *signal;         // Shared signal handler table
    struct sighand_struct   *sighand;        // Signal handler functions
    sigset_t                blocked;         // Mask of blocked signals
    sigset_t                real_blocked;    // Temporary signal mask
    sigset_t                pending;         // Pending signals

    /* 6. Credentials & Security */
    const struct cred       *cred;           // UID, GID, capabilities
    struct audit_context    *audit_context;  // Audit subsystem tracking

    /* 7. Timers & Accounting */
    cputime_t               utime;           // User-mode CPU time
    cputime_t               stime;           // Kernel-mode CPU time
    u64                     start_time;      // Boot time when process started
    unsigned long           nvcsw;           // Voluntary context switches
    unsigned long           nivcsw;          // Involuntary context switches

    /* 8. Hardware Context */
    struct thread_struct    thread;          // CPU registers, FPU state, debug regs

    /* 9. cgroups */
    struct css_set          *cgroups;        // Control group subsystem state

    /* 10. Tracing & Profiling */
    unsigned int            ptrace;          // Ptrace flags
    struct list_head        ptraced;         // List of traced processes
    struct list_head        ptrace_entry;    // Entry in ptracer's list
};
```

### Process States in Linux


```c
#define TASK_RUNNING            0x0000
#define TASK_INTERRUPTIBLE      0x0001
#define TASK_UNINTERRUPTIBLE    0x0002
#define __TASK_STOPPED          0x0004
#define __TASK_TRACED           0x0008
#define EXIT_DEAD               0x0010
#define EXIT_ZOMBIE             0x0020
#define TASK_DEAD               0x0040
#define TASK_WAKEKILL           0x0080
#define TASK_WAKING             0x0100
#define TASK_NOLOAD             0x0200
#define TASK_NEW                0x0400
#define TASK_RTLOCK_WAIT        0x0800
#define TASK_FREEZABLE          0x1000
#define TASK_FREEZABLE_UNSAFE   0x2000
```

| State | Meaning | Wake-up |
|-------|---------|---------|
| TASK_RUNNING | Running or ready to run | Already runnable |
| TASK_INTERRUPTIBLE | Waiting for event, can receive signals | Signal or event |
| TASK_UNINTERRUPTIBLE | Waiting for event, no signals | Event only |
| TASK_STOPPED | Stopped (SIGSTOP) | SIGCONT |
| TASK_TRACED | Being traced by ptrace | ptrace event |
| EXIT_ZOMBIE | Terminated, parent not yet waited | wait() call |
| EXIT_DEAD | Final state (being reaped) | N/A |

### State Transition Diagram


```
                          +-------------+
                          |  TASK_NEW   |
                          +------+------+
                                 | fork()/clone() success
                                 v
                    +-----------------------+
                    |   TASK_RUNNING        |<-------+
                    | (runnable, waiting    |        |
                    |  for CPU)             |        |
                    +------+-------+--------+        |
                      |    ^       |                 |
    schedule()      |    |       | wake_up()        |
    picks this task  |    |       +------------------+
                      v    |
              +---------------------------+
              |   TASK_RUNNING (running)  |
              +------+----------+---------+
                 |          |
        schedule()    |     syscall/exception
        (preempt)     |     -> kernel mode
                 |          |
                 v          v
    +-----------------------+  +--------------------------+
    | TASK_INTERRUPTIBLE    |  | TASK_UNINTERRUPTIBLE     |
    | (sleep, can signal)   |  | (sleep, no signals)      |
    +--------+--------------+  +-----------+--------------+
             | event/signal               | event only
             +----------+-----------------+
                        v
                    TASK_RUNNING (runnable again)
```

### The clone() System Call


Linux unifies process and thread creation under `clone()`. The library functions `fork()`, `vfork()`, and `pthread_create()` all call `clone()` with different flag combinations.

#### Steps of clone()

1. **Allocate task_struct**: kmem_cache_alloc(task_struct_cache) - approx 2KB from SLAB
2. **Copy or share resources based on flags**:
   - `CLONE_VM` set -> share address space (no copy; thread semantics)
   - `CLONE_VM` cleared -> copy-on-write page tables (fork semantics)
   - `CLONE_FILES` -> share fd table; else copy
   - `CLONE_SIGHAND` -> share signal handlers; else copy
3. **Copy thread_struct**: Save register state for the new context
4. **Set scheduling entity**: Initialize sched_entity with vruntime = 0 or inherit
5. **Wake up new task**: Place on runqueue; scheduler picks when appropriate

```c
// clone() flag combinations
pid_t clone(int (*fn)(void *), void *child_stack, int flags, void *arg, ...);

// fork() behavior:
#define FORK_FLAGS (CLONE_CHILD_SETTID | CLONE_CHILD_CLEARTID | SIGCHLD)

// pthread_create() behavior (creates a thread):
#define THREAD_FLAGS (CLONE_VM | CLONE_FILES | CLONE_SIGHAND | \
                      CLONE_THREAD | CLONE_SYSVSEM | CLONE_SETTLS | \
                      CLONE_PARENT_SETTID | CLONE_CHILD_CLEARTID | \
                      CLONE_CHILD_SETTID)
```

#### Dry Run: fork() Trace

| Step | Action | Data Structure | Complexity |
|------|--------|---------------|------------|
| 1 | syscall entry: save regs, check syscall_nr | pt_regs on kernel stack | O(1) |
| 2 | kmem_cache_alloc(task_struct_cache) | SLAB cache | O(1) amortized |
| 3 | copy_process(): copy flags, creds, limits | task_struct fields | O(num_fields) |
| 4 | dup_task_struct(): copy thread_struct, set parent | thread_struct | O(1) |
| 5 | copy_mm(): copy-on-write page tables | mm_struct, pgd | O(num_vmas) |
| 6 | copy_files(): dup fd table (if not shared) | files_struct | O(num_fds) |
| 7 | copy_sighand(): copy signal handlers | sighand_struct | O(1) |
| 8 | sched_fork(): init sched_entity, assign PID | CFS runqueue | O(log n) |
| 9 | wake_up_new_task(): place on runqueue | rq->cfs_tasks RB tree | O(log n) |
| 10 | syscall return: return PID to parent, 0 to child | -- | O(1) |

### Kernel Threads


Kernel threads are processes that run only in kernel mode. They have **no user-space address space** (`mm = NULL`).

```c
// kthread_create() - Create a kernel thread
struct task_struct *kthread_create(int (*threadfn)(void *data),
                                   void *data, const char namefmt[], ...);

// Example: kworker threads, khugepaged, kswapd, jbd2
//  $ ps -eo pid,comm | grep '^\[' 
//  [pid]  [kthreadd] [kswapd0] [khungtaskd] [jbd2/sda1-8]
```

### Complexity Analysis of fork()


| Operation | Complexity | Why |
|-----------|------------|-----|
| task_struct allocation | O(1) | SLAB cache pre-allocates objects |
| Copy page tables (COW) | O(n) where n = number of VMAs | Must walk mmap list, mark all pages read-only |
| Copy fd table | O(f) where f = number of open fds | kernel dup_fd() loops over RLIMIT_NOFILE |
| CFS enqueue | O(log n) | Red-black tree insertion |
| PID allocation | O(1) | idr bitmap allocator (XArray since 5.x) |

### Edge Cases in Process Management


| Edge Case | Behavior | Kernel Mechanism |
|-----------|----------|-----------------|
| **Zombie process** | Parent has not called wait(); task_struct retained, no memory | exit() sends SIGCHLD; wait() reaps |
| **Orphan process** | Parent dies before child | Child reparented to init (PID 1) |
| **PID exhaustion** | No free PIDs (65536 default) | fork() returns -EAGAIN |
| **Thread explosion** | Thousands of threads sharing mm | Stack per thread causes VM pressure; nr_threads limit |
| **vfork() hang** | Child execs or exits; parent blocked | CLONE_VFORK + wait_for_completion() |

---

## 3. Completely Fair Scheduler (CFS)

### Real-World Analogy


CFS is like a **round-robin pizza party** where:

- Each person (process) has a **hunger counter (vruntime)** tracking how much pizza they have eaten
- The hungriest person (smallest vruntime) always gets the next slice
- VIP guests (higher priority via nice) get **larger slices**, so their vruntime rises slower
- The organizer (scheduler) uses a **seating chart (red-black tree)** sorted by hunger level
- **target latency** = goal time for everyone to eat at least once (approx 20ms pizza party round)
- **minimum granularity** = smallest bite size (approx 1ms, prevents choking on context switches)

### CFS Core Concepts


CFS (`kernel/sched/fair.c`, by Ingo Molnar, 2007) replaced the O(1) scheduler. It models an **ideal, perfectly fair multitasking CPU**.

| Concept | Formula | Meaning |
|---------|---------|---------|
| **vruntime** | vruntime += delta_exec * (1024 / se->load.weight) | Weighted execution time; 1024 = NICE_0_LOAD |
| **load.weight** | 1024 / (1.25^n) where n = nice value | Process weight: nice -20 = 88761, nice 0 = 1024, nice 19 = 15 |
| **target latency** | Configurable (default 20ms) | Time interval for each task to run once |
| **min granularity** | Configurable (default 1ms) | Minimum slice to limit context switch overhead |
| **time slice** | target_latency / nr_running | Per-task timeslice (bounded by min/max granularity) |

### nice Value Weight Table


| nice | Weight | Relative CPU share vs nice 0 |
|------|--------|------------------------------|
| -20 | 88761 | 86.7x more CPU time |
| -10 | 9548 | 9.3x more CPU time |
| -5 | 3355 | 3.3x more CPU time |
| 0 | 1024 | 1x (baseline) |
| 5 | 335 | 0.33x CPU time |
| 10 | 110 | 0.11x CPU time |
| 19 | 15 | 0.015x CPU time |

### CFS Red-Black Tree


```
    CFS runqueue (per-CPU):

    rb_root: &rq->cfs_tasks
         |
         v
          [vruntime=2000, A]                  <- root
         /                  \
   [v=1000, B]            [v=3000, D]
   /        \            /        \
[v=500, E] [v=1500, F] [v=2500, G] [v=3500, H]
     ^
  leftmost -> pick_next_task_fair() returns this

Properties:
- Every node has vruntime > all nodes in its left subtree
- Every node has vruntime < all nodes in its right subtree
- Height <= 2*log2(n+1) (guaranteed by red-black invariants)
  - Root is always black
  - Red nodes have black children
  - Every path from root to leaf has same number of black nodes
```

### CFS Scheduling Tick Pseudocode


```
scheduler_tick():
  curr = current task
  delta = now - curr->se.last_update_time
  
  // Update vruntime of current task
  weight = curr->se.load.weight          // depends on nice value
  curr->se.vruntime += delta * NICE_0_LOAD / weight
  
  // Check if we need to preempt
  leftmost = rb_first(&rq->cfs_tasks)    // task with smallest vruntime
  if curr->se.vruntime > leftmost->vruntime:
      set_tsk_need_resched(curr)          // flag for preemption

pick_next_task_fair():
  leftmost = rb_first(&rq->cfs_tasks)
  se = rb_entry(leftmost, struct sched_entity, run_node)
  task = container_of(se, struct task_struct, se)
  return task                               // O(log n) -> O(1) with cached leftmost
```

### Dry Run: Three Processes Under CFS


Scenario: 3 processes A, B, C all at nice 0, all start at vruntime=0, target_latency=20ms

| Event | Time (ms) | A vruntime | B vruntime | C vruntime | Leftmost | Next Task |
|-------|-----------|------------|------------|------------|----------|-----------|
| Initial | 0 | 0 | 0 | 0 | tie | A (arbitrary) |
| After A runs 6.67ms | 6.67 | 6.67 | 0 | 0 | B | B |
| After B runs 6.67ms | 13.33 | 6.67 | 6.67 | 0 | C | C |
| After C runs 6.67ms | 20.0 | 6.67 | 6.67 | 6.67 | tie | A (arbitrary) |
| After A runs 6.67ms | 26.67 | 13.33 | 6.67 | 6.67 | B | B |

Each process gets exactly 6.67ms per round (20ms / 3 processes). Perfect fairness.

### CFS with Different Nice Values


Scenario: A (nice 0, weight 1024), B (nice -5, weight 3355), target_latency=20ms

| Event | Time (ms) | A vruntime | B vruntime | Next |
|-------|-----------|------------|------------|------|
| Initial | 0 | 0 | 0 | tie (A) |
| A time slice | 0-5 | 5 | 0 | B |
| B time slice | 5-21.4 | 5 | 5 | A |

B gets 16.4ms vs A gets 5ms (B weight 3355 vs A weight 1024 = 3.3x ratio). That matches the formula.

### Complexity Analysis


| Operation | Complexity | Why |
|-----------|------------|-----|
| Enqueue task (rb_insert) | O(log n) | Red-black tree insertion requires rebalancing |
| Dequeue task (rb_erase) | O(log n) | Red-black tree deletion requires rebalancing |
| Pick next (pick_next_task_fair) | O(1) amortized | Cached leftmost pointer; update on enqueue/dequeue |
| Update vruntime | O(1) | Simple arithmetic on timer tick |

**Why O(log n) matters**: For a system with 1000 runnable processes, CFS worst-case is about 10 comparisons. The O(1) scheduler was also O(1) but used heuristics that hurt fairness. CFS trades slightly higher theoretical bound for guaranteed fairness.

### Edge Cases in CFS


| Edge Case | Behavior | Kernel Mechanism |
|-----------|----------|-----------------|
| **Thundering herd** (many tasks wake simultaneously) | Each enqueues; RB tree rebalances | wake_idle() tries to spread across CPUs |
| **Scheduling latency spikes** | Long-running task + many short tasks | I/O-bound tasks get compensation via sleep_avg in vruntime |
| **RT task starvation** | SCHED_FIFO at rt_priority=99 | Real-time tasks run before CFS (RT class checked first) |
| **Priority inversion** | Low-prio task holds lock needed by high-prio task | Priority Inheritance Protocol (PI) via rt_mutex |
| **CPU-bound hog under cgroup** | cgroup CPU limit caps vruntime advancement | throttle hierarchy via cfs_bandwidth |

### User-Space View: sched_setscheduler()


```python
#!/usr/bin/env python3
"""Check and set scheduling policy for a process."""
import os
import ctypes
import ctypes.util

SCHED_OTHER = 0
SCHED_FIFO = 1
SCHED_RR = 2
SCHED_BATCH = 3
SCHED_IDLE = 5
SCHED_DEADLINE = 6

libc = ctypes.CDLL(ctypes.util.find_library('c'))

class SchedParam(ctypes.Structure):
    _fields_ = [("sched_priority", ctypes.c_int)]

def get_sched_policy(pid=0):
    policy = libc.sched_getscheduler(pid)
    names = {0: "SCHED_OTHER", 1: "SCHED_FIFO", 2: "SCHED_RR",
             3: "SCHED_BATCH", 5: "SCHED_IDLE", 6: "SCHED_DEADLINE"}
    return names.get(policy, f"UNKNOWN({policy})")

def set_rt_policy(pid=0, policy=SCHED_FIFO, priority=50):
    param = SchedParam(priority)
    ret = libc.sched_setscheduler(pid, policy, ctypes.byref(param))
    return ret == 0

pid = os.getpid()
print(f"PID {pid} current policy: {get_sched_policy(pid)}")
print(f"PID {pid} min/max RT priority: "
      f"{libc.sched_get_priority_min(SCHED_FIFO)}/"
      f"{libc.sched_get_priority_max(SCHED_FIFO)}")
```

---

## 4. Memory Management in Linux

### Real-World Analogy


Linux memory management is like **a warehouse logistics system**:

- **Buddy allocator** = Forklift operator managing pallets of boxes. Only handles pallets in sizes that are powers of 2 (1-box, 2-box, 4-box, etc.). When a 3-box request comes in, splits a 4-box pallet into 2+2, gives one 2-box pallet plus a split from the other.
- **SLAB allocator** = A vending machine for frequently-used items. Each vending machine holds pre-packaged identical items (all are task_struct, all are inode, etc.). Items are grabbed quickly without forklifting pallets.
- **vmalloc** = A custom crate builder that takes boards from different pallets and nails them together into a logically contiguous area (even though physically scattered).
- **KSM** = Recycling center: finds identical items across the warehouse and replaces them with single shared copies (COW).

### Memory Allocation Hierarchy


```
                        +-----------+
                        |  Process  |
                        |  malloc() |
                        +-----+-----+
                              | page fault
                              v
                      +---------------+
                      |  glibc alloc  |
                      |  (brk/mmap)   |
                      +-------+-------+
                              | syscall (do_mmap/do_brk)
                              v
                      +---------------+
                      |  Page Alloc   |
                      |  (alloc_pages)|
                      +-------+-------+
                    /                \
                   v                  v
          +-------------+     +---------------+
          | Buddy Sys   |     | vmalloc()     |
          | (phys cont) |     | (virt cont)   |
          +------+------+     +-------+-------+
                 |                     |
                 v                     v
          +-------------+     +---------------+
          | SLAB/SLUB   |     | IOMMU/SW IOTLB|
          | (obj cache) |     | (scatter seg) |
          +------+------+     +---------------+
                 |
                 v
          +-------------+
          |  Page Frame |
          |  (struct    |
          |   page)     |
          +-------------+
```

### Buddy Allocator


The **buddy allocator** (`mm/page_alloc.c`) manages physical page allocation. It maintains free lists for each order (0 through MAX_ORDER-1, typically 10).

#### Core Algorithm

```
Free area lists (per-CPU, per-ZONE):
order 0 (1 page = 4KB):  [page 4] [page 17] [page 93]
order 1 (2 pages):        [pages 8-9] [pages 56-57]
order 2 (4 pages):        [pages 12-15]
order 3 (8 pages):        (empty)
order 4 (16 pages):       [pages 64-79]
...
order 10 (1024 pages):    (empty)

Allocation: request 3 pages:
  1. Round up to next power of 2: 4 pages (order 2)
  2. Check order 2 free list -> non-empty, take [pages 12-15]

  If order 2 were empty:
    3. Check order 3: exists, split [pages 12-19] into two buddies
       - Buddy A: [pages 12-15] -> return to caller
       - Buddy B: [pages 16-19] -> add to order 2 free list
    4. Continue splitting if needed

Freeing: free [pages 12-15]:
  1. Compute buddy address for order 2: pages 16-19
  2. Check if buddy is free (in order 2 free list)
  3. If yes: merge into [pages 12-19], move to order 3
  4. Check buddy at order 3: pages 20-27
  5. Continue merging up
```

#### Pseudocode

```
alloc_pages(gfp_mask, order):
  for o = order to MAX_ORDER-1:
    if free_list[o] is not empty:
      block = remove from free_list[o]
      while o > order:
        o--
        buddy = split(block)   // split into two halves
        add buddy to free_list[o]
      mark pages as allocated
      return block
  return NULL (OOM)

free_pages(block, order):
  page_idx = page_to_index(block)
  for o = order to MAX_ORDER-2:
    buddy_idx = page_idx ^ (1 << o)  // XOR flips the bit at order o
    buddy = index_to_page(buddy_idx)
    if buddy is not free or buddy's order != o:
      break
    remove buddy from free_list[o]
    page_idx &= buddy_idx             // merge: keep lower address
    order++
  add block at page_idx to free_list[order]
```

#### Dry Run: Allocate 3 pages (order 2)

```
State before: order 2 empty, order 3 has [8-15] (8 pages)

Step 1: Check order 2 -> empty
Step 2: Check order 3 -> [8-15] exists
Step 3: Split [8-15] -> buddy A [8-11], buddy B [12-15]
Step 4: Add B [12-15] to order 2 free list
Step 5: Return A [8-11] to caller

State after: order 2 has [12-15], order 3 empty

Now free A [8-11] back:
Step 1: buddy of [8-11] at order 2 = [12-15]
Step 2: [12-15] IS in order 2 free list -> merge
Step 3: Merged = [8-15], add to order 3 free list

State after free: order 2 empty, order 3 has [8-15]
```

### SLAB/SLUB Allocator


The **SLAB allocator** (and its successor SLUB, default since Linux 2.6.23) manages kernel object allocations. It maintains caches of commonly used objects.

#### SLUB Structure

```
SLUB Cache: "task_struct_cache" (object size: 2KB)
+---------------------------------------------------------------------+
| SLUB page (1 or more physical pages)                                |
|                                                                     |
|  +----------+----------+----------+----------+----------+----------+|
|  | task     | task     | task     | FREE     | FREE     | FREE     ||
|  | struct   | struct   | struct   | (obj)    | (obj)    | (obj)    ||
|  +----------+----------+----------+----------+----------+----------+|
|  freelist pointer -> offset of 1st free object (indices: 3,4,5)    |
+---------------------------------------------------------------------+
| more SLUB pages...                                                  |
|                                                                     |
| Partial page:  [task][FREE][task][task][FREE][FREE]                 |
| Full page:     [task][task][task][task][task][task]                 |
| Empty page:    [FREE][FREE][FREE][FREE][FREE][FREE]                 |
+---------------------------------------------------------------------+
```

#### Key SLUB Operations

```c
// Create a cache for a specific object type
struct kmem_cache *cache = kmem_cache_create(
    "my_object",          // name (visible in /proc/slabinfo)
    sizeof(struct my_obj), // object size
    0,                     // alignment (0 = natural)
    SLAB_HWCACHE_ALIGN,    // flags
    NULL);                 // constructor (optional)

// Allocate an object
struct my_obj *obj = kmem_cache_alloc(cache, GFP_KERNEL);

// Free an object
kmem_cache_free(cache, obj);

// Destroy cache (unload module)
kmem_cache_destroy(cache);
```

#### kmalloc vs vmalloc vs __get_free_pages

| Function | Contiguity | Max Size | Speed | Use Case |
|----------|-----------|----------|-------|----------|
| __get_free_pages | Physical + virtual | 4MB (10 pages) | Fastest | DMA buffers, page table pages |
| kmalloc | Physical + virtual | 128KB (default) | Fast | Driver buffers, small allocations |
| vmalloc | Virtual only | Limited by VM area | Slower (page table update) | Large kernel module, swap, framebuffer |
| kvmalloc | Virtual (falls back to vmalloc) | Any | Medium | Best-effort large allocation |

#### Complexity Analysis

| Allocator | Allocate | Free | Why |
|-----------|----------|------|-----|
| Buddy allocator | O(log n) worst, O(1) avg | O(log n) worst, O(1) avg | Split/coalesce walks up orders; fast-path has per-CPU page lists |
| SLUB allocator | O(1) | O(1) | Freelist pop/push from per-CPU partial slabs |
| vmalloc | O(n) | O(n) | Must walk free vmap area, update page tables |

### Kernel Same-Page Merging (KSM)


KSM scans anonymous memory pages and merges identical ones:
- Redundant in virtual machines running the same OS/kernel
- Merged pages are marked copy-on-write
- Controlled via `/sys/kernel/mm/ksm/`

```bash
$ echo 100 > /sys/kernel/mm/ksm/pages_to_scan   # pages per scan
$ echo 500 > /sys/kernel/mm/ksm/sleep_millisecs  # ms between scans
$ cat /sys/kernel/mm/ksm/pages_shared            # merged pages
```

### OOM Killer


When memory is exhausted and swap is full, the kernel invokes the OOM killer:

```c
// Simplified OOM selection criteria (badness heuristic)
unsigned long oom_badness(struct task_struct *p, struct mem_cgroup *memcg)
{
    // Base: total virtual memory size
    points = get_mm_rss(p->mm) + get_mm_counter(p->mm, MM_SWAPENTS);
    
    // Root processes get less points (they're important)
    if (has_capability_noaudit(p, CAP_SYS_ADMIN))
        points -= 30;
    
    // Child processes of init (essential services) protected
    if (p->pid == 1)  // init
        points = 0;
    
    // OOM score adjustment (user-set via /proc/pid/oom_score_adj)
    points += p->signal->oom_score_adj;
    
    // More points = more likely to be killed
    return points;
}
```

```bash
# Check which process will be killed first
$ for pid in /proc/[0-9]*; do
>   echo "$(cat $pid/oom_score) $(cat $pid/comm) $(cat $pid/oom_score_adj)";
> done | sort -rn | head -5

# Protect a critical process
$ echo -1000 > /proc/$(pidof mysqld)/oom_score_adj

# Sacrifice a process
$ echo 1000 > /proc/$(pidof memory_hog)/oom_score_adj
```

### Edge Cases in Memory Management


| Edge Case | Behavior | Mechanism |
|-----------|----------|-----------|
| **OOM (no memory)** | Kernel invokes OOM killer; selects victim | badness heuristic; can deadlock if victim holds locks |
| **Memory fragmentation** | Free pages exist but no contiguous block for order >= 1 | `compact_nodes()` / `kswapd` defrag via page migration |
| **kmalloc > 8KB** | Falls back to vmalloc transparently (if GFP flags allow) | `kmalloc_large()` uses `alloc_pages()` directly |
| **vmalloc fault** | TLB miss; kernel walks page tables to find mapping | vmalloc area covered by `kernel_page_tables` on x86 |

---

## 5. Virtual File System (VFS)

### Real-World Analogy


The VFS is like **a postal system**:

- **super_block** = A post office distribution center (one per country/mounted FS)
- **inode** = A specific address/location (unique per file; stores metadata like who lives there, size of building)
- **dentry** = A street sign in a directory listing (one per path component: "/", "usr", "share", "doc")
- **file** = An open letter you are currently reading (has a bookmark/f_pos for where you are)
- **file_operations** = Instructions for how letters are handled in each country (ext4 reads vs NFS reads)

No matter who delivers the mail (ext4, XFS, NFS), the postal worker uses the same procedure: find zip code (super_block), go to address (inode), find street sign (dentry), read letter (file).

### VFS Object Model


```c
// The four core VFS objects

// 1. super_block: metadata for a mounted filesystem
struct super_block {
    dev_t                     s_dev;          // Device identifier
    unsigned long             s_blocksize;    // Block size (e.g., 4096)
    struct file_system_type   *s_type;        // ext4, xfs, btrfs, etc.
    struct super_operations   *s_op;          alloc_inode, destroy_inode, sync_fs, etc.
    struct dentry             *s_root;        // Root dentry of this FS
    struct list_head          s_inodes;       // List of all inodes on this FS
    void                      *s_fs_info;     // Filesystem-specific data
};

// 2. inode: permanent metadata for a file/directory
struct inode {
    umode_t                   i_mode;         // File type + permissions
    uid_t                     i_uid;          // Owner UID
    gid_t                     i_gid;          // Owner GID
    loff_t                    i_size;         // File size in bytes
    struct timespec64         i_atime;        // Last access time
    struct timespec64         i_mtime;        // Last modify time
    struct timespec64         i_ctime;        // Last status change time
    unsigned long             i_ino;          // Inode number (unique within FS)
    struct inode_operations   *i_op;          // lookup, create, link, unlink, mkdir, etc.
    struct address_space      *i_mapping;     // Page cache mapping
    atomic_t                  i_count;        // Reference count
};

// 3. dentry: directory entry (path component in memory)
struct dentry {
    struct dentry             *d_parent;      // Parent directory dentry
    struct qstr               d_name;         // Component name ("home", "file.txt")
    struct inode              *d_inode;       // Inode this dentry points to
    unsigned char             d_flags;        // Flags (DCACHE_DISCONNECTED, etc.)
    struct list_head          d_child;        // Child of parent's d_subdirs list
    struct list_head          d_subdirs;      // List of child dentries
    struct dentry_operations  *d_op;          // d_compare, d_delete, d_release
    struct super_block        *d_sb;          // Super block
};

// 4. file: open file descriptor (process-specific)
struct file {
    struct file_operations    *f_op;          // read, write, llseek, mmap, etc.
    struct dentry             *f_dentry;      // Associated dentry
    struct vfsmount           *f_vfsmnt;      // Mount point
    loff_t                    f_pos;          // Current file position
    fmode_t                   f_mode;         // FMODE_READ, FMODE_WRITE
    int                       f_flags;        // O_SYNC, O_NONBLOCK, etc.
    void                      *private_data;  // Filesystem-specific data
};
```

### System Call Flow: read()


```
User space:                        Kernel space:
+-----------+
| read(fd, buf, count)            Stage 1: syscall entry
|   glibc wrapper:                - syscall instruction (sysenter/syscall)
|     mov $0, %rax (sys_read)     - save registers to pt_regs
|     syscall                     - verify syscall number (0 = read)
+--------+-----------+            - jump to sys_read() in fs/read_write.c
         |            ^
         |            | return to user (restore regs, iret/sysexit)
         v            |
   Stage 2: VFS sys_read()
   +--------------------------+
   | fd = 3 (regular file)    |
   | struct file *filp =      |
   |   fget(fd)               |
   | struct inode *inode =    |
   |   file_inode(filp)       |
   | loff_t pos = filp->f_pos |
   |                          |
   | Stage 3: call specific FS|
   | ret = filp->f_op->read() |
   |   -> ext4_file_read_iter() -> -> -> generic_file_read_iter()
   |                          |
   | Stage 4: page cache      |
   | address_space =           |
   |   inode->i_mapping       |
   | page = pagecache_get_page|
   | if page not in cache:    |
   |   page = page_cache_alloc|
   |   mapping->a_ops->       |
   |     readpage(page)       |
   |   -> submit_bio()        |
   |   -> block layer         |
   |   -> device driver       |
   |   -> disk                |
   |                          |
   | copy_page_to_user(page,  |
   |   buf, count)            |
   | filp->f_pos += count     |
   | fput(filp)               |
   | return count             |
   +--------------------------+
```

### VFS Path Walk: /home/user/docs/file.txt


```
Step 1: Start at task->fs->root (dentry for "/")
Step 2: Look up "home":
   - Check dentry cache (dcache) for <parent_dentry, "home">
   - If miss: call ext4_lookup() on root inode
   - Read root directory contents, find "home" entry
   - Create a new dentry, attach to inode from on-disk
Step 3: Follow dentry to inode. Look up "user":
   - Check dcache (miss on first access)
   - Call inode->i_op->lookup() on home_inode
   - ext4_readdir() on home directory
   - Find "user" entry, get inode number
   - If not in dcache: alloc new dentry + read inode from disk
Step 4: Follow to inode. Look up "docs":
   - Same process (usually dentry is now cached if recently accessed)
Step 5: Follow to inode. Look up "file.txt":
   - Same process
   - Final dentry -> final inode
Step 6: Open: dentry->d_inode->i_fop->open()
   - For regular file: typically just succeeds (check perms, etc.)
```

### Dentry Cache (dcache)


The dcache speeds up path resolution. It caches resolved dentry-to-inode mappings.

```
dcache (hash table, keyed by parent dentry + name hash):
+-----------------------------------------------+
| hash_buckets[0]: dentry_A -> dentry_B -> ...  |
| hash_buckets[1]: dentry_C                     |
| hash_buckets[2]: (empty)                      |
| ...                                            |
+-----------------------------------------------+

Each dentry has:
- d_hash (hash list pointer)
- d_lru (for LRU reclaim when memory tight)
- d_count (reference count; can be negative dentry for names that don't exist)
```

### VFS Complexity Analysis


| Operation | Complexity | Why |
|-----------|------------|-----|
| open() path walk | O(n) worst where n = path depth | Each "/" component requires lookup and dcache probe |
| open() with dcache hot | O(n) but each lookup is O(1) average | Hash table lookup per component |
| read() cached | O(1) if page in page cache | Direct copy_to_user from page cache |
| read() uncached | O(1) + I/O wait | Page fault reads from disk; I/O dominates |
| stat() | O(n) path walk then O(1) inode read | Walk to inode; read metadata from inode |

### Edge Cases in VFS


| Edge Case | Behavior | Kernel Mechanism |
|-----------|----------|-----------------|
| **Symlink loop** | ELOOP returned (max 40 follows) | `symlink` limit in `namei()` |
| **Hardlink across mounts** | EXDEV returned | Inode numbers unique per FS; cannot link across superblocks |
| **File deleted while open** | Inode retained until all fds closed | `i_count` reference counting; data still accessible |
| **Disk full during write** | ENOSPC; page remains dirty | writeback fails; error returned to user |
| **mmap file truncated** | SIGBUS on access past new size | `vm_ops->fault()` checks i_size |
| **Stale NFS file handle** | ESTALE | Server restarted inode; client dentry invalid |

---

## 6. Interrupt Handling

### Real-World Analogy


Interrupt handling is like **a restaurant with a host and a chef**:

- **Interrupt (IRQ)** = A customer arrives (doorbell rings)
- **Top half (ISR)** = The host quickly seats the customer, takes the name, gives menu. Very fast (approx 10us). Must not block.
- **Bottom half (softirq/tasklet/workqueue)** = The chef cooks the meal. Can take longer, can sleep if needed.
- **Why split?** If the host did the cooking too, the door would be unattended and no new customers could be seated (interrupts would be disabled too long).

### Interrupt Flow


```
Hardware Event (e.g., network packet arrives):
  |
  +-> CPU receives IRQ (interrupt request line)
  |      |
  +-> CPU saves current context (registers, flags)
  |      |
  +-> Disable interrupts on this CPU (to prevent nesting)
  |      |
  +-> Jump to IDT (Interrupt Descriptor Table) entry
  |      |
  +-> Execute ISR (top half):
  |     - Acknowledge hardware (clear IRQ)
  |     - Copy data to memory (DMA or PIO)
  |     - Schedule bottom half (softirq/tasklet/workqueue)
  |     - Return: restore registers, re-enable interrupts
  |      |
  +-> (later, on next ksoftirqd or return from interrupt):
       Execute bottom half:
       - Process the data (e.g., TCP/IP stack)
       - Wake up waiting processes
       - Can sleep if workqueue; cannot if softirq/tasklet
```

### Top Half vs Bottom Half


| Aspect | Top Half (ISR) | Bottom Half (Softirq/Tasklet/Workqueue) |
|--------|---------------|----------------------------------------|
| **When** | Immediately on interrupt | Deferred, scheduled by top half |
| **Interrupts** | Disabled on local CPU | Enabled (softirqs disabled for softirq) |
| **Can sleep** | No | Softirq: No; Workqueue: Yes |
| **Duration** | As short as possible (us) | Longer (ms or more) |
| **Context** | Interrupt context | Softirq: interrupt; Tasklet: softirq; Workqueue: process |
| **Priority** | Highest | Configurable |
| **Dedicated to** | Specific IRQ | Usually shared (tasklet bound to CPU) |

### Bottom Half Mechanisms


| Mechanism | Type | Can Sleep | Concurrency | Use Case |
|-----------|------|-----------|-------------|----------|
| **softirq** | Statically allocated | No | Multiple CPUs run same handler | Network RX/TX, block layer, timers, tasklets |
| **tasklet** | Built on softirq | No | Same tasklet serialized on one CPU | Drivers (classic) |
| **workqueue** | Kernel threads | Yes | Scheduled on any CPU | Long-running tasks, I/O completion |
| **threaded IRQ** | Kernel thread per IRQ | Yes | Per-IRQ thread | Drivers that need sleep, PREEMPT_RT |

### Edge Cases in Interrupt Handling


| Edge Case | Behavior | Kernel Mechanism |
|-----------|----------|-----------------|
| **IRQ storm** | Thousands of interrupts per second | `irqbalance` spreads across CPUs; `nohz_full` for isolation |
| **Interrupt nesting** | Top half interrupted by higher-priority IRQ | Kernel tracks interrupt nesting depth; saves/restores flags |
| **Bottom half too slow** | Softirqs consume all CPU (networking flood) | `ksoftirqd` bounds softirq processing; `net_rx_action` quota |
| **Missing IRQ ack** | Device never generates another interrupt | Hard lockup detector; watchdog fires |

---

## 7. Kernel Synchronization

### Real-World Analogy


Synchronization in the kernel is like **access control in a busy office building**:

- **Spinlock** = The single-emergency-bathroom key. You grab it, go in, lock the door, come out in 2 seconds. If the key is taken, you stand there spinning in place until it's free. Only for very quick tasks.
- **Mutex** = The coffee machine queue. If machine is busy, you go sit at your desk (sleep) and get notified when it's free. Can wait a while.
- **RCU (Read-Copy-Update)** = The office whiteboard. Many people can read it simultaneously. When someone needs to update it, they prepare a new version on a separate board, then quickly swap them. Readers never wait.
- **Atomic operations** = The elevator call button. Pressing it is a single, indivisible action. Two people cannot both press it at exactly the same time.

### Synchronization Primitive Comparison


| Primitive | Mechanism | Context | Sleep | Overhead (ns) | Starvation-Free | Use Case |
|-----------|-----------|---------|-------|---------------|-----------------|----------|
| **spinlock** | Busy-wait (atomic test-and-set) | Any (including IRQ) | No | 10-40 | No (can spin forever) | Quick critical sections (us) |
| **raw_spinlock** | Uninterruptible busy-wait | Any (including NMI) | No | 5-20 | No | Very low-level (scheduler, timer) |
| **mutex** | Sleep-wait (down/up) | Process context | Yes | 100-1000 | Yes (priority inheritance) | Longer critical sections (ms) |
| **rt_mutex** | Sleep-wait with PI | Process context | Yes | 200-2000 | Yes (PI prevents inversion) | Real-time mutex (futex, PI-futex) |
| **semaphore** | Count-based sleep-wait | Process context | Yes | 100-1000 | No | Counting resource access |
| **rwlock** | Multiple readers / single writer | Any (including IRQ) | No | 10-50 | No (writer can starve) | Read-mostly, short sections |
| **RCU** | Lock-free read, deferred free | Any | Grace period only | Read: 1-5; Free: 100-10K | Yes | Read-mostly, pointer updates |

### Spinlock Usage


```c
spinlock_t my_lock = SPIN_LOCK_UNLOCKED; // or DEFINE_SPINLOCK(my_lock)

void critical_section(void)
{
    unsigned long flags;
    
    // Must disable local IRQ if this code runs in interrupt context
    spin_lock_irqsave(&my_lock, flags);
    
    // Critical section: very short, no sleeping, no blocking
    shared_data->value++;
    list_add(&shared_data->list, &global_list);
    
    spin_unlock_irqrestore(&my_lock, flags);
}
```

**Spinlock Pitfalls**:

| Mistake | Consequence |
|---------|-------------|
| Holding spinlock while sleeping | System deadlock (scheduler needs same lock) |
| Spinlock protect across IRQ handler | Interrupt deadlock (ISR spins on held lock) |
| Too long in spinlock critical section | High interrupt latency, system feels sluggish |
| Not disabling interrupts (`spin_lock` not `_irqsave`) | Interrupt handler on same CPU deadlocks |

### Mutex Usage


```c
DEFINE_MUTEX(my_mutex);

void long_critical_section(void)
{
    mutex_lock(&my_mutex);    // may sleep (schedule out)
    
    // Longer operation; can sleep (kmalloc, copy_to_user, etc.)
    struct my_obj *obj = kmalloc(sizeof(*obj), GFP_KERNEL);
    
    mutex_unlock(&my_mutex);  // wake up waiters
}
```

**Mutex vs Spinlock Decision**:

```
Can the critical section sleep?
  +-- Yes -> Use mutex (or semaphore)
  +-- No -> Can it run in interrupt context?
  |     +-- Yes -> Use spinlock (with appropriate irq variant)
  |     +-- No -> Is the critical section very short (us)?
  |     |     +-- Yes -> Use spinlock (faster)
  |     |     +-- No -> Use mutex (avoid long busy-wait)
```

### Read-Copy-Update (RCU)


RCU is the kernel's most sophisticated synchronization mechanism, designed for **read-mostly data structures**.

#### How RCU Works

1. **Reader**: Read the pointer without any lock. Just ensure you access before a grace period ends.
2. **Writer**: Create a new copy of the data structure, update the pointer atomically (rcu_assign_pointer).
3. **Grace period**: Wait until all pre-existing readers have finished. Then free the old copy.

```
Initial state: ptr -> [data_old]

Reader 1 starts: reads ptr (gets data_old)     [time ---->
Reader 2 starts: reads ptr (gets data_old)     [time ---->
Writer: alloc new_data, copy, modify
Writer: rcu_assign_pointer(ptr, new_data)       ptr -> [data_new]
Reader 3 starts: reads ptr (gets data_new)      [time ---->
Reader 4 starts: reads ptr (gets data_new)      [time ---->
Writer: synchronize_rcu()                       wait for R1,R2 to finish
Writer: kfree(data_old)                         safe to free
```

#### RCU API

```c
/* Reader side */
rcu_read_lock();             // lightweight; disables preemption only
p = rcu_dereference(ptr);   // read + memory barrier
// access through p...
rcu_read_unlock();

/* Writer side */
struct my_data *new = kmalloc(sizeof(*new), GFP_KERNEL);
*new = *old;                 // copy
new->field = new_value;      // modify
rcu_assign_pointer(ptr, new); // publish (memory barrier)
synchronize_rcu();           // wait for all existing readers to finish
kfree(old);                  // safe to free old data
```

#### RCU Complexity

| Characteristic | Value | Why |
|---------------|-------|-----|
| Reader overhead | O(1), approx 1-5ns | Just pointer read + memory barrier |
| Writer update | O(1) | Atomic pointer assignment |
| Grace period | O(wait for pre-existing readers) | Depends on CPU scheduling; typically tens of us |
| Memory for grace period tracking | Per-CPU bitmaps | Scales with number of CPUs |

### Priority Inversion


Priority inversion occurs when a high-priority task is blocked by a low-priority task holding a needed lock, while a medium-priority task preempts the low-priority task.

```
Scenario: H (high), M (medium), L (low) priority tasks
Lock L1 shared between H and L

Time -->
H: needs L1  -- blocked (L holds L1)
L: holds L1
M: preempts L (M has higher priority than L, but lower than H)
   -- L cannot release L1 because L is not running
   -- H is stuck waiting for L1
   -- M runs freely despite H being blocked
   -- Priority inversion!

Solution: Priority Inheritance Protocol (PI)
  - When H blocks on L1 held by L:
    - L temporarily inherits H's priority (becomes high priority)
    - L runs instead of M
    - L releases L1, priority drops back to normal
    - H acquires L1 and runs
```

```c
// Linux implements PI via rt_mutex (used in futex, PI-futex)
struct rt_mutex {
    raw_spinlock_t      wait_lock;
    struct rb_root_cached   waiters;   // Red-black tree of waiters
    struct task_struct      *owner;    // Current owner (bit 0 marks "has waiters")
};

// PI is transparent to user space via:
//   pthread_mutexattr_setprotocol(&attr, PTHREAD_PRIO_INHERIT);
//   pthread_mutex_init(&mtx, &attr);
```

### Edge Cases in Kernel Synchronization


| Edge Case | Behavior | Kernel Mechanism |
|-----------|----------|-----------------|
| **Spinlock in IRQ context** | Must use `spin_lock_irqsave()` | Disables local interrupts; prevents deadlock |
| **ABBA deadlock** | Two tasks, two locks, inconsistent order | lockdep validates locking order; circular dependency detected |
| **RCU stall** | Reader holds rcu_read_lock for too long | RCU stall detector prints warning; can panic `rcu_cpu_stall_panic` |
| **Lock contention on hot cacheline** | Cacheline bouncing between CPUs | `perf c2c` detects false sharing; `____cacheline_aligned` annotation |
| **Mutex owner dies** | Never releases lock | Kernel detects: `mutex_lock()` returns -EOWNERDEAD (robust futex) |

---

## 8. Kernel Modules

### Real-World Analogy


Kernel modules are like **USB peripherals for the operating system**:

- You plug in a USB device (insmod module.ko)
- It connects to the system bus and registers itself
- Other parts of the system can now use it
- You unplug it (rmmod) and it disconnects
- No need to reboot the computer (no need to recompile the kernel)

### Complete Kernel Module Example


```c
// simple_proc_module.c
#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/init.h>
#include <linux/proc_fs.h>
#include <linux/uaccess.h>
#include <linux/slab.h>

#define PROC_NAME "my_device"
#define BUF_SIZE  PAGE_SIZE

static char *storage;
static struct proc_dir_entry *proc_entry;

static ssize_t my_read(struct file *file, char __user *ubuf,
                       size_t count, loff_t *ppos)
{
    int len = strlen(storage);
    return simple_read_from_buffer(ubuf, count, ppos, storage, len);
}

static ssize_t my_write(struct file *file, const char __user *ubuf,
                        size_t count, loff_t *ppos)
{
    if (count > BUF_SIZE - 1)
        return -ENOSPC;
    
    if (copy_from_user(storage, ubuf, count))
        return -EFAULT;
    
    storage[count] = '\0';
    return count;
}

static struct file_operations proc_fops = {
    .owner = THIS_MODULE,
    .read  = my_read,
    .write = my_write,
};

static int __init my_init(void)
{
    storage = kmalloc(BUF_SIZE, GFP_KERNEL);
    if (!storage)
        return -ENOMEM;
    
    strcpy(storage, "Hello from kernel module!\n");
    
    proc_entry = proc_create(PROC_NAME, 0666, NULL, &proc_fops);
    if (!proc_entry) {
        kfree(storage);
        return -ENOMEM;
    }
    
    printk(KERN_INFO "Module loaded. Created /proc/%s\n", PROC_NAME);
    return 0;
}

static void __exit my_exit(void)
{
    remove_proc_entry(PROC_NAME, NULL);
    kfree(storage);
    printk(KERN_INFO "Module unloaded. Removed /proc/%s\n", PROC_NAME);
}

module_init(my_init);
module_exit(my_exit);

MODULE_LICENSE("GPL");
MODULE_AUTHOR("OS Course");
MODULE_DESCRIPTION("/proc device example - read/write string storage");
```

### Makefile


```makefile
obj-m += simple_proc_module.o

KDIR := /lib/modules/$(shell uname -r)/build
PWD  := $(shell pwd)

all:
	$(MAKE) -C $(KDIR) M=$(PWD) modules

clean:
	$(MAKE) -C $(KDIR) M=$(PWD) clean
```

### Build and Test


```bash
# Build the module
$ make
make -C /lib/modules/6.2.0-35-generic/build M=/home/user/modules modules
  CC [M]  simple_proc_module.o
  MODPOST simple_proc_module.mod.c
  CC [M]  simple_proc_module.mod.o
  LD [M]  simple_proc_module.ko

# Load
$ sudo insmod simple_proc_module.ko
$ lsmod | grep simple_proc
simple_proc_module     16384  0

# Test read
$ cat /proc/my_device
Hello from kernel module!

# Test write
$ echo "Kernel programming is fun" > /proc/my_device
$ cat /proc/my_device
Kernel programming is fun

# Check kernel log
$ dmesg | tail -2
[ 1234.567890] Module loaded. Created /proc/my_device

# Unload
$ sudo rmmod simple_proc_module
$ dmesg | tail -1
[ 1240.123456] Module unloaded. Removed /proc/my_device
```

### Module Loading Steps


1. **insmod** opens the .ko file, reads ELF headers
2. **sys_init_module()** copies module code into kernel memory via vmalloc
3. Kernel relocations are applied to fix symbol addresses
4. Module symbols are resolved against kernel symbol table (`/proc/kallsyms`)
5. **module_init()** function called with kernel module parameter
6. Module enters `MODULE_STATE_LIVE`; system can now use it

### Module Advantages & Disadvantages


| Advantage | Disadvantage |
|-----------|-------------|
| No reboot for driver updates | Module versioning (need modversion check) |
| Smaller base kernel | Reduced security (kernel code from unknown source) |
| Vendor drivers without upstreaming | Module licensing concerns (GPL vs proprietary) |
| Debug/test without rebuilding everything | Stack depth issues when many modules load |
| Distributions ship optional modules | Module dependency trees can be complex |

### Edge Cases in Kernel Modules


| Edge Case | Behavior | Kernel Mechanism |
|-----------|----------|-----------------|
| **Module init fails** | Module not loaded; memory cleaned up | `sys_init_module()` rolls back on error |
| **Module in use (refcount > 0)** | rmmod returns EBUSY | `try_module_get()` / `module_put()` refcounting |
| **Module stack overflow** | Random memory corruption; kernel oops | 8KB kernel stack; no guard page on all archs |
| **Module version mismatch** | insmod fails with -EINVAL | `modversions` CRC check on exported symbols |
| **Circular module dependency** | modprobe fails | modprobe detects dependency loops |

---

## 9. Control Groups (cgroups) and Namespaces

### Real-World Analogy


- **cgroups** = The building's HOA (Homeowners Association) rules. Each apartment gets a maximum number of guests (CPU), water usage (memory), and parking spots (I/O). If one apartment throws a party (runaway process), the HOA restricts their resources instead of evicting everyone.
- **Namespaces** = The individual apartment units themselves. Each apartment has its own door (PID namespace), windows (network namespace), mailbox (IPC namespace), and street address (mount namespace). People in apartment A cannot see what's happening in apartment B.

### cgroups (Control Groups)


cgroups limit, account for, and isolate resource usage of process collections. There are two versions: cgroup v1 (unified hierarchy) and cgroup v2 (single hierarchy, default since kernel 5.x).

#### cgroup v2 Controllers

| Controller | Resource Controlled | Interface File | Example |
|-----------|---------------------|----------------|---------|
| **cpu** | CPU time, scheduling | cpu.max, cpu.weight | `echo "50000 100000" > cpu.max` (50% of 1 CPU) |
| **memory** | Memory usage, swap | memory.max, memory.current | `echo 100M > memory.max` |
| **io** | Block I/O bandwidth | io.max, io.weight | `echo "8:0 rbps=1048576" > io.max` |
| **pids** | Number of processes | pids.max | `echo 100 > pids.max` |
| **cpuset** | CPU pinning, NUMA nodes | cpuset.cpus, cpuset.mems | `echo "0-3" > cpuset.cpus` |
| **hugetlb** | HugeTLB pages | hugetlb.1GB.max | `echo 1G > hugetlb.1GB.max` |
| **rdma** | RDMA resources | rdma.max | `echo "mlx5_0 max=10" > rdma.max` |

### cgroup Usage


```bash
# Create a cgroup hierarchy
$ mkdir /sys/fs/cgroup/mygroup

# Set memory limit to 100MB
$ echo 104857600 > /sys/fs/cgroup/mygroup/memory.max

# Set CPU limit: 50ms of every 100ms period (50% of one CPU)
$ echo "50000 100000" > /sys/fs/cgroup/mygroup/cpu.max

# Limit number of processes to 50
$ echo 50 > /sys/fs/cgroup/mygroup/pids.max

# Add a process to the cgroup
$ echo 1234 > /sys/fs/cgroup/mygroup/cgroup.procs

# Check current memory usage
$ cat /sys/fs/cgroup/mygroup/memory.current

# Monitor OOM events
$ cat /sys/fs/cgroup/mygroup/memory.events
low 0
high 0
max 0
oom 0
oom_kill 0
```

### Namespaces


Namespaces provide **isolation of global system resources**. Each namespace type wraps a global resource so that processes inside see their own independent instance.

| Namespace | Isolated Resource | Created By | /proc Entry | Since Kernel |
|-----------|-------------------|------------|-------------|--------------|
| **mount** | Mount points, filesystem hierarchy | CLONE_NEWNS | /proc/self/mountinfo | 2.4.19 |
| **uts** | Hostname, domain name | CLONE_NEWUTS | - | 2.6.19 |
| **ipc** | System V IPC, POSIX message queues | CLONE_NEWIPC | - | 2.6.19 |
| **pid** | Process IDs | CLONE_NEWPID | /proc/self/ns/pid | 2.6.24 |
| **net** | Network devices, IP addresses, routing | CLONE_NEWNET | /proc/self/ns/net | 2.6.29 |
| **user** | UID/GID mapping | CLONE_NEWUSER | /proc/self/ns/user | 3.8 |
| **cgroup** | cgroup root directory | CLONE_NEWCGROUP | /proc/self/ns/cgroup | 4.6 |
| **time** | System time (boot time, monotonic) | CLONE_NEWTIME | - | 5.6 |

### cgroups vs Namespaces: Comparison


| Aspect | cgroups | Namespaces |
|--------|---------|------------|
| **Purpose** | Limit and measure resources | Isolate global resources |
| **Model** | Hierarchy (tree of groups) | Set of per-process views |
| **What they control** | CPU, memory, IO, pids | PID, network, mount, UTS, IPC, user |
| **Interaction** | If no limit, unlimited access | If not isolated, global view shared |
| **Used by** | systemd, Docker, LXC | Docker, LXC, containerd |
| **Kernel mechanism** | cgroup controller subsystems | struct nsproxy + namespace structures |
| **Security boundary** | Not a security boundary (can escape) | Not a full security boundary (root in ns != root on host) |
| **Performance impact** | Minimal accounting overhead | Minimal (except mount ns on heavy FS activity) |
| **Together** | System resource caps | Process isolation |

### How Docker Uses cgroups and Namespaces


Each Docker container is a **set of namespaces + cgroup limits** sharing the host kernel:

```
+-----------------------------------------------------------+
| Host Linux Kernel                                         |
|                                                           |
|  +-------+  +-------+  +-------+                          |
|  | cgroup|  | cgroup|  | cgroup|                          |
|  | limits|  | limits|  | limits|                          |
|  +---|---+  +---|---+  +---|---+                          |
|      |          |          |                              |
|  +---v-----+  +-v-------++-v-------+                      |
|  |Container|  |Container||Container|                      |
|  | 1: nginx|  | 2: mysql|| 3: redis|                      |
|  |ns: pid  |  |ns: pid  ||ns: pid  |                      |
|  |ns: net  |  |ns: net  ||ns: net  |                      |
|  |ns: mnt  |  |ns: mnt  ||ns: mnt  |                      |
|  |ns: uts  |  |ns: uts  ||ns: uts  |                      |
|  |ns: ipc  |  |ns: ipc  ||ns: ipc  |                      |
|  +---------+  +---------++---------+                      |
+-----------------------------------------------------------+
```

### Edge Cases in cgroups and Namespaces


| Edge Case | Behavior | Kernel Mechanism |
|-----------|----------|-----------------|
| **OOM within cgroup** | Only processes in the cgroup are killed | `memory.events oom_kill` increments; other processes unaffected |
| **UDP socket leak in net ns** | Net namespace cannot be destroyed | `sit tunnel` devices can leak; need `ip netns delete` |
| **PID namespace overflow** | PID 0 (idle) not available; fork fails | `pids.max` prevents fork bomb inside container |
| **cgroup pressure stall** | PSI (Pressure Stall Information) signals memory/IO pressure | `/proc/pressure/{cpu,memory,io}` indicates imminent OOM |

---

## 10. Interview Corner

### Q1: What is the cost of switching between user mode and kernel mode?


**Answer:**

A user-to-kernel mode switch (e.g., for a system call) involves:

1. **CPU mode change**: Rings 3 -> 0 (x86). The CPU loads a new CS segment with Ring 0 privilege.
2. **Stack switch**: Switch from user stack to kernel stack (per-process kernel stack, 8KB or 16KB).
3. **Register save**: All general-purpose registers, flags, and instruction pointer saved to kernel stack (pt_regs).
4. **Page table**: No switch needed (kernel mapped in upper half of every process address space).
5. **TLB flush**: Usually not needed (kernel pages are global; user pages stay unless ASID exhausted).

**Cost breakdown**:
- **Transition overhead**: 50-200ns (syscall/sysenter is faster than int 0x80)
- **Full context switch (mode + process)**: 1-10us (depends on CPU, cache working set)

```bash
# Measure syscall overhead with perf
$ perf stat -e cycles,instructions -r 1000 python3 -c "import os; os.getpid()"

# Typical result (x86_64, 3GHz):
#  getpid() syscall: ~200 cycles (~67ns)
#  read() syscall with actual I/O: ~10,000+ cycles (dominated by I/O)
```

### Q2: How does the kernel handle a system call?


**Answer:**

```
1. User program calls a glibc wrapper (e.g., write(3, buf, 1024))
2. glibc moves syscall number (1 = write) into %rax, arguments into %rdi, %rsi, %rdx
3. glibc executes 'syscall' instruction (x86_64)
   - CPU saves return address to %rcx, RFLAGS to %r11
   - CPU loads CS with kernel code segment (Ring 0)
   - CPU loads RIP from MSR_LSTAR (syscall entry point, entry_SYSCALL_64)
4. Kernel saves all registers to pt_regs on kernel stack
5. Kernel calls syscall_trace_enter() for ptrace/seccomp
6. Kernel indexes sys_call_table[syscall_nr] -> calls sys_write()
7. Kernel executes the actual operation (VFS -> ext4 -> block layer)
8. On return: syscall_trace_exit(), restore registers, 'sysretq' instruction
9. glibc receives return value (or sets errno for negative returns)
```

**Overhead by component**:

| Component | Time (ns) |
|-----------|-----------|
| CPU mode switch | 10-30 |
| Register save/restore | 20-40 |
| Syscall dispatch (table lookup) | 5-10 |
| Security hooks (SELinux, seccomp) | 50-500 |
| **Total (empty syscall like getpid)** | **100-500** |

### Q3: When does the OOM killer trigger, and how does it select victims?


**Answer:**

The OOM killer triggers when `__alloc_pages_slowpath()` fails after trying:
1. Reclaim (kswapd)
2. Compact memory
3. Swap
4. All available zones

**Selection algorithm** (oom_badness):
- `score = RSS + swap_usage + (total_vm / 16)` (approximately)
- Root processes weighted down (-30)
- Adjustments from `/proc/pid/oom_score_adj`
- **Innocent child heuristic**: A process with many children gets more points (to avoid killing init's children)
- init/PID 1 is protected (score capped to 0)

```bash
# View OOM scores for all processes
$ cat /proc/*/oom_score 2>/dev/null | sort -rn | head -5
```

### Q4: What is the difference between a process and a thread in Linux?


**Answer:**

In Linux, there is **no structural difference** between a process and a thread. Both are `task_struct` entries. The distinction is what resources are shared:

| Aspect | Process (fork()) | Thread (pthread_create()) |
|--------|-----------------|--------------------------|
| **clone() flags** | FORK_FLAGS | THREAD_FLAGS |
| **Address space** | Separate (COW) | Shared (CLONE_VM) |
| **File descriptors** | Copied | Shared (CLONE_FILES) |
| **Signal handlers** | Copied | Shared (CLONE_SIGHAND) |
| **PID** | Unique | Same tgid, unique tid |
| **Stack** | Separate, new region | Separate, allocated by pthreads |
| **wait()** | Can wait on child | Cannot wait on thread (tgkill) |
| **Kernel creation cost** | Higher (page tables, fd table) | Lower (share most resources) |

### Q5: Explain the /proc filesystem. Why is it called a "pseudo" filesystem?


**Answer:**

`/proc` is a **virtual (pseudo) filesystem** that exposes kernel data structures as files and directories. It is called "pseudo" because:

1. **No on-disk storage**: Files are generated on-the-fly by kernel code
2. **No real inodes**: inode numbers are dynamically assigned
3. **Zero-sized files**: Most /proc files show 0 bytes with `ls -l` but contain data when read
4. **Writes trigger actions**: Writing to `/proc/sys/...` changes kernel parameters

```c
// Simplified procfs file creation (from a module)
static const struct proc_ops my_fops = {
    .proc_read = my_read,
    .proc_write = my_write,
};

// Each read() triggers my_read() which formats data on demand
```

### Q6: What is priority inversion and how does Linux solve it?


**Answer:**

Priority inversion: a high-priority (H) task is blocked waiting for a low-priority (L) task that holds a lock, while a medium-priority (M) task preempts L. M runs freely while H starves.

**Linux solution**: Priority Inheritance Protocol (PI) via `rt_mutex`

- When H blocks on L's lock, L inherits H's priority
- L runs (preempting M since L now has H's priority)
- L releases lock, L's priority drops back
- H acquires lock and runs

**Verified via**: Lockdep (CONFIG_PROVE_LOCKING) detects potential inversion paths at boot.

### Q7: How do I measure context switch overhead?


```bash
# Using vmstat
$ vmstat 1
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 1  0      0 8100000 50000 6000000    0    0    20    30  200 1500  5  3 92  0  0

# cs = context switches per second (typically 1000-20000 on a busy server)

# Using perf bench
$ perf bench sched pipe
# Running 'sched/pipe' benchmark:
# Executed 1000000 pipe operations between two processes
# Total time: 2.456 sec
# 407166.1234 ops/sec
# Context switch cost: ~2.456us per operation (2 switches: ping-pong)
```

### Q8: What is the relationship between nice value and CFS vruntime?


**Answer:**

The nice value maps to a `load.weight` that scales vruntime accumulation:

```
vruntime_advancement = delta_exec * (NICE_0_LOAD / se->load.weight)
```

- **nice 0 (weight 1024)**: vruntime advances at wall-clock rate
- **nice -5 (weight 3355)**: vruntime advances 1024/3355 = 0.305x wall-clock rate (gets 3.3x more CPU)
- **nice 10 (weight 110)**: vruntime advances 1024/110 = 9.3x wall-clock rate (gets 0.11x CPU)

The weight table ensures that each nice value step changes CPU share by about 10% (geometric progression: 1.25^n).

---

## 11. Applications in Real Systems

### Android (Linux-based Mobile OS)


Android uses a modified Linux kernel with these key differences:

| Feature | Android Kernel | Standard Linux | Why |
|---------|---------------|---------------|-----|
| **IPC** | Binder | D-Bus / sockets | High-performance, reference-counted IPC for service-oriented architecture |
| **Memory** | Low Memory Killer (LMK) | OOM killer | Kill background apps proactively for foreground responsiveness |
| **Power** | Wakelocks | Suspend/resume | Prevent suspend during critical operations (music playback) |
| **Scheduling** | cgroups for app groups | CFS fixed | `top-app` gets 90% CPU, foreground gets 10%, background gets 0-5% |
| **Filesystem** | EROFS (read-only) | ext4/XFS | Performance-optimized for read-heavy mobile apps |
| **Process model** | Zygote (prefork Java VM) | fork()/exec() | Faster app startup by forking pre-initialized VM |

```bash
# Android-specific cgroup hierarchy
# /dev/cpuctl/top-app/     -> highest CPU share
# /dev/cpuctl/foreground/  -> medium CPU share
# /dev/cpuctl/background/  -> lowest CPU share (0-5%)
# /dev/cpuctl/system-background/ -> system services

# Check which cgroup a process belongs to
$ cat /proc/<pid>/cgroup
12:freezer:/
11:cpuset:/foreground
10:blkio:/foreground
9:cpuctl:/foreground
```

### Embedded Linux


Embedded Linux runs on resource-constrained devices (routers, IoT, automotive):

| Constraint | Adaptation | Kernel Feature |
|-----------|-----------|---------------|
| **Limited RAM (4-64MB)** | Static kernel, minimal modules | No module loading; built-in drivers |
| **No MMU** | uClinux fork | NOMMU support; flat memory model |
| **Real-time requirements** | PREEMPT_RT patch | Fully preemptible kernel, threaded IRQs |
| **Flash storage** | UBIFS/SquashFS | Flash-friendly filesystems with wear leveling |
| **Firmware size limits** | Kernel compression (XZ/LZ4) | `CONFIG_KERNEL_XZ` for decompression at boot |
| **Boot time (<1s)** | Initramfs with parallel startup | `initcall_debug` for profiling boot sequence |

```bash
# Embedded kernel boot time breakdown (example)
$ cat /proc/timer_list | grep "jiffies"   # system uptime in jiffies
# Typical breakdown: bootloader 300ms, kernel init 200ms, init system 500ms = ~1s total
```

### Containers (Docker, Podman, LXC)


Containers leverage cgroups + namespaces for lightweight virtualization:

```
+-------------------------------------------------------------------+
| Host OS                                                            |
| +------------------+  +------------------+  +------------------+  |
| | Container A      |  | Container B      |  | Container C      |  |
| | Apache           |  | PostgreSQL       |  | Node.js          |  |
| | PID ns: 1..100   |  | PID ns: 1..50    |  | PID ns: 1..200   |  |
| | Net ns: 172.17.1|  | Net ns: 172.17.2 |  | Net ns: 172.17.3 |  |
| | Mount ns: /var/  |  | Mount ns: /data  |  | Mount ns: /app   |  |
| | Memory: 512MB    |  | Memory: 2GB      |  | Memory: 256MB    |  |
| | CPU: 0.5 cores   |  | CPU: 2 cores     |  | CPU: 0.25 cores  |  |
| +------------------+  +------------------+  +------------------+  |
|                                                                   |
| Docker daemon / containerd / runc                                 |
+-------------------------------------------------------------------+
| Host Linux Kernel (CFS, cgroups v2, namespaces, netfilter)        |
+-------------------------------------------------------------------+
```

### Concept Comparison: Linux vs Windows NT vs macOS/XNU


| Feature | Linux | Windows NT | macOS/XNU |
|-------|-------|-----------|----------|
| Kernel Type | Monolithic + modules | Hybrid | Hybrid (Mach + BSD) |
| Scheduler | CFS (vruntime RB-tree) | Priority-based (boosts) | Multi-level feedback queue |
| File System | VFS -> ext4/XFS/Btrfs | NTFS (B+ tree $MFT) | APFS (B-tree) |
| Process Model | fork()/clone() | CreateProcess() | fork() + Mach tasks |
| IPC | Pipes, sockets, shm, futex | LPC/ALPC, named pipes | Mach messages, BSD sockets |
| Modules | .ko (same address space) | .sys (same address space) | .kext (same address space) |
| Sync | spinlock, mutex, RCU | KeAcquireSpinLock, mutex | mutex_lock, lck_mtx |
| Debugging | kgdb, kprobes, ftrace | WinDbg, ETW | DTrace, KDebug |
| cgroups | Yes (cgroup v2) | Job objects | Resource limits (launchd) |
| Containers | Docker, LXC | Hyper-V containers | Sandbox + Docker for Mac |

---

## 12. Summary

### Key Takeaways


- **Linux Architecture**: Monolithic kernel with loadable modules; user/kernel space separation via rings
- **task_struct**: Large (approx 2KB) PCB with state, scheduling, memory, files, signals, credentials, timers
- **clone()**: Unified syscall for fork/thread creation; flags control resource sharing
- **CFS**: Red-black tree of tasks keyed by vruntime; O(log n) for enqueue/dequeue, O(1) amortized for pick
- **Buddy allocator**: Power-of-2 physical page allocation; O(log n) worst case, coalesces on free
- **SLUB allocator**: Object cache in kernel; O(1) allocation from freelist
- **VFS**: Four objects (super_block, inode, dentry, file); dcache accelerates path resolution
- **Interrupts**: Split into top half (urgent, no sleep) and bottom half (deferrable, can sleep)
- **Synchronization**: Spinlock (busy-wait, no sleep), mutex (sleep-wait, PI), RCU (lock-free read)
- **cgroups**: Resource limits via controllers (CPU, memory, IO, pids)
- **Namespaces**: Process isolation for PID, net, mount, UTS, IPC, user, cgroup, time
- **Priority Inversion**: Solved by Priority Inheritance Protocol in rt_mutex

### Cross-Application Matrix

| Concept | Web Server | Database | Embedded System | Smartphone |
|-------|----------|--------|---------------|----------|
| CFS | Fair CPU distribution | Responsive queries | RT patches (PREEMPT_RT) | CPU shares via cgroups |
| VFS | Mixed file systems | Data file storage | Flash-friendly FS | OverlayFS for layers |
| Modules | Netfilter/storage | GPU drivers (CUDA) | Minimal static kernel | Minimal modules |
| cgroups | Resource limits per site | Memory limits | N/A | App-level CPU/mem limits |
| Namespaces | Container isolation | Container isolation | No (bare metal) | Per-app UID isolation |
| RCU | Route table updates | Concurrent B-tree | Rarely | Read-heavy UI state |

### Common Pitfalls


| Pitfall | Why It Happens | How to Avoid |
|---------|---------------|-------------|
| Sleep in spinlock | Forgot the constraint; called kmalloc(GFP_KERNEL) | Use GFP_ATOMIC in atomic context |
| Forgot to disable IRQ for spinlock | Spinlock shared with ISR | Always use `spin_lock_irqsave()` in process context |
| Module stack overflow | Deep call chain + large local arrays | Use dynamic allocation; keep stack usage under 2KB |
| RCU stall | Reader holds rcu_read_lock too long | Never sleep/schedule in RCU read-side critical section |
| OOM panic | swap off, overcommit on, memory exhausted | Set `vm.overcommit_memory=2` for strict accounting |

---

## TypeScript Implementation — CFS Scheduler Simulator

```typescript
/**
 * CfsSimulator: A TypeScript model of the Linux Completely Fair Scheduler.
 * Demonstrates how vruntime, weights, and the red-black tree interact.
 */
interface SchedEntity {
  pid: number;
  nice: number;
  weight: number;
  vruntime: number;  // virtual runtime in ms
}

class CfsRunQueue {
  private tasks: SchedEntity[] = [];
  private readonly NICE_0_WEIGHT = 1024;
  
  /** Convert nice value to weight (simplified kernel weight table) */
  private niceToWeight(nice: number): number {
    const weights: Record<number, number> = {
      -20: 88761, -19: 71755, -18: 56483, -17: 46273,
      -16: 36291, -15: 29154, -14: 23254, -13: 18705,
      -12: 14949, -11: 11916, -10: 9548,  -9: 7620,
      -8: 6100,   -7: 4904,   -6: 3906,   -5: 3121,
      -4: 2501,   -3: 1991,   -2: 1586,   -1: 1277,
      0: 1024,    1: 820,     2: 655,     3: 526,
      4: 423,     5: 339,     6: 271,     7: 217,
      8: 174,     9: 139,     10: 110,    11: 87,
      12: 70,     13: 56,     14: 45,     15: 36,
      16: 29,     17: 23,     18: 19,     19: 15,
    };
    return weights[nice] ?? this.NICE_0_WEIGHT;
  }

  constructor() {}

  addTask(pid: number, nice: number): void {
    this.tasks.push({
      pid, nice,
      weight: this.niceToWeight(nice),
      vruntime: 0
    });
  }

  /** The CFS "pick next" using scanned minimum (simulating RB-tree leftmost) */
  private pickNext(): SchedEntity {
    // In real CFS: red-black tree leftmost node = minimum vruntime
    return this.tasks.reduce((min, t) => t.vruntime < min.vruntime ? t : min);
  }

  /**
   * Simulate one scheduling round.
   * Each task runs for a time slice proportional to its weight.
   */
  run(timeQuantumMs: number = 20): void {
    console.log(`\n=== CFS Simulation: ${timeQuantumMs}ms time slice ===`);
    console.log(`PID | Nice | Weight | vruntime_before | vruntime_after`);

    for (let round = 0; round < 3; round++) {
      for (const task of this.tasks) {
        const before = task.vruntime;
        // CFS: vruntime += (actual_runtime * NICE_0_WEIGHT) / task.weight
        const actualRuntime = timeQuantumMs;
        task.vruntime += (actualRuntime * this.NICE_0_WEIGHT) / task.weight;
        const after = Math.round(task.vruntime * 100) / 100;
        console.log(
          `${String(task.pid).padStart(3)} | ${String(task.nice).padStart(4)} | ` +
          `${String(task.weight).padStart(6)} | ${before.toFixed(2).padStart(13)} | ${after.toFixed(2)}`
        );
      }
    }

    // Show fairness: tasks with higher priority should have closer vruntime values
    const maxVruntime = Math.max(...this.tasks.map(t => t.vruntime));
    const minVruntime = Math.min(...this.tasks.map(t => t.vruntime));
    console.log(`\nFairness metric (max-min vruntime): ${(maxVruntime - minVruntime).toFixed(2)}ms`);
    console.log(`Smaller values = fairer scheduling.`);
  }

  /** Print current task states */
  dump(): void {
    console.log('\nTask State:');
    for (const t of this.tasks) {
      const weightRatio = (t.weight / this.NICE_0_WEIGHT).toFixed(2);
      console.log(`  PID=${t.pid} nice=${t.nice} weight=${t.weight} (${weightRatio}x) vruntime=${t.vruntime.toFixed(2)}`);
    }
  }
}

// Example: Create 3 tasks with different priorities
const cfs = new CfsRunQueue();
cfs.addTask(100, 0);    // default priority
cfs.addTask(101, -10);  // higher priority (weight ~9548 vs 1024)
cfs.addTask(102, 10);   // lower priority (weight ~110)
cfs.dump();
cfs.run(20);
```

---

## Chapter Quiz

1. What type of kernel does Linux use?
   - a) Microkernel
   - b) Hybrid
   - c) Monolithic with modules
   - d) Exokernel

2. CFS uses which data structure?
   - a) Linked list
   - b) Red-black tree
   - c) B-tree
   - d) Priority queue

3. VFS is responsible for:
   - a) Managing virtual memory
   - b) Uniform interface to multiple FS types
   - c) Scheduling I/O
   - d) Loading modules

4. Which synchronization primitive can sleep?
   - a) Spinlock
   - b) Raw spinlock
   - c) Mutex
   - d) RCU read lock

5. What is the top half of interrupt handling?
   - a) Deferred processing
   - b) Immediate, short ISR
   - c) Workqueue handler
   - d) ksoftirqd thread

6. Which syscall creates both processes and threads?
   - a) fork()
   - b) clone()
   - c) vfork()
   - d) execve()

7. cgroups are used for:
   - a) Process isolation
   - b) Resource limiting
   - c) Network configuration
   - d) File encryption

8. Priority inversion is solved by:
   - a) Round-robin scheduling
   - b) Priority inheritance protocol
   - c) Lock-free algorithms
   - d) Decreasing time slices

9. What is vruntime in CFS?
   - a) Total execution time
   - b) Weighted execution time
   - c) Wall-clock time since boot
   - d) Time until deadline

10. The dentry cache (dcache) speeds up:
    - a) Memory allocation
    - b) Path resolution
    - c) Process creation
    - d) Network routing

11. What is the role of the buddy allocator in Linux?
    - a) Allocate kernel objects (task_struct, inodes)
    - b) Manage physical page frames using power-of-two free lists
    - c) Allocate virtual memory for user processes
    - d) Manage the dentry cache

12. Which Linux kernel feature allows a module to be loaded without recompiling the entire kernel?
    - a) Device mapper
    - b) Loadable Kernel Module (LKM)
    - c) kprobes
    - d) ftrace

13. What happens when a process in a cgroup exceeds its memory.limit_in_bytes?
    - a) The process is killed immediately
    - b) The process is swapped out
    - c) The OOM killer may terminate processes in the cgroup
    - d) The kernel returns ENOMEM to every malloc

14. In the Linux VFS, what does the dentry (directory entry) cache store?
    - a) File data blocks
    - b) Mappings from file names to inode numbers
    - c) Disk block allocation bitmaps
    - d) Superblock metadata

15. Which of the following is NOT a Linux namespace type?
    - a) PID namespace
    - b) Network namespace
    - c) Memory namespace
    - d) Mount namespace

**Answers:** 1-c, 2-b, 3-b, 4-c, 5-b, 6-b, 7-b, 8-b, 9-b, 10-b, 11-b, 12-b, 13-c, 14-b, 15-c

---

## Exercises

### Basic


1. List the key fields in `task_struct`. Why is it the largest structure in the kernel?
2. What flags differentiate `fork()` from `pthread_create()` in terms of `clone()`?
3. How does CFS ensure fairness? Explain the role of vruntime and the red-black tree.

### Intermediate


4. Write a program that reads `/proc/self/status` and `/proc/self/maps`. Explain each field and each memory region.
5. Read `/proc/sched_debug` and identify CFS runqueue entries, vruntime values, and scheduling entities.
6. Compile and load the example kernel module. Extend it to create `/proc/hello` that returns "Hello from kernel!" when read.
7. Use `perf stat -e context-switches,cpu-migrations` to measure context switch overhead for a grep over a large file.

### Advanced


8. Write a kernel module with a `/proc/my_device` file. Writing stores a string; reading returns it (character device semantics).
9. Analyze `kernel/sched/fair.c` function `pick_next_task_fair()`. Explain time complexity and the role of `cfs_rq->leftmost`.
10. Use `perf` to measure syscall cost: `perf stat -e cycles,instructions,cache-misses` for `read()` from a regular file vs `/proc/self/status`. Explain the difference.
11. Create a cgroup with 50MB memory limit, run a memory-hungry process inside it, and observe OOM kills via `memory.events`.
12. Write a Python script using `ctypes` to call `sched_setscheduler()` to set a process to SCHED_FIFO with priority 50. What privileges are needed?

### Additional Exercises


13. **CFS weight calculator**: Extend the CfsSimulator TypeScript code to support `set_weight()` at runtime, `removeTask(pid)`, and `getFairness()` that returns the max-min vruntime spread. Run a simulation with 5 tasks at nice values -20, -10, 0, 10, 19 and show the execution time each receives over 10 rounds.

14. **SLUB allocator simulator**: Implement a simplified SLUB allocator in TypeScript. Maintain per-CPU freelists of pre-allocated objects. When a CPU's freelist is empty, fetch a slab of objects from the central allocator. When freeing, return to the per-CPU freelist. Compare allocation latency vs a simple malloc/free model.

15. **System call tracer**: Write a Python script that uses `strace` to trace all system calls made by a command (e.g., `ls -R /`). Categorize syscalls by type (file, process, network, memory, etc.), count occurrences, and compute the percentage of total. Generate a pie chart of the distribution.

16. **RCU vs mutex benchmark**: Implement a linked-list protected by: (a) a single mutex, (b) an RCU-style mechanism with read-side lock-free traversal and synchronized updates. Benchmark with 8 reader threads and 1 writer thread doing 100,000 operations. Measure read throughput and write latency for both approaches.

17. **Buddy allocator fragmentation analyzer**: Implement a buddy allocator in C or TypeScript with power-of-2 free lists. Simulate a workload of allocate/free requests of varying sizes (from 1 page to 512 pages). Track: external fragmentation percentage, allocation success rate, average search time, and coalescing effectiveness.

18. **cgroup memory pressure test**: Write a script that creates a cgroup with 100 MB memory limit, then runs a process that allocates memory in a loop until it is OOM-killed. Log `/sys/fs/cgroup/<cgroup>/memory.events` during the test. Show the sequence of events leading to the OOM kill.

19. **VFS path resolution walker**: Write a program that traces the path resolution for a given absolute path (e.g., `/usr/bin/python3`). For each component, show: the dentry cache lookup (hit/miss), the parent directory inode number, the resolved inode number, and the final file system type. Use `strace -e trace=openat,statx` to observe the real system calls.

20. **Kernel module stack depth analyzer**: Write a kernel module that tracks the maximum call stack depth in the kernel. Use `dump_stack()` at key points. Compare the stack depth in process context vs interrupt context vs softirq context. Explain why kernel stack overflows are dangerous.

21. **OOM killer behavior analyzer**: Write a program that triggers the OOM killer by allocating memory until killed. Capture `/proc/<pid>/oom_score` and `/proc/<pid>/oom_score_adj` before the kill. Analyze which process was killed and why (oom_badness calculation). Repeat with different `oom_score_adj` values.

22. **Namespaces deep dive**: Write a C program that creates a child process in new PID, mount, and user namespaces using `clone()` with `CLONE_NEWPID | CLONE_NEWNS | CLONE_NEWUSER`. Inside the namespace: show PID 1, remount `/proc`, create a temp file, and show it cannot see the host's processes or files.

23. **eBPF program for syscall counting**: Write an eBPF program that attaches to the `sys_enter` tracepoint and counts system calls per process per second. Output the top 5 syscalls by count every second. Use BCC or libbpf. Compare overhead vs `perf stat -e syscalls:sys_enter_*`.

24. **PREEMPT_RT latency test**: Install PREEMPT_RT kernel patches. Write a real-time test program with a SCHED_FIFO thread (priority 90) that measures maximum scheduling latency by waking up every 1 ms and recording the actual wake-up time. Compare results with a standard kernel.
