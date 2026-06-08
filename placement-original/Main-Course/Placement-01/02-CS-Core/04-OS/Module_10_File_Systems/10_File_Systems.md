# Module 10: File Systems

## File System Interface

### File Concept
```c
struct file {
    char name[MAX_FILENAME];
    int type;                    // Regular, directory, device
    int size;
    struct file_attributes {
        int permissions;         // Read, write, execute
        int owner_id;
        int group_id;
        time_t creation_time;
        time_t modification_time;
        time_t access_time;
    } attributes;
    int location;               // Physical location
};

// File operations
struct file_operations {
    int (*open)(const char *pathname, int flags);
    int (*close)(int fd);
    ssize_t (*read)(int fd, void *buf, size_t count);
    ssize_t (*write)(int fd, const void *buf, size_t count);
    off_t (*lseek)(int fd, off_t offset, int whence);
    int (*stat)(const char *pathname, struct stat *statbuf);
};
```

### File Types
- **Regular Files**: Data files, executable files
- **Directory Files**: Contains file names and pointers
- **Special Files**: Character and block devices

### File Access Methods
```c
// Sequential Access
int sequential_read(int fd, void *buffer, size_t size) {
    return read(fd, buffer, size);
}

// Direct Access (Random Access)
int direct_read(int fd, void *buffer, size_t size, off_t position) {
    lseek(fd, position, SEEK_SET);
    return read(fd, buffer, size);
}

// Indexed Access
struct index_entry {
    int key;
    off_t position;
};

int indexed_read(int fd, struct index_entry *index, int key, void *buffer) {
    off_t position = find_position_by_key(index, key);
    lseek(fd, position, SEEK_SET);
    return read(fd, buffer, sizeof(buffer));
}
```

## Directory Structure

### Single-Level Directory
```c
struct single_level_directory {
    struct directory_entry entries[MAX_FILES];
    int count;
};

struct directory_entry {
    char filename[MAX_FILENAME];
    int inode_number;
};
```

### Two-Level Directory
```c
struct two_level_directory {
    struct user_directory users[MAX_USERS];
    int user_count;
};

struct user_directory {
    int user_id;
    struct directory_entry files[MAX_FILES_PER_USER];
    int file_count;
};
```

### Tree-Structured Directory
```c
struct tree_directory_node {
    char name[MAX_FILENAME];
    int type;  // FILE or DIRECTORY
    union {
        struct file_info file;
        struct {
            struct tree_directory_node *children[MAX_CHILDREN];
            int child_count;
        } directory;
    } data;
    struct tree_directory_node *parent;
};

int create_file(struct tree_directory_node *dir, const char *filename) {
    if (dir->type != DIRECTORY) {
        return -1;  // Not a directory
    }
    
    struct tree_directory_node *new_file = malloc(sizeof(struct tree_directory_node));
    strcpy(new_file->name, filename);
    new_file->type = FILE;
    new_file->parent = dir;
    
    dir->data.directory.children[dir->data.directory.child_count++] = new_file;
    return 0;
}
```

### Acyclic Graph Directory
```c
struct acyclic_graph_node {
    char name[MAX_FILENAME];
    int type;
    int reference_count;  // For shared files
    struct acyclic_graph_node **parents;
    int parent_count;
    union {
        struct file_info file;
        struct directory_info directory;
    } data;
};

int create_link(struct acyclic_graph_node *dir, const char *link_name, 
                struct acyclic_graph_node *target) {
    // Create hard link
    target->reference_count++;
    
    // Add to parent's list
    target->parents = realloc(target->parents, 
                             sizeof(struct acyclic_graph_node*) * (target->parent_count + 1));
    target->parents[target->parent_count++] = dir;
    
    // Add entry to directory
    add_directory_entry(dir, link_name, target);
    
    return 0;
}
```

## File System Implementation

### File Allocation Methods

#### Contiguous Allocation
```c
struct contiguous_file {
    char name[MAX_FILENAME];
    int start_block;
    int length;
};

int allocate_contiguous(struct contiguous_file *file, int size) {
    int blocks_needed = (size + BLOCK_SIZE - 1) / BLOCK_SIZE;
    
    // Find contiguous free space
    int start = find_contiguous_space(blocks_needed);
    if (start == -1) {
        return -1;  // No space available
    }
    
    file->start_block = start;
    file->length = blocks_needed;
    
    // Mark blocks as allocated
    for (int i = start; i < start + blocks_needed; i++) {
        mark_block_allocated(i);
    }
    
    return 0;
}

int read_contiguous(struct contiguous_file *file, void *buffer, int offset, int size) {
    int block_offset = offset / BLOCK_SIZE;
    int byte_offset = offset % BLOCK_SIZE;
    
    if (block_offset >= file->length) {
        return 0;  // EOF
    }
    
    int physical_block = file->start_block + block_offset;
    return read_block(physical_block, buffer, byte_offset, size);
}
```

