# Chapter 10: File Systems

## Learning Objectives

- Define a file and describe its attributes, operations, and types
- Differentiate sequential, direct, and indexed file access methods
- Compare single-level, two-level, and tree-structured directories
- Explain file system mounting and the unified namespace concept
- Describe file sharing mechanisms (links, consistency semantics)
- Distinguish between contiguous, linked, and indexed disk allocation

## Theory

### File Concept

A **file** is a named collection of related information recorded on secondary storage. Files are the primary abstraction the OS provides for persistent data storage.

#### File Attributes

| Attribute | Description |
|-----------|-------------|
| Name | Human-readable symbolic identifier |
| Identifier | Unique numeric tag within the file system |
| Type | Regular file, directory, device, pipe, socket |
| Location | Pointer to file location on device |
| Size | Current size in bytes, blocks, or pages |
| Protection | Access control (read, write, execute permissions) |
| Timestamps | Creation, last access, last modification times |
| User identification | Owner, group |

#### File Operations

The OS provides system calls for these fundamental file operations:

- **Create**: Find space, make directory entry
- **Open**: Bring file metadata into memory; return a file descriptor
- **Read**: Read bytes from current position
- **Write**: Write bytes at current position
- **Seek (lseek)**: Reposition the file pointer
- **Delete**: Release space, remove directory entry
- **Close**: Flush buffers, release file descriptor

#### File Types

Most OS recognize file types to determine how to handle the data:

```
Common file types:
  .exe, .com     — Executable files
  .txt, .doc     — Text/document files
  .c, .java      — Source code
  .o, .obj       — Object files
  .lib, .a       — Libraries
  .jpg, .png     — Image files
  .mp3, .wav     — Audio files
  .mp4, .mov     — Video files
```

Unix-like systems use the file's **magic number** (first few bytes) to determine type, not the extension. Windows uses the extension.

### Access Methods

#### Sequential Access

The simplest method. Data is read in order, from beginning to end.

```
read next    → read next block, advance pointer
write next   → write block, advance pointer
reset        → set pointer to beginning
```

Most common access pattern. Used for text editors, compilers, media players.

#### Direct Access (Relative Access)

A file is composed of fixed-length logical records. A program can read or write records in any order.

```
read n       → read block n (where n is a logical record number)
write n      → write block n
seek n       → position to record n
```

Used for databases, where records must be accessed by key rather than sequentially.

#### Indexed Access

Builds an index on top of direct access. The index contains pointers to blocks holding records with specific keys.

```
Customer Index:
  Key: Smith, J. → Record in block 47
  Key: Jones, A. → Record in block 12
  Key: Lee, C.   → Record in block 89
```

Used by database management systems. May use multiple levels of indices for large files.

### Directory Structure

Directories provide a way to organize files in a hierarchical structure.

#### Single-Level Directory

All files are in one directory. Simple, but naming conflicts are inevitable in multi-user systems.

```
┌───────────────────────┐
│   / Directory          │
│   ├── thesis.docx      │
│   ├── report.pdf       │
│   ├── data.csv         │
│   └── photo.jpg        │
└───────────────────────┘
```
**Problem**: Two users cannot each have a file called `readme.txt`.

#### Two-Level Directory

Each user has their own directory. A master file directory (MFD) is indexed by user.

```
MFD: ┌─────────────────────────┐
     │ User1 ─→ UFD1           │
     │ User2 ─→ UFD2           │
     └─────────────────────────┘

UFD1:        UFD2:
thesis.docx  readme.txt
data.csv     project.c
```

**Advantage**: Isolation between users. No name conflicts.
**Disadvantage**: Users cannot cooperate easily.

#### Tree-Structured Directory

A tree of arbitrary depth. Each directory may contain files and subdirectories.

```
/
├── home/
│   ├── user1/
│   │   ├── docs/
│   │   └── pics/
│   └── user2/
│       └── project/
├── etc/
│   ├── passwd
│   └── hosts
├── usr/
│   ├── bin/
│   └── lib/
└── var/
    └── log/
```

