---
id: 02-processes
slug: /operating-systems/02-processes
title: "Chapter 2: Processes"
sidebar_label: "Chapter 2: Processes"
sidebar_position: 2
---
# Chapter 2: Processes

**<< [Introduction to Operating Systems](./01-introduction.md)** | [**Next: CPU Scheduling**](./03-cpu-scheduling.md) >>

---

## Learning Objectives

- Define a process and differentiate it from a program
- Describe the five-state process model and transitions
- Explain the structure and contents of a Process Control Block
- Understand context switching and its overhead
- Implement process creation and termination using Unix system calls
- Compare interprocess communication methods: shared memory and message passing
- Distinguish between independent and cooperating processes

## Why Process Management Matters

Imagine a car factory assembly line. Multiple car models → sedans, SUVs, trucks → move through the same line simultaneously. Each vehicle is at a different stage: one getting an engine, another getting painted, a third undergoing quality inspection. The factory manager (OS) must track each vehicle's status, allocate resources (workers, tools, paint), switch between tasks efficiently, and handle emergencies (defective parts, stalled machines). Without this management, chaos ensues → collisions, idle workers, missed deadlines.

A computer operates identically. Multiple programs (processes) share the CPU, memory, and I/O devices. The OS must:
- Track each process's state (what stage it's in)
- Save/restore progress when switching (context switch)
- Allocate memory, CPU time, and I/O fairly
- Enable processes to communicate safely (IPC)
- Clean up finished processes without resource leaks

Without process management, a single crash takes down the entire system. Process management is the foundation of multitasking, responsiveness, and reliability in every modern OS.

## Chapter at a Glance

| Topic | Key Points |
|-------|------------|
| **Process Concept** | Active instance of a program; has text, data, heap, stack sections |
| **Process States** | New -> Ready -> Running -> Waiting -> Terminated (five-state model) |
| **PCB** | task_struct in Linux; holds PID, PC, registers, scheduling info, memory mgmt, I/O status |
| **Context Switch** | Saving/restoring process state; pure overhead (1-10 microsec) |
| **Process Creation** | `fork()` creates child; `exec()` replaces program image |
| **IPC** | Shared memory (fast, needs sync) vs message passing (structured, works cross-network) |

## Chapter Roadmap

<div class="mermaid">
flowchart LR
    A[Process Concept] --> B[Process in Memory]
    B --> C[Process States]
    C --> D[PCB & Context Switch]
    D --> E[Process Creation & Termination]
    E --> F[IPC: Shared Memory vs Message Passing]
    F --> G[Examples & Summary]
</div>

## Theory

![Process States](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/02-processes.png)

---

### Process Concept


#### Real-World Analogy: Blueprint vs Building Under Construction

A **program** is like a building blueprint → a static document describing what to build. A **process** is the actual construction site → workers moving, materials arriving, foundation being laid. One blueprint can produce multiple construction sites (running multiple instances of the same program).

#### Definition

A **process** is an instance of a program in execution. While a program is a passive entity (a file on disk), a process is active → it has a program counter, register values, a stack, and data sections.

The key insight: **one program can produce many processes**. Opening three terminal windows running `bash` creates three processes from the same binary.

#### Algorithm: Process Lifecycle Overview

| Step | Action | Description |
|------|--------|-------------|
| 1 | Program Loaded | OS reads executable from disk into memory |
| 2 | PCB Created | OS allocates and initializes a Process Control Block |
| 3 | Memory Allocated | Text, data, heap, stack sections are set up |
| 4 | Ready Queue | Process is placed in the ready queue awaiting CPU |
| 5 | Dispatch | Scheduler selects process and CPU begins execution |
| 6 | Execution | Instructions are fetched, decoded, executed |
| 7 | Termination | Process exits; OS reclaims all resources |

#### Pseudocode: Process Object

```
class Process:
    pid: int
    state: enum {NEW, READY, RUNNING, WAITING, TERMINATED}
    program_counter: address
    registers: RegisterFile
    memory: MemoryLayout
    open_files: List<FileDescriptor>
    
    function create(program_path):
        load executable from disk
        allocate memory (text, data, heap, stack)
        initialize PCB with default values
        assign unique PID
        set state = NEW
        add to ready queue
        return PCB
    
    function terminate():
        save exit status
        close all open files
        release memory
        set state = TERMINATED
        notify parent process
```

#### Dry Run: Process Creation

| Step | Component | Action | PID | State | PC |
|------|-----------|--------|-----|-------|-----|
| 1 | Shell | User types `./myprog` | - | - | - |
| 2 | OS | Loads binary into memory | 1001 | NEW | 0x400000 |
| 3 | OS | Allocates PCB | 1001 | NEW | 0x400000 |
| 4 | Scheduler | Moves to ready queue | 1001 | READY | 0x400000 |
| 5 | Scheduler | Dispatches to CPU | 1001 | RUNNING | 0x400000 |
| 6 | CPU | Fetches first instruction | 1001 | RUNNING | 0x400004 |
| 7 | Process | Calls exit() | 1001 | TERMINATED | - |
| 8 | OS | Reclaims resources | 1001 | - | - |

#### C++ Implementation: Process Abstraction

```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <cstdint>

enum class ProcessState { NEW, READY, RUNNING, WAITING, TERMINATED };

struct PCB {
    uint32_t pid;
    ProcessState state;
    uint64_t program_counter;
    uint64_t registers[32];
    uint64_t stack_pointer;
    uint64_t base_register;
    uint64_t limit_register;
    uint32_t priority;
    uint64_t cpu_burst_time;
    uint64_t total_cpu_time;
};

class ProcessManager {
    std::queue<PCB*> ready_queue;
    std::vector<PCB*> all_processes;
    uint32_t next_pid = 1;

public:
    PCB* create_process() {
        PCB* pcb = new PCB();
        pcb->pid = next_pid++;
        pcb->state = ProcessState::NEW;
        pcb->program_counter = 0;
        pcb->stack_pointer = 0xFFFFFFFF;
        pcb->priority = 0;
        pcb->cpu_burst_time = 0;
        pcb->total_cpu_time = 0;
        pcb->state = ProcessState::READY;
        ready_queue.push(pcb);
        all_processes.push_back(pcb);
        std::cout << "Process " << pcb->pid << " created and ready\n";
        return pcb;
    }

    void dispatch() {
        if (ready_queue.empty()) return;
        PCB* pcb = ready_queue.front();
        ready_queue.pop();
        pcb->state = ProcessState::RUNNING;
        std::cout << "Process " << pcb->pid << " dispatched to CPU\n";
    }

    void terminate(PCB* pcb) {
        pcb->state = ProcessState::TERMINATED;
        std::cout << "Process " << pcb->pid << " terminated\n";
    }
};

int main() {
    ProcessManager pm;
    PCB* p1 = pm.create_process();
    PCB* p2 = pm.create_process();
    pm.dispatch();
    pm.terminate(p1);
    return 0;
}
```

#### Python Implementation: Process Abstraction

```python
from enum import Enum
from dataclasses import dataclass, field
from typing import List
from collections import deque

class ProcessState(Enum):
    NEW = 1
    READY = 2
    RUNNING = 3
    WAITING = 4
    TERMINATED = 5

@dataclass
class PCB:
    pid: int
    state: ProcessState = ProcessState.NEW
    program_counter: int = 0
    registers: List[int] = field(default_factory=lambda: [0] * 32)
    stack_pointer: int = 0xFFFFFFFF
    priority: int = 0
    cpu_burst_time: int = 0
    total_cpu_time: int = 0

class ProcessManager:
    def __init__(self):
        self.ready_queue = deque()
        self.all_processes = []
        self.next_pid = 1

    def create_process(self):
        pcb = PCB(pid=self.next_pid)
        self.next_pid += 1
        pcb.state = ProcessState.READY
        self.ready_queue.append(pcb)
        self.all_processes.append(pcb)
        print(f"Process {pcb.pid} created and ready")
        return pcb

    def dispatch(self):
        if not self.ready_queue:
            return None
        pcb = self.ready_queue.popleft()
        pcb.state = ProcessState.RUNNING
        print(f"Process {pcb.pid} dispatched to CPU")
        return pcb

    def terminate(self, pcb):
        pcb.state = ProcessState.TERMINATED
        print(f"Process {pcb.pid} terminated")

pm = ProcessManager()
p1 = pm.create_process()
p2 = pm.create_process()
pm.dispatch()
pm.terminate(p1)
```

#### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why? |
|-----------|----------------|-----------------|------|
| Process Creation | O(1) | O(n) where n = process size | PCB allocation is constant; memory copy is proportional to process size |
| Process Dispatch | O(1) | O(1) | Simply dequeues from ready queue |
| Process Termination | O(1) ammortized | O(1) | Constant-time PCB removal; GC may defer |

#### Advantages & Disadvantages

| Aspect | Advantages | Disadvantages |
|--------|-----------|---------------|
| Isolation | Processes are isolated → one crash cannot directly affect another | IPC overhead required for cross-process communication |
| Security | Each process has separate address space | Context switching is expensive |
| Design | Clean abstraction for multitasking | Creation overhead (fork copies address space) |
| Scalability | Works on single-core to many-core systems | Number of processes limited by PID table and memory |

#### Edge Cases

| Edge Case | Description | Handling |
|-----------|-------------|----------|
| **Fork Bomb** | Process recursively creates infinite children, exhausting system resources | OS limits max processes per user (`ulimit -u`) |
| **PID Exhaustion** | All PIDs in use, no new processes can be created | Recycle PIDs; 16-bit PID on Linux (65535 max by default, configurable to 4M) |
| **Zombie Flood** | Parent never calls wait(), children accumulate as zombies | Parent must call wait() or use SIGCHLD handler; init adopts orphans |
| **Resource Exhaustion** | Memory or file descriptors depleted by runaway process | OS enforces per-process resource limits (rlimit) |

---

### Process in Memory


#### Real-World Analogy: Office Building Floors

A process's memory is like an office building. The **text section** is the building's structural blueprint (fixed, read-only). The **data section** is the building directory (global info). The **heap** is the storage warehouse (grows as needed). The **stack** is the elevator shaft (grows and shrinks per floor/function call).

#### Memory Layout

```
+------------------+  high address
|      Stack       |  Local variables, function parameters, return addresses
|       |          |
|       v          |
|       ^          |
|      Heap        |  Dynamically allocated memory (malloc, new)
+------------------+
|      Data        |  Global and static variables
+------------------+
|      Text        |  Program code (machine instructions)
+------------------+  low address
```

- **Text section**: Contains compiled binary code. Read-only to prevent accidental modification.
- **Data section**: Global and static variables (BSS for uninitialized data, initialized data segment).
- **Heap**: Dynamically allocated memory → grows upward toward higher addresses.
- **Stack**: Function call frames, local variables → grows downward.

#### Algorithm: Memory Allocation Steps

| Step | Action | Description |
|------|--------|-------------|
| 1 | Load Text | OS reads code segment from executable into memory at base address |
| 2 | Initialize Data | Global/static variables copied from executable image |
| 3 | Zero BSS | Uninitialized global variables set to zero |
| 4 | Setup Heap | Heap starts after data segment, managed by brk/sbrk or mmap |
| 5 | Setup Stack | Stack pointer set to highest user address, grows downward |
| 6 | Set PC | Program counter set to _start (entry point) |

#### Pseudocode: Memory Layout Setup

```
function setup_memory_layout(executable):
    text_base = allocate_pages(executable.text_size, READ_ONLY | EXECUTABLE)
    copy_from_disk(executable.text, text_base)
    
    data_base = text_base + executable.text_size
    allocate_pages(executable.data_size, READ_WRITE)
    copy_from_disk(executable.data, data_base)
    
    bss_base = data_base + executable.data_size
    zero_fill(bss_base, executable.bss_size)
    
    heap_base = bss_base + executable.bss_size
    heap_end = heap_base
    
    stack_base = HIGHEST_USER_ADDRESS
    stack_pointer = stack_base
    
    pc = executable.entry_point
```

#### Dry Run: Memory Layout for a Simple Program

| Segment | Start Address | Size | Contents |
|---------|--------------|------|----------|
| Text | 0x400000 | 8 KB | Machine code of program |
| Data | 0x402000 | 2 KB | Global int x = 42; static char buffer[256] |
| BSS | 0x404000 | 1 KB | Global int y (uninitialized, zeroed) |
| Heap | 0x406000 | 0 KB (start) | Empty; grows via malloc() |
| Stack | 0x7FFFFFFF | 8 KB (max) | Grows downward; main() frame |

#### C++ Implementation: Memory Layout

```cpp
#include <iostream>
#include <cstdlib>
#include <cstring>

int global_var = 42;               // Data section (initialized)
static int static_var;             // BSS section (uninitialized, zero)
const int const_var = 100;         // Text section (rodata)

void show_addresses() {
    int local_var = 0;             // Stack
    int* heap_var = new int(99);   // Heap
    static int local_static = 5;   // Data section

    std::cout << "Text (function): " << (void*)&show_addresses << "\n";
    std::cout << "Data (global): " << &global_var << "\n";
    std::cout << "BSS (static): " << &static_var << "\n";
    std::cout << "Heap: " << heap_var << "\n";
    std::cout << "Stack: " << &local_var << "\n";

    delete heap_var;
}

int main() {
    show_addresses();
    return 0;
}
```

#### Python Implementation: Memory Layout Visualization

```python
import sys
import ctypes

class MemoryLayoutDemo:
    class_var = 42  # Class-level (data segment equivalent)

    def __init__(self):
        self.instance_var = 10  # Heap-allocated

    def show(self):
        local_var = 5      # Stack-allocated
        dynamic_list = [1, 2, 3]  # Heap-allocated via PyObject

        print(f"Code (function): {hex(id(self.show))}")
        print(f"Class var (data): {hex(id(MemoryLayoutDemo.class_var))}")
        print(f"Instance var (heap): {hex(id(self.instance_var))}")
        print(f"Local var (stack-like): {hex(id(local_var))}")
        print(f"Dynamic list (heap): {hex(id(dynamic_list))}")

demo = MemoryLayoutDemo()
demo.show()
```

#### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why? |
|-----------|----------------|-----------------|------|
| Memory Layout Creation | O(n) | O(n) | Must copy n bytes of program from disk to memory |
| Stack Frame Push | O(1) | O(1) | Just decrements stack pointer |
| Heap Allocation (malloc) | O(1) to O(n) | O(size) | Small allocs fast via freelist; large may need syscall |
| Heap Deallocation (free) | O(1) amortized | O(1) | Returns block to freelist; coalescing may be O(n) |

#### Advantages & Disadvantages

