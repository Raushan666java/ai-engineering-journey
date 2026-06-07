# Operating Systems - Weekly Assignments

## Assignment Structure
Each week includes theoretical problems, programming tasks, and system design projects.

## Week 1: OS Introduction & Architecture
**Assignment 1.1: System Call Analysis**
- Trace system calls for basic programs (ls, cat, cp)
- Analyze system call overhead using strace
- Compare system call usage between different programs

**Assignment 1.2: OS Comparison Study**
- Compare Windows, Linux, and macOS architectures
- Analyze boot processes for each OS
- Document key differences in system design

## Week 2: System Architecture
**Assignment 2.1: Hardware Interface Programming**
- Write assembly program for interrupt handling
- Implement basic device driver skeleton
- Analyze hardware abstraction layer

**Assignment 2.2: Boot Loader Implementation**
- Create simple boot loader for x86
- Implement kernel loading mechanism
- Document boot sequence steps

## Week 3: Process Management
**Assignment 3.1: Process Control Implementation**
```c
// Implement process creation and management
struct pcb {
    int pid;
    int state;
    int priority;
    struct registers regs;
    struct memory_map mem;
};

// Tasks:
// 1. Implement process creation
// 2. Process state transitions
// 3. Process termination
// 4. Parent-child relationships
```

**Assignment 3.2: IPC Mechanisms**
- Implement shared memory communication
- Create message passing system
- Compare performance of different IPC methods

## Week 4: Threading & Concurrency
**Assignment 4.1: Thread Library Implementation**
```c
// User-level thread library
typedef struct thread {
    int tid;
    void *stack;
    jmp_buf context;
    int state;
} thread_t;

// Implement:
// - thread_create()
// - thread_yield()
// - thread_join()
// - thread_exit()
```

**Assignment 4.2: Synchronization Primitives**
- Implement mutex using atomic operations
- Create semaphore implementation
- Solve producer-consumer problem

## Week 5: CPU Scheduling
**Assignment 5.1: Scheduler Implementation**
```c
// Multi-level feedback queue scheduler
struct scheduler {
    struct queue ready_queues[3];
    int time_quantum[3];
    struct process *running;
};

// Implement scheduling algorithms:
// - FCFS, SJF, Round Robin
// - Priority scheduling
// - Multi-level feedback queue
```

**Assignment 5.2: Real-time Scheduling**
- Implement Rate Monotonic Scheduling
- Analyze schedulability of task sets
- Compare with Earliest Deadline First

## Week 6: Process Synchronization
**Assignment 6.1: Deadlock Detection**
```c
// Banker's algorithm implementation
struct banker_state {
    int allocation[MAX_PROC][MAX_RES];
    int max[MAX_PROC][MAX_RES];
    int available[MAX_RES];
};

bool is_safe_state(struct banker_state *state);
bool request_resources(int pid, int request[]);
```

**Assignment 6.2: Lock-free Data Structures**
- Implement lock-free stack
- Create lock-free queue
- Compare performance with locked versions

## Week 7: Deadlocks
**Assignment 7.1: Deadlock Prevention**
- Implement resource ordering protocol
- Create deadlock prevention algorithms
- Analyze prevention vs detection trade-offs

**Assignment 7.2: Distributed Deadlock Detection**
- Implement wait-for graph algorithm
- Create distributed deadlock detection
- Handle phantom deadlocks

## Week 8: Memory Management
**Assignment 8.1: Memory Allocator**
```c
// Custom memory allocator
struct block {
    size_t size;
    int free;
    struct block *next;
};

void* my_malloc(size_t size);
void my_free(void *ptr);
void* my_realloc(void *ptr, size_t size);
```

**Assignment 8.2: Buddy System Implementation**
- Implement buddy system allocator
- Handle splitting and coalescing
- Analyze fragmentation characteristics

## Week 9: Virtual Memory
**Assignment 9.1: Page Replacement Simulator**
```c
// Page replacement algorithms
struct page_frame {
    int page_number;
    int reference_bit;
    int modify_bit;
    int age;
};

int lru_replace(struct page_frame frames[], int num_frames);
int clock_replace(struct page_frame frames[], int num_frames);
```