Unix/Linux: root is `/`. Windows: each volume has a root like `C:\`.

#### Acyclic-Graph Directory

A tree with shared subdirectories and files (via links). Allows a file to appear in multiple directories.

```
/home/user1/
    ├── docs/
    │   └── report.pdf
    ├── pics/ ─── link ───→ /home/user2/shared_pics/
    └── note.txt ←── link ──── /home/user2/memo.txt
```

**Hard links** (Unix): Multiple directory entries pointing to the same inode. Deleting one does not delete the file (the inode's reference count decrements). File is only deleted when the count reaches zero.

**Symbolic links** (symlinks): A special file containing a path to another file. If the target is deleted, the symlink becomes dangling.

### Mounting

A file system must be **mounted** before it can be accessed. Mounting attaches a new file system's root directory to a mount point in the existing directory tree.

```bash
# Linux: mount a USB drive
mount /dev/sdb1 /mnt/usb

# After mounting, files on /dev/sdb1 are accessible at /mnt/usb/
```

The mount operation:
1. The OS checks the device for a valid file system superblock
2. The OS records the mount point and device information in the mount table
3. The mount point's inode records that another file system is mounted there
4. Accessing the mount point redirects to the root of the mounted file system

### File Sharing

#### Protection Mechanisms

Unix-style permissions (9 bits): `rwx` for owner, group, and others.

```bash
$ ls -l thesis.docx
-rw-r--r-- 1 alice students 10240 Jun 1 10:00 thesis.docx
# Owner (alice): rw-  (read + write)
# Group (students): r--  (read only)
# Others: r--  (read only)
```

#### Access Control Lists (ACLs)

Extended permissions allowing fine-grained access for specific users:

```bash
# Linux ACL example
setfacl -m u:bob:rw thesis.docx   # Give bob read+write
setfacl -m g:staff:rx thesis.docx  # Give staff read+execute
```

### File System Mounting Example

```c
#include <stdio.h>
#include <sys/mount.h>
#include <errno.h>

int main() {
    // Mount an ext4 file system
    if (mount("/dev/sdb1", "/mnt/data", "ext4", 0, NULL) != 0) {
        perror("mount failed");
        return 1;
    }

    printf("File system mounted at /mnt/data\n");

    // Unmount when done
    // umount("/mnt/data");
    return 0;
}
```

### Virtual File Systems (VFS)

The **Virtual File System** (VFS) provides an abstraction layer that allows the OS to support multiple file system types transparently. Applications use the same system calls (`open()`, `read()`, `write()`) regardless of the underlying file system.

```
Application
    ↓
System Calls (open, read, write, close)
    ↓
VFS Interface (generic operations)
    ↓
┌─────┬─────┬─────┬─────┬─────┐
│ext4 │btrfs│xfs  │ntfs │nfs  │
└─────┴─────┴─────┴─────┴─────┘
    ↓
Device Drivers
    ↓
Physical Storage
```

The VFS defines a set of operations that every file system must implement:
- `create()` / `delete()`
- `open()` / `close()`
- `read()` / `write()`
- `mkdir()` / `rmdir()`
- `link()` / `unlink()`
- `readdir()`
- `stat()` / `chmod()` / `chown()`

## Examples

### Example 1: File Operations in C

```c
#include <stdio.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>
#include <sys/stat.h>

int main() {
    // Create and open a file
    int fd = open("example.txt", O_CREAT | O_WRONLY | O_TRUNC, 0644);
    if (fd < 0) {
        perror("open");
        return 1;
    }

    // Write some data
    const char *text = "Hello, File System!\n";
    ssize_t written = write(fd, text, strlen(text));
    if (written < 0) {
        perror("write");
        close(fd);
        return 1;
    }

    printf("Wrote %zd bytes\n", written);
    close(fd);

    // Now read it back
    fd = open("example.txt", O_RDONLY);
    if (fd < 0) {
        perror("open for read");
        return 1;
    }

    char buffer[256] = {0};
    ssize_t bytes = read(fd, buffer, sizeof(buffer) - 1);
    if (bytes < 0) {
        perror("read");
        close(fd);
        return 1;
    }

    printf("Read %zd bytes: %s", bytes, buffer);
    close(fd);

    return 0;
}
```

### Example 2: Directory Traversal

```c
#include <stdio.h>
#include <dirent.h>
#include <sys/stat.h>
#include <string.h>

