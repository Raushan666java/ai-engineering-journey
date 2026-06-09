# Chapter 18 — Case Studies

## Learning Objectives

1. Describe the Linux boot process from power-on to login prompt.
2. Explain the Windows NT executive, kernel, and subsystem architecture.
3. Identify key architectural differences between Android (Linux-based) and desktop Linux.
4. Characterise real-time operating systems and their scheduling guarantees.
5. Discuss the challenges of distributed operating systems.

## 18.1 Linux Boot Process

The boot process transforms a cold machine into a running system with user-space services.

### 18.1.1 BIOS/UEFI

- The CPU is reset and begins executing at a fixed address (0xFFFF0 on x86 = top of 1 MB region).
- The BIOS (Basic I/O System) or UEFI (Unified Extensible Firmware Interface) firmware initialises hardware: CPU, memory controller, chipset, and basic I/O devices.
- POST (Power-On Self-Test) verifies that essential hardware is functional.
- The firmware reads the boot device's first sector (MBR for BIOS, EFI System Partition for UEFI) and loads the bootloader.

### 18.1.2 Bootloader

- **GRUB 2** (Grand Unified Bootloader) reads its configuration from `/boot/grub/grub.cfg`.
- GRUB presents a menu of kernels to boot (with options for recovery, single-user mode).
- GRUB loads the selected kernel (`/boot/vmlinuz-...`) and the initramfs into memory.
- GRUB switches to protected mode (32-bit), then long mode (64-bit) if applicable.
- GRUB passes control to the kernel entry point with parameters (root device, quiet, etc.).

### 18.1.3 Kernel Initialisation

```
start_kernel()  [init/main.c]
  ├── trap_init()        — Set up IDT entries for exceptions and interrupts
  ├── mm_init()          — Memory management init (page tables, buddy allocator)
  ├── sched_init()       — Initialise scheduler (CFS, real-time)
  ├── init_IRQ()         — Set up interrupt controllers (APIC)
  ├── softirq_init()     — Initialise softirqs/tasklets
  ├── rest_init()        — Create kernel_init and kthreadd processes
  │     ├── kernel_init()
  │     │     └── do_basic_setup()
  │     │           ├── driver_init()   — Bus, class, device initialisation
  │     │           ├── init_espfix()   — Architecture-specific setup
  │     │           └── do_initcalls()  — Run all __init functions
  │     └── kthreadd()   — Kernel thread daemon (spawns kworker, watchdog, etc.)
```

Key milestones:

1. **mm_init**: The memory map is established; SLAB allocator is initialised.
2. **sched_init**: The idle thread (PID 0) is running; the scheduler is functional.
3. **kernel_init** (PID 1): The first user-space process is `init`. It loads the initramfs as a temporary root filesystem, runs device probing via udev, and eventually pivots to the real root filesystem.

### 18.1.4 init System

- **systemd** (default on most distributions) is PID 1. It:
  1. Reads unit files from `/etc/systemd/system/` and `/usr/lib/systemd/system/`.
  2. Mounts filesystems listed in `/etc/fstab`.
  3. Starts system services (networking, cron, sshd, getty).
  4. Presents the login prompt (`getty` on TTY1).

```
systemd[1]: Starting Journal Service...
systemd[1]: Started Journal Service.
systemd[1]: Starting Network Manager...
systemd[1]: Started Network Manager.
systemd[1]: Reached target Multi-User System.
Ubuntu 22.04 LTS tty1
localhost login: _
```

## 18.2 Windows NT Architecture

Windows NT (New Technology) was designed as a portable, secure, multithreaded OS. Its architecture is a hybrid kernel with a microkernel-like core and monolithic performance characteristics.

### 18.2.1 Layered Structure

