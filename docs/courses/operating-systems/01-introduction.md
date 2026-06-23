# Chapter 1: Introduction to Operating Systems

[**Next: Processes**](./02-processes.md) >>

---

## Learning Objectives

- Define an operating system and explain its role as a resource manager
- Trace the historical evolution from batch to modern OS
- Distinguish among batch, time-sharing, distributed, real-time, and embedded OS types
- Describe the services an OS provides to users and programs
- Explain system calls and differentiate standard APIs from actual system calls
- Compare OS structures: monolithic, microkernel, layered, modular, hybrid

## Why Operating Systems Matter

Imagine a 50-story office building. Without a building manager, chaos erupts: people fight over elevators, rooms are double-booked, the HVAC runs randomly, and unauthorized people wander into restricted areas. The **building manager** allocates office space, schedules cleaning, controls access, mediates disputes, and ensures utilities run efficiently.

An **operating system** is the building manager of a computer. It:

- **Allocates resources** (CPU time, memory, disk space) like a manager assigns offices and meeting rooms
- **Schedules tasks** like a manager coordinates elevator maintenance, cleaning shifts, and tenant move-ins
- **Controls access** like a manager issues keycards and restricts entry to authorized floors
- **Handles conflicts** like a manager resolves two tenants requesting the same conference room
- **Provides services** (file storage, printing, networking) like a manager provides mail service, parking, and janitorial services

Without an OS, every programmer would need to write their own device drivers, memory managers, and schedulers â€” the equivalent of every office tenant installing their own plumbing and electrical wiring. The OS is what makes general-purpose computing practical.

## Chapter at a Glance

| Topic | Key Points |
|-------|------------|
| **What is an OS?** | Resource allocator, control program, intermediary between hardware and users |
| **OS History** | Batch â†’ Multiprogramming â†’ Time-sharing â†’ Personal â†’ Modern/Cloud |
| **OS Types** | Batch, time-sharing, distributed, real-time (hard/soft), embedded |
| **System Calls** | Interface for user programs to request kernel services; switch from user to kernel mode |
| **OS Structures** | Monolithic (Linux), microkernel (MINIX), layered (THE), modular/hybrid (Windows NT) |

## Chapter Roadmap

<div class="mermaid">
flowchart LR
    A[OS Basics] --> B[OS History & Types]
    B --> C[System Calls]
    C --> D[OS Structures]
    D --> E[Kernel Types]
    E --> F[Real-World Applications]
    F --> G[Summary & Exercises]
</div>

## Theory

![OS Components](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/01-introduction.png)

### What is an Operating System?

**Analogy:** The OS is like a **hotel manager**. The manager doesn't cook food (that's the restaurant app), clean rooms (that's the cleaning staff subsystem), or fix plumbing (that's the device driver), but the manager coordinates everything: assigns rooms (memory), handles guest requests (system calls), ensures security (keycard access), and resolves conflicts (two guests wanting the same conference room).

#### Definition

An **operating system** is system software that acts as an intermediary between computer hardware and user programs. It manages hardware resources (CPU, memory, I/O devices), provides common services (file management, networking, security), and enables multiple applications to run concurrently without interfering with each other.

#### Core Responsibilities

1. **Resource Allocation** â€” Decide which process gets the CPU, how much memory each process can use, and how disk and I/O devices are shared
2. **Control Program** â€” Prevent user programs from making errors or using the computer improperly
3. **Kernel** â€” The core component that remains in memory and provides the most essential services (scheduling, memory management, IPC)
4. **System Interface** â€” Provide APIs (system calls) that applications use to request services without needing to know hardware details

#### Pseudocode: OS Bootstrap and Initialization

```
START
    LOAD bootloader from disk into memory
    IF bootloader is corrupted THEN
        DISPLAY "Boot failure"
        HALT
    END IF
    LOAD OS kernel into memory
    INITIALIZE interrupt vector table
    INITIALIZE process table (empty)
    INITIALIZE memory management structures
    INITIALIZE device drivers for all detected hardware
    CREATE idle process
    START scheduler loop
        WHILE system is running DO
            SELECT next process to run
            DISPATCH process to CPU
            HANDLE interrupts and system calls as they occur
        END WHILE
    END
END
```

#### Step-by-Step: OS Boot Sequence

| Step | Component | Action | State Change |
|------|-----------|--------|--------------|
| 1 | BIOS/UEFI | Power-on self-test (POST) | Hardware initialized |
| 2 | BIOS/UEFI | Load bootloader from disk | Bootloader in memory |
| 3 | Bootloader | Locate and load kernel image | Kernel code loaded |
| 4 | Kernel | Set up interrupt descriptors | Interrupts enabled |
| 5 | Kernel | Initialize page tables | Virtual memory active |
| 6 | Kernel | Create process table, schedule init/PID 1 | First user process ready |
| 7 | init/PID 1 | Start system daemons and login manager | System ready for users |

#### C++ Implementation: Minimal Boot Sequence Simulation

```cpp
#include <iostream>
#include <vector>
#include <string>

class OSKernel {
private:
    bool bootloaderOk;
    bool interruptTableReady;
    bool memoryInitDone;
    std::vector<std::string> processes;

public:
    OSKernel() : bootloaderOk(false), interruptTableReady(false), memoryInitDone(false) {}

    bool loadBootloader() {
        std::cout << "[BOOT] Loading bootloader from disk...\n";
        bootloaderOk = true;
        return bootloaderOk;
    }

    bool initInterruptTable() {
        std::cout << "[KERNEL] Initializing interrupt vector table...\n";
        interruptTableReady = true;
        return interruptTableReady;
    }

    bool initMemoryManagement() {
        std::cout << "[KERNEL] Setting up page tables...\n";
        memoryInitDone = true;
        return memoryInitDone;
    }

    void createProcess(const std::string& name) {
        processes.push_back(name);
        std::cout << "[KERNEL] Process created: " << name << "\n";
    }

    void boot() {
        if (!loadBootloader()) {
            std::cerr << "[FATAL] Bootloader corrupted\n";
            return;
        }
        if (!initInterruptTable()) {
            std::cerr << "[FATAL] Cannot set up interrupts\n";
            return;
        }
        if (!initMemoryManagement()) {
            std::cerr << "[FATAL] Memory init failed\n";
            return;
        }
        createProcess("idle");
        createProcess("init (PID 1)");
        std::cout << "[KERNEL] System ready. Entering scheduler loop.\n";
    }
};

int main() {
    OSKernel kernel;
    kernel.boot();
    return 0;
}
```


#### Python Implementation: OS Initialization Simulation

