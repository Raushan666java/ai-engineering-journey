# Chapter 12 — Secondary Storage

## Learning Objectives

1. Analyse disk scheduling algorithms and their performance characteristics.
2. Compare RAID levels in terms of performance, capacity, and fault tolerance.
3. Understand swap-space management and its role in virtual memory.
4. Calculate access times considering seek, rotation, and transfer.

## 12.1 Disk Structure

A hard disk drive (HDD) stores data on rotating platters with magnetic surfaces. Each platter is divided into concentric tracks, and each track is divided into sectors (typically 512 bytes or 4 KB). The set of tracks at the same radial position across all platters is a **cylinder**.

Access time for a disk read has three components:

1. **Seek time**: Time to move the disk arm to the correct cylinder (dominant component, 2–15 ms).
2. **Rotational latency**: Time for the desired sector to rotate under the head (half a rotation on average; at 7200 RPM, average = 4.17 ms).
3. **Transfer time**: Time to read or write the data (typically 100–200 MB/s).

Total average access time = seek + (0.5 / RPM × 60 × 1000) + (data_size / transfer_rate).

## 12.2 Disk Scheduling Algorithms

Disk scheduling reorders pending I/O requests to minimise seek time.

### 12.2.1 FCFS

Process requests in arrival order. Simple but results in long random seek patterns.

**Example**: Requests for cylinders: 98, 183, 37, 122, 14, 124, 65, 67. Starting at 53.

Head movement: 53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67 = 640 cylinders.

### 12.2.2 SSTF (Shortest Seek Time First)

Select the request with the shortest seek from the current position. Reduces total movement but can cause starvation of distant requests.

Starting at 53: 53 → 65 (12) → 67 (2) → 37 (30) → 14 (23) → 98 (84) → 122 (24) → 124 (2) → 183 (59) = 236 cylinders.

### 12.2.3 SCAN (Elevator Algorithm)

The arm moves in one direction, servicing all requests in its path, then reverses direction. Like an elevator traversing floors.

Starting at 53, moving toward 0: 53 → 37 → 14 → 0 → 65 → 67 → 98 → 122 → 124 → 183 = 53 + 183 = 236 (or compute as: 53 to 0 = 53, 0 to 183 = 183, total = 236).

### 12.2.4 C-SCAN (Circular SCAN)

The arm moves in one direction, servicing requests to the end of the disk, then jumps back to the beginning and repeats. Provides uniform waiting time.

Starting at 53, moving toward 199: 53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 0 → 14 → 37 = 199 − 53 + 199 + 37 = 382.

### 12.2.5 LOOK and C-LOOK

Variants of SCAN and C-SCAN that only go as far as the last request in each direction rather than to the end of the disk. These are what real OSs actually implement.

C-LOOK starting at 53: 53 → 65 → 67 → 98 → 122 → 124 → 183 → 14 → 37 = (183 − 53) + (183 − 14) + (37 − 14) = 130 + 169 + 23 = 322.

## 12.3 Disk Scheduling in Modern Systems

Modern SSDs (Solid State Drives) have no moving parts — seek time and rotational latency do not apply. Consequently, FCFS is adequate for SSDs; the overhead of scheduling provides no benefit. The OS must still manage the I/O queue for fairness and merging of adjacent requests (regardless of disk type).

I/O **merging** combines adjacent requests: if requests for blocks 4 and 5 are waiting, they are merged into a single request for blocks 4–6. This benefits both HDDs and SSDs.

## 12.4 RAID

RAID (Redundant Array of Independent Disks) combines multiple physical drives into a single logical unit to improve reliability and/or performance.

### 12.4.1 RAID Levels

| Level | Description | Min drives | Capacity | Read perf | Write perf | Fault tolerance |
|-------|-------------|-----------|----------|-----------|------------|-----------------|
| 0 | Striping | 2 | 100% | Excellent | Excellent | None |
| 1 | Mirroring | 2 | 50% | Good (read both) | Good | N−1 drives |
| 4 | Block-level parity | 3 | (N−1)/N | Good (no parity read) | Poor (parity bottleneck) | 1 drive |
| 5 | Distributed parity | 3 | (N−1)/N | Good | Good | 1 drive |
| 6 | Dual parity | 4 | (N−2)/N | Good | Moderate | 2 drives |
| 10 | Stripe of mirrors | 4 | 50% | Excellent | Good | Per stripe: 1 drive |

- **RAID 0**: Data is striped across drives. No redundancy — one failure loses all data.
- **RAID 1**: Data is mirrored. Writes go to both drives; reads can come from either.
- **RAID 5**: Data and parity are striped across all drives. Parity is computed as XOR of the data blocks. Single-drive failure tolerance; degraded mode reads reconstruct missing data from the remaining drives plus parity.
- **RAID 6**: Similar to RAID 5 but with two parity blocks per stripe, tolerating two simultaneous failures.
- **RAID 10**: Combine mirroring and striping. Drives are mirrored in pairs, then striped across pairs. High performance and redundancy.

