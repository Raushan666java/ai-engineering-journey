# Chapter 14: Linux Kernel Internals

## Learning Objectives

- Describe the Linux process model and the `task_struct`
- Explain the Linux clone() system call and its role in creating threads
- Analyze the Completely Fair Scheduler (CFS) design and its virtual runtime
- Describe the Linux memory management architecture (buddy allocator, slab, vmalloc)
- Explain the Virtual File System (VFS) layer and its data structures
- Understand the /proc filesystem and how it exposes kernel state

## Theory

![Linux Kernel Internals](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/operating-systems/14-linux-kernel.png)

### Linux Process Model

Linux processes are represented by the **task_struct** structure (defined in `include/linux/sched.h`). This is one of the largest structures in the kernel, containing hundreds of fields.

```c
// Simplified task_struct (very much abridged)
struct task_struct {
    // State
    volatile long state;           // TASK_RUNNING, TASK_INTERRUPTIBLE, etc.
    int exit_code;
    pid_t pid;
    pid_t tgid;                    // Thread group ID (PID of the main thread)

    // Scheduling
    unsigned int policy;           // SCHED_FIFO, SCHED_RR, SCHED_NORMAL, etc.
    int prio, static_prio, normal_prio;
    struct sched_entity se;        // Scheduling entity for CFS

    // Memory
    struct mm_struct *mm;          // Memory descriptor
    struct mm_struct *active_mm;

    // Files
    struct files_struct *files;    // Open file descriptors
    struct fs_struct *fs;          // Filesystem information

    // Signal handling
    struct signal_struct *signal;

    // Parent/child relationships
    struct task_struct *parent;
    struct list_head children;
    struct list_head sibling;

    // Namespace
    struct nsproxy *nsproxy;

    // Wait queue
    wait_queue_head_t *wait_channel;

    // Timers
    cputime_t utime, stime;        // User and system CPU time

    // Thread-specific
    struct thread_struct thread;   // CPU-specific state (registers, etc.)
};
```

#### Process States in Linux

```c
#define TASK_RUNNING        0
#define TASK_INTERRUPTIBLE  1
#define TASK_UNINTERRUPTIBLE 2
#define __TASK_STOPPED      4
#define __TASK_TRACED       8
// (additional states in modern kernels)
```

| State | Meaning | Wake-up |
|-------|---------|---------|
| TASK_RUNNING | Running or ready to run | Already runnable |
| TASK_INTERRUPTIBLE | Waiting for event, can receive signals | Signal or event |
| TASK_UNINTERRUPTIBLE | Waiting for event, no signals | Event only |
| __TASK_STOPPED | Stopped (SIGSTOP) | SIGCONT |
| __TASK_TRACED | Being traced by ptrace | ptrace event |

#### Process Creation: The clone() System Call

Linux uses `clone()` rather than `fork()` internally. The `fork()`, `vfork()`, and `pthread_create()` library functions all call `clone()` with different flags.

```c
// clone() system call
pid_t clone(int (*fn)(void *), void *child_stack, int flags, void *arg, ...);

// Flags control what is shared between parent and child:
// CLONE_VM:      Share memory address space (creates a thread)
// CLONE_FILES:   Share open file descriptors
// CLONE_SIGHAND: Share signal handlers
// CLONE_FS:      Share filesystem information (umask, root, cwd)

// fork() is essentially:
clone(CLONE_CHILD_SETTID | CLONE_CHILD_CLEARTID | SIGCHLD, ...)

// pthread_create() is essentially:
clone(CLONE_VM | CLONE_FILES | CLONE_SIGHAND | CLONE_THREAD |
      CLONE_SYSVSEM | CLONE_SETTLS | CLONE_PARENT_SETTID, ...)
```

### Linux Scheduler

#### O(1) Scheduler (Linux 2.6.0–2.6.22)

The O(1) scheduler maintained two arrays per CPU: **active** and **expired**.

```
Priority levels: 0 (highest) to 139 (lowest)
  - 0–99: Real-time (SCHED_FIFO, SCHED_RR)
  - 100–139: Normal (SCHED_NORMAL)

Each priority level has a runqueue (list of processes).

struct prio_array {
    int nr_active;              // Number of active tasks
    unsigned long bitmap[5];    // Bitmap of non-empty queues
    struct list_head queue[140]; // Per-priority-level queues
};
```

When all processes in the active array have exhausted their time slices, the active and expired arrays are swapped — O(1) operation.

**Problems**: Interactive heuristics were complex and sometimes inaccurate.

#### Completely Fair Scheduler (CFS) — Linux 2.6.23+

The CFS, designed by Ingo Molnár, aims to give each process a **fair share** of CPU time. It models the CPU as a perfectly fair multitasking processor.

**Key concepts**:

1. **Virtual runtime (vruntime)**: A per-process value representing how much time the process has run, weighted by priority. CFS always runs the process with the smallest vruntime.

