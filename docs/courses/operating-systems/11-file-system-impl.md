# Chapter 11 — File System Implementation

## Learning Objectives

1. Compare contiguous, linked, FAT, indexed, and i-node allocation strategies.
2. Implement free-space management using bitmaps, linked lists, and group allocation.
3. Distinguish consistency checking, journaling, and log-structured filesystems.
4. Analyse the time and space trade-offs of each allocation method.

## 11.1 Disk Space Allocation

When a file grows, the filesystem must allocate disk blocks. The allocation method determines the layout of blocks on disk and directly impacts fragmentation, access speed, and maximum file size.

### 11.1.1 Contiguous Allocation

Each file occupies a set of contiguous blocks. The directory entry stores the starting block and length.

**Advantages**: Excellent read performance — the disk head moves sequentially. Simple.

**Disadvantages**: External fragmentation. Files cannot grow easily (must predeclare maximum size).

**Example**: A file of size n blocks requires finding a run of n consecutive free blocks. If the system allocates 8 blocks for a file that later needs 12, the OS must either find space elsewhere (via compaction) or deny the growth.

### 11.1.2 Linked Allocation

Each block contains a pointer to the next block. The directory entry stores the first and last block numbers.

**Advantages**: No external fragmentation. Files can grow dynamically.

**Disadvantages**: Sequential access only — reading block i requires reading blocks 0 through i−1. Reliability — one lost pointer breaks the chain.

**File Allocation Table (FAT)**: The linked list is stored in a separate table in memory rather than in the data blocks themselves. The FAT has one entry per block; each entry contains the number of the next block in the file. This allows random access (the FAT can be followed in memory) but the FAT must fit in memory. Used by MS-DOS and early Windows.

```
FAT[0] = 1
FAT[1] = 5
FAT[5] = 8
FAT[8] = EOF
```

File occupies blocks 0 → 1 → 5 → 8.

### 11.1.3 Indexed Allocation

All block pointers for a file are stored together in an index block. The directory entry points to the index block.

**Advantages**: Supports direct access without external fragmentation.

**Disadvantages**: Index block overhead (wasted space for small files). Maximum file size is limited by the number of pointers in one block.

**Single-level index**: With 4 KB blocks and 4-byte pointers, one index block supports 1024 data blocks = 4 MB file.

**Multi-level index**: A second-level index block points to first-level index blocks, which point to data blocks. With two levels, the maximum file size becomes 1024 × 1024 × 4 KB = 4 GB.

### 11.1.4 I-node (Index Node)

The i-node (UNIX inode) combines direct, single-indirect, double-indirect, and triple-indirect pointers in a compact structure.

```
struct inode {
    mode_t mode;          // file type and permissions
    uid_t uid;
    gid_t gid;
    off_t size;
    time_t atime, mtime, ctime;
    int direct_ptrs[12];  // direct block pointers
    int single_indirect;  // pointer to a block of pointers
    int double_indirect;
    int triple_indirect;
};
```

With 4 KB blocks and 4-byte pointers:

- 12 direct pointers: 12 × 4 KB = 48 KB (covers most small files without indirection).
- Single indirect: 1024 × 4 KB = 4 MB.
- Double indirect: 1024 × 1024 × 4 KB = 4 GB.
- Triple indirect: 1024 × 1024 × 1024 × 4 KB = 4 TB.

Maximum file size: 48 KB + 4 MB + 4 GB + 4 TB ≈ 4 TB + 4 GB + 4 MB + 48 KB.

The inode design exploits the observation that most files are small (direct pointers suffice) while supporting arbitrarily large files through indirection.

## 11.2 Free-Space Management

The filesystem must track which blocks on disk are free.

### 11.2.1 Bit Vector (Bitmap)

A sequence of bits, one per block. A 1 indicates the block is free; 0 indicates allocated. For a 1 TB disk with 4 KB blocks, the bitmap occupies (1 TB / 4 KB) / 8 ≈ 32 MB.

```c
// Find first free block
for (int i = 0; i < total_blocks / WORD_SIZE; i++) {
    if (bitmap[i] != ~0) { // word has at least one free bit
        int bit = find_first_zero(bitmap[i]);
        return i * WORD_SIZE + bit;
    }
}
```

### 11.2.2 Linked List (Free List)

Free blocks themselves contain pointers to the next free block. Traversing the list is slow, but only needed during allocation. The free-block list is a linked list through the free blocks themselves.

### 11.2.3 Grouping

Store pointers to n free blocks in one free block. The first n−1 pointers are actual free blocks; the nth pointer points to another grouping block. This improves traversal speed over a simple linked list.

### 11.2.4 Counting

