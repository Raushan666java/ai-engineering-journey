---
id: 11-file-system-impl
slug: /operating-systems/11-file-system-impl
title: "Chapter 11: File System Implementation"
sidebar_label: "Chapter 11: File System Implementation"
sidebar_position: 11
---
# Chapter 11: File System Implementation

**<< [File Systems](./10-file-systems.md)** | [**Next: Secondary Storage**](./12-secondary-storage.md) >>

---

## Learning Objectives

- Describe the on-disk and in-memory structures of a file system
- Compare contiguous, linked, and indexed file allocation strategies
- Implement free-space management using bitmaps and linked lists
- Explain the role of the superblock, inodes, and directory entries
- Analyze file system performance, including the impact of fragmentation
- Understand journaling and write-ahead logging for crash recovery

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/operating-systems/11-file-system-impl/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/operating-systems/11-file-system-impl/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/operating-systems/11-file-system-impl/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/operating-systems/11-file-system-impl/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/operating-systems/11-file-system-impl/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/operating-systems/11-file-system-impl/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


## Chapter at a Glance

| Topic | Key Points |
|-------|------------|
| **File System Layers** | Application -> logical FS -> file-org module -> I/O control -> devices |
| **On-Disk Structures** | Boot block, superblock, free-space mgmt, inodes, file data blocks |
| **Directory Impl.** | Linear list (simple, slow) vs hash table (fast, complex) |
| **Contiguous** | Fast sequential/direct access; severe external fragmentation |
| **Linked** | No fragmentation; only sequential access (FAT helps) |
| **Indexed** | Direct access via index block; good for large files |
| **Free-Space Mgmt** | Bit vector, linked list, group counting |

## Chapter Roadmap

<div class="mermaid">
flowchart LR
    A[File System Layers] --> B[On-Disk Structures]
    B --> C[Directory Implementation]
    C --> D[Allocation Methods]
    D --> E[Contiguous / Linked / Indexed]
    E --> F[Free-Space Management]
    F --> G[Efficiency & Performance]
    G --> H[Summary]
</div>

## Theory

![File System Implementation](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/11-file-system-impl.png)

---

## 1. File System Layers

### Real-World Analogy

Think of a restaurant kitchen. The **application** is the customer ordering food. The **logical file system** is the chef deciding what to cook. The **file-organization module** is the sous-chef who knows where each ingredient is stored. The **I/O control** is the line cook who actually reaches into the fridge. The **device** is the fridge itself. Each layer abstracts the one below so the customer never thinks about fridge mechanics.

### Layered Architecture

```
Application (open, read, write)
       |
Logical File System (manages metadata, directory structure)
       |
File-Organization Module (maps logical blocks to physical blocks)
       |
I/O Control (device drivers, interrupts)
       |
Devices (disk, SSD, NVM)
```

### Numbered Steps — Read Operation

1. Application calls `read(fd, buf, 512)`.
2. The logical file system looks up the file descriptor in the per-process open-file table, finds the inode number.
3. The file-organization module consults the inode's block pointers to determine which physical disk block(s) hold the requested data.
4. If the block is not in the page cache, a request is sent down to the I/O control layer.
5. The device driver translates the logical block number into a disk address (cylinder, head, sector for HDD or LBA for SSD).
6. The disk hardware reads the sector(s) into a DMA buffer.
7. Data is copied from the DMA buffer through the page cache to the user-supplied buffer.
8. The read returns the number of bytes transferred.

### Pseudocode — Layered Read

```
function read_file(fd, buf, count):
    process_fd_table = get_current_process_fd_table()
    sys_fd_entry = process_fd_table[fd]
    inode_num = sys_fd_entry.inode_num
    inode = inode_table[inode_num]
    block_list = get_block_list(inode, sys_fd_entry.offset, count)
    for each block_num in block_list:
        if block_num in page_cache:
            copy_from_page_cache(block_num, buf)
        else:
            phys_addr = logical_to_physical(block_num)
            issue_disk_read(phys_addr, block_buffer)
            page_cache_add(block_num, block_buffer)
            copy_from_page_cache(block_num, buf)
        advance(buf, block_size)
    return bytes_read
```

### Complexity Analysis

| Operation | Complexity | Why |
|-----------|-----------|-----|
| Layered read (no cache) | O(1) per block | Direct inode-to-block mapping |
| Layered read (cached) | O(1) hash lookup | Page cache hit is constant-time |
| Layered write | O(1) per block | Same mapping path |
| Overhead per layer | O(L) where L=3-5 | Function call + context switch per boundary |

**Why O(1) per block**: The inode provides direct or indirect pointers that are computed in constant time (with at most 3 indirection levels for ext4). Each layer adds a fixed overhead but does not change asymptotic complexity.

### C++ Implementation — FS Layer Simulation

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <cstring>

const int BLOCK_SIZE = 4096;
const int NUM_BLOCKS = 1024;

class BlockDevice {
    char disk[NUM_BLOCKS][BLOCK_SIZE];
public:
    void read_block(int block_num, char* buffer) {
        std::memcpy(buffer, disk[block_num], BLOCK_SIZE);
    }
    void write_block(int block_num, const char* data) {
        std::memcpy(disk[block_num], data, BLOCK_SIZE);
    }
};

class PageCache {
    std::unordered_map<int, char*> cache;
public:
    bool is_cached(int block_num) {
        return cache.find(block_num) != cache.end();
    }
    char* get(int block_num) {
        return cache[block_num];
    }
    void put(int block_num, const char* data) {
        char* copy = new char[BLOCK_SIZE];
        std::memcpy(copy, data, BLOCK_SIZE);
        cache[block_num] = copy;
    }
    ~PageCache() {
        for (auto& [_, ptr] : cache) delete[] ptr;
    }
};

class IOController {
    BlockDevice device;
    PageCache cache;
public:
    void read(int block_num, char* buffer) {
        if (cache.is_cached(block_num)) {
            std::memcpy(buffer, cache.get(block_num), BLOCK_SIZE);
            std::cout << "  [Cache HIT] block " << block_num << "\n";
            return;
        }
        std::cout << "  [Cache MISS] reading block " << block_num << " from disk\n";
        device.read_block(block_num, buffer);
        cache.put(block_num, buffer);
    }
    void write(int block_num, const char* data) {
        device.write_block(block_num, data);
        cache.put(block_num, data);
    }
};

int main() {
    IOController io;
    char buf[BLOCK_SIZE] = {};
    const char* msg = "Hello from FS layers!";
    
    io.write(5, msg);
    io.read(5, buf);
    std::cout << "Read: " << buf << "\n";
    io.read(5, buf); // second read hits cache
    return 0;
}
```

### Python Implementation — FS Layer Simulation

```python
import os

BLOCK_SIZE = 4096

class BlockDevice:
    def __init__(self, num_blocks=1024):
        self.disk = bytearray(num_blocks * BLOCK_SIZE)
    def read_block(self, block_num):
        start = block_num * BLOCK_SIZE
        return bytes(self.disk[start:start + BLOCK_SIZE])
    def write_block(self, block_num, data):
        start = block_num * BLOCK_SIZE
        data_bytes = data if isinstance(data, bytes) else data.encode()
        self.disk[start:start + len(data_bytes)] = data_bytes
        return len(data_bytes)

class PageCache:
    def __init__(self):
        self.cache = {}
    def is_cached(self, block_num):
        return block_num in self.cache
    def get(self, block_num):
        return self.cache[block_num]
    def put(self, block_num, data):
        self.cache[block_num] = bytearray(data)

class IOController:
    def __init__(self, device):
        self.device = device
        self.cache = PageCache()
    def read(self, block_num):
        if self.cache.is_cached(block_num):
            print(f"  [Cache HIT] block {block_num}")
            return bytes(self.cache.get(block_num))
        print(f"  [Cache MISS] reading block {block_num} from disk")
        data = self.device.read_block(block_num)
        self.cache.put(block_num, data)
        return data
    def write(self, block_num, data):
        self.device.write_block(block_num, data)
        self.cache.put(block_num, data)

if __name__ == "__main__":
    dev = BlockDevice()
    io = IOController(dev)
    io.write(5, "FS Layers Demo!")
    print(io.read(5).rstrip(b'\x00').decode())
    print(io.read(5).rstrip(b'\x00').decode())  # cached
```

### Advantages & Disadvantages of Layered Design

| Aspect | Advantage | Disadvantage |
|--------|-----------|-------------|
| Abstraction | Each layer hides complexity from the one above | Cross-layer optimizations are hard |
| Portability | Only I/O control changes per device | Performance overhead per boundary |
| Maintainability | Layers can be swapped independently | Debugging spans multiple layers |
| Modularity | New file systems plug into same interface | Redundant checks across layers |
| Evolution | Upgrade one layer without touching others | Layering violations when performance matters |

### Edge Cases in Layered FS

| Edge Case | Impact |
|-----------|--------|
| **Page cache eviction** | LRU replacement may evict dirty blocks, forcing writeback before read |
| **Disk full during write** | IO controller gets -1 from device; logical FS must handle gracefully |
| **Device removed mid-operation** | Driver returns error that propagates up all layers |
| **Concurrent access** | Locking must coordinate across layers (inode lock + page cache lock) |
| **Direct I/O bypass** | Some apps bypass cache for raw device access, breaking the layering model |

---

## 2. On-Disk Structures

### Real-World Analogy

An office building. The **boot block** is the security guard's initial checklist — get the building running. The **superblock** is the building directory showing total floors, rooms per floor, and which rooms are occupied. The **inode table** is the filing cabinet where each file folder (inode) stores metadata about a document. The **data blocks** are the actual documents in the filing cabinet. The **directory** is the index card catalog that maps document names to folder IDs.

### 2.1 Boot Block

The **boot block** is the first sector (sector 0) of a partition. It contains code that the BIOS or UEFI loads into memory to bootstrap the operating system.

```
Boot Block Layout (512 bytes typical):
┌──────────┬─────────────────────────────────────┐
│ Offset   │ Content                              │
├──────────┼─────────────────────────────────────┤
│ 0-445    │ Bootstrap machine code               │
│ 446-509  │ Partition table (4 × 16-byte entries)│
│ 510-511  │ Boot signature (0x55AA)              │
└──────────┴─────────────────────────────────────┘
```

### 2.2 Superblock

The **superblock** is the metadata of the file system itself. It is replicated across the disk for redundancy (ext4 stores it at offset 1024, with backups in every block group).

#### Superblock Fields

| Field | Size | Description |
|-------|------|-------------|
| s_inodes_count | 32-bit | Total inode count |
| s_blocks_count | 32-bit | Total block count |
| s_free_blocks_count | 32-bit | Free block count |
| s_free_inodes_count | 32-bit | Free inode count |
| s_log_block_size | 32-bit | Block size = 1024 &lt;< s_log_block_size |
| s_mtime | 32-bit | Last mount time |
| s_magic | 16-bit | Magic signature (0xEF53 for ext4) |
| s_state | 16-bit | Mount state (clean, errors, etc.) |
| s_lastcheck | 32-bit | Last fsck time |
| s_checkinterval | 32-bit | Max time between fscks |

### 2.3 Inode Table

The **inode table** is a contiguous array of inodes on disk. Each file/directory has exactly one inode. The inode number is an index into this table.

### 2.4 Data Blocks

Data blocks occupy the bulk of the disk. They store:
- File contents
- Directory entries
- Indirect block pointers (for indexed allocation)
- Free list pointers (for linked allocation)

### Numbered Steps — Mount a File System

1. The OS reads the boot block from sector 0 to determine if the partition is bootable.
2. The OS reads the superblock (at offset 1024 for ext4) into memory.
3. The superblock is validated (magic number, checksum, state flag).
4. In-memory data structures are initialized: mount table entry, buffer cache.
5. The root directory inode (always inode 2 in ext4) is loaded into the in-memory inode table.
6. The file system is marked as mounted and ready for use.

### Pseudocode — Superblock Parse

```
function mount_fs(device):
    boot_block = read_sector(device, 0)
    if is_bootable(boot_block):
        load_boot_loader(boot_block)
    superblock = read_block(device, 1)  // offset 1024
    if superblock.magic != EXT4_MAGIC:
        return ERROR_INVALID_FS
    if superblock.state != FS_CLEAN:
        run_fsck(device)
    init_mount_table(device, superblock)
    root_inode = load_inode(2)  // ext4 root is always inode 2
    set_current_directory(root_inode)
    return SUCCESS
```

### Full Dry Run — Superblock Contents Trace

Assume a 4 MB ext4 partition with 4 KB blocks.

| Field | Value | Meaning |
|-------|-------|---------|
| s_inodes_count | 1024 | Room for 1024 inodes |
| s_blocks_count | 1024 | 1024 blocks × 4 KB = 4 MB |
| s_free_blocks_count | 1005 | 19 blocks used by metadata |
| s_free_inodes_count | 1010 | 14 inodes used by metadata |
| s_log_block_size | 2 | Block size = 1024 &lt;< 2 = 4096 bytes |
| s_mtime | 1700000000 | Last mounted Tue Nov 14 2023 |
| s_magic | 0xEF53 | Valid ext4 signature |
| s_state | 1 | Clean, unmounted properly |
| s_lastcheck | 1690000000 | Last fsck was months ago |
| s_checkinterval | 15552000 | 180 days between forced checks |

### C++ Implementation — Superblock Simulator

```cpp
#include <iostream>
#include <cstring>

#pragma pack(push, 1)
struct Superblock {
    uint32_t inodes_count;
    uint32_t blocks_count;
    uint32_t free_blocks_count;
    uint32_t free_inodes_count;
    uint32_t log_block_size;
    uint32_t mtime;
    uint16_t magic;
    uint16_t state;
    uint32_t lastcheck;
    uint32_t checkinterval;
};
#pragma pack(pop)

class BlockDevice {
    char* disk;
    int num_blocks;
    int block_size;
public:
    BlockDevice(int n, int bs) : num_blocks(n), block_size(bs) {
        disk = new char[n * bs];
        std::memset(disk, 0, n * bs);
    }
    void write_block(int n, const char* data) {
        std::memcpy(disk + n * block_size, data, block_size);
    }
    void read_block(int n, char* data) {
        std::memcpy(data, disk + n * block_size, block_size);
    }
    ~BlockDevice() { delete[] disk; }
};

class SimpleFS {
    BlockDevice* dev;
    Superblock sb;
    static const int BLOCK_SIZE = 4096;
public:
    SimpleFS(BlockDevice* d, int num_blocks, int num_inodes) : dev(d) {
        sb.inodes_count = num_inodes;
        sb.blocks_count = num_blocks;
        sb.free_blocks_count = num_blocks;
        sb.free_inodes_count = num_inodes;
        sb.log_block_size = 2;  // 4 KB
        sb.magic = 0xEF53;
        sb.state = 1;
        sb.lastcheck = 1700000000;
        sb.checkinterval = 15552000;
        write_superblock();
    }
    void write_superblock() {
        dev->write_block(1, (char*)&sb);
        std::cout << "Superblock written: magic=0x" << std::hex << sb.magic
                  << std::dec << " blocks=" << sb.blocks_count << "\n";
    }
    void read_superblock() {
        dev->read_block(1, (char*)&sb);
        std::cout << "Superblock read: free_blocks=" << sb.free_blocks_count
                  << " free_inodes=" << sb.free_inodes_count << "\n";
    }
};

int main() {
    BlockDevice dev(1024, 4096);
    SimpleFS fs(&dev, 1024, 256);
    fs.read_superblock();
    return 0;
}
```

### Python Implementation — Superblock Simulator

```python
import struct
import ctypes

BLOCK_SIZE = 4096

class Superblock(ctypes.Structure):
    _fields_ = [
        ("inodes_count", ctypes.c_uint32),
        ("blocks_count", ctypes.c_uint32),
        ("free_blocks_count", ctypes.c_uint32),
        ("free_inodes_count", ctypes.c_uint32),
        ("log_block_size", ctypes.c_uint32),
        ("mtime", ctypes.c_uint32),
        ("magic", ctypes.c_uint16),
        ("state", ctypes.c_uint16),
        ("lastcheck", ctypes.c_uint32),
        ("checkinterval", ctypes.c_uint32),
    ]

class BlockDevice:
    def __init__(self, num_blocks=1024, block_size=4096):
        self.disk = bytearray(num_blocks * block_size)
        self.block_size = block_size
        self.num_blocks = num_blocks
    def write_block(self, n, data):
        start = n * self.block_size
        self.disk[start:start + len(data)] = data
    def read_block(self, n, size=4096):
        start = n * self.block_size
        return self.disk[start:start + size]

