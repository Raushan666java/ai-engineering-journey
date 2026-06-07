# Module 8: Memory Management

## Memory Management Fundamentals

### What is Memory Management?
The process of controlling and coordinating computer memory, assigning portions called blocks to various running programs to optimize overall system performance.

### Memory Hierarchy
```
CPU Registers (fastest, smallest)
↓
Cache Memory (L1, L2, L3)
↓
Main Memory (RAM)
↓
Secondary Storage (SSD, HDD)
↓
Tertiary Storage (slowest, largest)
```

### Memory Management Goals
1. **Allocation**: Efficiently allocate memory to processes
2. **Protection**: Prevent processes from accessing unauthorized memory
3. **Sharing**: Allow controlled sharing of memory between processes
4. **Virtualization**: Provide illusion of large, private address space

## Address Binding

### Types of Address Binding
1. **Compile Time**: Absolute addresses generated at compile time
2. **Load Time**: Relocatable addresses resolved when program loaded
3. **Execution Time**: Address binding delayed until runtime

### Address Types
```c
// Logical Address (Virtual Address)
int *ptr = malloc(sizeof(int));  // Returns logical address

// Physical Address
// Actual location in RAM, managed by MMU (Memory Management Unit)

// Relative Address
// Offset from base address of program
```

### Address Translation
```
Logical Address → MMU → Physical Address

CPU generates logical address
MMU translates to physical address
Memory accessed using physical address
```

## Memory Allocation Strategies

### 1. Contiguous Memory Allocation

#### Fixed Partitioning
```c
struct partition {
    int partition_id;
    int size;
    bool allocated;
    struct process *assigned_process;
};

struct partition partitions[] = {
    {1, 100, false, NULL},  // 100KB partition
    {2, 200, false, NULL},  // 200KB partition
    {3, 300, false, NULL},  // 300KB partition
    {4, 400, false, NULL}   // 400KB partition
};

bool allocate_fixed_partition(struct process *proc) {
    for (int i = 0; i < 4; i++) {
        if (!partitions[i].allocated && partitions[i].size >= proc->memory_required) {
            partitions[i].allocated = true;
            partitions[i].assigned_process = proc;
            proc->base_address = get_partition_base_address(i);
            return true;
        }
    }
    return false;  // No suitable partition found
}
```

#### Dynamic Partitioning
```c
struct memory_block {
    int start_address;
    int size;
    bool allocated;
    struct process *process;
    struct memory_block *next;
};

struct memory_block *memory_list = NULL;

// First Fit Algorithm
struct memory_block* first_fit(int size) {
    struct memory_block *current = memory_list;
    
    while (current != NULL) {
        if (!current->allocated && current->size >= size) {
            return current;
        }
        current = current->next;
    }
    return NULL;
}

// Best Fit Algorithm
struct memory_block* best_fit(int size) {
    struct memory_block *current = memory_list;
    struct memory_block *best = NULL;
    int min_waste = INT_MAX;
    
    while (current != NULL) {
        if (!current->allocated && current->size >= size) {
            int waste = current->size - size;
            if (waste < min_waste) {
                min_waste = waste;
                best = current;
            }
        }
        current = current->next;
    }
    return best;
}

// Worst Fit Algorithm
struct memory_block* worst_fit(int size) {
    struct memory_block *current = memory_list;
    struct memory_block *worst = NULL;
    int max_waste = -1;
    
    while (current != NULL) {
        if (!current->allocated && current->size >= size) {
            int waste = current->size - size;
            if (waste > max_waste) {
                max_waste = waste;
                worst = current;
            }
        }
        current = current->next;
    }
    return worst;
}
```

### 2. Non-Contiguous Memory Allocation

