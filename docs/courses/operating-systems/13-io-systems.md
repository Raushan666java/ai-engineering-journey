# Chapter 13 — I/O Systems

## Learning Objectives

1. Describe I/O hardware components: ports, buses, controllers.
2. Compare programmed I/O, interrupt-driven I/O, and DMA.
3. Explain the layered I/O software architecture.
4. Understand interrupt handling and the interrupt vector.
5. Analyse the role of device drivers in the OS.

## 13.1 I/O Hardware

### 13.1.1 Ports and Buses

A device connects to the computer via a **port** (a connection point) or a **bus** (a shared set of wires and protocols). Common buses:

- **PCI Express (PCIe)**: A high-speed serial bus connecting CPU/memory to peripherals (GPU, NVMe SSD, network cards). Uses lanes; x16 provides 32 GB/s in PCIe 4.0.
- **SATA**: Serial bus for HDDs and SATA SSDs, up to 6 Gbps (SATA 3.0).
- **NVMe**: Direct connection to PCIe for SSDs, bypassing the SATA protocol. Low latency, high queue depth.

### 13.1.2 Device Controllers

A **device controller** is electronic circuitry that operates the physical device. It has local buffer storage and a set of registers (control, status, data). The OS communicates with the controller by reading and writing these registers.

Registers may be accessed via:

- **Memory-mapped I/O**: Device registers appear in the CPU's memory address space. Reads and writes to those addresses are intercepted by the hardware and routed to the device.
- **Port-mapped I/O (I/O ports)**: Special CPU instructions (`IN`, `OUT` on x86) address the device via a separate I/O address space.

### 13.1.3 Polling

The host repeatedly checks the device's status register to determine whether it is ready to transfer data.

```c
// Polling loop for reading a byte from a device
while ((inb(STATUS_PORT) & BUSY) != 0)
    ; // wait
byte = inb(DATA_PORT);
```

Polling is simple but wastes CPU cycles. If the device is almost always ready, polling is acceptable; otherwise, interrupt-driven I/O is preferred.

### 13.1.4 Interrupts

When a device needs attention (data available, operation complete, error), it asserts an interrupt signal on the CPU's interrupt request line. The CPU finishes the current instruction, saves state, and jumps to an **interrupt handler** (determined by the interrupt vector — a table mapping interrupt numbers to handler addresses).

On x86, the Interrupt Descriptor Table (IDT) stores up to 256 interrupt gate entries. The Programmable Interrupt Controller (PIC) or Advanced PIC (APIC) manages prioritisation and delivery.

**Interrupt-driven I/O sequence**:

1. Application issues a `read()` system call.
2. The device driver starts the device read and returns.
3. The process is blocked (yields the CPU).
4. When the device completes the read, it asserts an interrupt.
5. The interrupt handler copies data from device registers to memory and wakes the waiting process.
6. The scheduler continues the process, which now has the requested data.

### 13.1.5 Direct Memory Access (DMA)

Polling and interrupt-driven I/O both require the CPU to transfer each byte between the device and memory. DMA gives the device controller direct access to system memory, freeing the CPU.

**DMA operation**:

1. The OS sets up a DMA transfer: provides the buffer address, transfer size, and device command.
2. The DMA controller transfers data directly between the device and memory.
3. When the transfer completes, the DMA controller raises a single interrupt.

DMA is essential for high-throughput devices like disk controllers and network interfaces. Without DMA, every packet would require a CPU copy.

```c
// Conceptual DMA setup (simplified)
struct dma_descriptor {
    void *buffer_addr;
    size_t count;
    int device_id;
    int direction; // READ or WRITE
};

void start_dma(struct dma_descriptor *desc) {
    // Program the DMA controller
    outl(desc->buffer_addr, DMA_ADDR_REG);
    outl(desc->count, DMA_COUNT_REG);
    outb(desc->direction, DMA_CMD_REG);
    // DMA proceeds autonomously
}
```

## 13.2 I/O Software Layers

I/O software is organised in layers to provide device independence and modularity.

### 13.2.1 User-Level I/O Library