```python
import time

class OSKernel:
    def __init__(self):
        self.bootloader_ok = False
        self.interrupt_table_ready = False
        self.memory_init_done = False
        self.processes = []

    def load_bootloader(self):
        print("[BOOT] Loading bootloader from disk...")
        time.sleep(0.1)
        self.bootloader_ok = True
        return True

    def init_interrupt_table(self):
        print("[KERNEL] Initializing interrupt vector table...")
        time.sleep(0.1)
        self.interrupt_table_ready = True
        return True

    def init_memory_management(self):
        print("[KERNEL] Setting up page tables...")
        time.sleep(0.1)
        self.memory_init_done = True
        return True

    def create_process(self, name: str):
        self.processes.append(name)
        print(f"[KERNEL] Process created: {name}")

    def boot(self):
        if not self.load_bootloader():
            print("[FATAL] Bootloader corrupted")
            return
        if not self.init_interrupt_table():
            print("[FATAL] Cannot set up interrupts")
            return
        if not self.init_memory_management():
            print("[FATAL] Memory init failed")
            return
        self.create_process("idle")
        self.create_process("init (PID 1)")
        print("[KERNEL] System ready. Entering scheduler loop.")

if __name__ == "__main__":
    kernel = OSKernel()
    kernel.boot()
```

#### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Notes |
|-----------|----------------|-----------------|-------|
| Bootloader load | O(1) | O(kernel_size) | Fixed-size block read from disk |
| Interrupt table init | O(n) | O(n) | n = number of interrupt vectors (256 on x86) |
| Page table init | O(n) | O(n) | n = number of page table entries |
| Process creation | O(1) amortized | O(1) per process | Linked list insertion |

#### Advantages and Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| Abstracts hardware complexity from programmers | Adds overhead compared to bare-metal execution |
| Enables multiprogramming and multitasking | Kernel bugs crash the entire system |
| Provides security and isolation between processes | OS itself consumes memory and CPU cycles |
| Standardized APIs for portability | Legacy OS code can contain security vulnerabilities |
| Manages resource contention automatically | Poorly designed OS can become a bottleneck |

#### Edge Cases in OS Initialization

1. **Bootloader corruption** â€” If the bootloader's checksum fails, the system cannot load the kernel. Solution: redundant boot sectors or recovery partition.
2. **Insufficient memory during kernel load** â€” If the kernel image exceeds available memory on embedded devices, the system panics. Solution: compressed kernel images (zImage, bzImage).
3. **Device initialization failure** â€” A faulty driver during init can hang the boot process. Solution: fallback to safe mode or minimal driver set.
4. **Interrupt vector conflict** â€” Two devices claiming the same IRQ (legacy systems). Solution: shared IRQ handling or IOAPIC re-routing.

---

### Operating System Functions

**Analogy:** An OS is like a **hospital administration**. The administration doesn't perform surgery (that's the doctor), but it manages bed allocation (memory), schedules operating rooms (CPU scheduling), maintains patient records (file system), controls visitor access (security), and coordinates departments (IPC).

#### Major OS Functions

1. **Process Management**
   - Create and terminate user and system processes
   - Schedule processes on available CPUs
   - Synchronize and communicate between processes
   - Handle deadlocks when processes compete for resources

2. **Memory Management**
   - Track which parts of memory are in use and by whom
   - Allocate and deallocate memory to processes
   - Handle virtual memory through paging and segmentation
   - Implement protection by isolating process address spaces

3. **File System Management**
   - Organize data into files and directories
   - Map files to physical storage blocks
   - Control access permissions (read, write, execute)
   - Provide caching for performance

4. **I/O System Management**
   - Buffer data between devices and processes
   - Provide a uniform interface through device drivers
   - Handle device interrupts and DMA transfers

5. **Protection and Security**
   - Authenticate users (passwords, biometrics, tokens)
   - Enforce access control policies
   - Isolate processes from each other
   - Defend against malicious programs

6. **Networking**
   - Implement TCP/IP protocol stack
   - Provide socket interfaces for network communication
   - Route data between network interfaces


#### Pseudocode: Simple Process Scheduler

```
PROCEDURE schedule()
    INPUT: ready_queue (list of processes)
    OUTPUT: selected process to dispatch

    IF ready_queue is empty THEN
        RETURN idle_process
    END IF

    // Simple round-robin: pick the first in queue
    selected = ready_queue.dequeue()
    selected.state = RUNNING
    LOAD CPU registers from selected.context
    RETURN selected
END PROCEDURE

PROCEDURE create_process(program_path)
    INPUT: path to executable
    OUTPUT: new process ID or error

    new_pid = allocate_pid()
    IF new_pid == -1 THEN
        RETURN "Error: No available PIDs"
    END IF

    new_pcb = allocate_memory_for_PCB()
    IF new_pcb == NULL THEN
        RETURN "Error: Out of kernel memory"
    END IF

    new_pcb.pid = new_pid
    new_pcb.state = NEW
    new_pcb.program_counter = load_executable(program_path)
    new_pcb.memory_limit = calculate_memory_need(program_path)

    add_to_process_table(new_pcb)
    add_to_ready_queue(new_pcb)

    RETURN new_pid
END PROCEDURE
```

#### C++ Implementation: Process Control Block and Scheduler

```cpp
#include <iostream>
#include <queue>
#include <string>
#include <vector>

enum ProcessState { NEW, READY, RUNNING, WAITING, TERMINATED };

struct PCB {
    int pid;
    std::string name;
    ProcessState state;
    int programCounter;
    int memoryBase;
    int memoryLimit;
    int cpuBurstTime;
};

class Scheduler {
private:
    std::queue<PCB*> readyQueue;
    std::vector<PCB> processTable;
    int nextPid;

public:
    Scheduler() : nextPid(1) {}

    int createProcess(const std::string& name, int memoryNeeded) {
        if (nextPid > 32768) {
            std::cerr << "Error: PID exhaustion\n";
            return -1;
        }
        PCB proc;
        proc.pid = nextPid++;
        proc.name = name;
        proc.state = NEW;
        proc.programCounter = 0;
        proc.memoryBase = 0;
        proc.memoryLimit = memoryNeeded;
        proc.cpuBurstTime = 0;

        processTable.push_back(proc);
        proc.state = READY;
        readyQueue.push(&processTable.back());

        std::cout << "Process created: " << name << " (PID: " << proc.pid << ")\n";
        return proc.pid;
    }

    PCB* schedule() {
        if (readyQueue.empty()) {
            std::cout << "No processes to schedule\n";
            return nullptr;
        }
        PCB* selected = readyQueue.front();
        readyQueue.pop();
        selected->state = RUNNING;
        std::cout << "Scheduled: " << selected->name << " (PID: " << selected->pid << ")\n";
        return selected;
    }

    void terminateProcess(int pid) {
        for (auto& p : processTable) {
            if (p.pid == pid) {
                p.state = TERMINATED;
                std::cout << "Process terminated: " << p.name << " (PID: " << pid << ")\n";
                return;
            }
        }
        std::cout << "Error: PID " << pid << " not found\n";
    }
};

int main() {
    Scheduler sched;
    sched.createProcess("Firefox", 256);
    sched.createProcess("Terminal", 64);
    sched.schedule();
    sched.schedule();
    sched.schedule(); // queue empty case
    return 0;
}
```

