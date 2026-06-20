import fs from 'fs';
import path from 'path';

const dir = 'C:\\xampp\\htdocs\\ai-engineering-journey\\docs\\courses\\operating-systems';

const files = [
  '01-introduction', '02-processes', '03-cpu-scheduling', '04-threads',
  '05-synchronization', '06-semaphores-monitors', '07-deadlocks',
  '08-memory-management', '09-virtual-memory', '10-file-systems',
  '11-file-system-impl', '12-secondary-storage', '13-io-systems',
  '14-linux-kernel', '15-shell-scripting', '16-security',
  '17-virtualization', '18-case-studies'
];

const titles = {
  '01-introduction': 'Introduction to Operating Systems',
  '02-processes': 'Processes',
  '03-cpu-scheduling': 'CPU Scheduling',
  '04-threads': 'Threads',
  '05-synchronization': 'Process Synchronization',
  '06-semaphores-monitors': 'Semaphores and Monitors',
  '07-deadlocks': 'Deadlocks',
  '08-memory-management': 'Memory Management',
  '09-virtual-memory': 'Virtual Memory',
  '10-file-systems': 'File Systems',
  '11-file-system-impl': 'File System Implementation',
  '12-secondary-storage': 'Secondary Storage',
  '13-io-systems': 'I/O Systems',
  '14-linux-kernel': 'The Linux Kernel',
  '15-shell-scripting': 'Shell Scripting',
  '16-security': 'Security',
  '17-virtualization': 'Virtualization and Cloud Computing',
  '18-case-studies': 'Case Studies'
};

const preview = process.argv.includes('--preview');

// Helper: get prev/next link line
function makePrevNext(slug) {
  const idx = files.indexOf(slug);
  const prev = idx > 0 ? files[idx - 1] : null;
  const next = idx < files.length - 1 ? files[idx + 1] : null;
  const parts = [];
  if (prev) parts.push(`**<< [${titles[prev]}](./${prev}.md)**`);
  if (next) parts.push(`[**Next: ${titles[next]}**](./${next}.md) >>`);
  if (!parts.length) return '';
  return '\n' + parts.join(' | ') + '\n\n---\n';
}

// All enrichment data
const data = {};

// ── 01-introduction ──
data['01-introduction'] = {
  atGlance: [
    ['What is an OS?', 'Resource allocator, control program, intermediary between hardware and users'],
    ['OS History', 'Batch \u2192 Multiprogramming \u2192 Time-sharing \u2192 Personal \u2192 Modern/Cloud'],
    ['OS Types', 'Batch, time-sharing, distributed, real-time (hard/soft), embedded'],
    ['System Calls', 'Interface for user programs to request kernel services; switch from user to kernel mode'],
    ['OS Structures', 'Monolithic (Linux), microkernel (MINIX), layered (THE), modular/hybrid (Windows NT)'],
  ],
  roadmap: `flowchart LR
    A[OS Basics] --> B[OS History & Types]
    B --> C[System Calls]
    C --> D[OS Structures]
    D --> E[Examples & Applications]
    E --> F[Summary & Exercises]`,
  callouts: [
    ['TIP', 'Focus on understanding the **system call flow** -- it is the bridge between user programs and the kernel. The switch from user mode to kernel mode via a trap/interrupt is a foundational concept for every OS topic that follows.'],
    ['NOTE', 'The distinction between **API** and **system call** is frequently tested in exams. Remember: `printf()` is an API function; `write()` is the underlying system call.'],
    ['WARNING', 'Do not confuse **multiprogramming** (multiple jobs in memory, CPU switches during I/O wait) with **time-sharing** (CPU switching between users for interactive response). Multiprogramming improves CPU utilization; time-sharing improves user experience.'],
  ],
  conceptComp: {
    headers: ['Feature', 'Monolithic Kernel', 'Microkernel', 'Layered', 'Modular (Hybrid)'],
    rows: [
      ['Architecture', 'Single large kernel in kernel space', 'Minimal kernel + user-space services', 'Strict layered hierarchy', 'Core + loadable modules'],
      ['Performance', 'High (direct calls)', 'Lower (IPC overhead)', 'Moderate', 'High'],
      ['Reliability', 'Low (bug crashes all)', 'High (services isolated)', 'Moderate', 'Moderate'],
      ['Flexibility', 'Low (static)', 'High (services swappable)', 'Low', 'High (dynamic modules)'],
      ['Examples', 'Linux, BSD, MS-DOS', 'MINIX, QNX, seL4', 'THE, Venus', 'Windows NT, modern Linux'],
    ],
  },
  quickRef: [
    ['System Call', 'Programmatic request for kernel service (e.g., `fork()`, `open()`)'],
    ['User Mode', 'Restricted privilege level -- no direct hardware access'],
    ['Kernel Mode', 'Full privilege -- can execute any instruction'],
    ['Trap/Interrupt', 'Mechanism to switch from user to kernel mode'],
    ['API', 'Application Programming Interface -- library wrappers around syscalls'],
  ],
  crossApp: [
    ['Process Management', 'Handle concurrent connections', 'Manage query execution threads', 'Real-time task scheduling', 'App lifecycle management'],
    ['Memory Management', 'Static allocation per connection', 'Buffer pool management', 'Limited SRAM/Flash', 'Memory pressure handling'],
    ['File System', 'Serve static files', 'Store/retrieve table data', 'Flash file system', 'App sandbox storage'],
    ['Protection', 'User isolation', 'Access control', 'Memory protection', 'App sandboxing'],
  ],
  quiz: [
    ['Which OS type guarantees that critical tasks complete within a strict time bound?', ['a) Batch OS', 'b) Time-sharing OS', 'c) Real-time OS', 'd) Distributed OS']],
    ['What mechanism triggers the switch from user mode to kernel mode?', ['a) A trap or interrupt', 'b) A function call', 'c) A context switch', 'd) A system library call']],
    ['Which kernel structure runs most services in user space?', ['a) Monolithic', 'b) Microkernel', 'c) Layered', 'd) Hybrid']],
    ['Which of the following is a system call?', ['a) printf()', 'b) scanf()', 'c) fork()', 'd) malloc()']],
  ],
};

// ── 02-processes ──
data['02-processes'] = {
  atGlance: [
    ['Process Concept', 'Active instance of a program; has text, data, heap, stack sections'],
    ['Process States', 'New \u2192 Ready \u2192 Running \u2192 Waiting \u2192 Terminated (five-state model)'],
    ['PCB', 'task_struct in Linux; holds PID, PC, registers, scheduling info, memory mgmt, I/O status'],
    ['Context Switch', 'Saving/restoring process state; pure overhead (1-10 \u00b5s)'],
    ['Process Creation', '`fork()` creates child; `exec()` replaces program image'],
    ['IPC', 'Shared memory (fast, needs sync) vs message passing (structured, works cross-network)'],
  ],
  roadmap: `flowchart LR
    A[Process Concept] --> B[Process in Memory]
    B --> C[Process States]
    C --> D[PCB & Context Switch]
    D --> E[Process Creation & Termination]
    E --> F[IPC: Shared Memory vs Message Passing]
    F --> G[Examples & Summary]`,
  callouts: [
    ['TIP', 'The `fork()` + `exec()` pattern is the Unix way of creating processes. `fork()` duplicates the current process, then `exec()` replaces it with a new program. This two-step design allows the child to modify its environment (file descriptors, signals) before loading the new program.'],
    ['WARNING', '**Zombie processes** are terminated processes whose parent has not called `wait()`. They only consume a PCB entry but can exhaust the PID table if accumulated. Always call `wait()` or `waitpid()` in the parent.'],
    ['NOTE', 'Context switching is **pure overhead** -- the CPU does zero useful work during a switch. Modern systems do hundreds to thousands of context switches per second, making switch efficiency critical.'],
  ],
  conceptComp: {
    headers: ['Feature', 'Shared Memory', 'Message Passing'],
    rows: [
      ['Speed', 'Fast (kernel bypass after setup)', 'Slower (kernel copies messages)'],
      ['Synchronization', 'Explicit (mutex/semaphore needed)', 'Implicit (blocking send/recv)'],
      ['Complexity', 'Higher (race conditions)', 'Lower (kernel-managed buffers)'],
      ['Distributed Support', 'No (needs shared physical memory)', 'Yes (works across network)'],
      ['Use Case', 'High-throughput local data sharing', 'Structured communication, distributed systems'],
    ],
  },
  quickRef: [
    ['Process', 'Program in execution with own address space'],
    ['PCB', 'Process Control Block -- kernel data structure for process metadata'],
    ['Context Switch', 'Saving/restoring CPU state when switching processes'],
    ['fork()', 'System call to create a child process'],
    ['exec()', 'System call to replace current process image'],
    ['Zombie', 'Terminated process awaiting parent `wait()`'],
    ['Orphan', 'Process whose parent died; adopted by `init` (PID 1)'],
  ],
  crossApp: [
    ['fork()/exec()', 'Spawn CGI scripts', 'Create worker processes', 'Execute user commands'],
    ['IPC: Shared Memory', 'Cache sharing between workers', 'Buffer pool', 'N/A'],
    ['IPC: Message Passing', 'Request queuing', 'Query routing', 'Pipeline between commands'],
    ['Process Termination', 'Cleanup after request', 'Transaction commit', 'Job control'],
  ],
  quiz: [
    ['Which section of a process\'s memory contains the program counter and local variables?', ['a) Text', 'b) Data', 'c) Stack', 'd) Heap']],
    ['What system call creates a new process in Unix?', ['a) exec()', 'b) fork()', 'c) clone()', 'd) spawn()']],
    ['A process that has finished execution but still has an entry in the process table is called:', ['a) Orphan', 'b) Zombie', 'c) Daemon', 'd) Ghost']],
    ['Which IPC method requires explicit synchronization?', ['a) Shared memory', 'b) Message passing', 'c) Signals', 'd) Pipes']],
  ],
};