```
┌───────────────────────────────────────────────┐
│  Subsystems (Environment)                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │ Win32    │ │ POSIX    │ │ OS/2     │      │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘      │
│       │            │            │             │
├───────┴────────────┴────────────┴─────────────┤
│  Executive Services                            │
│  ┌───┐ ┌───┐ ┌───┐ ┌──────┐ ┌──────┐ ┌────┐ │
│  │I/O│ │IPC│ │VM │ │Proc │ │Sec  │ │Win │ │
│  │Mgr│ │Mgr│ │Mgr│ │Mgr  │ │ Ref │ │Mgr │ │
│  └───┘ └───┘ └───┘ └──────┘ └──────┘ └────┘ │
├───────────────────────────────────────────────┤
│  Kernel (thread scheduling, interrupts, DPCs) │
├───────────────────────────────────────────────┤
│  HAL (Hardware Abstraction Layer)             │
├───────────────────────────────────────────────┤
│  Hardware                                      │
└───────────────────────────────────────────────┘
```

### 18.2.2 Key Components

- **HAL**: Abstracts platform differences (APIC, DMA, timer hardware). Each HAL supports a family of systems (SMP, UP, NUMA).
- **Kernel**: Provides low-level mechanisms: thread scheduling, interrupt handling, DPCs (Deferred Procedure Calls), and synchronisation. The kernel does not implement policies — the executive layer does.
- **Executive**: Implements OS policies through managers:
  - **Object Manager**: Names and manages all OS objects (files, processes, threads, events).
  - **Virtual Memory Manager**: Manages address spaces, demand paging, and working sets.
  - **Process Manager**: Creates and terminates processes and threads.
  - **I/O Manager**: Handles I/O requests, driver model (WDM, WDF).
  - **Security Reference Monitor**: Enforces access validation and auditing.
  - **Win32k.sys**: Window management, GDI (graphics).
- **Subsystems**: Environment subsystems translate OS-specific APIs to native NT system calls. The Win32 subsystem is the primary one; POSIX and OS/2 subsystems are legacy.

### 18.2.3 NTFS

NTFS (New Technology File System) features:

- **Journaling**: Metadata changes are logged for crash recovery.
- **Access control**: Full ACL support per file and directory.
- **Compression**: Transparent file compression.
- **Encryption** (EFS): Per-file encryption.
- **Alternate data streams**: Multiple data streams per file.
- **MFT (Master File Table)**: A relational database of all files and directories.

## 18.3 Android (Linux-Based OS)

Android is a mobile OS built on a modified Linux kernel. It is not a traditional Linux distribution — it differs significantly in the user-space stack.

### 18.3.1 Architecture

```
┌───────────────────────────────────┐
│  Applications (Java/Kotlin)       │
├───────────────────────────────────┤
│  Application Framework            │
│  ┌───┐┌───┐┌───┐┌───┐┌────┐┌──┐ │
│  │Act││Win││Pkg││Res││Tel ││Loc│ │
│  │Mgr││Mgr││Mgr││Mgr││phny││n..│ │
│  └───┘└───┘└───┘└───┘└────┘└──┘ │
├───────────────────────────────────┤
│  Binder IPC                       │
├───────────────────────────────────┤
│  Android Runtime (ART)            │
│  (DEX bytecode, JIT/AOT, GC)      │
├───────────────────────────────────┤
│  Hardware Abstraction Layer (HAL) │
├───────────────────────────────────┤
│  Linux Kernel (modified)          │
│  ├─ wakelocks                     │
│  ├─ low-memory killer             │
│  ├─ binder driver                 │
│  └─ ashmem                        │
└───────────────────────────────────┘
```

### 18.3.2 Key Differences from Desktop Linux

- **Binder**: A high-performance IPC mechanism for inter-component communication. All Android IPC goes through Binder, not D-Bus.
- **Wake locks**: Power management mechanism; prevents the CPU from sleeping while a critical operation is in progress.
- **Low-memory killer**: Instead of swap (disabled on most Android devices), the kernel kills the least important processes when memory is low.
- **No X11/Wayland**: Android uses SurfaceFlinger for compositing and hardware-accelerated rendering.
- **No glibc**: Android uses Bionic libc, a minimalist BSD-derived C library optimised for mobile.
- **Package system**: APK files contain all assets and native libraries; the Package Manager handles installation and permissions.

## 18.4 Real-Time Operating Systems (RTOS)

A real-time OS guarantees that time-critical tasks complete within specified deadlines.

