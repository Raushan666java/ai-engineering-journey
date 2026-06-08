# Module 9: Virtual Memory

## Virtual Memory Concepts

### What is Virtual Memory?
Virtual memory is a memory management technique that provides an abstraction of storage resources, allowing programs to use more memory than physically available.

### Benefits
- **Larger Address Space**: Programs can use more memory than RAM
- **Memory Protection**: Process isolation
- **Memory Sharing**: Efficient sharing between processes
- **Simplified Programming**: Contiguous virtual address space

## Demand Paging

### Basic Concept
```c
struct page_table_entry {
    unsigned int present : 1;      // Page in memory
    unsigned int writable : 1;     // Write permission
    unsigned int user : 1;         // User mode access
    unsigned int accessed : 1;     // Recently accessed
    unsigned int dirty : 1;        // Modified since loaded
    unsigned int frame : 20;       // Physical frame number
};

struct page_table {
    struct page_table_entry entries[1024];  // 4MB address space
    int process_id;
};
```

### Page Fault Handling
```c
void page_fault_handler(unsigned int virtual_address, int error_code) {
    unsigned int page_number = virtual_address >> 12;
    unsigned int offset = virtual_address & 0xFFF;
    
    struct page_table_entry *pte = &current_process->page_table.entries[page_number];
    
    if (!pte->present) {
        // Page not in memory - load from storage
        int frame = allocate_physical_frame();
        if (frame == -1) {
            frame = page_replacement_algorithm();
        }
        
        load_page_from_storage(page_number, frame);
        
        pte->present = 1;
        pte->frame = frame;
        pte->accessed = 1;
        
        update_tlb(page_number, frame);
    } else if ((error_code & PAGE_FAULT_WRITE) && !pte->writable) {
        // Protection violation
        send_signal(current_process, SIGSEGV);
    }
}

int allocate_physical_frame() {
    for (int i = 0; i < total_frames; i++) {
        if (!frame_table[i].allocated) {
            frame_table[i].allocated = 1;
            return i;
        }
    }
    return -1;  // No free frames
}
```

### Copy-on-Write (COW)
```c
struct cow_page {
    int reference_count;
    int physical_frame;
    bool is_cow;
};

void handle_cow_fault(unsigned int virtual_address) {
    unsigned int page_number = virtual_address >> 12;
    struct page_table_entry *pte = &current_process->page_table.entries[page_number];
    struct cow_page *cow = &cow_pages[pte->frame];
    
    if (cow->reference_count > 1) {
        // Make private copy
        int new_frame = allocate_physical_frame();
        copy_page_content(cow->physical_frame, new_frame);
        
        cow->reference_count--;
        
        // Update page table
        pte->frame = new_frame;
        pte->writable = 1;
        
        // Create new COW entry
        cow_pages[new_frame].reference_count = 1;
        cow_pages[new_frame].physical_frame = new_frame;
        cow_pages[new_frame].is_cow = false;
    } else {
        // Last reference - just make writable
        pte->writable = 1;
        cow->is_cow = false;
    }
}

int fork_with_cow() {
    int child_pid = create_new_process();
    struct process *child = get_process(child_pid);
    
    // Copy page table
    for (int i = 0; i < 1024; i++) {
        if (current_process->page_table.entries[i].present) {
            child->page_table.entries[i] = current_process->page_table.entries[i];
            
            // Mark both as read-only for COW
            current_process->page_table.entries[i].writable = 0;
            child->page_table.entries[i].writable = 0;
            
            // Increment reference count
            int frame = current_process->page_table.entries[i].frame;
            cow_pages[frame].reference_count++;
            cow_pages[frame].is_cow = true;
        }
    }
    
    return child_pid;
}
```

## Page Replacement Algorithms

### FIFO (First-In-First-Out)
```c
struct fifo_frame_info {
    int page_number;
    int load_time;
};

int fifo_replace() {
    int oldest_frame = 0;
    int oldest_time = fifo_frames[0].load_time;
    
    for (int i = 1; i < num_frames; i++) {
        if (fifo_frames[i].load_time < oldest_time) {
            oldest_time = fifo_frames[i].load_time;
            oldest_frame = i;
        }
    }
    
    return oldest_frame;
}
```

### LRU (Least Recently Used)
```c
struct lru_frame_info {
    int page_number;
    int last_access_time;
};

int lru_replace() {
    int lru_frame = 0;
    int lru_time = lru_frames[0].last_access_time;
    
    for (int i = 1; i < num_frames; i++) {
        if (lru_frames[i].last_access_time < lru_time) {
            lru_time = lru_frames[i].last_access_time;
            lru_frame = i;
        }
    }
    
    return lru_frame;
}

void update_lru_on_access(int frame) {
    lru_frames[frame].last_access_time = get_current_time();
}
```

### Clock Algorithm (Second Chance)
```c
struct clock_frame_info {
    int page_number;
    int reference_bit;
};

int clock_hand = 0;

int clock_replace() {
    while (1) {
        if (clock_frames[clock_hand].reference_bit == 0) {
            // Found victim
            int victim = clock_hand;
            clock_hand = (clock_hand + 1) % num_frames;
            return victim;
        } else {
            // Give second chance
            clock_frames[clock_hand].reference_bit = 0;
            clock_hand = (clock_hand + 1) % num_frames;
        }
    }
}

void set_reference_bit(int frame) {
    clock_frames[frame].reference_bit = 1;
}
```