// ── Fill remaining 16 chapters with auto-generated data ──
// All 18 chapters share the same template structure; we generate unique content per chapter

const chapterData = [
  { // 03-cpu-scheduling
    slug: '03-cpu-scheduling',
    atGlance: [
      ['Scheduling Criteria', 'CPU utilization, throughput, turnaround time, waiting time, response time'],
      ['FCFS', 'Non-preemptive; simple but convoy effect; average waiting time can be high'],
      ['SJF', 'Optimal avg. waiting time; impractical without knowing future CPU bursts'],
      ['Priority Scheduling', 'Can cause indefinite blocking (starvation); aging solves it'],
      ['Round Robin', 'Preemptive; time quantum determines performance -- too large=>FCFS, too small=>overhead'],
      ['Multilevel Queue', 'Processes partitioned into queues with different scheduling policies'],
    ],
    roadmap: `flowchart LR
    A[Scheduling Basics] --> B[Scheduling Criteria]
    B --> C[FCFS]
    B --> D[SJF / SRTF]
    B --> E[Priority Scheduling]
    B --> F[Round Robin]
    F --> G[Multilevel Queue / Feedback]
    G --> H[Evaluation & Examples]`,
    callouts: [
      ['TIP', 'SJF gives the **minimum average waiting time** theoretically, but it is impossible to implement perfectly because future CPU burst lengths are unknown. **SRTF** (preemptive SJF) is used as a benchmark to compare other algorithms.'],
      ['WARNING', '**Priority inversion** occurs when a low-priority process holds a resource needed by a high-priority process. Priority inheritance (temporarily boosting the low-priority process priority) is the standard solution. The Mars Pathfinder famously suffered from this.'],
      ['NOTE', 'Round Robin time quantum is critical: if too large (>> context switch time), RR degenerates to FCFS. If too small, context switch overhead dominates. Rule of thumb: quantum should be ~80% of CPU bursts.'],
    ],
    conceptComp: { headers: ['Criterion', 'FCFS', 'SJF', 'Priority', 'Round Robin'], rows: [
      ['Preemptive', 'No', 'Optional (SRTF)', 'Optional', 'Yes'],
      ['Avg. Waiting Time', 'High', 'Optimal', 'Depends on priority', 'Moderate (depends on quantum)'],
      ['Starvation', 'No', 'Possible (long jobs)', 'Yes (low priority)', 'No'],
      ['Convoy Effect', 'Yes', 'No', 'No', 'No'],
      ['Overhead', 'Minimal', 'Moderate', 'Low', 'Moderate'],
    ]},
    quickRef: [
      ['Turnaround Time', 'Total time from process submission to completion'],
      ['Waiting Time', 'Total time spent waiting in ready queue'],
      ['Response Time', 'Time from submission to first CPU response'],
      ['Throughput', 'Number of processes completed per unit time'],
      ['Aging', 'Gradually increasing priority of waiting processes to prevent starvation'],
      ['Convoy Effect', 'Short processes waiting behind a long process in FCFS'],
    ],
    crossApp: [
      ['FCFS', 'Not suitable', 'Suitable for serial jobs', 'Not suitable', 'Not suitable'],
      ['SJF', 'Not practical', 'Good for known workloads', 'Not suitable', 'Not suitable'],
      ['RR', 'Excellent (fair)', 'High overhead', 'Poor (no guarantees)', 'Good with small quantum'],
      ['Priority', 'Good for foreground tasks', 'Limited use', 'Essential (deadline-based)', 'Good for mixed workloads'],
    ],
    quiz: [
      ['Which scheduling algorithm is provably optimal for min. avg. waiting time?', ['a) FCFS', 'b) SJF', 'c) Round Robin', 'd) Priority Scheduling']],
      ['The convoy effect is associated with which scheduling algorithm?', ['a) FCFS', 'b) SJF', 'c) Round Robin', 'd) Multilevel Queue']],
      ['What technique prevents starvation in priority scheduling?', ['a) Preemption', 'b) Aging', 'c) Time quantum', 'd) Multiprogramming']],
      ['In Round Robin, if the time quantum is very large, it degenerates to:', ['a) SJF', 'b) FCFS', 'c) Priority', 'd) Multilevel Queue']],
    ],
  },
  { // 04-threads
    slug: '04-threads',
    atGlance: [
      ['Thread Concept', 'Lightweight process; unit of CPU utilization with own stack/registers, shares address space'],
      ['User-Level Threads', 'Managed by thread library; faster but kernel sees single process'],
      ['Kernel-Level Threads', 'Managed by OS; slower but kernel can schedule independent threads'],
      ['Multithreading Models', 'Many-to-One, One-to-One, Many-to-Many'],
      ['Thread Pools', 'Pre-created threads for efficient task execution'],
      ['Fork vs Thread', 'Fork duplicates everything; threads share address space'],
    ],
    roadmap: `flowchart LR
    A[Thread Concept] --> B[Benefits vs Processes]
    B --> C[User-Level vs Kernel-Level]
    C --> D[Multithreading Models]
    D --> E[Thread Libraries]
    E --> F[Thread Pools & Issues]
    F --> G[Examples & Summary]`,
    callouts: [
      ['TIP', 'Threads share the **same address space** -- communication between threads is trivial (just read/write shared variables), but this introduces synchronization challenges. Thread creation is 10-100x faster than process creation.'],
      ['WARNING', 'User-level threads cannot take advantage of multiple CPU cores because the kernel sees only one process. Use kernel-level threads (one-to-one model) for true parallelism on multi-core systems.'],
      ['NOTE', 'The **many-to-many** model combines the best of both worlds: user-level thread management for fast operations plus kernel-level scheduling for true parallelism.'],
    ],
    conceptComp: { headers: ['Feature', 'User-Level Threads', 'Kernel-Level Threads'], rows: [
      ['Managed by', 'Thread library (user space)', 'OS kernel'],
      ['Context Switch', 'Fast (no system call)', 'Slower (system call)'],
      ['Parallelism', 'None (kernel sees one process)', 'Full (kernel schedules each thread)'],
      ['Blocking', 'One thread blocks => all block', 'Independent blocking'],
      ['Example', 'POSIX Pthreads (user mode)', 'Windows threads, Solaris'],
    ]},
    quickRef: [
      ['Thread', 'Lightweight process with own stack and registers, sharing address space'],
      ['User-Level Thread', 'Thread managed entirely in user space without kernel awareness'],
      ['Kernel-Level Thread', 'Thread managed and scheduled by the OS kernel'],
      ['Thread Pool', 'Collection of pre-created threads awaiting work'],
      ['Parallelism', 'Multiple threads executing simultaneously on different cores'],
      ['Concurrency', 'Multiple threads making progress via interleaving'],
    ],
    crossApp: [
      ['Thread per Request', 'Serve concurrent HTTP requests', 'Event loop + UI threads', 'Parallel computation', 'Handle concurrent queries'],
      ['Thread Pool', 'Bounded worker pool', 'N/A', 'Fixed worker pool for matrix ops', 'Connection pool'],
      ['Kernel Threads', 'Needed for true parallelism', 'Less critical', 'Essential for multi-CPU', 'Essential for OLTP'],
    ],
    quiz: [
      ['Main advantage of threads over processes?', ['a) Better security', 'b) Lower creation overhead and shared address space', 'c) Automatic synchronization', 'd) No context switching needed']],
      ['In which model does the kernel see only one process?', ['a) Many-to-One', 'b) One-to-One', 'c) Many-to-Many', 'd) Two-level']],
      ['Which thread type achieves true parallelism on multi-core?', ['a) User-level threads', 'b) Kernel-level threads', 'c) Green threads', 'd) Fiber threads']],
    ],
  },
  { // 05-synchronization
    slug: '05-synchronization',
    atGlance: [
      ['Race Condition', 'Multiple processes manipulate shared data concurrently; result depends on scheduling order'],
      ['Critical Section', 'Code segment accessing shared resources; must be executed atomically'],
      ['Peterson Solution', 'Software-based two-process synchronization using turn and flag variables'],
      ['Hardware Support', 'Test-and-set, compare-and-swap, memory barriers for lock implementation'],
      ['Mutex Locks', 'Simple lock variable with acquire/release; spinlock if busy-waiting'],
    ],
    roadmap: `flowchart LR
    A[Race Conditions] --> B[Critical Section Problem]
    B --> C[Peterson's Solution]
    C --> D[Hardware Synchronization]
    D --> E[Mutex Locks]
    E --> F[Semaphores & Monitors]
    F --> G[Classic Problems]`,
    callouts: [
      ['TIP', 'Peterson solution is the classic software-only approach to mutual exclusion, but it does not work on modern hardware that reorders instructions. Use **hardware primitives** (test-and-set, CAS) or **higher-level constructs** (mutex, semaphore) in real systems.'],
      ['WARNING', '**Spinlocks** (busy-waiting mutexes) waste CPU cycles. Only appropriate when the wait is expected to be short (e.g., in the kernel before a context switch). For longer waits, use a blocking mutex that yields the CPU.'],
      ['NOTE', 'Three requirements for a valid critical section solution: **mutual exclusion** (only one process in CS), **progress** (no process outside CS blocks entry), and **bounded waiting** (no indefinite postponement).'],
    ],
    conceptComp: { headers: ['Solution', 'Mutual Exclusion', 'Progress', 'Bounded Waiting', 'Busy-Waiting'], rows: [
      ['Peterson', 'Yes', 'Yes', 'Yes', 'Yes'],
      ['Test-and-Set', 'Yes', 'Yes', 'No (may starve)', 'Yes'],
      ['Compare-and-Swap', 'Yes', 'Yes', 'No', 'Yes'],
      ['Mutex (blocking)', 'Yes', 'Yes', 'Yes', 'No'],
    ]},
    quickRef: [
      ['Race Condition', 'Timing-dependent error from concurrent shared data access'],
      ['Critical Section', 'Code segment where shared data is accessed'],
      ['Mutual Exclusion', 'No two processes simultaneously in critical section'],
      ['Spinlock', 'Lock that busy-waits until acquired'],
      ['Test-and-Set', 'Atomic hardware instruction that reads and writes a memory location'],
      ['Bounded Waiting', 'Guarantee that a process will not wait indefinitely'],
    ],
    crossApp: [
      ['Mutex', 'Protect shared connection pool', 'Buffer pool access', 'Shared peripheral registers'],
      ['Spinlock', 'Short critical sections', 'Log buffer writes', 'Interrupt handler sync'],
      ['Atomic Ops', 'Reference counting', 'Sequence generation', 'Flag setting'],
    ],
    quiz: [
      ['What is a race condition?', ['a) Two processes using different resources', 'b) Concurrent access to shared data producing incorrect results', 'c) CPU runs too fast', 'd) A deadlock situation']],
      ['Which is NOT a requirement for a critical section solution?', ['a) Mutual exclusion', 'b) Progress', 'c) Deadlock avoidance', 'd) Bounded waiting']],
      ['When should spinlocks be used instead of blocking mutexes?', ['a) For long waits', 'b) For short waits where context switch overhead is higher', 'c) Always', 'd) Never']],
    ],
  },
  { // 06-semaphores-monitors
    slug: '06-semaphores-monitors',
    atGlance: [
      ['Semaphore', 'Integer variable accessed only via `wait()` and `signal()` operations'],
      ['Binary Semaphore', 'Semaphore with values 0 and 1; behaves like a mutex'],
      ['Counting Semaphore', 'Semaphore with integer range; controls access to multiple resources'],
      ['Monitor', 'High-level synchronization construct with condition variables'],
      ['Classic Problems', 'Bounded Buffer, Readers-Writers, Dining Philosophers'],
    ],
    roadmap: `flowchart LR
    A[Semaphore Concept] --> B[Binary & Counting Semaphores]
    B --> C[Implementation with busy-waiting / blocking]
    C --> D[Classic Synchronization Problems]
    D --> E[Monitors & Condition Variables]
    E --> F[Monitor-based Problem Solutions]
    F --> G[Summary]`,
    callouts: [
      ['TIP', 'A **binary semaphore** can be used as a mutex, but they are conceptually different: a mutex has ownership (only the locking thread can unlock), while a binary semaphore can be signaled by any thread.'],
      ['WARNING', 'Semaphores are prone to **programming errors**: forgetting `signal()` causes deadlock, forgetting `wait()` violates mutual exclusion. Monitors are safer because the compiler enforces correct usage patterns.'],
      ['NOTE', 'The **Dining Philosophers** problem illustrates the risk of deadlock and starvation. A simple fix: make philosophers pick up both forks atomically, or have an odd/even picking order.'],
    ],
    conceptComp: { headers: ['Feature', 'Semaphore', 'Monitor'], rows: [
      ['Primitive', 'Low-level (integer + wait/signal)', 'High-level (class with condition variables)'],
      ['Error-prone?', 'Yes (easy to forget signal/wait)', 'Less (compiler enforces structure)'],
      ['Distributed?', 'No (shared memory needed)', 'No (shared memory needed)'],
      ['Condition Variables', 'Manual implementation', 'Built-in (wait/signal on condition)'],
      ['Popularity', 'Used in OS kernels', 'Used in concurrent programming languages'],
    ]},
    quickRef: [
      ['Semaphore S', 'Integer variable accessed via `wait(S)` and `signal(S)`'],
      ['Binary Semaphore', 'Semaphore with values 0 or 1'],
      ['Counting Semaphore', 'Semaphore with integer range >= 0'],
      ['Monitor', 'Abstract data type with mutual exclusion + condition variables'],
      ['Condition Variable', 'Queue of threads waiting for a specific condition'],
      ['Bounded Buffer', 'Producer-consumer with finite shared buffer'],
    ],
    crossApp: [
      ['Bounded Buffer', 'Producer-consumer, message queues', 'Full/empty semaphores + mutex', 'wait(notFull)/wait(notEmpty)'],
      ['Readers-Writers', 'Database access, file sharing', 'Reader count + mutex + write sem', 'startRead()/startWrite()'],
      ['Dining Philosophers', 'Resource allocation, deadlock demo', 'Fork semaphores', 'State array + condition vars'],
    ],
    quiz: [
      ['Key difference between binary semaphore and mutex?', ['a) Semaphores are faster', 'b) Mutex has ownership -- only locking thread can unlock', 'c) Mutex can be binary only', 'd) There is no difference']],
      ['Forgetting `signal()` on a semaphore leads to:', ['a) Race condition', 'b) Deadlock', 'c) Starvation', 'd) Livelock']],
      ['Which construct provides compiler-enforced structure?', ['a) Spinlock', 'b) Monitor', 'c) Test-and-set', 'd) Barrier']],
    ],
  },
  { // 07-deadlocks
    slug: '07-deadlocks',
    atGlance: [
      ['Deadlock', 'Set of blocked processes, each holding a resource waiting for another held by another'],
      ['Necessary Conditions', 'Mutual exclusion, hold-and-wait, no preemption, circular wait'],
      ['Prevention', 'Prevent at least one necessary condition -- most commonly circular wait via resource ordering'],
      ['Avoidance', 'Banker Algorithm: safe state ensures no deadlock even with maximum claims'],
      ['Detection', 'Wait-for graph cycle detection; O(n\u00b2) algorithm'],
      ['Recovery', 'Process termination or resource preemption; trade-off between cost and impact'],
    ],
    roadmap: `flowchart LR
    A[Deadlock Concept] --> B[Necessary Conditions]
    B --> C[Resource-Allocation Graphs]
    C --> D[Prevention]
    C --> E[Avoidance: Banker's Algorithm]
    C --> F[Detection: Wait-for Graph]
    F --> G[Recovery]
    G --> H[Summary]`,
    callouts: [
      ['TIP', 'The **Banker Algorithm** is the standard deadlock-avoidance technique. It uses the concept of a safe state: a state where the system can allocate resources to each process in some order without deadlock. Processes must declare their maximum resource needs in advance.'],
      ['WARNING', 'Deadlock **prevention** (breaking one condition) hurts resource utilization. Breaking hold-and-wait requires processes to request all resources at once, leading to low utilization. Breaking circular wait via ordered resource allocation is the most practical prevention method.'],
      ['NOTE', 'In practice, most operating systems use **deadlock ignorance** (the ostrich algorithm). Deadlocks are rare enough that the cost of prevention/avoidance outweighs the occasional manual recovery.'],
    ],
    conceptComp: { headers: ['Approach', 'Strategy', 'Resource Util.', 'Impl. Cost', 'Use in Practice'], rows: [
      ['Prevention', 'Break one necessary condition', 'Low', 'Moderate', 'Limited (embedded)'],
      ['Avoidance', 'Banker Algorithm (safe state)', 'Moderate', 'High (needs max claims)', 'Rare (databases)'],
      ['Detection+Recovery', 'Wait-for graph, terminate/preempt', 'High', 'Moderate', 'Some databases'],
      ['Ignorance', 'Assume deadlocks will not occur', 'Maximum', 'Zero', 'Most OS'],
    ]},
    quickRef: [
      ['Deadlock', 'Permanent blocking due to circular resource waiting'],
      ['Safe State', 'State from which all processes can complete without deadlock'],
      ['Banker Algorithm', 'Avoidance algorithm using maximum claims and safe-state checking'],
      ['Wait-for Graph', 'Directed graph showing process wait relationships'],
      ['Resource-Allocation Graph', 'Graph with processes (circles) and resources (squares)'],
    ],
    crossApp: [
      ['Prevention', 'Resource ordering for kernel locks', 'Lock ordering', 'Simple/predictable', 'Global lock ordering'],
      ['Avoidance', 'Rarely used', 'Two-phase locking', 'Critical safety systems', 'Distributed transactions'],
      ['Detection', 'Kernel lockdep tool', 'InnoDB deadlock detection', 'Watchdog timers', 'Distributed detection'],
    ],
    quiz: [
      ['Which is NOT a necessary condition for deadlock?', ['a) Mutual exclusion', 'b) Preemption', 'c) Hold-and-wait', 'd) Circular wait']],
      ['What does the Banker Algorithm check before granting resources?', ['a) Resource availability', 'b) Whether resulting state is safe', 'c) Process priority', 'd) CPU utilization']],
      ['Most general-purpose OS handle deadlocks by:', ['a) Prevention', 'b) Avoidance', 'c) Detection+recovery', 'd) Ignoring them (ostrich algorithm)']],
    ],
  },
  { // 08-memory-management
    slug: '08-memory-management',
    atGlance: [
      ['Logical vs Physical', 'CPU generates logical addresses; MMU translates to physical at runtime'],
      ['Contiguous Allocation', 'Process loaded into contiguous memory partition; suffers external fragmentation'],
      ['Paging', 'Split process into fixed-size pages, memory into frames; eliminates external fragmentation'],
      ['Segmentation', 'Split process into variable-sized logical segments (code, data, stack)'],
      ['Segmentation + Paging', 'Combine segments + paging for efficient use; segments mapped to pages'],
    ],
    roadmap: `flowchart LR
    A[Address Binding] --> B[Logical vs Physical Addresses]
    B --> C[Contiguous Allocation]
    C --> D[Fragmentation: Internal & External]
    D --> E[Paging]
    D --> F[Segmentation]
    E --> G[Page Tables & TLB]
    F --> H[Segmentation with Paging]
    H --> I[Summary]`,
    callouts: [
      ['TIP', '**Paging** eliminates external fragmentation by dividing memory into fixed-size frames, but introduces **internal fragmentation** (last page may be partially used). Typical page size is 4 KB. Larger pages reduce page table size but waste more memory.'],
      ['WARNING', 'External fragmentation in contiguous allocation can be severe: after allocation/deallocation cycles, free memory breaks into small chunks. No single chunk may be large enough for a process, even though total free memory is sufficient.'],
      ['NOTE', 'The **MMU** (Memory Management Unit) performs on-the-fly address translation. The **TLB** (Translation Lookaside Buffer) is a hardware cache for page table entries -- essential for performance.'],
    ],
    conceptComp: { headers: ['Feature', 'Contiguous', 'Paging', 'Segmentation', 'Seg+Paging'], rows: [
      ['Fragmentation', 'External', 'Internal (small)', 'External', 'Minimal'],
      ['Address Space', 'One linear space', 'Linear pages', 'Multiple logical segments', 'Segments of pages'],
      ['Sharing', 'Hard', 'Easy (share frames)', 'Easy (share segments)', 'Easy'],
      ['Protection', 'Base/limit registers', 'Page-level protection', 'Segment-level', 'Per-page'],
      ['OS Example', 'Early Unix', 'Linux, Windows', 'OS/2', 'Intel x86-64'],
    ]},
    quickRef: [
      ['Logical Address', 'Address generated by CPU; also called virtual address'],
      ['Physical Address', 'Actual address in RAM; seen by memory unit'],
      ['MMU', 'Hardware that translates logical to physical addresses at runtime'],
      ['Page', 'Fixed-size block of logical memory (typically 4 KB)'],
      ['Frame', 'Fixed-size block of physical memory (same size as page)'],
      ['TLB', 'Hardware cache for fast page table lookups'],
    ],
    crossApp: [
      ['Paging', 'Standard memory mgmt', 'Simple paging or none', 'Relies on OS paging', 'Guest OS uses own paging'],
      ['Segmentation', 'x86 legacy mode', 'Not used', 'Logical segments for tables', 'Nested page tables (EPT)'],
      ['TLB', 'Crucial for performance', 'Simple or no TLB', 'Large pages reduce TLB misses', 'Virtualized TLB (nested)'],
    ],
    quiz: [
      ['Which technique divides memory into fixed-size blocks?', ['a) Paging', 'b) Segmentation', 'c) Contiguous allocation', 'd) Dynamic partitioning']],
      ['The MMU is responsible for:', ['a) Managing disk storage', 'b) Translating logical to physical addresses', 'c) Scheduling processes', 'd) Handling I/O']],
      ['What is external fragmentation?', ['a) Wasted space inside allocated blocks', 'b) Wasted space between allocated blocks', 'c) Page table overflow', 'd) TLB miss penalty']],
    ],
  },
  { // 09-virtual-memory
    slug: '09-virtual-memory',
    atGlance: [
      ['Virtual Memory', 'Allows execution of processes partially in memory; illusion of larger memory'],
      ['Demand Paging', 'Pages loaded only when referenced; lazy pager'],
      ['Page Fault', 'Referenced page not in memory => trap to OS => load from disk => restart instruction'],
      ['Page Replacement', 'Select victim page: FIFO, Optimal, LRU, Approximated LRU (Clock)'],
      ['Thrashing', 'Excessive paging -- process spends more time paging than executing'],
      ['Allocation', 'Equal, proportional, or priority-based page allocation among processes'],
    ],
    roadmap: `flowchart LR
    A[Virtual Memory Concept] --> B[Demand Paging]
    B --> C[Page Fault Handling]
    C --> D[Copy-on-Write]
    D --> E[Page Replacement Algorithms]
    E --> F[Frame Allocation]
    F --> G[Thrashing]
    G --> H[Summary]`,
    callouts: [
      ['TIP', '**LRU replacement** is the most effective theoretical algorithm but expensive to implement exactly. Practical systems use approximations: the **second-chance (clock) algorithm** uses a reference bit to approximate LRU with minimal overhead.'],
      ['WARNING', '**Belady anomaly** is unique to FIFO: adding more frames can increase page faults. This does not occur with stack-based algorithms like LRU or Optimal.'],
      ['NOTE', '**Copy-on-Write (CoW)** is key: `fork()` creates a child that shares the parent pages until one writes. No physical pages are copied until then. This dramatically speeds up `fork()` and reduces memory usage.'],
    ],
    conceptComp: { headers: ['Algorithm', 'Belady Anomaly', 'Implementation Cost', 'Hit Ratio'], rows: [
      ['FIFO', 'Yes', 'Very low', 'Poor -- may evict frequently used pages'],
      ['Optimal (MIN)', 'No', 'Impossible (needs future knowledge)', 'Best (benchmark)'],
      ['LRU', 'No', 'High (full implementation)', 'Near-optimal'],
      ['Clock (2nd Chance)', 'Varies', 'Low (reference bit)', 'Good approx. of LRU'],
    ]},
    quickRef: [
      ['Virtual Memory', 'Separation of logical from physical memory; process runs partially loaded'],
      ['Demand Paging', 'Page loaded only when a reference to it occurs'],
      ['Page Fault', 'Interrupt when referenced page is not in physical memory'],
      ['Thrashing', 'Critical performance collapse from excessive paging'],
      ['Copy-on-Write', 'Pages shared until modified, then copied'],
      ['Working Set', 'Set of pages a process is actively referencing'],
    ],
    crossApp: [
      ['Demand Paging', 'Standard', 'May disable (prefers own caching)', 'Host-paged', 'Guest OS manages own paging'],
      ['LRU', 'Approximated (Clock)', 'Buffer pool replacement', 'Not applicable', 'Page ballooning'],
      ['Thrashing', 'Good allocation reduces', 'Rare (controlled workload)', 'Rare', 'Over-commitment risk'],
      ['CoW', 'fork() optimization', 'Snapshot/checkpoint', 'Container layers', 'VM cloning'],
    ],
    quiz: [
      ['What happens when a process references a page not in memory?', ['a) Process terminated', 'b) Page fault; OS loads page from disk', 'c) System reboots', 'd) TLB is flushed']],
      ['Which replacement algorithm is impossible to implement?', ['a) FIFO', 'b) LRU', 'c) Optimal (MIN)', 'd) Clock']],
      ['Belady anomaly is associated with:', ['a) FIFO', 'b) LRU', 'c) Optimal', 'd) Clock']],
      ['Spending more time paging than executing is called:', ['a) Deadlock', 'b) Thrashing', 'c) Starvation', 'd) Race condition']],
    ],
  },
  { // 10-file-systems
    slug: '10-file-systems',
    atGlance: [
      ['File Concept', 'Named collection of related data; persistent storage abstraction'],
      ['File Attributes', 'Name, identifier, type, location, size, protection, timestamps'],
      ['Access Methods', 'Sequential, Direct/Random, Indexed (via index table)'],
      ['Directory Structure', 'Single-level, two-level, tree-structured, acyclic-graph, general-graph'],
      ['Protection', 'Read/write/execute per user/group/other; ACLs, capabilities'],
      ['Mounting', 'Attaching a file system to a mount point in the directory tree'],
    ],
    roadmap: `flowchart LR
    A[File Concept] --> B[File Attributes & Operations]
    B --> C[Access Methods]
    C --> D[Directory Structures]
    D --> E[File System Mounting]
    E --> F[File Protection]
    F --> G[Summary]`,
    callouts: [
      ['TIP', 'A **tree-structured directory** is the most common organization. Each user has a subtree rooted at their home directory. Absolute paths start at root (`/home/user/file`); relative paths at current directory.'],
      ['WARNING', '**Cyclic graph directories** (with symbolic links) allow cycles. `ls -R` can loop forever. Implementations must detect cycles (path-length limits or garbage collection).'],
      ['NOTE', 'Unix file protection uses a 9-bit permission mask: three groups (owner, group, other) x three permissions (read=4, write=2, execute=1). `chmod 755` gives owner rwx, group r-x, other r-x.'],
    ],
    conceptComp: { headers: ['Feature', 'Sequential Access', 'Direct Access', 'Indexed Access'], rows: [
      ['Read Pattern', 'Data read in order from beginning', 'Random record by number', 'Via index key lookup'],
      ['Storage Type', 'Tape, streaming', 'Disk', 'Disk with index structures'],
      ['Overhead', 'Minimal', 'Fixed-size records needed', 'Index management overhead'],
      ['Use Case', 'Log files, media streaming', 'Database files, paging', 'Large data with metadata search'],
    ]},
    quickRef: [
      ['File', 'Named, persistent collection of data on secondary storage'],
      ['Directory', 'Maps file names to file control blocks (inodes)'],
      ['Mount Point', 'Directory where a file system attaches to the system tree'],
      ['Inode', 'Unix file metadata (permissions, timestamps, block pointers)'],
      ['Symbolic Link', 'Points to another file by name (crosses file systems)'],
      ['Hard Link', 'Directory entry to an inode (same file system only)'],
    ],
    crossApp: [
      ['Directory', 'Tree (inodes)', 'B+ tree ($MFT)', 'B-tree', 'Schema/tablespace'],
      ['Access Control', '9-bit permission + ACL', 'Security descriptors', 'Unix + ACL', 'GRANT/REVOKE'],
      ['Mounting', 'mount command', 'Drive letters (C:)', 'Fstab + auto-mount', 'Attach database'],
      ['Links', 'Hard + symlink', 'Shortcut + junction', 'Symlink + hard link', 'Foreign keys'],
    ],
    quiz: [
      ['Which directory structure supports cycles?', ['a) Tree-structured', 'b) Acyclic-graph', 'c) General-graph', 'd) Single-level']],
      ['The Unix inode stores:', ['a) File name', 'b) File metadata + block pointers', 'c) File content only', 'd) Directory path']],
      ['chmod 644 gives which permissions?', ['a) r-x,rwx,---', 'b) rwx,r-x,r-x', 'c) rw-,r--,r--', 'd) rw-,rw-,rw-']],
    ],
  },
  { // 11-file-system-impl
    slug: '11-file-system-impl',
    atGlance: [
      ['File System Layers', 'Application -> logical FS -> file-org module -> I/O control -> devices'],
      ['On-Disk Structures', 'Boot block, superblock, free-space mgmt, inodes, file data blocks'],
      ['Directory Impl.', 'Linear list (simple, slow) vs hash table (fast, complex)'],
      ['Contiguous', 'Fast sequential/direct access; severe external fragmentation'],
      ['Linked', 'No fragmentation; only sequential access (FAT helps)'],
      ['Indexed', 'Direct access via index block; good for large files'],
      ['Free-Space Mgmt', 'Bit vector, linked list, group counting'],
    ],
    roadmap: `flowchart LR
    A[File System Layers] --> B[On-Disk Structures]
    B --> C[Directory Implementation]
    C --> D[Allocation Methods]
    D --> E[Contiguous / Linked / Indexed]
    E --> F[Free-Space Management]
    F --> G[Efficiency & Performance]
    G --> H[Summary]`,
    callouts: [
      ['TIP', 'The **Unix inode** uses a multi-level index scheme: 12 direct block pointers -> 1 single indirect -> 1 double indirect -> 1 triple indirect. Small files use direct pointers; huge files use indirect ones.'],
      ['WARNING', '**Linked allocation** solves fragmentation but makes direct access impractical. The File Allocation Table (FAT) mitigates this by storing the chain separately in memory.'],
      ['NOTE', 'A **bit vector** (free bitmap) is the simplest free-space tracking: each block = one bit. Finding the first free block is fast with bit-scan instructions, but the bitmap must fit in memory.'],
    ],
    conceptComp: { headers: ['Feature', 'Contiguous', 'Linked', 'Indexed (Unix inode)'], rows: [
      ['Ext. Frag.', 'Yes', 'No', 'No'],
      ['Direct Access', 'Yes', 'No', 'Yes'],
      ['Seq. Access', 'Fast', 'Moderate', 'Fast'],
      ['Overhead', 'Minimal', 'Per-block pointers', 'Index block(s)'],
      ['Max File Size', 'Limited by contiguous space', 'No limit', 'Very large (indirect blocks)'],
    ]},
    quickRef: [
      ['Superblock', 'FS metadata: size, block count, free-block count, inode count'],
      ['Inode', 'Index node -- metadata + block pointers'],
      ['FAT', 'File Allocation Table -- linked-list table cached in memory'],
      ['Bit Vector', 'Bitmap where each bit = free (0) or used (1) block'],
      ['Multi-Level Index', 'Inode indirect block pointers (single/double/triple)'],
    ],
    crossApp: [
      ['Allocation', 'Extents (multi-block)', 'B+ tree', 'Linked (FAT table)', 'Extents'],
      ['Max File Size', '16 TiB', '16 EiB', '4 GiB', '8 EiB'],
      ['FS Check', 'e2fsck', 'chkdsk', 'scandisk', 'fsck_apfs'],
      ['Journaling', 'Yes (metadata)', 'Yes (full)', 'No', 'Yes'],
    ],
    quiz: [
      ['Which allocation method suffers external fragmentation?', ['a) Contiguous', 'b) Linked', 'c) Indexed', 'd) FAT']],
      ['The inode multi-level index allows:', ['a) Faster sequential access', 'b) Small file efficiency + large file support', 'c) Simplified directory lookup', 'd) Journaling without overhead']],
      ['Advantage of indexed over linked allocation?', ['a) Less overhead', 'b) Support for direct (random) access', 'c) Simpler implementation', 'd) Better space utilization']],
    ],
  },
  { // 12-secondary-storage
    slug: '12-secondary-storage',
    atGlance: [
      ['Disk Structure', 'Platters, tracks, sectors, cylinders; data read via actuator arm over spinning platters'],
      ['Disk Scheduling', 'FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK -- minimize seek time'],
      ['Disk Management', 'Partitioning, formatting, boot block, bad block handling'],
      ['RAID', 'Redundant Array of Independent Disks: striping, mirroring, parity'],
      ['Swap Space', 'Virtual memory paging area on disk; raw partition or file-based'],
      ['Stable Storage', 'Write-ahead logging ensures data survives crashes'],
    ],
    roadmap: `flowchart LR
    A[Disk Structure] --> B[Disk Scheduling]
    B --> C[FCFS / SSTF / SCAN / C-SCAN]
    C --> D[Disk Management]
    D --> E[RAID Levels]
    E --> F[Swap Space & Stable Storage]
    F --> G[Summary]`,
    callouts: [
      ['TIP', '**SCAN (elevator algorithm)** moves the disk arm in one direction, servicing all requests, then reverses. **C-SCAN** provides more uniform wait times by servicing only in one direction then jumping back.'],
      ['WARNING', '**SSTF** (Shortest Seek Time First) may cause **starvation** -- distant cylinder requests may be delayed indefinitely if nearby requests keep arriving.'],
      ['NOTE', '**RAID 0** (striping) improves performance with no redundancy. **RAID 1** (mirroring) doubles reliability. **RAID 5** (striping+parity) balances performance, capacity, and reliability.'],
    ],
    conceptComp: { headers: ['Algorithm', 'Direction', 'Starvation', 'Throughput', 'Uniformity'], rows: [
      ['FCFS', 'Order of arrival', 'No', 'Low', 'Poor'],
      ['SSTF', 'Closest request first', 'Yes', 'Moderate', 'Poor'],
      ['SCAN', 'One direction then reverse', 'No', 'High', 'Moderate'],
      ['C-SCAN', 'One direction only', 'No', 'High', 'Best'],
      ['LOOK', 'Only to last request', 'No', 'Higher than SCAN', 'Moderate'],
      ['C-LOOK', 'Last request, one direction', 'No', 'Similar to C-SCAN', 'Best'],
    ]},
    quickRef: [
      ['Seek Time', 'Time to move disk arm to desired cylinder'],
      ['Rotational Latency', 'Time for sector to rotate under head'],
      ['Cylinder', 'Same track across all platter surfaces'],
      ['SSTF', 'Shortest Seek Time First'],
      ['RAID', 'Multiple disks for performance and/or reliability'],
      ['Swap Space', 'Disk space for paging virtual memory pages'],
    ],
    crossApp: [
      ['Disk Sched.', 'Elevator (deadline)', 'Noop (DB manages I/O)', 'C-LOOK (sequential)', 'CFQ or BFQ'],
      ['RAID 0', 'Not suitable', 'Scratch space', 'Temp storage', 'Not for production'],
      ['RAID 1', 'OS partition', 'Transaction logs', 'Critical metadata', 'Critical data'],
      ['RAID 5/6', 'Bulk data', 'Data tables', 'Media archive', 'General file storage'],
    ],
    quiz: [
      ['Which algorithm provides most uniform waiting time?', ['a) SSTF', 'b) C-SCAN', 'c) FCFS', 'd) LOOK']],
      ['What does RAID stand for?', ['a) Redundant Array of Independent Disks', 'b) Random Access Integrated Drive', 'c) Reliable Array of Internet Devices', 'd) Rapid Access Information Disk']],
      ['Which RAID level provides striping with parity?', ['a) RAID 0', 'b) RAID 1', 'c) RAID 5', 'd) RAID 10']],
    ],
  },
  { // 13-io-systems
    slug: '13-io-systems',
    atGlance: [
      ['I/O Hardware', 'Ports, buses, controllers; devices have data/command/status registers'],
      ['I/O Techniques', 'Programmed I/O, Interrupt-driven I/O, DMA'],
      ['DMA', 'Direct Memory Access: device transfers data directly to/from memory without CPU'],
      ['Device Drivers', 'Kernel modules understanding device protocols; standard interface to OS'],
      ['Buffering', 'Temporary storage to decouple producer and consumer of data'],
      ['Spooling/Caching', 'Spooling manages shared device access; caching keeps frequent data ready'],
    ],
    roadmap: `flowchart LR
    A[I/O Hardware Basics] --> B[Ports / Buses / Controllers]
    B --> C[I/O Control Methods]
    C --> D[Programmed / Interrupt / DMA]
    D --> E[Device Drivers]
    E --> F[Buffering & Caching]
    F --> G[I/O Performance]
    G --> H[Summary]`,
    callouts: [
      ['TIP', '**DMA** is essential for high-throughput I/O. Without it, the CPU must copy every byte from device to memory. DMA allows the CPU to initiate the transfer and work on other tasks while the DMA controller handles data movement.'],
      ['WARNING', 'Interrupt-driven I/O is fine for character devices but too much overhead for block devices. For bulk transfers, DMA is essential. Each interrupt requires a full context switch.'],
      ['NOTE', 'The **device driver** layer provides a uniform interface so the same system calls (`read()`, `write()`, `ioctl()`) work across different hardware.'],
    ],
    conceptComp: { headers: ['Feature', 'Programmed I/O', 'Interrupt-Driven', 'DMA'], rows: [
      ['CPU Role', 'Polls device until ready', 'Starts I/O, gets interrupt', 'Initiates, DMA does rest'],
      ['Data Path', 'CPU each byte', 'CPU each byte', 'Device <-> Memory directly'],
      ['Overhead', 'Very high (busy-waits)', 'Moderate (interrupt per byte)', 'Low (interrupt per transfer)'],
      ['Best For', 'Simple/slow devices', 'Character devices', 'Block devices, high throughput'],
    ]},
    quickRef: [
      ['DMA', 'Direct Memory Access -- hardware for device-to-memory transfers'],
      ['Device Driver', 'Kernel module providing standard interface to specific hardware'],
      ['Buffering', 'Temporary storage for speed mismatches between devices'],
      ['Spooling', 'Managing shared exclusive-access devices (e.g., printer queue)'],
      ['Memory-Mapped I/O', 'Device registers mapped into CPU address space'],
      ['Interrupt', 'Hardware signal causing CPU to save state and run handler'],
    ],
    crossApp: [
      ['I/O Method', 'DMA (NVMe, AHCI)', 'DMA (ring buffers)', 'DMA (framebuffer)', 'DMA (UHCI/EHCI)'],
      ['Driver Model', 'Block driver', 'Network driver', 'DRM/KMS driver', 'USB core + class'],
      ['Buffering', 'Disk cache', 'Socket buffer', 'Back buffer', 'OHCI/EHCI frame lists'],
    ],
    quiz: [
      ['Which I/O method needs least CPU for large transfers?', ['a) Programmed I/O', 'b) Interrupt-driven I/O', 'c) DMA', 'd) Memory-mapped I/O']],
      ['Main purpose of a device driver?', ['a) Uniform kernel interface for specific hardware', 'b) Speed up hardware', 'c) Manage memory', 'd) Schedule processes']],
      ['Buffering is used to:', ['a) Increase disk space', 'b) Handle speed mismatches', 'c) Reduce power', 'd) Encrypt data']],
    ],
  },
  { // 14-linux-kernel
    slug: '14-linux-kernel',
    atGlance: [
      ['Linux Architecture', 'Monolithic kernel with loadable modules; kernel space vs user space'],
      ['Process Mgmt', 'task_struct PCB, CFS scheduler, clone() system call'],
      ['Memory Mgmt', 'Buddy allocator (physical), SLUB (kernel objects), page tables (virtual)'],
      ['VFS', 'Virtual File System: uniform interface for all file systems'],
      ['IPC', 'Signals, pipes, sockets, shared memory, message queues, futexes'],
      ['Modules', 'Dynamically loadable kernel modules (drivers, file systems)'],
    ],
    roadmap: `flowchart LR
    A[Linux Architecture] --> B[Process Management]
    A --> C[Memory Management]
    A --> D[Virtual File System]
    A --> E[IPC Mechanisms]
    A --> F[Kernel Modules]
    F --> G[Booting Process]
    G --> H[Summary]`,
    callouts: [
      ['TIP', 'The **CFS (Completely Fair Scheduler)** uses a red-black tree of tasks ordered by virtual runtime (`vruntime`). It always picks the task with smallest `vruntime`, ensuring perfect fairness in O(log n) time.'],
      ['WARNING', 'Kernel modules run in kernel space -- a buggy module can crash the entire system. Always test modules before production. Use `modprobe --dry-run` to check dependencies.'],
      ['NOTE', '**VFS** (Virtual File System) allows Linux to support ext4, XFS, Btrfs, NTFS, FAT32 simultaneously. All file systems implement the same VFS operations.'],
    ],
    conceptComp: { headers: ['Feature', 'Linux', 'Windows NT', 'macOS/XNU'], rows: [
      ['Kernel Type', 'Monolithic + modules', 'Hybrid', 'Hybrid (Mach + BSD)'],
      ['Scheduler', 'CFS (vruntime-based)', 'Priority-based (boosts)', 'Multi-level feedback'],
      ['File System', 'VFS -> ext4/XFS/Btrfs', 'NTFS (B+ tree $MFT)', 'APFS (B-tree)'],
      ['Process Model', 'fork()/clone()', 'CreateProcess()', 'fork() + Mach tasks'],
      ['IPC', 'Pipes, sockets, shm, futex', 'LPC/ALPC, named pipes', 'Mach messages, BSD sockets'],
    ]},
    quickRef: [
      ['CFS', 'Completely Fair Scheduler -- O(log n) red-black tree'],
      ['VFS', 'Virtual File System -- uniform interface for diverse FS'],
      ['Buddy Allocator', 'Physical page allocation using power-of-two blocks'],
      ['SLUB', 'Kernel object allocator (replacement for SLAB)'],
      ['Kernel Module', 'Dynamically loadable kernel code (.ko file)'],
      ['System Call', 'Interface between user space and kernel space'],
    ],
    crossApp: [
      ['CFS', 'Fair CPU distribution', 'Responsive UI', 'RT patches (PREEMPT_RT)', 'CPU shares via cgroups'],
      ['VFS', 'Mixed file systems', 'Desktop storage', 'Flash-friendly FS', 'OverlayFS for layers'],
      ['Modules', 'Netfilter/storage', 'GPU drivers', 'Minimal static kernel', 'Minimal modules'],
      ['cgroups', 'Resource limits', 'N/A', 'N/A', 'Container isolation'],
    ],
    quiz: [
      ['What type of kernel does Linux use?', ['a) Microkernel', 'b) Hybrid', 'c) Monolithic with modules', 'd) Exokernel']],
      ['CFS uses which data structure?', ['a) Linked list', 'b) Red-black tree', 'c) B-tree', 'd) Priority queue']],
      ['VFS is responsible for:', ['a) Managing virtual memory', 'b) Uniform interface to multiple FS types', 'c) Scheduling I/O', 'd) Loading modules']],
    ],
  },
  { // 15-shell-scripting
    slug: '15-shell-scripting',
    atGlance: [
      ['Shell Basics', 'Command interpreter; Linux default is Bash (Bourne Again SHell)'],
      ['Variables', 'User-defined, environment, positional parameters; $? for exit status'],
      ['Conditionals', 'if-then-else, case; test command [ ] and [[ ]]'],
      ['Loops', 'for, while, until; iterating over files and command output'],
      ['Functions', 'Reusable code blocks; local variables with local keyword'],
      ['Script Control', 'exit, return, break, continue, error handling with trap'],
    ],
    roadmap: `flowchart LR
    A[Shell & Bash Basics] --> B[Variables & Parameters]
    B --> C[Conditionals]
    B --> D[Loops]
    C --> E[Functions]
    D --> E
    E --> F[Error Handling & Debugging]
    F --> G[Real-World Scripts]
    G --> H[Summary]`,
    callouts: [
      ['TIP', 'Always quote your variables: `"$var"` instead of `$var`. Unquoted variables undergo word splitting and glob expansion, causing bugs with spaces or special characters.'],
      ['WARNING', 'Never parse `ls` output. Use globs: `for file in *.txt; do` -- NOT `for file in $(ls *.txt)`. Filenames with spaces or newlines break the ls approach.'],
      ['NOTE', 'The **shebang** (`#!/bin/bash`) tells the kernel which interpreter to use. Use `#!/usr/bin/env bash` for better portability.'],
    ],
    conceptComp: { headers: ['Feature', 'test / [ ]', '[[ ]] (Bash)', '(( )) (Arithmetic)'], rows: [
      ['String Comp.', '= !=', '= != < > (lexical)', 'N/A'],
      ['Arith. Comp.', '-eq -ne -lt', '-eq -ne -lt', '== != < >'],
      ['Pattern Match', 'No', '== =~ (regex)', 'N/A'],
      ['Globbing', 'No', 'Disabled (safe)', 'N/A'],
    ]},
    quickRef: [
      ['$?', 'Exit status of last command (0=success, nonzero=failure)'],
      ['$0, $1, ...', 'Positional parameters: script name, first arg, etc.'],
      ['$@', 'All arguments as separate words (use "$@" to preserve quoting)'],
      ['$#', 'Number of positional parameters'],
      ['stdin/stdout/stderr', 'Standard input (0), output (1), error (2)'],
      ['Shebang', '#!/bin/bash -- tells kernel to use Bash'],
    ],
    crossApp: [
      ['Loops', 'Process log rotation', 'CI/CD pipeline steps', 'Build automation', 'Batch file processing'],
      ['Conditionals', 'Check disk usage', 'Validate deployment', 'Test exit codes', 'Data validation'],
      ['Functions', 'Common admin tasks', 'Reusable pipeline stages', 'Utility library', 'Data transform'],
      ['Error Handling', 'Alert on failures', 'Retry logic', 'Assertions', 'Log errors + skip'],
    ],
    quiz: [
      ['Purpose of shebang (#!/bin/bash)?', ['a) Specify interpreter', 'b) Add comments', 'c) Set env vars', 'd) Define author']],
      ['What does $? represent?', ['a) All arguments', 'b) Exit status of last command', 'c) PID of script', 'd) Script name']],
      ['Why quote variables ("$var") in Bash?', ['a) Make read-only', 'b) Prevent word splitting and globbing', 'c) Improve performance', 'd) Declare arrays']],
    ],
  },
  { // 16-security
    slug: '16-security',
    atGlance: [
      ['Security Goals', 'Confidentiality, integrity, availability (CIA triad)'],
      ['Authentication', 'Passwords, biometrics, two-factor, Kerberos'],
      ['Access Control', 'Discretionary (DAC), mandatory (MAC), role-based (RBAC)'],
      ['Buffer Overflow', 'Classic exploit; overwrite return address to execute arbitrary code'],
      ['Cryptography', 'Symmetric (AES), asymmetric (RSA), hashing (SHA-256), signatures'],
      ['Network Security', 'Firewalls, VPNs, TLS, intrusion detection systems'],
    ],
    roadmap: `flowchart LR
    A[Security Goals: CIA] --> B[Authentication Methods]
    B --> C[Access Control Models]
    C --> D[Buffer Overflow & Malware]
    D --> E[Cryptography Basics]
    E --> F[Network Security]
    F --> G[Security Best Practices]
    G --> H[Summary]`,
    callouts: [
      ['TIP', '**Defense in depth** is key: no single mechanism is sufficient. Layer multiple controls -- firewall + authentication + encryption + monitoring + least privilege.'],
      ['WARNING', '**Buffer overflow** attacks exploit programs with missing input length checks. Modern mitigations: ASLR, NX stack, stack canaries -- but careful coding is still essential.'],
      ['NOTE', '**Kerberos** is a network authentication protocol using tickets and a Key Distribution Center (KDC). It is the foundation of Windows Active Directory authentication.'],
    ],
    conceptComp: { headers: ['Feature', 'DAC', 'MAC', 'RBAC'], rows: [
      ['Control by', 'File owner', 'System policy', 'Role assignment'],
      ['Flexibility', 'High', 'Low', 'Moderate'],
      ['Security Level', 'Low (user-granted)', 'High (enforced)', 'Moderate-High'],
      ['Examples', 'Unix permissions', 'SELinux, AppArmor', 'Windows AD groups'],
      ['Use Case', 'Desktops/servers', 'Military/classified', 'Enterprise orgs'],
    ]},
    quickRef: [
      ['CIA', 'Confidentiality, Integrity, Availability'],
      ['ASLR', 'Address Space Layout Randomization'],
      ['Stack Canary', 'Value before return address to detect overflow'],
      ['Kerberos', 'Network authentication using tickets + KDC'],
      ['SELinux', 'Linux Security Module implementing MAC'],
      ['TLS', 'Transport Layer Security for encrypted communication'],
    ],
    crossApp: [
      ['Authentication', 'HTTP basic/OAuth', 'User/password, cert', 'Login/PAM', '802.1X, VPN certs'],
      ['Access Control', 'File perms, .htaccess', 'GRANT/REVOKE', 'Unix perms, ACLs', 'Firewall rules'],
      ['Encryption', 'HTTPS (TLS)', 'Transparent encryption', 'dm-crypt', 'IPsec, TLS'],
      ['Auditing', 'Access logs', 'Query logs', 'Auditd, syslog', 'NetFlow, IDS'],
    ],
    quiz: [
      ['What does I in CIA stand for?', ['a) Integrity', 'b) Identity', 'c) Implementation', 'd) Isolation']],
      ['Which technique randomizes addresses against overflow?', ['a) Stack canary', 'b) NX bit', 'c) ASLR', 'd) KASLR']],
      ['Which access control uses resource owner identity?', ['a) DAC', 'b) MAC', 'c) RBAC', 'd) ABAC']],
    ],
  },
  { // 17-virtualization
    slug: '17-virtualization',
    atGlance: [
      ['Virtualization', 'Abstracting physical hardware into virtual resources; multiple VMs per host'],
      ['Hypervisor Types', 'Type 1 (bare-metal: ESXi, Hyper-V) vs Type 2 (hosted: VirtualBox)'],
      ['CPU Virt.', 'Hardware-assisted via Intel VT-x/AMD-V; trap-and-emulate'],
      ['Memory Virt.', 'Nested page tables (EPT, NPT); shadow page tables'],
      ['I/O Virt.', 'Pass-through (VT-d), paravirtualized (virtio), emulated'],
      ['Containers', 'OS-level virtualization: share kernel, isolate via namespaces + cgroups'],
    ],
    roadmap: `flowchart LR
    A[Virtualization Concept] --> B[Hypervisor Types]
    B --> C[CPU Virtualization]
    B --> D[Memory Virtualization]
    B --> E[I/O Virtualization]
    E --> F[Containerization]
    F --> G[Cloud Computing Models]
    G --> H[Summary]`,
    callouts: [
      ['TIP', '**Type 1 hypervisors** (bare-metal) run directly on hardware with higher performance and better isolation. **Type 2 hypervisors** run as applications on a host OS -- simpler but more overhead.'],
      ['WARNING', 'Containers are **not lightweight VMs**. They share the host kernel -- a kernel compromise gives access to all containers. Container security relies on namespaces, cgroups, and seccomp.'],
      ['NOTE', '**Hardware-assisted virtualization** (Intel VT-x, AMD-V) lets the CPU natively support root (hypervisor) and non-root (guest) modes, eliminating binary translation for most instructions.'],
    ],
    conceptComp: { headers: ['Feature', 'Type 1 (Bare-Metal)', 'Type 2 (Hosted)', 'Containers'], rows: [
      ['Host OS', 'No (runs on hardware)', 'Yes (app on host OS)', 'Shared host kernel'],
      ['Performance', 'Near-native', 'Moderate', 'Native (process-level)'],
      ['Isolation', 'Strong (separate kernel)', 'Strong', 'Moderate (shared kernel)'],
      ['Boot Time', 'Minutes', 'Minutes', 'Milliseconds'],
      ['Example', 'ESXi, Hyper-V, KVM', 'VirtualBox, Workstation', 'Docker, podman'],
    ]},
    quickRef: [
      ['Hypervisor', 'Software layer creating and managing VMs'],
      ['VM', 'Virtual Machine -- virtualized hardware + guest OS'],
      ['Container', 'Process isolation sharing host kernel'],
      ['VT-x/AMD-V', 'CPU hardware extensions for virtualization'],
      ['Nested Page Tables', 'EPT/NPT -- hardware VM memory translation'],
      ['VirtIO', 'Paravirtualized I/O for high-performance VM access'],
    ],
    crossApp: [
      ['Server Consolidation', 'ESXi, KVM', 'Docker on VMs', 'AWS EC2, Azure VMs'],
      ['Dev/Test', 'Vagrant + VirtualBox', 'Docker Compose', 'Cloud playgrounds'],
      ['Microservices', 'Kubernetes on VMs', 'Docker + K8s', 'EKS, AKS, GKE'],
      ['Desktop Virt.', 'VDI (Horizon)', 'Not suitable', 'Windows Virtual Desktop'],
    ],
    quiz: [
      ['Key difference between Type 1 and Type 2?', ['a) Type 1 proprietary, Type 2 open', 'b) Type 1 runs on hardware, Type 2 on host OS', 'c) Type 1 supports containers', 'd) Type 1 slower']],
      ['What isolates containers while sharing kernel?', ['a) VirtualBox', 'b) Namespaces and cgroups', 'c) VT-x', 'd) Shadow page tables']],
      ['Main advantage of containers over VMs?', ['a) Better security', 'b) Different guest OS', 'c) Faster startup, lower overhead', 'd) Better hardware support']],
    ],
  },
  { // 18-case-studies
    slug: '18-case-studies',
    atGlance: [
      ['Windows NT', 'Hybrid kernel; NT kernel + HAL + executive; Win32/POSIX/OS2 subsystems'],
      ['Linux', 'Monolithic + modules; CFS scheduler; VFS; loadable kernel modules'],
      ['macOS/XNU', 'Hybrid: Mach microkernel + BSD + I/O Kit; Mach message IPC'],
      ['FreeBSD', 'Monolithic + POSIX; ZFS, pf firewall, jails'],
      ['RTOS', 'Real-time: FreeRTOS (small), VxWorks (certified), QNX (microkernel)'],
      ['Minix/seL4', 'True microkernel; seL4 formally verified, no kernel bugs'],
    ],
    roadmap: `flowchart LR
    A[Windows NT] --> B[Linux Kernel]
    A --> C[macOS XNU]
    B --> D[FreeBSD]
    C --> D
    D --> E[RTOS: FreeRTOS / VxWorks / QNX]
    E --> F[Minix & seL4 Microkernels]
    F --> G[Comparative Analysis]
    G --> H[Summary]`,
    callouts: [
      ['TIP', '**seL4** is the first formally verified OS kernel. Using the Isabelle/HOL theorem prover, the kernel code is proven correct against its specification. No buffer overflows or memory safety bugs are possible.'],
      ['WARNING', 'macOS XNU Mach messaging IPC has performance issues; Apple uses it only for essential services. Most BSD services bypass Mach and run in kernel space, making XNU a hybrid in practice.'],
      ['NOTE', '**Windows NT** was designed for portability -- the HAL (Hardware Abstraction Layer) abstracts CPU architecture. NT ran on x86, Alpha, MIPS, Itanium, and ARM.'],
    ],
    conceptComp: { headers: ['Feature', 'Windows NT', 'Linux', 'macOS (XNU)', 'FreeBSD'], rows: [
      ['Kernel Type', 'Hybrid', 'Monolithic + modules', 'Hybrid (Mach+BSD)', 'Monolithic'],
      ['Scheduling', 'Priority + boosts', 'CFS (fair)', 'Multi-level feedback', 'ULE scheduler'],
      ['File System', 'NTFS', 'VFS -> ext4/XFS/Btrfs', 'APFS', 'UFS, ZFS'],
      ['Process', 'CreateProcess()', 'fork()/clone()', 'fork() + Mach tasks', 'fork()'],
      ['Security', 'ACL, BitLocker', 'SELinux, AppArmor', 'SIP, AMFI', 'Capsicum, Jails'],
    ]},
    quickRef: [
      ['NT Kernel', 'Windows NT: executive + kernel + HAL'],
      ['XNU', 'Apple hybrid kernel (Mach + BSD + I/O Kit)'],
      ['HAL', 'Hardware Abstraction Layer (portable NT)'],
      ['Jails', 'FreeBSD OS-level virtualization (precursor to containers)'],
      ['ZFS', 'Advanced FS with snapshots, checksums, pooled storage'],
      ['seL4', 'Formally verified microkernel'],
    ],
    crossApp: [
      ['Desktop', 'Best app/software support', 'Developer-friendly', 'Creative & media', 'Not applicable'],
      ['Server', 'AD, .NET', 'Web, cloud dominant', 'Minimal server', 'N/A'],
      ['Embedded', 'Windows IoT', 'Yocto/Buildroot', 'N/A', 'FreeRTOS, VxWorks'],
      ['Real-Time', 'No native RT', 'PREEMPT_RT', 'No', 'QNX, VxWorks'],
      ['Security Critical', 'E5/Defender', 'SELinux', 'SIP + notarization', 'seL4 (verified)'],
    ],
    quiz: [
      ['Which kernel is formally verified?', ['a) Windows NT', 'b) Linux', 'c) seL4', 'd) macOS XNU']],
      ['What allows Windows NT on different CPUs?', ['a) Win32 subsystem', 'b) HAL', 'c) Executive', 'd) NTFS']],
      ['macOS XNU is best described as:', ['a) Monolithic', 'b) Microkernel', 'c) Hybrid (Mach+BSD)', 'd) Exokernel']],
      ['FreeBSD precursor to containers?', ['a) ZFS', 'b) Jails', 'c) pf firewall', 'd) Ports']],
    ],
  },
];

