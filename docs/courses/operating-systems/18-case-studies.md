# Chapter 18: Case Studies

## Learning Objectives

- Compare Windows, Linux, and macOS kernel architectures
- Analyze each OS's approach to processes, threads, and scheduling
- Compare memory management strategies across systems
- Understand the macOS XNU kernel and its hybrid architecture
- Describe FreeBSD's design contributions to modern operating systems
- Explore the architecture of real-time operating systems (RTOS)
- Understand the principles of microkernel design through Minix and seL4

## Theory

![OS Case Studies](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/18-case-studies.png)

### Windows NT Architecture

The Windows NT kernel (used in Windows 10/11, Server) is a **hybrid kernel** â€” combining microkernel-inspired design with monolithic kernel performance.

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ User Mode                                            â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”              â”‚
â”‚ â”‚ System   â”‚ â”‚ Service  â”‚ â”‚ User     â”‚              â”‚
â”‚ â”‚ Processesâ”‚ â”‚ Processesâ”‚ â”‚ Apps     â”‚              â”‚
â”‚ â”‚ (winlogonâ”‚ â”‚ (SvcHost)â”‚ â”‚ (chrome, â”‚              â”‚
â”‚ â”‚  smss)   â”‚ â”‚  spoolsv)â”‚ â”‚  notepad)â”‚              â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜              â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ Subsystem DLLs (ntdll.dll, kernel32.dll, ...)     â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Kernel Mode                                          â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ Executive Layer                                   â”‚ â”‚
â”‚ â”‚ â”Œâ”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â” â”‚ â”‚
â”‚ â”‚ â”‚I/O   â”‚ â”‚Proc  â”‚ â”‚Memoryâ”‚ â”‚Cache â”‚ â”‚Securityâ”‚ â”‚ â”‚
â”‚ â”‚ â”‚Mgr   â”‚ â”‚Mgr   â”‚ â”‚Mgr   â”‚ â”‚Mgr   â”‚ â”‚RefMon  â”‚ â”‚ â”‚
â”‚ â”‚ â””â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚ â”‚
â”‚ â”‚ â”Œâ”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”             â”‚ â”‚
â”‚ â”‚ â”‚Obj   â”‚ â”‚Plug  â”‚ â”‚Power â”‚ â”‚Win32 â”‚             â”‚ â”‚
â”‚ â”‚ â”‚Mgr   â”‚ â”‚&Play â”‚ â”‚Mgr   â”‚ â”‚KSS   â”‚             â”‚ â”‚
â”‚ â”‚ â””â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”˜             â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ Kernel (core): scheduler, sync, IRQL, traps       â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ Hardware Abstraction Layer (HAL)                  â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Hardware                                              â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

#### Windows Kernel Features

**Process Structure**: Each Windows process contains:
- A process object (EPROCESS in kernel)
- A private virtual address space (4 GB on 32-bit, 128 TB on 64-bit)
- A security access token (SID-based)
- At least one thread

**Thread Structure**: Each thread (ETHREAD) includes:
- CPU register state
- Two stacks (kernel-mode and user-mode)
- A thread-local storage (TLS) array
- Base and current priority

#### Windows Scheduling

Windows uses a **priority-driven preemptive scheduler** with 32 priority levels:

| Priority Range | Category | Assignment |
|----------------|----------|------------|
| 0 | Zero page thread | System, idle |
| 1â€“15 | Dynamic | Variable class |
| 16â€“31 | Real-time | Real-time class |

**Priority boosting**: When a thread receives input (keyboard/mouse), its priority is temporarily boosted.

**Quantum**: Default quantum is 2 clock intervals (~30ms) for client SKUs, 12 for server SKUs.

```c
// Windows thread creation (native API)
HANDLE CreateThread(
    LPSECURITY_ATTRIBUTES lpThreadAttributes,
    SIZE_T dwStackSize,
    LPTHREAD_START_ROUTINE lpStartAddress,
    LPVOID lpParameter,
    DWORD dwCreationFlags,
    LPDWORD lpThreadId
);
```

#### Windows Memory Management

Windows uses a **demand-paged virtual memory** system with a **working-set** model.

```
Virtual address space layout (64-bit x86):
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” 0xFFFF`FFFF`FFFF`FFFF
â”‚ Kernel space (exec/hal/win32k)â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤ 0xFFFF`0800`0000`0000
â”‚ System mapped views          â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤ 0xFFFF`0000`0000`0000
â”‚ Hyperspace / session space   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤ 0x0000`0000`7FFF`FFFF
â”‚ Page file backed (for apps)  â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Mapped files / DLLs          â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Heap / stacks                â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Executable image             â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤ 0x0000`0000`0000`0000
â”‚ NULL pointer guard           â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

