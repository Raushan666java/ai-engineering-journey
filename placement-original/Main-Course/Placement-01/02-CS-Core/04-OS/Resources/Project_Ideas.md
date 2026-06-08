# Operating Systems Project Ideas

## Beginner Projects (Weeks 1-4)

### Project 1: System Monitor
**Objective**: Create a system monitoring tool
**Skills**: Process management, system calls, file I/O
**Duration**: 1 week

```c
// system_monitor.c
#include <stdio.h>
#include <unistd.h>
#include <sys/sysinfo.h>

struct system_stats {
    double cpu_usage;
    long memory_total;
    long memory_free;
    int process_count;
    double load_average[3];
};

void get_system_stats(struct system_stats *stats) {
    struct sysinfo info;
    sysinfo(&info);
    
    stats->memory_total = info.totalram;
    stats->memory_free = info.freeram;
    stats->process_count = info.procs;
    stats->load_average[0] = info.loads[0] / 65536.0;
    stats->load_average[1] = info.loads[1] / 65536.0;
    stats->load_average[2] = info.loads[2] / 65536.0;
}

void display_stats(struct system_stats *stats) {
    printf("=== System Monitor ===\n");
    printf("Memory: %ld MB total, %ld MB free\n", 
           stats->memory_total / (1024*1024),
           stats->memory_free / (1024*1024));
    printf("Processes: %d\n", stats->process_count);
    printf("Load Average: %.2f %.2f %.2f\n",
           stats->load_average[0],
           stats->load_average[1], 
           stats->load_average[2]);
}
```

**Features to Implement**:
- Real-time CPU usage monitoring
- Memory usage tracking
- Process list with details
- Network statistics
- Disk I/O monitoring
- Historical data logging

### Project 2: Simple Shell
**Objective**: Implement basic command-line shell
**Skills**: Process creation, I/O redirection, pipes
**Duration**: 2 weeks

```c
// simple_shell.c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>

#define MAX_CMD_LEN 1024
#define MAX_ARGS 64

struct command {
    char *args[MAX_ARGS];
    int argc;
    char *input_file;
    char *output_file;
    int background;
};

int parse_command(char *line, struct command *cmd) {
    char *token = strtok(line, " \t\n");
    cmd->argc = 0;
    
    while (token != NULL && cmd->argc < MAX_ARGS - 1) {
        if (strcmp(token, "<") == 0) {
            token = strtok(NULL, " \t\n");
            cmd->input_file = token;
        } else if (strcmp(token, ">") == 0) {
            token = strtok(NULL, " \t\n");
            cmd->output_file = token;
        } else if (strcmp(token, "&") == 0) {
            cmd->background = 1;
        } else {
            cmd->args[cmd->argc++] = token;
        }
        token = strtok(NULL, " \t\n");
    }
    
    cmd->args[cmd->argc] = NULL;
    return cmd->argc > 0;
}

int execute_command(struct command *cmd) {
    if (strcmp(cmd->args[0], "exit") == 0) {
        return 0;
    }
    
    if (strcmp(cmd->args[0], "cd") == 0) {
        if (cmd->argc > 1) {
            chdir(cmd->args[1]);
        }
        return 1;
    }
    
    pid_t pid = fork();
    if (pid == 0) {
        // Handle I/O redirection
        if (cmd->input_file) {
            freopen(cmd->input_file, "r", stdin);
        }
        if (cmd->output_file) {
            freopen(cmd->output_file, "w", stdout);
        }
        
        execvp(cmd->args[0], cmd->args);
        perror("execvp failed");
        exit(1);
    } else if (pid > 0) {
        if (!cmd->background) {
            wait(NULL);
        }
    }
    
    return 1;
}
```

**Advanced Features**:
- Command history
- Tab completion
- Job control (fg, bg, jobs)
- Pipe support
- Environment variable expansion
- Alias support

### Project 3: File System Browser
**Objective**: Create graphical file system explorer
**Skills**: File system operations, directory traversal
**Duration**: 1 week