// Merge auto-generated data into data object
for (const ch of chapterData) {
  data[ch.slug] = ch;
}

// ─── Processing ───

function buildTable(rows) {
  if (!rows || !rows.length) return [];
  const lines = [];
  for (const r of rows) {
    lines.push('| ' + r.join(' | ') + ' |');
  }
  return lines;
}

function buildGlanceTable(rows) {
  const lines = [
    '## Chapter at a Glance',
    '',
    '| Topic | Key Points |',
    '|-------|------------|',
  ];
  for (const r of rows) {
    lines.push('| **' + r[0] + '** | ' + r[1] + ' |');
  }
  lines.push('');
  return lines;
}

function buildRoadmap(content) {
  return [
    '## Chapter Roadmap',
    '',
    '<div class="mermaid">',
    content,
    '</div>',
    '',
  ];
}

function buildCallouts(callouts) {
  const lines = [];
  for (const c of callouts) {
    lines.push('> [' + c[0] + ']');
    lines.push('> ' + c[1]);
    lines.push('');
  }
  return lines;
}

function buildConceptComp(cc) {
  const lines = ['## Concept Comparison', ''];
  const sep = cc.headers.map(h => '-'.repeat(Math.max(3, h.length)));
  lines.push('| ' + cc.headers.join(' | ') + ' |');
  lines.push('|' + sep.join('|') + '|');
  for (const r of cc.rows) {
    lines.push('| ' + r.join(' | ') + ' |');
  }
  lines.push('');
  return lines;
}