When multiple contiguous blocks are allocated or freed (common pattern: large files), the free list entry records the starting address and count instead of individual entries. This approximates a bitmap in list form.

## 11.3 Directory Implementation

A directory stores file names mapped to file metadata locations (inode numbers on UNIX, FAT cluster numbers on DOS).

**Linear list**: A list of (name, inode_number) pairs. Simple but slow for large directories (O(n) lookup).

**Hash table**: A hash of the file name indexes into a table of entries. Fast lookups but difficult to enumerate and expand.

**B-tree** (reiserfs, ext4, XFS): Directory entries are stored in a balanced tree. Lookups, insertions, and deletions are O(log n). Modern filesystems use b-trees or variants for directories.

## 11.4 Recovery and Consistency

### 11.4.1 Consistency Checking

After an unclean shutdown, a filesystem may be in an inconsistent state. The `fsck` (filesystem check) utility scans metadata to detect and repair:

- Blocks claimed by multiple files (duplicate pointers).
- Blocks not claimed by any file but not marked free.
- Inode count mismatches (link count versus actual directory entries).

`fsck` is slow on large volumes because it scans the entire filesystem.

### 11.4.2 Journaling (Write-Ahead Logging)

A journal filesystem records pending metadata changes in a log (journal) before applying them to the main filesystem. After a crash, the journal is replayed to complete or roll back pending operations.

**Operation sequence** (ext3, ext4, XFS):

1. Begin transaction: Write metadata changes to the journal.
2. Commit transaction: Mark the journal entry as complete.
3. Checkpoint: Apply journaled changes to the main filesystem.
4. Reclaim: Free journal space for new transactions.

**Modes**:
- **Journal mode**: Both metadata and data are journaled (maximum safety, slower writes).
- **Ordered mode** (default on ext3/4): Only metadata is journaled; data blocks are written to disk before metadata is marked committed.
- **Writeback mode**: Only metadata is journaled; no ordering guarantees between data and metadata.

Ordered mode provides a good safety-performance trade-off: files are never garbage (new metadata always points to valid old data in case of crash).

### 11.4.3 Log-Structured File System (LFS)

LFS (Rosenblum & Ousterhout, 1991) treats the entire disk as a log. All writes — both data and metadata — are appended sequentially to the log. This converts random writes into sequential ones, exploiting disk bandwidth.

The log is divided into segments. A segment cleaner thread compacts live data from partially invalid segments, producing completely free segments for new writes.

LFS is the foundation of modern flash-based filesystems (F2FS) and database storage engines (LevelDB, RocksDB). Its main weakness on spinning disks is the cleaning overhead during high utilisation.

## 11.5 Comparing Allocation Methods

| Method | Sequential access | Direct access | Dynamic growth | Fragmentation |
|--------|-------------------|---------------|----------------|---------------|
| Contiguous | Excellent | Excellent | No | External |
| Linked | Good | Poor | Yes | None (data) |
| FAT | Good | Good | Yes | None |
| Indexed | Good | Excellent | Yes | Internal (index) |
| I-node | Good | Excellent | Yes | Internal (indirect) |

## Summary

Filesystem implementation balances allocation flexibility, access speed, and metadata overhead. Contiguous allocation is fastest but inflexible; linked allocation and FAT enable dynamic growth. Mapped files (indexed, i-node) combine direct access with dynamic sizing. Free-space management uses bitmaps for speed or lists for simplicity. Journaling provides crash recovery without full metadata scans. Log-structured filesystems optimise for write-heavy workloads.

## Exercises

### Review Questions

1. Why are 12 direct pointers included in the UNIX inode even though they cover only 48 KB?
2. What is the purpose of a journal in a journaling filesystem?
3. How does the FAT improve upon simple linked allocation?
4. Describe the four steps in a journaling transaction.
5. How does a log-structured filesystem convert random writes into sequential writes?

### Application Problems

1. A filesystem uses 4 KB blocks and 8-byte pointers. Compute the maximum file size for (a) single-level indexed, (b) two-level indexed, and (c) UNIX inode with 12 direct + single + double + triple indirect.
2. A 500 GB disk uses a 4 KB block size. How much memory does a bitmap occupy? How much space does a free list occupy (each pointer is 8 bytes and free blocks average 50% of the disk)?
3. ext3 ordered mode guarantees that data blocks are written before their metadata is committed to the journal. Explain why this prevents the "zero-length file after crash" problem.

### Challenge Problem

1. Implement a FAT-like filesystem in C. Support `create`, `delete`, `read`, and `write` on a disk image (a file). Implement the FAT as an array of 16-bit integers. Defragment: when a file is fragmented across the disk, rewrite it to a contiguous set of blocks. Measure the read performance before and after defragmentation.