#### Python Implementation: Process Management

```python
from collections import deque
import os
from enum import Enum

class ProcessState(Enum):
    NEW = 1
    READY = 2
    RUNNING = 3
    WAITING = 4
    TERMINATED = 5

class PCB:
    def __init__(self, pid: int, name: str, memory_needed: int):
        self.pid = pid
        self.name = name
        self.state = ProcessState.NEW
        self.program_counter = 0
        self.memory_limit = memory_needed
        self.cpu_burst_time = 0

    def __repr__(self):
        return f"PCB(PID={self.pid}, name={self.name}, state={self.state.name})"

class Scheduler:
    def __init__(self):
        self.ready_queue = deque()
        self.process_table = {}
        self.next_pid = 1

    def create_process(self, name: str, memory_needed: int) -> int:
        if self.next_pid > 32768:
            print("Error: PID exhaustion")
            return -1
        pid = self.next_pid
        self.next_pid += 1
        proc = PCB(pid, name, memory_needed)
        proc.state = ProcessState.READY
        self.process_table[pid] = proc
        self.ready_queue.append(pid)
        print(f"Process created: {name} (PID: {pid})")
        return pid

    def schedule(self):
        if not self.ready_queue:
            print("No processes to schedule")
            return None
        pid = self.ready_queue.popleft()
        self.process_table[pid].state = ProcessState.RUNNING
        print(f"Scheduled: {self.process_table[pid]}")

    def terminate_process(self, pid: int):
        if pid in self.process_table:
            self.process_table[pid].state = ProcessState.TERMINATED
            print(f"Process terminated: {self.process_table[pid].name} (PID: {pid})")
        else:
            print(f"Error: PID {pid} not found")

if __name__ == "__main__":
    sched = Scheduler()
    sched.create_process("Firefox", 256)
    sched.create_process("Terminal", 64)
    sched.schedule()
    sched.schedule()
    sched.schedule()
```


#### Complexity Analysis

| Function | Time Complexity | Space Complexity | Notes |
|----------|----------------|-----------------|-------|
| Process creation | O(1) | O(n) total processes | PCB allocation is constant time |
| Context switch | O(1) | O(1) | Save/restore CPU registers |
| Scheduler decision | O(1) (FCFS) to O(n) (priority) | O(1) | Depends on algorithm |
| Memory allocation | O(1) to O(n) | O(n) | Buddy system: O(1), first-fit: O(n) |
| File read | O(n) I/O | O(1) buffer | n = number of bytes |

#### Advantages and Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| Abstract hardware so apps are portable | OS services add CPU and memory overhead |
| Multiprogramming maximizes hardware utilization | Context switching consumes CPU cycles |
| Security model prevents unauthorized access | Bugs in OS compromise entire system |
| Standard APIs simplify application development | Some abstractions hide useful hardware features |
| Automatic resource management reduces programmer burden | Resource management policies may not fit all workloads |

#### Edge Cases in OS Functions

1. **fork bomb** â€” A process recursively creates copies of itself, exhausting the process table. Solution: per-user process limits (`ulimit -u`), PID rationing.
2. **Memory fragmentation** â€” After many allocations/deallocations, free memory is split into small non-contiguous chunks. Solution: compaction (copying collector) or virtual memory with paging.
3. **Deadlock** â€” Two processes each hold a resource the other needs, neither progresses. Solution: deadlock detection and recovery, or prevention via resource ordering.
4. **Priority inversion** â€” A low-priority process holds a lock needed by a high-priority process, while a medium-priority process preempts the low-priority one. Solution: priority inheritance protocol.
5. **Thrashing** â€” The system spends more time swapping pages than executing processes. Solution: adjust degree of multiprogramming, use working set model.

---

### History of Operating Systems

#### Phase 1: Batch Systems (1940s-1950s)

Early computers (ENIAC, UNIVAC) had no OS. Programmers interacted directly with the hardware using switches and paper tape. The first OS appeared in the 1950s with the GM-NAA I/O system for the IBM 701.

Batch systems collected jobs (programs + data) into batches. A resident monitor loaded and executed them sequentially. When one job finished, the monitor loaded the next. This eliminated significant setup time but offered no interactivity.

#### Phase 2: Multiprogramming (1960s)

Multiprogramming improved CPU utilization by keeping multiple jobs in memory simultaneously. While one job waited for I/O, the CPU switched to another. This required interrupt hardware and memory protection.

IBM's OS/360 (1964) was a landmark multiprogramming system â€” and also famously one of the most complex software projects ever attempted (Fred Brooks wrote _The Mythical Man-Month_ about it).

#### Phase 3: Time-Sharing (1970s)

Time-sharing extended multiprogramming to provide interactive computing. The CPU rapidly switched between users, giving each the illusion of a dedicated machine.

CTSS (MIT, 1961) and Multics (MIT/Bell Labs/GE, 1965) pioneered time-sharing. Unix (Ken Thompson and Dennis Ritchie, 1970s) evolved from Multics and became the foundation of modern OS design.

#### Phase 4: Personal Computing (1980s)

Microprocessors made personal computers viable. CP/M, MS-DOS (Microsoft, 1981), and early Mac OS (1984) brought OS to desktops. These were simpler â€” single-user, single-task â€” but introduced graphical user interfaces (GUIs) to the mainstream.

#### Phase 5: Modern Era (1990s-Present)

Linux (Linus Torvalds, 1991) brought Unix-like power to PCs as free software. Windows NT (1993) provided a true, portable OS core. Mobile OS (iOS, Android) adapted kernel designs for resource-constrained, touch-based devices. Cloud and container OS (VMware ESXi, Linux containers) abstract entire machines.

---

### Types of Operating Systems

**Analogy:** OS types are like **vehicle types**. A batch OS is a cargo ship (load once, process, unload â€” no interaction mid-voyage). A time-sharing OS is a city bus (many passengers share the ride, each gets a turn). A real-time OS is an ambulance (must reach destination within a guaranteed time). A distributed OS is a fleet of delivery trucks (coordinated to appear as one system). An embedded OS is a car's ECU (single-purpose, resource-constrained).

#### Comparison Table