```c
// file_browser.c
#include <stdio.h>
#include <dirent.h>
#include <sys/stat.h>
#include <time.h>

struct file_info {
    char name[256];
    off_t size;
    mode_t mode;
    time_t mtime;
    int is_directory;
};

void list_directory(const char *path) {
    DIR *dir = opendir(path);
    if (!dir) {
        perror("opendir");
        return;
    }
    
    struct dirent *entry;
    struct stat file_stat;
    char full_path[1024];
    
    printf("%-30s %10s %20s %s\n", "Name", "Size", "Modified", "Type");
    printf("%-30s %10s %20s %s\n", "----", "----", "--------", "----");
    
    while ((entry = readdir(dir)) != NULL) {
        snprintf(full_path, sizeof(full_path), "%s/%s", path, entry->d_name);
        
        if (stat(full_path, &file_stat) == 0) {
            char time_str[20];
            strftime(time_str, sizeof(time_str), "%Y-%m-%d %H:%M", 
                    localtime(&file_stat.st_mtime));
            
            printf("%-30s %10ld %20s %s\n",
                   entry->d_name,
                   file_stat.st_size,
                   time_str,
                   S_ISDIR(file_stat.st_mode) ? "DIR" : "FILE");
        }
    }
    
    closedir(dir);
}
```

## Intermediate Projects (Weeks 5-8)

### Project 4: Process Scheduler Simulator
**Objective**: Implement various CPU scheduling algorithms
**Skills**: Scheduling algorithms, performance analysis
**Duration**: 2 weeks

```c
// scheduler_simulator.c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef enum {
    FCFS, SJF, SRTF, PRIORITY, RR, MLFQ
} scheduling_algorithm;

struct process {
    int pid;
    int arrival_time;
    int burst_time;
    int remaining_time;
    int priority;
    int waiting_time;
    int turnaround_time;
    int response_time;
    int completion_time;
    int first_response;
};

struct scheduler_stats {
    double avg_waiting_time;
    double avg_turnaround_time;
    double avg_response_time;
    double cpu_utilization;
    double throughput;
};

void simulate_fcfs(struct process processes[], int n) {
    int current_time = 0;
    
    for (int i = 0; i < n; i++) {
        if (current_time < processes[i].arrival_time) {
            current_time = processes[i].arrival_time;
        }
        
        processes[i].response_time = current_time - processes[i].arrival_time;
        current_time += processes[i].burst_time;
        processes[i].completion_time = current_time;
        processes[i].turnaround_time = current_time - processes[i].arrival_time;
        processes[i].waiting_time = processes[i].turnaround_time - processes[i].burst_time;
    }
}

void simulate_round_robin(struct process processes[], int n, int quantum) {
    int current_time = 0;
    int completed = 0;
    int queue[n];
    int front = 0, rear = 0;
    
    // Initialize remaining times
    for (int i = 0; i < n; i++) {
        processes[i].remaining_time = processes[i].burst_time;
        processes[i].first_response = -1;
    }
    
    // Add first process to queue
    queue[rear++] = 0;
    
    while (completed < n) {
        if (front == rear) {
            current_time++;
            continue;
        }
        
        int current_process = queue[front++];
        struct process *proc = &processes[current_process];
        
        if (proc->first_response == -1) {
            proc->first_response = current_time;
            proc->response_time = current_time - proc->arrival_time;
        }
        
        int exec_time = (proc->remaining_time > quantum) ? quantum : proc->remaining_time;
        proc->remaining_time -= exec_time;
        current_time += exec_time;
        
        if (proc->remaining_time == 0) {
            completed++;
            proc->completion_time = current_time;
            proc->turnaround_time = current_time - proc->arrival_time;
            proc->waiting_time = proc->turnaround_time - proc->burst_time;
        } else {
            queue[rear++] = current_process;
        }
    }
}
```

### Project 5: Memory Management Simulator
**Objective**: Implement memory allocation algorithms
**Skills**: Memory management, fragmentation analysis
**Duration**: 2 weeks

```c
// memory_simulator.c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct memory_block {
    int start_address;
    int size;
    bool allocated;
    int process_id;
    struct memory_block *next;
};

struct memory_manager {
    struct memory_block *memory_list;
    int total_memory;
    int allocated_memory;
    int free_memory;
    int external_fragmentation;
};

struct memory_block* first_fit(struct memory_manager *mm, int size) {
    struct memory_block *current = mm->memory_list;
    
    while (current) {
        if (!current->allocated && current->size >= size) {
            return current;
        }
        current = current->next;
    }
    return NULL;
}

struct memory_block* best_fit(struct memory_manager *mm, int size) {
    struct memory_block *current = mm->memory_list;
    struct memory_block *best = NULL;
    int min_waste = INT_MAX;
    
    while (current) {
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

void compact_memory(struct memory_manager *mm) {
    struct memory_block *current = mm->memory_list;
    int new_address = 0;
    
    // Move all allocated blocks to beginning
    while (current) {
        if (current->allocated) {
            current->start_address = new_address;
            new_address += current->size;
        }
        current = current->next;
    }
    
    // Merge all free blocks at end
    merge_free_blocks(mm);
}
```