| Aspect | Advantages | Disadvantages |
|--------|-----------|---------------|
| Isolation | Segments protect code from data corruption | Fragmentation can waste memory |
| Growth | Stack and heap grow dynamically | Stack overflow corrupts adjacent memory |
| Sharing | Text section can be shared between processes (reentrant code) | Each process needs its own data/heap/stack copy |
| Protection | Read-only text prevents code injection | Context switch must remap entire address space |

#### Edge Cases

| Edge Case | Description | Handling |
|-----------|-------------|----------|
| **Stack Overflow** | Function calls exceed available stack space | OS delivers SIGSEGV; ulimit -s controls max stack |
| **Heap Fragmentation** | Many small allocs/frees create non-contiguous free holes | Compaction (not in C/C++), slab allocator in kernel |
| **Memory Leak** | Allocated heap memory never freed | OS reclaims all memory on process termination |
| **Null Pointer Dereference** | Accessing address 0 | MMU traps access; OS delivers SIGSEGV to process |
### Process States


#### Real-World Analogy: Restaurant Order Lifecycle

A restaurant order goes through stages: **New** (customer places order), **Ready** (order ticket on the kitchen board), **Running** (chef is cooking), **Waiting/Blocked** (waiting for an ingredient to arrive), and **Terminated** (meal served, ticket removed). The chef (CPU) can only cook one order at a time but keeps multiple orders in various stages.

#### The Classic Five-State Model

```
          +-----------------------+
          |         NEW           |
          +-----------------------+
                    | admitted
                    v
          +-----------------------+
    +-----|        READY          |<------+
    |     +-----------------------+       |
    |               | scheduler dispatch  |
    |               v                     |
    |     +-----------------------+       |
    |     |       RUNNING         |       |
    |     +-----------------------+       |
    |          |              |          |
    |   I/O or event     interrupt       |
    |          |              |          |
    |          v              +----------+
    |     +-----------------------+
    |     |   WAITING (BLOCKED)   |
    |     +-----------------------+
    |               | I/O or event completion
    +---------------+
    
          +-----------------------+
          |      TERMINATED       |
          +-----------------------+
```

1. **New**: Process is being created
2. **Ready**: Process is in memory, waiting to be assigned to CPU
3. **Running**: Instructions are being executed on the CPU
4. **Waiting (Blocked)**: Process is waiting for some event (I/O completion, signal)
5. **Terminated**: Process has finished execution

#### Algorithm: State Transitions

| Step | Current State | Event | Next State | Responsible |
|------|--------------|-------|------------|-------------|
| 1 | NEW | Process admitted to system | READY | OS Scheduler |
| 2 | READY | Scheduler dispatches process | RUNNING | OS Scheduler |
| 3 | RUNNING | Process requests I/O or waits | WAITING | Process (via syscall) |
| 4 | RUNNING | Time slice expires (interrupt) | READY | OS Scheduler / Timer |
| 5 | RUNNING | Process exits or is killed | TERMINATED | Process / OS |
| 6 | WAITING | I/O completes or event arrives | READY | Hardware / OS |
| 7 | READY | (Process remains ready) | READY | - |

#### Pseudocode: Process State Machine

```
states = {NEW, READY, RUNNING, WAITING, TERMINATED}

transitions = {
    NEW:      {admitted: READY},
    READY:    {dispatch: RUNNING},
    RUNNING:  {interrupt: READY, io_wait: WAITING, exit: TERMINATED},
    WAITING:  {io_complete: READY},
    TERMINATED: {}
}

function transition(process, event):
    if event not in transitions[process.state]:
        error("Invalid transition")
    process.state = transitions[process.state][event]
    log("Process", process.pid, "->", process.state)
    
    if process.state == TERMINATED:
        release_resources(process)
```

#### Dry Run Trace Table: Process State Changes

| Time | Event | Process A State | Process B State | Process C State | Ready Queue |
|------|-------|----------------|----------------|----------------|-------------|
| T0 | System boot | NEW | - | - | [] |
| T1 | A admitted | READY | - | - | [A] |
| T2 | A dispatched | RUNNING | - | - | [] |
| T3 | Timer interrupt | READY | NEW | - | [A] |
| T4 | B admitted | READY | READY | - | [A, B] |
| T5 | B dispatched | READY | RUNNING | - | [A] |
| T6 | B requests disk I/O | READY | WAITING | - | [A] |
| T7 | A dispatched | RUNNING | WAITING | - | [] |
| T8 | B I/O complete | RUNNING | READY | - | [B] |
| T9 | C created | RUNNING | READY | NEW | [B, C] |
| T10 | A exits | TERMINATED | READY | READY | [B, C] |
| T11 | B dispatched | - | RUNNING | READY | [C] |

#### C++ Implementation: Process State Machine

```cpp
#include <iostream>
#include <string>
#include <unordered_map>
#include <queue>
#include <vector>

enum class State { NEW, READY, RUNNING, WAITING, TERMINATED };
enum class Event { ADMITTED, DISPATCH, INTERRUPT, IO_WAIT, IO_COMPLETE, EXIT };

std::string state_name(State s) {
    static const char* names[] = {"NEW","READY","RUNNING","WAITING","TERMINATED"};
    return names[static_cast<int>(s)];
}

struct Process {
    int pid;
    State state;
    Process(int id) : pid(id), state(State::NEW) {}
};

class StateMachine {
    std::unordered_map<State, std::unordered_map<Event, State>> rules;

public:
    StateMachine() {
        rules[State::NEW][Event::ADMITTED] = State::READY;
        rules[State::READY][Event::DISPATCH] = State::RUNNING;
        rules[State::RUNNING][Event::INTERRUPT] = State::READY;
        rules[State::RUNNING][Event::IO_WAIT] = State::WAITING;
        rules[State::RUNNING][Event::EXIT] = State::TERMINATED;
        rules[State::WAITING][Event::IO_COMPLETE] = State::READY;
    }

    bool transition(Process& p, Event e) {
        auto state_it = rules.find(p.state);
        if (state_it == rules.end()) return false;
        auto event_it = state_it->second.find(e);
        if (event_it == state_it->second.end()) return false;
        State old = p.state;
        p.state = event_it->second;
        std::cout << "P" << p.pid << ": " << state_name(old)
                  << " --[" << event_name(e) << "]--> " << state_name(p.state) << "\n";
        return true;
    }

    static std::string event_name(Event e) {
        static const char* names[] = {"ADMITTED","DISPATCH","INTERRUPT",
                                       "IO_WAIT","IO_COMPLETE","EXIT"};
        return names[static_cast<int>(e)];
    }
};

int main() {
    StateMachine sm;
    Process p(1);
    sm.transition(p, Event::ADMITTED);
    sm.transition(p, Event::DISPATCH);
    sm.transition(p, Event::IO_WAIT);
    sm.transition(p, Event::IO_COMPLETE);
    sm.transition(p, Event::DISPATCH);
    sm.transition(p, Event::EXIT);
    return 0;
}
```

#### Python Implementation: Process State Machine

```python
from enum import Enum

class State(Enum):
    NEW = 0
    READY = 1
    RUNNING = 2
    WAITING = 3
    TERMINATED = 4

class Event(Enum):
    ADMITTED = 0
    DISPATCH = 1
    INTERRUPT = 2
    IO_WAIT = 3
    IO_COMPLETE = 4
    EXIT = 5

class Process:
    def __init__(self, pid):
        self.pid = pid
        self.state = State.NEW

class StateMachine:
    def __init__(self):
        self.rules = {
            State.NEW:     {Event.ADMITTED: State.READY},
            State.READY:   {Event.DISPATCH: State.RUNNING},
            State.RUNNING: {Event.INTERRUPT: State.READY,
                            Event.IO_WAIT: State.WAITING,
                            Event.EXIT: State.TERMINATED},
            State.WAITING: {Event.IO_COMPLETE: State.READY},
        }

    def transition(self, process, event):
        if process.state not in self.rules:
            return False
        if event not in self.rules[process.state]:
            return False
        old_state = process.state
        process.state = self.rules[process.state][event]
        print(f"P{process.pid}: {old_state.name} --[{event.name}]--> {process.state.name}")
        return True

sm = StateMachine()
p = Process(1)
for e in [Event.ADMITTED, Event.DISPATCH, Event.IO_WAIT,
          Event.IO_COMPLETE, Event.DISPATCH, Event.EXIT]:
    sm.transition(p, e)
```

#### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why? |
|-----------|----------------|-----------------|------|
| State Transition | O(1) | O(1) | Hash map lookup on enum pairs |
| Ready Queue Enqueue | O(1) | O(1) | Queue push is constant time |
| Ready Queue Dequeue | O(1) | O(1) | Queue pop is constant time |
| State Diagram Storage | O(S*E) | O(S*E) | S = states, E = events; typically trivial (5x5) |

#### Advantages & Disadvantages

| Aspect | Advantages | Disadvantages |
|--------|-----------|---------------|
| Clarity | Simple 5-state model is easy to understand and implement | Real systems need 7+ states (add suspend states) |
| Efficiency | State transitions are O(1) operations | Starvation possible if low-priority processes never get CPU |
| Predictability | Deterministic state machine simplifies scheduling | Does not model NUMA or cache affinity effects |
| Portability | All major OSes implement this model | Suspended/blocked distinction missing |

#### Edge Cases

| Edge Case | Description | Handling |
|-----------|-------------|----------|
| **Starvation** | Low-priority process never gets CPU | Use aging (gradually increase priority over time) |
| **Deadlock** | Process A waits on B, B waits on A → both stuck in WAITING forever | OS must detect via cycle detection or use timeout |
| **State Confusion** | Race condition where two events fire simultaneously | Lock state transitions with spinlock/mutex |
| **Infinite Loop** | Process in RUNNING never yields CPU | Timer interrupt forces preemption after quantum expires |
| **Orphan in Waiting** | Parent dies while child is waiting on I/O | Child becomes orphan; init (PID 1) adopts and eventually cleans up |
### Process Control Block (PCB)


#### Real-World Analogy: Employee File in HR

Every employee has an HR file containing their employee ID, job title, current assignment, salary, skills, performance reviews, and project history. When a manager needs to reassign the employee, the HR file is retrieved, updated, and filed. The **PCB** is the OS's HR file for each process → it contains everything the kernel needs to manage, schedule, and track that process.

#### Definition

The OS maintains a **Process Control Block** for every process → a data structure that holds all information needed to manage that process. Also known as a task control block. On Linux, the PCB is the `task_struct` structure in `<linux/sched.h>` containing hundreds of fields.

#### PCB Contents

| Field | Description |
|-------|-------------|
| Process ID (PID) | Unique integer identifier |
| Program counter | Address of the next instruction to execute |
| CPU registers | All registers saved during context switch |
| CPU scheduling info | Priority, scheduling queue pointers, scheduling parameters |
| Memory management | Page tables, segment tables, memory limits |
| Accounting info | CPU time used, time limits, account numbers |
| I/O status | List of open files, I/O requests, allocated devices |
| State | Current process state (NEW, READY, etc.) |
| Pointers | Pointers to parent process, children, siblings |

#### Algorithm: PCB Operations

| Step | Operation | Details |
|------|-----------|---------|
| 1 | Create PCB | Allocate kernel memory, assign PID, initialize all fields to defaults |
| 2 | Save Context | On interrupt/syscall, copy CPU registers into PCB |
| 3 | Update State | Change process state field (e.g., RUNNING to READY) |
| 4 | Switch PCB | Update kernel's current pointer to the new process's PCB |
| 5 | Restore Context | Copy new PCB's register values back to physical CPU |
| 6 | Delete PCB | On termination, release kernel memory, recycle PID |

#### Pseudocode: PCB Structure and Operations

```
struct PCB:
    pid: int
    state: {NEW, READY, RUNNING, WAITING, TERMINATED}
    program_counter: address
    registers: array[32] of word
    stack_pointer: address
    page_table: PageTable
    file_table: array[256] of FileDescriptor
    priority: int (0-139, lower = higher priority)
    cpu_time: int (total CPU time used)
    parent_pid: int
    children: list of pid
    scheduling_pointers: {next, prev} in ready_queue

function create_pcb(parent_pcb):
    new_pcb = allocate_kernel_memory(sizeof(PCB))
    new_pcb.pid = allocate_pid()
    new_pcb.state = NEW
    new_pcb.parent_pid = parent_pcb.pid if parent_pcb else 0
    new_pcb.program_counter = 0
    copy_memory_layout(parent_pcb, new_pcb)  # COW optimization
    add_to_process_list(new_pcb)
    return new_pcb

function save_context(pcb):
    pcb.program_counter = READ_CPU_REGISTER(PC)
    pcb.stack_pointer = READ_CPU_REGISTER(SP)
    for i in 0..31:
        pcb.registers[i] = READ_CPU_REGISTER(R[i])

function restore_context(pcb):
    WRITE_CPU_REGISTER(PC, pcb.program_counter)
    WRITE_CPU_REGISTER(SP, pcb.stack_pointer)
    for i in 0..31:
        WRITE_CPU_REGISTER(R[i], pcb.registers[i])
```

#### Dry Run Trace Table: PCB Lifecycle

Consider process P1 being created, running, context-switched, and terminated:

| Time | Operation | PID | State | PC | SP | Priority | CPU Time | Registers |
|------|-----------|-----|-------|----|----|----------|----------|-----------|
| T0 | Create P1 | 1001 | NEW | 0 | 0 | 120 | 0 | zeros |
| T1 | Admit P1 | 1001 | READY | 0 | 0 | 120 | 0 | zeros |
| T2 | Dispatch P1 | 1001 | RUNNING | 0x400000 | 0xFFFF0000 | 120 | 0 | default |
| T3 | Execute instr 1 | 1001 | RUNNING | 0x400004 | 0xFFFF0000 | 120 | 5ms | R1=42 |
| T4 | Timer interrupt | 1001 | READY | 0x400008 | 0xFFFEFFF8 | 120 | 10ms | R1=42,R2=7 |
| T5 | Dispatch P1 | 1001 | RUNNING | 0x400008 | 0xFFFEFFF8 | 120 | 10ms | R1=42,R2=7 |
| T6 | P1 calls exit() | 1001 | TERMINATED | - | - | 120 | 50ms | - |
| T7 | Delete P1 | 1001 | - | - | - | - | - | - |

#### C++ Implementation: PCB and Process Table

