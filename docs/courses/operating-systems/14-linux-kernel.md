# Chapter 14 — The Linux Kernel

## Learning Objectives

1. Identify the major subsystems of the Linux kernel.
2. Describe the `task_struct` and its role in process management.
3. Explain the buddy allocator and the slab allocator.
4. Understand the Virtual File System (VFS) abstraction.
5. Explore the `/proc` filesystem and kernel module infrastructure.

## 14.1 Linux Kernel Overview

The Linux kernel is a monolithic, modular, POSIX-compatible kernel that supports a broad range of hardware architectures. Its source tree is organised into roughly 30 major subsystems:

- **sched/**: Process scheduling (CFS, real-time).
- **kernel/**: Core kernel (process management, signals, timers).
- **mm/**: Memory management (page allocator, VM, slab).
- **fs/**: Filesystems (VFS layer and individual filesystems).
- **net/**: Networking stack (TCP/IP, sockets, netfilter).
- **drivers/**: Device drivers (largest subsystem by line count).
- **arch/**: Architecture-specific code (x86, ARM, RISC-V).
- **block/**: Block I/O layer (I/O schedulers, bio layer).
- **ipc/**: Inter-process communication (pipes, SysV IPC, mqueue).
- **security/**: Security frameworks (SELinux, AppArmor, capabilities).

## 14.2 Process Management

### 14.2.1 task_struct

Each process and thread in Linux is represented by a `task_struct`, defined in `include/linux/sched.h`. It is the largest and most complex data structure in the kernel (approximately 2 KB in size on x86-64).

Key fields:

```c
struct task_struct {
    unsigned int             __state;          // TASK_RUNNING, TASK_INTERRUPTIBLE, etc.
    struct list_head         tasks;            // global process list
    struct mm_struct         *mm;              // memory descriptor
    struct fs_struct         *fs;              // filesystem info (root, pwd)
    struct files_struct      *files;           // open file descriptors
    const struct cred        *cred;            // credentials (UID, GID)
    struct task_struct       *parent;          // parent process
    struct list_head         children;         // list of children
    struct sched_entity      se;               // scheduler entity (CFS)
    pid_t                    pid;              // process ID
    char                     comm[TASK_COMM_LEN]; // executable name
    unsigned int             policy;           // scheduling policy
    cpumask_t                cpus_allowed;     // CPU affinity mask
    // ... hundreds more fields
};
```

The `current` macro returns a pointer to the current task's `task_struct`, typically by referencing a per-CPU variable or a dedicated register (`sp_el0` on ARM64).

### 14.2.2 Process Creation

Process creation on Linux uses the `clone()` system call, which provides flags to control resource sharing between parent and child:

```c
clone(CLONE_VM | CLONE_FS | CLONE_FILES | CLONE_SIGHAND, 0);
// Creates a thread (shares memory, fs, files, signal handlers)

clone(0, 0);
// Creates a child process (shares nothing)
```

The `fork()` and `vfork()` libc wrappers call `clone()` with appropriate flags.

### 14.2.3 Wait Queues

Blocked processes are placed on **wait queues**, linked lists managed by the scheduler:

```c
DECLARE_WAIT_QUEUE_HEAD(wq);

// In a read() implementation:
wait_event_interruptible(wq, buffer_has_data());
// Process sleeps here until condition is true

// In an interrupt handler:
wake_up_interruptible(&wq);
// Wakes one or all processes waiting on wq
```

## 14.3 Memory Management

### 14.3.1 Buddy Allocator

The physical page allocator uses a **buddy system** to manage free pages. Memory is partitioned into blocks of size 2^k pages, where k ranges from 0 (single page, 4 KB) to MAX_ORDER − 1 (typically 10 = 4 MB on x86-64).

When a request for 2^k pages arrives:

1. Search the free list for a block of size 2^k.
2. If no block of that size exists, split a larger block (2^{k+1}) into two buddies of size 2^k.
3. Allocate one buddy; add the other to the 2^k free list.
4. When blocks are freed, check if the buddy is also free; if so, merge them back into the larger block.

```c
struct page *alloc_pages(gfp_t gfp_mask, unsigned int order);
// Returns the head page of a 2^order-page block

void free_pages(struct page *page, unsigned int order);
```

### 14.3.2 Slab Allocator

The slab allocator provides caching for frequently allocated kernel objects (task_struct, inode, dentry). It avoids the fragmentation and overhead of allocating small objects from the buddy allocator.

- **Cache**: A pool of objects of a specific type (e.g., `kmalloc-64`, `task_struct_cache`).
- **Slab**: One or more contiguous pages divided into equal-sized objects.
- **Object**: An instance of the type being cached.

```c
struct kmem_cache *cache = kmem_cache_create("my_obj", sizeof(struct my_obj), 0, 0, NULL);
struct my_obj *obj = kmem_cache_alloc(cache, GFP_KERNEL);
// use obj
kmem_cache_free(cache, obj);
```

The slab allocator tracks which objects are free, partially used, and full, and returns freed objects to the partial list without returning pages to the buddy system. This reduces allocation latency.

Linux 2.6.22 replaced the original slab allocator with **SLUB** as the default. SLUB simplifies the per-CPU object management and reduces metadata overhead. A **SLOB** allocator is available for tiny embedded systems.

## 14.4 Virtual File System (VFS)

The VFS is an abstraction layer that provides a common interface for all filesystem implementations. It defines four primary object types:

| Object | Description | Key operations |
|--------|-------------|----------------|
| `super_block` | Represents a mounted filesystem | `alloc_inode`, `sync_fs` |
| `inode` | Represents a file or directory | `lookup`, `create`, `unlink` |
| `dentry` | Directory entry (name-to-inode mapping) | `d_compare`, `d_release` |
| `file` | An open file descriptor | `read`, `write`, `mmap` |

Each filesystem registers a set of operations:

```c
static const struct super_operations ext4_super_ops = {
    .alloc_inode    = ext4_alloc_inode,
    .destroy_inode  = ext4_destroy_inode,
    .write_inode    = ext4_write_inode,
    .sync_fs        = ext4_sync_fs,
};
```

When `open("/home/user/doc.txt", O_RDONLY)` is called:

1. VFS traverses the dentry cache from `/` to `home` to `user` to `doc.txt`.
2. If the dentry is not cached, VFS invokes the ext4 `lookup` operation to find the inode.
3. VFS creates a `file` object with a pointer to the dentry/inode and the ext4 `file_operations`.
4. Returns a file descriptor.

## 14.5 /proc Filesystem

The `/proc` filesystem is a virtual filesystem that exposes kernel data structures as files. It is mounted at boot and provides process-specific and system-wide information.

```
/proc/[pid]/           — Process-specific directory
  /cmdline             — Command line arguments
  /status              — Process state, memory usage
  /fd/                 — Open file descriptors
  /maps                — Memory-mapped regions
  /mem                 — Process memory (accessible via ptrace)
/proc/cpuinfo          — CPU type, features, frequency
/proc/meminfo          — Memory usage statistics
/proc/version          — Kernel version string
/proc/sys/             — Tunable kernel parameters (sysctl)
```

Reading `/proc` files triggers kernel callbacks that format the requested data dynamically:

```c
static int my_proc_show(struct seq_file *m, void *v) {
    seq_printf(m, "Custom data: %d\n", my_data);
    return 0;
}
```

## 14.6 Kernel Modules

Loadable Kernel Modules (LKMs) allow code to be added to or removed from the kernel at runtime without recompilation or reboot. Modules implement device drivers, filesystems, system calls, and network protocols.

```c
#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/init.h>

static int __init mymodule_init(void) {
    printk(KERN_INFO "My module loaded\n");
    return 0;
}

static void __exit mymodule_exit(void) {
    printk(KERN_INFO "My module unloaded\n");
}

module_init(mymodule_init);
module_exit(mymodule_exit);

MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("Example kernel module");
```

Modules are managed with `insmod`, `rmmod`, and `modprobe`. The kernel tracks module dependencies and reference counts to prevent unloading a module while it is in use.

## Summary

The Linux kernel is a large, mature monolithic kernel with modular extensions. Process management centres on `task_struct` and `clone()`. Memory management combines the buddy allocator for pages and the slab allocator for small objects. The VFS provides a uniform filesystem interface. /proc exposes kernel state to user space. Kernel modules enable dynamic extensibility without rebooting.

## Exercises

### Review Questions

1. Name five major subsystems in the Linux kernel source tree.
2. What is the purpose of the buddy allocator? The slab allocator?
3. Describe the four primary VFS objects and their roles.
4. How does reading from `/proc/meminfo` differ from reading a regular file?
5. What is the purpose of `module_init()` and `module_exit()` in a kernel module?

### Application Problems

1. Write a kernel module that creates a `/proc/hello` entry. Reading the entry should return "Hello, kernel!". Test it by compiling, loading with `insmod`, and reading the file with `cat`.
2. Explain why the slab allocator is more efficient than the buddy allocator for allocating `task_struct` objects. Quantify the waste if `task_struct` (2 KB) were allocated directly from a buddy allocator with 4 KB minimum block size on a system with 10,000 processes.
3. Trace the kernel code path from a user-space `write(fd, buf, len)` system call through VFS to an ext4 filesystem. Identify where each VFS object (super_block, inode, dentry, file) is involved.

### Challenge Problem

1. Implement a simple character device driver (not just /proc) that creates `/dev/mydriver`. The driver should support `open`, `release`, `read`, `write`, and `ioctl`. The `ioctl` should support two commands: `MYDRV_RESET` (clears an internal buffer) and `MYDRV_LEN` (returns the number of bytes in the buffer). Demonstrate the driver with a user-space test program that writes 100 bytes, reads them back, and queries the length via `ioctl`.