void list_directory(const char *path, int depth) {
    DIR *dir = opendir(path);
    if (!dir) {
        perror("opendir");
        return;
    }

    struct dirent *entry;
    while ((entry = readdir(dir)) != NULL) {
        // Skip . and ..
        if (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0) {
            continue;
        }

        // Indent by depth
        for (int i = 0; i < depth; i++) {
            printf("  ");
        }

        char full_path[1024];
        snprintf(full_path, sizeof(full_path), "%s/%s", path, entry->d_name);

        struct stat st;
        if (stat(full_path, &st) == 0) {
            if (S_ISDIR(st.st_mode)) {
                printf("[DIR]  %s\n", entry->d_name);
                list_directory(full_path, depth + 1);  // Recursively list subdirectories
            } else if (S_ISREG(st.st_mode)) {
                printf("[FILE] %s (%ld bytes)\n", entry->d_name, st.st_size);
            } else if (S_ISLNK(st.st_mode)) {
                printf("[LINK] %s\n", entry->d_name);
            }
        }
    }

    closedir(dir);
}

int main() {
    list_directory(".", 0);
    return 0;
}
```

### Example 3: Hard Links vs Symbolic Links

```bash
$ echo "original content" > original.txt

# Hard link — same inode, same data
$ ln original.txt hardlink.txt
$ ls -li original.txt hardlink.txt
12345 -rw-r--r-- 2 alice staff 17 Jun 1 10:00 original.txt
12345 -rw-r--r-- 2 alice staff 17 Jun 1 10:00 hardlink.txt
# Same inode (12345) — they are the same file!

# Symbolic link — separate file pointing to original
$ ln -s original.txt symlink.txt
$ ls -li symlink.txt
12346 lrwxr-xr-x 1 alice staff 12 Jun 1 10:01 symlink.txt → original.txt
# Different inode, different file

# Delete original
$ rm original.txt
$ cat hardlink.txt   # Works! (data still exists)
$ cat symlink.txt    # Fails: No such file or directory
```

## Summary

- A file is the OS's primary abstraction for persistent storage — named, typed, protected
- File access: sequential (most common), direct (databases), indexed (DBMS)
- Directory structure evolved from flat (single-level) to tree-structured to acyclic-graph
- Mounting attaches a file system to the directory hierarchy at a mount point
- File sharing is controlled by permissions (rwx) and ACLs
- Hard links share data via the same inode; symbolic links are path references
- VFS allows multiple file system types to coexist under a uniform API
- `open()`, `read()`, `write()`, `close()`, `lseek()` are the fundamental file operations

## Exercises

### Basic

1. List five file attributes stored by the OS. What system call retrieves them?
2. Compare sequential and direct file access. Give a use case for each.
3. What is a symbolic link? What happens if the target file is deleted?

### Intermediate

4. Write a program that recursively traverses a directory tree, counting files and directories. Report the total number of each, total disk usage (in bytes), and average file size.
5. Create a file, create a hard link to it, and a symbolic link to it. Use `stat()` to compare the inode numbers, link counts, and file sizes. Explain the differences.
6. Explain how the VFS abstraction layer works. Why is it important that Linux supports ext4, btrfs, XFS, and NTFS simultaneously?

### Advanced

7. Implement a simple **relational database** using direct-access files. Each record is a fixed-length struct. Support insert by key, lookup by key (direct access via hash), and sequential scan. Benchmark the operations.
8. The `strace` tool shows system calls. Run `strace -e trace=open,read,write,close cat /etc/passwd` and explain each system call and its role in file access.
9. Implement a FUSE (Filesystem in Userspace) file system that presents a read-only view of a tar file. When `readdir()` is called, list the tar's contents. When `read()` is called, extract and return the data from the tar. Use libfuse.