Working set management:
- Each process has a min/max working set size
- Memory manager uses a FIFO-based working set replacement
- Modified (dirty) pages are written to the page file by the modified page writer
- Standby list holds pages removed from working sets (available for reuse)
- Free list holds truly free pages
- Zeroed list holds pages cleared for security
```

#### IRQL â€” Interrupt Request Level

Windows uses IRQL (not IRQ) to prioritize interrupts:

| Level (highestâ†’lowest) | Source |
|------------------------|--------|
| HIGH_LEVEL | Machine checks, NMIs |
| POWER_LEVEL | Power failure |
| IPI_LEVEL | Inter-processor interrupts |
| CLOCK_LEVEL | Clock interrupts |
| PROFILE_LEVEL | Profiling timer |
| DISPATCH_LEVEL | Thread scheduler and DPCs |
| APC_LEVEL | Asynchronous procedure calls |
| PASSIVE_LEVEL | Normal thread execution |

**Key rule**: No page faults can occur at DISPATCH_LEVEL or above.

### Linux Kernel Architecture

Linux is a **monolithic kernel** with **loadable modules**:

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ User Mode                                            â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”              â”‚
â”‚ â”‚ Shell    â”‚ â”‚ Web      â”‚ â”‚ Compiler â”‚              â”‚
â”‚ â”‚ (bash)   â”‚ â”‚ Server   â”‚ â”‚ (gcc)    â”‚              â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜              â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ glibc (C library â€” user-space)                   â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Kernel Mode                                          â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ System call handler (arch/x86/entry)              â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”  â”‚ â”‚
â”‚ â”‚ VFS      â”‚ â”‚ Process  â”‚ â”‚ Memory   â”‚ â”‚ Network â”‚  â”‚ â”‚
â”‚ â”‚ (ext4,   â”‚ â”‚ Schedulerâ”‚ â”‚ Manager  â”‚ â”‚ Stack   â”‚  â”‚ â”‚
â”‚ â”‚  btrfs)  â”‚ â”‚ (CFS)    â”‚ â”‚ (MMU)    â”‚ â”‚ (TCP/IP)â”‚  â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚ â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”â”‚
â”‚ â”‚ Device   â”‚ â”‚ File     â”‚ â”‚ Kernel Modules         â”‚â”‚
â”‚ â”‚ Drivers  â”‚ â”‚ Systems  â”‚ â”‚ (loadable .ko files)   â”‚â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ Architecture-specific code (x86, arm, riscv)       â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Hardware                                              â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

#### Linux Comparison Points

| Feature | Linux | Windows |
|---------|-------|---------|
| Kernel type | Monolithic (with modules) | Hybrid |
| Process representation | `task_struct` | `EPROCESS` |
| Thread representation | `task_struct` (same as process) | `ETHREAD` |
| Scheduling | CFS (vruntime-based) | Priority-driven (32 levels) |
| IPC variants | Pipes, signals, sockets, shared memory, msg queues, semaphores | Named pipes, mailslots, LPC/ALPC, sockets |
| File systems | ext4, XFS, btrfs, ZFS | NTFS, ReFS, FAT32, exFAT |
| Device driver model | Modular, in-kernel | WDM, WDF |
| Security | SELinux, AppArmor, capabilities | ACLs, Integrity Levels, Mandatory Integrity Control |

### macOS XNU Kernel

XNU (X is Not Unix) is a **hybrid kernel** combining the Mach microkernel and a FreeBSD monolithic kernel component.

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ User Mode (Darwin)                                   â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”‚
â”‚ â”‚ Aqua UI    â”‚ â”‚ User-space BSD layer              â”‚  â”‚
â”‚ â”‚ (Window    â”‚ â”‚ (fork, exec, signals, ptrace)     â”‚  â”‚
â”‚ â”‚  Server)   â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜                                       â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”‚
â”‚ â”‚Mach  â”‚ â”‚BSD   â”‚ â”‚Libc  â”‚ â”‚IOKitâ”‚ â”‚Other     â”‚   â”‚
â”‚ â”‚Tasks â”‚ â”‚Procs â”‚ â”‚      â”‚ â”‚     â”‚ â”‚libs      â”‚   â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ XNU Kernel (kernel_task)                            â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ BSD Layer: Processes, signals, file systems,      â”‚ â”‚
â”‚ â”‚ networking (TCP/IP stack from FreeBSD)            â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ Mach Layer: Tasks, threads, IPC (messages, ports,â”‚ â”‚
â”‚ â”‚ mig), virtual memory, scheduler                   â”‚ â”‚
â”‚ â”‚  - Mach message passing as core IPC               â”‚ â”‚
â”‚ â”‚  - Task = resource container (address space)      â”‚ â”‚
â”‚ â”‚  - Thread = unit of scheduling                    â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ I/O Kit: Device drivers (C++ subclassing)         â”‚ â”‚
â”‚ â”‚  - Driver extends IOService class                 â”‚ â”‚
â”‚ â”‚  - Probe/match architecture for device discovery  â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Hardware (Apple Silicon M-series / Intel x86)        â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

#### macOS Memory Management

- **Mach VM**: Uses a **copy-on-write** architecture throughout
- **Unified memory** (Apple Silicon): CPU and GPU share the same physical memory
- **Memory pressure**: The kernel signals applications when memory is low, asking them to free memory
- **Compressed memory**: Inactive pages are compressed (not paged to disk) for faster access

#### macOS Security

- **SIP** (System Integrity Protection): Prevents modification of system files even by root
- **Sandboxing**: App Store apps run in sandboxes with per-app entitlements
- **Hardened Runtime**: Code signing + runtime integrity checks
- **Gatekeeper**: Verifies apps are signed by known developers before running

### FreeBSD

FreeBSD is a complete, open-source Unix-like operating system known for stability and performance.

| Feature | FreeBSD | Linux |
|---------|---------|-------|
| License | BSD (permissive) | GPL (copyleft) |
| Kernel+userland | Developed together as a complete OS | Kernel only; userland from GNU |
| Device driver | Newbus (abstraction layer) | Platform-specific |
| Networking | Highly optimized, kernel-level | Strong, mostly in-kernel |
| File system | UFS2 (ZFS in FreeBSD) | VFS layer, many F/S |
| jails | Lightweight virtualization | Namespaces |

#### FreeBSD Jails

**Jails** are FreeBSD's OS-level virtualization (precursor to Linux containers):

```bash
# Creating a jail
ezjail-admin create webjail '192.168.1.100'
ezjail-admin start webjail