function buildQuickRef(rows) {
  const lines = ['## Quick Reference', '', '| Term | Definition |', '|------|------------|'];
  for (const r of rows) {
    lines.push('| **' + r[0] + '** | ' + r[1] + ' |');
  }
  lines.push('');
  return lines;
}

function buildCrossApp(rows) {
  const headers = ['Concept', 'Web Server', 'Database', 'Embedded System', 'Smartphone'];
  const lines = ['## Cross-Application Matrix', '', '| ' + headers.join(' | ') + ' |'];
  const sep = headers.map(h => '-'.repeat(Math.max(3, h.length)));
  lines.push('|' + sep.join('|') + '|');
  for (const r of rows) {
    lines.push('| ' + r.join(' | ') + ' |');
  }
  lines.push('');
  return lines;
}

function buildQuiz(quiz) {
  const lines = ['## Chapter Quiz', ''];
  let num = 1;
  for (const q of quiz) {
    lines.push(num + '. ' + q[0]);
    for (const o of q[1]) {
      lines.push('   - ' + o);
    }
    lines.push('');
    num++;
  }
  return lines;
}

function insertBefore(lines, insertIdx, insertLines) {
  // Mutate lines array in-place
  const tail = lines.splice(insertIdx);
  lines.push(...insertLines, ...tail);
}