#### Paging System
```c
#define PAGE_SIZE 4096  // 4KB pages
#define PAGE_TABLE_SIZE 1024

struct page_table_entry {
    unsigned int frame_number : 20;  // Physical frame number
    unsigned int valid : 1;          // Valid bit
    unsigned int dirty : 1;          // Modified bit
    unsigned int referenced : 1;     // Referenced bit
    unsigned int protection : 3;     // Read/Write/Execute permissions
    unsigned int reserved : 6;       // Reserved bits
};

struct page_table {
    struct page_table_entry entries[PAGE_TABLE_SIZE];
    int process_id;
};

// Address translation in paging
unsigned int translate_address(unsigned int logical_address, struct page_table *pt) {
    unsigned int page_number = logical_address / PAGE_SIZE;
    unsigned int offset = logical_address % PAGE_SIZE;
    
    if (page_number >= PAGE_TABLE_SIZE || !pt->entries[page_number].valid) {
        // Page fault
        handle_page_fault(page_number);
        return 0;
    }
    
    unsigned int frame_number = pt->entries[page_number].frame_number;
    unsigned int physical_address = frame_number * PAGE_SIZE + offset;
    
    return physical_address;
}
```

#### Segmentation System
```c
struct segment_table_entry {
    unsigned int base_address;    // Starting physical address
    unsigned int limit;          // Segment size
    unsigned int protection;     // Access permissions
    bool valid;                 // Valid bit
};

struct segment_table {
    struct segment_table_entry segments[16];  // Max 16 segments
    int num_segments;
};

// Address translation in segmentation
unsigned int translate_segment_address(unsigned int logical_address, 
                                     struct segment_table *st) {
    unsigned int segment_number = (logical_address >> 16) & 0xF;  // Top 4 bits
    unsigned int offset = logical_address & 0xFFFF;               // Bottom 16 bits
    
    if (segment_number >= st->num_segments || !st->segments[segment_number].valid) {
        // Segmentation fault
        handle_segmentation_fault(segment_number);
        return 0;
    }
    
    if (offset >= st->segments[segment_number].limit) {
        // Segment limit exceeded
        handle_segment_limit_exceeded(segment_number, offset);
        return 0;
    }
    
    return st->segments[segment_number].base_address + offset;
}
```

## Memory Protection

### Hardware Protection Mechanisms
```c
struct memory_protection {
    unsigned int base_register;    // Lower bound
    unsigned int limit_register;   // Upper bound
    unsigned int protection_bits;  // Read/Write/Execute permissions
};

bool check_memory_access(unsigned int address, int access_type, 
                        struct memory_protection *protection) {
    // Check bounds
    if (address < protection->base_register || 
        address >= protection->base_register + protection->limit_register) {
        return false;  // Address out of bounds
    }
    
    // Check permissions
    if ((access_type & protection->protection_bits) == 0) {
        return false;  // Access not permitted
    }
    
    return true;  // Access allowed
}
```

### Memory Protection in Paging
```c
#define READ_PERMISSION    0x1
#define WRITE_PERMISSION   0x2
#define EXECUTE_PERMISSION 0x4

bool check_page_access(unsigned int page_number, int access_type, 
                      struct page_table *pt) {
    if (page_number >= PAGE_TABLE_SIZE || !pt->entries[page_number].valid) {
        return false;
    }
    
    unsigned int page_protection = pt->entries[page_number].protection;
    return (access_type & page_protection) != 0;
}
```

## Fragmentation

### Internal Fragmentation
Memory wasted within allocated partitions

```c
// Example: Process needs 18KB, allocated 20KB partition
int allocated_size = 20 * 1024;    // 20KB
int required_size = 18 * 1024;     // 18KB
int internal_fragmentation = allocated_size - required_size;  // 2KB wasted
```

### External Fragmentation
Free memory scattered in small, non-contiguous blocks

```c
// Memory state: [Allocated 50KB][Free 30KB][Allocated 40KB][Free 25KB]
// Total free: 55KB, but largest contiguous block: 30KB
// Cannot allocate 35KB process despite having enough total free memory

int calculate_external_fragmentation() {
    int total_free = 0;
    int largest_free_block = 0;
    
    struct memory_block *current = memory_list;
    while (current != NULL) {
        if (!current->allocated) {
            total_free += current->size;
            if (current->size > largest_free_block) {
                largest_free_block = current->size;
            }
        }
        current = current->next;
    }
    
    return total_free - largest_free_block;
}
```