2. **Red-black tree**: Processes are stored in a red-black tree keyed by vruntime. The leftmost node has the smallest vruntime.

```
Red-black tree (keyed by vruntime):
       [vruntime=15]
      /            \
  [v=10]          [v=20]
  /    \          /    \
[v=5] [v=12]   [v=18] [v=25]
↑
Leftmost = next to run
```

3. **Target latency**: The time interval in which every runnable task should get at least one chance to run. Typically 20ms.

4. **Minimum granularity**: The smallest time slice a task can receive (to avoid excessive context switching). Typically 1ms.

5. **Nice value**: The weight (priority) of a process. Lower nice value = higher weight = more CPU time.

```c
// Simplified CFS scheduling tick (very abridged)
void scheduler_tick(void) {
    struct task_struct *curr = current;
    struct sched_entity *se = &curr->se;

    // Update current task's vruntime
    se->vruntime += delta_exec * (NICE_0_LOAD / se->load.weight);

    // If vruntime exceeds the leftmost node's vruntime,
    // mark current as needing rescheduling
    if (se->vruntime > leftmost_se->vruntime) {
        set_tsk_need_resched(curr);
    }
}
```

### Memory Management

#### Buddy Allocator

The **buddy allocator** manages physical page allocation. It maintains lists of free blocks that are powers of 2 pages (order 0 = 1 page, order 1 = 2 pages, order 2 = 4 pages, ..., order 10 = 1024 pages).

```
Free area lists:
order 0: [page 4] [page 17] [page 93]
order 1: [pages 8-9] [pages 56-57]
order 2: [pages 12-15]
order 3: (empty)
order 4: [pages 64-79]

Allocation: request 3 pages → 4 pages (next power of 2) → order 2
  - If order 2 list is empty, split order 3, give half back
```

When a block is freed, the allocator checks if its **buddy** (the adjacent block of the same size) is also free. If so, they are merged back into the larger block.

#### SLAB Allocator

The **SLAB allocator** manages kernel objects (task_struct, inode, mm_struct, etc.). It caches commonly used objects to avoid expensive allocation and initialization.

```
SLAB Cache for task_struct:
┌──────────────────────────────────────┐
│ SLAB 1 (full)                         │
│ [task][task][task][task][task][task]   │
├──────────────────────────────────────┤
│ SLAB 2 (partial)                      │
│ [task][task][task][  free  ][  free  ]│
├──────────────────────────────────────┤
│ SLAB 3 (empty)                        │
│ [  free  ][  free  ][  free  ][  free]│
└──────────────────────────────────────┘
```

- **kmem_cache_create()**: Create a slab cache for a specific object type
- **kmem_cache_alloc()**: Allocate an object (from partial or free slab)
- **kmem_cache_free()**: Return an object to its slab cache

Linux also provides `kmalloc()` (for physically contiguous allocations) and `vmalloc()` (for virtually contiguous but physically non-contiguous allocations).

#### Kernel Same-Page Merging (KSM)

KSM scans memory and merges identical pages (common in virtual machines running the same OS). Merged pages are marked copy-on-write.

### Virtual File System (VFS)

The VFS is a kernel abstraction that supports multiple file systems through a common interface.

#### VFS Objects

| Object | Description | Key Operations |
|--------|-------------|----------------|
| `super_block` | Represents a mounted file system | `alloc_inode`, `destroy_inode`, `sync_fs` |
| `inode` | Represents a file or directory (metadata) | `lookup`, `create`, `link`, `unlink` |
| `dentry` | Represents a directory entry (path component) | `d_compare`, `d_release` |
| `file` | Represents an open file (process view) | `read`, `write`, `llseek`, `mmap` |

```
struct file {
    struct file_operations *f_op;  // Operations specific to this file
    struct dentry *f_dentry;       // Directory entry
    struct vfsmount *f_vfsmnt;     // Mount point
    loff_t f_pos;                  // Current file position
    fmode_t f_mode;                // Access mode (read/write)
    int f_flags;                   // File flags (O_SYNC, O_NONBLOCK, etc.)
};

struct file_operations {
    ssize_t (*read)(struct file *, char __user *, size_t, loff_t *);
    ssize_t (*write)(struct file *, const char __user *, size_t, loff_t *);
    int (*mmap)(struct file *, struct vm_area_struct *);
    int (*open)(struct inode *, struct file *);
    int (*release)(struct inode *, struct file *);
    // ... many more
};
```

The VFS **path walk** resolves a path like `/home/user/docs/file.txt`:

1. Start at the root dentry (`/`)
2. Look up `home` in the root directory's dentry cache
3. Follow the dentry to its inode
4. Look up `user` in `home`'s inode
5. Continue until the final component `file.txt` is resolved

### The /proc Filesystem

`/proc` is a virtual filesystem that exposes kernel data structures as files and directories. Reading a /proc file triggers kernel code that generates the output dynamically.