# Comparison with Docker:
# - Jail shares the kernel (same as containers)
# - Jail has its own IP address (mandatory)
# - No image layering (Docker innovation)
# - Jails predate Linux namespaces by ~5 years
```

### Minix and Microkernels

**Minix** (by Andrew Tanenbaum) is a **microkernel** â€” only essential services run in kernel mode.

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ User Mode                                            â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”â”‚
â”‚ â”‚ File     â”‚ â”‚ Process  â”‚ â”‚ Device   â”‚ â”‚ Network  â”‚â”‚
â”‚ â”‚ Server   â”‚ â”‚ Manager  â”‚ â”‚ Drivers  â”‚ â”‚ Stack    â”‚â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ IPC: message passing                              â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Kernel Mode (microkernel)                            â”‚
â”‚ Only: IPC, scheduling, lowest-level interrupt        â”‚
â”‚ handling                                             â”‚
â”‚ Size: ~12,000 lines of code (Minix 3)                â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Hardware                                              â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Advantage**: If a file server crashes, it can be restarted without crashing the whole system.
**Disadvantage**: IPC overhead makes microkernels slower for some operations.

**seL4**: A formally verified microkernel. Proved mathematically correct with Isabelle/HOL theorem prover. IPC latency ~130ns (highly optimized).

### Real-Time Operating Systems

#### Types of Real-Time Systems

| Type | Description | Deadline Consequences | Example |
|------|-------------|----------------------|---------|
| **Hard real-time** | Missing a deadline is catastrophic | System failure, data loss | Airbag controller, pacemaker |
| **Firm real-time** | Results become worthless | Data degradation | Video streaming |
| **Soft real-time** | Value degrades after deadline | Quality reduction | Audio processing |

#### RTOS Scheduling

**Rate Monotonic Scheduling (RMS)**: Preemptive, fixed-priority. Shorter period = higher priority.

**Earliest Deadline First (EDF)**: Dynamic priority â€” the task with the earliest deadline runs next.

```c
// Simplified EDF scheduler
struct task {
    int deadline;        // Absolute deadline (ticks)
    int computation;     // Remaining computation time
    void (*run)(void);
};