**Assignment 9.2: Memory Management Unit**
- Implement address translation
- Create TLB simulation
- Analyze page fault handling

## Week 10: File Systems
**Assignment 10.1: Simple File System**
```c
// Basic file system implementation
struct inode {
    int size;
    int blocks[12];
    int indirect;
    int permissions;
};

int create_file(char *name);
int read_file(int fd, void *buf, int size);
int write_file(int fd, void *buf, int size);
```

**Assignment 10.2: B-tree Index Implementation**
- Implement B-tree for file indexing
- Handle insertions and deletions
- Optimize for disk access patterns

## Week 11: Storage Management
**Assignment 11.1: Disk Scheduler**
```c
// Disk scheduling algorithms
struct disk_request {
    int track;
    int sector;
    int operation;
    struct disk_request *next;
};

void fcfs_schedule(struct disk_request *requests);
void sstf_schedule(struct disk_request *requests);
void scan_schedule(struct disk_request *requests);
```

**Assignment 11.2: RAID Implementation**
- Implement RAID 0, 1, and 5
- Handle disk failures and recovery
- Analyze performance characteristics

## Week 12: I/O Systems
**Assignment 12.1: Device Driver Framework**
```c
// Generic device driver interface
struct device_driver {
    int (*open)(struct device *dev);
    int (*close)(struct device *dev);
    int (*read)(struct device *dev, void *buf, size_t len);
    int (*write)(struct device *dev, void *buf, size_t len);
    int (*ioctl)(struct device *dev, int cmd, void *arg);
};
```

**Assignment 12.2: Asynchronous I/O**
- Implement async I/O framework
- Create I/O completion ports
- Compare with synchronous I/O

## Week 13: Protection & Security
**Assignment 13.1: Access Control System**
```c
// Access control matrix implementation
struct access_matrix {
    int subjects;
    int objects;
    int **permissions;
};

bool check_access(int subject, int object, int operation);
void grant_access(int subject, int object, int operation);
void revoke_access(int subject, int object, int operation);
```

**Assignment 13.2: Capability-based Security**
- Implement capability system
- Create secure object references
- Handle capability delegation

## Week 14: Distributed Systems
**Assignment 14.1: Distributed Mutual Exclusion**
- Implement Lamport's algorithm
- Create token-based mutual exclusion
- Compare centralized vs distributed approaches

**Assignment 14.2: Distributed File System**
- Implement basic distributed FS
- Handle consistency and replication
- Create failure recovery mechanisms

## Week 15: Virtualization
**Assignment 15.1: Simple Hypervisor**
```c
// Basic hypervisor implementation
struct vm_context {
    struct registers guest_regs;
    struct page_table guest_pt;
    int vm_id;
    int state;
};

int create_vm(struct vm_context *vm);
int run_vm(struct vm_context *vm);
int handle_vmexit(struct vm_context *vm, int exit_reason);
```

**Assignment 15.2: Container Implementation**
- Create basic container runtime
- Implement namespace isolation
- Handle resource limits with cgroups

## Week 16: Final Project Options

### Option 1: Mini Operating System
- Complete kernel with basic functionality
- Process management and scheduling
- Memory management with paging
- Simple file system
- Basic I/O and device drivers

### Option 2: Distributed System
- Multi-node distributed OS
- Distributed process management
- Distributed file system
- Fault tolerance mechanisms

### Option 3: Real-time System
- Hard real-time kernel
- Priority-based scheduling
- Deterministic memory management
- Real-time I/O handling

### Option 4: Security-focused OS
- Microkernel with security focus
- Mandatory access control
- Secure boot and attestation
- Isolation mechanisms

## Submission Guidelines
- All code must compile and run
- Include comprehensive documentation
- Provide test cases and results
- Follow coding standards
- Submit via version control system

## Grading Criteria
- **Correctness** (40%): Functional implementation
- **Performance** (25%): Efficiency and optimization
- **Code Quality** (20%): Style and documentation
- **Innovation** (15%): Creative solutions