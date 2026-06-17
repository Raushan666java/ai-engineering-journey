# Chapter 13: I/O Systems

## Learning Objectives

- Describe I/O hardware components: ports, buses, controllers, and devices
- Compare programmed I/O, interrupt-driven I/O, and DMA
- Explain the interrupt handling sequence in a modern OS
- Design the kernel I/O subsystem: buffering, caching, spooling, error handling
- Describe the device driver interface and the I/O request life cycle
- Understand the performance implications of different I/O models

## Theory

![I/O Systems](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/operating-systems/13-io-systems.png)

### I/O Hardware

I/O devices vary enormously in function, but they share common hardware interfaces.

#### Device Types

| Category | Examples | Data Rate | Interface |
|----------|----------|-----------|-----------|
| Character | Keyboard, mouse, serial ports | 10–1000 B/s | Interrupt-driven |
| Block | Disk, SSD, USB storage | 50–5000 MB/s | DMA, block commands |
| Network | Ethernet, Wi-Fi | 1–100 Gb/s | DMA, packet-oriented |

#### Communication with Devices

Three fundamental approaches for the CPU to communicate with I/O devices:

1. **Port-mapped I/O**: Special CPU instructions (`IN`, `OUT` on x86) read/write device registers
2. **Memory-mapped I/O**: Device registers appear in the memory address space; regular load/store instructions access them
3. **Hybrid**: Some devices use port I/O for control and memory-mapped for data

```
Memory-mapped I/O:
CPU Address Space:
┌──────────────────────┐
│ RAM                   │
├──────────────────────┤
│ Device registers      │  ← Reading/writing here
│ (Video RAM, NIC,     │     communicates with device
│  disk controller)     │
└──────────────────────┘
```

#### Polling vs Interrupts

**Polling**: The CPU repeatedly checks a device's status register. Simple but wasteful.

```c
// Polling loop — CPU spins until device is ready
while (!(status_register & DEVICE_READY)) {
    // Busy wait — CPU does nothing useful
}
data = data_register;  // Read data from device
```

**Interrupts**: The device notifies the CPU when it needs attention. More efficient — the CPU can do other work.

```
CPU executes user process
         │
    ┌────┴────┐
    │         │
    ↓         │ (interrupt occurs)
Device ──────→│ CPU saves state
signals       │ Load interrupt handler
              │ Handle interrupt
              │ Restore state
              │ Resume user process
```

#### DMA (Direct Memory Access)

For block transfers, interrupt-driven I/O is still wasteful — the CPU would have to copy every byte from the device register to memory.

**DMA** solves this: a specialized controller transfers data directly between device and memory without CPU involvement.

```
Without DMA:
  CPU: for each byte: read from device register, write to memory
  CPU is occupied for the entire transfer

With DMA:
  1. CPU tells DMA controller: "transfer N bytes from device to memory address X"
  2. DMA controller handles the transfer
  3. DMA controller interrupts CPU when done
  4. CPU is free during the transfer!
```

```
DMA Transfer:
┌─────┐  request bus  ┌──────────────────┐
│ CPU │◄──────────────│ DMA Controller    │
│     │  grant bus    │                   │
└─────┘   │          │ Registers:        │
          │          │  source addr      │
          │          │  dest addr        │
          │          │  byte count       │
          │          └────────┬──────────┘
          │                   │
          │    ┌──────────────┼──────────────┐
          │    │  Read from   │  Write to    │
          │    │  Device      │  Memory      │
          │    │              │              │
          │    ↓              ↓              │
          │  ┌─────┐      ┌────────┐        │
          │  │Device│      │ Memory │        │
          │  └─────┘      └────────┘        │
```

### Kernel I/O Subsystem

The kernel provides a range of services to manage I/O.

#### I/O Scheduling

The kernel maintains a queue of pending I/O requests for each device. The scheduler reorders requests to improve performance (disk scheduling from Chapter 12).

```
Request Queue for /dev/sda:
┌────┬────┬────┬────┬────┬────┐
│ R1 │ R2 │ R3 │ R4 │ R5 │ R6 │  ← Rearranged by scheduler
└────┴────┴────┴────┴────┴────┘
  ↓
Device Driver → Disk
```

#### Buffering

A **buffer** is a memory region that holds data while it is being transferred between two devices or between a device and an application.

**Why buffer?**
1. **Speed mismatch**: Keyboard input is slow; CPU is fast. Buffer accumulates keystrokes.
2. **Data transfer size**: Network packets may be small; application expects larger chunks.
3. **Copy semantics**: Data written by an application is copied to a kernel buffer; the application can then modify its buffer without affecting the I/O.

```
Application space:    write(fd, buf, 1024)
                           │
Kernel buffer:           [ copy ]
                           │
Device buffer:           [   ] → Disk
```

**Double buffering**: Two buffers are used. While one is being filled, the other is being drained. Eliminates waiting.

```
Buffer A:   [ being read from disk → ]  ← application reads from
Buffer B:   [ ← application writes to ]  ← disk fills this next

When A is consumed and B is filled, they swap roles.
```

#### Caching