def init_superblock(dev, num_blocks=1024, num_inodes=256):
    sb = Superblock()
    sb.inodes_count = num_inodes
    sb.blocks_count = num_blocks
    sb.free_blocks_count = num_blocks
    sb.free_inodes_count = num_inodes
    sb.log_block_size = 2
    sb.magic = 0xEF53
    sb.state = 1
    sb.lastcheck = 1700000000
    sb.checkinterval = 15552000
    raw = bytes(sb)
    dev.write_block(1, raw)
    print(f"Superblock initialized: {num_blocks} blocks, {num_inodes} inodes")
    return sb

def read_superblock(dev):
    raw = dev.read_block(1, ctypes.sizeof(Superblock))
    sb = Superblock.from_buffer_copy(raw)
    print(f"Free blocks: {sb.free_blocks_count}, Free inodes: {sb.free_inodes_count}")
    return sb

if __name__ == "__main__":
    dev = BlockDevice()
    init_superblock(dev)
    read_superblock(dev)
```

### Complexity Analysis — On-Disk Structures

| Structure | Access Complexity | Why |
|-----------|-----------------|-----|
| Boot block read | O(1) | Fixed sector 0 |
| Superblock read | O(1) | Fixed offset 1024 |
| Inode lookup by number | O(1) | Direct index into table |
| Directory entry search (linear) | O(n) | Must scan all entries |
| Directory entry search (hash) | O(1) avg | Hash table lookup |

**Why O(1) for inode lookup**: The inode table is a contiguous array. Given inode number i and inode size S, the disk offset is `table_start + i * S`. This is computed in constant time with one multiplication and one addition.

### Advantages & Disadvantages

| Aspect | Advantage | Disadvantage |
|--------|-----------|-------------|
| Boot block | Simple, standardized | Only 512 bytes — limits bootloader complexity |
| Superblock | Single source of truth | Catastrophic if corrupted (mitigated by backups) |
| Inode table | Fast O(1) lookup | Fixed size limits maximum file count |
| Fixed layout | Easy to implement | Hard to resize partition |

### Edge Cases

| Edge Case | Impact |
|-----------|--------|
| **Superblock corruption** | FS becomes unmountable; backups must be used |
| **Inode exhaustion** | Cannot create new files even with free blocks |
| **Block 0 corruption** | Boot block damaged; system won't boot |
| **Power loss during superblock write** | Corrupted superblock; recovery via journal |
| **Partition smaller than metadata** | Not enough room for inode table |

---

## 3. Inode — Detailed Structure

### Real-World Analogy

An inode is like a passport for a file. It carries all the identifying information: the holder's ID (inode number), permissions (what countries they can enter), timestamps (issue/expiry dates), and pointers to where the actual content is stored (visa stamps referencing specific pages).

### Inode Fields (ext4)

```
ext4 Inode (156 bytes):
┌──────────────────────┬────────┬──────────────────────────────┐
│ Field                │ Size   │ Description                  │
├──────────────────────┼────────┼──────────────────────────────┤
│ i_mode               │ 16-bit │ File type + permissions      │
│ i_uid                │ 16-bit │ Owner user ID                │
│ i_size               │ 64-bit │ File size in bytes           │
│ i_atime              │ 64-bit │ Last access time (nanosec)   │
│ i_ctime              │ 64-bit │ Last status change time      │
│ i_mtime              │ 64-bit │ Last modification time       │
│ i_dtime              │ 64-bit │ Deletion time                │
│ i_gid                │ 16-bit │ Group ID                     │
│ i_links_count        │ 16-bit │ Hard link count              │
│ i_blocks             │ 64-bit │ Number of 512-byte blocks    │
│ i_flags              │ 32-bit │ File attributes (extents, etc)│
│ i_block[15]          │ 60 bytes│ Block pointers (ext4: extents)│
│ i_generation         │ 32-bit │ File version (NFS)           │
│ i_file_acl           │ 32-bit │ Extended attribute block     │
│ i_size_high          │ 32-bit │ Upper 32 bits of size        │
│ i_obso_faddr         │ 32-bit │ Obsolete fragment address    │
│ i_extra_isize        │ 16-bit │ Extra inode size             │
│ i_checksum_hi        │ 16-bit │ Upper checksum bits          │
│ i_ctime_extra        │ 32-bit │ Extra ctime bits             │
│ i_mtime_extra        │ 32-bit │ Extra mtime bits             │
│ i_atime_extra        │ 32-bit │ Extra atime bits             │
│ i_crtime             │ 64-bit │ Creation time (nanosec)      │
│ i_crtime_extra       │ 32-bit │ Extra crtime bits            │
│ i_checksum_lo        │ 32-bit │ Lower checksum bits          │
└──────────────────────┴────────┴──────────────────────────────┘
```

### Multi-Level Index Scheme

The traditional ext2/3 inode uses 15 block pointers:

```
i_block[0..11]  → 12 direct block pointers  (small files, fast access)
i_block[12]     → 1 single indirect pointer  (medium files)
i_block[13]     → 1 double indirect pointer  (large files)
i_block[14]     → 1 triple indirect pointer  (huge files)
```

#### Maximum File Size Calculation (4 KB blocks, 4-byte pointers)

| Level | Calculation | Max Size |
|-------|-------------|----------|
| Direct (12) | 12 × 4 KB | 48 KB |
| Single indirect | (4096/4) × 4 KB = 1024 × 4 KB | 4 MB |
| Double indirect | 1024 × 1024 × 4 KB | 4 GB |
| Triple indirect | 1024 × 1024 × 1024 × 4 KB | 4 TB |
| **Total** | | **~4 TB + 4 GB + 4 MB + 48 KB** |

### Numbered Steps — Inode Lookup for Read

1. The VFS receives a read request with file descriptor fd and offset.
2. From the per-process file table, get the inode number.
3. Load the inode from disk (or in-memory cache).
4. Compute which logical block the offset falls in: `block_num = offset / block_size`.
5. If block_num &lt; 12: use `i_block[block_num]` (direct pointer).
6. If block_num &lt; 12 + 1024: compute singly indirect offset.
7. If block_num &lt; 12 + 1024 + 1024²: compute doubly indirect offset.
8. If block_num &lt; 12 + 1024 + 1024² + 1024³: compute triply indirect offset.
9. Read the physical block at the computed address.

### Pseudocode — File Read via Inode Pointers

```
function read_from_inode(inode, offset, count):
    block_size = 4096
    pointers_per_block = block_size / 4  // 1024
    start_block = offset / block_size
    end_block = (offset + count - 1) / block_size
    buf = []
    for b = start_block to end_block:
        if b < 12:
            phys = inode.direct[b]
        elif b < 12 + pointers_per_block:
            idx = b - 12
            indirect_block = read_block(inode.single_indirect)
            phys = indirect_block[idx]
        elif b < 12 + pointers_per_block + pointers_per_block^2:
            idx = b - 12 - pointers_per_block
            dbl_idx = idx / pointers_per_block
            dbl_off = idx % pointers_per_block
            dbl_block = read_block(inode.double_indirect)
            indirect_block = read_block(dbl_block[dbl_idx])
            phys = indirect_block[dbl_off]
        else:
            // triple indirect (similar pattern)
        data = read_block(phys)
        append_data(buf, data)
    return buf
```

### Dry Run — Inode Lookup for a 100 MB File

Assume 4 KB blocks, 4-byte pointers (1024 per block).

| Byte Offset | Logical Block | Pointer Level | Computation |
|-------------|--------------|---------------|-------------|
| 0 | 0 | Direct | i_block[0] → block 45 |
| 4096 | 1 | Direct | i_block[1] → block 89 |
| ... | ... | Direct | ... |
| 49152 | 12 | Single indirect | Read i_block[12] → read block 200 (indirect block) → entry[0] → block 301 |
| 53248 | 13 | Single indirect | indirect_block[1] → block 302 |
| ... | ... | Single indirect | ... |
| 4243456 | 1036 | Single indirect | indirect_block[1023] → block 1324 |
| 4247552 | 1037 | Double indirect | Read i_block[13] → dbl_indirect → read block 1400 → entry[0] → read block 1500 (indirect) → entry[0] → block 1600 |
| ... | ... | Double indirect | ... |

### C++ Implementation — Inode Manager

```cpp
#include <iostream>
#include <vector>
#include <cstring>

const int BLOCK_SIZE = 4096;
const int POINTERS_PER_BLOCK = BLOCK_SIZE / 4;  // 1024
const int NUM_DIRECT = 12;

struct Inode {
    bool used;
    int size;
    int direct[NUM_DIRECT];
    int single_indirect;
    int double_indirect;
    int triple_indirect;
    int uid;
    int gid;
    int links_count;

    Inode() : used(false), size(0), single_indirect(-1),
              double_indirect(-1), triple_indirect(-1),
              uid(0), gid(0), links_count(1) {
        std::memset(direct, -1, sizeof(direct));
    }
};

class InodeManager {
    Inode* inode_table;
    int num_inodes;

public:
    InodeManager(int n) : num_inodes(n) {
        inode_table = new Inode[n];
    }

    int allocate_inode() {
        for (int i = 0; i < num_inodes; i++) {
            if (!inode_table[i].used) {
                inode_table[i].used = true;
                inode_table[i].size = 0;
                inode_table[i].links_count = 1;
                std::cout << "Allocated inode " << i << "\n";
                return i;
            }
        }
        return -1;
    }

    void free_inode(int inum) {
        if (inum >= 0 && inum < num_inodes) {
            inode_table[inum].used = false;
            std::cout << "Freed inode " << inum << "\n";
        }
    }

    int resolve_block(int inum, int logical_block) {
        if (logical_block < NUM_DIRECT) {
            return inode_table[inum].direct[logical_block];
        }
        int offset = logical_block - NUM_DIRECT;
        if (offset < POINTERS_PER_BLOCK) {
            return -2;  // need to read single indirect
        }
        offset -= POINTERS_PER_BLOCK;
        if (offset < POINTERS_PER_BLOCK * POINTERS_PER_BLOCK) {
            return -3;  // need to read double indirect
        }
        return -4;  // triple indirect
    }

    void print_inode(int inum) {
        if (inum < 0 || inum >= num_inodes || !inode_table[inum].used) {
            std::cout << "Inode " << inum << ": not in use\n";
            return;
        }
        Inode& in = inode_table[inum];
        std::cout << "Inode " << inum << ": size=" << in.size
                  << " links=" << in.links_count << "\n";
        std::cout << "  Direct: ";
        for (int i = 0; i < NUM_DIRECT; i++) {
            if (in.direct[i] >= 0) std::cout << in.direct[i] << " ";
        }
        std::cout << "\n  SingleIndirect=" << in.single_indirect
                  << " DoubleIndirect=" << in.double_indirect << "\n";
    }

    ~InodeManager() { delete[] inode_table; }
};

int main() {
    InodeManager mgr(128);
    int ino = mgr.allocate_inode();
    mgr.print_inode(ino);
    mgr.free_inode(ino);
    return 0;
}
```

### Python Implementation — Inode Manager

```python
BLOCK_SIZE = 4096
POINTERS_PER_BLOCK = BLOCK_SIZE // 4
NUM_DIRECT = 12

class Inode:
    def __init__(self):
        self.used = False
        self.size = 0
        self.direct = [-1] * NUM_DIRECT
        self.single_indirect = -1
        self.double_indirect = -1
        self.triple_indirect = -1
        self.uid = 0
        self.gid = 0
        self.links_count = 1

    def __repr__(self):
        if not self.used:
            return "Inode: unused"
        return (f"Inode: size={self.size}, links={self.links_count}, "
                f"direct={[d for d in self.direct if d >= 0]}")

class InodeManager:
    def __init__(self, num_inodes=128):
        self.table = [Inode() for _ in range(num_inodes)]
    def allocate_inode(self):
        for i, inode in enumerate(self.table):
            if not inode.used:
                inode.used = True
                print(f"Allocated inode {i}")
                return i
        return -1
    def free_inode(self, inum):
        if 0 <= inum < len(self.table):
            self.table[inum].used = False
    def resolve_block(self, inum, logical_block):
        if logical_block < NUM_DIRECT:
            return self.table[inum].direct[logical_block]
        return -2  # indirect needed
    def print_inode(self, inum):
        if 0 <= inum < len(self.table) and self.table[inum].used:
            print(self.table[inum])
        else:
            print(f"Inode {inum}: not in use")

if __name__ == "__main__":
    mgr = InodeManager(128)
    ino = mgr.allocate_inode()
    mgr.print_inode(ino)
```

### Complexity Analysis — Inode Operations

| Operation | Complexity | Why |
|-----------|-----------|-----|
| Allocate inode | O(n) worst, O(1) amortized | Scan for free entry; superblock tracks free count |
| Free inode | O(1) | Just mark unused |
| Direct block lookup | O(1) | Array index |
| Single indirect lookup | O(1) | 2 block reads: indirect + data |
| Double indirect lookup | O(1) | 3 block reads |
| Triple indirect lookup | O(1) | 4 block reads |
| Inode table write to disk | O(1) | Single block write |

**Why still O(1) for multi-level**: The number of indirection levels is fixed (3 for ext2/3, 1 for ext4 extents). Even triple indirect requires exactly 4 block reads — constant time.

### Advantages & Disadvantages of Inode Design

| Aspect | Advantage | Disadvantage |
|--------|-----------|-------------|
| Multi-level index | Huge files without huge inode | 4+ reads for large files |
| Direct pointers | Zero overhead for small files | Fixed 12 direct slots |
| Fixed inode table | Fast O(1) lookup | Limits max files |
| Separation of metadata | Easy to cache, backup | Two disk seeks per read (inode + data) |

### Edge Cases

| Edge Case | Impact |
|-----------|--------|
| **Inode exhaustion before block exhaustion** | Cannot create files even with free space |
| **File larger than triple indirect max** | Returns EFBIG error |
| **Inode 0** | Reserved — cannot be used for files |
| **Hard link count overflow** | Limited to 2^16 - 1 = 65535 links |
| **Corrupted indirect block pointer** | Points to wrong data; fsck must repair |

---

## 4. Directory Implementation

### Real-World Analogy

A directory is like a phone book. The **linear list** approach is a phone book printed alphabetically — you scan page by page until you find the name. The **hash table** approach is a phone book with tabs — you go directly to the correct section.

### 4.1 Linear List Implementation

A directory file contains a simple list of entries. Each entry maps a filename to an inode number.

```
Directory file (linear list):
┌──────────┬────────────┬──────────┬──────┬─────────────┐
│ inode #  │ rec_len    │ name_len │ type │ name         │
├──────────┼────────────┼──────────┼──────┼─────────────┤
│ 12345    │ 16         │ 4        │ reg  │ "home"       │
│ 12346    │ 24         │ 11       │ reg  │ "documents"  │
│ 12347    │ 40         │ 4        │ dir  │ "docs"       │
│ 12348    │ 16         │ 6        │ reg  │ "notes.txt"  │
└──────────┴────────────┴──────────┴──────┴─────────────┘
```

#### Operations on Linear List

| Operation | Steps |
|-----------|-------|
| **Lookup** | Scan list from start; compare name strings; O(n) |
| **Create** | Scan for empty slot or append; O(n) |
| **Delete** | Mark entry as empty (or compact); O(n) |
| **Rename** | Find entry; update name field; O(n) |

#### Pseudocode — Linear Directory Lookup

```
function dir_lookup_linear(dir_inode, target_name):
    dir_data = read_all_blocks(dir_inode)
    offset = 0
    while offset < dir_inode.size:
        entry = parse_dir_entry(dir_data[offset:])
        if entry.inode != 0 and entry.name == target_name:
            return entry.inode
        offset += entry.rec_len
    return -1  // not found
```

### 4.2 Hash Table Implementation

A hash table stores directory entries indexed by a hash of the filename. The directory file contains both the hash table and the entry data.

```
Hash Table Directory:
┌──────┬──────────────────────────────────────────────────┐
│ Hash │ Pointer to entry (or collision chain)            │
├──────┼──────────────────────────────────────────────────┤
│ 0xA3 │ → inode=12345, name="home"                       │
│ 0xB7 │ → inode=12347, name="docs" → inode=12346, name="documents" │
│ 0xC1 │ → inode=12348, name="notes.txt"                  │
└──────┴──────────────────────────────────────────────────┘
```

#### Pseudocode — Hash Directory Lookup

```
function dir_lookup_hash(dir_inode, target_name):
    hash = compute_hash(target_name)
    dir_data = read_all_blocks(dir_inode)
    entry_ptr = hash_table[hash % table_size]
    while entry_ptr != NULL:
        entry = read_entry(dir_data, entry_ptr)
        if entry.name == target_name:
            return entry.inode
        entry_ptr = entry.next  // collision chain
    return -1
