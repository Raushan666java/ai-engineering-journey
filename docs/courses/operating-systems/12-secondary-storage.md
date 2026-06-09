# Chapter 12: Secondary Storage

## Learning Objectives

- Describe disk hardware: platters, tracks, sectors, cylinders, and seek time
- Implement and compare disk scheduling algorithms (FCFS, SCAN, C-SCAN, LOOK, C-LOOK)
- Calculate disk access latency (seek + rotation + transfer)
- Explain disk formatting, partitioning, and bad-block management
- Design RAID structures and compare RAID levels (0, 1, 5, 6, 10)
- Understand swap space management

## Theory

### Disk Structure

Magnetic hard disk drives (HDDs) consist of:

- **Platters**: Rigid disks coated with magnetic material
- **Surfaces**: Top and bottom of each platter (each surface has a read/write head)
- **Tracks**: Concentric circles on a surface
- **Sectors**: Smallest unit of data transfer (typically 512 bytes or 4 KB)
- **Cylinders**: The set of tracks at the same radius across all platters

```
                    ┌─────────────────┐
                    │   Spindle        │
                    │    ┌───┐         │
                    │    │   │         │
                    │  ┌─┴───┴─┐       │
                    │  │Platter│       │
                    │  │ 0     │       │
                    │  ├───────┤       │
                   ╔╣  │Platter│       │
                   ║ ║ │ 1     │       │
                   ╚╝  ├───────┤       │
                    │  │Platter│       │
                    │  │ 2     │       │
                    │  └───────┘       │
                    │  Read/Write      │
                    │  Heads (arm)     │
                    └─────────────────┘
```

### Disk Access Time

The time to read or write a disk block has three components:

```
Access Time = Seek Time + Rotational Latency + Transfer Time
```

1. **Seek Time**: Time to move the disk arm to the correct cylinder (dominant factor: 3–15 ms)
   - Average seek time on modern HDDs: 4–10 ms
   - Depends on the distance the arm must travel

2. **Rotational Latency**: Time for the desired sector to rotate under the read/write head
   - Average: half a rotation
   - At 7200 RPM: 60 / 7200 = 8.33 ms per rotation → average 4.17 ms
   - At 15000 RPM: 60 / 15000 = 4 ms per rotation → average 2 ms

3. **Transfer Time**: Time to read/write the data once the head is in position
   - Transfer rate: 100–200 MB/s for modern HDDs
   - For a 4 KB sector: 4 KB / 150 MB/s ≈ 0.027 ms (negligible compared to seek+rotation)

**Typical random I/O latency** (7200 RPM HDD): 5 ms (seek) + 4 ms (rotation) + 0.03 ms (transfer) ≈ 9 ms. This is about **100,000× slower** than main memory access (∼100 ns).

### Disk Scheduling

The OS can reorder pending disk I/O requests to improve performance. The disk scheduler selects which request to service next.

#### FCFS (First-Come, First-Served)

Process requests in arrival order. Fair but can cause wild arm movements.

```
Queue: 98, 183, 37, 122, 14, 124, 65, 67
Head starts at 53

Movement: 53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67
Total head movement: |53-98| + |98-183| + |183-37| + |37-122| + |122-14| + |14-124| + |124-65| + |65-67|
= 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640 cylinders
```

#### SCAN (Elevator Algorithm)

The arm moves in one direction, servicing all requests in its path. When it reaches the end, it reverses direction.

```
Queue: 98, 183, 37, 122, 14, 124, 65, 67
Head starts at 53, moving toward 0 (inner tracks first)

Direction ← 0:
Movement: 53 → 37 → 14 → 0 → 65 → 67 → 98 → 122 → 124 → 183
Total: |53-37| + |37-14| + |14-0| + |0-65| + |65-67| + |67-98| + |98-122| + |122-124| + |124-183|
= 16 + 23 + 14 + 65 + 2 + 31 + 24 + 2 + 59 = 236 cylinders
```

#### C-SCAN (Circular SCAN)

Like SCAN, but the arm only services requests in one direction. When it reaches the end, it jumps back to the beginning without servicing.

```
Movement: 53 → 37 → 14 → 0 → (jump to 199) → 199 → 183 → 124 → 122 → 98 → 67 → 65
                                            (no service during jump)
Total: 16 + 23 + 14 + 65 + 199 + |199-183| + |183-124| + |124-122| + |122-98| + |98-67| + |67-65|
= 16 + 23 + 14 + 65 + 199 + 16 + 59 + 2 + 24 + 31 + 2 = 451 cylinders
```

**Advantage over SCAN**: Uniform waiting time. In SCAN, cylinders in the middle get faster service than those at the edges.

#### LOOK and C-LOOK

Like SCAN/C-SCAN, but the arm only goes as far as the last request in each direction, not to the end of the disk.