### Project 6: Synchronization Library
**Objective**: Implement synchronization primitives
**Skills**: Thread synchronization, concurrent programming
**Duration**: 2 weeks

```c
// sync_library.c
#include <pthread.h>
#include <semaphore.h>
#include <stdio.h>

// Reader-Writer Lock Implementation
struct rw_lock {
    pthread_mutex_t mutex;
    pthread_cond_t read_cond;
    pthread_cond_t write_cond;
    int readers;
    int writers;
    int waiting_writers;
};

void rw_lock_init(struct rw_lock *lock) {
    pthread_mutex_init(&lock->mutex, NULL);
    pthread_cond_init(&lock->read_cond, NULL);
    pthread_cond_init(&lock->write_cond, NULL);
    lock->readers = 0;
    lock->writers = 0;
    lock->waiting_writers = 0;
}

void rw_lock_read_lock(struct rw_lock *lock) {
    pthread_mutex_lock(&lock->mutex);
    
    while (lock->writers > 0 || lock->waiting_writers > 0) {
        pthread_cond_wait(&lock->read_cond, &lock->mutex);
    }
    
    lock->readers++;
    pthread_mutex_unlock(&lock->mutex);
}

void rw_lock_write_lock(struct rw_lock *lock) {
    pthread_mutex_lock(&lock->mutex);
    
    lock->waiting_writers++;
    while (lock->readers > 0 || lock->writers > 0) {
        pthread_cond_wait(&lock->write_cond, &lock->mutex);
    }
    
    lock->waiting_writers--;
    lock->writers++;
    pthread_mutex_unlock(&lock->mutex);
}

// Barrier Implementation
struct barrier {
    pthread_mutex_t mutex;
    pthread_cond_t cond;
    int count;
    int waiting;
};

void barrier_wait(struct barrier *barrier) {
    pthread_mutex_lock(&barrier->mutex);
    
    barrier->waiting++;
    if (barrier->waiting == barrier->count) {
        barrier->waiting = 0;
        pthread_cond_broadcast(&barrier->cond);
    } else {
        pthread_cond_wait(&barrier->cond, &barrier->mutex);
    }
    
    pthread_mutex_unlock(&barrier->mutex);
}
```

## Advanced Projects (Weeks 9-12)

### Project 7: Virtual Memory Manager
**Objective**: Implement virtual memory with paging
**Skills**: Virtual memory, page replacement algorithms
**Duration**: 3 weeks

```c
// vm_manager.c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define PAGE_SIZE 4096
#define NUM_FRAMES 256
#define NUM_PAGES 1024

struct page_table_entry {
    bool valid;
    bool dirty;
    bool referenced;
    int frame_number;
    int protection;
};

struct frame {
    bool allocated;
    int page_number;
    int process_id;
    int age;
};

struct vm_manager {
    struct page_table_entry page_table[NUM_PAGES];
    struct frame frame_table[NUM_FRAMES];
    int next_victim;
    int page_faults;
    int total_accesses;
};

int translate_address(struct vm_manager *vm, int virtual_address) {
    int page_number = virtual_address / PAGE_SIZE;
    int offset = virtual_address % PAGE_SIZE;
    
    vm->total_accesses++;
    
    if (!vm->page_table[page_number].valid) {
        // Page fault
        vm->page_faults++;
        int frame = allocate_frame(vm, page_number);
        if (frame == -1) {
            frame = replace_page(vm, page_number);
        }
        
        vm->page_table[page_number].valid = true;
        vm->page_table[page_number].frame_number = frame;
        vm->frame_table[frame].allocated = true;
        vm->frame_table[frame].page_number = page_number;
    }
    
    vm->page_table[page_number].referenced = true;
    return vm->page_table[page_number].frame_number * PAGE_SIZE + offset;
}

int lru_replace(struct vm_manager *vm, int new_page) {
    int oldest_frame = 0;
    int oldest_age = vm->frame_table[0].age;
    
    for (int i = 1; i < NUM_FRAMES; i++) {
        if (vm->frame_table[i].age < oldest_age) {
            oldest_age = vm->frame_table[i].age;
            oldest_frame = i;
        }
    }
    
    // Invalidate old page
    int old_page = vm->frame_table[oldest_frame].page_number;
    vm->page_table[old_page].valid = false;
    
    return oldest_frame;
}
```