```cpp
#include <iostream>
#include <vector>
#include <array>
#include <cstdint>
#include <list>

const int MAX_FILES = 256;
const int MAX_CHILDREN = 64;

struct PageTableEntry {
    uint64_t frame_number;
    bool present;
    bool writable;
};

struct FileDescriptor {
    bool in_use;
    uint32_t inode;
    uint64_t offset;
    uint32_t flags;
};

enum class ProcState { NEW, READY, RUNNING, WAITING, TERMINATED };

struct PCB {
    uint32_t pid;
    ProcState state;
    uint64_t program_counter;
    std::array<uint64_t, 32> registers;
    uint64_t stack_pointer;
    PageTableEntry page_table[1024];
    FileDescriptor file_table[MAX_FILES];
    int32_t priority;
    uint64_t cpu_time_used;
    uint32_t parent_pid;
    std::vector<uint32_t> children;
    PCB* next_ready;
};

class ProcessTable {
    std::list<PCB> table;
    uint32_t next_pid = 1;

public:
    PCB* create(uint32_t parent_pid = 0) {
        table.emplace_back();
        PCB* pcb = &table.back();
        pcb->pid = next_pid++;
        pcb->state = ProcState::NEW;
        pcb->program_counter = 0;
        pcb->registers.fill(0);
        pcb->stack_pointer = 0;
        pcb->priority = 120;
        pcb->cpu_time_used = 0;
        pcb->parent_pid = parent_pid;
        pcb->next_ready = nullptr;
        for (auto& fd : pcb->file_table) fd.in_use = false;
        std::cout << "PCB created: PID=" << pcb->pid << "\n";
        return pcb;
    }

    PCB* find(uint32_t pid) {
        for (auto& p : table)
            if (p.pid == pid) return &p;
        return nullptr;
    }

    void remove(uint32_t pid) {
        table.remove_if([pid](const PCB& p) { return p.pid == pid; });
        std::cout << "PCB removed: PID=" << pid << "\n";
    }

    void save_context(PCB* pcb, uint64_t pc, uint64_t sp,
                      const std::array<uint64_t,32>& regs) {
        pcb->program_counter = pc;
        pcb->stack_pointer = sp;
        pcb->registers = regs;
    }
};

int main() {
    ProcessTable pt;
    PCB* p1 = pt.create();
    PCB* p2 = pt.create(1);

    std::array<uint64_t, 32> regs = {0};
    regs[0] = 42; regs[1] = 100;
    pt.save_context(p1, 0x400010, 0xFFFEFFF8, regs);

    std::cout << "P1 PC: 0x" << std::hex << p1->program_counter << "\n";
    std::cout << "P1 R0: " << std::dec << p1->registers[0] << "\n";
    pt.remove(1);
    return 0;
}
```

#### Python Implementation: PCB

```python
from dataclasses import dataclass, field
from enum import Enum
from typing import List, Optional

class ProcState(Enum):
    NEW = 1
    READY = 2
    RUNNING = 3
    WAITING = 4
    TERMINATED = 5

@dataclass
class PageTableEntry:
    frame_number: int = 0
    present: bool = False
    writable: bool = False

@dataclass
class PCB:
    pid: int
    state: ProcState = ProcState.NEW
    program_counter: int = 0
    registers: List[int] = field(default_factory=lambda: [0] * 32)
    stack_pointer: int = 0
    priority: int = 120
    cpu_time_used: int = 0
    parent_pid: int = 0
    children: List[int] = field(default_factory=list)
    page_table: List[PageTableEntry] = field(default_factory=list)

class ProcessTable:
    def __init__(self):
        self.table: dict[int, PCB] = {}
        self.next_pid = 1

    def create(self, parent_pid=0) -> PCB:
        pcb = PCB(
            pid=self.next_pid,
            parent_pid=parent_pid,
            state=ProcState.NEW
        )
        self.table[self.next_pid] = pcb
        self.next_pid += 1
        print(f"PCB created: PID={pcb.pid}")
        return pcb

    def find(self, pid: int) -> Optional[PCB]:
        return self.table.get(pid)

    def remove(self, pid: int):
        if pid in self.table:
            del self.table[pid]
            print(f"PCB removed: PID={pid}")

    def save_context(self, pcb: PCB, pc: int, sp: int, regs: List[int]):
        pcb.program_counter = pc
        pcb.stack_pointer = sp
        pcb.registers = regs[:32]

pt = ProcessTable()
p1 = pt.create()
p2 = pt.create(parent_pid=1)
regs = [0] * 32
regs[0] = 42
pt.save_context(p1, 0x400010, 0xFFFEFFF8, regs)
print(f"P1 PC: {hex(p1.program_counter)}, R0: {p1.registers[0]}")
```

#### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why? |
|-----------|----------------|-----------------|------|
| PCB Creation | O(1) | O(1) | Allocate fixed-size struct, assign PID |
| Context Save | O(R) | O(1) | R = number of registers (typically 16-32) |
| Context Restore | O(R) | O(1) | Same as save; register count is constant |
| PCB Lookup by PID | O(1) | O(n) | Hash table on PID; n = active processes |
| PCB Deletion | O(1) | O(1) | Free kernel memory, recycle PID |

#### Advantages & Disadvantages

| Aspect | Advantages | Disadvantages |
|--------|-----------|---------------|
| Completeness | PCB holds ALL process metadata in one structure | Large PCB (several KB) consumes kernel memory |
| Speed | Lookup by PID is O(1) | Saving/restoring all registers on every switch costs cycles |
| Isolation | Each process has independent PCB and address space | Cannot share metadata between related processes |
| Debugging | /proc filesystem exposes PCB fields for monitoring | Hundreds of fields in task_struct increase complexity |

#### Edge Cases

| Edge Case | Description | Handling |
|-----------|-------------|----------|
| **PID Table Full** | Maximum number of processes reached | ENOMEM returned; wait for processes to exit and recycle PIDs |
| **Race Condition on Context Save** | Interrupt during PCB field updates | Disable interrupts during critical PCB sections |
| **Corrupted PCB** | Memory error damages kernel data structure | Kernel panics (cannot recover from corrupted scheduling data) |
| **Negative PID** | PID overflow on 16-bit systems | Linux defaults to 32768 max PID; configurable up to 4,194,304 |
| **Stale PCB Pointers** | PCB freed but pointer still referenced | Reference counting or RCU (Read-Copy-Update) in kernel |
### Context Switch


#### Real-World Analogy: Switching Workers on an Assembly Line

Imagine an assembly line where one worker installs engines and another installs wheels. When the whistle blows, Worker A must **save** their progress (which car, which bolt, torque wrench setting), step aside, and Worker B must **restore** their setup (tools, position, parts). The time spent swapping is lost production → no cars move during the changeover. Context switching is identical: the CPU saves one process's state and loads another's, doing zero productive work during the swap.

#### Definition

When the OS switches from one process to another, it must save the state of the currently running process and restore the saved state of the next process. This is called a **context switch**.

```
Process P0                    Scheduler                   Process P1
   |                             |                            |
   |         running             |                            |
   |<----------------------------+---------------------------->|
   |                      interrupt or system call            |
   |                             |                            |
   |                    save state of P0                      |
   |                    into PCB0                             |
   |                             |                            |
   |                    reload state of P1                    |
   |                    from PCB1                             |
   |                             |                            |
   |                             |          running           |
   |<----------------------------+---------------------------->|
```

**Context switch time is pure overhead** → the CPU does no useful work during a switch. Typical switch time is 1-10 microseconds (thousands of cycles). Modern systems may do hundreds or thousands of context switches per second.

#### Algorithm: Context Switch Steps

| Step | Action | Description |
|------|--------|-------------|
| 1 | Trap/Interrupt | Current process triggers timer interrupt, I/O interrupt, or syscall |
| 2 | Switch to Kernel Mode | CPU changes privilege level, uses kernel stack |
| 3 | Save User Registers | Push all general-purpose registers onto kernel stack (or PCB) |
| 4 | Save PC and SP | Save program counter and stack pointer into current PCB |
| 5 | Update State | Change current process state to READY (if preempted) or WAITING |
| 6 | Switch Stack Pointer | Point SP to kernel stack of next process |
| 7 | Load TLB/Page Table | Switch address space (flush TLB or load new page table base) |
| 8 | Load PC and SP | Restore program counter and stack pointer from next process's PCB |
| 9 | Restore User Registers | Pop all registers from kernel stack of next process |
| 10 | Return to User Mode | CPU switches to user mode, starts executing new process |

#### Pseudocode: Context Switch

```
function context_switch(next_pcb):
    # Save current process state
    current_pcb = get_current_process()
    
    current_pcb.program_counter = READ_SPECIAL_REGISTER(PC)
    current_pcb.stack_pointer = READ_SPECIAL_REGISTER(SP)
    for reg in GENERAL_PURPOSE_REGISTERS:
        current_pcb.registers[reg] = READ_SPECIAL_REGISTER(reg)
    
    current_pcb.state = READY  # or WAITING if I/O
    
    # Switch to next process
    set_current_process(next_pcb)
    
    SET_PAGE_TABLE(next_pcb.page_table)  # may flush TLB
    WRITE_SPECIAL_REGISTER(SP, next_pcb.stack_pointer)
    
    for reg in GENERAL_PURPOSE_REGISTERS:
        WRITE_SPECIAL_REGISTER(reg, next_pcb.registers[reg])
    
    WRITE_SPECIAL_REGISTER(PC, next_pcb.program_counter)
    # CPU now executes next_pcb's next instruction
```

#### Dry Run Trace Table: Context Switch (P0 -> P1)

| Step | Component | Action | PC (P0) | SP (P0) | R0 (P0) | PC (P1) | SP (P1) | R0 (P1) | New State |
|------|-----------|--------|---------|---------|---------|---------|---------|---------|-----------|
| 0 | Running | P0 executing | 0x4010 | 0xE000 | 42 | 0x5000 | 0xD000 | 99 | RUNNING |
| 1 | Timer | IRQ fires | 0x4010 | 0xE000 | 42 | - | - | - | RUNNING |
| 2 | CPU | Trap to kernel | 0x4010 | 0xE000 | 42 | - | - | - | - |
| 3 | Scheduler | Save P0 | 0x4010 | 0xE000 | 42 | - | - | - | (stored) |
| 4 | Scheduler | PCB0 updated | PCB0.PC=0x4010 | PCB0.SP=0xE000 | PCB0.R0=42 | - | - | - | READY |
| 5 | MMU | Load P1 page table | - | - | - | - | - | - | - |
| 6 | Scheduler | Restore P1 | - | - | - | from PCB1 | from PCB1 | from PCB1 | - |
| 7 | CPU | P1 executing | - | - | - | 0x5000 | 0xD000 | 99 | RUNNING |

Total switching time: Steps 1-7 = approximately 1-10 microseconds of pure overhead.

#### C++ Implementation: Context Switch Simulation

```cpp
#include <iostream>
#include <vector>
#include <chrono>
#include <thread>

struct Context {
    uint64_t pc;
    uint64_t sp;
    std::vector<uint64_t> registers;
    
    Context() : pc(0), sp(0), registers(32, 0) {}
};

class SimpleOS {
    Context pcb[2];
    int current_pid = 0;
    int switch_count = 0;
    
public:
    SimpleOS() {
        pcb[0].pc = 0x4000; pcb[0].sp = 0xE000;
        pcb[1].pc = 0x5000; pcb[1].sp = 0xD000;
        pcb[1].registers[0] = 99;
    }
    
    void context_switch() {
        int next_pid = 1 - current_pid;
        
        // Save current context
        pcb[current_pid].pc = current_pid == 0 ? 0x4010 : 0x5010;
        pcb[current_pid].sp = current_pid == 0 ? 0xDFFF : 0xCFFF;
        pcb[current_pid].registers[0] = 42;
        
        std::cout << "Saved P" << current_pid << ": PC=0x" << std::hex
                  << pcb[current_pid].pc << " SP=0x" << pcb[current_pid].sp << "\n";
        
        // Simulate TLB flush cost
        volatile int tlb_flush = 0;
        for (int i = 0; i < 100; i++) tlb_flush++;
        
        // Restore next context
        current_pid = next_pid;
        switch_count++;
        
        std::cout << "Restored P" << current_pid << ": PC=0x" << std::hex
                  << pcb[current_pid].pc << " SP=0x" << pcb[current_pid].sp
                  << " R0=" << std::dec << pcb[current_pid].registers[0] << "\n";
        std::cout << "Switch #" << switch_count << " complete\n";
    }
    
    void benchmark_switches(int n) {
        auto start = std::chrono::high_resolution_clock::now();
        for (int i = 0; i < n; i++) context_switch();
        auto end = std::chrono::high_resolution_clock::now();
        auto ns = std::chrono::duration_cast<std::chrono::nanoseconds>(end - start).count();
        std::cout << n << " context switches: " << ns << " ns avg "
                  << (ns / n) << " ns/switch\n";
    }
};

int main() {
    SimpleOS os;
    os.context_switch();
    os.benchmark_switches(10);
    return 0;
}
```

#### Python Implementation: Context Switch

```python
import time
from dataclasses import dataclass, field
from typing import List

@dataclass
class Context:
    pc: int = 0
    sp: int = 0
    registers: List[int] = field(default_factory=lambda: [0] * 32)

class SimpleOS:
    def __init__(self):
        self.pcb = [Context(pc=0x4000, sp=0xE000),
                    Context(pc=0x5000, sp=0xD000)]
        self.pcb[1].registers[0] = 99
        self.current_pid = 0
        self.switch_count = 0

    def context_switch(self):
        next_pid = 1 - self.current_pid

        # Save current
        self.pcb[self.current_pid].pc = 0x4010 if self.current_pid == 0 else 0x5010
        self.pcb[self.current_pid].sp = 0xDFFF if self.current_pid == 0 else 0xCFFF
        self.pcb[self.current_pid].registers[0] = 42

        print(f"Saved P{self.current_pid}: PC={hex(self.pcb[self.current_pid].pc)} "
              f"SP={hex(self.pcb[self.current_pid].sp)}")

        # TLB flush simulation
        for _ in range(100):
            pass

        # Restore next
        self.current_pid = next_pid
        self.switch_count += 1
        p = self.pcb[self.current_pid]
        print(f"Restored P{self.current_pid}: PC={hex(p.pc)} SP={hex(p.sp)} R0={p.registers[0]}")

    def benchmark(self, n):
        start = time.perf_counter_ns()
        for _ in range(n):
            self.context_switch()
        end = time.perf_counter_ns()
        avg = (end - start) / n
        print(f"{n} switches: {avg:.0f} ns avg per switch")

os = SimpleOS()
os.context_switch()
os.benchmark(100)
```

#### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why? |
|-----------|----------------|-----------------|------|
| Context Save | O(R) | O(1) | R = register count (16-32), constant per architecture |
| Context Restore | O(R) | O(1) | Same as save |
| TLB Flush | O(1) | O(1) | Single instruction on x86 (INVLPG or MOV CR3) |
| Full Switch | O(R) + microcode | O(1) | Register ops + MMU operations + cache effects |