A **cache** holds copies of frequently accessed data for faster access. The difference from buffering:

- A buffer holds data **in transit** (temporary storage)
- A cache holds data that might be **reused** (faster access on next use)

The **page cache** (Chapter 9) caches file data. The **buffer cache** caches disk blocks. Linux unifies these into the **page cache**.

#### Spooling

A **spool** (Simultaneous Peripheral Operations On-Line) is a buffer that holds output for a device that cannot serve interleaved requests.

**Example**: Printing. Without spooling, if two applications try to print simultaneously, their output would interleave. A **print spooler** serializes requests:

```
Application 1: write to printer → spool file job001.pdf
Application 2: write to printer → spool file job002.pdf

Print daemon:
  {spool files} → printer (one at a time)
```

#### Error Handling

I/O errors can occur at many levels. The kernel I/O subsystem layers error handling:

- **Transient errors**: Retry the operation (bad disk sector? try again)
- **Persistent errors**: Return error code to application
- **Fatal errors**: Panic or halt the system

```c
// I/O system call with error handling
ssize_t bytes = read(fd, buffer, sizeof(buffer));
if (bytes < 0) {
    switch (errno) {
        case EAGAIN:   // Non-blocking, try again
        case EINTR:    // Interrupted by signal, try again
        case EIO:      // Hardware error
        case ENOSPC:   // No space on device
        case EBADF:    // Bad file descriptor
    }
}
```

### Device Drivers

A **device driver** is kernel code that understands the specifics of a particular hardware device. The driver presents a standard interface to the kernel.

```
Application
    ↓  (system calls)
Kernel I/O Subsystem
    ↓  (block/char/network interface)
Device Driver  ── The translation layer
    ↓  (device-specific commands)
Device Controller
    ↓  (electrical signals)
Hardware Device
```

The driver provides operations like:
- `open(device)`: Initialize the device
- `read(device, buf, count)`: Read data from device
- `write(device, buf, count)`: Write data to device
- `ioctl(device, command, arg)`: Device-specific control operations

#### Device Driver Lifecycle

1. **Initialization**: Driver registers itself with the kernel (in Linux: module init)
2. **Device detection**: Find and initialize device hardware
3. **Operation**: Service requests from the kernel (read, write, ioctl)
4. **Interrupt handling**: Respond to device interrupts
5. **Cleanup**: Release resources when driver is unloaded

```c
// Simplified Linux block device driver structure
// (not actual code — illustrates the pattern)

#include <linux/module.h>
#include <linux/blkdev.h>

static struct block_device_operations my_driver_ops = {
    .owner   = THIS_MODULE,
    .open    = my_open,
    .release = my_release,
    .ioctl   = my_ioctl,
};

static int __init my_driver_init(void) {
    // Allocate major device number
    // Initialize hardware
    // Register with the block layer
    printk(KERN_INFO "My driver loaded\n");
    return 0;
}

static void __exit my_driver_exit(void) {
    // Unregister, release resources
    printk(KERN_INFO "My driver unloaded\n");
}

module_init(my_driver_init);
module_exit(my_driver_exit);
```

### STREAMS (System V)

STREAMS provide a framework for building character I/O as a pipeline of processing modules. Data flows through the stream, passing through each module.

```
Application
    ↓
Stream Head  ── Interface to user space
    ↓
Module 1     ── Line discipline (e.g., terminal processing)
    ↓
Module 2     ── Protocol processing
    ↓
Driver        ── Device hardware interface
```

Used in System V Unix for networking and terminal I/O. Linux does not use STREAMS (uses different architecture).

### I/O Models

| Model | Description | Pros | Cons |
|-------|-------------|------|------|
| **Blocking I/O** | Process sleeps until I/O completes | Simple | Process is blocked |
| **Non-blocking I/O** | `read()` returns immediately with `EAGAIN` | CPU can do other work | Must poll or use event-driven |
| **I/O multiplexing** | `select()` / `poll()` / `epoll()` — wait on multiple fds | Single thread manages many I/Os | System call overhead |
| **Signal-driven I/O** | SIGIO when device is ready | Asynchronous notification | Signal handling complexity |
| **Asynchronous I/O** | `aio_read()` — initiates I/O, callback on completion | True parallelism | Complex API |

#### Non-Blocking I/O Example

```c
#include <stdio.h>
#include <fcntl.h>
#include <unistd.h>
#include <errno.h>

int main() {
    int fd = open("/dev/tty", O_RDONLY | O_NONBLOCK);
    if (fd < 0) {
        perror("open");
        return 1;
    }

    char buffer[256];
    ssize_t n;

    while (1) {
        n = read(fd, buffer, sizeof(buffer) - 1);
        if (n > 0) {
            buffer[n] = '\0';
            printf("Got: %s", buffer);
            break;
        } else if (n == 0) {
            printf("EOF\n");
            break;
        } else if (errno == EAGAIN) {
            printf("No input yet — doing other work...\n");
            sleep(1);  // In a real program, do something useful here
        } else {
            perror("read");
            break;
        }
    }

    close(fd);
    return 0;
}
```