### Enhanced Second Chance
```c
struct enhanced_clock_frame {
    int page_number;
    int reference_bit;
    int modify_bit;
};

int enhanced_clock_replace() {
    int start_hand = clock_hand;
    
    // Class 0: (0,0) - not recently used, not modified
    do {
        if (!enhanced_frames[clock_hand].reference_bit && 
            !enhanced_frames[clock_hand].modify_bit) {
            int victim = clock_hand;
            clock_hand = (clock_hand + 1) % num_frames;
            return victim;
        }
        clock_hand = (clock_hand + 1) % num_frames;
    } while (clock_hand != start_hand);
    
    // Class 1: (0,1) - not recently used, modified
    do {
        if (!enhanced_frames[clock_hand].reference_bit && 
            enhanced_frames[clock_hand].modify_bit) {
            int victim = clock_hand;
            clock_hand = (clock_hand + 1) % num_frames;
            return victim;
        }
        enhanced_frames[clock_hand].reference_bit = 0;  // Clear reference bit
        clock_hand = (clock_hand + 1) % num_frames;
    } while (clock_hand != start_hand);
    
    // Repeat for classes 2 and 3...
    return clock_replace();  // Fallback to simple clock
}
```

### LFU (Least Frequently Used)
```c
struct lfu_frame_info {
    int page_number;
    int frequency_count;
    int last_access_time;
};

int lfu_replace() {
    int lfu_frame = 0;
    int min_frequency = lfu_frames[0].frequency_count;
    int oldest_time = lfu_frames[0].last_access_time;
    
    for (int i = 1; i < num_frames; i++) {
        if (lfu_frames[i].frequency_count < min_frequency ||
            (lfu_frames[i].frequency_count == min_frequency && 
             lfu_frames[i].last_access_time < oldest_time)) {
            min_frequency = lfu_frames[i].frequency_count;
            oldest_time = lfu_frames[i].last_access_time;
            lfu_frame = i;
        }
    }
    
    return lfu_frame;
}

void update_lfu_on_access(int frame) {
    lfu_frames[frame].frequency_count++;
    lfu_frames[frame].last_access_time = get_current_time();
}
```

## Allocation of Frames

### Equal Allocation
```c
void equal_allocation(int total_frames, int num_processes) {
    int frames_per_process = total_frames / num_processes;
    int remaining_frames = total_frames % num_processes;
    
    for (int i = 0; i < num_processes; i++) {
        processes[i].allocated_frames = frames_per_process;
        if (i < remaining_frames) {
            processes[i].allocated_frames++;
        }
    }
}
```

### Proportional Allocation
```c
void proportional_allocation(int total_frames) {
    int total_size = 0;
    
    // Calculate total size of all processes
    for (int i = 0; i < num_processes; i++) {
        total_size += processes[i].size;
    }
    
    // Allocate frames proportionally
    for (int i = 0; i < num_processes; i++) {
        processes[i].allocated_frames = 
            (processes[i].size * total_frames) / total_size;
        
        // Ensure minimum allocation
        if (processes[i].allocated_frames < MIN_FRAMES) {
            processes[i].allocated_frames = MIN_FRAMES;
        }
    }
}
```

### Priority Allocation
```c
void priority_allocation(int total_frames) {
    int total_priority = 0;
    
    // Calculate total priority
    for (int i = 0; i < num_processes; i++) {
        total_priority += processes[i].priority;
    }
    
    // Allocate frames based on priority
    for (int i = 0; i < num_processes; i++) {
        processes[i].allocated_frames = 
            (processes[i].priority * total_frames) / total_priority;
        
        if (processes[i].allocated_frames < MIN_FRAMES) {
            processes[i].allocated_frames = MIN_FRAMES;
        }
    }
}
```

## Thrashing

### Working Set Model
```c
struct working_set {
    int pages[MAX_WORKING_SET_SIZE];
    int size;
    int window_size;
    int current_time;
};

void update_working_set(struct working_set *ws, int page_number) {
    // Add page to working set if not already present
    bool found = false;
    for (int i = 0; i < ws->size; i++) {
        if (ws->pages[i] == page_number) {
            found = true;
            break;
        }
    }
    
    if (!found && ws->size < MAX_WORKING_SET_SIZE) {
        ws->pages[ws->size++] = page_number;
    }
    
    // Remove pages outside window
    remove_old_pages(ws);
}

bool is_thrashing() {
    double page_fault_rate = get_page_fault_rate();
    double cpu_utilization = get_cpu_utilization();
    
    return (page_fault_rate > THRASHING_THRESHOLD && 
            cpu_utilization < LOW_CPU_THRESHOLD);
}

void handle_thrashing() {
    if (is_thrashing()) {
        // Suspend some processes
        suspend_lowest_priority_process();
        
        // Increase frame allocation for remaining processes
        redistribute_frames();
    }
}
```