```
C-LOOK (same queue, head at 53 moving toward 0):
Movement: 53 → 37 → 14 → (jump to 183) → 183 → 124 → 122 → 98 → 67 → 65
Total: 16 + 23 + 14 + |183-14| + |183-124| + |124-122| + |122-98| + |98-67| + |67-65|
= 16 + 23 + 14 + 169 + 59 + 2 + 24 + 31 + 2 = 340 cylinders
```

#### Scheduling Algorithm Comparison

| Algorithm | Total Movement | Starvation | Uniform Wait |
|-----------|---------------|------------|--------------|
| FCFS | 640 | No | Yes |
| SCAN | 236 | Possible at edges | No |
| C-SCAN | 451 | No | Yes |
| LOOK | ~200 | Possible at edges | No |
| C-LOOK | ~340 | No | Yes |

Modern Linux uses **completely fair queueing** and **deadline scheduler** — both consider request age and prioritize reads over writes.

### Disk Management

#### Formatting

1. **Low-level formatting** (physical): Divides disk into sectors that the controller can read/write. Done at the factory.
2. **Partitioning**: Divides the disk into logical groups of cylinders. Each partition is treated as a separate device.
3. **Logical formatting**: Creates a file system on a partition (writes superblock, inode table, etc.)

#### Boot Block

The first sector of the disk (MBR or GPT) contains the boot loader — a small program that loads the OS kernel.

```
MBR (Master Boot Record):
┌──────────────────────────────────┐
│ Boot code (440 bytes)             │
│ Disk signature (4 bytes)          │
│ Partition table entries (16×4=64) │
│ Magic number 0xAA55 (2 bytes)     │
└──────────────────────────────────┘
```

Modern systems use **GPT** (GUID Partition Table) instead of MBR, supporting disks larger than 2 TB and more than 4 partitions.

#### Bad Blocks

Disks develop defects (bad sectors). Two approaches:

1. **Sector sparing (forwarding)**: The disk controller remaps bad sectors to spare sectors from a reserved pool. Transparent to the OS.
2. **Sector slipping**: When a bad sector is detected during formatting, sectors are shifted past it so the bad sector is never used.

### RAID

**Redundant Array of Independent Disks** uses multiple disks to improve reliability and/or performance.

#### RAID Levels

**RAID 0 (Striping)**: Data is striped across all disks. No redundancy.

```
Disk 0    Disk 1    Disk 2
stripe0   stripe1   stripe2
stripe3   stripe4   stripe5
stripe6   stripe7   stripe8
```
**Performance**: Excellent reads/writes. **Reliability**: Any disk failure loses all data.

**RAID 1 (Mirroring)**: Data is duplicated on two disks.

```
Disk 0    Disk 1
block 0   block 0
block 1   block 1
block 2   block 2
```
**Performance**: Good reads (read from either), slower writes (write to both). **Reliability**: One disk can fail.

**RAID 5 (Striping with Parity)**: Data and parity are striped across all disks. Parity is computed using XOR.

```
Disk 0    Disk 1    Disk 2    Disk 3
Data 0    Data 1    Data 2    Parity 0-2
Data 3    Data 4    Parity    Data 5
...       ...       ...       ...
```
**Performance**: Good reads, slow writes (must read old data + old parity, compute new parity). **Reliability**: One disk can fail.

**RAID 6 (Striping with Dual Parity)**: Two parity blocks per stripe. Can survive two disk failures.

**RAID 10 (1+0)**: Mirrored stripes. Combine mirroring (RAID 1) with striping (RAID 0).

```
            RAID 0
       ┌──────┴──────┐
     RAID 1        RAID 1
    ┌──┴──┐       ┌──┴──┐
   Disk0 Disk1   Disk2 Disk3
```
**Performance**: Excellent. **Reliability**: Can survive multiple failures (one per mirror set).

#### RAID Comparison

| Level | Min Disks | Redundancy | Read perf | Write perf | Capacity |
|-------|-----------|------------|-----------|------------|----------|
| 0 | 2 | None | Excellent | Excellent | 100% |
| 1 | 2 | Mirror | Good | Good (2× writes) | 50% |
| 5 | 3 | Parity | Good | Poor | (N-1)/N |
| 6 | 4 | Dual parity | Good | Very poor | (N-2)/N |
| 10 | 4 | Mirror+stripe | Excellent | Good | 50% |

### Swap Space

Swap space is used by the virtual memory system to hold pages evicted from physical memory.

**Swap partition**: A dedicated partition on disk (Linux). No file system — just raw blocks for efficiency.

**Swap file**: A file within a file system (Windows `pagefile.sys`, Linux `swapfile`).

## Examples

### Example 1: Disk Scheduling Simulation

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define REQUESTS 8
#define DISK_MAX 200

void fcfs(int queue[], int n, int start) {
    int total = 0;
    printf("FCFS: %d", start);

    for (int i = 0; i < n; i++) {
        total += abs(start - queue[i]);
        start = queue[i];
        printf(" → %d", start);
    }
    printf("\n  Total movement: %d\n", total);
}