### Compaction
```c
void compact_memory() {
    struct memory_block *write_ptr = memory_list;
    struct memory_block *read_ptr = memory_list;
    
    // Move all allocated blocks to beginning
    while (read_ptr != NULL) {
        if (read_ptr->allocated) {
            if (write_ptr != read_ptr) {
                // Move memory content
                memmove((void*)write_ptr->start_address, 
                       (void*)read_ptr->start_address, 
                       read_ptr->size);
                
                // Update process base address
                read_ptr->process->base_address = write_ptr->start_address;
                
                // Update block information
                write_ptr->allocated = true;
                write_ptr->process = read_ptr->process;
                write_ptr->size = read_ptr->size;
            }
            write_ptr = get_next_block(write_ptr);
        }
        read_ptr = read_ptr->next;
    }
    
    // Create single large free block at end
    create_free_block(write_ptr, calculate_remaining_memory(write_ptr));
}
```

## Memory Allocation Algorithms Implementation

### Buddy System
```c
#define MAX_ORDER 10  // 2^10 = 1024 blocks

struct buddy_block {
    int order;              // Block size = 2^order
    bool allocated;
    struct buddy_block *buddy;  // Pointer to buddy block
    struct buddy_block *next;   // Free list pointer
};

struct buddy_system {
    struct buddy_block *free_lists[MAX_ORDER + 1];
    unsigned char *memory_pool;
    int total_size;
};

void* buddy_allocate(struct buddy_system *bs, int size) {
    int order = calculate_order(size);
    
    // Find smallest available block
    int current_order = order;
    while (current_order <= MAX_ORDER && bs->free_lists[current_order] == NULL) {
        current_order++;
    }
    
    if (current_order > MAX_ORDER) {
        return NULL;  // No memory available
    }
    
    // Remove block from free list
    struct buddy_block *block = bs->free_lists[current_order];
    bs->free_lists[current_order] = block->next;
    
    // Split block if necessary
    while (current_order > order) {
        current_order--;
        struct buddy_block *buddy = split_block(block, current_order);
        add_to_free_list(bs, buddy, current_order);
    }
    
    block->allocated = true;
    return get_block_address(block);
}

void buddy_deallocate(struct buddy_system *bs, void *ptr) {
    struct buddy_block *block = get_block_from_address(ptr);
    block->allocated = false;
    
    // Try to merge with buddy
    while (block->order < MAX_ORDER) {
        struct buddy_block *buddy = block->buddy;
        
        if (buddy->allocated || buddy->order != block->order) {
            break;  // Cannot merge
        }
        
        // Remove buddy from free list
        remove_from_free_list(bs, buddy, buddy->order);
        
        // Merge blocks
        block = merge_blocks(block, buddy);
    }
    
    // Add merged block to appropriate free list
    add_to_free_list(bs, block, block->order);
}
```

### Slab Allocator
```c
struct slab {
    void *memory;
    int object_size;
    int objects_per_slab;
    int free_objects;
    unsigned char *free_bitmap;
    struct slab *next;
};

struct slab_cache {
    char name[32];
    int object_size;
    struct slab *full_slabs;
    struct slab *partial_slabs;
    struct slab *empty_slabs;
    void (*constructor)(void *obj);
    void (*destructor)(void *obj);
};

void* slab_allocate(struct slab_cache *cache) {
    struct slab *slab = cache->partial_slabs;
    
    if (slab == NULL) {
        // No partial slabs, try empty slabs
        if (cache->empty_slabs != NULL) {
            slab = cache->empty_slabs;
            cache->empty_slabs = slab->next;
            slab->next = cache->partial_slabs;
            cache->partial_slabs = slab;
        } else {
            // Allocate new slab
            slab = create_new_slab(cache);
            if (slab == NULL) return NULL;
        }
    }
    
    // Find free object in slab
    int object_index = find_free_object(slab);
    void *object = (char*)slab->memory + object_index * slab->object_size;
    
    // Mark object as allocated
    set_bit(slab->free_bitmap, object_index);
    slab->free_objects--;
    
    // Move slab to full list if necessary
    if (slab->free_objects == 0) {
        remove_from_list(&cache->partial_slabs, slab);
        add_to_list(&cache->full_slabs, slab);
    }
    
    // Call constructor if defined
    if (cache->constructor) {
        cache->constructor(object);
    }
    
    return object;
}
```