### 18.4.1 Hard vs. Soft Real-Time

- **Hard real-time**: Missing a deadline causes system failure (avionics, medical devices, automotive engine control).
- **Soft real-time**: Missing deadlines degrades quality but does not cause failure (multimedia streaming, VoIP).

### 18.4.2 RTOS Scheduling

RTOS schedulers prioritise deterministic behaviour over throughput:

- **Rate-Monotonic Scheduling (RMS)**: Static priority assignment; shorter period = higher priority. Provably optimal among fixed-priority algorithms (Liu & Layland, 1973). A set of n tasks is schedulable if total utilisation ≤ n(2^{1/n} − 1). For large n, this converges to ln 2 ≈ 69%.
- **Earliest Deadline First (EDF)**: Dynamic priority; the task with the closest deadline runs next. EDF can schedule up to 100% utilisation.

### 18.4.3 RTOS Examples

- **FreeRTOS**: Small footprint, designed for microcontrollers (Cortex-M, AVR). Kernel is approximately 9 KB.
- **VxWorks**: Commercial RTOS used in aerospace, industrial, medical.
- **QNX**: Microkernel RTOS used in automotive (QNX Neutrino in many car infotainment systems).
- **RTLinux**: A real-time extension for Linux that runs the entire Linux kernel as a low-priority task under a small real-time kernel.

## 18.5 Distributed Operating Systems

A distributed OS manages multiple independent computers as a single coherent system.

### 18.5.1 Design Challenges

- **Absence of shared memory**: Communication via message passing (network).
- **No global clock**: Each node has its own clock; clock synchronisation (NTP, Lamport timestamps, vector clocks) is necessary.
- **Partial failures**: One node failing should not disable the entire system. Detecting and recovering from failures is complex.
- **Scalability**: Increased nodes increase coordination overhead.
- **Security**: Communication channels must be authenticated and encrypted.

### 18.5.2 Distributed File Systems

- **NFS (Network File System)**: Standard UNIX distributed file system. Clients mount remote directories transparently. NFSv4 supports delegation, stateful operations, and strong security (Kerberos).
- **AFS (Andrew File System)**: Designed for scalability (thousands of clients). Uses whole-file caching and callbacks for cache consistency.
- **Ceph**: A modern distributed file and object store, providing POSIX compatibility through its RADOS block layer and CRUSH data placement algorithm.

## Summary

The Linux boot process transitions from firmware to bootloader to kernel to init. Windows NT combines a microkernel-like core with monolithic executive services. Android adapts Linux for mobile with Binder IPC, wake locks, and ART. RTOS guarantees deterministic scheduling through RMS and EDF. Distributed OSs face fundamental challenges of partial failure, clock synchronisation, and scalability.

## Exercises

### Review Questions

1. List the four major stages of the Linux boot process.
2. What is the role of the HAL in Windows NT?
3. How does the Android kernel differ from standard Linux kernels?
4. What distinguishes hard real-time from soft real-time scheduling?
5. What is the biggest architectural challenge in building a distributed operating system?

### Application Problems

1. An RTOS must schedule three periodic tasks: T1 (period 10 ms, execution 3 ms), T2 (period 20 ms, execution 5 ms), T3 (period 30 ms, execution 8 ms). Determine whether this set is schedulable under RMS using the Liu & Layland bound.
2. Explain the sequence of system calls from the moment a user presses the power button on an Android device to the appearance of the home screen. Which Android-specific components (Binder, Zygote, System Server) are involved?
3. A distributed file system uses write-back caching. If a client caches a file modification and crashes before writing back, the change is lost. Propose a mechanism to reduce this window while maintaining write performance.

### Challenge Problem

1. Implement a minimal bootloader simulator: write a program that reads an ELF binary (representing a kernel), loads it into memory at the appropriate address, switches the CPU mode (using assembly), and jumps to the entry point. The "kernel" should initialise a minimal GDT and IDT, set up a basic page table, and print "Hello from kernel!" to the VGA text buffer. (Requires understanding of real-mode/protected-mode switching and x86 assembly.)