void scan(int queue[], int n, int start) {
    // Sort requests
    int sorted[n];
    for (int i = 0; i < n; i++) sorted[i] = queue[i];

    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (sorted[j] > sorted[j + 1]) {
                int t = sorted[j]; sorted[j] = sorted[j + 1]; sorted[j + 1] = t;
            }
        }
    }

    int total = 0;
    int current = start;
    bool direction = false;  // false = toward 0, true = toward max

    printf("SCAN: %d", start);

    if (!direction) {
        // Go toward 0
        for (int i = n - 1; i >= 0; i--) {
            if (sorted[i] < start) continue;
            // Actually we need to go from start down to the smallest request
        }
        // Let me rewrite this more carefully
        int pos = 0;
        while (pos < n && sorted[pos] < start) pos++;

        // Go down first
        for (int i = pos - 1; i >= 0; i--) {
            total += abs(current - sorted[i]);
            current = sorted[i];
            printf(" → %d", current);
        }
        // Go to 0
        if (current != 0) {
            total += current;
            current = 0;
            printf(" → %d", current);
        }
        // Reverse and go up
        for (int i = pos; i < n; i++) {
            total += abs(current - sorted[i]);
            current = sorted[i];
            printf(" → %d", current);
        }
    }

    printf("\n  Total movement: %d\n", total);
}

int main() {
    int queue[] = {98, 183, 37, 122, 14, 124, 65, 67};
    int start = 53;

    fcfs(queue, REQUESTS, start);
    // scan(queue, REQUESTS, start);  // Uncomment to test

    return 0;
}
```

### Example 2: Estimating Disk Throughput

```c
#include <stdio.h>

int main() {
    double avg_seek = 5.0;       // ms
    double rpm = 7200.0;
    double rotational_latency = (60.0 / rpm / 2.0) * 1000.0;  // ms
    double transfer_rate = 150.0;  // MB/s
    int block_size = 4096;       // bytes

    double transfer_time = (block_size / 1024.0 / 1024.0) / transfer_rate * 1000.0;

    double random_access = avg_seek + rotational_latency + transfer_time;
    double random_iops = 1000.0 / random_access;

    // Sequential: no seek, just rotation + transfer
    // Transfer 1 MB sequentially
    double sequential_transfer = (1.0 / transfer_rate) * 1000.0;
    double sequential_throughput = 1.0 / (sequential_transfer / 1000.0);

    printf("Disk: 7200 RPM, avg seek = %.1f ms\n", avg_seek);
    printf("Rotational latency: %.2f ms\n", rotational_latency);
    printf("Transfer time (4 KB): %.4f ms\n", transfer_time);
    printf("\nRandom 4 KB I/O: %.3f ms (%.0f IOPS)\n", random_access, random_iops);
    printf("Sequential throughput: ~%.0f MB/s\n", sequential_throughput);

    return 0;
}
```

## Summary

- Disk access time = seek + rotation + transfer; seek dominates (∼5–10 ms)
- SCAN/C-SCAN and LOOK/C-LOOK reduce total arm movement compared to FCFS
- C-SCAN and C-LOOK provide more uniform waiting times than SCAN-based algorithms
- RAID 0 (striping) improves performance; RAID 1 (mirroring) improves reliability
- RAID 5 and 6 use parity for space-efficient redundancy
- RAID 10 (1+0) combines mirroring and striping for best performance and reliability
- Bad blocks are handled by sector sparing (remapping) or sector slipping
- Swap space extends virtual memory onto disk for page eviction

## Exercises

### Basic

1. Given a disk with 200 cylinders, compute total head movement for FCFS and SCAN for the queue: 86, 147, 12, 95, 177, 23, 55, 104. Head starts at 50 moving toward 0.
2. What are the three components of disk access time? Which is typically the largest?
3. Describe RAID 0, RAID 1, and RAID 5. What is the effective capacity of each with 4 × 1 TB disks?

### Intermediate

4. Write a complete disk scheduling simulator that supports FCFS, SCAN, C-SCAN, LOOK, and C-LOOK. Generate random request queues and compare the algorithms on total seek distance, variance in waiting time, and maximum waiting time.
5. What is the difference between formatting and partitioning? A 500 GB disk is divided into 4 equal partitions. How much capacity does RAID 5 and RAID 10 provide with four such disks?
6. Explain the RAID 5 write penalty. Why is writing to a RAID 5 array slower than writing to a single disk? Use a specific example with a 4-disk RAID 5 array.

### Advanced

7. Write a benchmark that measures random vs sequential I/O performance on an actual disk. Use `O_DIRECT` to bypass the page cache. Test with 512-byte, 4 KB, 64 KB, and 1 MB access sizes. Report IOPS and throughput for each pattern.
8. Research the **Linux CFQ** (Completely Fair Queueing) and **deadline** I/O schedulers. Write a test program that produces a mix of random reads and sequential writes. Compare latency and throughput under each scheduler (select with `echo deadline > /sys/block/sda/queue/scheduler`).
9. Implement a FUSE file system that presents a **RAID 0 view** of two directories. When a file is created, stripe its data across the two directories in 4 KB chunks. When read, reassemble from both directories.