## Memory Management Unit (MMU)

### Translation Lookaside Buffer (TLB)
```c
#define TLB_SIZE 64

struct tlb_entry {
    unsigned int virtual_page;
    unsigned int physical_frame;
    bool valid;
    bool dirty;
    unsigned int access_rights;
    int age;  // For LRU replacement
};

struct tlb {
    struct tlb_entry entries[TLB_SIZE];
    int next_victim;  // For round-robin replacement
};

unsigned int tlb_lookup(struct tlb *tlb, unsigned int virtual_page) {
    for (int i = 0; i < TLB_SIZE; i++) {
        if (tlb->entries[i].valid && tlb->entries[i].virtual_page == virtual_page) {
            // TLB hit
            tlb->entries[i].age = get_current_time();  // Update for LRU
            return tlb->entries[i].physical_frame;
        }
    }
    
    // TLB miss
    return TLB_MISS;
}

void tlb_insert(struct tlb *tlb, unsigned int virtual_page, 
                unsigned int physical_frame) {
    int victim = tlb->next_victim;
    
    tlb->entries[victim].virtual_page = virtual_page;
    tlb->entries[victim].physical_frame = physical_frame;
    tlb->entries[victim].valid = true;
    tlb->entries[victim].age = get_current_time();
    
    tlb->next_victim = (tlb->next_victim + 1) % TLB_SIZE;
}
```

## Practical Implementation

### Complete Memory Manager
```c
struct memory_manager {
    struct buddy_system *buddy_allocator;
    struct slab_cache *slab_caches[10];
    struct page_table *page_tables[MAX_PROCESSES];
    struct tlb *tlb;
    unsigned char *physical_memory;
    int total_memory_size;
    int free_memory;
};

void* mm_allocate(struct memory_manager *mm, int size, int process_id) {
    if (size <= 0) return NULL;
    
    void *virtual_address;
    
    if (size < 4096) {
        // Use slab allocator for small objects
        struct slab_cache *cache = find_appropriate_cache(mm, size);
        virtual_address = slab_allocate(cache);
    } else {
        // Use buddy system for large allocations
        virtual_address = buddy_allocate(mm->buddy_allocator, size);
    }
    
    if (virtual_address != NULL) {
        // Update page tables
        map_virtual_to_physical(mm->page_tables[process_id], 
                               virtual_address, size);
        mm->free_memory -= size;
    }
    
    return virtual_address;
}

void mm_deallocate(struct memory_manager *mm, void *ptr, int process_id) {
    if (ptr == NULL) return;
    
    int size = get_allocation_size(ptr);
    
    if (size < 4096) {
        struct slab_cache *cache = find_cache_for_object(mm, ptr);
        slab_deallocate(cache, ptr);
    } else {
        buddy_deallocate(mm->buddy_allocator, ptr);
    }
    
    // Update page tables
    unmap_virtual_address(mm->page_tables[process_id], ptr, size);
    mm->free_memory += size;
}
```

## Lab Assignment
1. **Memory Allocator**: Implement first-fit, best-fit, worst-fit algorithms
2. **Buddy System**: Create buddy system allocator with splitting and coalescing
3. **Page Table Simulator**: Simulate address translation with paging
4. **Memory Compaction**: Implement memory compaction algorithm

## Quiz Questions
1. What is the difference between logical and physical addresses?
2. Compare internal and external fragmentation
3. How does the buddy system minimize external fragmentation?
4. What is the purpose of the Translation Lookaside Buffer (TLB)?
5. Compare paging and segmentation memory management schemes

## Next Module
Module 9: Virtual Memory Management