**Why context switching is expensive:**
1. **Register save/restore**: 16-32 general-purpose + control registers copied (hundreds of cycles)
2. **TLB flush**: The Translation Lookaside Buffer must be invalidated, causing TLB misses for the next process (thousands of cycles)
3. **Cache pollution**: L1/L2/L3 cache contents from the old process are largely useless for the new one → the new process starts with a "cold" cache
4. **Pipeline drain**: The CPU pipeline must be flushed and refilled
5. **Kernel entry/exit**: Switching to kernel mode and back adds hundreds of cycles

#### Advantages & Disadvantages

| Aspect | Advantages | Disadvantages |
|--------|-----------|---------------|
| Isolation | Complete process isolation via separate address spaces | TLB flush + cache miss penalties are severe |
| Preemption | Fair CPU sharing between all processes | 1-10 microsec overhead per switch Ã— thousands per second = significant waste |
| Responsiveness | Low-latency response to I/O events | Threads (same address space) switch 2-10x faster |
| Portability | Well-defined hardware mechanism across architectures | Every architecture needs custom assembly for save/restore |

#### Edge Cases

| Edge Case | Description | Handling |
|-----------|-------------|----------|
| **TLB Thrashing** | High-frequency switches cause constant TLB misses, near-zero useful work | Increase time quantum; use larger page sizes (huge pages) |
| **Cache Cold Start** | New process finds L1/L2 cache empty, suffers hundreds of misses | Cache affinity scheduling (keep process on same core) |
| **Interrupt During Switch** | Nested interrupt occurs while saving/restoring state | Disable interrupts during critical context switch section |
| **Null PCB Pointer** | Scheduler tries to switch to non-existent process | Kernel BUG_ON check; panic if scheduling data is corrupted |
| **Overhead Dominance** | So many processes that 90%+ CPU time is context switching | Increase quantum or reduce process count; use hybrid threading |
### Process Creation


#### Real-World Analogy: Factory Duplicating a Machine

A factory has a CNC machine running Program X. To run Program Y without stopping X, the factory buys an identical CNC machine (the "child"), copies the setup, then loads Program Y onto it. The original machine continues running Program X. This is exactly the Unix `fork()` + `exec()` pattern → `fork()` duplicates the process, then `exec()` replaces the child's program. The two-step design allows the child to adjust settings (file descriptors, signals) before loading the new program.

#### Process Creation with fork() and exec()

Processes create other processes via system calls. On Unix: `fork()`. On Windows: `CreateProcess()`.

**fork()** creates an almost exact copy of the calling process. The child gets a copy of the parent's address space, file descriptors, and signal handlers. The difference: `fork()` returns the child's PID to the parent and 0 to the child.

**exec()** replaces the current process's memory with a new program. The PID does not change, but the text, data, heap, and stack are completely replaced.

#### Algorithm: fork() + exec() + wait()

| Step | Actor | Action | Result |
|------|-------|--------|--------|
| 1 | Parent | Calls `fork()` | System call traps to kernel |
| 2 | Kernel | Allocates new PCB and PID | Child process created |
| 3 | Kernel | Copies parent's address space (COW) | Child has same memory layout |
| 4 | Kernel | Copies file descriptors and signal handlers | Child inherits open files |
| 5 | Kernel | Returns from fork() | Parent gets child PID; child gets 0 |
| 6 | Parent | Continues execution OR calls `wait()` | Parent can do work in parallel |
| 7 | Child | Calls `execvp("/bin/ls", args)` | Child's memory replaced with `ls` binary |
| 8 | Child | Runs new program | `ls` executes and prints directory |
| 9 | Child | Calls `exit()` | Child enters ZOMBIE state |
| 10 | Parent | `wait()` returns child exit status | Zombie cleaned up; PID recycled |

#### Pseudocode: fork-exec-wait Pattern

```
function fork():
    new_pcb = allocate_pcb()
    new_pcb.pid = allocate_pid()
    new_pcb.state = READY
    new_pcb.parent_pid = current.pid
    
    # Copy-On-Write: share pages, mark read-only
    for each page in current.page_table:
        new_pcb.page_table[page] = current.page_table[page]
        set_page_read_only(current.page_table[page])
    
    copy_file_descriptors(current, new_pcb)
    copy_signal_handlers(current, new_pcb)
    
    add_to_ready_queue(new_pcb)
    return new_pcb.pid   # to parent
    # return 0            # to child (kernel does this via stack copy)

function exec(path, argv):
    load_program_from_disk(path)
    free_current_memory()
    setup_new_memory_layout()
    copy_argv_to_stack(argv)
    set_program_counter(entry_point)
    # PID unchanged, just memory replaced

function wait(pid):
    while child_process(pid).state != TERMINATED:
        sleep()  # block until child exit
    exit_status = child_process(pid).exit_code
    release_pcb(child_process(pid))
    return exit_status
```

#### Dry Run Trace Table: fork-exec-wait

| Time | Process | Action | PID | State | PC | Memory | Open FDs |
|------|---------|--------|-----|-------|----|--------|----------|
| T0 | bash | Running shell | 500 | RUNNING | 0x1000 | bash image | stdin,stdout,stderr |
| T1 | bash | User types `ls` | 500 | RUNNING | 0x2000 | bash image | stdin,stdout,stderr |
| T2 | bash | Calls fork() | 500 | RUNNING | trap | bash image | stdin,stdout,stderr |
| T3 | kernel | Creates child | 501 | NEW | 0x2000 | copy of bash | stdin,stdout,stderr |
| T4 | kernel | Marks pages COW | 501 | READY | 0x2000 | shares bash pages | stdin,stdout,stderr |
| T5 | bash | fork() returns 501 | 500 | RUNNING | 0x2004 | bash image | stdin,stdout,stderr |
| T6 | ls child | fork() returns 0 | 501 | RUNNING | 0x2004 | shares with bash | stdin,stdout,stderr |
| T7 | ls child | Calls exec(ls) | 501 | RUNNING | trap | - | stdin,stdout,stderr |
| T8 | kernel | Loads /bin/ls | 501 | RUNNING | 0x4000 | ls image | stdin,stdout,stderr |
| T9 | ls child | Runs ls binary | 501 | RUNNING | 0x4000 | ls image | stdin,stdout,stderr |
| T10 | ls child | ls completes | 501 | TERMINATED | - | ls image (zombie) | closed |
| T11 | bash | wait() returns 0 | 500 | RUNNING | 0x3000 | bash image | stdin,stdout,stderr |
| T12 | kernel | Reclaims zombie | 501 | - | - | freed | - |

#### C++ Implementation: Unix fork-exec-wait

```cpp
#include <iostream>
#include <sys/types.h>
#include <sys/wait.h>
#include <unistd.h>
#include <cstring>
#include <cerrno>

int main() {
    pid_t pid = fork();

    if (pid < 0) {
        std::cerr << "Fork failed: " << strerror(errno) << "\n";
        return 1;
    }

    if (pid == 0) {
        // CHILD: replace with new program
        std::cout << "Child PID=" << getpid()
                  << " Parent PID=" << getppid() << "\n";
        execlp("/bin/ls", "ls", "-l", nullptr);
        // Only reached if exec fails
        std::cerr << "Exec failed: " << strerror(errno) << "\n";
        _exit(127);
    } else {
        // PARENT: wait for child
        std::cout << "Parent: created child PID=" << pid << "\n";
        int status;
        waitpid(pid, &status, 0);
        if (WIFEXITED(status)) {
            std::cout << "Child exited with status "
                      << WEXITSTATUS(status) << "\n";
        }
    }
    return 0;
}
```

#### Python Implementation: Process Creation Simulation

```python
import os
import sys
import time

def fork_exec_wait():
    pid = os.fork()

    if pid < 0:
        print("Fork failed", file=sys.stderr)
        sys.exit(1)

    if pid == 0:
        # CHILD: Replace with new program
        print(f"Child PID={os.getpid()} Parent PID={os.getppid()}")
        try:
            os.execvp("/bin/ls", ["ls", "-l"])
        except FileNotFoundError:
            print("Exec failed", file=sys.stderr)
            os._exit(127)
    else:
        # PARENT: Wait for child
        print(f"Parent: created child PID={pid}")
        child_pid, exit_status = os.waitpid(pid, 0)
        if os.WIFEXITED(exit_status):
            print(f"Child exited with status {os.WEXITSTATUS(exit_status)}")

if __name__ == "__main__":
    fork_exec_wait()
```

#### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why? |
|-----------|----------------|-----------------|------|
| fork() | O(1) (COW) | O(address space) with COW optimization | Copy-On-Write shares pages; only copies when written |
| fork() without COW | O(n) | O(n) | Naive fork copies entire address space (n = process size) |
| exec() | O(m) | O(m) | Loads new program of size m from disk |
| wait() | O(1) | O(1) | Blocking syscall; scheduler picks another process |
| COW page fault | O(1) | O(1) | Copy single page on first write |

**Why Copy-On-Write matters**: Naive fork() copies all memory (could be GB). COW shares pages as read-only. When either process writes, a page fault copies that single page. Most `fork()` calls are immediately followed by `exec()`, so COW avoids copying pages that are about to be discarded. This makes fork() O(1) in the common case.

#### Advantages & Disadvantages

| Aspect | Advantages | Disadvantages |
|--------|-----------|---------------|
| fork()+exec() | Two-step design allows child setup before exec | Two syscalls instead of one |
| COW | Near-instant fork; only modified pages copied | Slightly higher page fault rate after fork |
| PID Semantics | PID unchanged across exec() | Process identity tied to PID; can't change |
| Inheritance | Child inherits env, FDs, signals | Inadvertent inheritance can cause bugs (e.g., dup FDs) |

#### Edge Cases

| Edge Case | Description | Handling |
|-----------|-------------|----------|
| **Fork Bomb** | Process recursively creates infinite children | `ulimit -u` limits user processes; system hits `max_pid` limit |
| **Exec Failure** | exec() can't find or load the binary | Child must handle error (os._exit(127) in Unix convention) |
| **COW Race** | Both parent and child write to same page simultaneously | Hardware MMU serializes page faults; kernel copies once |
| **File Descriptor Leak** | Child inherits open FDs it doesn't need | Close unnecessary FDs in child before exec(); or set FD_CLOEXEC |
| **vfork() Blocking** | vfork() blocks parent until child exec()/exit() | Parent cannot run until child releases address space |

---

### Process Termination


#### Real-World Analogy: Employee Resignation

An employee resigns. They must: finish their current task or hand it off, return company equipment (laptop, badge), close outstanding accounts, and submit final paperwork. HR records the termination, releases their desk, and notifies relevant parties. If the manager never acknowledges the exit paperwork, the employee stays in the system as a "ghost" (zombie). If the manager leaves before the employee, a department head (init) handles the offboarding.

#### Termination Events

A process terminates when:
- It calls `exit()` (normal termination)
- It returns from `main()` (implicit exit)
- It receives a signal it cannot handle (e.g., SIGKILL)
- It causes an unrecoverable error (segmentation fault)

#### Algorithm: Process Termination

| Step | Actor | Action |
|------|-------|--------|
| 1 | Process | Calls `exit()` or triggers fatal error |
| 2 | Kernel | Flushes I/O buffers, closes open files |
| 3 | Kernel | Releases allocated memory (heap, stack) |
| 4 | Kernel | Closes all file descriptors |
| 5 | Kernel | Sends SIGCHLD signal to parent |
| 6 | Kernel | Sets process state to TERMINATED (zombie) |
| 7 | Kernel | Stores exit status in PCB |
| 8 | Parent | Receives SIGCHLD (or blocks on wait()) |
| 9 | Parent | Calls `wait()` / `waitpid()` to read exit status |
| 10 | Kernel | Removes PCB, recycles PID |

#### Pseudocode: Process Termination

```
function exit(exit_code):
    # Step 1: Cleanup
    for fd in current.file_table:
        if fd.in_use:
            close_file(fd)
    
    release_memory(current)
    current.exit_code = exit_code
    current.state = TERMINATED
    
    # Step 2: Notify parent
    parent = get_pcb(current.parent_pid)
    parent.signal_queue.add(SIGCHLD)
    
    # Step 3: Reparent children
    for child in current.children:
        child.parent_pid = INIT_PID
    
    # Step 4: Orphan cleanup by init
    schedule()  # Let init process take over

function waitpid(pid, options):
    child = find_child(pid)
    if child.state != TERMINATED:
        if options & WNOHANG:
            return 0  # non-blocking: no status yet
        else:
            block_until_state(child, TERMINATED)
    
    exit_code = child.exit_code
    release_pcb(child)  # Free zombie
    return exit_code
```

#### Dry Run Trace Table: Zombie Creation and Cleanup

| Time | Parent (P500) | Child (P501) | Zombie? | Action |
|------|--------------|-------------|---------|--------|
| T0 | RUNNING | - | No | Parent running shell |
| T1 | RUNNING | NEW | No | fork() called |
| T2 | READY | RUNNING | No | Child dispatched |
| T3 | READY | RUNNING | No | Child does work |
| T4 | READY | TERMINATED | YES | Child calls exit() → zombie created |
| T5 | RUNNING | TERMINATED | YES | Parent gets CPU, doesn't call wait() yet |
| T6 | RUNNING | TERMINATED | YES | Parent doing other work |
| T7 | RUNNING | (cleaned) | NO | Parent finally calls waitpid() |
| T8 | RUNNING | - | NO | Child's PID and PCB released |

#### C++ Implementation: Zombie and Orphan

```cpp
#include <iostream>
#include <sys/types.h>
#include <sys/wait.h>
#include <unistd.h>

// Zombie demo: parent doesn't wait for child
void zombie_demo() {
    pid_t pid = fork();
    if (pid == 0) {
        std::cout << "Child PID=" << getpid() << " exiting\n";
        _exit(0);
    } else {
        std::cout << "Parent sleeping... check zombie via 'ps'\n";
        sleep(10);  // During this time, child is a zombie
        int status;
        waitpid(pid, &status, 0);  // Clean up zombie
        std::cout << "Zombie cleaned. Child status: "
                  << WEXITSTATUS(status) << "\n";
    }
}

// Orphan demo: parent exits before child
void orphan_demo() {
    pid_t pid = fork();
    if (pid == 0) {
        sleep(2);
        std::cout << "Child PID=" << getpid()
                  << " PPID=" << getppid() << "\n";
        // PPID should be 1 (init) after parent exits
        _exit(0);
    } else {
        std::cout << "Parent exiting. Child becomes orphan.\n";
        _exit(0);
    }
}

int main() {
    std::cout << "=== Zombie Demo ===\n";
    zombie_demo();
    // Orphan demo disabled by default; uncomment to test
    // std::cout << "\n=== Orphan Demo ===\n";
    // orphan_demo();
    return 0;
}
```

#### Python Implementation: Zombie and Orphan