struct task *edf_schedule(struct task tasks[], int n) {
    struct task *best = NULL;
    for (int i = 0; i < n; i++) {
        if (tasks[i].computation > 0) {  // Runnable
            if (!best || tasks[i].deadline < best->deadline) {
                best = &tasks[i];  // Earliest deadline
            }
        }
    }
    return best;
}
```

#### RTOS Examples

| RTOS | Type | Use Case |
|------|------|----------|
| VxWorks | Hard real-time | SpaceX Dragon, Mars rovers |
| FreeRTOS | Hard real-time | Embedded/IoT, ESP32 |
| QNX | Hard real-time | Automotive (BlackBerry), medical |
| RT-Linux | Soft/Hard real-time | Industrial, audio production |
| Zephyr | Hard real-time | IoT, Bluetooth devices |

#### Priority Inversion Problem

A high-priority task is blocked waiting for a resource held by a low-priority task that has been preempted by a medium-priority task.

```
Time â†’
High:    â–ˆâ–ˆâ–ˆâ–ˆâ”€â”€â”€â”€WAITINGâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–ˆâ–ˆâ–ˆâ–ˆ
Medium:  â”€â”€â”€â”€â”€â”€â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
Low:     â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–ˆâ–ˆâ–ˆâ”€â”€â”€(preempted by medium)â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–ˆâ–ˆâ–ˆ
                    â†‘ High waits for Low's mutex
                    â†‘ Medium runs (unrelated), preventing Low from finishing

Solution: Priority inheritance â€” Low temporarily inherits High's priority
(POSIX: pthread_mutexattr_setprotocol with PTHREAD_PRIO_INHERIT)
```

## Summary

- Windows uses a hybrid kernel with an Executive layer, HAL, and priority-driven scheduler
- Linux uses a monolithic kernel with CFS scheduler, dynamic task_struct, and loadable modules
- macOS XNU combines Mach (IPC, VM, threads) + BSD (processes, networking, FS) + I/O Kit
- FreeBSD developed jails (precursor to containers) and ZFS
- Minix and seL4 demonstrate microkernel principles: minimal kernel, servers in user space
- Real-time systems require deterministic timing: RMS and EDF scheduling
- Priority inversion is solved by priority inheritance

## Exercises

### Basic

1. Compare the kernel architectures of Windows, Linux, and macOS. What are the advantages and disadvantages of each approach?
2. What is priority inversion? How does priority inheritance solve it?
3. What is the difference between a hard real-time and a soft real-time system? Give examples of each.

### Intermediate

4. Write a program demonstrating priority inheritance on Linux. Create three threads at different priorities that share a mutex (use `pthread_mutexattr_setprotocol` with `PTHREAD_PRIO_INHERIT`). Show the thread execution order with and without priority inheritance.
5. Install and run FreeRTOS in a QEMU VM. Write a program with two tasks: a periodic sensor reading task (1 Hz) and a data processing task. Use a queue to pass data between them. Measure worst-case execution time (WCET).
6. Write a **simple EDF scheduler simulator** in C. Given a list of tasks (period, computation time), simulate scheduling over 1000 time units. Count deadline misses. Compare the number of deadline misses for EDF vs rate-monotonic scheduling.

### Advanced

7. Create a **Minix-style microkernel prototype** using `setjmp`/`longjmp` or signals. Implement: a kernel (message passing only), a file server process, a process manager server, and a user program. Each component runs as a separate process. The kernel provides only IPC; the file server handles file operations; the process manager handles fork/exit. Demonstrate that the file server can be restarted without crashing the kernel.
8. Build a **minimal kernel** for x86 using GRUB as a bootloader. Implement: a GDT with ring 0/3, a simple page allocator, a keyboard interrupt handler (IRQ 1), and a system call interface. Boot it in QEMU using `multiboot`. Measure how many lines of code are needed for the absolute minimum OS.
9. Write a benchmark comparing **IPC performance** across systems. Measure message latency and throughput for:
   - Linux: pipe, Unix domain socket, shared memory, TCP localhost
   - Compare with microbenchmark numbers from seL4 (130ns IPC), Mach (3-5Âµs), and Windows ALPC
   - Explain the performance differences in terms of kernel design (monolithic vs microkernel, number of context switches per IPC, cache effects)