### Page Fault Frequency (PFF)
```c
struct pff_info {
    int page_faults;
    int time_interval;
    double fault_rate;
    int allocated_frames;
};

void pff_algorithm(struct process *p) {
    double current_pff = calculate_pff(p);
    
    if (current_pff > UPPER_THRESHOLD) {
        // Increase frame allocation
        if (free_frames_available()) {
            allocate_more_frames(p);
        } else {
            suspend_process(p);
        }
    } else if (current_pff < LOWER_THRESHOLD) {
        // Decrease frame allocation
        deallocate_frames(p);
    }
}

double calculate_pff(struct process *p) {
    return (double)p->pff_info.page_faults / p->pff_info.time_interval;
}
```

## Memory-Mapped Files

### Memory Mapping Implementation
```c
struct memory_mapping {
    void *virtual_address;
    size_t length;
    int protection;
    int flags;
    int file_descriptor;
    off_t offset;
    struct file *file;
};

void* mmap_implementation(void *addr, size_t length, int prot, int flags, 
                         int fd, off_t offset) {
    // Validate parameters
    if (length == 0 || (offset % PAGE_SIZE) != 0) {
        return MAP_FAILED;
    }
    
    // Find virtual address space
    void *virtual_addr = find_virtual_address_space(addr, length);
    if (!virtual_addr) {
        return MAP_FAILED;
    }
    
    // Create memory mapping
    struct memory_mapping *mapping = create_mapping(virtual_addr, length, 
                                                   prot, flags, fd, offset);
    
    // Set up page table entries (lazy allocation)
    setup_page_table_entries(mapping);
    
    return virtual_addr;
}

void handle_mmap_page_fault(unsigned int virtual_address) {
    struct memory_mapping *mapping = find_mapping(virtual_address);
    if (!mapping) {
        send_signal(current_process, SIGSEGV);
        return;
    }
    
    // Calculate file offset
    off_t file_offset = mapping->offset + 
                       (virtual_address - (unsigned int)mapping->virtual_address);
    
    // Allocate physical frame
    int frame = allocate_physical_frame();
    if (frame == -1) {
        frame = page_replacement_algorithm();
    }
    
    // Load page from file
    load_page_from_file(mapping->file, file_offset, frame);
    
    // Update page table
    unsigned int page_number = virtual_address >> 12;
    struct page_table_entry *pte = &current_process->page_table.entries[page_number];
    pte->present = 1;
    pte->frame = frame;
    pte->writable = (mapping->protection & PROT_WRITE) ? 1 : 0;
}
```

## Kernel Memory Management

### Slab Allocator
```c
struct slab {
    struct list_head list;
    void *s_mem;
    unsigned int inuse;
    unsigned int free;
    unsigned short *freelist;
};

struct kmem_cache {
    struct list_head slabs_partial;
    struct list_head slabs_full;
    struct list_head slabs_free;
    unsigned int objsize;
    unsigned int num;
    unsigned int gfporder;
    const char *name;
};

void* kmem_cache_alloc(struct kmem_cache *cachep) {
    struct slab *slabp;
    void *objp;
    
    // Try partial slabs first
    if (!list_empty(&cachep->slabs_partial)) {
        slabp = list_entry(cachep->slabs_partial.next, struct slab, list);
    } else if (!list_empty(&cachep->slabs_free)) {
        slabp = list_entry(cachep->slabs_free.next, struct slab, list);
        list_del(&slabp->list);
        list_add(&slabp->list, &cachep->slabs_partial);
    } else {
        // Allocate new slab
        slabp = cache_grow(cachep);
        if (!slabp) {
            return NULL;
        }
    }
    
    // Get object from slab
    objp = slab_get_obj(slabp);
    slabp->inuse++;
    
    // Move slab to appropriate list
    if (slabp->inuse == cachep->num) {
        list_del(&slabp->list);
        list_add(&slabp->list, &cachep->slabs_full);
    }
    
    return objp;
}
```

## Lab Exercises

### Exercise 1: Page Replacement Simulator
```c
struct page_replacement_simulator {
    int frames[MAX_FRAMES];
    int num_frames;
    int page_faults;
    int total_references;
    enum replacement_algorithm algorithm;
};

int simulate_page_replacement(int pages[], int num_pages, int num_frames, 
                             enum replacement_algorithm alg);
void compare_algorithms(int pages[], int num_pages, int num_frames);
```

### Exercise 2: Working Set Implementation
```c
struct working_set_monitor {
    int working_set[MAX_PAGES];
    int ws_size;
    int window_size;
    int reference_times[MAX_PAGES];
};

void update_working_set(struct working_set_monitor *wsm, int page, int time);
int calculate_working_set_size(struct working_set_monitor *wsm, int current_time);
```

## Quiz Questions
1. What is the difference between paging and segmentation?
2. How does copy-on-write improve fork() performance?
3. Explain the working set model and its relationship to thrashing
4. Compare the performance characteristics of different page replacement algorithms
5. How do memory-mapped files improve I/O performance?

## Next Module
Module 10: File Systems