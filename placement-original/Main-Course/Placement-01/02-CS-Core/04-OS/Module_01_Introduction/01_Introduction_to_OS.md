# Module 1: Introduction to Operating Systems

## What is an Operating System?
An Operating System (OS) is system software that manages computer hardware and software resources and provides common services for computer programs.

## Key Functions of an OS
1. **Resource Management**: CPU, memory, storage, I/O devices
2. **Process Management**: Creating, scheduling, terminating processes
3. **Memory Management**: Allocating and deallocating memory
4. **File Management**: Creating, reading, writing, deleting files
5. **Security**: User authentication and access control
6. **User Interface**: Command line or graphical interface

## Types of Operating Systems

### By Processing Method
1. **Batch Operating Systems**
   - Jobs processed in batches
   - No direct user interaction
   - Examples: IBM mainframes

2. **Time-Sharing Systems**
   - Multiple users share CPU time
   - Interactive computing
   - Examples: UNIX, Linux

3. **Real-Time Systems**
   - Immediate response required
   - Hard vs Soft real-time
   - Examples: Embedded systems, industrial control

### By Number of Users
1. **Single-User Systems**
   - One user at a time
   - Examples: MS-DOS, early Windows

2. **Multi-User Systems**
   - Multiple concurrent users
   - Examples: UNIX, Linux, Windows Server

### By Number of Tasks
1. **Single-Tasking**
   - One program at a time
   - Examples: MS-DOS

2. **Multi-Tasking**
   - Multiple programs simultaneously
   - Preemptive vs Cooperative
   - Examples: Windows, Linux, macOS

## OS Services

### User Services
- **Program Execution**: Load and run programs
- **I/O Operations**: File and device access
- **File System Manipulation**: Create, delete, modify files
- **Communications**: Inter-process communication
- **Error Detection**: Hardware and software error handling

### System Services
- **Resource Allocation**: CPU, memory, files, I/O devices
- **Accounting**: Track resource usage
- **Protection and Security**: Access control and authentication

## System Calls
Interface between user programs and OS kernel

### Types of System Calls
```c
// Process Control
fork()    // Create new process
exec()    // Execute program
wait()    // Wait for process
exit()    // Terminate process

// File Management
open()    // Open file
read()    // Read from file
write()   // Write to file
close()   // Close file

// Device Management
ioctl()   // Device control
read()    // Read from device
write()   // Write to device

// Information Maintenance
getpid()  // Get process ID
alarm()   // Set alarm
sleep()   // Suspend process

// Communications
pipe()    // Create pipe
shmget()  // Shared memory
msgget()  // Message queue
```

## OS Structure

### Simple Structure (MS-DOS)
```
Applications
MS-DOS Device Drivers
ROM BIOS Device Drivers
```

### Layered Approach
```
Layer N: User Programs
Layer N-1: ...
Layer 2: Memory Management
Layer 1: CPU Scheduling
Layer 0: Hardware
```

### Microkernel Structure
```
User Mode:
├── File Server
├── Device Driver
├── Application Programs
└── User Interface

Kernel Mode:
└── Microkernel (IPC, Memory Management, CPU Scheduling)
```

### Modular Kernel
```
Core Kernel
├── Loadable Modules
├── Device Drivers
├── File Systems
└── Network Protocols
```

## Popular Operating Systems

### Desktop Operating Systems
1. **Windows**
   - Proprietary Microsoft OS
   - GUI-based, user-friendly
   - Dominant desktop market share

2. **macOS**
   - Apple's UNIX-based OS
   - Integrated hardware-software
   - Creative professional focus

3. **Linux**
   - Open-source UNIX-like
   - Multiple distributions
   - Developer and server focus

### Server Operating Systems
1. **Windows Server**
   - Enterprise Windows version
   - Active Directory integration
   - .NET framework support

2. **Linux Distributions**
   - Red Hat Enterprise Linux
   - Ubuntu Server
   - SUSE Linux Enterprise

3. **UNIX Variants**
   - AIX (IBM)
   - Solaris (Oracle)
   - HP-UX (Hewlett Packard)

### Mobile Operating Systems
1. **Android**
   - Google's Linux-based OS
   - Largest mobile market share
   - Open-source with proprietary components

2. **iOS**
   - Apple's mobile OS
   - Closed ecosystem
   - Premium market focus

## OS Evolution Timeline
```
1940s: No OS (Manual operation)
1950s: Batch Systems
1960s: Multiprogramming, Time-sharing
1970s: UNIX, Personal computers
1980s: GUI, Networking
1990s: Internet integration
2000s: Mobile OS, Virtualization
2010s: Cloud computing, Containers
2020s: Edge computing, AI integration
```

## Virtual Machines
- **Concept**: Software emulation of hardware
- **Benefits**: Isolation, portability, resource efficiency
- **Types**: System VMs, Process VMs
- **Examples**: VMware, VirtualBox, Hyper-V

## Practical Exercise
1. Identify OS components on your system
2. Use system monitoring tools (Task Manager, top, htop)
3. Explore system calls using strace (Linux) or Process Monitor (Windows)
4. Compare different OS interfaces

## Programming Assignment
```c
// Simple system call demonstration
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>

int main() {
    pid_t pid;
    
    printf("Process ID: %d\n", getpid());
    printf("Parent Process ID: %d\n", getppid());
    
    pid = fork();
    
    if (pid == 0) {
        printf("Child process: %d\n", getpid());
    } else {
        printf("Parent process: %d\n", getpid());
        printf("Child PID: %d\n", pid);
    }
    
    return 0;
}
```

## Quiz Questions
1. What are the main functions of an operating system?
2. Differentiate between batch and time-sharing systems
3. What is the difference between system calls and library functions?
4. Explain the layered approach to OS design
5. What are the advantages of microkernel architecture?

## Lab Assignment
1. Install a virtual machine with Linux
2. Explore basic Linux commands
3. Write a simple C program using system calls
4. Compare Windows and Linux system architectures

## Next Module
Module 2: System Architecture - Computer System Organization