```

### Dry Run — Linear Lookup vs Hash Lookup

Search for "notes.txt" in a directory with 1000 files.

**Linear lookup:**
| Step | Position | Entry | Match? |
|------|----------|-------|--------|
| 1 | 0 | "home" | No |
| 2 | 16 | ".profile" | No |
| 3 | 32 | "documents" | No |
| ... | ... | ... | ... |
| 972 | 15552 | "notes.txt" | Yes |
| Total: 972 comparisons | | | |

**Hash lookup:**
| Step | Position | Entry | Match? |
|------|----------|-------|--------|
| 1 | Compute hash("notes.txt") = 0xC1 | | |
| 2 | Hash table[0xC1 % 256] → entry at byte 16000 | "notes.txt" | Yes |
| Total: 1 hash + 1 comparison | | | |

### C++ Implementation — Directory

```cpp
#include <iostream>
#include <vector>
#include <cstring>
#include <functional>

struct DirEntry {
    uint32_t inode;
    uint16_t rec_len;
    uint8_t name_len;
    uint8_t file_type;
    char name[255];
};

class LinearDirectory {
    std::vector<DirEntry> entries;

public:
    void add_entry(uint32_t inode, const std::string& name, uint8_t type) {
        DirEntry e;
        e.inode = inode;
        e.name_len = name.length();
        e.file_type = type;
        e.rec_len = 8 + e.name_len;  // minimum record length
        std::memset(e.name, 0, 255);
        std::memcpy(e.name, name.c_str(), e.name_len);
        entries.push_back(e);
    }

    uint32_t lookup(const std::string& name) {
        for (const auto& e : entries) {
            if (e.inode != 0 && e.name_len == name.length() &&
                std::memcmp(e.name, name.c_str(), e.name_len) == 0) {
                return e.inode;
            }
        }
        return 0;  // not found
    }

    bool remove(const std::string& name) {
        for (auto& e : entries) {
            if (e.inode != 0 && e.name_len == name.length() &&
                std::memcmp(e.name, name.c_str(), e.name_len) == 0) {
                e.inode = 0;  // mark deleted
                return true;
            }
        }
        return false;
    }

    void list() {
        for (const auto& e : entries) {
            if (e.inode != 0) {
                std::cout << "inode=" << e.inode << " name=";
                std::cout.write(e.name, e.name_len);
                std::cout << "\n";
            }
        }
    }
};

class HashDirectory {
    static const int TABLE_SIZE = 64;
    std::vector<DirEntry> table[TABLE_SIZE];

    int hash(const std::string& name) {
        std::hash<std::string> h;
        return h(name) % TABLE_SIZE;
    }

public:
    void add_entry(uint32_t inode, const std::string& name, uint8_t type) {
        DirEntry e;
        e.inode = inode;
        e.name_len = name.length();
        e.file_type = type;
        std::memset(e.name, 0, 255);
        std::memcpy(e.name, name.c_str(), e.name_len);
        int bucket = hash(name);
        table[bucket].push_back(e);
    }

    uint32_t lookup(const std::string& name) {
        int bucket = hash(name);
        for (const auto& e : table[bucket]) {
            if (e.inode != 0 && e.name_len == name.length() &&
                std::memcmp(e.name, name.c_str(), e.name_len) == 0) {
                return e.inode;
            }
        }
        return 0;
    }
};

int main() {
    LinearDirectory dir;
    dir.add_entry(100, "readme.txt", 0);
    dir.add_entry(101, "main.cpp", 0);
    dir.add_entry(200, "docs", 1);
    dir.list();

    uint32_t ino = dir.lookup("main.cpp");
    std::cout << "main.cpp → inode " << ino << "\n";

    dir.remove("readme.txt");
    std::cout << "After removal:\n";
    dir.list();

    HashDirectory hdir;
    hdir.add_entry(100, "readme.txt", 0);
    ino = hdir.lookup("readme.txt");
    std::cout << "Hash lookup: readme.txt → inode " << ino << "\n";

    return 0;
}
```

### Python Implementation — Directory

```python
import hashlib

class DirEntry:
    def __init__(self, inode, name, file_type=0):
        self.inode = inode
        self.name = name
        self.file_type = file_type

class LinearDirectory:
    def __init__(self):
        self.entries = []
    def add(self, inode, name, file_type=0):
        self.entries.append(DirEntry(inode, name, file_type))
    def lookup(self, name):
        for e in self.entries:
            if e.inode != 0 and e.name == name:
                return e.inode
        return None
    def remove(self, name):
        for e in self.entries:
            if e.inode != 0 and e.name == name:
                e.inode = 0  # mark deleted
                return True
        return False
    def list(self):
        for e in self.entries:
            if e.inode != 0:
                print(f"inode={e.inode} name={e.name}")

class HashDirectory:
    def __init__(self, table_size=64):
        self.table_size = table_size
        self.table = [[] for _ in range(table_size)]
    def _hash(self, name):
        return int(hashlib.md5(name.encode()).hexdigest(), 16) % self.table_size
    def add(self, inode, name, file_type=0):
        bucket = self._hash(name)
        self.table[bucket].append(DirEntry(inode, name, file_type))
    def lookup(self, name):
        bucket = self._hash(name)
        for e in self.table[bucket]:
            if e.name == name:
                return e.inode
        return None

if __name__ == "__main__":
    ld = LinearDirectory()
    ld.add(101, "main.py")
    ld.add(102, "readme.md")
    ld.list()
    print(f"Lookup 'main.py': inode {ld.lookup('main.py')}")
    ld.remove("readme.md")
    ld.list()

    hd = HashDirectory()
    hd.add(201, "notes.txt")
    print(f"Hash lookup 'notes.txt': inode {hd.lookup('notes.txt')}")
```

### Directory Comparison

| Aspect | Linear List | Hash Table |
|--------|-----------|------------|
| Lookup complexity | O(n) | O(1) average |
| Insert | O(n) scan + append | O(1) hash + append |
| Delete | O(n) scan + mark | O(1) hash + mark |
| Space overhead | Minimal | Hash table size (fixed or dynamic) |
| Collision handling | N/A | Chaining or open addressing |
| Cache behavior | Poor (scan entire list) | Good (direct jump) |
| Implementation complexity | Trivial | Moderate |
| Used in | Simple FS, small directories | UFS (dirhash), NTFS (B-tree), ext4 (htree) |

### Edge Cases in Directory Implementation

| Edge Case | Linear List | Hash Table |
|-----------|-------------|------------|
| **Empty directory** | Single "." and ".." entries | Empty hash table |
| **Very long filename** | Entire entry may span multiple dir blocks | Hash unaffected |
| **Pathological hash** | N/A | All names hash to same bucket → O(n) |
| **Concurrent modification** | Need coarse lock | Need per-bucket or per-entry lock |
| **Delete + create same name** | Reuse stale entry | Same |
| **Directory exceeds one block** | Read linked/indexed list of blocks | Same |

---

## 5. Allocation Methods

### 5.1 Contiguous Allocation

### Real-World Analogy

Contiguous allocation is like a library where every book must occupy a consecutive set of shelves. If you need 5 shelves for a book, you must find 5 empty shelves in a row. When books are removed, gaps appear between other books — and you can't fill those gaps with a book that needs more shelves than the gap provides.

### How It Works

Each file occupies a set of contiguous blocks on disk. The directory entry stores the starting block and the length (in blocks).

```
Contiguous Allocation Layout:
Disk Blocks: [0][1][2][3][4][5][6][7][8][9][10][11][12][13][14][15]
             File A (start=1, len=5)    File B (start=10, len=3)
```

### Directory Entry (Contiguous)

```
┌───────────┬────────────┬──────────┐
│ Filename  │ Start Block│ Length   │
├───────────┼────────────┼──────────┤
│ file.txt  │ 5          │ 4        │
│ data.bin  │ 12         │ 2        │
└───────────┴────────────┴──────────┘
```

### Numbered Steps — Write with Contiguous Allocation

1. The file system receives a request to write N blocks of data.
2. It searches the free-space bitmap (or list) for N consecutive free blocks.
3. If found, it records the starting block number and length in the directory entry.
4. It marks those N blocks as used in the bitmap.
5. It writes data sequentially to the allocated blocks.
6. If not enough contiguous space is available, the write fails with ENOSPC.

### Pseudocode — Contiguous Allocation

```
function allocate_contiguous(size_in_blocks):
    for start = 0 to total_blocks - size_in_blocks:
        if all_blocks_free(start, size_in_blocks):
            for b = start to start + size_in_blocks - 1:
                mark_block_used(b)
            return start
    return -1  // not enough contiguous space

function read_contiguous(file, buffer, offset, count):
    block = file.start_block + (offset / block_size)
    read_from_block(block, buffer)
```

### Full Dry Run — External Fragmentation

Disk has 16 blocks. Initially all free.

**Step 1: Create File A (4 blocks)**
```
Search: blocks 0-3 free → allocate
Bitmap: [1][1][1][1][0][0][0][0][0][0][0][0][0][0][0][0]
         File A
```

**Step 2: Create File B (3 blocks)**
```
Search: blocks 4-6 free → allocate
Bitmap: [1][1][1][1][1][1][1][0][0][0][0][0][0][0][0][0]
         File A     File B
```

**Step 3: Create File C (5 blocks)**
```
Search: blocks 7-11 free → allocate
Bitmap: [1][1][1][1][1][1][1][1][1][1][1][1][0][0][0][0]
         File A     File B     File C
```

**Step 4: Delete File B (blocks 4-6)**
```
Bitmap: [1][1][1][1][0][0][0][1][1][1][1][1][0][0][0][0]
         File A      GAP     File C
         Free blocks: 4,5,6,12,13,14,15
         Contiguous groups: [4-6] (size 3), [12-15] (size 4)
```

**Step 5: Create File D (4 blocks)**
```
Search for 4 consecutive free blocks:
  Groups: [4-6] size 3 — too small
           [12-15] size 4 — fits!
Allocate blocks 12-15.

Bitmap: [1][1][1][1][0][0][0][1][1][1][1][1][1][1][1][1]
         File A      GAP     File C     File D
```

**Step 6: Create File E (4 blocks) — FAILS**
```
Search for 4 consecutive free blocks:
  [4-6] size 3 — too small
  No other group large enough.

Result: ENOSPC even though 3 blocks are free!
This is EXTERNAL FRAGMENTATION.
```

**External Fragmentation Summary:**
```
Initially free: 16 blocks
After operations: 3 blocks free but unusable (cannot allocate 4-block file)
Fragmentation = 3 wasted / 16 total = 18.75% wasted
```

### C++ Implementation — Contiguous Allocation

```cpp
#include <iostream>
#include <vector>
#include <cstring>
#include <string>

const int NUM_BLOCKS = 64;
const int BLOCK_SIZE = 512;

class ContiguousFS {
    char disk[NUM_BLOCKS][BLOCK_SIZE];
    bool bitmap[NUM_BLOCKS];

    struct FileEntry {
        std::string name;
        int start_block;
        int length;
        bool used;
    };

    std::vector<FileEntry> files;

public:
    ContiguousFS() {
        std::memset(disk, 0, sizeof(disk));
        std::memset(bitmap, 0, sizeof(bitmap));  // all free
    }

    int find_contiguous_space(int needed) {
        int run = 0;
        for (int i = 0; i < NUM_BLOCKS; i++) {
            if (!bitmap[i]) {
                run++;
                if (run == needed) {
                    return i - needed + 1;
                }
            } else {
                run = 0;
            }
        }
        return -1;
    }

    bool create_file(const std::string& name, int size_in_blocks) {
        int start = find_contiguous_space(size_in_blocks);
        if (start < 0) {
            std::cout << "Cannot create " << name << ": no contiguous space ("
                      << size_in_blocks << " blocks needed)\n";
            return false;
        }
        for (int i = 0; i < size_in_blocks; i++) {
            bitmap[start + i] = true;
        }
        files.push_back({name, start, size_in_blocks, true});
        std::cout << "Created " << name << " at block " << start
                  << " (" << size_in_blocks << " blocks)\n";
        return true;
    }

    bool delete_file(const std::string& name) {
        for (auto& f : files) {
            if (f.name == name && f.used) {
                for (int i = 0; i < f.length; i++) {
                    bitmap[f.start_block + i] = false;
                }
                f.used = false;
                std::cout << "Deleted " << name << " (blocks "
                          << f.start_block << "-" << f.start_block + f.length - 1 << " freed)\n";
                return true;
            }
        }
        return false;
    }

    void print_bitmap() {
        std::cout << "Bitmap: ";
        for (int i = 0; i < NUM_BLOCKS; i++) {
            std::cout << (bitmap[i] ? '1' : '0');
        }
        std::cout << "\n";
    }

    void print_fragmentation() {
        int total_free = 0;
        int max_run = 0;
        int current_run = 0;
        for (int i = 0; i < NUM_BLOCKS; i++) {
            if (!bitmap[i]) {
                total_free++;
                current_run++;
                if (current_run > max_run) max_run = current_run;
            } else {
                current_run = 0;
            }
        }
        std::cout << "Free blocks: " << total_free
                  << " Max contiguous: " << max_run
                  << " Wasted: " << (total_free - max_run) << "\n";
    }
};

int main() {
    ContiguousFS fs;
    fs.create_file("A.txt", 4);
    fs.create_file("B.txt", 3);
    fs.create_file("C.txt", 5);
    fs.print_bitmap();

    fs.delete_file("B.txt");
    fs.print_bitmap();

    fs.create_file("D.txt", 4);  // fits in blocks 12-15
    fs.create_file("E.txt", 4);  // should fail
    fs.print_bitmap();
    fs.print_fragmentation();

    // Demonstrate compaction opportunity
    fs.delete_file("A.txt");
    fs.delete_file("C.txt");
    fs.delete_file("D.txt");
    fs.print_bitmap();

    return 0;
}
```

### Python Implementation — Contiguous Allocation

```python
class ContiguousFS:
    def __init__(self, num_blocks=64):
        self.num_blocks = num_blocks
        self.bitmap = [False] * num_blocks  # False = free
        self.files = []

    def _find_contiguous(self, needed):
        run = 0
        for i in range(self.num_blocks):
            if not self.bitmap[i]:
                run += 1
                if run == needed:
                    return i - needed + 1
            else:
                run = 0
        return -1

    def create_file(self, name, size):
        start = self._find_contiguous(size)
        if start < 0:
            print(f"Cannot create {name}: external fragmentation "
                  f"(need {size}, no contiguous space)")
            return False
        for i in range(size):
            self.bitmap[start + i] = True
        self.files.append({"name": name, "start": start, "length": size})
        print(f"Created {name} at block {start} ({size} blocks)")
        return True

    def delete_file(self, name):
        for f in self.files:
            if f["name"] == name:
                for i in range(f["length"]):
                    self.bitmap[f["start"] + i] = False
                self.files.remove(f)
                print(f"Deleted {name}")
                return True
        return False

    def print_bitmap(self):
        print("Bitmap:", ''.join('1' if b else '0' for b in self.bitmap))

    def fragmentation_report(self):
        free = sum(1 for b in self.bitmap if not b)
        max_run = 0
        cur = 0
        for b in self.bitmap:
            if not b:
                cur += 1
                max_run = max(max_run, cur)
            else:
                cur = 0
        print(f"Free: {free}, Max contiguous: {max_run}, "
              f"Wasted: {free - max_run}")

    def compact(self):
        """Compaction: move files to start of disk"""
        target = 0
        for f in sorted(self.files, key=lambda x: x["start"]):
            if f["start"] != target:
                print(f"Moving {f['name']} from block {f['start']} to {target}")
                f["start"] = target
            target += f["length"]
        self.bitmap = [False] * self.num_blocks
        for f in self.files:
            for i in range(f["length"]):
                self.bitmap[f["start"] + i] = True
        print("Compaction complete")

if __name__ == "__main__":
    fs = ContiguousFS(16)
    fs.print_bitmap()
    fs.create_file("A", 4)
    fs.create_file("B", 3)
    fs.create_file("C", 5)
    fs.print_bitmap()

    fs.delete_file("B")
    fs.create_file("D", 4)
    fs.print_bitmap()

    fs.create_file("E", 4)  # should fail
    fs.fragmentation_report()

    print("\n--- After compaction ---")
    fs.compact()
    fs.create_file("E", 4)  # now works
    fs.print_bitmap()