```python
import os
import time
import sys

def zombie_demo():
    pid = os.fork()
    if pid == 0:
        print(f"Child PID={os.getpid()} exiting")
        os._exit(0)
    else:
        print(f"Parent sleeping; child is zombie for 10s")
        time.sleep(5)
        # Check for zombie with: ps aux | grep Z
        input("Check zombie status, then press Enter...")
        child_pid, status = os.waitpid(pid, 0)
        print(f"Zombie cleaned. Exit status: {os.WEXITSTATUS(status)}")

def orphan_demo():
    pid = os.fork()
    if pid == 0:
        time.sleep(2)
        print(f"Child PID={os.getpid()} PPID={os.getppid()}")
        os._exit(0)
    else:
        print(f"Parent PID={os.getpid()} exiting now")
        os._exit(0)

if __name__ == "__main__":
    # zombie_demo()
    # orphan_demo()
    print("Run zombie_demo() or orphan_demo() individually")
```

#### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why? |
|-----------|----------------|-----------------|------|
| exit() | O(F + M) | O(1) | F = open files to close, M = memory regions to release |
| PCB Reclamation | O(1) | O(1) | Free single kernel struct; PID added to free list |
| Signal Delivery | O(1) | O(1) | Add SIGCHLD flag to parent's pending signal set |
| Orphan Reparenting | O(C) | O(1) | C = number of child processes; reparent each to init |

#### Advantages & Disadvantages

| Aspect | Advantages | Disadvantages |
|--------|-----------|---------------|
| Zombie Design | Parent can read exit status at its convenience | PCB consumed until wait() called; zombie leaks possible |
| Signal Notification | SIGCHLD enables async cleanup in parent | Parent must handle signal properly or ignore will cause zombie leak |
| Orphan Reparenting | Guarantees no unparented process forever | init (PID 1) must be designed to never exit |
| Resource Cleanup | OS guarantees resource reclamation on exit | Cleanup can be slow if many resources to release |

#### Edge Cases

| Edge Case | Description | Handling |
|-----------|-------------|----------|
| **Zombie Flood** | Thousands of zombies accumulate; PID table full | Parent must call wait() in a loop or use SIGCHLD handler |
| **Double Wait** | Parent calls wait() twice for same child | Second call returns error ECHILD (no such child) |
| **Orphan Chain** | Grandparent dies before parent; child inherits chain | All orphans eventually adopted by init (PID 1) |
| **Init as Parent** | PID 1 exits (should never happen) | Kernel panic → no init process means no orphan cleanup |
| **Killed Before Cleanup** | Parent killed before calling wait() | init inherits all children of killed parent and cleans them |
### Interprocess Communication (IPC)


#### Real-World Analogy: Two Coworkers Communicating

Alice and Bob work in the same office but different rooms. They can communicate in two ways:

1. **Shared whiteboard**: Alice writes on a whiteboard in the hallway; Bob reads it. Fast → no waiting for a messenger. But they need a protocol (who erases, who writes, when to read). If Alice writes while Bob reads, Bob sees partial data (**shared memory** with synchronization needed).

2. **Messenger**: Alice writes a note and sends it through interoffice mail. Bob receives the sealed envelope. Slower (mailroom involvement) but safe → Bob reads a complete message when ready, and this works even if Bob is in another city (**message passing**).

#### Independent vs Cooperating Processes

Processes are **independent** if they cannot affect or be affected by other processes. They are **cooperating** if they can interact. Reasons for cooperation:
- **Information sharing**: Multiple users accessing the same database
- **Computation speedup**: Breaking a task into sub-tasks running in parallel
- **Modularity**: Separate components for separate functions
- **Convenience**: A user running multiple tasks simultaneously

#### Algorithm: IPC Decision Flow

| Step | Question | Yes | No |
|------|----------|-----|-----|
| 1 | Do processes share physical memory? | Go to step 2 | Use message passing |
| 2 | Is maximum throughput critical? | Use shared memory | Go to step 3 |
| 3 | Is synchronization complexity acceptable? | Use shared memory | Use message passing |
| 4 | Does IPC need to work across network? | Use sockets/message passing | Go to step 2 |

---

### Shared Memory


#### Real-World Analogy: Whiteboard in Shared Office

A team shares a whiteboard. Anyone can write data, and everyone else sees it instantly → zero delay. But if two people write simultaneously, the result is illegible. They need a rule: only one person writes at a time (mutex), and a reader must wait until the writer finishes (synchronization). Shared memory works the same way → it's the fastest IPC because data isn't copied through the kernel after setup, but synchronization primitives (mutexes, semaphores) are mandatory.

#### Definition

A region of memory is shared between processes. Once mapped, data written by one process is immediately visible to others. This is the fastest IPC method (no kernel involvement after setup).

#### Algorithm: Shared Memory IPC

| Step | Action | Actor |
|------|--------|-------|
| 1 | Create shared memory segment | Producer / Consumer |
| 2 | Attach segment to process address space | Both processes |
| 3 | Write data to shared region | Producer |
| 4 | Synchronize (semaphore/mutex) | Both |
| 5 | Read data from shared region | Consumer |
| 6 | Detach shared segment | Both |
| 7 | Remove shared segment | One process |

#### Pseudocode: Shared Memory Producer-Consumer

```
SHARED struct {
    int buffer[BUFFER_SIZE];
    int count;
    sem_t mutex;
    sem_t empty;
    sem_t full;
} shared_data;

function producer():
    attach_shared_memory(SHM_KEY)
    while True:
        item = produce_item()
        sem_wait(shared.empty)    # Wait if buffer full
        sem_wait(shared.mutex)    # Exclusive access
        shared.buffer[shared.count] = item
        shared.count++
        sem_post(shared.mutex)    # Release lock
        sem_post(shared.full)     # Signal consumer

function consumer():
    attach_shared_memory(SHM_KEY)
    while True:
        sem_wait(shared.full)     # Wait if buffer empty
        sem_wait(shared.mutex)    # Exclusive access
        item = shared.buffer[--shared.count]
        sem_post(shared.mutex)    # Release lock
        sem_post(shared.empty)    # Signal producer
        consume_item(item)
```

#### Dry Run Trace Table: Shared Memory Producer-Consumer

| Step | Actor | Action | Buffer | count | mutex | empty | full |
|------|-------|--------|--------|-------|-------|-------|------|
| 0 | Init | Create segment | [ ] | 0 | 1 | BUFSIZE | 0 |
| 1 | Producer | produce_item=42 | [ ] | 0 | 1 | BUFSIZE | 0 |
| 2 | Producer | sem_wait(empty) | [ ] | 0 | 1 | BUFSIZE-1 | 0 |
| 3 | Producer | sem_wait(mutex) | [ ] | 0 | 0 | BUFSIZE-1 | 0 |
| 4 | Producer | write 42 | [42] | 1 | 0 | BUFSIZE-1 | 0 |
| 5 | Producer | sem_post(mutex) | [42] | 1 | 1 | BUFSIZE-1 | 0 |
| 6 | Producer | sem_post(full) | [42] | 1 | 1 | BUFSIZE-1 | 1 |
| 7 | Consumer | sem_wait(full) | [42] | 1 | 1 | BUFSIZE-1 | 0 |
| 8 | Consumer | sem_wait(mutex) | [42] | 1 | 0 | BUFSIZE-1 | 0 |
| 9 | Consumer | read 42 | [] | 0 | 0 | BUFSIZE-1 | 0 |
| 10 | Consumer | sem_post(mutex) | [] | 0 | 1 | BUFSIZE-1 | 0 |
| 11 | Consumer | sem_post(empty) | [] | 0 | 1 | BUFSIZE | 0 |

#### C++ Implementation: Shared Memory (POSIX)

```cpp
#include <iostream>
#include <sys/mman.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>
#include <cstring>
#include <semaphore.h>

const char* SHM_NAME = "/myshm";
const int SHM_SIZE = 4096;

struct SharedBuffer {
    sem_t mutex;
    char data[1024];
    int ready;
};

int main(int argc, char* argv[]) {
    if (argc < 2) {
        std::cerr << "Usage: " << argv[0] << " (producer|consumer)\n";
        return 1;
    }

    bool is_producer = (strcmp(argv[1], "producer") == 0);

    int fd = shm_open(SHM_NAME, O_CREAT | O_RDWR, 0666);
    ftruncate(fd, SHM_SIZE);
    auto* buf = (SharedBuffer*)mmap(nullptr, SHM_SIZE,
                   PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
    close(fd);

    if (is_producer) {
        sem_init(&buf->mutex, 1, 1);
        buf->ready = 0;

        sem_wait(&buf->mutex);
        strcpy(buf->data, "Hello from producer process!");
        buf->ready = 1;
        sem_post(&buf->mutex);

        std::cout << "Producer wrote: " << buf->data << "\n";
    } else {
        // Consumer: read when ready
        while (!buf->ready) usleep(1000);

        sem_wait(&buf->mutex);
        std::cout << "Consumer read: " << buf->data << "\n";
        sem_post(&buf->mutex);
    }

    munmap(buf, SHM_SIZE);
    if (is_producer) shm_unlink(SHM_NAME);
    return 0;
}
```

#### Python Implementation: Shared Memory

```python
import mmap
import struct
import time
import os

SHM_SIZE = 4096

def producer():
    fd = os.open("/dev/shm/myshm", os.O_CREAT | os.O_RDWR, 0o666)
    os.ftruncate(fd, SHM_SIZE)
    mm = mmap.mmap(fd, SHM_SIZE)
    os.close(fd)

    message = b"Hello from producer!"
    mm[0:4] = struct.pack("I", len(message))
    mm[4:4+len(message)] = message
    mm[4+len(message)] = 1  # ready flag
    print(f"Producer wrote: {message.decode()}")
    mm.close()

def consumer():
    fd = os.open("/dev/shm/myshm", os.O_RDWR, 0o666)
    mm = mmap.mmap(fd, SHM_SIZE)
    os.close(fd)

    while mm[4 + struct.unpack("I", mm[0:4])[0]] != 1:
        time.sleep(0.01)

    msg_len = struct.unpack("I", mm[0:4])[0]
    msg = mm[4:4+msg_len].decode()
    print(f"Consumer read: {msg}")
    mm.close()
    os.remove("/dev/shm/myshm")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == "consumer":
        consumer()
    elif len(sys.argv) > 1 and sys.argv[1] == "prod":
        producer()
    else:
        print("Usage: py shm.py (prod|consumer)")
```

#### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why? |
|-----------|----------------|-----------------|------|
| Shared Memory Create | O(1) | O(size) | Kernel allocates pages for the segment |
| Memory Attach | O(1) | O(1) | Maps shared pages into process page table |
| Data Write (after setup) | O(1) | O(1) | Direct memory access → no kernel involved |
| Data Read (after setup) | O(1) | O(1) | Direct memory read |
| Semaphore Lock/Unlock | O(1) | O(1) | Atomic test-and-set in user space (futex) |
| Memory Detach | O(1) | O(1) | Unmaps pages from process page table |

**Why shared memory is fastest**: After initial setup, reads and writes are plain memory operations (load/store). No system calls, no kernel copies, no context switches. The data path is: Process A writes to address X -> hardware writes to physical page -> Process B reads from mapped address X -> same physical page returns data. This is 10-100x faster than message passing for large data transfers.

#### Advantages & Disadvantages

| Aspect | Advantages | Disadvantages |
|--------|-----------|---------------|
| Speed | Fastest IPC → no kernel after setup | Requires synchronization (mutex/semaphore) |
| Data Volume | Efficient for large data transfers (MB+) | Shared region size fixed at creation |
| Zero Copy | No data copying between processes | Page-table manipulation overhead on attach/detach |
| Simplicity | Map once, read/write directly | Race conditions if synchronization forgotten |

#### Edge Cases

| Edge Case | Description | Handling |
|-----------|-------------|----------|
| **Race Condition** | Two processes write simultaneously | Must use mutex/semaphore for all writes |
| **Deadlock** | Producer waiting for empty, consumer waiting for full | Use semaphore ordering to prevent circular wait |
| **Memory Corruption** | One process writes past buffer bounds | No built-in protection → use fixed-size or guard pages |
| **Orphaned Segment** | Process crashes after creating shared memory | shm_unlink() or ipcrm to remove; survives reboot |
| **Stale Data** | Consumer reads data that producer hasn't finished writing | Use synchronization (ready flag, mutex) before reading |
### Message Passing


#### Real-World Analogy: Postal Mail System

Alice writes a letter, puts it in an envelope, addresses it to Bob, and drops it in a mailbox. The postal service (kernel) picks up the letter, transports it (copies data), and delivers it to Bob's mailbox. Bob retrieves the letter when ready. This works even if Alice is in New York and Bob is in London (distributed). The postal service handles buffering, routing, and delivery guarantees. The tradeoff: mail is slower than walking to a shared whiteboard, but it's safer and works across cities.

#### Definition

Processes communicate by exchanging messages through the kernel. Messages are sent and received via system calls. No shared address space is needed → making this suitable for distributed systems.

#### Algorithm: Message Passing (POSIX Message Queues)

| Step | Actor | Action |
|------|-------|--------|
| 1 | Both | Create or open message queue with mq_open() |
| 2 | Sender | Prepare message buffer with type and data |
| 3 | Sender | Call mq_send() → kernel copies message into kernel buffer |
| 4 | Kernel | Stores message in queue (may block if queue full) |
| 5 | Receiver | Call mq_receive() → kernel copies message to user buffer |
| 6 | Receiver | Process the received message |
| 7 | Both | Close queue with mq_close() |

#### Pseudocode: Message Passing

```
SENDER:
    mqd = mq_open("/myqueue", O_CREAT | O_WRONLY, 0666, NULL)
    message.type = MSG_TYPE_DATA
    message.data = "Hello from sender"
    mq_send(mqd, &message, sizeof(message), priority=0)
    mq_close(mqd)

RECEIVER:
    mqd = mq_open("/myqueue", O_RDONLY)
    mq_receive(mqd, &buffer, buffer_size, &priority)
    print("Received:", buffer.data)
    mq_close(mqd)
```

#### Dry Run Trace Table: Message Passing

| Step | Actor | Action | Queue State | Sender Buffer | Receiver Buffer |
|------|-------|--------|-------------|---------------|-----------------|
| 0 | - | Queue created | empty | - | - |
| 1 | Sender | Prepare message "Hello" | empty | "Hello" | - |
| 2 | Sender | mq_send() | ["Hello"] | "Hello" | - |
| 3 | Kernel | Copy to kernel | ["Hello"] | (copied) | - |
| 4 | Sender | Continues | ["Hello"] | - | - |
| 5 | Receiver | mq_receive() | empty | - | "Hello" |
| 6 | Kernel | Copy to user | empty | - | (copied) |
| 7 | Receiver | Print message | empty | - | "Hello" -> printed |