// Process each file
for (const slug of files) {
  const filePath = path.join(dir, slug + '.md');
  console.log('\n=== ' + slug + ' ===');
  
  let text;
  try {
    text = fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    console.log('ERROR reading ' + filePath);
    continue;
  }

  const d = data[slug];
  if (!d) { console.log('WARNING: no data for ' + slug); continue; }

  const lines = text.split('\n');
  
  // Find key section indices
  const h1Idx = lines.findIndex(l => /^# Chapter/.test(l));
  const loIdx = lines.findIndex(l => /^## Learning Objectives/.test(l));
  const summaryIdx = lines.findIndex(l => /^## Summary/.test(l));

  if (h1Idx === -1 || summaryIdx === -1) {
    console.log('ERROR: missing H1 or Summary in ' + slug);
    continue;
  }

  // Find end of Learning Objectives list
  let loEnd = loIdx;
  if (loIdx >= 0) {
    for (let j = loIdx + 1; j < lines.length; j++) {
      if (/^## /.test(lines[j]) || (/^\s*$/.test(lines[j]) && j + 1 < lines.length && /^## /.test(lines[j + 1]))) {
        loEnd = j - 1;
        while (loEnd > loIdx && /^\s*$/.test(lines[loEnd])) loEnd--;
        break;
      }
    }
  }

  // We'll build new content by manipulating the lines array in place
  // Strategy: insert sections at the right positions working backwards to preserve indices

  // 1. Insert enrichment before ## Summary
  const enrLines = [];

  // Callouts
  enrLines.push(...buildCallouts(d.callouts || []));

  // Concept Comparison
  if (d.conceptComp) enrLines.push(...buildConceptComp(d.conceptComp));

  // Quick Reference
  if (d.quickRef) enrLines.push(...buildQuickRef(d.quickRef));

  // Cross-Application Matrix
  if (d.crossApp) enrLines.push(...buildCrossApp(d.crossApp));

  // Quiz
  if (d.quiz) enrLines.push(...buildQuiz(d.quiz));

  if (enrLines.length > 0) {
    const insertAt = lines.findLastIndex(l => /^## Summary/.test(l));
    if (insertAt >= 0) {
      lines.splice(insertAt, 0, '', ...enrLines);
    }
  }

  // 2. Insert Roadmap after Learning Objectives (need to recalc indices)
  // Actually, let's just rebuild the file properly
  // It's easier to reconstruct from scratch
  
  const result = [];

  // H1 + prev/next
  result.push(lines[h1Idx]);
  result.push(makePrevNext(slug));

  // Learning Objectives
  if (loIdx >= 0) {
    for (let j = h1Idx + 1; j <= loEnd; j++) {
      result.push(lines[j]);
    }
  }

  // At a Glance
  if (d.atGlance) result.push(...buildGlanceTable(d.atGlance));

  // Roadmap
  if (d.roadmap) result.push(...buildRoadmap(d.roadmap));

  // Content between Learning Objectives and Summary
  const contentStart = loEnd >= 0 ? loEnd + 2 : h1Idx + 2;
  // Find where enrichment was inserted (before summary)
  // Since enrichment was inserted between old content end and Summary,
  // we get everything from contentStart to the last line before original Summary
  const newSummaryIdx = lines.findIndex(l => /^## Summary/.test(l));
  for (let j = contentStart; j < newSummaryIdx; j++) {
    result.push(lines[j]);
  }
  // Summary onwards
  for (let j = newSummaryIdx; j < lines.length; j++) {
    result.push(lines[j]);
  }

  const output = result.join('\n');

  if (preview) {
    const previewLines = output.split('\n').slice(0, 35);
    console.log('--- PREVIEW (first 35 lines) ---');
    previewLines.forEach(l => console.log(l));
    console.log('... (' + output.split('\n').length + ' total lines)');
  } else {
    fs.writeFileSync(filePath, output, 'utf8');
    const origLines = text.split('\n').length;
    const newLineCount = output.split('\n').length;
    console.log('Written: ' + origLines + ' => ' + newLineCount + ' lines');
  }
}

console.log('\n=== DONE ===');