#### Linked Allocation
```c
struct linked_file {
    char name[MAX_FILENAME];
    int first_block;
    int size;
};

struct file_block {
    char data[BLOCK_SIZE - sizeof(int)];
    int next_block;  // -1 for end of file
};

int allocate_linked(struct linked_file *file, int size) {
    int blocks_needed = (size + (BLOCK_SIZE - sizeof(int)) - 1) / (BLOCK_SIZE - sizeof(int));
    
    int first_block = allocate_free_block();
    if (first_block == -1) {
        return -1;
    }
    
    file->first_block = first_block;
    file->size = size;
    
    int current_block = first_block;
    for (int i = 1; i < blocks_needed; i++) {
        int next_block = allocate_free_block();
        if (next_block == -1) {
            // Cleanup allocated blocks
            deallocate_linked_blocks(first_block);
            return -1;
        }
        
        struct file_block *block = get_block(current_block);
        block->next_block = next_block;
        current_block = next_block;
    }
    
    // Mark end of file
    struct file_block *last_block = get_block(current_block);
    last_block->next_block = -1;
    
    return 0;
}

int read_linked(struct linked_file *file, void *buffer, int offset, int size) {
    int block_size = BLOCK_SIZE - sizeof(int);
    int block_number = offset / block_size;
    int byte_offset = offset % block_size;
    
    // Traverse linked list to find block
    int current_block = file->first_block;
    for (int i = 0; i < block_number && current_block != -1; i++) {
        struct file_block *block = get_block(current_block);
        current_block = block->next_block;
    }
    
    if (current_block == -1) {
        return 0;  // EOF
    }
    
    struct file_block *block = get_block(current_block);
    int bytes_to_read = min(size, block_size - byte_offset);
    memcpy(buffer, block->data + byte_offset, bytes_to_read);
    
    return bytes_to_read;
}
```

#### Indexed Allocation
```c
#define DIRECT_BLOCKS 12
#define BLOCK_POINTERS_PER_BLOCK (BLOCK_SIZE / sizeof(int))

struct inode {
    int size;
    int direct_blocks[DIRECT_BLOCKS];
    int single_indirect;
    int double_indirect;
    int triple_indirect;
};

int get_block_number(struct inode *inode, int logical_block) {
    if (logical_block < DIRECT_BLOCKS) {
        return inode->direct_blocks[logical_block];
    }
    
    logical_block -= DIRECT_BLOCKS;
    
    if (logical_block < BLOCK_POINTERS_PER_BLOCK) {
        // Single indirect
        int *indirect_block = get_block(inode->single_indirect);
        return indirect_block[logical_block];
    }
    
    logical_block -= BLOCK_POINTERS_PER_BLOCK;
    
    if (logical_block < BLOCK_POINTERS_PER_BLOCK * BLOCK_POINTERS_PER_BLOCK) {
        // Double indirect
        int first_level = logical_block / BLOCK_POINTERS_PER_BLOCK;
        int second_level = logical_block % BLOCK_POINTERS_PER_BLOCK;
        
        int *double_indirect_block = get_block(inode->double_indirect);
        int *single_indirect_block = get_block(double_indirect_block[first_level]);
        return single_indirect_block[second_level];
    }
    
    // Triple indirect (similar logic)
    return handle_triple_indirect(inode, logical_block);
}

int read_indexed(struct inode *inode, void *buffer, int offset, int size) {
    int logical_block = offset / BLOCK_SIZE;
    int byte_offset = offset % BLOCK_SIZE;
    
    int physical_block = get_block_number(inode, logical_block);
    if (physical_block == 0) {
        return 0;  // Sparse file - return zeros
    }
    
    return read_block(physical_block, buffer, byte_offset, size);
}
```

## Free Space Management

### Bit Vector (Bitmap)
```c
struct bitmap_free_space {
    unsigned char *bitmap;
    int total_blocks;
    int free_blocks;
};

int allocate_block_bitmap(struct bitmap_free_space *bfs) {
    for (int i = 0; i < bfs->total_blocks; i++) {
        int byte_index = i / 8;
        int bit_index = i % 8;
        
        if (!(bfs->bitmap[byte_index] & (1 << bit_index))) {
            // Block is free
            bfs->bitmap[byte_index] |= (1 << bit_index);
            bfs->free_blocks--;
            return i;
        }
    }
    return -1;  // No free blocks
}

void free_block_bitmap(struct bitmap_free_space *bfs, int block_number) {
    int byte_index = block_number / 8;
    int bit_index = block_number % 8;
    
    bfs->bitmap[byte_index] &= ~(1 << bit_index);
    bfs->free_blocks++;
}
```

