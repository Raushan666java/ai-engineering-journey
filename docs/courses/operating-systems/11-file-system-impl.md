# Chapter 11: File System Implementation

## Learning Objectives

- Describe the on-disk and in-memory structures of a file system
- Compare contiguous, linked, and indexed file allocation strategies
- Implement free-space management using bitmaps and linked lists
- Explain the role of the superblock, inodes, and directory entries
- Analyze file system performance, including the impact of fragmentation
- Understand journaling and write-ahead logging for crash recovery

## Theory

### File System Layout

A file system is stored on a disk (or partition) in a structured layout. The exact organization varies, but most share common elements:

```
┌────────────────────────────────────────────┐
│ Boot Block                                   │
│   (first sector — boots the OS if this      │
│    is the bootable partition)                │
├────────────────────────────────────────────┤
│ Superblock                                   │
│   (file system metadata: type, size,         │
│    free block count, mount status)          │
├────────────────────────────────────────────┤
│ Free Space Management                        │
│   (bitmap or free list of available blocks) │
├────────────────────────────────────────────┤
│ Inode Table                                  │
│   (array of inodes — file metadata)         │
├────────────────────────────────────────────┤
│ Root Directory                               │
│   (directory entries for root directory)    │
├────────────────────────────────────────────┤
│ Data Blocks                                  │
│   (file data, directory contents,           │
│    indirect blocks, etc.)                   │
└────────────────────────────────────────────┘
```

### In-Memory File System Structures

The OS maintains several in-memory data structures for efficient file system access:

- **Mount table**: List of mounted file systems
- **In-memory inode table**: Cached inodes of open files
- **System-wide open-file table**: List of all open files across all processes
- **Per-process open-file table**: Each process's file descriptors, pointing to the system-wide table

```
Process A                    System-Wide            In-Memory
Open-File Table              Open-File Table        Inode Table
┌──────────┐                 ┌──────────────────┐   ┌──────────────┐
│ fd 0: →  │──stdin────────→│ File Entry        │──→│ /etc/passwd  │
│ fd 1: →  │──stdout───────→│ (file offset,     │   └──────────────┘
│ fd 2: →  │──stderr───────→│  vnode pointer,   │   ┌──────────────┐
│ fd 3: →  │───┐            │  access mode,     │──→│ /home/a.txt  │
└──────────┘    │            │  ref count)       │   └──────────────┘
                │            └──────────────────┘
                └───────────→│ File Entry for    │
                             │ /home/a.txt       │
                             │ offset = 42       │
                             └──────────────────┘
```

### Inodes (Index Nodes)

An **inode** is a data structure that stores all metadata about a file except its name. Names are stored in directory entries, which point to inodes.

```
Typical Unix inode (ext4):
┌────────────────────────────────────┐
│ Mode / Permissions (16 bits)        │
│ Owner ID (16 bits)                  │
│ Group ID (16 bits)                  │
│ Size (64 bits)                      │
│ Access Time (atime)                 │
│ Modification Time (mtime)           │
│ Change Time (ctime)                 │
│ Link Count                          │
│ Pointers to Data Blocks:            │
│   12 × Direct Block Pointers        │
│   1 × Single Indirect Pointer       │
│   1 × Double Indirect Pointer       │
│   1 × Triple Indirect Pointer       │
└────────────────────────────────────┘
```

The block pointers form a multi-level index:

```
┌─────────────┐
│ Direct 0    │────→ Data Block
│ Direct 1    │────→ Data Block
│ ...         │
│ Direct 11   │────→ Data Block
├─────────────┤
│ Single      │────→ ┌────┬────┬────┐
│ Indirect    │      │Ptrs to data blocks│
├─────────────┤      └──────────────────┘
│ Double      │────→ ┌────┬────┬────┐
│ Indirect    │      │Ptrs to indirect  │
│             │      │blocks            │
├─────────────┤      └──────────────────┘
│ Triple      │────→ ┌────┬────┬────┐
│ Indirect    │      │Ptrs to double   │
│             │      │indirect blocks  │
└─────────────┘      └──────────────────┘
```

With 4 KB blocks and 4-byte block pointers (1K pointers per indirect block):
- Direct: 12 × 4 KB = 48 KB
- Single indirect: 1024 × 4 KB = 4 MB
- Double indirect: 1024 × 1024 × 4 KB = 4 GB
- Triple indirect: 1024 × 1024 × 1024 × 4 KB = 4 TB
- Maximum file size: ~4 TB (with 4 KB blocks)

### Directory Implementation

A directory is a file whose data is a list of entries. Each entry maps a filename to an inode number.

**Linear list**: Simple, but lookup is O(n). Used in simple file systems.

**Hash table**: Hash the filename to get the table entry. Fast lookup (O(1)), but must handle collisions and resizing.

```
Directory entry (ext4):
┌──────────┬──────────────┬────────────────┐
│ inode #  │ record len   │ name len │type│
├──────────┼──────────────┼────────────────┤
│ 12345    │ 16           │ 4        │ reg│ home
│ 12346    │ 24           │ 11       │ reg│ documents
│ 12347    │ 40           │ 4        │ dir│ docs
└──────────┴──────────────┴────────────────┘
```

### Allocation Methods

#### Contiguous Allocation

Each file occupies a contiguous block of disk sectors.

```
File A (blocks 0-3):  [0][1][2][3]
File B (blocks 4-6):  [4][5][6]
File C (blocks 7-10): [7][8][9][10]
```

**Pro**: Simple, fast sequential and direct access (just compute offset).
**Con**: External fragmentation, file size must be known in advance.