```bash
$ cat /proc/cpuinfo
processor   : 0
vendor_id   : GenuineIntel
cpu family  : 6
model       : 158
model name  : Intel(R) Core(TM) i7-8700K CPU @ 3.70GHz
stepping    : 10
cpu MHz     : 3696.000
cache size  : 12288 KB
...

$ cat /proc/meminfo
MemTotal:       16266192 kB
MemFree:         3845680 kB
Buffers:          491284 kB
Cached:          8031932 kB
...

$ cat /proc/$$/status   # Info about the current shell process
Name:   bash
Pid:    1234
PPid:   567
VmSize: 12345 kB
VmRSS:  3456 kB
Threads: 1
...

$ cat /proc/$$/maps     # Memory mappings of the current process
00400000-004d8000 r-xp 00000000 08:01 1234567    /bin/bash
006d7000-006d8000 r--p 000d7000 08:01 1234567    /bin/bash
006d8000-006dc000 rw-p 000d8000 08:01 1234567    /bin/bash
...
7ffd8b400000-7ffd8b422000 rw-p 00000000 00:00 0  [stack]
7ffd8b439000-7ffd8b43c000 r--p 00000000 00:00 0  [vvar]
7ffd8b43c000-7ffd8b43e000 r-xp 00000000 00:00 0  [vdso]
```

### Loadable Kernel Modules

Linux supports loading and unloading code at runtime via **Loadable Kernel Modules** (LKMs).

```c
// hello.c — A minimal kernel module
#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/init.h>

static int __init hello_init(void) {
    printk(KERN_INFO "Hello, kernel! Module loaded.\n");
    return 0;
}

static void __exit hello_exit(void) {
    printk(KERN_INFO "Goodbye, kernel! Module unloaded.\n");
}

module_init(hello_init);
module_exit(hello_exit);

MODULE_LICENSE("GPL");
MODULE_AUTHOR("OS Student");
MODULE_DESCRIPTION("A simple example module");
```

```bash
# Compile and use the module
$ make  # Uses kernel build system
$ sudo insmod hello.ko     # Load module
$ sudo rmmod hello         # Unload module
$ dmesg | tail -2          # See the messages
[ 1234.567890] Hello, kernel! Module loaded.
[ 1235.678901] Goodbye, kernel! Module unloaded.
```

## Examples

### Example 1: Reading Process Information from /proc

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    FILE *fp = fopen("/proc/self/status", "r");
    if (!fp) {
        perror("fopen");
        return 1;
    }

    char line[256];
    while (fgets(line, sizeof(line), fp)) {
        // Print only selected fields
        if (strncmp(line, "Name:", 5) == 0 ||
            strncmp(line, "Pid:", 4) == 0 ||
            strncmp(line, "VmSize:", 7) == 0 ||
            strncmp(line, "VmRSS:", 6) == 0 ||
            strncmp(line, "Threads:", 8) == 0) {
            printf("%s", line);
        }
    }

    fclose(fp);
    return 0;
}
```

### Example 2: Using strace to Trace fork()

```bash
$ strace -e trace=clone,fork,vfork sleep 1
execve("/bin/sleep", ["sleep", "1"], 0x7fff...) = 0
... (much output from dynamic linker)
clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=...) = 12345
```

## Summary

- Linux `task_struct` is a large structure containing all process state (∼2 KB each)
- `clone()` system call with different flags creates processes or threads
- CFS uses red-black trees keyed by vruntime for fair CPU allocation
- Buddy allocator manages physical pages in power-of-2 groups
- SLAB allocator caches frequently used kernel objects
- VFS provides a uniform interface for multiple file system types via inode, dentry, file, and super_block objects
- `/proc` exposes kernel data as virtual files for user-space access
- Loadable kernel modules can extend the kernel at runtime

## Exercises

### Basic

1. What fields does `task_struct` contain? Why is it so large?
2. What is the difference between `fork()` and `clone()`? What flags does `pthread_create()` use?
3. How does the Completely Fair Scheduler ensure fairness among processes?

### Intermediate

4. Write a program that reads `/proc/self/status` and `/proc/self/maps`. Explain each field and each memory region shown in the maps file.
5. Read `/proc/sched_debug` (or use `cat /proc/sched_debug | head -50`). Identify the CFS runqueue, vruntime values, and scheduling entities.
6. Compile and load the example kernel module. Add code to create a `/proc/hello` file that returns "Hello from kernel!" when read. Test it.

### Advanced

7. Write a kernel module that creates a `/proc/my_device` file. Writing to it should store a string; reading it should return the stored string (like a tiny character device).
8. Analyze the CFS by reading `kernel/sched/fair.c` in the Linux source. Explain how `pick_next_task_fair()` selects the next task from the red-black tree. What is the time complexity?
9. Write a program that uses `perf` to measure the cost of a system call: `perf stat -e cycles,instructions,cache-misses ./your_program`. Then instrument the same program to compare the overhead of `read()` from a regular file vs from `/proc/self/status`.