### 12.4.2 Parity Calculation

For RAID 5, parity = XOR of data blocks:

```
Block 0: 1010
Block 1: 1100
Block 2: 0110
Parity P: 1010 ⊕ 1100 ⊕ 0110 = 0000
```

If Block 1 fails, it can be recovered: Block 1 = Block 0 ⊕ Block 2 ⊕ P = 1010 ⊕ 0110 ⊕ 0000 = 1100.

### 12.4.3 RAID in Software vs. Hardware

- **Hardware RAID**: Dedicated controller card with its own CPU and cache. OS sees one logical drive. Battery-backed cache enables safe write-back caching.
- **Software RAID**: Implemented by the OS (Linux md, Windows Storage Spaces). Uses CPU cycles for parity computation but is cheaper and more flexible.

## 12.4.4 Software RAID (md) on Linux

The Linux `md` (multiple device) subsystem implements RAID in software. It aggregates block devices (partitions, whole disks) into a single virtual device `/dev/md0`. Management is done via the `mdadm` utility.

```bash
# Create RAID 1 from two partitions
mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1

# Create RAID 5 from four devices
mdadm --create /dev/md1 --level=5 --raid-devices=4 /dev/sdd1 /dev/sde1 /dev/sdf1 /dev/sdg1

# Check array status
cat /proc/mdstat
mdadm --detail /dev/md0

# Replace a failed device
mdadm /dev/md0 --fail /dev/sdb1
mdadm /dev/md0 --remove /dev/sdb1
mdadm /dev/md0 --add /dev/sdh1
```

The `/proc/mdstat` output shows the state of each array, rebuild progress, and device membership. Software RAID allows any combination of disks and levels, limited only by CPU bandwidth for parity computation.

## 12.5 Swap-Space Management

Swap space provides backing store for pages evicted from physical memory. It is distinct from the filesystem — swap is managed as a raw disk partition or a file.

### 12.5.1 Swap Location

- **Swap partition**: Dedicated disk partition (Linux). No filesystem overhead; block-sized I/O is more efficient.
- **Swap file**: Regular file within an existing filesystem (Windows `pagefile.sys`). Flexible sizing but may suffer from fragmentation.

### 12.5.2 Swap Performance

The OS attempts to keep frequently accessed pages in physical memory and swap rarely used pages. The swap space is only written when a dirty page is evicted. Systems with sufficient RAM may never touch swap.

The **swappiness** parameter (/proc/sys/vm/swappiness on Linux, range 0–100) controls the kernel's tendency to swap. A value of 0 disables proactive swapping (pages are only swapped under memory pressure); 100 encourages aggressive swapping.

### 12.5.3 Swap Space Sizing

Traditional rule of thumb: 2× physical RAM. Modern systems with large memories (16–64 GB) rarely need more than swap = RAM for hibernation support (hibernation saves the entire contents of RAM to swap). With suspend-to-RAM, swap can be as small as necessary to provide headroom.

## Summary

Disk scheduling reduces seek time on HDDs through intelligent request ordering. SCAN-derived algorithms (C-SCAN, C-LOOK) provide bounded waiting and good throughput. RAID improves reliability and performance through redundancy and striping. Swap space extends virtual memory to disk. Modern practice increasingly favours SSDs, which eliminate the mechanical seek bottleneck and simplify I/O scheduling.

## Exercises

### Review Questions

1. What are the three components of disk access time?
2. How does C-SCAN provide more uniform waiting times than SCAN?
3. Why is disk scheduling less important for SSDs than for HDDs?
4. What is the storage efficiency (usable capacity / raw capacity) of RAID 5 with 5 drives? RAID 6 with 5 drives?
5. What is the purpose of swap space?

### Application Problems

1. Given pending requests for cylinders: 10, 22, 20, 2, 40, 6, 38 (current position 20). Compute the total head movement for FCFS, SSTF, SCAN (toward 0), and C-LOOK (toward 0). Assume the disk has 50 cylinders.
2. A RAID 5 array has 6 drives, each 4 TB. How much usable capacity does it provide? How many drive failures can it survive?
3. For a 7200 RPM drive with average seek time 8 ms and transfer rate 100 MB/s, compute the average time to read a 4 KB file. Then compute the time for a 1 MB contiguous file.

### Challenge Problem

1. Write a disk scheduling simulator. Read a trace file containing (arrival_time, cylinder) pairs. Implement FCFS, SSTF, SCAN, and C-LOOK. For each algorithm, report total head movement, average response time, and maximum response time. Analyse how SSTF can cause starvation by running a trace with a cluster of near cylinders and a single distant cylinder arriving periodically.