```

### Complexity Analysis — Contiguous Allocation

| Operation | Complexity | Why |
|-----------|-----------|-----|
| Allocate N blocks | O(blocks) worst-case | Must scan bitmap for N consecutive free bits |
| Read block i | O(1) | start_block + i computed directly |
| Write block i | O(1) | Same direct computation |
| Delete file | O(1) | Mark N contiguous bits as free |
| Compact FS | O(files × blocks) | Must move every file's data |
| Find free space (optimized) | O(N) with run-length tracking | Precompute largest hole |

**Why O(1) for access**: Given start block S and block index i, physical block = S + i. This is a single addition.

### Advantages & Disadvantages

| Aspect | Advantage | Disadvantage |
|--------|-----------|-------------|
| Sequential access | Excellent: read-ahead works perfectly | — |
| Direct access | O(1) computation, no indirection | — |
| Implementation | Trivial — just start + length | — |
| Overhead | Zero per-block overhead | — |
| External fragmentation | — | Severe: holes cannot be filled |
| File growth | — | Impossible without copying entire file |
| Space estimation | — | Must know file size at creation |
| Compaction cost | — | Expensive, requires FS offline |

### Edge Cases

| Edge Case | Behavior |
|-----------|----------|
| **Disk full (no contiguous space)** | Returns ENOSPC even if free blocks exist (fragmentation) |
| **File growth beyond allocation** | Must allocate new location and copy entire file |
| **Very large file** | May not find enough contiguous blocks |
| **Creating many small files** | Works well until deletions create fragmentation |
| **Compaction during active use** | Dangerous — must suspend all I/O |
| **File size zero** | Can store as empty (start=0, len=0) or special flag |

---

### 5.2 Linked Allocation

### Real-World Analogy

Linked allocation is like a treasure hunt. Each clue (block) tells you where to find the next clue. You must follow the chain from start to end — you cannot skip ahead. If you want clue #50, you must read clues 1 through 49 first.

### How It Works

Each block contains a pointer to the next block in the file. The directory entry stores the starting block and (optionally) the ending block.

```
Linked Allocation Layout:
Directory:  file.txt → start=7, end=23

Block 7:  [data... | next→23]
Block 23: [data... | next→17]
Block 17: [data... | next→→0]  (end, next = 0 or -1)
```

### Numbered Steps — Read with Linked Allocation

1. Look up the file in the directory, get the starting block number (e.g., 7).
2. Read block 7 from disk.
3. Copy the data portion to the output buffer.
4. Extract the next pointer from the block header.
5. If next pointer is 0 (or -1), we have reached the end of the file.
6. Otherwise, read the next block and repeat.

### Pseudocode — Linked Allocation

```
function read_linked_file(file_entry, buffer):
    current_block = file_entry.start_block
    while current_block != -1:
        block_data = read_block(current_block)
        data = block_data[0 : block_size - pointer_size]
        next_block = block_data[block_size - pointer_size :]
        append(buffer, data)
        current_block = next_block

function read_block_at_position(file_entry, position):
    // Direct access NOT supported — must walk chain
    current = file_entry.start_block
    for i = 1 to position:
        current = read_next_pointer(current)
    return read_block(current)
```

### Full Dry Run — Linked Allocation Walk

Assume 512-byte blocks, 4-byte next pointer (508 bytes data per block).

**File "report.txt" — directory: start=3**

| Step | Current Block | Read Next Pointer | Data Bytes Accumulated |
|------|--------------|-------------------|----------------------|
| 1 | 3 | → 8 | 508 |
| 2 | 8 | → 15 | 1016 |
| 3 | 15 | → 22 | 1524 |
| 4 | 22 | → 31 | 2032 |
| 5 | 31 | → 42 | 2540 |
| 6 | 42 | → -1 (end) | 3048 |
| Total data: 3048 bytes, 6 blocks, 5 chain walks | | | |

**To reach byte 2000 (logical block 3):**
```
Position = 2000 / 508 = block index 3
Walk: 3 → 8 → 15 → 22 (3 pointer dereferences)
Data read from block 22 at offset 2000 - 3*508 = 2000 - 1524 = 476
```

### File Allocation Table (FAT)

FAT moves all the next pointers from the blocks themselves into a separate table stored in a reserved area of the disk. This table is cached in memory for fast lookup.

```
FAT Table (simplified):
Index: 0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
Value: -1  -1  -1   8  -1  -1  -1  15  22  -1  -1  -1  -1  -1  -1  -1

File: report.txt at FAT[3]:
  Block 3 → FAT[3] = 8 → read block 8
  Block 8 → FAT[8] = 22 → read block 22
  Block 22 → FAT[22] = -1 → end

File: data.bin at FAT[7]:
  Block 7 → FAT[7] = 15 → read block 15
  Block 15 → FAT[15] = -1 → end
```

#### FAT Variants

| Type | Entry Size | Max Clusters | Max Volume |
|------|-----------|-------------|------------|
| FAT12 | 12 bits | 4,086 | 16 MB |
| FAT16 | 16 bits | 65,526 | 2 GB |
| FAT32 | 28 bits | 268,435,456 | 2 TB (8 TB with 64 KB clusters) |
| exFAT | 32 bits | 2^32 | 128 PB |

#### FAT Walk for Direct Access (Simulated)

Since the FAT is cached in memory, we can simulate direct access:

```
function read_block_fat(start_cluster, target_index, fat_table):
    current = start_cluster
    for i = 0 to target_index:
        current = fat_table[current]
        if current == -1: return -1  // EOF
    return current

// For file at start=3, read logical block 3:
// FAT[3] = 8, FAT[8] = 22, FAT[22] = 31 → cluster 31
```

### C++ Implementation — Linked Allocation & FAT

```cpp
#include <iostream>
#include <vector>
#include <cstring>
#include <unordered_map>

const int BLOCK_SIZE = 512;
const int POINTER_SIZE = 4;
const int DATA_SIZE = BLOCK_SIZE - POINTER_SIZE;  // 508 bytes

class LinkedFS {
    char disk[256][BLOCK_SIZE];  // 256 blocks of 512 bytes
    bool bitmap[256];

    struct FileRecord {
        std::string name;
        int start_block;
        int end_block;
    };
    std::vector<FileRecord> files;

    int read_next_pointer(int block_num) {
        int next;
        std::memcpy(&next, disk[block_num] + DATA_SIZE, POINTER_SIZE);
        return next;
    }

    void write_next_pointer(int block_num, int next) {
        std::memcpy(disk[block_num] + DATA_SIZE, &next, POINTER_SIZE);
    }

public:
    LinkedFS() {
        std::memset(disk, 0, sizeof(disk));
        std::memset(bitmap, 0, sizeof(bitmap));  // all free
    }

    int allocate_block() {
        for (int i = 0; i < 256; i++) {
            if (!bitmap[i]) {
                bitmap[i] = true;
                return i;
            }
        }
        return -1;
    }

    bool create_file(const std::string& name, const std::string& data) {
        int remaining = data.length();
        int data_pos = 0;
        int first_block = -1;
        int prev_block = -1;

        while (remaining > 0) {
            int block = allocate_block();
            if (block < 0) {
                if (first_block >= 0) {
                    // Free partial allocation
                    int cur = first_block;
                    while (cur >= 0) {
                        int next = read_next_pointer(cur);
                        bitmap[cur] = false;
                        cur = next;
                    }
                }
                std::cout << "Disk full during write\n";
                return false;
            }

            int to_write = (remaining > DATA_SIZE) ? DATA_SIZE : remaining;
            std::memcpy(disk[block], data.c_str() + data_pos, to_write);
            data_pos += to_write;
            remaining -= to_write;

            write_next_pointer(block, -1);  // default end

            if (first_block < 0) first_block = block;
            if (prev_block >= 0) write_next_pointer(prev_block, block);
            prev_block = block;
        }

        files.push_back({name, first_block, prev_block});
        std::cout << "Created " << name << " starting at block " << first_block << "\n";
        return true;
    }

    std::string read_file(const std::string& name) {
        for (const auto& f : files) {
            if (f.name == name) {
                std::string result;
                int cur = f.start_block;
                while (cur >= 0) {
                    result.append(disk[cur], DATA_SIZE);
                    cur = read_next_pointer(cur);
                }
                // Trim null bytes
                result.resize(strlen(result.c_str()));
                return result;
            }
        }
        return "";
    }

    void print_fat_like_table() {
        std::cout << "\nFAT-like table:\nIndex: ";
        for (int i = 0; i < 24; i++) std::cout << i << "  ";
        std::cout << "\nValue: ";
        for (int i = 0; i < 24; i++) {
            if (!bitmap[i]) {
                std::cout << " -   ";
            } else {
                bool is_start = false;
                for (const auto& f : files) {
                    if (f.start_block == i) is_start = true;
                }
                int next = read_next_pointer(i);
                if (next < 0) std::cout << " END ";
                else printf("%-5d", next);
            }
        }
        std::cout << "\n\n";
    }

    void walk_file(const std::string& name) {
        for (const auto& f : files) {
            if (f.name == name) {
                std::cout << "Walking " << name << ": ";
                int cur = f.start_block;
                int idx = 0;
                while (cur >= 0) {
                    std::cout << cur;
                    cur = read_next_pointer(cur);
                    if (cur >= 0) std::cout << " → ";
                    idx++;
                }
                std::cout << " (end, " << idx << " blocks)\n";
                return;
            }
        }
    }
};

class FATFS {
    static const int NUM_CLUSTERS = 256;
    int fat[NUM_CLUSTERS];  // -1 = free, -2 = reserved, -3 = end, 0+ = next
    char disk[NUM_CLUSTERS][BLOCK_SIZE];
    std::unordered_map<std::string, int> directory;  // name → first cluster

public:
    FATFS() {
        std::memset(fat, -1, sizeof(fat));  // all free
        std::memset(disk, 0, sizeof(disk));
    }

    int allocate_cluster() {
        for (int i = 0; i < NUM_CLUSTERS; i++) {
            if (fat[i] == -1) {
                fat[i] = -3;  // mark as end-of-chain temporarily
                return i;
            }
        }
        return -1;
    }

    bool write_file(const std::string& name, const std::string& data) {
        int first = -1;
        int prev = -1;
        int remaining = data.length();
        int pos = 0;

        while (remaining > 0) {
            int cluster = allocate_cluster();
            if (cluster < 0) return false;

            int to_write = (remaining > BLOCK_SIZE) ? BLOCK_SIZE : remaining;
            std::memcpy(disk[cluster], data.c_str() + pos, to_write);
            pos += to_write;
            remaining -= to_write;
            fat[cluster] = -3;  // end of chain

            if (first < 0) first = cluster;
            if (prev >= 0) fat[prev] = cluster;
            prev = cluster;
        }

        directory[name] = first;
        return true;
    }

    std::string read_file(const std::string& name) {
        if (directory.find(name) == directory.end()) return "";
        std::string result;
        int cluster = directory[name];
        while (cluster != -3) {
            result.append(disk[cluster], BLOCK_SIZE);
            cluster = fat[cluster];
        }
        result.resize(strlen(result.c_str()));
        return result;
    }

    int get_cluster_chain(const std::string& name, int pos) {
        if (directory.find(name) == directory.end()) return -1;
        int cluster = directory[name];
        for (int i = 0; i < pos; i++) {
            if (cluster == -3) return -1;
            cluster = fat[cluster];
        }
        return cluster;
    }

    void print_fat() {
        std::cout << "FAT Table (first 32 entries):\n";
        for (int i = 0; i < 32; i++) {
            if (fat[i] == -1) std::cout << "  .";
            else if (fat[i] == -3) std::cout << " END";
            else printf("%4d", fat[i]);
            if ((i + 1) % 8 == 0) std::cout << "\n";
        }
    }
};

int main() {
    LinkedFS fs;
    fs.create_file("report.txt", "This is linked allocation. "
        "Each block points to the next. Direct access is slow. "
        "FAT makes it faster by caching the chain in memory.");
    fs.walk_file("report.txt");
    std::cout << "Content: " << fs.read_file("report.txt") << "\n";

    fs.create_file("data.bin", "Short file.");
    fs.walk_file("data.bin");
    fs.print_fat_like_table();

    std::cout << "=== FAT-based FS ===\n";
    FATFS fatfs;
    fatfs.write_file("notes.txt", "FAT-based file system demo with cached chain table.");
    std::cout << "Read: " << fatfs.read_file("notes.txt") << "\n";
    fatfs.print_fat();

    return 0;
}
```

### Python Implementation — Linked Allocation & FAT

```python
import struct

BLOCK_SIZE = 512
DATA_SIZE = BLOCK_SIZE - 4  # 4 bytes for next pointer

class LinkedFS:
    def __init__(self, num_blocks=256):
        self.disk = bytearray(num_blocks * BLOCK_SIZE)
        self.bitmap = [False] * num_blocks
        self.files = {}

    def _read_next(self, block):
        offset = block * BLOCK_SIZE + DATA_SIZE
        return struct.unpack_from('<i', self.disk, offset)[0]

    def _write_next(self, block, next_block):
        offset = block * BLOCK_SIZE + DATA_SIZE
        struct.pack_into('<i', self.disk, offset, next_block)

    def _write_data(self, block, data, offset=0, size=None):
        if size is None:
            size = len(data)
        start = block * BLOCK_SIZE
        self.disk[start:start + size] = data[:size]

    def _read_data(self, block, size=DATA_SIZE):
        start = block * BLOCK_SIZE
        return bytes(self.disk[start:start + size])

    def allocate_block(self):
        for i, used in enumerate(self.bitmap):
            if not used:
                self.bitmap[i] = True
                return i
        return -1

    def create_file(self, name, data):
        remaining = len(data)
        pos = 0
        first = -1
        prev = -1

        while remaining > 0:
            block = self.allocate_block()
            if block < 0:
                raise Exception("Disk full")
            to_write = min(remaining, DATA_SIZE)
            self._write_data(block, data[pos:pos + to_write])
            self._write_next(block, -1)
            if first < 0:
                first = block
            if prev >= 0:
                self._write_next(prev, block)
            prev = block
            pos += to_write
            remaining -= to_write

        self.files[name] = first
        return first

    def read_file(self, name):
        if name not in self.files:
            return b""
        result = bytearray()
        cur = self.files[name]
        while cur >= 0:
            data = self._read_data(cur)
            result.extend(data)
            cur = self._read_next(cur)
        return bytes(result).rstrip(b'\x00')

    def walk_chain(self, name):
        if name not in self.files:
            return
        cur = self.files[name]
        chain = []
        while cur >= 0:
            chain.append(cur)
            cur = self._read_next(cur)
        print(f"Chain for '{name}': {' → '.join(map(str, chain))} ({len(chain)} blocks)")

    def print_fat_style(self):
        print("\nFAT-style table (blocks 0-31):")
        for i in range(32):
            if self.bitmap[i]:
                nxt = self._read_next(i)
                label = "END" if nxt < 0 else f"{nxt:2d}"
            else:
                label = " ."
            print(f"{i:2d}:{label:3s}  ", end='')
            if (i + 1) % 8 == 0:
                print()
        print()


class FATFS:
    def __init__(self, num_clusters=256):
        self.fat = [-1] * num_clusters  # -1 = free, -3 = end
        self.disk = bytearray(num_clusters * BLOCK_SIZE)
        self.dir = {}  # name → first cluster

    def _alloc(self):
        for i, v in enumerate(self.fat):
            if v == -1:
                self.fat[i] = -3
                return i
        return -1

    def write_file(self, name, data):
        first = -1
        prev = -1
        remaining = len(data)
        pos = 0
        while remaining > 0:
            cl = self._alloc()
            if cl < 0:
                raise Exception("Disk full")
            to_write = min(remaining, BLOCK_SIZE)
            start = cl * BLOCK_SIZE
            self.disk[start:start + to_write] = data[pos:pos + to_write]
            self.fat[cl] = -3
            if first < 0:
                first = cl
            if prev >= 0:
                self.fat[prev] = cl
            prev = cl
            pos += to_write
            remaining -= to_write
        self.dir[name] = first

    def read_file(self, name):
        if name not in self.dir:
            return b""
        result = bytearray()
        cl = self.dir[name]
        while cl != -3:
            start = cl * BLOCK_SIZE
            result.extend(self.disk[start:start + BLOCK_SIZE])
            cl = self.fat[cl]
        return bytes(result).rstrip(b'\x00')

    def resolve_cluster(self, name, index):
        """Simulate direct access via FAT cache"""
        if name not in self.dir:
            return -1
        cl = self.dir[name]
        for _ in range(index):
            if cl == -3:
                return -1
            cl = self.fat[cl]
        return cl

if __name__ == "__main__":
    fs = LinkedFS()
    fs.create_file("report.txt", b"This demonstrates linked allocation. "
                   b"Each block has a 4-byte next pointer. "
                   b"Walking the chain is O(n). " * 5)
    fs.walk_chain("report.txt")
    print("Content:", fs.read_file("report.txt").decode()[:80], "...")

    print("\n=== FAT FS ===")
    fat = FATFS()
    fat.write_file("notes.txt", b"FAT file system with cached table for faster access.")
    print("Read:", fat.read_file("notes.txt").decode())
    cl = fat.resolve_cluster("notes.txt", 0)
    print(f"First cluster: {cl}")