| Feature | Batch OS | Time-Sharing OS | Real-Time OS | Distributed OS | Embedded OS |
|---------|----------|----------------|-------------|---------------|-------------|
| **Interaction** | None | Interactive | Event-driven | Transparent | Fixed-function |
| **Response Time** | Hours/days | ms to seconds | us to ms | Variable | ms |
| **CPU Utilization** | Very high | High | Moderate | High | Low (single-purpose) |
| **Complexity** | Low | High | Moderate | Very high | Low |
| **User Experience** | Submit-and-wait | Interactive | Deterministic | Seamless network | Invisible |
| **Examples** | IBM OS/360 | Unix, Linux, Windows | VxWorks, FreeRTOS, QNX | Amoeba, Plan 9 | Embedded Linux, TinyOS |
| **Deadline Guarantee** | No | No | Yes (hard or soft) | No | No |
| **Fault Tolerance** | Low | Moderate | High | Very high | Moderate |

#### 1. Batch OS

Jobs with similar needs are grouped into batches and executed sequentially without user interaction.

- **Analogy:** A laundromat â€” you drop off clothes, they wash everything in batches, and you pick them up later. No interaction during the cycle.
- **Advantage:** Efficient for high-volume repetitive jobs (payroll processing, bill generation).
- **Disadvantage:** Poor turnaround time, difficult to debug, starvation possible for short jobs.
- **Example:** IBM OS/360, early mainframe operating systems.

#### 2. Time-Sharing OS

The CPU time is divided into small slices (time quanta) and distributed among multiple users/applications. The rapid switching gives each user the illusion of a dedicated machine.

- **Analogy:** A professor holding office hours â€” each student gets 5 minutes, the professor rotates through all students in the queue. Each student feels they have the professor's attention.
- **Advantage:** Interactive response, fair CPU distribution, good for general-purpose computing.
- **Disadvantage:** Overhead from frequent context switches, response degrades under heavy load.
- **Example:** Unix, Linux, Windows, macOS.

#### 3. Real-Time OS (RTOS)

Guarantees that critical tasks complete within a strict time bound. Two subtypes:

- **Hard real-time:** Missing a deadline is catastrophic (aircraft flight control, medical life-support, automotive braking)
- **Soft real-time:** Missing deadlines degrades quality but does not cause system failure (video streaming, online gaming, VoIP)

- **Analogy:** An **ambulance** must reach the hospital within the "golden hour" (hard real-time). A **movie streaming buffer** should load before the scene starts; if it's late, the video stutters but no one dies (soft real-time).
- **Example:** FreeRTOS, VxWorks, QNX, RTLinux.

#### 4. Distributed OS

Manages a group of independent computers connected by a network, making them appear as a single computer to the user.

- **Analogy:** A **chain of bank branches** â€” you can deposit money at any branch and withdraw at any other branch. The network of branches appears as one bank.
- **Challenge:** Synchronization, fault tolerance, transparency, network latency.
- **Example:** Amoeba, Sprite, Plan 9, Google's Fuchsia.

#### 5. Embedded OS

Designed for devices with limited resources â€” sensors, smart appliances, IoT devices, wearables. Often runs from ROM, has minimal footprint, and serves a single purpose.

- **Analogy:** A **microwave keypad** â€” you press a button, it runs the timer and beeps. There's no need for a file system, multitasking, or user accounts.
- **Example:** Embedded Linux, Windows IoT, TinyOS, FreeRTOS.


---

### System Calls

**Analogy:** A system call is like **ordering food at a restaurant**. You (the user program) sit at the table and look at the menu (API). You tell the waiter (the standard library) what you want. The waiter goes to the kitchen (kernel) through the kitchen door (the trap instruction), where the chef (kernel service routine) prepares your order. The waiter brings it back to your table (returns to user mode). You never enter the kitchen yourself â€” that would violate the health code (security restriction).

#### What is a System Call?

A **system call** is a programmatic way for a user-space program to request a service from the OS kernel. It is the only legitimate way to transition from user mode to kernel mode.

#### System Call Categories

| Category | System Calls | Purpose |
|----------|-------------|---------|
| Process Control | `fork()`, `exec()`, `exit()`, `waitpid()` | Create, run, terminate, and synchronize processes |
| File Management | `open()`, `read()`, `write()`, `close()`, `lseek()` | Manipulate files and file descriptors |
| Device Management | `ioctl()`, `read()`, `write()` | Communicate with hardware devices |
| Information Maintenance | `getpid()`, `alarm()`, `sleep()`, `gettimeofday()` | Query/set system state and time |
| Communication | `pipe()`, `shmget()`, `msgget()`, `socket()`, `send()` | IPC and networking |

#### System Call Flow (Step-by-Step)

1. **User program calls API** â€” e.g., `printf("Hello")` invokes the C library function
2. **libc prepares the call** â€” Arguments are placed in CPU registers (or on the stack)
3. **Trap instruction executes** â€” `syscall` (x86-64) or `int 0x80` (x86) switches to kernel mode
4. **CPU saves context** â€” Program counter, stack pointer, and flags are saved to the kernel stack
5. **System call handler runs** â€” The kernel uses the syscall number to index into a dispatch table
6. **Service routine executes** â€” The specific kernel function performs the requested operation
7. **Result returned** â€” The kernel places the return value in a register (or memory)
8. **Return from trap** â€” CPU switches back to user mode, restores context, execution continues

#### Dry Run Trace: `read(fd, buf, 1024)` System Call

| Step | Mode | Component | Action | Key Data |
|------|------|-----------|--------|----------|
| 0 | User | Program | Calls `read(3, buf, 1024)` | fd=3, buf=0x7fff..., count=1024 |
| 1 | User | libc wrapper | Places args in registers: `rdi=3, rsi=buf, rdx=1024` | AX = __NR_read (0) |
| 2 | User | libc wrapper | Executes `syscall` instruction | CPU saves RIP, RSP to kernel stack |
| 3 | Kernel | CPU hardware | Switches to Ring 0, jumps to entry_syscall_64 | CR3 for kernel page tables |
| 4 | Kernel | entry_syscall_64 | Saves all registers to pt_regs on kernel stack | pt_regs struct contains structure of user state |
| 5 | Kernel | Syscall handler | Uses AX (syscall number) to look up table | sys_call_table[0] = __x64_sys_read |
| 6 | Kernel | __x64_sys_read | Extracts fd, buf, count from saved registers | Calls vfs_read(fd, buf, count) |
| 7 | Kernel | VFS layer | Locates file struct from fd table | File struct for fd=3 points to ext4 inode |
| 8 | Kernel | ext4 driver | Calculates disk block, issues I/O request | Block #84213 dispatched to disk |
| 9 | Kernel | Disk interrupt | DMA completes, data in page cache | Kernel buffer now has 1024 bytes |
| 10 | Kernel | vfs_read | Copy data from kernel buffer to user-space `buf` | `copy_to_user(buf, kernel_buf, 1024)` |
| 11 | Kernel | Return | Stores return value (1024) in RAX | RAX = 1024 |
| 12 | Hardware | CPU | Restores user registers, switches to Ring 3 | sysretq instruction executed |
| 13 | User | Program | Reads return value of `read()`, continues | buf now contains file data |