#### C++ Implementation: POSIX Message Queue

```cpp
#include <iostream>
#include <fcntl.h>
#include <sys/stat.h>
#include <mqueue.h>
#include <cstring>
#include <cstdlib>

const char* QUEUE_NAME = "/myipcqueue";
const size_t MAX_MSG_SIZE = 256;

struct Message {
    long type;
    char data[248];
};

int main(int argc, char* argv[]) {
    if (argc < 2) {
        std::cerr << "Usage: " << argv[0] << " (sender|receiver)\n";
        return 1;
    }

    bool is_sender = (strcmp(argv[1], "sender") == 0);

    struct mq_attr attr;
    attr.mq_flags = 0;
    attr.mq_maxmsg = 10;
    attr.mq_msgsize = MAX_MSG_SIZE;
    attr.mq_curmsgs = 0;

    mqd_t mqd = mq_open(QUEUE_NAME, O_CREAT | O_RDWR, 0666, &attr);

    if (is_sender) {
        Message msg;
        msg.type = 1;
        strcpy(msg.data, "Hello via message queue!");
        mq_send(mqd, (char*)&msg, sizeof(Message), 0);
        std::cout << "Sender sent: " << msg.data << "\n";
    } else {
        Message msg;
        unsigned int priority;
        ssize_t n = mq_receive(mqd, (char*)&msg, MAX_MSG_SIZE, &priority);
        if (n >= 0) {
            std::cout << "Receiver got: " << msg.data << "\n";
        }
    }

    mq_close(mqd);
    if (is_sender) mq_unlink(QUEUE_NAME);
    return 0;
}
```

#### Python Implementation: Message Queue

```python
import posix_ipc
import sys
import time

QUEUE_NAME = "/myipcqueue"

def sender():
    mq = posix_ipc.MessageQueue(QUEUE_NAME,
                                posix_ipc.O_CREAT | posix_ipc.O_RDWR)
    mq.send(b"Hello via message queue!")
    print("Sender sent the message")
    mq.close()

def receiver():
    mq = posix_ipc.MessageQueue(QUEUE_NAME, posix_ipc.O_RDWR)
    message, priority = mq.receive()
    print(f"Receiver got: {message.decode()}")
    mq.close()
    posix_ipc.unlink_message_queue(QUEUE_NAME)

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "sender":
        sender()
    elif len(sys.argv) > 1 and sys.argv[1] == "receiver":
        time.sleep(0.5)
        receiver()
    else:
        print("Usage: py msg.py (sender|receiver)")
```

#### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why? |
|-----------|----------------|-----------------|------|
| mq_open() | O(1) | O(1) | Opens kernel object by name |
| mq_send() | O(n) | O(1) | Must copy n-byte message from user to kernel space |
| mq_receive() | O(n) | O(1) | Copies n-byte message from kernel to user space |
| Blocking Send | O(1) if queue not full | O(m) total | Blocks process; O(m) for m messages in queue |
| Blocking Receive | O(1) if queue not empty | O(1) | Wakes only when a message is available |

**Why message passing is slower than shared memory**: Every send/receive requires:
1. A system call (user->kernel mode switch)
2. Copy data from user buffer to kernel buffer (for send)
3. Copy data from kernel buffer to user buffer (for receive)
Each copy traverses the memory bus. For large data (MB+), this overhead dominates. Shared memory avoids both system calls and data copies after initialization.

#### Advantages & Disadvantages

| Aspect | Advantages | Disadvantages |
|--------|-----------|---------------|
| Safety | Kernel isolates messages; no shared state corruption | Kernel copies data twice → slower |
| Distributed | Works across network (sockets, RPC) | Requires marshalling/serialization for complex data |
| Synchronization | Kernel handles buffering; optional blocking | Fixed queue size; full queue blocks sender |
| Structure | Message boundaries preserved | Fixed message size limits; variable-size overhead |

#### Edge Cases

| Edge Case | Description | Handling |
|-----------|-------------|----------|
| **Queue Full** | Sender tries to send to full queue | Block (default); or use O_NONBLOCK for EAGAIN |
| **Queue Empty** | Receiver tries to receive from empty queue | Block (default); or use O_NONBLOCK for EAGAIN |
| **Message Overflow** | Message exceeds max size | mq_send() fails with EMSGSIZE |
| **Orphaned Queue** | No processes have queue open | Queue persists until mq_unlink(); survives in kernel |
| **Priority Inversion** | Low-priority messages block high-priority ones | Use message priorities; kernel delivers highest priority first |

---

### Pipes


#### Real-World Analogy: Water Pipe Connecting Two Tanks

A pipe connects two water tanks → water flows from one end (write) to the other (read). Data flows in one direction only (half-duplex). If you fill the pipe completely, the sender must wait until the receiver drains some water. If the receiver drains faster than the sender fills, the receiver waits. In Unix, **anonymous pipes** connect parent-child processes; **named pipes (FIFOs)** connect any processes.

#### Definition

A **pipe** is a unidirectional communication channel between processes. Data written to the write end can be read from the read end. Anonymous pipes (`pipe()`) work between related processes. Named pipes (`mkfifo()`) work between any processes and persist beyond process lifetimes.

#### Algorithm: Anonymous Pipe

| Step | Actor | Action |
|------|-------|--------|
| 1 | Parent | Call `pipe(int fd[2])` → fd[0] for read, fd[1] for write |
| 2 | Parent | Call `fork()` → child inherits both ends |
| 3 | Parent | Close unused read end `close(fd[0])` |
| 4 | Child | Close unused write end `close(fd[1])` |
| 5 | Parent | Write data to fd[1] → data flows into kernel buffer |
| 6 | Child | Read data from fd[0] → data flows out of kernel buffer |
| 7 | Parent | Close fd[1] when done → sends EOF to child |
| 8 | Child | Close fd[0] → pipe fully closed |

#### Pseudocode: Pipe Communication

```
PIPE:
    fd = [read_end, write_end]
    pipe(fd)          # Create pipe

PARENT:
    close(fd[0])      # Close unused read end
    write(fd[1], "Hello child", 12)
    close(fd[1])      # Signal EOF
    wait(NULL)         # Wait for child

CHILD:
    close(fd[1])      # Close unused write end
    while read(fd[0], buffer, 256) > 0:
        print(buffer)  # Process data
    close(fd[0])       # Done
```

#### Dry Run Trace Table: Pipe Data Flow

| Step | Actor | Action | Pipe Buffer | fd[0] (read) | fd[1] (write) |
|------|-------|--------|-------------|-------------|--------------|
| 1 | Parent | pipe(fd) creates [3,4] | empty | 3 (open) | 4 (open) |
| 2 | Parent | fork(); child gets [3,4] | empty | 3 (open) | 4 (open) |
| 3 | Parent | close(3) → parent reads nothing | empty | 3 (closed) | 4 (open) |
| 4 | Child | close(4) → child writes nothing | empty | 3 (open) | 4 (closed) |
| 5 | Parent | write(4, "Hello") → 5 bytes | "Hello" (5/65536) | closed | 4 (open) |
| 6 | Child | read(3, buf, 256) → reads "Hello" | empty | 3 (open) | closed |
| 7 | Parent | close(4) → write end closed | empty | closed | 4 (closed) |
| 8 | Child | read(3) returns 0 (EOF) | empty | 3 (open) | closed |
| 9 | Child | close(3) | empty | 3 (closed) | 4 (closed) |

#### C++ Implementation: Anonymous Pipe

```cpp
#include <iostream>
#include <unistd.h>
#include <sys/wait.h>
#include <cstring>

int main() {
    int fd[2];
    if (pipe(fd) == -1) {
        std::cerr << "Pipe failed\n";
        return 1;
    }

    pid_t pid = fork();
    if (pid < 0) {
        std::cerr << "Fork failed\n";
        return 1;
    }

    if (pid == 0) {
        // CHILD: read from pipe, write to stdout
        close(fd[1]);  // Close unused write end
        char buffer[256];
        ssize_t n;
        while ((n = read(fd[0], buffer, sizeof(buffer) - 1)) > 0) {
            buffer[n] = '\0';
            std::cout << "Child received: " << buffer;
        }
        close(fd[0]);
    } else {
        // PARENT: write to pipe
        close(fd[0]);  // Close unused read end
        const char* msg = "Hello from parent!\n";
        write(fd[1], msg, strlen(msg));
        close(fd[1]);  // Signal EOF
        wait(nullptr);
    }
    return 0;
}
```

#### Python Implementation: Pipe

```python
import os
import sys

def pipe_demo():
    r_fd, w_fd = os.pipe()

    pid = os.fork()
    if pid < 0:
        print("Fork failed", file=sys.stderr)
        sys.exit(1)

    if pid == 0:
        # CHILD: read from pipe
        os.close(w_fd)
        data = os.read(r_fd, 256).decode()
        print(f"Child received: {data}")
        os.close(r_fd)
        os._exit(0)
    else:
        # PARENT: write to pipe
        os.close(r_fd)
        os.write(w_fd, b"Hello from parent!\n")
        os.close(w_fd)
        os.waitpid(pid, 0)

if __name__ == "__main__":
    pipe_demo()
```

#### Named Pipe (FIFO) C++ Implementation

```cpp
#include <iostream>
#include <fcntl.h>
#include <sys/stat.h>
#include <unistd.h>
#include <cstring>

const char* FIFO_PATH = "/tmp/myfifo";

int main(int argc, char* argv[]) {
    if (argc < 2) {
        std::cerr << "Usage: " << argv[0] << " (writer|reader)\n";
        return 1;
    }

    // Create FIFO (once)
    mkfifo(FIFO_PATH, 0666);

    if (strcmp(argv[1], "writer") == 0) {
        int fd = open(FIFO_PATH, O_WRONLY);
        const char* msg = "Hello via FIFO!";
        write(fd, msg, strlen(msg) + 1);
        close(fd);
        std::cout << "Writer sent: " << msg << "\n";
    } else {
        int fd = open(FIFO_PATH, O_RDONLY);
        char buffer[256];
        read(fd, buffer, sizeof(buffer));
        std::cout << "Reader got: " << buffer << "\n";
        close(fd);
        unlink(FIFO_PATH);
    }
    return 0;
}
```

#### Complexity Analysis

| Operation | Time Complexity | Space Complexity | Why? |
|-----------|----------------|-----------------|------|
| pipe() | O(1) | O(1) | Creates kernel buffer and two file descriptors |
| write() to pipe | O(1) for small writes | O(buffer_size) | Kernel copies data into buffer; blocks if full |
| read() from pipe | O(1) for small reads | O(1) | Kernel copies data from buffer; blocks if empty |
| FIFO open(write) | O(1) | O(1) | Blocks until reader opens; or use O_NONBLOCK |
| FIFO open(read) | O(1) | O(1) | Blocks until writer opens; or use O_NONBLOCK |

#### Advantages & Disadvantages

| Aspect | Advantages | Disadvantages |
|--------|-----------|---------------|
| Simplicity | Minimal API (read/write/close) | Unidirectional only (need two pipes for bidirectional) |
| Efficiency | Kernel buffer minimizes context switches | Fixed buffer size (65536 bytes on Linux) |
| Named (FIFO) | Works between unrelated processes | FIFO pathname persists on filesystem |
| Integration | Works with select/poll/epoll | Cannot seek (stream-based, not message-based) |

#### Edge Cases

| Edge Case | Description | Handling |
|-----------|-------------|----------|
| **Broken Pipe** | Reader closes pipe; writer tries to write | SIGPIPE signal delivered; write returns EPIPE |
| **Pipe Full / Blocked Writer** | Buffer full (65536 bytes); writer blocks | Use O_NONBLOCK on write fd; write returns EAGAIN |
| **Empty Pipe / Blocked Reader** | No data; reader blocks | Use O_NONBLOCK on read fd; read returns EAGAIN |
| **Deadlock** | Two pipes; each process waits for the other | Use proper protocol design; avoid circular dependencies |
| **FIFO Reader Misses Data** | FIFO unlinked while reader opens | Reader blocks until writer opens; cannot open for reading if no writer |
### Process vs Thread: Comprehensive Comparison


#### Real-World Analogy: Factory vs Assembly Line Workers

A **process** is like an entire factory → its own building, tools, raw materials, and workers. A **thread** is like a single worker on an assembly line within that factory. Multiple workers (threads) in the same factory share the building, tools, and inventory (memory). They can hand each other parts instantly. But if one worker makes a mistake (crash), the entire factory may shut down. Switching to a different factory is expensive (bring all new tools). Switching to a different worker on the same line is cheap.

#### Comparison Table

| Feature | Process | Thread |
|---------|---------|--------|
| **Address Space** | Separate address space per process | Shares address space with all threads in same process |
| **Creation Time** | Slow (fork + exec, PCB allocation, memory copy via COW) | Fast (clone with CLONE_VM, just new stack + TCB) |
| **Context Switch Time** | 1-10 microseconds (TLB flush + cache cold) | 0.1-1 microseconds (no TLB flush, cache warm) |
| **IPC** | Requires kernel IPC (shared memory, pipes, sockets) | Direct memory access (shared heap; just need mutex) |
| **Crash Isolation** | High → one process crash doesn't affect others | Low → one thread crash (e.g., SIGSEGV) kills all threads |
| **Resource Overhead** | High → full PCB, page tables, file descriptor table | Low → just TCB, stack, and thread-local storage |
| **Memory Overhead** | Each process has own text/data/heap/stack | Threads share text/data/heap; each has private stack |
| **Synchronization** | Kernel-level IPC needed (slower) | User-level synchronization (mutex, spinlock) is faster |
| **Programmer Complexity** | Lower → no shared state bugs | Higher → race conditions, deadlocks, data races |
| **Scheduling** | Kernel schedules every process independently | Kernel schedules threads (or user-level thread scheduler) |
| **Max Instances** | Limited by PID table + memory (thousands) | Limited by memory + stack size (tens of thousands) |
| **Typical Use** | Independent applications (browser, editor, server) | Parallel subtasks (web server handling concurrent requests) |
| **Creation Syscall** | `fork()` → creates almost complete copy | `pthread_create()` → creates lightweight execution context |
| **Portability** | Same across all OSes | POSIX threads; Windows threads differ |

#### When to Use Process vs Thread

| Scenario | Choose | Reason |
|----------|--------|--------|
| Running a different program | Process | exec() replaces entire address space |
| Serving thousands of clients | Thread | Lower overhead per connection |
| Need crash isolation | Process | Crash in one client doesn't take down others |
| CPU-bound computation | Thread | Share cache, avoid TLB flushes between subtasks |
| Running untrusted code | Process | Separate address space provides security isolation |
| I/O-bound work | Thread | Context switch is cheaper; overlap I/O with computation |