```

### Complexity Analysis — Linked Allocation

| Operation | Complexity | Why |
|-----------|-----------|-----|
| Read sequentially | O(1) per block amortized | Each read advances one pointer |
| Read block at position i | O(i) | Must walk chain from start |
| Allocate new block | O(1) | Take first free block |
| Append to file | O(1) | Link new block to end |
| Delete file | O(blocks) | Walk chain freeing each block |
| FAT directory lookup | O(1) | Cached table in memory |

**Why O(i) for direct access**: To read block #50, we must follow 50 next pointers. This is 50 disk reads (or 50 FAT lookups if cached). This is the killer disadvantage of linked allocation.

### Advantages & Disadvantages

| Aspect | Advantage | Disadvantage |
|--------|-----------|-------------|
| Fragmentation | None external — any free block works | Internal: 4 bytes per block for pointer |
| File growth | Trivial: just add blocks | — |
| Space utilization | No compaction needed | 0.78% overhead (4/512) per block |
| Sequential access | Good with read-ahead | — |
| Direct access | — | O(n) even with FAT |
| Reliability | — | One bad pointer loses rest of file |
| Pointer storage | No separate structure (linked) | FAT requires separate disk area |

### Edge Cases

| Edge Case | Behavior |
|-----------|----------|
| **Bad block in chain** | All subsequent blocks unreachable (no redundancy) |
| **Cyclic pointer** | Infinite loop; FS check must detect cycles |
| **Zero-length file** | start = 0 (null) or special -1 |
| **Single block file** | Next pointer = -1 immediately |
| **FAT corruption** | Entire file system becomes unreadable |
| **Very large file** | Many pointer dereferences; performance degrades |

---

### 5.3 Indexed Allocation

### Real-World Analogy

Indexed allocation is like a library with a card catalog. Each book has a catalog card (the index block) listing every shelf location where that book's pages are stored. To read page 5, you check the catalog card for entry 5, then go directly to that shelf. Small books might have their catalog entries inside the card, while encyclopedias need extra card drawers (indirect index blocks).

### How It Works

Each file has an **index block** containing an array of pointers to data blocks. The directory entry points to the index block.

```
Indexed Allocation:
Directory: file.txt → index_block = 8

Index Block 8: [19][ 7][32][15][ 0][ 4][...  1024 entries]
                │   │   │   │   │   │
                ▼   ▼   ▼   ▼   ▼   ▼
Data Blocks:   19   7  32  15   0   4 ...
```

### Numbered Steps — Read with Indexed Allocation

1. Look up the file, get the index block number (e.g., 8).
2. Read the index block from disk.
3. Compute the index into the index block: `entry = offset / block_size`.
4. Read the data block pointer at `index_block[entry]`.
5. Read the data block at that pointer.
6. Copy the relevant bytes to the output.

### Pseudocode — Indexed Allocation

```
function read_indexed_file(index_block_num, offset, count):
    block_size = 4096
    pointers_per_block = block_size / 4  // 1024
    index_block = read_block(index_block_num)
    start_entry = offset / block_size
    result = []
    for i = start_entry to start_entry + ceil(count / block_size):
        data_block = index_block[i]
        data = read_block(data_block)
        append(result, data)
    return result

function write_indexed_file(index_block_num, data):
    index_block = allocate_block()  // for the index
    num_blocks = ceil(len(data) / block_size)
    for i = 0 to num_blocks - 1:
        data_block = allocate_block()
        index_block[i] = data_block
        write_block(data_block, data[i * block_size : (i+1) * block_size])
    write_block(index_block_num, index_block)
```

### Full Dry Run — Small File (1 block)

File "readme.txt" — 500 bytes (fits in 1 block).

```
1. Directory entry: "readme.txt" → inode #42
2. Inode 42 does NOT have indexed allocation (direct pointers used instead)
3. i_block[0] = 15 → read data block 15
4. Copy 500 bytes from block 15
Blocks used: 1 data block + 0 index blocks (direct pointer in inode)
Overhead: 0 extra blocks
```

### Full Dry Run — Medium File (100 blocks)

File "data.log" — 400 KB (100 blocks × 4 KB).

```
1. Directory: "data.log" → inode #55
2. Inode 55: i_block[0..11] → 12 direct pointers
              i_block[12] → single indirect block #200
3. Blocks 0-11: direct → read in 1 step each
4. Block 12+: read index block 200, get data block pointers
5. Total index blocks: 1 (single indirect)
Overhead: 1 block for 100 data blocks = 1% overhead
```

### Full Dry Run — Large File (2000 blocks)

File "video.mp4" — 8 MB (2000 blocks × 4 KB).

```
1. Directory: "video.mp4" → inode #88
2. inode.i_block[0..11] → 12 direct (blocks 0-11)
   inode.i_block[12] → single indirect block #400
     Single indirect block 400 contains 1024 pointers (blocks 12-1035)
   inode.i_block[13] → double indirect block #500
     Double indirect block 500 → reads indirect block #600
       Indirect block 600 contains pointers (blocks 1036-1999)
3. For block #1500:
   → not in direct (0-11)
   → not in single indirect (12-1035)
   → double indirect: entry (1500 - 12 - 1024) = 464
   → read double indirect block 500 → entry[0] = 600 (since 464 < 1024)
   → read single indirect block 600 → entry[464] = 890
   → read data block 890
4. Total reads for block 1500: index_block(500) + indirect_block(600) + data(890) = 3 reads
Overhead: 1 single + 1 double + 1 indirect = 3 index blocks for 2000 data blocks = 0.15% overhead
```

### 5.4 Indexed Variants

#### 5.4.1 Linked Indexed Allocation

An index block is too small to hold all pointers. Multiple index blocks are linked together.

```
Linked Index Blocks:
Index Block 1: [p1][p2][p3]...[p1023] → Index Block 2
Index Block 2: [p1024][p1025]...[p2047] → Index Block 3
```

**Max file size**: `(pointers_per_block^2) × block_size` — very large.
**Drawback**: Large files require O(n) index block reads for the last block.

#### 5.4.2 Multilevel Indexed Allocation

Index blocks point to other index blocks, forming a tree. The Unix inode uses this: single, double, triple indirect.

```
Multilevel Index (Unix inode):
inode → [direct 0..11] → data blocks (12)
      → [single indirect] → [indirect block] → data blocks (1024)
      → [double indirect] → [indirect block] → [indirect block] → data (1024²)
      → [triple indirect] → [indirect] → [indirect] → [indirect] → data (1024³)
```

**Max file size (4 KB blocks, 4-byte pointers):**
```
12 × 4 KB + 1024 × 4 KB + 1024² × 4 KB + 1024³ × 4 KB ≈ 4 TB
```

#### 5.4.3 Combined Scheme (Unix Inode / ext4 Extents)

Modern ext4 uses **extents** instead of the traditional block pointer scheme. An extent is a range of contiguous blocks:

```
ext4 Extent:
struct ext4_extent {
    uint32_t ee_block;    // First logical block
    uint16_t ee_len;     // Number of blocks in extent
    uint16_t ee_start_hi; // High 16 bits of start
    uint32_t ee_start_lo; // Low 32 bits of start
};
```

A single extent can describe up to 32,768 contiguous blocks (128 MB with 4 KB blocks). One inode can store 4 extents directly. If more are needed, a extent tree (B-tree) is used.

### C++ Implementation — Indexed Allocation

```cpp
#include <iostream>
#include <vector>
#include <cstring>

const int BLOCK_SIZE = 4096;
const int POINTERS_PER_BLOCK = BLOCK_SIZE / sizeof(int);  // 1024 for 4-byte ints

class IndexedFS {
    char disk[4096][BLOCK_SIZE];
    bool bitmap[4096];

    struct FileRecord {
        std::string name;
        int index_block;  // points to the index block
    };
    std::vector<FileRecord> files;

public:
    IndexedFS() {
        std::memset(disk, 0, sizeof(disk));
        std::memset(bitmap, 0, sizeof(bitmap));
    }

    int allocate_block() {
        for (int i = 0; i < 4096; i++) {
            if (!bitmap[i]) {
                bitmap[i] = true;
                return i;
            }
        }
        return -1;
    }

    bool create_file(const std::string& name, const char* data, int len) {
        int num_data_blocks = (len + BLOCK_SIZE - 1) / BLOCK_SIZE;
        if (num_data_blocks == 0) num_data_blocks = 1;

        int idx_block = allocate_block();
        if (idx_block < 0) return false;

        int* index = reinterpret_cast<int*>(disk[idx_block]);
        std::memset(index, -1, BLOCK_SIZE);

        int written = 0;
        for (int i = 0; i < num_data_blocks; i++) {
            int db = allocate_block();
            if (db < 0) {
                // Free allocated blocks and index block
                for (int j = 0; j < i; j++) {
                    bitmap[index[j]] = false;
                }
                bitmap[idx_block] = false;
                return false;
            }
            index[i] = db;
            int copy_size = (len > BLOCK_SIZE) ? BLOCK_SIZE : len;
            std::memcpy(disk[db], data + written, copy_size);
            written += copy_size;
            len -= copy_size;
        }

        files.push_back({name, idx_block});
        std::cout << "Created " << name << " (index=" << idx_block
                  << ", data_blocks=" << num_data_blocks << ")\n";
        return true;
    }

    std::string read_file(const std::string& name) {
        for (const auto& f : files) {
            if (f.name == name) {
                std::string result;
                int* index = reinterpret_cast<int*>(disk[f.index_block]);
                for (int i = 0; i < POINTERS_PER_BLOCK; i++) {
                    if (index[i] < 0) break;
                    result.append(disk[index[i]], BLOCK_SIZE);
                }
                result.resize(strlen(result.c_str()));
                return result;
            }
        }
        return "";
    }

    bool read_block_at(const std::string& name, int block_index, char* out) {
        for (const auto& f : files) {
            if (f.name == name) {
                int* index = reinterpret_cast<int*>(disk[f.index_block]);
                if (block_index < 0 || block_index >= POINTERS_PER_BLOCK)
                    return false;
                int data_block = index[block_index];
                if (data_block < 0) return false;
                std::memcpy(out, disk[data_block], BLOCK_SIZE);
                return true;
            }
        }
        return false;
    }

    void print_file_index(const std::string& name) {
        for (const auto& f : files) {
            if (f.name == name) {
                int* index = reinterpret_cast<int*>(disk[f.index_block]);
                std::cout << "Index block " << f.index_block << " for " << name << ":\n  ";
                int count = 0;
                for (int i = 0; i < POINTERS_PER_BLOCK; i++) {
                    if (index[i] < 0) break;
                    std::cout << index[i] << " ";
                    count++;
                    if (count % 16 == 0) std::cout << "\n  ";
                }
                std::cout << "\n  (" << count << " data blocks)\n";
                return;
            }
        }
    }
};

int main() {
    IndexedFS fs;

    // Small file
    fs.create_file("notes.txt", "Small file using indexed allocation.", 40);

    // Medium file
    std::string big_data;
    for (int i = 0; i < 5000; i++) big_data += "Block of data for indexed allocation test. ";
    fs.create_file("medium.txt", big_data.c_str(), big_data.length());

    fs.print_file_index("notes.txt");
    fs.print_file_index("medium.txt");

    char buf[BLOCK_SIZE];
    if (fs.read_block_at("medium.txt", 0, buf)) {
        std::cout << "First block of medium.txt: "
                  << std::string(buf, 60) << "...\n";
    }
    if (fs.read_block_at("medium.txt", 1, buf)) {
        std::cout << "Second block: "
                  << std::string(buf, 60) << "...\n";
    }

    return 0;
}
```

### Python Implementation — Indexed Allocation

```python
import struct

BLOCK_SIZE = 4096
POINTERS_PER_BLOCK = BLOCK_SIZE // 4  # 1024