Provides standard functions (`printf`, `scanf`, `fread`, `fwrite`, `connect`, `send`) that invoke system calls on behalf of the application. The C standard library (`libc`) provides buffering (e.g., stdio's `setvbuf`).

### 13.2.2 Device-Independent OS Layer

Provides common I/O services that apply across all devices:

- Device naming (e.g., `/dev/sda`).
- Protection (access checks).
- Blocking vs. non-blocking I/O.
- Buffering and caching.
- Error handling (retry logic).
- Allocation and deallocation of dedicated devices.

### 13.2.3 Device Driver

A **device driver** is a kernel module that translates OS-generic I/O requests into device-specific register operations. The driver is device-specific but interfaces with the OS through a standard interface.

Block device driver interface (Linux):

```c
static struct block_device_operations mydrv_ops = {
    .open = mydrv_open,
    .release = mydrv_release,
    .submit_bio = mydrv_submit_bio,
};
```

The driver must handle:

- Initialisation (probe the device, allocate resources).
- I/O requests (start, complete, timeout).
- Power management (suspend, resume).
- Interrupt handling.

### 13.2.4 Interrupt Handler

The lowest layer responds to device interrupts. It must run quickly — typically it acknowledges the interrupt, copies a minimal amount of data, and schedules a **bottom half** (Linux tasklet, workqueue) for heavyweight processing deferred to a safer context.

```c
// Simplified interrupt handler
irqreturn_t mydrv_interrupt(int irq, void *dev_id) {
    struct my_device *dev = dev_id;
    
    // Acknowledge interrupt to the device
    writeb(ACK, dev->ioaddr + STATUS_REG);
    
    if (dev->dma_in_progress) {
        // DMA completed; wake waiting process
        dev->dma_in_progress = 0;
        complete(&dev->dma_done);
    }
    
    return IRQ_HANDLED;
}
```

## 13.3 Block Devices vs. Character Devices

- **Block devices** (disks): Random-access, buffered, block-addressable (sectors). The kernel caches block device data in the page cache and the buffer cache.
- **Character devices** (keyboard, serial port): Sequential, unbuffered, stream-of-bytes. Each read or write goes directly to the device.

## 13.4 Synchronous vs. Asynchronous I/O

- **Synchronous (blocking) I/O**: The system call blocks the process until the I/O completes. Simple programming model but may underutilise the CPU.
- **Asynchronous (non-blocking) I/O**: The system call returns immediately; the process checks for completion later or receives a signal/callback. The POSIX AIO interface (`aio_read`, `aio_write`) and Linux `io_uring` support asynchronous I/O.

**io_uring** (Linux 5.1+): A shared ring buffer between user space and kernel for submission and completion of I/O operations. Eliminates the overhead of per-operation system calls, achieving millions of IOPS.

## 13.5 I/O Buffering

- **Single buffer**: One kernel buffer; data is copied from device to kernel buffer, then to user buffer.
- **Double buffering**: Two kernel buffers; one is filled while the other is drained to user space.
- **Circular buffer**: Multiple buffers in a ring; producer (device) writes to the current buffer; consumer (process) reads from the oldest filled buffer.
- **Caching**: Data read from a device is kept in memory (page cache) for future accesses, reducing or eliminating repeated device I/O.

## Summary

I/O systems bridge the gap between physical devices and software abstractions. Polling wastes CPU; interrupts provide responsiveness; DMA enables high throughput without CPU copying. The layered I/O architecture isolates device-specific code in drivers while providing generic interfaces for the rest of the OS. Modern I/O frameworks like io_uring further reduce overhead to near-zero in the fast path.

## Exercises

### Review Questions

1. What is the difference between memory-mapped I/O and port-mapped I/O?
2. Describe the sequence of events in interrupt-driven I/O.
3. Why is DMA necessary for high-performance devices?
4. What are the four layers of I/O software?
5. What advantage does asynchronous I/O provide over synchronous I/O?

### Application Problems

1. A network device generates 50,000 interrupts per second. The interrupt handler takes 2 microseconds. What fraction of CPU time is spent handling interrupts? How would DMA and interrupt coalescing reduce this overhead?
2. A disk with DMA transfers 64 KB blocks. DMA setup takes 5 microseconds; the DMA transfer runs at 800 MB/s. Compare the CPU overhead of DMA-based I/O versus programmed I/O (byte-by-byte with polling at 100 ns per byte).
3. A device uses double buffering with two 1 KB kernel buffers. The device produces data at 500 KB/s. The process consumes data at 200 KB/s. Will the system ever lose data? Explain.

### Challenge Problem

1. Implement a character device driver (as a Linux kernel module) that creates a `/dev/pingpong` device. Reading from the device returns the string "pong". Writing to the device stores the written data in a kernel buffer; reading it back returns the stored data. Include `open`, `release`, `read`, and `write` operations. Test the module with userspace `echo` and `cat` commands.