---

### IPC Methods Comprehensive Comparison


| Feature | Shared Memory | Message Passing | Pipes | Sockets |
|---------|--------------|-----------------|-------|---------|
| **Direction** | Bidirectional | Bidirectional | Unidirectional | Bidirectional |
| **Speed** | Fastest (direct memory) | Moderate (kernel copies) | Moderate | Slower (protocol stack) |
| **Kernel Involvement** | Only setup/detach | Every send/receive (syscall) | Every read/write | Every send/recv |
| **Sync Required** | Yes (mutex/semaphore) | No (kernel manages queue) | No (kernel buffer) | No (kernel manages) |
| **Data Model** | Raw memory | Structured messages | Byte stream | Byte stream / datagram |
| **Process Relationship** | Any processes | Any processes | Related (anon) / Any (FIFO) | Any (even across network) |
| **Network Support** | No (same machine only) | Limited (via RPC) | No (same machine) | Yes (TCP/UDP) |
| **Buffering** | None (direct access) | Kernel queue | Kernel buffer | Kernel buffer |
| **Max Data Size** | Unlimited (segment size) | Limited (mq_msgsize) | 65536 bytes default | Unlimited |
| **Preserves Messages** | No (raw bytes) | Yes | No (byte stream) | Yes (SOCK_DGRAM) / No (SOCK_STREAM) |
| **API Complexity** | Low (mmap/shm) | Moderate (mq_open/send/receive) | Low (read/write) | High (socket/bind/connect) |
| **Use Case** | High-throughput local data sharing | Structured communication, microservices | Parent-child data flow | Client-server, distributed systems |
| **Kernel Memory Usage** | Per segment | Per queue + messages | Per pipe | Per socket + buffers |
| **Persistence** | Until destroyed or reboot | Until unlinked | Until both ends closed | Until socket closed |

---

### Interview Corner


#### Zombie vs Orphan

| Aspect | Zombie Process | Orphan Process |
|--------|---------------|----------------|
| **Definition** | Process terminated but PCB still in table waiting for parent's wait() | Process whose parent terminated before the child |
| **State** | TERMINATED (dead, but not cleaned) | RUNNING / READY / WAITING (still alive) |
| **Resource Consumption** | Only PCB (minimal) | Full resources (memory, FDs, etc.) |
| **Cleanup** | Parent calls wait() / waitpid() | Adopted by init (PID 1), which calls wait() |
| **Danger** | PID table exhaustion if many accumulate | None (gets new parent automatically) |
| **Detection** | `ps` shows state Z | PPID becomes 1 (or subreaper PID) |
| **Prevention** | Always call wait(); use SIGCHLD handler; set SA_NOCLDWAIT | No prevention needed; OS handles |

**Interview Answer:**
```
Zombie: process exits, parent hasn't called wait(). PCB retained for exit status.
         `ps -l` shows "Z". Can exhaust PID table. Fix: wait() or SIGCHLD handler.

Orphan: parent exits before child. init (PID 1) inherits child.
         `getppid()` returns 1. No resource leak → init cleans up.
```

#### Context Switch Cost

**Why context switching is expensive (interview answer):**

1. **Register save/restore**: 16-32 registers Ã— 8 bytes each = 128-256 bytes must be saved to PCB and restored from next PCB (~50-100 cycles)
2. **TLB flush**: Switching address spaces requires invalidating the TLB. Next process will suffer TLB misses on first access to every page (~500-2000 cycles total)
3. **Cache pollution**: L1 cache (32KB), L2 cache (256KB), L3 cache (8-32MB) mostly contain old process data. New process starts "cold" → every memory access is a cache miss (~100-300 cycles per miss)
4. **Pipeline drain**: Modern CPUs are deeply pipelined (14-19 stages in Skylake). A context switch flushes the pipeline, costing ~20-40 cycles
5. **Kernel entry/exit**: Switching to ring 0 and back adds ~200-500 cycles

**Total: ~1000-10000 cycles lost, or 1-10 microseconds per switch.**

**Mitigation:**
- Larger time quantum (reduce switch frequency)
- Threads (same address space = no TLB flush)
- Cache affinity scheduling (keep thread on same core)
- Huge pages (reduce TLB misses after switch)

#### IPC Performance

**Interview answer for IPC performance ranking:**

1. **Shared Memory** → Fastest. After mmap, all operations are user-space memory reads/writes. No syscalls, no kernel copies. Throughput can exceed 10 GB/s on modern hardware. **Downside**: synchronization required.

2. **Pipes/Unix Domain Sockets** → Fast for local IPC. Kernel copies data once (user->kernel->user). Typical throughput: 1-5 GB/s. **Downside**: context switches for each read/write.

3. **POSIX Message Queues** → Moderate speed. Kernel copies messages; priority scheduling built-in. Throughput: 500 MB/s - 1 GB/s. **Downside**: fixed message sizes, queue limits.

4. **TCP Sockets (loopback)** → Slowest for local IPC. Full network stack traversed (even on loopback). Throughput: 100-500 MB/s. **Downside**: protocol overhead, but natively works across machines.

```
Performance comparison for 1 MB transfer:
  Shared Memory:    ~0.1 ms  (zero copy after setup)
  Pipe:             ~0.5 ms  (one kernel copy)
  Message Queue:    ~0.8 ms  (two kernel copies + priority sort)
  TCP Loopback:     ~2.0 ms  (full network stack + checksums)
```

**Rule of thumb**: Prefer shared memory for maximum throughput and large data. Prefer pipes or message queues for simplicity and structure. Prefer sockets when cross-network communication is required.

---

### Applications in Real Systems


#### Linux: fork() + exec() + COW

In the Linux kernel, process creation is through `clone()` which is the syscall underlying both `fork()` and `pthread_create()`. The task_struct in `<linux/sched.h>` is the PCB.

```c
// Kernel internals (simplified)
struct task_struct {
    volatile long state;           // -1 unrunnable, 0 runnable, >0 stopped
    void *stack;                   // Kernel stack
    unsigned int flags;            // Per-process flags (PF_KTHREAD, etc.)
    int on_cpu;                    // Which CPU is executing
    int prio, static_prio;        // Dynamic and static priority
    struct list_head tasks;        // Linked list of all processes
    struct mm_struct *mm;         // Memory descriptor (page tables)
    struct mm_struct *active_mm;  // Active memory descriptor
    pid_t pid;                     // Process ID
    struct task_struct *parent;   // Parent process
    struct list_head children;    // List of children
    struct files_struct *files;   // Open file descriptors
};
```

Key Linux features:
- **Copy-On-Write fork**: fork() is implemented via clone(SIGCHLD, 0). Pages are marked read-only and shared until written.
- **PID recycling**: Linux can handle up to 4,194,304 PIDs (configurable via `/proc/sys/kernel/pid_max`).
- **OOM Killer**: When memory runs out, Out-Of-Memory killer selects a process to terminate using a heuristic score (oom_score).

#### Windows: CreateProcess()

Windows uses `CreateProcess()` → a single syscall that both creates a new process and loads the executable (no fork/exec separation).

```cpp
// Windows process creation
#include <windows.h>
#include <iostream>

int main() {
    STARTUPINFO si = { sizeof(si) };
    PROCESS_INFORMATION pi;

    BOOL success = CreateProcess(
        L"C:\\Windows\\System32\\notepad.exe",  // Application
        NULL,           // Command line
        NULL,           // Process security attributes
        NULL,           // Thread security attributes
        FALSE,          // Handle inheritance
        0,              // Creation flags
        NULL,           // Environment block
        NULL,           // Current directory
        &si,            // Startup info
        &pi             // Process information
    );

    if (success) {
        std::cout << "Process created. PID=" << pi.dwProcessId << "\n";
        WaitForSingleObject(pi.hProcess, INFINITE);  // Like wait()
        CloseHandle(pi.hProcess);
        CloseHandle(pi.hThread);
    } else {
        std::cerr << "CreateProcess failed: " << GetLastError() << "\n";
    }
    return 0;
}
```

Key Windows differences from Unix:
- **CreateProcess()** is a single call → no fork/exec split (Windows uses `CreateProcess()`, and processes can spawn children via `CreateProcess()` only)
- **Handle inheritance**: Child processes can inherit handles; controlled by `bInheritHandles` parameter
- **Jobs**: Windows has Job objects → groups of processes managed together (CPU limits, memory limits, kill on job close)
- **Process Environment Block (PEB)**: Windows' equivalent of PCB, accessed via `NtQueryInformationProcess()`

#### POSIX IPC Summary

| IPC Method | POSIX API | Key Syscalls | Persistence |
|-----------|-----------|-------------|-------------|
| Shared Memory | POSIX shared memory | `shm_open()`, `mmap()`, `ftruncate()` | Until `shm_unlink()` or reboot |
| System V Shared Memory | System V IPC | `shmget()`, `shmat()`, `shmdt()`, `shmctl()` | Until removed or reboot |
| Message Queue | POSIX message queue | `mq_open()`, `mq_send()`, `mq_receive()`, `mq_close()` | Until `mq_unlink()` or reboot |
| System V Message Queue | System V IPC | `msgget()`, `msgsnd()`, `msgrcv()`, `msgctl()` | Until removed or reboot |
| Anonymous Pipe | POSIX pipes | `pipe()`, `read()`, `write()`, `close()` | Until both ends closed |
| Named Pipe (FIFO) | POSIX FIFO | `mkfifo()`, `open()`, `read()`, `write()` | Until `unlink()` removes path |
| Unix Domain Socket | POSIX sockets | `socket()`, `bind()`, `connect()`, `send()`, `recv()` | Until `unlink()` removes path |
| Signal | POSIX signals | `kill()`, `signal()`, `sigaction()` | Immediate delivery |
## Examples

### Example 1: Process Tree with ps

```bash
$ ps -eo pid,ppid,comm,state,wchan
  PID  PPID COMMAND         S WCHAN
    1     0 systemd         S -
  345     1 sshd            S poll_schedule_timeout
  678   345 bash            S wait_woken
  712   678 ps              R -
  890     1 cron            S hrtimer_nanosleep
  891     1 rsyslogd        S do_sys_poll
```

**Interpretation**: PID 1 (systemd/init) is the root of all processes. sshd (PID 345) runs as a child of systemd, waiting for connections. bash is a child of sshd (user logged in). ps runs directly from bash with state R (running). The WCHAN column shows what the kernel function the process is blocked on.

### Example 2: Visualizing Process State Changes

```cpp
#include <iostream>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid = fork();

    if (pid == 0) {
        std::cout << "Child: Entering RUNNING state\n";
        sleep(2);  // Child moves to WAITING (sleep)
        std::cout << "Child: Woke up, back in RUNNING\n";
    } else {
        std::cout << "Parent: In RUNNING, waiting for child\n";
        wait(NULL);  // Parent could be in WAITING if child not yet done
        std::cout << "Parent: Child finished\n";
    }
    return 0;
}
```

**State transitions in this program:**
- Parent: RUNNING -> WAITING (wait()) -> RUNNING (child exits) -> TERMINATED
- Child: RUNNING -> WAITING (sleep()) -> RUNNING (wake) -> TERMINATED

### Example 3: Process Pipeline (ls | wc -l)

```cpp
#include <iostream>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    int fd[2];
    pipe(fd);
    pid_t pid = fork();

    if (pid == 0) {
        // Child: run "ls", write to pipe
        close(fd[0]);                // Close read end
        dup2(fd[1], STDOUT_FILENO);  // Redirect stdout to pipe
        close(fd[1]);
        execlp("ls", "ls", nullptr);  // ls writes to pipe instead of terminal
    } else {
        // Parent: run "wc -l", read from pipe
        close(fd[1]);                // Close write end
        dup2(fd[0], STDIN_FILENO);   // Redirect stdin from pipe
        close(fd[0]);
        wait(nullptr);               // Wait for ls to finish
        execlp("wc", "wc", "-l", nullptr);  // wc reads from pipe
    }
    return 0;
}
```

**How shell pipelines work**: The shell creates a pipe, forks two child processes, redirects stdout of the first to the pipe's write end, and stdin of the second from the pipe's read end. Data flows directly: ls -> [pipe kernel buffer] -> wc.

### Example 4: Producer-Consumer with Shared Memory and Semaphores

```cpp
#include <iostream>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

const int BUFFER_SIZE = 5;
int buffer[BUFFER_SIZE];
int in = 0, out = 0;

sem_t empty, full, mutex;

void* producer(void* arg) {
    for (int i = 0; i < 10; i++) {
        sem_wait(&empty);
        sem_wait(&mutex);

        buffer[in] = i;
        std::cout << "Produced: " << i << " at " << in << "\n";
        in = (in + 1) % BUFFER_SIZE;

        sem_post(&mutex);
        sem_post(&full);
        usleep(50000);
    }
    return nullptr;
}

void* consumer(void* arg) {
    for (int i = 0; i < 10; i++) {
        sem_wait(&full);
        sem_wait(&mutex);

        int val = buffer[out];
        std::cout << "Consumed: " << val << " from " << out << "\n";
        out = (out + 1) % BUFFER_SIZE;

        sem_post(&mutex);
        sem_post(&empty);
        usleep(100000);
    }
    return nullptr;
}

int main() {
    sem_init(&empty, 0, BUFFER_SIZE);
    sem_init(&full, 0, 0);
    sem_init(&mutex, 0, 1);

    pthread_t p, c;
    pthread_create(&p, nullptr, producer, nullptr);
    pthread_create(&c, nullptr, consumer, nullptr);

    pthread_join(p, nullptr);
    pthread_join(c, nullptr);

    sem_destroy(&empty);
    sem_destroy(&full);
    sem_destroy(&mutex);
    return 0;
}
```

---

> [TIP]
> The `fork()` + `exec()` pattern is the Unix way of creating processes. `fork()` duplicates the current process, then `exec()` replaces it with a new program. This two-step design allows the child to modify its environment (file descriptors, signals) before loading the new program.

> [TIP]
> Use Copy-On-Write (COW) thoughtfully → fork() is fast because pages are shared until written. But if the child writes to many pages immediately, COW overhead can exceed naive copy. Use `vfork()` if the child will immediately exec() without writing.

> [WARNING]
> **Zombie processes** are terminated processes whose parent has not called `wait()`. They only consume a PCB entry but can exhaust the PID table if accumulated. Always call `wait()` or `waitpid()` in the parent. Alternatively, set a SIGCHLD handler with `SA_NOCLDWAIT` to auto-reap children.

> [WARNING]
> **Fork bombs** can crash a system by exhausting the PID table and memory. Protect against them with `ulimit -u` (max user processes). If you suspect a fork bomb, use `kill -STOP -1` to freeze all processes, then kill the offending process.