class IndexedFS:
    def __init__(self, num_blocks=4096):
        self.disk = bytearray(num_blocks * BLOCK_SIZE)
        self.bitmap = [False] * num_blocks
        self.files = {}

    def _alloc(self):
        for i, used in enumerate(self.bitmap):
            if not used:
                self.bitmap[i] = True
                return i
        raise Exception("Disk full")

    def _read_index(self, block):
        start = block * BLOCK_SIZE
        return list(struct.unpack_from(f'<{POINTERS_PER_BLOCK}i', self.disk, start))

    def _write_index(self, block, pointers):
        start = block * BLOCK_SIZE
        data = list(pointers) + [-1] * (POINTERS_PER_BLOCK - len(pointers))
        struct.pack_into(f'<{POINTERS_PER_BLOCK}i', self.disk, start, *data)

    def create_file(self, name, data):
        num_blocks = max(1, (len(data) + BLOCK_SIZE - 1) // BLOCK_SIZE)
        idx_block = self._alloc()
        pointers = []

        for i in range(num_blocks):
            db = self._alloc()
            pointers.append(db)
            start = db * BLOCK_SIZE
            chunk = data[i * BLOCK_SIZE:(i + 1) * BLOCK_SIZE]
            self.disk[start:start + len(chunk)] = chunk

        self._write_index(idx_block, pointers)
        self.files[name] = idx_block
        print(f"Created '{name}': index={idx_block}, data_blocks={num_blocks}")

    def read_file(self, name):
        if name not in self.files:
            return b""
        idx = self.files[name]
        pointers = self._read_index(idx)
        result = bytearray()
        for p in pointers:
            if p < 0:
                break
            start = p * BLOCK_SIZE
            result.extend(self.disk[start:start + BLOCK_SIZE])
        return bytes(result).rstrip(b'\x00')

    def read_block_direct(self, name, block_idx):
        """Direct access — O(1) via index block"""
        if name not in self.files:
            return None
        idx = self.files[name]
        pointers = self._read_index(idx)
        if block_idx >= len(pointers) or pointers[block_idx] < 0:
            return None
        p = pointers[block_idx]
        start = p * BLOCK_SIZE
        return bytes(self.disk[start:start + BLOCK_SIZE])

    def print_index(self, name):
        if name not in self.files:
            return
        idx = self.files[name]
        pointers = self._read_index(idx)
        valid = [p for p in pointers if p >= 0]
        print(f"Index block {idx} for '{name}': {valid[:20]}... ({len(valid)} total)")


class MultilevelIndexFS:
    """Simulates Unix inode multi-level indexing"""
    def __init__(self, num_blocks=16384):
        self.disk = bytearray(num_blocks * BLOCK_SIZE)
        self.bitmap = [False] * num_blocks
        self.files = {}
        self.NUM_DIRECT = 12
        self.PPB = BLOCK_SIZE // 4  # 1024

    def _alloc(self):
        for i, used in enumerate(self.bitmap):
            if not used:
                self.bitmap[i] = True
                return i
        raise Exception("Disk full")

    def create_file(self, name, data):
        num_blocks = max(1, (len(data) + BLOCK_SIZE - 1) // BLOCK_SIZE)
        inode = {"direct": [-1] * self.NUM_DIRECT,
                 "single": -1, "double": -1, "triple": -1, "size": len(data)}

        def write_direct(i, db):
            start = db * BLOCK_SIZE
            chunk = data[i * BLOCK_SIZE:(i + 1) * BLOCK_SIZE]
            self.disk[start:start + len(chunk)] = chunk

        block_idx = 0

        # Fill direct pointers (0-11)
        while block_idx < num_blocks and block_idx < self.NUM_DIRECT:
            db = self._alloc()
            inode["direct"][block_idx] = db
            write_direct(block_idx, db)
            block_idx += 1

        # Single indirect
        if block_idx < num_blocks:
            sib = self._alloc()
            inode["single"] = sib
            si_pointers = []
            while block_idx < num_blocks and len(si_pointers) < self.PPB:
                db = self._alloc()
                si_pointers.append(db)
                write_direct(block_idx, db)
                block_idx += 1
            # Write single indirect block
            start = sib * BLOCK_SIZE
            data_bytes = struct.pack(f'<{self.PPB}i',
                                     *si_pointers + [-1] * (self.PPB - len(si_pointers)))
            self.disk[start:start + len(data_bytes)] = data_bytes

        self.files[name] = inode

    def read_block_at(self, name, logical_block):
        if name not in self.files:
            return None
        inode = self.files[name]

        if logical_block < self.NUM_DIRECT:
            db = inode["direct"][logical_block]
        else:
            offset = logical_block - self.NUM_DIRECT
            if offset < self.PPB:
                sib = inode["single"]
                start = sib * BLOCK_SIZE + offset * 4
                db = struct.unpack_from('<i', self.disk, start)[0]
            else:
                return None  # double/triple not implemented for brevity

        if db < 0:
            return None
        start = db * BLOCK_SIZE
        return bytes(self.disk[start:start + BLOCK_SIZE])

    def print_inode(self, name):
        if name not in self.files:
            return
        inode = self.files[name]
        direct = [d for d in inode["direct"] if d >= 0]
        print(f"Inode for '{name}': size={inode['size']}")
        print(f"  Direct ({len(direct)}): {direct}")
        print(f"  Single indirect: {inode['single']}")


if __name__ == "__main__":
    ifs = IndexedFS()
    ifs.create_file("small.txt", b"Hello from indexed allocation!")
    print(ifs.read_file("small.txt").decode())
    print("Direct access block 0:", ifs.read_block_direct("small.txt", 0)[:20])

    ifs.create_file("big.txt", b"X" * 50000)
    ifs.print_index("big.txt")

    print("\n=== Multilevel (Unix inode) ===")
    mfs = MultilevelIndexFS()
    mfs.create_file("medium.bin", b"Y" * 100000)
    block_0 = mfs.read_block_at("medium.bin", 0)
    block_5 = mfs.read_block_at("medium.bin", 5)
    print(f"Block 0: {block_0[:20]}")
    print(f"Block 5: {block_5[:20]}")
    mfs.print_inode("medium.bin")
```

### Complexity Analysis — Indexed Allocation

| Operation | Complexity | Why |
|-----------|-----------|-----|
| Read sequential | O(1) per block | Index block gives data block directly |
| Read block at position i | O(1) | Direct index into block[i] |
| Allocate file with N blocks | O(N) | Must allocate N data blocks + 1 index |
| Small file (< pointer count) | O(1) index, O(1) data | Single index block read |
| Large file (multi-level) | O(log(N)) pointer reads | Must walk indirect tree |
| Random access | O(1) to O(log N) | Depends on indirection depth |

**Why O(1) for random access**: The index block is an array. `block[i]` gives the i-th data block address directly. Even in multi-level schemes, the depth is fixed (max 4 for triple indirect, or effectively O(1) for ext4 extents).

### Advantages & Disadvantages

| Aspect | Advantage | Disadvantage |
|--------|-----------|-------------|
| Direct access | O(1) via index block | — |
| Fragmentation | No external fragmentation | Internal: index block overhead |
| File growth | Easy to add blocks | May need new index block |
| Small files | — | Waste: full index block for tiny file |
| Large files | Multi-level handles huge sizes | Multiple indirection reads |
| Space overhead | — | 1 full block per file minimum |

### Edge Cases

| Edge Case | Behavior |
|-----------|----------|
| **Small file (1 block)** | Uses entire index block (4096 bytes for 1 data block) — 100% overhead |
| **Index block exhaustion** | Must link to another index block or use multi-level |
| **Corrupted index block** | Entire file becomes inaccessible |
| **Very large file** | Multi-level pointers add latency but work |
| **Sparse file** | Index entries point to 0 (unallocated); read returns zeros |

---

## 6. Allocation Methods Comparison

### Real-World Analogy

| Method | Analogy |
|--------|---------|
| **Contiguous** | Rows of lockers: each person gets a consecutive set. Moving requires finding a new row. |
| **Linked (FAT)** | Treasure hunt: each clue points to the next. FAT = a master map showing all clue connections. |
| **Indexed** | Library catalog: one card per book listing all shelf locations. |
| **Multi-level (Unix)** | Filing cabinet: drawer tabs → folder tabs → document pages. |

### Full Comparison Table

| Feature | Contiguous | Linked (no FAT) | Linked (with FAT) | Indexed (single) | Indexed (multilevel) |
|---------|-----------|----------------|-------------------|----------------|---------------------|
| **External fragmentation** | Yes | No | No | No | No |
| **Internal fragmentation** | Last block only | Last block + pointer | Last block only | Last block + index block | Last block + index tree |
| **Direct (random) access** | O(1) | O(n) | O(1) with cached FAT | O(1) | O(1) to O(log n) |
| **Sequential access** | Excellent | Good | Good | Good | Good |
| **File growth** | Impossible without copy | Trivial (append link) | Trivial (FAT update) | Easy (add to index) | Easy |
| **Space overhead** | None | 4-8 bytes/block | FAT size (fixed) | 1 block/file | Multiple blocks for large files |
| **Maximum file size** | Largest free hole | No limit | Volume size | PPB × block_size | (PPB^levels) × block_size |
| **Reliability** | Good | Poor (chain breaks) | Better (FAT on disk) | Good (index separate) | Moderate (tree pointers) |
| **Implementation** | Simplest | Simple | Moderate | Moderate | Complex |
| **Real-world use** | Rare (obsolete) | Obsolete | FAT32, exFAT | Some embedded FS | ext2/3/4, UFS, XFS |

### When to Use Which

| Scenario | Best Method | Why |
|----------|------------|-----|
| **Tiny embedded system (8 KB files)** | Contiguous | Zero overhead, simple |
| **USB flash drive (cross-platform)** | FAT32 | Universal compatibility |
| **Database needing random access** | Indexed (ext4) | O(1) direct access |
| **Video recording (sequential write)** | Contiguous extents | No fragmentation, fast |
| **Large file server** | Multilevel (XFS) | Handles huge files, good concurrency |
| **Log file (append only)** | Linked | Easy append, fixed head |
| **OS root filesystem** | Indexed (ext4 extents) | Balanced: small files fast, large files work |

## 7. Free Space Management

### Real-World Analogy

Managing free space on disk is like a hotel's room availability system. The **bit vector** is a giant whiteboard with green/red magnets for each room. The **linked list** is a concierge who asks each empty room "which room is also empty?" The **grouping** method is a list of lists — the concierge has a card with 50 rooms, and each of those rooms has a card with 50 more. **Counting** tracks runs of adjacent empty rooms for contiguous allocation.

### 7.1 Bit Vector (Bitmap)

One bit per block: 1 = free, 0 = allocated.

#### Memory Calculation

| Disk Size | Block Size | Blocks | Bitmap Size |
|-----------|-----------|--------|-------------|
| 1 GB | 4 KB | 262,144 | 32 KB |
| 1 TB | 4 KB | 268,435,456 | 32 MB |
| 1 TB | 1 KB | 1,073,741,824 | 128 MB |
| 16 TB | 4 KB | 4,294,967,296 | 512 MB |

#### Pseudocode — Bitmap Operations

```
function find_first_free(bitmap):
    for each word in bitmap:
        if word != 0xFFFFFFFF:  // has at least one zero (free) bit
            for bit = 0 to 31:
                if (word & (1 << bit)) == 0:
                    return word_index * 32 + bit
    return -1  // no free blocks

function find_contiguous_free(bitmap, count):
    // Scan for 'count' consecutive free bits
    run = 0
    for i = 0 to total_blocks - 1:
        if is_free(bitmap, i):
            run++
            if run == count:
                return i - count + 1
        else:
            run = 0
    return -1

function mark_used(bitmap, block):
    bitmap[block / 8] &= ~(1 << (block % 8))

function mark_free(bitmap, block):
    bitmap[block / 8] |= (1 << (block % 8))
```

### 7.2 Linked List (Free List)

Free blocks form a linked list. The superblock stores a pointer to the first free block.

```
Superblock → FreeBlock_1 → FreeBlock_5 → FreeBlock_12 → FreeBlock_33 → ...
```

#### Pseudocode — Free List

```
function allocate_from_list():
    if superblock.free_list_head == -1:
        return -1  // no free blocks
    block = superblock.free_list_head
    superblock.free_list_head = read_next_free(block)
    return block

function free_to_list(block):
    write_next_free(block, superblock.free_list_head)
    superblock.free_list_head = block
```

### 7.3 Grouping

Store pointers to free blocks **inside** free blocks. The first free block contains pointers to the next N free blocks, and the last of those pointers points to the next free block that contains more pointers.

```
Grouping:
Superblock → FreeBlock_A [ptr to B, ptr to C, ptr to D, ..., ptr to N, next → FreeBlock_X]
FreeBlock_X  [ptr to Y, ptr to Z, ...]
```

This gives O(1) allocation and deallocation in most cases.

### 7.4 Counting

Track **extents** (runs of consecutive free blocks). Each entry stores a starting block and a count.

```
Counting table:
(start=10, len=5)  → free blocks 10,11,12,13,14
(start=30, len=3)  → free blocks 30,31,32
(start=100, len=20) → free blocks 100-119
```

#### Pseudocode — Counting

```
function allocate_counting(count_needed):
    for each extent (start, len):
        if len >= count_needed:
            allocate start for count_needed blocks
            update extent: start += count_needed, len -= count_needed
            if len == 0: remove extent
            return start
    return -1

function free_counting(block, count):
    merge with adjacent extents if possible
    otherwise add new extent (block, count)
```

### C++ Implementation — Four Free Space Managers

```cpp
#include <iostream>
#include <vector>
#include <list>
#include <cstring>
#include <algorithm>

// 1. Bitmap Free Space Manager
class BitmapFreeSpace {
    unsigned char* bitmap;
    int total_blocks;
public:
    BitmapFreeSpace(int blocks) : total_blocks(blocks) {
        int bytes = (blocks + 7) / 8;
        bitmap = new unsigned char[bytes];
        std::memset(bitmap, 0xFF, bytes);  // all 1 = free
        // Mark last bits beyond total_blocks as 0 (used)
        for (int i = blocks; i < bytes * 8; i++) {
            bitmap[i / 8] &= ~(1 << (i % 8));
        }
    }

    bool is_free(int block) {
        return bitmap[block / 8] & (1 << (block % 8));
    }

    int allocate() {
        for (int i = 0; i < total_blocks; i++) {
            if (is_free(i)) {
                bitmap[i / 8] &= ~(1 << (i % 8));
                return i;
            }
        }
        return -1;
    }

    int allocate_contiguous(int count) {
        int run = 0;
        for (int i = 0; i < total_blocks; i++) {
            if (is_free(i)) {
                run++;
                if (run == count) {
                    int start = i - count + 1;
                    for (int j = start; j <= i; j++) {
                        bitmap[j / 8] &= ~(1 << (j % 8));
                    }
                    return start;
                }
            } else {
                run = 0;
            }
        }
        return -1;
    }

    void free_block(int block) {
        bitmap[block / 8] |= (1 << (block % 8));
    }

    int free_count() {
        int count = 0;
        for (int i = 0; i < total_blocks; i++) {
            if (is_free(i)) count++;
        }
        return count;
    }

    ~BitmapFreeSpace() { delete[] bitmap; }
};

// 2. Linked List Free Space Manager
class LinkedListFreeSpace {
    struct FreeBlock {
        int block_num;
    };
    FreeBlock* free_blocks;
    int head;
    int total_blocks;
    bool* allocated;
public:
    LinkedListFreeSpace(int blocks) : head(-1), total_blocks(blocks) {
        free_blocks = new FreeBlock[blocks];
        allocated = new bool[blocks]();
        // Initially all blocks are free, chain them
        for (int i = 0; i < blocks - 1; i++) {
            free_blocks[i].block_num = i + 1;
        }
        free_blocks[blocks - 1].block_num = -1;
        head = 0;
    }

    int allocate() {
        if (head < 0) return -1;
        int block = head;
        head = free_blocks[block].block_num;
        allocated[block] = true;
        return block;
    }

    void free_block(int block) {
        if (block < 0 || block >= total_blocks) return;
        allocated[block] = false;
        free_blocks[block].block_num = head;
        head = block;
    }

    int free_count() {
        int count = 0;
        int cur = head;
        while (cur >= 0) {
            count++;
            cur = free_blocks[cur].block_num;
        }
        return count;
    }

    ~LinkedListFreeSpace() {
        delete[] free_blocks;
        delete[] allocated;
    }
};

// 3. Grouping Free Space Manager
class GroupingFreeSpace {
    static const int GROUP_SIZE = 100;
    std::vector<int> free_list;  // small list in memory
    int total_blocks;
public:
    GroupingFreeSpace(int blocks) : total_blocks(blocks) {
        for (int i = blocks - 1; i >= 0; i--) {
            free_list.push_back(i);
        }
    }

    int allocate() {
        if (free_list.empty()) return -1;
        int block = free_list.back();
        free_list.pop_back();
        return block;
    }

    void free_block(int block) {
        free_list.push_back(block);
    }

    int free_count() { return free_list.size(); }
};

// 4. Counting Free Space Manager
class CountingFreeSpace {
    struct Extent {
        int start, len;
    };
    std::list<Extent> extents;
    int total_blocks;
public:
    CountingFreeSpace(int blocks) : total_blocks(blocks) {
        extents.push_back({0, blocks});
    }

    int allocate(int needed) {
        for (auto it = extents.begin(); it != extents.end(); ++it) {
            if (it->len >= needed) {
                int block = it->start;
                it->start += needed;
                it->len -= needed;
                if (it->len == 0) extents.erase(it);
                return block;
            }
        }
        return -1;
    }

    void free_blocks(int block, int count) {
        // Merge with adjacent extents
        Extent new_ext = {block, count};
        for (auto it = extents.begin(); it != extents.end(); ) {
            if (it->start == block + count) {
                new_ext.len += it->len;
                it = extents.erase(it);
            } else if (it->start + it->len == block) {
                new_ext.start = it->start;
                new_ext.len += it->len;
                it = extents.erase(it);
            } else {
                ++it;
            }
        }
        extents.push_back(new_ext);
        extents.sort([](const Extent& a, const Extent& b) {
            return a.start < b.start;
        });
    }

    void print_extents() {
        std::cout << "Free extents:\n";
        for (const auto& e : extents) {
            std::cout << "  blocks " << e.start << "-" << e.start + e.len - 1
                      << " (" << e.len << " blocks)\n";
        }
    }

    int free_count() {
        int total = 0;
        for (const auto& e : extents) total += e.len;
        return total;
    }
};

int main() {
    std::cout << "=== Bitmap Free Space ===\n";
    BitmapFreeSpace bm(32);
    int b1 = bm.allocate();
    int b2 = bm.allocate_contiguous(3);
    std::cout << "Allocated blocks: " << b1 << ", " << b2 << "-" << b2 + 2 << "\n";
    bm.free_block(b1);
    std::cout << "Free count: " << bm.free_count() << "\n";

    std::cout << "\n=== Linked List Free Space ===\n";
    LinkedListFreeSpace ll(32);
    int b = ll.allocate();
    std::cout << "Allocated block: " << b << "\n";
    ll.free_block(b);
    std::cout << "Free count: " << ll.free_count() << "\n";

    std::cout << "\n=== Counting Free Space ===\n";
    CountingFreeSpace cf(64);
    cf.print_extents();
    int c1 = cf.allocate(5);
    std::cout << "Allocated 5 blocks starting at " << c1 << "\n";
    cf.print_extents();
    cf.free_blocks(c1, 5);
    std::cout << "After freeing:\n";
    cf.print_extents();

    return 0;
}
```

### Python Implementation — Four Free Space Managers

```python
# 1. Bitmap Free Space
class BitmapFS:
    def __init__(self, total_blocks):
        self.total = total_blocks
        self.bitmap = bytearray((total_blocks + 7) // 8)
        # Set all bits to 1 (free)
        for i in range(total_blocks):
            self.bitmap[i // 8] |= (1 << (i % 8))

    def _is_free(self, block):
        return bool(self.bitmap[block // 8] & (1 << (block % 8)))

    def allocate(self):
        for i in range(self.total):
            if self._is_free(i):
                self.bitmap[i // 8] &= ~(1 << (i % 8))
                return i
        return -1

    def allocate_contiguous(self, count):
        run = 0
        for i in range(self.total):
            if self._is_free(i):
                run += 1
                if run == count:
                    start = i - count + 1
                    for j in range(start, i + 1):
                        self.bitmap[j // 8] &= ~(1 << (j % 8))
                    return start
            else:
                run = 0
        return -1

    def free_block(self, block):
        self.bitmap[block // 8] |= (1 << (block % 8))

    def free_count(self):
        return sum(1 for i in range(self.total) if self._is_free(i))

    def __str__(self):
        return ''.join(str(b) for b in self.bitmap).rstrip('0')


# 2. Linked List Free Space
class LinkedListFS:
    def __init__(self, total_blocks):
        self.head = 0
        self.next_free = list(range(1, total_blocks)) + [-1]
        self.allocated = [False] * total_blocks

    def allocate(self):
        if self.head < 0:
            return -1
        block = self.head
        self.head = self.next_free[block]
        self.allocated[block] = True
        return block

    def free_block(self, block):
        if block < 0 or block >= len(self.next_free):
            return
        self.allocated[block] = False
        self.next_free[block] = self.head
        self.head = block

    def free_count(self):
        count = 0
        cur = self.head
        while cur >= 0:
            count += 1
            cur = self.next_free[cur]
        return count


# 3. Grouping Free Space
class GroupingFS:
    def __init__(self, total_blocks):
        self.free = list(range(total_blocks - 1, -1, -1))

    def allocate(self):
        return self.free.pop() if self.free else -1

    def free_block(self, block):
        self.free.append(block)

    def free_count(self):
        return len(self.free)


# 4. Counting Free Space (extent-based)
class CountingFS:
    def __init__(self, total_blocks):
        self.extents = [(0, total_blocks)]

    def allocate(self, needed):
        for i, (start, length) in enumerate(self.extents):
            if length >= needed:
                self.extents[i] = (start + needed, length - needed)
                if self.extents[i][1] == 0:
                    self.extents.pop(i)
                return start
        return -1

    def free_blocks(self, block, count):
        new_start, new_len = block, count
        merged = []
        for start, length in self.extents:
            if start == block + count:
                new_len += length
            elif start + length == block:
                new_start = start
                new_len += length
            else:
                merged.append((start, length))
        merged.append((new_start, new_len))
        merged.sort()
        self.extents = merged

    def print_extents(self):
        for start, length in self.extents:
            print(f"  [{start}, {start + length - 1}] len={length}")

    def free_count(self):
        return sum(l for _, l in self.extents)


if __name__ == "__main__":
    print("=== Bitmap ===")
    bm = BitmapFS(32)
    a = bm.allocate()
    b = bm.allocate_contiguous(4)
    print(f"Allocated: {a}, {b}-{b+3}")
    bm.free_block(a)
    print(f"Free count: {bm.free_count()}")

    print("\n=== Counting ===")
    cf = CountingFS(64)
    print("Initial extents:")
    cf.print_extents()
    c1 = cf.allocate(10)
    print(f"Allocated 10 blocks at {c1}")
    cf.free_blocks(20, 5)
    cf.print_extents()
```

### Free Space Management Comparison

| Method | Allocation | Deallocation | Memory | Best For | Worst For |
|--------|-----------|-------------|--------|----------|-----------|
| **Bit vector** | O(blocks) scan | O(1) bit clear | Moderate (32 MB/TB) | General purpose, contiguous search | Very large disks |
| **Linked list** | O(1) | O(1) | Minimal (1 ptr/block used) | Simple embedded | Long chains, no contiguity |
| **Grouping** | O(1) avg | O(1) amortized | Low (1 ptr/group) | Frequent alloc/free | Memory constrained |
| **Counting** | O(extents) | O(extents) merge | Low (per-extent) | Contiguous allocation | Highly fragmented disk |

### Complexity Analysis — Why

| Method | Allocation Complexity | Why |
|--------|----------------------|-----|
| Bitmap (first fit) | O(blocks) | Must scan potentially all bits |
| Bitmap (optimized w/ word-level) | O(blocks/32) | Scan 32-bit words, then find bit within word |
| Linked list | O(1) | Pop head of list |
| Grouping | O(1) | Pop from in-memory group |
| Counting | O(extents) | Scan extent list (small) |

**Why linked list is O(1)**: The head pointer is stored in the superblock. Dequeue it and update — two pointer operations regardless of list size.

**Why bitmap can be slow**: For a 1 TB disk, scanning 268 million bits looking for a free block is expensive. Real systems use block-group-local bitmaps to keep each scan small.

### Edge Cases — Free Space

| Edge Case | Bitmap | Linked List | Counting |
|-----------|--------|-------------|----------|
| **Disk full** | All bits 0 | head = -1 | No extents |
| **Single block free** | One bit set | One node in chain | One extent of length 1 |
| **Highly fragmented** | Many 0/1 transitions | Long chain | Many small extents |
| **Allocate contiguous** | Must scan for run | Impossible directly | Find extent with enough length |
| **Concurrent allocation** | Need lock on bitmap | Need lock on head | Need lock on extent list |
| **Recovery after crash** | Must rebuild by scanning | Chain may be broken | Extents must be rebuilt |

---

## 8. Interview Corner

### Q1: FAT vs Inode — Key Differences

| Aspect | FAT (File Allocation Table) | Inode (Unix) |
|--------|---------------------------|-------------|
| **Structure** | Single table for entire volume | Per-file inode with pointers |
| **Location** | Fixed reserved area at partition start | Spread across block groups |
| **Direct access** | Walk FAT chain (O(n)) | Direct/indirect pointers (O(1)) |
| **Directory** | Directory entries contain first cluster | Directory entries contain inode number |
| **Redundancy** | Single FAT (some have backup) | Inode table has block group backups |
| **Max file size** | Volume size (4 GB for FAT32) | ~4 TB with triple indirect |
| **Metadata** | Stored in directory entry | Stored in inode |
| **Hard links** | Not supported | Supported (link count) |
| **Performance** | FAT cached in memory is fast | Multi-level can require multiple I/Os |
| **Used by** | MS-DOS, Windows (legacy), USB | Linux, BSD, macOS |

### Q2: Block Size vs Performance — Tradeoff

| Block Size | Small Files | Large Files | Space Waste | Throughput |
|-----------|------------|------------|-------------|-------------|
| **512 bytes** | Good (little waste) | Poor (many seeks) | Minimal | Low |
| **1 KB** | Moderate | Moderate | 1% typical | Moderate |
| **2 KB** | Moderate | Good | 2% typical | Good |
| **4 KB** | Poor (40% waste on tiny files) | Excellent (fewer seeks) | Up to 4 KB/file | High |
| **8 KB** | Worst | Best | Up to 8 KB/file | Highest |
| **64 KB (NTFS large cluster)** | Terrible | Optimal for large files | Extreme waste | Max throughput |

**Key formula**: Internal fragmentation per file averages `block_size / 2`. For a 4 KB block, each file wastes ~2 KB on average. With 100,000 small files, that's 200 MB of waste.

**Interview answer framework**: "The optimal block size depends on the workload. For general-purpose systems, 4 KB is a common sweet spot: it keeps internal fragmentation under 2 KB per file while providing good throughput for large sequential I/O. Databases and video editing systems benefit from larger blocks (64 KB+), while systems with many tiny configuration files might prefer 1 KB blocks."

### Q3: File System Overhead Breakdown

**ext4 overhead on a 100 GB partition with 4 KB blocks:**

| Component | Size | % of Volume |
|-----------|------|-------------|
| Superblock + backups | ~1 MB | 0.001% |
| Block group descriptors | ~8 MB | 0.008% |
| Inode table (128 bytes × number of inodes) | ~200 MB (1.6M inodes) | 0.2% |
| Block bitmap (1 bit per block) | ~3 MB | 0.003% |
| Inode bitmap (1 bit per inode) | ~0.2 MB | 0.0002% |
| Journal (default 128 MB) | ~128 MB | 0.128% |
| Reserved blocks for root (5%) | ~5 GB | 5% |
| **Total usable** | **~94.6 GB** | **~94.6%** |

**NTFS overhead:**
- MFT reserved zone: 12.5% of volume by default
- MFT entry (1 KB per file/directory)
- $Bitmap, $LogFile, $Volume, $AttrDef, etc. (system metadata files)

**Key insight**: The biggest waste is not metadata — it's internal fragmentation. A 10-byte file wastes 4,086 bytes in a 4 KB block.

### Q4: How Does `stat` Work?

The `stat` system call reads the inode and returns its contents:

```
$ stat /etc/passwd
  File: /etc/passwd
  Size: 2645            Blocks: 8          IO Block: 4096   regular file
Device: 801h/2049d      Inode: 1310945     Links: 1
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2024-01-15 10:30:00.000000000 +0100
Modify: 2024-01-10 14:22:00.000000000 +0100
Change: 2024-01-10 14:22:00.000000000 +0100
 Birth: 2023-12-01 00:00:00.000000000 +0100
```

**What happens internally:**
1. The VFS receives `stat()` with a pathname.
2. The directory path is traversed to find the inode number.
3. The inode is read from the inode table (or cache).
4. Fields from the inode are copied into the `stat` struct.
5. The struct is returned to userspace.

### Q5: What Happens When You `rm` a File?

1. The directory entry is removed (name-to-inode mapping is deleted).
2. The inode's link count is decremented.
3. If link count reaches 0, the inode is marked free:
   - All data blocks are added to the free space manager.
   - The inode slot is marked as free.
4. If the file was open in another process, the data remains accessible via the file descriptor (the in-memory inode persists until the last fd is closed).

### Q6: Sparse Files

A **sparse file** is a file with "holes" — regions that were never written. Reading a hole returns zeros. The file system does not allocate disk blocks for holes.

```
Sparse file (100 GB logical, 4 KB actual):
Logical blocks: [0][1][2][3][4][5]...[25,000,000]...[26,214,399]
                ┌──────┐                                    ┌──────┐
                │ 4 KB │  hole (no blocks allocated)         │ 4 KB │
                │ data │  reads as zeros                     │ data │
                └──────┘                                    └──────┘
```

**Creating a sparse file:**
```bash
$ truncate -s 100G huge_file.img
$ ls -lh huge_file.img
-rw-r--r-- 1 user user 100G Jan 15 12:00 huge_file.img
$ du -h huge_file.img
0       huge_file.img    # No blocks actually allocated!
```

**Detection**: `du` shows actual usage (blocks allocated), while `ls` shows apparent size.

### Q7: Why Does `df` Show Different Values Than Adding All Files?

The `df` command reports total blocks, used blocks, and available blocks. The discrepancy comes from:
1. **Reserved blocks** (default 5% for root in ext4)
2. **Metadata blocks** (inode table, bitmaps, superblock)
3. **Journal** space
4. **Directory overhead** (even empty directories use an inode and blocks)

## 9. Applications in Real Systems

### 9.1 ext4 (Linux)

| Feature | ext4 Implementation |
|---------|-------------------|
| **Directory** | Htree (B-tree on hash of filename) — O(log n) lookup |
| **Inode** | 156 bytes; extents instead of block pointers |
| **Block allocation** | Extent-based: multi-block allocator |
| **Free space** | Per-block-group bitmap |
| **Journaling** | Journal (metadata+data), Ordered (default), Writeback |
| **Delayed allocation** | Waits before writing blocks to disk for better placement |
| **Max file size** | 16 TB (extents), 4 KB blocks |

**ext4 extent tree:**
```
Inode.i_block[0..3] → extent header + 4 extent entries
                 Each extent: (start block, length, physical start)
If 4 extents not enough → extent tree in data blocks (depth 1-2)
```

### 9.2 NTFS (Windows)

| Feature | NTFS Implementation |
|---------|-------------------|
| **Directory** | B-tree — O(log n) lookup |
| **Master File Table (MFT)** | Array of 1 KB records, each describing one file |
| **File records** | Small files stored directly in MFT record (resident data) |
| **Block pointers** | Extent-based: run-length encoding of contiguous ranges |
| **Free space** | $Bitmap file (one bit per cluster) |
| **Journaling** | $LogFile — redo/undo logging |
| **Max file size** | 16 EB (theoretically), 256 TB practically |

**NTFS MFT record layout:**
```
MFT Record (1 KB):
┌─────────────────────────────────┐
│ FILE header (magic "FILE")      │  ← 42 bytes
├─────────────────────────────────┤
│ Fixup array                     │
├─────────────────────────────────┤
│ Attribute: $STANDARD_INFORMATION│  ← timestamps, permissions
│ Attribute: $FILE_NAME           │  ← filename (Unicode)
│ Attribute: $DATA (resident)     │  ← tiny file stored here!
│ Attribute: $DATA (non-resident) │  ← run-list for large files
│ Attribute: $BITMAP              │  ← for directories
│ ...                             │
│ Attribute: $END                 │
└─────────────────────────────────┘
```

**Resident vs non-resident data:**
- File &lt; ~900 bytes: data stored directly in MFT record (0 extra blocks)
- File > ~900 bytes: MFT contains run-list of cluster ranges

### 9.3 FAT32 (Legacy Windows/Removable)

| Feature | FAT32 Implementation |
|---------|-------------------|
| **Directory** | Linear list (simple) |
| **File allocation** | FAT table (32-bit entries, 28 usable) |
| **Directory entry** | 32 bytes: name, attributes, times, first cluster, size |
| **Free space** | FAT entries = free cluster marker |
| **Journaling** | None |
| **Max file** | 4 GB (filesize stored in 32-bit field) |
| **Max volume** | 2 TB (with 512-byte sectors) |

**FAT32 directory entry (32 bytes):**
```
Byte 0-7:    Filename (8.3 format)
Byte 8-10:   Extension
Byte 11:     Attributes (read-only, hidden, system, volume, directory, archive)
Byte 12-21:  Reserved (for long filename entries)
Byte 22-23:  Creation time
Byte 24-25:  Creation date
Byte 26-27:  First cluster (high 16 bits)
Byte 28-31:  File size
```

**Long filename (LFN) workaround**: Multiple consecutive 32-byte entries with special attributes, preceding the 8.3 entry. First LFN entry = last part of name.

## 10. File System Performance

### Caching (Buffer Cache)

The OS maintains a cache of recently accessed disk blocks in memory. The **page cache** (unified with virtual memory) caches file data.

```
Application:   read(fd, buf, 1024)
                   ↓
Page Cache:   Check if block is cached
              ├── Hit:  copy from cache → return
              └── Miss: read from disk → add to cache → copy → return
```

### Read-Ahead

When a file is accessed sequentially, the OS anticipates the next few pages and reads them from disk before they are requested.

### Journaling

Instead of directly modifying the file system, changes are first written to a **journal** (a log). After the journal entry is safely on disk, the changes are applied to the actual file system.

```
Operation: Delete file "data.txt"

1. Write to journal: "about to remove data.txt inode and 3 blocks"
2. Write journal commit record
3. Actually remove the inode and free the blocks
4. Mark journal entry as checkpointed (can be discarded)

If the system crashes during step 3:
  On recovery, the journal contains an uncommitted entry:
  - If no commit record: discard (changes were not applied)
  - If commit record present: replay the operation (redo)
```

**Journaling modes** (ext3/4):
- **Journal**: Everything is journaled (metadata + data). Most safe, slowest.
- **Ordered**: Only metadata is journaled, but data blocks are written first. Good compromise.
- **Writeback**: Only metadata is journaled, no ordering guarantees. Fastest, least safe.

## 11. File System Types Comparison

| FS | Max Volume | Max File Size | Journaling | Key Features |
|----|-----------|---------------|------------|-------------|
| FAT32 | 2 TB | 4 GB | No | Universal compatibility |
| NTFS | 256 TB | 256 TB | Yes | ACLs, compression, encryption |
| ext4 | 1 EB | 16 TB | Yes | Extents, delayed allocation |
| XFS | 8 EB | 8 EB | Yes | Excellent parallel I/O |
| Btrfs | 16 EB | 16 EB | Yes | Copy-on-write, snapshots, RAID |
| ZFS | 256 PB | 256 PB | Yes | Pooled storage, checksums, COW |

## 12. Examples

### Example 1: Simulating a Simple File System

```c
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

#define BLOCK_SIZE 4096
#define NUM_BLOCKS 1024
#define NUM_INODES 128

// Simulated disk
char disk[NUM_BLOCKS][BLOCK_SIZE];

// Bitmap — one bit per block
unsigned char free_blocks[NUM_BLOCKS / 8];

typedef struct {
    bool used;
    int size;           // File size in bytes
    int direct_blocks[12];
    int single_indirect;
} inode_t;

inode_t inodes[NUM_INODES];

bool is_block_free(int block) {
    return !(free_blocks[block / 8] & (1 << (block % 8)));
}

void mark_block_used(int block) {
    free_blocks[block / 8] |= (1 << (block % 8));
}

void mark_block_free(int block) {
    free_blocks[block / 8] &= ~(1 << (block % 8));
}

int allocate_block() {
    for (int i = 0; i < NUM_BLOCKS; i++) {
        if (is_block_free(i)) {
            mark_block_used(i);
            return i;
        }
    }
    return -1;  // No free blocks
}

int allocate_inode() {
    for (int i = 0; i < NUM_INODES; i++) {
        if (!inodes[i].used) {
            inodes[i].used = true;
            inodes[i].size = 0;
            for (int j = 0; j < 12; j++) {
                inodes[i].direct_blocks[j] = -1;
            }
            inodes[i].single_indirect = -1;
            return i;
        }
    }
    return -1;
}

int write_file(int inode_num, const char *data, int len) {
    int blocks_needed = (len + BLOCK_SIZE - 1) / BLOCK_SIZE;
    int written = 0;

    for (int i = 0; i < blocks_needed && i < 12; i++) {
        int block = allocate_block();
        if (block < 0) return -1;
        inodes[inode_num].direct_blocks[i] = block;

        int to_write = (len > BLOCK_SIZE) ? BLOCK_SIZE : len;
        memcpy(disk[block], data + written, to_write);
        written += to_write;
        len -= to_write;
    }

    inodes[inode_num].size = written;
    return written;
}

void read_file(int inode_num, char *buffer) {
    int remaining = inodes[inode_num].size;

    for (int i = 0; i < 12 && remaining > 0; i++) {
        int block = inodes[inode_num].direct_blocks[i];
        if (block < 0) break;

        int to_read = (remaining > BLOCK_SIZE) ? BLOCK_SIZE : remaining;
        memcpy(buffer, disk[block], to_read);
        buffer += to_read;
        remaining -= to_read;
    }
}

int main() {
    memset(free_blocks, 0, sizeof(free_blocks));    // All blocks free
    memset(inodes, 0, sizeof(inodes));              // No inodes used

    int ino = allocate_inode();
    printf("Allocated inode %d\n", ino);

    const char *text = "Hello from our simulated file system!";
    int written = write_file(ino, text, strlen(text) + 1);
    printf("Wrote %d bytes\n", written);

    char buffer[256] = {0};
    read_file(ino, buffer);
    printf("Read back: %s\n", buffer);

    return 0;
}
```

### Example 2: Linked Allocation Walk

```bash
$ ls -la
total 16
drwxr-xr-x  2 user user 4096 Jan 15 12:00 .
drwxr-xr-x  4 user user 4096 Jan 15 11:00 ..
-rw-r--r--  1 user user 8192 Jan 15 12:00 testfile.bin

# A 8192-byte file uses 2 blocks of 4096 bytes
# With linked allocation (4-byte pointers):
# Block A: [4092 bytes data][→ Block B]
# Block B: [4092 bytes data][END]
```

### Example 3: Ext4 Inode Exploration

```bash
$ dd if=/dev/sda1 of=superblock.bin bs=1024 count=1 skip=1
$ hexdump -C superblock.bin | head -5
00000000  00 00 00 00 00 00 00 00  00 00 04 00 00 00 00 00  |................|
...
$ debugfs -R "stat /etc/passwd" /dev/sda1
```

## Concept Comparison

| Feature | Contiguous | Linked | Indexed (Unix inode) |
|-------|----------|------|--------------------|
| Ext. Frag. | Yes | No | No |
| Direct Access | Yes | No | Yes |
| Seq. Access | Fast | Moderate | Fast |
| Overhead | Minimal | Per-block pointers | Index block(s) |
| Max File Size | Limited by contiguous space | No limit | Very large (indirect blocks) |

## Quick Reference

| Term | Definition |
|------|------------|
| **Superblock** | FS metadata: size, block count, free-block count, inode count |
| **Inode** | Index node — metadata + block pointers |
| **FAT** | File Allocation Table — linked-list table cached in memory |
| **Bit Vector** | Bitmap where each bit = free (1) or used (0) block |
| **Multi-Level Index** | Inode indirect block pointers (single/double/triple) |
| **Extent** | Contiguous block range (start + length) |
| **MFT** | Master File Table — NTFS per-file record |
| **Journal** | Write-ahead log for crash recovery |
| **Sparse file** | File with unallocated holes (reads zeros) |
| **Block group** | ext4 subdivision with local bitmap + inode table |

## Cross-Application Matrix

| Concept | Web Server | Database | Embedded System | Smartphone |
|-------|----------|--------|---------------|----------|
| Allocation | Extents (multi-block) | B+ tree | Linked (FAT table) | Extents |
| Max File Size | 16 TiB | 16 EiB | 4 GiB | 8 EiB |
| FS Check | e2fsck | chkdsk | scandisk | fsck_apfs |
| Journaling | Yes (metadata) | Yes (full) | No | Yes |

## Chapter Quiz

1. Which allocation method suffers external fragmentation?
   - a) Contiguous
   - b) Linked
   - c) Indexed
   - d) FAT

2. The inode multi-level index allows:
   - a) Faster sequential access
   - b) Small file efficiency + large file support
   - c) Simplified directory lookup
   - d) Journaling without overhead

3. Advantage of indexed over linked allocation?
   - a) Less overhead
   - b) Support for direct (random) access
   - c) Simpler implementation
   - d) Better space utilization

4. Which free space method uses the least memory?
   - a) Bitmap
   - b) Linked list
   - c) Grouping
   - d) Counting

5. In ext4, what data structure replaced the traditional block pointer scheme?
   - a) FAT
   - b) Extents
   - c) B-tree
   - d) Hash table

6. What is the primary purpose of a journal in a journaling file system?
   - a) Speed up file reads
   - b) Prevent file system corruption after crashes
   - c) Compress file data
   - d) Encrypt file metadata

7. In the ext4 block group, what does the block bitmap track?
   - a) Which inodes are in use
   - b) Which data blocks are free/allocated
   - c) Which block groups are active
   - d) Which superblock is primary vs backup

8. Which file system stores file data directly in the directory entry for very small files?
   - a) ext4
   - b) NTFS (resident data in MFT)
   - c) FAT32
   - d) XFS

9. What is the key advantage of extent-based allocation over traditional block pointer schemes?
   - a) Simpler code
   - b) Fewer metadata lookups for large contiguous files
   - c) Better support for small files
   - d) No fragmentation

10. In a 32-bit FAT file system with 4 KB clusters, what is the maximum partition size?
    - a) 4 GB
    - b) 8 GB
    - c) 16 TB
    - d) 2 TB

**Answers:** 1-a, 2-b, 3-b, 4-d, 5-b, 6-b, 7-b, 8-b, 9-b, 10-c

## TypeScript Implementation — Journaling File System Simulator

```typescript
/**
 * JournalingFileSystem: A TypeScript simulator demonstrating
 * write-ahead journaling (WAL) for crash recovery in file systems.
 * 
 * Operations are logged to a journal before modifying the main data store.
 * On recovery, the journal is replayed to restore consistency.
 */

type JournalEntryType = 'CREATE' | 'WRITE' | 'DELETE' | 'CHECKPOINT';

interface JournalEntry {
  seq: number;
  type: JournalEntryType;
  path: string;
  data?: string;
  /** Transaction state: 'pending' | 'committed' | 'rolled-back' */
  state: 'pending' | 'committed' | 'rolled-back';
}

interface FileData {
  content: string;
  createdAt: number;
}

class JournalingFileSystem {
  private files: Map<string, FileData> = new Map();
  private journal: JournalEntry[] = [];
  private seqCounter: number = 0;
  private checkpointSeq: number = 0;

  /** Write a journal entry before performing the operation */
  private logEntry(type: JournalEntryType, path: string, data?: string): number {
    const seq = ++this.seqCounter;
    this.journal.push({ seq, type, path, data, state: 'pending' });
    return seq;
  }

  /** Mark a journal entry as committed (operation completed successfully) */
  private commitEntry(seq: number): void {
    const entry = this.journal.find(e => e.seq === seq);
    if (entry) entry.state = 'committed';
  }

  /** CREATE operation with journaling */
  createFile(path: string, content: string = ''): boolean {
    if (this.files.has(path)) return false;
    const seq = this.logEntry('CREATE', path, content);
    this.files.set(path, { content, createdAt: Date.now() });
    this.commitEntry(seq);
    return true;
  }

  /** WRITE operation with journaling */
  writeFile(path: string, content: string): boolean {
    if (!this.files.has(path)) return false;
    const seq = this.logEntry('WRITE', path, content);
    this.files.set(path, { content, createdAt: this.files.get(path)!.createdAt });
    this.commitEntry(seq);
    return true;
  }

  /** DELETE operation with journaling */
  deleteFile(path: string): boolean {
    if (!this.files.has(path)) return false;
    const seq = this.logEntry('DELETE', path);
    this.files.delete(path);
    this.commitEntry(seq);
    return true;
  }

  /** Simulate a crash: clear all in-memory data, journal survives */
  simulateCrash(): void {
    console.log('[CRASH] System crashed! In-memory data lost.');
    this.files.clear();
  }

  /** Recover from journal: replay all committed entries */
  recover(): void {
    console.log('[RECOVERY] Starting journal replay...');
    const committed = this.journal.filter(
      e => e.state === 'committed' && e.seq > this.checkpointSeq
    );

    for (const entry of committed) {
      switch (entry.type) {
        case 'CREATE':
        case 'WRITE':
          this.files.set(entry.path, {
            content: entry.data || '',
            createdAt: Date.now()
          });
          console.log(`  [REPLAY] ${entry.type} ${entry.path}`);
          break;
        case 'DELETE':
          this.files.delete(entry.path);
          console.log(`  [REPLAY] DELETE ${entry.path}`);
          break;
        case 'CHECKPOINT':
          this.checkpointSeq = entry.seq;
          console.log(`  [REPLAY] CHECKPOINT at seq=${entry.seq}`);
          break;
      }
    }
    console.log(`[RECOVERY] Replayed ${committed.length} entries. Files restored: ${this.files.size}`);
  }

  /** Create a checkpoint: truncate the journal up to this point */
  checkpoint(): void {
    const seq = ++this.seqCounter;
    this.journal.push({ seq, type: 'CHECKPOINT', path: '', state: 'committed' });
    this.checkpointSeq = seq;
    // Remove old journal entries (simulated by marking)
    this.journal = this.journal.filter(e => e.seq >= this.checkpointSeq);
    console.log(`[CHECKPOINT] Journal trimmed at seq=${seq}`);
  }

  /** Display current file system state */
  status(): void {
    console.log('\n=== File System State ===');
    if (this.files.size === 0) {
      console.log('  (empty — no files)');
    } else {
      for (const [path, data] of this.files) {
        console.log(`  ${path}: ${data.content.substring(0, 40)}...`);
      }
    }
    console.log(`  Total files: ${this.files.size}`);
    console.log(`  Journal entries: ${this.journal.length}`);
    console.log('========================\n');
  }
}

// Simulate a crash-and-recover scenario
const jfs = new JournalingFileSystem();

console.log('=== Phase 1: Normal Operations ===');
jfs.createFile('/etc/config.json', '{"debug": true}');
jfs.createFile('/var/log/app.log', 'INFO: starting application');
jfs.writeFile('/var/log/app.log', 'INFO: processing request #42');
jfs.status();

console.log('=== Phase 2: Crash! ===');
jfs.simulateCrash();
jfs.status(); // Should show (empty)

console.log('=== Phase 3: Recovery ===');
jfs.recover();
jfs.status(); // Files should be restored from journal

console.log('=== Phase 4: Delete with Journal ===');
jfs.deleteFile('/etc/config.json');
jfs.checkpoint();
jfs.status();
```

## Summary

- A file system's on-disk structure includes boot block, superblock, free-space management, inode table, and data blocks
- Inodes store file metadata and point to data blocks via direct, indirect, double, and triple pointers
- Allocation methods: contiguous (fast but rigid), linked (flexible but slow), indexed (direct access, overhead)
- Free space is tracked with bitmaps (fast, compact), linked lists (simple), grouping (efficient), or counting (contiguous-aware)
- Contiguous allocation suffers external fragmentation; linked and indexed do not
- Directory implementation: linear list (simple O(n)) vs hash table (fast O(1)) vs B-tree (log n, used in NTFS/ext4)
- The page cache dramatically improves performance by caching recently accessed blocks
- Journaling prevents file system corruption by writing intent logs before modifying data
- ext4 uses extents for contiguous multi-block allocation, replacing the traditional indirect pointer scheme
- NTFS stores small files directly in the MFT record (resident data)
- FAT32 is obsolete but still used for removable media due to universal compatibility
- ext4, NTFS, and XFS are dominant file systems, each with different trade-offs

## Exercises

### Basic

1. What information is stored in a superblock? List at least five fields.
2. What is an inode? How does it differ from a directory entry?
3. Compare the maximum file size for ext4 with 4 KB blocks using the inode structure described (12 direct + single + double + triple indirect). Assume 8-byte block pointers.
4. Draw the bit vector for a disk where blocks 2, 5, 7-10, and 15 are allocated (20 blocks total).

### Intermediate

5. Implement a simple disk simulator with 256 blocks of 512 bytes each. Use a bitmap for free-space management. Support `write_file(name, data)` and `read_file(name)` using indexed allocation.
6. When a file is deleted, the inode's link count decreases. Only when it reaches 0 is the file truly deleted. Write a program that creates a file, opens it, deletes it (while it's open), and shows that the data is still accessible via the open file descriptor.
7. Compare ordered journaling vs writeback journaling in ext4. What differences in recovery behavior do you see?
8. Simulate external fragmentation with contiguous allocation: allocate a mix of files (3 blocks, 5 blocks, 2 blocks, 4 blocks), delete the second and fourth files, then try to allocate a 5-block file. Show the bitmap at each step.

### Advanced

9. Implement a simplified **ext4-like** file system in a file (using `dd` to create a 100 MB disk image). Implement the superblock, block group descriptors, inode table, block bitmap, and inode bitmap. Support `create_file()`, `delete_file()`, and `read_file()`.
10. Use `dd` and `debugfs` to explore a real ext4 file system. Find the location of the superblock, examine the inode of a small file (< 48 KB) and note which direct blocks it uses. Create a large file (> 100 MB) and examine its indirect and double-indirect blocks.
11. Design and implement a **copy-on-write** file system in a file-backed image. When a block is modified, allocate a new block and update the inode. This is the approach used by btrfs and ZFS for snapshots.
12. Implement the four free space management methods in a single program and compare their performance for allocating 1000 blocks with random free/allocate patterns. Measure fragmentation and throughput.

### Additional Exercises

13. **Journal replay analyzer**: Extend the TypeScript JournalingFileSystem simulator to handle "partial crashes" where some entries are committed and others are still pending. Implement a `simulatePartialCrash()` method that randomly marks half the pending entries as committed before the crash.

14. **Inode pointer walker**: Write a program that, given an inode number, walks the direct, single indirect, double indirect, and triple indirect pointer chains on a real ext4 file system (using `debugfs` or direct block device reads). Print the physical block numbers at each level.

15. **Extent tree visualizer**: For ext4 files using extents, write a program that reads the extent tree from an inode and prints each extent's logical block, physical block, and length. Show how a fragmented file's extent tree differs from a contiguous file's.

16. **Bitmap allocator simulator**: Implement a bitmap-based block allocator in TypeScript. Support `allocate(n)` — finds `n` contiguous free blocks (first-fit), and `free(blockNum, n)` — marks them as free. Simulate a workload of 100 random allocate/free operations. Track fragmentation percentage over time.

17. **Resident data analyzer**: Write a program that identifies which files in an NTFS volume have resident data (stored directly in the MFT record). Compare the distribution of resident vs non-resident files by file size. What is the maximum size for resident data in NTFS?

18. **Directory implementation benchmark**: Implement three directory implementations (linear list, sorted array with binary search, and hash table) in TypeScript. Benchmark `lookup(filename)`, `insert(filename)`, and `delete(filename)` operations for each. Use 10,000 entries and measure average operation time.

19. **fsck simulation**: Write a simplified file system checker that validates: inode-bitmap consistency (every inode referenced by a directory is marked used), block-bitmap consistency (every block referenced by an inode is marked used), directory entry validity (every entry points to a valid inode), and link count accuracy. Report all inconsistencies found.

20. **Sparse file support**: Extend the inode-based file system simulator to support sparse files — files with unallocated blocks (holes). A hole read returns zeros without consuming disk space. Implement `seek` beyond end-of-file to create holes. Track the difference between logical file size and physical block allocation.

21. **Superblock backup comparison**: Write a program that reads the primary superblock and all backup superblocks from an ext4 file system. Compare the fields and report any discrepancies. Explain the significance of backup superblocks for recovery.

22. **Directory index comparison**: Compare the performance of linear directories (ext2-style) vs B-tree directories (ext3/4-style with htree). Write a benchmark that creates 100,000 files in a directory and measures: creation time, lookup time for existing files, lookup time for non-existent files, and deletion time. Explain the O(n) vs O(log n) difference.

23. **Group descriptor analyzer**: Write a program that reads all block group descriptors from an ext4 file system. For each block group, print: block bitmap location, inode bitmap location, inode table location, free blocks count, free inodes count, and used directory count. Visualize the block group layout.

24. **File system aging simulation**: Simulate a file system over time — starting empty, then performing 10,000 file create/delete operations. Track: number of free extents of each size, fragmentation percentage, average allocation latency, time to find a contiguous block of a given size. Show how the system degrades and when compaction would help.