#### Pseudocode: System Call Handler

```
PROCEDURE handle_syscall(cpu_state)
    syscall_number = cpu_state.AX
    arg1 = cpu_state.DI
    arg2 = cpu_state.SI
    arg3 = cpu_state.DX

    IF syscall_number < 0 OR syscall_number >= MAX_SYSCALLS THEN
        cpu_state.AX = -1
        cpu_state.error_code = EINVAL
        RETURN TO USER MODE
    END IF

    IF NOT validate_arguments(syscall_number, arg1, arg2, arg3) THEN
        cpu_state.AX = -1
        cpu_state.error_code = EFAULT
        RETURN TO USER MODE
    END IF

    result = sys_call_table[syscall_number](arg1, arg2, arg3)
    cpu_state.AX = result
    RETURN TO USER MODE
END PROCEDURE
```

#### C++ Implementation: System Call Simulation

```cpp
#include <iostream>
#include <cstring>

using SyscallHandler = int(*)(int, int, int);

int sys_read(int fd, char* buf, int count) {
    if (fd < 0) { std::cerr << "[KERNEL] read: Invalid fd\n"; return -1; }
    if (buf == nullptr) { std::cerr << "[KERNEL] read: Bad buffer\n"; return -1; }
    const char* data = "Hello from kernel!";
    int len = std::min(count, (int)std::strlen(data));
    std::memcpy(buf, data, len);
    return len;
}

int sys_write(int fd, const char* buf, int count) {
    if (fd < 0) return -1;
    if (buf == nullptr) return -1;
    std::cout << "[KERNEL] write(" << fd << ", \"" << buf << "\", " << count << ")\n";
    return count;
}

int sys_getpid() {
    static int pid = 1001;
    return pid;
}

SyscallHandler sys_call_table[256] = {nullptr};

class SystemCallManager {
public:
    static void init() {
        sys_call_table[0] = reinterpret_cast<SyscallHandler>(sys_read);
        sys_call_table[1] = reinterpret_cast<SyscallHandler>(sys_write);
        sys_call_table[39] = reinterpret_cast<SyscallHandler>(sys_getpid);
    }

    static int dispatch(int number, int a1, int a2, int a3) {
        if (number < 0 || number >= 256 || sys_call_table[number] == nullptr) {
            std::cerr << "[KERNEL] Unknown syscall: " << number << "\n";
            return -1;
        }
        return sys_call_table[number](a1, a2, a3);
    }
};

int main() {
    SystemCallManager::init();
    char buffer[1024] = {0};
    int result = SystemCallManager::dispatch(0, 3, reinterpret_cast<int>(buffer), 1024);
    std::cout << "[USER] read returned " << result << ": \"" << buffer << "\"\n";
    int pid = SystemCallManager::dispatch(39, 0, 0, 0);
    std::cout << "[USER] PID = " << pid << "\n";
    return 0;
}
```


#### Python Implementation: System Call Dispatcher

```python
import os
from enum import IntEnum

class SyscallNum(IntEnum):
    READ = 0
    WRITE = 1
    GETPID = 39

class Kernel:
    def __init__(self):
        self.syscall_table = {
            SyscallNum.READ: self.sys_read,
            SyscallNum.WRITE: self.sys_write,
            SyscallNum.GETPID: self.sys_getpid,
        }

    def sys_read(self, fd: int, buf_addr: int, count: int) -> int:
        if fd < 0: return -1
        data = "Hello from kernel!"
        n = min(count, len(data))
        print(f"[KERNEL] read({fd}, addr={buf_addr}, count={count}) -> {n} bytes")
        return n

    def sys_write(self, fd: int, buf_addr: int, count: int) -> int:
        if fd < 0: return -1
        return count

    def sys_getpid(self) -> int:
        return os.getpid()

    def handle_syscall(self, number: int, arg1=0, arg2=0, arg3=0) -> int:
        if number not in self.syscall_table:
            print(f"[KERNEL] Unknown syscall #{number}")
            return -1
        if arg1 < 0 and number in (SyscallNum.READ, SyscallNum.WRITE):
            print(f"[KERNEL] Permission denied")
            return -1
        handler = self.syscall_table[number]
        return handler(arg1, arg2, arg3)

if __name__ == "__main__":
    kernel = Kernel()
    print("[USER] read(3, buffer, 1024)")
    result = kernel.handle_syscall(SyscallNum.READ, 3, 0x7fff, 1024)
    print(f"[USER] Got {result} bytes")
    print("[USER] getpid() ->", kernel.handle_syscall(SyscallNum.GETPID))
    print("[USER] bad syscall ->", kernel.handle_syscall(999))
```

#### API vs System Call

Most programs use an **API** rather than invoking system calls directly. The C standard library provides wrapper functions that make the system call on your behalf.

| API Function | Library | Underlying Syscall |
|-------------|---------|-------------------|
| `printf()` | `libc` | `write()` |
| `fopen()` | `libc` | `open()` |
| `malloc()` | `libc` | `brk()` or `mmap()` |
| `scanf()` | `libc` | `read()` |
| `time()` | `libc` | `gettimeofday()` |

#### Complexity Analysis

| Operation | Time Complexity | Notes |
|-----------|----------------|-------|
| Syscall entry/exit (trap) | O(1) | Hardware-microcoded, ~100-300 cycles |
| Argument validation | O(n) | n = number of arguments |
| Syscall handler dispatch | O(1) | Array index into sys_call_table |
| Data copy (copy_to_user) | O(n) | n = bytes copied |
| Full syscall (e.g., read) | O(1) to O(N) I/O | Depends on disk/network latency |

#### Advantages and Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| Protects kernel from malformed user requests | Context switch overhead (~1-5us per syscall) |
| Provides clean, stable ABI across kernel versions | Limits flexibility from user space |
| Enforces security boundary between user and kernel | Every I/O requires expensive mode switch |
| Makes system portable across hardware | Heavy syscall volume can become a bottleneck |

#### Edge Cases in System Calls