### Linked List
```c
struct free_block_list {
    int next_free;
    int free_blocks_in_this_block[BLOCK_SIZE / sizeof(int) - 1];
};

int allocate_block_linked_list() {
    if (free_list_head == -1) {
        return -1;  // No free blocks
    }
    
    struct free_block_list *free_block = get_block(free_list_head);
    
    // Find a free block in the current list block
    for (int i = 0; i < (BLOCK_SIZE / sizeof(int) - 1); i++) {
        if (free_block->free_blocks_in_this_block[i] != 0) {
            int allocated_block = free_block->free_blocks_in_this_block[i];
            free_block->free_blocks_in_this_block[i] = 0;
            return allocated_block;
        }
    }
    
    // Move to next free list block
    int old_head = free_list_head;
    free_list_head = free_block->next_free;
    
    return old_head;  // Use the list block itself
}
```

### Grouping
```c
struct free_block_group {
    int count;
    int free_blocks[BLOCKS_PER_GROUP - 1];
    int next_group;
};

int allocate_block_grouping() {
    if (current_group == -1) {
        return -1;  // No free blocks
    }
    
    struct free_block_group *group = get_block(current_group);
    
    if (group->count > 0) {
        return group->free_blocks[--group->count];
    } else {
        // Move to next group
        int old_group = current_group;
        current_group = group->next_group;
        return old_group;
    }
}
```

### Counting
```c
struct free_space_entry {
    int first_block;
    int count;
};

struct counting_free_space {
    struct free_space_entry entries[MAX_FREE_ENTRIES];
    int num_entries;
};

int allocate_block_counting(struct counting_free_space *cfs) {
    for (int i = 0; i < cfs->num_entries; i++) {
        if (cfs->entries[i].count > 0) {
            int allocated_block = cfs->entries[i].first_block;
            cfs->entries[i].first_block++;
            cfs->entries[i].count--;
            
            if (cfs->entries[i].count == 0) {
                // Remove entry
                for (int j = i; j < cfs->num_entries - 1; j++) {
                    cfs->entries[j] = cfs->entries[j + 1];
                }
                cfs->num_entries--;
            }
            
            return allocated_block;
        }
    }
    return -1;  // No free blocks
}
```

## Directory Implementation

### Linear List
```c
struct linear_directory {
    struct directory_entry entries[MAX_ENTRIES];
    int count;
};

int find_file_linear(struct linear_directory *dir, const char *filename) {
    for (int i = 0; i < dir->count; i++) {
        if (strcmp(dir->entries[i].filename, filename) == 0) {
            return i;
        }
    }
    return -1;  // File not found
}

int add_file_linear(struct linear_directory *dir, const char *filename, int inode) {
    if (dir->count >= MAX_ENTRIES) {
        return -1;  // Directory full
    }
    
    strcpy(dir->entries[dir->count].filename, filename);
    dir->entries[dir->count].inode_number = inode;
    dir->count++;
    
    return 0;
}
```

### Hash Table
```c
#define HASH_TABLE_SIZE 101

struct hash_directory {
    struct directory_entry *hash_table[HASH_TABLE_SIZE];
    int total_entries;
};

unsigned int hash_function(const char *filename) {
    unsigned int hash = 0;
    while (*filename) {
        hash = hash * 31 + *filename++;
    }
    return hash % HASH_TABLE_SIZE;
}

int find_file_hash(struct hash_directory *dir, const char *filename) {
    unsigned int hash = hash_function(filename);
    struct directory_entry *entry = dir->hash_table[hash];
    
    while (entry) {
        if (strcmp(entry->filename, filename) == 0) {
            return entry->inode_number;
        }
        entry = entry->next;
    }
    
    return -1;  // File not found
}
```

## Efficiency and Performance

### Buffer Cache
```c
struct buffer_cache {
    struct buffer_head *hash_table[BUFFER_HASH_SIZE];
    struct buffer_head *lru_list;
    int cache_size;
    int hit_count;
    int miss_count;
};

struct buffer_head *find_buffer(int block_number) {
    unsigned int hash = block_number % BUFFER_HASH_SIZE;
    struct buffer_head *bh = buffer_cache.hash_table[hash];
    
    while (bh) {
        if (bh->block_number == block_number) {
            // Cache hit
            buffer_cache.hit_count++;
            move_to_front_lru(bh);
            return bh;
        }
        bh = bh->hash_next;
    }
    
    // Cache miss
    buffer_cache.miss_count++;
    return allocate_buffer(block_number);
}
```

### Read-Ahead
```c
void read_ahead(int current_block, int num_blocks) {
    for (int i = 1; i <= num_blocks; i++) {
        int next_block = current_block + i;
        
        // Check if block is already in cache
        if (!is_in_cache(next_block)) {
            // Asynchronously read the block
            async_read_block(next_block);
        }
    }
}
```