### Project 8: File System Implementation
**Objective**: Create a simple file system
**Skills**: File system design, disk I/O, metadata management
**Duration**: 4 weeks

```c
// simple_filesystem.c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BLOCK_SIZE 4096
#define MAX_FILENAME 255
#define MAX_FILES 1000
#define DIRECT_BLOCKS 12

struct inode {
    int file_size;
    int block_count;
    int direct_blocks[DIRECT_BLOCKS];
    int indirect_block;
    int double_indirect_block;
    time_t created;
    time_t modified;
    mode_t permissions;
    int link_count;
};

struct directory_entry {
    char filename[MAX_FILENAME];
    int inode_number;
    int entry_length;
    char file_type;
};

struct superblock {
    int total_blocks;
    int free_blocks;
    int total_inodes;
    int free_inodes;
    int block_size;
    int inode_size;
    int first_data_block;
};

struct filesystem {
    struct superblock sb;
    unsigned char *block_bitmap;
    unsigned char *inode_bitmap;
    struct inode *inode_table;
    unsigned char *data_blocks;
};

int allocate_block(struct filesystem *fs) {
    for (int i = 0; i < fs->sb.total_blocks; i++) {
        if (!test_bit(fs->block_bitmap, i)) {
            set_bit(fs->block_bitmap, i);
            fs->sb.free_blocks--;
            return i;
        }
    }
    return -1; // No free blocks
}

int create_file(struct filesystem *fs, const char *filename, mode_t mode) {
    // Find free inode
    int inode_num = allocate_inode(fs);
    if (inode_num == -1) return -1;
    
    struct inode *inode = &fs->inode_table[inode_num];
    memset(inode, 0, sizeof(struct inode));
    
    inode->permissions = mode;
    inode->created = time(NULL);
    inode->modified = inode->created;
    inode->link_count = 1;
    
    // Add directory entry
    return add_directory_entry(fs, filename, inode_num);
}

int write_file(struct filesystem *fs, int inode_num, const void *data, 
               size_t size, off_t offset) {
    struct inode *inode = &fs->inode_table[inode_num];
    
    // Calculate required blocks
    int start_block = offset / BLOCK_SIZE;
    int end_block = (offset + size - 1) / BLOCK_SIZE;
    
    for (int block = start_block; block <= end_block; block++) {
        int physical_block = get_block_number(fs, inode, block);
        if (physical_block == -1) {
            physical_block = allocate_block(fs);
            if (physical_block == -1) return -1;
            set_block_number(fs, inode, block, physical_block);
        }
        
        // Write data to block
        size_t block_offset = (block == start_block) ? offset % BLOCK_SIZE : 0;
        size_t write_size = min(BLOCK_SIZE - block_offset, 
                               size - (block - start_block) * BLOCK_SIZE);
        
        memcpy(fs->data_blocks + physical_block * BLOCK_SIZE + block_offset,
               (char*)data + (block - start_block) * BLOCK_SIZE, write_size);
    }
    
    inode->file_size = max(inode->file_size, offset + size);
    inode->modified = time(NULL);
    
    return size;
}
```

## Expert Projects (Weeks 13-16)

### Project 9: Mini Operating System Kernel
**Objective**: Build complete OS kernel
**Skills**: All OS concepts integrated
**Duration**: 4 weeks

```c
// kernel.c - Main kernel file
#include "kernel.h"

void kernel_main() {
    // Initialize hardware
    init_gdt();
    init_idt();
    init_pic();
    init_timer();
    
    // Initialize memory management
    init_physical_memory();
    init_virtual_memory();
    init_heap();
    
    // Initialize process management
    init_process_manager();
    init_scheduler();
    
    // Initialize file system
    init_vfs();
    mount_root_filesystem();
    
    // Initialize device drivers
    init_keyboard_driver();
    init_display_driver();
    init_disk_driver();
    
    // Create init process
    create_init_process();
    
    // Enable interrupts and start scheduling
    enable_interrupts();
    
    // Kernel idle loop
    while (1) {
        halt_cpu();
    }
}

// Process management
struct process* create_process(const char *name, void (*entry_point)()) {
    struct process *proc = allocate_process();
    if (!proc) return NULL;
    
    proc->pid = next_pid++;
    strcpy(proc->name, name);
    proc->state = PROCESS_READY;
    proc->priority = DEFAULT_PRIORITY;
    
    // Allocate virtual address space
    proc->page_directory = create_page_directory();
    
    // Allocate kernel stack
    proc->kernel_stack = allocate_kernel_stack();
    
    // Setup initial context
    setup_process_context(proc, entry_point);
    
    // Add to scheduler
    add_to_ready_queue(proc);
    
    return proc;
}

// Memory management
void* kmalloc(size_t size) {
    return heap_allocate(size);
}

void kfree(void *ptr) {
    heap_free(ptr);
}

// System calls
int sys_open(const char *pathname, int flags) {
    return vfs_open(pathname, flags);
}

int sys_read(int fd, void *buf, size_t count) {
    return vfs_read(fd, buf, count);
}

int sys_write(int fd, const void *buf, size_t count) {
    return vfs_write(fd, buf, count);
}
```