#### I/O Multiplexing with epoll

```c
#include <stdio.h>
#include <sys/epoll.h>
#include <fcntl.h>
#include <unistd.h>

#define MAX_EVENTS 10

int main() {
    int epoll_fd = epoll_create1(0);
    if (epoll_fd < 0) {
        perror("epoll_create");
        return 1;
    }

    struct epoll_event event;
    event.events = EPOLLIN;  // Monitor for readable
    event.data.fd = STDIN_FILENO;

    if (epoll_ctl(epoll_fd, EPOLL_CTL_ADD, STDIN_FILENO, &event) < 0) {
        perror("epoll_ctl");
        return 1;
    }

    struct epoll_event events[MAX_EVENTS];

    printf("Waiting for input (5 second timeout)...\n");

    int nfds = epoll_wait(epoll_fd, events, MAX_EVENTS, 5000);

    if (nfds < 0) {
        perror("epoll_wait");
        return 1;
    } else if (nfds == 0) {
        printf("Timeout — no input received\n");
    } else {
        printf("Input available on fd %d!\n", events[0].data.fd);
    }

    close(epoll_fd);
    return 0;
}
```

## Examples

### Example 1: Character Device — Reading Keyboard Input

```c
#include <stdio.h>
#include <termios.h>
#include <unistd.h>

int main() {
    struct termios old, new;

    // Get current terminal settings
    tcgetattr(STDIN_FILENO, &old);

    // Turn off canonical mode and echo
    new = old;
    new.c_lflag &= ~(ICANON | ECHO);
    tcsetattr(STDIN_FILENO, TCSANOW, &new);

    printf("Type characters (press 'q' to quit):\n");

    char c;
    while (read(STDIN_FILENO, &c, 1) == 1) {
        if (c == 'q') break;
        printf("You pressed: '%c' (0x%02x)\n", c, c);
    }

    // Restore terminal settings
    tcsetattr(STDIN_FILENO, TCSANOW, &old);
    return 0;
}
```

### Example 2: Measuring I/O Performance

```c
#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <unistd.h>
#include <sys/time.h>

double get_time() {
    struct timeval tv;
    gettimeofday(&tv, NULL);
    return tv.tv_sec + tv.tv_usec / 1000000.0;
}

int main() {
    int fd = open("test.dat", O_CREAT | O_WRONLY | O_TRUNC | O_SYNC, 0644);
    if (fd < 0) { perror("open"); return 1; }

    int block_size = 4096;
    int num_blocks = 256;  // 1 MB total
    char *buffer = malloc(block_size);

    // Measure write performance
    double start = get_time();
    for (int i = 0; i < num_blocks; i++) {
        write(fd, buffer, block_size);
    }
    double elapsed = get_time() - start;
    double throughput = (num_blocks * block_size) / (1024.0 * 1024.0) / elapsed;

    printf("Wrote %d blocks of %d bytes (O_SYNC)\n", num_blocks, block_size);
    printf("Time: %.3f seconds\n", elapsed);
    printf("Throughput: %.2f MB/s\n", throughput);

    free(buffer);
    close(fd);
    unlink("test.dat");
    return 0;
}
```

## Summary

- I/O devices communicate via ports, memory-mapped registers, or a hybrid approach
- Polling wastes CPU; interrupts allow overlap of I/O and computation
- DMA transfers data directly between device and memory without CPU involvement
- The kernel I/O subsystem provides scheduling, buffering, caching, spooling, and error handling
- Device drivers act as translators between the kernel and hardware
- Five I/O models: blocking, non-blocking, multiplexing, signal-driven, asynchronous
- `epoll` (Linux) enables efficient I/O multiplexing for thousands of connections
- The page cache unifies file caching with virtual memory management

## Exercises

### Basic

1. What is DMA and why is it important for block I/O? Walk through a DMA transfer.
2. What is the difference between buffering and caching? Give an example of each.
3. Explain the difference between blocking and non-blocking I/O. When would you use each?

### Intermediate

4. Write a program that measures the overhead of system calls. Call `getpid()` in a loop 1 million times and measure total time. Compare with a simple function call. What does this tell you about the cost of kernel transitions?
5. Implement a simple I/O scheduler that takes a sequence of (arrival_time, block_number) requests and schedules them using FCFS and a deadline-aware approach (prioritize requests with approaching deadlines).
6. Explain spooling. Implement a simple print spooler using a directory for spool files. Each "print" creates a file; the spooler daemon reads and "prints" (writes to stdout) files in order.

### Advanced

7. Write a benchmark comparing `read()/write()` system calls with memory-mapped I/O (`mmap()`). Create a 512 MB file, then measure the time to sum every integer in the file using each method. Explain the results.
8. Research and implement an **epoll-based TCP echo server**. The server should handle 1000+ concurrent connections using a single thread. Measure the latency and throughput and compare with a multi-threaded blocking I/O server.
9. Write a Linux kernel module that creates a simple character device. The device should maintain a circular buffer; `read()` removes bytes from the buffer and `write()` adds bytes. Test it with user-space `cat` and `echo` commands.