1. **Interrupted system call** â€” A syscall like `read()` is interrupted by a signal. The kernel may return `-EINTR`. Solution: manually restart the syscall with a loop: `while ((n = read(...)) == -1 && errno == EINTR);`.
2. **Failed argument validation** â€” User passes an invalid pointer. The kernel detects this during `copy_from_user()` and returns `-EFAULT`. The process receives `SIGSEGV` if it uses the result without checking.
3. **Resource exhaustion** â€” `fork()` cannot allocate a new PID or memory. Returns `-EAGAIN` or `-ENOMEM`.
4. **Syscall during signal handler** â€” A syscall in progress may return `-EINTR` if a signal handler is invoked. The programmer must restart.
5. **File descriptor exhaustion** â€” Opening too many files returns `-EMFILE` (per-process) or `-ENFILE` (system-wide). `ulimit -n` controls the per-process limit.

---

### Operating System Structures

**Analogy:** OS structures are like **building architectures**:
- **Monolithic** = A single-room warehouse â€” everything is together, fast to move around, but a fire in any area destroys everything
- **Microkernel** = A campus of small buildings â€” each function is isolated, a fire in one doesn't spread, but moving between buildings takes time
- **Layered** = A multi-story building â€” each floor depends on the floor below, clear hierarchy, but adding a new feature may require modifying multiple floors
- **Modular/Hybrid** = A modern office with pluggable wall panels â€” core structure is fixed, but rooms can be reconfigured by swapping panels


#### 1. Monolithic Kernel

The entire OS runs in kernel space as a single large program. All components (scheduler, memory manager, file system, device drivers) share the same address space.

```
+--------------------------------------------------+
|                  User Programs                    |
+--------------------------------------------------+
|              System Call Interface                |
+--------------------------------------------------+
|  Scheduler | Memory | File System | Drivers      |
|  IPC       | Net    | Security   | VFS          |
|  (ALL components in kernel space, same address   |
|   space -- function calls are direct)             |
+--------------------------------------------------+
|                  Hardware                         |
+--------------------------------------------------+
```

| Criteria | Assessment |
|----------|-----------|
| **Performance** | High -- components communicate via direct function calls |
| **Reliability** | Low -- any driver bug crashes entire kernel |
| **Security** | Low -- no isolation between subsystems |
| **Development** | Hard -- entire OS recompiled for any change |
| **Portability** | Low -- tightly coupled to hardware |
| **Example** | Linux, traditional Unix, MS-DOS |

#### 2. Microkernel

The kernel is minimized to only essential functions (IPC, basic scheduling, low-level memory management). File systems, device drivers, networking, and other services run as user-space processes.

```
+------------------------------------------+
|   File Svc | Network Svc | Device Driver |  <- User space
|   (user-space processes, isolated)       |
+------------------------------------------+
|    IPC       | Basic Scheduler            |  <- Kernel space
|    VM (min)  | Interrupt Handler         |   (small kernel)
+------------------------------------------+
|              Hardware                     |
+------------------------------------------+
```

| Criteria | Assessment |
|----------|-----------|
| **Performance** | Lower -- IPC overhead for service requests |
| **Reliability** | High -- service crash does not crash kernel |
| **Security** | Higher -- services are memory-isolated |
| **Development** | Easier -- services can be developed/updated independently |
| **Portability** | High -- minimal hardware-dependent code |
| **Example** | MINIX, QNX, seL4, Mach |

#### 3. Layered Approach

The OS is divided into N layers, each built on top of the layer below. Layer 0 is hardware. Layer N is the user interface. Each layer only uses services from the immediate lower layer.

| Criteria | Assessment |
|----------|-----------|
| **Performance** | Moderate -- requests must pass through each layer |
| **Reliability** | Moderate -- upper layers depend on lower layers |
| **Abstraction** | Excellent -- clean separation of concerns |
| **Flexibility** | Low -- hard to bypass layers or add cross-layer services |
| **Example** | THE system (Dijkstra, 1968), Venus |

#### 4. Modular Kernel (Hybrid)

Modern kernels combine monolithic and microkernel ideas. The kernel is a core with loadable modules (device drivers, file systems, protocol stacks). Modules run in kernel space but can be loaded/unloaded dynamically.

```
+----------------------------------------------+
|  User Applications  |  Shell  |  GUI          |
+----------------------------------------------+
|         System Libraries (libc)               |
+----------------------------------------------+
|         System Call Interface                 |
+----------------------------------------------+
| Core Kernel | Module 1 | Module 2 | Module 3 |
| (scheduler,  | (driver) | (FS)     | (net)   |
|  VM, IPC)    |          |          |         |
| All modules in kernel space -- dynamic load   |
+----------------------------------------------+
|      Hardware Abstraction Layer               |
+----------------------------------------------+
|              Hardware                          |
+----------------------------------------------+
```

| Criteria | Assessment |
|----------|-----------|
| **Performance** | High -- module communication is direct (same address space) |
| **Reliability** | Moderate -- bad module can crash kernel, but modules are optional |
| **Flexibility** | High -- load/unload modules at runtime, no recompile |
| **Development** | Moderate -- need stable module API, version compatibility |
| **Example** | Windows NT, modern Linux (with LKMs), macOS XNU |

---

### Kernel Types Comparison

| Feature | Monolithic | Microkernel | Hybrid (Modular) | Exokernel |
|---------|-----------|-------------|------------------|-----------|
| **Architecture** | Single large kernel in kernel space | Minimal core + user-space services | Core kernel + loadable modules | Minimal kernel exposes hardware directly |
| **Address Space** | Single (all in kernel space) | Multiple (services isolated) | Single (modules in kernel space) | Library OSes get dedicated spaces |
| **Performance** | High (direct calls) | Lower (IPC overhead) | High (direct calls) | Very high (minimal abstraction) |
| **Reliability** | Low (any bug crashes all) | High (services isolated) | Moderate (bad module crashes kernel) | Moderate (libOS bugs affect only that app) |
| **Flexibility** | Low (monolithic build) | High (services swappable) | High (dynamic modules) | Very high (apps manage resources) |
| **Security** | Low | High | Moderate | High |
| **Code Size** | Millions of LOC | Thousands of LOC | Millions of LOC | Thousands of LOC |
| **Examples** | Linux, BSD, MS-DOS | MINIX, QNX, seL4 | Windows NT, macOS XNU | ExOS, Nemesis |


---

## Examples

### Example 1: Tracing System Calls with strace

The `strace` tool on Linux shows every system call a program makes:

