# Chapter 10 — File Systems

## Learning Objectives

1. Define file attributes, operations, and common file types.
2. Compare sequential, direct, and indexed access methods.
3. Describe directory structures and their trade-offs.
4. Understand file mounting and the unified namespace.
5. Analyse the access-control implications of directory graph structures.

## 10.1 File Concept

A **file** is a named collection of related information stored on secondary storage. The file is the OS's fundamental unit of logical storage; all user and system data is organised as files.

### 10.1.1 File Attributes

| Attribute | Description |
|-----------|-------------|
| Name | Human-readable symbolic identifier |
| Identifier | Unique numeric tag (inode number on UNIX) |
| Type | Metadata indicating content format |
| Location | Pointer to device location |
| Size | Current size in bytes, blocks, or pages |
| Protection | Access control permissions |
| Timestamps | Creation, last access, last modification |
| User/group ID | Ownership information |

### 10.1.2 File Operations

The OS provides a set of operations on files, typically invoked through system calls:

- `create()`: Allocate space and initialise directory entry.
- `open()`: Bring file metadata into memory; return a file descriptor.
- `read()`: Read bytes from the current file position.
- `write()`: Write bytes at the current file position.
- `seek()`: Reposition the file pointer.
- `delete()`: Release space and remove directory entry.
- `close()`: Flush buffers, free kernel resources.

### 10.1.3 File Types

- **Regular files**: Binary or text data.
- **Directories**: Files that contain lists of other files.
- **Character device files**: Model devices as streams of bytes.
- **Block device files**: Model devices as random-access blocks.
- **Sockets and pipes**: Inter-process communication endpoints.
- **Symbolic links**: References to other files.

## 10.2 Access Methods

### 10.2.1 Sequential Access

The file is read from beginning to end. Position advances automatically. Rewind resets to the beginning. Most text files and media streams use this method.

```c
FILE *f = fopen("data.txt", "r");
char line[256];
while (fgets(line, sizeof(line), f)) {
    process(line);
}
fclose(f);
```

### 10.2.2 Direct Access (Random Access)

A file consists of fixed-length logical records. Any record can be accessed by specifying its number. This is the foundation of database systems.

```c
int fd = open("records.dat", O_RDWR);
struct record r;
lseek(fd, record_num * sizeof(r), SEEK_SET);
read(fd, &r, sizeof(r));
```

### 10.2.3 Indexed Access

An index is built mapping record keys to file positions. This enables efficient retrieval by content rather than position. The OS may support this explicitly (VSAM on IBM mainframes) or it can be implemented by applications (B-tree indexes in databases).

## 10.3 Directory Structure

A directory is a file that maps names to file control blocks (inodes, FAT entries). The structure determines how files are named and located.

### 10.3.1 Single-Level Directory

All files reside in one directory. Simple, but naming conflicts arise quickly. Used by early personal computers and embedded systems.

### 10.3.2 Two-Level Directory

Each user has their own directory. Naming conflicts between users disappear, but users cannot organise their own files into groups.

### 10.3.3 Tree-Structured Directory

Users create subdirectories to organise files hierarchically. Each entry is either a file or another directory. A pathname specifies the traversal from root (absolute path) or from the current directory (relative path).

```
/usr/local/bin/gcc
  root ─┬─ usr ─┬─ local ─┬─ bin ─── gcc
         |       |         └─ lib ─── libc.a
         |       └─ share
         └─ etc ──── passwd
```

Operations: create/delete directory, navigate between directories.

### 10.3.4 Acyclic-Graph Directory

A generalisation of the tree that allows directories to share subdirectories or files via links. A file may have multiple paths.

**Types of links**:

- **Hard link**: A directory entry that directly points to the same file data (same inode). Deleting one link does not delete the data until all links are removed. Hard links cannot cross filesystem boundaries.
- **Symbolic link** (symlink): A special file that contains the pathname of the target. If the target is deleted, the symlink becomes dangling.

**Advantages**: File sharing without duplication.  
**Disadvantages**: Complexity — acyclic condition must be maintained to prevent cycles in directory traversal.

### 10.3.5 General-Graph Directory

Allows cycles through symbolic links. A traversal algorithm must detect cycles or impose a maximum traversal depth. The `find` utility on UNIX uses a visited-list or depth limit to avoid infinite loops.

## 10.4 Mounting

A filesystem on a disk must be **mounted** to an existing directory in the directory tree before its files are accessible. The mount point becomes the root of the mounted filesystem.

```bash
mount /dev/sdb1 /mnt/usb
```

After mounting, files on `/dev/sdb1` are accessible as `/mnt/usb/myfile.txt`. The mount operation is recorded in a mount table maintained by the kernel.

## 10.5 File System Mounting Example (Linux)

```c
// Filesystem mounting at the system-call level
mount("/dev/sda1", "/", "ext4", MS_RDONLY, NULL);
mount("/dev/sdb1", "/home", "xfs", 0, NULL);
mount("server:/export/path", "/nfs", "nfs", 0, NULL);
```

The `mount()` system call associates the device with a mount point, checks the filesystem type, reads the superblock, and attaches the root inode to the directory tree.

## 10.6 File Protection

UNIX uses a simple permission model: three sets of three bits — read (r), write (w), execute (x) — for the owner, the group, and others.

```
-rwxr-xr--  1 alice devteam  2048 Jan 15 10:00 program
```

- Owner (alice): rwx (read, write, execute)
- Group (devteam): r-x (read, execute)
- Others: r-- (read only)

Extended attributes and ACLs (Access Control Lists) provide finer-grained control (see Chapter 16).

## Summary

Files are the fundamental abstraction for persistent storage. Sequential, direct, and indexed access methods serve different workload patterns. Directory structures evolved from flat (single-level) to hierarchical (tree) to shared (acyclic graph). Mounting unifies different filesystems under a single namespace. Protection models control access at the granularity of users, groups, and others.

## Exercises

### Review Questions

1. List six file attributes typically stored in the file system metadata.
2. What is the difference between sequential and direct file access?
3. Describe the trade-offs between a two-level directory and a tree-structured directory.
4. How does a hard link differ from a symbolic link?
5. What happens during the mount operation?

### Application Problems

1. A file is stored on a disk with 512-byte sectors. The file is 100 KB. How many sectors does it occupy? If the directory entry stores only the starting sector, what determines the maximum file size?
2. Draw the directory tree for the path `/usr/local/bin/gcc`. Identify the root, each intermediate directory, and the file.
3. A system uses symbolic links. If directory A contains a symlink to directory B which contains a symlink back to A, what happens when traversing the path A/x? How should the OS handle this?

### Challenge Problem

1. Design and implement a simple filesystem (SFS) that lives inside a single large file (a disk image). Implement `sfs_create()`, `sfs_open()`, `sfs_read()`, `sfs_write()`, and `sfs_delete()`. Use a fixed block size and a free-block bitmap. Support up to 100 files in a single directory. Your implementation need not be POSIX-compliant but must handle error cases (disk full, file not found, permissions).