### Free-Behind
```c
void free_behind(int current_block, int window_size) {
    for (int i = 1; i <= window_size; i++) {
        int old_block = current_block - i;
        
        if (old_block >= 0) {
            struct buffer_head *bh = find_buffer_in_cache(old_block);
            if (bh && !bh->dirty) {
                // Free the buffer if it's not dirty
                free_buffer(bh);
            }
        }
    }
}
```

## Recovery

### Consistency Checking
```c
struct fsck_state {
    bool *block_bitmap;
    bool *inode_bitmap;
    int *inode_link_count;
    int total_blocks;
    int total_inodes;
};

int check_filesystem_consistency(struct fsck_state *fsck) {
    int errors = 0;
    
    // Phase 1: Check inode structure
    errors += check_inode_structure(fsck);
    
    // Phase 2: Check directory structure
    errors += check_directory_structure(fsck);
    
    // Phase 3: Check block allocation
    errors += check_block_allocation(fsck);
    
    // Phase 4: Check link counts
    errors += check_link_counts(fsck);
    
    // Phase 5: Check free block list
    errors += check_free_blocks(fsck);
    
    return errors;
}

int check_inode_structure(struct fsck_state *fsck) {
    int errors = 0;
    
    for (int i = 0; i < fsck->total_inodes; i++) {
        struct inode *inode = get_inode(i);
        
        if (inode->in_use) {
            // Check block pointers
            for (int j = 0; j < DIRECT_BLOCKS; j++) {
                if (inode->direct_blocks[j] != 0) {
                    if (inode->direct_blocks[j] >= fsck->total_blocks) {
                        printf("Inode %d: Invalid block pointer %d\n", 
                               i, inode->direct_blocks[j]);
                        errors++;
                    } else {
                        fsck->block_bitmap[inode->direct_blocks[j]] = true;
                    }
                }
            }
        }
    }
    
    return errors;
}
```

### Backup and Restore
```c
struct backup_header {
    int magic_number;
    int version;
    time_t backup_time;
    int total_files;
    int total_size;
};

int create_backup(const char *source_path, const char *backup_file) {
    FILE *backup = fopen(backup_file, "wb");
    if (!backup) {
        return -1;
    }
    
    struct backup_header header = {
        .magic_number = BACKUP_MAGIC,
        .version = BACKUP_VERSION,
        .backup_time = time(NULL),
        .total_files = 0,
        .total_size = 0
    };
    
    fwrite(&header, sizeof(header), 1, backup);
    
    // Recursively backup files
    backup_directory(source_path, backup, &header);
    
    // Update header
    fseek(backup, 0, SEEK_SET);
    fwrite(&header, sizeof(header), 1, backup);
    
    fclose(backup);
    return 0;
}

int restore_backup(const char *backup_file, const char *restore_path) {
    FILE *backup = fopen(backup_file, "rb");
    if (!backup) {
        return -1;
    }
    
    struct backup_header header;
    fread(&header, sizeof(header), 1, backup);
    
    if (header.magic_number != BACKUP_MAGIC) {
        fclose(backup);
        return -1;  // Invalid backup file
    }
    
    // Restore files
    for (int i = 0; i < header.total_files; i++) {
        restore_file_from_backup(backup, restore_path);
    }
    
    fclose(backup);
    return 0;
}
```

## Lab Exercises

### Exercise 1: Simple File System Implementation
```c
#define MAX_FILES 100
#define BLOCK_SIZE 512

struct simple_fs {
    struct superblock sb;
    struct inode inodes[MAX_FILES];
    unsigned char *data_blocks;
    unsigned char *free_bitmap;
};

int sfs_create(struct simple_fs *fs, const char *filename);
int sfs_open(struct simple_fs *fs, const char *filename);
int sfs_read(struct simple_fs *fs, int fd, void *buffer, int size);
int sfs_write(struct simple_fs *fs, int fd, const void *buffer, int size);
int sfs_close(struct simple_fs *fs, int fd);
```

### Exercise 2: Directory Operations
```c
struct directory_ops {
    int (*create_dir)(const char *path);
    int (*remove_dir)(const char *path);
    int (*list_dir)(const char *path, struct dirent **entries);
    int (*change_dir)(const char *path);
};

int implement_directory_operations(struct directory_ops *ops);
```

## Quiz Questions
1. Compare the advantages and disadvantages of contiguous, linked, and indexed file allocation
2. How does a bitmap differ from a linked list for free space management?
3. What are the trade-offs between linear and hash table directory implementations?
4. Explain how buffer caching improves file system performance
5. What steps are involved in file system consistency checking?

## Next Module
Module 11: Storage Management