> [NOTE]
> Context switching is **pure overhead** → the CPU does zero useful work during a switch. Modern systems do hundreds to thousands of context switches per second, making switch efficiency critical. Use threads (same address space) when you need parallelism without the context switch penalty.

> [NOTE]
> Linux's `pthread_create()` internally uses `clone()` with `CLONE_VM | CLONE_THREAD` flags. This shares the address space but creates a separate task_struct and stack. This is why threads are sometimes called "lightweight processes."

## Concept Comparison

| Feature | Shared Memory | Message Passing |
|-------|-------------|---------------|
| Speed | Fast (kernel bypass after setup) | Slower (kernel copies messages) |
| Synchronization | Explicit (mutex/semaphore needed) | Implicit (blocking send/recv) |
| Complexity | Higher (race conditions) | Lower (kernel-managed buffers) |
| Distributed Support | No (needs shared physical memory) | Yes (works across network) |
| Use Case | High-throughput local data sharing | Structured communication, distributed systems |
| Data Granularity | Raw bytes (arbitrary size) | Fixed-size messages |
| Kernel Mode | User mode after setup | Every call enters kernel mode |

## Quick Reference

| Term | Definition |
|------|------------|
| **Process** | Program in execution with own address space |
| **PCB** | Process Control Block → kernel data structure for process metadata |
| **Context Switch** | Saving/restoring CPU state when switching processes |
| **fork()** | System call to create a child process (Unix) |
| **exec()** | System call to replace current process image |
| **Zombie** | Terminated process awaiting parent `wait()` |
| **Orphan** | Process whose parent died; adopted by `init` (PID 1) |
| **COW** | Copy-On-Write → shares pages until one process writes |
| **IPC** | Interprocess Communication |
| **Shared Memory** | IPC via directly accessible common memory region |
| **Message Passing** | IPC via kernel-mediated message exchange |
| **Pipe** | Unidirectional byte stream between processes |
| **FIFO** | Named pipe → pipe that exists as a filesystem entry |
| **Semaphore** | Synchronization primitive for IPC |
| **Mutex** | Mutual exclusion lock for shared resource access |
| **task_struct** | Linux kernel's PCB structure |
| **createProcess()** | Windows API for process creation |

### TypeScript Process Lifecycle Simulator

The following TypeScript code models process states, transitions, context switching, and IPC:

```typescript
/**
 * Process Lifecycle & IPC Simulator
 * Demonstrates 5-state model, context switching, and pipe IPC
 */
type ProcessState = 'new' | 'ready' | 'running' | 'waiting' | 'terminated';

interface Process {
  pid: number;
  state: ProcessState;
  programCounter: number;
  registers: number[];
  priority: number;
  arrivalTime: number;
  burstTime: number;
  memorySize: number;
  waitTime: number;
  turnaroundTime: number;
}

class ProcessManager {
  private processes: Map<number, Process> = new Map();
  private readyQueue: Process[] = [];
  private running: Process | null = null;
  private nextPid = 1;
  private clock = 0;
  private totalContextSwitches = 0;
  private log: string[] = [];

  createProcess(priority: number, burstTime: number): number {
    const pid = this.nextPid++;
    const proc: Process = {
      pid, state: 'new', programCounter: 0,
      registers: Array(16).fill(0), priority,
      arrivalTime: this.clock, burstTime,
      memorySize: 1024 * (1 + Math.floor(Math.random() * 8)),
      waitTime: 0, turnaroundTime: 0
    };
    this.processes.set(pid, proc);
    this.log.push(`[t=${this.clock}] Process ${pid} created (priority=${priority}, burst=${burstTime})`);
    this.admitProcess(pid);
    return pid;
  }

  private admitProcess(pid: number): void {
    const proc = this.processes.get(pid);
    if (!proc || proc.state !== 'new') return;
    proc.state = 'ready';
    this.readyQueue.push(proc);
    this.log.push(`[t=${this.clock}] Process ${pid} admitted → READY queue`);
  }

  scheduleRoundRobin(quantum: number): void {
    if (this.readyQueue.length === 0 && !this.running) {
      this.log.push(`[t=${this.clock}] CPU idle — no processes ready`);
      this.clock += 1;
      return;
    }

    // Preempt running process if quantum expired
    if (this.running) {
      this.totalContextSwitches++;
      this.log.push(`[t=${this.clock}] Context switch: saving state of P${this.running.pid}`);
      
      // Save register state (simplified)
      this.running.registers = this.running.registers.map(r => r + 1);
      
      if (this.running.burstTime > 0) {
        this.running.state = 'ready';
        this.readyQueue.push(this.running);
        this.log.push(`[t=${this.clock}] P${this.running.pid} preempted → READY (burst remaining: ${this.running.burstTime})`);
      }
    }

    // Pick next process from ready queue
    if (this.readyQueue.length > 0) {
      const next = this.readyQueue.shift()!;
      this.running = next;
      next.state = 'running';

      // Execute for quantum or until completion
      const execTime = Math.min(quantum, next.burstTime);
      next.burstTime -= execTime;
      this.clock += execTime;

      this.log.push(`[t=${this.clock}] P${next.pid} RUNNING for ${execTime}ms`);

      if (next.burstTime <= 0) {
        next.state = 'terminated';
        next.turnaroundTime = this.clock - next.arrivalTime;
        this.log.push(`[t=${this.clock}] P${next.pid} TERMINATED (turnaround=${next.turnaroundTime})`);
        this.running = null;
      }
    }
  }

  simulatePipeIPC(senderPid: number, receiverPid: number, data: string): void {
    this.log.push(`[t=${this.clock}] IPC: P${senderPid} writes "${data}" to pipe`);
    this.log.push(`[t=${this.clock}] IPC: P${receiverPid} reads "${data}" from pipe`);
    this.log.push(`[t=${this.clock}] Pipe buffer: kernel-managed ${data.length}-byte transfer`);
  }

  getStats(): string {
    const processes = Array.from(this.processes.values());
    const avgTurnaround = processes.reduce((s, p) => s + p.turnaroundTime, 0) / processes.length;
    return JSON.stringify({
      totalProcesses: this.processes.size,
      contextSwitches: this.totalContextSwitches,
      avgTurnaroundTime: avgTurnaround.toFixed(2),
      currentClock: this.clock,
      runningPid: this.running?.pid ?? null,
      readyQueueLength: this.readyQueue.length
    }, null, 2);
  }

  getLog(): string[] {
    return [...this.log];
  }
}

// Usage: simulate 3 processes with RR scheduling (quantum=5ms)
const pm = new ProcessManager();
pm.createProcess(1, 12);  // pid=1, burst=12
pm.createProcess(1, 8);   // pid=2, burst=8
pm.createProcess(2, 20);  // pid=3, burst=20

for (let i = 0; i < 15; i++) {
  pm.scheduleRoundRobin(5);
}

pm.simulatePipeIPC(1, 2, "Hello from P1 to P2 via pipe");
console.log(pm.getLog().join('\n'));
console.log(pm.getStats());
```

### Additional Chapter Quiz Questions

9. What is the minimum number of process states in the five-state model?
   - a) 3
   - b) 4
   - c) 5
   - d) 7

10. In Linux, what does the `WCHAN` field in `ps` output represent?
    - a) The CPU core the process is running on
    - b) The kernel function the process is blocked in
    - c) The wait channel for I/O
    - d) The priority level

11. Which of the following is true about Copy-On-Write (COW)?
    - a) Pages are copied immediately after fork
    - b) Pages are shared until one process writes to them
    - c) COW eliminates the need for fork
    - d) COW only works with threads

12. What happens when a child process calls `exec()`?
    - a) The child continues running the parent's code
    - b) The child's address space is replaced with a new program
    - c) The parent process is terminated
    - d) The child becomes a zombie

13. In the `fork()` system call, what value does the child process receive as the return value?
    - a) The parent's PID
    - b) 0
    - c) -1
    - d) The child's own PID

14. Which IPC mechanism requires the least kernel intervention after setup?
    - a) Pipes
    - b) Message queues
    - c) Shared memory
    - d) Sockets

**Answers:** 9-c, 10-b, 11-b, 12-b, 13-b, 14-c

### Additional Exercises

#### Basic
13. Trace the process state transitions of a program that reads a file: start with NEW, show every state change through READY, RUNNING, WAITING (during I/O), back to READY, RUNNING, and finally TERMINATED.

#### Intermediate
14. Write a TypeScript program that simulates process scheduling using a priority queue. Create 10 processes with random burst times (1-20ms) and priorities (1-5). Schedule them using preemptive priority scheduling and report average waiting time, turnaround time, and CPU utilization.
15. Use `ps -eo pid,ppid,stat,wchan,comm` on a Linux system and identify: which process has the most children, which processes are in uninterruptible sleep (D state), and what kernel functions they're blocked on. Explain each WCHAN value.

#### Advanced
16. Implement a complete process lifecycle simulator in TypeScript with: process creation (fork simulation), scheduling (Round Robin), context switching (with register save/restore), IPC via shared memory (simulated with typed arrays), and termination with zombie detection. Measure context switch overhead.
17. Research and implement the Linux `clone()` syscall's flag-based resource sharing in TypeScript. Create a function `cloneProcess(flags: CloneFlags): number` where `CLONE_VM`, `CLONE_FILES`, `CLONE_SIGHAND`, and `CLONE_THREAD` control whether memory, file descriptors, signal handlers, and thread group are shared. Show how `fork()` and `pthread_create()` are both special cases of `clone()`.

## Cross-Application Matrix

| Concept | Web Server | Database | Embedded System | Smartphone |
|-------|----------|--------|---------------|----------|
| **fork()/exec()** | Spawn CGI scripts, worker processes | Create worker for each query | Execute user commands | App launch via Activity/Zygote |
| **IPC: Shared Memory** | Cache sharing between workers (Nginx shmem) | Buffer pool (shared between connections) | Interrupt-to-task data sharing | ContentProvider data sharing |
| **IPC: Message Passing** | Request queuing (Apache worker queue) | Query routing to executors | Inter-task communication | Android Binder IPC |
| **Pipes** | CGI data piping | Process pipeline | Device driver data flow | Shell pipeline |
| **Process Lifecycle** | Connection-per-fork (Apache prefork) | Transaction commit/rollback | Task scheduling | Activity lifecycle (onCreate/onDestroy) |
| **Zombies/Orphans** | Apache reaps child processes | Long-running workers | Watchdog timer cleanup | Zygote manages app processes |
| **Context Switching** | Thread pool minimizes switches | I/O wait during queries | Interrupt handler priority | UI thread vs background threads |

## Chapter Quiz

1. Which section of a process's memory contains the program counter and local variables?
   - a) Text
   - b) Data
   - c) Stack
   - d) Heap

2. What system call creates a new process in Unix?
   - a) exec()
   - b) fork()
   - c) clone()
   - d) spawn()

3. A process that has finished execution but still has an entry in the process table is called:
   - a) Orphan
   - b) Zombie
   - c) Daemon
   - d) Ghost

4. Which IPC method requires explicit synchronization?
   - a) Shared memory
   - b) Message passing
   - c) Signals
   - d) Pipes

5. Context switch time is:
   - a) Productive work (CPU processes data)
   - b) Pure overhead (CPU saves/restores state)
   - c) Optional (only needed for I/O)
   - d) Always zero (instantaneous)

6. What happens when `fork()` is called?
   - a) The current process is replaced by a new program
   - b) A child process is created as an (almost) exact copy of the parent
   - c) The process terminates
   - d) A thread is created

7. The Linux PCB is called:
   - a) proc_struct
   - b) task_struct
   - c) process_block
   - d) pcb_struct

8. Which is NOT a valid process state in the five-state model?
   - a) NEW
   - b) SUSPENDED
   - c) READY
   - d) WAITING

**Answer Key:** 1-c, 2-b, 3-b, 4-a, 5-b, 6-b, 7-b, 8-b (SUSPENDED is an additional state, not in the basic five-state model)

## Summary

- A process is an active instance of a program, containing text, data, heap, and stack
- The five-state model: NEW -> READY -> RUNNING -> WAITING -> TERMINATED
- The PCB (task_struct in Linux) holds every piece of state the kernel needs about a process
- Context switching is pure overhead → saving and restoring process state takes 1-10 microseconds
- `fork()` creates a child; `exec()` replaces the current program; `exit()` terminates
- IPC: shared memory (fast, needs synchronization) or message passing (slower, more structured)
- Pipes provide simple unidirectional communication between related processes
- Zombies are dead processes waiting for parent `wait()`; orphans are adopted by init
- Threads are lightweight processes sharing address space → cheaper to create and switch
- Copy-On-Write (COW) optimizes fork by sharing pages until modification
- Process management is the foundation of multitasking, isolation, and IPC in modern operating systems

## Exercises

### Basic

1. Draw the process state diagram. Identify which transitions are initiated by the OS, which by the process, and which by hardware.
2. Run `ps -eo pid,ppid,state,wchan,comm` on your system. Identify the state of each process. Which processes are waiting? What are they waiting on (wchan)?
3. Write a program that creates a zombie process. Use `ps` to confirm the zombie exists (state Z).

### Intermediate

4. Write a program that creates three child processes. Each child prints its PID and exits. The parent waits for all children in order and prints their exit statuses. Use `waitpid()` with the WNOHANG option to demonstrate non-blocking wait.
5. Compare the performance of shared memory vs message passing. Write programs that transfer 1 MB of data using each method and measure the time.
6. Explain the orphan process scenario. Write a program where the parent exits before the child. Verify that `init` (PID 1) becomes the child's new parent using `getppid()`.
7. Implement a shell pipeline simulation: create a parent and child connected by a pipe. The parent writes lines of text; the child reads and counts words (like `wc -w`).

### Advanced

8. Implement a simple producer-consumer using shared memory and a circular buffer. The producer writes integers 0-999; the consumer reads and prints them. Use atomic operations or a flag for synchronization.
9. The `vfork()` system call creates a child that shares the parent's address space and blocks the parent until the child calls `exec()` or `exit()`. Research why `vfork()` exists, then write a benchmark comparing `fork()` and `vfork()` latency over 10,000 iterations.
10. Design and implement a message-passing library in C that provides `send(pid, msg)` and `recv(pid, &msg)` using POSIX message queues. The library should handle messages up to 1024 bytes and support non-blocking receives.
11. Write a program that measures the average context switch time between two processes using a pipe. (Hint: use `clock_gettime()` and pass timestamps through the pipe to measure round-trip time.)
12. Research Linux cgroups (control groups). Write a program that limits a child process's memory to 64 MB using cgroup v2 and demonstrates OOM behavior when the child exceeds the limit.