### Project 10: Distributed Operating System
**Objective**: Implement distributed OS concepts
**Skills**: Distributed systems, networking, fault tolerance
**Duration**: 4 weeks

```c
// distributed_os.c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <netinet/in.h>

struct node {
    int node_id;
    char hostname[256];
    int port;
    int status; // ACTIVE, FAILED, RECOVERING
    struct sockaddr_in address;
};

struct distributed_system {
    struct node nodes[MAX_NODES];
    int num_nodes;
    int local_node_id;
    struct process_table *global_process_table;
    struct file_system *distributed_fs;
};

// Distributed process migration
int migrate_process(struct distributed_system *ds, int pid, int target_node) {
    struct process *proc = find_process(pid);
    if (!proc) return -1;
    
    // Serialize process state
    struct process_state state;
    serialize_process(proc, &state);
    
    // Send to target node
    int sock = connect_to_node(ds, target_node);
    if (sock < 0) return -1;
    
    send_message(sock, MSG_MIGRATE_PROCESS, &state, sizeof(state));
    
    // Wait for acknowledgment
    struct message ack;
    if (receive_message(sock, &ack) < 0) {
        close(sock);
        return -1;
    }
    
    if (ack.type == MSG_MIGRATE_ACK) {
        // Remove local process
        remove_process(pid);
        close(sock);
        return 0;
    }
    
    close(sock);
    return -1;
}

// Distributed file system
int dfs_open(struct distributed_system *ds, const char *filename, int flags) {
    // Find file location using distributed hash table
    int node_id = hash_filename(filename) % ds->num_nodes;
    
    if (node_id == ds->local_node_id) {
        return local_open(filename, flags);
    } else {
        return remote_open(ds, node_id, filename, flags);
    }
}

// Fault tolerance - leader election
int elect_leader(struct distributed_system *ds) {
    int highest_id = ds->local_node_id;
    
    // Send election message to higher-numbered nodes
    for (int i = 0; i < ds->num_nodes; i++) {
        if (ds->nodes[i].node_id > ds->local_node_id && 
            ds->nodes[i].status == NODE_ACTIVE) {
            send_election_message(ds, i);
        }
    }
    
    // Wait for responses
    if (wait_for_election_responses(ds) == 0) {
        // No higher-numbered nodes responded, become leader
        become_leader(ds);
        return ds->local_node_id;
    }
    
    // Wait for coordinator message
    return wait_for_coordinator(ds);
}
```

## Project Portfolio Development

### Documentation Requirements
Each project should include:

1. **README.md**
   - Project overview and objectives
   - Features implemented
   - Build and run instructions
   - Usage examples

2. **Design Document**
   - Architecture overview
   - Data structures used
   - Algorithm explanations
   - Design decisions and trade-offs

3. **Test Results**
   - Unit test coverage
   - Performance benchmarks
   - Stress test results
   - Bug reports and fixes

4. **Code Quality**
   - Consistent coding style
   - Comprehensive comments
   - Error handling
   - Memory leak detection

### Presentation Guidelines
- **Demo Video**: 5-10 minute demonstration
- **Technical Presentation**: 15-20 minute deep dive
- **Code Walkthrough**: Key implementation details
- **Q&A Session**: Handle technical questions

### Industry Relevance
- **Real-world Applications**: How project relates to industry
- **Scalability Considerations**: Production deployment challenges
- **Security Implications**: Potential vulnerabilities and mitigations
- **Performance Analysis**: Bottlenecks and optimization opportunities

This comprehensive project guide provides hands-on experience with all major operating system concepts, building from simple utilities to complete system implementations.