```bash
$ strace -c ls /tmp
% time     seconds  usecs/call     calls    errors syscall
------ ----------- ----------- --------- --------- ----------------
  0.00    0.000000           0         5           read
  0.00    0.000000           0         1           write
  0.00    0.000000           0        11           openat
  0.00    0.000000           0        11           close
  0.00    0.000000           0         7           fstat
  0.00    0.000000           0        18           mmap
  0.00    0.000000           0         4           mprotect
  0.00    0.000000           0         2           munmap
  0.00    0.000000           0         3           brk
  0.00    0.000000           0         2           ioctl
  0.00    0.000000           0         1           getdents64
  0.00    0.000000           0         1           set_tid_address
  0.00    0.000000           0        12           newfstatat
  0.00    0.000000           0         1           set_robust_list
------ ----------- ----------- --------- --------- ----------------
100.00    0.000000                    79           total
```

Even a simple `ls` command makes nearly 80 system calls!

### Example 2: Kernel vs User Mode

Processors support at least two privilege levels:

- **User mode**: Restricted access -- cannot execute privileged instructions, cannot access kernel memory
- **Kernel mode**: Full access -- can execute any instruction, access any memory

On x86, these are implemented via protection rings (Ring 0 = kernel, Ring 3 = user). The `syscall` instruction (or `int 0x80` on older systems) transitions from user to kernel mode.

```c
#include <stdio.h>

int main() {
    printf("About to attempt privileged operation...\n");
    // Halt instruction -- only valid in kernel mode
    __asm__("hlt");
    printf("This line never executes\n");
    return 0;
}
```

---

## Interview Corner

### 1. System Call vs Normal Function Call

| Feature | System Call | Normal Function Call |
|---------|------------|-------------------|
| **Mode switch** | User -> Kernel -> User | Stays in user mode |
| **Overhead** | High (~1-5us) -- context save + mode switch | Low (nanoseconds) |
| **Privilege level** | Kernel mode (Ring 0) | User mode (Ring 3) |
| **Access** | Hardware, kernel memory, page tables | Only user memory |
| **Triggered by** | `syscall` / `int 0x80` | `CALL` / `BL` / `JSR` |
| **Error handling** | Returns -1, sets errno | Returns error code |
| **Portability** | ABI defined by kernel | Defined by language ABI |
| **Example** | `read(fd, buf, n)` | `strlen(s)` |

### 2. Kernel Space vs User Space

| Aspect | Kernel Space | User Space |
|--------|-------------|------------|
| **Address range** | High memory (e.g., 0xC0000000+ on 32-bit Linux) | Low memory (0x00000000 - 0xBFFFFFFF) |
| **Privilege ring** | Ring 0 (x86) / EL1 (ARM) | Ring 3 (x86) / EL0 (ARM) |
| **Allowed instruction** | All (HLT, IN/OUT, LGDT) | Restricted |
| **Memory access** | All physical/virtual memory | Only process's address space |
| **Crash consequence** | Kernel panic -- system crashes | Segfault -- only the process dies |
| **Stack** | Separate kernel stack per process | User stack |
| **Entry method** | Only via system calls or interrupts | Program execution starts here |

### 3. RTOS vs GPOS

| Feature | RTOS (FreeRTOS, QNX) | GPOS (Linux, Windows) |
|---------|----------------------|----------------------|
| **Primary goal** | Deterministic timing | Throughput and fairness |
| **Scheduler** | Priority-based preemptive | CFS (Linux) or priority with boost |
| **Kernel** | Microkernel or minimal monolithic | Monolithic or hybrid |
| **Memory mgmt** | Static allocation, often no VM | Virtual memory with paging |
| **IPC** | Fast, bounded-time message passing | Pipes, sockets, shared memory |
| **Footprint** | 5KB - 500KB | 1GB - 32GB |
| **Boot time** | Milliseconds | Seconds |
| **Use case** | Airbag controller, pacemaker | Desktop, server, laptop |


---

## Applications in Real Systems

### Windows NT Kernel

- **Type:** Hybrid (modular kernel)
- **Architecture:** Executive (kernel) + HAL + loadable drivers
- **Key feature:** HAL abstracts CPU architecture -- NT ran on x86, Alpha, MIPS, Itanium, ARM
- **System calls:** NT API (ntdll.dll) translates Win32 API calls into kernel service requests
- **Design philosophy:** "The kernel does as little as possible" -- microkernel-like philosophy but most services run in kernel space for performance

```
+------------------------------------+
| Win32 App  | Win32 App  | POSIX App|
+------------------------------------+
| kernel32.dll | ntdll.dll | psxdll  |
+------------------------------------+
|    System Service Dispatcher        |
+------------------------------------+
| I/O Mgr | Object Mgr | Process Mgr |
| Cache   | VMM       | Security    |
| + Device Drivers (loadable)         |
+------------------------------------+
| Hardware Abstraction Layer (HAL)    |
+------------------------------------+
|            Hardware                 |
+------------------------------------+
```

### Linux Kernel

- **Type:** Monolithic with loadable kernel modules (LKM)
- **Architecture:** Single kernel image with dynamically loaded modules
- **Key features:** CFS scheduler, VFS layer, namespaces, cgroups
- **System calls:** ~350+ on x86-64, defined in `sys_call_table`
- **Design philosophy:** "Everything is a file" -- devices, sockets, pipes accessed via `read()`, `write()`, `ioctl()`

```
+------------------------------------------+
| User Processes | Daemons | Shell          |
+------------------------------------------+
|  GNU C Library (glibc) -- syscall wrapper |
+------------------------------------------+
|       System Call Interface (arch/x86)    |
+------------------------------------------+
| VFS  | Scheduler | Memory  | Network     |
| ext4 | CFS       | Manager | TCP/IP      |
| + Loadable Kernel Modules + Drivers      |
+------------------------------------------+
| Architecture-specific code (x86/ARM)      |
+------------------------------------------+
```

### macOS / XNU Kernel

- **Type:** Hybrid kernel
- **Core:** Mach microkernel (IPC, VM, scheduler) + BSD (file systems, networking, POSIX)
- **Drivers:** IOKit (C++-based driver framework)
- **System calls:** Mach traps + BSD syscalls + Mach IPC

```
+------------------------------------------+
| User-space: Launchd, WindowServer, Apps   |
+------------------------------------------+
| Mach IPC | BSD Syscalls | IOKit           |
+------------------------------------------+
| Mach Microkernel Core                     |
| (scheduler, VM, IPC, task/thread mgmt)   |
+------------------------------------------+
| BSD Layer (POSIX, file systems, net)      |
+------------------------------------------+
| IOKit (C++ device drivers)               |
+------------------------------------------+
| Hardware                                  |
+------------------------------------------+
```

### QNX RTOS

- **Type:** True microkernel
- **Kernel size:** ~12KB (among the smallest production kernels)
- **Architecture:** Kernel provides only IPC, scheduling, and interrupt handling
- **Key feature:** If a driver crashes, it can be restarted without affecting the kernel
- **Use cases:** Automotive (255M+ vehicles), medical devices, industrial control