#### Linked Allocation

Each block contains a pointer to the next block. The directory entry points to the first and last blocks.

```
Directory: file.txt → first=9, last=25

Block 9:  [data... | → 23]
Block 23: [data... | → 17]
Block 17: [data... | → 0]  (end)
```

**Pro**: No external fragmentation, file can grow easily.
**Con**: Sequential access only (no direct access), poor reliability (one bad block loses the rest).

**File Allocation Table (FAT)**: An optimization that moves the linked list into a separate table in memory. MS-DOS and early Windows used FAT.

```
FAT:
Index: 0   1   2   3   4   5   6   7   8   9  ...
Value: -1  -1  -1   7  -1  -1   9  11  -1   4  ...

File at block 2: 2 → 3 → 7 → 11 → end
```

#### Indexed Allocation

All block pointers are collected into an **index block** (similar to inode direct pointers).

```
File A:
Index Block: [4, 7, 2, 9, 11, 0, ...]
              ↓  ↓  ↓  ↓  ↓
Data Blocks:  4  7  2  9  11
```

**Pro**: Supports direct access, no external fragmentation.
**Con**: Index block overhead (must read index before data). Small files waste an entire index block.

### Free-Space Management

#### Bit Vector (Bitmap)

One bit per block on the device. 1 = free, 0 = allocated. Used by most modern file systems (ext4, XFS, NTFS).

```
Blocks:   0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
Bitmap:   1  1  0  0  1  1  1  1  0  0  0  0  0  1  1  1
          (blocks 0,1,4-7,13-15 are free)

Finding a free block: search for a 1 in the bitmap
Finding N contiguous blocks: search for N consecutive 1s
```

**Memory requirement**: For a 1 TB disk with 4 KB blocks: 1 TB / 4 KB = 2⁸⁰ / 2¹² = 2⁶⁸ / 2²² = 2⁴⁶ bits = 2⁴³ bytes. That's about 32 MB of bitmap for 1 TB.

#### Linked List

A pointer to the first free block is stored in the superblock. Each free block points to the next.

```
Superblock → Free Block 1 → Free Block 8 → Free Block 23 → ...
```

**Pro**: Little space overhead (the blocks themselves store the list).
**Con**: Traversing the list is slow. Fragments the free space (blocks are traversed in allocation order, not sorted).

### File System Performance

#### Caching (Buffer Cache)

The OS maintains a cache of recently accessed disk blocks in memory. The **page cache** (unified with virtual memory) caches file data.

```
Application:   read(fd, buf, 1024)
                   ↓
Page Cache:   Check if block is cached
              ├── Hit:  copy from cache → return
              └── Miss: read from disk → add to cache → copy → return
```

#### Read-Ahead

When a file is accessed sequentially, the OS anticipates the next few pages and reads them from disk before they are requested.

#### Journaling

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

### File System Types

| FS | Max Volume | Max File Size | Journaling | Features |
|----|-----------|---------------|------------|----------|
| FAT32 | 2 TB | 4 GB | No | Universal compatibility |
| NTFS | 256 TB | 256 TB | Yes | ACLs, compression, encryption |
| ext4 | 1 EB | 16 TB | Yes | Extents, delayed allocation |
| XFS | 8 EB | 8 EB | Yes | Excellent parallel I/O |
| Btrfs | 16 EB | 16 EB | Yes | Copy-on-write, snapshots, RAID |

## Examples

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

## Summary

- A file system's on-disk structure includes boot block, superblock, free-space management, inode table, and data blocks
- Inodes store file metadata and point to data blocks via direct, indirect, double, and triple pointers
- Allocation methods: contiguous (fast but rigid), linked (flexible but slow), indexed (direct access, overhead)
- Free space is tracked with bitmaps (fast, compact) or linked lists (simple)
- The page cache dramatically improves performance by caching recently accessed blocks
- Journaling prevents file system corruption by writing intent logs before modifying data
- ext4, NTFS, and XFS are dominant file systems, each with different trade-offs

## Exercises

### Basic

1. What information is stored in a superblock? List at least five fields.
2. What is an inode? How does it differ from a directory entry?
3. Compare the maximum file size for ext4 with 4 KB blocks using the inode structure described (12 direct + single + double + triple indirect). Assume 8-byte block pointers.

### Intermediate

4. Implement a simple disk simulator with 256 blocks of 512 bytes each. Use a bitmap for free-space management. Support `write_file(name, data)` and `read_file(name)` using indexed allocation.
5. When a file is deleted, the inode's link count decreases. Only when it reaches 0 is the file truly deleted. Write a program that creates a file, opens it, deletes it (while it's open), and shows that the data is still accessible via the open file descriptor.
6. Compare ordered journaling vs writeback journaling in ext4. Use `chattr +J` (journal) on a file and simulate a crash with `echo b > /proc/sysrq-trigger`. What differences in recovery behavior do you see?

### Advanced

7. Implement a simplified **ext4-like** file system in a file (using `dd` to create a 100 MB disk image). Implement the superblock, block group descriptors, inode table, block bitmap, and inode bitmap. Support `create_file()`, `delete_file()`, and `read_file()`.
8. Use `dd` and `debugfs` to explore a real ext4 file system. Find the location of the superblock, examine the inode of a small file (< 48 KB) and note which direct blocks it uses. Create a large file (> 100 MB) and examine its indirect and double-indirect blocks.
9. Design and implement a **copy-on-write** file system in a file-backed image. When a block is modified, allocate a new block and update the inode. This is the approach used by btrfs and ZFS for snapshots.