```
+------------------------------------------+
|  Proc A  |  Proc B  |  File Sys  | Net   |
|  (app)   |  (driver)|  (fs-qnx6) | Stack |
+------------------------------------------+
|   Message Passing (IPC) -- QNX Neutrino   |
+------------------------------------------+
|  Scheduler | Interrupt | Timer | Signal  |  <- ~12KB microkernel
+------------------------------------------+
|  Hardware                                |
+------------------------------------------+
```


---

## Concept Comparison

| Feature | Monolithic | Microkernel | Layered | Modular (Hybrid) | Exokernel |
|---------|-----------|-------------|---------|------------------|-----------|
| **Architecture** | Single large kernel in kernel space | Minimal + user-space services | Strict hierarchy | Core + loadable modules | Hardware exposed to libOS |
| **Performance** | High | Lower (IPC) | Moderate | High | Very high |
| **Reliability** | Low | High | Moderate | Moderate | Moderate |
| **Security** | Low | High | Moderate | Moderate | High |
| **Flexibility** | Low | High | Low | High | Very high |
| **Development** | Hard | Easier | Moderate | Moderate | Hard |
| **Examples** | Linux, BSD | MINIX, QNX, seL4 | THE, Venus | Windows NT, macOS | ExOS, Nemesis |

## Quick Reference

| Term | Definition |
|------|------------|
| **OS** | System software managing hardware and providing services to programs |
| **System Call** | Programmatic request for kernel service (e.g., `fork()`, `open()`) |
| **User Mode** | Restricted privilege level -- no direct hardware access |
| **Kernel Mode** | Full privilege -- can execute any instruction |
| **Trap/Interrupt** | Mechanism to switch from user to kernel mode |
| **API** | Library wrappers around system calls |
| **Kernel** | Core OS component, always resident in memory |
| **Monolithic Kernel** | Single kernel with all services in kernel space |
| **Microkernel** | Minimal kernel with most services in user space |
| **Hybrid Kernel** | Core kernel with loadable modules in kernel space |
| **Exokernel** | Kernel exposing hardware directly to applications |
| **RTOS** | Real-Time OS with guaranteed task timing |
| **IPC** | Inter-Process Communication |
| **Context Switch** | Saving/restoring state when switching processes |

## Cross-Application Matrix

| Concept | Web Server | Database | Embedded System | Smartphone |
|---------|-----------|----------|-----------------|------------|
| **Process Management** | Concurrent connections (Nginx workers) | Query execution threads (PostgreSQL) | Real-time tasks (FreeRTOS) | App lifecycle (Android) |
| **Memory Management** | Connection pools, keep-alive | Buffer pool (innodb_buffer_pool) | Limited SRAM/Flash, no VM | Memory pressure, low-kill daemon |
| **File System** | Static files, logs | Data files, WAL, undo logs | Flash FS (littlefs, FAT) | Sandbox storage (SQLite) |
| **Protection** | User isolation, cgroups | RBAC, row-level security | MPU, privileged vs user | SELinux app sandboxing |
| **System Calls** | accept(), read(), sendfile() | pread(), pwrite(), fsync() | Task delays, semaphores | binder IPC, mmap |

## Chapter Quiz

1. Which OS type guarantees critical tasks complete within a strict time bound? a) Batch b) Time-sharing c) Real-time d) Distributed

2. What mechanism triggers user-to-kernel mode switch? a) Trap/interrupt b) Function call c) Context switch d) Library call

3. Which kernel structure runs most services in user space? a) Monolithic b) Microkernel c) Layered d) Hybrid

4. Which is a system call? a) printf() b) scanf() c) fork() d) malloc()

5. Primary disadvantage of a microkernel vs monolithic? a) Worse security b) IPC overhead c) Harder to develop d) Less portable

6. x86-64 instruction to enter kernel mode? a) int 0x80 b) syscall c) call d) jmp

7. Kernel type of Windows NT? a) Monolithic b) Microkernel c) Hybrid d) Exokernel

8. RTOS stands for? a) Rapid Transaction OS b) Real-Time OS c) Runtime OS d) Reliable Task OS

**Answers:** 1-c, 2-a, 3-b, 4-c, 5-b, 6-b, 7-c, 8-b

## Summary

- An **OS** manages hardware resources and provides services -- like a building manager coordinates tenants, utilities, and access
- OS functions: process management, memory management, file system, I/O, security, networking
- OS history: batch -> multiprogramming -> time-sharing -> modern systems
- OS types: **batch**, **time-sharing**, **distributed**, **real-time** (hard/soft), **embedded**
- **System calls** are the interface between user programs and the kernel; they switch to kernel mode via a trap instruction
- OS structures: **monolithic** (Linux), **microkernel** (MINIX), **layered**, **modular/hybrid** (Windows NT), **exokernel**
- Kernel types: monolithic = speed, microkernel = reliability, hybrid = balance, exokernel = flexibility
- The **API is not the system call** -- the library wraps the system call for convenience and portability

## Exercises

### Basic

1. List five services an OS provides and explain why each is necessary.
2. What is the difference between user mode and kernel mode? Why does this distinction exist?
3. Use `strace` on Linux to trace `ls`. Identify five different system calls and their purposes.
4. Draw a diagram of the user-to-kernel transition during a `read()` system call. Label all steps.

### Intermediate

5. Compare batch processing with time-sharing. What hardware features made time-sharing possible?
6. Explain the sequence from `printf()` to characters on terminal. List every OS component involved.
7. Monolithic kernel is faster but less reliable than microkernel. Which would you choose for a spacecraft? Justify.
8. Using the `read()` trace table, explain what could go wrong at Step 7 if the file descriptor is invalid.

### Advanced

9. Research Mach microkernel in macOS/XNU. Which services run in user space and which in the kernel? Why is XNU called "hybrid"?
10. Design a minimal HAL interface (5-8 functions) for a kernel scheduler to operate across different CPU architectures.
11. Write a C program using `fork()`, `exec()`, and `waitpid()` to create a job-control shell.
12. Implement a microkernel-like architecture in Python: a kernel process dispatching messages to user-space service handlers using `queue.Queue`.

> [TIP]
> Focus on the **system call flow** -- it is the bridge between user programs and the kernel. The user-to-kernel mode switch via trap/interrupt is foundational for every OS topic.

> [NOTE]
> The **API vs system call** distinction is frequently tested. Remember: `printf()` is an API; `write()` is the system call.

> [WARNING]
> Do not confuse **multiprogramming** (multiple jobs in memory, CPU switches during I/O wait) with **time-sharing** (CPU switching between users for interactive response). Multiprogramming improves CPU utilization; time-sharing improves user experience.

